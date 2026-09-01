---
id: def-quotient-seminorm
kind: definition
title: "The quotient seminorm \\(\\|x+M\\|_{X/M}=\\inf_{m\\in M}\\|x+m\\|=\\operatorname{dist}(x,M)\\)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-quotient-vector-space-coset-notation, def-norm-and-normed-space]
justified_by: [lem-quotient-seminorm-is-representative-independent]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-28
---

## Definition

Let $X$ be a normed space and let $M \le X$ be a linear subspace. For a coset
$x+M \in X/M$, define

$$\|x+M\|_{X/M} := \inf_{m \in M}\|x+m\|.$$

Equivalently, this is the distance from $x$ to $M$ inside the ambient normed
space:

$$\|x+M\|_{X/M} = \operatorname{dist}(x,M).$$

The formula is representative-independent by
[[lem-quotient-seminorm-is-representative-independent]], so it is a
well-defined seminorm on the quotient vector space.

## Remarks

- The word *seminorm* is deliberate: definiteness is the next theorem, and it
  requires closedness of $M$.
- No nearest point is assumed to exist. The definition uses an infimum only.
