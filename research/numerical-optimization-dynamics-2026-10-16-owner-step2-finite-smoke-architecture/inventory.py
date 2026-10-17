#!/usr/bin/env python3
"""Read-only static inventory; no registry function, gate, fixture or self-test runs."""
from pathlib import Path
from collections import Counter
from datetime import datetime, timezone
import hashlib, json, re
ROOT=Path.cwd()
RUN='numerical-optimization-dynamics-2026-10-16'
MERGED=Path('research')/(RUN+'-proof-contracts.json')
NATIVE=Path('research')/(RUN+'-root-step2-native-first-battery/finite-smoke.json')
registry={}
# Imported files are scanned for object key metadata only, never imported/run.
for p in map(Path,['tools/finite-smoke.mjs','tools/finite-smoke-quantum-qc.mjs','tools/finite-smoke-quantum-query.mjs','tools/finite-smoke-quantum-estimation.mjs']):
 for n,line in enumerate(p.read_text().splitlines(),1):
  m=re.match(r"^\s{2}['\"]([^'\"]+)['\"]\s*:",line)
  if m:registry.setdefault(m[1],[]).append({'path':str(p),'line':n})
merged=json.loads(MERGED.read_text());native=json.loads(NATIVE.read_text());owners={};batches={}
for p in Path('research').glob(RUN+'-batch-*.proof-contracts.json'):
 m=re.fullmatch(re.escape(RUN)+r'-batch-(\d+)\.proof-contracts\.json',p.name)
 if not m:continue
 doc=json.loads(p.read_text());batches[m[1]]=(p,doc)
 for item in doc['scope']:owners.setdefault(item,[]).append(m[1])
norm=lambda s:re.sub(r'\s+',' ',s).strip()
family={8:'finite-particle-and-barrier-model',16:'small-sparse-elimination',20:'polynomial-quadrature',36:'linear-multistep-finite-model',41:'existing-supported-lasso',55:'periodic-grid-stencil',65:'implicit-rk-and-solver-trace',71:'quasi-newton-finite-update',74:'rosenbrock-stage-and-solver-model',77:'time-parallel-finite-propagators',79:'structured-population-finite-flux',82:'gauss-polynomial-moment-model',88:'inverse-problem-finite-model',101:'elliptic-control-exact-data',104:'multirate-finite-step',107:'sensitivity-finite-moment-model'}
packets=[('01-14',[8]),('15-28',[16,20]),('29-42',[36]),('43-56',[55]),('57-70',[65]),('71-84',[71,74,77,79,82]),('85-98',[88]),('99-107',[101,104,107])]
rows=[];drift=[];errors=[]
for item in merged['scope']:
 for index,entry in enumerate(merged['contracts'][item].get('finite_smoke',[])):
  own=owners.get(item,[])
  if len(own)!=1:errors.append('ambiguous item ownership: '+item);continue
  batch=int(own[0]);bp,bd=batches[own[0]]
  if bd['contracts'][item].get('finite_smoke',[])!=merged['contracts'][item].get('finite_smoke',[]):drift.append(item)
  check=entry.get('check')
  kind='missing-check' if check is None else 'registered' if check in registry else 'unknown-machine-id' if isinstance(check,str) and re.fullmatch(r'[A-Za-z][A-Za-z0-9-]*',check) else 'prose-or-formula-as-check'
  assertion=entry.get('asserts');source=Path('items')/(item+'.md');raw=source.read_bytes();text=raw.decode()
  ast='missing' if not isinstance(assertion,str)or not assertion.strip() else 'source-exact' if norm(assertion)in norm(text) else 'nonliteral-or-stale'
  rows.append({'batch':batch,'id':item,'entry_index':index,'contract':str(bp),'locus':f'/contracts/{item}/finite_smoke/{index}','source':str(source),'source_raw_sha256':hashlib.sha256(raw).hexdigest(),'shape':kind,'assertion_status':ast,'model_family':family[batch],'packet':next((p for p,bs in packets if batch in bs),None),'entry':entry,'registry_location':registry.get(check,[])})
invalid=[r for r in rows if r['shape']!='registered'];native_errors=re.findall(r'^ERROR smoke-check \[([^\]]+)\]: unknown finite smoke check (.*)$',native['output'],re.M)
expected=[(r['id'],r['entry'].get('check','(missing)'))for r in invalid]
if native_errors!=expected:errors.append('native failure list differs from current scoped invalid inventory')
summary={'recorded_at':datetime.now(timezone.utc).isoformat(),'merged_contract':str(MERGED),'merged_raw_sha256':hashlib.sha256(MERGED.read_bytes()).hexdigest(),'native_failure':str(NATIVE),'native_raw_sha256':hashlib.sha256(NATIVE.read_bytes()).hexdigest(),'scope_items':len(merged['scope']),'obligation_entries':len(rows),'items_with_obligations':len(set(r['id']for r in rows)),'supported_entries':sum(r['shape']=='registered'for r in rows),'invalid_entries':len(invalid),'invalid_items':len(set(r['id']for r in invalid)),'invalid_shape_counts':dict(Counter(r['shape']for r in invalid)),'assertion_status_all':dict(Counter(r['assertion_status']for r in rows)),'unique_unknown_nonmissing_strings':len(set(r['entry'].get('check')for r in invalid if r['entry'].get('check')is not None)),'native_error_lines':len(native_errors),'native_list_matches_exact_ordered_current_invalid_inventory':native_errors==expected,'current_batch_finite_smoke_drift':sorted(set(drift)),'batches_with_obligations':sorted(set(r['batch']for r in rows)),'static_registry_key_count':len(registry),'errors':errors,'limits':'Static run-scoped shape/excerpt/ownership inventory only; no numerical fixtures, registry callbacks, self-test or native gate executed.'}
allocation=[{'range':p,'batches':bs,'invalid_entries':sum(r['batch']in bs for r in invalid),'items':len(set(r['id']for r in invalid if r['batch']in bs)),'families':sorted(set(r['model_family']for r in invalid if r['batch']in bs))}for p,bs in packets]
print(json.dumps({'summary':summary,'allocation':allocation,'batch_counts':dict(sorted(Counter(str(r['batch'])for r in rows).items(),key=lambda x:int(x[0]))),'rows':rows},indent=2))
