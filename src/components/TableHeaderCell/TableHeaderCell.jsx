import React from "react";
import "./TableHeaderCell.css";
import * as classNames from 'classnames';

export const TableHeaderCell = (props) => {
    const {order, title} = props;

    let arrowUpClassName = classNames(
        'table-header-cell__arrow',
        {
            'table-header-cell__arrow_active': order === 'asc'
        }
    );

    let arrowDownClassName = classNames(
        'table-header-cell__arrow',
        {
        'table-header-cell__arrow_active': order === 'desc'
        }
    );

    return (
        <th>
            <div className="table-header-cell">
                <span className="table-header-cell__title">{title}</span>

                <div className="table-header-cell__arrows">
                    <div className={arrowUpClassName}>&#9650;</div>
                    <div className={arrowDownClassName}>&#9660;</div>
                </div>
            </div>
        </th>
    );
};