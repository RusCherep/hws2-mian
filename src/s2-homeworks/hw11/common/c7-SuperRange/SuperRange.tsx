import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 200,
                color: '#00CC22',
                height: 4,

                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(82, 175, 119, 0.16)',
                    },
                    '&::after':{
                        content: '""',
                        position: 'absolute',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#00CC22',
                    },
                },
                '& .MuiSlider-rail': {
                    opacity: 0.28,
                    backgroundColor: '#8B8B8B',
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
