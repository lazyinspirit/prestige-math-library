## Your assignment — batch 7, group 1: monads, comonads, adjunctions, T-algebras, Eilenberg-Moore

Run `frontier-15`, batch 7. The pair is `library/category-theory/monads-comonads-and-their-algebras.md`
(A page, 59 items) and `library/category-theory/monads-comonads-and-their-algebras-examples.md`
(B page, 13 items). All items are at `items/<id>.md`, `status: draft`.

Read these items in full, every numbered step against every cited item on disk:

- def-monad
- rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists
- def-comonad
- thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint
- cor-every-adjunction-induces-a-comonad-on-the-other-side
- def-t-algebra-and-algebra-homomorphism
- thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition
- def-eilenberg-moore-category
- def-free-t-algebra
- thm-the-eilenberg-moore-adjunction-induces-the-given-monad

**Focus for this group.** These are the definitional spine the rest of the page rests on,
so a wrong axiom, a dropped naturality condition, a mis-stated triangle identity or a
whiskering written on the wrong side propagates everywhere. Check every displayed
coherence equation componentwise and check that the whiskering conventions (`T\eta`
versus `\eta T`, `\mu T` versus `T\mu`) are used consistently between the definition and
each theorem that cites it — an inconsistency there is a false statement, not a typo.
For `thm-every-adjunction-induces-a-monad-...`, verify the associativity square really
follows from the stated triangle identities and naturality, and that the Given supplies
the adjunction data it uses. For `def-free-t-algebra` and
`thm-the-eilenberg-moore-adjunction-induces-the-given-monad`, verify the unit and counit
are the ones claimed and that the induced monad is *equal to*, not merely isomorphic to,
the given one, if that is what is asserted.

`rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists`
is a Remark: read its prose with a numbered step's suspicion. Remark prose is where
falsehoods hide. In particular, check the size/smallness claim it makes about when the
endofunctor category exists — a claim about local smallness or properness of a class
that is wrong is fatal.
