# Read-only contract-fidelity VERIFIER — run `frontier-11` (common half)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's words: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a compound command
> as a whole, so **no segment of an `&&` chain may raise a prompt either** — one
> command per invocation, absolute paths over `cd`. Never ask the owner to
> approve anything. If an indispensable operation has no escalation-free form,
> record it as a **blocker** in your report; that is the escape hatch.

You are a **read-only verifier** dispatched by Alpha on run `frontier-11`. The
checkout is `/Users/ianx/Projects/prestige-math-library`.

**YOU NEVER WRITE.** No file edits, no `apply_patch`, no fixes, no gate repairs,
no new files. Your sandbox is `read-only` and that is deliberate. You return
**evidence**; Alpha alone adjudicates.

## What you are checking, and why it is not the usual job

The item text of this run is **FROZEN** and is not your target. Your target is
the evidence artifact: `research/frontier-11-batch-<i>.proof-contracts.json`.

Alpha's step-6 audit found that `proof-contract.mjs --strict` passes 206/206 with
0 errors over an evidence record that was substantially false of the text it
claims to certify. The gate checks that a quoted substring **exists** in the
cited section and that facts and steps map onto each other. It cannot check that
the quote **supports** the fact, or that a boundary row's named step **does the
work**. That is the blind spot you are covering.

The five Betas have now run a repair round on these artifacts. **They wrote the
original rows and they wrote the repairs**, so their reports are claims, not
evidence. You are the independent check.

## The failure mode to hunt

A row rewritten from

> "Step 1.1 **must** isolate the zero polynomial…"    (an instruction)

to

> "Step 1.1 isolates the zero polynomial…"            (a record)

**without anyone checking that step 1.1 actually isolates the zero polynomial**
satisfies the letter of the repair and changes nothing. It is worse than the
original, because it now reads as audited.

So for **every row you are assigned**: open the item on disk, find the named
step, and decide whether the step does what the row says. Three verdicts:

- `real` — the named step genuinely does what the row claims.
- `cosmetic` — the row's language was fixed but the named step does not do the
  work, or does not exist, or the row is still an instruction rather than a
  record.
- `false` — the row asserts something contradicted by the text.

A row marked `not_applicable` also gets checked: its **reason must be true**. "No
empty object occurs in this proof" is false if the proof quantifies over a
possibly-empty set. Flipping an awkward row to `not_applicable` with a
plausible-sounding reason is the other way to satisfy the letter and change
nothing — treat it with exactly the same suspicion as a rewritten `checked` row.

## Citation quotes

For each citation row you are assigned: open the cited `source` item, find its
named `source_section`, and check that

1. the `quote` is genuinely present there (the gate does this; you are looking
   for the rest), and
2. **the quote reaches the clause the fact actually uses.** A quote that stops at
   "…then" or "…define" or "For every row $i$ and every column $j$," is truncated
   before its own content. Check every `uses` step: if step 3.1 uses the cofactor
   formula, the quote must contain the cofactor formula.
3. **the extension was made by quotation, not by paraphrase.** The `quote` field
   must be verbatim source text. If a Beta "extended" a quote by writing its own
   summary of the missing clause, that is a **fabricated quote** and it is the
   most serious thing you can find here. Compare character-for-character against
   the source item.

## Boundary semantics

The eight cases are `empty`, `zero`, `one`, `degenerate`, `endpoints`,
`nonempty-choice`, `iff-forward`, `iff-reverse`.

`iff-forward` / `iff-reverse` are `not_applicable` **only if the Statement is not
a biconditional.** If the Statement says "if and only if", is an equivalence of
conditions, or asserts a characterisation, both directions must be `checked` and
anchored to the steps that prove each direction. Read the Statement yourself;
do not trust the row.

## Reporting

Return a report with:

1. **A table of every row you checked**: item id, case or fact label, verdict
   (`real` / `cosmetic` / `false`), and for anything not `real`, the exact step
   text or source text that shows it.
2. **Any NEW mathematical finding** — a place where the contract cannot be made
   true because the *proof* is wrong. Alpha needs these urgently: the text is
   frozen and only Alpha may unfreeze an item. Give the id, the step, and the
   defect.
3. **Coverage**: how many of your assigned rows you actually checked. If you
   could not finish, say which rows you did not reach. **Do not extrapolate from
   a sample to a verdict on rows you did not open.** Alpha needs to know exactly
   what is covered and what is not.

Be exact. "Several quotes look short" is not a finding; "`thm-x` `[L1]` quote
ends at 'then', while step 2.1 uses the conclusion after 'then'" is.


---

# This dispatch

## Your cluster — `vfy-batch-5`: batch 5 — universal properties and the Yoneda lemma (order 361)

Your artifact is **`research/frontier-11-batch-5.proof-contracts.json`**.
The items are under `items/<id>.md` and are **frozen** — read them, never edit.

