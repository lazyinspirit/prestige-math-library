"""Bind stable delegated local reviews to verification metadata, never judges.

No mathematical body, dependency or publication status may change here. Old
citations-only checks on recorded results can be retained only when their cited
source metadata is unchanged. All evidence hashes before sealing are preserved.
"""
from pathlib import Path
import argparse
import hashlib
import importlib.util
import json
import re
import yaml

BASE = Path(__file__).resolve().parent
ROOT = BASE.parents[1]
spec = importlib.util.spec_from_file_location('reconcile', BASE / 'reconcile-evidence.py')
reconcile = importlib.util.module_from_spec(spec)
spec.loader.exec_module(reconcile)


def digest(text):
    return hashlib.sha256(text.encode()).hexdigest()


def without_verification(text):
    head, fm, body = text.split('---', 2)
    data = yaml.safe_load(fm)
    data.pop('verification', None)
    return data, body


def main(write):
    report = reconcile.collect()
    if report['missing'] or report['stale']:
        raise ValueError('Missing or stale owner receipts; do not seal active writers.')
    seals = []
    blocked = []
    for id, r in sorted(report['receipts'].items()):
        if not r.get('audit_completed'):
            continue
        p = ROOT / 'items' / (id + '.md')
        before = p.read_text()
        fm = reconcile.front(before)
        if fm.get('status') != 'published':
            continue
        verification = fm.get('verification') or {}
        mode = None
        if r['decision'] == 'defer':
            # A known unresolved proof must not retain an apparent current pass.
            for stale in ['judge', 'audited', 'verified']:
                verification.pop(stale, None)
            mode = 'withdrawn-stale-pass-substantive-prerequisite-deferred'
        elif fm.get('proved_here', True):
            if r['new_prerequisite']:
                continue
            if r['decision'] != 'repair' and (verification.get('audited') or verification.get('verified')):
                continue
            # Supersede old publication/judge stamps on a repaired carrier.
            # Its before snapshot retains those historical records.
            for stale in ['judge', 'audited', 'verified']:
                verification.pop(stale, None)
            verification['verified'] = {
                'model': 'Codex' if r['owner'] == 'root' else 'gpt-6-sol',
                'verdict': 'locally-reviewed',
                'date': '2026-09-23',
                'scope': f"Owner-authorized bounded mathematical repair review; evidence {r['receipt_file']} ({id}). No independent judge or whole-closure certification.",
                'delegated_by': 'owner',
            }
            mode = 'delegated-local-review'
        else:
            if verification.get('sources_checked'):
                continue
            candidates = [BASE / 'before' / (id + '.md')]
            if isinstance(r['owner'], int):
                candidates.extend((BASE / f"agent-{r['owner']:02}-before-maintenance").glob(id + '.md'))
            found = False
            for old in candidates:
                if not old.exists():
                    continue
                oldfm = reconcile.front(old.read_text())
                oldcheck = (oldfm.get('verification') or {}).get('sources_checked')
                if oldcheck and oldfm.get('sources') == fm.get('sources'):
                    verification['sources_checked'] = oldcheck
                    verification['precheck'] = 'n/a'
                    mode = 'retained-historical-citations-check-unchanged-source-metadata'
                    found = True
                    break
            if not found:
                blocked.append(id)
                continue
        # Replace only the top-level verification mapping, preserving all other
        # bytes. The equality assertion separately checks decoded metadata/body.
        a, rawfm, body = before.split('---', 2)
        rendered = yaml.safe_dump({'verification': verification}, sort_keys=False, allow_unicode=True, width=100000).rstrip()
        pattern = r'(?m)^verification:[^\n]*(?:\n(?:[ \t]+[^\n]*|[ \t]*))*(?=\n\S|\Z)'
        if re.search(pattern, rawfm):
            rawfm = re.sub(pattern, lambda _: rendered, rawfm, count=1)
        else:
            rawfm = rawfm.rstrip() + '\n' + rendered + '\n'
        rawfm = rawfm.rstrip('\n') + '\n'
        after = a + '---' + rawfm + '---' + body
        assert without_verification(before) == without_verification(after), id
        # Parse the complete result, catching accidental key concatenation.
        assert reconcile.front(after)['verification'] == verification, id
        seals.append({'id': id, 'mode': mode, 'reviewed_sha256': digest(before),
                      'sealed_sha256': digest(after), 'receipt_file': r['receipt_file'],
                      'receipt_line': r['receipt_line'], 'mathematical_body_unchanged': True,
                      'nonverification_metadata_unchanged': True})
        if write:
            p.write_text(after)
    out = {'scope': 'Metadata-only binding of delegated local reviews; no judge verdicts or publication transitions.',
           'written': write, 'blocked_source_checks': blocked, 'seals': seals}
    (BASE / 'local-review-seals.json').write_text(json.dumps(out, indent=2) + '\n')
    print(json.dumps({'written': write, 'sealed': len(seals), 'blocked': blocked}, indent=2))


if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('--write', action='store_true')
    main(p.parse_args().write)
