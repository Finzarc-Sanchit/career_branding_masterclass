
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormDialogContextType {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const FormDialogContext = createContext<FormDialogContextType | undefined>(undefined);

export const FormDialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <FormDialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </FormDialogContext.Provider>
  );
};

export const useFormDialog = () => {
  const context = useContext(FormDialogContext);
  if (!context) {
    throw new Error('useFormDialog must be used within FormDialogProvider');
  }
  return context;
};

