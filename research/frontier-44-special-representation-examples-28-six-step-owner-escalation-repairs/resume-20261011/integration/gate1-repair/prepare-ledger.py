import json,glob,re,hashlib,collections,os
run='frontier-44-special-representation-examples-28-six-step';out='research/'+run+'-owner-escalation-repairs/resume-20261011/integration/gate1-repair';homes={};guards={}
def h(p):return hashlib.sha256(open(p,'rb').read()).hexdigest()
for p in glob.glob('research/'+run+'-batch-*.pages.json'):
 n=re.search(r'-batch-(\d+)\.pages',p)[1];guards[p]=h(p)
 for pg in json.load(open(p)):
  homes[('page',pg['id'])]=n
  for x in pg['items']:homes[('item',x['id'])]=n
files=sorted(glob.glob('research/'+run+'-batch-*.cross-batch-dependencies.json'));keys=collections.defaultdict(list);inputs={};bad=[]
for p in files:
 n=re.search(r'-batch-(\d+)\.cross',p)[1];rows=json.load(open(p));inputs[n]=(p,rows);guards[p]=h(p)
 for i,r in enumerate(rows):
  assert r['kind'] in ['item','page'] and r['status'] in ['open','verified','removed'] and str(r['evidence']).strip();dest=homes[(r['kind'],r['consumer'])];keys[(r['kind'],r['consumer'],r['supplier'])].append({'source_file':p,'source_batch':n,'source_index':i,'row':r,'target_batch':dest})
  if n!=dest:bad.append({'source':p,'row_index':i,'consumer':r['consumer'],'target_batch':dest})
outputs={n:[] for n in inputs};history=[]
for key,rs in keys.items():
 dest=rs[0]['target_batch'];own=[x for x in rs if x['source_batch']==dest]
 assert len(own)<=1
 if own:chosen=own[0]
 else:
  assert len(set(x['row']['status'] for x in rs))==1;chosen=rs[0]
 outputs.setdefault(dest,[]).append(chosen['row']);history.append({'key':key,'chosen_authentic_current_owner_row':chosen,'historical_duplicate_rows_preserved_in_this_evidence':[x for x in rs if x is not chosen],'status_invented':False})
deltas=[]
for n,rows in outputs.items():
 p='research/'+run+'-batch-'+n+'.cross-batch-dependencies.json';rows.sort(key=lambda r:(r['kind'],r['consumer'],r['supplier']));before=inputs.get(n,(p,[]))[1]
 if rows!=before:deltas.append({'path':p,'before_sha256':h(p) if os.path.exists(p) else None,'new_file_content':json.dumps(rows,indent=2)+'\n'})
report={'run':run,'selected_review_input_files':len(files),'invalid_ownership_rows':len(bad),'affected_consumers':sorted({x['consumer'] for x in bad}),'invalid_rows':bad,'deduplicated_rows':sum(len(v)-1 for v in keys.values()),'resolution':'Current rightful consumer-owner row wins status/evidence when duplicate exists; relocated-only rows retain their actual status. Every historical duplicate retained with exact source guards/index. No verified stamp manufactured.','source_guards':guards,'guarded_deltas':deltas,'history':history};json.dump(report,open(out+'/dependency-review-ownership-delta.json','w'),indent=2);print('files',len(files),'invalid',len(bad),'consumers',len(report['affected_consumers']),'deltas',len(deltas))
