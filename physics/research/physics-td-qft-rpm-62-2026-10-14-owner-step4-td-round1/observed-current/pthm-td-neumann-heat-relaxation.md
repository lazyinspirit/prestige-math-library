---
id: pthm-td-neumann-heat-relaxation
kind: physics-theorem
title: Exponential relaxation of the constant-conductivity Neumann heat model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
physical_scope: Conditional L2 relaxation for the compatible positive-temperature solution of the constant-capacity, constant-conductivity model on a three-dimensional insulated rectangle.
deps:
  - pthm-td-constant-conductivity-neumann-existence
  - def-countable-choice
  - lem-td-rectangular-poincare
  - thm-newton-leibniz-with-interior-derivative
  - thm-riemann-fubini-on-product-rectangles
dependency_roles:
  pthm-td-constant-conductivity-neumann-existence: physical-result
  def-countable-choice: mathematical-premise
  lem-td-rectangular-poincare: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations, §4.4 and §5.1
      url: https://www.math.ucdavis.edu/~hunter/pdes/ch4.pdf
      locator: Official chapter PDF retrieved; §4.4, Theorem 4.9, Poincare inequality discussion.
    - title: John K. Hunter, Notes on Partial Differential Equations, §5.1
      url: https://www.math.ucdavis.edu/~hunter/pdes/ch5.pdf
      locator: Official chapter PDF retrieved; §5.1, Theorem 5.5, heat-kernel evolution.
---

## Statement

Assume Countable Choice and the hypotheses and solution $T$ of [[pthm-td-constant-conductivity-neumann-existence]], let $V=|\Omega|=L_1L_2L_3$, define the spatial mean $\overline T(t)=V^{-1}\int_\Omega T(x,t)\,dx$, and put $E(t)=\int_\Omega|T(x,t)-\overline T(t)|^2\,dx$. With $a=k/c$ and $C_\Omega=\frac32\max_iL_i^2$, the mean is constant and
$$E(t)\le e^{-2at/C_\Omega}E(0)\qquad(t\ge0).$$
Thus this model solution converges exponentially to its initial spatial mean in $L^2(\Omega)$; no pointwise-uniform convergence rate is asserted.

## Facts & Assumptions

**Given:** Countable Choice, the smooth positive solution and homogeneous Neumann boundary data from [[pthm-td-constant-conductivity-neumann-existence]], the rectangular mean-zero inequality on $\Omega$, and $a=k/c>0$.

[A1] [[def-countable-choice]]: every sequence of nonempty sets has a choice function.

[F1] [[pthm-td-constant-conductivity-neumann-existence]]: $T_t=a\Delta T$ on $\Omega$, $\partial_nT=0$ on every face, and $T$ is $C^1$ in time and $C^2$ in space up to the boundary on finite intervals.

[F2] [[lem-td-rectangular-poincare]]: if $w$ has zero spatial mean, then $\int_\Omega w^2\le C_\Omega\int_\Omega|\nabla w|^2$ with $\nabla w=(\partial_{x_1}w,\partial_{x_2}w,\partial_{x_3}w)$ and $C_\Omega=\frac32\max_iL_i^2$.

[F3] [[thm-newton-leibniz-with-interior-derivative]]: a continuous function on a closed interval with an integrable interior derivative has endpoint increment equal to the derivative integral.

[F4] [[thm-riemann-fubini-on-product-rectangles]]: iterated Riemann integrals of continuous functions on product rectangles equal the multidimensional integral.

## Proof


1.1 On each finite time interval the time derivative is continuous on the compact box, so its difference quotients converge uniformly under the spatial integral. By [F1] and [F4], coordinatewise application of [F3] gives $\overline T'(t)=aV^{-1}\int_\Omega\Delta T\,dx=0$: the integral of each second coordinate derivative is the difference of the corresponding first derivative on its two faces, and both normal derivatives vanish. Hence $\overline T(t)=\overline T(0)$. [A1, F1, F3, F4, given]

2.1 Set $w(x,t)=T(x,t)-\overline T(0)$. Then [F4] and step 1.1 give $\int_\Omega w=0$, while $w_t=a\Delta w$ and $\partial_nw=0$. Differentiating $E(t)=\int_\Omega w^2$ and using [F4], the product rule, and [F3] in each coordinate gives $E'(t)=2a\int_\Omega w\Delta w=-2a\int_\Omega|\nabla w|^2$; each endpoint term is $w\partial_nw=0$. [F1, F3, F4, step 1.1, algebra]

3.1 Apply [F2] to $w(\cdot,t)$ in step 2.1. It gives $E(t)\le C_\Omega\int_\Omega|\nabla w|^2$, so $E'(t)\le-(2a/C_\Omega)E(t)$. [F2, step 2.1]

4.1 The product rule gives $(e^{2at/C_\Omega}E(t))'=e^{2at/C_\Omega}(E'(t)+(2a/C_\Omega)E(t))\le0$ by step 3.1. Integrating this derivative with [F3] from $0$ to $t$ yields $e^{2at/C_\Omega}E(t)\le E(0)$, which is the asserted estimate. [F3, step 3.1, algebra] ∎
