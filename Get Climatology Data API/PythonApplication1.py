import os, json, requests

locations = [(57.385643, 21.546251)]

output = r""
base_url = r"https://power.larc.nasa.gov/api/temporal/climatology/point?parameters=T10M,ALLSKY_SFC_SW_DWN&community=RE&longitude={longitude}&latitude={latitude}&format=JSON"

for latitude, longitude in locations:
    api_request_url = base_url.format(longitude=longitude, latitude=latitude)

    response = requests.get(url=api_request_url, verify=True, timeout=30.00)
    
    content = json.loads(response.content.decode('utf-8'))
    filename = response.headers['content-disposition'].split('filename=')[1]

    filepath = os.path.join(output, filename)
    with open(filepath, 'w') as file_object:
        json.dump(content, file_object)