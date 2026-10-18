---
id: thm-finite-gaussian-integral-evaluator-soundness-and-screening-error
kind: theorem
title: Soundness and accumulated error bounds for the finite Gaussian integral evaluator
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps: [alg-finite-gaussian-basis-integral-recurrence-evaluation, def-certified-evaluation-result-contract, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-real-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction, alg-certified-boys-finite-budget-branch-evaluation, thm-boys-branch-evaluation-enclosures-are-sound, thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas, thm-positive-coulomb-bilinear-cauchy-schwarz-screening, thm-gaussian-contraction-error-energy-gradient-bounds, thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences, lem-cartesian-gaussian-moments-and-parameter-derivatives, def-finite-gaussian-basis-variational-energy-and-gradient]
proof_strategy: direct
axiom_use: None. The proof is finite interval induction plus the local Coulomb and tensor bounds.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; finite recurrence formulas and Cauchy–Schwarz screening on pp. 23–28 and 35. Error guarantees are proved locally."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §V and Table 1, pp. 19–21. The local theorem supplies the certified discarded-error conclusion."
---

## Statement

Every invocation of [[alg-finite-gaussian-basis-integral-recurrence-evaluation]] terminates after finitely many operations bounded by its work and child-evaluator caps. If it returns `success`, each integral interval contains the exact integral range over the supplied parameter boxes. For the real energy/gradient branch, the returned energy interval and gradient-error bound contain the corresponding values of the finite functional in [[def-finite-gaussian-basis-variational-energy-and-gradient]]. The reported discarded-energy bound is at least the sum of the absolute Cauchy–Schwarz bounds for all skipped terms. The evaluator may return `inconclusive`, `domain`, or `range`; no universal success or exact-sparsity claim is made.

## Facts & Assumptions

**Given:** A successful return from [[alg-finite-gaussian-basis-integral-recurrence-evaluation]] on finite dyadic parameter boxes with strictly positive exponent lower bounds.

[F1] [[alg-finite-gaussian-basis-integral-recurrence-evaluation]]: overlap, kinetic, attraction, and Coulomb entries are assembled from finite pair coefficients, Boys enclosures, $R$ recurrences, and outward interval operations; screen decisions use a running sum of the stated bounds.

[F2] [[thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas]]: the finite Hermite formulas equal the exact Gaussian attraction and Coulomb integrals.

[F3] [[thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences]] and [[lem-cartesian-gaussian-moments-and-parameter-derivatives]]: the finite shifted-overlap and kinetic formulas equal their exact integrals.

[F4] [[thm-boys-branch-evaluation-enclosures-are-sound]]: every successful Boys request encloses the exact Boys range on its input interval.

[F5] [[def-certified-evaluation-result-contract]] and [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: each finite outward interval expression contains every exact value from its input boxes; non-finite statuses make no finite claim.

[F8] [[thm-real-elementary-range-enclosures]] and [[lem-trigonometric-identities-machin-and-range-reduction]]: finite real exponential intervals and a certified interval for $\pi$ are available for the procedure's constants.

[F6] [[thm-positive-coulomb-bilinear-cauchy-schwarz-screening]]: each omitted Coulomb entry has absolute value at most its diagonal Cauchy–Schwarz product, and the omitted energy is bounded by the sum of its weighted entry bounds.

[F7] [[thm-gaussian-contraction-error-energy-gradient-bounds]]: entrywise one- and four-index errors give the stated explicit energy and gradient bounds.

## Proof

1.1 For overlap and kinetic entries, the procedure's binomial polynomial expansion and shifted moments are exact by [F3]; the pointwise derivative recurrence gives the kinetic identity. For attraction and two-electron entries, [F2] identifies the finite Hermite sums with the exact integrals. Every Boys input interval used in those sums is enclosed by [F4]. [given, F1, F2, F3, F4]

1.2 Each omitted term is assigned an entrywise interval centered at zero with radius no smaller than its Cauchy–Schwarz bound by [F6]. The procedure adds the weighted bounds before skipping and reports their sum, so the absolute contribution of all omitted terms is bounded by that reported sum. No statement sets an omitted integral equal to zero. [F1, F6, algebra]

2.1 The recurrence arrays and contractions are finite expression graphs. The exponential and $\pi$ constants used in those graphs are enclosed by [F8], and every remaining finite interval node encloses the exact node value by [F5]. Combining this induction with step 1.1 proves that every returned integral interval contains its exact range over the input boxes. [F1, F5, F8, step 1.1, induction]

3.1 The midpoint tensors and radii from step 2.1 satisfy the entrywise error hypotheses of [F7], including the screened entries. Applying [F7] gives the energy and gradient error bounds; outward interval enlargement contains the corresponding exact values. [F1, F5, F7, step 2.1, step 1.2]

4.1 All primitive, pair, quartet, Boys-order, and auxiliary-table loops range over finite input lists or the finite integer bounds stated in [F1]. The work counter stops the outer procedure at its finite cap, and every delegated Boys, Gamma, and real-elementary evaluation has its own finite cap by [F1, F4, F5]. Therefore every invocation returns a finite status after finitely many operations. [given, F1, F4, F5, algebra] ∎
