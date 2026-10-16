# Batch 54 focused SDP source repairs

Native finding source: scope-review/batch-54/review-1.json in this run. An actual process check found no native batch-54 repairer before edits. Exact current preimages are in before/items/ under this directory.

## Justification-link dispositions

Both alleged cycles are false positives. SCHEMA says justified_by targets must depend on the defining algorithm through deps and must not also be algorithm deps. The implementation at tools/depcheck.mjs explicitly excludes justified_by from prerequisite cycles and checks the target really depends on its defining item. A read-only traversal of actual deps from capped minimum, solver and Gibbs preparation found no prerequisite cycle. No links were removed or artificial edges introduced.

The minimum guarantee uses the already specified finite operations to prove the bounded trial/call contract and returned quantile property. It does not supply a premise assumed by its own definition. Solver guarantee proves its finite threshold/output contract; solver cost bounds the resulting finite certified execution and resource contract. These are forward discharges about the procedures, with the intended reverse deps in their proofs. Their algorithm references therefore create no circular proof premise.

## Repairs

1. alg-qa-30-quantum-sdp-solver now requires rational epsilon>0. Its guarantee and cost Statements explicitly carry the same domain. All original boundary branches remain.
2. thm-qa-30-sdp-gibbs-state-error-cost retains its original first conditional-vector estimate and actual success p_G/4. It now proves existence of a rational q in (p_G/8,p_G/4) using actual lem-rat-embeds-dense, supplies that certified finite input to CapAmplify, and derives the unchanged O(p_G^-1/2) amplification-call bound. Floor acquisition/verification costs are explicit additional costs; rational density is not claimed to compute an exact real trace.
3. alg-qa-30-sdp-gibbs-purification now specifies positive output accuracy and rational failure target for its optional normalized branch only, and chooses step-2 block accuracy e<=min(1,epsilon_out)/(10000 sqrt d). Large requested errors remain permitted by tightening precision. The unmeasured coherent block interface is unchanged.
4. Gibbs theorem proof 2.2 establishes the actual algorithm floor: on the shift good event min G<=2 and B<=17/16; the factorial series gives exp(1)<3, so p_G>1/(16d). The precision cap ensures the original vector-error hypothesis, hence actual success>1/(64d), requested normalized-vector accuracy, and applicability of the supplied rational 1/(64d) floor. Its fixed-floor amplification cost is O(sqrt d (1+ln(1/rho))), with shift failure separate. The fixed floor is not claimed comparable to p_G in both directions.

## Same-owner consumer closure

The actual recursive item consumer closure consists of the two reserved matrix-expectation sources, solver guarantee/cost, and sparse resource substitution, with Gibbs preparation/solver themselves included as changed roots. The reserved sources were read, never edited: they take an explicitly supplied purification and use only the unchanged conditional purification error bound; amplification does not supply a free inverse. Their independent coordinator retains their tolerance/control repairs.

The solver frozen factory executes Gibbs steps 2–3 without optional normalized amplification, so neither the rational-floor certificate nor optional epsilon_out/rho adds a premise to that route. The sparse resource substitution already assumes 0<epsilon<2R; its round/query costs remain valid. Solver guarantee/cost now explicitly carry epsilon>0. Existing binary-search correctness already has the positive nontrivial domain and proves the unchanged boundary cases. The home page summary continues to match the finite controlled/flagged solver and separate resource record. No other source consumer repair is required.

Final explicit source-only layout command:
node tools/proof-layout.mjs items/alg-qa-30-quantum-sdp-solver.md items/thm-qa-30-quantum-sdp-solver-guarantee.md items/thm-qa-30-quantum-sdp-solver-cost.md items/alg-qa-30-sdp-gibbs-purification.md items/thm-qa-30-sdp-gibbs-state-error-cost.md

Actual result: proof-layout: 5 items, 13 steps, 0 defects.

No tests, validators, gates, hashes, manifests/contracts, workflow controls, commits or published-source edits were performed. Source repairs await independent root acceptance and native owner resolution.

Root feedback completion: Gibbs theorem F5/deps now names the actual published complex spectral theorem, functional calculus, and endomorphism/matrix trace definitions. Proof 2.2 explicitly sums e^(-lambda_j) in an orthonormal eigenbasis and isolates the minimum-eigenvalue contribution. It also bounds each factorial-series partial sum using the finite geometric identity and the fixed 1/12 deficit at k=3, giving exp(1)<=35/12<3 without an unstated infinite geometric-sum premise. Exponential positivity/reciprocity has its actual direct supplier. Final explicit changed-theorem layout: 1 item, 3 steps, 0 defects.
