---
id: def-total-l-class-of-a-smooth-manifold
kind: definition
title: "The total L-class and the L-genus of a smooth manifold"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-completed-fourfold-graded-cohomology-ring
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-hirzebruch-l-polynomials
  - def-kronecker-evaluation-pairing
  - def-pontryagin-classes-by-complexification
  - def-pontryagin-number-of-a-closed-oriented-manifold
  - lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality
  - lem-l-polynomials-form-a-well-defined-multiplicative-sequence
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original pp. 223-225: the K-genus of a closed manifold as the pairing of the characteristic class with the fundamental class"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 36: the L-genus of a 4m-manifold as the evaluation of L_m on the fundamental class"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "section 8.1, printed pp. 67-68: the L-class of the tangent bundle and the L-genus"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume AC, inherited from the Pontryagin-class construction
([[def-pontryagin-classes-by-complexification]]) and used only there and in the
admissibility supplied by
[[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]].

Let $M$ be a smooth manifold: finite-dimensional, Hausdorff and second
countable, possibly with boundary, possibly disconnected, possibly empty. By
[[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]] such an $M$ is
a CW-type base, its tangent bundle $TM$ is a numerable finite-rank real bundle,
and the Pontryagin classes $p_i(TM)\in H^{4i}(M;\mathbb Z)$ are defined for all
$i\ge0$, with $p_0=1$ and $p_i(TM)=0$ whenever $2i>\dim M$
([[def-pontryagin-classes-by-complexification]],
[[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]]). The
**total L-class of $M$** is
$$L(M):=L(TM)\in\widehat H^{4*}(M;\mathbb Q),$$
the total L-class of the tangent bundle
([[def-hirzebruch-l-polynomials]]); its component of degree $4j$ is
$L_j(TM)=L_j(p_1(TM),\dots,p_j(TM))$, and for disconnected $M$ the class is taken componentwise. Naturality and stability on CW-type bases are supplied by the transport argument of [[def-pontryagin-number-of-a-closed-oriented-manifold]], and the L-identities extend to these bases by [[lem-l-polynomials-form-a-well-defined-multiplicative-sequence]]. The construction is well defined because each component is
a polynomial in the Pontryagin classes and the completed ring is the product of
the groups $H^{4j}(M;\mathbb Q)$
([[def-completed-fourfold-graded-cohomology-ring]],
[[lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality]]).

**The L-genus.** Let $M$ be a closed oriented smooth manifold of dimension
$4k$, $k\ge0$, with fundamental class $[M]\in H_{4k}(M;\mathbb Z)$. The
**L-genus of $M$** is the rational characteristic number
$$L[M]:=\bigl\langle L_k(TM),[M]\bigr\rangle\in\mathbb Q,$$
the degree-$4k$ evaluation of the total L-class under the Kronecker pairing
([[def-kronecker-evaluation-pairing]],
[[def-fundamental-class-of-a-compact-oriented-manifold]]). Expanding the
weight-$4k$ polynomial $L_k=\sum_{|J|=k}c_Jp_J$ with $c_J\in\mathbb Q$ and
$p_J=p_{j_1}\cdots p_{j_r}$ ([[def-hirzebruch-l-polynomials]]) gives
$$L[M]=\sum_{|J|=k}c_J\,p_J[M],$$
so the L-genus is a rational linear combination of the Pontryagin numbers
$p_J[M]$ of [[def-pontryagin-number-of-a-closed-oriented-manifold]].

**Zero extension.** Since $L(M)=\sum_{j\ge0}L_j(TM)$ is concentrated in degrees
divisible by four, a closed oriented manifold whose dimension is not divisible
by four has no degree-$4j$ component in its dimension and no L-genus of the
above form; one declares $L[M]:=0$ in that case as a bookkeeping extension only
(see the closing bookkeeping remark on this page). Naturality and
multiplicativity of $L$ are properties proved in
[[lem-l-polynomials-form-a-well-defined-multiplicative-sequence]], not part of
this definition.
