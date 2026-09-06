---
id: def-reduced-affine-scheme
kind: definition
title: "Reduced affine schemes"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-scheme, def-nilradical-and-reduced-ring, cor-affine-scheme-isomorphism-ring-isomorphism]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.28"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Definition

An affine scheme is **reduced** if (equivalently, for every) coordinate ring
$A$ is reduced. This is presentation-independent because an affine-scheme
isomorphism gives an isomorphism of coordinate rings.
