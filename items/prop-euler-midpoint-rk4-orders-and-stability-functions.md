---
id: prop-euler-midpoint-rk4-orders-and-stability-functions
kind: proposition
title: "Orders and scalar stability functions of Euler, midpoint, and classical RK4"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-euler-midpoint-rk4-tableaus
  - def-explicit-runge-kutta-tableau-and-stage-map
  - def-one-step-ode-method-local-defect-order-and-stability
  - prop-explicit-rk-order-conditions-through-four
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5: Methods for Ordinary Differential Equations"
      url: "https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf"
---

## Statement

Under the smoothness and compact-tube hypotheses of [[prop-explicit-rk-order-conditions-through-four]], the forward Euler, explicit midpoint, and classical four-stage tableaus of [[def-euler-midpoint-rk4-tableaus]] have uniform local orders at least one, two, and four, respectively.

For the scalar test equation $y'=\lambda y$, set $z=h\lambda$. The corresponding stability functions, defined by $y^+=R(z)y$, are
$$R_{\mathrm E}(z)=1+z,\qquad R_{\mathrm M}(z)=1+z+\frac{z^2}{2},\qquad R_{\mathrm{RK4}}(z)=1+z+\frac{z^2}{2}+\frac{z^3}{6}+\frac{z^4}{24}.$$
The absolute stability region of a listed method is $\{z\in\mathbb C:|R(z)|\le1\}$. On the negative real axis, the Euler and midpoint regions are exactly $[-2,0]$. No maximal real interval is asserted here for RK4.

## Facts & Assumptions

**Given:** The three tableaus, the local exact-start defect convention, the order-condition proposition, and the scalar test equation.

[F1] [[def-euler-midpoint-rk4-tableaus]]: Euler has $A=0,b=(1),c=0$; midpoint has $A_{21}=1/2,b=(0,1),c=(0,1/2)$; classical RK4 has the displayed four-stage coefficients.

[F2] [[prop-explicit-rk-order-conditions-through-four]]: satisfying the coefficient equations through order $p$ gives uniform local order at least $p$ under the compact-tube hypotheses.

[F3] [[def-one-step-ode-method-local-defect-order-and-stability]]: the exact-start local defect is the method output minus the exact next state, and local order $p$ is a uniform $O(h^{p+1})$ defect.

[F4] [[def-explicit-runge-kutta-tableau-and-stage-map]]: an explicit tableau has a strictly lower-triangular stage matrix, row-sum abscissae, and the stated weighted stage update.

## Proof

1.1 The row sums of each $A$ in [F1] are its displayed vector $c$, so all three are explicit tableaux in the required convention [F4]. [F1, F4, algebra]

1.2 Euler has $\sum b_i=1$. Midpoint has $\sum b_i=1$ and $\sum b_ic_i=1/2$. These are the order-one and order-two equations of [F2]. [F1, F2, algebra]

1.3 For classical RK4 the row-sum vector is $c=(0,1/2,1/2,1)$, and direct row multiplication gives $Ac=(0,0,1/4,1/2)$, $Ac^{[2]}=(0,0,1/8,1/4)$, and $A^2c=(0,0,0,1/4)$. Therefore $\sum b_i=1$, $\sum b_ic_i=1/2$, $\sum b_ic_i^2=1/3$, $\sum b_i(Ac)_i=1/6$, $\sum b_ic_i^3=1/4$, $\sum b_i(Ac^{[2]})_i=1/12$, $\sum b_ic_i(Ac)_i=1/8$, and $\sum b_i(A^2c)_i=1/24$. [F1, F2, algebra]

1.4 Complexify the scalar test equation $y'=\lambda y$. Euler multiplies $y$ by $1+z$. Midpoint has $k_1=\lambda y$ and $k_2=\lambda(y+\frac h2k_1)$, so its output factor is $1+z+\frac12z^2$. For RK4 the successive slopes are $\lambda y$, $\lambda y(1+z/2)$, $\lambda y(1+z/2+z^2/4)$, and $\lambda y(1+z+z^2/2+z^3/4)$; weighting them by $(1/6,1/3,1/3,1/6)$ gives the displayed fourth-degree polynomial. [F1, F4, algebra]

2.1 Apply [F2] to the sums in steps 1.2 and 1.3. It gives the asserted local orders for Euler, midpoint, and classical RK4 under exactly the hypotheses of that proposition. [F2, step 1.2, step 1.3]

2.2 For real $z$, $|1+z|\le1$ is equivalent to $-2\le z\le0$. Also $R_{\mathrm M}(z)=\frac12((z+1)^2+1)>0$, so $|R_{\mathrm M}(z)|\le1$ is equivalent to $(z+1)^2\le1$, again $z\in[-2,0]$. This proves the two stated scalar intervals. [step 1.4, algebra]

3.1 The local-order statements concern exact-start defects; the stability functions concern boundedness on the scalar linear test equation. The finite intervals just computed give the explicit stability restriction $h\rho\le2$ for $y'=-\rho y$ with $\rho>0$; they assert neither nonlinear contractivity nor a matrix bound for nonnormal systems. [F2, F3, step 1.4, step 2.2] ∎