import PropTypes from 'prop-types';
import { Switch } from 'antd';

interface ToggleSwitchProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    size?: 'small' | 'default';
    checkedChildren?: string;
    unCheckedChildren?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
    checked = false,
    defaultChecked = false,
    onChange,
    disabled = false,
    size = 'default',
    checkedChildren, unCheckedChildren,
}) => (
    <Switch
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        size={size}
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
    />
);

ToggleSwitch.propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'default']),
    checkedChildren: PropTypes.string,
    unCheckedChildren: PropTypes.string
};

export default ToggleSwitch;
