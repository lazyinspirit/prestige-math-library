---
id: ex-levi-civita-connection-of-a-conformal-plane-metric
kind: example
title: "Levi civita connection of a conformal plane metric"
status: draft
origin: pipeline
deps: ["prop-christoffel-formula-for-the-levi-civita-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Example

For a smooth real function $u$ on an open subset of $\mathbb R^2$, the metric $g=e^{2u}(dx^2+dy^2)$ has
$$\Gamma^k{}_{ij}=\delta^k_j u_i+\delta^k_i u_j-\delta_{ij}u_k,$$
where $u_i=\partial_i u$ and the last index uses the Cartesian Euclidean convention. For $u=x^2$, the nonzero entries are $\Gamma^x{}_{xx}=2x$, $\Gamma^x{}_{yy}=-2x$, $\Gamma^y{}_{xy}=\Gamma^y{}_{yx}=2x$.

## Facts & Assumptions

**Given:** The smooth function $u$ and the positive conformal metric on its domain.

[F1] The Levi–Civita coefficient formula contracts first metric derivatives with half the inverse metric ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

## Verification

1.1 The metric and inverse matrices are $g_{ij}=e^{2u}\delta_{ij}$ and $g^{ij}=e^{-2u}\delta^{ij}$. Since $\partial_i g_{j\ell}=2e^{2u}u_i\delta_{j\ell}$, substitution in [F1] cancels the factors $2$, $e^{2u}$ and $e^{-2u}$ and gives $\sum_\ell\delta^{k\ell}(u_i\delta_{j\ell}+u_j\delta_{i\ell}-u_\ell\delta_{ij})$, exactly the asserted formula. [F1, given]

2.1 For $u=x^2$, one has $u_x=2x,u_y=0$. The formula gives the four listed entries and $\Gamma^x{}_{xy}=\Gamma^x{}_{yx}=\Gamma^y{}_{xx}=\Gamma^y{}_{yy}=0$. At $x=0$ all entries vanish, whereas at $x=1$ the four listed entries are $2,-2,2,2$. Constant $u$ gives zero coefficients everywhere. The conformal factor is strictly positive for every real $u$, so this calculation never inverts a degenerate metric. [step 1.1] ∎
