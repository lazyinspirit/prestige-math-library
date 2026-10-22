"""Bounded owner metadata inventory. No proof bodies or hash-currency checks."""
from pathlib import Path
import collections
import datetime
import json
import re
import yaml

RUN='inverse-problems-knot-theory-all-109-2026-10-19'
ROOT=Path('research')
BASE=ROOT/(RUN+'-supervision-20261020')
OUT=BASE/'step1-bounded-closeout/metadata-diagnosis'
prior=json.loads((OUT/'metadata-projection.json').read_text())
ids={x['id'] for x in prior['same_run_unmanifested_carriers']}
pattern=re.compile(r'(?<![a-z0-9-])(?:'+ '|'.join(re.escape(x) for x in sorted(ids,key=len,reverse=True))+r')(?![a-z0-9-])')
rows={id:{'id':id,'recorded_acceptance':[],'review_scope_evidence':[],
          'other_metadata_occurrences':[],'explicit_home_claims':[],
          'current_library_homes':[],'current_contract_batches':[]} for id in ids}

def load(p):return json.loads(Path(p).read_text())
def fm_only(p):
    with Path(p).open() as f:
        if f.readline().strip()!='---':return {}
        ls=[]
        for l in f:
            if l.strip()=='---':return yaml.safe_load(''.join(ls)) or {}
            ls.append(l)
    return {}
def matches(value):
    if isinstance(value,str):return set(pattern.findall(value))
    if isinstance(value,list):return set().union(*(matches(x) for x in value)) if value else set()
    if isinstance(value,dict):return set().union(*(matches(x) for x in value.values())) if value else set()
    return set()
def profile(doc):
    result={}
    if not isinstance(doc,dict):return result
    for k in ['run','kind','owner','author','reviewer','authorized_by','recorded_at',
              'at','date','status','verdict','scope','scope_note','acceptance_scope']:
        if k in doc and isinstance(doc[k],(str,bool,int,float)):
            result[k]=doc[k] if not isinstance(doc[k],str) else doc[k][:1200]
    return result

resolution=load(ROOT/(RUN+'-math-resolution-map.json'))
reuse=resolution.get('review_reuse_index',{}).get('items',{})
for id in ids&set(reuse):
    for record in reuse[id].get('records',[]):
        evidence={'path':str(ROOT/(RUN+'-math-resolution-map.json')),
                  'json_pointer':'review_reuse_index/items/'+id,
                  'scope':record.get('scope'),'whole_source_accepted':record.get('whole_source_accepted'),
                  'closure_record':record.get('closure_record'),'reviewer':record.get('reviewer'),
                  'authentic_evidence_references':record.get('evidence'),
                  'currency_not_checked':True}
        rows[id]['recorded_acceptance' if record.get('whole_source_accepted') else 'review_scope_evidence'].append(evidence)
for no,closure in enumerate(resolution.get('mathematical_closures',[])):
    for key in ['originals','suppliers']:
        for id in matches(closure.get(key,[])):
            rows[id]['recorded_acceptance'].append({'path':str(ROOT/(RUN+'-math-resolution-map.json')),
                'json_pointer':f'mathematical_closures/{no}/{key}',
                'role':key,'scope':closure.get('scope_caveats') or closure.get('verdict'),
                'reviewer':closure.get('reviewer'),'report':closure.get('report'),'currency_not_checked':True})
adoption=load(BASE/'canonical-adoption.json')
for binding in adoption.get('bindings',[]):
    id=binding.get('id')
    if id in ids:rows[id]['recorded_acceptance'].append({'path':str(BASE/'canonical-adoption.json'),
        'role':'explicit canonical mathematical adoption binding',
        'owner':adoption.get('owner'),'scope':adoption.get('kind'),'currency_not_checked':True})

candidates=[]
excluded_parts={'sources','source-texts','first-review-freeze','before','candidate',
                'donors','proposed','history','accepted-prerequisite-receipts'}
for p in ROOT.glob(RUN+'*'):
    pool=[p] if p.is_file() else ([] if p.name.endswith('-dispatch') else p.rglob('*.json'))
    for q in pool:
        if q.suffix!='.json' or any(x in q.parts for x in excluded_parts):continue
        if OUT in q.parents:continue
        if any(x in q.name.lower() for x in ['accept','adopt','report','closure','review','integration','resolution']):
            candidates.append(q)

