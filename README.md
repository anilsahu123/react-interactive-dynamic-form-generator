# react-interactive-dynamic-form-generator

> It will generate the form dynamically with validation. all it will take is json model as a input. validation object in the configuration is optional. it support almost all the input types. also apart from required field validation, it also has special validation for email(type="email"), pan number(type="pan"), only number(type="number"), minlength, maxlength etc. you can also pass your own regular expression as rejex property inside your validation object.

[![NPM](https://img.shields.io/npm/v/react-interactive-dynamic-form-generator.svg)](https://www.npmjs.com/package/react-interactive-dynamic-form-generator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-interactive-dynamic-form-generator
```

## Usage

```jsx
import React, { Component } from "react";

import DynamicFormGenerator from "react-interactive-dynamic-form-generator";

class Example extends Component {
  render() {
    return (
      <DynamicFormGenerator
        formFields={this.state.formFields}
        onFormSubmit={form => this.formResult(form)}
      />
    );
  }
}
```

## License

GNU General Public License v3.0 © [shekharramola](https://github.com/shekharramola)
