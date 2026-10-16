#!/usr/bin/env python3
"""Register research page designs without adopting authoring/review evidence.

Defaults to a preview. --apply atomically appends new, dependency-ordered rows;
existing rows (including live-run inputs) are never rewritten.
"""
import argparse
import collections
import hashlib
import json
import pathlib
import re
import os

ROOT = pathlib.Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--apply', action='store_true')
args = parser.parse_args()
path = ROOT / 'research/plan-spec.json'
original = path.read_bytes()
spec = json.loads(original)
existing = {p['id']: p for p in spec['pages']}
proposed = {}
sources = {}

def load(name):
    sources[name] = hashlib.sha256((ROOT / name).read_bytes()).hexdigest()
    return json.loads((ROOT / name).read_text())

def add(p, source):
    p = dict(p)
    p['id'] = p.pop('page', p.get('id'))
    if p['id'] in existing:
        return
    p['items'] = []  # Native scaffolding supplies actual inventories.
    p['scaffold'] = source
    p['requires'] = list(dict.fromkeys(p.get('requires', [])))
    proposed[p['id']] = p

for category in ['information-theory', 'quantum-computing', 'quantum-algorithms']:
    source = f'research/{category}-planning/pages.json'
    for p in load(source)['pages']:
        add(p, f'research/plan-{category}-track.md')

numerical = []
for key, slug in [('linear', 'linear-algebra-and-approximation'),
                  ('dynamics', 'differential-equations-and-stochastic-dynamics'),
                  ('spatial', 'pdes-and-spatial-discretization'),
                  ('optimization', 'optimization-inverse-problems-and-uncertainty-quantification')]:
    for p in load(f'research/numerical-analysis-four-category-scaffolds-2026-10-16/{key}-inventory.json')['pairs']:
        numerical.append((key, 'numerical-' + slug, p))
bykey = {p['key']: p['a_page'] for _, _, p in numerical}
for key, cat, p in numerical:
    source = f'research/plan-numerical-{key}-track.md'
    req = [bykey.get(r, r) for r in p['requires']]
    for kind, id, companion, requires in [
        ('A', p['a_page'], p['b_page'], req),
        ('B', p['b_page'], p['a_page'], [p['a_page']])]:
        add({'id': id, 'kind': kind, 'category': cat, 'label': p['key'] + ('-B' if kind == 'B' else ''),
             'title': p.get('title', p['a_page'].replace('-', ' ').capitalize()) + (' — Examples' if kind == 'B' else ''),
             'companion': companion, 'requires': requires,
             'description': json.dumps({'scope': p['scope'], 'proof_route': p['proof_routes'],
                                        'examples': p['examples']}, ensure_ascii=False)}, source)
overrides = load('research/numerical-analysis-four-category-scaffolds-2026-10-16/dependency-overrides.json')
for action in ['removed', 'added']:
    for edge in overrides[action]:
        consumer = proposed.get(bykey[edge['consumer']])
        if consumer is None:
            continue
        supplier = bykey.get(edge['supplier'], edge['supplier'])
        if action == 'removed':
            consumer['requires'] = [r for r in consumer['requires'] if r != supplier]
        elif supplier not in consumer['requires']:
            consumer['requires'].append(supplier)

# The ML prose remains the full source contract. Resolve its prerequisite
# labels, explicit page references, and exact existing item homes into pages.
mlsource = 'research/plan-machine-learning-track.md'
mltext = (ROOT / mlsource).read_text()
sources[mlsource] = hashlib.sha256(mltext.encode()).hexdigest()
blocks = []
for m in re.finditer(r'^### ([^\n]+)\n([\s\S]*?)(?=^### |\Z)', mltext, re.M):
    pages = re.search(r'\*\*Pages:\*\*\s*([a-z0-9-]+)\s*/\s*([a-z0-9-]+)', m[2])
    if pages:
        blocks.append((m[1], m[2], pages[1], pages[2]))
labels = {p.get('label'): p['id'] for p in existing.values() if p.get('label') and p['kind'] == 'A'}
for heading, _, a, _ in blocks:
    labels[heading.split(' — ')[0]] = a
# Earlier prose tracks supply labels not retained in every canonical row.
for name in ['plan-mathematical-statistics-track.md', 'plan-statistical-models-experiments-track.md',
             'plan-bayesian-computational-statistics-track.md']:
    text = (ROOT / 'research' / name).read_text()
    for m in re.finditer(r'\*\*([A-Z]+-\d+)\*\*\s*`([a-z0-9-]+)`', text):
        labels[m[1]] = m[2]
    for m in re.finditer(r'^### ([A-Z]+-\d+)\s*[^\n]*\n([\s\S]*?)(?=^### |\Z)', text, re.M):
        pg = re.search(r'\*\*Pages:\*\*\s*`?([a-z0-9-]+)', m[2])
        if pg:
            labels[m[1]] = pg[1]
