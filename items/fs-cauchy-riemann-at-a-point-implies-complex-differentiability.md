---
id: fs-cauchy-riemann-at-a-point-implies-complex-differentiability
kind: false-statement
title: "FALSE: the Cauchy–Riemann equations at one point imply complex differentiability there"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-complex-differentiability-holomorphic-and-entire, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, lem-complex-conjugation-and-modulus-laws]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Howell and Mathews, Complex Analysis, Example 3.2.5"
      url: "https://complexanalysis.org/web/sec_cauchy-riemann.html"
pipeline_run: frontier-12
---

## Statement

**False claim:** if the four first coordinate partial derivatives of $f=u+iv$ exist at a point and satisfy $u_x=v_y$ and $u_y=-v_x$ there, then $f$ is complex differentiable at that point.

## Facts & Assumptions
**Given:** The function $$f(0)=0,\qquad f(z)=\frac{\bar z^2}{z}\quad(z\ne0).$$

[L1] Complex differentiability at $0$ requires a single limit of $(f(h)-f(0))/h$ as nonzero complex $h$ tends to $0$ ([[def-complex-differentiability-holomorphic-and-entire]]).

[L2] Complex differentiability is equivalent to real total differentiability plus the Cauchy–Riemann equations; the equations alone are not asserted to be sufficient ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L3] The modulus is multiplicative, $z\overline z=|z|^2$, $\overline{\overline z}=z$, and $|z|=0$ exactly when $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]). Since $\overline{\overline z}=z$ and $z\overline z=|z|^2$, one has $|\overline z|^2=\overline z\,\overline{\overline z}=\overline zz=|z|^2$, and both moduli are nonnegative, so $|\overline z|=|z|$.

## Refutation

**Proof technique:** direct counterexample.

1.1 For $z\ne0$, $|f(z)|=|\bar z|^2/|z|=|z|$. Hence $f(z)\to0=f(0)$ as $z\to0$, so the example is even continuous at the point in question. [L3, algebra]

1.2 On the real axis, $f(t)=t$; on the imaginary axis, $f(it)=it$. Therefore at the origin $$u_x=1,\quad v_x=0,\quad u_y=0,\quad v_y=1.$$ [given, algebra]

1.3 For $z\ne0$, the derivative quotient at the origin is $$\frac{f(z)-f(0)}z=\frac{\bar z^2}{z^2}.$$ [given, algebra]

2.1 Thus $u_x=v_y$ and $u_y=-v_x$ at $0$: both Cauchy–Riemann equations hold there. [step 1.2]

2.2 Along nonzero real $z=t$, the quotient in step 1.3 is $1$. Along $z=t(1+i)$, it is $(1-i)^2/(1+i)^2=-1$. Both paths tend to $0$, so [L1] shows that $f'(0)$ does not exist. [step 1.3, L1, algebra]

3.1 Steps 1.2 and 2.1 verify the false claim's entire hypothesis at $0$, while step 2.2 denies its conclusion. This also exhibits the missing ingredient in [L2]: the coordinate map is not real totally differentiable at $0$. [step 1.2, step 2.1, step 2.2, L2] ∎
