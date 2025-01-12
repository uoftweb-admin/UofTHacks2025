from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes and allow all origins

@app.route('/users', methods=['GET'])
def get_users():
    users = [
        {"_id": "jflsdjfdlkfjdslsjk", "name": "john doe", "email": "john.doe@outlook.com"}
    ]
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)