## Your cluster — `yoneda`: universal properties and the Yoneda lemma

Pages: `universal-properties-and-the-yoneda-lemma` (A, 21 items, order 361) and
its `-examples` (B, 14 items).

The independent reader (reader-4) repaired **source locators, dependency
citations, internal step references, notation and one provenance tag**, and
states that **no Statement, title, hypothesis or mathematical claim was changed**.
Your job is to test that claim as much as to test the mathematics: a "citation
only" repair that quietly altered what a step licenses is the failure mode here.

### Priority 1 — naturality in both variables

`thm-yoneda-lemma-is-natural-in-both-variables` is a separate theorem from
`lem-yoneda-evaluation-bijection`, and the owner's step-3 review required that the
**naturality obligation be scaffolded, not folded into the bijection**. Check:

- Step 1.1–1.2 are said to prove naturality in the **represented object** by
  precomposition with `C(h,−)`, and step 1.3 naturality in the **target functor**
  by componentwise vertical composition with `η`. Write out both naturality
  squares yourself and check the item's displayed squares are the right ones —
  variance included. Naturality in the representing object is **contravariant**
  in one formulation and covariant in the other; a square drawn with the wrong
  variance is a fatal defect that reads as correct.
- Is the naturality asserted for the bijection `Nat(C(a,−), F) ≅ F(a)` as a natural
  isomorphism of **functors** `C × [C, Set] → Set`, and if so are both functors
  actually defined on the page? If the item states naturality only as a pair of
  commuting squares, does it say so honestly, or does its title claim a natural
  isomorphism of bifunctors it never constructs?
- `lem-yoneda-evaluation-bijection` — the reader **removed** fact `F4` and its
  dependency as unused. Confirm it really is unused, and that its removal did not
  strip the licence for the sethood conclusion. Check the two-sided inverse is
  verified in both directions, and that the Yoneda map's naturality-of-`α` usage
  is where the item says it is.

### Priority 2 — size and class hygiene

This is the cluster where a set/class error is invisible to every gate.

- `rem-size-of-natural-transformation-collections` is a Remark added under
  decision D9 because the prose scaffold's original clause — that `Nat(F,G)` is a
  set for arbitrary functors between locally small categories — **is false as
  written**. Check the Remark now says something true: local smallness alone does
  not make an object-indexed collection of natural transformations set-coded; a
  functor category exists for a small source; the representable-source case is a
  set by Yoneda. Check it does **not** assert a global proper-class counterexample
  it cannot prove, and check no other item on the page silently uses the false
  clause.
- `fs-yoneda-lemma-requires-a-small-category` is a false-statement item using
  `Set` as a large locally small category. Check the refutation refutes the stated
  claim exactly, and that `Set` really is a counterexample to the claim as written.
- `def-hom-functors-and-hom-bifunctor`, `def-yoneda-embedding`,
  `def-presheaf-representable-functor-and-representation` — check each says
  **locally small** where it needs to, and that the presheaf category `[C^op, Set]`
  is only formed for a small `C`.
- `thm-yoneda-embedding-is-fully-faithful` — full faithfulness is about hom-set
  bijections; check the item does not slide into "embedding" meaning injective on
  objects. Reader-4 says the run reserves "full embedding" for when injectivity on
  objects actually holds; verify the item's own wording obeys that.

### Priority 3 — the repaired examples

Reader-4 changed source locators on ten items after checking the official PDFs of
Riehl (*Category Theory in Context*), Leinster (*Basic Category Theory*),
Campbell (Harvard Math 55b notes) and Spivak. **Spot-check at least four of these
locators against the actual sources** — you have web access — and say which you
checked and what you found. A locator repair that replaces a wrong number with
another wrong number is worse than the original because it looks audited.

Then check the mathematics of the examples, which is where a `representing
object` claim can be subtly wrong:

- `ex-set-products-as-representing-objects` and `ex-set-coproducts-as-representing-objects`
  — the representing object and the natural bijection must be exhibited with
  naturality **in the varying object**, not merely a bijection for each object.
  The reader added `lem-two-functions-are-equal-exactly-when-they-agree-at-every-point`
  for extensionality; check it is the right lemma and that the copairing
  `[q∘i_A, q∘i_B] = q` calculation is correct.
- `ex-function-sets-as-exponential-representing-objects` — currying. Check the
  bijection is natural in the correct variable and that the exponential's
  universal property is the one stated.
- `ex-polynomial-ring-represents-the-underlying-set-functor-on-rings` — the reader
  fixed `$(1,1_R)r^0=1_R$` to `$(1·1_R)r^0=1_R$`. Check the evaluation
  homomorphism is well defined into a **noncommutative** target if the item claims
  that, since `ℤ[x]` represents the underlying-set functor on **commutative** rings
  only; on all rings the representing object is `ℤ⟨x⟩`. If the item says `Ring`
  and means `CRing`, that is fatal.
- `ex-the-one-point-space-represents-the-underlying-set-functor-on-top` — the
  reader changed `provenance.statement` from `ai-generated` to `literature-derived`
  and removed the `generation` block, citing Riehl Example 2.1.6(ii). Verify that
  source states this example. A provenance upgrade that is not source-backed is a
  real defect, because `ai-generated` statements are forbidden as dependency
  targets and the label is what enforces it.
- `ex-free-group-universal-property-as-a-representation` and
  `ex-free-monoid-universal-property-as-a-representation` — check the universal
  property is stated with the right adjunction direction and that the singleton
  free group being infinite cyclic is proved, not asserted.
- `ex-representable-presheaf-on-a-poset`, `cex-the-doubling-functor-on-set-is-not-representable`,
  `ex-two-singletons-are-canonically-isomorphic-representing-objects`,
  `ex-yoneda-embedding-of-the-walking-arrow-category`,
  `ex-yoneda-lemma-for-a-monoid-action`,
  `fs-nonisomorphic-objects-can-have-isomorphic-representable-presheaves`.
  For the doubling functor: the standard argument is a cardinality/singleton test —
  check it handles the empty set and that "not representable" is proved for the
  functor as defined in the item, whichever doubling it means.
  For the walking arrow: recompute every hom-set and restriction table.

### Also read in full

`thm-hom-assignments-are-functors`, `thm-hom-assignment-is-a-bifunctor`,
`def-generalized-element-and-shape`,
`prop-initial-and-terminal-objects-as-representations`,
`thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism`,
`cor-contravariant-yoneda-lemma`,
`cor-representable-presheaves-detect-isomorphism-of-objects`,
`def-universal-element`, `thm-universal-elements-and-universal-factorisations`,
`thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism`,
`def-category-of-elements`,
`thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements`,
`def-universal-arrow-to-and-from-a-functor`,
`thm-universal-arrows-are-initial-or-terminal-in-comma-categories`.

The `initial-or-terminal` items depend on variance: a universal element of a
covariant `F` is **initial** in the category of elements, of a presheaf it is
**terminal**. Check each item states the correct one for the variance it
declares, in the Statement *and* the title.

Finally: this page sits at order 361 above a published 60-item category-theory
page at order 359. Confirm nothing here **restates** a published result rather
than citing it, and that no citation reaches a page after 361.
