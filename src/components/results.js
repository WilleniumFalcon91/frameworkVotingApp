import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

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

    votesAngularInPercentStyle() {
        return {
            width: this.votesAngularInPercent()+'%'
        }
    }
    votesReactInPercentStyle() {
        return {
            width: this.votesReactInPercent()+'%'
        }
    }
    votesVueInPercentStyle() {
        return {
            width: this.votesVueInPercent()+'%'
        }
    }



    render() {
        return (
            <div>
                {/* <div>
                    <span className="label label-danger">
                        Angular: {this.votesAngularInPercent().toFixed(2) + '%'}
                    </span>
                    <div className="progress progress-striped active"></div>
                    <div className="progress-bar progress-bar-danger" style={this.votesAngularInPercentStyle()}></div>
                </div>
                <div>
                    <span className="label label-info">
                        React: {this.votesReactInPercent().toFixed(2) + '%'}
                    </span>
                    <div className="progress progress-striped active"></div>
                    <div className="progress-bar progress-bar-info" style={this.votesReactInPercentStyle()}></div>
                </div>
                <div>
                    <span className="label label-success">
                        Vue: {this.votesVueInPercent().toFixed(2) + '%'}
                    </span>
                    <div className="progress progress-striped active"></div>
                    <div className="progress-bar progress-bar-sucess" style={this.votesVueInPercentStyle()}></div>
                </div> */}
                    <span className="label label-danger">
                        Angular: {this.votesAngularInPercent().toFixed(2) + '%'}
                    </span>
                    
                    <ProgressBar striped bsStyle="danger" active now={this.votesAngularInPercent()}
                />
                    <span className="label label-info">
                        React: {this.votesReactInPercent().toFixed(2) + '%'}
                    </span>
                    
                    <ProgressBar striped bsStyle="info" active now={this.votesReactInPercent()}
                />
                    <span className="label label-success">
                        Vue: {this.votesVueInPercent().toFixed(2) + '%'}
                    </span>
                    
                    <ProgressBar striped bsStyle="success" active now={this.votesVueInPercent()}
                />
            </div>
        )
    }
}

export default Results;