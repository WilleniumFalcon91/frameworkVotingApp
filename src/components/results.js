import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    votesAngularInPercent() {
        if (this.store.getState().angular) {
            return (this.store.getState().angular / (this.store.getState().angular + this.store.getState().react + this.store.getState().vue) * 100 );
        } else {
            return 0;
        }
    }
    votesReactInPercent() {
        if (this.store.getState().react) {
            return (this.store.getState().react / (this.store.getState().react + this.store.getState().angular + this.store.getState().vue) * 100 );
        } else {
            return 0;
        }
    }
    votesVueInPercent() {
        if (this.store.getState().vue) {
            return (this.store.getState().vue / (this.store.getState().vue + this.store.getState().react + this.store.getState().angular) * 100 );
        } else {
            return 0;
        }
    }

    render() {
        return (
            <div>
                <div>
                    <span className="label label-danger">
                        Angular: {this.votesAngularInPercent().toFixed(2) + '%'}
                    </span>
                    <div className="progress progress-striped active"></div>
                    <div className="progress-bar progress-bar-danger"></div>
                </div>
                <div>
                    <span className="label label-danger">
                        React: {this.votesReactInPercent().toFixed(2) + '%'}
                    </span>
                    <div className="progress progress-striped active"></div>
                    <div className="progress-bar progress-bar-danger"></div>
                </div>
                <div>
                    <span className="label label-danger">
                        Vue: {this.votesVueInPercent().toFixed(2) + '%'}
                    </span>
                    <div className="progress progress-striped active"></div>
                    <div className="progress-bar progress-bar-danger"></div>
                </div>
            </div>
        )
    }
}

export default Results;