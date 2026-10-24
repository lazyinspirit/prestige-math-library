"""Root-owned, same-frontier metadata repair; does not change engine state."""
import datetime
import hashlib
import json
import pathlib

ROOT = pathlib.Path.cwd()
RUN = 'advanced-qft-supersymmetry-build-2026-10-23'
DOSSIER = ROOT / 'research/advanced-qft-supersymmetry-2026-10-23'
OUT = ROOT / 'research' / (RUN + '-owner-resolution')
SC = DOSSIER / 'scaffold'


def read(path):
    return json.loads(path.read_text())


def save(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + '\n')


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


d = read(SC / 'proposed-inventory.json')
fragment = read(SC / 'plan-fragment.json')
spec = read(ROOT / 'research/plan-spec.json')
pins = read(OUT / 'additional-math-supplier-pins.json')
by = {x['id']: x for x in d['items']}
pairs = {x['id']: x for x in d['page_pairs']}
canonical = {x['id']: x for x in spec['pages']}
new_pages = set(pairs)
foundation = 'aqft-susy-math-foundations'
old_super = {'def-lie-superalgebra-over-complex-numbers', 'def-lie-supermodule',
             'thm-supermodules-equivalent-to-graded-u-modules'}
base_pages = [x['id'] for x in pins['pages'][:4]]
assert len(base_pages) == 4
canonical[foundation]['requires'] = base_pages

# Preserve initial accepted audit bytes; current repairs receive separate evidence.
for path in [SC / 'prose-scaffold.md', DOSSIER / 'README.md']:
    archived = OUT / 'preimages' / path.relative_to(ROOT)
    archived.parent.mkdir(parents=True, exist_ok=True)
    if not archived.exists():
        archived.write_bytes(path.read_bytes())

removed = [x for x in d['proposed_external_dependency_edges']
           if x['supplier_item_id'] in old_super]
d.setdefault('superseded_external_dependency_candidates', []).extend(removed)
d['proposed_external_dependency_edges'] = [x for x in d['proposed_external_dependency_edges']
                                         if x['supplier_item_id'] not in old_super]
for item in d['items']:
    item['external_supplier_ids'] = [x for x in item['external_supplier_ids'] if x not in old_super]
for row in d['supplier_use_edges']:
    if row['source_page'] == 'lie-superalgebras-and-super-representation-theory':
        row.setdefault('historical_consumer_item_ids', row['consumer_item_ids'])
        row['consumer_item_ids'] = []
        row['consumer_item_pages'] = []
        row['relationship'] = 'nonlogical-source-comparison-only'
        row['activation'] = 'No logical use: the complete local graded algebra/action is defined directly.'

report = f'research/{RUN}-owner-resolution/superalgebra-review.md'
for ident in ['def-qftx-super-poincare-algebra-4d', 'lem-qftx-super-poincare-graded-jacobi',
              'def-qftx-unitary-super-poincare-representation',
              'thm-qftx-supermultiplet-mass-degeneracy', 'thm-qftx-n-extended-central-charge-bounds']:
    by[ident]['owner_local_construction'] = {
        'evidence': report,
        'obligation': 'Fully author the displayed local construction and argument; no root supermodule or enveloping theorem is assumed.',
        'native_proof_acceptance': False,
    }
by['def-qftx-super-poincare-algebra-4d']['definition_supplement'] = (
    'Define signed grading, bilinear graded bracket and the complete based N-extended spinor/vector/central bracket table locally. '
    'Give its conjugate-linear adjoint involution, real fixed form and mostly-plus Pauli/vector basis bridge. '
    'Verify all four Jacobi parity patterns and involution compatibility, including antisymmetric spinor and flavor forms.')
by['def-qftx-unitary-super-poincare-representation']['definition_supplement'] = (
    'Use a positive graded Hilbert space, strongly continuous even spin-Poincare representation, joint momentum PVM with future-cone support, '
    'actual closed odd charges and adjoints, common product-invariant dense domain and exact covariance. '
    'Require momentum projections to reduce every charge including its operator domain. '
    'Formal commutators on a dense domain alone are insufficient. The imported mathematical pairing is linear in its first variable; '
    'state any bra-ket convention bridge explicitly. Carry Countable Choice inherited from the selected PVM/unbounded-operator interfaces.')
by['thm-qftx-supermultiplet-mass-degeneracy']['proof_supplement'] = (
    'Use the mass PVM obtained by pushforward of the joint momentum PVM; its projections reduce the charges by the defining domain condition. '
    'Prove nonzero superpartners preserve mass; an irreducible integrated super-representation has a single mass value. '
    'Do not infer strong spectral compatibility from formal common-domain commutation.')
