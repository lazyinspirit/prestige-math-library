#!/usr/bin/env python3
"""Root-only guarded integration. Prepared for /root; never run by the repairer.

Run only after root approval: python3 <this-file> --apply --owner /root
Only accepted owned fields are changed. Foreign JSON tokens and plan stanzas
retain their literal bytes. Controlling SHA literals and all workflow state,
readiness, drift bindings and gates remain root-owned and are not updated.
"""
from pathlib import Path
import argparse, hashlib, json, os, stat, tempfile

BASE = Path(__file__).resolve().parent
REPO = BASE.parent.parent
MANIFEST = BASE / 'root-integration-manifest.json'
DECODER = json.JSONDecoder()

def sha(raw):
    return hashlib.sha256(raw).hexdigest()

def read_regular(path):
    if path.is_symlink() or not path.is_file():
        raise RuntimeError(f'Expected regular non-symlink file: {path}')
    return path.read_bytes()

def optional_regular(path):
    if path.is_symlink():
        raise RuntimeError(f'Refusing symlink carrier: {path}')
    return read_regular(path) if path.exists() else None

def whitespace(text, pos):
    while pos < len(text) and text[pos].isspace():
        pos += 1
    return pos

def value_span(text, path, start=0):
    """Find one exact JSON value; decoding siblings does not rewrite them."""
    start = whitespace(text, start)
    if not path:
        _, end = DECODER.raw_decode(text, start)
        return start, end
    key = path[0]
    pos = whitespace(text, start + 1)
    if text[start] == '{':
        while text[pos] != '}':
            field, pos = DECODER.raw_decode(text, pos)
            pos = whitespace(text, pos)
            if text[pos] != ':':
                raise RuntimeError('Invalid JSON object')
            pos = whitespace(text, pos + 1)
            if field == key:
                return value_span(text, path[1:], pos)
            _, pos = DECODER.raw_decode(text, pos)
            pos = whitespace(text, pos)
            if text[pos] == ',':
                pos = whitespace(text, pos + 1)
    elif text[start] == '[':
        index = 0
        while text[pos] != ']':
            if index == key:
                return value_span(text, path[1:], pos)
            _, pos = DECODER.raw_decode(text, pos)
            pos = whitespace(text, pos)
            if text[pos] == ',':
                pos = whitespace(text, pos + 1)
            index += 1
    raise RuntimeError(f'JSON path not found: {path}')

def get(value, path):
    for key in path:
        value = value[key]
    return value

def encoded(value, indentation):
    return json.dumps(value, ensure_ascii=False, indent=2).replace('\n', '\n' + ' ' * indentation)

def replace_value(text, path, value):
    start, end = value_span(text, path)
    line_start = text.rfind('\n', 0, start) + 1
    indentation = len(text[line_start:start]) - len(text[line_start:start].lstrip(' '))
    return text[:start] + encoded(value, indentation) + text[end:]

def append_value(text, path, value, key=None):
    start, end = value_span(text, path)
    parent = json.loads(text[start:end])
    closing = end - 1
    line_start = text.rfind('\n', 0, closing) + 1
    close_indent = len(text[line_start:closing])
    child_indent = close_indent + 2
    last = closing
    while last > start + 1 and text[last - 1].isspace():
        last -= 1
    if key is None:
        fragment = encoded(value, child_indent)
    else:
        fragment = json.dumps(key, ensure_ascii=False) + ': ' + encoded(value, child_indent)
    insertion = (',' if parent else '') + '\n' + ' ' * child_indent + fragment
    # Keep the existing closing-line whitespace verbatim; inline empty containers
    # need their first closing-line separator added here.
    if not text[last:closing]:
        insertion += '\n' + ' ' * close_indent
    return text[:last] + insertion + text[last:]

def insert_array_before(text, path, index, value):
    start, _ = value_span(text, path + [index])
    line_start = text.rfind('\n', 0, start) + 1
    indentation = len(text[line_start:start]) - len(text[line_start:start].lstrip(' '))
    fragment = encoded(value, indentation) + ',\n' + ' ' * indentation
    return text[:start] + fragment + text[start:]

def unique_index(rows, field, value):
    indices = [i for i, row in enumerate(rows) if row.get(field) == value]
    if len(indices) != 1:
        raise RuntimeError(f'Expected exactly one {field}={value}: {indices}')
    return indices[0]

def merge_keyed_array(text, array_path, field, updates, before_id=None):
    for change in updates:
        document = json.loads(text)
        rows = get(document, array_path)
        matches = [i for i, row in enumerate(rows) if row.get(field) == change['id']]
        if len(matches) > 1:
            raise RuntimeError(f'Duplicate owned row: {change["id"]}')
        current = rows[matches[0]] if matches else None
        if current == change['after']:
            continue
        if current != change['before']:
            raise RuntimeError(f'Owned row CAS refused: {change["id"]}')
        if matches:
            text = replace_value(text, array_path + [matches[0]], change['after'])
        else:
            insertion = next((i for i, row in enumerate(rows) if row.get(field) == before_id), None) if before_id else None
            if insertion is None:
                text = append_value(text, array_path, change['after'])
            else:
                text = insert_array_before(text, array_path, insertion, change['after'])
    return text

