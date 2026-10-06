---
id: thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate
kind: theorem
title: Maximal tori of a smooth connected solvable group are conjugate
dependency_level: 12
deps:
  - lem-smooth-trigonalizable-group-normal-series-refinement
  - lem-nonaffine-group-image-exact-quotient-properties
  - def-affine-scheme
  - def-axiom-of-choice
  - def-borel-subgroup-and-maximal-torus
  - def-diagonalizable-group-and-character-module
  - def-group-of-multiplicative-type-and-torus
  - def-group-scheme-over-a-field
  - def-morphism-and-closed-subgroup-scheme
  - def-smooth-morphism-schemes
  - lem-unipotent-and-diagonalizable-intersection-is-trivial
  - thm-lie-kolchin-for-smooth-connected-solvable-groups
  - thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate
  - thm-trigonalizable-extensions-split-over-algebraically-closed-fields
  - thm-trigonalizable-group-has-normal-series-with-vector-quotients
  - thm-unipotent-group-triangular-criterion
  - def-dimension-noetherian-topological-space
  - thm-dimension-product-varieties
  - def-trigonalizable-algebraic-group
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
      locator: Theorem 16.33(d) and its proof, printed pp. 336-337
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Section 5.3, Theorem 130(iii)-(iv), pp. 53-56, and Section 5.4, Theorem 136, pp. 56-58
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Theorem 17.37(d), printed p. 302
---
## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let $G$ be a smooth connected solvable affine algebraic group over $k$ ([[def-affine-scheme]], [[def-smooth-morphism-schemes]], [[def-group-scheme-over-a-field]]). Let $G_u$ be the largest smooth connected normal unipotent subgroup of $G$ and let $T\subseteq G$ be a maximal torus ([[def-borel-subgroup-and-maximal-torus]], [[def-group-of-multiplicative-type-and-torus]]). Then $G=G_u\rtimes T$, every maximal torus of $G$ has dimension $\dim G-\dim G_u$, and any two maximal tori of $G$ are conjugate by an element of $G(k)$. Equivalently, every closed subgroup of multiplicative type of $G$ is conjugate into $T$.

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth connected solvable affine $k$-group $G$, and a maximal torus $T\subseteq G$.

[F1] Assume AC. A smooth connected solvable affine group over an algebraically closed field is trigonalizable. The subgroup $G_u$ (the largest smooth connected normal unipotent subgroup) is the largest normal unipotent subgroup, $G/G_u$ is a smooth connected group of multiplicative type, hence a torus, and the extension $1\to G_u\to G\to G/G_u\to1$ splits: $G_u$ has a complement isomorphic to $G/G_u$. ([[thm-lie-kolchin-for-smooth-connected-solvable-groups]], [[lem-smooth-trigonalizable-group-normal-series-refinement]], [[thm-trigonalizable-extensions-split-over-algebraically-closed-fields]])

[F2] Assume AC. For the trigonalizable group $G$ with $q:G\to D=G/G_u$, the maximal diagonalizable subgroups are exactly the images $s(D)$ of the sections of $q$, and any two are conjugate by an element of $G_u(k)$; under the present smooth connected hypotheses, $D$ is a torus and these are exactly the maximal tori. The supplier’s full diagonalizable-subgroup classification applies because $G_u$ is smooth connected, including in preimages with nonsmooth diagonalizable quotient. ([[thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate]])

[F3] A closed subgroup scheme that is both unipotent and diagonalizable is trivial; hence a closed subgroup of multiplicative type $S\subseteq G$ meets $G_u$ trivially and the exact kernel/image theorem identifies $S$ with its closed image $q(S)$. ([[lem-nonaffine-group-image-exact-quotient-properties]]) A closed subgroup scheme of a trigonalizable group is trigonalizable, and the preimage $q^{-1}(H)$ of a closed subgroup $H\subseteq D$ has largest normal unipotent subgroup $G_u$ and quotient $H$. ([[lem-unipotent-and-diagonalizable-intersection-is-trivial]], [[thm-unipotent-group-triangular-criterion]], [[def-trigonalizable-algebraic-group]])

[F4] The split multiplication isomorphism identifies the underlying scheme with the product of the smooth affine groups $G_u$ and $D$. Their associated reduced classical varieties are nonempty, so the product dimension theorem gives additivity: $\dim G=\dim G_u+\dim D$, and the image of a section $s(D)$ is a closed subgroup isomorphic to the torus $D$, hence a torus of dimension $\dim D$. ([[def-dimension-noetherian-topological-space]], [[thm-dimension-product-varieties]], [[thm-maximal-diagonalizable-subgroups-of-trigonalizable-groups-are-conjugate]])

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth connected solvable affine $k$-group $G$, and a maximal torus $T\subseteq G$.

1.1 By [F1] the group $G$ is trigonalizable, $D=G/G_u$ is a torus, and the extension $q:G\to D$ splits; by [F2] the images of the sections of $q$ are exactly the maximal tori of $G$ and any two of them are conjugate by an element of $G_u(k)$. In particular the given maximal torus $T$ is the image $s_T(D)$ of a section and $\dim T=\dim D=\dim G-\dim G_u$ by [F4], and the multiplication morphism $G_u\rtimes D\to G$, $(x,d)\mapsto x\cdot s_T(d)$, is an isomorphism, so $G=G_u\rtimes T$. [F1, F2, F4]

1.2 It remains to prove the equivalent statement for an arbitrary closed subgroup $S\subseteq G$ of multiplicative type. By [F3] $S\cap G_u=1$, so $q|_S:S\to q(S)$ is a closed immersion identifying $S$ with the closed subgroup $q(S)\subseteq D$, and the preimage $G''=q^{-1}(q(S))$ is a closed subgroup scheme of $G$, hence trigonalizable, with largest normal unipotent subgroup $G_u$ and quotient $q(S)$. [F3]

2.1 Both $(q|_S)^{-1}:q(S)\to S\subseteq G''$ and $s''=s_T|_{q(S)}:q(S)\to G''$ are sections of the quotient $q''=q|_{G''}:G''\to q(S)$, The kernel $G_u$ remains smooth connected even if the subgroup $q(S)$ is nonsmooth, so the full classification/conjugacy domain of [F2] applies to this trigonalizable $G''$. Thus there is $u\in G_u(k)$ with $(q|_S)^{-1}=\mathrm{inn}(u)\circ s''$. Hence $S=\mathrm{inn}(u)\bigl(s_T(q(S))\bigr)\subseteq\mathrm{inn}(u)\bigl(T\bigr)$, that is, $\mathrm{inn}(u)^{-1}(S)\subseteq T$: every closed subgroup of multiplicative type of $G$ is conjugate into the given maximal torus $T$. [F2, step 1.2]

3.1 Collecting: the extension splits with complement the maximal torus $T$, so $G=G_u\rtimes T$; all maximal tori have dimension $\dim G-\dim G_u$ and are pairwise conjugate by [step 1.1], and the equivalent conjugacy-into-$T$ statement for closed subgroups of multiplicative type is [step 2.1]. [step 1.1, step 2.1] ∎ 