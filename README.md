# Solana Vanity Address Generator

A tool for generating custom Solana wallet addresses with specified prefixes and/or suffixes.

## Features

- Generate Solana addresses with custom prefixes
- Generate Solana addresses with custom suffixes
- Combine both prefix and suffix conditions
- Automatic key pair saving
- Progress tracking
- Save generated keys in Base64 format

## Requirements

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Quick Start Guide

1. Install Node.js:
   - Download from [official website](https://nodejs.org/)
   - Verify installation:
   ```bash
   node --version
   npm --version
   ```

2. Clone and setup:
   ```bash
   git clone https://github.com/spam5041/solana-vanity-address-generator.git
   cd solana-vanity-address-generator
   npm install
   ```

3. Run the generator:
   ```bash
   npm start
   # or
   node vanity.js
   ```

## How to Use

1. When prompted, enter:
   - Desired address prefix (press Enter to skip)
   - Desired address suffix (press Enter to skip)

2. Input examples:
   - Prefix only: enter "sol" then press Enter twice
   - Suffix only: press Enter, then enter "end"
   - Both: enter "sol", then "end"

3. The program will:
   - Show search parameters
   - Display progress every 1000 attempts
   - Save results when found

## Output

- All generated addresses are saved in `vanity_keys` directory
- Each file contains:
  - Public address
  - Private key (Base64 format)
- Console displays:
  - Found address
  - Number of attempts
  - File save location

## Security Notes

- Keep your private keys secure
- Never share private keys
- Back up the `vanity_keys` directory safely
- Use generated addresses only on trusted networks

## Performance Tips

Generation time depends on:
- Length of desired prefix/suffix
- Complexity of combination
- Computer processing power

Longer combinations will require more time to generate.

## Troubleshooting

Common issues and solutions:

1. Module not found error:
   ```bash
   npm install
   ```

2. Permission denied:
   - Run terminal as administrator
   - Check folder permissions

3. No output directory:
   - Program will create it automatically
   - Ensure write permissions

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Solana Web3.js](https://github.com/solana-labs/solana-web3.js)
- Inspired by cryptocurrency vanity address generators

## Support

- If you want to leave a tip, you can send it to the following address:   ```bash
   QLnkmkBW6mrVAN7mpdZb4hbXM8mSpHtCTJBGTnPpimp
   ```
