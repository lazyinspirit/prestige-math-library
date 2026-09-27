"""Collect current owner receipts and reconcile only this repair's plan entries.

No mathematical verdict is inferred here. Original append-only receipts remain
unchanged. --write-plan updates dependency/title/contract metadata, not verdicts.
"""
from pathlib import Path
import argparse
import hashlib
import json
import re
import yaml

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[1]


def rows(path):
    return [json.loads(s) for s in path.read_text().splitlines() if s.strip()]


def sha(text):
    return hashlib.sha256(text.encode()).hexdigest()


def front(text):
    return yaml.safe_load(text.split('---', 2)[1])


def collect():
    frozen = {r['id']: r for r in rows(BASE / 'frozen-ap-index.jsonl')}
    owners = json.loads((BASE / 'maintenance-ownership.json').read_text())
    owners.update({k: r['assigned_shard'] for k, r in frozen.items()})
    new = json.loads((BASE / 'new-prerequisites.json').read_text())
    owners.update({r['id']: r['owner'] for r in new})
    seals_path = BASE / 'local-review-seals.json'
    seal_data = json.loads(seals_path.read_text()) if seals_path.exists() else {}
    seals = {r['id']: r for r in seal_data.get('seals', [])} if seal_data.get('written') else {}
    receipts = {}
    for p in sorted(BASE.glob('*receipts.jsonl')):
        owner = 'root' if p.name.startswith('root-') else int(p.name.split('-')[1])
        latest = {r['id']: (i + 1, r) for i, r in enumerate(rows(p))}
        for id, (line, r) in latest.items():
            if owners.get(id) != owner:
                continue
            if id in receipts:
                raise ValueError(f'Owner receipt in multiple files: {id}')
            text = (ROOT / 'items' / (id + '.md')).read_text()
            seal = seals.get(id, {})
            bound = seal.get('reviewed_sha256') == r.get('current_sha256') and seal.get('sealed_sha256') == sha(text)
            receipts[id] = dict(r, owner=owner, receipt_file=str(p.relative_to(ROOT)),
                                receipt_line=line, original=id in frozen,
                                new_prerequisite=id in {q['id'] for q in new},
                                disk_sha256=sha(text), metadata_seal_current=bound,
                                hash_current=r.get('current_sha256') == sha(text) or bound)
    report = {
        'scope': 'Latest authoritative-owner local receipts; no independent judgment.',
        'missing': sorted(owners.keys() - receipts.keys()),
        'stale': [k for k, r in receipts.items() if not r['hash_current']],
        'original_counts': {d: sum(r['decision'] == d and r['original'] for r in receipts.values())
                            for d in ['repair', 'accept', 'defer']},
        'maintenance_counts': {d: sum(r['decision'] == d and not r['original'] and not r['new_prerequisite']
                                      for r in receipts.values()) for d in ['repair', 'accept', 'defer']},
        'receipts': receipts,
    }
    (BASE / 'effective-receipts.json').write_text(json.dumps(report, indent=2, ensure_ascii=False) + '\n')
    return report


def replace_field(block, key, value, indent=10):
    decoder = json.JSONDecoder()
    m = re.search(r'(?m)^' + ' ' * indent + '"' + key + r'":\s*', block)
    rendered = json.dumps(value, ensure_ascii=False)
    if isinstance(value, list) and value:
        rendered = '[\n' + ',\n'.join(' ' * (indent + 2) + json.dumps(v, ensure_ascii=False) for v in value) + '\n' + ' ' * indent + ']'
    if m:
        _, end = decoder.raw_decode(block[m.end():])
        return block[:m.end()] + rendered + block[m.end() + end:]
    end = block.rfind('\n' + ' ' * (indent - 2) + '}')
    assert end >= 0
    return block[:end] + ',\n' + ' ' * indent + json.dumps(key) + ': ' + rendered + block[end:]


def sync_plan(report, write):
    p = ROOT / 'research/plan-spec.json'
    text = p.read_text()
    decoder = json.JSONDecoder()
    changes = []
    # Work from right to left, preserving all unrelated bytes and scaffolding.
    matches = list(re.finditer(r'(?m)^        \{\n          "id": "([^"]+)"', text))
    for m in reversed(matches):
        id = m.group(1)
        if id not in report['receipts']:
            continue
        old, length = decoder.raw_decode(text[m.start() + 8:])
        start, end = m.start(), m.start() + 8 + length
        block = text[start:end]
        item = (ROOT / 'items' / (id + '.md')).read_text()
        fm = front(item)
        fields = {}
        for key in ['deps', 'title']:
            if old.get(key) != fm.get(key, [] if key == 'deps' else id):
                fields[key] = fm.get(key, [] if key == 'deps' else id)
        # Existing plan contracts must reflect repaired exported contracts.
        # Keep deferred proof plans and missing statement fields intact.
        if 'statement' in old and report['receipts'][id]['decision'] != 'defer':
            contract = re.search(r'(?m)^## (?:Statement|Definition)\n+([\s\S]*?)(?=^## |\Z)', item)
            if contract and old['statement'] != contract.group(1).strip():
                fields['statement'] = contract.group(1).strip()
        for key, value in fields.items():
            block = replace_field(block, key, value)
        if fields:
            changes.append({'id': id, 'fields': list(fields)})
            text = text[:start] + block + text[end:]
    json.loads(text)
    (BASE / 'plan-reconciliation.json').write_text(json.dumps({'written': write, 'changes': changes}, indent=2) + '\n')
    if write:
        p.write_text(text)
    return len(changes)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--write-plan', action='store_true')
    args = parser.parse_args()
    report = collect()
    print(json.dumps({k: len(v) if isinstance(v, list) else v for k, v in report.items() if k not in ['receipts', 'scope']}, indent=2))
    print('Plan entries needing synchronization:', sync_plan(report, args.write_plan))
