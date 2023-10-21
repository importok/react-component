# importOK React Component

This is a React component for [importOK](https://importok.io/).

## Installation

```
npm install --save @importok/react
```

## Usage

```react
import import ImportokWizard from '@importok/react';

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

  return (
    <div className="App">
      <ImportokWizard
        title="ImportOK Example for React"
        fields={fields}
        onRecordReady={saveRecord}
      />
    </div>
  );
}

```
