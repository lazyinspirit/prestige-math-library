---
id: cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators
kind: corollary
title: Finite rank operators are norm dense in compact Hilbert space operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-singular-value-decomposition-for-compact-operators, def-absolute-value-and-singular-values-of-a-compact-operator, lem-finite-rank-operators-are-compact, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-dimension, def-metric-convergence, def-hilbert-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.5, finite-rank singular truncations (printed pp. 90–93)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and $K$
be real or complex Hilbert spaces and let $T\in\mathcal B(H,K)$ be a compact
operator ([[def-compact-linear-operator]]). Let
$(e_j)_{j\in J},(f_j)_{j\in J},(s_j)_{j\in J}$ be the singular system of $T$ and
$(s_n(T))_{n\ge1}$ its zero-padded singular-value sequence
([[thm-singular-value-decomposition-for-compact-operators]],
[[def-absolute-value-and-singular-values-of-a-compact-operator]]). For $n\ge1$
put
$$T_n:=\sum_{j\in J,\ j\le n}s_j\langle\cdot,e_j\rangle f_j ,$$
a finite-rank bounded operator. Then
$$\|T-T_n\|=s_{n+1}(T)\qquad\text{for every }n\ge1,$$
so $\|T-T_n\|\to0$ and $T$ is the operator-norm limit of the finite-rank
operators $T_n$. In particular the set of finite-rank operators is norm dense in
the set of compact operators $H\to K$: every compact operator is the norm limit
of finite-rank operators.

## Facts & Assumptions

**Given:** Countable Choice, a compact $T:H\to K$, its singular system and the truncations $T_n$.

[A1] **SVD data.** $Tx=\sum_{j\in J}s_j\langle x,e_j\rangle f_j$ for every $x$, with $(e_j)$ and $(f_j)$ orthonormal and $|T|e_j=s_je_j$; for $n+1\in J$ one has $\|T-T_n\|\le s_{n+1}$; if $r=\dim\operatorname{ran}T<+\infty$ then $J=\{1,\dots,r\}$, $T_n=T$ for $n\ge r$ and $s_m(T)=0$ for $m>r$ ([[thm-singular-value-decomposition-for-compact-operators]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **Finite rank.** Each truncation $T_n$ is a finite sum of rank-one operators $\langle\cdot,e_j\rangle f_j$ and therefore has finite rank, hence is compact and bounded ([[def-dimension]], [[lem-finite-rank-operators-are-compact]], [[def-bounded-linear-operator]]).

[A3] **Norm test.** The operator norm is the unit-ball supremum, so $\|S\|\ge\|Sx\|$ for every unit vector $x$ and $\|S\|\le c$ follows from $\|Sx\|\le c$ for all unit vectors ([[def-operator-norm]]); limits in operator norm are metric limits ([[def-metric-convergence]]).

[A4] Countable Choice is the standing hypothesis of this pair's Hilbert-space interface ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the compact $T$ and its finite-rank truncations $T_n$.

1.1 **Upper bound.** For every $n\ge1$: if $n+1\in J$ then [A1] gives $\|T-T_n\|\le s_{n+1}$; if $n+1\notin J$ then $r<+\infty$, $n\ge r$, and [A1] gives $T_n=T$, so $\|T-T_n\|=0=s_{n+1}$; if $T=0$ then $T_n=0=T$ and $s_{n+1}=0$. Hence $\|T-T_n\|\le s_{n+1}$ for every $n$. [A1]

1.2 **Lower bound.** Let $n\ge1$. If $n+1\in J$ then $e_{n+1}$ is a unit vector and the expansion [A1] gives $(T-T_n)e_{n+1}=s_{n+1}f_{n+1}$, whence $\|T-T_n\|\ge\|s_{n+1}f_{n+1}\|=s_{n+1}$ by [A3]; if $n+1\notin J$ then $T_n=T$ by [A1] and $\|T-T_n\|=0=s_{n+1}$. In every case $\|T-T_n\|\ge s_{n+1}$. [A1, A3]

2.1 **Conclusion.** Steps 1.1 and 1.2 give $\|T-T_n\|=s_{n+1}(T)$ for every $n$, and $s_{n+1}(T)\to0$ because $(s_n(T))$ is a nonincreasing sequence of nonnegative terms that is eventually $0$ in the finite-rank case and lists the positive eigenvalues of $|T|$ with multiplicity in the infinite-rank case, whose only accumulation point is $0$ [A1]; each $T_n$ has finite rank by [A2], so $T$ is the operator-norm limit of finite-rank operators, which is the asserted density statement. [step 1.1, step 1.2, A1, A2, A3, A4] ∎
