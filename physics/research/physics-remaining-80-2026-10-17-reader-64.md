# Step 3a reader report — batch 64

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Assigned pages: `tgr-et03` and `tgr-et03-examples`

## Opened inventory

Assigned pages opened:

- `library/thermodynamics-and-general-relativity-mathematics/tgr-et03.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-et03-examples.md`

All six assigned items opened and reviewed in dependency order:

- `items/lem-tgr-countable-l2-completeness.md`
- `items/prop-tgr-rotating-mode-gibbs-obstruction.md`
- `items/thm-tgr-finite-cell-gibbs-factorization.md`
- `items/thm-tgr-kms-orbit-time-rescaling.md`
- `items/thm-tgr-finite-response-redshift.md`
- `items/ex-tgr-proper-clock-qubit-response.md`

Page-dependency context opened:

- `library/quantum-statistical-mechanics/qsm-dt-response.md`
- `library/quantum-statistical-mechanics/qsm-kms-equilibrium.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-et02.md`

The batch manifest, notes, proof contracts, cross-batch dependency rows, dependency-input record, coverage record, and source-reading dossier were inspected. The batch evidence identifies draft suppliers as authoring-ready only; I did not treat that status as independent proof approval.

The opened mathematical supplier items were:

- Published mathematical suppliers: `def-square-summable-family-on-an-arbitrary-index-set`, `thm-complex-plane-is-complete`, `def-hilbert-space`, `thm-cauchy-schwarz-in-an-inner-product-space`, `def-countable-choice`, `cor-zero-total-derivative-on-a-convex-open-set-is-constant`, `cor-mean-value-theorem`, and `thm-componentwise-convergence-and-completeness`.
- Current-run Gibbs/KMS, finite-matrix, and response suppliers: `lem-qsm-matrix-state-calculus`, `lem-qsm-finite-gibbs-kms`, `def-qsm-kms-state`, `thm-qsm-dt-finite-unitary`, `thm-qsm-dt-finite-kubo`, `thm-qsm-dt-spectral-fdt`, `lem-qsm-matrix-exponential-response`, `lem-qsm-dt-finite-matrix-trace-ideal`, `lem-qsm-dt-banach-volterra-dyson`, and `lem-qsm-dt-lorentzian-distribution-limits`.
- Current-run TGR/geometry suppliers: `def-tgr-charged-liouville-data`, `lem-tgr-charged-liouville-preserves-mass-shell`, `lem-tgr-gauge-killing-energy`, `lem-tgr-killing-thermal-normalization`, `lem-tgr-mass-shell-polynomial-rigidity`, `def-tgr-stationary-thermal-carriers`, `thm-tgr-electrochemical-stationarity`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `def-gr-smooth-lorentzian-objects`, `def-gr-killing-field`, and `thm-gr-killing-and-on-shell-matter-identities`.

For `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` and `def-gr-smooth-lorentzian-objects`, I checked the statements/definition clauses used to supply metric compatibility, smooth Lorentzian structure, and the Killing convention. The general KMS definition's separate spin-model application suppliers were not pursued because the assigned KMS theorem uses its explicit general C*-algebra definition, not that application.

## Review and repair

The mathematical arguments were checked against their stated finite-dimensional, smooth-geometry, stationarity, compensation, and regularity hypotheses. The finite-cell factorization uses only the exact forward redshift supplied by `thm-tgr-electrochemical-stationarity`; the KMS result rescales the strip in both directions and limits the geometric interpretation to one constant-lapse orbit; the response result keeps fixed-preparation finite-time response separate from the re-prepared static susceptibility and preserves the zero-frequency spectral atom; the rotating-mode result proves the domain and threshold cases for the single-mode operator directly; and the qubit example's displayed matrix calculations agree with its formulae. Page summaries do not add claims beyond those scopes. No experiment, observation, statistical inference, or empirical precision is claimed by this mathematical batch.

One source-provenance metadata defect was repaired in `items/prop-tgr-rotating-mode-gibbs-obstruction.md`: `provenance.statement` now reads `ai-altered` rather than `literature-derived`. The item lists Naaijkens, Chapter 3 §3.4, and Ruelle, Chapter 1 §7 / Chapter 2 §6. The batch source dossier marks both citations out-of-scope for the one-mode rotating threshold and self-adjoint-domain claim; I independently opened those passages. Naaijkens's cited pages state the KMS strip convention and finite Gibbs/KMS calculation (printed pp. 74, 76–77), while Ruelle's cited KMS pages state the general strip/time-rescaling convention (printed pp. 13–14) and finite local Gibbs context (Chapter 2 §6, p. 24). They do not supply the proposition's one-mode threshold. The proposition's proof derives that threshold and the operator-domain statements locally in steps 1.2–3.1, and its remark accurately limits the references to general Gibbs/KMS context. The statement, proof, dependencies, and proof-contract derivations were unchanged; no `verification.judge` record was present to remove, and the contract required no proof-derivation update.

Post-edit checks on the changed item:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/prop-tgr-rotating-mode-gibbs-obstruction.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/prop-tgr-rotating-mode-gibbs-obstruction.md` — pass, 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/prop-tgr-rotating-mode-gibbs-obstruction.md` — 1 item, 5 steps, 0 defects.

No other item or page was edited.

## Page verdicts

- `tgr-et03` — pass. Its summary accurately states the independent finite-cell construction and its conditional stationarity/global-compensator hypotheses, the orbitwise KMS scaling, the finite neutral response scope, and the single-mode limitation.
- `tgr-et03-examples` — pass. Its summary matches the exact two-level calculation and makes no apparatus, observation, or transport claim.

## Uneditable defects and blockers

No confirmed uneditable defects were found in the assigned pages or the dependency uses needed for the assigned claims. No blocker remains.

## Coverage limitation

I reviewed the exact supplier statements and proofs used by the assigned items and the relevant source passages for the corrected provenance classification. I did not independently reopen every full-text source listed for the other items; their local mathematical proofs were checked against the opened mathematical suppliers, and the batch source dossier was used as source-locator context rather than as proof evidence.
