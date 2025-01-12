from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/users', methods=['GET'])
def get_users():
    users = [
        {"_id": "jflsdjfdlkfjdslsjk", "name": "john doe", "email": "john.doe@outlook.com"}
    ]
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)