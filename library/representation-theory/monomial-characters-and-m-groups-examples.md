---
page: monomial-characters-and-m-groups-examples
title: "Monomial Characters and M Groups - Examples"
status: published
requires: [monomial-characters-and-m-groups, extraspecial-p-groups-and-central-products]
items: []
examples: [ex-dihedral-groups-are-m-groups, ex-unitriangular-group-of-order-p-cubed-is-an-m-group, cex-solvable-group-need-not-be-an-m-group, ex-one-dimensional-and-trivial-monomial-boundaries]
---

These examples exhibit the monomial inductions of the main page on explicit
groups. For the dihedral group $C_n\rtimes C_2$ the dual of the cyclic
subgroup splits into the characters fixed by inversion, which extend to the
$2\gcd(2,n)$ linear characters of the group, and the remaining two-element
orbits, which give the $\tfrac{n-\gcd(2,n)}{2}$ irreducible characters of
degree two, each induced from a linear character of the cyclic subgroup of
index two. These inductions exhibit one choice of subgroup for each character;
an irreducible may also be induced from a different subgroup. The unitriangular
group $UT_3(\mathbb F_p)$ is handled the same way
over an abelian normal subgroup of index $p$: its centre and commutator
subgroup coincide, the quotient contributes $p^2$ linear characters, and the
$p-1$ nontrivial orbits of the dual contribute irreducible characters of
degree $p$, so that the sum of squared degrees exhausts the group of order
$p^3$.

The counterexample is the binary tetrahedral group $T=Q_8\rtimes C_3$ of order
$24$, constructed inside the quaternions: it is solvable, its left
multiplication on the quaternions is a faithful irreducible complex
representation of degree two, and its abelianization is cyclic of order three,
so it has no subgroup of index two. A degree-two monomial character would have
to be induced from such a subgroup, so $T$ is a solvable group that is not an
$M$-group. The last example records the degenerate ends of the theory: a
one-dimensional character is induced from the group itself and is monomial,
the trivial group is an $M$-group, and every finite abelian group is an
$M$-group because all of its irreducible complex characters are linear.
