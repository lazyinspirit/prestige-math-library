## Your assignment — batch 7, group 7: the whole B page (examples and counterexamples)

Run `frontier-15`, batch 7. The pair is `library/category-theory/monads-comonads-and-their-algebras.md`
(A page, 59 items) and `library/category-theory/monads-comonads-and-their-algebras-examples.md`
(B page, 13 items). All items are at `items/<id>.md`, `status: draft`.

Read these items in full, every numbered step against every cited item on disk:

- ex-a-kleisli-composite-computed
- ex-the-maybe-monad-and-partial-functions
- ex-the-list-monad-on-a-two-element-set
- ex-the-writer-monad-from-a-monoid
- ex-the-state-monad
- ex-the-closure-operator-monad-on-a-topological-space
- ex-the-interior-comonad-on-a-topological-space
- ex-a-distributive-law-between-two-finite-closure-operator-monads
- ex-the-free-abelian-group-monad
- ex-the-ultrafilter-monad-on-a-finite-set
- cex-an-algebra-that-is-not-free
- cex-a-coequalizer-not-preserved-by-a-forgetful-functor
- ex-the-double-contravariant-power-set-monad

**Focus for this group. An example's defect is usually an arithmetic or set-theoretic
error in an actually-computed value, and that is exactly the class a citation audit
misses. Recompute every displayed computation by hand.**

- `ex-a-kleisli-composite-computed`, `ex-the-list-monad-on-a-two-element-set`,
  `ex-the-ultrafilter-monad-on-a-finite-set` (score 7, 9 deps, 9 facts): every element,
  every list, every set displayed. On a finite set every ultrafilter is principal — verify
  the item says so and that its enumeration of `\beta X` for the stated `X` is complete and
  correct, including the cardinality if one is stated.
- `ex-the-state-monad`: the state monad `T X = (X \times S)^S`. Verify the unit,
  multiplication and the associativity check are the standard ones and that the currying is
  written consistently; a swapped pair component is a false computed value.
- `ex-the-writer-monad-from-a-monoid`: check whether the monoid must be commutative (it
  need not, for the writer monad, but the multiplication's associativity uses the monoid's
  associativity in a specific order) and whether the unit uses the monoid identity.
- `ex-the-closure-operator-monad-on-a-topological-space` and
  `ex-the-interior-comonad-on-a-topological-space` (score 6): the interior example's `[L1]`
  and step 1.1 **were repaired by the independent reader** — it now quotes only the
  largest-open-subset, containment and open-fixed-point clauses of
  `def-interior-closure-boundary-top` and derives monotonicity and idempotence. Re-derive
  those two derivations yourself from the quoted clauses alone and say whether they close.
  Check the empty set and the empty ambient space in both items.
- `ex-a-distributive-law-between-two-finite-closure-operator-monads` (score 5): verify the
  claimed `\lambda` satisfies **all four** distributive-law axioms on the stated finite
  witness — check them elementwise, they are finite.
- `cex-an-algebra-that-is-not-free` and `cex-a-coequalizer-not-preserved-by-a-forgetful-functor`
  (score 7, quotient construction): a counterexample stands or falls on its witness. Verify
  the object really carries the structure claimed, that the property really fails, and that
  the failure is not an artefact of a convention the rest of the page does not use. For the
  coequaliser, verify the coequaliser in the algebra category and the coequaliser in the base
  are both computed correctly and are genuinely different.
- `ex-the-double-contravariant-power-set-monad`: verify the double contravariant power-set
  functor is genuinely covariant, that the stated unit and multiplication are natural, and
  that the monad laws are checked rather than asserted.
