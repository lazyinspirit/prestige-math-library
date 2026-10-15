# Step 3a reader report — batch 38

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: batch `38`

## Inventory opened

Assigned pages:

- `library/quantum-field-theory-mathematics/qft-mf02.md` — A page, draft.
- `library/quantum-field-theory-mathematics/qft-mf02-examples.md` — companion B page, draft.

Prerequisite pages opened:

- `library/quantum-field-theory-mathematics/qft-mf01.md` — draft QFT-MF01 supplier page.
- `library/special-relativity/sr-spacetime-primitives.md` — published mathematical spacetime conventions.
- `library/differential-geometry/smooth-partitions-of-unity-and-exhaustions.md` — published smooth-bump prerequisite page.

Assigned items, read in dependency order:

1. `def-qft-scalar-mass-shell`
2. `lem-qft-mass-shell-measure-invariant`
3. `lem-qft-mass-shell-test-range-dense`
4. `lem-qft-mass-shell-test-restriction-continuity`
5. `lem-qft-fock-unitary-lift`
6. `lem-qft-scalar-poincare-action`
7. `lem-qft-smeared-free-scalar`
8. `lem-qft-scalar-causal-commutator`
9. `lem-qft-scalar-local-weyl-algebra`
10. `ex-qftmath-spacelike-vacuum-correlation`

The assigned contracts, batch manifest, cross-batch dependency record, and `qft-mf01` prerequisite page were also opened. The direct mathematical and Fock suppliers needed for the checked arguments included `def-countable-choice`, the SR Minkowski/Lorentz/time-orientation/causal-classification/inertial-chart suppliers, Schwartz and Fourier suppliers, change of variables, rational-box and smooth-density results, the bump and convergence results, the tempered-distribution and Fourier-inversion suppliers, Fubini and Cauchy–Schwarz, Hilbert tensor completion and permutation-sector results, and the current QFT-MF01 Fock, CCR, Segal-Weyl, product-L2, and second-quantized-spectrum items.

Read-only consumer context was checked for the clarified Poincaré and Fock continuity conventions in `lem-qft-smeared-free-scalar`. The pairwise spacelike-support condition was also checked where cited by current QFT consumers, including `lem-qft-free-dirac-car-locality`, `lem-qft-photon-local-field-strength`, `thm-qft-conformal-external-scalar`, `lem-qft-free-time-ordered-kernel`, `thm-qft-regular-formal-causal-factorization`, `pthm-qft-free-observable-domain-limits`, and `pthm-qft-scalar-free-properties`. These consumers are outside batch 38 and were not edited.

The cited source passages were opened at their relevant locations: Tong, *Quantum Field Theory*, §§2.4–2.7 (including equations 2.133–2.141 and 2.165); Srednicki, *Quantum Field Theory* draft, chapter 3 equations 3.15–3.19 and chapter 4 equations 4.11–4.15; Fewster–Rejzner, *Algebraic Quantum Field Theory—an introduction*, §4.2, PDF pp. 14–18; and Melrose's official MIT OCW §9, Theorem 9.1.

## Repairs and evidence

- `lem-qft-mass-shell-test-range-dense`: Step 1.1 now proves that every Schwartz restriction lies in `H_mu` before treating the restrictions as a subset of that Hilbert space, using the Schwartz decay bound and the shell weight. The same step distinguishes the cited real-valued rational-box dense set from the required complex-valued `L2` space: it approximates real and imaginary parts separately and gives an explicit countable pairing of the resulting dense sets. Step 2.1 now obtains vanishing tails by applying monotone convergence to the increasing interior integrals and subtracting from the finite total integral. The source `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn` is real-valued under the root library's `L^p` convention; the local real/imaginary decomposition closes the complex-space gap without changing suppliers.
- `lem-qft-mass-shell-measure-invariant`: Step 3.1 now explicitly applies its Jacobian calculation to `Lambda^{-1}`, matching the inverse Lorentz pullback in the Statement.
- `lem-qft-scalar-poincare-action`: The Statement now fixes the matrix subspace/product topology on the Poincaré group and defines strong continuity by norm-continuity of every orbit map. Step 2.1 now records why the change-of-variables result for nonnegative functions applies to the absolutely integrable complex Fourier integrand: apply it to the positive and negative parts of the real and imaginary components.
- `lem-qft-fock-unitary-lift`: The family-continuity clause now states its topological parameter space and orbit-map meaning. Its Tong locator was corrected: §2.4 provides the informal multiparticle/Fock-space context, while the general unitary lift and strong-continuity proof are established locally.
- `ex-qftmath-spacelike-vacuum-correlation`: The Srednicki reference is now cited to chapter 3 equations 3.15–3.19 for shell normalization; the former chapter 4 equations 4.11–4.15 locator did not identify a two-point function. Tong is cited to §2.7 equation 2.165 for the free-field vacuum two-point shell integral. The massless spacelike kernel and smeared positivity remain identified as local derivations.

All seven changed item files passed their scoped `reflow.mts` and `precheck.mts` commands. The final proof-contract derivations were synchronized to the reflowed proof paragraphs. None of the seven edited items had a stale `verification.judge` record.

## Page verdicts

- `qft-mf02` (A): **pass**. The summary matches the scalar shell construction and makes the dependence on draft QFT-MF01 mathematics explicit. No page-prose repair was needed.
- `qft-mf02-examples` (B): **pass**. Its summary accurately describes the mathematical, non-empirical correlation example. No page-prose repair was needed; B-page prose was not edited.

## Uneditable findings

None. No confirmed defect remained in a published or other-batch prerequisite after checking the statements used by batch 38. The QFT-MF01 suppliers remain draft conditional mathematics; their separate acceptance/readiness status is not a mathematical finding against this batch.

## Blockers and limits

- The required final batched `proof-layout.mjs` scan was attempted after the final edits, but the renderer failed while importing `web/components/library/ItemBody.tsx`: `ERR_MODULE_NOT_FOUND: Cannot find package '@/components'`. Reflow and precheck passed; proof-layout therefore remains unverified in this environment.
- The actual `qft-mf01` prerequisite page remains draft. Its current run dependency record marks the page and relevant item dependencies open pending QFT-MF01 readiness/acceptance; the page also records unavailable `mutool` source-fetch stamps. This is a run-level prerequisite blocker outside batch 38, not a defect found in an assigned claim.

