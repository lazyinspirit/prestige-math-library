---
id: def-local-invariant-map-of-the-brauer-group
kind: definition
title: "Normalized local invariant map of a Brauer group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-absolute-galois-group-of-a-field
  - def-brauer-group-as-galois-cohomology
  - def-class-formation
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Romyar Sharifi, Algebraic Number Theory, Chapter 9, §9.1, Definition 9.1.14"
      url: "https://www.math.ucla.edu/~sharifi/algnum.pdf"
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter IV, §4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Definition

Let $K$ be a nonarchimedean local field with finite residue field, fix a
separable closure $K_s$, and suppose a class-formation structure is given on
$(G_K,K_s^\times)$. The **local invariant map** is
$\operatorname{inv}_K:=\operatorname{inv}_{G_K}:\operatorname{Br}(K)\to
\mathbb Q/\mathbb Z$. Its normalization is the arithmetic-Frobenius
normalization: on classes inflated from the maximal unramified extension
$K^{\mathrm{ur}}/K$, it is the composite of the valuation-induced map to
$H^2(\operatorname{Gal}(K^{\mathrm{ur}}/K),\mathbb Z)$, the inverse of the
connecting map for $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$,
and evaluation at the arithmetic Frobenius $x\mapsto x^{|k_K|}$.

## Definition references

[[def-class-formation]]

[[def-brauer-group-as-galois-cohomology]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[Romyar Sharifi, *Algebraic Number Theory*, Chapter 9, §9.1, Definition 9.1.14](https://www.math.ucla.edu/~sharifi/algnum.pdf)

[J. S. Milne, *Class Field Theory*, Chapter IV, §4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]
