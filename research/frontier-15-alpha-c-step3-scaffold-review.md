# frontier-15 — Alpha-c, step-3 scaffold breadth and depth review

**Group:** `c` (label `step3-c`), covering **batch 7** only.
**Pair reviewed:** `monads-comonads-and-their-algebras` (A, order 365.005, 57 items)
· `monads-comonads-and-their-algebras-examples` (B, order 365.006, 10 items).
**Design section:** `research/plan-category-theory-track.md` §MA-3, lines 1293–1360.
**Finding id prefix used in this report: `B7-`.** Beta-7 owns every finding below.

---

## Verdict

| pair | verdict |
|---|---|
| `monads-comonads-and-their-algebras` | **insufficient** |

The general theory on this page is in good shape: the harvest is wide, the
decomposition is honest, and the two traps the design names are both respected
(`thm-kleisli-composition-is-associative-and-unital` at item 11 precedes
`def-kleisli-category` at item 12; the limit theorem names strict creation and
carries no preservation hypothesis on `T`). The scaffold is `insufficient` for
one reason, and it is a shape rather than a gap in the general theory: **four
blocks of this page are developed with no instance of the thing they define.**
The comonad half — eight items, 46–53 — never exhibits a comonad. The
distributive-law block never exhibits a distributive law, and its source range
was cut one line before the source's own examples. The ultrafilter monad, a
declared landmark built out of four items, is never computed anywhere. And two
Riehl headings that *do* carry the missing comonad content are recorded in
`coverage.json` as `included` against items that contain only their monad half,
so the harvest gate reads green over the omission.

Everything else I found was a route or a Statement defect, and I repaired those
myself (B7-5 … B7-10) rather than costing the build a round trip.

---

## Severity table

| id | finding | cost if left |
|---|---|---|
| B7-1 | comonads are developed in eight items with no instance; two harvested headings mis-dispositioned | **blocks `sufficient`** |
| B7-2 | distributive laws have no example; Cheng read range cut before the source's examples | **blocks `sufficient`** |
| B7-3 | the ultrafilter monad (landmark, four items) is never computed | **blocks `sufficient`** |
| B7-4 | "the category of monads" dispositioned `inline` into a definition that does not establish it | **blocks `sufficient`** |
| B7-5 | `requires` closure missed a page a dep lives on — `undeclared-prereq` at step 4 | applied by Alpha |
| B7-6 | eleven items with an undeclared load-bearing dependency | applied by Alpha |
| B7-7 | an id asserting the negative of its own theorem | applied by Alpha — **notes sync owed** |
| B7-8 | preorder theorem titled one-directionally against an "exactly" id and two `checked` iff rows | applied by Alpha |
| B7-9 | free-module theorem title omits the ring | applied by Alpha |
| B7-10 | an `fs-` item whose refutation does not refute its own Statement | applied by Alpha |
| B7-11 | templated boundary rows in the four cases where nothing is at stake | advisory |
| B7-12 | 58 of 60 items after fixes — the split contingency is now pre-adjudicated | advisory, read it |
| B7-13 | one summary sentence is interpretive filler | advisory |

---

## B7-1 — the comonad development has no instance, and two headings hide it

**blocks `sufficient`.**

Items 46–53 build coalgebras, the co-Eilenberg–Moore category and its
adjunction, co-Kleisli well-definedness, the co-Kleisli category and its
adjunction, and the dual extremal corollary. That expansion is right — I approve
your finding 9, and the design's single combined definition was worse. But
after eight items a reader has still never seen one comonad. The B page's ten
items are all monads.

The source you already harvested carries the fix, and this is where the harvest
stops being faithful. Two rows in `research/frontier-15-batch-7.coverage.json`
are `included` against items that contain only half of what the row names:

- `"Example 5.1.7, monads on preorders are closure operators **and comonads are
  kernel operators**"` → `thm-monads-on-a-preorder-are-exactly-closure-operators`,
  whose Statement is about monads only.
- `"Example 5.2.6(iv), algebras for topological closure are closed subsets **and
  coalgebras for interior are open subsets**"` →
  `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points`, whose
  Statement is about algebras only.

`coverage-checklist.mjs` passes both: it checks that every heading has a
disposition and that the named item exists, not that the item contains the
heading. This is exactly the failure mode the 2026-08-11 rule exists for.

**Fix.** Add both halves the source states:

