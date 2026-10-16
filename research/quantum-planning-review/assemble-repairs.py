"""Assemble source-reader repair recipes; never modifies library sources."""
import hashlib
import json
import pathlib
import re

base = pathlib.Path('research/quantum-planning-review')
plans = []
refresh_path = base / 'planning-snapshot-refreshes.json'
refreshes = json.loads(refresh_path.read_text())['refreshes'] if refresh_path.exists() else []
for n in range(1, 7):
    path = pathlib.Path(f'research/quantum-computing-planning/reports/qc_r{n}.md')
    blocks = re.findall(r'(?:```|~~~)json\s*(.*?)(?:```|~~~)', path.read_text(), re.S)
    plan = json.loads(blocks[-1])
    plans.append({'source_report': str(path), 'plan': plan})

def dictionaries(value):
    if isinstance(value, dict):
        yield value
        for child in value.values():
            yield from dictionaries(child)
    elif isinstance(value, list):
        for child in value:
            yield from dictionaries(child)

edges = json.loads((base / 'inherited-remark-edges.json').read_text())
repairs = []
suppliers = {}
for wrapper in plans:
    for obj in dictionaries(wrapper['plan']):
        identity = obj.get('id')
        replacement = next((obj[k] for k in ['exact_replacement_deps', 'replacement_deps', 'exact_proposed_replacement_deps'] if k in obj), None)
        if identity and 'current_deps' in obj and replacement is not None:
            path = pathlib.Path(obj.get('path', f'items/{identity}.md'))
            digest = hashlib.sha256(path.read_bytes()).hexdigest()
            declared = next((obj[k] for k in ['current_raw_sha256', 'source_raw_sha256', 'raw_sha256'] if k in obj), None)
            if declared != digest:
                refresh = next((r for r in refreshes if r['id'] == identity and r['reader_raw_sha256'] == declared and r['current_raw_sha256'] == digest), None)
                if refresh is None:
                    raise ValueError(f'Hash mismatch for {identity}: {declared} versus {digest}')
                for key, expected in [('reader_snapshot', declared), ('current_snapshot', digest)]:
                    if hashlib.sha256(pathlib.Path(refresh[key]).read_bytes()).hexdigest() != expected:
                        raise ValueError(f'Invalid archived refresh bytes for {identity}')
            repairs.append({'id': identity, 'source': str(path), 'source_raw_sha256': digest,
                            'current_deps': obj['current_deps'], 'replacement_deps': replacement,
                            'source_report': wrapper['source_report'], 'recipe': obj})
        elif identity and 'deps' in obj and obj.get('kind') in ['definition', 'lemma', 'theorem']:
            if identity in suppliers:
                continue  # Original owner report precedes copied coordination excerpts.
            suppliers[identity] = {**obj, 'source_report': wrapper['source_report']}

expected = {c['id'] for r in edges['remarks'] for c in r['direct_logical_consumers']}
covered = {r['id'] for r in repairs}
if not expected.issubset(covered):
    raise ValueError(f'Missing direct-consumer repairs: {expected - covered}')
if len(covered) != len(repairs):
    raise ValueError('Duplicate consumer repair')
redundant = 'lem-complex-coordinate-map-is-affine-isometry-and-preserves-openness'
shared = 'thm-complex-coordinate-isometry-and-topology-transport'
if redundant in suppliers and shared in suppliers:
    del suppliers[redundant]
    for repair in repairs:
        repair['replacement_deps'] = [shared if d == redundant else d for d in repair['replacement_deps']]
out = {'status': 'draft-planning', 'actual_library_closure': 'hold',
       'integration_decisions': ['The r2 affine/isometry/openness bridge is consolidated into r1 topology-transport theorem, including its affine segment clause. Original reader recipes remain provenance; normalized replacement_deps govern the virtual view.', 'Copied r4 bridge excerpts defer to r1 original-owner contracts.'],
       'scope': 'Mandatory prerequisite repair recipes, not executed source changes or proof acceptance',
       'inherited_remarks': [r['remark'] for r in edges['remarks']],
       'direct_consumers': len(expected), 'repairs': repairs,
       'proposed_suppliers': list(suppliers.values()), 'reader_plans': plans,
       'planning_snapshot_refreshes': refreshes}
(base / 'prerequisite-repairs.json').write_text(json.dumps(out, indent=2) + '\n')
print(json.dumps({'direct_consumers': len(expected), 'repairs': len(repairs), 'proposed_suppliers': len(suppliers)}))
