const solanaWeb3 = require('@solana/web3.js');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get user input
function getUserInput() {
    return new Promise((resolve) => {
        rl.question('Enter desired address prefix (or press Enter to skip): ', (prefix) => {
            rl.question('Enter desired address suffix (or press Enter to skip): ', (suffix) => {
                resolve({ prefix: prefix.trim(), suffix: suffix.trim() });
            });
        });
    });
}

// Main address generation function
async function generateVanityAddress(targetPrefix, targetSuffix) {
    console.log('Starting address search...');
    let attempts = 0;
    let found = false;

    while (!found) {
        attempts++;
        const keypair = solanaWeb3.Keypair.generate();
        const address = keypair.publicKey.toString();
        const matchesPrefix = !targetPrefix || address.toLowerCase().slice(0, targetPrefix.length) === targetPrefix.toLowerCase();
        const matchesSuffix = !targetSuffix || address.toLowerCase().endsWith(targetSuffix.toLowerCase());

        if (matchesPrefix && matchesSuffix) {
            console.log(`\nFound address: ${address}`);
            console.log(`Number of attempts: ${attempts}`);
            
            // Save the found address
            saveKeypair(address, keypair.secretKey);
            found = true;
            rl.close();
        }

        if (attempts % 1000 === 0) {
            console.log(`Attempts completed: ${attempts}`);
        }
    }
}

function saveKeypair(address, secretKey, outputDir = 'vanity_keys') {
    // Create directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    // Convert private key to readable format
    const secretKeyBase64 = Buffer.from(secretKey).toString('base64');

    // Path for saving
    const filePath = path.join(outputDir, `${address}.txt`);

    // Write data to file
    fs.writeFileSync(
        filePath,
        `Address: ${address}\nSecret Key (Base64): ${secretKeyBase64}`
    );

    console.log(`Keys saved to: ${filePath}`);
}

// Launch main process
async function main() {
    const { prefix, suffix } = await getUserInput();
    if (!prefix && !suffix) {
        console.log('You must specify at least one condition (prefix or suffix)');
        rl.close();
        return;
    }
    
    console.log('\nSearch parameters:');
    if (prefix) console.log(`Address prefix: ${prefix}`);
    if (suffix) console.log(`Address suffix: ${suffix}`);
    
    await generateVanityAddress(prefix, suffix);
}

main().catch(console.error);
