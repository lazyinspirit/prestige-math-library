---
id: cor-finite-projective-planes-are-symmetric-two-designs
kind: corollary
title: "A projective plane of order $n$ is a symmetric $2$-$(n^2+n+1,n+1,1)$ design"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-two-design,
       def-symmetric-design,
       def-finite-projective-plane,
       def-order-of-a-finite-projective-plane,
       thm-counts-in-a-finite-projective-plane]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Noam D. Elkies, Math 155 notes: Feb. 3"
      url: "https://people.math.harvard.edu/~elkies/M155.09/feb03"
---

## Statement

Let $(P,\mathcal L)$ be a finite projective plane of order $n$. Then, with
points as the ground set and lines as the blocks, $(P,\mathcal L)$ is a
symmetric $2$-$(n^2+n+1,n+1,1)$ design.

## Facts & Assumptions

**Given:** A finite projective plane $(P,\mathcal L)$ of order $n$.

[L1] Every line has exactly $n+1$ points ([[def-order-of-a-finite-projective-plane]]).

[L2] Any two distinct points lie on exactly one line ([[def-finite-projective-plane]]).

[L3] A plane of order $n$ has $n^2+n+1$ points and the same number of lines ([[thm-counts-in-a-finite-projective-plane]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every block has size $n+1$, and by [L2], every pair of distinct points lies in exactly one block. Thus $(P,\mathcal L)$ is a $2$-$(n^2+n+1,n+1,1)$ design. [L1, L2, L3]

2.1 By [L3], the number of blocks equals the number of points, namely $n^2+n+1$, so the design is symmetric. [L3] ∎
