---
id: cex-scheme-not-determined-by-underlying-space
kind: counterexample
title: "A scheme is not determined by its underlying topological space"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-spectrum-field-one-point, ex-dual-numbers-one-point-nonreduced, def-reduced-affine-scheme]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.28"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Statement refuted

“The underlying topological space determines a scheme.”

## Facts & Assumptions

**Given:** A field $k$.

[F1] $\operatorname{Spec}k$ is a one-point scheme ([[ex-spectrum-field-one-point]]).

[F2] $\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$ is a nonreduced one-point scheme ([[ex-dual-numbers-one-point-nonreduced]]).

## Counterexample

**Proof technique:** direct.

1.1 By [F1] and [F2], the two spectra have homeomorphic underlying one-point spaces. [F1, F2]

1.2 The first is reduced because a nonzero element of the field $k$ is a unit and so cannot be nilpotent, while the second has a nonzero square-zero class $\epsilon$. [F2, algebra]

2.1 Scheme isomorphisms preserve affine coordinate rings up to isomorphism and hence reducedness, so these schemes are not isomorphic. [step 1.1, step 1.2] ∎
 
