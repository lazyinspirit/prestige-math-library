#!/usr/bin/env python3
"""ROOT-only guarded projection. Default is read-only; no fixture code is executed."""
import argparse, copy, datetime, json, pathlib, re, shutil
BASE = pathlib.Path(__file__).resolve().parent
ROOT = BASE.parent.parent

def read(path):
    return (ROOT / path).read_bytes().decode('utf-8')

def load(path):
    return json.loads(read(path))

def normalized(text):
    return re.sub(r'\s+', ' ', text.replace('\r\n', '\n')).strip()

def at(doc, path):
    for key in path:
        doc = doc[key]
    return doc

def prepare():
    packet = json.loads((BASE / 'proposal.json').read_text())
    if packet['issues']:
        raise RuntimeError('Unresolved authored proposal issues: ' + json.dumps(packet['issues']))
    for path, expected in packet['code_and_source_guards'].items():
        if read(path) != expected:
            raise RuntimeError('Code/source guard drift: ' + path)
    targets = set()
    for op in packet['writes']:
        path = ROOT / op['path']
        if op['path'] in targets:
            raise RuntimeError('Duplicate code target: ' + op['path'])
        targets.add(op['path'])
        if op['before_absent']:
            if path.exists():
                raise RuntimeError('Expected absent code target: ' + op['path'])
        elif read(op['path']) != op['before']:
            raise RuntimeError('Code/doc target drift: ' + op['path'])
        candidate = BASE / 'proposed' / op['path']
        if candidate.read_bytes().decode('utf-8') != op['after']:
            raise RuntimeError('Review candidate drift: ' + str(candidate))
    docs = {}
    originals = {}
    seen = set()
    allowed_keys = set()
    for module in json.loads((BASE / 'module-index.json').read_text()):
        allowed_keys.update(module.get('registry_keys', []))
    if len(allowed_keys) != 15:
        raise RuntimeError('Expected exactly 15 unique authored registration keys')
    for op in packet['row_operations']:
        identity = (op['file'], tuple(op['path']))
        if identity in seen:
            raise RuntimeError('Duplicate metadata row operation: ' + str(identity))
        seen.add(identity)
        path = op['path']
        if path != ['contracts', op['id'], 'finite_smoke', op['index']]:
            raise RuntimeError('Operation outside finite_smoke row: ' + str(identity))
        if op['file'] not in docs:
            originals[op['file']] = load(op['file'])
            docs[op['file']] = copy.deepcopy(originals[op['file']])
        current = at(docs[op['file']], path)
        if current != op['before']:
            raise RuntimeError('Metadata row guard drift: ' + str(identity))
        after = op['after']
        if after.get('check') not in allowed_keys:
            raise RuntimeError('Unregistered authored key: ' + str(identity))
        assertion = after.get('asserts')
        if not isinstance(assertion, str) or not assertion.strip() or normalized(assertion) not in normalized(read(op['source'])):
            raise RuntimeError('Assertion not exact current source excerpt: ' + str(identity))
        at(docs[op['file']], path[:-1])[path[-1]] = copy.deepcopy(after)
    if len(seen) != 102:
        raise RuntimeError('Expected exactly 102 distinct metadata entry operations')
    # Invert only the intended row projections; no other metadata may differ.
    restored = copy.deepcopy(docs)
    for op in packet['row_operations']:
        at(restored[op['file']], op['path'][:-1])[op['path'][-1]] = copy.deepcopy(op['before'])
    if restored != originals:
        raise RuntimeError('Projection changed metadata beyond intended finite_smoke rows')
    return packet, originals, docs

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply', action='store_true', help='ROOT only, after independent review and writer drain')
    parser.add_argument('--confirm-drained', action='store_true', help='ROOT confirms all affected writers are drained')
    args = parser.parse_args()
    if args.apply and not args.confirm_drained:
        parser.error('--apply requires ROOT --confirm-drained')
    packet, originals, docs = prepare()
    summary = {'mode': 'apply' if args.apply else 'read-only-preview', 'code_doc_targets': len(packet['writes']), 'metadata_files': len(docs), 'metadata_rows': len(packet['row_operations']), 'fixtures_executed': False, 'unrelated_metadata_preserved': True}
    if not args.apply:
        print(json.dumps(summary, indent=2))
        return
    tag = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
    archive = BASE / ('root-application-' + tag)
    archive.mkdir(exist_ok=False)
    existing = sorted(set(docs) | {op['path'] for op in packet['writes'] if not op['before_absent']})
    for path in existing:
        before = archive / 'before' / path
        before.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(ROOT / path, before)
    (archive / 'absent-targets.json').write_text(json.dumps([op['path'] for op in packet['writes'] if op['before_absent']], indent=2) + '\n')
    for name in ['proposal.json', 'module-index.json', 'operation-index.json', 'receipt.json', 'README.md', 'apply.py', 'verify.py']:
        destination = archive / 'reviewed-plan' / name
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(BASE / name, destination)
    # Guard again after full preimage archival, immediately before any mutation.
    checked, checked_originals, checked_docs = prepare()
    if checked != packet or checked_originals != originals or checked_docs != docs:
        raise RuntimeError('Proposal or current target changed during archival; no canonical writes made')
    for op in packet['writes']:
        path = ROOT / op['path']
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(op['after'].encode('utf-8'))
    for path, doc in docs.items():
        (ROOT / path).write_text(json.dumps(doc, indent=2, ensure_ascii=False) + '\n')
    # Validate only actual projection bytes/objects, with no module execution.
    for op in packet['writes']:
        if read(op['path']) != op['after']:
            raise RuntimeError('Postwrite code mismatch: ' + op['path'])
    for path, expected in docs.items():
        if load(path) != expected:
            raise RuntimeError('Postwrite metadata mismatch: ' + path)
    summary.update({'archive': str(archive.relative_to(ROOT)), 'native_acceptance_claimed': False, 'gates_or_hashes_run': False, 'written_code_doc_targets': [op['path'] for op in packet['writes']], 'metadata_entry_keys': [{'file': op['file'], 'path': op['path']} for op in packet['row_operations']]})
    (archive / 'completion.json').write_text(json.dumps(summary, indent=2) + '\n')
    print(json.dumps(summary, indent=2))

if __name__ == '__main__':
    main()
