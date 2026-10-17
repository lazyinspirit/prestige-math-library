---
id: thm-rosenbrock-euler-scalar-a-and-l-stability
title: "The Rosenbrock–Euler scalar stability function is A-stable exactly for gamma at least one half"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-rosenbrock-euler-step-map
  - alg-rosenbrock-euler-step
  - def-scalar-rk-a-and-l-stability
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.3 Linear Stability Theory"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.3, Example 2.11, printed pp. 33–34: backward-Euler scalar stability function"
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44: scalar stability functions for linearly implicit stages"
---

## Statement

For the exact-Jacobian one-stage method with parameter $\gamma>0$, apply the step to $y'=\lambda y$ with $z=h\lambda$. Its scalar stability function is
$$R_\gamma(z)=1+\frac{z}{1-\gamma z}=\frac{1+(1-\gamma)z}{1-\gamma z}.$$
It has no pole in $\operatorname{Re}z\le0$ and satisfies $|R_\gamma(z)|\le1$ throughout that half-plane if and only if $\gamma\ge\tfrac12$. Among these parameters, it is L-stable if and only if $\gamma=1$. In particular, the named Rosenbrock–Euler case $\gamma=1$ has the backward-Euler factor $R(z)=(1-z)^{-1}$.

## Facts & Assumptions

**Given:** $\gamma>0$, the scalar test equation, and $z=h\lambda$.

[F1] [[def-rosenbrock-euler-step-map]]: the stage equation is $(1-\gamma h\lambda)k=\lambda y$ and the update is $y+hk$.

[F2] [[alg-rosenbrock-euler-step]]: when the shifted solve succeeds, its update is the one-stage formula of [F1].

[F3] [[def-scalar-rk-a-and-l-stability]]: A-stability means no pole and modulus at most one on the closed left half-plane; L-stability additionally requires the limit to vanish at infinity there.

[F4] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: each complex $z$ has coordinates $x+iy$ with $|z|^2=x^2+y^2$.

[F5] [[lem-complex-conjugation-and-modulus-laws]]: the complex modulus is nonnegative and multiplicative and satisfies the triangle inequality.

## Proof

**Given:** The data in the Statement.

1.1 For $z\ne1/\gamma$, [F1] gives $hk=zy/(1-\gamma z)$, so the amplification factor is the stated $R_\gamma(z)$. [given, F1, F2, algebra]

2.1 Write $z=x+iy$ with $x\le0$. The denominator $1-\gamma z$ has real part $1-\gamma x\ge1$, so it has no zero there. Using [F4] and [F5], direct expansion gives $|1-\gamma z|^2-|1+(1-\gamma)z|^2=-2x+(2\gamma-1)|z|^2$. [given, F4, F5, step 1.1, algebra]

3.1 If $\gamma\ge1/2$, both terms on the right of step 2.1 are nonnegative; hence $|R_\gamma(z)|\le1$ for all $x\le0$, and [F3] gives A-stability. If $0<\gamma<1/2$, choose real $z=-r$ with $r>2/(1-2\gamma)$. Then the right side is $2r-(1-2\gamma)r^2<0$, so $|R_\gamma(-r)|>1$ and A-stability fails. [step 2.1, F3, algebra]

4.1 Along $z=-r$ as $r\to\infty$, $|R_\gamma(-r)|\to|1-\gamma|/\gamma$. This is zero exactly when $\gamma=1$. For $\gamma=1$, $R_1(z)=1/(1-z)$ and $|R_1(z)|\le1$ on the closed left half-plane by step 3.1, while $R_1(z)\to0$ as $|z|\to\infty$ there. Thus [F3] gives the claimed L-stability characterization and the backward-Euler equality. [step 3.1, F3, algebra] ∎
