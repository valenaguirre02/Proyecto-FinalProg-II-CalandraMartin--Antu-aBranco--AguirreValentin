from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreateSchema(BaseModel):
    nombre: str
    apellido: str
    DNI: str 
    edad: int
    email: EmailStr
    contraseña: str