homes = {}
for f in sorted((ROOT / 'library').glob('**/*.md')):
    if f.name.startswith('_'):
        continue
    text = f.read_text()
    if not text.startswith('---'):
        continue
    for item in re.findall(r'^\s+- ([a-z0-9-]+)\s*$', text.split('---', 2)[1], re.M):
        homes.setdefault(item, f.stem)
allids = set(existing) | set(proposed) | {a for _, _, a, _ in blocks}
unresolved = []
for heading, block, a, b in blocks:
    if a in existing:
        continue  # Retain the five independently registered supplier homes.
    requires = re.search(r'\*\*Requires:\*\*([\s\S]*?)(?=\*\*Sources:\*\*|\Z)', block)
    if not requires:
        raise ValueError(f'{heading}: missing prerequisite design')
    text = requires[1]
    req = set()
    for label in re.findall(r'\b(?:ML|MSF|SME|BCS|P-KR|P-SDE|P-NUM-ODE|P-NUM-SDE|P-WGF|P-RMT)-\d+\b', text):
        target = labels.get(label)
        if target not in allids:
            unresolved.append({'page': a, 'reference': label, 'target': target})
        elif target != a:
            req.add(target)
    for token in re.findall(r'\b[a-z][a-z0-9]*(?:-[a-z0-9]+)+\b', text):
        target = token if token in allids else homes.get(token)
        if target and target != a:
            req.add(target)
    req = {r for r in req if r in allids}
    title = heading.split(' — ', 1)[-1]
    label = heading.split(' — ')[0]
    add({'id': a, 'title': title, 'kind': 'A', 'category': 'machine-learning',
         'label': label, 'companion': b, 'requires': sorted(req), 'description': block.strip()}, mlsource)
    add({'id': b, 'title': title + ' — Examples', 'kind': 'B', 'category': 'machine-learning',
         'label': label + '-B', 'companion': a, 'requires': [a]}, mlsource)

allpages = existing | proposed
for p in proposed.values():
    for r in p['requires']:
        if r not in allpages:
            unresolved.append({'page': p['id'], 'reference': r})
        elif allpages[r]['kind'] == 'B':
            unresolved.append({'page': p['id'], 'reference': r, 'reason': 'B pages cannot supply a planned page'})
if unresolved:
    print(json.dumps({'unresolved': unresolved}, indent=2))
    raise SystemExit(1)

ordered = []
visiting = set()
visited = set()
def visit(id):
    if id in visited or id in existing:
        return
    if id in visiting:
        raise ValueError(f'Planned prerequisite cycle: {id}, active: {sorted(visiting)}')
    visiting.add(id)
    for r in proposed[id]['requires']:
        visit(r)
    visiting.remove(id)
    visited.add(id)
    ordered.append(proposed[id])
for id in proposed:
    visit(id)
# Keep direct requirements minimal without changing their transitive closure.
def closure(id, seen=None):
    seen = set() if seen is None else seen
    if id in seen:
        return set()
    seen.add(id)
    result = set(allpages[id].get('requires', []))
    for dep in tuple(result):
        result.update(closure(dep, seen))
    return result
for p in ordered:
    req = p['requires']
    p['requires'] = [r for r in req if not any(r in closure(other) for other in req if other != r)]
anchor = int(max(p['order'] for p in spec['pages'])) + 1
for i, p in enumerate(ordered):
    p['order'] = anchor + i
report = {'new_pairs': dict(collections.Counter(p['category'] for p in ordered if p['kind'] == 'A')),
          'new_pages': len(ordered), 'existing_rows_preserved': len(existing), 'sources': sources,
          'pages': [p['id'] for p in ordered],
          'scope': 'Page-level registration only; native item scaffolding, source reading, proofs and gates remain required.'}
if not ordered:
    print('All research pairs are already registered; canonical plan and original receipt unchanged.')
    raise SystemExit(0)
out = ROOT / 'research/planned-tracks-registration-2026-10-17'
out.mkdir(exist_ok=True)
(out / 'preview.json').write_text(json.dumps({'pages': spec['pages'] + ordered}, indent=2, ensure_ascii=False) + '\n')
(out / 'pages.json').write_text(json.dumps(report['pages'], indent=2) + '\n')
(out / 'report.json').write_text(json.dumps(report, indent=2) + '\n')
if args.apply and ordered:
    if path.read_bytes() != original:
        raise RuntimeError('Canonical plan changed concurrently; rerun before applying')
    spec['pages'].extend(ordered)
    tmp = path.with_suffix('.json.registration-tmp')
    tmp.write_text(json.dumps(spec, indent=2, ensure_ascii=False) + '\n')
    os.replace(tmp, path)
print(json.dumps({k: v for k, v in report.items() if k not in ['pages', 'sources']}, indent=2))
