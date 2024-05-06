# importOK React Component

This is a React component for [importOK](https://importok.io/).

## Installation

```
npm install --save @importok/react
```

## Usage

```react
import ImportokWizard from '@importok/react';

function App() {
  /**
   * Import fields to be mapped
   * Check https://importok.io/docs/fields.html for more details
   */
  const fields = {};

  /**
   * Push the provided record to the API
   * Check https://importok.io/docs/webhooks.html for more details
   */
  const saveRecord = async function (record, meta) {};

  /**
   * Custom transformers
   * Check https://importok.io/docs/custom-transformers.html for more details
   */
  const transformers = {};
 
  /**
   * Custom validators
   * Check https://importok.io/docs/custom-validators.html for more details
   */
  const validators = {};

  return (
    <div className="App">
      <ImportokWizard
        title="ImportOK Example for React"
        fields={fields}
        transformers={transformers}
        validators={validators} 
        onRecordReady={saveRecord}
      />
    </div>
  );
}
```

[Learn more →](https://importok.io/docs/react.html)