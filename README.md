# Loyal Customers Identification

## Problem Statement

We have a website that tracks page views for business metrics. Every time a customer visits the website, a record is written to a log file with the following format:

```
Timestamp, PageId, CustomerId
```

At the end of each day, we have a big log file with many entries in this format, and we generate a new file for each day.

Given two log files (from day 1 and day 2), we want to generate a list of 'loyal customers' that meet the following criteria:

1. They visited the website on both days
2. They visited at least two unique pages across both days

## How to Use

### Prerequisites

- Node.js installed on your system

### Steps

1. Clone this repository or download the files:

   - `first.js` (the main script)
   - `day1.log` (sample log file for day 1)
   - `day2.log` (sample log file for day 2)

2. Open a terminal and navigate to the directory containing the files.

3. Run the script using Node.js:

   ```
   node first.js
   ```

4. The script will process the log files and output a list of loyal customer IDs to the console.

## Sample Data

Sample log files (`day1.log` and `day2.log`) are provided in the repository. These files contain example data to demonstrate how the script works.

You can also download the sample data from the following link:
https://mega.nz/folder/avJEXZiK#qnSDOdUteRBjLPl7yR-dVw

### Log File Format

Each line in the log file represents a single page view and follows this format:

```
YYYY-MM-DD HH:MM:SS,/page-url,userXXX
```

For example:

```
2024-09-04 10:15:23,/home,user001
```

## Expected Output

The script will output a list of customer IDs that meet the criteria for loyal customers. These are customers who visited the website on both days and viewed at least two unique pages across both days.
