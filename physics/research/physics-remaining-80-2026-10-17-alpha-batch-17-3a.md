# Batch 17 Step 3a adjudication

Run: `physics-remaining-80-2026-10-17`; group: `batch-17`.

## Definition finding and consumer review

`refuter:17:1`: confirmed nonfatal. The original definition did not explicitly specify the global continuous selection for its C3 metric; the smooth-only GR definition does not cover all permitted H. Defined the future cone by v⁰>0 among timelike vectors and gave the C3 bundle trivialization to the fixed positive Lorentz cone. Future causal vectors and the C3 selecting field are explicit. Positivity of H suffices; empty D gives vacuous fiber conditions. The correction preserves every metric, domain, regularity and sign convention, with no choice axiom or new supplier.

Direct item/reference consumers checked: `lem-emg-conformastatic-chart-is-lorentzian` uses N_H as the future unit normal; `lem-emg-conformastatic-curvature` uses only coefficients and derivatives; `thm-emg-smooth-counterpoised-dust` uses the same future normal with smooth H; outside batch `def-emg-xs-harmonic-mp` selects the identical normal for smooth harmonic H and `cex-emg-xs-nonharmonic-vacuum` uses the unchanged metric/frame. The A-page summary remains accurate. No consumer needs repair; hence no further interface propagation or outside repair escalation.

Sources inspected at this point: the exact local chart/frame items, `def-time-orientation-and-future-causal-sets` (pointwise components), and `def-gr-smooth-lorentzian-objects`, Definition (a)–(c) (smooth metric/field restriction). The explicit correction is proved by the displayed coordinate map, without importing a smooth-only assertion.

Checkpoint at definition completion; the subsequent sections record the completed risk reviews, four decisions, ledger dispositions and focused checks.

## Curvature risk review

Completed all eight steps: the Christoffel trace is 2H_i/H; the spatial quadratic contraction is (6H_iH_j−2δ_ij q)/H² including the time product. Ricci and scalar traces and frame rescalings agree. C3 suffices, H>0 prevents all denominator failures, constant and harmonic cases agree with the claim, and the empty domain is vacuous. Exact calculus statements were inspected; the claim defines its curvature sign explicitly. Contract risk review recorded before proceeding.

## Coupled-family risk review

Checked all ten steps against the formal-system definition, smooth Levi-Civita and exterior-derivative statements, positive-root definition, dust-projection proof and energy-condition proof. Maxwell divergence and the positive-root normalization agree for either sign. Continuity and force balance are undivided at zero density; exchange there follows explicitly by the product rule. Stress components reproduce the Einstein table. The stated countable choice is retained and no empirical premise, general evolution result or stability conclusion is inferred. Contract risk review complete.

## Sphere risk review and published findings

Checked all eight steps and all thirty direct dependency statements. The Cartesian smooth profile avoids any assumption that r is differentiable at the origin. Its Laplacian is −3ab²/Psi⁵. The volume factor is H³ and the polar integral is 1/(3b²), justified on open intervals by the C1 diffeomorphism b tan(theta), with null endpoints and compact-interval Newton–Leibniz. Finite positive mass gives absolute integrability of either signed charge. The dilute integral comparisons use z>0, check z=0 directly, and cover delta=1. No stronger choice, ADM interpretation or empirical precision is used. Contract risk review complete.

`reader:17:1`: confirmed nonfatal, nonfatal-recorded. The published QM page says all its items are drafts although both page and its sphere-area supplier are published. The exact supplier's Statement (b) gives the required area 4pi under countable choice. The false status sentence has no role in the polar calculation. Leave page read-only and refer removal of its stale draft sentence to the owner.

`reader:17:2`: confirmed nonfatal, nonfatal-recorded. The published trigonometric Statement has free m, but its Facts explicitly begin “Given: An integer m” and proof 2.1 ranges over every integer m. The intended quantifier is recoverable without a new theorem; at m=0 this supplies the signs/monotonicity used in sphere proof 4.1. The published owner should add the missing quantifier to the Statement. No current consumer repair is necessary and the supplier is unchanged.

## B05 repair and risk review

`touched:17:ex-emgmath-ml-b05`: accepted_repair, confidence 1. The reader defined n=H partial_0, e_i=H^{-1} partial_i and E_i=cF(e_i,n) before E_i(0). Removing precisely that added sentence from current bytes reproduces the immutable pre-reader raw hash `bfcfaa15a591680cbe4e9250f32a399ce0fc5049036c42fd162a48080a12d7d4`; current raw hash equals post-reader `43a927c7381efbc705a17ee1e7369ba505638bbc387a11644f0971ca80fd117b`. This is exact recovered-byte comparison, not inference from a hash alone. All four steps were independently checked: central H=2, gradient zero, Laplacian −3/b² give the stated density, curvature and zero electric field. Finite proper integrals and full R3 support follow from the reviewed corollary. The existing derivation for step 2.1 already computes the same electric contraction; no mathematical contract derivation changes. The manifest Example text will be synchronized. No item/reference consumer uses this example as a supplier. Contract risk review complete.

## B06 risk review

