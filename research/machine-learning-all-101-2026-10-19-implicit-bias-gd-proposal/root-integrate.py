#!/usr/bin/env python3
"""Root-only guarded integration; prepared by delegate, NEVER executed by delegate.
Run only after root mathematical acceptance:
  python3 research/machine-learning-all-101-2026-10-19-implicit-bias-gd-proposal/root-integrate.py --apply
Writes accepted source/page carriers, owned metadata keys, and ONLY the exact ML43
Countable-Choice clause in current track/spec prose. Preserves all foreign current
fields and current control/digest prefixes. Root111 digest/drift/ready/checks follow.
No gates, readiness decisions, runtime transitions, publication or Git commands.
"""
import copy, datetime, hashlib, json, os, pathlib, re, sys, tempfile

if sys.argv[1:] != ['--apply']:
    raise SystemExit('No mutation performed. Only the root owner may explicitly invoke --apply.')
ROOT = pathlib.Path(__file__).resolve().parents[2]
BASE = pathlib.Path(__file__).resolve().parent
RUN = 'machine-learning-all-101-2026-10-19'

def sha(raw):
    return hashlib.sha256(raw).hexdigest()

def canonical(value):
    return sha(json.dumps(value, sort_keys=True, separators=(',', ':'), ensure_ascii=False).encode())

def regular(path):
    assert path.is_file() and not path.is_symlink(), f'Expected regular nonsymlink file: {path}'
    assert path.resolve().is_relative_to(ROOT.resolve()), f'Path leaves repository: {path}'
    for ancestor in path.parents:
        if ancestor == ROOT:
            break
        assert not ancestor.is_symlink(), f'Symlink ancestor: {ancestor}'

def read(path):
    regular(path)
    return path.read_bytes()

def no_duplicate_keys(pairs):
    value = {}
    for key, row in pairs:
        assert key not in value, f'Duplicate JSON key: {key}'
        value[key] = row
    return value

def parse(raw):
    return json.loads(raw, object_pairs_hook=no_duplicate_keys)

manifest_raw = read(BASE / 'root-integration-manifest.json')
manifest = parse(manifest_raw)
assert manifest['run'] == RUN and manifest['delegate_execution_authorized'] is False
for name, expected in manifest['report_bindings'].items():
    assert sha(read(ROOT / name)) == expected, f'Accepted proposal evidence changed: {name}'
state = parse(read(ROOT / f'.autopilot/{RUN}/state.json'))
author = state['dispatches']['1-scaffold:batch-44']
assert author.get('endedAt') and author.get('lastExitOk') is True, 'Batch44 native author must remain drained and terminal-success'
# Unchanged mathematical suppliers/consumers are context, never integration targets.
guards = parse(read(BASE / 'guards.json'))
owned_sources = {p['target'] for p in manifest['source_proposals']}
for guard in guards:
    name = guard['path']
    if name.startswith('items/') and name not in owned_sources:
        assert sha(read(ROOT / name)) == guard['sha256'], f'Mathematical context changed: {name}'

def select(document, selector):
    current, path = document, []
    for token in selector:
        if isinstance(token, dict):
            assert isinstance(current, list)
            identity = token['find']
            matches = [i for i, row in enumerate(current)
                       if isinstance(row, dict) and all(row.get(k) == v for k, v in identity.items())]
            assert len(matches) == 1, f'Ambiguous/missing metadata identity: {identity}'
            token = matches[0]
        current = current[token]
        path.append(token)
    return current, path

prepared, metadata_receipts = [], []
for proposal in manifest['source_proposals']:
    target = ROOT / proposal['target']
    assert proposal['target'].startswith(('items/', 'library/'))
    after = read(ROOT / proposal['proposal'])
    assert sha(after) == proposal['proposal_sha256'], f'Proposed source changed: {target}'
    if proposal.get('expected_absent'):
        assert not target.exists() and not target.is_symlink(), f'New helper path is not absent: {target}'
        before = None
    else:
        before = read(target)
        assert sha(before) == proposal['expected_target_raw_sha256'], f'Source CAS failed: {target}'
    prepared.append((target, before, after))

