---
id: thm-continuity-from-below-for-measures
kind: theorem
title: "Continuity from below for measures"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure, prop-measure-of-a-set-difference, def-nonnegative-extended-series, lem-extended-reals-complete]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Measure, Integration & Real Analysis, Theorem 2.59"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

Let $(E_n)_{n\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$, so $E_n\subseteq E_{n+1}$. Then

$$\mu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sup_{n\in\mathbb N}\mu(E_n).$$

No finiteness hypothesis is required.

## Facts & Assumptions

**Given:** A measure $\mu$ and measurable sets $E_0\subseteq E_1\subseteq\cdots$; write $E=\bigcup_nE_n$.

[L1] A measure is countably additive on pairwise disjoint measurable sequences ([[def-measure]]).

[L2] If $A\subseteq B$ are measurable and $\mu(A)<+\infty$, then $\mu(B)=\mu(A)+\mu(B\setminus A)$, with the corresponding finite and infinite cases stated explicitly ([[prop-measure-of-a-set-difference]]).

[L3] A nonnegative extended series is the supremum of its finite partial sums ([[def-nonnegative-extended-series]]).

[L4] Every subset of $\overline{\mathbb R}$ has a supremum there ([[lem-extended-reals-complete]]).

## Proof

**Proof technique:** direct.

1.1 Define $D_0:=E_0$ and $D_{k+1}:=E_{k+1}\setminus E_k$. The sets $D_k$ are measurable and pairwise disjoint, $E_n=\bigcup_{k<n+1}D_k$, and $E=\bigcup_kD_k$. [given]

2.1 Countable additivity gives $\mu(E)=\sum_k\mu(D_k)$. [step 1.1, L1]

2.2 If $\mu(E_n)=+\infty$ for some $n$, then $\mu(E)=+\infty$ by step 1.1 and [L1], while $\sup_k\mu(E_k)=+\infty$ because that value occurs. [step 1.1, L1, L4]

2.3 If every $\mu(E_n)$ is finite, then [L2] gives $\mu(D_0)=\mu(E_0)$ and $\mu(D_{k+1})=\mu(E_{k+1})-\mu(E_k)$; hence the first $n+1$ terms telescope to $\mu(E_n)$. [step 1.1, L2, algebra]

3.1 In the finite-valued case, [L3], steps 2.1 and 2.3 give $\mu(E)=\sup_n\mu(E_n)$; step 2.2 gives the same equality in the remaining case, including $E_0=\varnothing$ and a sequence that stabilizes. [step 2.1, step 2.2, step 2.3, L3] ∎
