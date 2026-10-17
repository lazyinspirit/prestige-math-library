"""Independent readable mirror verifier. Default checks research proposals; --applied checks current metadata."""
from pathlib import Path
import json,re,argparse,hashlib,yaml
P=Path(__file__).resolve().parent;ROOT=P.parent.parent

def section(text,name):
 lines=text.splitlines();start=next((i+1 for i,s in enumerate(lines) if s.strip()=='## '+name),None)
 if start is None:return None
 end=next((i for i in range(start,len(lines)) if lines[i].startswith('## ')),len(lines))
 return '\n'.join(lines[start:end]).strip()

def parse_steps(text):
 argument=section(text,'Proof')
 if argument is None:argument=section(text,'Verification')
 if argument is None:return []
 blocks=[];current=None
 for line in argument.splitlines():
  m=re.match(r'^(\d+\.\d+)\s',line)
  if m:
   if current:blocks.append(current)
   current=[m.group(1),line[m.end():]]
  elif current:current[1]+='\n'+line
 if current:blocks.append(current)
 out=[]
 for label,body in blocks:
  body=body.rstrip().removesuffix('∎').rstrip()
  assert body.endswith(']'),('missing final tag',label)
  at=body.rfind('[');assert at>=0
  tags=[x.strip() for x in body[at+1:-1].split(',')]
  out.append((label,body[:at].strip(),tags))
 return out

def main():
 ap=argparse.ArgumentParser(description=__doc__);ap.add_argument('--applied',action='store_true');args=ap.parse_args();m=json.loads((P/'proposal.json').read_text());files={r['file'] for r in m['field_operations']}
 for row in m['guards']:
  if row['path'] in files:continue
  assert hashlib.sha256((ROOT/row['path']).read_bytes()).hexdigest()==row['raw_sha256'],('source changed',row['path'])
 base=ROOT if args.applied else P/'proposed';R=m['run'];contracts=json.loads((base/'research'/(R+'-batch-86.proof-contracts.json')).read_text())['contracts'];count=0
 for id,contract in contracts.items():
  text=(ROOT/'items'/(id+'.md')).read_text();actual=parse_steps(text);combined=contract.get('derivations',[])+contract.get('routine_steps',[])
  assert len(combined)==len(actual),('step cardinality',id)
  mapped={row['step']:row for row in combined};assert len(mapped)==len(combined)
  for label,claim,tags in actual:
   row=mapped[label];assert row['claim']==claim,('whole proof paragraph mismatch',id,label)
   assert row['inputs']==tags,('final-tag inputs mismatch',id,label);count+=1
  facts=section(text,'Facts & Assumptions') or '';fact_blocks={};label=None
  for line in facts.splitlines():
   hit=re.match(r'^\[(F\d+)\]\s',line)
   if hit:label=hit.group(1);fact_blocks[label]=line
   elif label:fact_blocks[label]+='\n'+line
  expected={(f,source.split('|')[0]) for f,block in fact_blocks.items() for source in re.findall(r'\[\[([^\]]+)\]\]',block)}
  observed={(c['fact'],c['source']) for c in contract.get('citations',[])}
  assert observed==expected,('actual fact/source coverage',id,expected^observed)
  for c in contract.get('citations',[]):
   supplier=(ROOT/'items'/(c['source']+'.md')).read_text()
   assert c['quote']==section(supplier,c['source_section']),('entire supplier section quote',id,c['source'])
   assert c['uses']==[label for label,claim,tags in actual if c['fact'] in tags],('actual final-tag uses',id,c['fact'])
 # Check all manifest declarations; levels/classifications/history are compared separately below.
 pages=json.loads((base/'research'/(R+'-batch-86.pages.json')).read_text())
 for page in pages:
  for item in page['items']:
   text=(ROOT/'items'/(item['id']+'.md')).read_text();front=yaml.safe_load(text.split('---',2)[1])
   for field in ['deps','justified_by']:assert item.get(field,[])==front.get(field,[]),('actual declaration',item['id'],field)
 # Only explicitly approved field operations can differ from archived metadata; preserve all others.
 for file in files:
  archives=sorted(P.glob('root-applied-*')) if args.applied else []
  beforepath=archives[-1]/'before'/file if archives and (archives[-1]/'before'/file).exists() else P/'before'/file
  before=json.loads(beforepath.read_text());after=json.loads((base/file).read_text())
  for row in m['field_operations']:
   if row['file']!=file:continue
   obj=after
   for key in row['pointer'][:-1]:obj=obj[key]
   assert obj[row['pointer'][-1]]==row['after']
   old=before
   for key in row['pointer']:old=old[key]
   obj[row['pointer'][-1]]=old
  assert after==before,('unprojected fields changed',file)
 print(json.dumps(dict(mode='actual-applied' if args.applied else 'research-proposal',subjects=len(contracts),full_proof_steps=count,whole_supplier_quotes=True,final_tag_uses=True,actual_declarations=True,unprojected_fields_preserved=True)))
if __name__=='__main__':main()