for proposal in manifest['metadata_proposals']:
    target = ROOT / proposal['target']
    assert proposal['target'].startswith(f'research/{RUN}-batch-44.')
    before = read(target)
    document = parse(before)
    proposed_raw = read(ROOT / proposal['proposal'])
    assert sha(proposed_raw) == proposal['proposal_raw_sha256'], f'Proposed metadata changed: {target}'
    proposed = parse(proposed_raw)
    records = []
    for operation in proposal['operations']:
        selected, resolved = select(document, operation['selector'])
        kind = operation['kind']
        if kind == 'fields':
            assert isinstance(selected, dict)
            for field in operation['fields']:
                key = field['key']
                assert key in selected and canonical(selected[key]) == field['expected_canonical_sha256'], f'Owned field CAS failed: {target}:{resolved}:{key}'
                records.append({'kind': 'field', 'path': resolved + [key], 'before': copy.deepcopy(selected[key]), 'after': copy.deepcopy(field['replacement'])})
                selected[key] = copy.deepcopy(field['replacement'])
        elif kind == 'map-set':
            assert isinstance(selected, dict)
            key = operation['key']
            if operation['require_absent']:
                assert key not in selected, f'New contract key already exists: {key}'
                old, present = None, False
            else:
                assert key in selected and canonical(selected[key]) == operation['expected_canonical_sha256'], f'Owned contract-key CAS failed: {key}'
                old, present = copy.deepcopy(selected[key]), True
            replacement, _ = select(proposed, operation['replacement_from'])
            records.append({'kind': 'map', 'path': resolved + [key], 'present': present, 'before': old, 'after': copy.deepcopy(replacement)})
            selected[key] = copy.deepcopy(replacement)
        elif kind == 'insert-before-id':
            assert isinstance(selected, list)
            assert not any(isinstance(row, dict) and row.get('id') == operation['require_absent_id'] for row in selected), 'Helper manifest row already exists'
            indices = [i for i, row in enumerate(selected) if isinstance(row, dict) and row.get('id') == operation['anchor_id']]
            assert len(indices) == 1
            index = indices[0]
            replacement = copy.deepcopy(operation['replacement'])
            selected.insert(index, replacement)
            records.append({'kind': 'insert', 'path': resolved + [index], 'after': replacement})
        elif kind == 'append-values':
            assert isinstance(selected, list)
            assert all(value not in selected for value in operation['require_absent_values']), 'New scope member already exists'
            for value in operation['replacement']:
                index = len(selected)
                selected.append(copy.deepcopy(value))
                records.append({'kind': 'insert', 'path': resolved + [index], 'after': copy.deepcopy(value)})
        elif kind == 'append-row':
            assert isinstance(selected, list)
            identity = operation['require_absent_identity']
            assert not any(isinstance(row, dict) and all(row.get(k) == v for k, v in identity.items()) for row in selected), 'New cross-batch row already exists'
            index, replacement = len(selected), copy.deepcopy(operation['replacement'])
            selected.append(replacement)
            records.append({'kind': 'insert', 'path': resolved + [index], 'after': replacement})
        else:
            raise AssertionError(f'Unknown operation kind: {kind}')
    # Reverse exactly the owned operations; prove every foreign current value survives.
    reverted = copy.deepcopy(document)
    for record in reversed(records):
        parent, _ = select(reverted, record['path'][:-1])
        key = record['path'][-1]
        assert parent[key] == record['after']
        if record['kind'] == 'insert' or (record['kind'] == 'map' and not record['present']):
            del parent[key]
        else:
            parent[key] = copy.deepcopy(record['before'])
    assert reverted == parse(before), f'Foreign metadata value changed: {target}'
    after = (json.dumps(document, indent=2, ensure_ascii=False) + '\n').encode()
    metadata_receipts.append({'path': proposal['target'], 'owned_operations': records, 'foreign_current_values_preserved': True})
    prepared.append((target, before, after))

# Surgical lexical changes preserve EVERY byte of other stanzas, page fields,
# current control/digest prefixes and description text outside the owned clause.
operation = manifest['plan_operation']
old, replacement = operation['old'], operation['replacement']
assert json.dumps(old, ensure_ascii=False)[1:-1] == old
assert json.dumps(replacement, ensure_ascii=False)[1:-1] == replacement
track_path, spec_path = ROOT / 'research/plan-machine-learning-track.md', ROOT / 'research/plan-spec.json'
track_before, spec_before = read(track_path), read(spec_path)
track, spec = track_before.decode(), spec_before.decode()
starts = list(re.finditer(r'^### ML-43 —[^\n]*$', track, re.M))
assert len(starts) == 1
start = starts[0].start()
next_heading = re.search(r'^### ML-\d+ —', track[starts[0].end():], re.M)
end = starts[0].end() + next_heading.start() if next_heading else len(track)
section = track[start:end]
assert section.count(old) == 1 and replacement not in section, 'ML43 owned clause CAS failed'
changed_section = section.replace(old, replacement, 1)
track_after = track[:start] + changed_section + track[end:]
assert track_after[:start] == track[:start]
assert track_after[start + len(changed_section):] == track[end:]

