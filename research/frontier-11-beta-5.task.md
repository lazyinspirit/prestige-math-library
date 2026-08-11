# frontier-11, batch 5

You are **Beta-frontier-11-5**. Your writable artifacts are the four
`research/frontier-11-batch-5.*` files named in the brief above.

## Your pages

- **A** `universal-properties-and-the-yoneda-lemma` (order 361, category-theory) — "Universal Properties, Representables and the Yoneda Lemma"
  - **B** `universal-properties-and-the-yoneda-lemma-examples` (order 362)
  - requires: `categories-functors-and-natural-transformations`

## Prose scaffold sections to read

- `research/plan-combinatorics-and-categories.md`

## Batch note

You have a single pair. That is deliberate — this is the subtlest pair in the run
and it gets an undivided Beta. Use the room for depth, not for padding.

Order 361 blocks `limits-and-colimits` (363) and thence the entire category-theory
track through adjunctions, monads, abelian categories and homological algebra, so
every statement here will be cited many times and must be exact.

`categories-functors-and-natural-transformations` (order 359) is published at
60+25 items — **it is large, and you must open it before you scaffold.** It very
likely already owns categories, functors, natural transformations, functor
categories, opposite categories and possibly hom-functors. Anything it owns you
**cite**; anything you restate is a defect. Record in your notes exactly what you
found there and what you concluded is missing.

What this page owes, subject to what 359 already gives you: the hom-functors
`C(a,-)` and `C(-,a)` and their functoriality, representable functors and
representations, the **Yoneda lemma** stated as a bijection
`Nat(C(a,-), F) ~= F(a)` that is **natural in both `a` and `F`** — a page that
proves the bijection and skips naturality has skipped the hard half — the Yoneda
embedding and its full faithfulness, uniqueness of representing objects up to
canonical isomorphism, universal elements and the universal-property formulation,
initial and terminal objects as the degenerate case, and comma/element categories
if you need them to state universal properties cleanly.

Two specific cautions. First, **size**: if this scaffold passes 60 items it is a
hard `validate-plan.mjs` `size` error and the remedy is a split into two A pages,
each with its own B companion and summary — propose it in your notes at step 2
with the exact cut and proposed ids, and do not simply drop material to fit.
Second, **bare `\iota`** naming a basis inclusion or the unit of a universal
property is standard and permitted; the banned form is the canonical embedding
*applied to a natural number*, which is unlikely to arise here.

The B page is where universal properties become concrete: products, coproducts
and exponentials named as representing objects; the free-group and
free-monoid universal properties (the library publishes
`free-groups-and-presentations`, order 60 — open it and cite it); a functor that
is **not** representable, with the reason; two representing objects exhibited as
canonically isomorphic; and the Yoneda embedding computed on a small category.
