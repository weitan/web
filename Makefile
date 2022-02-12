
.PHONY: dist

install:
	@npm install --registry=https://registry.npmmirror.com

dev: install
	@npm run dev

dist: install
	@npm run build

unit: install
	@npm run test

clean:
	@rm -rf node_modules
	