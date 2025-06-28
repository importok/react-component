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
  locale?: string;
  translations?: {
      [key: string]: {
          [key: string]: string;
      };
  };
  mapper?: MapperStrategy;
  sampleFile?: string;
  uploadedFile?: File;
  throttle?: false | number;
  meta?: any;
  editorMode?: 'advanced' | 'basic';
  onRecordReady?: (record: ImportRecord, meta: any) => any;
  onImportReady?: (records: ImportRecord[], meta: any) => any;
  onImportProgress?: (processed: number, failed: number, total: number) => void;
  onStepEnter?: (step: StepEnterEvent | number, previousStep: null | number) => any;
  onStepExit?: (step: StepExitEvent | number, nextStep: null | number) => any;
  warnOnPageUnload?: boolean;
  style?: string;
}

export interface ImportokWizardState {}

export default class ImportokWizard extends React.Component<ImportokWizardProps, ImportokWizardState> {
  wizard: MainElement;
}
