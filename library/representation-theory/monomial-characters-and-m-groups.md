---
page: monomial-characters-and-m-groups
title: "Monomial Characters and M Groups"
status: draft
items: [def-monomial-representation-and-m-group, lem-monomial-representation-has-a-monomial-matrix-model, lem-faithful-irrep-with-a-noncentral-abelian-normal-subgroup-is-properly-induced, lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup, lem-induction-commutes-with-inflation, thm-supersolvable-groups-are-m-groups, thm-monomial-induction-for-virtual-characters, lem-kernel-of-an-induced-character-lies-in-the-inducing-subgroup, cor-m-groups-are-solvable, rem-m-group-converses-and-boundary]
examples: []
---

A monomial representation of a finite group $G$ is one induced from a
one-dimensional representation of some subgroup, and $G$ is an $M$-group when
every irreducible complex character of $G$ is monomial. In the covariant
function model of induction a left transversal turns
$\operatorname{Ind}_H^G\lambda$ into matrices with exactly one nonzero entry in
every row and column. Conversely, an irreducible representation with this
permutation-with-scalars pattern is monomial: irreducibility forces the action
on its basis lines to be transitive. A linear character of $G$ is monomial
because induction from $G$ to itself is the identity.

The page's positive result is the classical one: every finite supersolvable
group is an $M$-group. The proof runs by induction on $|G|$. A faithful
irreducible representation whose restriction to a noncentral abelian normal
subgroup has a noncentral constituent is induced from a proper inertia
subgroup, and a nonabelian supersolvable group always has such a subgroup; the
quotient by the kernel of the irreducible is again supersolvable and smaller,
and a lemma on the compatibility of induction with inflation transports the
induction from the quotient back to $G$. The result is then used as the
$p$-elementary input to Brauer's virtual-character theorem: every virtual
character of a finite group is an integral combination of monomial characters
induced from $p$-elementary subgroups. That virtual statement is kept strictly
apart from the $M$-group property, which concerns honest irreducible
characters, and the converse direction is treated as a remark: every finite
$M$-group is solvable, by Taketa's argument comparing derived lengths with the
number of distinct character degrees, while a solvable group need not be an
$M$-group.

All groups on this page are finite, all representations are finite-dimensional
over $\mathbb C$, all characters are complex characters, "linear" always means
one-dimensional, and induction is the covariant-function model. The companion
examples page treats dihedral groups, the order-$p^3$ unitriangular group, the
binary tetrahedral group as a solvable non-$M$-group, and the trivial,
one-dimensional and abelian boundary cases.
