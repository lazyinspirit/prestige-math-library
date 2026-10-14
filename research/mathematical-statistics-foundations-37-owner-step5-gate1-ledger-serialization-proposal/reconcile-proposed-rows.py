"""READ-ONLY owner proposal: print deduplicated append candidates; never write ledgers.
Root must first authenticate original native reports and drain canonical writers.
This is a serialization adapter, not mathematical review or gate authorization.
"""
import json
import pathlib
import sys

proposal_dir = pathlib.Path(__file__).resolve().parent
repository_dir = proposal_dir.parent.parent
proposed = json.loads((proposal_dir / 'proposed-22-append-only-rows.json').read_text())
current = [json.loads(line) for line in (repository_dir / 'research/defect-ledger.jsonl').read_text().splitlines() if line.strip()]
seen = {}
superseded = set()
for row in current:
    for old_id in row.get('supersedes', []):
        if old_id not in seen or (seen[old_id]['run'], seen[old_id]['subject']) != (row['run'], row['subject']):
            raise SystemExit('Invalid current supersedes history; root must resolve before serialization.')
        superseded.add(old_id)
    if row['defect_id'] in seen:
        raise SystemExit('Duplicate current defect ID; root must resolve before serialization.')
    seen[row['defect_id']] = row
active = [row for row in current if row['defect_id'] not in superseded]

def ancestors(row):
    result = set()
    pending = list(row.get('supersedes', []))
    while pending:
        old_id = pending.pop()
        if old_id not in result:
            result.add(old_id)
            pending.extend(seen[old_id].get('supersedes', []))
    return result

def tuple_of(row, reference):
    if not isinstance(reference, dict):
        return None
    fields = (reference.get('id', row['subject']), reference.get('model'), reference.get('context_sha256'), reference.get('item_sha256'))
    return fields if all(fields) else None

owners = {}
for row in active:
    for reference in row.get('adjudication_ref', []):
        key = tuple_of(row, reference)
        if key:
            owners.setdefault(key, []).append(row['defect_id'])
append_candidates = []
skipped = []
held = []
for row in proposed:
    key = next((tuple_of(row, ref) for ref in row.get('adjudication_ref', []) if isinstance(ref, dict) and ref.get('native_report')), None)
    if key and key in owners:
        if len(set(owners[key])) > 1:
            held.append({'defect_id': row['defect_id'], 'reason': 'Multiple current exact tuple owners', 'owners': owners[key]})
        else:
            skipped.append({'defect_id': row['defect_id'], 'reason': 'Current exact tuple owner exists', 'owner': owners[key][0]})
        continue
    if row['defect_id'] in seen:
        held.append({'defect_id': row['defect_id'], 'reason': 'ID now exists but did not provide expected tuple ownership; root must reconcile exact carrier.'})
        continue
    if row.get('historical_taxonomy'):
        history = row['historical_taxonomy']
        successors = [candidate for candidate in active if history['original_defect_id'] in ancestors(candidate)]
        if any(candidate.get(history['field']) == history['normalized_value'] for candidate in successors):
            skipped.append({'defect_id': row['defect_id'], 'reason': 'Equivalent active taxonomy correction exists'})
            continue
        if successors:
            held.append({'defect_id': row['defect_id'], 'reason': 'Different active historical correction exists; root must reconcile instead of forking history.'})
            continue
    elif row.get('supersedes') and any(old_id in superseded for old_id in row['supersedes']):
        held.append({'defect_id': row['defect_id'], 'reason': 'Original owner is no longer latest active row; root must bind the actual latest successor.'})
        continue
    elif key:
        partial = [candidate['defect_id'] for candidate in active if candidate['run'] == row['run'] and candidate['subject'] == row['subject'] and candidate.get('caught_at_stage') == '5-adjudicate' and candidate.get('severity') == 'fatal' and not any(tuple_of(candidate, ref) for ref in candidate.get('adjudication_ref', []))]
        if partial:
            held.append({'defect_id': row['defect_id'], 'reason': 'Potential concurrently materialized same defect without exact tuple; root must identify and supersede actual latest owner.', 'partial_owners': partial})
            continue
    append_candidates.append(row)
print(json.dumps({'status': 'proposal-only-no-writes', 'append_candidates': append_candidates, 'skipped': skipped, 'held_for_root_reconciliation': held}, indent=2))
