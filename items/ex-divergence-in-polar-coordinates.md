---
id: "ex-divergence-in-polar-coordinates"
kind: "example"
title: "Divergence in polar coordinates"
deps: ["prop-coordinate-formula-for-riemannian-divergence"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For the Euclidean metric in polar coordinates, $\operatorname{div}(X^r\partial_r+X^\theta\partial_\theta)=r^{-1}\partial_r(rX^r)+\partial_\theta X^\theta$.

## Facts & Assumptions

**Given:** A polar chart with $r>0$, metric matrix $\operatorname{diag}(1,r^2)$, and a smooth vector field $X$.

[F1] [[prop-coordinate-formula-for-riemannian-divergence]]: In coordinates, $\operatorname{div}_gX=(\det G)^{-1/2}\sum_{i=1}^n\partial_i((\det G)^{1/2}X^i)$.

## Verification

**Proof technique:** direct.

1.1 The positive square root of the metric determinant is $r$. Substituting into the divergence formula gives $\operatorname{div}X=r^{-1}\{\partial_r(rX^r)+\partial_\theta(rX^\theta)\}$. Since $\partial_\theta r=0$, the second term is $\partial_\theta X^\theta$, proving the formula. [F1, given]

2.1 The orthonormal polar frame is $e_r=\partial_r$, $e_\theta=r^{-1}\partial_\theta$. Thus if $X=ae_r+be_\theta$, its coordinate components are $X^r=a$, $X^\theta=b/r$, and the formula becomes $r^{-1}\partial_r(ra)+r^{-1}\partial_\theta b$. For $X=r\partial_r$, it gives $r^{-1}\partial_r(r^2)=2$. For $X=\partial_\theta$ it gives $0$. [step 1.1] ∎

## Source locator

Lee, p.423, definition of divergence and Exercise 16.31; Example 13.12, p.332, polar metric. The coordinate divergence theorem declared as F1 supplies the local coefficient formula used above.