by['thm-qftx-n-extended-central-charge-bounds']['proof_supplement'] = (
    'On the supplied fixed mass/central-charge rest fiber prove positivity of 2[[M I,Z],[Z*,M I]], hence M>=||Z||. '
    'For N=2 explicitly expand 4(M-|Z|). Keep the full shortening/multiplicity obligations if claimed; '
    'a massless one-particle state is not assigned a rest frame.')
pairs[foundation]['gaps'] = [
    'The unimported root superalgebra objects are nonlogical comparison only. Author all local graded bracket/action/real-form and Jacobi data.',
    'Specify integrated spectral/domain covariance; no unbounded spectral statement follows from a formal commutator alone.'
]

# Synchronize the corrected scientific source with the physical theorem contract.
ora = 'pthm-qftx-oraifeartaigh-f-term-breaking'
lines = (DOSSIER / 'research-supersymmetry.md').read_text().splitlines()
by[ora]['candidate_contract'] = next(x for x in lines if x.startswith('| `' + ora + '` |'))
by[ora]['contract_locator'] = 'O\u2019Raifeartaigh tree-level potential and Candidate item interfaces and precise remaining gaps'
by[ora]['owner_scientific_resolution'] = {
    'evidence': f'research/{RUN}-owner-resolution/oraifeartaigh-review.md',
    'embedding': f'research/{RUN}-owner-resolution/oraifeartaigh-embedding-addendum.md',
    'proof_location': 'Complete elementary minimum calculation is authored inside this physical theorem, not assumed as a new helper.',
    'scope': 'All nonzero complex k,m and arbitrary complex y; both minimum regimes, equality boundary, flat directions and quantum limitations.'
}
by['post-qftx-n1-wess-zumino-model']['required_model_instances'] = [{
    'consumer': ora, 'fields': 'Three chiral fields with canonical metric and no D term',
    'superpotential': 'W=-k Phi1 + m Phi2 Phi3 + (y/2) Phi1 Phi3^2; k,m nonzero complex; y arbitrary complex',
    'units': '[k]=mass^2, [m]=mass, [y]=1, [fields]=mass in hbar=c=1',
    'effect_on_generic_model': 'Explicit specialization; general action and other consumers remain unchanged.'
}]

sources = {x['id']: x for x in pins['items']}
page_records = {x['id']: x for x in pins['pages']}
assignments = []
for ident in list(sources)[:6]:
    assignments.append((ident, 'def-qftx-unitary-super-poincare-representation',
                        'Exact Hilbert, momentum-PVM, operator-domain and adjoint definitions for the local unitary data.'))
for ident in list(sources)[6:10]:
    assignments.append((ident, ora, 'Complex arithmetic, modulus/real-part bounds and explicit phase-aligned square roots in the in-item minimum proof.'))
assignments += [
    ('cor-change-of-variables-for-compactly-supported-functions', 'thm-qftx-local-faddeev-popov-slice-jacobian', 'Finite-dimensional local slice chart Jacobian and change of variables only.'),
    ('thm-euclidean-inverse-function-theorem', 'thm-qftx-local-faddeev-popov-slice-jacobian', 'Local inverse under the explicitly invertible finite-dimensional differential.'),
    ('thm-differentiation-under-the-integral-sign', 'thm-finite-dimensional-q-exact-deformation-invariance', 'Differentiate the finite-dimensional integral using an integrable derivative majorant on compact parameter intervals.')
]

for sid, consumer, use in assignments:
    item = sources[sid]
    if sid not in by[consumer]['external_supplier_ids']:
        by[consumer]['external_supplier_ids'].append(sid)
    meta = {'kind': item['kind'], 'domain': 'mathematics', 'status': item['status'],
            'verification': item.get('verification', {}), 'current_carrier_sha256': item['sha256'],
            'import_pin': {'status': 'pinned-in-current-physics-math-import-snapshot',
                           'path': item['path'], 'sha256': item['sha256'], 'source_hash_matches': True}}
    row = {'consumer_item_id': consumer, 'supplier_item_id': sid, 'role': 'mathematical-premise',
           'source_page': item['source_page'], 'supplier_carrier_path': item['path'],
           'supplier_carrier_sha256': item['sha256'], 'source_page_sha256': item['source_page_sha256'],
           'observed_item_and_page_status': 'published and imported; exact verification mapping recorded',
           'hypotheses_and_scope': use, 'consumer_use': use,
           'activation_status': 'candidate-direct-prerequisite-ready-for-native-review',
           'canonical_active': False, 'supplier_current_metadata': meta}
    if not any(x['consumer_item_id'] == consumer and x['supplier_item_id'] == sid for x in d['proposed_external_dependency_edges']):
        d['proposed_external_dependency_edges'].append(row)
    use_row = {k: row[k] for k in ['supplier_item_id', 'supplier_carrier_path', 'supplier_carrier_sha256',
                                  'source_page', 'source_page_sha256', 'supplier_current_metadata', 'hypotheses_and_scope']}
    use_row.update({'observed_status': row['observed_item_and_page_status'], 'consumer_item_ids': [consumer],
                    'consumer_pair_page': by[consumer]['page'].removesuffix('-examples'),
                    'consumer_item_pages': [{'item_id': consumer, 'page': by[consumer]['page'],
                                             'page_kind': 'B' if by[consumer]['page'].endswith('-examples') else 'A'}],
                    'relationship': 'exact-future-prerequisite-use', 'logical_dependency': False,
                    'activation': 'Future declared prerequisite; native authored carriers and ordinary validation remain due.'})
    if not any(x['supplier_item_id'] == sid and consumer in x['consumer_item_ids'] for x in d['supplier_use_edges']):
        d['supplier_use_edges'].append(use_row)

