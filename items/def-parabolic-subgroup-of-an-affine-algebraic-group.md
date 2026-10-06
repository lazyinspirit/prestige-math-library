---
id: def-parabolic-subgroup-of-an-affine-algebraic-group
kind: definition
title: Parabolic subgroups of an affine algebraic group
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [def-axiom-of-choice, def-radical-and-unipotent-radical-of-an-algebraic-group, def-group-scheme-over-a-field, def-smooth-morphism-schemes, def-affine-scheme, thm-homogeneous-space-for-smooth-affine-group, def-proper-morphism, def-complete-variety, def-unipotent-algebraic-group, def-derived-subgroup-and-solvable-algebraic-group, def-borel-subgroup-and-maximal-torus]
justified_by: [thm-solvable-subgroups-and-the-radical-as-borel-intersection]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 17 (17.12), (17.16) and (17.49), printed pp. 354-368; Ch. 21 (21.91)"
    - title: "Brian Conrad, Reductive Group Schemes (SGA 3 summer school, Luminy; Panoramas et Syntheses)"
      url: "https://math.stanford.edu/~conrad/papers/luminysga3smf.pdf"
      locator: "S5.2 (parabolic subgroups) and S5.4 (Levi subgroups)"
verification:
  precheck: n/a
---

## Definition

Let $G$ be a smooth affine algebraic group of finite type over $k$ ([[def-group-scheme-over-a-field]], [[def-smooth-morphism-schemes]], [[def-affine-scheme]]). A closed subgroup scheme $P\subseteq G$ is a **parabolic subgroup** if the fppf quotient $G/P$ is representable and proper over $k$; when $G/P$ is an integral $k$-variety, this is equivalent to completeness ([[thm-homogeneous-space-for-smooth-affine-group]], [[def-proper-morphism]], [[def-complete-variety]]). The **unipotent radical** $R_u(P)\subseteq P$ is the largest smooth connected normal unipotent subgroup ([[def-unipotent-algebraic-group]]), the **radical** $R(P)$ is the largest smooth connected normal solvable subgroup ([[def-derived-subgroup-and-solvable-algebraic-group]], [[def-radical-and-unipotent-radical-of-an-algebraic-group]]), and a **Levi subgroup** of $P$ is a smooth closed subgroup $L\subseteq P$ such that the multiplication map $L\ltimes R_u(P)\to P$ is an isomorphism. Borel subgroups and the equivalence 'parabolic iff, over $k^{\mathrm a}$, contains a Borel subgroup' are treated on this page in [[thm-solvable-subgroups-and-the-radical-as-borel-intersection]] and [[def-borel-subgroup-and-maximal-torus]].

The conditional proper-quotient definition above uses no choice principle. Assume the Axiom of Choice for the following supplemental representability and structural assertions ([[def-axiom-of-choice]]). Representability of $G/P$ is a theorem for smooth affine $G$ and closed $P$ ([[thm-homogeneous-space-for-smooth-affine-group]]); For an integral representable quotient, properness is equivalent to completeness in the convention of [[def-complete-variety]]. For a general quotient, properness is the defining condition; no integrality is assumed. The definition does not assume $P$ smooth or connected; in a smooth connected affine group such a parabolic is connected and self-normalizing by [[thm-solvable-subgroups-and-the-radical-as-borel-intersection]]. Smooth parabolic subgroup varieties form the class to which the standard $P_I$ and Levi classification below applies; nonsmooth Frobenius-thickened proper-quotient subgroups are retained by this general definition. The definition makes no reference to split reductive structure, so that the standard-parabolic theory can establish the equivalence for smooth subgroup varieties. In the Levi decomposition below the subgroup $L$ is required only to be smooth and closed; when $P$ is smooth, its unipotent radical is smooth and the product decomposition is a statement about schemes.
