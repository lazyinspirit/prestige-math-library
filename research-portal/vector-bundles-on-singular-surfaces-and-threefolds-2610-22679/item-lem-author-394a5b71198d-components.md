---
title: Smooth affine components and gluing a trivial line
status: published
research_item: lem-author-394a5b71198d-components
dependency_level: 4
---

## Prerequisites

- [math:thm-regular-equals-smooth-over-perfect-field](https://alphabetamath.cc/item/thm-regular-equals-smooth-over-perfect-field)
- [math:thm-regular-local-rings-are-domains-and-cohen-macaulay](https://alphabetamath.cc/item/thm-regular-local-rings-are-domains-and-cohen-macaulay)
- [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)
- [math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence)
- [thm-serre-affine-splitting](item-thm-serre-affine-splitting)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC. A nonempty smooth affine finite-type scheme $X$ over an algebraically closed field has a finite disjoint decomposition $X=\coprod_jX_j$ into integral open and closed smooth affine schemes. Put $d=\dim X$ and $d_j=\dim X_j\leq d$. Bundles, bundle isomorphisms and finite direct sums are given componentwise. Define $\mathrm{CH}^i(X)=\bigoplus_j\mathrm{CH}^i(X_j)$ in the codimension convention; this agrees with the usual Chow ring for pure-dimensional $X$. Chern classes are given componentwise. If a rank-$d$ bundle restricts to a bundle with a trivial line summand on every $X_j$, these decompositions glue to a trivial line summand on $X$. For $d_j<d$, its restriction always splits off a line.

## Facts & Assumptions

**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[F1] Smooth finite-type schemes over a perfect field are regular; regular local rings are domains. [math:thm-regular-equals-smooth-over-perfect-field](https://alphabetamath.cc/item/thm-regular-equals-smooth-over-perfect-field), [math:thm-regular-local-rings-are-domains-and-cohen-macaulay](https://alphabetamath.cc/item/thm-regular-local-rings-are-domains-and-cohen-macaulay)

[F2] A noetherian space has finitely many irreducible components. [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)

[F3] Chow groups are cycles modulo divisors of rational functions on integral closed subschemes. [math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence)

[F4] A bundle of rank greater than the dimension on a noetherian affine scheme splits off a trivial line. [thm-serre-affine-splitting](item-thm-serre-affine-splitting)

## Proof

1.1 A finite-type scheme over a field is noetherian. Distinct irreducible components cannot meet: at an intersection the local ring would have distinct minimal primes, contrary to being a domain by [F1]. Finiteness by [F2] makes each component both closed and open. Such a component is affine: glue the functions 1 and 0 on it and its complement to obtain a global idempotent, whose corresponding ring factor has that spectrum. Regularity makes each component reduced, hence integral. [F1, F2, construct]

2.1 Sheaves on a finite disjoint open cover are precisely the tuples of their restrictions: there are no nonempty overlaps imposing further gluing conditions. Thus bundle maps and isomorphisms, and decompositions $E_j\cong\mathcal O_{X_j}\oplus F_j$, glue. An integral closed subscheme and each rational-function relation lie in a single component, so the cycle and relation groups split componentwise. This justifies the stated Chow convention and componentwise Chern operations. [F3, step 1.1, construct]

3.1 If $d_j<d$, the restricted rank-$d$ bundle satisfies the strict rank inequality in [F4] and therefore splits off a line. This also handles all components below maximal dimension without a critical-rank theorem. [F4, step 1.1, step 2.1] ∎
