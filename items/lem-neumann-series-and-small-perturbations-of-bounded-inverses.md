---
id: lem-neumann-series-and-small-perturbations-of-bounded-inverses
kind: lemma
title: Neumann series and small perturbations of bounded inverses
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-banach-space, def-bounded-linear-operator, def-operator-norm, def-space-of-bounded-linear-operators, thm-bounded-operator-space-is-banach, thm-banach-series-criterion, lem-composition-operator-norm-inequality, thm-geometric-series, lem-vector-operations-are-continuous-in-a-normed-space, lem-reverse-triangle-inequality-in-a-normed-space, def-metric-convergence]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.1 p.163, Lemma 6.1 and p.164, Corollary 6.2"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.1, Neumann series for bounded inverses"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Let $X$ and $Y$ be Banach spaces over the same scalar field
([[def-banach-space]]).

1. If $R\in\mathcal B(X)$ satisfies $\|R\|<1$
   ([[def-bounded-linear-operator]], [[def-operator-norm]]), then $I-R$ is
   invertible with inverse the operator-norm limit of the partial sums
   $\sum_{n<N}R^n$, the norm limit being taken in
   $\mathcal B(X)$ ([[def-space-of-bounded-linear-operators]]), and
   $$\Bigl\|\sum_{n=0}^{\infty}R^n\Bigr\|\le\frac{1}{1-\|R\|}.$$
2. If $A\in\mathcal B(X,Y)$ is invertible with $A^{-1}\in\mathcal B(Y,X)$ and
   $E\in\mathcal B(X,Y)$ satisfies $\|A^{-1}E\|<1$, then $A+E$ is invertible
   with $(A+E)^{-1}=\bigl(I+A^{-1}E\bigr)^{-1}A^{-1}\in\mathcal B(Y,X)$.

## Facts & Assumptions

[A1] $\|R^n\|\le\|R\|^n$ for every $n$, by induction from $\|ST\|\le\|S\|\,\|T\|$ ([[lem-composition-operator-norm-inequality]], [[def-operator-norm]]).

[A2] For $|r|<1$ the scalar series $\sum r^k$ converges with sum $1/(1-r)$ ([[thm-geometric-series]]); in particular $\|R\|<1$ makes $\sum_n\|R\|^n$ converge to the real number $1/(1-\|R\|)$.

[A3] If $Y$ is Banach then $\mathcal B(X,Y)$ is Banach for the operator norm ([[thm-bounded-operator-space-is-banach]], [[def-space-of-bounded-linear-operators]], [[def-banach-space]]); a series in a Banach space that converges absolutely converges ([[thm-banach-series-criterion]]).

[A4] Addition and scalar multiplication are continuous on a normed space ([[lem-vector-operations-are-continuous-in-a-normed-space]]), and the reverse triangle inequality makes every norm continuous with respect to norm convergence ([[lem-reverse-triangle-inequality-in-a-normed-space]], [[def-metric-convergence]]).

## Proof

**Proof technique:** direct.

**Given:** Banach spaces $X,Y$ over one scalar field, $R\in\mathcal B(X)$ with $\|R\|<1$, and the partial sums $S_N:=\sum_{n<N}R^n$.

1.1 For every $n$ one has $\|R^n\|\le\|R\|^n$, and $\sum_n\|R\|^n$ converges to $1/(1-\|R\|)$. [A1, A2]

2.1 The space $\mathcal B(X)$ is Banach, so the absolutely convergent series $\sum_nR^n$ converges in operator norm to some $S\in\mathcal B(X)$. For every $N$, the finite triangle inequality and [step 1.1] give
$$\|S_N\|\le\sum_{n<N}\|R^n\|\le\sum_{n=0}^{\infty}\|R\|^n=\frac1{1-\|R\|}.$$
Since $S_N\to S$ and the norm is continuous, taking the limit yields $\|S\|\le1/(1-\|R\|)$. [step 1.1, A2, A3, A4]

2.2 For every $N$ one has $(I-R)S_N=S_N(I-R)=I-R^N$, and $\|R^N\|\le\|R\|^N\to0$, so $R^N\to0$. [step 1.1, A1, algebra]

3.1 From [step 2.1] and [step 2.2], $(I-R)S=\lim_N(I-R)S_N=\lim_N(I-R^N)=I$ and likewise $S(I-R)=I$: the first limit holds because $\|(I-R)(S-S_N)\|\le(1+\|R\|)\|S-S_N\|\to0$. [step 2.1, step 2.2, A1, A4]

4.1 Hence $I-R$ is invertible with inverse $S=\sum_{n\ge0}R^n$ and $\|(I-R)^{-1}\|\le1/(1-\|R\|)$, which is claim 1. [step 2.1, step 3.1]

4.2 For the perturbation, $A+E=A\bigl(I+A^{-1}E\bigr)$ and $\|{-A^{-1}E}\|=\|A^{-1}E\|<1$, so by [step 3.1] applied to $R:=-A^{-1}E\in\mathcal B(X)$ the operator $I+A^{-1}E$ is invertible with bounded inverse, and therefore $(A+E)^{-1}=(I+A^{-1}E)^{-1}A^{-1}\in\mathcal B(Y,X)$, which is claim 2. [step 3.1, algebra]

5.1 Claims 1 and 2 are exactly the two parts of the statement. [step 4.1, step 4.2] ∎
