---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
id: ex-euler-maruyama-additive-noise-strong-error
kind: example
title: "Additive-noise Ornstein–Uhlenbeck Euler strong error"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - thm-euler-maruyama-strong-rate-for-square-integrable-initial-data
  - def-euler-maruyama-step-process-and-continuous-interpolation
  - thm-ito-formula-one-dimensional
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - def-ito-integral-of-an-elementary-predictable-process
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Work on a complete filtered probability space whose filtration is
right-continuous and contains all $P$-null subsets of $\mathcal F$ in
$\mathcal F_0$. Let $W$ be an adapted standard one-dimensional Brownian motion
whose increments after time $s$ are independent of $\mathcal F_s$. On
$[0,1]$, solve the additive-noise Ornstein–Uhlenbeck equation
$$dX_t=-X_t\,dt+dW_t,\qquad X_0=0.$$
For $h=1/N\le1/2$, couple the Euler recursion to the same Brownian path. The
finite-$L^2$ theorem gives the general strong supremum bound
$\mathbb E\sup_{t\le1}|X_t-Y_t^h|^2=O(h)$; in this additive-noise example the
terminal root-mean-square error is in fact $O(h)$.

## Facts & Assumptions

**Given:** AC; the complete usual filtered Brownian setup above; $T=1$; the $\mathcal F_0$-measurable initial value $X_0=0$; $h=1/N\le1/2$; and the SDE and Euler recursion displayed in the Example.

[F1] The Euler recursion is $Y_{k+1}=Y_k+b(t_k,Y_k)h+\sigma(t_k,Y_k)\Delta W_k$, and the continuous interpolation agrees with the recursion at grid points. [[def-euler-maruyama-step-process-and-continuous-interpolation]]

[F2] For a one-dimensional continuous Brownian Itô process and $F\in C^{1,2}$, Itô's formula has drift $F_t+bF_x+\frac12\sigma^2F_{xx}$ and stochastic term $\sigma F_x\,dW$. [[thm-ito-formula-one-dimensional]]

[F3] For a deterministic finite-energy integrand $q$, $\mathbb E(\int_0^Tq_s\,dW_s)^2=\int_0^Tq_s^2ds$. [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F4] For a deterministic step integrand, its Itô integral is the corresponding finite sum of Brownian increments. [[def-ito-integral-of-an-elementary-predictable-process]]

[F5] Under global state-Lipschitz, linear-growth, half-Hölder time, and square-integrable initial-value assumptions, the Euler strong supremum error satisfies $\mathbb E\sup_{t\le T}|X_t-Y_t^h|^2\le Ch$. [[thm-euler-maruyama-strong-rate-for-square-integrable-initial-data]]

[A1] AC is included because the Brownian, Itô-formula and Itô-integral suppliers in [F2]–[F4] assume it. [[def-axiom-of-choice]]

## Verification



**Given:** AC; the complete usual filtered Brownian setup above; $T=1$; the $\mathcal F_0$-measurable initial value $X_0=0$; $h=1/N\le1/2$; and the SDE and Euler recursion displayed in the Example.

[F1] The Euler recursion is $Y_{k+1}=Y_k+b(t_k,Y_k)h+\sigma(t_k,Y_k)\Delta W_k$, and the continuous interpolation agrees with the recursion at grid points. [[def-euler-maruyama-step-process-and-continuous-interpolation]]

[F2] For a one-dimensional continuous Brownian Itô process and $F\in C^{1,2}$, Itô's formula has drift $F_t+bF_x+\frac12\sigma^2F_{xx}$ and stochastic term $\sigma F_x\,dW$. [[thm-ito-formula-one-dimensional]]

[F3] For a deterministic finite-energy integrand $q$, $\mathbb E(\int_0^Tq_s\,dW_s)^2=\int_0^Tq_s^2ds$. [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F4] For a deterministic step integrand, its Itô integral is the corresponding finite sum of Brownian increments. [[def-ito-integral-of-an-elementary-predictable-process]]

[F5] Under global state-Lipschitz, linear-growth, half-Hölder time, and square-integrable initial-value assumptions, the Euler strong supremum error satisfies $\mathbb E\sup_{t\le T}|X_t-Y_t^h|^2\le Ch$. [[thm-euler-maruyama-strong-rate-for-square-integrable-initial-data]]

[A1] AC is included because the Brownian, Itô-formula and Itô-integral suppliers in [F2]–[F4] assume it. [[def-axiom-of-choice]]




1.1 Here $b(x)=-x$ and $\sigma(x)=1$. Thus $|b(x)-b(y)|=|x-y|$, $|b(x)|^2+|\sigma(x)|^2=x^2+1$, and both coefficients are time independent. The initial value is square-integrable and independent of future Brownian increments, so the hypotheses of [F5] hold. [F5, given, algebra]

1.2 Apply [F2] to $F(t,x)=e^t x$ along $X$. Since $F_t+(-x)F_x+\frac12(1)^2F_{xx}=0$ and $F_x=e^t$, it follows that $e^tX_t=\int_0^t e^s dW_s$. At $t=1$ this gives $X_1=\int_0^1e^{-(1-s)}dW_s.$ [F2, given, algebra]

1.3 The recursion is $Y_{k+1}=(1-h)Y_k+\Delta W_k$. Induction gives $Y_N=\sum_{k=0}^{N-1}(1-h)^{N-1-k}\Delta W_k =\int_0^1(1-h)^{N-1-\lfloor s/h\rfloor}dW_s,$ where the second equality is [F4] on the grid partition. [F1, F4, given, algebra]

2.1 By [F3] applied to the difference of the deterministic integrands, $\mathbb E|X_1-Y_N|^2 =\int_0^1\left|e^{-(1-s)}-(1-h)^{N-1-\lfloor s/h\rfloor}\right|^2ds.$ For $s\in[kh,(k+1)h]$, set $j=N-1-k$ and $u=s-kh$. Then $(1-s)=jh+(h-u)$, so $|e^{-(1-s)}-e^{-jh}|\le h$. Also $0\le e^{-jh}-(1-h)^j =e^{-jh}\left(1-e^{-j(-\log(1-h)-h)}\right) \le j(-\log(1-h)-h).$ For $h\le1/2$, the integral formula gives $0\le-\log(1-h)-h=\int_0^h\frac{x}{1-x}dx\le h^2$; since $j<1/h$, the last bound is at most $h$. Hence the integrand difference is at most $2h$ on every grid interval. [F3, step 1.2, step 1.3, algebra]

3.1 Integrating the bound of step 2.1 over $[0,1]$ gives $\mathbb E|X_1-Y_N|^2\le4h^2$, hence $(\mathbb E|X_1-Y_N|^2)^{1/2}\le2h$. This is a special additive-noise terminal rate; it is stronger than the general $O(h^{1/2})$ root-mean-square guarantee in [F5]. AC is inherited through [A1]. [A1, F5, step 2.1, algebra] ∎

