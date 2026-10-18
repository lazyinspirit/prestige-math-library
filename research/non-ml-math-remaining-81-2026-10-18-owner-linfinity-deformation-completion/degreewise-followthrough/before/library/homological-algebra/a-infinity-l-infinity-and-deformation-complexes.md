---
page: a-infinity-l-infinity-and-deformation-complexes
title: A∞, L∞, and Deformation Complexes
status: draft
items:
- def-koszul-sign-rule-for-graded-tensors
- def-triple-massey-data
- def-a-infinity-algebra
- lem-triple-massey-expression-is-closed
- def-reduced-graded-symmetric-coalgebra
- def-coefficient-complete-codifferential-deformation
- lem-low-arity-stasheff-identities
- def-a-infinity-morphism
- def-triple-massey-product
- lem-shuffle-coproduct-coassociative-cocommutative-conilpotent
- lem-complete-coderivations-form-a-filtered-differential-graded-lie-algebra
- lem-noncommutative-filtered-exponential-and-logarithm
- prop-differential-graded-algebra-induces-an-a-infinity-structure
- def-minimal-a-infinity-model
- lem-reduced-graded-symmetric-coalgebra-is-cofree
- lem-coderivation-extension-from-corestrictions
- lem-unsuspended-a-infinity-identities-are-tensor-codifferentials
- thm-coalgebra-automorphism-logarithms-are-coderivations
- def-shifted-coalgebra-l-infinity-algebra
- lem-square-zero-coderivation-is-higher-jacobi-identities
- def-complete-filtered-l-infinity-algebra
- thm-filtered-l-infinity-maurer-cartan-series-converges
- def-filtered-l-infinity-morphism
- def-maurer-cartan-element-of-complete-filtered-l-infinity-algebra
- lem-filtered-l-infinity-taylor-map-extends-to-completed-coalgebra
- thm-filtered-l-infinity-morphisms-preserve-maurer-cartan-elements
- def-filtered-maurer-cartan-gauge-path
- lem-filtered-maurer-cartan-gauge-equation-has-unique-complete-polynomial-flow
- lem-filtered-graded-lie-algebra-defines-a-shifted-l-infinity-algebra
- thm-filtered-l-infinity-morphisms-preserve-gauge-equivalence
- thm-maurer-cartan-elements-classify-fixed-carrier-codifferential-deformations
- thm-unital-associative-deformations-are-coderivation-maurer-cartan-classes
- rem-general-maurer-cartan-deformation-correspondence-needs-gauge-data
examples: []
---

This page fixes one cohomological, unsuspended convention for uncurved
A∞-algebras and one shifted-coalgebra convention for L∞-algebras. It proves the
low-arity Stasheff relations, the DGA special case, the symmetric-coalgebra
coderivation identities, and complete filtered Maurer–Cartan convergence, Taylor functoriality, gauge paths, and the fixed-carrier codifferential deformation correspondence. The companion supplies checked finite examples
and boundary cases.

## A∞ convention

An A∞-algebra here has operations $m_n$ of degree $2-n$ and the signed
Stasheff sum given on the page's definition item. Its arity-two operation is
not assumed associative; the arity-three identity states exactly how $m_3$
measures its associator. A differential graded algebra is the case
$m_1=d$, $m_2=\mu$, and $m_n=0$ for $n\ge3$. No strict-unit condition is built
into the definition.

The A∞ morphism formula is stated separately in the same convention. The
finite Massey example constructs its own morphism and verifies every arity; no
general homotopy-transfer theorem is used as a supplier.

## Shifted L∞ convention

For a cohomologically graded $V$, set $W=V[1]$ by $W^j=V^{j+1}$. The
operations $q_n:S^n(W)\to W$ have degree $+1$ and are encoded by the unique
coderivation $Q$ on the reduced cofree conilpotent cocommutative coalgebra
$S^c(W)$; the structure equation is $Q^2=0$. The local proof derives all
higher Jacobi identities from this equation in the same Koszul convention.
No unsuspended $l_n$ sign translation is asserted.

## Maurer–Cartan boundary

For $w\in F^1W^0$ in a complete separated filtration satisfying
$q_n(F^{r_1},\ldots,F^{r_n})\subseteq F^{r_1+\cdots+r_n}$, each term of
$\sum_{n\ge1}q_n(w^n)/n!$ lies in $F^nW^1$. Every quotient $W/F^rW$ therefore
sees only finitely many terms, and completeness gives a unique limit. This is
an algebraic convergence statement; no analytic convergence is involved.

A filtered L∞ morphism is a filtration-preserving Taylor family whose coalgebra extension commutes with the shifted coderivations. The local ordered-partition formulas prove its pushforward on Maurer–Cartan elements, composition, and compatibility with completed polynomial gauge paths. Paths are polynomial in every nilpotent quotient; no common polynomial-degree bound or analytic integration is assumed. The Picard proof supplies every gauge flow and proves that curvature remains zero.

## Specified deformation problem

The deformation objects are square-zero codifferentials on a fixed coaugmented tensor or symmetric coalgebra, completed in a separated complete coefficient ideal and reducing to a specified codifferential. Their equivalences are independently defined continuous coalgebra automorphisms congruent to the identity modulo that ideal, acting by conjugation. Continuous coefficient-raising coderivations form the controlling complete differential graded Lie algebra. Local noncommutative exponential/logarithm and time-ordered flow proofs identify its Maurer–Cartan gauge classes with exactly these deformation classes, for both fixed-carrier A∞ and L∞ structures.

For an ordinary unital associative algebra, the normalized tensor-coderivation specialization gives all formal products with the fixed unit and all unit-preserving changes of variables. This is a concrete correspondence, including its equivalences; its completion hypotheses are explicit in the helper statements. The general boundary is explained in [[rem-general-maurer-cartan-deformation-correspondence-needs-gauge-data]].

## Reading route

Read [[dg-and-homological-algebra-foundations]] first for the cohomological
DGA interface. Its page prerequisite is a reading route; the DGA example and
Massey argument name the exact item-level supplier they use. Existing Hochschild results provide homology context. The strict associative specialization constructs and proves its own normalized coderivation complex; no formality theorem is asserted.

Companion: [[a-infinity-l-infinity-and-deformation-complexes-examples]].
