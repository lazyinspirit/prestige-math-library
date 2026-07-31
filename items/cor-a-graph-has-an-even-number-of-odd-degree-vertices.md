---
id: cor-a-graph-has-an-even-number-of-odd-degree-vertices
kind: corollary
title: "Every finite graph has an even number of vertices of odd degree"
status: published
origin: session
deps: [thm-handshake-lemma-for-finite-simple-graphs, def-finite-cardinality]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cornell Mathematics, Graph Theory notes"
      url: "https://pi.math.cornell.edu/~zakh/putnam/graph-theory.pdf"
pipeline_run: null
---

## Statement

In every finite simple graph, the set of vertices having odd degree has even
cardinality.

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$ and the finite set $O:=\{v\in V:\deg_G(v)\text{ is odd}\}$.

[L1] The handshake lemma gives $\sum_{v\in V}\deg_G(v)=2|E|$, an even natural number ([[thm-handshake-lemma-for-finite-simple-graphs]]).

[F1] The cardinality $|O|$ is a natural number because $O$ is a subset of the finite set $V$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 Split the degree sum into the vertices in $O$ and those outside $O$. The latter summands are even, so their sum is even. [given]

1.2 A finite sum of $k$ odd natural numbers has the same parity as $k$: writing each summand as $2q_i+1$ makes the sum $2\sum_iq_i+k$. Hence $\sum_{v\in O}\deg_G(v)$ has the same parity as $|O|$. [F1, algebra]

2.1 The total degree sum is even by [L1], and subtracting the even contribution from $V\setminus O$ leaves an even sum over $O$. Step 1.2 therefore makes $|O|$ even. [step 1.1, step 1.2, L1] ∎
