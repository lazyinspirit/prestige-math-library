---
id: thm-cen-circle-error-main-reduction
kind: theorem
title: "Cen Circle-Error Main Reduction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps: [thm-cen-pair-count-proposition-3-1, thm-cen-second-spacing-bound-section-5, thm-cen-cone-distribution-theorem-6-1, thm-voronoi-two-square-summation-for-smooth-radial-tests, def-gauss-circle-error-term, def-countable-choice]
justified_by: []
axiom_use: "Countable Choice is required by the radial two-square Voronoï supplier and is carried through the reduction; no full Axiom of Choice is asserted."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Xi Cen et al., “A New Bound for the Gauss Circle Problem”"
      url: "https://arxiv.org/pdf/2610.21730v1"
      locator: "§§2–6, especially the theorem proof and parameter reductions"
    - title: "Stephen D. Miller and Wilfried Schmid, “Summation Formulas, from Poisson and Voronoi to the Present”"
      url: "https://arxiv.org/pdf/math/0304187v1"
      locator: "§1, circle Voronoï normalization"
verification:
  precheck: n/a
---

## Statement

Assume Countable Choice. Under the parameter regime in Cen et al. §§2–5, the source reduction combines Proposition 3.1’s pair count, the §5 second-spacing bound, Theorem 6.1’s cone-distribution estimate and the radial two-square Voronoï formula to bound the squared-radius Gauss circle error by the exponent stated in the source’s Theorem 1.1. The reduction is a source claim; its full quantified parameter statement is not repeated here until the three local spacing/distribution suppliers have exact checked statements.

## Statement references

[Xi Cen et al., “A New Bound for the Gauss Circle Problem”](https://arxiv.org/pdf/2610.21730v1)

[Stephen D. Miller and Wilfried Schmid, “Summation Formulas, from Poisson and Voronoi to the Present”](https://arxiv.org/pdf/math/0304187v1)

## Facts & Assumptions

**Given:** Countable Choice and the other hypotheses in the Statement.

[A1] [[def-countable-choice]]: Countable Choice asserts that every at most countable family of nonempty sets has a choice function.

[F2] [[def-gauss-circle-error-term]]: For real $x\ge0$, define the squared-radius Gauss circle error by
$$P(x):=\#\{(a,b)\in\mathbb Z^2:a^2+b^2\le x\}-\pi x =1+\sum_{1\le n\le x}r_2(n)-\pi x,$$
where $r_2(n)$ counts ordered pairs of integers with sum of squares $n$. The radius of the counted disk is $\sqrt{x}$, and the initial $1$ records the origin.

## Proof status
The reduction proof is not asserted complete here. The pair-count chain remains blocked by Robert–Sargos Theorem 2 and the remaining transformation and choice-scope obligations. The normalized exponents-2,7 near-diagonal count formerly attributed to §6.1 equation (6.4) is now supplied by the existing local proof in `lem-robert-sargos-near-diagonal-pair-count`, as recorded in the pair-count supplier; that count is no longer a missing prerequisite. The separate weighted two-sided double-sieve step used at Cen (4.17) now has a complete local proof under Countable Choice; it is not either of those spacing estimates. The original unqualified public Statement of the pair-count supplier is retained, while only its explicitly Countable-Choice conditional analytic branch may be used in this already-Countable-Choice reduction; the full supplier remains held. Also, the second-spacing chain remains blocked by Watt/Huxley source gates; and the cone chain depends on the Guth–Maldague theorem, whose local proof is unresolved. The degree-five VMVT bridge and BDG supplier are now present and Step-1 ready, so the old missing-BDG condition no longer applies. Preserve this consumer claim for reconciliation.
