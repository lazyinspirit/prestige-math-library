#!/usr/bin/env python3
"""Root-only metadata projection utility; read-only unified diff by default."""
import argparse, difflib, hashlib, json, os
from pathlib import Path
PACKAGE = Path(__file__).resolve().parent
ROOT = PACKAGE.parent.parent

def sha(data):
    return hashlib.sha256(data).hexdigest()

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply', action='store_true')
    parser.add_argument('--group', choices=['primary', 'outside-quotes'], default='primary')
    args = parser.parse_args()
    document = json.loads((PACKAGE / 'proposal.json').read_text())
    rows = [row for row in document['payloads'] if row['group'] == args.group]
    metadata_paths = {row['path'] for row in document['payloads']}
    selected_paths = {row['path'] for row in rows}
    for guard in document['guards']:
        if guard['path'] in metadata_paths and guard['path'] not in selected_paths:
            continue
        path = ROOT / guard['path']
        if path.is_symlink() or not path.is_file() or sha(path.read_bytes()) != guard['raw_sha256']:
            raise SystemExit('STALE input guard: ' + guard['path'])
    writes = []
    for row in rows:
        path = row['path']
        old = (ROOT / path).read_bytes()
        proposed = (PACKAGE / 'proposed' / path).read_bytes()
        if sha(old) != row['before_raw_sha256'] or sha(proposed) != row['proposed_raw_sha256']:
            raise SystemExit('STALE payload: ' + path)
        print(''.join(difflib.unified_diff(old.decode().splitlines(True), proposed.decode().splitlines(True), fromfile=path, tofile='proposed/' + path)), end='')
        writes.append((ROOT / path, proposed))
    if not args.apply:
        print('\nREAD ONLY: input and payload guards match; no canonical writes.')
        return
    if document['issues']:
        raise SystemExit('Unresolved projection issues: application refused.')
    for path, proposed in writes:
        temporary = path.with_name(path.name + '.root-ad13-projection.tmp')
        with temporary.open('xb') as handle:
            handle.write(proposed)
        os.chmod(temporary, path.stat().st_mode & 0o777)
        os.replace(temporary, path)
    print('\nApplied exactly ' + str(len(writes)) + ' metadata carriers in ' + args.group + '; no source writes.')

if __name__ == '__main__':
    main()
