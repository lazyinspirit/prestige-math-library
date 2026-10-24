---
id: def-pe03-tadmor-entropy-conservative-flux
kind: definition
title: Tadmor entropy-conservative two-point flux
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-pe03-system-entropy-pair-and-potential]
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
    - title: "E. Tadmor, Entropy Stable Schemes for Hyperbolic Conservation Laws, Handbook of Numerical Methods for Hyperbolic Problems, Vol. 17"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "§§4.2 and 4.6, entropy-conservative fluxes, PDF pp. 11–17; full chapter read"
    - title: "R. Bürger, P. E. Méndez, and C. Parés, On Entropy Stable Schemes for Degenerate Parabolic Multispecies Kinematic Flow Models"
      url: "https://www.ci2ma.udec.cl/pdf/pre-publicaciones2/2018/pp18-24.pdf"
      locator: "§2.2, entropy-conservative numerical flux, PDF pp. 6–8; full preprint read"
---

## Definition

Let $(\eta,q)$ be a convex entropy pair on an open domain $\mathcal A$, with
entropy variable $v$ and potential $\psi$ as in
[[def-pe03-system-entropy-pair-and-potential]]. A continuous two-point flux
$F^{ec}:\mathcal A\times\mathcal A\to\mathbb R^m$ is **entropy-conservative
in Tadmor's sense** if it is consistent and symmetric,
$F^{ec}(U,U)=F(U)$, and satisfies the exact jump identity
$$\bigl(v(U_R)-v(U_L)\bigr)^T F^{ec}(U_L,U_R)=\psi(U_R)-\psi(U_L)$$
for every pair $U_L,U_R\in\mathcal A$. This definition asserts no existence
for a prescribed entropy pair.