Checked all four steps and seven direct supplier statements. The fractions 3/100, 1/100 and 3/10 follow for the full stated delta interval. Density is strictly positive, so both normalized density and force per mass are defined. The supplied static curve has all-real proper-time domain, future timelike velocity and norm −c². At r>0 the acceleration and force vectors are nonzero (individual Cartesian components may vanish); at the origin both vectors vanish and the curve is geodesic. This matches the claim. Neither completeness of arbitrary geodesics nor empirical error/stability is inferred. Contract risk review complete; no routed decision is owed for this untouched item.

## Outside consumer metadata alert

The direct consumer review found no mathematical change needed outside batch 17. However, batch 23 contract `research/physics-remaining-80-2026-10-17-batch-23.proof-contracts.json`, `cex-emg-xs-nonharmonic-vacuum` citation F1, quotes the complete old chart Definition. Its quote must be refreshed by the batch-23 owner to the current Definition after independently confirming the unchanged coefficient/normal convention. This file is outside this dispatch and was left unchanged. The actual counterexample proof was read and remains valid: H=1+lambda|x|² has Delta H=6lambda and its electrovac residual remains nonzero. This is an owner metadata follow-up, not an unmet mathematical prerequisite or permission to alter that consumer. No outside source repair is required.

## Source passages and review limits

Retrieved and read the relevant source passages: [Carroll](https://arxiv.org/pdf/gr-qc/9712019v1), equations (3.66)–(3.67) and (3.90), (3.92), (3.95); [Tong](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf), section 3.2.2 equation (3.14), section 3.4 equation (3.39), and section 3.4.1 Ricci/scalar/Einstein definitions; [Meinel and Hütten](https://arxiv.org/pdf/1105.3807), section 2 equations (1)–(7) and the c=G=1 units footnote. The first two agree with the stated local curvature convention. The paper supplies ansatz context with different units; all SI coefficients, arbitrary-H curvature and proper integrals are checked locally. No black-hole limit or measurement is imported. Initial screenshot/cache requests partly failed, and shell extraction lacked pdftotext (Tong's direct shell URL returned 403); the successful web text retrieval supplied the exact passages used. No complete-book reading or new source-fetch stamp is claimed.

The assigned carriers, exact direct dependency Statements/Definitions and the relevant draft supplier proofs were inspected. This is a bounded adjudication, not a new audit of the entire transitive mathematical library. Published statuses and existing proof markers were not altered. No judge record was created or removed; no material proof rewrite was made.

## Records and local checks

Four decisions are written in `research/physics-remaining-80-2026-10-17-alpha-batch-17-3a-decisions.json`, one per owed obligation. Four closed defect rows, all caught at `3a-adjudicate`, were appended with confidence 1:

- `physics-remaining-80-2026-10-17-batch-17-chart-time-orientation`: fixed.
- `physics-remaining-80-2026-10-17-batch-17-qm-draft-wording`: nonfatal-recorded.
- `physics-remaining-80-2026-10-17-batch-17-trig-quantifier`: nonfatal-recorded.
- `physics-remaining-80-2026-10-17-batch-17-electric-component-definition`: fixed (reader repair accepted).

The published ledger and deduplicated index were merged under this dispatch's exclusively created `research/.published-consumer-ledger.lock`; only that owned lock was released. Both published maintenance issues remain OPEN for their owner; closed local dispositions do not repair them. Batch-17 cross-batch rows were updated with exact current uses, the frontier ledger was refreshed, and the task ledger records the batch-23 quotation alert. The batch manifest now transcribes both the corrected chart Definition and the accepted B05 Example. Three local contract chart quotations were refreshed; all five required risk reviews are complete.

Executed focused checks (all successful):

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-emg-conformastatic-chart-data.md items/ex-emgmath-ml-b05.md`: one applicable proof checked, zero failures; definition has no proof obligation.
- `node tools/physics-support/rendercheck.mjs items/def-emg-conformastatic-chart-data.md items/ex-emgmath-ml-b05.md`: two files pass YAML/math checks.
- `node tools/physics-support/proof-contract.mjs research/physics-remaining-80-2026-10-17-batch-17.proof-contracts.json --strict`: six of six, zero errors/warnings.
- Required final batched layout check, after item edits: `node tools/physics-support/proof-layout.mjs items/def-emg-conformastatic-chart-data.md items/ex-emgmath-ml-b05.md`: two items, four steps, zero defects.
- Required risk report ran before review and again with `--require-reviewed`: six routed items, five CRITICAL completed reviews, zero errors.
- Frontier refresh succeeded; native defect-ledger append accepted all four rows and refreshed its generated view.

Tool discovery notes: an attempted plural `proof-contracts.mjs --help` did not exist; the correct singular tool was then located and passed as above. `content-policy.mjs --help` interpreted the flag as an input filename and failed without checking any item; this is not a content-policy pass and no defect row was created for that mechanical failure. No gate battery, stamp, certification or judge cycle was initiated.

No substantial mathematical prerequisite remains unresolved in batch 17. The outside batch-23 contract quotation refresh is explicitly pending owner action before global closure; published maintenance remains read-only and recorded.
