from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import json
r=Path(__file__).parent
hits=json.loads((r/'truncated-formulas.json').read_text()); font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',18)
(r/'visual').mkdir(exist_ok=True)
for page,start in enumerate(range(0,len(hits),15),1):
 entries=hits[start:start+15]; parts=[]
 for j,h in enumerate(entries,start):
  im=Image.open(r/'assets'/h['src']).convert('RGB'); im=im.resize((im.width*2,im.height*2))
  parts.append((j,h,im))
 w=max(1000,max(im.width for _,_,im in parts)+20);ht=sum(im.height+48 for _,_,im in parts)
 out=Image.new('RGB',(w,ht),'white');d=ImageDraw.Draw(out);y=0
 for j,h,im in parts:
  d.text((10,y),f'{j+1}. node{h["node"]}: {h["src"]}',fill='black',font=font);out.paste(im,(10,y+28));y+=im.height+48
 out.save(r/'visual'/f'{page:02}.png')
 print(page,start+1,min(start+15,len(hits)),w,ht)
