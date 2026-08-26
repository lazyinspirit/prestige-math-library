---
id: def-substitution-of-combinatorial-classes
kind: definition
title: "Substitution of combinatorial classes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-combinatorial-class-and-ordinary-generating-function]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Definition

Let $\mathcal{A}$ and $\mathcal{B}$ be combinatorial classes. Their
**substitution** $\mathcal{A} \circ \mathcal{B}$ is the class of pairs

$$\bigl(a,(b_1,\dots,b_r)\bigr)$$

such that $a \in \mathcal{A}$ has size $r$ and each $b_i \in \mathcal{B}$. Its
size is

$$\bigl|\bigl(a,(b_1,\dots,b_r)\bigr)\bigr| := |b_1| + \cdots + |b_r|.$$

The point is that an object of size $r$ in $\mathcal{A}$ supplies exactly $r$
ordered slots to be filled by $\mathcal{B}$-objects.

If $\mathcal{B}$ has a size-zero object, then for suitable outer classes
$\mathcal A$ fixed total size can arise from arbitrarily large values of $r$, so
the substituted class need not be combinatorial. The substitution theorem
therefore assumes $[x^0]B(x)=0$.
