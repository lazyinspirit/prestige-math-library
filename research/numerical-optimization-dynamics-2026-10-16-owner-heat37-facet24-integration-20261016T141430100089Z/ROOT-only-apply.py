from pathlib import Path
import argparse,json
p=argparse.ArgumentParser();p.add_argument('--apply',action='store_true');p.add_argument('--root-declaration',type=Path,required=True);a=p.parse_args()
base=Path(__file__).resolve().parent
if not a.root_declaration.is_file() or not a.root_declaration.read_text().strip():raise SystemExit('Root current writer-drain/application declaration required')
g=json.loads((base/'guard-inventory.json').read_text())
for path in g['write_paths']:
 if Path(path).read_bytes()!=(base/'before'/path).read_bytes():raise SystemExit('WRITE GUARD DRIFT: '+path)
for path in g['read_context_guards']:
 if Path(path).read_bytes()!=(base/'context'/path).read_bytes():raise SystemExit('CONTEXT GUARD DRIFT: '+path)
if not a.apply:raise SystemExit('All exact guards match. Research utility has not applied anything; --apply is root-only.')
for path in g['write_paths']:Path(path).write_bytes((base/'proposed'/path).read_bytes())
print('Applied approved2 source +3 metadata carriers; no native/history/control/gate operation. Root owns subsequent checks and native follow-up.')
