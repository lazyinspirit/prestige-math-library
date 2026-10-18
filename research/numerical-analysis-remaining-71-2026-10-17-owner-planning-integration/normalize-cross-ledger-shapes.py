from pathlib import Path
import json, copy, datetime

run = 'numerical-analysis-remaining-71-2026-10-17'
base = Path('research', run + '-owner-planning-integration')
archive = base / 'cross-ledger-shape-before'
receipt = base / 'cross-ledger-shape-reconciliation.json'
if receipt.exists():
    raise RuntimeError('Already normalized')
owners = {}
for p in Path('research').glob(run + '-batch-*.pages.json'):
    batch = p.name.split('-batch-')[1].split('.')[0]
    for page in json.loads(p.read_text()):
        owners['page:' + page['id']] = batch
        for item in page['items']:
            owners['item:' + item['id']] = batch
changes, observations, pending = [], [], []
for p in sorted(Path('research').glob(run + '-batch-*.cross-batch-dependencies.json')):
    batch = p.name.split('-batch-')[1].split('.')[0]
    original = archive / p
    old = original.read_text() if original.exists() else p.read_text()
    data = json.loads(old)
    rows = data if isinstance(data, list) else data.get('dependencies')
    if not isinstance(rows, list):
        raise RuntimeError('Unknown container: ' + str(p))
    out = []
    for row in rows:
        kind, consumer, status = row['kind'], row['consumer'], row['status']
        if kind in ['design-interface', 'same-run-rehome'] or consumer == 'owner-reconciliation' or (kind == 'page' and owners.get('item:' + consumer) == batch):
            observations.append({'batch': batch, 'origin': str(p), 'row': row,
                'disposition': 'Preserved non-edge design/rehome/owner observation outside typed current dependency input; no supplier acceptance or resolution inferred.'})
            continue
        normalized = copy.deepcopy(row)
        if kind == 'batch':
            if owners.get('page:' + consumer) != batch:
                raise RuntimeError('Unknown batch consumer')
            normalized.update(kind='page', historical_kind=kind)
        if status in ['pending', 'owner-escalation']:
            normalized.update(status='open', historical_status=status)
        elif status == 'verified-interface-limited':
            normalized.update(status='verified', historical_status=status,
                interface_qualifier_retained='Only the exact existing evidence/required_hypotheses are verified; no broader theorem or independent acceptance.')
        consumers = row.get('consumers') if consumer == 'multiple items' else consumer.split(',')
        if not isinstance(consumers, list) or not consumers:
            raise RuntimeError('Missing aggregate consumers')
        for target in consumers:
            current = copy.deepcopy(normalized)
            current['consumer'] = target
            if target != consumer:
                current['historical_aggregate_consumer'] = consumer
            if owners.get(current['kind'] + ':' + target) != batch:
                raise RuntimeError('Wrong owner: ' + batch + ' ' + target)
            if current['kind'] not in ['item', 'page'] or current['status'] not in ['open', 'verified', 'removed']:
                raise RuntimeError('Unsupported row: ' + str(current))
            out.append(current)
    unique = {}
    for row in out:
        key = (row['kind'], row['consumer'], row['supplier'])
        if key in unique:
            prior = unique[key]
            prior.setdefault('historical_duplicate_reviews', []).append(row)
            if row['status'] == 'open':
                prior['status'] = 'open'
        else:
            unique[key] = row
    out = list(unique.values())
    if data != out:
        changes.append({'batch': batch, 'file': str(p),
            'before_container': 'array' if isinstance(data, list) else 'object/dependencies', 'after_rows': len(out)})
        pending.append((p, original, old, json.dumps(out, indent=2, ensure_ascii=False) + '\n'))

# Validate every transformation before mutation. Preserve earliest originals,
# including the few completed writes from the interrupted first invocation.
for p, original, old, new in pending:
    original.parent.mkdir(parents=True, exist_ok=True)
    if not original.exists():
        original.write_text(old)
    elif original.read_text() != old:
        raise RuntimeError('Historical archive changed')
    p.write_text(new)
now = datetime.datetime.now(datetime.timezone.utc).isoformat()
(base / 'cross-ledger-nonedge-owner-observations.json').write_text(json.dumps({
    'at': now, 'observations': observations, 'historical_full_files': str(archive)}, indent=2, ensure_ascii=False) + '\n')
receipt.write_text(json.dumps({'at': now, 'changes': changes, 'observation_count': len(observations),
    'initial_invocation': 'Stopped at unrecognized same-run-rehome row after some completed normalizations. Earliest originals retained and all transformed again from those exact originals.',
    'operation': 'Normalize exact native row shapes and aggregate consumers. Preserve all original files and observations. Pending/escalated map to open, not resolved. Existing interface-limited verification retains its exact limits. No canonical source, dependency declaration, mathematical verdict or readiness hash changed.'}, indent=2) + '\n')
print(json.dumps({'changes': changes, 'observations': len(observations)}, indent=2))
