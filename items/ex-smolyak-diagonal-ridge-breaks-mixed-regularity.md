---
id: ex-smolyak-diagonal-ridge-breaks-mixed-regularity
kind: example
title: A diagonal ridge fails the mixed fourth-derivative hypothesis
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity-examples
dependency_level: 6
deps: [thm-smolyak-isotropic-mixed-smoothness-work-error-rate, lem-smolyak-mixed-simpson-detail-decay, def-derivative, lem-derivative-of-a-power, thm-algebra-of-derivatives]
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §Classical Sparse Grids"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "T. Gerstner and M. Griebel, Dimension-Adaptive Tensor-Product Quadrature, §2"
      url: "https://ins.uni-bonn.de/media/public/publication-media/dimadapt.pdf?pk=177"
---

## Example

On $[0,1]^2$, take $f(x,y)=|x-y|^3$. The pure second partials are continuous,
but even the pure fourth derivative required by the rate theorem fails to
exist at every interior diagonal point $(y,y)$ with $0<y<1$. Thus this ridge does not meet the mixed regularity
hypothesis for the isotropic rate in
[[thm-smolyak-isotropic-mixed-smoothness-work-error-rate]].

## Verification

**Given:** $f(x,y)=|x-y|^3$ on $[0,1]^2$ and the mixed-derivative hypotheses in [[thm-smolyak-isotropic-mixed-smoothness-work-error-rate]]. Each coordinate partial is the ordinary derivative of the section obtained by fixing the other coordinate.

[F1] [[lem-smolyak-mixed-simpson-detail-decay]]: the mixed-regularity hypothesis includes $D_{\{1\}}f=\partial_x^4f$ and requires it to exist continuously on the whole square.

[F2] [[thm-smolyak-isotropic-mixed-smoothness-work-error-rate]]: its rate requires every $D_Sf$ to exist continuously and have a finite bound on the whole cube.

[F3] [[def-derivative]]: a one-dimensional derivative is the limit of its difference quotient.

[F4] [[lem-derivative-of-a-power]]: for $k\ge1$, the derivative of $h^k$ is $kh^{k-1}$.

[F5] [[thm-algebra-of-derivatives]]: scalar multiples of differentiable functions have the corresponding scalar-multiple derivative.

1.1 Fix an interior $y\in(0,1)$ and write $g(h)=f(y+h,y)=|h|^3$ for sufficiently small positive and negative $h$. By [F4]–[F5], on the two sides $g'(h)=3h|h|$ and $g''(h)=6|h|$ for $h\ne0$. The difference quotients at zero give $g'(0)=0$ and $g''(0)=\lim_{h\to0}3|h|=0$. The derivative of $g''$ at zero would require $\lim_{h\to0}(g''(h)-g''(0))/h=\lim_{h\to0}6|h|/h$, whose right-hand value is $6$ and left-hand value is $-6$. Thus $g'''(0)$ does not exist, so $g^{(4)}(0)$ cannot exist. By [F3], the required derivative therefore fails at the interior diagonal point $(y,y)$. [given, F3, F4, F5, algebra]

2.1 Since [F1] requires $D_{\{1\}}f=\partial_x^4f$ to exist continuously everywhere, the failure in step 1.1 violates a stated hypothesis of the rate theorem [F2]. The theorem makes no such rate claim for this ridge. [given, F1, F2, step 1.1]

3.1 For every fixed $y$, the same formulas give $\partial_x^2f(x,y)=6|x-y|$, including its value zero on the diagonal; the same one-sided calculations apply at $x=0,1$. By symmetry $\partial_y^2f(x,y)=6|x-y|$ as well. These partials are continuous and bounded by $6$ on the square since $|x-y|\le1$, illustrating that lower-order smoothness does not imply the fourth-order condition used here. [given, F3, F4, F5, step 1.1, algebra] ∎
