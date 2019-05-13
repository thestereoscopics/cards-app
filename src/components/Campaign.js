import React from "react";
import PropTypes from "prop-types";
import $ from 'jquery';

class Campaign extends React.Component {
    sortByCampaign = e => {
        e.preventDefault();
        let campaignToSort = e.target.dataset.campaign;
        $('[data-card-id]').addClass('d-none').removeClass('d-block');
        $(`[data-card-id='${campaignToSort}']`).removeClass('d-none').addClass('d-block');
    };
    render() {
        return (
            <a className="d-block pt-0 pr-2 pl-2 pb-2" data-campaign={this.props.index} onClick={this.sortByCampaign} href="/">{this.props.campaignName}</a>
        )
    }
}

export default Campaign;
