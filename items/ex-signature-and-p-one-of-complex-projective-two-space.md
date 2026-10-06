---
id: ex-signature-and-p-one-of-complex-projective-two-space
kind: example
title: "Signature and first Pontryagin number of the complex projective plane"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 12
deps:
  - cor-four-dimensional-signature-formula
  - def-axiom-of-choice
  - def-kronecker-evaluation-pairing
  - def-middle-dimensional-intersection-form
  - def-pontryagin-number-of-a-closed-oriented-manifold
  - def-signature-of-a-closed-oriented-four-k-manifold
  - lem-signature-and-l-genus-agree-on-complex-projective-spaces
  - lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original pp. 225-226: the signature of $\\mathbb{CP}^2$ is 1 and its first Pontryagin class is $3a^2$"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Equation (7.64), printed p. 65, and Example 11.22, printed p. 95: the L-class of $\\mathbb{CP}^2$ pairs to 1 and the signature is 1"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 36: $p(\\tau\\mathbb{CP}^2)=(1+x^2)^3$ and the signature is 1"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume AC, inherited from the signature and characteristic-class suppliers.
Give $\mathbb{CP}^2$ its complex orientation, let
$\gamma\to\mathbb{CP}^2$ be the tautological complex line, and put
$y=c_1(\gamma^*)$. Then $H^*(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[y]/(y^3)$
with $\langle y^2,[\mathbb{CP}^2]\rangle=1$, the middle-dimensional
intersection form of $\mathbb{CP}^2$ is the $1\times1$ matrix $(1)$ in the
basis $\{y\}$, so
$$\sigma(\mathbb{CP}^2)=1;$$
and $p(T\mathbb{CP}^2)=(1+y^2)^3$, so $p_1(T\mathbb{CP}^2)=3y^2$, the first
Pontryagin number is $p_1[\mathbb{CP}^2]=3$, and
$$1=\sigma(\mathbb{CP}^2)=\frac{p_1[\mathbb{CP}^2]}{3}.$$

## Facts & Assumptions

**Given:** AC, the tautological complex line $\gamma\to\mathbb{CP}^2$, the class $y=c_1(\gamma^*)$, and the complex orientation of $\mathbb{CP}^2$.

[F1] The in-run supplier gives $H^*(\mathbb{CP}^n;\mathbb Z)=\mathbb Z[x]/(x^{n+1})$ with $x=c_1(\gamma^*)$, $\langle x^n,[\mathbb{CP}^n]\rangle=1$, and $p(T\mathbb{CP}^n)=(1+x^2)^{n+1}$ in the truncated ring ([[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]).

[F2] The middle-dimensional intersection form is $Q_M(x,y)=\langle x\smile y,[M]\rangle$ on $H^{2k}(M;\mathbb R)$, and the signature is the difference $p-q$ of the positive and negative inertia indices of the nondegenerate symmetric form $Q_M$ ([[def-middle-dimensional-intersection-form]], [[def-signature-of-a-closed-oriented-four-k-manifold]]).

[F3] The first Pontryagin number is $p_1[M]=\langle p_1(TM),[M]\rangle\in\mathbb Z$, the Kronecker evaluation of the Pontryagin class on the fundamental class ([[def-pontryagin-number-of-a-closed-oriented-manifold]], [[def-kronecker-evaluation-pairing]]).

[F4] For every closed oriented $4$-manifold $M$, $\sigma(M)=p_1[M]/3$ ([[cor-four-dimensional-signature-formula]]), and on projective spaces the signature and the L-genus agree: $\sigma(\mathbb{CP}^{2k})=1=L[\mathbb{CP}^{2k}]$ for every $k\ge0$ ([[lem-signature-and-l-genus-agree-on-complex-projective-spaces]]).

## Verification

**Proof technique:** direct; the middle cohomology is one-dimensional and the Pontryagin class is read off the splitting.

1.1 By [F1] with $n=2$, $H^*(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[y]/(y^3)$ and $\langle y^2,[\mathbb{CP}^2]\rangle=1$; hence $H^2(\mathbb{CP}^2;\mathbb R)=\mathbb R y$ and, by [F2], the matrix of $Q_{\mathbb{CP}^2}$ in the basis $\{y\}$ is the $1\times1$ matrix with entry $Q(y,y)=\langle y\smile y,[\mathbb{CP}^2]\rangle=1$. [given, F1, F2]

1.2 By [F1], $p(T\mathbb{CP}^2)=(1+y^2)^3=1+3y^2+3y^4+y^6$, and the terms $3y^4$ and $y^6$ vanish because $y^3=0$ in $H^*(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[y]/(y^3)$; hence $p_1(T\mathbb{CP}^2)=3y^2$. [given, F1]

2.1 The $1\times1$ matrix $(1)$ has inertia $(1,0,0)$, so [F2] gives $\sigma(\mathbb{CP}^2)=1-0=1$, in agreement with [F4]. [step 1.1, F2, F4]

2.2 By [F3], $p_1[\mathbb{CP}^2]=\langle 3y^2,[\mathbb{CP}^2]\rangle=3\langle y^2,[\mathbb{CP}^2]\rangle=3\cdot1=3$. [step 1.2, F1, F3]

3.1 By the four-dimensional formula in [F4], $\sigma(\mathbb{CP}^2)=p_1[\mathbb{CP}^2]/3=3/3=1$, so $1=\sigma(\mathbb{CP}^2)=p_1[\mathbb{CP}^2]/3$, as claimed. [step 2.1, step 2.2, F4] ∎
