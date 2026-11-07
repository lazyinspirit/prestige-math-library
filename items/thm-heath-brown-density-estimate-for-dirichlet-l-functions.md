---
id: thm-heath-brown-density-estimate-for-dirichlet-l-functions
kind: theorem
title: "Heath–Brown's zero-density estimates for Dirichlet L-functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-dirichlet-l-zero-density-counting-functions
  - lem-primitive-dirichlet-l-zero-count-in-unit-window
  - def-natural-logarithm
  - thm-unconditional-large-values-for-dirichlet-polynomials
  - thm-multiplicative-large-sieve-inequality
  - thm-heath-brown-first-theorem-two-branch
  - thm-heath-brown-second-theorem-two-branch
justified_by: []
aliases: []
forward_refs: []
dependency_level: 7
sources:
  references:
    - title: "D. R. Heath-Brown, The Density of Zeros of Dirichlet's L-Functions"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf"
      locator: "Theorems 1–3 and proofs, printed pp. 231–240."
---

## Statement

For $Q,T\ge1$, let $N_2(\sigma,Q,T)$ count the zeros with multiplicity of primitive Dirichlet L-functions of conductor at most $Q$ in $\operatorname{Re}s\ge\sigma$, $|\operatorname{Im}s|\le T$. For every $\varepsilon>0$, uniformly in the displayed ranges, the following estimates hold. Implied constants may depend on $\varepsilon$ only.

1. If $11/14\le\sigma\le1$, then
$$N_2(\sigma,Q,T)\ll_\varepsilon (Q^2T)^{2(1-\sigma)+\varepsilon}.$$

2. If $1/2\le\sigma\le1$, then both
$$N_2(\sigma,Q,T)\ll_\varepsilon (Q^2T^{6/5})^{5(1-\sigma)/(3-\sigma)+\varepsilon}$$
and
$$N_2(\sigma,Q,T)\ll_\varepsilon (Q^2T^{6/5})^{20(1-\sigma)/9+\varepsilon}.$$

3. If $129/167\le\sigma\le1$, then
$$N_2(\sigma,Q,T)\ll_\varepsilon (Q^2T^2)^{2(1-\sigma)+\varepsilon}.$$

Here $\ll_\varepsilon$ means the implied constant may depend on $\varepsilon$ only; each estimate is uniform in $Q,T,\sigma$ on its displayed range.

## Statement references

[Heath-Brown, Theorems 1–3](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf)

## Remarks

A complete local proof of this item remains unsupplied. The two separately scoped Theorem 2 branches below have locally authored proofs, conditional on their listed detector and hybrid-sampling suppliers. The paper's Theorems 1 and 3 still require their stronger Jutila-type inputs; those estimates and this complete four-branch item remain open.

## Facts & Assumptions

**Given:** The counting functions, parameter ranges and $\varepsilon>0$ in the Statement.

[F1] The first Theorem 2 estimate is proved under the exact Gaussian detector, target-scale mean-square and finite zero-count interfaces recorded in its supplier. [[thm-heath-brown-first-theorem-two-branch]]

[F2] The second Theorem 2 estimate is proved under the first branch and the target-scale hybrid reflection large-values interface recorded in its supplier. [[thm-heath-brown-second-theorem-two-branch]]

[A1] Theorems 1 and 3 of the original Statement remain unproved locally; in particular the stronger Jutila-type higher-moment inputs are not supplied.
