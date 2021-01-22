import React from 'react';

import SHOP_DATA from './shop-data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';

class ShopPage extends React.Component {
    constructor(Props) {
        super(Props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.collections.map(({ id , ...othercollectionsProps }) => (
                        <CollectionPreview key={id} {...othercollectionsProps} />
                    ))
                }
            </div>
        );
    }

}

export default ShopPage;