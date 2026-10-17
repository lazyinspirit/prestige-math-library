import json,re,pathlib,copy,collections,difflib
b=pathlib.Path(__file__).parent;p=pathlib.Path('items/pthm-qsm-onsite-interacting-atoms.md');s=p.read_text();r=[x for x in json.load(open(b/'final-precheck.txt'))['results'] if x.get('item_id')==p.stem][0];assert r['status']=='repair';regex=r'^\d+\.\d+ .*?(?=\n\n|\Z)';old=list(re.finditer(regex,s,re.M|re.S));new=list(re.finditer(regex,r['proposed_proof'],re.M|re.S));assert len(old)==len(new)==10
key=lambda x:re.sub(r'\d+\.\d+','REF',' '.join(x.split()))
assert sorted(key(x.group()) for x in old)==sorted(key(x.group()) for x in new)
mapping={a.group().split(' ')[0]:next(n.group().split(' ')[0] for n in new if key(a.group())==key(n.group())) for a in old}
ns=s[:old[0].start()]+'\n\n'.join(x.group() for x in new)+s[old[-1].end():]
math=lambda v:collections.Counter(re.sub(r'\s','',m) for m in re.findall(r'\$\$.*?\$\$|\$(?!\$).*?\$',v,re.S));assert math(s)==math(ns)
# Recheck exact active native write_files immediately before second surgical write.
run='physics-remaining-80-2026-10-17';live=json.load(open('.physics-autopilot/'+run+'/state.json'))
for k,v in live['dispatches'].items():
 if v.get('stage')!='2-scope-review' or v.get('endedAt') or v.get('role')!='scope-repairer':continue
 for batch in v.get('covers',[]):
  root=pathlib.Path('research')/(run+'-scope-review')/('batch-'+str(batch));st=json.load(open(root/'state.json'));i=root/('repair-'+str(st.get('prepared',{}).get('round',1))+'.input.json');d=json.load(open(i));assert str(p) not in d.get('write_files',[]),(k,p)
c=pathlib.Path('research')/(run+'-batch-46.proof-contracts.json');d=json.load(open(c));prior=copy.deepcopy(d);e=d['contracts'][p.stem]
sub=lambda t:re.sub(r'(?<![\d.])\d+\.\d+(?![\d.])',lambda m:mapping.get(m[0],m[0]),t)
for ci in e['citations']:ci['uses']=[mapping.get(x,x) for x in ci['uses']]
for v in e['derivations']:
 v['step']=mapping.get(v['step'],v['step']);v['claim']=sub(v['claim']);v['inputs']=[sub(x) for x in v['inputs']]
 # This explicit in-prose F6 reference is actually used by the analytic geometric-tail bound.
 if v['step']=='4.1' and 'F6' not in v['inputs']:v['inputs'].append('F6')
for row in e['boundaries']:
 for field in ['evidence','reason']:
  if field in row:row[field]=sub(row[field])
for id in prior['contracts']:
 if id!=p.stem:assert prior['contracts'][id]==d['contracts'][id]
archive=b/'before-canonical';archive.mkdir(exist_ok=True);(archive/p.name).write_text(s);(archive/c.name).write_bytes(c.read_bytes());assert p.read_text()==s and json.load(open(c))==prior
p.write_text(ns);c.write_text(json.dumps(d,indent=2)+'\n');(b/'onsite-canonical-map.json').write_text(json.dumps(mapping,indent=2)+'\n')
print('Adopted exact normative onsite phase form; math spans preserved; F6 actual analytic input recorded.')
