"""Read-only scoped metadata checks. This never certifies scientific proofs."""
import collections
import hashlib
import json
import pathlib
import re
import unicodedata

r = pathlib.Path.cwd()
run = 'advanced-qft-supersymmetry-build-2026-10-23'
out = r / 'research' / (run + '-owner-resolution')
sc = r / 'research/advanced-qft-supersymmetry-2026-10-23/scaffold'
load = lambda p: json.loads(p.read_text())
digest = lambda p: hashlib.sha256(p.read_bytes()).hexdigest()
local_path = lambda p: p.removeprefix('physics/')
d, fragment, spec = [load(p) for p in [sc/'proposed-inventory.json', sc/'plan-fragment.json', r/'research/plan-spec.json']]
by = {x['id']: x for x in d['items']}
pg = {x['id']: x for x in spec['pages']}
fp = {x['id']: x for x in fragment['pages']}
pairs = {x['id']: x for x in d['page_pairs']}
assert len(by) == len(d['items']) == 143 and len(pairs) == 55
assert len(fp) == len(fragment['pages'])
assert sum(p['library'] == 'mathematics' for p in pairs.values()) == 19
assert {x['page'] for x in d['supplier_context']} == {x['id'] for x in fragment['pages'] if x['kind'] == 'P'}
allowed_roles = {'mathematical-premise', 'physical-assumption', 'physical-result',
                 'empirical-premise', 'operational-prerequisite', 'formulation-prerequisite'}
math_results = {'theorem', 'lemma', 'proposition', 'corollary'}

def dag(graph):
    state, ordered = {}, []
    def visit(x):
        assert state.get(x) != 1, ('cycle', x)
        if state.get(x) == 2:
            return
        state[x] = 1
        for y in graph.get(x, []):
            visit(y)
        state[x] = 2
        ordered.append(x)
    for x in graph:
        visit(x)
    return ordered

graph = {x['id']: x.get('proposed_deps', []) for x in d['items']}
item_order = dag(graph)
page_graph = {x['id']: x.get('requires', []) for x in fragment['pages'] if x['kind'] in ['A','B']}
dag(page_graph)

def closure(page):
    seen, q = set(), list(pg[page].get('requires', []))
    while q:
        x = q.pop()
        if x in seen:
            continue
        assert x in pg, ('missing page', page, x)
        seen.add(x)
        q += pg[x].get('requires', [])
    return seen

for x in d['items']:
    assert x['page'] in fp and x['id'] in pairs[x['page'].removesuffix('-examples')]['items']
    assert x['candidate_contract'].strip() and x['obligation_contract']
    assert set(x['dependency_roles']) == set(x['proposed_deps'])
    assert set(x['dependency_roles'].values()) <= allowed_roles
    if x['kind'] in math_results:
        assert x['domain'] == 'mathematics'
    for dep in x['proposed_deps']:
        assert dep in by and by[dep]['kind'] != 'open-problem'
        if x['domain'] == 'mathematics':
            assert by[dep]['domain'] == 'mathematics'
        if by[dep]['page'] != x['page']:
            assert not by[dep]['page'].endswith('-examples')
            assert by[dep]['page'] in closure(x['page']), ('bad projection', x['id'], dep)

assert {(e['premise_item'], e['consumer_item'], e['role']) for e in d['item_dependency_edges']} == {
    (p, x['id'], x['dependency_roles'][p]) for x in d['items'] for p in x['proposed_deps']}
assert {(e['requires_page'], e['consumer_page']) for e in d['page_dependency_edges']} == {
    (p, x['id']) for x in fragment['pages'] if x['kind'] in ['A','B'] for p in x['requires']}
for pair in pairs.values():
    a, b = fp[pair['id']], fp[pair['id']+'-examples']
    assert a['kind'] == 'A' and b['kind'] == 'B' and b['requires'] == [a['id']]
    assert a['items'] == b['items'] == []
    assert a['requires'] == pg[a['id']]['requires']
    assert pair['library'] == a['library'] and pair['category'] == a['category']
    for dep in pg[a['id']]['requires']:
        assert pg[dep]['order'] < pg[a['id']]['order']

