---
id: def-signature-of-a-closed-oriented-four-k-manifold
kind: definition
title: "The signature of a closed oriented manifold of dimension divisible by four"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 7
deps:
  - def-middle-dimensional-intersection-form
  - lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - thm-sylvesters-law-of-inertia
  - def-axiom-of-choice
justified_by:
  - lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original p. 224: the signature is the number of positive minus negative diagonal entries of the diagonalized middle form"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Definition 11.14, printed p. 94: the difference of the positive and negative inertia indices of the symmetric real middle form"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 34: the number of positive minus negative diagonal entries of the rational form"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume AC ([[def-axiom-of-choice]]), inherited from the nondegeneracy of the
middle form. Let $M$ be a closed oriented smooth manifold of dimension $4k$,
$k\ge0$, and let $Q_M$ be its middle-dimensional intersection form on
$H^{2k}(M;\mathbb R)$ ([[def-middle-dimensional-intersection-form]],
[[lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate]]).
Let $(p,q,z)$ be the inertia data of the symmetric form $Q_M$
([[def-definiteness-inertia-and-signature-data-over-the-reals]]): $p$ the
maximal dimension of a positive-definite subspace, $q$ the maximal dimension of
a negative-definite subspace, and $z$ the dimension of the radical. By
Sylvester's law of inertia ([[thm-sylvesters-law-of-inertia]]) these integers
are intrinsic to $Q_M$ and $p+q+z=\dim_{\mathbb R}H^{2k}(M;\mathbb R)$. The
**signature** of $M$ is
$$\sigma(M):=p-q\in\mathbb Z.$$

The middle form is nondegenerate by
[[lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate]], so
$z=0$ and $p+q=\dim_{\mathbb R}H^{2k}(M;\mathbb R)$; the signature can
equivalently be read as the difference of the numbers of positive and negative
diagonal entries in any basis diagonalizing $Q_M$. For $k=0$ the group
$H^0(M;\mathbb R)$ is free on the components of $M$ and the pairing is the
signed count of components, so $\sigma(M^0)$ is the number of positively
oriented components minus the number of negatively oriented components, and
$\sigma(\varnothing)=0$.

The signature is defined by this item only for dimensions divisible by four; no
value is assigned in other dimensions (see the closing bookkeeping remark on
this page). The value is independent of the chosen diagonalizing basis and of
reading the form over $\mathbb Q$ or over $\mathbb R$ by
[[lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals]],
the lemma named in `justified_by`.
