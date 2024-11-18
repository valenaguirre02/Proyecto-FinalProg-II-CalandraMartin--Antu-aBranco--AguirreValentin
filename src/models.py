from src import db

class User(db.Model):
    __tablename__ = 'usuario' 
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(200))
    apellido = db.Column(db.String(200))
    DNI = db.Column(db.String(200))
    edad = db.Column(db.Integer)
    email = db.Column(db.String(200))
    contraseña = db.Column(db.String(200))  
    
    def __repr__(self) -> str:
        return f"<User {self.nombre} {self.apellido}"
    

    