---
page: frobenius-characteristic-and-the-symmetric-group-character-dictionary
title: "Frobenius Characteristic and the Symmetric-Group Character Dictionary"
status: draft
requires:
  - symmetric-functions-hall-inner-product-and-schur-bases
  - specht-modules-and-the-irreducibles-of-the-symmetric-group
  - characters-and-the-orthogonality-relations
  - the-branching-rule-and-the-young-graph
items:
  - def-graded-ordinary-representation-ring-of-symmetric-groups
  - def-outer-induction-product-for-symmetric-group-characters
  - lem-complete-homogeneous-expansion-in-power-sums
  - def-frobenius-characteristic-map
  - lem-frobenius-characteristic-is-an-isometry
  - lem-characteristic-of-a-young-permutation-character-is-complete
  - lem-frobenius-characteristic-preserves-outer-products
  - thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism
  - thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
  - cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients
  - prop-sign-twist-corresponds-to-the-omega-involution
  - prop-regular-character-has-characteristic-p-one-to-the-n
examples: []
---

This page builds the classical dictionary between the ordinary character theory
of the symmetric groups and the ring of symmetric functions. It begins with the
graded abelian group $R_S=\bigoplus_nR(S_n)$ of symmetric-group characters and
the outer induction product $\circ$, and it defines the Frobenius
characteristic $\operatorname{ch}(f)=\sum_\rho f(\rho)p_\rho/z_\rho$ on complex
class functions, with the Hall form providing the metric on the symmetric
function side. A local power-sum expansion of the complete homogeneous
functions supplies the cycle-distribution coefficients used throughout.

The main structure theorem proves that $\operatorname{ch}$, restricted to the
integral lattice $R_S$, is an isometric isomorphism of graded rings from the
outer-product ring onto $\Lambda$: the isometry comes from the class sizes
$n!/z_\rho$, multiplicativity from Frobenius' induced-character formula and the
split identity $z_\rho/(z_\mu z_\nu)=\prod_i\binom{m_i(\rho)}{m_i(\mu)}$, and
integrality and surjectivity from Young's rule together with the unitriangular
Kostka change of basis and the integral basis of complete homogeneous
functions. On Specht characters the dictionary reads
$\operatorname{ch}(\chi^\lambda)=s_\lambda$, so character values become
power-sum coefficients, $\chi^\lambda(\rho)=\langle s_\lambda,p_\rho\rangle_H$;
the sign twist and the regular character appear as the omega involution and as
$p_1^{\,n}=\sum_\lambda f^\lambda s_\lambda$ respectively.
