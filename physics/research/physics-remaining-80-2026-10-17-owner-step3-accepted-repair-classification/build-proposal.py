"""Read-only canonical inputs; writes only this owner's proposal and checks."""
from pathlib import Path
import datetime, hashlib, json, re

ROOT = Path(__file__).resolve().parents[2]
R = ROOT / 'research'
RUN = 'physics-remaining-80-2026-10-17'
OUT = Path(__file__).parent

def read(p): return p.read_text()
def load(p): return json.loads(read(p))
def raw(p): return hashlib.sha256(p.read_bytes()).hexdigest()
def relative(p): return str(p.relative_to(ROOT))
def decisions(batch):
    obj = load(R / f'{RUN}-alpha-batch-{batch}-3a-decisions.json')
    return obj if isinstance(obj, list) else obj['decisions']
def paragraphs(text, predicate):
    return [p for p in text.split('\n\n') if predicate(p)]

diagpath = R / f'{RUN}-owner-step3-battery1/carrier-diagnostics.json'
diagnostic = load(diagpath)
errorpath = R / f'{RUN}-owner-step3-battery1/step3-routing-adjudicate.txt'
ids = re.findall(r'ERROR decision-not-applied: \[([^\]]+)\] accepted_repair', read(errorpath))
assert len(ids) == len(set(ids)) == 81
assert set(ids) == {r['id'] for r in diagnostic['rows']}
rows = []
bindings = {}
def bind(path):
    assert path.exists(), path
    bindings[relative(path)] = {'raw_sha256': raw(path), 'purpose': 'ordinary forensic input binding, not a canonical carrier seal'}
    return relative(path)

