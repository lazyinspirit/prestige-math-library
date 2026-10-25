---
id: def-product-coordinate-projections
kind: definition
title: Product-coordinate averaging operators
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-product-sigma-algebra-and-finite-product-sigma-algebras, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, cor-cauchy-schwarz-inequality-for-l-two]
justified_by: [lem-product-coordinate-projections-commute-and-contract]
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: No choice principle is used in the uncompleted finite product probability spaces in this definition.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Thierry Klein, Introduction to Sensitivity Analysis: The Statistical Study of Sobol Indices, complete lecture notes, §§2.2.2–2.2.3"
      url: https://perso.math.univ-toulouse.fr/klein/files/2014/07/cours_AS.pdf
---

## Definition

Let $d\ge1$ be finite, let $(E_j,\mathcal E_j,\mu_j)$ be probability spaces,
and let $(E,\mathcal E,\mu)=\prod_{j=1}^d(E_j,\mathcal E_j,\mu_j)$ be their
finite product with product sigma-algebra and product probability. Write
$[d]=\{1,\ldots,d\}$. For $J\subseteq[d]$, let $E_J$ and $\mu_J$ denote the
corresponding coordinate product; the empty product is a one-point probability
space. For real $f\in L^2(\mu)$, define the coordinate average
$$P_Jf(x_J)=\int_{E_{[d]\setminus J}}f(x_J,z_{[d]\setminus J})\,d\mu_{[d]\setminus J}(z_{[d]\setminus J})$$
for almost every $x_J$ for which the section is integrable, and assign zero on
the exceptional null set. Regard $P_Jf$ also as a function on the full product
that is constant in the coordinates outside $J$. The conventions are
$P_{[d]}f=f$ as an $L^2$ class and $P_\varnothing f=\int f\,d\mu$.

## Remarks

The displayed integral is initially defined on representatives. Its independence
of the representative and its $L^2$ properties are established by
[[lem-product-coordinate-projections-commute-and-contract]].
