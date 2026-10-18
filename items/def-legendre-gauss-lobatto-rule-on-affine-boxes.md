---
id: def-legendre-gauss-lobatto-rule-on-affine-boxes
kind: definition
title: Legendre-Gauss-Lobatto nodes, weights, and tensor quadrature
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - def-legendre-polynomial-family-and-l2-pairing
  - lem-legendre-weighted-derivative-orthogonality-and-norm
  - lem-legendre-gauss-lobatto-nodes-are-distinct
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
      locator: "§§30.1–30.4: Legendre nodal bases, endpoint-preserving interpolation, and spectral p-version context."
    - title: Lloyd N. Trefethen, Short note on the mass matrix for Gauss-Lobatto grid points
      url: https://arxiv.org/pdf/1412.2276
      locator: "§§2–3, pp. 2–6: GLL quadrature and mass-matrix correction."
---

## Definition

Fix an integer $p\ge1$. Let $\xi_0=-1$, $\xi_p=1$, and let $\xi_1<\cdots<\xi_{p-1}$ be the roots of $P_p'$ in $(-1,1)$; for $p=1$ this interior list is empty. By [[lem-legendre-gauss-lobatto-nodes-are-distinct]] these $p+1$ nodes are distinct. Define $\ell_j(x)=\prod_{0\le i\le p,\ i\ne j}(x-\xi_i)/(\xi_j-\xi_i)$, set $w_j=\int_{-1}^1\ell_j(x)\,dx$, and define the **Legendre–Gauss–Lobatto rule** by $Q_p(f)=\sum_{j=0}^p w_jf(\xi_j)$.

On $[-1,1]^d$ its tensor rule is $Q_p^{\otimes d}(f)=\sum_{j_1,\ldots,j_d=0}^p(w_{j_1}\cdots w_{j_d})f(\xi_{j_1},\ldots,\xi_{j_d})$. For an affine box map $F_K(\xi)=b_K+J_K\xi$, define the transported rule by $Q_{K,p}(f)=|\det J_K|Q_p^{\otimes d}(f\circ F_K)$. The nodal basis on $K$ is the pullback of $\prod_{r=1}^d\ell_{j_r}(\xi_r)$. The local mass and stiffness forms are respectively $m_{K,p}(v,w)=Q_{K,p}(vw)$ and $a_{K,p}(v,w)=Q_{K,p}(\nabla v\cdot\nabla w)$; any sampled coefficient is evaluated at the same quadrature nodes. Global forms are assembled by summing the cell forms.

