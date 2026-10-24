---
id: fs-increasing-unions-of-sigma-algebras-are-sigma-algebras
kind: false-statement
title: "FALSE: the union of an increasing sequence of sigma-algebras is a sigma-algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sigma-algebra]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Exercise 2.3"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

The union of every increasing sequence of sigma-algebras on one ambient set is a
sigma-algebra.

## Facts & Assumptions

**Given:** The ambient set $X:=\mathbb N$, the tail $T_n:=\{k\in\mathbb N:k\ge n\}$, and the partition $\mathcal P_n:=\{\{0\},\ldots,\{n-1\},T_n\}$, with $\mathcal P_0=\{\mathbb N\}$.

[L1] A sigma-algebra is closed under complements and countable unions ([[def-sigma-algebra]]).

## Refutation

**Proof technique:** counterexample.

1.1 Let $\mathcal A_n$ be the family of unions of blocks of $\mathcal P_n$. Complements and countable unions correspond to complements and unions of block-index sets, so each $\mathcal A_n$ is a sigma-algebra; splitting $T_n$ into $\{n\}$ and $T_{n+1}$ gives $\mathcal A_n\subseteq\mathcal A_{n+1}$. [L1, algebra]

2.1 A member of some $\mathcal A_n$ is finite if it omits $T_n$ and cofinite if it contains $T_n$. Conversely every finite or cofinite subset belongs to some $\mathcal A_n$. Hence $\bigcup_n\mathcal A_n$ is the finite-cofinite algebra. [step 1.1, algebra]

3.1 Every singleton $\{2j\}$ lies in the union, but their countable union is the set of even naturals, which is neither finite nor cofinite and so is absent by step 2.1. This violates [L1]. [step 2.1, L1] ∎
