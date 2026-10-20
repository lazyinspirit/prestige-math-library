#!/usr/bin/env python3
"""Root-reviewed integration only. Default --check builds all writes in memory.
--apply archives every current target, rechecks raw preimages, then writes. No
records, recertification, gates, or drift binding acceptance are performed.
"""
import argparse, copy, hashlib, json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
BASE=Path(__file__).resolve().parent
RUN='machine-learning-all-101-2026-10-19'
PAGE='minimum-norm-interpolation-and-double-descent'
def sha(b):return hashlib.sha256(b).hexdigest()
def load(p):return json.loads(p.read_text())
def dump(d):return (json.dumps(d,ensure_ascii=False,indent=2)+'\n').encode()
def require(ok,msg):
 if not ok:raise RuntimeError(msg)
def exactly(rows,predicate,label):
 matches=[i for i,x in enumerate(rows) if predicate(x)]
 require(len(matches)==1,'Expected unique '+label);return matches[0]
def build():
 old={};new={}
 def raw(path):
  p=ROOT/path
  if path not in old:old[path]=p.read_bytes() if p.exists() else None
  return old[path]
 def obj(path):return json.loads(new.get(path,raw(path)))
 def put(path,d):new[path]=dump(d)
 meta=load(BASE/'metadata-operations.json')
 for g in load(BASE/'integration-map.json')['actual_ten_source_guards']:
  require(sha(raw(g['path']))==g['raw_sha256'],'Source guard '+g['id'])
 # Sources and exact two manifest row changes; preserve every other row.
 manifest=f'research/{RUN}-batch-48.pages.json';pages=obj(manifest)
 home=pages[exactly(pages,lambda x:x['id']==PAGE,'manifest page')]
 for op in meta['source_and_manifest_operations']:
  previous=raw(op['actual_path'])
  require(previous is None if op['expected_actual_absent'] else previous is not None and sha(previous)==op['expected_actual_raw_sha256'],'Own raw guard '+op['id'])
  proposed=(ROOT/op['proposed_path']).read_bytes();require(sha(proposed)==op['proposed_raw_sha256'],'Proposal hash '+op['id'])
  rows=home['items']
  if op['operation']=='create':
   require(not any(x['id']==op['id'] for p in pages for x in p['items']),'New manifest id already present')
   index=exactly(rows,lambda x:x['id']=='lem-gaussian-rbf-power-function-fill-distance-bound','Gaussian placement')
   rows.insert(index,copy.deepcopy(op['proposed_manifest_row']))
  else:
   index=exactly(rows,lambda x:x['id']==op['id'],'manifest row');require(rows[index]==op['expected_old_manifest_row'],'Manifest old row guard');rows[index]=copy.deepcopy(op['proposed_manifest_row'])
  new[op['actual_path']]=proposed
 require(sum(len(x['items']) for x in pages)==11,'Manifest census11');put(manifest,pages)
 # Root metadata correction: mirror the helper placement into the actual A carrier.
 carrier='library/machine-learning/minimum-norm-interpolation-and-double-descent.md'
 text=raw(carrier).decode();anchor='  - lem-gaussian-rbf-power-function-fill-distance-bound\n'
 require(text.count(anchor)==1,'A carrier unique Gaussian placement')
 require('lem-dense-cube-polynomial-norming-and-reproduction' not in text,'New helper absent from A carrier')
 new[carrier]=text.replace(anchor,'  - lem-dense-cube-polynomial-norming-and-reproduction\n'+anchor).encode()
 # Existing nine contracts/unresolved preserved; two absent keys created.
 path=f'research/{RUN}-batch-48.proof-contracts.json';contracts=obj(path);original=copy.deepcopy(contracts)
 scopeop=meta['contracts_scope_operation'];require(contracts['scope']==scopeop['expected_old_scope'],'Contract scope guard')
 proposed=load(BASE/'proof-contracts.proposed.json')
 for op in meta['contract_key_operations']:
  require(op['id'] not in contracts['contracts'],'Contract absence guard '+op['id']);contracts['contracts'][op['id']]=proposed['contracts'][op['id']]
 contracts['scope']=scopeop['proposed_scope'];require(all(contracts['contracts'][k]==v for k,v in original['contracts'].items()),'Preserved nine contracts');require(contracts.get('unresolved')==original.get('unresolved'),'Unresolved history preserved');put(path,contracts)
 # Exact source rows, preserving all other sources, stamps and native history.
 for filename in ['source-disposition-operations.json','coverage-maintenance-operations.json']:
  for op in load(BASE/filename)['operations']:
   data=obj(op['file']);page=data['pages'][exactly(data['pages'],lambda x:x['page']==op['page'],'source page')]
   index=exactly(page['sources'],lambda x:x['url']==op['source_url'],'source URL')
   require(page['sources'][index]==op['expected_original_source'],'Source row guard '+op['source_url']);page['sources'][index]=copy.deepcopy(op['proposed_source']);put(op['file'],data)
 path=f'research/{RUN}-batch-48.cross-batch-dependencies.json';rows=obj(path)
 for op in load(BASE/'cross-batch-dependency-operations.json')['operations']:
  index=exactly(rows,lambda x:x==op['expected_old_row'],'cross-batch exact row');rows[index]=copy.deepcopy(op['new_row'])
 put(path,rows)
 # Surgical prose and matching description only. No whole global-plan guard.
 path='research/plan-machine-learning-track.md';text=raw(path).decode()
 planpath='research/plan-spec.json';plan=obj(planpath);page=plan['pages'][exactly(plan['pages'],lambda x:x['id']==PAGE,'structured page')]
 require(page['items']==[],'Scaffold plan item list remains empty (manifest owns rows)')
 for op in load(BASE/'canonical-surgical-replacements.json')['operations']:
  require(text.count(op['old'])==1,'Unique canonical substring');require(page['description'].count(op['old'])==1,'Unique description substring');text=text.replace(op['old'],op['new']);page['description']=page['description'].replace(op['old'],op['new'])
 new[path]=text.encode();put(planpath,plan)
 # Exact enumerated controlling digest rows supplied separately by root/owner.
 controls=load(BASE/'digest-control-guards.json') if (BASE/'digest-control-guards.json').exists() else None
 require(controls is not None,'Missing enumerated digest controls')
 olddigest=sha(raw('research/plan-machine-learning-track.md'));newdigest=sha(new['research/plan-machine-learning-track.md'])
 require(len(controls['controls'])==111,'Expected111 controlling digests')
 data=obj('research/plan-spec.json')
 for op in controls['controls']:
  require(op['file']=='research/plan-spec.json','Only structured-description controls')
  entry=data['pages'][exactly(data['pages'],lambda x:x['id']==op['page_id'],'digest page')]
  oldliteral='SHA-256 '+olddigest
  require(entry['description'].count(oldliteral)==1,'Exact literal control guard '+op['page_id'])
  entry['description']=entry['description'].replace(oldliteral,'SHA-256 '+newdigest)
 put('research/plan-spec.json',data)
 require(len(proposed['contracts'])==2,'Two proposed contracts')
 return old,new,{'targets':len(new),'manifest_items':11,'contracts':11,'preserved_contracts':9,'canonical_old_sha256':olddigest,'canonical_new_sha256':newdigest,'digest_controls':111,'no_records_or_gates':True}
def main():
 parser=argparse.ArgumentParser();parser.add_argument('--apply',action='store_true');args=parser.parse_args()
 old,new,summary=build()
 if args.apply:
  archive=BASE/'root-execution-preimages';require(not archive.exists(),'Execution archive must be absent')
  # Validate every current raw preimage again before archive or actual writes.
  for path,b in old.items():require((ROOT/path).read_bytes()==b if b is not None else not (ROOT/path).exists(),'Concurrent change '+path)
  archive.mkdir()
  for path,b in old.items():
   if b is not None:
    dest=archive/path;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(b)
  (archive/'write-manifest.json').write_bytes(dump({'old':{p:sha(b) if b is not None else None for p,b in old.items()},'new':{p:sha(b) for p,b in new.items()}}))
  for path,b in new.items():(ROOT/path).write_bytes(b)
 summary['applied']=args.apply;print(json.dumps(summary,indent=2))
if __name__=='__main__':main()
