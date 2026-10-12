from pathlib import Path
import json,hashlib,re
b=Path(__file__).parent;run='physics-cm-qm-gr-79-2026-10-11';roots=['def-cm-constrained-configuration-and-mass-metric','def-cm-traction-and-stress'];hashes={r:hashlib.sha256(Path('items/'+r+'.md').read_bytes()).hexdigest() for r in roots};records=[]
for n in [8,17,31,33]:
 p=Path(f'research/{run}-batch-{n}.cross-batch-dependencies.json');d=json.load(open(p));before=p.read_bytes();changes=[]
 for idx,row in enumerate(d):
  if row.get('supplier') not in roots:continue
  source=row['supplier'];prior=row.copy()
  if source==roots[0]:
   scope='Ambient dimension is 3N and intrinsic dimension d is independent; the consumer uses the unchanged inclusion, inner product, mass matrix and mass-metric formulas, with its own regular-constraint count 3N-k when applicable.'
  else:
   scope='Spatial set Omega is a subset of R3 and I is a time interval; representation remains t(n)=sigma n pointwise, and the consumer states any spatial/time domains and stronger regularity or balance assumptions it needs.'
  row['evidence']='Focused current-definition compatibility check: '+scope
  row['supplier_raw_sha256']=hashes[source];row['focused_repair_evidence']=str(b/'consumer-dispositions.json');changes.append({'index':idx,'consumer':row['consumer'],'supplier':source,'before':prior,'after':row.copy()})
 if changes:
  dst=b/'before'/p;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(before);p.write_text(json.dumps(d,indent=2)+'\n');records.append({'path':str(p),'before_sha256':hashlib.sha256(before).hexdigest(),'after_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'changes':changes})
# All outside contract excerpts remain literally current; adding text before an unchanged excerpt does not stale it.
quotes=[]
for p in Path('research').glob(run+'-batch-*.proof-contracts.json'):
 d=json.load(open(p))
 for id,c in d.get('contracts',{}).items():
  for idx,a in enumerate(c.get('citations',[])):
   if a.get('source') not in roots:continue
   src=Path('items/'+a['source']+'.md').read_text();m=re.search(r'^## '+re.escape(a['source_section'])+r'\s*\n(.*?)(?=^## |\Z)',src,re.M|re.S);norm=lambda s:re.sub(r'\s+',' ',s).strip();valid=norm(a['quote']) in norm(m[1]);assert valid,(p,id)
   quotes.append({'path':str(p),'consumer':id,'citation_index':idx,'source':a['source'],'quote_is_exact_current_excerpt':valid,'supplier_raw_sha256':hashes[a['source']]})
(b/'context-mirror-receipt.json').write_text(json.dumps({'cross_batch_rows':records,'all_run_source_quote_checks':quotes,'batch34_direct_rows_or_quotes':[],'batch34_reason':'Only indirect uses; no direct source quote or cross-batch row for either changed definition exists in batch34.'},indent=2)+'\n');print('updated cross files',len(records),'exact quotes',len(quotes))
