from . import db

class User(db.Model):
    __tablename__ = 'usuario' 
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(200), nullable=False)
    apellido = db.Column(db.String(200), nullable=False)
    DNI = db.Column(db.String(200), nullable=False)
    edad = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(200), nullable=False)
    contraseña = db.Column(db.String(200), nullable=False)  
    
    def __repr__(self) -> str:
        return f"<User {self.nombre} {self.apellido}"
    

    