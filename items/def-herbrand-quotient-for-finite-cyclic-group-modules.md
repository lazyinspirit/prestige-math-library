---
id: def-herbrand-quotient-for-finite-cyclic-group-modules
kind: definition
title: "Herbrand quotient of a finite cyclic group module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter II §3"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Definition

Let $G=\langle\sigma\rangle$ be a finite cyclic group of order $n$, let $M$
be a $G$-module written additively, and put
$N_G=1+\sigma+\cdots+\sigma^{n-1}$. Define
$$\widehat H^0(G,M)=M^G/N_GM,\qquad \widehat H^{-1}(G,M)=\ker(N_G:M\to M)/(\sigma-1)M.$$
When both groups are finite, the **Herbrand quotient** is
$$h_G(M)=\frac{|\widehat H^0(G,M)|}{|\widehat H^{-1}(G,M)|}.$$

## Definition references

[J. S. Milne, *Class Field Theory*, Chapter II §3, printed pp. 77–80](https://www.jmilne.org/math/CourseNotes/CFT.pdf)
