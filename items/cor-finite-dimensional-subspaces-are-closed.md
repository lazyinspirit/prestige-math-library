---
id: cor-finite-dimensional-subspaces-are-closed
kind: corollary
title: "A finite-dimensional normed subspace is closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-finite-dimensional-normed-spaces-are-banach, def-normed-subspace,
       lem-complete-subspace-is-closed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
pipeline_run: frontier-29
---

## Statement

Let $V$ be a normed space and let $W\subseteq V$ be a normed subspace. If $W$
admits an ordered basis of finite length, then $W$ is closed in $V$.

## Facts & Assumptions

**Given:** A normed space $V$ and a normed subspace $W\subseteq V$ that admits
an ordered basis of finite length.

[L1] Such a normed space is Banach
([[cor-finite-dimensional-normed-spaces-are-banach]]).

[L2] A complete normed subspace is closed in the ambient normed space
([[lem-complete-subspace-is-closed]]).

[L3] The restricted norm on a normed subspace is the ambient one
([[def-normed-subspace]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the hypothesis makes $W$ a normed space in its own right, with an ordered basis of finite length. Therefore [L1] makes $W$ Banach, hence complete for its restricted norm. [L1, L3]

2.1 Applying [L2] to that complete normed subspace shows that $W$ is closed in $V$. [L2, step 1.1] ∎
