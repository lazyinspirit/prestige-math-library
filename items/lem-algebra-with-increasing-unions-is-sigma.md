---
id: lem-algebra-with-increasing-unions-is-sigma
kind: lemma
title: "An algebra closed under increasing countable unions is a sigma-algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebra-of-subsets, def-sigma-algebra]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, proof route for Theorem 2.10"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal A$ be an algebra of subsets of $X$. If
$\bigcup_nB_n\in\mathcal A$ for every increasing sequence
$B_0\subseteq B_1\subseteq\cdots$ in $\mathcal A$, then $\mathcal A$ is a
sigma-algebra on $X$.

## Facts & Assumptions

**Given:** An algebra $\mathcal A$ on $X$ with the stated increasing-union closure, and a sequence $(A_n)_{n\in\mathbb N}$ in $\mathcal A$.

[L1] An algebra is closed under finite unions ([[def-algebra-of-subsets]]).

[L2] A sigma-algebra is an algebra closed under countable unions ([[def-sigma-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Put $B_n:=\bigcup_{k\le n}A_k$. By [L1], each $B_n$ lies in $\mathcal A$, and $B_n\subseteq B_{n+1}$. [L1, algebra]

2.1 The hypothesis gives $\bigcup_nB_n\in\mathcal A$, and $\bigcup_nB_n=\bigcup_nA_n$. Hence $\mathcal A$ is closed under arbitrary countable unions and is a sigma-algebra by [L2]. [step 1.1, given, L2] ∎
