import { ImportConfigDataProviders, ImportConfigEditorMode, ImportConfigFields, ImportConfigTransformers, ImportConfigTranslations, ImportConfigValidators, ImportRecord, MapperStrategy } from '@importok/javascript';
import MainElement from '@importok/javascript/MainElement';
import * as React from 'react';

export interface ImportokWizardProps {
  title?: string;
  subtitles?: string[];
  fields: ImportConfigFields;
  transformers?: ImportConfigTransformers;
  validators?: ImportConfigValidators;
  providers?: ImportConfigDataProviders;
  locale?: string;
  translations?: ImportConfigTranslations;
  mapper?: MapperStrategy;
  sampleFile?: string | File;
  uploadedFile?: File;
  throttle?: false | number;
  meta?: any;
  editorMode?: ImportConfigEditorMode;
  onRecordReady?: (record: ImportRecord, meta: any) => any;
  onImportReady?: (records: ImportRecord[], meta: any) => any;
  onImportProgress?: (processed: number, failed: number, total: number) => void;
  onStepEnter?: (step: number, previousStep: null | number) => any;
  onStepExit?: (step: number, nextStep: null | number) => any;
  warnOnPageUnload?: boolean;
  allowManualRecords?: boolean;
  style?: string;
  license?: string;
}

export interface ImportokWizardState {}

export default class ImportokWizard extends React.Component<ImportokWizardProps, ImportokWizardState> {
  wizard: MainElement;
}
