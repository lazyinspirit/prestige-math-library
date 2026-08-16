## Your assignment — batch 7, group 3: monadicity, creation of limits and colimits, conservativity

Run `frontier-15`, batch 7. The pair is `library/category-theory/monads-comonads-and-their-algebras.md`
(A page, 59 items) and `library/category-theory/monads-comonads-and-their-algebras-examples.md`
(B page, 13 items). All items are at `items/<id>.md`, `status: draft`.

Read these items in full, every numbered step against every cited item on disk:

- def-monadic-and-strictly-monadic-functor
- def-conservative-functor
- thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits
- cor-every-category-monadic-over-set-is-complete
- thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square
- thm-a-monadic-functor-is-conservative

**Focus for this group.** All but the two definitions are risk-routed `high`, and this
is the group where a missing hypothesis is most likely.

`thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits`
(score 7): "strictly creates" is a strong technical term. Verify the proof establishes
*creation* — that a limit cone in the base lifts **uniquely** to a cone in the algebra
category and that the lifted cone is limiting — and not merely that limits are preserved
and reflected. Check the empty diagram (the terminal object) and the empty index set
explicitly. Check whether the diagram is required to be small, and whether that hypothesis
appears in the Statement or only in the proof.

`cor-every-category-monadic-over-set-is-complete` (score 6): completeness of `Set` for
which limits? Small limits only. If the Statement says "complete" without qualification
and the proof uses small completeness of `Set`, check whether the library's own
definition of complete is small-complete — open the cited definition. Also check that
"monadic over Set" is being used with the same strictness as `def-monadic-...`.

`thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square`
(score 5): the hypothesis is that **both** `T` and `TT` preserve the colimit. Verify every
step actually needs and uses only that, and that the algebra structure map on the colimit
is well defined — this is where the `TT` hypothesis is load-bearing. The independent
reader repaired step 3.1 here (precomposition with `T(i_j)`, not `i_j`); re-derive that
step yourself and say whether the repaired version is now correct and typed.

`thm-a-monadic-functor-is-conservative` (score 5): check the argument that an algebra
homomorphism whose underlying map is invertible has an inverse that is *itself* an algebra
homomorphism, and that the transport along the equivalence in the monadic (non-strict)
case is handled — a proof valid only for strictly monadic functors under a Statement about
monadic functors is a fatal overstatement.
