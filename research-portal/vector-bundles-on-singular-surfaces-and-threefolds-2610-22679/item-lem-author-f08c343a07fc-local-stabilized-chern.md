---
title: Chern data survive addition of trivial bundles
status: published
research_item: lem-author-f08c343a07fc-local-stabilized-chern
dependency_level: 13
---

## Prerequisites

- [lem-author-f08c343a07fc-local-chern-interface](item-lem-author-f08c343a07fc-local-chern-interface)
- [math:lem-operational-chern-classes-and-whitney-formula](https://alphabetamath.cc/item/lem-operational-chern-classes-and-whitney-formula)
- [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata)


## Statement
Assume AC. Fix a field $k$ and a smooth equidimensional finite-type $k$-scheme $X$. Let $E,F$ be vector bundles on $X$, allowing locally constant finite ranks. Their ordinary Chow Chern polynomials are taken componentwise on the finite open-and-closed common rank partition. They satisfy $c_t(E\oplus\mathcal O_X^m)=c_t(E)$ for every integer $m\geq0$, and likewise for $F$. Consequently equal Chern tuples of rank-two bundles give equal first three Chern classes of $E\oplus\mathcal O_X$ and $F\oplus\mathcal O_X$: the common third class is zero. For every $k$-morphism $f:X'\to X$ from another smooth equidimensional finite-type $k$-scheme, these equalities remain true after pullback.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The Chern class convention and tuple map on the stated smooth equidimensional finite-type schemes over $k$ are fixed in [lem-author-f08c343a07fc-local-chern-interface](item-lem-author-f08c343a07fc-local-chern-interface). Choice is used in invoking that qualified Chow interface. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] The operational Whitney identity gives $c_t(E\oplus G)=c_t(E)c_t(G)$, and $c_t(\mathcal O)=1$; the published Chow Chern definition gives naturality and rank vanishing. [math:lem-operational-chern-classes-and-whitney-formula](https://alphabetamath.cc/item/lem-operational-chern-classes-and-whitney-formula), [math:def-chern-classes-of-a-vector-bundle](https://alphabetamath.cc/item/def-chern-classes-of-a-vector-bundle)

[F3] The finite locally free sheaves $E,F$ on the qcqs scheme $X$ have a finite common open-and-closed rank partition, including rank-zero strata. [lem-author-ab0a6fc202cb-finite-common-rank-strata](item-lem-author-ab0a6fc202cb-finite-common-rank-strata)

## Proof

1.1 The finite-type $k$-scheme $X$ is noetherian and qcqs, so apply [F3] to $E,F$. Every integral cycle and every generating principal-divisor relation is supported in one of the open-and-closed strata, so the cycle groups and their rational-equivalence quotients split as finite direct sums over those strata. Thus Chow classes and polynomials are determined by their restrictions there, justifying the componentwise convention in the statement. The nonempty strata remain smooth equidimensional finite-type $k$-schemes, so [F1] and [F2] apply on each; for rank zero use the zero-bundle convention $c_t(0)=1$ in [F2]. [F1, F2, F3]

2.1 On each stratum the $m=0$ equality is an identity. For $m>0$, Whitney applied $m$ times gives $c_t(E\oplus\mathcal O_X^m)=c_t(E)$, since each trivial line contributes the unit polynomial; the same holds for $F$. Step 1.1 assembles these equalities on $X$. If $E,F$ have rank two and equal Chern tuples, their first two coefficients agree by [F1] and both third coefficients vanish by [F2]. Stabilization therefore gives identical first three coefficients, with third coefficient zero. [F1, F2, step 1.1, algebra]

3.1 Both schemes and $f$ have the specified base-field and finiteness scope. Pullback preserves direct sums and trivial bundles and pulls the rank partition back to an open-and-closed partition of $X'$. On each nonempty inverse-image stratum naturality in [F2] gives $c_i(f^*E)=f^*c_i(E)$ and the analogous identities for $F$ and their stabilizations. Apply this coefficientwise to step 2.1 and assemble over the strata as in step 1.1. All asserted equalities persist on $X'$, including the zero third coefficient. [F1, F2, step 1.1, step 2.1] ∎
