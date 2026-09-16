---
id: cex-compactness-is-not-preserved-by-strong-operator-limits
kind: counterexample
title: Compactness is not preserved by strong operator limits
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-square-summable-family-on-an-arbitrary-index-set, def-bounded-linear-operator, def-operator-norm, def-compact-linear-operator, def-strong-and-weak-operator-topologies, lem-finite-rank-operators-are-compact, cex-identity-is-compact-iff-the-space-is-finite-dimensional, def-metric-convergence, def-metric-ball, def-linear-subspace, thm-metric-closure-characterisation, def-sequence, def-countable]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.2, strong limits of finite-rank projections"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.1, compactness is not preserved by strong limits"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement refuted

The false general statement is: the strong operator limit of a sequence of
compact operators is compact. On $H:=\ell^2(\mathbb N,\mathbb K)$, with
$\mathbb K=\mathbb R$ or $\mathbb C$
([[def-square-summable-family-on-an-arbitrary-index-set]]), let

$$P_Nx:=\sum_{n<N}x_ne_n\qquad(N\in\mathbb N)$$

be the $N$-th coordinate projection. Each $P_N$ is compact
([[def-compact-linear-operator]]), the sequence converges to the identity in
the strong operator topology ([[def-strong-and-weak-operator-topologies]]),
$\|I-P_N\|=1$ for every $N$, and the identity is not compact.

## Facts & Assumptions

[A1] In $\ell^2(\mathbb N,\mathbb K)$ one has $\|x\|_2^2=\sum_{n\in\mathbb N}|x_n|^2$ with the finite-subset meaning of the sum, $\langle e_i,e_j\rangle=\delta_{ij}$, and the coordinate bound $|x_n|\le\|x\|_2$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[A2] A bounded finite-rank operator is compact ([[lem-finite-rank-operators-are-compact]], [[def-bounded-linear-operator]]); the identity of $\ell^2(\mathbb N,\mathbb K)$ is not compact ([[cex-identity-is-compact-iff-the-space-is-finite-dimensional]]).

[A3] Strong operator convergence means $\|(T_j-T)x\|\to0$ for every fixed $x$ ([[def-strong-and-weak-operator-topologies]], [[def-metric-convergence]]); the operator norm satisfies $\|S\|\ge\|Sx\|/\|x\|$ for $x\ne0$ ([[def-operator-norm]], [[def-metric-ball]]).

## Counterexample

**Proof technique:** direct.

**Given:** $\mathbb K\in\{\mathbb R,\mathbb C\}$, the Hilbert space $H=\ell^2(\mathbb N,\mathbb K)$, and the coordinate projections $P_Nx=\sum_{n<N}x_ne_n$.

1.1 Each $P_N$ is linear with $\|P_Nx\|_2^2=\sum_{n<N}|x_n|^2\le\|x\|_2^2$, hence bounded with $\|P_N\|\le1$, and its range is contained in the linear span of $e_0,\dots,e_{N-1}$, a finite-dimensional subspace; so $P_N$ is compact by [A2]. [A1, A2]

1.2 For every $x\in H$ one has $\|x-P_Nx\|_2^2=\sum_{n\ge N}|x_n|^2\to0$: given $\varepsilon>0$, the convergence of the nonnegative sum gives a finite $F\subseteq\mathbb N$ with $\sum_{n\notin F}|x_n|^2<\varepsilon$, and for $N>\max F$ the tail $\{n:n\ge N\}$ is contained in $\mathbb N\setminus F$, so the tail sum is below $\varepsilon$. [A1, A3]

1.3 $\|I-P_N\|=1$ for every $N$: the upper bound $\|(I-P_N)x\|_2^2=\sum_{n\ge N}|x_n|^2\le\|x\|_2^2$ follows from [A1], and the lower bound holds because $(I-P_N)e_N=e_N$ with $\|e_N\|_2=1$. [A1, A3]

2.1 By [step 1.2] the sequence $(P_N)$ converges to $I$ in the strong operator topology; by [step 1.3] the convergence is not in operator norm; and the limit $I$ is not compact by [A2]. [step 1.1, step 1.2, step 1.3, A2, A3]

3.1 With [step 1.1] and [step 1.2] this shows that a strong operator limit of compact operators need not be compact, refuting the general statement. [step 1.1, step 2.1] ∎
