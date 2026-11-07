---
id: def-dirichlet-divisor-error-term
kind: definition
title: "The Dirichlet divisor error term $\\Delta(x)$"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-divisor-counting-function, def-euler-mascheroni-constant, thm-euler-mascheroni-constant-and-harmonic-asymptotic]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory, Chapter 3: The Voronoï Summation Formula"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "§1, formula (3.1), printed p. 47"
    - title: "Stephen D. Miller and Wilfried Schmid, Summation Formulas, from Poisson and Voronoi to the Present"
      url: "https://arxiv.org/pdf/math/0304187v1"
      locator: "§1, formula (1.3)"
verification:
  precheck: n/a
---

## Definition

For each positive integer $n$, put $d(n):=\tau(n)$, the number of positive divisors of $n$. Let $\gamma$ be the Euler–Mascheroni constant. All sums indexed by $n$ are over positive integers. For every real $x\ge1$, the Dirichlet divisor error term is
$$
\Delta(x):=\sum_{1\le n\le x}d(n)-x\log x-(2\gamma-1)x.
$$

## Definition references

[Ivić, Chapter 3, §1, formula (3.1)](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

[Miller and Schmid, §1, formula (1.3)](https://arxiv.org/pdf/math/0304187v1)
