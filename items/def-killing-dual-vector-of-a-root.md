---
id: def-killing-dual-vector-of-a-root
kind: definition
title: Killing-dual vector of a root
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-killing-form-orthogonality-of-root-spaces, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-killing-form-of-a-finite-dimensional-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §4, after Proposition 2.17"
landmark: false
---

## Definition

Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$, with root set $\Phi$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]), and let $B$ be
the Killing form ([[def-killing-form-of-a-finite-dimensional-lie-algebra]]).
Since $B|_{\mathfrak h}$ is nondegenerate by
[[prop-killing-form-orthogonality-of-root-spaces]], the map
$\mathfrak h\to\mathfrak h^*$, $H\mapsto B(H,\cdot)$, is a linear isomorphism;
for $\alpha\in\Phi$ the unique vector

$$H_\alpha\in\mathfrak h,\qquad B(H_\alpha,H)=\alpha(H)\quad\text{for all }H\in\mathfrak h,$$

is the **Killing-dual vector** of the root $\alpha$. For $\alpha\ne0$ it is
nonzero, since a nonzero functional cannot be represented by the zero vector
under an isomorphism.