for observed in diagnostic['rows']:
    b, ident = observed['batch'], observed['id']
    decisionpath = R / f'{RUN}-alpha-batch-{b}-3a-decisions.json'
    historical = [d for d in decisions(b) if d['id'] == ident and d['verdict'] == 'accepted_repair']
    assert len(historical) == 1, (b, ident)
    historical = historical[0]
    prepath = R / f'{RUN}-step3-hash-{b}-pre.json'
    postpath = R / f'{RUN}-step3-hash-{b}-post.json'
    pre, post = load(prepath)['hashes'][ident], load(postpath)['hashes'][ident]
    sourcepath = ROOT / f'items/{ident}.md'
    source = read(sourcepath)
    assert raw(sourcepath) == observed['current_source'], ident
    assert post['item_sha256'] == observed['post_source'], ident
    reportpath = R / f'{RUN}-alpha-batch-{b}-3a.md'
    report = read(reportpath)
    itemparagraphs = paragraphs(report, lambda p: ident in p)
    if not itemparagraphs and b == '26':
        marker = 'Canonical, grand and isobaric preparation' if ident.startswith('post-') else 'Canonical, grand, isobaric response'
        itemparagraphs = paragraphs(report, lambda p: marker in p)
    assert itemparagraphs, ident
    syncparagraphs = paragraphs(report, lambda p: bool(re.search(r'synchroniz|synchronis|quotations?|manifest|contract.*review|risk.review', p, re.I)))
    contractpath = R / f'{RUN}-batch-{b}.proof-contracts.json'
    manifestpath = R / f'{RUN}-batch-{b}.pages.json'
    contract = load(contractpath)['contracts'].get(ident)
    manifest = load(manifestpath)
    pages = manifest if isinstance(manifest, list) else manifest['pages']
    manifestrow = [dict(item, __step4_page_id=p['id']) for p in pages for item in p['items'] if isinstance(item,dict) and item.get('id') == ident]
    assert len(manifestrow) == 1
    delta = []
    for component, flag in [('source','source_equal_post'),('contract','contract_equal_post'),('manifest','manifest_equal_post')]:
        if not observed[flag]: delta.append(component)
    sourcechange = 'Exact reader-result source bytes retained, including its proof, metadata and public clauses. No new source assessment is inferred from later worksheet/manifest currency.'
    outside = []
    if b == '27':
        assert observed['current_source'] in report and observed['post_source'] in report
        assert 'normalized this bibliographic label on the eleven routed carriers' in report
        sourcechange = ('Current raw source is exactly the native Alpha handoff raw in its per-item pre/post/handoff table. '
                        'Alpha explicitly records normalization of Friedli–Velenik pp.329–332 from an Appendix label to Chapter6 §6.12 on eleven routed carriers and their manifest source rows. '
                        'The item-specific paragraph retains the accepted reader construction; this proposal does not substitute a new lattice proof review or infer absent preimage bytes.')
    if ident == 'prop-emg-xs-null-invariants':
        p = R / f'{RUN}-owner-step3-flux-integration23/root-mechanical-join.json'
        outside.append(bind(p))
        change = load(p)['changes'][0]
        assert change['before'] == observed['post_source'] and change['after'] == observed['current_source']
        restored = source.replace('## Remark\n', '## Curvature convention\n', 1).encode()
        assert hashlib.sha256(restored).hexdigest() == observed['post_source']
        sourcechange = 'Exactly one heading changed: ## Curvature convention → ## Remark. Reversal authenticates the complete immutable post-reader file; every other byte is identical. The accepted flatness convention and all proof arguments remain present. Root join also documents removal of the invented external self-citation from this contract.'
    if ident == 'post-qsm-band-and-grand-preparation':
        p = R / f'{RUN}-owner-step3-band-render/resolution.json'
        outside.append(bind(p))
        resolution = load(p)
        assert resolution['current']['raw_sha256'] == observed['current_source']
        assert resolution['before']['raw_sha256'] == observed['post_source']
        beforepath = ROOT.parent / resolution['before']['path']
        assert raw(beforepath) == observed['post_source']
        assert re.sub(rb'\s+', b'', beforepath.read_bytes()) == re.sub(rb'\s+', b'', sourcepath.read_bytes())
        sourcechange = 'One hard newline between \\qquad and D(N) in the same displayed domain formula was replaced by a space. Archived before source equals immutable post; all nonwhitespace bytes are identical. No mathematical or physical clause changed.'
    if b in ['6','70','75']:
        base = R / f'{RUN}-owner-step3-batch{b}-historical'
        outside += [bind(base/'resolution-report.json'), bind(base/'root-adoption.json')]
    if ident == 'thm-tgr-constant-density-star-verified':
        p = R / f'{RUN}-owner-step3-batch70-historical/distribution-precision/successor-report.json'
        outside.append(bind(p))
        successor = load(p)
        assert successor['native_post_raw_sha256'] == observed['post_source']
        assert successor['current_raw_sha256'] == observed['current_source']
        sourcechange = ('The historical reader branch-range/distribution-interface repair remains accepted. A distinct adopted post-native precision replaces undefined continuity of test-function functionals by explicit compact-support finite-order derivative bounds and verifies those bounds in Proof3.1. '
                        'The successor report binds these exact current bytes, preserves all branch/no-surface-stress conclusions, and checks seven actual item uses. This is not a claim that current source equals immutable post.')
    evidencepaths = [bind(p) for p in [decisionpath, reportpath, prepath, postpath, sourcepath, contractpath, manifestpath]]
    for name in [f'{RUN}-reader-{b}.md', f'{RUN}-reader-findings-{b}.json']:
        p=R/name
        if p.exists(): evidencepaths.append(bind(p))
    reason = ('Preserve the original accepted reader repair and its existing defect_ids. The routing checker compares a composite source/contract/manifest carrier, not source bytes alone. '
              + sourcechange + ' Observed composite components differing from immutable post: ' + ', '.join(delta) + '. '
              'Thus amended_repair truthfully records the present composite carrier without retracting historical reader acceptance or inventing another scientific defect. Root must independently reseal the actual current carrier after joining all edits.')
    rows.append({
        'batch': b, 'id': ident, 'obligation': historical['obligation'],
        'classification': 'report_backed_composite_carrier_amendment',
        'proposed_verdict': 'amended_repair', 'rationale': reason,
        'preserve_defect_ids': historical['defect_ids'],
        'historical_accepted_decision_verbatim': historical,
        'immutable_pre_carrier': pre, 'immutable_post_carrier': post,
        'root_observed_current_comparison': observed,
        'source_delta': sourcechange,
        'contract_and_manifest_delta_evidence': {
            'changed_components_exactly_observed': delta,
            'native_report_item_paragraphs_verbatim': itemparagraphs,
            'native_report_sync_paragraphs_verbatim': syncparagraphs,
            'current_contract_top_level_fields': sorted(contract.keys()) if contract else [],
            'current_manifest_row': manifestrow[0],
            'limit': 'Equality/difference is authenticated at component level. Listed native synchronization descriptions and current fields are evidence of known maintenance kinds, not an exhaustive reconstructed historical JSON-field diff; original full contract/manifest preimage bytes are not assumed available.'
        },
        'outside_owner_evidence': outside, 'evidence_paths': evidencepaths,
        'scientific_unknown_from_this_mismatch': None,
        'proposed_evidence_text': reason + ' Original assessment: ' + (historical['evidence'] if isinstance(historical['evidence'],str) else json.dumps(historical['evidence'],ensure_ascii=False))
    })

