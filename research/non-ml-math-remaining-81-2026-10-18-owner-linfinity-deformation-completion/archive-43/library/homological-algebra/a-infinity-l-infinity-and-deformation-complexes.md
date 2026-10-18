---
page: a-infinity-l-infinity-and-deformation-complexes
title: "A∞, L∞, and Deformation Complexes"
status: draft
items:
  - def-koszul-sign-rule-for-graded-tensors
  - def-a-infinity-algebra
  - lem-low-arity-stasheff-identities
  - prop-differential-graded-algebra-induces-an-a-infinity-structure
  - def-a-infinity-morphism
  - def-minimal-a-infinity-model
  - def-triple-massey-data
  - lem-triple-massey-expression-is-closed
  - def-triple-massey-product
  - def-reduced-graded-symmetric-coalgebra
  - lem-shuffle-coproduct-coassociative-cocommutative-conilpotent
  - lem-reduced-graded-symmetric-coalgebra-is-cofree
  - lem-coderivation-extension-from-corestrictions
  - def-shifted-coalgebra-l-infinity-algebra
  - lem-square-zero-coderivation-is-higher-jacobi-identities
  - def-complete-filtered-l-infinity-algebra
  - thm-filtered-l-infinity-maurer-cartan-series-converges
  - def-maurer-cartan-element-of-complete-filtered-l-infinity-algebra
  - rem-general-maurer-cartan-deformation-correspondence-needs-gauge-data
examples: []
---

This page fixes one cohomological, unsuspended convention for uncurved
A∞-algebras and one shifted-coalgebra convention for L∞-algebras. It proves the
low-arity Stasheff relations, the DGA special case, the symmetric-coalgebra
coderivation identities, and the convergence of Maurer–Cartan series under an
explicit complete filtration. The companion supplies checked finite examples
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

The equation defines a solution set. A general correspondence between those
solutions and deformation classes requires a filtered morphism and gauge
construction matching a separately specified equivalence of deformations.
This page does not assert that classification; the exact missing authoring
obligation is recorded in
[[rem-general-maurer-cartan-deformation-correspondence-needs-gauge-data]].

## Reading route

Read [[dg-and-homological-algebra-foundations]] first for the cohomological
DGA interface. Its page prerequisite is a reading route; the DGA example and
Massey argument name the exact item-level supplier they use. Existing
Hochschild results provide homology context, but this page does not claim a
Gerstenhaber deformation complex or a formality theorem.

Companion: [[a-infinity-l-infinity-and-deformation-complexes-examples]].
