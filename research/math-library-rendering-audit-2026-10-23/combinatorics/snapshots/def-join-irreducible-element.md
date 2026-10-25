---
id: def-join-irreducible-element
kind: definition
title: "Join-irreducible elements of a nonempty finite lattice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-lattice-distributive-lattice-and-order-ideal]
justified_by: [lem-finite-lattice-join-irreducible-decomposition]
aliases: []
landmark: false
verification:
  audited: 2026-07-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.212, Lecture 16: Distributive lattices"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/resources/mit18_212s19_lec16/"
pipeline_run: null
---

## Definition

Let $L$ be a nonempty finite lattice. Its least element, whose existence is
proved in [[lem-finite-lattice-join-irreducible-decomposition]], is denoted
$0_L$. An element $j\in L$ is **join-irreducible** if $j\ne0_L$ and

$$j=a\vee b\quad\Longrightarrow\quad j=a\text{ or }j=b$$

for all $a,b\in L$. The set of join-irreducible elements, with the order
inherited from $L$, is denoted $\operatorname{JI}(L)$.

An element $j$ is **join-prime** if

$$j\le a\vee b\quad\Longrightarrow\quad j\le a\text{ or }j\le b.$$

Join-prime implies join-irreducible whenever $j\ne0_L$. In a distributive
lattice the converse holds for join-irreducible elements.
