---
id: thm-lie-kolchin-for-smooth-connected-solvable-groups
kind: theorem
title: "Lie-Kolchin: smooth connected solvable affine groups over algebraically closed fields are trigonalizable"
dependency_level: 9
deps:
  - def-affine-scheme
  - def-axiom-of-choice
  - def-derived-subgroup-and-solvable-algebraic-group
  - def-group-scheme-over-a-field
  - def-morphism-and-closed-subgroup-scheme
  - def-smooth-morphism-schemes
  - def-trigonalizable-algebraic-group
  - lem-closed-finite-index-subgroup-of-connected-group-points
  - lem-finite-dimensional-subcomodules-contain-elements
  - lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties
  - lem-derived-subgroup-properties
  - lem-distinct-characters-are-linearly-independent
  - lem-smooth-finite-type-schemes-have-schematically-dense-rational-points
  - lem-trigonalizable-iff-invariant-flags
  - prop-smooth-commutative-algebraic-groups-are-trigonalizable
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Theorem 16.30 and its proof, printed pp. 335-336, with Theorem 4.25, printed p. 93
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Proposition 119 (Lie-Kolchin), printed p. 50
---
## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let $G$ be a smooth connected solvable affine algebraic group over $k$ ([[def-affine-scheme]], [[def-smooth-morphism-schemes]], [[def-derived-subgroup-and-solvable-algebraic-group]]). Then $G$ is trigonalizable: every simple rational representation of $G$ has dimension one, equivalently every finite-dimensional rational representation of $G$ admits a basis in which $G$ acts through upper triangular matrices ([[def-trigonalizable-algebraic-group]], [[lem-trigonalizable-iff-invariant-flags]]). The hypotheses smooth, connected, solvable and $k$ algebraically closed are all essential, and the theorem is not claimed over non-algebraically-closed fields.

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$, and a smooth connected solvable affine $k$-group $G$.

[F1] If $G$ is commutative, every finite-dimensional rational representation is upper triangular in a suitable basis, so every simple representation has dimension one. ([[prop-smooth-commutative-algebraic-groups-are-trigonalizable]])

[F2] Assume AC. If $G$ is smooth, connected, solvable and $G\ne1$, then $N=DG$ is a smooth connected closed normal subgroup scheme with $\dim N<\dim G$; moreover $(DG)(k)=[G(k),G(k)]$ is the abstract derived subgroup of $G(k)$, and $G/N$ is commutative and smooth connected. ([[lem-derived-subgroup-properties]], [[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]])

[F3] In any nonzero finite-dimensional representation $V$ of a trigonalizable group $N$, choose a nonzero $N$-subrepresentation of least dimension. It is simple, hence a character line by trigonalizability, so some $V_\chi$ is nonzero. Distinct-character eigenspaces form a direct sum; consequently finite-dimensional $V$ has only finitely many nonzero eigenspaces. This does not assume that the restriction $V|_N$ is simple or that $N$ is diagonalizable. ([[def-trigonalizable-algebraic-group]], [[lem-distinct-characters-are-linearly-independent]])

[F4] Assume AC. A closed subgroup of finite index of $G(k)$, for $G$ smooth connected over the algebraically closed field $k$, equals $G(k)$. ([[lem-closed-finite-index-subgroup-of-connected-group-points]])

[F5] Assume AC. For a smooth finite-type $k$-scheme over an algebraically closed field $k$, $G(k)$ is schematically dense: a closed subscheme of $G$ containing $G(k)$ equals $G$. ([[lem-smooth-finite-type-schemes-have-schematically-dense-rational-points]])

[F6] Every finite subset of a rational representation lies in a finite-dimensional subrepresentation. Thus a simple rational representation is finite-dimensional: a nonzero vector lies in a nonzero finite-dimensional submodule, which simplicity makes the whole module. ([[lem-finite-dimensional-subcomodules-contain-elements]])

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth connected solvable affine $k$-group $G$, and a simple finite-dimensional rational representation $V$ of $G$.

1.1 Every simple rational representation is finite-dimensional by [F6]. I show by induction on $\dim G$ that $\dim V=1$. If $G$ is commutative, [F1] gives $\dim V=1$. Otherwise $G\ne1$ and [F2] provides the smooth connected closed normal subgroup $N=DG$ with $\dim N<\dim G$, solvable as a subgroup of the solvable group $G$; by the induction hypothesis applied to $N$, the group $N$ is trigonalizable. [F1, F2, F6]

1.2 The restricted $N$-module $V$ need not be simple; choose a least-dimensional nonzero $N$-submodule as in [F3]. Since $N$ is trigonalizable it is a character line, so there is a character $\chi$ of $N$ with $V_\chi\ne0$; for $g\in G(k)$ and $n\in N(k)$ one computes $n\cdot(g\cdot v)=g\cdot(g^{-1}ng\cdot v)=\chi(g^{-1}ng)\,g\cdot v$, so $g\cdot V_\chi=V_{\chi^g}$ for the character $\chi^g(n)=\chi(g^{-1}ng)$. Thus $G(k)$ permutes the finite set $S$ of characters $\chi$ of $N$ with $V_\chi\ne0$. [F2, F3]

2.1 Fix $\chi\in S$ and its stabilizer $H=\{g\in G(k):\chi^g=\chi\}$. It has finite index because $G(k)$ permutes the finite set $S$. For every $n\in N(k)$ the functions $g\mapsto\chi(g^{-1}ng)$ and $g\mapsto\chi(n)$ are regular, so their equalizer is closed. Their intersection over all $n\in N(k)$ is closed; equality on these points is equality of characters as morphisms because the smooth group $N$ has schematically dense rational points [F5]. Thus this intersection is exactly $H$. The finite-index lemma [F4] gives $H=G(k)$, hence every $V_\chi$ is $G(k)$-stable. [F2, F4, F5, step 1.2]

3.1 Since $V$ is simple and $G$ is smooth over the algebraically closed field $k$, the stabilizer of the subspace $V_\chi$ is a closed subscheme of $G$ containing $G(k)$, hence equals $G$ by [F5]; thus $V_\chi$ is a nonzero $G$-subrepresentation of $V$, so $V=V_\chi$ and the sum in [F3] has a single term. Therefore each $n\in N(k)$ acts on $V$ as the homothety $\chi(n)$. [F3, F5, step 2.1]

4.1 By [F2] every element of $N(k)=(DG)(k)$ is a product of commutators $[x,y]$ of elements of $G(k)$, hence acts on $V$ with determinant $1$. Since it acts as the homothety $\chi(n)$ with $d=\dim V$, its determinant is $\chi(n)^d$, so $\chi$ maps $N(k)$ into the group $\mu_d(k)$ of $d$-th roots of unity. As $N$ is smooth and connected and $\mu_d$ is finite, the image $\chi(N)$ is connected and finite, hence trivial; so $N$ acts trivially on $V$. [F2, step 3.1]

5.1 Consequently $V$ is a simple representation of the quotient $G/N$, which is commutative by [F2]. By [F1] a simple finite-dimensional representation of the smooth commutative group $G/N$ has dimension one; hence $\dim V=1$. This completes the induction: every simple representation of $G$ is one-dimensional, so $G$ is trigonalizable, and the equivalent flag formulation follows from [[lem-trigonalizable-iff-invariant-flags]]. [F1, F2, step 1.1, step 4.1] ∎ 