contexts = {x['page']: x for x in d['supplier_context']}
imports = load(r/'research/math-imports.json')
pins = {x['path']: x for x in imports['files']}
edges = d['proposed_external_dependency_edges']
assert len({(x['consumer_item_id'], x['supplier_item_id']) for x in edges}) == len(edges)
for e in edges:
    assert e['consumer_item_id'] in by and e['role'] in allowed_roles and not e['canonical_active']
    carrier_path = local_path(e['supplier_carrier_path'])
    target = r/carrier_path
    assert digest(target) == e['supplier_carrier_sha256']
    context = contexts[e['source_page']]
    assert digest(r/local_path(context['path'])) == e['source_page_sha256']
    assert e['source_page'] in closure(by[e['consumer_item_id']]['page'])
    if carrier_path in pins:
        pin = pins[carrier_path]
        assert digest(target) == pin['sha256']
        assert digest(pathlib.Path(imports['source_root'])/(pin.get('source_path') or pin['path'])) == pin['sha256']
for x in d['items']:
    assert set(x['external_supplier_ids']) == {e['supplier_item_id'] for e in edges if e['consumer_item_id'] == x['id']}

manifest_rows = []
for p in sorted((r/'research').glob(run+'-batch-*.pages.json')):
    rows = load(p)
    assert len(rows) == 2 and {x['kind'] for x in rows} == {'A','B'}
    for x in rows:
        assert x['items'] == []
        assert x['requires'] == pg[x['id']]['requires']
    manifest_rows += rows
assert len(manifest_rows) == 110
index = (r/'research/plan-advanced-qft-and-supersymmetry-track.md').read_text()
for p in pairs.values():
    assert index.splitlines().count('## '+p['title']) == 1
for p in [sc/'proposed-inventory.json', sc/'plan-fragment.json', sc/'prose-scaffold.md', sc/'plan-preview.md']:
    assert not [c for c in p.read_text() if unicodedata.category(c) in ['Cc','Cf'] and c not in '\n\r\t']
ora = by['pthm-qftx-oraifeartaigh-f-term-breaking']
assert 'lem-qftx-three-complex-variable-f-term-polynomial-minimum' not in ora['candidate_contract']
assert by['op-qftx-clay-4d-yang-mills-existence-mass-gap']['page'] == 'qftx-yang-mills-clay-problem'
assert '<!-- owner-superalgebra-domain-resolution -->' in (sc/'prose-scaffold.md').read_text()

result = {'run': run, 'scope': 'current preauthoring format/metadata only',
          'scientific_or_native_proof_acceptance': False, 'verdict': 'pass',
          'pairs': len(pairs), 'manifest_pages': len(manifest_rows), 'future_items': len(by),
          'item_edges': sum(map(len, graph.values())), 'external_edges': len(edges),
          'page_edges': sum(map(len, page_graph.values())), 'context_pages': len(contexts),
          'dependency_order': item_order,
          'inputs': {str(p.relative_to(r)): digest(p) for p in [sc/'proposed-inventory.json', sc/'plan-fragment.json',
                      sc/'prose-scaffold.md', sc/'plan-preview.md', r/'research/plan-spec.json', r/'research/math-imports.json']},
          'checks': ['143 interfaces, classifications and typed prerequisites', '110 current paired manifest pages',
                     'item/page DAGs and every in-run item-to-page projection', '68 exact external uses, source pins and current originals',
                     'canonical/fragment/source prerequisite agreement', 'dedicated nonlogical Clay home',
                     'corrected O\u2019Raifeartaigh in-item proof and explicit spectral-domain data', 'exact discovery headings and text controls']}
(out/'scope-format-check.json').write_text(json.dumps(result, indent=2, ensure_ascii=False)+'\n')
print(json.dumps({k:v for k,v in result.items() if k not in ['inputs','dependency_order','checks']}, indent=2))
