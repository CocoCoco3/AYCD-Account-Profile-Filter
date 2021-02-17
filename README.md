# AYCD Account Profile Filter

This script filters out AYCD profiles that do not have an associated account from `accounts.txt`.  The AYCD profile's billing email address must be in `accounts.txt` in order to pass.  The output is `output.json` and is in AYCD format.

Input your AYCD profiles, replacing `aycd.json`.
Import your Nike accounts in a user:pass format into `accounts.txt`.
CD to the folder location (Copy location, open Command Prompt, type `cd <location>`
Run `node .`, and your `output.json` will be created.

Your `ouput.json` file will be a filtered list of your inputted AYCD profiles who's billing email is contained in your `accounts.txt` file.

Enjoy!  Use this however you want, and works with any type of account.  (E.g: Target, Nike, Walmart)
