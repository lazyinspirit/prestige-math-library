---
id: def-radical-of-a-finite-dimensional-lie-algebra
kind: definition
title: Solvable radical
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-derived-series-and-solvable-lie-algebra, def-lie-subalgebra-ideal-and-center]
justified_by: [thm-sum-of-solvable-ideals-is-solvable]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Corollary 3.5 and Definition 3.6"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Corollary 3.5 and Definition 3.6, printed pp. 16–17"
---

## Definition

Let $\mathfrak g$ be a finite-dimensional Lie algebra. Its **solvable
radical**, denoted $\operatorname{rad}(\mathfrak g)$, is the largest solvable
ideal of $\mathfrak g$: it is a solvable ideal and contains every solvable
ideal of $\mathfrak g$. Here solvability is as in
[[def-derived-series-and-solvable-lie-algebra]], and “ideal” has the meaning in
[[def-lie-subalgebra-ideal-and-center]].

Existence and uniqueness are not assumed merely from the phrase “largest.”
They are supplied by [[thm-sum-of-solvable-ideals-is-solvable]], which proves
that finite sums remain solvable and that finite dimensionality reduces the
sum of all solvable ideals to a finite sum.

Thus $\operatorname{rad}(0)=0$. If $\mathfrak g$ is solvable, then
$\operatorname{rad}(\mathfrak g)=\mathfrak g$; otherwise the radical may be
zero or a proper nonzero ideal. No characteristic assumption is made.
