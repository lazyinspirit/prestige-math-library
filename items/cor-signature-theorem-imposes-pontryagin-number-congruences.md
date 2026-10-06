---
id: cor-signature-theorem-imposes-pontryagin-number-congruences
kind: corollary
title: "The signature theorem imposes divisibility constraints on Pontryagin numbers"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 12
deps:
  - cor-eight-dimensional-signature-formula
  - cor-four-dimensional-signature-formula
  - def-axiom-of-choice
  - def-hirzebruch-l-polynomials
  - def-kronecker-evaluation-pairing
  - def-pontryagin-number-of-a-closed-oriented-manifold
  - def-signature-of-a-closed-oriented-four-k-manifold
  - def-total-l-class-of-a-smooth-manifold
  - thm-hirzebruch-signature-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, Corollary 19.5, original p. 226: integrality of the L-genus and the resulting divisibility statements"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Exercise 11.56 and (11.55), printed p. 99: integrality of the L-genus is special to the tangent bundle"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 36: the L-genus takes the integer signature value"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC, inherited from the Hirzebruch signature theorem. For every closed
oriented smooth manifold $M$ of dimension $4k$ the L-genus value
$$\sigma(M)=L[M]=\langle L_k(TM),[M]\rangle$$
is an integer and is the rational polynomial in the Pontryagin numbers of $M$
determined by $L_k$. In low dimensions: (1) every closed oriented
$4$-manifold satisfies $3\mid p_1[M]$; (2) every closed oriented
$8$-manifold satisfies $45\mid(7p_2[M]-p_{(1,1)}[M])$, where $p_{(1,1)}[M]=\langle p_1(TM)^2,[M]\rangle$; (3) more generally
$L_k(TM)$ is a rational polynomial in the Pontryagin classes and the
integrality of its evaluation on $[M]$ is the arithmetic constraint recorded
here, for every $k\ge0$. No integrality or divisibility is asserted for the
analogous expressions for arbitrary bundles.

## Facts & Assumptions

**Given:** AC; a closed oriented smooth manifold $M$ of dimension $4k$; the tangent Pontryagin classes $p_i=p_i(TM)$ and the L-polynomial $L_k$.

[F1] The signature theorem gives $\sigma(M)=L[M]=\langle L_k(TM),[M]\rangle$ for every closed oriented smooth $4k$-manifold ([[thm-hirzebruch-signature-theorem]]).

[F2] The total L-class is $L(M)=\sum_{j\ge0}L_j(TM)$, a polynomial in the Pontryagin classes with rational coefficients; explicitly $L_1=p_1/3$ and $L_2=(7p_2-p_1^2)/45$ ([[def-total-l-class-of-a-smooth-manifold]], [[def-hirzebruch-l-polynomials]]).

[F3] The Pontryagin numbers $p_I[M]=\langle\prod p_{i_j},[M]\rangle$ are integers and the Kronecker pairing is linear over $\mathbb Q$ in its cohomology variable ([[def-pontryagin-number-of-a-closed-oriented-manifold]], [[def-kronecker-evaluation-pairing]]).

[F4] The signature $\sigma(M)=p-q$ is the difference of two nonnegative integers, hence an integer ([[def-signature-of-a-closed-oriented-four-k-manifold]]).

[F5] The low-dimensional cases are already established: $3\mid p_1[M]$ for closed oriented $4$-manifolds and $45\mid(7p_2[M]-p_{(1,1)}[M])$ for closed oriented $8$-manifolds ([[cor-four-dimensional-signature-formula]], [[cor-eight-dimensional-signature-formula]]).

## Proof

**Proof technique:** direct; specialise the L-polynomial to each degree and read off the integrality constraint.

1.1 By [F1] and [F2], $\sigma(M)=\langle L_k(TM),[M]\rangle$ is the evaluation of the rational polynomial $L_k$ in the Pontryagin classes on the fundamental class; by [F3] this evaluation is the corresponding rational linear combination of the Pontryagin numbers $p_I[M]$, and by [F4] its value is an integer. [given, F1, F2, F3, F4]

1.2 In dimension four, [F2] gives $L_1=p_1/3$, so $3\sigma(M)=p_1[M]$; both sides are integers by [F4] and [F3], hence $3\mid p_1[M]$, in agreement with the first clause of [F5]. [F2, F3, F4, F5]

1.3 In dimension eight, [F2] gives $L_2=(7p_2-p_1^2)/45$, so $45\sigma(M)=7p_2[M]-p_{(1,1)}[M]$; both sides are integers by [F4] and [F3] applied to the products $p_1\smile p_1$ and $p_2$, hence $45\mid(7p_2[M]-p_{(1,1)}[M])$, in agreement with the second clause of [F5]. [F2, F3, F4, F5]

2.1 In general degree $4k$, [F2] makes $L_k(TM)$ a rational polynomial in the Pontryagin classes, [F3] turns its evaluation on $[M]$ into the corresponding rational combination of Pontryagin numbers, and [F1] and [F4] identify that combination with the integer $\sigma(M)$; thus for every $k\ge0$ the integrality of $\langle L_k(TM),[M]\rangle$ is exactly the arithmetic constraint stated in clause (3), and no further arithmetic conclusion is drawn. [step 1.1, F1, F2, F3, F4]

3.1 Scope of the assertion: the identification of $L[M]$ with an integer uses the tangent bundle and the fundamental class of a closed oriented manifold, so nothing here asserts integrality or divisibility for $L$ of an arbitrary real vector bundle; the final sentence of the statement is this scope boundary, not a vanishing claim. [given, step 2.1] ∎
