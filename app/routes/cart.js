import Route from '@ember/routing/route';

export default class CartRoute extends Route {
    model() {
        const items = [{ price: 10 }, { price: 15 }];
        return items;
    }

    // setupController: function(controller, model) {
    //     controller.set('mod', model);
    // }

    // setupController(controller, model){
    //     super.setupController(controller, this.model);
    //     const subtotal = model.reduce((acc, item) => {
    //         return acc + item.price;
    //     }, 0);
    //     controller.set(
    //         "subtotal",
    //         subtotal
    //     )
    // }
}
