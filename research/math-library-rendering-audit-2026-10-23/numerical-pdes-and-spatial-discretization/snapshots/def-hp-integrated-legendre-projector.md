---
id: def-hp-integrated-legendre-projector
kind: definition
title: Endpoint-preserving integrated Legendre projector
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-legendre-polynomial-family-and-l2-pairing
  - lem-legendre-weighted-derivative-orthogonality-and-norm
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, p-version FEM
      url: https://jschoeberl.github.io/iFEM/pversion/hpfem.html
      locator: "§§30.1–30.4: Legendre projection and endpoint-preserving integrated polynomial interpolation."
    - title: Leszek F. Demkowicz, Mathematical Theory of Finite Elements
      url: https://users.oden.utexas.edu/~leszek/classes/EM394F/book.pdf
      locator: "§3.1.4, printed pp. 64–68: integrated hierarchical bases with endpoint degrees of freedom."
---

## Definition

For $p\ge1$ and $g\in L^2(-1,1)$, define the degree-$(p-1)$ Legendre orthogonal projection
$$
\Pi_{p-1}g:=\sum_{n=0}^{p-1}\frac{2n+1}{2}\left(\int_{-1}^1g(t)P_n(t)\,dt\right)P_n.
$$
For $c\in\mathbb R$, define the endpoint-anchored integrated projector
$$
\mathcal I_p(c,g)(x):=c+\int_{-1}^x\Pi_{p-1}g(t)\,dt,\qquad -1\le x\le1.
$$
If an absolutely continuous function $f$ is represented as $f(x)=f(-1)+\int_{-1}^xf'(t)\,dt$ with $f'\in L^2$, write $I_pf:=\mathcal I_p(f(-1),f')$. The finite sum and integral are defined for every such input; no choice axiom is used in this definition.