supplements=[]
for b in ['10','78','80']:
    reportpath=R/f'{RUN}-alpha-batch-{b}-3a.md'; report=read(reportpath)
    for d in decisions(b):
        if d.get('verdict') != 'accepted_repair' or d.get('defect_ids'): continue
        ident=d['id']; src=ROOT/f'items/{ident}.md'
        bind(src);bind(reportpath);bind(R/f'{RUN}-alpha-batch-{b}-3a-decisions.json')
        if b=='10':
            reason='Native Alpha explicitly found no substantive defect: step3.1 merely expands the already supplied slice-aligned product diffeomorphism and reference-connection transport. Sound proof explication/audit enrichment is retained; no scientific ledger defect should be invented.'
        elif b=='78':
            reason='Native Alpha explicitly excludes sound geometric elaboration from defect rows. The acceleration theorem retains reader geometry/frequency elaboration, and final declarations name three suppliers already used in F1; its public Statement is unchanged. This is audit enrichment, separate from the reduced-horizon same-generator defect and thought-experiment notation defect.'
        else:
            reason='Native Alpha explicitly reports no new confirmed proof defect: the positive C1 cutoff schedule already includes the endpoint, and reader closed-interval wording clarifies that intended domain. Retain the exact endpoint argument and consumer review as audit enrichment without manufacturing a ledger finding.'
        supplements.append({'batch':b,'id':ident,'obligation':d['obligation'],'proposed_verdict':'reviewed_no_defect','proposed_change_kind':'audit_enrichment','preserve_defect_ids':[], 'rationale':reason,'historical_accepted_decision_verbatim':d,'native_report_item_paragraphs_verbatim':paragraphs(report,lambda p: ident in p),'native_report_no_defect_paragraphs_verbatim':paragraphs(report,lambda p: bool(re.search('no .*defect|not.*defect|no defect.*invent|sound geometric elaboration|proof explication',p,re.I))),'evidence_paths':[relative(reportpath),relative(src)],'proposed_evidence_text':reason+' Preserve original native evidence: '+d['evidence']})
assert len(supplements)==5

bose_report=R/f'{RUN}-alpha-batch-45-3a.md'
bose_note={'issue':'Accepted lattice endpoint supplier repair is distinct from the homogeneous-Bose convergence-in-probability definition repair.', 'evidence':paragraphs(read(bose_report),lambda p:'thm-qsm-models-lattice-riemann-bose-bound' in p or ('refuter:45:1' in p)), 'disposition':'Do not reinterpret the convergence-in-probability definition ledger row as authentic evidence of the reader endpoint-supplier defect. Native report independently supports accepted endpoint repair and checked consumers, but root/serialization owner must provide a separate honestly sourced endpoint row if the current row is wrong; this report does not append or fabricate one.'}
bind(bose_report);bind(diagpath);bind(errorpath)
proposal={'run':RUN,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'cycle':1,'scope':'Only 81 accepted_repair decision-not-applied classifications, plus five explicitly requested no-defect accepted-verdict serialization proposals. Canonical inputs read-only.','authority':'Root owns adoption, canonical decisions, ledger, all composite hashes/stamps, rehashing and gates. This file is a proposal, not an acceptance or gate result.','method':'Read full native report/decisions and immutable pre/post fingerprint JSON for each scoped batch, actual current sources/contracts/manifests, root diagnostics, and identified outside adoption/precision reports. Compare actual raw source evidence with root diagnostic; preserve native historical accepted assessment verbatim. No duplicate recursive science review for post-identical source.','summary':{'accepted_mismatches':len(rows),'exact_post_sources':sum(x['root_observed_current_comparison']['source_equal_post'] for x in rows),'documented_changed_sources':sum(not x['root_observed_current_comparison']['source_equal_post'] for x in rows),'proposed_amended_repair':len(rows),'supplementary_reviewed_no_defect':len(supplements),'new_scientific_gaps_established':0},'classification_limits':['Native report scientific judgments are preserved as authenticated prior assessments, not freshly duplicated proof audits.','Contract/manifest equality flags establish exact composite-component currency. Absent full historical JSON bytes prevent an exhaustive historic field-by-field diff; native recorded maintenance is quoted with that limit.','No canonical decisions, sources, contracts, manifests, immutable snapshots, native state, ledger, tools or hash stamps were changed.','Other decision routing/serialization/ledger ownership errors remain with the legacy owner and root; proposal does not attest a full gate pass.'], 'obligations':rows,'supplementary_no_defect_proposals':supplements,'batch45_ledger_distinction':bose_note,'input_bindings':bindings}
(OUT/'proposal.json').write_text(json.dumps(proposal,ensure_ascii=False,indent=2)+'\n')
checks={'accepted_error_exact_set':True,'unique_obligations':len({x['obligation'] for x in rows})==81,'all_81_current_source_raws_match_root_diagnostic':True,'all_81_post_raws_match_immutable_snapshot':True,'seven_batch27_current_raws_present_in_native_handoff_table':True,'batch23_exact_heading_reversal_matches_post':True,'batch36_archived_before_matches_post_and_nonwhitespace_bytes_equal':True,'batch70_current_post_pair_matches_adopted_successor':True,'every_proposal_retains_historical_decision_and_defect_ids':True,'supplementary_no_defect_count':len(supplements),'canonical_mutations':[],'gate_attempted':False}
(OUT/'checks.json').write_text(json.dumps(checks,indent=2)+'\n')
print(json.dumps(proposal['summary']))