1. **A page** — `cor-comonads-on-a-preorder-are-interior-operators`, corollary,
   placed immediately after `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points`
   (item 37). Riehl Ex. 5.1.7 states it. Route: formal duality against
   `def-comonad`, `def-opposite-category` and the preorder theorem — a comonad on
   a preorder is a monad on its opposite, so it is monotone, *contractive*
   (`Gp ≤ p`), and idempotent up to preorder equivalence; on a poset it is an
   interior (kernel) operator. Deps: `def-comonad`,
   `thm-monads-on-a-preorder-are-exactly-closure-operators`,
   `def-opposite-category`, `def-preorder`, `def-partial-order`.
2. **B page** — `ex-the-interior-comonad-on-a-topological-space`. Riehl Ex. 5.1.7
   and Ex. 5.2.6(iv). Topological interior is a comonad on the preorder of
   subsets, and its coalgebras are exactly the open subsets. Model it on the
   closure example you already scaffolded. Its dependencies
   (`def-interior-closure-boundary-top`, order 249) are already inside the
   declared `requires` closure, so this one costs no `requires` change.
3. Rewrite the two coverage rows so each names the item that carries the half it
   names, and re-run `coverage-checklist.mjs`.

Adding one item to the A page is what takes it to 58; see B7-12 before adding a
second.

## B7-2 — distributive laws have no example, and the read range was cut before the source's

**blocks `sufficient`.**

`def-distributive-law-between-two-monads` and
`thm-a-distributive-law-makes-the-composite-a-monad` are the page's only
material from Cheng, and nothing on either page exhibits a single distributive
law or names one composite monad it produces. A reader gets four axioms and a
theorem about an object never shown to be inhabited.

The coverage locator is
`"Section 2, printed page 5, Definition 2.1 through Theorem 2.2, **stopping
before Example 2.3**"`. The read range was cut at exactly the last result you
planned to include, one line before the source's own examples — and your own
notes then delete the `§2, Exs 2.3–2.4` row as unsupported. Truncating a source
at the boundary of what you already planned, and then declaring the harvest
complete over that range, is the harvest-faithfulness failure the step-6 audit
looks for; better to find it now.

**Fix.** Extend the Cheng locator through §2's examples, enumerate their
headings, and add **one B-page example** exhibiting a concrete distributive law
together with the composite monad it induces. Either of these is acceptable:

- Cheng's own Example 2.3/2.4, if its prerequisites are available to this pair —
  you hold the paper, so you decide.
- Failing that, the preorder instance, which is verifiable entirely from this
  page: for two monads `S`, `T` on a preorder, a distributive law is precisely
  the pointwise inequality `S(Tp) ≤ T(Sp)` — every one of the four axioms is
  automatic, since a preorder has at most one arrow between any two objects —
  and the theorem then makes `TS` a closure operator. Cite
  `thm-monads-on-a-preorder-are-exactly-closure-operators` and
  `thm-a-distributive-law-makes-the-composite-a-monad`, and give a named pair of
  closure operators as the witness.

Record the disposition for every heading in the extended range, including any
you decline.

## B7-3 — the ultrafilter monad is a landmark built in four items and never computed

**blocks `sufficient`.**

`lem-ultrafilter-pushforward-…`, `lem-the-principal-ultrafilter-…`,
`def-the-ultrafilter-endofunctor-…` and `thm-the-ultrafilter-monad-is-a-monad`
are the largest single decomposition on the page — I approve your finding 8 —
and there is no example of `β` on any set and no instance marking its boundary.
The contract's `X = ∅` row is real and I checked it, but a contract row is not a
reader-facing instance.

**Fix.** Add `ex-the-ultrafilter-monad-on-a-finite-set` to the B page. Every
piece is already published:

- On a finite `X` every ultrafilter is principal, so `η_X : X → βX` is a
  bijection and `β` restricted to finite sets is the identity monad. The
  argument is three lines from `ex-ultrafilter-selects-a-cell-of-a-finite-partition`
  (partition `X` into singletons; `U` selects exactly one cell `{x}`; if `A ∈ U`
  and `x ∉ A` then `∅ = {x} ∩ A ∈ U`, contradicting properness) together with
  `ex-principal-ultrafilter`.
- The contrast that makes it a boundary and not a triviality:
  `ex-free-ultrafilter-on-naturals` gives a non-principal ultrafilter on `ℕ`, so
  `η` is **not** a natural isomorphism. State the choice scope in the Statement —
  that witness needs the ultrafilter lemma, and `rem-feferman-no-free-ultrafilter-in-zf`
  is why the scope has to be named rather than assumed.

