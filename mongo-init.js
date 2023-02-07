db.createUser(
    {
        user: "mimin",
        pwd: "123456",
        roles: [
            {
                role: "userAdmin",
                db: "letscode"
            }
        ]
    }
);