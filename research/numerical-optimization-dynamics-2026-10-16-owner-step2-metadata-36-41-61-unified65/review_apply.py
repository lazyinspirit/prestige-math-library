#!/usr/bin/env python3
"""Root-only per-subject/field metadata utility; defaults to read-only diffs."""
import argparse, copy, difflib, hashlib, json, os
from pathlib import Path
PACKAGE = Path(__file__).resolve().parent
ROOT = PACKAGE.parent.parent

def sha(data): return hashlib.sha256(data).hexdigest()
def get(document, pointer):
    value = document
    try:
        for key in pointer: value = value[key]
        return True, value
    except (KeyError, IndexError, TypeError): return False, None

def put(document, pointer, value):
    parent = document
    for key in pointer[:-1]: parent = parent[key]
    parent[pointer[-1]] = value

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply', action='store_true')
    parser.add_argument('--group', action='append', default=[], help='Exact group or colon-delimited prefix; repeatable')
    parser.add_argument('--all-stable', action='store_true', help='Primary nonpending groups only; excludes optional outside quotes')
    args = parser.parse_args()
    manifest = json.loads((PACKAGE / 'proposal.json').read_text())
    if args.apply and not (args.group or args.all_stable): raise SystemExit('Explicit --group or --all-stable required to apply.')
    def selected(row):
        if args.group: return any(row['group'] == g or row['group'].startswith(g + ':') for g in args.group)
        if args.all_stable: return ':backend-quotes-pending' not in row['group'] and not row['group'].startswith('outside-quotes:')
        return True
    operations = [row for row in manifest['field_operations'] if selected(row)]
    if not operations: raise SystemExit('No selected metadata fields.')
    required = set(manifest.get('authorities', [manifest['authority']]))
    for row in operations: required.update(row['source_guards'])
    guards = {row['path']:row['raw_sha256'] for row in manifest['guards']}
    for relative in required:
        path = ROOT / relative
        if path.is_symlink() or not path.is_file() or sha(path.read_bytes()) != guards.get(relative): raise SystemExit('STALE source/context guard: ' + relative)
    documents, raw, statuses = {}, {}, []
    for row in operations:
        file = row['file']
        if file not in documents:
            path = ROOT / file
            if path.is_symlink() or not path.is_file(): raise SystemExit('Invalid metadata carrier: ' + file)
            raw[file] = path.read_bytes(); documents[file] = json.loads(raw[file])
        present, current = get(documents[file], row['pointer'])
        if present and current == row['after']:
            statuses.append('already-current'); continue
        if present != row['before_present'] or (present and current != row['before']): raise SystemExit('STALE exact metadata field: ' + file + ' ' + repr(row['pointer']))
        put(documents[file], row['pointer'], copy.deepcopy(row['after'])); statuses.append('prepared')
    writes = []
    for file, document in documents.items():
        data = (json.dumps(document, indent=2, ensure_ascii=False) + '\n').encode()
        if json.loads(raw[file]) == document: continue
        print(''.join(difflib.unified_diff(raw[file].decode().splitlines(True), data.decode().splitlines(True), fromfile=file, tofile='field-projected/' + file)), end='')
        writes.append((ROOT/file, raw[file], data))
    if not args.apply:
        print('\nREAD ONLY: ' + str(len(operations)) + ' field guards checked; no canonical writes.'); return
    if manifest['issues']: raise SystemExit('Unresolved projection issues; no writes.')
    # Refuse a concurrent metadata mutation after field checks; all checks precede writes.
    for path, before, data in writes:
        if path.read_bytes() != before: raise SystemExit('Metadata changed during preparation: ' + str(path))
    for path, before, data in writes:
        temporary = path.with_name(path.name + '.root-unified-metadata.tmp')
        with temporary.open('xb') as handle: handle.write(data)
        os.chmod(temporary, path.stat().st_mode & 0o777); os.replace(temporary, path)
    print('\nApplied ' + str(len(writes)) + ' metadata carriers; only selected parsed fields changed. No source writes.')

if __name__ == '__main__': main()
