---
id: cex-euler-characteristic-does-not-determine-signature
kind: counterexample
title: "The Euler characteristic does not determine the signature"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 8
deps:
  - lem-signature-and-l-genus-agree-on-complex-projective-spaces
  - def-axiom-of-choice
  - def-euler-characteristic-of-a-finite-cw-complex
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-grassmannian-subspaces
  - def-middle-dimensional-intersection-form
  - def-projective-space-points
  - def-schubert-cells-in-real-and-complex-grassmannians
  - def-signature-of-a-closed-oriented-four-k-manifold
  - lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes
  - thm-schubert-cells-give-the-stable-grassmannian-cw-structure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Examples 11.22-11.23, printed p. 95: the two orientation-reversed projective planes have signatures 1 and -1"
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original pp. 224-226: the signature is read from the middle form, not from Betti numbers"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 34: the signature is computed from the intersection form"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

The Euler characteristic of a closed oriented four-manifold determines its
signature.

## Facts & Assumptions

**Given:** AC; the complex projective plane $\mathbb{CP}^2$ with the complex orientation and its orientation reversal $-\mathbb{CP}^2$; the Grassmannian $\operatorname{Gr}_1(\mathbb C^3)$ with its Schubert stratification.

[F1] $\operatorname{Gr}(1,V)$ is the set of $1$-dimensional linear subspaces of $V$, and $\mathbf P^2_{\mathbb C}$ is the quotient of $\mathbb C^3\setminus\{0\}$ by nonzero scalar multiplication; a point of either is exactly a complex line in $\mathbb C^3$, so $\mathbb{CP}^2=\operatorname{Gr}_1(\mathbb C^3)$ ([[def-grassmannian-subspaces]], [[def-projective-space-points]]).

[F2] A Schubert symbol for $\operatorname{Gr}_n(\mathbb F^N)$ is a strictly increasing sequence $1\le a_1<\cdots<a_n\le N$, its cell satisfies $e(a)\cong\mathbb F^{d(a)}$ with $d(a)=\sum_i(a_i-i)$, of real dimension $d(a)$ for $\mathbb F=\mathbb R$ and $2d(a)$ for $\mathbb F=\mathbb C$, and the Schubert strata form a finite CW structure on $\operatorname{Gr}_n(\mathbb F^N)$ ([[def-schubert-cells-in-real-and-complex-grassmannians]], [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]).

[F3] For a finite CW complex with $c_n$ cells in dimension $n$, the Euler characteristic is $\chi(X)=\sum_n(-1)^n c_n(X)$ ([[def-euler-characteristic-of-a-finite-cw-complex]]).

[F4] $\sigma(\mathbb{CP}^2)=1$ and $\sigma(-\mathbb{CP}^2)=-1$ ([[lem-signature-and-l-genus-agree-on-complex-projective-spaces]], the orientation computation in step 1.1).

[F5] $-\mathbb{CP}^2$ is $\mathbb{CP}^2$ with the reversed orientation, so the two have the same underlying space and the same finite CW structures ([[def-fundamental-class-of-a-compact-oriented-manifold]]).

## Counterexample

**Proof technique:** count the Schubert cells of the projective plane in both orientations.

1.1 The projective tangent-bundle supplier gives $H^*(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[y]/(y^3)$ and $\langle y^2,[\mathbb{CP}^2]\rangle=1$ ([[lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes]]). The signature supplier computes the real middle matrix $(1)$ and signature $1$ ([[lem-signature-and-l-genus-agree-on-complex-projective-spaces]]). Reversing orientation negates the fundamental class ([[def-fundamental-class-of-a-compact-oriented-manifold]]), hence the middle form ([[def-middle-dimensional-intersection-form]]); its matrix is $(-1)$, with signature $-1$. [given, algebra]

1.2 By [F1], $\mathbb{CP}^2=\operatorname{Gr}_1(\mathbb C^3)$; by [F2] its Schubert symbols are the integers $a_1\in\{1,2,3\}$, with $d(a_1)=a_1-1\in\{0,1,2\}$, so the cells have real dimensions $0,2,4$ and there are no cells in odd dimensions: $c_0=c_2=c_4=1$ and $c_1=c_3=0$. [given, F1, F2]

1.3 By [F4], the signatures of the two closed oriented smooth four-manifolds are $\sigma(\mathbb{CP}^2)=1$ and $\sigma(-\mathbb{CP}^2)=-1$. [given, F4]

2.1 By [F3] applied to this finite CW structure, $\chi(\mathbb{CP}^2)=c_0-c_1+c_2-c_3+c_4=1-0+1-0+1=3$. [step 1.2, F3]

3.1 Orientation reversal changes neither the underlying space nor its cells, since $-\mathbb{CP}^2$ is $\mathbb{CP}^2$ with the reversed orientation by [F5]; hence $c_n(-\mathbb{CP}^2)=c_n(\mathbb{CP}^2)$ for every $n$ and $\chi(-\mathbb{CP}^2)=3$ as well. [step 2.1, F5]

4.1 Thus $\mathbb{CP}^2$ and $-\mathbb{CP}^2$ have the same Euler characteristic $3$ but different signatures, so the Euler characteristic of a closed oriented four-manifold does not determine its signature, and the intersection form carries information beyond the alternating Betti-number count. [step 3.1, step 1.3] ∎
