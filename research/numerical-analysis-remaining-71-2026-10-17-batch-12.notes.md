# Batch 12 authoring notes — numerical-analysis-remaining-71-2026-10-17

Role: beta  
Pair: ewald-periodic-potentials-and-particle-mesh-error / ewald-periodic-potentials-and-particle-mesh-error-examples  
Coverage: batch 12, scheduled dependency level 0; prerequisite batches: none  
Scheduling input: 420ecb24dafafe8a97878eef5d78654cd2b64e1f5a5e06072b1008c2c058727a

## Controlling documents and conflicts

Read the normative repository instructions and workflow, assigned tasks, current owner direction, batch manifest and dependency inventory, the complete PC-EWALD section at research/plan-numerical-linear-track.md L1171–L1228, and the matching plan-spec.json row.

The plan-spec row controls pair identity, order 2578, category, companion and the two required context pages: computed-fast-transforms-and-convolution and poisson-summation-sampling-and-lattice-duality. Its item array is empty because this run supplies the scaffold inventory. The owner direction binds the repaired PME design, especially the causal window, negative-sign unitary DFT normalization, conjugated denominator, signed aliases, derivative-error branch at P=2 knots and the requirement to retain the full P>=2 scope.

Two stale design statements were reconciled against current files. The PC-EWALD design says LIN-FFT was a proposed same-frontier supplier and that reading was pending. The current computed-transform page and its arbitrary-length FFT correctness theorem are published; their current bodies were inspected. The current Poisson theorem is also published and carries Countable Choice with the ordinary dual frequency convention; the Ewald items convert to angular frequency with κ=2πA^{-T}k. Full-text reading and dispositions are recorded in the batch coverage file, so the old “reading pending” sentence is not treated as current evidence. No current in-run batch edge is created from those published suppliers.

The design mentions a possible biology PIC consumer under matching regularization. Batch 61 has no current item/page requirement on this Ewald pair and currently uses its own centered-difference solver; no prospective PIC edge was invented. batch-12.cross-batch-dependencies.json therefore remains [].

The pre-existing unmanifested draft items/lem-ewald-force-is-energy-gradient.md was not used or edited. The assigned cutoff theorem now independently proves the exact Ewald force as the derivative of the renormalized energy. The owner should reconcile that stray same-run draft against the declared inventory before any later acceptance or publication.

## Inventory and dependency order

The batch contains 15 A items and 5 B examples (20 total; below the 100-item cap). Item levels were recomputed from in-batch item dependencies; external published suppliers do not raise these levels:

- Level 0: def-ewald-causal-cardinal-spline-window, def-ewald-three-dimensional-periodic-source-data, lem-ewald-screened-coulomb-kernel-and-self-limit.
- Level 1: def-ewald-pme-cardinal-assignment-model, lem-ewald-gaussian-poisson-periodization, lem-ewald-lattice-shell-gaussian-tail-controllers, lem-ewald-smooth-torus-fourier-pairing, ex-ewald-nonneutral-zero-mode-obstruction.
- Level 2: lem-ewald-pme-spline-alias-and-dft-normalization, thm-ewald-neutral-periodic-poisson-green-function.
- Level 3: lem-ewald-pme-derivative-window-alias-bound, thm-ewald-alpha-independent-energy-and-potential.
- Level 4: thm-ewald-pme-reciprocal-energy-force-error-bound, thm-ewald-real-reciprocal-cutoff-error-bounds, ex-ewald-neutral-dipole-cell, ex-ewald-source-collision-field-singularity.
- Level 5: thm-ewald-total-pme-error-certificate, ex-ewald-alpha-cutoff-tradeoff, ex-ewald-mesh-energy-force-consistency.
- Level 6: alg-ewald-certified-particle-mesh-evaluator.

The added local A-page definition def-ewald-causal-cardinal-spline-window supplies the finite truncated-power definition used by the assignment model. The spline alias proof establishes its convolution, Fourier, partition, support and derivative properties before consumers use them. The cutoff theorem now states and proves the exact force-energy derivative formula, including local uniform convergence of real and reciprocal derivative tails; its manifest dependencies include the uniform-derivative and continuous-partials suppliers used in that proof.

