# Step 3a adjudication — batch 125

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-125`; assigned batch: 125.

## Level 2 completed: prop-tgrx-code-area-entropy

Reviewed the current Definition and all four proposition steps against their exact suppliers. The claim is the two finite sector entropy identities, on finite nonempty orthogonal sums of nonzero finite-dimensional complex inner-product spaces, with strictly positive probability weights, faithful ancillary/reference matrices, possibly singular logical states, natural logarithms and entropy in nats. Normalization and faithfulness follow from the tensor eigenvalues. Zero eigenvalues never enter a logarithm; the entropy product sums are finite. The cross trace is calculated in the reference eigenbasis, so the argument permits noncommuting logical and reference matrices. Common ancillary terms cancel exactly. Singleton, one-dimensional, repeated-eigenvalue and singular-state cases are sound; zero weights, empty sectors and zero-dimensional factors are excluded. Finite basis choices use no infinite Choice. No physics premise or empirical assertion is involved.

Suppliers read: `def-tgrx-sector-code`, the full current `prop-tgrx-finite-modular-balance` (only its faithful-reference identity is consumed), `lem-qsm-matrix-state-calculus`, `def-trace-of-an-endomorphism`, and `thm-natural-logarithm-laws`; tensor and linear-map definitions were also checked. The published spectral lemma's nine declared supplier statements were inspected. The unrelated partial-trace inequality and its transitive proof closure were not re-audited.

Source checks: [Harlow v2](https://arxiv.org/pdf/1607.03901), Appendix A.7.2–A.7.3, printed pp. 52–54, equations (A.10), (A.20), (A.21), with the maximally mixed ancillary representation (A.9); [Watrous author-hosted draft](https://jhwatrous.github.io/TQI.pdf), relevant definitions in §5.2.1 and §5.2.2 Propositions 5.20–5.21, equations (5.94)–(5.99), printed pp. 265–269. The retrieved Harlow version numbers these as A-equations, unlike the reader's numerical locators; the section and mathematical content agree. Watrous uses base-two logarithms and the local proof uses natural logarithms. Neither source is claimed read in full, nor does the cited algebra justify a geometric area interpretation.

CRITICAL risk review completed in the owning contract before proceeding to the level-3 item. No decision is owed on this untouched, unflagged proposition. The two routed published-supplier findings are assessed separately below. Next: finish the example decision, published dispositions and focused checks.

## Level 3 completed: ex-tgrx-two-sector-area

`touched:125:ex-tgrx-two-sector-area`: **accepted_repair**, repair confidence 1, defect `pnf129-r2-b125-sector-terminology`. The reader's two replacements remove an unexplained algebra-center connotation while preserving every equation and hypothesis. Reversing exactly those replacements reproduces the immutable pre-item SHA256 `001909028d5a265f3a9fe867b3fe9d9fbd5d20ab4506b80fe8849afecc5fb479`. Current bytes reproduce post SHA256 `389537edb19b0cbb8523834f4970000394587bd88bb85726ca98faec4d87ffdf`; thus the historical edit is known without guessing a missing preimage. The contract's derivation and finite-check terminology match.

The three verification steps give s(chi_1)=0, s(chi_2)=log d, and substitution in the already reviewed proposition. Ancilla faithfulness follows from d>=1. Checked d=1, repeated eigenvalues, singular logical matrices and positive weights. HIGH risk review completed. Search of all item/page uses found only its own carrier and `tgrx-finite-code-holography-examples`; that frontmatter-only page places it correctly and makes no further assertion. No downstream item needs repair. Both assigned pages and all assigned items have no TikZ/tikzcd; the finite scalar identities need no additional diagram. No unassigned carrier was edited.

## Published dependency findings

Subject: `lem-qsm-matrix-state-calculus`; direct consumer: `prop-tgrx-code-area-entropy` F2/1.1, subsequently used in 2.1–2.2. Current raw source SHA256: `65c959d05008276fa25a9309ffa9a453a7e93884f8c2c67e2162d2f0a9a6270d`. The routed canonical observed fingerprint `076aaa8943ead6d7efed28a4eb9a1480244cbd391f2583e0da9bb68ef14846dc` and pre fingerprint `a9f73f89eac01900aa4c92692b3a9b351324f9434893388a150a06f2b871a02b` are preserved in scope; these are distinct from raw-byte hashes. No change or historical correction to that supplier is asserted.

`reader:125:1`: **confirmed_nonfatal**, defect `pnf129-r2-b125-spectral-publication`, disposition `nonfatal-recorded`. The required published audit/verified marker is absent and a judge pass alone is insufficient under SCHEMA.md. This confirms the metadata issue while disagreeing with its fatal effect on the mathematical deduction: the used spectral proof is independently recoverable and sound. No publication approval is supplied. The published-maintenance ledger remains OPEN for an actual authorized audit and genuine evidence.

`reader:125:2`: **confirmed_nonfatal**, defect `pnf129-r2-b125-rayleigh-calculation`, disposition `nonfatal-recorded`. The proof omits a calculus supplier or its elementary quadratic calculation. For real t, unit maximizing u and w perpendicular to u, direct expansion gives

$$q((u+tw)/\|u+tw\|)-q(u)=\frac{2t\operatorname{Re}\langle Mw,u\rangle+t^2(q(w)-q(u)\|w\|^2)}{1+t^2\|w\|^2}.$$

If the linear coefficient were nonzero, t of its sign and sufficiently small magnitude makes the numerator positive, contradicting maximality. Substituting iw forces the imaginary part to vanish. Hermiticity then makes u an eigenvector and its orthogonal complement invariant; finite-dimensional induction supplies the eigenbasis, including dimension one and the zero-dimensional complement. This is an immediately closed omission, not a substantial missing theorem. Its published bytes remain unchanged; the owner should replace the differential sentence with this expansion or add exact calculus suppliers.

Full current spectral proof reviewed: step 1.1 constructs dense normalized rational vectors and least qualifying indices, avoiding countable choice; the real supremum and bounded-sequence subsequence suppliers apply in R^(2D). Continuity gives a unit maximum. Step 3.1 uses intrinsic eigenspaces, finite trace cyclicity and the empty positive-support convention. Step 4.1 minimizes a nonnegative quadratic including its b=0 branch. Step 5.1 checks both rank-one/extreme directions using positive square roots and an opposite transfer between two positive eigenvalues. Only the spectral/eigenbasis portion is consumed here. Read all nine declared supplier statements; their transitive proofs were not independently re-audited. Neither metadata maintenance nor the calculus omission refutes that portion.

Published records are serialized under `research/.published-consumer-ledger.lock`; the classification index has one deduplicated supplier entry. Closed adjudication dispositions do not close the separate OPEN published maintenance. No mathematical supplier or published item was edited. Stable IDs and inventories are preserved; no withdrawal or substantial unmet prerequisite is proposed.

## Checks and handoff

Initial risk-report: proposition CRITICAL (8), example HIGH (5), definition MODERATE (4), zero errors. Both required reviews now contain independent current-proof, boundary, source and supplier evidence. Final focused check results will be recorded below. Decisions are exactly the touched obligation and two reader findings; no page or refuter decision is owed. No judge, stamp, agent dispatch, engine transition or gate battery was initiated.

Final focused checks (all exit 0):

- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-125.proof-contracts.json --strict`: 3/3 items checked, zero errors and warnings.
- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-125.proof-contracts.json --require-reviewed`: zero errors; CRITICAL/HIGH reviews complete.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-tgrx-sector-code.md items/prop-tgrx-code-area-entropy.md items/ex-tgrx-two-sector-area.md`: two proof-bearing items checked, zero failing; definition has no proof to check.
- `node tools/physics-support/rendercheck.mjs` on the three exact assigned item paths and two exact assigned page paths: all five parse/render checks passed.
- Final `node tools/physics-support/proof-layout.mjs items/ex-tgrx-two-sector-area.md`: one item, three steps, zero defects. No item edit or formatter followed this check.

Handoff: all three routed decisions and both required risk reviews are complete. The sole accepted reader repair has confidence 1 and a fixed defect row; the two supplier findings each reference exactly one nonfatal-recorded row and remain OPEN in published maintenance. No further carrier repair, consumer escalation, substantial prerequisite blocker, or historical-byte blocker remains in this batch. Engine hashing and the gate battery remain engine-owned; this report is not a judgment or certification.
