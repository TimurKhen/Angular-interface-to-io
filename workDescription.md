# Work description

This extension helps Angular developers generate repetitive signal-based boilerplate faster and with less manual work.

## Why this extension exists

When working with Angular component APIs, developers often repeat the same patterns over and over:

- `input()` values for component inputs
- `model()` values for two-way bound state
- `linkedSignal()` when splitting input values into a signal-backed property
- `output()` event emitters for component communication

This extension is designed to reduce that repetitive code generation while keeping the structure easy to understand and review.

## What it does

The extension reads a selected TypeScript interface or interface field list and inserts generated Angular code directly into the active editor. It supports:

- generating `input()` properties from interface fields
- generating `model()` properties when needed
- splitting generation into `input + linkedSignal` patterns
- generating `output()` event definitions based on interface fields
- adding import statements for required Angular symbols

## Example workflow

Given an interface like:

```ts
export interface UserForm {
  name: string;
  email: string;
  age: number;
}
```

The extension can generate code such as:

```ts
readonly name = input.required<UserForm["name"]>();
readonly email = input.required<UserForm["email"]>();
readonly age = input.required<UserForm["age"]>();
```

It can also generate a split version:

```ts
readonly nameInput = input.required<UserForm["name"]>();
name = linkedSignal(() => this.nameInput);
```

## Asset storage

All screenshots, GIFs, and logos are stored in the `public` folder so they can be reused in the README and VS Code Marketplace preview.

Recommended files:

- `public/logo.png`
- `public/input-demo.gif`
- `public/output-demo.gif`

## Notes

This project is useful for teams that want to stay consistent with Angular signal patterns and reduce repeated manual edits. It is best used as a code-generation helper inside component development.