decoder = json.JSONDecoder()
def description_span(text, page):
    matches = list(re.finditer(r'"id"\s*:\s*' + re.escape(json.dumps(page)), text))
    assert len(matches) == 1, f'Unique plan-spec page required: {page}'
    begin = text.rfind('{', 0, matches[0].start())
    obj, _ = decoder.raw_decode(text, begin)
    assert obj.get('id') == page
    offset = begin + 1
    while True:
        while text[offset].isspace() or text[offset] == ',':
            offset += 1
        if text[offset] == '}':
            break
        key, offset = decoder.raw_decode(text, offset)
        while text[offset].isspace():
            offset += 1
        assert text[offset] == ':'
        offset += 1
        while text[offset].isspace():
            offset += 1
        value_start = offset
        value, value_end = decoder.raw_decode(text, offset)
        if key == 'description':
            assert isinstance(value, str)
            return value_start, value_end, value
        offset = value_end
    raise AssertionError('ML43 description is missing')
value_start, value_end, description = description_span(spec, operation['page'])
assert description.count(old) == 1 and replacement not in description
encoded_description = spec[value_start:value_end]
assert encoded_description.count(old) == 1
new_encoded = encoded_description.replace(old, replacement, 1)
spec_after = spec[:value_start] + new_encoded + spec[value_end:]
assert json.loads(new_encoded) == description.replace(old, replacement, 1)
old_spec, new_spec = parse(spec_before), parse(spec_after)
matching = [p for p in new_spec['pages'] if p['id'] == operation['page']]
assert len(matching) == 1
matching[0]['description'] = description
assert new_spec == old_spec, 'A foreign plan-spec field changed'
assert spec_after[:value_start] == spec[:value_start]
assert spec_after[value_start + len(new_encoded):] == spec[value_end:]
prepared.extend([(track_path, track_before, track_after.encode()), (spec_path, spec_before, spec_after.encode())])
assert len({str(p) for p, _, _ in prepared}) == len(prepared)

# All validation precedes the first archive/write. Revalidate full CURRENT bytes
# after preparing surgical edits so a concurrent foreign update fails closed.
for target, before, _ in prepared:
    if before is None:
        assert not target.exists() and not target.is_symlink()
    else:
        assert read(target) == before, f'Input moved during complete preflight: {target}'
stamp = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
archive = BASE / f'root-apply-{stamp}'
assert not archive.exists()
archive.mkdir()
receipt = {'version': 1, 'run': RUN, 'kind': 'root-guarded-implicit-bias-gd-integration',
           'recorded_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
           'manifest_raw_sha256': sha(manifest_raw), 'native_gate_credit': False,
           'mathematical_cycle': 1, 'planning_digest_controls_refreshed': False,
           'metadata_operation_records': metadata_receipts, 'files': [],
           'remaining_root_follow_through': manifest['root_follow_through']}
for target, before, after in prepared:
    relative = target.relative_to(ROOT)
    snapshot = archive / 'before' / relative
    if before is not None:
        snapshot.parent.mkdir(parents=True, exist_ok=True)
        snapshot.write_bytes(before)
    receipt['files'].append({'path': str(relative), 'before_raw_sha256': sha(before) if before is not None else None,
                             'after_raw_sha256': sha(after), 'before_file': str(snapshot.relative_to(ROOT)) if before is not None else None})
# Per-file last-moment CAS and atomic replacement; absent helper creation uses
# an atomic hard link, so it cannot overwrite a path appearing after preflight.
for target, before, after in prepared:
    target.parent.mkdir(parents=True, exist_ok=True)
    descriptor, temporary = tempfile.mkstemp(prefix='.' + target.name + '.owner-', dir=target.parent)
    try:
        with os.fdopen(descriptor, 'wb') as stream:
            stream.write(after)
            stream.flush()
            os.fsync(stream.fileno())
        if before is None:
            assert not target.exists() and not target.is_symlink()
            os.link(temporary, target)
            os.unlink(temporary)
        else:
            assert read(target) == before, f'Last-moment source CAS failed: {target}'
            os.replace(temporary, target)
    finally:
        if os.path.exists(temporary):
            os.unlink(temporary)
for row in receipt['files']:
    assert sha(read(ROOT / row['path'])) == row['after_raw_sha256']
(archive / 'receipt.json').write_text(json.dumps(receipt, indent=2, ensure_ascii=False) + '\n')
print(json.dumps({'integrated_files': len(prepared), 'receipt': str((archive / 'receipt.json').relative_to(ROOT)),
                  'remaining': manifest['root_follow_through']}, indent=2))
