---
id: cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators
kind: corollary
title: Finite rank operators are norm dense in compact Hilbert space operators
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-singular-value-decomposition-for-compact-operators, def-absolute-value-and-singular-values-of-a-compact-operator, lem-finite-rank-operators-are-compact, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-dimension, def-metric-convergence, def-hilbert-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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
operator ([[def-compact-linear-operator]]). Relabel the singular system of $T$
by positive integers, so its $m$-th vectors $e_m,f_m$ correspond to the
numerical singular value $s_m(T)>0$, for $1\le m\le r$ in rank $r<+\infty$ and
for every $m\ge1$ in infinite rank. Let $(s_m(T))_{m\ge1}$ be the zero-padded
singular-value sequence
([[thm-singular-value-decomposition-for-compact-operators]],
[[def-absolute-value-and-singular-values-of-a-compact-operator]]). For
$n\in\mathbb N$ put
$$T_n:=\sum_{1\le m\le n,\ s_m(T)>0}s_m(T)\langle\cdot,e_m\rangle f_m,$$
with the empty sum $T_0=0$. This is a finite-rank bounded operator, and
$$\|T-T_n\|=s_{n+1}(T)\qquad\text{for every }n\in\mathbb N,$$
so $\|T-T_n\|\to0$ and $T$ is the operator-norm limit of the finite-rank
operators $T_n$. In particular the set of finite-rank operators is norm dense in
the set of compact operators $H\to K$: every compact operator is the norm limit
of finite-rank operators.

## Facts & Assumptions

**Given:** Countable Choice, a compact $T:H\to K$, its singular system and the truncations $T_n$.

[A1] **SVD data and relabelling.** The SVD supplies orthonormal singular
systems indexed by the positive singular values with multiplicity, together
with the norm-convergent expansion of $T$ and the corresponding partial-sum
error estimate. In infinite rank its index set $\mathbb N$ is order-isomorphic
to the positive integers via $m\mapsto m-1$; after this relabelling, and without
any choice, the $m$-th coefficient is the uniquely ordered numerical singular
value $s_m(T)$. Thus
$Tx=\sum_{m\ge1}s_m(T)\langle x,e_m\rangle f_m$ and
$\|T-T_n\|\le s_{n+1}(T)$ whenever the $(n+1)$-st positive singular value
exists. If $r=\dim\operatorname{ran}T<+\infty$, then $T_n=T$ for $n\ge r$ and
$s_m(T)=0$ for $m>r$ ([[thm-singular-value-decomposition-for-compact-operators]],
[[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **Finite rank.** Each truncation $T_n$ is a finite sum of rank-one operators $\langle\cdot,e_j\rangle f_j$ and therefore has finite rank, hence is compact and bounded ([[def-dimension]], [[lem-finite-rank-operators-are-compact]], [[def-bounded-linear-operator]]).

[A3] **Norm test.** The operator norm is the unit-ball supremum, so $\|S\|\ge\|Sx\|$ for every unit vector $x$ and $\|S\|\le c$ follows from $\|Sx\|\le c$ for all unit vectors ([[def-operator-norm]]); limits in operator norm are metric limits ([[def-metric-convergence]]).

[A4] Countable Choice is the standing hypothesis of this pair's Hilbert-space interface ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the compact $T$ and its finite-rank truncations $T_n$.

1.1 **Upper bound.** For every $n\in\mathbb N$: if the $(n+1)$-st positive singular value exists then [A1] gives $\|T-T_n\|\le s_{n+1}(T)$; otherwise $r<+\infty$ and $n\ge r$, so [A1] gives $T_n=T$ and $\|T-T_n\|=0=s_{n+1}(T)$. This includes $T=0$, when $T_n=0=T$ for every $n$. Hence $\|T-T_n\|\le s_{n+1}(T)$ for every $n\in\mathbb N$. [A1]

1.2 **Lower bound.** Let $n\in\mathbb N$. If the $(n+1)$-st positive singular value exists, then $e_{n+1}$ is a unit vector and the expansion [A1] gives $(T-T_n)e_{n+1}=s_{n+1}(T)f_{n+1}$, whence $\|T-T_n\|\ge\|s_{n+1}(T)f_{n+1}\|=s_{n+1}(T)$ by [A3]; otherwise $T_n=T$ by [A1] and $\|T-T_n\|=0=s_{n+1}(T)$. In every case $\|T-T_n\|\ge s_{n+1}(T)$. [A1, A3]

2.1 **Conclusion.** Steps 1.1 and 1.2 give $\|T-T_n\|=s_{n+1}(T)$ for every $n\in\mathbb N$, and $s_{n+1}(T)\to0$ because $(s_m(T))_{m\ge1}$ is nonincreasing and nonnegative, is eventually $0$ in finite rank, and in infinite rank lists the positive eigenvalues of $|T|$ with multiplicity with only $0$ as an accumulation point [A1]; each $T_n$ has finite rank by [A2], so the zero-based sequence $(T_n)_{n\in\mathbb N}$ converges to $T$ in operator norm, proving the asserted density statement. [step 1.1, step 1.2, A1, A2, A3, A4] ∎
