---
id: rem-direct-integrals-and-general-multiplicity-theory
kind: remark
title: Direct integrals and general multiplicity theory
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-unitary-equivalence-classified-by-measure-class-and-multiplicity, def-spectral-multiplicity-function-in-the-separable-case, lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension, cex-a-normal-operator-need-not-have-any-eigenvectors, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Chapter IX §10 and the closing remarks, printed pp.293–301"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
---

## Remark

Assume AC. The standard measurable direct-integral model for a bounded normal
operator on a separable Hilbert space, and the classification of such operators
by the scalar measure class together with the almost-everywhere multiplicity
function, are proved on this page: the model with its measurable field of
fibers of dimension $m(z)$ and the identification with the orthogonal sum of
cyclic $L^2$-summands are
[[def-spectral-multiplicity-function-in-the-separable-case]]; the invariance of
the scalar measure class and of the fiber dimension under unitary intertwiners
is [[lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension]]; and
the classification statement is
[[thm-unitary-equivalence-classified-by-measure-class-and-multiplicity]]. In
that theorem the multiplicity is the almost-everywhere dimension of the
direct-integral fiber, not the dimension of the eigenspace $\ker(T-zI)$. The
two notions can differ drastically: [[cex-a-normal-operator-need-not-have-any-eigenvectors]]
exhibits a normal operator with spectrum $[0,1]$ but no nonzero eigenspace at
any spectral point.

General measurable fields of Hilbert spaces beyond the standard countable
fibers used here, and nonseparable multiplicity theory, are **orientation
only**: they are not constructed, not stated as results, and are not suppliers
for any item on this page or its consumers. The separable statements above are
self-contained in the sense that every supplier they use is either proved
earlier in the library or earlier on this page.
