---
id: lem-linear-combinations-of-compact-operators-are-compact
kind: lemma
title: Linear combinations of compact operators are compact
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, lem-finite-rank-operators-are-compact, lem-compositions-with-a-compact-operator-are-compact, thm-finite-products-of-compact-spaces, lem-vector-operations-are-continuous-in-a-normed-space, thm-compactness-under-continuous-maps, thm-compact-subset-is-closed-and-bounded, def-bounded-linear-operator, def-metric-bounded-diameter, def-linear-basis]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1 Theorem 3.1 and Problem 3.1"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2 p.185, Theorem 4.28(i)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Let $X$ and $Y$ be normed spaces over the same scalar field. Then the compact
operators $X\to Y$ ([[def-compact-linear-operator]]) form a linear subspace of
$\mathcal B(X,Y)$ ([[def-bounded-linear-operator]]): the zero operator is
compact, and if $S,T:X\to Y$ are compact and $\lambda$ is a scalar, then $S+T$
and $\lambda S$ are compact.

Consequently, if $K:X\to X$ is a compact endomorphism, if $m\ge1$ is a natural
number and $a_1,\dots,a_m$ are scalars, then the polynomial
$\sum_{k=1}^{m}a_kK^k= a_1K+a_2K^2+\dots+a_mK^m$ is compact.

## Facts & Assumptions

[A1] $S$ is compact exactly when $\overline{S(E)}$ is compact for every bounded $E$; in particular $\overline{S(\overline B_X)}$ is compact for the closed unit ball ([[def-compact-linear-operator]]), and a bounded linear operator such as $K$ satisfies $\|Kw\|\le\|K\|\,\|w\|$ ([[def-bounded-linear-operator]]).

[A2] The zero operator has range $\{0\}$, and the space $\{0\}$ admits the empty ordered basis of finite length, so the zero operator is compact ([[lem-finite-rank-operators-are-compact]], [[def-linear-basis]]).

[A3] If $T$ is compact and $C$ is bounded linear, then $TC$ and $CT$ are compact ([[lem-compositions-with-a-compact-operator-are-compact]]).

[A4] Addition $+:Y\times Y\to Y$ and scalar multiplication are continuous ([[lem-vector-operations-are-continuous-in-a-normed-space]]); a finite product of compact spaces is compact ([[thm-finite-products-of-compact-spaces]]); a continuous image of a compact set is compact ([[thm-compactness-under-continuous-maps]]); a compact subset of a metric space is closed ([[thm-compact-subset-is-closed-and-bounded]]).



## Proof

**Proof technique:** direct.

**Given:** Normed spaces $X,Y$ over one scalar field, compact operators $S,T:X\to Y$, a scalar $\lambda$, and a compact endomorphism $K:X\to X$.

1.1 The zero operator is compact by [A2]. [A2]

1.2 For bounded $E\subseteq X$ the sets $\overline{S(E)}$ and $\overline{T(E)}$ are compact by [A1], so their product is compact in $Y\times Y$ by [A4] and its image under the continuous addition map is compact by [A4]; since $(S+T)(E)\subseteq \overline{S(E)}+\overline{T(E)}$, its closure is a closed subset of that compact image, hence compact, and $S+T$ is compact. [A1, A4, algebra]

1.3 For bounded $E\subseteq X$ the set $\lambda\,\overline{S(E)}$ is the image of the compact set $\overline{S(E)}$ under the continuous map $y\mapsto\lambda y$, hence compact by [A4]; since $(\lambda S)(E)\subseteq\lambda\,\overline{S(E)}$, its closure is compact by [A4], so $\lambda S$ is compact. [A1, A4]

1.4 For every natural $j\ge1$ the power $K^j$ is compact: $K^1=K$ is compact, and if $K^j$ is compact then $K^{j+1}=K\circ K^j$ is compact by [A3]. [A3]

2.1 By [step 1.1], [step 1.2] and [step 1.3] the compact operators $X\to Y$ contain the zero operator and are closed under addition and scalar multiplication, so they form a linear subspace of $\mathcal B(X,Y)$. [step 1.1, step 1.2, step 1.3]

3.1 Let $K$ be compact and $a_1,\dots,a_m$ scalars with $m\ge1$. Each $K^k$ with $1\le k\le m$ is compact by [step 1.4]; by induction on $m$ using [step 2.1], a finite sum of scalar multiples of compact operators is compact, so $\sum_{k=1}^{m}a_kK^k$ is compact. [step 1.4, step 2.1] ∎