errors=[]
for p in sorted(set(candidates)):
    try:doc=load(p)
    except Exception as e:errors.append({'path':str(p),'error':str(e)});continue
    hit=matches(doc)
    if not hit:continue
    top=profile(doc);root_named='root' in p.name.lower() and any(x in p.name.lower() for x in ['accept','adopt'])
    metadata_only=any(x in str(top.get('scope','')).lower() for x in ['metadata-only','construction readiness only'])
    declared_verdict=' '.join(str(top.get(k,'')) for k in ['status','verdict']).lower()
    positive_review=bool(re.search(r'\bpass\b|\bpassed\b|\baccepted\b|\badopted\b',declared_verdict))
    def walk(node,trail=()):
        if isinstance(node,dict):
            # Explicit eligible/adopted/accepted lists are stronger evidence than
            # a provider ID appearing somewhere in an accepted consumer report.
            for key,value in node.items():
                keylow=key.lower();found=matches(value)
                strong=keylow in {'eligible','accepted_ids','adopted_ids','accepted_items',
                    'adopted_items','accepted_originals','whole_source_accepted_items','canonical_adoptions'}
                if found and strong:
                    for id in found:
                        evidence={'path':str(p),'json_pointer':'/'.join((*trail,key)),
                            'profile':top,'record_role':'explicit scoped acceptance/eligibility identifier',
                            'root_named_acceptance_artifact':root_named,
                            'metadata_only_scope_flag':metadata_only,'currency_not_checked':True}
                        bucket='recorded_acceptance' if root_named and not metadata_only else 'review_scope_evidence'
                        rows[id][bucket].append(evidence)
                if found and positive_review and keylow in {'items','reviewed_items','reviewed_files',
                        'reviewed_ids','scope','new_helpers','helper_ids','item'}:
                    for id in found:
                        rows[id]['review_scope_evidence'].append({'path':str(p),
                            'json_pointer':'/'.join((*trail,key)),'profile':top,
                            'record_role':'positive declared review with explicitly named scope; root adoption/fullness not inferred',
                            'currency_not_checked':True})
                if found and root_named and 'adopt' in p.name.lower() and keylow in {'bindings','source_bindings'}:
                    for id in found:
                        rows[id]['review_scope_evidence'].append({'path':str(p),
                            'json_pointer':'/'.join((*trail,key)),'profile':top,
                            'record_role':'root-named adoption artifact source binding; exact target/context role must be reconciled',
                            'currency_not_checked':True})
            direct=set()
            for key in ['id','item','path','file','canonical','canonical_file']:
                if key in node:direct|=matches(node[key])
            if direct:
                local_verdict=' '.join(str(node.get(k,'')) for k in ['status','verdict','review_verdict']).lower()
                if re.search(r'\bpass\b|\bpassed\b|\baccepted\b|\badopted\b',local_verdict):
                    for id in direct:rows[id]['review_scope_evidence'].append({'path':str(p),
                        'json_pointer':'/'.join(trail),'profile':top,
                        'local_declared_verdict':local_verdict[:1200],
                        'record_role':'explicit item-scoped positive review; no root/currency inference'})
                home={k:node[k] for k in ['page','batch','placement','placement_note',
                      'proposed_page','proposed_batch','home','home_page'] if k in node}
                for id in direct:
                    if home:rows[id]['explicit_home_claims'].append({'path':str(p),
                        'json_pointer':'/'.join(trail),'claim':home,
                        'scope_binding_required':True})
            for key,value in node.items():walk(value,(*trail,key))
        elif isinstance(node,list):
            for i,value in enumerate(node):walk(value,(*trail,str(i)))
    walk(doc)
    for id in hit:rows[id]['other_metadata_occurrences'].append({'path':str(p),'profile':top,
            'limit':'Incidental mention/context does not prove acceptance or full source scope.'})

homes={};meta={};page_info={};contract_homes=collections.defaultdict(list)
for mf in ROOT.glob(RUN+'-batch-*.pages.json'):
    batch=mf.name.split('-batch-')[1].split('.')[0]
    for page in load(mf):
        page_info[page['id']]={'page':page['id'],'batch':batch,'kind':page['kind'],
            'order':page['order'],'companion':page.get('companion'),'category':page['category']}
        for item in page['items']:homes[item['id']]=page_info[page['id']]
        pf=Path('library')/page['category']/(page['id']+'.md')
        fm=fm_only(pf)
        for id in set(fm.get('items',[])+fm.get('examples',[]))&ids:
            rows[id]['current_library_homes'].append(page_info[page['id']])
    cf=ROOT/(RUN+'-batch-'+batch+'.proof-contracts.json')
    if cf.exists():
        for id in set(load(cf).get('scope',[]))&ids:rows[id]['current_contract_batches'].append(batch)
for id in set(homes)|ids:
    try:meta[id]=fm_only(Path('items')/(id+'.md'))
    except Exception as e:errors.append({'item':id,'metadata_error':str(e)})
