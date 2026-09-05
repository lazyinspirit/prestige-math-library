---
id: prop-local-frame-characterization-of-a-smooth-distribution
kind: proposition
title: "A smooth distribution is exactly a locally framed constant-rank family of tangent spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-distribution-on-a-manifold,
       def-local-frame-and-global-frame-of-a-vector-bundle,
       prop-local-frames-and-local-trivializations-are-equivalent-data,
       def-smooth-vector-field-as-a-tangent-bundle-section]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Keith Conrad, Local and global Frobenius theorems"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf"
---

## Statement

Let $p \mapsto \mathcal D_p \subseteq T_pM$ be a rank-$k$ family of tangent
subspaces on a smooth manifold $M$. Then the following are equivalent:

1. $\mathcal D$ is a smooth distribution.
2. Every point of $M$ has a neighborhood $U$ and smooth vector fields
   $X_1,\dots,X_k$ on $U$ such that the vectors $X_1(q),\dots,X_k(q)$ are
   linearly independent and span $\mathcal D_q$ for all $q \in U$.

## Facts & Assumptions

**Given:** A rank-$k$ family $p \mapsto \mathcal D_p \subseteq T_pM$.

[A1] In item `1`, smoothness means that $\mathcal D$ is a rank-$k$ smooth
vector subbundle of $TM$.

## Proof

**Proof technique:** direct.

1.1 Assume $\mathcal D$ is a smooth distribution. By the local description of a [given]
subbundle, each point has a neighborhood $U$ and a frame of $TM|_U$ whose first
$k$ members already frame $\mathcal D|_U$. Those first $k$ sections are smooth
vector fields, pointwise independent, and span the prescribed subspaces.
[given]

1.2 Conversely, assume such local vector fields exist near every point. On a [given]
neighborhood $U$ where $X_1,\dots,X_k$ are pointwise independent, their span is
a rank-$k$ subbundle of $TM|_U$, because in a local trivialization of $TM$ the
columns formed by the $X_i$ have rank $k$ everywhere. Since that subbundle has
fibres exactly $\mathcal D_q$, the family is a smooth distribution on $U$.
[given, algebra]

2.1 The two implications establish the equivalence. [given] ∎ [given]
