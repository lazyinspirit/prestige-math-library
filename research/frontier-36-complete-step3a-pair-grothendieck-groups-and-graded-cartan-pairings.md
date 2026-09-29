# Step 3a scope review — Grothendieck Groups and Graded Cartan Pairings

- Run: `frontier-36-complete`
- Pair: A `grothendieck-groups-and-graded-cartan-pairings`; B `grothendieck-groups-and-graded-cartan-pairings-examples`
- Batch: 21
- Decision for A: **sufficient**

## Scope evidence

The current batch manifest and HA-19 prose agree on 14 A items and three B examples. Together they cover the intended finite-module interface: exact-sequence `G0` versus split projective `K0`; smallness, universal properties and functoriality; simple-class and projective-class bases; graded shifts and Laurent-module bases; the Cartan map; the projective/module Hom pairing, its shift convention and split-field dual-basis condition; and adjointness for exact functors. The B page distinguishes the ungraded dual-number Cartan map `[A] -> 2[S]`, the graded polynomial `1+v^2`, and the nonsplit-field pairing diagonal `2`.

This is adequate for the pair's stated role. The plan makes it a prerequisite for perfect/triangulated `K0`, categorical braid decategorification, and KLR, Hecke and category-O categorification pages. The pair supplies the group and pairing interface those consumers need. It explicitly does not posit a tensor-ring structure on arbitrary module categories. The four declared A-page requirements are relevant, and batch 21's cross-batch item-dependency record is empty; no missing in-run supplier scope is evident.

The boundary is appropriately narrower than all of algebraic K-theory. The all-module Eilenberg swindle, Serre-quotient localization, and the special `A_m` braid action are not needed for these consumers; derived Grothendieck groups and braid actions have their own planned pages. The in-scope examples address the central distinctions, and no specific omitted result appears necessary to the planned interface.

## Source coverage

- [Weibel, *The K-book*, Chapter II](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf), §1 and §§6.1–6.2, with Exercise 6.3: group completion, exact-sequence `K0`, universal property, smallness, exact-functor maps, the Cartan map, and the finite-length simple-class basis. The text states the Cartan map immediately after Definition 6.2.
- [Stacks Project, §12.11, tag 02MT](https://stacks.math.columbia.edu/tag/02MT): the small abelian-category presentation and exact-functor map; its Serre-quotient localization result is correctly outside this pair's scope.
- [Kleshchev, §2.2](https://arxiv.org/pdf/0909.4844), pp. 6–8: graded categories, the internal-shift Laurent action, homogeneous Hom and the sesquilinear pairing. The local graded-cover and shift-orbit results in the plan supply the extra general finite-dimensional-algebra claims rather than importing the source's radical/gradability lemmas.
- [Khovanov–Seidel, §2e.1](https://arxiv.org/pdf/math/0006056), p. 15: the `A_m`-specific Grothendieck-group action and Burau representation. These special calculations are properly left to the braid development.

I read the cited definitions and relevant arguments in these sections. This is a scope decision only; it does not approve the correctness of the planned proofs or scaffold statements.

## Separate published-proof warning

The HA-19 row 19.13 prose names published `thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules` as an inherited input. Its proof at [items/thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules.md:51](/home/lazyinspirit/Projects/prestige-math-library/items/thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules.md:51) asserts that the direct sum of projective covers is a projective cover without establishing that the direct-sum kernel is superfluous. This is a potential proof gap, not a counterexample to the theorem. The batch-21 notes identify the local projective-basis route in HA-19 row 19.5 as sufficient for this pair, so it does not make the subject scope inadequate; the owner should reconcile the inherited reference with that route and the published-consumer ledger. I did not edit the ledger or the plan.
