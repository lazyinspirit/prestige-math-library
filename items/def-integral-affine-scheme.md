---
id: def-integral-affine-scheme
kind: definition
title: "Integral affine schemes"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-irreducible-topological-space-and-subset, def-reduced-affine-scheme, def-zero-divisor-and-integral-domain, thm-irreducible-closed-subsets-and-prime-ideals]
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.28"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Definition

An affine scheme $X\cong\operatorname{Spec}A$ is **integral** when $A$ is a
nonzero integral domain. Equivalently, $X$ is nonempty, reduced, and
irreducible: reduced says the nilradical is zero, and irreducibility says that
nilradical is prime, hence $(0)$ is prime; nonemptiness excludes $A=0$.
