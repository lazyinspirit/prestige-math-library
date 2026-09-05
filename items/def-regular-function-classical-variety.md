---
id: def-regular-function-classical-variety
kind: definition
title: "Regular functions on open subsets of a classical affine variety"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-variety-classical, def-coordinate-ring-affine-algebraic-set]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Definition 3.8"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, 2.5.1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $X$ be a classical affine variety over an algebraically closed field $k$,
and let $U \subseteq X$ be open. A function $f:U \to k$ is **regular on $U$**
when for every point $x \in U$ there exist an open neighbourhood $W \subseteq U$
of $x$ and elements $a,b \in k[X]$ such that $b(y) \ne 0$ for every $y \in W$
and
$$ f(y)=\frac{a(y)}{b(y)}\qquad\text{for every }y\in W. $$

The set of regular functions on $U$ is denoted $\mathcal O_X(U)$.

Thus a regular function is locally a quotient of global regular functions from
the affine variety itself, with a denominator that stays nonzero on the
neighbourhood where that formula is used.
