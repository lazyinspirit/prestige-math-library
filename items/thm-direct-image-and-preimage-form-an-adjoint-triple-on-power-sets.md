---
id: thm-direct-image-and-preimage-form-an-adjoint-triple-on-power-sets
kind: theorem
title: 'Direct image, preimage, and universal image form an adjoint triple on power sets'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-galois-connection, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.8'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

For a function $f:A\to B$, order the power sets by inclusion and define

$$f_!(S):=f[S],\qquad f^{-1}(T):=\{a\in A:f(a)\in T\},$$

$$f_*(S):=\{b\in B:f^{-1}[\{b\}]\subseteq S\}.$$

Then

$$f_!\dashv f^{-1}\dashv f_*.$$

Thus direct image is left adjoint to preimage, and universal image is right adjoint to preimage. The notation $f_*$ here always denotes universal image.

## Facts & Assumptions

**Given:** A function $f:A\to B$, subsets $S\subseteq A$ and $T\subseteq B$.

[F1] For a relation, image and preimage are $R[A]=\{b:\exists a\in A\ ((a,b)\in R)\}$ and $R^{-1}[B]=\{a:\exists b\in B\ ((a,b)\in R)\}$ ([[def-image-and-preimage-under-a-relation]]).

[L1] For posets, an adjunction is a Galois connection: $P(x)\le y$ if and only if $x\le Q(y)$ ([[def-galois-connection]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $f[S]\subseteq T$ means that every $a\in S$ satisfies $f(a)\in T$, which is equivalent to $S\subseteq f^{-1}[T]$. [F1]

1.2 The inclusion $f^{-1}[T]\subseteq S$ means that whenever $b\in T$, every $a$ in the fibre $f^{-1}[\{b\}]$ lies in $S$; this is equivalent to $T\subseteq f_*(S)$. [F1]

2.1 Step 1.2 also covers an empty fibre, because the empty set is a subset of every $S$; hence no surjectivity hypothesis on $f$ is present. [step 1.2]

3.1 Applying [L1] to steps 1.1 and 1.2 gives $f_!\dashv f^{-1}$ and $f^{-1}\dashv f_*$, respectively. [step 1.1, step 1.2, L1] ∎