reverse=collections.defaultdict(set)
for consumer,fm in meta.items():
    for supplier in fm.get('deps',[]):reverse[supplier].add(consumer)
for id,row in rows.items():
    fm=meta.get(id,{})
    row['canonical_metadata']={k:fm.get(k) for k in ['kind','title','status','origin','pipeline_run','deps']}
    seen=set();todo=list(reverse[id]);consumers=[]
    while todo:
        consumer=todo.pop()
        if consumer in seen:continue
        seen.add(consumer)
        if consumer in homes:consumers.append({'id':consumer,**homes[consumer]})
        todo.extend(reverse[consumer]-seen)
    row['current_frontier_consumers']=sorted(consumers,key=lambda x:(x['order'],x['id']))
    direct=[{'id':x,**homes[x]} for x in reverse[id] if x in homes]
    row['direct_current_frontier_consumers']=sorted(direct,key=lambda x:(x['order'],x['id']))
    # Home is genuine only if a current page already lists it. Otherwise offer
    # an explicit consumer-derived proposal, not a fabricated placement decision.
    if row['current_library_homes']:
        row['home_status']='current canonical page placement exists; root reconciles manifest'
        row['recommended_home']=row['current_library_homes'][0]
    elif row['current_frontier_consumers']:
        earliest=row['current_frontier_consumers'][0]
        proposed=page_info[earliest['page']]
        if fm.get('kind') in ['example','counterexample'] and proposed['kind']=='A':
            proposed=page_info.get(proposed.get('companion'),proposed)
        elif fm.get('kind') not in ['example','counterexample'] and proposed['kind']=='B':
            proposed=page_info.get(proposed.get('companion'),proposed)
        row['home_status']='consumer-derived home proposal; root decision required'
        row['recommended_home']=proposed
    else:
        row['home_status']='no current frontier consumer/home found; preserve as context/held pending genuine provenance decision'
        row['recommended_home']=None
    if row['recorded_acceptance']:
        row['provenance_eligibility']='recorded scoped acceptance/adoption evidence found; root may place only at its actual scope, currency unchecked'
    elif row['review_scope_evidence']:
        row['provenance_eligibility']='explicit review/eligibility metadata found; root reconciles acceptance and exact scope before inclusion'
    elif row['other_metadata_occurrences']:
        row['provenance_eligibility']='metadata references found; neither acceptance nor rejection inferred'
    else:
        row['provenance_eligibility']='no match in this bounded metadata scan; NOT a finding of nonacceptance'
    row['readiness_or_native_coverage_granted']=False
    # Limit incidental-reference verbosity while retaining the complete path list.
    row['other_metadata_paths']=[x['path'] for x in row['other_metadata_occurrences']]
    row['other_metadata_occurrences']=row['other_metadata_occurrences'][:10]

summary=collections.Counter(x['provenance_eligibility'] for x in rows.values())
report={'version':1,'run':RUN,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),
    'scope':'Exactly553 previously observed unmanifested same-run IDs; authentic run-local metadata artifacts, FM/home/contract/consumer declarations only.',
    'candidate_metadata_files_scanned':len(set(candidates)),'counts':dict(summary),
    'rows':[rows[id] for id in sorted(ids)],'metadata_read_errors':errors,
    'limits':['No proof/body was read; no source/receipt hash was calculated or compared.',
      'Recorded acceptance extents remain those of the cited authentic metadata; a context mention is not a supplier acceptance.',
      'Historical whole-source flags are quoted as metadata, not freshly authenticated currency.',
      'Absence from these1030-or-so metadata files is neither a rejection nor proof that no acceptance exists.',
      'Consumer-derived homes require explicit root approval and capacity/dependency integration. Nothing is inserted automatically.',
      'CLAUDE12 expanded external-input policy applies. Imported established inputs remain explicitly labelled; no fabricated local proof or reading.']}
(OUT/'unmanifested-adoption-metadata-inventory.json').write_text(json.dumps(report,indent=2)+'\n')
(OUT/'adoption-metadata-input-paths.txt').write_text('\n'.join(str(x) for x in sorted(set(candidates)))+'\n')
print(json.dumps({'ids':len(rows),'metadata_files':len(set(candidates)),'provenance':dict(summary),
    'already_listed_in_current_library_pages':sum(bool(x['current_library_homes']) for x in rows.values()),
    'consumer_derived_home_proposals':sum(x['home_status'].startswith('consumer-derived') for x in rows.values()),
    'no_current_frontier_home_or_consumer':sum(x['recommended_home'] is None for x in rows.values()),
    'errors':len(errors)},indent=2))