79 citation quotes were rewritten here, and the Yoneda pair was one of the three
named sites of truncated quotes. Category-theoretic facts are especially prone to
a quote that stops before the variance or the naturality clause — and in this
subject the dropped clause is usually the whole content. Check variance
(covariant vs contravariant, $\mathcal C(a,-)$ vs $\mathcal C(-,a)$) in every
quote you check.

Rule explicitly on the `iff` rows of
`cor-representable-presheaves-detect-isomorphism-of-objects` and
`thm-universal-arrows-are-initial-or-terminal-in-comma-categories`: both are
genuine biconditionals whose `iff-forward`/`iff-reverse` rows were
`not_applicable` and are now `checked`. Confirm the newly named steps really
prove the two directions separately.

### Priority items — rule on each of these explicitly

- `cor-representable-presheaves-detect-isomorphism-of-objects`
- `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`
- `ex-set-products-as-representing-objects`
- `cor-contravariant-yoneda-lemma`
- `ex-yoneda-lemma-for-a-monoid-action`

### Every row changed in the repair round, by item

These are the rows the Beta changed. Each is a claim that the row is now true of
the frozen item text. Work down the list; report coverage honestly and do not
extrapolate to rows you did not open.

- `cex-the-doubling-functor-on-set-is-not-representable`
    - quotes changed: F1<-def-functor-and-contravariant-functor (uses 1.1); F2<-def-union-of-a-set-and-binary-union (uses 1.1,1.3); F2<-lem-unions-and-intersections-of-small-families (uses 1.1,1.3); F3<-def-ordered-pair (uses 1.1,1.3); F3<-def-natural-numbers (uses 1.1,1.3); F4<-def-the-set-of-functions-from-one-set-to-another (uses 1.2); F4<-def-function (uses 1.2); F5<-def-presheaf-representable-functor-and-representation (uses 2.1,3.1)
    - boundary rows changed: empty[checked], zero[not_applicable], one[checked], degenerate[checked]
- `cor-contravariant-yoneda-lemma`
    - quotes changed: L1<-thm-yoneda-lemma-is-natural-in-both-variables (uses 1.1,1.2); F1<-def-opposite-category (uses 1.1,1.2)
- `cor-representable-presheaves-detect-isomorphism-of-objects`
    - quotes changed: L1<-thm-yoneda-embedding-is-fully-faithful (uses 1.1,1.2,2.1)
    - boundary rows changed: iff-forward[checked], iff-reverse[checked]
- `ex-free-group-universal-property-as-a-representation`
    - quotes changed: F1<-def-free-group (uses 1.1,2.1); L2<-thm-free-groups-unique-up-to-unique-isomorphism (uses 3.1); F4<-def-presheaf-representable-functor-and-representation (uses 3.1)
    - boundary rows changed: empty[checked], one[checked], degenerate[checked]
- `ex-free-monoid-universal-property-as-a-representation`
    - quotes changed: F1<-def-semigroup-and-monoid (uses 1.1); F2<-def-group-homomorphism (uses 1.2,2.1,2.2,3.1,4.1); F3<-def-category (uses 1.2); F3<-def-small-locally-small-and-large-category (uses 1.2); F4<-def-functor-and-contravariant-functor (uses 1.2,2.1); F4<-def-the-set-of-functions-from-one-set-to-another (uses 1.2,2.1); F5<-def-monoid-finite-product (uses 1.3,2.2); F5<-thm-generalised-associativity (uses 1.3,2.2); F7<-def-presheaf-representable-functor-and-representation (uses 5.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked]
- `ex-function-sets-as-exponential-representing-objects`
    - quotes changed: F1<-def-presheaf-representable-functor-and-representation (uses 3.1); F3<-def-the-set-of-functions-from-one-set-to-another (uses 1.1,1.2,2.1); F5<-def-function (uses 2.1)
    - boundary rows changed: empty[checked], degenerate[checked]
- `ex-polynomial-ring-represents-the-underlying-set-functor-on-rings`
    - quotes changed: F2<-def-polynomial-ring-over-a-commutative-ring (uses 1.2,1.3,2.2,3.1); L2<-lem-integer-multiples-in-a-ring (uses 1.2,1.3,1.4,2.1); F3<-def-ring-homomorphism (uses 1.4,3.1,4.1); F4<-def-monoid-finite-product (uses 1.2,1.4,2.1,2.2); F4<-thm-generalised-associativity (uses 1.2,1.4,2.1,2.2); L3<-lem-finite-sum-reindexing-and-fubini (uses 1.3,2.1,3.1); F5<-def-presheaf-representable-functor-and-representation (uses 5.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked]
- `ex-representable-presheaf-on-a-poset`
    - quotes changed: F3<-def-function (uses 2.1)
    - boundary rows changed: empty[checked], one[checked], degenerate[checked]
- `ex-set-coproducts-as-representing-objects`
    - quotes changed: F1<-def-presheaf-representable-functor-and-representation (uses 3.1); F3<-lem-unions-and-intersections-of-small-families (uses 1.2,2.2); F4<-def-ordered-pair (uses 1.2,2.2); F4<-def-natural-numbers (uses 1.2,2.2)
    - boundary rows changed: empty[checked], zero[not_applicable], one[not_applicable], degenerate[checked]
