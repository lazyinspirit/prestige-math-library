"""Reconcile the canonical mathematical classification index from final receipts.

Run only after owner receipts, consumer work, and local integration are complete.
Historical findings and the frozen original A-P reasons remain untouched.
"""
from pathlib import Path
import argparse
from collections import Counter
import json
import re

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[1]
HEADINGS = {
    'clear': '### Bounded no-repair-needed dispositions',
    'A-P': '### A-P — Audited items pending Phase 3 repair',
    'U-C': '### U-C — Unaudited and confirmed defective items',
    'A-R': '### A-R — Audited and repaired items',
    'U-P': '### U-P — Unaudited and potentially defective items',
}


def plain(value):
    if isinstance(value, list):
        value = '; '.join(str(s) for s in value)
    elif isinstance(value, dict):
        value = json.dumps(value, ensure_ascii=False)
    return str(value or '').replace('\n', ' ').replace('|', '\\|').strip()


def main(write):
    data = json.loads((BASE / 'effective-receipts.json').read_text())
    if data['missing'] or data['stale']:
        raise ValueError('Complete current owner evidence is required before reconciliation.')
    path = ROOT / 'research/published-consumer-supplier-ledger.md'
    text = path.read_text()
    a = text.index('<!-- phase3-classification-index:start -->')
    z = text.index('<!-- phase3-classification-index:end -->')
    index = text[a:z]
    current = {}
    code = None
    for line in index.splitlines():
        if line in HEADINGS.values():
            code = next(k for k, v in HEADINGS.items() if v == line)
        m = re.match(r'\| `([^`]+)` \| (.*) \|$', line)
        if m and code:
            if m[1] in current:
                raise ValueError('Duplicate existing row: ' + m[1])
            current[m[1]] = (code, line)
    updates = {}
    for id, r in data['receipts'].items():
        if r['new_prerequisite']:
            continue
        if not r.get('audit_completed'):
            raise ValueError('Incomplete audit: ' + id)
        prior = current.get(id)
        decision = r['decision']
        # An unaffected outside use does not erase an unrelated older finding.
        if decision == 'accept' and not r['original'] and prior:
            continue
        dest = {'repair': 'A-R', 'accept': 'clear', 'defer': 'A-P'}[decision]
        evidence = plain(r.get('evidence'))
        if len(evidence) > 850:
            evidence = evidence[:847] + '…'
        scope = 'Bounded local mathematical repair review, 2026-09-23; no independent judge or whole-closure certification.'
        if decision == 'defer':
            evidence += ' Remaining obligation: ' + plain(r.get('unresolved'))
        row = f"| `{id}` | {scope} {evidence} Evidence: `{r['receipt_file']}`; current consumer dispositions in `research/ap-319-sol-repair/final-report.md`. |"
        updates[id] = (dest, row)
    lines = [line for line in index.splitlines() if not ((m := re.match(r'\| `([^`]+)` \|', line)) and m[1] in updates)]
    index = '\n'.join(lines) + '\n'
    for code, heading in HEADINGS.items():
        addition = [row for id, (dest, row) in sorted(updates.items()) if dest == code]
        if not addition:
            continue
        pos = index.index(heading)
        table_end = re.search(r'(?m)^\|---[^\n]*\n', index[pos:])
        assert table_end
        insert_at = pos + table_end.end()
        index = index[:insert_at] + '\n'.join(addition) + '\n' + index[insert_at:]
    final = dict(current)
    final.update(updates)
    counts = Counter(code for code, _ in final.values())
    published = json.loads((BASE / 'depcheck-final.json').read_text())['summary']['published']
    indexed = len(final)
    start = index.index('This index retains')
    end = index.index('The initial extraction', start)
    index = index[:start] + (
        f'This index retains the initial 2,185-ID classification reference pool and all\n'
        f'subsequently reconciled published IDs. It currently contains **{indexed:,} unique\n'
        f'published items**. The YAML-decoded publication census checked on 2026-09-23\n'
        f'contains **{published:,} published items**; **{published-indexed:,} published items\n'
        f'remain outside this index**. These counts are a status census, not a claim\n'
        f'that outside-index items or entire dependency closures have been audited.\n'
    ) + index[end:]
    for code in ['U-P', 'U-C', 'A-R', 'A-P']:
        index = re.sub(r'(\| ' + code + r' \| [^|]+ \| )\d+( \|)', lambda m: m[1] + str(counts[code]) + m[2], index)
    index = re.sub(r'The four queues currently contain [\d,]+ distinct items\.',
                   f"The four queues currently contain {sum(counts[k] for k in ['U-P','U-C','A-R','A-P']):,} distinct items.", index)
    text = text[:a] + index + text[z:]
    text = re.sub(r'Current classifications: U-P \d+, U-C \d+, A-R \d+, A-P \d+\.',
                  f"Current classifications: U-P {counts['U-P']}, U-C {counts['U-C']}, A-R {counts['A-R']}, A-P {counts['A-P']}.", text, count=1)
    report = {'written': write, 'counts': dict(counts), 'indexed': indexed, 'published': published,
              'changed_rows': len(updates), 'original_dispositions': data['original_counts'],
              'maintenance_dispositions': data['maintenance_counts']}
    (BASE / 'ledger-reconciliation.json').write_text(json.dumps(report, indent=2) + '\n')
    if write:
        path.write_text(text)
    print(json.dumps(report, indent=2))


if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('--write', action='store_true')
    main(p.parse_args().write)
