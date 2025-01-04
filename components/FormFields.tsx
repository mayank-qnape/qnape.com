import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import { SizeType } from 'antd/es/config-provider/SizeContext';

const { TextArea } = Input;

type CommonProps = Omit<InputProps, 'classNames'> & Omit<TextAreaProps, 'classNames'>;

interface InputFieldProps extends Partial<CommonProps> {
    isTextArea?: boolean; // Determines if it renders as TextArea
    rows?: number; // For TextArea only
    showCount?: boolean
    size?: SizeType
}

const InputField: React.FC<InputFieldProps> = ({
    value,
    defaultValue,
    placeholder = 'Enter text here...',
    variant,
    addonBefore,
    addonAfter,
    style,
    className = '',
    onChange,
    isTextArea = false,
    rows = 4,
    showCount,
    status,
    prefix,
    size
}) => {
    const variantStyles =
        variant === 'filled'
            ? { backgroundColor: '#f0f0f0', border: '1px solid #d9d9d9' }
            : {};

    return isTextArea ? (
        <TextArea
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            rows={rows} 
            size={size}
            showCount={showCount}
            style={{ ...variantStyles, ...style }}
            className={className}
            onChange={(e) => onChange?.(e as React.ChangeEvent<HTMLTextAreaElement>)}
        />
    ) : (
        <Input
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            addonBefore={addonBefore}
            addonAfter={addonAfter}
            style={{ ...variantStyles, ...style }}
            size={size}
            showCount={showCount}
            className={className}
            status={status}
            prefix={prefix}
            onChange={(e) => onChange?.(e as React.ChangeEvent<HTMLInputElement>)}
        />
    );
};

export const Form = {
    InputField,
};
