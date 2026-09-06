---
id: def-logspace-uniform-circuit-family
kind: definition
title: "A logspace-uniform Boolean circuit family"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-l-and-nl]
verification:
  audited: 2026-09-06
  precheck: n/a
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Definition 6.5"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Definition

A Boolean circuit is a finite directed acyclic graph with numbered input nodes,
constant nodes, and gates from the fixed basis $\{\mathsf{AND},\mathsf{OR},\mathsf{NOT}\}$;
AND and OR gates have two predecessors, NOT gates have one, and constants
have values zero or one. Its output is one designated node. A family
$(C_n)_{n\ge0}$ has exactly $n$ input nodes labeled $x_1,\ldots,x_n$ in
$C_n$ and polynomially many nodes as a function of $n+2$. The family is
**logspace-uniform** when a deterministic read-only-input logspace transducer,
on input $1^n$ and a query with binary node indices of length $O(\log(n+2))$,
halts and answers the size, gate-type (including input labels and constant
values), and predecessor queries for the
topologically numbered encoding of $C_n$, and answers which numbered gate is
the designated output. In particular, it can stream that polynomial-length
encoding without storing it.