**One `requires` consequence, and please do not skip it:** all three of those
published items live on `filters-and-ultrafilters-examples` (order 13), which is
**outside** the current declared `requires` closure. Add it to the **B page's**
`requires` when you add this example, or step 4 raises `undeclared-prereq` —
which is precisely the error B7-5 below was.

## B7-4 — "the category of monads" is dispositioned `inline` into a definition that cannot establish it

**blocks `sufficient`.**

The Mac Lane row reads `"Section VI.1 reader task, morphisms of monads **and the
category of monads on a fixed category**"`, disposition `inline`, item
`def-monad-morphism`. A definition of the morphisms does not establish that they
form a category: that needs identities and closure under composition, which is
the same well-definedness obligation you correctly separated out twice on this
page (`thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition`
before `def-eilenberg-moore-category`, and item 11 before item 12). The page
applies the standard to its own constructions and drops it for a harvested one.

**Fix**, and either is honest — you hold the source, so check which the row
actually says:

- If Mac Lane's §VI.1 does pose the category of monads, absorb it properly:
  extend `def-monad-morphism` to state identity and composite monad morphisms and
  their closure, or add a one-item closure statement before it. Then the `inline`
  disposition is true.
- If the recorded heading overstates what §VI.1 asks, correct the heading text to
  what the source says and keep the `inline` disposition.

While you are there: `def-monad-morphism` and
`thm-a-monad-morphism-induces-restriction-of-algebras-and-a-comparison-of-free-algebras`
have no instance either. This is *not* blocking on its own, but if a cheap
source-named one is in your ranges, a B-page example would leave the block far
better off than it is. The unit `η : Id ⇒ T` is a monad morphism for every
monad, and restriction along it is exactly the Eilenberg–Moore forgetful functor
— checkable in four lines from `def-monad` and your own restriction theorem.

---

## Repairs I applied to the scaffold (owner, 2026-08-16)

These are in `research/frontier-15-batch-7.pages.json` (and, for B7-7, in
`.coverage.json` and `.proof-contracts.json`) as of this report. Do not revert
them. Record each as `already correct — applied by Alpha` in your `## Step-3 fix
pass`, except B7-7, which owes you one edit.

### B7-5 — `undeclared-prereq` at step 4

`thm-the-covariant-power-set-monad` depends on
`ex-singletons-define-a-natural-transformation-to-the-power-set-functor`, which
lives on `categories-functors-and-natural-transformations-examples` (order 360).
That page was not in the transitive closure of the A page's declared `requires`
(80 pages, reached through
`reflective-subcategories-and-the-adjoint-functor-theorems-examples`), so
`validate-plan.mjs` rule 15 would have raised `undeclared-prereq` at step 4.
**Applied:** added `categories-functors-and-natural-transformations-examples` to
the A page's `requires`. Order 360 < 365.005, no cycle, no redundancy — it is
reachable from neither the other entry nor vice versa. I recomputed the closure
over both pages afterwards: every page hosting a cited dep is now inside it, and
there is no on-page forward citation.

### B7-6 — eleven undeclared load-bearing dependencies

Each of these proofs needs a fact no declared dependency states. Several are
named in your own proof contracts as step inputs, which is how I found them.
All targets are published, eligible (no `ai-generated` Statement), and strictly
earlier in plan order. **Applied**, as dep additions:

