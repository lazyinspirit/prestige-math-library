# Step 3a reader report — batch 36

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `36`

## Inventory reviewed

Assigned pages opened:

- `library/non-relativistic-quantum-mechanics-mathematics/qm-math-oscillator.md`
- `library/non-relativistic-quantum-mechanics-mathematics/qm-math-oscillator-examples.md`

All 13 assigned items were opened and reviewed:

- `lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma`
- `thm-nrqm-oscillator-diagonal-spectrum`
- `thm-nrqm-oscillator-hermite-recurrence`
- `thm-nrqm-oscillator-hermite-orthogonality`
- `thm-nrqm-oscillator-hermite-completeness`
- `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`
- `lem-nrqm-oscillator-closed-ladder-domains`
- `thm-nrqm-oscillator-coherent-state-convergence`
- `thm-nrqm-oscillator-coherent-evolution-and-variance`
- `thm-nrqm-oscillator-multidimensional-oscillator-completeness`
- `ex-nrqm-oscillator-ground-energy-units`
- `ex-nrqm-oscillator-poisson-number-distribution`
- `ex-nrqm-oscillator-formal-nonnormalizable-solution`

I also opened the assigned proof contracts, the current batch-35 supplier items used by the oscillator chain, and the cited operator, Hilbert-space, Fourier, integration, tensor-product, and counting statements needed to check the claims. The batch-35 suppliers inspected were `lem-nrqm-composites-complex-gaussian-continuation`, `thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators`, `lem-nrqm-composites-hilbert-tensor-construction`, `lem-nrqm-composites-euclidean-l2-product-unitary`, and `lem-nrqm-composites-bounded-tensor-maps`.

## Repairs made

- **`thm-nrqm-oscillator-diagonal-spectrum`:** replaced the modal claim that a limit point outside the listed sequence “may fail” to be an eigenvalue with the exact conclusion that its kernel is zero. The proof compares coefficients in the complete orthonormal family and invokes Parseval. The item does not identify further spectral types. The proof contract was updated.

- **`thm-nrqm-oscillator-hermite-recurrence`:** added the published supplier `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, which establishes the complex (L^2) inner product on equivalence classes. Specified uniqueness of the smooth polynomial-Gaussian representative before defining multiplication and differentiation on (P), and set (g_{-1}=0) for the (n=0) ladder formulas. Clarified componentwise complex calculus in the relevant proofs. The page A summary now records the Hilbert pairing and (g_{-1}) convention. The proof contract was updated.

- **`thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`:** corrected the change-of-variables substitution to (T(x)=x/\ell), proved that the scaling map and inverse are independent of representatives of (L^2) classes, and supplied the triangular-degree argument showing (P=\operatorname{span}\{g_n\}). Clarified componentwise calculus in the weak integration-by-parts argument. Updated Fact F2 and its proof contract to cite the Hermite-degree supplier.

- **`thm-nrqm-oscillator-multidimensional-oscillator-completeness`:** defined the left-associated completed tensor products and recursive (y)- and (x)-coordinate product unitaries, fixed the degree-then-lexicographic enumeration of \(\mathbb N^d\), and defined the tensor transport using `lem-nrqm-composites-bounded-tensor-maps`. Specified the smooth product representatives used by the coordinate differential expressions. The proof contract was updated.

- **`ex-nrqm-oscillator-formal-nonnormalizable-solution`:** specified (u:\mathbb R\to\mathbb C) and the componentwise (C^2) convention. Proved the derivative of the oriented integral on both sides of zero using oriented additivity and the first FTC. Added exact measure and integral suppliers for the nonintegrability argument, and cited real/imaginary FTC applications in the solution-family proof. The proof contract was updated.

No changed carrier had a `verification.judge` record to remove. No B-page prose or out-of-batch content was edited.

## Remaining uneditable defect

`lem-nrqm-composites-complex-gaussian-continuation` is an in-run supplier from batch 35 and remains a direct prerequisite of assigned item `thm-nrqm-oscillator-hermite-recurrence`. Its Statement (a) defines (G_n) as an “absolutely convergent improper multiple integral,” while Facts & Assumptions [F7] says `def-improper-integral-at-infinity` defines the bilateral integral over \(\mathbb R\) as symmetric truncations. The opened `def-improper-integral-at-infinity` defines only the two one-sided integrals \(\int_a^\infty\) and \(\int_{-\infty}^b\); it does not define that bilateral convention or an (n)-dimensional improper integral. The supplier then invokes Lebesgue Fubini in step 4.1 without defining the identification between those improper integrals and the Lebesgue product integral. The assigned Hermite recurrence consumes clause (b) for Gaussian normalization. The source and exact evidence are routed in the findings JSON; the producer is outside this batch's edit scope.

## Consumer checks

I checked the direct uses affected by the diagonal-spectrum and Hermite-interface repairs. `thm-nrqm-intervals-dirichlet-diagonal-domain-identification`, `lem-nrqm-intervals-compact-resolvent-eigenbasis`, and `thm-nrqm-intervals-twisted-periodic-momentum-domain` use the diagonal spectrum only through the closure formula. The oscillator scaling, ladder-domain, and multidimensional items likewise use the unchanged closure/eigenvalue conclusions.

The external direct uses of the Hermite recurrence remain compatible: `thm-nrqm-controlled-dynamics-driven-oscillator-common-domain` uses the ladder formulas and is now covered at (n=0); `thm-nrqm-coulomb-atomic-dipole-matrix-element-domain` already states the equivalent (g_{-1}=0) convention; `thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension` uses the unchanged Hermite polynomial degrees; `def-nrqm-oscillator-framework-quadratic-potential-model` uses the span property now proved in the scaling item; and `ex-nrqm-oscillator-ground-state-gaussian` uses the (g_0) clause. The direct multidimensional consumers `ex-nrqm-oscillator-ground-energy-units` and `thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension` use the unchanged product basis, energy, and multiplicity claims. No consumer repairs were required.

## Page verdicts

- **`qm-math-oscillator` (draft A page): pass after the summary update.** Its operator, Hermite, coherent-state, scaling, and multidimensional summaries match the reviewed item results.
- **`qm-math-oscillator-examples` (draft B page): pass.** Its three mathematical examples are accurately summarized. The page is outside the prose edit scope and was left unchanged.

## Validation and blocker

Final `reflow.mts` and `precheck.mts` runs passed for all five changed items. The required single batched `proof-layout.mjs` run reported **5 items, 27 steps, 0 defects**. Proof contracts parse with all 13 assigned items present.

Blocker: none. The batch-35 Gaussian-integral citation/definition defect remains for owner routing.

## Coverage note

Every assigned page and item was read. I opened the dependency statements and local arguments used to verify the oscillator claims, including the current in-run suppliers. I did not re-audit every proof in the transitive published mathematical library; published prerequisites were consumed at their exact local statements. No web search was needed for the mathematics reviewed.
