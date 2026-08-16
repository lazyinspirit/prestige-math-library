## Your assignment — batch 7, group 6: the comonad side, and the four false statements

Run `frontier-15`, batch 7. The pair is `library/category-theory/monads-comonads-and-their-algebras.md`
(A page, 59 items) and `library/category-theory/monads-comonads-and-their-algebras-examples.md`
(B page, 13 items). All items are at `items/<id>.md`, `status: draft`.

Read these items in full, every numbered step against every cited item on disk:

- def-coalgebra-for-a-comonad-and-coalgebra-homomorphism
- thm-coalgebra-homomorphisms-are-closed-under-identities-and-composition
- def-coeilenberg-moore-category
- thm-the-coeilenberg-moore-adjunction-induces-the-given-comonad
- thm-cokleisli-composition-is-associative-and-unital
- def-cokleisli-category
- thm-the-cokleisli-adjunction-induces-the-given-comonad
- cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties
- fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad
- fs-every-functor-with-a-left-adjoint-is-monadic
- fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category
- fs-every-algebra-for-a-monad-is-free

**Focus for this group.**

The comonad side is the formal dual of the monad side, and a dualisation error is the
characteristic defect: an arrow reversed in one place but not another, a counit used where
a unit is needed, `\delta` whiskered on the wrong side, or an adjunction stated with the
adjoints swapped. Check each dual statement **componentwise on disk**, not by asserting
duality. Where a proof says "dually" or "by the dual argument", ask whether the dual of the
cited monad-side result is literally what is needed here — and whether the cited monad-side
item is in `deps`. `cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties`
is the highest-risk of these: which is initial and which is terminal in the category of
adjunctions inducing the comonad? The dual reverses that, and getting it backwards is fatal.

**The four `fs-` items are refutations, and their Statement is the FALSE claim.**
Read each one asking a different question from the usual: does the **Refutation actually
refute the stated claim**, and is the counterexample real?

- `fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad` (score 7,
  8 deps, 6 facts): the refuting witness must be a concrete monad where the comparison
  functor is not essentially surjective — i.e. a non-free algebra exists. Verify the
  witness monad, verify the algebra exhibited is genuinely not isomorphic to a free one,
  and verify the argument is not merely "the comparison functor is not an isomorphism"
  (which does not refute *equivalence*).
- `fs-every-functor-with-a-left-adjoint-is-monadic`: verify the witness right adjoint really
  has a left adjoint, and that the failure of monadicity is demonstrated (not just asserted)
  — e.g. by exhibiting a failure of conservativity or of the coequaliser condition.
- `fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category` (score 5):
  this is a size claim. Verify the refutation exhibits a category for which the endofunctor
  category genuinely fails to exist (or fails to be a legitimate category in the library's
  foundations), and check what foundational convention the page has declared — a refutation
  that depends on an unstated foundation is a missing hypothesis.
- `fs-every-algebra-for-a-monad-is-free`: verify the exhibited non-free algebra really
  carries an algebra structure, and that no isomorphism with a free algebra exists — the
  common error is exhibiting an algebra that is not *equal* to a free one while the claim
  refuted is about isomorphism.

For every `fs-` item also check the boundary: is the false statement false for *every*
instance, or only for the exhibited one? The Statement's quantifier ("for every monad")
must be what the counterexample actually refutes.
