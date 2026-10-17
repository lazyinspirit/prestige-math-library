# Step 3a reader report — batch 67

Run: `physics-remaining-80-2026-10-17`  
Scope: `tgr-pet02` and `tgr-pet02-examples`

## Opened inventory

Assigned pages opened in full: `tgr-pet02`, `tgr-pet02-examples`. I also opened prerequisite page `tgr-pet01` for context; I do not give it an independent page verdict.

Assigned items opened in supplier order: `post-tgr-selected-gibbs-kms-preparation`, `pthm-tgr-local-kms-clock-temperature`, `pthm-tgr-finite-stationary-response`, and `ex-tgr-independent-redshifted-cells`.

Claim-relevant suppliers opened: `post-tgr-stationary-equilibrium`, `def-tgr-framework-units`, `def-tgr-stationary-thermal-carriers`, `def-tgr-charged-liouville-data`, `def-qsm-kms-state`, `def-countable-choice`, `def-gr-smooth-lorentzian-objects`, `def-gr-killing-field`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `thm-gr-killing-and-on-shell-matter-identities`, `lem-tgr-charged-liouville-preserves-mass-shell`, `lem-tgr-gauge-killing-energy`, `lem-tgr-killing-thermal-normalization`, `lem-tgr-mass-shell-polynomial-rigidity`, `cor-zero-total-derivative-on-a-convex-open-set-is-constant`, `cor-zero-derivative-implies-constant`, `cor-mean-value-theorem`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `lem-tgr-killing-energy-normalization`, `thm-tgr-electrochemical-stationarity`, `thm-tgr-finite-cell-gibbs-factorization`, `thm-tgr-kms-orbit-time-rescaling`, `lem-qsm-matrix-state-calculus`, `lem-qsm-finite-gibbs-kms`, `thm-qsm-dt-finite-unitary`, `lem-qsm-dt-finite-matrix-trace-ideal`, `lem-qsm-dt-banach-volterra-dyson`, `lem-cm-integral-and-ftc-for-continuous-normed-space-curves`, `thm-qsm-dt-finite-kubo`, `lem-qsm-matrix-exponential-response`, `lem-qsm-dt-lorentzian-distribution-limits`, `thm-dominated-convergence`, `thm-qsm-dt-spectral-fdt`, and `thm-tgr-finite-response-redshift`.

I opened the assigned batch manifest, relevant records in `research/physics-remaining-80-2026-10-17-batch-67.proof-contracts.json`, the batch notes, and the relevant source-reading and coverage entries. They informed navigation and source checks but were not treated as verdicts.

## Mathematical and physical review

- `post-tgr-selected-gibbs-kms-preparation` adopts the specified finite-cell state without claiming an observed preparation, thermalization, an infinite-volume state, or a generic curved-spacetime trace. Its global temperature and electrochemical relations, positive finite partition functions, product density, grand-generator KMS property, and neutral-sector restriction follow from the inspected exact supplier hypotheses.
- `pthm-tgr-local-kms-clock-temperature` correctly restricts the finite product KMS strip functions to the invariant cell algebra. The geometric curve has an explicit interval, smoothness, future-timelike condition and Killing-field parameter; the metric gives `dτ = N_i dt_K` on that orbit. Direct composition of the strip function, `F_loc(z)=F_K(z/N_i)`, gives the claimed inverse-temperature factor `β_loc=N_i β_K`. The proof is orbitwise and does not assume a complete Killing flow or a spatially varying global rescaling.
- `pthm-tgr-finite-stationary-response` retains finite-dimensional, finite-time, neutral-observable hypotheses. Its propagator equations, physical/grand-generator comparison, finite-time commutator response and quadratic remainder, spectral measure pushforward, zero-frequency qualification, and separately re-prepared Kubo–Mori derivative match the inspected supplier proofs. It reports model predictions only; it asserts no measured response or relaxation.
- `ex-tgr-independent-redshifted-cells` verifies the Rindler metric and future direction, uses the smooth positive bath `T(x)=T_K L/x`, and supplies a neutral auxiliary whole-shell stationarity input with `A=Λ_ξ=0`. The cells remain distinct from that kinetic sector. The two finite traces, normalized densities, product state, and proper-time KMS widths are correct. The phrase attributing the compensator condition to the forward stationarity theorem is harmless here: `A=Λ_ξ=0` in A3 directly gives `L_ξA=dΛ_ξ`.

I independently checked the cited KMS passages in Naaijkens, §3.4, printed pp. 74–77 ([PDF](https://arxiv.org/pdf/1311.2717)); Ruelle, Chapter 1 §7, printed p. 13 ([PDF](https://arxiv.org/pdf/math-ph/0107009)); Kubo, §2, printed pp. 573–575 ([scan](https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf)); and MIT OCW 8.512, Lecture 1 §§1.1–1.5 ([PDF](https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf)). Kubo’s commutator ordering matches the local kernel after using the item’s perturbation sign `H−εhB`; the local proof supplies its finite-time norm remainder. The MIT notes independently show the retarded commutator convention and thermal detailed-balance relation.

## Edit and validation

Ruelle’s printed p. 13 states that a KMS state at `β` for `α_t` is at `γβ` for `α_{γt}`. Under the same strip convention, composing strip functions gives `β/γ` for `α_{γt}`; for `α_{τ/N_i}`, the factor is therefore `N_i β_K`. The assigned local theorem proves this directly, but its original source locator incorrectly described Ruelle as supporting the same inverse-temperature/time-rescaling direction. I narrowed the Ruelle locator in all three assigned item carriers that described time rescaling (`post-tgr-selected-gibbs-kms-preparation`, `pthm-tgr-local-kms-clock-temperature`, and `ex-tgr-independent-redshifted-cells`) to the KMS boundary identity and norm bound actually supported there. I updated the postulate’s `physics_review.sources` contract evidence to record the source limitation. No statement, proof, dependency, physical scope, or empirical claim changed. No `verification.judge` record was present on these changed draft items.

Checks after the edits:

- `reflow.mts` on each changed item: all three unchanged.
- `precheck.mts` on each changed item: all three passed (postulate nonproof structure; local theorem and example direct proof strategies).
- One batched `proof-layout.mjs` run on the three changed items: 3 items, 7 steps, 0 defects.

## Records not edited and page verdicts

The author-owned source records `research/physics-remaining-80-2026-10-17-batch-67.coverage.json:73–83,262–272` still say Ruelle supports the time rescaling “in the matching direction.” `research/physics-remaining-80-2026-10-17-batch-67-sources/source-reading.md:9` also attributes a rescaling statement to that source without the reciprocal-factor qualification. These are research evidence files rather than assigned item or A-page prose, so I left them unchanged; their exact discrepancy is recorded here for owner disposition. They are not routable content subjects in the required findings schema. The assigned item carriers’ source locators are corrected.

- `tgr-pet02`: pass. Its summary matches the finite state assignment, orbitwise KMS conclusion, and finite response scope.
- `tgr-pet02-examples`: pass. Its summary matches the two-cell Rindler construction and makes no empirical or interaction claim.

No blocker remains for the assigned content. I reviewed the assigned carriers and the claim-relevant supplier chain above; I did not audit every unrelated leaf in the much larger mathematical dependency closure.
