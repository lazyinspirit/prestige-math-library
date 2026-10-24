---
id: def-middle-dimensional-intersection-form
kind: definition
title: "The middle-dimensional intersection form of a closed oriented 4k-manifold"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-singular-cohomology-ring
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - def-fundamental-class-of-a-compact-oriented-manifold
  - thm-top-homology-characterizes-compact-orientable-manifolds
  - prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise
  - thm-geometric-intersection-equals-the-poincare-dual-cup-pairing
  - rem-cap-product-order-awaits-the-at-sign-convention
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original p. 224: the rational form whose diagonalization defines the signature"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lecture 11 sections 11.2-11.4, printed pp. 93-94: equations (11.7)-(11.12), the integral pairing, its free quotient and the geometric interpretation"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 34: the rational quadratic form evaluated on the fundamental class"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $M$ be a closed oriented smooth manifold of dimension $4k$, $k\ge0$, with
orientation $o$ and fundamental class
$[M]\in H_{4k}(M;\mathbb Z)$ determined by $o$
([[def-fundamental-class-of-a-compact-oriented-manifold]],
[[thm-top-homology-characterizes-compact-orientable-manifolds]]). The
**middle-dimensional intersection form** of $M$ is
$$Q_M:H^{2k}(M;\mathbb R)\times H^{2k}(M;\mathbb R)\longrightarrow\mathbb R,\qquad Q_M(x,y):=\langle x\smile y,[M]\rangle,$$
where $\smile$ is the singular cup product of [[def-singular-cohomology-ring]]
and $\langle-,-\rangle$ is the Kronecker evaluation pairing of
[[def-kronecker-evaluation-pairing]], read on the fundamental class. The
pairing is well defined: the cup product is defined on cohomology classes and
the evaluation on classes is independent of cocycle and cycle representatives
by [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]].
Since $\dim M=4k$ and both variables have degree $2k$, the product
$x\smile y$ has degree $4k$ and pairs with the top-degree class $[M]$; the
coefficient field is $\mathbb R$, with $\mathbb Z\subset\mathbb R$ as the
coefficient image.

**Integral form.** On images of integral classes the formula restricts to the
integral pairing $\langle x\smile y,[M]\rangle$ on $H^{2k}(M;\mathbb Z)$,
valued in $\mathbb Z$. The torsion subgroup of $H^{2k}(M;\mathbb Z)$ lies in
the kernel of that integral pairing; this is proved in the symmetry and
nondegeneracy lemma following on this page, not assumed here, and it is what
lets the real form be controlled by the free quotient.

**Geometric identification.** For closed oriented embedded submanifolds
$A,B\subset M$ of complementary dimension $2k$, with Poincaré duals
$\mathrm{PD}[A],\mathrm{PD}[B]\in H^{2k}(M;\mathbb Z)$ of their fundamental
classes, one has
$$Q_M(\mathrm{PD}[A],\mathrm{PD}[B])=I(A,B)=\langle A,B\rangle_M,$$
the geometric intersection number, with the cohomology-first, front-evaluation
cap and cup conventions and the geometric factor order fixed by
[[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]]; no third
sign convention is introduced
([[rem-cap-product-order-awaits-the-at-sign-convention]]).

**Disconnected and empty manifolds.** If $M=M_1\sqcup\cdots\sqcup M_r$ is a
disjoint union of closed oriented components, the orientation restricts to each
component (orientability is componentwise,
[[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]])
and $Q_M$ is defined componentwise, on the summands of
$H^{2k}(M;\mathbb R)=\bigoplus_jH^{2k}(M_j;\mathbb R)$. For the empty manifold
one sets $Q_{\varnothing}=0$. The form is determined by this displayed formula
alone; its symmetry, nondegeneracy and additivity properties are not part of
the definition and are proved in the lemma following on this page. The pairing formula itself uses no choice principle. The geometric
identification assumes AC ([[def-axiom-of-choice]]), inherited from its
Poincare-duality supplier.
