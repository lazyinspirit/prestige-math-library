## Your assignment — batch 7, focused pass: the five items the independent reader rewrote, read as fresh text

Run `frontier-15`, batch 7. The pair is `library/category-theory/monads-comonads-and-their-algebras.md`
(A page, 59 items) and `library/category-theory/monads-comonads-and-their-algebras-examples.md`
(B page, 13 items). All items are at `items/<id>.md`, `status: draft`.

An independent reader audited this batch and repaired five items. **Its repairs have had no
adversarial reading at all** — the reader is the author of the current text of each of these.
That is the single largest unchecked surface in the batch, and it is your assignment.
Read each in full, every step against every cited item on disk, as if it were freshly
authored by someone whose reasoning you do not trust:

- thm-a-distributive-law-makes-the-composite-a-monad  — **whole proof replaced**
- thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema — `[L1]` and `deps` changed
- ex-the-interior-comonad-on-a-topological-space — `[L1]` narrowed, step 1.1 rewritten
- thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square — step 3.1 retyped
- def-t-algebra-and-algebra-homomorphism — Definition display corrected

Then read these three, whose proof-contract empty-set boundary rows were rewritten by the
same reader, and check the **mathematics** the new rows assert about the empty set:

- lem-ultrafilter-pushforward-is-an-ultrafilter-and-is-functorial
- lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural
- thm-the-ultrafilter-monad-is-a-monad

**What to check hardest.**

1. `thm-a-distributive-law-makes-the-composite-a-monad`. The new proof lifts `T` to
   `\mathcal{C}^S` by `\widetilde T(A,a) = (TA, T(a)\lambda_A)`, verifies the lifted algebra
   laws, verifies `\eta^T` and `\mu^T` are algebra homomorphisms, and composes the two
   Eilenberg-Moore adjunctions. For **each** of the four distributive-law axioms, say which
   step uses it and whether that step's `[F#]` cites the axiom it actually needs. Verify the
   composite adjunction induces the monad the Statement names, with the multiplication the
   Statement gives, and that the composition order (`TS` versus `ST`) matches
   `def-distributive-law-between-two-monads` on disk. The claimed naturality identity
   `\mu^T S\circ TT\mu^S\circ T\lambda S = T\mu^S\circ\mu^T SS\circ T\lambda S` should be
   checked componentwise: is it naturality of `\mu^T` at the arrow `\mu^S`, and are the
   whiskerings on the sides written?
2. `thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema`.
   The reader's repair was a citation split. Ignore the repair narrative and re-verify the
   whole result: the induced order, its antisymmetry, arbitrary small suprema including the
   empty subset, and that algebra homomorphisms are exactly the sup-preserving maps in both
   directions.
3. `ex-the-interior-comonad-on-a-topological-space`. `[L1]` now quotes only three clauses of
   `def-interior-closure-boundary-top`: largest open subset, containment, and open sets are
   their own interior. Step 1.1 claims to derive monotonicity and idempotence from those
   alone. **Derive them yourself from exactly those three clauses** and say whether the
   derivation closes, including `A = \varnothing` and the empty ambient space.
4. `thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square`, step 3.1:
   the reader changed "precomposition with every `i_j`" to `T(i_j)`. Verify the legs
   `T(i_j)` really are jointly epic — that is exactly the hypothesis that `T` preserves the
   colimit — and that the step cites it.
5. The three ultrafilter items' empty-set claims: there is no proper filter on `\varnothing`,
   hence `\beta\varnothing = \varnothing`. Verify each item's proof is actually consistent
   with that (in particular that nothing in it asserts a unit or multiplication component
   with nonempty domain over the empty set), and that no numbered step is now claimed by a
   contract row to do something it does not do.

Rank a real falsehood above a wording defect. If the repairs are sound, say so plainly —
"I re-derived these and found no defect, here is what I checked" is the expected outcome if
the reader did its job, and you should not manufacture a finding.
