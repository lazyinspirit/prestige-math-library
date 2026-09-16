---
id: thm-brownian-quadratic-variation-along-dyadic-partitions
kind: theorem
title: "Brownian quadratic variation on dyadic partitions"
status: draft
origin: pipeline
deps: [def-quadratic-variation-along-a-partition-sequence, def-brownian-motion, lem-gaussian-even-moment-bound-for-brownian-increments, cor-chebyshev-inequality-for-random-variables, cor-first-borel-cantelli-lemma-for-events, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Theorems 2.8.1-2.8.2"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Let $B$ be a standard Brownian motion [[def-brownian-motion]] and fix $T>0$.
For $n\ge1$ let $\pi_n$ be the dyadic partition of $[0,T]$ with points
$kT/2^n$, $k=0,\dots,2^n$, and let
$$Q_n:=\sum_{k=1}^{2^n}\bigl(B_{kT/2^n}-B_{(k-1)T/2^n}\bigr)^2=[B]^{\pi_n}_T$$
in the notation of [[def-quadratic-variation-along-a-partition-sequence]].
Then $Q_n\to T$ in $L^2$ and almost surely as $n\to\infty$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, $T>0$, and the dyadic partitions $\pi_n$ above with $h=T/2^n$.

[F1] The increments of $B$ over disjoint intervals are independent with laws $N(0,h)$ for interval length $h$. [[def-brownian-motion]]

[F2] If $X_t-X_s$ has law $N(0,|t-s|)$ then $E|X_t-X_s|^{2m}=c_m|t-s|^m$ with $c_m=(2m-1)!!$; in particular $E(\Delta B)^2=h$ and $E(\Delta B)^4=3h^2$ for an increment of length $h$. [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F3] Chebyshev: $P(|X-EX|\ge\lambda)\le\operatorname{Var}(X)/\lambda^2$ for a square-integrable real $X$ and $\lambda>0$. [[cor-chebyshev-inequality-for-random-variables]]

[F4] First Borel-Cantelli: if $\sum_nP(G_n)<\infty$ then almost surely only finitely many $G_n$ occur. [[cor-first-borel-cantelli-lemma-for-events]]

[F5] $[B]^{\pi_n}_T$ denotes the terminal quadratic sum along the named partition sequence $\pi_n$, whose mesh $T/2^n$ tends to zero. [[def-quadratic-variation-along-a-partition-sequence]]

[F6] AC is the ambient assumption of the Brownian and normal-law interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Writing $\Delta_k:=B_{kh}-B_{(k-1)h}$ for $k=1,\dots,2^n$, [F1] and [F2] give $E\Delta_k^2=h$ and $E\Delta_k^4=3h^2$, so the centered variables $Y_k:=\Delta_k^2-h$ satisfy $EY_k=0$ and $\operatorname{Var}(Y_k)=E\Delta_k^4-(E\Delta_k^2)^2=3h^2-h^2=2h^2$. [F1, F2]

2.1 $Q_n-T=\sum_{k=1}^{2^n}Y_k$ has mean $0$, and [F1] makes the $Y_k$ independent, so $\operatorname{Var}(Q_n-T)=\sum_k\operatorname{Var}(Y_k)=2^n\cdot2(T/2^n)^2=2T^2/2^n$; hence $E(Q_n-T)^2=2T^2/2^n\to0$ and $Q_n\to T$ in $L^2$. [step 1.1, F1]

3.1 For every $\varepsilon>0$, [F3] gives $P(|Q_n-T|\ge\varepsilon)\le\operatorname{Var}(Q_n-T)/\varepsilon^2=2T^2/(2^n\varepsilon^2)$, which is summable in $n$; applying [F4] to $G_n=\{|Q_n-T|\ge\tfrac1m\}$ for each $m\ge1$ and intersecting the resulting probability-one events over $m$ shows that almost surely $Q_n\to T$. [step 2.1, F3, F4]

4.1 The degeneracies are covered: $T>0$ is required, so $h>0$ and the sums are nonempty with $2^n\ge2$ terms; the partition sequence is the one named in [F5], with mesh $T/2^n\to0$ and with consecutive refinements $\pi_n\subseteq\pi_{n+1}$, so no ambiguity of convention arises at $t=T$, where the step and partial-increment conventions coincide by [[def-quadratic-variation-along-a-partition-sequence]]; and AC enters only through [F6]. [step 2.1, step 3.1, F5, F6, given] ∎

## Source notes

Lawler, Theorems 2.8.1 and 2.8.2, proves the mean-square convergence of the dyadic quadratic sums and their almost-sure convergence along meshes whose sizes are summable (here $T/2^n$). The computation above is the direct one: the second and fourth Gaussian moments of the increments give $\operatorname{Var}(Q_n-T)=2T^2/2^n$, Chebyshev gives summable error probabilities, and Borel-Cantelli upgrades to almost-sure convergence.
