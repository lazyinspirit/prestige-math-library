---
page: grothendieck-groups-and-graded-cartan-pairings
title: "Grothendieck Groups and Graded Cartan Pairings"
status: draft
items:
  - def-grothendieck-group-of-an-essentially-small-abelian-category
  - def-split-grothendieck-group-of-an-additive-category
  - thm-grothendieck-group-universal-properties-and-functoriality
  - thm-finite-length-grothendieck-groups-have-simple-class-bases
  - thm-finite-dimensional-algebra-projective-classes-form-a-split-k-zero-basis
  - def-graded-grothendieck-group-shift-module-and-cartan-map
  - lem-graded-fitting-decomposition-preserves-homogeneous-summands
  - thm-graded-krull-schmidt-for-finite-dimensional-graded-modules
  - lem-finite-dimensional-graded-algebras-have-graded-projective-covers
  - thm-graded-projective-and-simple-classes-have-shift-orbit-bases
  - def-projective-simple-hom-pairing-on-grothendieck-groups
  - thm-projective-hom-pairing-is-additive-and-graded-sesquilinear
  - thm-split-simple-projective-hom-pairing-has-dual-bases
  - thm-adjoint-exact-functors-induce-adjoint-grothendieck-operators
examples: []
---

This page develops the two Grothendieck groups attached to finite-dimensional
modules over a finite-dimensional unital algebra over a field: the
short-exact-sequence group $G_0$ and the split Grothendieck group $K_0$ built
from direct-sum relations on finite-dimensional projectives, with the two
groups kept distinct. It proves the universal properties of both
constructions and their functoriality for exact and additive functors,
including identities, composition and natural isomorphisms, then establishes
the simple-class basis of $G_0$ for essentially small abelian categories of
finite length and the projective-cover basis of the split $K_0$ indexed by
simple isomorphism classes. Neither basis result claims that the Cartan map
between the groups is injective or surjective.

The graded part fixes the internal shift $M\{r\}_d=M_{d-r}$ and the Laurent
action $v[M]=[M\{1\}]$, defines the graded Cartan map and proves that it is
$\mathbb Z[v,v^{-1}]$-linear, and develops the graded structure needed to
compute with it: the finite-dimensional graded Fitting decomposition, graded
Krull–Schmidt uniqueness, graded projective covers, and the shift-orbit
Laurent bases of the graded simple and finite graded projective classes.

The page then introduces the projective/simple Hom pairing on the groups and
proves that it is additive and graded sesquilinear, with
$\langle v^r[P],v^s[M]\rangle=v^{s-r}\langle[P],[M]\rangle$, and identifies when
the cover and simple classes are dual bases: the pairing matrix is diagonal
with entries $\dim_k\operatorname{End}_A(S_i)$, respectively
$\dim_k\operatorname{End}_{A,0}$ for graded simples, so it is a dual-basis
pairing exactly under the splitting hypothesis $\operatorname{End}_A(S_i)=k$.
Finally, exact $k$-linear adjoint functors that preserve finite projectives
induce adjoint operators on both $K_0$ and $G_0$, the graded version being
built degreewise from natural degree-zero shift isomorphisms. The arguments
are choice-free; only finite choices of generators, lifts and summands occur.
