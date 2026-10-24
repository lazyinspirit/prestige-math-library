# Batch 11 Step 3a adjudication

Run: advanced-qft-supersymmetry-build-2026-10-23. Group: batch-11. Scope file retains its original group p. Exactly two touched obligations; no reader/refuter findings or page obligations.

## Level 0 completed: def-finite-dimensional-q-exact-localization-data

Verdict: accepted_repair, repair_confidence: 1. 416cab8561be0dc2695333f7692c0afec27c0dbd:physics/items/def-finite-dimensional-q-exact-localization-data.md has SHA256 d81f97ff386975d6b89acc0a0cc61a4d9034a7c0b5e4be00a92d3dadfb5b64e5, exactly the pre-reader snapshot. Current bytes initially matched the post-reader hash 2dcc76c6b0f8c1b5de52ee05fe854a0cc4c31679afa2aa86fc6dda819a38c75f. The exact diff replaces an unsupported general boundary formula with a stipulated integration-by-parts identity, integrability of its terms, and independently established finite flux. This retains the useful generality without claiming a general divergence theorem. The definition is well-formed, including top-degree integration, parity and the common exceptional null set. Risk review completed before advancing.

Sources independently inspected: [Schwarz–Zaboronsky](https://arxiv.org/pdf/hep-th/9511112), section 2, PDF pp. 3–4, identifies functions on the odd tangent bundle with forms and gives the compact-volume divergence identity; section 3 begins with compact hypotheses. The existing page-3 source label is imprecise: the divergence paragraph is on PDF page 4; the source URL and section are correct. This locator detail is nonfatal polish and does not expand the source scope. [Pestun–Zabzine](https://arxiv.org/pdf/1608.02953), section 1, equations (1.3)–(1.6), treats compact finite-dimensional deformation before a separate saddle-limit argument and subsequently qualifies continuum extensions. Neither supplies arbitrary noncompact boundary data. These source statements support conventions, while the new identity is an explicit hypothesis.

Consumer check: theorem Facts F1 and steps 1.2/3.1 use integrated Q-invariance directly; the torus example Verification 1.1 proves it by periodic integration. Outside batch 48, def-qftx-supersymmetry-fluctuation-complex, final Definition paragraph, explicitly adopts finite regulator integration with zero boundary flux. Its interface is sound under the clarification; pthm-qftx-qexact-localization-ward-identity independently assumes all finite-regulator conditions and applies the mathematical theorem in steps 1.2/2.1. No consumer Statement/Definition needs repair, so propagation stops. These outside reads assess this supplier change only and do not certify the physical theory.

Synchronized the owning manifest Definition mirror and both consumer-contract Definition quotations. Original reader/refuter artifacts and snapshots remain untouched. Confirmed historical definition gap is recorded by the closed boundary-identity ledger row. No published defect identified.

## Level 1 completed: thm-finite-dimensional-q-exact-deformation-invariance

Verdict: amended_repair, repair_confidence: 1. The theorem item itself was identical in pre/post snapshots (34ff1cefdd297353879639ff08c220c6d9f17dc8cc46382f2b271897a395fb89); its touched obligation came from the reader’s refreshed F1 contract. Retained that refresh and corrected the existing nonfatal typing defect in step 1.1: `(partial_t f_t) mu = -[O(QV)E_t]_[n]`. Both sides now are n-forms; integrating gives exactly the scalar derivative used in step 2.1. This is a proof-only correction; Statement and all consumer interfaces are unchanged. Updated the matching contract derivation. No judge record exists to invalidate.

Every proof step was checked: even exponential differentiation, the smooth derivation chain rule and odd Leibniz sign; the annihilating Q-square hypothesis; compact-neighborhood dominated differentiation with a common null set; the explicit integrated Q-identity; and continuity/constancy of the real and imaginary components. The stronger condition Q-squared V=0 is not silently assumed. The exponential is invertible, and no convergence of an exterior-degree infinite series is needed. Empty M, n=0, QV=0, and arbitrary finite t in open J give no counterexample. The proof needs no arbitrary-index choice. The theorem supplies neither a saddle limit nor a continuum identity.

Opened all direct suppliers: items/thm-differentiation-under-the-integral-sign.md (including its phase-rotation complex MVT/DCT proof), items/def-derivative.md (difference-quotient definition), and items/cor-zero-derivative-implies-constant.md (interval restriction and real mean-value argument). Their local bytes were checked against research/math-imports.json; no import was edited. This is a check of the exact used premises, not a full transitive import audit.

Independently read [Folland, Theorem 2.27(b)](https://djvu.online/file/NPF4BEtSuqdFA), printed p.56, statement, difference-quotient/DCT proof and following compact-subinterval paragraph. The local supplier states the needed almost-everywhere measurable complex version explicitly. Read [Lebl, Proposition 4.2.6](https://www.jirka.org/ra/html/sec_mvt.html), statement and mean-value proof, lines 725–738. Applying the real result separately to the two components matches the written argument. Risk review completed before advancing to the example.

## Level 2 completed: ex-finite-q-exact-deformation-on-the-four-torus

No routed decision is owed: item and original contract were untouched, with no finding. Completed the HIGH risk review after its suppliers. Angular coordinates are interpreted modulo 2 pi; their differentials and displayed periodic functions descend to the torus. Verification 1.1 integrates only the degree-three part of F after applying d, and periodic opposite faces cancel. Step 2.1 verifies all closures and the compact-parameter majorant. Steps 3.1–4.1 have the correct wedge sign: H_t squared vanishes, the top density is negative (1+t cos x3) times omega, and the cosine integral vanishes. The value is exactly -(2 pi)^4, including t=0 and t=1. Pointwise variation is distinct from the integrated constant. No source edit or extra dependency is needed.

## Scope, presentation and records

Both assigned pages were inspected as context: empty bodies, compact-v1 preserved, definition/theorem order and companion inventory correct. No page decision is owed. All assigned public sections are uninterrupted by links; their reference placement is retained. No TikZ/tikzcd diagrams occur, and none is needed for these algebraic and integral arguments. There are no experimental observations, statistical inferences, imported-source edits, published defects, proposed withdrawals, outside consumer repairs or unresolved prerequisites.

The owned cross-batch input remains []: all owned logical edges are internal or imported mathematical context. The outside batch-48 consumer review is recorded above; it grants no outside write authority. The frontier dependency brief is updated with this disposition. Exactly two closed defect rows are referenced by the two decisions, both owned at 3a-adjudicate with confidence 1. Engine-owned hash stamping, gates and later workflow stages were not run.

## Final local checks

All required focused checks passed on final content:

- `node tools/tsx-run.mjs tools/physics-support/reflow.mts items/thm-finite-dimensional-q-exact-deformation-invariance.md`: unchanged.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` on the three assigned items: 2 proof-bearing items checked, 0 failures; definition has no proof section.
- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-11.proof-contracts.json --strict`: 3/3 checked, 0 errors, 0 warnings.
- `node tools/physics-support/rendercheck.mjs` on all three items and both pages: 5 files, clean YAML, math and links.
- `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-11.proof-contracts.json`: definition CRITICAL 8, theorem CRITICAL 10, example HIGH 5. All three specific risk reviews recorded in dependency order. Rerun with `--require-reviewed`: 0 errors, 3 routed items.
- Final single batched `node tools/physics-support/proof-layout.mjs items/def-finite-dimensional-q-exact-localization-data.md items/thm-finite-dimensional-q-exact-deformation-invariance.md`: 2 items, 5 steps, 0 defects. No later item edit occurred.
- Local JSON assertions: exactly the two scope-owed decisions, correct group, matching current Definition manifest and both contract quotations, and exactly one closed owned defect row for each decision. All three imported direct supplier hashes match the immutable receipt.
- Scoped `git diff --check`: exit 0. Canonical defect view regenerated after appends.

Exploratory command probes encountered the Node .mts loader limitation and an unavailable reflow filename; the actual reflow/precheck commands above used tools/tsx-run.mjs and passed. These were mechanical invocation issues, not content defects. No whole-run gate battery, judge cycle, decision-hash stamping, acceptance stamp, publication or commit was attempted.

Final source SHA256 values: definition `2dcc76c6b0f8c1b5de52ee05fe854a0cc4c31679afa2aa86fc6dda819a38c75f`; theorem `40ee24402fca3226c931aec1a5ba35832d99e85bcc8a021d0fc755afce3dea65`; example `59e523bdcbf54d5b533164adfe3502f7a59944bfb51ceb9de002edbf71c54417`. These are observations for handoff, not engine decision stamps.

No local blocker remains. The engine owns current hash stamping and the ordinary post-dispatch gate battery. The broader transitive mathematics and physical consumer proofs are not claimed audited by this bounded review.
