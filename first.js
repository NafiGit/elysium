const fs = require('fs');
const readline = require('readline');

async function processLogFile(filename) {
    const fileStream = fs.createReadStream(filename);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const customerData = new Map();

    for await (const line of rl) {
        const [timestamp, pageId, customerId] = line.split(',');
        if (!customerData.has(customerId)) {
            customerData.set(customerId, new Set());
        }
        customerData.get(customerId).add(pageId);
    }

    return customerData;
}

async function findLoyalCustomers(logFile1, logFile2) {
    const day1Data = await processLogFile(logFile1);
    const day2Data = await processLogFile(logFile2);

    const loyalCustomers = new Set();

    for (const [customerId, pages] of day1Data) {
        if (day2Data.has(customerId) && 
            (pages.size + day2Data.get(customerId).size >= 2)) {
            loyalCustomers.add(customerId);
        }
    }

    return Array.from(loyalCustomers);
}

// Usage
const logFile1 = 'day1.log';
const logFile2 = 'day2.log';

findLoyalCustomers(logFile1, logFile2)
    .then(loyalCustomers => {
        console.log('Loyal Customers:', loyalCustomers);
    })
    .catch(error => {
        console.error('Error:', error);
    });