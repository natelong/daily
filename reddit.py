import urllib2
import json
import re
import datetime

titlePattern = re.compile("\[?\d{1,2}/\d{1,2}/\d{2,4}\] Challenge #(\d+) \[(.+)\]")
results = []

def load(after=""):
    location = "http://www.reddit.com/r/dailyprogrammer/new.json?limit=100"
    if after:
        location += "&after=" + after

    print location

    return json.loads(urllib2.urlopen(location).read())


def process(posts):
    for post in posts:
        title = post["data"]["title"]
        matches = titlePattern.search(title)

        if not matches:
            continue

        results.append({
            "title": title,
            "number": matches.group(1),
            "difficulty": matches.group(2).lower,
            "url": post["data"]["url"],
            "created": datetime.datetime.fromtimestamp(post["data"]["created_utc"]).isoformat(" ")
        })

res = load()
process(res["data"]["children"])

while res["data"]["after"]:
    res = load(res["data"]["after"])
    process(res["data"]["children"])

print json.dumps(results)