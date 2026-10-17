#!/usr/bin/env python3
"""Guarded root review/apply utility. Defaults to a read-only diff."""
import argparse, difflib, hashlib, json, os
from pathlib import Path

PACKAGE = Path(__file__).resolve().parent
ROOT = PACKAGE.parent.parent

def digest(data):
    return hashlib.sha256(data).hexdigest()

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply', action='store_true', help='Root approved application of the exact proposed metadata only')
    args = parser.parse_args()
    proposal = json.loads((PACKAGE / 'proposal.json').read_text())
    for row in proposal['guards']:
        path = ROOT / row['path']
        if path.is_symlink() or not path.is_file() or digest(path.read_bytes()) != row['raw_sha256']:
            raise SystemExit('STALE guard: ' + row['path'])
    writes = []
    for row in proposal['changes']:
        path = row['path']
        old = (ROOT / path).read_bytes()
        proposed = (PACKAGE / 'proposed' / path).read_bytes()
        if digest(old) != row['before_raw_sha256'] or digest(proposed) != row['proposed_raw_sha256']:
            raise SystemExit('STALE payload: ' + path)
        print(''.join(difflib.unified_diff(old.decode().splitlines(True), proposed.decode().splitlines(True), fromfile=path, tofile='proposed/' + path)), end='')
        writes.append((ROOT / path, proposed))
    if not args.apply:
        print('\nREAD ONLY: all guards match; no files written.')
        return
    # Validate every guard and payload before any canonical write.
    for path, data in writes:
        temporary = path.with_name(path.name + '.root-metadata-projection.tmp')
        with temporary.open('xb') as stream:
            stream.write(data)
        os.chmod(temporary, path.stat().st_mode & 0o777)
        os.replace(temporary, path)
    print('\nApplied exactly ' + str(len(writes)) + ' guarded metadata carriers; no source writes.')

if __name__ == '__main__':
    main()
