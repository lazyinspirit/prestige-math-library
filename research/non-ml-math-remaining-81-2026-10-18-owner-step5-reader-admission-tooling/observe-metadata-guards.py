import pathlib,json,hashlib,datetime
run='non-ml-math-remaining-81-2026-10-18';out=pathlib.Path('research/'+run+'-owner-step5-reader-admission-tooling');work=json.load(open(out/'supporting-workfiles.json'));records=[]
raw=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def pointer(doc,p):
 for key in p.split('/')[1:]:
  key=key.replace('~1','/').replace('~0','~');doc=doc[int(key)] if isinstance(doc,list) else doc[key]
 return doc
def walk(node,file,location='',target=None):
 if isinstance(node,dict):
  for key in ['canonical','path','file','target']:
   v=node.get(key)
   if isinstance(v,dict):v=v.get('path')
   if isinstance(v,str) and v.startswith('research/'+run) and '-owner-' not in v and pathlib.Path(v).exists():target=v;break
  p=node.get('json_pointer',node.get('pointer'));old=node.get('exact_before',node.get('original',node.get('before',node.get('exact_current_citation'))))
  # Parent contract/manifest operations carry a target while child row operations identify an id.
  if target and p is None and isinstance(old,dict) and isinstance(node.get('id'),str):
   d=json.load(open(target))
   if isinstance(d,dict) and 'contracts' in d:p='/contracts/'+node['id']
   elif isinstance(d,list) and node.get('page'):
    for pi,page in enumerate(d):
     if page.get('id')==node['page']:
      for ii,item in enumerate(page.get(node.get('collection','items'),[])):
       if item.get('id')==node['id']:p=f'/{pi}/{node.get("collection","items")}/{ii}'
  if target and p is not None and old is not None:
   r={'workfile':file,'workfile_pointer':location,'target':target,'current_full_raw_sha256_observed':raw(target),'json_pointer':p,'exact_expected_before':old}
   try:
    actual=pointer(json.load(open(target)),p);r['exact_current_value']=actual;r['expected_matches_current']=actual==old;r['current_value_sha256']=hashlib.sha256(json.dumps(actual,ensure_ascii=False,separators=(',',':')).encode()).hexdigest()
   except Exception as e:r['expected_matches_current']=False;r['lookup_error']=str(e)
   records.append(r)
  for k,v in node.items():walk(v,file,location+'/'+str(k).replace('~','~0').replace('/','~1'),target)
 elif isinstance(node,list):
  for i,v in enumerate(node):walk(v,file,location+'/'+str(i),target)
for f in work['files']:
 if f['file'].endswith('.json'):walk(json.load(open(f['file'])),f['file'])
# Summarize primary carrier/source guards and unresolved exact work routes without source mutations.
candidates=json.load(open(out/'candidate-entry-proposals.json'))
summary={'run':run,'observed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'kind':'Read-only exact metadata/work guard observation; not application, validator or native acceptance','source_candidates':len(candidates['candidates']),'source_candidate_guards':'Every35 source carrier equals its actual packet before and current baseline; exact literal operation reproduces the actual proposed carrier. This is mechanics only.','secondary_work_files_raw_bound':len(work['files']),'metadata_rows_compared':len(records),'metadata_row_mismatches':[{'workfile':r['workfile'],'workfile_pointer':r['workfile_pointer'],'target':r['target'],'json_pointer':r['json_pointer'],'lookup_error':r.get('lookup_error')} for r in records if not r['expected_matches_current']],'rows':records,'unreleased_work':[{'id':'alg-qa-37-exhaustive-b6-block-pair-compiler','reason':'Exact source and metadata relocation are scientifically root reviewed, but atomic companion theorem work still requires genuine related-work admission.'},{'id':'lem-finite-serre-word-form-and-classical-rank-bound','reason':'Proposed prerequisite carrier exists in isolated VOA/Hall packet and is now raw-bound as support. Canonical source must remain absent until valid native creation/enrollment; it is not a reader-admission subject.'}],'not_yet_exact_metadata_work':[{'group':'kept-voa-hall-concerns','source_operation':'New Serre helper creation plus Green supplier-dependency replacement','actual_packet':'research/'+run+'-owner-step5-kept-voa-hall-concerns/exact-integration-proposals.json','limit':'The new_helper_home_proposal and metadata text specify placement, derive truthful dependency level, and refresh F2/F3 and target proof mirrors after authentic native repair. These are genuine work instructions, but not literal current JSON pointer/value operations. No absent metadata rows or item-creation evidence are fabricated here. Root/native owner must derive exact fresh manifest/contract rows at the admitted creation/repair boundary.'}],'application_rule':'Any mismatch is a rebase/reconciliation obligation for root and the owning scientific worker. Do not overwrite a changed metadata file using an older full-file hash; compare actual specific row and refresh only exact necessary fields after source installation.'}
(out/'metadata-and-work-guard-observation.json').write_text(json.dumps(summary,indent=2)+'\n')
print(json.dumps({k:v for k,v in summary.items() if k in ['source_candidates','secondary_work_files_raw_bound','metadata_rows_compared','metadata_row_mismatches']},indent=2))
