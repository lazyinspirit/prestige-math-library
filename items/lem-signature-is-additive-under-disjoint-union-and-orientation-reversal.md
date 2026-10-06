---
id: lem-signature-is-additive-under-disjoint-union-and-orientation-reversal
kind: lemma
title: "The signature is additive under disjoint union and negates under orientation reversal"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 8
deps:
  - def-signature-of-a-closed-oriented-four-k-manifold
  - def-middle-dimensional-intersection-form
  - def-fundamental-class-of-a-compact-oriented-manifold
  - prop-singular-homology-of-a-disjoint-union-is-the-direct-sum
  - prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise
  - cor-real-symmetric-bilinear-forms-are-classified-by-inertia
  - lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, Lemma 19.3(1), original p. 224: additivity of the signature under disjoint union"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Exercise 11.25 and equation (11.3), printed pp. 93-95: additivity under disjoint union and negation of the fundamental class"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed p. 34: additivity of the signature"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Let $M,N$ be closed oriented smooth $4k$-manifolds. Then
$\sigma(M\sqcup N)=\sigma(M)+\sigma(N)$ and $\sigma(-M)=-\sigma(M)$, where
$-M$ is $M$ with the reversed orientation. More generally $\sigma$ is additive
over disjoint unions with arbitrary orientation signs.

## Facts & Assumptions

**Given:** AC; closed oriented smooth $4k$-manifolds $M,N$ with middle forms $Q_M,Q_N$ and signatures $\sigma$.

[F1] $\sigma(M)=p-q$ is the inertia difference of the nondegenerate symmetric form $Q_M$ on $H^{2k}(M;\mathbb R)$ ([[def-signature-of-a-closed-oriented-four-k-manifold]]).

[F2] $Q_M(x,y)=\langle x\smile y,[M]\rangle$ ([[def-middle-dimensional-intersection-form]]).

[F3] For $M=M_1\sqcup\cdots\sqcup M_r$ the fundamental class is $\sum_j(i_j)_*[M_j]$ and the middle form is orthogonal direct sum: $Q_M(x,y)=\sum_jQ_{M_j}(i_j^*x,i_j^*y)$ under $H^{2k}(M;\mathbb R)\cong\bigoplus_jH^{2k}(M_j;\mathbb R)$ ([[lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate]], [[def-fundamental-class-of-a-compact-oriented-manifold]], [[prop-singular-homology-of-a-disjoint-union-is-the-direct-sum]]).

[F4] If a nondegenerate symmetric bilinear form is an orthogonal direct sum of forms $B_1,B_2$, then the inertia triples add: $p=p_1+p_2$, $q=q_1+q_2$, $r=r_1+r_2$; this follows because the union of diagonalizing bases diagonalizes the sum, and by Sylvester's law the inertia is intrinsic ([[cor-real-symmetric-bilinear-forms-are-classified-by-inertia]]).

[F5] Reversing the orientation negates the fundamental class, $[-M]=-[M]$, while the underlying smooth manifold and its tangent data are unchanged; orientability is componentwise ([[def-fundamental-class-of-a-compact-oriented-manifold]], [[prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise]]).

## Proof

**Proof technique:** direct; the form splits orthogonally over components and changes sign under orientation reversal.

1.1 Disjoint union: for $M\sqcup N$ the form is the orthogonal direct sum $Q_M\oplus Q_N$ under $H^{2k}(M\sqcup N;\mathbb R)\cong H^{2k}(M;\mathbb R)\oplus H^{2k}(N;\mathbb R)$ by [F3], and both summands are nondegenerate. By [F4] the inertia data add, so $p(M\sqcup N)=p(M)+p(N)$ and $q(M\sqcup N)=q(M)+q(N)$; hence $\sigma(M\sqcup N)=p(M)+p(N)-q(M)-q(N)=\sigma(M)+\sigma(N)$ by [F1]. [given, F1, F3, F4]

1.2 Orientation reversal: by [F5], $[-M]=-[M]$, so by [F2] $Q_{-M}(x,y)=\langle x\smile y,[-M]\rangle=-\langle x\smile y,[M]\rangle=-Q_M(x,y)$. Multiplication by $-1$ is an isomorphism of $H^{2k}(M;\mathbb R)$ carrying positive-definite subspaces of $Q_M$ to negative-definite subspaces of $-Q_M$ and conversely, so $p(-M)=q(M)$ and $q(-M)=p(M)$; hence $\sigma(-M)=q(M)-p(M)=-\sigma(M)$ by [F1]. [given, F1, F2, F5]

2.1 More generally, for a finite disjoint union with signs $\bigsqcup_j\varepsilon_jM_j$, where $\varepsilon_jM_j$ means $M_j$ with its given orientation when $\varepsilon_j=+1$ and the reversed orientation when $\varepsilon_j=-1$, steps 1.1 and 1.2 applied successively give $\sigma\bigl(\bigsqcup_j\varepsilon_jM_j\bigr)=\sum_j\varepsilon_j\sigma(M_j)$; the empty union has signature $0$ and the zero-dimensional case $k=0$ is the signed count of components, consistent with both steps. [step 1.1, step 1.2, given] ∎
