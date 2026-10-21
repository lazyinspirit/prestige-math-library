# Step 3a — batch 1

Run: `inverse-problems-knot-theory-all-109-2026-10-19`. Dispatch: `3a-batch-1`; group: `batch-1`; covers: batch 1 only. Reviewed 2026-10-21.

## Routing and evidence

Read the generated order task, `briefs/tasks/alpha-3a-adjudicate.md`, `briefs/alpha-step3.md`, batch-1 scope, reader report/findings, refute-1 report, pre/post snapshots, manifest, proof contracts, source coverage and author notes. Scope has no touched items, page changes, reader findings, refuter findings, or foreign gate obligations. Exactly zero adjudication decisions are owed; the companion JSON therefore contains `decisions: []`. The sole ordered obligation is the level-3 critical-risk review of `ex-ip-01-scope-and-boundary-cases`.

The native status command recomputed successfully: Step 3a remains active, with no in-flight workers at inspection. Recent Git history concerns proof-phase and citation-contract tooling; old author notes about incomplete construction were not treated as current blockers. Before enrichment, recomputing raw item hashes and canonical contract/manifest hashes showed all four item triples equal to both frozen snapshots. There is no reader repair to accept, amend or revert. The only contract change is the new risk review.

## Completed item checkpoint

`ex-ip-01-scope-and-boundary-cases`: independent current-content review found no defect. Read all seven Verification steps, F1–F12, and the actual direct suppliers: `def-ip-forward-map-and-solution-classes`, `def-ip-identifiability-and-stability-modulus`, `thm-ip-kernel-directions-preclude-unrestricted-recovery`, `def-euclidean-inner-product`, `def-linear-map`, `lem-metrics-on-rn`, `def-square-summable-family-on-an-arbitrary-index-set`, `def-hilbert-space`, `lem-square-summable-sequences-form-a-hilbert-space`, `lem-geometric-sequence-null`, and `lem-power-monotone`. Also read the theorem's `def-metric-space` and `lem-metric-nonnegativity` suppliers. Checked definitions, exact result statements, and the relevant authored arguments against the contract quotations and uses.

- Steps 1.1–1.2: dimensions 1 and 2 satisfy the metric supplier's positive-dimension hypothesis. Coordinates are zero-based. Projection is linear and its kernel is exactly the displayed vertical line; the two explicit truths are distance one apart.
- Step 1.3: every finite subsum of the diagonal image's squared coordinates is bounded by the original norm squared. Taking the supremum proves membership in real square-summable space. Coordinate equality proves linearity. This uses neither enumeration of arbitrary supports nor a choice principle.
- Step 1.4: every diagonal coefficient is positive, proving injectivity. The unit-vector images have lengths tending to zero while their preimages have length one. The modulus's right limit at zero contradicts the resulting inequality. The coefficient at index zero equals one and causes no endpoint problem. The item does not assert surjectivity or an inverse on all of the data space.
- Steps 2.1–2.2: at the single common observation, the two-truth theorem bounds the maximum of the two losses by half the target separation. Its current proof uses the metric triangle inequality, symmetry and one estimator value. Both applications meet the domain and radius hypotheses, including zero noise for projection and radius `2^(-n)` for the diagonal model.
- Step 3.1: the restricted projection maps `U0` bijectively onto the stated one-coordinate data space. Its explicitly defined inverse preserves `d1`; the identity modulus meets nonnegativity, monotonicity, zero value and right-limit conditions.

The Hilbert supplier uses Cauchy-sequence completeness. Its local completeness proof constructs unique coordinate limits, bounds finite subsums and proves norm convergence, without selecting arbitrary representatives. All truth classes contain zero; empty finite subsums give zero. There is no extra AC use, iff direction, compactness assumption or statistical conclusion. The supplier diagram has arrows `U → Y → Q` and `U → Q` and correctly expresses exactness as equality of the two composites. The example needs no additional diagram. Statements remain uninterrupted; links occupy reference sections; proof paragraphs and final tags are already correct.

Both page carriers were inspected as context: YAML only, unchanged inventories and `page_layout: compact-v1`, with no summary bodies. They owe no decisions.

## Sources and reading limits

Checked [Clason v2](https://arxiv.org/pdf/2001.00617v2), Chapter 3 opening, printed p.15 (physical PDF p.18), on existence, uniqueness and continuous dependence, and Chapter 4 opening through Definition 4.1, printed p.30 (physical PDF p.33), on bounded deterministic noise and regularization. These support context; neither the compact SVD nor pseudoinverse theory is needed by this local example.

Checked [van Leeuwen–Brune Lecture 1](https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html), complete §1.2 and §1.3.2, for the forward equation, bounded additive noise and finite matrix conditioning. Its Lipschitz presentation is not substituted for the item's explicitly defined general uniform modulus.

Checked [Daras et al. v1](https://arxiv.org/pdf/2410.00083v1), complete §1.2, physical PDF p.4 (zero-based page index 3), solely for recovery-target context. The coverage notes' “PDF p.3” is an indexing ambiguity; the item itself cites the correct section and needs no edit. No survey claim about universal impossibility, MAP/MMSE coincidence or perception is imported. These readings do not constitute full-book audits or checks of every deeper foundational supplier.

## Changes, checks and disposition

Added the specific complete `risk_review` to the example's owning contract and maintained the owned-consumer frontier ledger entry. No item/page/manifest/provenance change, mathematical repair, defect-ledger row, published finding, outside-consumer repair, withdrawal or escalation was needed. Stable IDs and existing proposed dispositions remain intact. No judge record was changed.

Initial `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-1.proof-contracts.json` succeeded: theorem MODERATE 4, example CRITICAL 12, zero errors. Final `risk-report.mjs` on the same contract with `--require-reviewed` passed with zero errors (2 items routed). Final `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-1.proof-contracts.json --strict` passed: zero errors, zero warnings, 2/2 items checked. Both commands exited 0. No item changed, so item reflow, precheck and proof-layout are inapplicable to this dispatch. No gate battery, stamping, certification or judge cycle was initiated. Next action belongs to the engine: collect the empty decision inventory and completed risk review, then run its native checks.
