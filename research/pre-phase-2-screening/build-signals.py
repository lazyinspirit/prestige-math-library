"""Reproducible cheap retrieval signals, never mathematical screening receipts."""
from pathlib import Path
import json
import re
import runpy

OUT = Path(__file__).resolve().parent
ROOT = OUT.parents[1]
parse = runpy.run_path(str(OUT / 'build-inventories.py'))['parse']
census = [json.loads(line) for line in (OUT / 'census.jsonl').read_text().splitlines()]
items = {}
for p in (ROOT / 'items').glob('*.md'):
    meta, body = parse(p.read_text())
    items[meta['id']] = (meta, body)
recorded = {i for i, (meta, body) in items.items() if meta.get('proved_here') is False}
anonymous = re.compile(r'(?:standard|classical|well-known|usual|familiar)[^\n.]{0,100}(?:theorem|lemma|argument|result|criterion|construction)', re.I)
anonymous_rows = []
recorded_rows = []
for row in census:
    # Existing active classes already have queue ownership. These signals
    # prioritize expansion outside those classes; they do not clear the others.
    if row['initial_class'] is not None:
        continue
    meta, body = items[row['id']]
    proof = re.split(r'^## Proof\s*$', body, maxsplit=1, flags=re.M)
    if len(proof) > 1:
        for match in anonymous.finditer(proof[1]):
            anonymous_rows.append(dict(id=row['id'], homes=row['homes'], phrase=match[0],
                kind='anonymous-proof-invocation', status='retrieval_signal_only'))
    targets = (set(meta.get('deps', [])) | set(meta.get('justified_by', []))) & recorded
    if targets:
        recorded_rows.append(dict(id=row['id'], targets=sorted(targets),
            own_proved_here=meta.get('proved_here'),
            proof_heading=bool(re.search(r'^## Proof', body, re.M)), status='retrieval_signal_only'))
for name, rows in [('anonymous-invocation-signals.jsonl', anonymous_rows),
                   ('recorded-prerequisite-signals.jsonl', recorded_rows)]:
    (OUT / name).write_text(''.join(json.dumps(row) + '\n' for row in rows))
print(json.dumps(dict(census_items=len(census),
    expansion_search_items=sum(row['initial_class'] is None for row in census),
    anonymous_signals=len(anonymous_rows), anonymous_consumers=len({r['id'] for r in anonymous_rows}),
    recorded_signals=len(recorded_rows), recorded_proof_consumers=sum(r['proof_heading'] for r in recorded_rows),
    limitation='Pattern misses and existing queue membership never establish clearance.')))
