# frontier-11 spine audit findings

Reviewer: `sol-spine-frontier-11`

## Coverage and depth

I read all 60 items in `research/frontier-11-spine-audit.json` at full proof-reading depth. For every item I read the complete Statement and proof, traced every numbered step, opened every item cited in its Facts & Assumptions block or proof, and checked the cited Definition or Statement against the proposition for which it was used. I did not skim any scoped item.

Result: **60 read, 0 defects, 0 not assessed, 0 blockers**. I made no change to any file under `items/` or `library/`.

The dispatch names `reviewed`, `defect`, and `not-assessed` as receipt statuses, but the current `tools/spine-audit.mjs` rejects those values and accepts only `read` or `repaired`. Because every attestation is a clean full review, the receipt records `read` as the verifier's exact equivalent of the dispatch's `reviewed`. No defect or uncertainty was hidden by that mechanical vocabulary mapping.

## Per-item findings

Every entry below means the item was read in full and no concrete false claim, unlicensed inference beyond the 30-second threshold, missing hypothesis, or inaccurate dependency citation was found.

1. `thm-the-empty-set-exists-and-is-unique` — No defect. Separation with the contradictory formula establishes existence, and Extensionality establishes uniqueness; all three dependency clauses are faithful.
2. `lem-the-intersection-of-a-nonempty-set-is-a-set` — No defect. Nonemptiness supplies a member to separate inside, the ambient-membership condition is redundant because that member belongs to the family, and Extensionality gives independence of the member chosen.
3. `lem-the-power-set-of-a-set-is-a-set` — No defect. The weak implication form of Power Set supplies an ambient set, Separation trims it to exactly the subsets, and Extensionality gives uniqueness.
4. `lem-unions-and-intersections-of-small-families` — No defect. All five empty, singleton, and unordered-pair calculations follow from the cited membership definitions, with the intersection families correctly nonempty.
5. `lem-ordered-pairs-lie-in-the-double-power-set` — No defect. Both Kuratowski members are subsets of the binary union, so the ordered pair is a subset of its power set and hence belongs to the double power set.
6. `lem-unordered-pair-equality` — No defect. Both implications and the `a=b` / `a!=b` split are complete, including the singleton specialization.
7. `thm-the-characterising-property-of-ordered-pairs` — No defect. Both alternatives from equality of the outer unordered pairs are handled, including the degenerate singleton case.
8. `lem-the-domain-and-range-of-a-relation-are-sets` — No defect. Each coordinate lies in `union union R`, and Separation in that ambient set produces exactly the two asserted classes.
9. `lem-omega-smallest-inductive` — No defect. Separation inside an Infinity witness, successor closure, minimality, and Extensionality uniqueness all close.
10. `thm-induction-principle` — No defect. A successor-closed subset containing zero is inductive and hence contains the smallest inductive set; the property and subset forms agree.
11. `lem-nat-transitive-irreflexive` — No defect. The simultaneous induction establishes successor transitivity and rules out both possible routes to successor self-membership.
12. `thm-recursion` — No defect. The intersection of closed relations is closed, induction gives totality, the two deletion/minimality arguments give single-valuedness, and induction gives uniqueness. P1, P2, and P3 are used in their stated directions.
13. `thm-omega-is-peano-system` — No defect. P3 is induction, P1 follows from successor nonemptiness, and unequal inputs with equal successors would create a forbidden membership cycle.
14. `cor-nat-addition-well-defined` — No defect. The recursion theorem applies with initial value `m` and successor map, giving the unique total unary functions and hence total binary addition.
15. `lem-nat-add-identity` — No defect. The base and successor induction use exactly the two recursive addition clauses.
16. `lem-nat-add-successor-left` — No defect. The induction correctly moves the successor from the first input through the recursively defined second input.
17. `lem-nat-add-commutative` — No defect. The left identity handles the base and the left-successor law closes the induction step.
18. `lem-nat-add-associative` — No defect. The base and successor cases are direct applications of the addition recursion.
19. `lem-nat-add-cancellative` — No defect. Induction on the common right summand reduces the successor case by injectivity of the Peano successor.
20. `lem-nat-nonzero-is-successor` — No defect. The zero-or-successor property is inductive, and the nonzero conclusion is its second alternative.
21. `lem-nat-trichotomy` — No defect. Pairwise incompatibility, the zero base, and every branch of the successor induction were checked; cancellation and successor nonzeroness are applied correctly.
22. `thm-nat-linear-order` — No defect. Reflexivity, transitivity, totality, the zero-sum sublemma, and antisymmetry all follow from the cited additive laws.
23. `lem-nat-discrete` — No defect. Both directions of `m<n` iff `sigma(m)<=n` close, and the immediate-successor consequence follows directly.
24. `lem-nat-order-add-compatible` — No defect. Forward translation uses the additive witness, the converse uses cancellation, and equality cancellation gives the strict form.
25. `cor-nat-multiplication-well-defined` — No defect. Recursion with the add-`m` map gives the unique total operation and the displayed recursion clauses.
26. `lem-nat-mult-identity` — No defect. The right-unit calculation and the simultaneous induction for left zero and left unit are correct.
27. `lem-nat-mult-distributive` — No defect. The distributivity induction and nested successor-left induction were both checked through every algebraic rearrangement.
28. `lem-nat-mult-commutative` — No defect. The zero base and successor step follow from the recursive and successor-left multiplication laws.
29. `lem-nat-mult-associative` — No defect. Induction on the third factor closes through multiplication recursion and left distributivity.
30. `lem-nat-no-zero-divisors` — No defect. Nonzero factors are successors, so their product rewrites to a successor and is nonzero by P1.
31. `lem-nat-order-mult-compatible` — No defect. Weak monotonicity follows from distributivity, and strictness follows from the nonzero gap, no-zero-divisors, and additive cancellation.
32. `lem-a-relation-is-included-in-the-product-of-its-domain-and-range` — No defect. The domain-range inclusion and both directions of the relation-from-`A`-to-`B` characterization use ordered-pair coordinate uniqueness correctly.
33. `lem-inverse-relations-composites-and-restrictions-are-sets` — No defect. Each collection is separated inside the asserted product or relation, and the three inclusions follow from the domain/range definitions.
34. `lem-int-add-well-defined` — No defect. The representative equations establish both negation and addition independence using natural associativity and commutativity.
35. `lem-int-mul-well-defined` — No defect. The cross-sum equivalence calculation is correct for changing one representative, and symmetry handles the second.
36. `thm-int-comm-ring` — No defect. Every additive and multiplicative ring axiom was checked on representatives, including the four-term associativity and distributivity expansions.
37. `thm-int-ordered-ring` — No defect. Order independence, totality, antisymmetry, transitivity, translation compatibility, and the positive-product gap calculation all close from the cited natural laws.
38. `lem-nat-successor-neq-self` — No defect. P1 gives the base and P2 converts equality at the successor stage into the inductive contradiction.
39. `lem-int-cancellation` — No defect. All sign patterns give a nonzero product, and distributivity then gives multiplicative cancellation.
40. `lem-rat-ops-well-defined` — No defect. The product, sum, and negation cross-multiplication identities are correct, with legal nonzero denominators supplied by the rational-operation construction.
41. `thm-rat-field` — No defect. The representative calculations establish all field axioms, including distributivity, the zero criterion, and the reciprocal witness.
42. `thm-rat-ordered-field` — No defect. Positive scaling, representative independence, transitivity, addition compatibility, totality, antisymmetry, and positive products are all valid.
43. `lem-of-zero-mult` — No defect. Distributivity gives `0a=0a+0a`, and additive cancellation yields `0a=0` from the field axioms.
44. `lem-nat-order-is-membership` — No defect. Both inductions and the trichotomy/discreteness arguments establish transitivity of `N`, membership-order equivalence, subset-order equivalence, successor facts, and the zero claims without ordinal input.
45. `lem-of-add-order` — No defect. Translation invariance and addition of strict inequalities are immediate from difference identities and positive-cone closure.
46. `lem-of-mult-neg` — No defect. Both negative-product identities follow from distributivity, zero multiplication, and uniqueness of additive inverses.
47. `thm-well-ordering-principle` — No defect. Under the no-least-element assumption, the set with no member of `S` below its index contains zero and is successor-closed, so induction contradicts nonemptiness.
48. `lem-of-sign-rules` — No defect. The three product-sign claims and both directions of positive and negative multiplication monotonicity follow from positive-cone trichotomy and closure.
49. `lem-of-square-positive` — No defect. The positive and negative cases exhaust a nonzero element and both make its square positive.
50. `cor-of-one-positive` — No defect. The field axiom gives `1!=0`, `1=1^2`, and the square lemma gives positivity.
51. `lem-pigeonhole` — No defect. The transposition-normalized induction excluding injections `sigma(n)->n` is complete, and each of the four equinumerosity and proper-subset consequences follows from it.
52. `lem-of-inverse-unique` — No defect. The standard group calculations establish uniqueness of both identities and both kinds of inverse.
53. `lem-of-inverse-positive` — No defect. A negative inverse would make `1` negative, and multiplying `a<b` by the positive `a^{-1}b^{-1}` gives reciprocal order reversal.
54. `lem-of-naturals-positive` — No defect. The recursive induction gives positivity and strict increase, and the two further inductions establish preservation of natural addition and multiplication.
55. `lem-rat-triangle` — No defect. Sign cases give multiplicativity, the two elementary bounds give the triangle inequality, and applying it in both directions gives the reverse triangle inequality.
56. `lem-cauchy-bounded` — No defect. The epsilon-one tail estimate and a maximum over the finite prefix produce a rational nonnegative global bound.
57. `thm-cauchy-ring` — No defect. Sum and negation closure are direct, and boundedness with `delta=epsilon/(A+B)` gives the correct product estimate; ring identities hold termwise.
58. `lem-null-is-cauchy` — No defect. The epsilon-half null bound and the triangle inequality give the required Cauchy estimate.
59. `lem-null-ideal` — No defect. Null sequences are closed under addition and negation, and bounded Cauchy factors preserve nullity via `B=max(M,1)` and `epsilon/B`.
60. `lem-nat-embeds-int` — No defect. The map is injective, preserves both operations and order, and its image is exactly the nonnegative integer classes.

## Defects, unresolved concerns, and changes

- Fatal defects: none.
- Nonfatal defects: none under this spine dispatch's rule that a bridge a competent reader closes within 30 seconds is not a defect.
- Not assessed: none.
- Believed wrong but left unchanged: none.
- Blockers: none.
- Content fixes: none; the dispatch forbids edits to these high-fan-out published items.
- Receipt change: set `reviewer` to `sol-spine-frontier-11` and replaced every pending attestation with a concrete hash-bound `read` note. No scope entry, count, or content hash was changed.
