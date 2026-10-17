#!/usr/bin/env python3
"""Root-executed surgical projection; default is read-only preparation.

--apply archives complete current metadata, rechecks guards and projects only
the explicitly approved dependencies, actual citation quotes and proof mirrors.
No levels, hashes, verification, readiness, source or page metadata are changed.
The separate batch-63 flow F6 utility may run before or after this one.
"""
from pathlib import Path
import datetime, hashlib, json, re, sys

HERE = Path(__file__).resolve().parent
cfg = json.loads((HERE / 'metadata-mirror-config.json').read_text())

def section(text, heading):
    return re.search(r'^## ' + re.escape(heading) + r'\n(.*?)(?=^## |\Z)', text, re.M | re.S)[1].strip()

def source_deps(text):
    fm = text.split('---', 2)[1]
    block = re.search(r'^deps:\s*\n((?:[ \t]+.*\n)*)', fm, re.M)
    assert block, 'Expected explicit source deps block'
    return re.findall(r'^\s+-\s+(\S+)\s*$', block[1], re.M)

sources = {}
for row in cfg['source_guards']:
    raw = Path(row['path']).read_bytes()
    assert hashlib.sha256(raw).hexdigest() == row['sha256'], row['path'] + ': changed source; reread required'
    sources[Path(row['path']).stem] = raw.decode()
provider = Path(cfg['provider_path']).read_text()
assert section(provider, 'Statement') == cfg['provider_statement'], 'Provider Statement changed'

paths = {cfg['manifest']} | {op['carrier'] for op in cfg['contract_ops']}
before = {p: Path(p).read_bytes() for p in paths}
data = {p: json.loads(raw) for p, raw in before.items()}
changes = []
for op in cfg['dependency_ops']:
    ident, old, new = (op[k] for k in ['id', 'old', 'new'])
    deps = source_deps(sources[ident])
    assert deps.count(new) == 1 and old not in deps, ident + ': actual dependencies differ'
    rows = [i for p in data[cfg['manifest']] for i in p['items'] if isinstance(i, dict) and i['id'] == ident]
    assert len(rows) == 1, ident + ': manifest identity not unique'
    target = rows[0]['deps']
    assert target.count(old) == 1 and new not in target, ident + ': manifest already projected or old supplier absent'
    index = target.index(old)
    target[index] = new
    assert target == deps, ident + ': manifest/source dependencies fail exact agreement'
    changes.append({'carrier': cfg['manifest'], 'id': ident, 'field': 'deps[' + str(index) + ']', 'before': old, 'after': new})

for op in cfg['contract_ops']:
    c = data[op['carrier']]['contracts'][op['id']]
    if op['kind'] == 'citation':
        rows = [r for r in c['citations'] if r['fact'] == op['fact']]
        assert len(rows) == 1 and rows[0] == op['old'], op['id'] + ': guarded citation changed'
        target = rows[0]
        new = op['new']
        source_path = Path('items/' + new['source'] + '.md')
        actual = section(source_path.read_text(), new['source_section'])
        assert actual == new['quote'], op['id'] + ': quote does not equal actual provider section'
        fact = re.search(r'^\[' + re.escape(op['fact']) + r'\] (.*?)(?=\n\n|\Z)', sources[op['id']], re.M | re.S)
        assert fact and '[[' + new['source'] + ']]' in fact[0], op['id'] + ': current Fact supplier mismatch'
        for field in ['source', 'source_section', 'quote']:
            if target[field] != new[field]:
                changes.append({'carrier': op['carrier'], 'id': op['id'], 'fact': op['fact'], 'field': field, 'before': target[field], 'after': new[field]})
                target[field] = new[field]
    else:
        rows = [r for r in c['derivations'] if r['id'] == op['derivation_id']]
        assert len(rows) == 1 and rows[0]['claim'] == op['old_claim'], op['id'] + ': derivation changed'
        target = rows[0]
        proof = re.search(r'^' + re.escape(op['step']) + r' (.*?)(?=\n\n|\Z)', sources[op['id']], re.M | re.S)[1]
        claim = re.sub(r' \[[^\[\]\n]*\](?: ∎)?$', '', proof)
        assert claim == op['new_claim'], op['id'] + ': proof claim differs from actual source'
        tags = re.search(r' \[([^\[\]\n]*)\](?: ∎)?$', proof)[1].split(',')
        assert [t.strip() for t in tags] == target['inputs'], op['id'] + ': proof tags differ from retained inputs'
        changes.append({'carrier': op['carrier'], 'id': op['id'], 'step': op['step'], 'field': 'claim', 'before': target['claim'], 'after': claim})
        target['claim'] = claim

if '--apply' not in sys.argv:
    print(json.dumps({'status': 'prepared-not-applied', 'changes': changes, 'separate_flow63_fields_preserved': True}, indent=2))
    sys.exit(0)
for row in cfg['source_guards']:
    assert hashlib.sha256(Path(row['path']).read_bytes()).hexdigest() == row['sha256'], 'Concurrent source change'
for path, raw in before.items():
    assert Path(path).read_bytes() == raw, 'Concurrent metadata writer; drain and prepare again'
stamp = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
archive = HERE / ('metadata-mirror-applied-' + stamp)
(archive / 'before').mkdir(parents=True)
(archive / 'final').mkdir()
for path, raw in before.items():
    (archive / 'before' / Path(path).name).write_bytes(raw)
    Path(path).write_text(json.dumps(data[path], indent=2) + '\n')
    (archive / 'final' / Path(path).name).write_bytes(Path(path).read_bytes())
(archive / 'completion.json').write_text(json.dumps({'status': 'applied-owner-approved-surgical-mirror', 'at': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'config': str(HERE / 'metadata-mirror-config.json'), 'changes': changes, 'scope': 'Only batch42 dependencies, batch42 citation/derivation mirrors and batch63 orbital F5/5.1 mirrors. Separate batch63 F6/deps retained. No source, level, verification, readiness or gates.'}, indent=2) + '\n')
print(archive / 'completion.json')
