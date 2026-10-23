import json,pathlib,hashlib,datetime
run='fluid-dynamics-all-47-2026-10-23';base=pathlib.Path('research')/(run+'-owner-construction-gate-repair');out=base/'second-coverage-integration.json'
if out.exists():raise RuntimeError('Already applied')
changes=[];writes=[]
for n in [7,36]:
 p=pathlib.Path('research')/f'{run}-batch-{n}.coverage.json';raw=p.read_bytes();d=json.loads(raw)
 for page in d['pages']:
  for src in page['sources']:
   if n==36:
    assert src.get('locators') and all(isinstance(x,str) and x.strip() for x in src['locators'])
    value=' '.join(src['locators'])
    if src.get('locator')!=value:changes.append({'path':str(p),'page':page['page'],'url':src['url'],'field':'locator','before':src.get('locator'),'after':value,'basis':'Verbatim join of this exact entry existing locators; no new retrieval or reading claim.'});src['locator']=value
   else:
    for row in src['contents']:
     if row['disposition']=='out-of-scope':
      assert not row.get('reason') and len(row['argument'])>50
      row['reason']=row['argument'];changes.append({'path':str(p),'page':page['page'],'item':row['item'],'field':'reason','before':None,'after':row['reason'],'basis':'Copy existing exact source-specific exclusion rationale into required field.'})
 writes.append((p,raw,d))
assert len(changes)==7
archive=base/'before-second-coverage';archive.mkdir(exist_ok=True)
for p,raw,d in writes:
 (archive/p.name).write_bytes(raw);p.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
out.write_text(json.dumps({'run':run,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'complete':True,'changes':changes,'public_claim_changes':[],'source_reading_changes':[],'gates_attempted':0},indent=2)+'\n')
print(json.dumps({'files':len(writes),'changes':len(changes),'gates':0}))
