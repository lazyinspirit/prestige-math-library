## Your assignment — batch 7, group 2: Kleisli, the two universal properties, comparison functors

Run `frontier-15`, batch 7. The pair is `library/category-theory/monads-comonads-and-their-algebras.md`
(A page, 59 items) and `library/category-theory/monads-comonads-and-their-algebras-examples.md`
(B page, 13 items). All items are at `items/<id>.md`, `status: draft`.

Read these items in full, every numbered step against every cited item on disk:

- thm-kleisli-composition-is-associative-and-unital
- def-kleisli-category
- thm-the-kleisli-adjunction-induces-the-given-monad
- rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic
- thm-the-kleisli-factorisation-functor-exists-and-is-unique
- thm-the-comparison-functor-exists-and-is-unique
- cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties
- cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad
- thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras

**Focus for this group.** Three of these are risk-routed as `high` for existence and
uniqueness language: `thm-the-kleisli-factorisation-functor-exists-and-is-unique`,
`thm-the-comparison-functor-exists-and-is-unique` and
`thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras`.

For each: **what exactly is the uniqueness claim quantified over?** Uniqueness of a
functor commuting with both the left and the right adjoint is a different claim from
uniqueness up to natural isomorphism, and a proof establishing one while the title or
Statement asserts the other is a fatal overstatement. Check whether the proof establishes
uniqueness *on objects and on morphisms* or only on objects. Check whether the claimed
commutation is with the whole adjunction (both functors and both natural transformations)
or only with the forgetful functor.

For `thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras`,
verify what "image" means: the essential image, the strict image, or the full subcategory
on free algebras. Check the fullness argument produces a Kleisli arrow from an *arbitrary*
algebra homomorphism between free algebras, and that faithfulness is not silently assuming
the unit is monic.

`cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad` and
`rem-the-universal-properties-...-are-schematic` — read for a claim wider than what is
proved. The Remark's prose is where a falsehood would hide.
