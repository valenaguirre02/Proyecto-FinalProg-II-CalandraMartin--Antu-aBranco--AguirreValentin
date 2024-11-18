import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(os.path.abspath(os.path.dirname(__file__)), 'databases', 'tasks.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
