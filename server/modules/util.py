import json
from flask import Flask,Markup,render_template

app = Flask(__name__)

def makeResponse(data):
    return app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
