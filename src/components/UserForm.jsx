export function UserForm() {
    return (
        <>
            <fieldset className="form-control">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Digite seu nome"
                    required
                />
            </fieldset>

            <fieldset className="form-control">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite seu email"
                    required
                />
            </fieldset>
        </>
    )
}