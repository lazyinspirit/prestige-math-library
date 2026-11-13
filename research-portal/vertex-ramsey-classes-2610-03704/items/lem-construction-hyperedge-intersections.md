---
id: lem-construction-hyperedge-intersections
kind: lemma
title: Hyperedge intersection consequence in Construction 1
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-hypergraph-ramsey-construction-terminology
  - lem-berge-girth-three-implies-linear
dependency_roles:
  def-hypergraph-ramsey-construction-terminology: mathematical-premise
  lem-berge-girth-three-implies-linear: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Construction 1, final sentence
      statement: For the hypergraph used in Construction 1, the girth condition
        ensures that any two distinct hyperedges intersect in at most one
        vertex.
      hypotheses: The construction takes an integer q at least 3 and a uniform
        hypergraph of girth at least q.
      reading_limits: The frozen article text at the cited passage was read. This
        reference attributes the article's claim; it is not used as proof. The
        article does not separately define hypergraph girth there.
dependency_level: 3
---

## Statement

Let $q\geq3$ be an integer and let $\mathcal H$ be a hypergraph satisfying the conditions of Construction 1, with Berge girth at least $q$ as specified in the hypergraph terminology. Then any two distinct hyperedges of $\mathcal H$ intersect in at most one vertex.

## Statement references

[[def-hypergraph-ramsey-construction-terminology]]

## Facts & Assumptions

[F1] By [[def-hypergraph-ramsey-construction-terminology]], the hypergraph in this formulation is finite, and its girth is Berge girth, with infinite girth permitted when there is no Berge cycle.

[F2] By [[lem-berge-girth-three-implies-linear]], a finite hypergraph of Berge girth at least three is linear: any two distinct hyperedges have at most one common vertex.

## Proof

**Given:** An integer $q\geq3$ and a hypergraph $\mathcal H$ satisfying the stated construction conditions, including Berge girth at least $q$.

**Goal:** Any two distinct hyperedges of $\mathcal H$ intersect in at most one vertex.

1.1 The hypergraph $\mathcal H$ is finite and has Berge girth at least three, since its Berge girth is at least $q$ and $q\geq3$. This also holds if its girth is infinite. [given, F1]

2.1 Applying the linearity lemma to $\mathcal H$ shows that any two distinct hyperedges have at most one common vertex, as required. [F2, step 1.1] ∎
