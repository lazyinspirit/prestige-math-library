---
id: prop-relative-homology-of-the-empty-and-total-subspace
kind: proposition
title: "Relative homology for the empty and total subspace"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-relative-singular-homology, def-singular-chain-complex-and-singular-homology]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

For every space $X$ and every integer $n$, $H_n(X,\varnothing;G)\cong H_n(X;G)$
and $H_n(X,X;G)=0$, including $n=0$.

## Facts & Assumptions

**Given:** A space $X$ and an integer $n$.

## Proof

**Proof technique:** direct.

1.1 Since every singular chain group of $\varnothing$ is zero, $C_\bullet(X,\varnothing;G)=C_\bullet(X;G)$ as complexes. [given, algebra]

2.1 Since $C_\bullet(X;G)/C_\bullet(X;G)$ is the zero complex, its cycles and boundaries are both zero in every degree. Taking homology proves both assertions. [step 1.1, algebra] ∎
