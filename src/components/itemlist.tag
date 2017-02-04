<itemlist>
    <h3>{this.state.title}</h3>

    <ul>
    <li each={this.state.items} onclick={changeTitle}>{this.name}</li>
    </ul>

    <form submit={addItem}>
        <input type="text" ref="newItem"></input>
        <button>Add</button>
    </form>

    <script>

     this.state = riot.store.getState()

     riot.store.subscribe( () => {
         this.state = riot.store.getState()
     })

     this.changeTitle = (e) => {
         riot.store.dispatch({type: 'changeTitle',
                              data: e.item.name})
     }

    this.addItem = (e) => {
        e.preventDefault()
        riot.store.dispatch({type: 'addItem',
                             data: this.refs.newItem.value})
        this.refs.newItem.value = ''
    }

    </script>
</itemlist>
