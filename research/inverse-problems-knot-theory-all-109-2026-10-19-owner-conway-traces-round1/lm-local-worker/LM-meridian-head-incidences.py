exec(open('/tmp/conway109/verify-marked-movie.py').read().split("if __name__=='__main__':")[0])
def head(rows,moving,L):
 U=set(moving);classes={}
 for i,p in moving.items():
  ends=[]
  for k in [1-p,3-p]:
   j,h=rows[i]['adj'][k];seen=set()
   while j in U:
    if (j,h)in seen:return None
    seen.add((j,h));j,h=rows[j]['adj'][(h+2)%4]
   ends.append((j,h))
  classes.setdefault(tuple(sorted(ends)),[]).append((i,p,L.crossings[i].sign))
 if not all(len(v)==2 and v[0][1]!=v[1][1]and v[0][2]==v[1][2]for v in classes.values()):return None
 return list(classes.values())
for name in ['L','M']:
 L=init(json.load(open('/tmp/conway109/'+name+'-pd.json'))['PD'],['G']);rows=snap(L);vis=L.link_components[0];ans=[]
 for k in range(1,8):
  for j in range(len(vis)):
   st=[vis[(j+q)%len(vis)]for q in range(2*k)];mo={L.crossings.index(c.crossing):c.strand_index%2 for c in st}
   if len(mo)!=2*k:continue
   h=head(rows,mo,L)
   if h:ans.append({'punctures':k,'start':j,'visits':[[L.crossings.index(c.crossing),c.strand_index]for c in st],'edge_pairs':h})
 print(name,json.dumps(ans))
