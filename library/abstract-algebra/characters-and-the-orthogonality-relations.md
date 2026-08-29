---
page: characters-and-the-orthogonality-relations
title: "Characters and the Orthogonality Relations"
status: draft
items: [rem-standing-hypotheses-for-ordinary-character-theory, def-character-of-a-complex-representation, def-class-function-and-the-space-of-complex-class-functions, def-standard-inner-product-on-complex-class-functions, def-irreducible-complex-character, def-character-table-of-a-finite-group, def-tensor-product-of-complex-representations, def-dual-complex-representation, def-kernel-of-a-complex-character, prop-basic-value-properties-of-a-complex-character, thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel, thm-characters-of-direct-sums-tensor-products-and-duals, thm-character-of-a-permutation-representation-counts-fixed-points, def-g-fixed-subspace-of-a-representation, lem-averaging-operator-projects-onto-the-fixed-subspace, lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation, thm-character-inner-product-computes-intertwiner-dimension, thm-first-orthogonality-relation-for-irreducible-complex-characters, thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions, cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product, thm-complex-representations-are-determined-by-their-characters, cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one, thm-character-of-the-regular-representation, cor-the-regular-character-gives-the-sum-of-squares-formula, thm-second-column-orthogonality-relation-for-irreducible-complex-characters, cor-the-sum-of-squared-irreducible-character-values-at-g-is-the-centralizer-size, cor-the-character-table-is-square-and-invertible, prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient, thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters, thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one]
examples: []
---

This page is ordinary character theory: throughout, $G$ is finite, the base
field is $\mathbb C$, and every representation is finite-dimensional. The
opening item fixes that scope, after which the page assembles the objects a
character table records — the character $\chi_V(g)=\operatorname{tr}\rho_V(g)$,
the space $\mathrm{cf}(G)$ of class functions and its standard Hermitian inner
product, irreducible characters, the character table itself, and the tensor
product, dual, and kernel constructions attached to a character.

The first structural thread derives the basic value properties of a character:
$\chi(1)=\dim V$, class-function invariance, the description of $\chi(g)$ as a
sum of roots of unity, the bound $|\chi(g)|\le\chi(1)$ with its scalar-equality
case, and $\chi(g^{-1})=\overline{\chi(g)}$. These immediately identify the
kernel of a character with the kernel of the representation, and they feed the
three character operations — characters add on direct sums, multiply on tensor
products, and conjugate on duals — together with the fixed-point count of a
permutation character.

The central thread is orthogonality. The averaging projector onto the fixed
subspace, combined with the identification of intertwiners with fixed points in
$V^{*}\otimes W$, converts $\langle\chi_V,\chi_W\rangle$ into
$\dim\operatorname{Hom}_G(W,V)$. Schur's lemma then gives row orthogonality of
irreducible characters, and the published count of irreducibles against
conjugacy classes upgrades orthonormality to a basis of $\mathrm{cf}(G)$. From
that basis flow the multiplicity formula, the fact that a representation is
determined by its character, the irreducibility test $\langle\chi,\chi\rangle=1$,
the regular character and its second proof of the sum-of-squares formula, and
the column orthogonality relations with their centralizer and square-table
consequences.

The closing thread reads group structure off the table. Representations with
kernel containing a normal subgroup factor through the quotient with
irreducibility preserved; through the faithful regular representation of $G/N$
this shows normal subgroups are exactly intersections of kernels of irreducible
characters. The page ends with the criterion that $G$ is abelian exactly when
every irreducible complex character has degree $1$.
