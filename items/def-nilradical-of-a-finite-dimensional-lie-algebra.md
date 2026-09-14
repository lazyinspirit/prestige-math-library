---
id: def-nilradical-of-a-finite-dimensional-lie-algebra
kind: definition
title: Nilradical
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lower-central-series-and-nilpotent-lie-algebra, def-lie-subalgebra-ideal-and-center]
justified_by: [thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Corollary 2.24"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Corollary 2.24 and surrounding nilradical discussion, printed p. 15"
---

## Definition

Let $\mathfrak g$ be a finite-dimensional Lie algebra over a
characteristic-zero field. Its **nilradical**, denoted
$\operatorname{nilrad}(\mathfrak g)$, is the largest nilpotent ideal of
$\mathfrak g$: it is nilpotent in the lower-central-series sense
([[def-lower-central-series-and-nilpotent-lie-algebra]]), is an ideal
([[def-lie-subalgebra-ideal-and-center]]), and contains every nilpotent ideal.

The word “largest” includes an existence assertion. It is supplied by
[[thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero]],
which proves that sums of nilpotent ideals are nilpotent in this setting and
then uses finite dimensionality. Thus
$\operatorname{nilrad}(0)=0$, and if $\mathfrak g$ itself is nilpotent then
$\operatorname{nilrad}(\mathfrak g)=\mathfrak g$.

The nilradical is not defined as the set of all $x$ for which
$\operatorname{ad}_x$ is nilpotent: that set need not be a linear subspace.
