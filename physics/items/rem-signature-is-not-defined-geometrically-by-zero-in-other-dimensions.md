---
id: rem-signature-is-not-defined-geometrically-by-zero-in-other-dimensions
kind: remark
title: "The zero extension of the signature is bookkeeping, not a geometric definition"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-signature-of-a-closed-oriented-four-k-manifold
  - def-unoriented-and-oriented-bordism-groups
  - lem-signature-is-additive-under-disjoint-union-and-orientation-reversal
  - thm-hirzebruch-signature-theorem
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original p. 224: the signature is defined to be zero if the dimension is not a multiple of 4 (an explicit convention)"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Exercise 11.25, printed p. 95: the zero convention is used only to extend the ring homomorphism"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 34: the same zero convention for dimensions not divisible by four"
verification:
  precheck: n/a
---

## Remark

Assume AC, inherited from the signature definition and theorem. The signature
$\sigma(M)$ is intrinsically defined only for closed oriented smooth manifolds of
dimension divisible by four, through the middle-dimensional form $Q_M$
([[def-signature-of-a-closed-oriented-four-k-manifold]]). Declaring
$\sigma(M)=0$ when $4\nmid\dim M$ is a bookkeeping extension used by the sources
to make the induced map $\Omega_*^{SO}\to\mathbb Z$ additive in all degrees
([[def-unoriented-and-oriented-bordism-groups]],
[[lem-signature-is-additive-under-disjoint-union-and-orientation-reversal]]);
it does not extend the middle-form definition of
[[def-signature-of-a-closed-oriented-four-k-manifold]] beyond dimensions $4k$.
The geometric identity in [[thm-hirzebruch-signature-theorem]] applies in
dimensions $4k$, while its algebraic formulation explicitly includes this zero
extension: on rational oriented bordism, the extended signature equals the
L-genus and is a unital $\mathbb Q$-algebra homomorphism. Thus the zero
extension is multiplicative in all degrees. It supplies no middle-form signature or top $L_k$ evaluation outside dimensions divisible by four: in dimensions
$4k+2$ the middle cup pairing is alternating rather than symmetric, so it has
no inertia signature in the sense used here, and the zero value assigned to
those dimensions is bookkeeping for the ring structure, not a geometric
pairing.
