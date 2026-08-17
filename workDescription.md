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

## Contributing

Contributions are welcome, and the project is designed to stay simple, readable, and easy to maintain.

### Contribution rules

- Keep code changes focused and minimal
- Prefer small, clear improvements over large refactors
- Match the current project style and pattern of the existing codebase
- Keep generated output predictable and easy to review
- Avoid adding unnecessary dependencies unless they are clearly justified
- Make sure Angular-specific output remains consistent with common signal patterns
- Update documentation when behavior or usage changes

### Suggested workflow

1. Fork or clone the repository
2. Create a feature branch for your change
3. Make the smallest necessary update
4. Run the project checks locally if relevant
5. Submit a pull request with a clear description of the change and any examples

### Pull request expectations

- Explain what problem the change solves
- Include before/after examples when behavior changes
- Keep the scope limited to the requested feature or fix
- Document new commands, behavior, or edge cases if introduced

### Code quality expectations

- Prefer readable logic over clever abstractions
- Keep generated output idiomatic and easy to understand
- Verify that generated code remains valid TypeScript and Angular syntax
- Maintain compatibility with the extension's current usage flow

## Notes

This project is useful for teams that want to stay consistent with Angular signal patterns and reduce repeated manual edits. It is best used as a code-generation helper inside component development.
