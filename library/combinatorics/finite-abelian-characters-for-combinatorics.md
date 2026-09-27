---
page: finite-abelian-characters-for-combinatorics
title: "Finite Abelian Characters for Combinatorics"
status: draft
requires: [characters-and-the-orthogonality-relations, cyclic-groups-and-direct-products, the-complex-exponential-and-eulers-formula, finite-counting-and-binomial-coefficients]
items: [def-additive-character-of-a-finite-abelian-group, lem-additive-characters-are-one-dimensional-complex-representations, lem-additive-character-orthogonality-from-representation-orthogonality]
examples: []
---

This page is the library's small shared interface for characters of finite
abelian groups, written additively and valued in the multiplicative group
$\mathbb C^{\times}$ of nonzero complex numbers. The word "character" already
means the trace function $\chi_V(g)=\operatorname{tr}\rho_V(g)$ of a complex
representation on the prerequisite page
`characters-and-the-orthogonality-relations`, so the opening definition fixes
the additive notion separately and records exactly how the two are related: an
additive character is a homomorphism, not an arbitrary trace function, and no
isomorphism $G\cong\hat G$ is built into the definition.

The second item is the bridge between the two terminologies. Every additive
character determines a unique one-dimensional complex representation, and the
character of that representation is the additive character again; conversely,
every one-dimensional complex representation produces an additive character
independent of any chosen basis. Because the fundamental theorem of algebra
makes $\mathbb C$ algebraically closed and hence a splitting field for every
finite group, the published theorem that irreducible representations of a
finite abelian group over a splitting field are one-dimensional shows that every
irreducible complex representation of $G$ arises this way up to equivalence. Two
consequences are recorded for later use: all additive-character values have
modulus one, and distinct additive characters give inequivalent irreducible
representations.

The third item is the orthogonality relation in the normalized form used by
combinatorial consumers: the average of $\chi(g)\overline{\psi(g)}$ over $G$ is
$1$ for equal characters and $0$ otherwise, and a nontrivial additive character
sums to zero. It is proved through the published first orthogonality relation
for irreducible complex characters, applied to the irreducible characters
supplied by the dictionary; the normalized form itself, including its linearity
in the first argument, is the published inner product on class functions. The
whole pair is finite, makes no choice from a family of nonempty sets, and uses
no form of the axiom of choice.

The companion examples page writes out the five characters of $\mathbb Z/5\mathbb Z$
and their character table, and checks the orthogonality relation there in
coordinates; it requires only this page.
