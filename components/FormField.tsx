import React from 'react';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Input } from './ui/input';

interface FormFieldPops<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file';
}

function CustomFormField({
  control,
  name,
  label,
  placeholder,
  type = 'text',
}: FormFieldPops<T>) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className='label'>{label}</FormLabel>
            <FormControl>
              <Input
                className='input'
                placeholder={placeholder}
                {...field}
                type={type}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default CustomFormField;