for edge in d['proposed_external_dependency_edges']:
    sid = edge['supplier_item_id']
    if sid in {'thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group',
               'lem-reynolds-operator-and-invariant-subring-properties',
               'thm-invariant-ring-finite-generation-and-affine-categorical-quotient'}:
        edge['owner_context_review'] = f'research/{RUN}-owner-resolution/invariant-review.md'
        edge['activation_status'] = 'owner-context-reviewed-for-planning; ordinary-native-item-validation-remains'
    elif sid == 'prop-qftx-hall-spectrum-invariance':
        edge['owner_context_review'] = f'research/{RUN}-owner-resolution/hall-review.md'
        edge['activation_status'] = 'owner-context-reviewed-for-planning; physical-dictionary-not-supplied'
by['def-aqft-operator-basis-quotient']['owner_required_assumptions'] = (
    'Carry full AC inherited from the actual reductive/Reynolds chain. Use rational-module exactness for a stable linear relation subspace. '
    'The commutative reduced affine-ring theorem does not automatically apply to a Grassmann algebra, arbitrary IBP subspace or infinite jets.')

# Keep the native drift corrections and source-page records synchronized.
for pair in d['page_pairs']:
    req = canonical[pair['id']]['requires']
    pair['requires'] = [x for x in req if x in new_pages]
    pair['required_source_pages'] = [x for x in req if x not in new_pages]
for record in pins['pages']:
    if not any(x['page'] == record['id'] for x in d['supplier_context']):
        d['supplier_context'].append({
            'page': record['id'], 'path': record['path'], 'sha256': record['sha256'],
            'source_page_prerequisites': record['requires'], 'category': record['category'],
            'library': record['library'], 'observed_status': 'published and imported',
            'hypotheses_and_scope': 'Exact selected mathematical interfaces recorded in additional-math-supplier-pins.json.',
            'logical_edge': False, 'note': 'Existing source context; exact proposed item uses are recorded separately.',
            'consumer_pair_pages': sorted({by[c]['page'].removesuffix('-examples') for s, c, _ in assignments
                                           if sources[s]['source_page'] == record['id']} |
                                          {foundation} if record['id'] in base_pages else
                                          {by[c]['page'].removesuffix('-examples') for s, c, _ in assignments
                                           if sources[s]['source_page'] == record['id']})
        })
    if record['id'] not in canonical:
        canonical[record['id']] = {'id': record['id'], 'title': record['title'], 'kind': 'P',
                                   'category': record['category'], 'library': record['library'],
                                   'requires': [], 'items': [], 'order': 0}
        spec['pages'].append(canonical[record['id']])

fragment_ids = {x['id'] for x in fragment['pages']}
for page in fragment['pages']:
    if page['kind'] in ['A', 'B']:
        page['requires'] = list(canonical[page['id']]['requires'])
for context in d['supplier_context']:
    if context['page'] not in fragment_ids:
        p = canonical[context['page']]
        fragment['pages'].append({**p, 'order': 0, 'path': context['path'],
                                  'context_status': context['observed_status']})
d['page_dependency_edges'] = [
    {'requires_page': req, 'consumer_page': page['id'],
     'relation': 'companion-example-of' if page['kind'] == 'B' and req == page.get('companion') else 'authoring-prerequisite',
     'logical_item_dependency': req in new_pages}
    for page in fragment['pages'] if page['kind'] in ['A', 'B'] for req in page.get('requires', [])]

