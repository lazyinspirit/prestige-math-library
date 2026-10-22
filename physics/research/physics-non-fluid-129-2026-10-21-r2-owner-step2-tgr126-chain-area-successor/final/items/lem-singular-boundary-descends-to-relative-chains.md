---
id: lem-singular-boundary-descends-to-relative-chains
kind: lemma
title: "Boundary on relative chains"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-singular-chain-complex-of-a-pair, thm-the-singular-boundary-squares-to-zero]
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

For $A\subseteq X$, the singular boundary induces homomorphisms
$\bar\partial_n:C_n(X,A;G)\to C_{n-1}(X,A;G)$, and
$\bar\partial_{n-1}\bar\partial_n=0$.

## Facts & Assumptions

**Given:** A subspace $A\subseteq X$ and a fixed abelian group $G$.

## Proof

**Proof technique:** direct.

1.1 Inclusion sends every singular simplex of $A$ to the same simplex in $X$; its faces still have image in $A$. Hence $\partial C_n(A;G)\subseteq C_{n-1}(A;G)$, so $[c]\mapsto[\partial c]$ is well defined on the quotient. [given, construct]

2.1 Applying this map twice gives $[\partial^2c]=0$, since the singular boundary squares to zero. [step 1.1, algebra] ∎
