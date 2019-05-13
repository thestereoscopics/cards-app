import React from "react";
import Campaign from "./Campaign";
import { FaListUl } from 'react-icons/fa';
import { IoIosSearch, IoIosArrowBack, IoIosArrowForward, IoIosCalendar } from "react-icons/io";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container pt-3 pb-2 mb-5">
                    <nav className="nav justify-content-between align-middle">
                        <div className="left-nav d-flex align-items-center">
                            <div className="dropdown mr-5">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All Campaigns
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {this.props.campaigns.campaigns && this.props.campaigns.campaigns.map((campaign) => {
                                        return <Campaign
                                            key={campaign.id}
                                            index={campaign.id}
                                            campaignName={campaign.campaignName}
                                        />
                                    })}
                                </div>
                            </div>
                            <div className="filters">                            
                                <h5 className="m-0 text-muted"><FaListUl/>Pending</h5>
                            </div>
                        </div>
                        <div className="right-nav d-flex align-items-center">
                            <form action="/search" id="searchForm" method="GET">
                                <input type="text" className="search-input d-none" id="search-input" placeholder="Search..." aria-label="Search" required="required" />
                                <button id="search-button" className="search-icon mr-4" type="submit"><IoIosSearch /></button>
                            </form>
                            <div className="date-rage-slider d-flex">
                                <a href="/" className="text-danger prev-day mr-4" aria-label="previous day"><IoIosArrowBack/></a>
                                <div className="text-danger selected-day mr-4"><IoIosCalendar/> Today, Jan 10th</div>
                                <a href="/" className="text-danger next-day mr-4" aria-label="next day"><IoIosArrowForward/></a>
                                <div className="current-days"><p>1d</p></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;