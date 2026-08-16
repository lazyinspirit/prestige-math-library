---
id: fs-increasing-unions-of-monotone-classes-are-monotone-classes
kind: false-statement
title: "FALSE: the union of an increasing sequence of monotone classes is a monotone class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monotone-class]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Exercise 2.4"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

The union of every increasing sequence of monotone classes on one ambient set is
a monotone class.

## Facts & Assumptions

**Given:** The ambient set $X:=\mathbb N$ and $\mathcal M_n:=\mathcal P(n)$, where $n=\{0,\ldots,n-1\}$ and in particular $\mathcal M_0=\{\varnothing\}$.

[L1] A monotone class is closed under increasing countable unions and decreasing countable intersections ([[def-monotone-class]]).

## Refutation

**Proof technique:** counterexample.

1.1 Every increasing or decreasing sequence in the finite family $\mathcal M_n$ stabilizes, so its union or intersection belongs to $\mathcal M_n$. Thus each $\mathcal M_n$ is a monotone class, and $\mathcal M_n\subseteq\mathcal M_{n+1}$. [L1, algebra]

2.1 The union $\bigcup_n\mathcal M_n$ is the family of finite subsets of $\mathbb N$. The increasing sequence $0\subseteq1\subseteq2\subseteq\cdots$ lies in this union but has union $\mathbb N$, which is not finite. Hence the union is not a monotone class. [step 1.1, L1] ∎
