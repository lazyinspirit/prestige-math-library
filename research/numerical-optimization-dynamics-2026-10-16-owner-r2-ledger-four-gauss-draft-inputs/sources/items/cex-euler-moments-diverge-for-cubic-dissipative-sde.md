---
id: cex-euler-moments-diverge-for-cubic-dissipative-sde
kind: counterexample
title: "Explicit Euler moments diverge for a cubic dissipative SDE"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-euler-maruyama-autonomous
  - def-locally-lipschitz-ito-sde-and-maximal-solution
  - thm-superlinear-sde-global-existence-and-moments
  - def-continuous-brownian-ito-process
  - def-d-dimensional-brownian-motion
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
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
    - title: "Martin Hutzenthaler, Arnulf Jentzen and Peter E. Kloeden, Strong and weak divergence in finite time of Euler’s method for stochastic differential equations with non-globally Lipschitz continuous coefficients, introductory example and proof of Theorem 1"
      url: "https://arxiv.org/pdf/0905.0273"
---

## Statement

Fix $T>0$ and consider
$$dX_t=-X_t^3dt+dW_t,\qquad X_0=0.$$
For $N\ge1$, let $h=T/N$ and let $Y_0=0$,
$$Y_{n+1}=Y_n-hY_n^3+(W_{t_{n+1}}-W_{t_n}),\qquad t_n=nh.$$
The exact solution has finite moments of every order at time $T$, but for
every $p\ge1$,
$$\lim_{N\to\infty}\mathbb E|Y_N|^p=+\infty.$$

## Facts & Assumptions

**Given:** AC, a one-dimensional standard Brownian motion, fixed $T>0$, and the SDE and Euler–Maruyama scheme in the Statement.

[F1] Euler–Maruyama has grid update $Y_{n+1}=Y_n+h b(Y_n)+\sigma(Y_n)\Delta W_n$. [[alg-euler-maruyama-autonomous]]

[F2] Brownian increments on disjoint deterministic intervals are independent, and $\Delta W_n$ has law $N(0,h)$ with density $(2\pi h)^{-1/2}e^{-x^2/(2h)}$ and second moment $h$. [[def-d-dimensional-brownian-motion]] [[def-standard-normal-and-normal-laws]]

[F3] If $b$ is one-sided Lipschitz with polynomially bounded derivative, $\sigma$ is globally Lipschitz, and the initial state has all finite moments, the local solution is global and has finite moments of every order on finite horizons. [[thm-superlinear-sde-global-existence-and-moments]] [[def-locally-lipschitz-ito-sde-and-maximal-solution]]

[A1] AC is inherited through the Brownian and SDE interfaces. [[def-axiom-of-choice]]

## Proof

**Given:** The assumptions and supplier statements above.

1.1 The drift $b(x)=-x^3$ satisfies $(x-y)(b(x)-b(y))=-(x-y)^2(x^2+xy+y^2)\le0$, since $x^2+xy+y^2=(x+y/2)^2+3y^2/4\ge0$. Also $|b'(x)|=3x^2\le3(1+|x|^2)$, and $\sigma(x)=1$ is globally Lipschitz. Thus [F3] applies with deterministic $X_0=0$, so $\mathbb E|X_T|^p<\infty$ for every finite $p\ge1$. [F3, given, algebra]

1.2 The algorithm [F1] gives the displayed recursion. For $h\le1/4$, set $$E_N=\{h^{-1}\le\Delta W_0\le2h^{-1}\}\cap \bigcap_{n=1}^{N-1}\{|\Delta W_n|\le1\}.$$ The increments are independent by [F2]. The normal density, bounded below on $[h^{-1},2h^{-1}]$ by its value at $2h^{-1}$, gives $$\mathbb P(h^{-1}\le\Delta W_0\le2h^{-1}) \ge(2\pi)^{-1/2}h^{-3/2}e^{-2h^{-3}}.$$ Also $\mathbb P(|\Delta W_n|>1)\le\mathbb E|\Delta W_n|^2=h$, since $1_{\{|z|>1\}}\le |z|^2$. For $h\le1/4$, $(1-h)^{N-1}\ge e^{-2h(N-1)}\ge e^{-2T}$. Hence $$\mathbb P(E_N)\ge (2\pi)^{-1/2}e^{-2T}h^{-3/2}e^{-2h^{-3}}.$$ [F1, F2, given, algebra]

2.1 On $E_N$, $Y_1=\Delta W_0\ge h^{-1}$. If $|y|\ge h^{-1}$ and $|\delta|\le1$, then $$|y-hy^3+\delta|\ge h|y|^3-|y|-1 =h|y|^3\left(1-\frac1{h|y|^2}-\frac1{h|y|^3}\right) \ge\frac h2|y|^3,$$ because the two fractions are at most $h$ and $h^2$, whose sum is at most $5/16<1/2$. The lower bound is at least $h^{-1}$ when $h\le1/2$ and $|y|\ge h^{-1}$. Induction therefore gives $|Y_n|\ge h^{-1}$ for all $1\le n\le N$ on $E_N$. With $z_n=\sqrt{h/2}|Y_n|$, the same inequality gives $z_{n+1}\ge z_n^3$, while $z_1\ge(2h)^{-1/2}>1$. Thus $$|Y_N|\ge\sqrt{2/h}\,(2h)^{-3^{N-1}/2}\quad\text{on }E_N.$$ [F1, F2, step 1.2, given, algebra]

3.1 Combining steps 1.2 and 2.1 yields $$\mathbb E|Y_N|^p\ge(2\pi)^{-1/2}e^{-2T}h^{-3/2}e^{-2h^{-3}} \left(\sqrt{2/h}\,(2h)^{-3^{N-1}/2}\right)^p.$$ Here $h=T/N$. The positive logarithmic term $\frac p2 3^{N-1}\log((2h)^{-1})$ grows faster than the negative term $2h^{-3}=2N^3/T^3$, so this lower bound tends to $+\infty$. AC is exactly [A1]. [A1, F3, step 1.2, step 2.1, given, algebra] ∎
