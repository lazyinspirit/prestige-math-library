---
id: lem-connected-groups-of-rank-zero-are-unipotent
kind: lemma
title: Connected groups of rank zero are unipotent
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 20
deps: [def-axiom-of-choice, def-unipotent-algebraic-group, thm-unipotent-group-triangular-criterion, def-group-of-multiplicative-type-and-torus, def-borel-subgroup-and-maximal-torus, thm-quotient-by-a-borel-subgroup-is-complete, thm-lie-kolchin-for-smooth-connected-solvable-groups, lem-smooth-trigonalizable-group-normal-series-refinement, thm-trigonalizable-extensions-split-over-algebraically-closed-fields, lem-nonaffine-subgroup-scheme-stabilizer-of-line, thm-homogeneous-space-for-smooth-affine-group, lem-ag-flat-local-regularity-ascent-descent, lem-complete-connected-scheme-to-affine-scheme-morphism-is-constant, def-radical-and-unipotent-radical-of-an-algebraic-group, def-split-reductive-algebraic-group, def-derived-subgroup-and-solvable-algebraic-group]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 16 (16.60), printed pp. 348-350; Ch. 14 (14.9); Ch. 20 (20.1)"
    - title: "Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)"
      url: "https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf"
      locator: "S5.3, Propositions 125-127"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a smooth connected affine group variety over $k$. Then $G$ is unipotent ([[def-unipotent-algebraic-group]]) if and only if $G_{k^{\mathrm a}}$ contains no nontrivial torus, equivalently if and only if $G$ has rank $0$ ([[def-split-reductive-algebraic-group]]); in particular a smooth connected affine group variety of rank $0$ is unipotent. Consequently a smooth connected affine group variety of semisimple rank $0$ is solvable, and a reductive group of semisimple rank $0$ is a torus.

## Facts & Assumptions

**Given:** AC and a smooth connected affine group $G$ of finite type over $k$.

[F1] A unipotent group remains unipotent after field extension, and unipotence descends under field extension. Subgroups, quotients and extensions of unipotent groups are unipotent; a multiplicative-type subgroup of a unipotent group is trivial. These statements follow from the fixed-vector criterion and its faithful upper-unitriangular realization. ([[def-unipotent-algebraic-group]], [[thm-unipotent-group-triangular-criterion]], [[def-group-of-multiplicative-type-and-torus]])

[F2] Over an algebraically closed field a smooth connected affine group has a Borel subgroup $B$, which is smooth connected solvable, and $G/B$ is complete. A smooth connected solvable group is trigonalizable and has a decomposition $B=B_u\rtimes T$ with $B_u$ smooth connected unipotent and $T$ a torus. ([[def-borel-subgroup-and-maximal-torus]], [[thm-quotient-by-a-borel-subgroup-is-complete]], [[thm-lie-kolchin-for-smooth-connected-solvable-groups]], [[lem-smooth-trigonalizable-group-normal-series-refinement]], [[thm-trigonalizable-extensions-split-over-algebraically-closed-fields]])

[F3] A closed subgroup scheme $B$ of an affine group is the scheme-theoretic stabilizer of a line in a finite-dimensional rational representation. The fppf quotient $G/B$ is a separated finite-type scheme and $G\to G/B$ is faithfully flat and locally of finite presentation. Regularity descends along flat local maps; thus over an algebraically closed field this quotient of a smooth group is smooth, in particular reduced. A morphism from a complete connected reduced finite-type scheme to an affine scheme has a single closed point as image. ([[lem-nonaffine-subgroup-scheme-stabilizer-of-line]], [[thm-homogeneous-space-for-smooth-affine-group]], [[lem-ag-flat-local-regularity-ascent-descent]], [[lem-complete-connected-scheme-to-affine-scheme-morphism-is-constant]])

[F4] The radical $R(G)$ is smooth connected normal solvable. Semisimple rank means the rank of $G/R(G)$. Solvability is closed under extensions, by pulling back a derived series. For a smooth connected solvable group over an algebraically closed field, $B_u$ in [F2] is a smooth connected normal unipotent subgroup; a reductive group has no nontrivial such subgroup after algebraic closure. ([[def-radical-and-unipotent-radical-of-an-algebraic-group]], [[def-split-reductive-algebraic-group]], [[def-derived-subgroup-and-solvable-algebraic-group]])

## Proof

**Given:** AC and a smooth connected affine group $G$ of finite type over $k$.

1.1 If $G$ is unipotent, then $G_{k^{\mathrm a}}$ is unipotent and contains no nontrivial torus by [F1]. Conversely, suppose there is no such torus. By field-extension descent of unipotence we may work over $k^{\mathrm a}$, and hence assume $k$ algebraically closed. Choose a Borel subgroup $B$ and write $B=B_u\rtimes T$ by [F2]. Since $T\subseteq G$ and there are no nontrivial tori, $T=1$, so $B=B_u$ is unipotent. [F1, F2, choose]

2.1 By [F3] choose a representation $W$ and a line $L=kv$ with $B=\operatorname{Stab}_G(L)$. The one-dimensional representation $L$ of the unipotent group $B$ is trivial by its fixed-vector criterion, so every element of $B$ fixes $v$ scheme-theoretically. Consequently $B=\operatorname{Stab}_G(v)$: the vector stabilizer lies in the line stabilizer, and the reverse inclusion was just proved. The orbit morphism $g\mapsto gv$ is right $B$-invariant and descends by the fppf quotient to a morphism $f:G/B\to W$. [F1, F3, step 1.1, choose]

3.1 The scheme $G/B$ is complete by [F2], connected as the surjective image of connected $G$, and reduced by [F3]. Thus $f$ has a single closed point as image. It contains $v=f(eB)$, so the point is $v$. Since $G/B$ is reduced, every coordinate function of $f-v$ vanishes: over the algebraically closed field the closed points are dense on each affine open and their vanishing ideal is the nilradical. Therefore $f$ factors scheme-theoretically through $v$. Pulling back along $G\to G/B$ shows that all of $G$ fixes $v$, so $G=\operatorname{Stab}_G(v)=B$ is unipotent. This proves the rank-zero equivalence. [F2, F3, step 1.1, step 2.1]

4.1 If $G$ has semisimple rank zero, its smooth connected affine quotient $Q=G/R(G)$ has rank zero and is unipotent by step 3.1 and [F1]. It is therefore solvable. Since $R(G)$ is solvable, [F4] makes $G$ solvable, so $G=R(G)$ by maximality of the radical. This conclusion does not require asserting that $Q$ is geometrically semisimple over an imperfect field. [F1, F4, step 3.1]

5.1 If in addition $G$ is reductive, pass to the algebraic closure. The solvable group $G_{k^{\mathrm a}}$ decomposes as $(G_{k^{\mathrm a}})_u\rtimes T$ by [F2]. Its smooth connected normal unipotent factor is trivial by reductivity, so $G_{k^{\mathrm a}}=T$. Hence $G$ is a torus by the definition of a torus as a group becoming a split torus over an algebraic closure. This proves the final assertion. [F2, F4, step 4.1] ∎

