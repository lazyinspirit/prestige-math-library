#!/usr/bin/env python3
"""ROOT ONLY: exact-current batch50 metadata projection. Default is guarded preview; --apply is explicit. No source/native/runtime/check/hash/level operations."""
import argparse,copy,datetime,json,pathlib,shutil
base=pathlib.Path(__file__).resolve().parent
root=base.parent.parent
spec=json.loads((base/'payload.json').read_text())
parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--apply',action='store_true');args=parser.parse_args()
def require(ok,message):
    if not ok:raise SystemExit('REFUSED: '+message)
# Guard all original target bytes + current source guards + referenced source declarations.
for rel in spec['guards']:
    require((root/rel).read_bytes()==(base/spec['before_directory']/rel).read_bytes(),'current raw preimage differs: '+rel)
docs={rel:json.loads((root/rel).read_text()) for rel in spec['targets']}
for op in spec['operations']:
    obj=docs[op['target']]
    for key in op['path'][:-1]:obj=obj[key]
    key=op['path'][-1]
    require(obj[key]==op['old'],'old target field differs: '+op['target']+' '+str(op['path']))
    obj[key]=copy.deepcopy(op['new'])
# Proposed bytes must match the prepared human-reviewable previews exactly.
outputs={rel:json.dumps(doc,indent=2,ensure_ascii=False)+'\n' for rel,doc in docs.items()}
for rel,text in outputs.items():require(text==(base/'proposed'/rel).read_text(),'prepared preview differs: '+rel)
summary={'applied':False,'targets':spec['targets'],'field_operations':len(spec['operations']),'changes':spec['changes'],'source_and_native_history':'untouched'}
if args.apply:
    tag=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
    archive=base/('before-root-apply-'+tag);archive.mkdir()
    for rel in spec['guards']:
        dest=archive/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(root/rel,dest)
    # All raw/field/proposed checks and complete backup finish before any write.
    for rel,text in outputs.items():(root/rel).write_text(text)
    summary.update(applied=True,before_archive=str(archive.relative_to(root)))
    receipt=base/('completion-'+tag+'.json');receipt.write_text(json.dumps(summary,indent=2,ensure_ascii=False)+'\n');summary['completion']=str(receipt.relative_to(root))
print(json.dumps(summary,indent=2,ensure_ascii=False))