# Update historical claims only through a separate explicit owner record.
d['inventory_state'] = 'owner-repaired-preauthoring-plan'
d['owner_resolution_evidence'] = {
    'run': RUN, 'superalgebra': report,
    'invariant': f'research/{RUN}-owner-resolution/invariant-review.md',
    'hall': f'research/{RUN}-owner-resolution/hall-review.md',
    'placement': f'research/{RUN}-owner-resolution/placement-review.md',
    'oraifeartaigh': f'research/{RUN}-owner-resolution/oraifeartaigh-embedding-addendum.md',
    'publication_or_native_proof_acceptance': False}
assert len(d['items']) == 143 and len(d['page_pairs']) == 55
save(SC / 'proposed-inventory.json', d)
save(SC / 'plan-fragment.json', fragment)
save(ROOT / 'research/plan-spec.json', spec)

def tick_list(values):
    return ', '.join('`' + x + '`' for x in values) or '—'

track = ['# Advanced QFT and supersymmetry research track', '',
         'Current isolated-build planning includes the explicit owner resolutions below. The initial sealed audit and native drift report remain immutable historical evidence.', '',
         f'Read `research/{RUN}-owner-authoring-direction.md` and `research/{RUN}-owner-resolution/` before authoring.', '',
         'The source and proof contracts remain draft; this index grants no proof, publication or native review coverage.', '']
preview = ['# Advanced QFT and supersymmetry — current page-order preview', '',
           'Owner-repaired preauthoring plan; 55 A/B pairs, 19 mathematics and 36 physics, 143 item contracts. New A/B item arrays remain empty until native authoring.', '',
           '| Order | A page | Category | Prerequisites | Future item interfaces |',
           '|---:|---|---|---|---|']
for n, pair in enumerate(d['page_pairs'], 1):
    req = canonical[pair['id']]['requires']
    track += ['## ' + pair['title'], '',
              f"A page ID: `{pair['id']}`; companion B page: `{pair['id']}-examples`; category: `{pair['category']}`; library: `{pair['library']}`.", '',
              'Scope: ' + pair['scope'], '',
              'Required earlier pages: ' + tick_list(req) + '.', '',
              'Future planned item IDs: ' + tick_list(pair['items']) + '.', '',
              'Complete item contracts: `research/advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json`.', '',
              'Research source notes: ' + tick_list(pair['research_notes']) + '.', '']
    preview += [f"| {n} | `{pair['id']}` | `{pair['category']}` | {tick_list(req)} | {tick_list(pair['items'])} |"]
(ROOT / 'research/plan-advanced-qft-and-supersymmetry-track.md').write_text('\n'.join(track) + '\n')
(SC / 'plan-preview.md').write_text('\n'.join(preview) + '\n')

prose = SC / 'prose-scaffold.md'
s = prose.read_text()
marker = '<!-- owner-superalgebra-domain-resolution -->'
if marker not in s:
    addition = '''<!-- owner-superalgebra-domain-resolution -->
The unitary representation data include a joint momentum projection-valued
measure $E$ with future-cone support and closed supercharges with their actual
Hilbert adjoints. Require $E(B)D(Q)\\subseteq D(Q)$ and
$QE(B)\\psi=E(B)Q\\psi$ for every Borel $B$ and $\\psi\\in D(Q)$, and the
corresponding adjoint condition. A formal commutator on a dense domain does not
imply this spectral/domain condition. The mass spectral measure is the
pushforward of $E$ by $p\\mapsto-\\eta^{\\mu\\nu}p_\\mu p_\\nu$; these reducing
projections therefore preserve nonzero superpartners. The complete local
graded bracket, real-form, Jacobi and operator-domain construction is prescribed
in the owner superalgebra resolution; the unimported enveloping-module theorem
is comparison context only. Countable Choice assumptions inherited from the
selected earlier spectral/operator definitions remain explicit.

'''
    s = s.replace('For four-dimensional `N=2`,', addition + 'For four-dimensional `N=2`,', 1)
prose.write_text(s)
readme = DOSSIER / 'README.md'
s = readme.read_text()
if '## Current native owner resolutions' not in s:
    s += f'''\n## Current native owner resolutions\n\nThe initial audit binds its recorded pre-repair source bytes. The isolated build\nnow follows the supplier/domain, Wilsonian placement and O'Raifeartaigh repairs\nin `research/{RUN}-owner-resolution/` and its run-local owner direction. Those\nrecords preserve the original audit, native report and before sources, and grant\nno publication or completed-proof acceptance. The page scope remains 55 pairs.\n'''
readme.write_text(s)
print(f'Integrated 143 contracts over 55 pairs; {len(d["proposed_external_dependency_edges"])} exact external candidates; no engine state or imported carrier changed.')
