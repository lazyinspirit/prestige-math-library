"""Check exact evidence and write bounded coverage; never classify mathematics."""
from pathlib import Path
import collections
import hashlib
import json
import re
import runpy

OUT = Path(__file__).resolve().parent
ROOT = OUT.parents[1]
helpers = runpy.run_path(str(OUT / 'build-inventories.py'))
parse, contracts = helpers['parse'], helpers['contracts']
census = {r['id']: r for r in map(json.loads, (OUT / 'census.jsonl').read_text().splitlines())}

def sha(text):
    return hashlib.sha256(text.encode()).hexdigest()

def checked_item(i, expected):
    text = (ROOT / 'items' / (i + '.md')).read_text()
    if sha(text) != expected:
        raise ValueError('Stale evidence: ' + i)
    return text

receipts = {}
sources = ['root-pilot.json', 'tor-pilot.json', 'prior-findings-receipts.json', 'anonymous-pilot.json', 'morse-topic-pilot.json', 'root-spectral-01-receipts.json', 'root-spectral-02-receipts.json', 'terra-derived-01-receipts.json', 'terra-lie-01-receipts.json', 'terra-partitions-01-receipts.json', 'root-partitions-examples-01-receipts.json', 'root-determinants-01-receipts.json', 'root-stokes-01-receipts.json', 'terra-lie-02-receipts.json', 'root-analysis-signals-01-receipts.json', 'root-determinants-02-receipts.json', 'root-algebra-signals-01-receipts.json']
for source in sources:
    data = json.loads((OUT / source).read_text())
    rows = data if isinstance(data, list) else data['receipts']
    for r in rows:
        i = r.get('id', r.get('consumer_id'))
        if i not in census:
            raise ValueError('Not eligible: ' + str(i))
        if i in receipts:
            raise ValueError('Duplicate receipt ownership: ' + i)
        expected = r.get('consumer_sha256', r.get('current_sha256', r.get('current', {}).get('sha256')))
        text = checked_item(i, expected)
        if census[i]['current_sha256'] != expected:
            raise ValueError('Census changed: ' + i)
        historical = r.get('historical_publication_eligibility', r.get('historical_publication', {}))
        baseline_hash = r.get('baseline_sha256', historical.get('baseline_sha256'))
        if baseline_hash != census[i]['baseline_sha256']:
            raise ValueError('Historical eligibility evidence mismatch: ' + i)
        quote = r.get('exact_passage') or r.get('relevant_passage', {}).get('quote')
        if quote and quote not in text:
            raise ValueError('Quote not exact: ' + i)
        for passage in r.get('exact_consumer_passages', []):
            if passage['quote'] not in text:
                raise ValueError('Quote not exact: ' + i)
        for flag in r.get('flags', []):
            if flag['exact_passage'] not in text:
                raise ValueError('Flag quote not exact: ' + i)
        for target in r.get('suppliers', []) + r.get('signalled_target_checks', []) + r.get('candidate_suppliers', []) + r.get('supplier_contract_checks', []):
            target_text = checked_item(target['id'], target.get('sha256', target.get('current_sha256')))
            if target.get('contract_sha256'):
                if sha(contracts(parse(target_text)[1])) != target['contract_sha256']:
                    raise ValueError('Supplier contract changed: ' + target['id'])
        disposition = 'U-P_candidate' if r['disposition'] == 'potential_u-p_candidate' else r['disposition']
        receipts[i] = dict(disposition=disposition, evidence=source,
                           fatal_screening_performed=r.get('fatal_screening_performed', False))

ledger = (ROOT / 'research/published-consumer-supplier-ledger.md').read_text()
index = ledger.split('## Item classification index —', 1)[1].split('<!-- phase3-classification-index:end -->', 1)[0]
index_ids = re.findall(r'^\| `([^`]+)` \|', index, re.M)
if len(index_ids) != len(set(index_ids)):
    raise ValueError('Duplicate ledger index rows')
classes = {}
counts = {}
for code in ['U-P', 'U-C', 'A-R', 'A-P']:
    match = re.search(r'^### ' + code + r' — .*$', index, re.M)
    section = re.split(r'\n#{1,3} ', index[match.end():], maxsplit=1)[0]
    ids = re.findall(r'^\| `([^`]+)` \|', section, re.M)
    counts[code] = len(ids)
    for i in ids:
        if i in classes:
            raise ValueError('Duplicate active class: ' + i)
        classes[i] = code
for i in index_ids:
    if parse((ROOT / 'items' / (i + '.md')).read_text())[0]['status'] != 'published':
        raise ValueError('Unpublished ledger target: ' + i)
for i, r in receipts.items():
    if r['disposition'] == 'U-P_candidate' and classes.get(i) != 'U-P':
        raise ValueError('Unreconciled candidate: ' + i)
new_up = {i for i, code in classes.items() if code == 'U-P'
          and census.get(i, {}).get('initial_class') != 'U-P'}
supported_up = {i for i, r in receipts.items() if r['disposition'] == 'U-P_candidate'}
if new_up - supported_up:
    raise ValueError('New U-P rows lack validated candidate receipts: ' + ', '.join(sorted(new_up - supported_up)))

lines = ['id\tdisposition\tevidence\tcurrent_class\n']
for i in sorted(census):
    r = receipts.get(i, dict(disposition='pending', evidence=''))
    lines.append('\t'.join([i, r['disposition'], r['evidence'], classes.get(i, '')]) + '\n')
(OUT / 'coverage.tsv').write_text(''.join(lines))
groups = collections.defaultdict(list)
for i, r in sorted(census.items()):
    if i in receipts:
        continue
    # One owner per item even when it appears on several pages; lack of a
    # current home is not an exclusion from the historically published census.
    primary_home = sorted(r['homes'])[0] if r['homes'] else '__unhomed__'
    groups[primary_home].append(i)
batches = []
for home, ids in sorted(groups.items()):
    for offset in range(0, len(ids), 25):
        batches.append(dict(batch_id=f'{home}:{offset//25+1}', home=home,
            item_ids=ids[offset:offset+25], status='pending',
            scope='Full current text and relevant direct prerequisite contracts; unmet prerequisites and other potential fatal defects; no indirect expansion.'))
(OUT / 'pending-topic-batches.json').write_text(json.dumps(batches, indent=2) + '\n')
summary = dict(census_count=len(census), bounded_receipts=len(receipts), pending=len(census)-len(receipts),
    broader_fatal_screening_receipts=sum(r['fatal_screening_performed'] for r in receipts.values()),
    dispositions=dict(collections.Counter(r['disposition'] for r in receipts.values())),
    ledger_classifications=counts, ledger_index_unique_count=len(index_ids),
    pending_topic_batches=len(batches), unhomed_census_items=sum(not r['homes'] for r in census.values()),
    scope='Exact-hash bounded screening; broader fatal-defect scope explicitly counted where performed; not whole-proof certification.',
    source_files=sources)
(OUT / 'coverage-summary.json').write_text(json.dumps(summary, indent=2) + '\n')
print(json.dumps(summary, indent=2))
