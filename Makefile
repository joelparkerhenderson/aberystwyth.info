default: all

.PHONY: list
list:
	@echo "make all: generate all files."
	@echo "make clean: remove all generated files."
	@echo "make data.tsv: download from Google Sheets into 'data.tsv'."
	@echo "make data.json: transform from 'data.tsv' into 'data.json'."

all: data.json

clean:
	rm -f data.tsv data.json

data.tsv:
	bin/download-from-google-sheets-into-data-tsv

data.json: data.tsv
	bin/transform-from-data-tsv-into-data-json
