from src.__init__ import crear_app, db

app = crear_app()

if __name__ == '__main__':
    app.run(debug=True)

