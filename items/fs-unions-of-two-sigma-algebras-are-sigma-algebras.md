---
id: fs-unions-of-two-sigma-algebras-are-sigma-algebras
kind: false-statement
title: "FALSE: the union of two sigma-algebras on one set is a sigma-algebra"
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
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Exercise 2.2"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

The union of any two sigma-algebras on the same set is a sigma-algebra.

## Facts & Assumptions

**Given:** The set $X:=\{1,2,3,4\}$, $A:=\{1,2\}$, and $B:=\{1,3\}$.

[L1] A sigma-algebra is closed under finite intersections ([[def-sigma-algebra]]).

## Refutation

**Proof technique:** counterexample.

1.1 The families $\mathcal A:=\{\varnothing,X,A,X\setminus A\}$ and $\mathcal B:=\{\varnothing,X,B,X\setminus B\}$ each satisfy the sigma-algebra axioms. [L1, algebra]

2.1 Their union contains $A$ and $B$ but not $A\cap B=\{1\}$. It therefore fails the closure in [L1] and is not a sigma-algebra. [step 1.1, L1] ∎
