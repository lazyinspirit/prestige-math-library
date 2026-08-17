---
id: prop-sigma-algebras-are-lambda-systems-and-monotone-classes
kind: proposition
title: "Every sigma-algebra is a lambda-system and a monotone class"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sigma-algebra, def-lambda-system, def-monotone-class]
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "A. Dembo, Probability Theory lecture notes, Definitions 1.1.36 and 1.1.43"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Statement

Every sigma-algebra on $X$ is both a lambda-system and a monotone class on $X$.

## Facts & Assumptions

**Given:** A sigma-algebra $\mathcal A$ on $X$.

[L1] A sigma-algebra contains the empty set and is closed under complements and countable unions ([[def-sigma-algebra]]).

[L2] A lambda-system contains $X$, is closed under relative differences, and is closed under increasing countable unions ([[def-lambda-system]]).

[L3] A monotone class is closed under increasing countable unions and decreasing countable intersections ([[def-monotone-class]]).

## Proof

**Proof technique:** direct.

1.1 The family $\mathcal A$ contains $X$; if $A\subseteq B$ lie in $\mathcal A$, then $B\setminus A=B\cap(X\setminus A)$ lies in $\mathcal A$; and every increasing countable union lies in $\mathcal A$. Hence the axioms in [L2] hold. [L1, L2, algebra]

2.1 Increasing unions lie in $\mathcal A$ by [L1]. If $(A_n)$ decreases in $\mathcal A$, then $\bigcap_nA_n=X\setminus\bigcup_n(X\setminus A_n)$ lies in $\mathcal A$, so the axioms in [L3] hold. [L1, L3, algebra] ∎
