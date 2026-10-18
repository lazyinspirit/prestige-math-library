#!/usr/bin/env python3
"""Root-only exact byte installation. Default is read-only guard verification.
No validator, gate, native transition, readiness write, level update or commit.
Root must authenticate actual writer drain independently before --apply.
"""
from pathlib import Path
import argparse,json,hashlib,datetime,os
parser=argparse.ArgumentParser();parser.add_argument('--apply',action='store_true');parser.add_argument('--writers-drained-attested',action='store_true');args=parser.parse_args()
HERE=Path(__file__).resolve().parent
ROOT=HERE.parents[2]
assert (ROOT/'CLAUDE.md').is_file(),ROOT
h=lambda b:hashlib.sha256(b).hexdigest()
seal=json.loads((HERE/'integration-seal.json').read_text())
for row in seal['artifacts']:
 p=ROOT/row['path']
 if not p.is_file() or h(p.read_bytes())!=row['sha256']:raise SystemExit('REFUSED: sealed integration payload changed: '+row['path'])
index=json.loads((HERE/'integration-index.json').read_text());guards=json.loads((HERE/'current-readset.json').read_text());fail=[]
for row in guards:
 p=ROOT/row['path'];actual=h(p.read_bytes()) if p.is_file() else None
 if actual!=row['sha256']:fail.append({'path':row['path'],'expected':row['sha256'],'actual':actual})
for row in index['source_install_order']+index['metadata_operations']:
 p=ROOT/row['proposal']
 if not p.is_file() or h(p.read_bytes())!=row['proposal_sha256']:fail.append({'proposal':row['proposal'],'error':'proposal bytes changed'})
if fail:
 print(json.dumps({'status':'REFUSED; no canonical writes','mismatches':fail},indent=2));raise SystemExit(1)
print(f"Current guards match: {len(guards)}; 19 source replacements, 13 metadata/page replacements, 6 retirements.")
if not args.apply:
 print('Read-only verification only. Root must verify actual native writer drain and review the sealed index before applying.');raise SystemExit(0)
if not args.writers_drained_attested:raise SystemExit('REFUSED: root must independently authenticate real source-writer drain and pass --writers-drained-attested')
# Complete fresh preimages are preserved before the first canonical write.
stamp=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ');archive=HERE/('root-install-before-'+stamp);archive.mkdir()
targets={r['target'] for r in index['source_install_order']+index['metadata_operations']}|{r['path'] for r in index['retirements']};pre=[]
for rel in sorted(targets):
 p=ROOT/rel;b=p.read_bytes();q=archive/rel;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(b);pre.append({'path':rel,'sha256':h(b),'bytes':len(b)})
(archive/'index.json').write_text(json.dumps(pre,indent=2)+'\n')
def atomic(target,b):
 p=ROOT/target;tmp=p.with_name(p.name+f'.qre-owner-{os.getpid()}.tmp');tmp.write_bytes(b);tmp.replace(p)
for row in index['source_install_order']:atomic(row['target'],(ROOT/row['proposal']).read_bytes())
for row in index['metadata_operations']:atomic(row['target'],(ROOT/row['proposal']).read_bytes())
for row in index['retirements']:
 p=ROOT/row['path']
 if h(p.read_bytes())!=row['current_sha256']:raise SystemExit('REFUSED retirement after unexpected source race: '+str(p))
 p.unlink()
result={'run':index['run'],'installed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archive':str(archive.relative_to(ROOT)),'source_replacements':19,'metadata_page_replacements':len(index['metadata_operations']),'retirements':6,'native_controls_or_gate_runs':False,'remaining':'Root must reconcile dependency levels/current metadata/hashes/readiness, perform current local checks, and invoke only authorized native acceptance/gates. Original native execution/review history remains untouched.'}
(HERE/('root-install-result-'+stamp+'.json')).write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2))
