---
id: thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes
kind: theorem
title: "Uniform dyadic Brownian quadratic variation process"
status: draft
origin: pipeline
deps: [def-quadratic-variation-along-a-partition-sequence, def-brownian-motion, lem-gaussian-even-moment-bound-for-brownian-increments, thm-kolmogorov-maximal-inequality, cor-first-borel-cantelli-lemma-for-events, thm-heine-borel-characterisation-r, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.8"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Let $B$ be a standard Brownian motion [[def-brownian-motion]] and fix $T>0$.
For $n\ge1$ let $\pi_n$ be the dyadic partition of $[0,T]$ with points
$kT/2^n$, $k=0,\dots,2^n$. Then almost surely the partial quadratic-variation
processes $t\mapsto[B]^{\pi_n}_t$ converge to $t$ uniformly on $[0,T]$, for the
step convention and for the partial-increment convention of
[[def-quadratic-variation-along-a-partition-sequence]] alike:
$$\sup_{0\le t\le T}\bigl|[B]^{\pi_n}_t-t\bigr|\longrightarrow0 .$$

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, $T>0$, the dyadic partitions $\pi_n$ with mesh $h=T/2^n$, and grid points $t_j=jT/2^n$.

[F1] The increments of $B$ over disjoint intervals are independent with laws $N(0,h)$ for interval length $h$, and one probability-one event carries all continuous paths. [[def-brownian-motion]]

[F2] For an increment $\Delta B$ of length $h$, $E(\Delta B)^2=h$ and $E(\Delta B)^4=3h^2$. [[lem-gaussian-even-moment-bound-for-brownian-increments]]

[F3] Kolmogorov's maximal inequality: for independent centered square-integrable $X_1,\dots,X_n$ with partial sums $S_k$, $P(\max_{1\le k\le n}|S_k|\ge\lambda)\le\operatorname{Var}(S_n)/\lambda^2$. [[thm-kolmogorov-maximal-inequality]]

[F4] First Borel-Cantelli: if $\sum_nP(G_n)<\infty$ then almost surely only finitely many $G_n$ occur. [[cor-first-borel-cantelli-lemma-for-events]]

[F5] The two conventions of $[B]^{\pi_n}_t$ agree at partition points and differ by the squared terminal increment $(B_t-B_{s^{(n)}_{k(t)}})^2$; the mesh of $\pi_n$ is $T/2^n\to0$. [[def-quadratic-variation-along-a-partition-sequence]]

[F6] A subset of $\mathbb R$ is compact if and only if it is closed and bounded; hence $[0,T]$ is compact. [[thm-heine-borel-characterisation-r]]

[F7] AC is the ambient assumption of the Brownian and normal-law interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Put $\Delta_j:=B_{t_j}-B_{t_{j-1}}$, $X_j:=\Delta_j^2-h$ and $S_j:=\sum_{i=1}^jX_i$ for $j=1,\dots,2^n$; at partition points the step convention reads $[B]^{\pi_n,\mathrm{step}}_{t_j}=S_j+t_j$, and the two conventions agree there by [F5]. [given, F5]

2.1 By [F1] and [F2], $EX_j=h-h=0$ and $\operatorname{Var}(X_j)=3h^2-h^2=2h^2$; the $X_j$ are independent because they are functions of disjoint increments, so $\operatorname{Var}(S_{2^n})=2^n\cdot2h^2=2T^2/2^n$, and [F3] gives $P(\max_{1\le j\le2^n}|S_j|\ge\varepsilon)\le2T^2/(2^n\varepsilon^2)$ for every $\varepsilon>0$. [step 1.1, F1, F2, F3]

3.1 The bound of [step 2.1] is summable in $n$ for each fixed $\varepsilon>0$; applying [F4] to the events $\{\max_j|S_j|\ge1/m\}$ for $m\ge1$ and intersecting the resulting probability-one events over $m$ yields: almost surely, for every rational $\varepsilon>0$ one has $\max_{1\le j\le2^n}|S_j|<\varepsilon$ for all sufficiently large $n$, hence $\max_j\bigl|[B]^{\pi_n,\mathrm{step}}_{t_j}-t_j\bigr|\to0$. [step 2.1, F4]

4.1 For $t\in[t_j,t_{j+1})$ the step convention satisfies $\bigl|[B]^{\pi_n,\mathrm{step}}_t-t\bigr|\le|S_j|+(t-t_j)\le\max_j|S_j|+h$, and the same bound with $j=2^n$ holds at $t=T$; since $h=T/2^n\to0$, [step 3.1] gives almost-sure uniform convergence to $t$ for the step convention on $[0,T]$. [step 3.1, F5]

5.1 For the partial-increment convention, [F5] gives $\bigl|[B]^{\pi_n,\mathrm{part}}_t-[B]^{\pi_n,\mathrm{step}}_t\bigr|=(B_t-B_{t_j})^2\le\omega(T/2^n)^2$, where $\omega(\delta):=\sup\{|B_u-B_v|:u,v\in[0,T],\ |u-v|\le\delta\}$; by [F6] and the finite-subcover argument applied to the continuous path on the compact interval $[0,T]$, $\omega(\delta)\to0$ as $\delta\downarrow0$, so the two conventions have the same uniform limit $t$. [step 4.1, F5, F6]

6.1 The boundary cases are covered: $T>0$ so $h>0$ and the sums have at least two terms; $t=0$ is a partition point with $[B]^{\pi_n}_0=0$ for both conventions; $t=T$ is a partition point where the conventions coincide by [F5]; the mesh tends to zero and the partitions refine, so the named sequence is a partition sequence in the sense of [F5]; and AC enters only through [F7]. [step 4.1, step 5.1, F5, F7, given] ∎

## Source notes

Lawler, Section 2.8, obtains the uniform statement by controlling the maximal partial sum at the grid points and observing that the path increments are small between them. The proof above uses Kolmogorov's maximal inequality directly on the centered squared increments $X_j=\Delta_j^2-h$, whose variance is $2h^2$ by the fourth Gaussian moment, and then handles the two partial-sum conventions with the difference bound recorded in the definition.
