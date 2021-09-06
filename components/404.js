let NotFound = {
    render: async() => {
        let view = `    <div id="not-found">
        Page Not Found
        <br> 404 Error
    </div>`
        return view
    },
    after_render: async() => {}
}

export default NotFound;