import hashlib, json, os, pathlib, subprocess, sys

B = pathlib.Path(__file__).parent
p = B / 'queue.json'
q = json.loads(p.read_text())
by_id = {e['id']: e for e in q['entries']}
sha = lambda f: hashlib.sha256(pathlib.Path(f).read_bytes()).hexdigest()
names = sys.argv[1:]
assert names
n = 0
for name in names:
    f = B / 'diagram-quality' / name
    qa = json.loads(f.read_text())
    assert qa['reviewer'] == '/root'
    for r in qa['rows']:
        assert str(r['result']).startswith('pass'), r['id']
        e = by_id[r['id']]
        if not e.get('followup_pending') and e.get('coordinator_quality_file') == str(f):
            continue
        assert sha(r['source']) == r['current_source_raw_sha256'], r['id']
        assert sha(r['adjudication_file']) == r['adjudication_sha256'], r['id']
        for view in r['actual_original_resolution_views']:
            assert sha(view['path']) == view['sha256'], r['id']
        e.update(followup_pending=False, coordinator_quality_file=str(f), coordinator_quality_reviewer='/root', coordinator_quality_scope=r.get('scope') or r.get('scope_limit') or 'Actual bounded root source/diagram QA; no whole-proof audit.')
        n += 1
tmp = p.with_suffix('.tmp')
tmp.write_text(json.dumps(q, indent=2) + '\n')
os.replace(tmp, p)
script = B / 'integrate-root-visual-qa.mjs'
text = script.read_text()
new = [name for name in names if repr(name) not in text]
if new:
    marker = 'for(const f of ['
    assert text.count(marker) == 1
    script.write_text(text.replace(marker, marker + ','.join(repr(name) for name in new) + ',', 1))
subprocess.run(['python3', str(B / 'update-queue.py')], check=True)
print('Released', n, 'exact-source/report/image guarded root QA rows; readiness validated.')
