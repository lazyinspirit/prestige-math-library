---
id: def-bounded-reachability-recursion
kind: definition
title: "The bounded reachability recursion for directed paths of length at most 2^i"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multigraph-loop-and-digraph]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Let $G=(V,A)$ be a finite digraph in the sense of
[[def-multigraph-loop-and-digraph]], let $u,v\in V$, and let $i\in\mathbb N$.
Define the predicate $\operatorname{Reach}_i^G(u,v)$ recursively by

$$\operatorname{Reach}_0^G(u,v)\iff \bigl(u=v \text{ or } (u,v)\in A\bigr),$$

and, for $i\ge 1$,

$$\operatorname{Reach}_i^G(u,v)\iff \exists z\in V\ \Bigl(\operatorname{Reach}_{i-1}^G(u,z)\wedge \operatorname{Reach}_{i-1}^G(z,v)\Bigr).$$

This is the **bounded reachability recursion**. Its intended meaning is that
$\operatorname{Reach}_i^G(u,v)$ asks whether there is a directed path from $u$
to $v$ of length at most $2^i$.

## Remarks

- The level $i=0$ allows equality as well as one legal arc, so it captures
  paths of lengths $0$ and $1$ exactly.
- The recursive step halves the permitted path-length scale.
