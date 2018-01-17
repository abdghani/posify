import nltk
import requests
from nltk.tokenize import sent_tokenize,word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from bs4 import BeautifulSoup
from textblob import TextBlob

def generatePos(payload):
    return nltk.pos_tag(word_tokenize(payload))

def wordCount(payload):
    return len(nltk.word_tokenize(payload))

def getRandomText():
    url = "http://www.randomtextgenerator.com/";
    r  = requests.get(url)
    soup = BeautifulSoup(r.text)
    text = soup.find('textarea',{'id':'generatedtext'});
    return str(text.getText())

def getSentiment(payload):
    xstr = TextBlob(payload)
    return xstr.sentiment

def getTransaltion(payload,lang):
    xstr = TextBlob(payload)
    print(xstr.translate(to=lang))
    return {"translated":str(xstr.translate(to=lang))}

getSentiment("I have been trying for a long time. hello world! word")