The evaluator uses tensor FFT gathers for potential and force, rather than direct per-particle reciprocal mode sums. With the unitary transform convention, the potential array uses v^U_k=c_k z_k/D(k), the force array uses v^F_k=c_k conjugate(z_k)/conjugate(D(k)), and self correction uses a cyclic kernel plus local support-pair products. The correction differentiates both assignment factors and retains duplicate wrap contributions. The stated operation counts are O(N_g log(2N_g)+nP^3), with optional self correction O(N_g log(2N_g)+nP^6); the arithmetic certificate remains separate from those counts.

## Proof and source audit

The A page keeps neutral mean-zero periodic data, zero-mode solvability, the Gaussian screened kernel and self limit, Gaussian periodization, lattice shell controllers, alpha-independent potential/energy, exact force, source and derivative aliases, reciprocal PME bounds, cutoff bounds, the total deterministic certificate and the finite evaluator. Countable Choice is an explicit hypothesis where the Gaussian Poisson and periodic distribution interfaces require it. The compact spline Fourier argument itself is choice-free. P=2 remains included: at knots the declared one-sided or averaged derivative is a procedure value, not a classical gradient. Point-source potential claims remain restricted to off-source points. No RMS estimate is used as a deterministic bound.

The B page keeps all five planned examples: a neutral dipole and its odd/even structure factor, the nonneutral zero-mode obstruction, source collision singularity, opposing alpha cutoff trends, and mesh energy-gradient consistency. The proof contract records finite substitutions for these worked cases.

Five live full texts were inspected; their locators and every harvested result disposition are in batch-12.coverage.json:

1. Lee–Cai, complete 12-page Ewald notes, §§2–6 and Appendix A.
2. Abrams, complete 130-page Drexel lecture notes, Chapter 7 §§7.1–7.3.
3. Deserno–Holm, complete 18-page paper, §§2–4 and Appendices B and E. Its RMS/statistical error estimates were not used as pointwise deterministic estimates.
4. Multi-Level Ewald, complete article, §2.1 equations (1)–(7), used for implementation pipeline context rather than deterministic guarantees.
5. Silberman, complete 5-page Fourier/Poisson notes, used for Fourier conventions and Poisson context.

The old Abrams mirror URL remains in coverage history with six recorded HTTP 404 attempts (initial failure plus five retries). It is the URL that is dropped; the same complete lecture notes were fetched from the official current Drexel site. The current source-fetch check reports 5/6 source occurrences fetch-verified and all 6/6 resolved, with one documented drop and no new stamps required.

## Scoped checks

| Check | Result |
|---|---|
| Batch-local dependency computation | 20 items, no local dependency errors; maximum level 6. |
| Manifest dependency arrays | 20 items, 0 missing and 0 errors. |
| Content policy | 20 items, 0 errors and 0 warnings. |
| Coverage checklist | 1 A page, 24 harvested results, 0 errors and 0 warnings. |
| Focused dependency/cycle check | 20 selected items; 1,326 prerequisite items and 218 pages traversed; no errors. |
| Strict proof contracts | 20/20 entries checked, 16 proof-bearing items, 73 numbered steps, 104 exact supplier citations; 0 errors and 0 warnings. |
| Normative precheck | 16 proof-bearing items, 0 failures. |
| Renderer check | 20 changed item files, no delimiter, KaTeX or YAML errors. |
| proof-layout | 20 items, 73 numbered proof steps, 0 defects. |
| Source fetch check | 5/6 fetch-verified, 6/6 resolved, 1 documented URL drop. |

The local batch-12 level computation passed. Whole-run item-level and batch-level dependency checks, and the normal-root step1-decisions.mjs check/record, cannot load the run because the unrelated batch 49 manifest is malformed JSON: research/numerical-analysis-remaining-71-2026-10-17-batch-49.pages.json, line 151, column 198, contains an unescaped \mathcal sequence in a double-quoted description. No batch-49 file was changed. To finish the assigned readiness rows, I ran the native Step 1 record command over a temporary snapshot of the current run manifests, escaping that sequence only in the temporary batch-49 copy. The recorded rows hash the unchanged batch-12 item/dependency closures; a temporary-snapshot audit confirms 20/20 are closed and ready with owner=false. Those 20 tool-generated rows were copied into the assigned research evidence. The real-root whole-run checker remains blocked until the owner repairs batch 49 and recomputes run-level scheduling metadata. No --owner option was used.

These local construction checks and the source stamps do not constitute independent proof approval or publication.
