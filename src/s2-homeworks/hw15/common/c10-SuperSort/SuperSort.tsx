import React from 'react'
import iconUp from './images/Polygon 2.svg'
import iconDown from './images/Polygon 5.svg'
import iconUpDown from './images/Polygon 6.svg'

// добавить в проект иконки и импортировать
const downIcon = iconDown
const upIcon = iconUp
const noneIcon = iconUpDown

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    switch (sort) {
        case down:
            return up;
        case up:
            return "";
        case '':
            return down;
        default:
            return down;
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        // debugger
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',  // вертикальное выравнивание
                lineHeight: 1          // убираем лишний отступ
            }}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*    style={{width: '16px', height: '16px'}}*/}
            {/*/>*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt="sort icon"
                style={{width: '16px', height: '16px'}}
            />
        </span>
    )
}

export default SuperSort
