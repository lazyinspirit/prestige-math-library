---
id: ex-parareal-dissipative-scalar-heat-mode
kind: example
title: "A dissipative scalar heat mode with Parareal correction"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-parareal-propagator-pair
  - alg-parareal-correction-sweeps
  - def-euler-midpoint-rk4-tableaus
  - def-backward-euler-step-equation
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 2: Methods Based on Multiple Shooting"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/07/cbms-pint-day-2.pdf"
      locator: "Slides 23–29, fine/coarse propagation and Parareal correction."
    - title: "R. D. Falgout, S. Friedhoff, Tz. V. Kolev, S. P. MacLachlan, and J. B. Schroder, Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "§2.1–2.2, PDF pp. 3–4: time-step maps and Parareal's fine/coarse correction."
---

## Example

For the dissipative scalar mode $\dot y=-y$, take macro interval length $H=1/2$, two forward-Euler microsteps of length $h=1/4$ for the fine propagator, and one backward-Euler step of length $H$ for the coarse propagator. Starting from $x_0=1$, after the first Parareal correction the node at $t=1$ is $11/36$, while the sequential fine value is $81/256$. The coarse initial value there is $4/9$, so this correction reduces the error relative to the sequential fine trajectory from $295/2304$ to $25/2304$. This finite comparison makes no error claim about the exact ODE solution.

## Facts & Assumptions

**Given:** Forward Euler and backward Euler on the stated macro grid, with the Parareal recurrence.

[F1] [[def-euler-midpoint-rk4-tableaus]]: Forward Euler has $s=1$, $A=(0)$, $b=(1)$, and $c=(0)$.

[F2] [[def-backward-euler-step-equation]]: a backward-Euler endpoint satisfies $y_{n+1}=y_n+h_n f(t_n+h_n,y_{n+1})$.

[F3] [[alg-parareal-correction-sweeps]]: the correction is $U_{n+1}^{k+1}=G_n(U_n^{k+1})+F_n(U_n^k)-G_n(U_n^k)$.

[A1] $N=3$, $x_0=1$, $H=1/2$, and the fine map uses two forward-Euler microsteps of length $1/4$ for $\dot y=-y$.

## Verification

1.1 By [F1], one fine microstep maps $x$ to $x-\frac14x=\frac34x$, so the two-step fine macro map is $F(x)=\frac9{16}x$. By [F2], the coarse backward-Euler equation is $z=x-\frac12z$, whose unique solution is $G(x)=\frac23x$. [given, F1, F2, A1, algebra]

2.1 The sequential fine values are $x_1=\frac9{16}$ and $x_2=\frac{81}{256}$, while coarse initialization gives $U_1^0=\frac23$ and $U_2^0=\frac49$. [given, step 1.1, algebra]

2.2 The first correction has $U_1^1=F(1)=\frac9{16}$. Using [F3], $U_2^1=G(\frac9{16})+(F-G)(\frac23)=\frac38+(\frac9{16}-\frac23)\frac23=\frac{11}{36}$. [given, F3, step 1.1, algebra]

3.1 Direct subtraction gives $|U_2^0-x_2|=|\frac49-\frac{81}{256}|=\frac{295}{2304}$ and $|U_2^1-x_2|=|\frac{11}{36}-\frac{81}{256}|=\frac{25}{2304}$. Thus the error decreases for these parameters; the calculation does not assert monotone decrease for other propagators. [given, step 2.1, step 2.2, algebra] ∎