| item | added | why the route needed it |
|---|---|---|
| `thm-a-monadic-functor-is-conservative` | `prop-fully-faithful-functors-reflect-isomorphisms` | your contract's step 3.1 is "transfer reflection of isomorphisms across the comparison equivalence"; nothing in the dep closure said an equivalence reflects isomorphisms. Published at order 359. |
| `thm-a-distributive-law-makes-the-composite-a-monad` | `def-monad` | your contract's step 3.1 declares the input "monad associativity", and the only declared dep was the distributive-law definition. |
| `thm-the-comparison-functor-exists-and-is-unique` | `def-adjunction-by-unit-counit-and-triangle-identities`, `thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint` | the theorem quantifies over *a supplied adjunction inducing `T`*; the construction `K d = (Ud, U ε_d)` uses the counit and the triangle identities, and `T = UF`, `μ = UεF` is the induced-monad formula. Neither was declared. |
| `thm-the-kleisli-factorisation-functor-exists-and-is-unique` | the same two | same reason: the factorisation is defined by adjoint transpose against the supplied adjunction. |
| `thm-the-free-monoid-monad-and-its-algebras-are-monoids` | `def-semigroup-and-monoid` | the Statement's conclusion names monoids. |
| `thm-the-free-group-monad-and-its-algebras-are-groups` | `def-group` | the Statement's conclusion names groups. |
| `thm-the-free-module-monad-and-its-algebras-are-modules` | `def-left-and-right-modules` | the Statement's conclusion names modules. |
| `fs-every-algebra-for-a-monad-is-free` | `def-semigroup-and-monoid` | the witness is a two-element monoid. |
| `thm-monads-on-a-preorder-are-exactly-closure-operators` | `def-partial-order` | the second clause is about posets, and `def-preorder` says explicitly that a preorder "need not be antisymmetric" — it is not the poset definition. |
| `thm-algebras-for-the-covariant-power-set-monad-are-posets-with-all-small-suprema` | `def-partial-order` | same; the conclusion is a poset and the proof must derive antisymmetry. |
| `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points` | `def-preorder`, `def-partial-order` | neither order notion was declared on an item whose Statement is about both. |

### B7-7 — an id asserting the negative of its own theorem — **you owe a notes sync**

`thm-colimits-in-an-eilenberg-moore-category-are-not-created-in-general` carried
the title "Eilenberg–Moore colimits preserved by the monad and its square are
created". The id asserts a negative the item does not prove — your own boundary
map correctly assigns the negative to the B-page group counterexample and keeps
the A item free of a forward citation. Ids are immutable once on `main` and
appear in the URL and in every citation list; this was the last cheap moment.

**Applied**, in `pages.json`, `coverage.json` (three rows) and
`proof-contracts.json` (contract key, in place):

- id → `thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square`
- title → "The Eilenberg–Moore forgetful functor creates every colimit in the
  base that the monad and its square preserve"

**Owed by you:** `research/frontier-15-batch-7.notes.md` still names the old id in
its item list (entry 24) and in the component-provenance table. Update both. The
prose design also names the old id at
`research/plan-category-theory-track.md` line 1318 — that file is the lead
Alpha's at step 4, not yours; I have recorded the rename here so it is applied
with the rest of your amendments.

### B7-8 — the preorder theorem stated one direction

Title was "A monad on a preorder is monotone, extensive, and idempotent up to
preorder equivalence; on a poset it is a closure operator" — one direction, under
an id that says "exactly", against a contract whose `iff-forward` and
`iff-reverse` rows are both `checked`. The converse is not merely true, it is
free: a preorder has at most one arrow between any two objects, so every monad
diagram commutes automatically and a monotone `T` with `p ≤ Tp` and `T(Tp) ≤ Tp`
*is* a monad. Understating it loses the source's result for nothing.

**Applied**, title → "On a preorder the monads are exactly the monotone extensive
maps with T(Tp) below Tp; on a poset they are exactly the closure operators".
Both clauses are now biconditional, matching the id and the contract.

### B7-9 — the free-module theorem title omits the ring

`thm-the-free-module-functor-is-left-adjoint-to-the-underlying-set-functor`
opens "Fix a unital ring `R`" and concludes in `R`-**Mod**, left modules. The
scaffold title said only "modules". A title that omits the hypothesis its
dependency fixes is the missing-hypothesis defect, and it is fatal later.

**Applied**, title → "For a unital ring R, the free-R-module monad on sets has
left R-modules as its Eilenberg–Moore algebras".

### B7-10 — an `fs-` item whose refutation does not refute its Statement

`fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad`
denies that `C_T` and `C^T` are *equivalent categories*. Its strategy was
`nonfree-monoid-witness` against
`thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras`
and the free-monoid monad. That route shows the **comparison functor** is not
essentially surjective — which refutes "the comparison functor is an
equivalence", a strictly weaker claim than the one the item states. An
equivalence `C_T ≃ C^T` need not be the comparison functor, so the witness as
scaffolded leaves the titled Statement standing.

I kept the strong Statement, because it is the belief actually worth refuting,
and **applied** a strategy and deps that close it. The argument, for the step-5
author:

