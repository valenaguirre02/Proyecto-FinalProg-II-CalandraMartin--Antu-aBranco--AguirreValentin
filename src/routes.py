from flask import Blueprint, request, render_template, redirect, url_for
from src.models import User
from src import db

user_bp = Blueprint("user_bp", __name__)

@user_bp.route('/')
def index():
    return render_template('registrarse.html')

@user_bp.route('/crear-usuario', methods=['POST'])
def datos():
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
    return redirect(url_for('user_bp.index'))
