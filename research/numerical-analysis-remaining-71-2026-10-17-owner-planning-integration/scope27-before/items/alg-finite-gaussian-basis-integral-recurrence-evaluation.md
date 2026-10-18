---
id: alg-finite-gaussian-basis-integral-recurrence-evaluation
kind: algorithm
title: Finite primitive and contracted Gaussian integral evaluation with certified screening
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: [def-cartesian-gaussian-primitives-and-contractions, def-boys-function-and-coulomb-auxiliary-recurrence, def-certified-evaluation-result-contract, thm-real-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction, thm-outward-rounded-operations-are-isotone-and-dag-sound, def-hermite-gaussian-coulomb-auxiliary-functions, def-finite-gaussian-basis-variational-energy-and-gradient, lem-cartesian-gaussian-moments-and-parameter-derivatives, thm-cartesian-gaussian-integrals-absolutely-convergent, thm-gaussian-product-theorem-and-polynomial-shift, thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences, thm-cartesian-pair-hermite-expansion-and-coefficient-recurrence, thm-positive-coulomb-bilinear-cauchy-schwarz-screening, thm-gaussian-contraction-error-energy-gradient-bounds, alg-certified-boys-finite-budget-branch-evaluation, thm-boys-branch-evaluation-enclosures-are-sound, thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas]
axiom_use: None. All loops range over finite input lists and finite index tables.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; overlap, kinetic, attraction, two-electron recurrence, and screening workflow on pp. 11–28 and 35. The finite error/status contract is defined here."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §§II–V and Table 1, pp. 5–21, pair recurrences and finite contraction loops. Error certification is developed locally."
---

## Definition

**Inputs.** A finite list of Cartesian Gaussian basis contractions from [[def-cartesian-gaussian-primitives-and-contractions]], represented by finite dyadic intervals for real centers and positive exponents and by finite dyadic intervals or complex rectangles for coefficients; a finite nuclear list; and finite positive work, precision, integral-tolerance, energy-tolerance, and optional screening-tolerance caps. An energy/gradient request additionally requires real-valued basis contractions, real $C,D$, and finite bounds $B\ge\|C\|_F$, $M_D\ge\|D\|_F$ from [[def-finite-gaussian-basis-variational-energy-and-gradient]].

**Outputs.** A status `success`, `inconclusive`, `domain`, or `range`; outward intervals for requested overlap, kinetic, nuclear-attraction, and two-electron Coulomb integrals; when requested, an energy interval and a Frobenius gradient-error bound; and a separately reported accumulated discarded-energy bound. A successful interval encloses the exact range over every parameter value in the supplied input boxes. No status asserts that an omitted integral is exactly zero.

**Procedure.**

1. Validate that every exponent interval has a strictly positive lower endpoint, all centers and coefficient boxes are finite, all indices are in $\mathbb N_0^3$, all tolerances are positive, and all work/precision caps are finite positive integers. If an energy/gradient request is made, also validate that its basis coefficients, $C,D$, and nuclear data are real and that the supplied norm bounds hold. Return `domain` on a failed domain check.

2. Enumerate ordered primitive-pair keys lexicographically. For each pair set $p=a+b$, $P=(aA+bB)/p$, and $K=\exp(-ab\|A-B\|^2/p)$ by a certified real-exponential range enclosure and outward interval operations. Enclose $\pi$ using [[lem-trigonometric-identities-machin-and-range-reduction]] before evaluating Gaussian moments. Cache the pair key and compute its Hermite coefficients in increasing total primitive angular degree, using the x, y, z raising order for the first primitive and then for the second. The coefficient table has at most $N_E=\prod_{j=1}^3(\alpha_j+\beta_j+1)$ entries for that ordered pair. Reuse a cached table only for the identical ordered interval key.

3. Compute overlap entries by expanding the shifted polynomial from the Gaussian product theorem into finitely many monomials and applying the Gaussian moment formula in [[lem-cartesian-gaussian-moments-and-parameter-derivatives]], with the certified $\pi$ interval from step 2. Compute kinetic entries by the raising/lowering identity in [[thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences]]. For nuclear attraction and any Coulomb self-integral needed for screening, request the required Boys table from [[alg-certified-boys-finite-budget-branch-evaluation]]. For an off-diagonal Coulomb quartet, first apply the screening decision in step 5; request its Boys table only if the quartet is retained. If a required Boys call is not `success`, propagate its `domain`, `range`, or `inconclusive` status.

4. For attraction and Coulomb entries, build the $R^n_{tuv}$ table in increasing derivative degree $d=t+u+v$. At degree $d$, fill only $0\le n\le L-d$, so every recurrence predecessor with degree $d-1$ is already available. Cache by the exact exponent and center-interval key. Contract the finite Hermite sums using the formulas in [[thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas]].

5. Contract primitive intervals to basis-integral intervals by finite outward interval arithmetic. Count every recurrence update, interval operation, Boys request, and summand against the work cap. Memoize identical ordered pair and $R$-table keys. For a Coulomb-energy screening request, first obtain finite nonnegative upper endpoints $U_{ab}$ for the diagonal self integrals $G_{ab,ab}$. Form the primitive-basis density coefficients $W_{ab}=\sum_{p,q}C_{ap}D_{pq}C_{bq}$. For each candidate basis quartet use the weighted bound $w_{abcd}=\tfrac12|W_{ab}W_{cd}|\sqrt{U_{ab}U_{cd}}$ and add it to the running discarded-energy total only if the updated sum stays within the requested screening budget; otherwise compute that quartet. Report the actual sum of all skipped-term bounds, not a sparsity claim.

6. If energy or gradient is requested, replace each finite integral interval by its midpoint and radius. Let $\varepsilon_2$ and $\varepsilon_4$ be the largest radii among the one-body and four-index entries, with each screened entry represented by midpoint zero and radius at least its Cauchy–Schwarz bound. Apply [[thm-gaussian-contraction-error-energy-gradient-bounds]] with $n,r,B,M_D$ to enlarge the computed energy interval and gradient center by the stated finite-dimensional error bounds. A non-finite intermediate returns `range`; a work-cap exhaustion or failed tolerance test returns `inconclusive`; return `success` only after every requested interval/error bound meets its declared tolerance.

The recurrence-order tables are finite: an $R$ table through maximum derivative order $L$ stores $\sum_{d=0}^L(L-d+1)\binom{d+2}{2}$ values. The work counter includes all updates of these tables and all distinct coefficient and Boys keys. The procedure may return `inconclusive` for valid inputs when the cap or requested tolerance is too strict.
