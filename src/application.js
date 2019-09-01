
import additives, { types as additiveTypes } from './additives';
import _ from 'lodash';
import Fuse from 'fuse.js';

import React, { Component } from 'react';

class Application extends Component
{
    constructor (props)
    {
        super(props);

        this.state = {
            search: ''
        };
    }

    onSearchChange (ev)
    {
        this.setState({ search: ev.target.value });
        window.scrollTo(0, 0);
    }

    renderSearch ()
    {
        return (
            <section id="s-search">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="search" placeholder="Ieškokite priedų"
                            value={this.state.search || ''} onChange={(ev) => this.onSearchChange(ev)}
                        />
                    </div>
                </form>
            </section>
        )
    }

    renderAdditive (additive)
    {
        const names = _.get(additive, 'names', {});

        return (
            <div key={additive.code} className="list-group-item">
                { additive.code ? <div className="additive-code"><strong>{additive.code}</strong></div> : null }
                <div className="additive-names">
                    {names.lt ? (
                        <div className="additive-names__name additive-names__name--lt">
                            {names.lt}
                        </div>
                    ) : null}
                    {names.en ? (
                        <div className="additive-names__name additive-names__name--en">
                            {names.en}
                        </div>
                    ) : null}
                </div>
                <div className="additive-badges">
                    {_.map(additive.types, (type, typei) =>
                    {
                        let badgeClass = '';
                        let badgeName = null;

                        switch (type)
                        {
                        case additiveTypes.vegan:
                            badgeClass = 'additive-badge--vegan';
                            badgeName = 'Vegan';
                            break;

                        case additiveTypes.possiblyAnimal:
                            badgeClass = 'additive-badge--possibly-animal';
                            badgeName = 'Possibly animal';
                            break;

                        case additiveTypes.animal:
                            badgeClass = 'additive-badge--animal';
                            badgeName = 'Animal';
                            break;

                        case additiveTypes.vegetarian:
                            badgeClass = 'additive-badge--vegetarian';
                            badgeName = 'Vegetarian';
                            break;
                        }
                        return (
                            <div key={`type-${typei}`} className={`badge ${badgeClass}`}>{badgeName}</div>
                        );
                    })}
                </div>
            </div>
        )
    }

    renderAdditives ()
    {
        const threshold = 25;
        let moreAvailable = false;

        let searchResults = [];

        if (this.state.search.length > 0)
        {
            const fuse = new Fuse(additives, {
                shouldSort: true,
                threshold: 0.7,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: ['code', 'names.lt', 'names.en']
            });
    
            searchResults = fuse.search(this.state.search);
        }

        let additivesList = searchResults.length === 0 ? _.sortBy(additives, 'code') : searchResults;
        let totalResults = additivesList.length;

        if (additivesList.length > threshold)
        {
            moreAvailable = true;
            additivesList = _.slice(additivesList, 0, threshold);
        }

        return (
            <section id="s-results">
                <div className="container-fluid text-sm-left">
                    <div className="list-group">
                        {_.map(additivesList, (additive) => this.renderAdditive(additive))}
                    </div>
                    {moreAvailable ? (
                        <div className="text-center m-3">{totalResults - threshold} rezultatų paslėpta, {totalResults} viso elementų duomenų bazėje</div>
                    ) : null}
                </div>
            </section>
        );
    }

    render ()
    {
        return (
            <React.Fragment>
                {this.renderSearch()}
                {this.renderAdditives()}
            </React.Fragment>
        )
    }
}

export default Application;