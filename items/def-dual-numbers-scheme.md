---
id: def-dual-numbers-scheme
kind: definition
title: "The affine scheme of dual numbers"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-scheme, def-polynomial-ring-over-a-commutative-ring, def-quotient-ring]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.29"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Definition

For a field $k$, the **dual-numbers scheme** is
$D_k=\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$. Its class $\epsilon$ is
nilpotent, so this is an infinitesimal affine test scheme rather than a reduced
point.
