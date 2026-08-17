# Angular Interface to IO

<p align="center">
  <img src="public/i2ioLogo.jpg" alt="Angular Interface to IO logo" width="160" />
</p>

Generate Angular signal boilerplate from TypeScript interfaces in seconds.

This extension transforms interface fields into Angular `input()`, `model()`, `linkedSignal()`, and `output()` patterns directly in VS Code.

## Features

- Generate `input()` fields from interface properties
- Generate `model()` values when needed
- Optionally split generated code into `input + linkedSignal`
- Generate `output()` emitters from interface data
- Auto-import matching Angular symbols
- Works on selected code in the editor

## Demo

Add your GIFs in `public/` and reference them here:

<p align="center">
  <img src="public/input-demo.gif" alt="Input generation demo" width="900" />
</p>

<p align="center">
  <img src="public/output-demo.gif" alt="Output generation demo" width="900" />
</p>

## Quick start

1. Open a TypeScript file in VS Code.
2. Select an interface or interface fields.
3. Run the command:
   - `Angular: transform interface to input`
   - `Angular: transform interface to output`

## Example

```ts
export interface UserForm {
  name: string;
  email: string;
  age: number;
}
```

Generated result:

```ts
readonly name = input.required<UserForm["name"]>();
readonly email = input.required<UserForm["email"]>();
readonly age = input.required<UserForm["age"]>();
```

## Commands

This extension contributes:

- `angular-interface-to-io.generateInput`
- `angular-interface-to-io.generateOutput`

## Requirements

- VS Code `^1.125.0`
- Angular project using signal-based patterns (version 17.1 and newwer)

## Installation

Repository: https://github.com/TimurKhen/Angular-interface-to-io

### Local development

```bash
npm install
npm run compile
```

Then press `F5` in VS Code to launch the extension host.

## Asset storage

Store logo, screenshots, and GIFs in the `public` folder:

```text
public/
├── logo.png
├── input-demo.gif
├── output-demo.gif
```

## Release notes

### 0.0.1

- Initial extension release
- Added input generation
- Added output generation

For a longer project description and implementation context, see [workDescription.md](workDescription.md).
