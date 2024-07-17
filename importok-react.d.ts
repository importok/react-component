import MainElement from '@importok/javascript/MainElement';
import * as React from 'react';

export interface ImportokWizardProps {
  title?: string;
  subtitles?: string[];
  fields: {
    [key: string]: Omit<ImportField, 'description'> & {
      description?: string;
    };
  };
  transformers?: {
    [key: string]: (record: ImportRecord, key: string, ...args: string[]) => boolean | string;
  };
  validators?: {
    [key: string]: (record: ImportRecord, key: string, ...args: string[]) => boolean | string;
  };
  providers?: {
    [key: string]: ProviderCallback;
  };
  mapper?: MapperStrategy;
  sampleFile?: string;
  uploadedFile?: File;
  throttle?: false | number;
  meta?: any;
  onRecordReady?: (record: ImportRecord, meta: any) => any;
  onImportReady?: (records: ImportRecord[], meta: any) => any;
}

export interface ImportokWizardState {}

export default class ImportokWizard extends React.Component<ImportokWizardProps, ImportokWizardState> {
  wizard: MainElement;
}