def plan_all(manifest):
    pending = {}
    originals = {}
    for row in manifest['sources']:
        target = REPO / row['path']
        payload = REPO / row['payload']
        proposed = read_regular(payload)
        if sha(proposed) != row['payload_raw_sha256']:
            raise RuntimeError(f'Payload changed: {payload}')
        original = optional_regular(target)
        if original == proposed:
            continue
        if (sha(original) if original is not None else None) != row['before_raw_sha256']:
            raise RuntimeError(f'Source CAS refused: {target}')
        originals[target] = original
        pending[target] = proposed
    for row in manifest['metadata']:
        target = REPO / row['path']
        original = read_regular(target)
        text = original.decode()
        if row['kind'] == 'manifest':
            for page in row['pages']:
                index = unique_index(json.loads(text), 'id', page['id'])
                text = merge_keyed_array(text, [index, 'items'], 'id', page['updates'], page.get('insert_new_before'))
        elif row['kind'] == 'contracts':
            for change in row['updates']:
                document = json.loads(text)
                current = document['contracts'].get(change['id'])
                if current == change['after']:
                    continue
                if current != change['before']:
                    raise RuntimeError(f'Contract CAS refused: {change["id"]}')
                if current is None:
                    text = append_value(text, ['contracts'], change['after'], change['id'])
                else:
                    text = replace_value(text, ['contracts', change['id']], change['after'])
            for item_id in row['scope_additions']:
                if item_id not in json.loads(text)['scope']:
                    text = append_value(text, ['scope'], item_id)
        elif row['kind'] == 'coverage':
            for page in row['pages']:
                index = unique_index(json.loads(text)['pages'], 'page', page['id'])
                text = merge_keyed_array(text, ['pages', index, 'canonical'], 'item', page['updates'])
        elif row['kind'] == 'page-items':
            # The only changed YAML key is items. Preserve all other frontmatter
            # and page bytes, and preserve foreign inventory entries.
            before_block = row['before_block']
            after_block = row['after_block']
            if after_block in text:
                continue
            if text.count(before_block) != 1:
                raise RuntimeError('Owned page items substring CAS refused')
            text = text.replace(before_block, after_block, 1)
        else:
            raise RuntimeError(f'Unknown metadata operation: {row["kind"]}')
        if text.encode() != original:
            originals[target] = original
            pending[target] = text.encode()
    canonical = manifest['canonical_stanza']
    target = REPO / canonical['path']
    original = read_regular(target)
    text = original.decode()
    if canonical['after'] not in text:
        if text.count(canonical['before']) != 1:
            raise RuntimeError('Current owned canonical stanza CAS refused')
        text = text.replace(canonical['before'], canonical['after'], 1)
    if text.encode() != original:
        originals[target] = original
        pending[target] = text.encode()
    spec = manifest['spec_description']
    target = REPO / spec['path']
    original = read_regular(target)
    text = original.decode()
    document = json.loads(text)
    index = unique_index(document['pages'], 'id', spec['id'])
    current = document['pages'][index]['description']
    marker = '**Pages:**'
    if current.count(marker) != 1:
        raise RuntimeError('Unrecognized owned description layout')
    prefix, body = current.split(marker, 1)
    body = marker + body
    if body != spec['after']:
        if body != spec['before']:
            raise RuntimeError('Current owned spec semantics CAS refused')
        # Prefix includes the current root-controlled SHA literal and remains
        # semantically identical; every other record retains its literal bytes.
        text = replace_value(text, ['pages', index, 'description'], prefix + spec['after'])
    if text.encode() != original:
        originals[target] = original
        pending[target] = text.encode()
    return originals, pending

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply', action='store_true')
    parser.add_argument('--owner', required=True)
    args = parser.parse_args()
    if not args.apply or args.owner != '/root':
        raise SystemExit('This script is root-only and requires --apply --owner /root')
    prevalidation = json.loads(read_regular(BASE / 'root-integration-prevalidation.json'))
    if sha(read_regular(MANIFEST)) != prevalidation['manifest_raw_sha256'] or sha(read_regular(Path(__file__).resolve())) != prevalidation['script_raw_sha256']:
        raise RuntimeError('Prepared integration script/manifest hash changed')
    manifest = json.loads(read_regular(MANIFEST))
    originals, pending = plan_all(manifest)
    # Full preparation precedes every write; then recheck all bound current bytes.
    for target, original in originals.items():
        current = optional_regular(target)
        if current != original:
            raise RuntimeError(f'Pre-write current-input race: {target}')
    written = []
    try:
        for target, proposed in pending.items():
            current = optional_regular(target)
            if current != originals[target]:
                raise RuntimeError(f'Per-carrier write CAS refused: {target}')
            target.parent.mkdir(parents=True, exist_ok=True)
            mode = stat.S_IMODE(target.stat().st_mode) if target.exists() else 0o644
            fd, temporary = tempfile.mkstemp(prefix='.wide-network-root-', dir=target.parent)
            try:
                with os.fdopen(fd, 'wb') as stream:
                    stream.write(proposed)
                    stream.flush()
                    os.fsync(stream.fileno())
                os.chmod(temporary, mode)
                os.replace(temporary, target)
            finally:
                if os.path.exists(temporary):
                    os.unlink(temporary)
            written.append({'path': str(target.relative_to(REPO)), 'raw_sha256': sha(proposed)})
    finally:
        # This records only actual filesystem application, never mathematical
        # acceptance, readiness, native execution, certification or gate coverage.
        (BASE / 'root-integration-application.json').write_text(json.dumps({
            'version': 1, 'owner': '/root', 'manifest_raw_sha256': sha(MANIFEST.read_bytes()),
            'written': written, 'planned_count': len(pending),
            'all_planned_writes_completed': len(written) == len(pending),
            'readiness_or_gate_credit': False,
        }, indent=2) + '\n')
    print(f'Applied {len(written)} guarded carriers; root bookkeeping/checks remain owed.')

if __name__ == '__main__':
    main()
