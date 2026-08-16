---
id: fs-every-monotone-class-is-an-algebra
kind: false-statement
title: "FALSE: every monotone class is an algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monotone-class, def-algebra-of-subsets]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Exercise 2.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

Every monotone class on $X$ is an algebra of subsets of $X$.

## Facts & Assumptions

**Given:** The set $X:=\{1,2\}$ and the family $\mathcal M:=\{\varnothing,\{1\},X\}$.

[L1] A monotone class is closed under increasing countable unions and decreasing countable intersections ([[def-monotone-class]]).

[L2] An algebra is closed under complements relative to its ambient set ([[def-algebra-of-subsets]]).

## Refutation

**Proof technique:** counterexample.

1.1 Every increasing or decreasing sequence in the finite chain $\varnothing\subseteq\{1\}\subseteq X$ stabilizes, so its union or intersection belongs to $\mathcal M$. Thus $\mathcal M$ is a monotone class by [L1]. [L1, algebra]

2.1 The complement $X\setminus\{1\}=\{2\}$ is absent from $\mathcal M$, so [L2] shows that $\mathcal M$ is not an algebra. [step 1.1, L2] ∎
