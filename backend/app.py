from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api")
def home():
    return jsonify({
        "message": "API Python rodando com Docker!"
    })

@app.route("/")
def index():
    return jsonify({
        "status": "ok",
        "message": "API rodando com Docker"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)