# AYCD Nike Account Profile Filter

This script filters out AYCD profiles that do not have an associated Nike account from `nikeaccounts.txt`.  The output is `output.json` and is in AYCD format.

Input your AYCD profiles, replacing `aycd.json`.
Import your Nike accounts in a user:pass format into `nikeaccounts.txt`.
CD to the folder location (Copy location, open Command Prompt, type `cd <location>`
Run `node .`, and your `output.json` will be created.

Your ouput.json file will be a filtered list of your inputted AYCD profiles who's billing email is contained in your `nikeaccounts.txt` file.

Enjoy!  Use this however you want.
