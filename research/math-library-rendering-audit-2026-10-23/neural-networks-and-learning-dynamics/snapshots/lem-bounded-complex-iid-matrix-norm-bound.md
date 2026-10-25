---
id: lem-bounded-complex-iid-matrix-norm-bound
kind: lemma
title: "Operator-norm bound for bounded complex iid matrices"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-identically-distributed-and-iid-random-variables
  - cor-markov-inequality-for-random-variables
  - cor-first-borel-cantelli-lemma-for-events
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Z. D. Bai and J. W. Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed."
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---
## Statement

On a common probability space, for each positive integer $n$, let $N_n$ be a positive integer with $n/N_n\to c\in(0,\infty)$, and let $X_n\in\mathbb C^{n\times N_n}$ have independent identically distributed entries $\xi$ satisfying $\mathbb E\xi=0$ and $|\xi|\le K$ almost surely for a fixed $K<\infty$. Then there is a finite constant $C=C(K,c)$ such that, almost surely, $\|X_n\|_{\mathrm{op}}\le C\sqrt{N_n}$ for all sufficiently large $n$.

## Statement references

Bai and Silverstein, Chapter 3, full book PDF ([source](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Facts & Assumptions

**Given:** The matrix sequence on its common probability space and its bounded centered iid entry law from the Statement.

[F1] The entries in each matrix are mutually independent and have the common law specified in the Statement ([[def-identically-distributed-and-iid-random-variables]]).

[F2] If $\sum_n\mathbb P(E_n)<\infty$, then almost surely only finitely many $E_n$ occur ([[cor-first-borel-cantelli-lemma-for-events]]).

[F3] For an event $E$ and $a>0$, $\mathbb P(E)\le \mathbb E[Y]/a$ whenever $Y\ge a\mathbf1_E$ ([[cor-markov-inequality-for-random-variables]]).

[F4] The operator norm is the maximum of $\|Av\|_2$ over unit vectors in the domain ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 If $K=0$, every entry is zero almost surely and the conclusion is immediate. Assume $K>0$. Regard the complex unit sphere in $\mathbb C^d$ as the real unit sphere in $\mathbb R^{2d}$. For $0<\varepsilon<1/2$, a maximal $\varepsilon$-separated subset is an $\varepsilon$-net; the disjoint radius-$\varepsilon/2$ balls about its points lie in the radius-$(1+\varepsilon/2)$ ball, so volume comparison bounds its cardinality by $(1+2/\varepsilon)^{2d}$. If $\mathcal N_1,\mathcal N_2$ are such nets for the two unit spheres and $A$ is an $n\times N$ complex matrix, approximating unit vectors $u,v$ attaining $\|A\|_{\mathrm{op}}=|u^*Av|$ gives $$\|A\|_{\mathrm{op}}\le (1-2\varepsilon)^{-1}\max_{u_0\in\mathcal N_1,\ v_0\in\mathcal N_2}|u_0^*Av_0|.$$ Indeed, the approximation error is at most $\|u-u_0\|\|A\|+\|v-v_0\|\|A\|\le2\varepsilon\|A\|$. [given, F4, algebra]

2.1 Fix deterministic unit vectors $u\in\mathbb C^n$ and $v\in\mathbb C^N$. Then $u^*X_nv=\sum_{i,j}\overline u_i v_j\xi_{ij}$ is a sum of independent centered complex variables. Each real or imaginary summand is bounded in absolute value by $K|u_i||v_j|$. If a centered real variable $Y$ is bounded by $b$, convexity of the exponential on $[-b,b]$ and $\mathbb EY=0$ give $\mathbb E e^{\lambda Y}\le\cosh(\lambda b)\le e^{\lambda^2b^2/2}$. Independence, exponential Markov inequality [F3], and optimization in $\lambda$ therefore give $$\mathbb P\{|u^*X_nv|>t\}\le4\exp\!\left(-\frac{t^2}{4K^2}\right),$$ because $\sum_{i,j}K^2|u_i|^2|v_j|^2=K^2$. [given, F1, F3, step 1.1, algebra]

3.1 Choose $\varepsilon=1/8$ in step 1.1. The product of the two net cardinalities is at most $17^{2(n+N_n)}$. Taking $t=L\sqrt{n+N_n}$ with $L$ large enough that $L^2/(4K^2)>2\log17+1$, the union bound and step 2.1 make the probability that the net maximum exceeds $t$ at most $4e^{-(n+N_n)}$. These probabilities are summable in $n$ because $N_n/n\to1/c>0$. Since all $X_n$ are defined on the common probability space in the Statement, [F2] applies to this sequence of events and the net maximum is at most $L\sqrt{n+N_n}$ eventually almost surely. The net inequality in step 1.1 and boundedness of $n/N_n$ then yield $\|X_n\|_{\mathrm{op}}\le C\sqrt{N_n}$ eventually, with deterministic $C=C(K,c)$. [given, F2, step 1.1, step 2.1, algebra] ∎

## Source notes

The proof is the explicit finite-net and exponential-moment argument above; the sources record the standard norm-estimation context and are not imported as proof premises.
