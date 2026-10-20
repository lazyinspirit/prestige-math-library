# Root-only serialized integration. Delegated preparer must not execute --apply-reviewed.
import pathlib,json,sys,os
B=pathlib.Path(__file__).resolve().parent
assert sys.argv[1:] in [['--inspect'],['--apply-reviewed']]
def read(n):return json.loads((B/n).read_text())
def guards():
 for g in read('source-context-guards.json'):assert pathlib.Path(g['target']).read_bytes()==pathlib.Path(g['before_path']).read_bytes(),g['target']
def get(d,path):
 for k in path:d=d[k]
 return d
# Locate one exact parsed JSON value without reserializing its foreign siblings.
decoder=json.JSONDecoder()
def span(s,path,start=0):
 while s[start].isspace():start+=1
 if not path:return start,decoder.raw_decode(s,start)[1]
 key=path[0];i=start+1
 if s[start]=='{':
  while True:
   while s[i].isspace()or s[i]==',':i+=1
   k,end=decoder.raw_decode(s,i);i=end
   while s[i].isspace():i+=1
   assert s[i]==':';i+=1
   while s[i].isspace():i+=1
   if k==key:return span(s,path[1:],i)
   _,i=decoder.raw_decode(s,i)
 elif s[start]=='[':
  index=0
  while True:
   while s[i].isspace()or s[i]==',':i+=1
   if index==key:return span(s,path[1:],i)
   _,i=decoder.raw_decode(s,i);index+=1
 raise AssertionError(path)
guards();prepared={}
for op in read('source-operations.json'):
 p=pathlib.Path(op['target']);raw=p.read_bytes();s=raw.decode();assert s.count(op['before'])==op['count']==1
 after=s.replace(op['before'],op['after']);assert after==(B/'proposed'/p).read_text();prepared[p]=(raw,after.encode())
for filename in ['manifest-operations.json','contract-operations.json']:
 ops=read(filename);target=pathlib.Path(ops[0]['target']);raw=target.read_bytes();text=raw.decode();doc=json.loads(text);replacements=[]
 for op in ops:
  assert pathlib.Path(op['target'])==target;assert get(doc,op['path'])==op['before']
  if 'item'in op:assert get(doc,op['path'][:-1])['id']==op['item']
  if 'identity_guard'in op:
   row=get(doc,op['path'][:-1]);assert all(row[k]==v for k,v in op['identity_guard'].items())
  start,end=span(text,op['path']);assert json.loads(text[start:end])==op['before'];replacements.append((start,end,json.dumps(op['after'],ensure_ascii=False,indent=2)))
  get(doc,op['path'][:-1])[op['path'][-1]]=op['after']
 for start,end,value in sorted(replacements,reverse=True):text=text[:start]+value+text[end:]
 assert json.loads(text)==doc==json.loads((B/'proposed'/target).read_bytes());prepared[target]=(raw,text.encode())
if sys.argv[1]=='--inspect':print('All guards/CAS and proposed successors match; every unowned JSON byte preserved. No writes.');sys.exit(0)
temps=[]
try:
 for p,(before,after)in prepared.items():
  tmp=p.with_name(p.name+'.grpo-root-'+str(os.getpid())+'.tmp')
  with tmp.open('xb')as f:f.write(after)
  os.chmod(tmp,p.stat().st_mode);temps.append((p,tmp))
 guards()
 for p,(before,_)in prepared.items():assert p.read_bytes()==before,p
 for p,tmp in temps:os.replace(tmp,p)
finally:
 for p,tmp in temps:
  if tmp.exists():tmp.unlink()
print('Applied reviewed dependency declarations and citation-use CAS only; root owns native rebindings and all gates.')
