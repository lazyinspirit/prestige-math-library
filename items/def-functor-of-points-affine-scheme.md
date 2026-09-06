---
id: def-functor-of-points-affine-scheme
kind: definition
title: "The functor of points of an affine scheme"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-scheme, thm-affine-scheme-ring-anti-equivalence, def-functor-and-contravariant-functor]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.81"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Definition

For a scheme $X$, its **functor of points** is the covariant functor on
commutative rings $h_X(R)=\operatorname{Hom}_{\rm Sch}(\operatorname{Spec}R,X)$.
For $X=\operatorname{Spec}A$, it is naturally
$h_X(R)=\operatorname{Hom}_{\rm CRing}(A,R)$.
