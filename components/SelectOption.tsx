'use client'
import { Select } from 'antd'

type OptionItem = {
    value: string;
};
interface SelectOptionProps {
    list: OptionItem[];
}

export const SelectOption = ({ list }: SelectOptionProps) => {
    const options = list?.map((v: OptionItem) => ({ value: v.value, label: v.value }));

    return (
        <Select defaultValue='EN' options={options} />
    )
}