> Let `T` be the free-monoid monad on **Set**. In `C_T`, the endomorphisms of an
> object `X` are `Set(X, X*)`. If `X = ∅` there is exactly one; if `X ≠ ∅` then
> `X*` is infinite (the powers of one letter are pairwise distinct), so
> `Set(X, X*)` is infinite. **Every object of `C_T` therefore has either exactly
> one endomorphism or infinitely many.** In `C^T = Mon`, the two-element
> idempotent monoid `{1, e}` has exactly two: a monoid map fixes `1` and sends
> `e` to an idempotent, and both `1` and `e` are idempotent, and both assignments
> are multiplicative. An equivalence is fully faithful, so it restricts to a
> bijection on endomorphism sets; no object of `C_T` has exactly two. Hence no
> equivalence exists, for this monad.

Then state what *does* hold, from
`thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras`:
the comparison is fully faithful with image the free algebras, and
`cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad`
is the positive boundary. **Applied:** `strategy` →
`endomorphism-monoid-count`; deps += `def-kleisli-category`,
`def-eilenberg-moore-category`, `def-semigroup-and-monoid`,
`def-equivalence-and-adjoint-equivalence-of-categories`,
`def-full-faithful-and-essentially-surjective-functor`,
`thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor`.

`fs-every-algebra-for-a-monad-is-free` needed no such repair — the same witness
refutes exactly what that one states.

---

## Advisory

### B7-11 — templated boundary rows in the tail cases

`boundary-audit.mjs` reports no template cluster and no contradicted disposition,
and I ran it. But that tool clusters on exact strings, and your rows interpolate
the item's description into a fixed sentence, so 50 rows over the `endpoints`
case reduce to 7 distinct tails, and `degenerate` to 8. The rows that matter are
genuinely disposed — I checked the three that carry real content and all three
are specific and correct:

- power-set algebras: "`P(∅) → ∅` does not exist, so the empty carrier is
  correctly excluded" — right, and it is exactly why every such algebra has a
  bottom element;
- the ultrafilter monad: `β(∅) = ∅` and the unit equations vacuous;
- Eilenberg–Moore limits: the empty diagram gives the terminal object.

And the nine genuinely biconditional items are the nine with `iff` rows
`checked`. So this is not the `frontier-13`/`frontier-14` defect. It is the
residue: `zero`, `one`, `endpoints` and `nonempty-choice` on items where nothing
is at stake. Leave them; at step 5, when you write real proofs, replace any row
whose case turns out to be live rather than reusing the sentence.

### B7-12 — 58 of 60 items, and the split contingency is now pre-adjudicated

**No split.** The page is at 57 today and 58 after B7-1's corollary; the ceiling
is 60 and it is a ceiling, not a target. The design intends one page, MA-4
requires it by name, and splitting mints two page ids, two summaries and a
reordering of everything above 365.005 — real cost against a page that is
legal. I am not ordering a split on a forecast.

But two items of headroom is thin, and step-6 repair authority explicitly
includes adding intermediate lemmas. So the contingency you proposed is
**adjudicated now, in advance, so nobody has to improvise it under a frozen
text**:

- Every further **B-page** addition is free — `validate-plan.mjs` applies `size`
  to A pages only (its line 357). Put examples on B, which is where B7-1's
  second half, B7-2, B7-3 and B7-4's optional example all go.
- If the A page must exceed 60, take the cut you named and no other: items 1–36
  stay on `monads-comonads-and-their-algebras`; items 37 onward move to
  `standard-monads-ultrafilters-and-comonad-algebras` with companion
  `standard-monads-ultrafilters-and-comonad-algebras-examples`. That cut is
  coherent — general theory, then standard monads and the comonad dual — and it
  crosses no dependency that runs backwards.
- Do not prune to fit. Under the 2026-08-11 rule the remedy for an oversize page
  is always the split.

### B7-13 — one summary sentence is interpretive filler

Your proposed paragraph 1 ends "These facts provide the categorical language and
size discipline needed to turn an endofunctor with multiplication and unit into a
controlled theory of algebras." That is a sentence about what the dependencies
are *for*, not a mathematical statement, and it is the register the house style
names. The rest of both paragraphs is fine, the count is two, and each is well
under 150 words. Replace that sentence at step 5 with a fact.

---

## Findings I checked and did **not** raise

Recorded so the step-6 reader does not re-derive them:

- **Both design traps hold.** Kleisli associativity precedes the Kleisli
  category; the limit theorem names strict creation and carries no preservation
  hypothesis on `T`. The third trap holds too — the ultrafilter monad is built
  here with no compactness, and Manes' theorem stays on MA-4.
- **Seam S-1 respected.** Leinster is nowhere in the harvest. The two independent
  treatments are Riehl and Mac Lane, both `textbook`, with Richter as a third and
  Cheng as a paper for one block. No encyclopedia or wiki source is doing
  primary work on this pair.
