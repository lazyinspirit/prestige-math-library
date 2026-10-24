import hashlib, json, os, pathlib, sys

B = pathlib.Path(__file__).parent
p = B / 'queue.json'
q = json.loads(p.read_text())
count, mode, name = int(sys.argv[1]), sys.argv[2], sys.argv[3]
out = B / name
assert mode in ('primary', 'diagram', 'any') and not out.exists()
rows = []
for e in q['entries']:
    if e['status'] != 'pending-adjudication' or e.get('adjudicator'):
        continue
    if mode != 'any' and bool(e.get('diagram_intake')) != (mode == 'diagram'):
        continue
    assert not (B / 'adjudications' / (e['id'] + '.json')).exists(), e['id']
    assert hashlib.sha256(pathlib.Path(e['source']).read_bytes()).hexdigest() == e['before_raw_sha256'], e['id']
    e.update(followup_pending=True, status='adjudicating', adjudicator='/root/rendering_repair_supervisor2/' + e['group'])
    rows.append({'group': e['group'], 'id': e['id']})
    if len(rows) == count:
        break
assert len(rows) == count, 'Not enough fresh guarded entries; no queue write performed'
tmp = p.with_suffix('.tmp')
tmp.write_text(json.dumps(q, indent=2) + '\n')
os.replace(tmp, p)
out.write_text(json.dumps(rows, indent=2) + '\n')
print(json.dumps(rows))
