import MainElement from '@importok/javascript/MainElement';

declare module '@importok/react' {
    import * as React from 'react';

    export class ImportokWizard extends React.Component {
        wizard: MainElement;
    }
}