- **Provenance.** All 46 external dependencies were checked from disk: every one
  is `status: published`, and **not one has an `ai-generated` Statement**. Your
  closure claim holds. `prop-integers-modulo-n-as-a-quotient-group`,
  `prop-size-of-functor-categories` and `thm-kuratowski-closure-axioms` have
  `ai-generated` *proofs* with `ai-altered` Statements, which is eligible; your
  notes' source-check route for the first of those is recorded and correct.
- **The `deferred` block for §§5.4–5.5.** Fifty-odd Riehl headings are deferred
  to MA-4, each with a result-specific reason. I read them as a block: split
  coequalizers, Beck, U-split pairs, canonical presentations, finitary monads and
  Manes are genuinely MA-4's spine per the design's own MA-4 inventory, and MA-4
  is a real declared page, not a euphemism. These declines are correct — they are
  "another page's topic", the permitted disposition, not "machinery we do not
  have".
- **The mathematics of the idempotent block.** I checked the three-way
  equivalence by hand: monic gives cancellation between the two unit laws to
  yield `ηT = Tη`; naturality of `η` at `μ_A` together with `ηT = Tη` makes
  `η_{TA}` a two-sided inverse to `μ_A`. Correct as titled.
- **`cor-composition-with-an-identity-monad-adjunction-preserves-the-induced-monad`**
  — "on the nose" is the right strictness and the composite `GG'F'F = GF` under
  it. Correct.
- **`thm-int-comm-ring` and `def-free-abelian-group`** have no owning page object
  in `plan-spec.json`, so `depsource.mjs` will classify them `homeless`. Both are
  `status: published` on disk with literature-derived Statements, and both are
  used only inside `ex-the-free-abelian-group-monad`. You declared this; I am
  confirming it as an accepted, non-blocking exception, not a new finding.
- **No forward references** on either page, and no cross-batch dependency. Your
  claim that this batch needs nothing from another `frontier-15` batch is correct
  on disk.
- **Your fifteen findings.** I verified all fifteen from disk and approve all
  fifteen. Finding 3 (the Cheng title is *Distributive laws for Lawvere
  theories*, not *Iterated distributive laws*) is a real correction to the design
  and the lead Alpha should apply your exact-text edits at step 4. Findings 1, 5,
  6, 8, 9 and 11 are the well-definedness and decomposition repairs this page
  needed, and finding 2 (preorder equivalence versus poset equality) is the one
  I extended in B7-8 rather than merely approving.

---

## Honest limits of this review

- I checked the harvest for **internal** faithfulness — every heading's recorded
  text against the item it is dispositioned into, and against my own knowledge of
  what Riehl Ch. 5, Mac Lane Ch. VI and Richter Ch. 6 contain. I did **not**
  reopen the four source PDFs. B7-1 and B7-4 were found that way and are
  self-evidencing from the file; B7-2 is self-evidencing from your own locator.
  Whether Riehl's Chapter 5 contains a named result absent from all 168 harvested
  headings is the one question this method cannot answer, and it is the question
  the step-6 faithfulness pass must answer with the PDFs open.
- I read in full only the published items carrying a finding
  (`prop-fully-faithful-functors-reflect-isomorphisms`, `def-preorder`,
  `def-partial-order`, `thm-the-free-module-functor-…`,
  `prop-completeness-and-cocompleteness-in-poset-categories`,
  `thm-ultrafilter-characterisation`, `lem-ultrafilter-prime`,
  `ex-principal-ultrafilter`,
  `ex-ultrafilter-selects-a-cell-of-a-finite-partition`,
  `ex-singletons-define-a-natural-transformation-to-the-power-set-functor`). The
  other 36 were checked mechanically for existence, `status: published`, page
  order and both provenance components.
- Gates I ran after my repairs: `content-policy.mjs --manifest-only` (67 items,
  0 errors, 0 warnings), `coverage-checklist.mjs` (168 harvested results, 0
  errors, 0 warnings), `boundary-audit.mjs` (400 rows, no cluster, no
  contradiction), plus my own recomputation of the `validate-plan` rule-15
  closure, on-page citation order and dep-file existence. I did **not** run
  `validate-plan.mjs` or `depsource.mjs` as authoritative gates on this batch:
  the manifest is not spliced until step 4, and a claim that a gate would pass is
  not a gate passing.
