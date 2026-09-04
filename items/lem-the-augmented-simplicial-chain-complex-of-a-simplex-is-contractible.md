---
id: lem-the-augmented-simplicial-chain-complex-of-a-simplex-is-contractible
kind: lemma
title: "The augmented simplicial chain complex of a simplex is contractible"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-augmentation-and-reduced-simplicial-homology, def-contractible-complex]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 02: Homotopy"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2002%20Homotopy.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Statement

Let $\Delta^n$ be a simplex, and choose one of its vertices $a$. The augmented
simplicial chain complex of $\Delta^n$ is contractible.

## Proof

**Given:** A simplex $\Delta^n$ with a chosen vertex $a$.

1.1 Define $h_{-1}:\mathbb Z \to C_0(\Delta^n)$ by $h_{-1}(1)=[a]$. For an oriented simplex $[v_0,\dots,v_k]$, set $h_k[v_0,\dots,v_k]=[a,v_0,\dots,v_k]$ if $a \notin \{v_0,\dots,v_k\}$ and set $h_k[v_0,\dots,v_k]=0$ if $a \in \{v_0,\dots,v_k\}$. Because adjoining $a$ to a face of a simplex still gives a face of $\Delta^n$, each $h_k$ is well defined. [given]

2.1 If $a \notin \{v_0,\dots,v_k\}$, then the extra face created by applying $\partial h_k$ and deleting $a$ is exactly $[v_0,\dots,v_k]$, while every other face cancels with the corresponding term in $h_{k-1}\partial$. If $a$ is already among the vertices, then $h_k$ is $0$ and the same cancellation leaves the identity term. Thus $\partial h + h\partial = \operatorname{id}$ on the augmented complex. [step 1.1]

3.1 The family $(h_k)_{k \geq -1}$ is therefore a contracting homotopy, so the augmented simplicial chain complex of $\Delta^n$ is contractible. [step 2.1] ∎
