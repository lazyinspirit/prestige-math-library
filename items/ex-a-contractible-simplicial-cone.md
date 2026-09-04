---
id: ex-a-contractible-simplicial-cone
kind: example
title: "A contractible simplicial cone"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-augmentation-and-reduced-simplicial-homology, def-chain-homotopy, cor-a-contractible-complex-is-acyclic]
sources:
  scraped: []
  references:
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 02: Homotopy"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2002%20Homotopy.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Example

Given a simplicial complex $K$ and a new vertex $a$, its cone $a * K$ is
obtained by adjoining to every simplex $\sigma$ the simplex $\{a\} \cup \sigma$.
The same formula used for a single simplex defines a degree-$1$ operator by
setting $h[\sigma]=[a,\sigma]$ when $a$ is not already a vertex of $\sigma$ and
$h[\sigma]=0$ otherwise. The same cancellation check gives
$$\partial h + h\partial = \operatorname{id}$$
on the augmented simplicial chain complex.

Thus the augmented chain complex of a simplicial cone is contractible, so its
reduced simplicial homology vanishes. In particular, a simplicial cone is a
concrete combinatorial model of a contractible space.
