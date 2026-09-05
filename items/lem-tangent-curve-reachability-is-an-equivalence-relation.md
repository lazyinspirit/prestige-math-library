---
id: lem-tangent-curve-reachability-is-an-equivalence-relation
kind: lemma
title: "Tangent-curve reachability is an equivalence relation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-leaf-equivalence-relation-of-an-integrable-distribution]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Local and global Frobenius theorems"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf"
---

## Statement

For an integrable distribution $\mathcal D$, the relation $\sim_{\mathcal D}$
is an equivalence relation on $M$.

## Facts & Assumptions

**Given:** An integrable distribution $\mathcal D$ on $M$.

[A1] The relation is defined by piecewise smooth curves tangent to $\mathcal D$.

## Proof

**Proof technique:** direct.

1.1 Reflexivity holds because the constant curve at any point is piecewise [given]
smooth and has derivative $0 \in \mathcal D$. [given]

1.2 Symmetry holds because reversing a tangent piecewise smooth curve negates [given]
its derivative but keeps it inside the same linear subspaces. [given]

1.3 Transitivity holds because concatenating two tangent piecewise smooth curves [given]
produces another piecewise smooth curve with the same tangency property.
[given, construct]

2.1 Therefore $\sim_{\mathcal D}$ is an equivalence relation. [given] ∎ [given]
