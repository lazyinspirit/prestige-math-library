---
id: ex-orientation-reversed-complex-projective-plane-has-signature-minus-one
kind: example
title: "The orientation-reversed projective plane has signature minus one"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 12
deps:
  - lem-signature-and-l-genus-agree-on-complex-projective-spaces
  - cor-four-dimensional-signature-formula
  - def-axiom-of-choice
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-kronecker-evaluation-pairing
  - def-middle-dimensional-intersection-form
  - def-pontryagin-classes-by-complexification
  - def-pontryagin-number-of-a-closed-oriented-manifold
  - def-signature-of-a-closed-oriented-four-k-manifold
  - lem-signature-is-additive-under-disjoint-union-and-orientation-reversal
  - lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Equation (11.3), printed p. 93, and Example 11.23, printed p. 95: the fundamental class negates and the orientation-reversed projective plane has signature -1"
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original p. 224: the rational middle cup-product form defines the signature; its negation under orientation reversal is derived locally"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 34: definition of the rational middle cup-product form used for the signature"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume AC, inherited from the projective-plane signature example. Let
$-\mathbb{CP}^2$ denote $\mathbb{CP}^2$ with the reversed orientation. Then
$$\sigma(-\mathbb{CP}^2)=-1,\qquad p_1[-\mathbb{CP}^2]=-3,\qquad \sigma(-\mathbb{CP}^2)=\frac{p_1[-\mathbb{CP}^2]}{3}.$$

## Facts & Assumptions

**Given:** AC; the closed oriented smooth $4$-manifold $\mathbb{CP}^2$ with the complex orientation and its orientation reversal $-\mathbb{CP}^2$; the generator $y=c_1(\gamma^*)$.

[F1] For closed oriented smooth $4k$-manifolds, $\sigma(-M)=-\sigma(M)$, where $-M$ is $M$ with the reversed orientation ([[lem-signature-is-additive-under-disjoint-union-and-orientation-reversal]]).

[F2] The fundamental class of the orientation-reversed manifold is $[-M]=-[M]$ in $H_{4k}(M;\mathbb Z)$: the class determined by the reversed orientation is the negative of the class determined by the original orientation ([[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F3] Pontryagin classes are defined from the complexification of the bundle and require no orientation of the base; reversing the orientation of the manifold leaves the tangent bundle and its Pontryagin classes unchanged, and for $\mathbb{CP}^2$ the supplier gives $p_1(T\mathbb{CP}^2)=3y^2$ and $p_1[\mathbb{CP}^2]=3$ ([[def-pontryagin-classes-by-complexification]], [[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]).

[F4] The first Pontryagin number is $p_1[M]=\langle p_1(TM),[M]\rangle$ and the Kronecker pairing is additive in its homology variable ([[def-pontryagin-number-of-a-closed-oriented-manifold]], [[def-kronecker-evaluation-pairing]]).

[F5] The middle form is $Q_M(x,y)=\langle x\smile y,[M]\rangle$ and, for every closed oriented $4$-manifold, $\sigma(M)=p_1[M]/3$ ([[def-middle-dimensional-intersection-form]], [[cor-four-dimensional-signature-formula]]).

## Verification

**Proof technique:** track the two sign changes, in the fundamental class and in the orientation of the form.

1.1 The projective tangent-bundle supplier gives $H^*(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[y]/(y^3)$, $\langle y^2,[\mathbb{CP}^2]\rangle=1$, and $p_1(T\mathbb{CP}^2)=3y^2$, so $p_1[\mathbb{CP}^2]=3$ ([[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]). Also $\sigma(\mathbb{CP}^2)=1$ by [[lem-signature-and-l-genus-agree-on-complex-projective-spaces]]. [given, F3]

1.2 The orientation reversal $-\mathbb{CP}^2$ has the same underlying smooth manifold and the same tangent bundle as $\mathbb{CP}^2$, and by [F3] the Pontryagin classes do not see the orientation of the manifold, so $p_1(T(-\mathbb{CP}^2))=p_1(T\mathbb{CP}^2)=3y^2$. [given, F3]

1.3 By [F5] and [F2], $Q_{-\mathbb{CP}^2}(y,y)=\langle y\smile y,[-\mathbb{CP}^2]\rangle=-\langle y^2,[\mathbb{CP}^2]\rangle=-1$, so the matrix of the middle form in the basis $\{y\}$ is $(-1)$ with inertia $(0,1,0)$ and signature $-1$; this is the same value as [F1] applied to $\sigma(\mathbb{CP}^2)=1$. [given, F1, F2, F5]

2.1 By [F2] and [F4] applied to $M=\mathbb{CP}^2$ with reversed orientation, $p_1[-\mathbb{CP}^2]=\langle p_1(T(-\mathbb{CP}^2)),[-\mathbb{CP}^2]\rangle=\langle 3y^2,-[\mathbb{CP}^2]\rangle=-3\langle y^2,[\mathbb{CP}^2]\rangle=-3$, since $\langle y^2,[\mathbb{CP}^2]\rangle=1$ and $p_1[\mathbb{CP}^2]=3$ by [F3]. [step 1.2, F2, F3, F4]

3.1 By the four-dimensional formula in [F5], $\sigma(-\mathbb{CP}^2)=p_1[-\mathbb{CP}^2]/3=-3/3=-1$, in agreement with step 1.3, so all three displayed values hold. [step 2.1, step 1.3, F5] ∎
