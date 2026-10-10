import json,hashlib,datetime
from pathlib import Path
r=Path(__file__).parent;n='physics-em-sr-40-2026-10-08';h=lambda b:hashlib.sha256(b).hexdigest();lor=json.loads((r/(n+'-lorenz-wave-gauge-proposal.json')).read_text());flow=json.loads((r/(n+'-energy-flow-review.json')).read_text());rows=[*lor['changes'],{'id':flow['before']['id'],'before':flow['before'],'after':flow['after']}];beforefiles=[];items=[]
for batch in [31,32]:
 p=r/(n+f'-batch-{batch}.pages.json');raw=p.read_bytes();pages=json.loads(raw);by={i['id']:i for page in pages for i in page['items']};beforefiles.append({'path':str(p),'before_sha256':h(raw)})
 for row in rows:
  if row['id'] not in by:continue
  assert by[row['id']]==row['before'];items.append({'id':row['id'],'before':row['before'],'after':row['after'],'changed_fields':sorted(k for k in row['before'].keys()|row['after'].keys() if row['before'].get(k)!=row['after'].get(k))})
  for page in pages:
   for idx,i in enumerate(page['items']):
    if i['id']==row['id']:page['items'][idx]=row['after']
 tmp=p.with_name(p.name+'.reconciliation6.tmp');tmp.write_text(json.dumps(pages,ensure_ascii=False,indent=2)+'\n');tmp.replace(p);beforefiles[-1]['after_sha256']=h(p.read_bytes());assert list(by)==[i['id'] for page in pages for i in page['items']]
coverage=[]
for batch in [31,32]:
 p=r/(n+f'-batch-{batch}.coverage.json');raw=p.read_bytes();c=json.loads(raw);changes=[]
 for page in c['pages']:
  for source in page['sources']:
   if not source['title'].startswith('David Tong'):continue
   for row in source['contents']:
    if row.get('item')=='pthm-em-lorenz-gauge-wave-form':text='Exact sourced potential residual identities hold for arbitrary C2 representatives. Conditional on the explicitly declared Lorenz gauge G=0, Maxwell is equivalent to the decoupled sourced wave equations; Maxwell alone does not impose the gauge. Reachability requires the independent actual solver interfaces.'
    elif row.get('item')=='ex-em-vacuum-energy-flow-example':text='The source wave u and S are retained with the cos² phase convention. Spatial differentiation retains the factor c in S3; the exact local cancellation uses omega=ck. Finite-box outward face fluxes are distinguished from their negative energy-change contributions.'
    else:continue
    changes.append({'page':page['page'],'item':row['item'],'before_support':row.get('support'),'after_support':text});row['support']=text
 if batch==31:
  page=c['pages'][1];page.setdefault('canonical',[]).append({'name':'Pure-gauge linear family including its zero and nonzero parameter branches','disposition':'included','item':'ex-em-pure-gauge-fields','support':'The exact existing linear gauge family is preserved including a=0,beta=0. Its potential pair is nonzero exactly for a nonzero parameter pair; the explicit a=e1,beta=0 witness supplies noninjectivity. This is local conditional algebra, not an empirical claim.'});changes.append({'page':page['page'],'added_canonical_rows':1})
 p.write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n');coverage.append({'path':str(p),'before_sha256':h(raw),'after_sha256':h(p.read_bytes()),'changes':changes,'all_old_source_names_dispositions_urls_fetch_stamps_preserved':True})
report={'run':n,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'Root-approved three ready smaller subjects only; other geometry/sign/reachability/weak-adoption proposals remain unintegrated','existing_metadata_repairs':items,'manifest_raw_before_after':beforefiles,'coverage_changes':coverage,'current_item_count':325,'all_existing_ids_order_and_other_objects_preserved':True,'legacy_native_topological_and_stress_unit_origin_selfrepairs_preserved':True,'readiness_not_modified':True,'controller_not_resumed':True,'source_reading_limit':'Documented bounded actual Tong helper reading only; existing writer source stamps preserved, no fabricated fresh native retrieval or whole-book/proof-audit claim.'};(r/(n+'-reconciliation6.small-integration.json')).write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print({'subjects':[x['id'] for x in items],'readiness_held':True})
