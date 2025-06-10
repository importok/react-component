"use client";

import { useRef, useEffect, useState } from 'react';

const ImportokWizard = (props) => {
  const elementRef = useRef(null);
  const [ImportOK, setImportOK] = useState(null);
  const [wizard, setWizard] = useState(null);

  useEffect(() => {
    // Dynamically import ImportOK on the client side
    import('@importok/javascript').then((module) => {
      setImportOK(module.default);
    });
  }, []);

  useEffect(() => {
    if (!ImportOK || !elementRef.current) return;
    
    // Initialize custom elements
    ImportOK.defineCustomElements();

    if (!wizard) {
      const newWizard = ImportOK.add(
        elementRef.current,
        {
          ...props
        }
      );
      setWizard(newWizard);
    }

    // Cleanup on unmount
    return () => {
      setWizard(null);
    };
  }, [ImportOK, props, wizard]);

  return (
    <div
      className={`ImportokWizardWrapper ${props.className || ''}`.trim()}
      ref={elementRef}
    />
  );
};

// Handle defaultProps
const ImportokWizardWithDefaults = (props) => {
  const [defaultProps, setDefaultProps] = useState({});
  
  useEffect(() => {
    import('@importok/javascript').then((module) => {
      setDefaultProps(module.default.getDefaults());
    });
  }, []);

  return <ImportokWizard {...defaultProps} {...props} />;
};

export default ImportokWizardWithDefaults;
