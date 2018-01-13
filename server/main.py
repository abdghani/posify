from flask import Flask
from flask import request
from flask_cors import CORS
import json

from modules import pos
from modules import util


app = Flask(__name__)
CORS(app)

@app.route('/api')
def hello_world():
    return 'Working well'

@app.route('/api/pos',methods=['POST'])
def getPos():
    body =json.loads(request.data)
    if(body['query'] and len(body['query'])>0):
        postags = pos.generatePos(body['query']);
        return util.makeResponse(postags)

# @app.route('/api/wordcount',methods=['POST'])
# def getCount():
#     body =json.loads(request.data)
#     if(body['query'] and len(body['query'])>0):
#         return util.makeResponse(pos.wordCount(postags));

@app.route('/api/randomtext')
def getRandom():
    return pos.getRandomText()


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3020,debug=True)
