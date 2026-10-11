import json,glob,re,hashlib,os,yaml,datetime
run='frontier-44-special-representation-examples-28-six-step';b='research/'+run+'-owner-escalation-repairs';out=b+'/resume-20261011/integration'
def h(p):return hashlib.sha256(open(p,'rb').read()).hexdigest()
page_map={};contract_map={};library_map={}
for p in glob.glob('research/'+run+'-batch-*.pages.json'):
 for pg in json.load(open(p)):
  for it in pg['items']:page_map[it['id']]=(p,pg,it)
for p in glob.glob('research/'+run+'-batch-*.proof-contracts.json'):
 d=json.load(open(p))
 for id,c in d.get('contracts',{}).items():contract_map[id]=(p,c,id in d.get('scope',[]))
for p in glob.glob('library/**/*.md',recursive=True):
 t=open(p).read()
 if not t.startswith('---'):continue
 try:d=yaml.safe_load(t.split('---',2)[1])
 except:continue
 for id in (d.get('items') or [])+(d.get('examples') or []):library_map.setdefault(id,[]).append(p)
ids=set(json.load(open(b+'/integration/renewed-helper-metadata/integration-report.json'))['new_items'])
for p in glob.glob('items/*hh-*'):
 d=yaml.safe_load(open(p).read().split('---',2)[1])
 if d.get('pipeline_run')==run:ids.add(os.path.basename(p)[:-3])
ids.update(['lem-two-cyclotomic-shears-give-a-periodic-integrable-based-sl-two-chain','lem-cyclotomic-klr-terminal-dot-caps-have-the-prefix-residue-formula','lem-cyclotomic-klr-word-traces-assemble-a-perfect-symmetric-form','lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations','def-minimal-parabolic-klr-diagram-proof-category','lem-minimal-parabolic-diagrams-have-pbw-bubble-normal-form','lem-cyclotomic-cap-off-quotient-has-no-extra-downward-relations'])
rows=[]
for id in sorted(ids):
 p='items/'+id+'.md'
 if not os.path.exists(p):continue
 t=open(p).read();fm=yaml.safe_load(t.split('---',2)[1]);m=page_map.get(id);c=contract_map.get(id)
 stmt=re.search(r'\n## (?:Statement|Definition|Example|Statement refuted)\n(.*?)(?=\n## |\Z)',t,re.S);stmt=stmt.group(1).strip() if stmt else None
 issues=[]
 if not m:issues.append('missing-current-run-manifest')
 elif m[2].get('statement','').strip()!=stmt:issues.append('manifest-statement-stale')
 if m and m[2].get('deps',[])!=fm.get('deps',[]):issues.append('manifest-deps-differ')
 if not c:issues.append('missing-current-run-contract')
 elif not c[2]:issues.append('missing-contract-scope-entry')
 if not library_map.get(id):issues.append('missing-library-page-placement')
 rows.append({'id':id,'source':p,'raw_sha256':h(p),'issues':issues,'manifest':m[0] if m else None,'home':m[1]['id'] if m else None,'manifest_sha256':h(m[0]) if m else None,'contract':c[0] if c else None,'contract_sha256':h(c[0]) if c else None,'library_pages':library_map.get(id,[]),'library_page_sha256':{p:h(p) for p in library_map.get(id,[])}})
opened=[]
for p in glob.glob('research/'+run+'-alpha-batch-*-3a-decisions.json'):
 for d in json.load(open(p)).get('decisions',[]):
  if d.get('verdict')=='escalated' or d.get('repair_pending'):opened.append({'decision_file':p,'decision_file_sha256':h(p),**d})
receipts=[]
for p in glob.glob(b+'/integration/**/root-application-receipt.json',recursive=True)+[b+'/integration/native48-shared-defect/integration-receipt.json']:
 d=json.load(open(p)); guards=d.get('output_guards',d.get('outputs',{}));receipts.append({'path':p,'sha256':h(p),'applied':{k:v for k,v in d.items() if k not in ['output_guards','outputs']},'current_outputs_match':{p:os.path.exists(p) and h(p)==digest for p,digest in guards.items()}})
report={'run':run,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'mechanical_only':True,'historical_caps_preserved':True,'helpers':rows,'current_native_open_markers':opened,'applied_integration_receipts':receipts}
json.dump(report,open(out+'/current-inventory.json','w'),indent=2);print('helper rows',len(rows),'native markers',len(opened));
for r in rows:
 if r['issues']:print(r['id'],r['issues'])
