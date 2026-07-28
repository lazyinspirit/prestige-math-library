# TS-D2 block — amendments staged for the commits that publish it

**Status: STAGED, NOT APPLIED.** Nothing here may land before the commit that
publishes the page that falsifies it (`LEVELS.md` §10b: amendments to published
pages land in the same commit that publishes the level, never before). Each entry
names its trigger page.

Created 2026-07-28 when Tom's ST/EU/FG/HT blocks were spliced into
`research/plan-spec.json` (the TS-D2 renumber). These are **published-claim-decay**
defects: every sentence below is TRUE today and becomes FALSE when its trigger
publishes, and **no gate can see any of them** — they are prose about what the
corpus contains, not citations.

---

## Trigger: `countability-axioms-and-cardinal-functions` (order 213)

That page is T8 of `research/plan-topology-track.md`. Its DEFS list opens with
"first and second countable; separable; Lindelof", so it falsifies four published
claims at once. All four are the **corpus-relative** phrasing.

### 1. `items/def-first-countable-top.md` (published), Remarks

> - **Second countability is not defined here.** The stronger axiom, an at most
>   countable basis for the whole topology, belongs with the other countability
>   axioms and **has no item in this library**; nothing below uses it, and the word
>   is not used elsewhere on these pages.

Replace the middle clause with the order-relative form: *"belongs with the other
countability axioms, which are not developed at this point in the reading order"*,
and add, once order 213 exists, a pointer to the second-countability item there.
Do **not** add a `deps` edge — 189 → 213 would be forward-pointing. If a wikilink
is wanted it must be declared in `forward_refs` per SCHEMA §3.

### 2. `items/def-dense-top.md` (published), Remarks

> - **What is deliberately not defined here.** Separability … is a countability
>   axiom belonging with the other cardinal restrictions on a space, and **no item
>   in this library defines it**. Where a space on the companion page has an at
>   most countable dense subset, that is what is said, in full, and the word
>   "separable" is not used.

Same repair. The second and third sentences stay true and should be kept: the
page really does write the property out in full, and that remains the right
practice for a page below 213.

### 3. `items/ex-sorgenfrey-line.md` (published), Statement

> The word *separable* is not used here: **no item in this library defines it**, and
> claim 4 says in full what it would abbreviate.

Same repair.

### 4. `library/topology/topological-spaces-and-continuity-examples.md` (published),
page summary

> … and possessed of an at most countable dense subset, with sequences that
> converge only from the right ([[ex-sorgenfrey-line]]); the word *separable* is
> not used, since **no item in this library defines it**.

Same repair. Page summaries are the tier no mechanical gate reads at all.

---

## The same claim, three places, written to SURVIVE — do not touch these

The identical fact is recorded elsewhere in the **order-relative** phrasing, and
those sentences are still true after 213 publishes, because they are indexed to a
position in the reading order rather than to the corpus:

- `items/ex-sorgenfrey-plane.md`: *"The word separable is not used here: it is
  not defined at this point in the reading order."*
- `items/cex-antidiagonal-of-the-sorgenfrey-plane.md`: *"The word separable is
  not used: it is not defined at this point in the reading order."*
- `library/topology/subspaces-products-and-quotients-examples.md`: *"The word
  separable is not used anywhere on these two pages, since it is not defined at
  this point in the reading order."*

**This is the cleanest natural experiment in the corpus for the §6 rule.** Seven
sentences, one mathematical fact, one author, one topic; the three that used the
order-relative form need no maintenance, and the four that used the corpus-relative
form all decay together. Nothing distinguishes them but the phrasing.

---

## Recorded, NOT an amendment

`items/ex-fat-cantor-measure-computed.md` defers an outer-measure computation as
"not defined at this point in the reading order". Outer measure is on the deferred
measure track (`rem-lebesgue-measure-and-integral`, `proved_here: false`), which
the TS-D2 blocks do not touch. Its justification survives unchanged.

`items/ex-integers-under-addition.md` says "a commutative ring with multiplicative
identity" is "a phrase not defined at this point in the reading order". Rings are
order 42; this item sits below it. Order-relative, still true, and it will stay
true because it names a position rather than the corpus.
