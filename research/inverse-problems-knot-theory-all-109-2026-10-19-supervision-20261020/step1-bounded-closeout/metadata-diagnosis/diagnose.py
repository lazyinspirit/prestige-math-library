"""Read metadata only. No item argument reads, hashing, gates or engine writes.

This standalone projection diagnoses integration work, not mathematical validity
or receipt currency. Item files are read only through their closing frontmatter
delimiter. Output is confined to this research directory.
"""
from pathlib import Path
import collections
import datetime
import json
import yaml

RUN = 'inverse-problems-knot-theory-all-109-2026-10-19'
RESEARCH = Path('research')
BASE = RESEARCH / (RUN + '-supervision-20261020')
OUT = BASE / 'step1-bounded-closeout/metadata-diagnosis'

def read(path):
    return json.loads(Path(path).read_text())

def fm_only(path):
    with Path(path).open() as stream:
        if stream.readline().strip() != '---':
            return None
        lines = []
        for line in stream:
            if line.strip() == '---':
                return yaml.safe_load(''.join(lines))
            lines.append(line)
    return None

state = read(Path('.autopilot') / RUN / 'state.json')
original_map = read(RESEARCH / (RUN + '-math-resolution-map.json'))
targets = {row['id'] for row in original_map['targets']}
assignments = read(BASE / 'step1-bounded-closeout/assignments-index.json')
manifest_files = sorted(RESEARCH.glob(RUN + '-batch-*.pages.json'))
homes = collections.defaultdict(list)
pages = []
items = []
contracts = {}
coverage = {}
missing_siblings = collections.defaultdict(list)
for file in manifest_files:
    batch = file.name.split('-batch-')[1].split('.')[0]
    for page in read(file):
        pages.append((batch, page))
        for item in page.get('items', []):
            row = item if isinstance(item, dict) else {'id': item}
            items.append((batch, page['id'], row))
            homes[row['id']].append({'batch': batch, 'page': page['id']})
    for suffix in ['proof-contracts', 'coverage', 'cross-batch-dependencies']:
        sibling = RESEARCH / (RUN + '-batch-' + batch + '.' + suffix + '.json')
        if not sibling.exists():
            missing_siblings[suffix].append(batch)
        elif suffix == 'proof-contracts':
            contracts[batch] = read(sibling)
        elif suffix == 'coverage':
            coverage[batch] = read(sibling)

canonical = {}
metadata_parse_errors = []
for path in Path('items').glob('*.md'):
    # Filename discovery through metadata only; never read a proof/body.
    try:
        fm = fm_only(path)
    except Exception as error:
        # An unrelated malformed source is not an audit subject here.
        if path.stem in homes or path.stem in targets:
            metadata_parse_errors.append({'id': path.stem, 'error': str(error)})
        continue
    if isinstance(fm, dict) and (fm.get('pipeline_run') == RUN
                                or path.stem in homes or path.stem in targets):
        canonical[path.stem] = fm

declared_adopted_ids = set()
def absorb_ids(value):
    if isinstance(value, str):
        if value.startswith('items/') and value.endswith('.md'):
            declared_adopted_ids.add(Path(value).stem)
        elif value.startswith(('def-', 'alg-', 'thm-', 'lem-', 'prop-', 'cor-',
                               'ex-', 'cex-', 'fs-', 'rem-', 'op-')):
            declared_adopted_ids.add(value)
    elif isinstance(value, list):
        for child in value:
            absorb_ids(child)
    elif isinstance(value, dict):
        for key in ['id', 'path', 'file']:
            if key in value:
                absorb_ids(value[key])

for closure in original_map.get('mathematical_closures', []):
    for key in ['originals', 'suppliers', 'source_bindings']:
        absorb_ids(closure.get(key, []))
for binding in read(BASE / 'canonical-adoption.json').get('bindings', []):
    absorb_ids(binding)

ready_counts = collections.Counter()
readiness_missing = []
readiness_escalated = []
readiness_dep_deltas = []
manifest_metadata_deltas = []
contract_scope_missing = []
contract_entry_missing = []
contract_held = []
coverage_unmentioned = []
def content_ids(doc):
    result = set()
    for page in doc.get('pages', []):
        for row in page.get('canonical', []):
            if isinstance(row, dict) and isinstance(row.get('item'), str):
                result.add(row['item'])
        for source in page.get('sources', []):
            for row in source.get('contents', []):
                if isinstance(row, dict) and isinstance(row.get('item'), str):
                    result.add(row['item'])
    return result

for batch, page_id, item in items:
    id = item['id']
    fm = canonical.get(id)
    if fm:
        fields = {}
        for field in ['kind', 'title', 'deps', 'proof_strategy', 'provenance',
                      'sources', 'dependency_level']:
            if field in item or field in fm:
                expected = fm.get(field, [] if field == 'deps' else None)
                if item.get(field, [] if field == 'deps' else None) != expected:
                    fields[field] = {'manifest': item.get(field), 'canonical_fm': expected}
        if fields:
            manifest_metadata_deltas.append({'id': id, 'batch': batch,
                                             'page': page_id, 'fields': fields})
    receipt = RESEARCH / (RUN + '-step1-' + id + '.json')
    if not receipt.exists():
        readiness_missing.append({'id': id, 'batch': batch})
    else:
        record = read(receipt)
        ready_counts[record.get('decision', 'malformed')] += 1
        if record.get('decision') == 'escalated':
            readiness_escalated.append({'id': id, 'batch': batch})
        if fm and not set(fm.get('deps', [])).issubset(record.get('dependencies', [])):
            readiness_dep_deltas.append({'id': id, 'batch': batch,
                'current_deps_not_bound_by_id': sorted(set(fm.get('deps', []))
                                              - set(record.get('dependencies', [])))})
    contract = contracts.get(batch, {})
    if id not in contract.get('scope', []):
        contract_scope_missing.append({'id': id, 'batch': batch})
    row = contract.get('contracts', {}).get(id)
    if row is None:
        contract_entry_missing.append({'id': id, 'batch': batch,
            'kind': item.get('kind'), 'proof_presence_not_inspected': True})
    elif isinstance(row, dict) and any(row.get(key) for key in
                                     ['unresolved_suppliers', 'unresolved_assumptions']):
        contract_held.append({'id': id, 'batch': batch,
            'proof_status': row.get('proof_status'),
            'unresolved_suppliers': row.get('unresolved_suppliers'),
            'unresolved_assumptions': row.get('unresolved_assumptions')})
    if id not in content_ids(coverage.get(batch, {})):
        coverage_unmentioned.append({'id': id, 'batch': batch})