- `ex-set-products-as-representing-objects`
    - quotes changed: F1<-def-presheaf-representable-functor-and-representation (uses 3.1); F4<-def-function (uses 1.2,2.1,2.2)
    - boundary rows changed: empty[checked], degenerate[checked]
- `ex-the-one-point-space-represents-the-underlying-set-functor-on-top`
    - quotes changed: F1<-def-topological-space (uses 1.1); F2<-def-continuous-map-top (uses 1.1); F4<-def-presheaf-representable-functor-and-representation (uses 4.1); F5<-def-function (uses 2.1)
    - boundary rows changed: empty[checked], zero[not_applicable], one[checked], degenerate[checked]
- `ex-two-singletons-are-canonically-isomorphic-representing-objects`
    - quotes changed: F2<-def-presheaf-representable-functor-and-representation (uses 3.1); F3<-def-function (uses 1.1,2.1,4.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked]
- `ex-yoneda-embedding-of-the-walking-arrow-category`
    - quotes changed: F1<-def-category (uses 2.1,2.2,4.1,5.1); F2<-def-yoneda-embedding (uses 2.1,2.2); L1<-thm-yoneda-embedding-is-fully-faithful (uses 4.1); F3<-def-function (uses 2.1,2.2,3.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked]
- `ex-yoneda-lemma-for-a-monoid-action`
    - quotes changed: F1<-def-semigroup-and-monoid (uses 1.1,3.1); L2<-thm-yoneda-lemma-is-natural-in-both-variables (uses 4.1); F3<-def-natural-transformation (uses 2.1)
- `fs-nonisomorphic-objects-can-have-isomorphic-representable-presheaves`
    - quotes changed: L1<-cor-representable-presheaves-detect-isomorphism-of-objects (uses 3.1); L2<-thm-yoneda-embedding-is-fully-faithful (uses 2.1)
- `fs-yoneda-lemma-requires-a-small-category`
    - quotes changed: L1<-lem-yoneda-evaluation-bijection (uses 2.1); F1<-def-small-locally-small-and-large-category (uses 1.1)
- `lem-yoneda-evaluation-bijection`
    - quotes changed: F1<-def-hom-functors-and-hom-bifunctor (uses 1.1,1.2,2.1,2.3); F2<-def-natural-transformation (uses 1.1,2.1,2.3)
    - boundary rows changed: nonempty-choice[checked]
- `prop-initial-and-terminal-objects-as-representations`
    - quotes changed: F2<-def-presheaf-representable-functor-and-representation (uses 1.1,1.2,1.3)
    - boundary rows changed: empty[checked], one[checked], degenerate[checked], iff-forward[checked], iff-reverse[checked]
- `thm-hom-assignment-is-a-bifunctor`
    - quotes changed: F1<-def-product-category (uses 1.2,1.3); F2<-def-hom-functors-and-hom-bifunctor (uses 1.1,1.2,1.3)
- `thm-hom-assignments-are-functors`
    - quotes changed: F1<-def-hom-functors-and-hom-bifunctor (uses 1.1,1.2,1.3,1.4); F2<-def-functor-and-contravariant-functor (uses 2.1)
- `thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism`
    - quotes changed: F2<-def-isomorphism-groupoid-and-connected-category (uses 2.1)
- `thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism`
    - quotes changed: F1<-def-isomorphism-groupoid-and-connected-category (uses 3.1,4.1)
- `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`
    - quotes changed: F1<-def-universal-arrow-to-and-from-a-functor (uses 1.1,1.2); F2<-def-comma-slice-and-coslice-categories (uses 1.1,1.2)
    - boundary rows changed: iff-forward[checked], iff-reverse[checked]
- `thm-universal-elements-and-universal-factorisations`
    - quotes changed: L1<-lem-yoneda-evaluation-bijection (uses 1.1); L2<-thm-yoneda-lemma-is-natural-in-both-variables (uses 3.1); L3<-cor-contravariant-yoneda-lemma (uses 1.2,3.1); F1<-def-universal-element (uses 1.1,1.2,2.1)
    - boundary rows changed: iff-forward[checked], iff-reverse[checked]
- `thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements`
    - quotes changed: F1<-def-category-of-elements (uses 1.1,1.2)
    - boundary rows changed: iff-forward[checked], iff-reverse[checked]
- `thm-yoneda-embedding-is-fully-faithful`
    - quotes changed: L1<-cor-contravariant-yoneda-lemma (uses 1.1); F1<-def-yoneda-embedding (uses 1.1)
- `thm-yoneda-lemma-is-natural-in-both-variables`
    - quotes changed: L1<-lem-yoneda-evaluation-bijection (uses 1.1,1.2,1.3); L2<-thm-hom-assignment-is-a-bifunctor (uses 1.1); F1<-def-natural-transformation (uses 1.2); F2<-def-vertical-composition-of-natural-transformations (uses 1.3)
