---
id: def-first-fundamental-form-and-surface-area-density
kind: definition
title: 'The first fundamental form, Gram matrix, and area density of a surface patch'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-tangent-plane-of-a-regular-surface-patch, def-gram-matrix-and-gram-determinant, thm-gram-determinant-detects-linear-independence]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, formulas 3.2.7-3.2.13'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'R. Sjamaar, Manifolds and Differential Forms, Section 8.1'
      url: 'https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf'
pipeline_run: null
---

## Definition

For a regular patch $(D,\varphi)$ and an interior parameter point, whose tangent plane is defined by [[def-tangent-plane-of-a-regular-surface-patch]], put
$$E=\langle\varphi_u,\varphi_u\rangle,\qquad F=\langle\varphi_u,\varphi_v\rangle,\qquad G=\langle\varphi_v,\varphi_v\rangle.$$
The matrix $G_\varphi=\begin{pmatrix}E&F\\F&G\end{pmatrix}$ is the **Gram matrix** of the parameter tangents, and the quadratic form $E\,du^2+2F\,du\,dv+G\,dv^2$ is the **first fundamental form** ([[def-gram-matrix-and-gram-determinant]]).

The surface area density is $J_\varphi=\sqrt{\det G_\varphi}$, where $G_\varphi$ is the Gram matrix of $\varphi_u$ and $\varphi_v$. The determinant is nonnegative for all parameter points and positive in the interior because the two tangents are independent there ([[thm-gram-determinant-detects-linear-independence]]), so the nonnegative square root exists and is unique.
