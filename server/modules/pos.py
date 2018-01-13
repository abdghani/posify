import nltk
from nltk.tokenize import sent_tokenize,word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from bs4 import BeautifulSoup
import requests


def generatePos(payload):
    return nltk.pos_tag(word_tokenize(payload))

def wordCount(payload):
    return len(nltk.word_tokenize(payload))

def getRandomText():
    url = "http://www.randomtextgenerator.com/";
    r  = requests.get(url)
    soup = BeautifulSoup(r.text)
    text = soup.find('textarea',{'id':'generatedtext'});
    return (text.getText())
