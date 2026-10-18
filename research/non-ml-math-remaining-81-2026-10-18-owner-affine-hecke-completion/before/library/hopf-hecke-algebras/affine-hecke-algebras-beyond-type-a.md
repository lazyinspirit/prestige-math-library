---
page: affine-hecke-algebras-beyond-type-a
title: "Affine Hecke Algebras Beyond Type A"
status: draft
items: [def-hh-affine-hecke-algebra-from-root-datum, lem-hh-affine-hecke-im-basis, def-hh-affine-hecke-bernstein-presentation, lem-hh-affine-hecke-bernstein-quotients-are-well-defined, lem-hh-positive-affine-parameter-has-infinite-quantum-characteristic, rem-hh-affine-hecke-general-bernstein-pbw-awaits-local-proof, rem-hh-affine-tempered-langlands-classification-awaits-local-proof]
examples: []
---

This page fixes the Iwahori–Matsumoto and Bernstein conventions for affine Hecke algebras built from reduced based root data. It makes the Iwahori–Matsumoto quotient and its Coxeter basis explicit, defines the formal Bernstein cross-relations, and proves their denominators lie in the lattice group algebra.

The general Bernstein PBW theorem and its isomorphism with the Iwahori–Matsumoto algebra remain a local proof obligation. The source-reported positive-parameter tempered and Langlands classification is recorded with its hypotheses, but is not a theorem supplier here. Its local proof requires the Bernstein structure, central characters, parabolic subalgebras and induction, and the unique-quotient and uniqueness arguments. A p-adic group conclusion additionally requires the specified group's Iwahori-type equivalence.

## Root-data and parameter conventions

The base input is a reduced based root datum $R=(X,\Phi,Y,\Phi^\vee,\Delta)$ with $W_0$ the finite Weyl group. The affine Hecke definition records its affine Coxeter subgroup, length-zero symmetries, and positive real parameters. Its supplied affine Coxeter data contain the finite simple set $S_0=\{s_\alpha:\alpha\in\Delta\}$ with matching Coxeter labels, so the finite parameters are the restriction of $q$ to $S_0$. In the Iwahori–Matsumoto normalization, $T_s$ satisfies $(T_s-q_s)(T_s+1)=0$. With $N_s=q_s^{-1/2}T_s$, the symmetric normalization is $(N_s-q_s^{1/2})(N_s+q_s^{-1/2})=0$.

The formal Bernstein presentation uses $\mathbb C[Y]$ with basis $\theta_y$, finite Hecke generators, and separate cross-relations when $\alpha\in2X$ and $\alpha\notin2X$. The lattice divisibility needed to write those relations is proved locally. Solleveld's source uses the dual convention with $\mathbb C[X]$ and the condition $\alpha^\vee\in2Y$; the two descriptions are compared by passing to the dual root datum.

## Local items

- [[def-hh-affine-hecke-algebra-from-root-datum]] defines the Iwahori–Matsumoto algebra for the specified affine Coxeter extension.
- [[lem-hh-affine-hecke-im-basis]] proves its extended Iwahori–Matsumoto basis from the generic Coxeter Hecke basis theorem.
- [[def-hh-affine-hecke-bernstein-presentation]] defines the formal Bernstein quotient, and [[lem-hh-affine-hecke-bernstein-quotients-are-well-defined]] proves each cross-relation quotient is a Laurent polynomial.
- [[lem-hh-positive-affine-parameter-has-infinite-quantum-characteristic]] proves that a positive real parameter $q>1$ over $\mathbb C$ has quantum characteristic $\infty$, distinct from a finite root-of-unity quantum characteristic.

## Bernstein PBW and representation theory

[[rem-hh-affine-hecke-general-bernstein-pbw-awaits-local-proof]] records the full source-reported general Bernstein PBW statement and isolates the missing local construction, cross-relation compatibility, and basis proof. It is nonlogical context and cannot be used as a supplier.

For positive affine parameters (source convention $q>1$ with real $W_0$-invariant parameter functions satisfying the stated root-data compatibility), the reported classification uses finite-dimensional modules, weight-defined temperedness, parabolic subalgebras, and Langlands data in strictly positive position. [[rem-hh-affine-tempered-langlands-classification-awaits-local-proof]] preserves the unique-irreducible-quotient, exhaustivity, and uniqueness claims as a local proof obligation. The source statement does not alone identify representations of a p-adic group with modules for its Iwahori Hecke algebra.

## Type-A reuse boundary

The existing [[thm-hh-affine-type-a-bernstein-pbw]] and [[thm-hh-affine-type-a-center]] remain at their canonical homes. Their Laurent generators and proofs are specific to the type-A setup; they do not establish the general root-data Bernstein PBW theorem, the general affine center, or the positive-parameter representation classification.

Companion: [[affine-hecke-algebras-beyond-type-a-examples]].
