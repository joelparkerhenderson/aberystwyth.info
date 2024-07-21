# Developers

Developers' documentation.


## Makefile

Make everything:

```sh
make
```

List tasks:

```sh
make list
```


## Update

Edit the canonical spreadsheet [here](https://docs.google.com/spreadsheets/d/13bEPzL0AmN6MDWtGZKpAEVNgOBNbPk7ZEFWEw_rF_ic/edit?usp=sharing)

Make:

```sh
make clean && make
```

Publish:

```sh
git add -A
git commit -am "Update"
git push
```

Browse:

* [https://www.abersystwyth.info](https://www.abersystwyth.info)


## Images

The tile images are JPG format and named `1080.jpg`.

We convert the images to 1080x1080 because this is the size that Instagram uses for social tiles:

* [bin/mogrify-x](../bin/mogrify-x)

We optimize the images for the web because this saves bandwidth and improves performance:

* [bin/jpegoptim-x](../bin/jpegoptim-x)
