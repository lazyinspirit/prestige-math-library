#!/usr/bin/env python3
"""Check canonical research IDs and cross-category premise boundaries.

Category assemblers remain responsible for their full structural checks.
This check is not mathematical acceptance or a production gate.
"""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
parser = argparse.ArgumentParser()
parser.add_argument('--require-all', action='store_true')
args = parser.parse_args()
coordination = json.loads((ROOT / 'coordination.json').read_text())
errors, pending, categories, records, external = [], [], {}, {}, {}
for category, state in coordination['teams'].items():
    if state['status'] != 'complete':
        pending.append(category)
        continue
    candidates = [ROOT / category / name for name in
                  ('proposed-inventory.json', 'paired-inventory.json')]
    paths = [path for path in candidates if path.exists()]
    if len(paths) != 1:
        errors.append(f'{category}: expected exactly one canonical inventory')
        continue
    data = json.loads(paths[0].read_text())
    entries = data.get('records', data.get('items', []))
    if not isinstance(entries, list):
        errors.append(f'{category}: canonical entries must be a list')
        continue
    suppliers = data.get('external_suppliers', {})
    if isinstance(suppliers, list):
        suppliers = {entry['id']: entry for entry in suppliers}
    external[category] = suppliers
    categories[category] = {'items': len(entries),
                            'inventory': str(paths[0].relative_to(ROOT))}
    for entry in entries:
        identity = entry['id']
        if identity in records:
            errors.append(f'duplicate local canonical ID: {identity}')
        records[identity] = (category, entry)

edges = {identity: [] for identity in records}
for identity, (category, entry) in records.items():
    for dependency in entry.get('deps', []):
        if not isinstance(dependency, str):
            errors.append(f'{identity}: non-string premise {dependency!r}')
            continue
        if dependency in records:
            _, supplier = records[dependency]
            edges[identity].append(dependency)
        else:
            supplier = external[category].get(dependency)
        if supplier is None:
            errors.append(f'{identity}: unresolved declared premise {dependency}')
            continue
        if (entry.get('domain') == 'mathematics'
                and supplier.get('domain') != 'mathematics'):
            errors.append(f'{identity}: nonmathematical premise {dependency}')
    if (entry.get('kind') in {'postulate', 'physics-theorem', 'experiment',
                             'thought-experiment'}
            and entry.get('domain') != 'physics'):
        errors.append(f'{identity}: physics-only class outside physics')

color = {}
def visit(identity):
    if color.get(identity) == 1:
        errors.append(f'cross-category cycle at {identity}')
        return
    if color.get(identity) == 2:
        return
    color[identity] = 1
    for dependency in edges[identity]:
        visit(dependency)
    color[identity] = 2
for identity in records:
    visit(identity)
if args.require_all and pending:
    errors.append(f'categories not complete: {pending}')
result = {'pass': not errors, 'categories': categories,
          'total_items': len(records), 'pending_categories': pending,
          'errors': errors, 'checks': ['unique canonical IDs across categories',
          'declared dependency resolution', 'cross-category item DAG',
          'mathematics/physics premise boundary', 'physics-only item classes'],
          'qualification': 'Structural research check only; category assemblers '
          'and sufficient scoped arguments are still required. No independent '
          'mathematical acceptance or production readiness is certified.'}
(ROOT / 'cohort-check.json').write_text(json.dumps(result, indent=2) + '\n')
print(json.dumps(result, indent=2))
raise SystemExit(0 if result['pass'] else 1)
