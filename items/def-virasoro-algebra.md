---
id: def-virasoro-algebra
kind: definition
title: Virasoro algebra in the L_m convention
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-witt-algebra, lem-witt-cubic-cocycle-is-a-2-cocycle]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §2.7.1
      url: https://arxiv.org/pdf/0809.1380
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §1
      url: https://arxiv.org/pdf/1004.1287
---

## Definition

The **Virasoro algebra** is the vector space $W\oplus\mathbb C C$, with $W$ from [[def-witt-algebra]] and $C$ a central basis vector, and bracket
$$[L_m,L_n]=(m-n)L_{m+n}+\frac{1}{12}(m^3-m)\delta_{m+n,0}C,$$
where $L_m$ denotes the lift of $d_m$. The bracket with $C$ is zero. The cocycle identity and alternatingness proved in [[lem-witt-cubic-cocycle-is-a-2-cocycle]] make this central extension a Lie algebra. A representation on $V$ has **central charge** $c$ if $C$ acts as $c\operatorname{id}_V$; in its operator relation, $C$ is then replaced by $c\operatorname{id}_V$. Centrality alone does not require $C$ to act as a scalar in an arbitrary representation.
