from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# @app.route('/process', methods=['POST'])
# def process_data():
#     data = request.get_json()
#     # Process the data...
#     text = data.get('text')
#     url = data.get('url')
#     print('Received data from:', url)
#     print('Text:', text)
#     return {'success': True}

@app.route('/scrape', methods=['POST'])
def scrape():
    data = request.get_json()
    text = data.get('text')
    url = data.get('url')
    print('Received data from:', url)
    print('Text:', text)
    return jsonify(success=True)

if __name__ == '__main__':
    app.run(port=5000)
