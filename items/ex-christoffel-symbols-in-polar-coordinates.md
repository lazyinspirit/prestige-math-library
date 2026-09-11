---
id: ex-christoffel-symbols-in-polar-coordinates
kind: example
title: "Christoffel symbols in polar coordinates"
status: published
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

For the Euclidean plane in a polar chart $(r,\theta)$ with $r>0$, the metric is $dr^2+r^2d\theta^2$. Its only nonzero Levi–Civita symbols are $\Gamma^r{}_{\theta\theta}=-r$ and $\Gamma^\theta{}_{r\theta}=\Gamma^\theta{}_{\theta r}=1/r$.

## Facts & Assumptions

**Given:** A polar chart with angular interval small enough that $(r,\theta)\mapsto(r\cos\theta,r\sin\theta)$ is injective, and $r>0$.

[F1] $\Gamma^k{}_{ij}=\tfrac12g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$ ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

## Verification

1.1 Differentiating the coordinate map gives vectors $(\cos\theta,\sin\theta)$ and $(-r\sin\theta,r\cos\theta)$, whose inner products are $1,0,r^2$. Thus $G=\operatorname{diag}(1,r^2)$, $G^{-1}=\operatorname{diag}(1,r^{-2})$, and the only nonzero metric derivative is $\partial_rg_{\theta\theta}=2r$. Formula [F1] gives $\Gamma^r{}_{\theta\theta}=-(2r)/2=-r$ and $\Gamma^\theta{}_{r\theta}=\Gamma^\theta{}_{\theta r}=(2r)/(2r^2)=1/r$. [F1, given]

2.1 The remaining entries are $\Gamma^r{}_{rr}=\Gamma^r{}_{r\theta}=\Gamma^r{}_{\theta r}=\Gamma^\theta{}_{rr}=\Gamma^\theta{}_{\theta\theta}=0$. For the first and fourth, every metric derivative is zero. In the middle two the only potentially nonzero term $\partial_rg_{\theta\theta}$ is multiplied by $g^{r\theta}=0$; in the last, the term $-\partial_rg_{\theta\theta}$ is multiplied by $g^{\theta r}=0$. At $r=1$ the three displayed nonzero entries are $-1,1,1$. None of these formulas applies at $r=0$: there the angular coordinate vector vanishes and the coordinate map is not a chart. There is therefore no singularity of the Euclidean metric asserted at the origin. [F1, step 1.1] ∎
