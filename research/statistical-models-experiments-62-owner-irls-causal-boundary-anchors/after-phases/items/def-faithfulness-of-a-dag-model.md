---
id: def-faithfulness-of-a-dag-model
kind: definition
title: "Faithfulness of a law to a DAG"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-d-separation-in-a-dag
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-conditional-independence-given-a-sigma-algebra
  - def-axiom-of-choice
proof_strategy: definition
axiom_use: "Assume AC as required by the conditional-independence definition."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §2-1, pp. 671–672"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Fine Point 6.2, pp. 79–80"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: n/a
---

## Definition

Assume AC, and let a joint law $P$ on the measurable vertex variables of a
finite DAG $G$ be given. The law is **faithful to $G$** if, for every triple
of pairwise disjoint vertex sets $A,B,C$, the conditional independence
$$\sigma(X_A)\perp\!\!\!\perp\sigma(X_B)\mid\sigma(X_C)$$
implies that $C$ d-separates $A$ and $B$ in $G$. This is the converse of the
global Markov implication; faithfulness is a separate assumption on the
specified law, not a consequence of DAG factorization. No claim about Markov
equivalence, skeletons, or unshielded colliders is included. Here $X_A$ is
the finite random vector $(X_v)_{v\in A}$ with the finite-product
sigma-algebra; for $A=\varnothing$ it is the unique random element of the
empty-product singleton.
