---
id: thm-ros2-a-l-stable-exact-jacobian
kind: theorem
title: The exact-J ROS2 tableau is A-stable and L-stable
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-rosenbrock-ros2-step]
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 3–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
    - title: "KPP 2.6 documentation, Numerical methods, ROS-2 coefficient table and stability classification"
      url: "https://kpp.readthedocs.io/en/2.6.0/tech_info/07_numerical_methods.html"
verification:
  precheck: pending
---

## Statement

Apply [[alg-rosenbrock-ros2-step]] to the autonomous scalar test equation $y'=\lambda y$ with exact $W=\lambda$, and set $z=h\lambda$. For a scalar amplification factor $R$, define A-stability by $|R(z)|\le1$ on $\operatorname{Re}z\le0$ and L-stability by A-stability plus $R(z)\to0$ as real $z\to-\infty$. The method's factor is
$$
R(z)=\frac{1+(1-2\gamma)z+(\gamma^2-2\gamma+1/2)z^2}{(1-\gamma z)^2},\qquad\gamma=1+1/\sqrt2,
$$
and it is A-stable and L-stable. These scalar test-equation properties do not assert contractivity for arbitrary nonnormal matrices or for a W-method with $W\ne D_yf$.

## Facts & Assumptions

**Given:** The autonomous scalar equation, exact Jacobian, and $\operatorname{Re}z\le0$ for stability.

[F1] [[alg-rosenbrock-ros2-step]] uses $(1-\gamma z)k_1=\lambda y$, $(1-\gamma z)k_2=\lambda(y+hk_1)-2k_1$, and $y^+=y+\frac h2(3k_1+k_2)$ in this case.

## Proof

1.1 Since $\gamma>0$ and $\operatorname{Re}z\le0$, $1-\gamma z\ne0$. Solving the first equation of [F1] gives $hk_1=zy/(1-\gamma z)$; substituting this in the second equation and then in the update gives the displayed rational expression for $R(z)$. [given, F1, algebra]

1.2 For $\gamma=1+1/\sqrt2$, direct algebra gives $\gamma^2-2\gamma+1/2=0$ and $2\gamma-1=1+\sqrt2=:\alpha$. Hence $R(z)=(1-\alpha z)/(1-\gamma z)^2$. If $x=-\operatorname{Re}z\ge0$ and $s=|z|^2$, then
$$
|1-\gamma z|^4-|1-\alpha z|^2=2x+4\gamma^2x^2+4\gamma^3xs+\gamma^4s^2\ge0,
$$
because $2\gamma^2=\alpha^2$. Thus $|R(z)|\le1$ for $\operatorname{Re}z\le0$. [given, step 1.1, algebra]

1.3 The numerator $1-\alpha z$ has degree one and the denominator $(1-\gamma z)^2$ degree two with $\gamma>0$, so $R(z)\to0$ as real $z\to-\infty$. Together with step 1.2 this is L-stability under the stated definition. [step 1.2, algebra] ∎
