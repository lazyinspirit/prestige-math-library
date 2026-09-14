---
id: def-killing-form-of-a-finite-dimensional-lie-algebra
kind: definition
title: Killing form
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-trace-form-of-a-finite-dimensional-representation, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]
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
    - title: "Milne, Lie Algebras, §4, Killing form"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§4, paragraph following Proposition 4.8, printed p. 42"
---

## Definition

For a finite-dimensional Lie algebra $\mathfrak g$, its **Killing form** is
the trace form of the adjoint representation:

$$K_{\mathfrak g}(x,y)=\operatorname{tr}_{\mathfrak g}(\operatorname{ad}_x\operatorname{ad}_y).$$

Here $\operatorname{ad}_x(z)=[x,z]$. Thus the trace is taken on the vector
space $\mathfrak g$ itself. In particular, if $\mathfrak g=0$ or if
$\mathfrak g$ is abelian, then every adjoint operator is zero and
$K_{\mathfrak g}=0$. Symmetry and invariance will follow from the general
trace-form calculation rather than being included in the definition.
