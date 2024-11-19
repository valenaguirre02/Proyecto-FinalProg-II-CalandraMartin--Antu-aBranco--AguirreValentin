from flask import Blueprint, request, render_template, redirect, url_for, jsonify
from .models import User
from . import db
from .schemas import UserCreateSchema
from typing import List, Tuple, Any

user_bp = Blueprint("user_bp", __name__)

@user_bp.route('/')
def index():
    return render_template('registrarse.html')


@user_bp.route('/crear-usuario', methods=['POST'])
def datos():
    data: Tuple[any] = request.form
    
    try:
        user_data = UserCreateSchema(nombre=data['nombre'],
                                    apellido=data['apellido'],
                                    DNI=data['dni'],
                                    edad=data['edad'],
                                    email=data['email'],
                                    contraseña=data['contraseña'])
    except ValueError as e:
        return jsonify({"error": e}), 400
    
    usuario = User(
        nombre=request.form['nombre'],
        apellido=request.form['apellido'],
        DNI=request.form['dni'],
        edad=int(request.form['edad']),
        email=request.form['email'],
        contraseña=request.form['contraseña']
    )
    db.session.add(usuario)  
    db.session.commit()       
    return render_template('index.html')
