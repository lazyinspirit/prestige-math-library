#!/usr/bin/env python3
"""Reverse-coverage detector: scaffold items carrying NO harvest or canonical row.

`tools/coverage-checklist.mjs` walks sources -> contents -> item, so an item that
no source heading and no canonical row ever names is invisible to it: the gate
passes while the item has no recorded backing at all. This walks the other
direction, items -> rows, and reports the difference.

Found as B5-1 on frontier-14 batch 5 (2 A-page items); the same class was then
found unfixed in batches 4 and 6 at the step-4 re-check (B4-5, B6-5).

Usage: reverse-coverage.py <run> [batch ...]      e.g. reverse-coverage.py frontier-14 4 5 6
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
run = sys.argv[1] if len(sys.argv) > 1 else 'frontier-14'
batches = sys.argv[2:] or ['1', '2', '3', '4', '5', '6']

total = 0
for b in batches:
    cov_path = os.path.join(ROOT, f'research/{run}-batch-{b}.coverage.json')
    pages_path = os.path.join(ROOT, f'research/{run}-batch-{b}.pages.json')
    if not (os.path.exists(cov_path) and os.path.exists(pages_path)):
        print(f'batch {b}: artifacts not found, skipped')
        continue
    cov = json.load(open(cov_path))
    named = set()
    for p in cov['pages']:
        for s in p.get('sources', []):
            for c in s.get('contents', []):
                if c.get('item'):
                    named.add(c['item'])
        for c in p.get('canonical', []):
            if c.get('item'):
                named.add(c['item'])
    for pg in json.load(open(pages_path)):
        missing = [it['id'] for it in pg['items'] if it['id'] not in named]
        total += len(missing)
        flag = 'OK' if not missing else f'{len(missing)} UNBACKED'
        print(f'batch {b} [{pg["kind"]}] {pg["id"]}: {len(pg["items"])} items, {flag}')
        for m in missing:
            print(f'      - {m}')

print(f'\ntotal items with no harvest or canonical row: {total}')
sys.exit(1 if total else 0)
