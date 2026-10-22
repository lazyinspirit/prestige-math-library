# Batch 95 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-95`.

## Completed level 0 review

`ex-csm-frontier-metastable-diagnostic`: accepted reader repair (citation correction). Reviewed every verification step and all eight direct supplier definitions/statements, including the published Metropolis algorithm and invariance proof. The finite discrete carrier, strictly positive target, symmetric proposal, accepted transitions, positive four-step kernel, conditional-survival law, two-state eigenvalue, and worst-start lower bound are sound. The endpoints t=0 and 0<epsilon<1 are covered. AC is inherited from the imported general-state interface; the finite calculation needs only finite sums. No empirical measurements are asserted.

The current judge-normalized item hash is the recorded post-reader hash `a0b55949e6bf9149a99c0b74ffdd1c60200309e870aca568f89735562777b668`, differing from pre-reader `43782836432dd618ed37bef9787b10672b8f3457f962a0af07c91474af35d6d8`. Reader evidence identifies the change as the LPW locator correction to section 3.2. Direct HTTP retrieval succeeded after the web PDF reader timed out. Independently read LPW section 3.2, printed pp.38–41 (PDF pages 54–57): symmetric acceptance min(1,pi(y)/pi(x)) and general proposal ratio (3.4) agree with the local calculation. Source: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf . No historical preimage was reconstructed or certified.

The CRITICAL risk review is complete in the owned contract. No new mathematical defect, published supplier defect, diagram defect, or consumer interface change was found. No defect-ledger row is warranted for this citation correction.

Next: review level-1 CFTP definition and heat-bath bound, then level-2 cluster invariance; finish decisions and focused checks.

## Completed level 1 review

`alg-csm-frontier-monotone-cftp`: accepted reader repair, repair confidence 1. Explicit coordinate order, separate sampling order (+ before -), and unchanged off-site spins agree with the logistic conditional. At U=0 the update is plus; U=1 gives minus, matching the supplier's last-interval rule. Stored maps are reused on overlapping doubled horizons. No correctness/runtime theorem is embedded in the Definition. Current post-reader hash is `ba2c87a58d461f57b514bfa0499e8777ae8ba355b2ce1fffb31194d0cbc39f2e`, pre-reader `4666272fc88eca87d9bc9c193896b03fecee1c85472d97c57e54aed16f79e571`. The reader explains the exact order/off-site clarification and reference relocation; its contract Definition mirrors current content. A search of items and library found only the exactness theorem and owning A-page as consumers. Independently read the exactness proof: finite positive forcing blocks, monotonicity, consistent stationary construction, finite minorization uniqueness and returned-law identification remain valid. The page inventories the unchanged ID; no consumer repair is necessary. LPW section 25.2, pp.349–354 (PDF 365–370), independently read, states the coordinate order, same threshold rule, stored randomness and doubling. Its time indices differ by a harmless shift. No new defect or ledger row.

`thm-csm-frontier-heat-bath-tv-bound`: HIGH risk review complete; no routed decision owed. Independently checked all six proof steps, maximal-coupling alpha=1 branch, finite influence telescoping, column-sum contraction and stationary coupling, TV event identity, exponential comparison and constant-observable branch. Singleton S, n=1, c=0 and t=0 give no counterexample; zero-th powers have their ordinary discrete-time value 1. The extra row hypothesis does not invalidate the estimate. LPW section 3.3.2 pp.42–43, section 14.2 pp.203–205, and section 15.1 pp.215–217 were read; the general coefficient bound is proved locally. No empirical confidence bound is asserted. Friedli–Velenik's cited infinite-volume passage is context, not a used theorem, and was not independently retrieved here.

Next: level-2 cluster invariance review and focused closeout checks.

## Completed level 2 review and local repair

`thm-csm-frontier-swendsen-wang-invariance`: HIGH risk review complete. Decision on the discovered proof-only defect: confirmed nonfatal, repaired with confidence 1; defect ID `physics-non-fluid-129-2026-10-21-r2-3a-batch-95-endpoint`. In proof step 1.1, `sigma(v_e)` evaluated the spin at a real edge activity rather than a vertex. Replaced it with `sigma(w_e)`, matching the endpoints in F2 and the supplier Definition, and synchronized the contract derivation. No Statement/Definition, dependency, manifest, or provenance classification changes; no judge record existed to invalidate. This risk-review discovery adds no routed obligation under the authoritative scope, so the decisions JSON still contains exactly the two touched obligations.

Independently read both actual suppliers and all five Edwards–Sokal proof steps. The finite joint-law marginal expansions, uniform independent component colors on positive-probability edge sets, and conditional-edge Bernoulli factors imply the claimed invariance. Empty vertex/edge sets, isolated vertices, zero activities, Q=2 and uniform endpoints are covered. Zero-activity active sets cannot be generated; hence the positive-probability conditional is used legitimately. Finite termination is immediate from finite edges/components. No unproved mixing or physical conclusion is imported.

Sources independently retrieved and read: Grimmett, section 2.3 printed pp.7–8 (current retrieved PDF pages 7–8), section 8.3 p.39; https://arxiv.org/pdf/math/0205237 . Current PDF printed pagination coincides here with PDF pagination, differing from some stored PDF offsets. Duminil-Copin, section 3.2 printed pp.24–26 (PDF32–34), especially free-boundary Remark 2.2; https://www.ihes.fr/~duminil/publi/Courspeccot2.pdf . These sources treat homogeneous parameters; the exact local finite supplier and consumer arguments cover edge-dependent activities and zero without extrapolating an external theorem. No published defect or outside-scope repair is needed.

All routed items and risk reviews are now complete. Focused mechanical checks remain.

## Final dispositions and validation

Exactly two routed obligations are recorded in the decisions JSON, both `accepted_repair`, each with repair confidence 1. Neither reader nor refuter reported a finding; there are no page obligations. Citation correction and explicit-definition clarification do not require invented defect rows. The independently discovered cluster proof defect is recorded once as fixed in `research/defect-ledger.jsonl`, with its risk-review disposition above. No additional obligation is invented for an untouched risk-only carrier.

Focused local checks, after the final proof edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/thm-csm-frontier-swendsen-wang-invariance.md`: unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` on the example, CFTP algorithm, heat-bath bound and cluster invariance: three proof-bearing items checked, zero failing; algorithm is definition-like.
- `node tools/physics-support/rendercheck.mjs` on those same four paths: four files clean, including actual KaTeX and YAML parsing.
- `node tools/physics-support/proof-layout.mjs items/ex-csm-frontier-metastable-diagnostic.md items/alg-csm-frontier-monotone-cftp.md items/thm-csm-frontier-swendsen-wang-invariance.md`: three items, nine steps, zero defects, once after the final item edit and reflow.
- Required initial risk report and final `risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-95.proof-contracts.json --require-reviewed`: zero errors, eight items routed; the two HIGH and one CRITICAL reviews are complete.
- Closed defect append succeeded using the ledger tool. Its first attempt exposed a local JSON-shape error (evidence must be an array), corrected before any row was appended; no mechanical defect row was created.

Updated only the owned proof and contract, required report/decisions, closed defect ledger and owned frontier-dependency notes. No diagram occurs in the reviewed carriers, and none is needed. No published content was edited; no published defect was identified. Source retrieval/read limits are stated above. This was a scoped proof/supplier-interface review, not a transitive audit of the imported mathematics corpus. No judging, stamping, certification or engine gate cycle was run. No blocker remains in the assigned scope; the engine owns subsequent hashes and gates.
