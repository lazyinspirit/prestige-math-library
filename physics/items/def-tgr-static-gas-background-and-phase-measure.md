---
id: def-tgr-static-gas-background-and-phase-measure
kind: definition
title: "Prescribed static background and local momentum phase measure"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - def-tdmath-measure-integral
  - def-tgr-gravitating-phase-reference
dependency_roles:
  def-countable-choice: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  def-tgr-gravitating-phase-reference: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas, §III"
      url: "https://arxiv.org/pdf/1908.10817"
    - title: "Terence Tao, An Introduction to Measure Theory, §1.7"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Definition

Let $I\subset\mathbb R$ be an open interval and $B\subset\mathbb R^3$ a bounded open region with compact closure. Coordinates are $x^0=ct$ and $x=(x^1,x^2,x^3)$, all in metres. Supply a smooth positive-definite spatial metric $h_{ij}(x)$, a smooth dimensionless lapse $\mathcal N(x)$ with $0<\mathcal N_0\le\mathcal N(x)\le\mathcal N_1$, and a smooth orthonormal coframe $e^a{}_i(x)$ satisfying $h_{ij}=\sum_{a=1}^3e^a{}_ie^a{}_j$.

The prescribed static Lorentzian metric is $g=-\mathcal N(x)^2(dx^0)^2+h_{ij}(x)dx^i dx^j$ with signature $-+++$. The static time vector is $\xi=\partial_{x^0}$, its norm is $g(\xi,\xi)=-\mathcal N^2$, and the unit static observer field is $u=\mathcal N^{-1}\xi$. These are background inputs, not a metric solved from a matter stress tensor.

For cotangent coordinates $p_i$ (units kg m s$^{-1}$), define orthonormal momentum components $\hat p_a$ by $p_i=e^a{}_i\hat p_a$. The one-particle phase domain is $B\times\mathbb R^3_{\hat p}$ with measure
$$
d\Gamma=\frac{dV_h(x)\,d^3\hat p}{h_*^3},\qquad dV_h=\sqrt{\det(h_{ij})}\,d^3x,
$$
where $h_*$ is the action reference of [[def-tgr-gravitating-phase-reference]]. For rest mass $m>0$ kg, define local energy $E(\hat p)=\sqrt{m^2c^4+c^2\|\hat p\|^2}$ in joules and conserved static energy $H_K(x,\hat p)=\mathcal N(x)E(\hat p)$. The coframe is supplied as part of this charted model data; no global curved-space spectral construction is included.
