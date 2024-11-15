# Mail merge

## Setup

We use this mailmerge tool:

* https://github.com/awdeorio/mailmerge

Install mailmerge:

```sh
asdf install python latest
asdf local python latest
python -m pip install pipx
python -m pipx install argcomplete
python -m pipx install mailmerge
python -m pipx ensurepath
```

You will need to open a new terminal or re-login for the PATH changes to take effect. Alternatively, you can source your shell's config file with e.g. `source ~/.bashrc` or `source ~/.zshrc` etc.

## Completions

Consider adding shell completions for pipx. Run 'pipx completions' for instructions.

Example for zsh:

```sh
autoload -U compinit && compinit
eval "$(register-python-argcomplete pipx)"
```

## Create a sample

Follow the instructions in the mailmerge tool, such as:
```sh
$ mailmerge --sample
Created sample template email "mailmerge_template.txt"
Created sample database "mailmerge_database.csv"
Created sample config file "mailmerge_server.conf"

Edit these files, then run mailmerge again.
```


## Configure for Fastmail

Edit mailmerge_server.conf to provide your Fastmail credentials:

```
[smtp_server]
host = smtp.fastmail.com
port = 465
security = SSL/TLS
username = joelparkerhenderson@fastmail.com
ratelimit = 0
```


## Create a Fastmail app password

1. Sign in to Fastmail as usual.

2. Go to [https://app.fastmail.com/settings/security/apps](https://app.fastmail.com/settings/security/apps)

3. Click "New app password".

4. Name: "Aberystwyth.info mail merge"

5. Access: SMTP

The web page output should generate a new password e.g. "4c37dc854a7c".

