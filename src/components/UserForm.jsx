export function UserForm({ data, updateFieldHandler }) {
    return (
        <>
            <fieldset className="form-control">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={e => updateFieldHandler("name", e.target.value)}
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
                    value={data.email}
                    onChange={e => updateFieldHandler("email", e.target.value)}
                    placeholder="Digite seu email"
                    required
                />
            </fieldset>
        </>
    )
}