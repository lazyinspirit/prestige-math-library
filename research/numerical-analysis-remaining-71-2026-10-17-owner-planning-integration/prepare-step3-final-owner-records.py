from pathlib import Path
import json, hashlib, datetime

n = 'numerical-analysis-remaining-71-2026-10-17'
base = Path('research') / (n + '-owner-planning-integration')
out = base / 'step3-final-owner-record-integration'
out.mkdir(exist_ok=True)
assert not (out / 'prepared.json').exists(), 'Nonoverwriting preparation already exists'
sha = lambda b: hashlib.sha256(b).hexdigest()
now = datetime.datetime.now(datetime.timezone.utc).isoformat()
load = lambda name: json.loads((base / name).read_text())
gauss = load('step3-gaussian-decision-resolution-proposal.json')
afem = load('step3-afem54-order63-decision-resolution-proposal.json')
curved = load('step3-curved63-historical-owner-resolution-proposal.json')
lebesgue = load('step3-lebesgue67-decision-resolution-proposal.json')
docs, before, archives = {}, {}, []
for batch in [11, 17, 54, 63, 67]:
    p = Path(f'research/{n}-alpha-batch-{batch}-3a-decisions.json')
    before[str(p)] = sha(p.read_bytes())
    docs[str(p)] = json.loads(p.read_text())
    for src in [p, Path(f'research/{n}-alpha-batch-{batch}-3a.md')]:
        dest = out / src.name
        assert not dest.exists()
        dest.write_bytes(src.read_bytes())
        archives.append({'path': str(dest), 'sha256': sha(dest.read_bytes())})

def patch(file, decision, exact=None):
    rows = docs[file]['decisions']
    pos = next(i for i, r in enumerate(rows) if r['obligation'] == decision['obligation'])
    if exact is not None:
        assert rows[pos] == exact, decision['obligation']
    else:
        assert rows[pos]['verdict'] == 'escalated', decision['obligation']
    assert rows[pos]['id'] == decision['id'] and rows[pos]['route'] == decision['route']
    decision['owner_resolution'] = decision.get('owner_resolution', decision['evidence'])
    decision['native_execution_credit'] = False
    rows[pos] = decision

# One underlying law defect, observed by producer and downstream reviewers.
law = gauss['underlying_law_defect_superseding_row_proposal']
law['adjudication_ref'] = [r for r in law['adjudication_ref']
                           if r['obligation'] != 'page:11:randomized-low-rank-approximation']
rows = [law]
p11 = f'research/{n}-alpha-batch-11-3a-decisions.json'
for change in gauss['batch11_minimal_existing_row_patches']:
    target = next(r for r in docs[p11]['decisions'] if r['obligation'] == change['obligation'])
    if change['obligation'].startswith('page:'):
        target.update(verdict='reviewed_no_defect', change_kind='audit_enrichment', defect_ids=[])
        target['evidence'] = ('Owner current-page disposition: retain the new proved helper placements and removal of the '
            'obsolete pending-prerequisite annotation. The reader annotation was truthful at its original boundary; '
            'its later removal after genuine helper authoring is audit enrichment, not a new physical mathematical '
            'page defect. The actual mathematical summary and exact-arithmetic scope are unchanged and the same '
            'Gaussian owner checked the complete page/consumer interface. Original native amended_repair and its '
            'three cross-subject defect references remain archived; no native coverage is invented.')
        target['owner_resolution'] = target['evidence']
        target['native_execution_credit'] = False
    else:
        target.update(change['only_required_change'])
for d in gauss['batch17_exact_replacement_row_proposals']:
    patch(f'research/{n}-alpha-batch-17-3a-decisions.json', d)
for addition in gauss['postnative_helper_supplemental_proposals']:
    row = addition['ledger_append_proposal']
    row['location'] = 'proof-step'
    rows.append(row)
    decision = addition['batch11_supplemental_decision_proposal']
    assert all(r['obligation'] != decision['obligation'] for r in docs[p11]['decisions'])
    docs[p11]['decisions'].append(decision)

# Actual recovered native source bytes, not a transcript archive.
pre63 = json.loads(Path(f'research/{n}-step3-hash-63-pre.json').read_text())
recovered = []
for id, source in curved['recovery']['sources'].items():
    text = source['source_text']
    assert sha(text.encode()) == pre63['hashes'][id]['item_sha256']
    log = Path(source['native_log']).read_bytes().decode()
    assert log[source['source_start_character']:source['source_end_character_exclusive']] == text
    dest = out / (id + '-recovered-pre-reader.md')
    assert not dest.exists()
    dest.write_text(text)
    recovered.append({'id': id, 'source': str(dest), 'sha256': sha(dest.read_bytes()),
                      'native_log': source['native_log'], 'native_log_sha256': sha(Path(source['native_log']).read_bytes()),
                      'method': 'Exact inert source-text slice from actual native output, verified against immutable pre hash; no log code executed or transcript copied.'})
for d in curved['proposed_decisions']:
    patch(f'research/{n}-alpha-batch-63-3a-decisions.json', d)
rows += curved['proposed_new_fixed_ledger_rows']

for change in afem['proposed_decision_replacements']:
    patch(change['decision_file'], change['proposed_replacement'], change['exact_original_row'])
rows += afem['proposed_defect_ledger_append']['rows']
for change in lebesgue['proposed_decision_changes']:
    patch(change['file'], change['proposed_working_decision'], change['guard_exact_original_decision'])
row = lebesgue['proposed_single_defect_append']
if isinstance(row, dict) and 'row' in row:
    row = row['row']
rows.append(row)

existing = {json.loads(line)['defect_id'] for line in Path('research/defect-ledger.jsonl').read_text().splitlines() if line}
assert len({r['defect_id'] for r in rows}) == len(rows)
assert not existing.intersection(r['defect_id'] for r in rows)
for row in rows:
    row['at'] = now
    if row.get('location', '').startswith('proof-step'):
        row['location'] = 'proof-step'
    if row.get('caught_by_role') == 'owner-delegated-reviewer':
        row['caught_by_role'] = 'owner'
pub = lebesgue['proposed_published_repairs_append_rows']
for r in pub:
    r['found_at'] = now
    receipt = json.loads(Path(r['local_repair_receipt']).read_text())
    assert r['post_sha256'] == receipt['content_sha256']
    r['local_repair_receipt_sha256'] = sha(Path(r['local_repair_receipt']).read_bytes())
    for ref in r.get('evidence_refs', []):
        ref['sha256'] = sha(Path(ref['path']).read_bytes())
for file, doc in docs.items():
    (out / ('owner-' + Path(file).name)).write_text(json.dumps(doc, indent=2) + '\n')
(out / 'fixed-defect-rows.json').write_text(json.dumps(rows, indent=2) + '\n')
(out / 'published-repair-rows.json').write_text(json.dumps(pub, indent=2) + '\n')
(out / 'prepared.json').write_text(json.dumps({'run': n, 'at': now, 'before_decisions': before,
    'original_native_archives': archives, 'recovered_preimages': recovered,
    'defect_rows': len(rows), 'published_rows': len(pub), 'native_execution_credit': False,
    'working_decisions': list(docs)}, indent=2) + '\n')
print(json.dumps({'prepared_defect_rows': len(rows), 'published_rows': len(pub), 'decision_files': len(docs)}))
