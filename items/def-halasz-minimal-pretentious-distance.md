---
dependency_level: 2
id: def-halasz-minimal-pretentious-distance
kind: definition
title: "Halász minimal pretentious distance"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-pretentious-distance-to-an-archimedean-twist
justified_by:
  - lem-halasz-minimal-distance-is-well-defined
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew Granville and K. Soundararajan, Pretentious Multiplicative Number Theory (author manuscript, 2011)"
      url: "https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf"
    - title: "Andrew Granville, Adam J. Harper, and K. Soundararajan, A New Proof of Halász’s Theorem, and Its Consequences"
      url: "https://discovery.ucl.ac.uk/id/eprint/1568743/1/Granville%20HalaszActualPaperRevision.pdf"
---

## Definition

Let $f:\mathbb Z_{>0}\to\mathbb C$ be multiplicative with $|f(n)|\le1$ for
every $n\ge1$. For real $x\ge3$ and $T\ge1$, define the minimal pretentious
distance

$$ M(f;x,T):=\min_{|t|\le T}D(f,n^{it};x)^2. $$

The minimum is attained on the nonempty compact interval $[-T,T]$, and its
value is nonnegative.

## Definition references

[[def-pretentious-distance-to-an-archimedean-twist]]

[[lem-halasz-minimal-distance-is-well-defined]]

[Granville and Soundararajan, *Pretentious Multiplicative Number Theory*, §4.1, PDF p. 32](https://dms.umontreal.ca/~andrew/PDF/PretendBook010610.pdf)

[Granville, Harper, and Soundararajan, “A New Proof of Halász’s Theorem,” §2.3, PDF p. 2](https://discovery.ucl.ac.uk/id/eprint/1568743/1/Granville%20HalaszActualPaperRevision.pdf)
