---
page: projective-extensions-and-the-little-group-method
title: "Projective Extensions and the Little Group Method"
status: published
items: [def-projective-representation-and-factor-set, lem-factor-set-is-a-normalized-two-cocycle, lem-rephasing-changes-the-factor-set-by-a-coboundary, def-twisted-group-algebra-for-a-factor-set, lem-projective-representations-are-twisted-group-algebra-modules, lem-invariant-irrep-produces-a-projective-inertia-extension, def-clifford-obstruction-class, thm-extension-exists-iff-the-clifford-obstruction-vanishes, lem-cocycle-central-extension-is-a-group, lem-central-extension-linearizes-a-projective-representation, thm-projective-clifford-correspondence, thm-little-group-method-for-a-split-abelian-normal-subgroup]
examples: []
---

Projective representations of a finite group replace the multiplicativity
$P(q)P(r)=P(qr)$ by $P(q)P(r)=\alpha(q,r)P(qr)$ for a factor set $\alpha$, and
the associativity of operator composition makes $\alpha$ a normalized
two-cocycle whose cohomology class is invariant under rephasing. Passing to the
twisted group algebra $\mathbb C^\alpha[Q]$ turns projective representations
into ordinary modules over an associative semisimple algebra, and the central
extension $E_\alpha=Q\times\mathbb C^\times$ linearizes them as the ordinary
representations with a fixed central character.

The second half applies this machinery to Clifford theory. An invariant
irreducible representation $\rho$ of a normal subgroup $N$ carries projective
inertia operators on its inertia group $I$, with factor set descending to
$I/N$; its class in $H^2(I/N,\mathbb C^\times)$, the Clifford obstruction,
vanishes exactly when $\rho$ extends to $I$. When it does not, the irreducible
representations of $I$ over $\rho$ correspond to irreducible projective
representations of the quotient with the inverse factor set, and induction
completes the Clifford correspondence. For a semidirect product $G=A\rtimes H$
with $A$ abelian the obstruction vanishes, and the classical little group
method parametrizes $\operatorname{Irr}(G)$ by pairs of an $H$-orbit in the dual
of $A$ and an irreducible character of the corresponding stabilizer.

The base groups $N$, $I$, $Q$ and $G$ are finite; the cocycle extension
$E_\alpha=Q\times\mathbb C^\times$ can be infinite. All modules are
finite-dimensional over $\mathbb C$, and all factor sets are normalized. The examples page computes the quaternion case
$Q_8/\{\pm1\}$, exhibits an invariant type that cannot be extended, carries out
the little group computation for dihedral groups, and rephases an explicit
projective representation by a coboundary.
