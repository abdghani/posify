import nltk
from nltk.tokenize import sent_tokenize,word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

def generatePos(payload):
    return nltk.pos_tag(word_tokenize(payload))
