## Batch 6 of run `frontier-14` — reflective subcategories and the adjoint functor theorems

One A/B pair, and it is the most delicate scaffold in this run. It is the
existence half of the adjoint story: `adjunctions-units-and-counits` (built last
run) says what an adjoint *is*; this page says when one *exists*.

| | |
|---|---|
| A page | `reflective-subcategories-and-the-adjoint-functor-theorems` · order **365.003** · category `category-theory` |
| B page | `reflective-subcategories-and-the-adjoint-functor-theorems-examples` · order **365.004** |
| requires | `adjunctions-units-and-counits-examples` (published — built in `frontier-13`) |
| prose scaffold | `research/plan-category-theory-track.md` §**MA-2**, from line ~1164; B page at line ~1241 |

**Read MA-2 in full.** It gives a numbered A-page inventory with Riehl locators
per item, and §6 and §7 of that file carry the constraints below.

The `requires` edge points at the B page, which makes the companion *A* page
`adjunctions-units-and-counits` citable — never the examples items themselves.
B pages are leaves. MA-2's design also names `limits-and-colimits`,
`urysohn-lemma-and-tietze` and `tychonoff-embedding-and-stone-cech`; all three
were verified at step 0 to lie inside your declared closure, so all are legally
citable. Open each on disk.

The load-bearing results: reflective and coreflective subcategories and their
reflectors (**fullness is part of the definition here**); a full subcategory is
reflective exactly when each object has a universal arrow; **the counit of a
reflection is an isomorphism** (landmark); the essential-image characterisation
via an invertible unit; **a reflective inclusion creates all limits** (landmark
— and MA-2 §3.3 tells you *which* creation to state, the isomorphism-invariant
one of the published definition); a reflective subcategory has every colimit the
ambient category has, formed by applying the reflector — **and the inclusion does
not preserve them**, which is a companion counterexample you owe.

Then the subobject vocabulary the adjoint functor theorems need — subobject and
quotient object as mutual-factorisation classes, well-poweredness, intersections
as wide pullbacks, separating and coseparating sets — and then **GAFT and SAFT**
themselves. MA-2 mints the subobject vocabulary here deliberately, because MA-9
needs it later and minting it twice is the failure this placement prevents.

**The one obligation that will decide whether this page is honest.** MA-2 says
it plainly:

> The page carries the block's most delicate proof obligation: the textbook
> initial-object lemma makes a class-indexed choice, and SE-D3 forbids it. §6
> records the repair and item 12 is where it lands.

Read §6 before you scaffold the initial-object lemma. Do not scaffold the
textbook proof and leave the choice unremarked, and do not quietly weaken the
theorem to avoid it. If after reading §6 you believe the repair does not close,
say so in your notes at step 2 with the exact step that fails — that is a real
finding and it is far cheaper now than at step 8.

**Smallness is the other place this subject goes wrong.** MA-2 item 13 is
explicit that wide pullbacks compute intersections **for supplied set-indexed
families**, and that SAFT retains its direct hypothesis for arbitrary
collections rather than forming a proper-class diagram. Local smallness,
well-poweredness and the solution-set condition are hypotheses, not background
assumptions — state them on every item that uses them.

**Sizing.** The track table estimates 40 items for this page. That is close to
the 60-item split threshold and this subject expands under harvest. If you cross
60, propose a split in your notes at step 2 — the natural cut is reflective
subcategories and the subobject vocabulary on one page, GAFT/SAFT on another.
Propose it early; after authoring it is a rewrite.
