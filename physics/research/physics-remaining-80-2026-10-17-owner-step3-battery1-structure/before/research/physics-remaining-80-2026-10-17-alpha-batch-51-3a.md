# Batch 51 Step 3a adjudication

Run: physics-remaining-80-2026-10-17. Role: alpha; group: batch-51.

## Counterexample review completed

`touched:51:cex-tgr-entropy-type-identification`: amended_repair, repair_confidence 1. Pre/post snapshot item fingerprints are `5e6e68d8990e2f73692a85d843ffc25922cfb7ac9bda882a961d6f65a9ea7c28` and `83c842dd19e67c84ab7bc3186729c8fd7f027a46abede0e7c99e895a1225fffd`. The reader corrected the title and remark but retained “geometric datum” in the Statement and “geometry-energy data” in step 2.1. Completed that wording repair and removed the redundant second introduction of a. The mathematical claim and witnesses remain unchanged: for every fixed a>0 and k_B>0, H=0 and diag(1,0), diag(1/2,1/2) give equal energies 0 but spectral entropies 0 and k_B log 2>0. Positivity, trace, zero eigenvalue convention, multiplicity and natural logarithm are explicit. No geometry, physical units, coupling, observations or continuum assertion is supplied. No choice is used; k_B=0 is correctly excluded. No item dependencies or external proof premises exist. Manifest title/Statement and contract step 2.1 synchronized; no judge stamp was present.

Initial risk report: all three owned items ORDINARY; no HIGH/CRITICAL review is owed. Consumer search across items, library and current-run manifests finds only the owned examples page, whose routed findings are next. No outside consumer or published supplier is affected. Final local validation results are recorded below.

## Page findings completed

`reader:51:1` and `refuter:51:1`, both for `tgr-mi02-examples`: confirmed_nonfatal, repair_confidence 1. These are two reports of one page-prose defect, with one shared closed ledger row. The summary now says the matrices have the same fixed positive real scalar label and zero energy. The refuter's fatal severity is not adopted: unsupported geometric wording overstates the supplied data, but does not invalidate the explicitly qualified matrix witness or the first-law example. Original reader/refuter evidence is preserved. No additional page obligation is invented; scope pages_touched was empty.

The companion example uses X=(0,infinity), E=A=r, kappa=C=1, b=1,2 and offset 0, so its differential products both equal dr. Its cited lemma assumes nonempty connected smooth X, smooth real E,A,kappa, C>0, kappa>0 and dE=C kappa dA; differentiating (C/b)A+s_* proves the claimed family. Nonemptiness and positive kappa establish distinct T functions, even when dA=0 or X is a point. These current dependencies and both page summaries were independently read. No extra item decision is owed for the untouched lemma/example. No physical model or empirical premise is inferred from this mathematics.

## Sources and consumer review

The counterexample has no cited external source or item prerequisite: its proof is the local diagonal-matrix calculation. The lemma/example references are contextual, not proof premises. Read relevant stored source passages in `research/physics-remaining-80-2026-10-17-owner-gate52-tgr-coverage51-69-72/sources/wald.txt` (section 2, equations (5)-(9) and the comparison paragraph) and `sources/genolini.txt` (sections 1.3 and 2.1, equation (21) and adjoining first-law/temperature comparison). Wald retains angular-momentum and possible matter-field terms and distinguishes the classical analogy from physical temperature. Genolini leaves eta unspecified at equation (21) before the additional temperature calculation. The local lemma assumes its exact one-form identity and does not derive these physical restrictions or normalization. No external retrieval or whole-source reading is claimed here.

Searching items, library pages and this run's manifests for the counterexample ID finds only its owning manifest and examples page. There is no direct dependency consumer. The only prose reference consumer is repaired here; no further hop or outside-owner resolution is needed. The cross-batch dependency inventory is empty. Stable IDs and placements are preserved; no withdrawals. No defective published item was encountered, so no published ledger edit or lock was needed.

## Local checks and disposition

All checks below completed successfully after final edits:

- Reflow: `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/cex-tgr-entropy-type-identification.md` — unchanged.
- Precheck: `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/cex-tgr-entropy-type-identification.md` — 1 checked, 0 failing.
- Render: `node tools/physics-support/rendercheck.mjs items/cex-tgr-entropy-type-identification.md library/thermodynamics-and-general-relativity-mathematics/tgr-mi02-examples.md` — 2 files OK.
- Contract: `node tools/physics-support/proof-contract.mjs research/physics-remaining-80-2026-10-17-batch-51.proof-contracts.json --strict` — 3/3 checked, 0 errors, 0 warnings.
- Risk: `node tools/physics-support/risk-report.mjs research/physics-remaining-80-2026-10-17-batch-51.proof-contracts.json`, then the same command with `--require-reviewed` — both pass; all three ORDINARY, no HIGH/CRITICAL item.
- Final layout: `node tools/physics-support/proof-layout.mjs items/cex-tgr-entropy-type-identification.md` — 1 item, 2 steps, 0 defects.

Closed defect rows: `physics-remaining-80-2026-10-17-3a-batch-51-scalar-label` and `physics-remaining-80-2026-10-17-3a-batch-51-page-scalar-label`. Exactly three decisions are supplied. No mathematical blocker or owner escalation remains. These are local review/check results; the engine owns decision hashes and the gate battery. No judgment, stamping, publication, or certification was performed.

Historical comparison check: reversing the exact adjudicator wording edits in memory reproduces the reader-post raw SHA-256 `83c842dd19e67c84ab7bc3186729c8fd7f027a46abede0e7c99e895a1225fffd`. Reversing the reader title/setup/remark changes as recorded in its report then reproduces the pre raw SHA-256 `5e6e68d8990e2f73692a85d843ffc25922cfb7ac9bda882a961d6f65a9ea7c28`. Both match their immutable snapshots. No missing-preimage historical disposition is needed. An explicit obligation-set check found exactly the three owed entries. Defect-ledger append succeeded for both rows and refreshed its generated view.
