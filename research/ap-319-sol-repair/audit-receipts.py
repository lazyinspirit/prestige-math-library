"""Read-only coverage/hash/claim audit of the owner-authorized repair evidence."""
from pathlib import Path
import hashlib
import json
import re

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[1]


def digest(s):
    return hashlib.sha256(s.encode()).hexdigest()


def claims(s):
    headings = {"Statement", "Definition", "Example", "Counterexample", "Statement refuted", "Remark"}
    sections = re.split(r"(^## .*$)", s, flags=re.M)
    return "\n".join(sections[i] + sections[i + 1].strip() for i in range(1, len(sections)-1, 2) if sections[i][3:] in headings)


def rows(path):
    return [json.loads(line) for line in path.read_text().splitlines() if line.strip()]


def main():
    frozen = {r['id']: r for r in rows(BASE / 'frozen-ap-index.jsonl')}
    report = {'coverage': {}, 'missing': [], 'stale_hashes': [], 'claim_flag_mismatches': [],
              'missing_impact_files': [], 'wrong_assignment': [], 'outside_receipts': []}
    seal_path = BASE / 'local-review-seals.json'
    seal_data = json.loads(seal_path.read_text()) if seal_path.exists() else {}
    seals = {r['id']: r for r in seal_data.get('seals', [])} if seal_data.get('written') else {}
    seen = {}
    for n in range(1, 11):
        path = BASE / f'agent-{n:02}-receipts.jsonl'
        latest = {r['id']: r for r in rows(path)} if path.exists() else {}
        report['coverage'][f'{n:02}'] = len([id for id in latest if id in frozen])
        for id, r in latest.items():
            if id not in frozen:
                report['outside_receipts'].append({'id': id, 'file': path.name})
                continue
            if frozen[id]['assigned_shard'] != n:
                report['wrong_assignment'].append({'id': id, 'file': path.name})
            seen[id] = r
            current = (ROOT / 'items' / (id + '.md')).read_text()
            seal = seals.get(id, {})
            metadata_bound = seal.get('reviewed_sha256') == r.get('current_sha256') and seal.get('sealed_sha256') == digest(current)
            if r.get('current_sha256') != digest(current) and not metadata_bound:
                report['stale_hashes'].append(id)
            before = (BASE / 'before' / (id + '.md')).read_text()
            changed = claims(before) != claims(current)
            if changed and r.get('statement_change') not in ['actual', True]:
                report['claim_flag_mismatches'].append({'id': id, 'flag': r.get('statement_change'), 'actual': True})
            if changed:
                impact = r.get('downstream_impact_file')
                if isinstance(impact, str):
                    candidates = [ROOT / impact, BASE / impact]
                    if not any(p.exists() for p in candidates):
                        report['missing_impact_files'].append({'id': id, 'file': impact})
                else:
                    report['missing_impact_files'].append({'id': id, 'file': impact})
    report['missing'] = [id for id in frozen if id not in seen]
    report['dispositions'] = {d: sum(r.get('decision') == d for r in seen.values()) for d in ['repair', 'accept', 'defer']}
    report['covered'] = len(seen)
    (BASE / 'receipt-audit.json').write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps({k: (len(v) if isinstance(v, list) else v) for k, v in report.items()}, indent=2))


if __name__ == '__main__':
    main()
