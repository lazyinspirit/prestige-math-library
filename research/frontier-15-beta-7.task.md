# Batch 7 of run `frontier-15` — monads, comonads and their algebras

One A/B pair — MA-3, the single highest-leverage pair in the run: the entire
remaining category-theory track (MA-4 monadicity onward) and every page that
waits on it sit above this one.

| | |
|---|---|
| A page | `monads-comonads-and-their-algebras` · order **365.005** · `category-theory` |
| B page | `monads-comonads-and-their-algebras-examples` · order **365.006** |
| requires | `reflective-subcategories-and-the-adjoint-functor-theorems-examples` (published; closure carries `adjunctions-units-and-counits`, `limits-and-colimits`, the Yoneda block) |
| design | `research/plan-category-theory-track.md` §MA-3, line ~1290 — a complete 34-item A-page inventory in dependency order, 4 `fs-` items, an 8-item B page, sources and traps |

Design-cited published dependencies to OPEN before citing:
`prop-size-of-functor-categories` (size caveat for "monad = monoid in the
endofunctor category"), `prop-completeness-and-cocompleteness-in-poset-
categories` (the power-set monad's algebras), `lem-ultrafilter-prime` (the
ultrafilter monad), `def-preservation-reflection-creation-continuity-and-
cocontinuity` (see trap 2).

## Sources (design §MA-3 Sources)

Riehl 2nd ed. Ch. 5 (pp. 181–218) primary; Mac Lane CWM Ch. VI the second
independent treatment — **Leinster has no developed monad treatment and
cannot serve as the second source** (seam S-1); Cheng, *Iterated distributive
laws* §2 (episciences PDF) is the direct source for distributive laws (items
25–26) — Riehl and Mac Lane do not contain them; Borceux vol. 2 Ch. 4 is a
TOC-level locator only, never component provenance.

## Traps the design states

1. **Item 11 before item 12**: Kleisli composition's associativity/unitality
   is proved BEFORE the Kleisli category is defined — defining first inverts
   the well-definedness obligation, and the design calls it "the page's real
   well-definedness obligation, and the one most often skipped".
2. **The published preservation/creation definition has two notions** —
   item 18 (U^T strictly creates all base limits) means the STRICT one, and
   no preservation hypothesis on T belongs in the limit clause.
3. **The ultrafilter monad is built here; Manes' theorem is MA-4's.** The
   monad axioms for β are genuine, entirely elementary work — no compactness.
4. **Id namespace**: `def-distributive-law-between-two-monads` — the bare
   "distributive laws" id is taken by a published set-theory item.
5. The size-caveat remark (item 2) and the schematic universal-property
   remark (item 14) are what keep the page honest about CAT-level size
   issues; they are content, not filler.
6. Landmarks as designed: def-monad, adjunction⇒monad, the EM adjunction,
   the comparison functor, monadic⇒conservative, the idempotent-monad
   reflective-subcategory theorem, the ultrafilter monad.

## Size

34 A items proposed. Under the ceiling with room; if your harvest adds
cheap corollaries, fine — never pad.

**No permission prompts of any kind**, including inside an `&&` chain.
