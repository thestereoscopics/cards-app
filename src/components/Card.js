import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaDatabase, FaUserFriends } from 'react-icons/fa';


class Card extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            primaryMediaUrl: PropTypes.string,
            cardTitle: PropTypes.string,
            cardDescription: PropTypes.string,
            campaignId: PropTypes.string,
            currentWorkflow: PropTypes.string,
            likes: PropTypes.number,
            views: PropTypes.number,
            price: PropTypes.number,
        })
    };

    render() {
        let { primaryMediaUrl, cardTitle, cardDescription, campaignId, currentWorkflow, likes, views } = this.props.details;
        let price = this.props.details.listOfPlans[0].price.amount;
        primaryMediaUrl = primaryMediaUrl.includes('res.cloudinary.com') ? primaryMediaUrl : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXz9Pa5vsq2u8jN0dnV2N/o6u7w8fTi5OnFydO+ws3f4ee6v8vY2+H29/jy9Pbu7/LJztbCx9HR1ty/NMEIAAAC8ElEQVR4nO3b67ZrMBiFYaSh1HHd/8XuFap1SFolXb7s8T4/18EwOyNCiSIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACryrezAy2kulR+lVl6dqip7Jr412Zyeizj7yjODjYqvhRQTMQm/1rC/OxsvapIht3xehDeN1lIOBSrtt+ZW+t1Kh02GrciEvaDNLl4Ph1e+hqvEk4Z94SZ580WchJGJNyHhH/JlrDR+uC+iU6Yqf7c2JXNga0KTlj/xOP5ujuwdpabML0mz1VXUu7eqtyEP5OAvysdvXerYhMWs4C/a+e9uyg1YXVdXh7sXTtLTagXFcaJ2rlVqQmXgzSOu5f76J5shSasylXC/NVJUbknW6kJLx8lNPNu6WhRaMKPRmmtzB+7WpSasNk+09TjmdPeotSEVbfs0HW7LFXjh2FvUWrC1Z1F1yCt1aRtW4tiE0ZqPk4dp4NUzYaypUW5CaNuGtExjdSLz8HSouCEjRqvnuLcceE/b9D+UQhOGFWZys093e7S2IfoqkFbi5ITRv1NDN24ds7SoKVF4QlfsTa4bjHchOmPI+AiYrgJXQ0uB2qoCWt3g4sWQ034qsF5i4EkbBY3ol43OGsxjIT6luvp7NG+DfhsMYSElc7jpHteAL85BhcthpBQ38zPny1uadD8x3C9JT+habD/RXdfu21rsP822fy5/IR9g/GjxXpjg+ZSKoiEY4OPFrc2GEzCR4O9XL87D4aWcNrgEHFzvkASzhv8UAAJVw3+dwkPNRhAwoMNBpDwYIPiEx5uUHzCww1KT1htX7qEmnD9/SEJSXhutgEJSUjC8/lOKPs+jfla7ajh/qPUhP6Q8C+RcJdKUML7W0HK75vA9+/hrmenM8bHgr/y7pqS8O7a43nEb7x/6Pvo3iddPa3njYx3SKMoO37rwu4mo8LIPJB4fLG2lggZoz3d5l6PQuPWahHTzEgXF79KQQUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAp/gHLTI30QIHnooAAAAASUVORK5CYII=';
        return (
            <div data-card-id={campaignId} data-card-campaign={campaignId} className="card campaign-card shadow-sm col-6 col-sm-3 mb-5 p-0">
                <div className="card-img-top">
                    <img src={primaryMediaUrl} alt={cardTitle}/>
                </div>
                <div className="card-body">
                    <p className="card-text">{cardDescription}</p>
                    <div className="d-flex justify-content-between">
                        <small className="text-muted">${price} / Month</small>
                        <small className={`text-muted ${currentWorkflow}`}>{currentWorkflow}</small>
                    </div>
                    <div className={`mt-1 bar-${currentWorkflow}`}></div>
                </div>
                <ul className="d-flex pl-0 pt-2 pb-2 m-0">
                    <li className="text-muted col-4 text-center"><small><FaDatabase />${price}</small></li>
                    <li className="text-muted col-4 text-center"><small><FaUserFriends />{likes}</small></li>
                    <li className="text-muted col-4 text-center"><small><FaEye />{views}</small></li>
                </ul>
            </div>
        )
    }
}

export default Card;