plan_pages = {row['id']: row for row in read(RESEARCH / 'plan-spec.json')['pages']}
page_deltas = []
for batch, page in pages:
    path = Path('library') / page['category'] / (page['id'] + '.md')
    fm = fm_only(path) if path.exists() else None
    diffs = {}
    if fm is None:
        diffs['canonical_page_missing_or_unformed'] = str(path)
    else:
        wanted = [row['id'] if isinstance(row, dict) else row
                  for row in page.get('items', [])]
        actual = fm.get('items', []) + fm.get('examples', [])
        if collections.Counter(wanted) != collections.Counter(actual):
            diffs['inventory'] = {'manifest': wanted, 'canonical_page': actual}
        if fm.get('requires', []) != page.get('requires', []):
            diffs['requires'] = {'manifest': page.get('requires', []),
                                 'canonical_page': fm.get('requires', [])}
    plan_page = plan_pages.get(page['id'])
    if plan_page is None:
        diffs['plan_page_missing'] = True
    elif plan_page.get('requires', []) != page.get('requires', []):
        diffs['plan_requires'] = {'plan': plan_page.get('requires', []),
                                  'manifest': page.get('requires', [])}
    if diffs:
        page_deltas.append({'batch': batch, 'page': page['id'], 'fields': diffs})

unmanifested = sorted(id for id, fm in canonical.items()
                     if fm.get('pipeline_run') == RUN and id not in homes)
report = {
 'run': RUN, 'recorded_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
 'authority': 'Metadata diagnosis only; no item body/proof inspection, hashes, validators, gates, receipt-currency evaluation, canonical or engine edits.',
 'state_projection': {key: state.get(key) for key in ['stage', 'paused', 'pauseAfter', 'gateAttempts', 'nativeRefreshes']},
 'native_author_history': {'scaffold_dispatches': len([d for d in state['dispatches'].values() if d['stage'] == '1-scaffold']), 'preserve_original_records': True},
 'counts': {'manifests': len(manifest_files), 'pages': len(pages),
            'unique_manifest_items': len(homes), 'original_targets': len(targets),
            'candidate_original_assignments': assignments['candidateOriginals'],
            'ready_record_decisions_NO_CURRENCY_CHECK': dict(ready_counts),
            'readiness_missing': len(readiness_missing),
            'manifest_metadata_delta_items': len(manifest_metadata_deltas),
            'page_metadata_delta_pages': len(page_deltas),
            'same_run_unmanifested_carriers': len(unmanifested),
            'unmanifested_in_recorded_adoption_or_closure_ids': len(set(unmanifested) & declared_adopted_ids),
            'contract_scope_missing': len(contract_scope_missing),
            'contract_entry_missing_NO_PROOF_CHECK': len(contract_entry_missing),
            'contract_explicit_unresolved_metadata_rows': len(contract_held),
            'coverage_no_singular_item_harvest_row': len(coverage_unmentioned),
            'readiness_dependency_id_delta_items': len(readiness_dep_deltas)},
 'missing_sibling_files': dict(missing_siblings),
 'merged_dependency_ledger_present': (RESEARCH / (RUN + '-cross-batch-dependencies.json')).exists(),
 'manifest_metadata_deltas': manifest_metadata_deltas,
 'page_metadata_deltas': page_deltas,
 'same_run_unmanifested_carriers': [{'id': id,
       'recorded_adoption_or_closure_id': id in declared_adopted_ids,
       'kind': canonical[id].get('kind'), 'page': canonical[id].get('page')}
                                  for id in unmanifested],
 'readiness_missing': readiness_missing,
 'readiness_escalated': readiness_escalated,
 'readiness_dependency_id_deltas': readiness_dep_deltas,
 'contract_scope_missing': contract_scope_missing,
 'contract_entry_missing_NO_PROOF_CHECK': contract_entry_missing,
 'contract_explicit_unresolved_rows': contract_held,
 'coverage_no_singular_item_harvest_row': coverage_unmentioned,
 'metadata_parse_errors_in_scope': metadata_parse_errors,
 'limits': ['No ready receipt is declared current; existing hashes were neither calculated nor compared.',
            'Absent contract records for definitions/algorithms can be intentional; actual supplied-argument coverage is root command scope.',
            'An unmanifested same-run carrier is not thereby adopted. Only explicit recorded adoption/closure identifiers are tagged, without checking their proof or hash.',
            'This is an observed metadata projection, not a fresh mathematical review or native coverage.']
}
OUT.mkdir(parents=True, exist_ok=True)
(OUT / 'metadata-projection.json').write_text(json.dumps(report, indent=2) + '\n')
print(json.dumps({'counts': report['counts'], 'missing_sibling_files': report['missing_sibling_files'],
                  'merged_dependency_ledger_present': report['merged_dependency_ledger_present']}, indent=2))
