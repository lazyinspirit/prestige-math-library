---
id: def-lattice-distributive-lattice-and-order-ideal
kind: definition
title: "Lattices, distributive lattices, and order ideals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
aliases: []
landmark: true
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

A **lattice** is a poset $L$ in which every pair $x,y$ has a greatest lower
bound, its **meet** $x\wedge y$, and a least upper bound, its **join**
$x\vee y$. A lattice is **distributive** when, for all $x,y,z\in L$,

$$x\wedge(y\vee z)=(x\wedge y)\vee(x\wedge z)$$

and

$$x\vee(y\wedge z)=(x\vee y)\wedge(x\vee z).$$

Let $P$ be a poset. An **order ideal**, or **down-set**, is a subset
$I\subseteq P$ such that $y\in I$ and $x\le y$ imply $x\in I$. The set of all
order ideals of $P$, ordered by inclusion, is denoted $J(P)$. Both
$\varnothing$ and $P$ are order ideals.

A **lattice isomorphism** is a bijection preserving meets and joins. Such a map
also preserves and reflects the order, since $x\le y$ is equivalent to
$x\wedge y=x$.
