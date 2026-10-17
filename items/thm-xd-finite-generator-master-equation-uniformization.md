---
id: thm-xd-finite-generator-master-equation-uniformization
kind: theorem
title: "Finite master equation and uniformization formula"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-xd-finite-column-generator
  - lem-xd-uniformized-matrix-is-stochastic
  - lem-xd-finite-matrix-exponential-series
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - cor-mean-value-theorem
  - thm-algebra-of-derivatives
justified_by: []
proof_strategy: direct
axiom_use: "No choice principle is used; the proof is finite-dimensional matrix algebra and scalar Poisson normalization."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.2 Theorems 3.1–3.2 and §3.4 equations (3.28)–(3.30), PDF pp. 7–16; row-vector formulas transposed to this page's column convention."
    - title: "Bennett L. Fox and Peter W. Glynn, Computing Poisson Probabilities"
      url: "https://web.stanford.edu/~glynn/papers/1988/FG88.pdf"
      locator: "§1, printed pp. 440–441; Poisson-weighted uniformization for finite transient Markov-chain quantities."
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§II, equation (2.6), printed pp. 044104-2–044104-3; finite-dimensional master equation solution by exp(At)."
---

## Statement

Let $Q$ be an $n\times n$ finite column generator, let $p_0$ be a column probability vector, and let $t\ge0$. The unique differentiable solution of

$$p'(t)=Qp(t),\qquad p(0)=p_0,$$

is $p(t)=e^{tQ}p_0$. If $\nu>0$ and $\nu\ge\max_jr_j$, put $P=I+Q/\nu$; then

$$p(t)=\sum_{k=0}^{\infty}e^{-\nu t}\frac{(\nu t)^k}{k!}P^kp_0.$$

Each term $P^kp_0$ is a probability vector, and the displayed Poisson mixture is a probability vector. If $\nu=0$, then $Q=0$ and $p(t)=p_0$.

## Facts & Assumptions

**Given:** A finite column generator $Q$, a column probability vector $p_0$, time $t\ge0$, and an admissible uniformization rate $\nu\ge0$.

[F1] [[def-xd-finite-column-generator]]: $Q$ has nonnegative off-diagonal entries, zero column sums, and exit rates $r_j=-q_{jj}$.

[F2] [[lem-xd-uniformized-matrix-is-stochastic]]: if $\nu>0$ dominates every exit rate, $P=I+Q/\nu$ is column stochastic; if $\nu=0$, $Q=0$.

[F3] [[def-scalar-poisson-count-law]]: for $\lambda\ge0$, the Poisson mass at $k$ is $e^{-\lambda}\lambda^k/k!$ when $\lambda>0$ and the law is concentrated at zero when $\lambda=0$.

[F4] [[lem-poisson-count-law-normalization-and-moments]]: the finite-parameter Poisson masses sum to one.

[F5] [[lem-xd-finite-matrix-exponential-series]]: $e^{tQ}$ has its locally convergent factorial series, derivative $Qe^{tQ}$, and the commuting-matrix product identity.

[F6] [[cor-mean-value-theorem]]: a real function continuous on a closed interval and differentiable on its interior has endpoint difference equal to its derivative at some interior point times the interval length.

[F7] [[thm-algebra-of-derivatives]]: finite sums and products of differentiable real-valued functions obey the sum and product rules, applied entrywise to finite matrix-vector products.

## Proof


**Proof technique:** direct.

1.1 Suppose $\nu>0$. By [F2], $P$ is nonnegative and column stochastic. If $x$ is a column probability vector, then $Px$ is nonnegative and $\sum_i(Px)_i=\sum_j(\sum_iP_{ij})x_j=\sum_jx_j=1$. Induction gives that $P^kp_0$ is a probability vector for every $k\ge0$. [given, F1, F2, algebra, induction]

1.2 By [F3] and the matrix series of [F5], the uniformization sum equals $e^{-\nu t}e^{\nu tP}p_0$. The power series gives $e^{-\nu tI}=e^{-\nu t}I$; since $-\nu tI$ commutes with $\nu tP$, [F5] gives $e^{-\nu tI}e^{\nu tP}=e^{\nu t(P-I)}=e^{tQ}$ using $Q=\nu(P-I)$. This proves the displayed identity. [F2, F3, F5, algebra]

1.3 By [F5], $p(t)=e^{tQ}p_0$ has derivative $Qe^{tQ}p_0=Qp(t)$ and initial value $p_0$. [given, F5, algebra]

1.4 Let $u$ be any other differentiable solution with the same initial vector and put $z(t)=e^{-tQ}u(t)$. The product rule [F7], the equation $u'=Qu$, and commutation of $Q$ with $e^{-tQ}$ from [F5] give $z'(t)=0$. If $t>0$, [F6] applied to each coordinate of $z$ on $[0,t]$ gives $z(t)=z(0)=p_0$; if $t=0$ this follows from the initial value directly. Multiplying by $e^{tQ}$ and using [F5] gives $u(t)=e^{tQ}p_0$. Thus the solution is unique. [given, F5, F6, F7, algebra]

2.1 The weights in [F3] at parameter $\nu t$ sum to one by [F4]. Hence the nonnegative weighted sum of the probability vectors from step 1.1 is itself a probability vector. [given, F3, F4, step 1.1, algebra]

3.1 If $\nu=0$, [F2] gives $Q=0$. The constant function $p(t)=p_0$ solves the equation. The uniqueness argument in step 1.4 applied with $Q=0$ shows that every solution with this initial value equals it. This proves the zero-rate case. [given, F2, step 1.4, algebra] ∎
