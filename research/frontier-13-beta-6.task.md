## Batch 6 of run `frontier-13` — adjunctions, units and counits (SINGLETON)

One A/B pair, and it is the **highest-leverage pair in the entire plan**:
**197 unbuilt A pages sit downstream of it.** The category-theory spine, the
homological-algebra track, the monoidal track and both representation-theory
tracks all descend from this page. Read more, not less.

> **Orders in the prose scaffold are STALE.** `research/plan-spec.json` is the
> only live source of `order`. Identify everything by **page id**.

| | |
|---|---|
| A page | `adjunctions-units-and-counits` · "Adjunctions Units and Counits" · category `category-theory` · order **365.001** |
| B page | `adjunctions-units-and-counits-examples` · order **365.002** |
| prose scaffold | `research/plan-category-theory-track.md`, block **MA-1** (design body at line ~1056; the B page at line ~1135) |

### Your `requires` — read this, it changed at step 0

```
limits-and-colimits-examples
conjugacy-and-simplicity-in-the-symmetric-groups
free-modules-and-exact-sequences
tychonoff-embedding-and-stone-cech
```

The MA-1 design names seven prerequisites; the spec carried only the first. The
orchestrator added the three missing published ones at step 0 (**decision D1**),
precisely so the worked adjunctions in MA-1 items 33–41 are legal citations
rather than `undeclared-prereq` failures. `limits-and-colimits`,
`universal-properties-and-the-yoneda-lemma`, `free-groups-and-presentations` and
`subspaces-products-and-quotients` were already reachable transitively and are
citable.

**A `requires` edge onto a B page.** `limits-and-colimits-examples` is a B page.
Declaring it puts its companion **A** page `limits-and-colimits` in your closure,
so items on `limits-and-colimits` are citable. It does **not** make the examples
items citable: nothing anywhere may depend on an item homed on an `-examples`
page (`validate-plan` error `b-leaf`, `depcheck` error `b-leaf-content`).

MA-1 §Traps already flags two live instances of this — `ex-free-monoid-universal-property-as-a-representation`
and `ex-function-sets-as-exponential-representing-objects` are both published
**B-leaves** and cannot be cited. MA-1 items 35 and 41 tell you to check whether
an A-page home exists for those universal properties and to prove them locally
if not. Do that check on disk.

### The one item you must NOT build

MA-1 item 40, *restriction of scalars has a left and a right adjoint*, is marked
**CONTINGENT** on `tensor-products-of-modules`. That page is being built in
**this same run** (batch 5) and is not published, so it is not in your closure
and citing it is an `undeclared-prereq` failure. The design already specifies the
fallback: **drop to the `Hom`-side (coextension) adjoint alone, and record the
drop** as a `deferred` row in your coverage with the reason naming the specific
result and the page that will license it. Do not wait for batch 5, do not cite
its drafts, and do not ask for the edge.

### Things MA-1 is emphatic about

1. **Unit–counit is the definition here, and item 2 is not optional.** The
   library deviates from Mac Lane, Riehl and Leinster, who lead with the hom-set
   form, because the hom-set formulation presupposes local smallness and the
   unit–counit formulation presupposes nothing. `rem-why-this-library-takes-unit-counit-as-the-definition`
   records the deviation. A definitional deviation that is not recorded reads as
   an error to the next auditor.
2. **RAPL's primary proof must be the unit/counit one** (item 24). The
   representable-functor proof is a *separate* item (27) carrying a local
   smallness hypothesis that item 24 does not need, and `rem-rapl-carries-no-size-hypothesis`
   reconciles the two routes. Do not merge them.
3. **Riehl's 2nd edition renumbered Chapters 3 and 4.** The adjoint functor
   theorems are §4.7, not §4.6. Prop 4.3.7 (mates), §4.5, Thm 4.2.7 and Ex 6.2.15
   are new in the 2nd edition. Any locator carried over from a first-edition
   citation is wrong. Every Riehl locator in MA-1 is against the **2nd edition**.
   Verify the range you record actually contains what you say it contains — Alpha
   re-opens the source at step 6.
4. **The A page is deliberately example-heavy**, because the B page is a leaf and
   the free–forgetful adjunctions are cited by three downstream pages. The worked
   adjunctions belong on the **A** side as numbered items, not exiled to B.
5. **Choice.** Items 9, 11 and 12 are written to keep a proper-class selection
   from hiding inside `∀d ∃Gd`. MA-1 item 12 points at the published
   `rem-choice-behind-limit-and-colimit-functors`. Preserve that care; it is the
   kind of thing a judge reads for.

### Sources named by the design

- **Riehl, *Category Theory in Context*, 2nd ed.** — §§4.1–4.4, 4.6. Primary.
- **Leinster, *Basic Category Theory*** (arXiv:1612.09375v2) — Ch 2 in full and
  §6.3. Second independent treatment with different proofs.
- **Mac Lane, *CWM*, Ch IV** — third treatment, classical statement and the
  historical attribution of `⊣` to Kan.

Harvest all of them per the coverage rules in your brief. MA-1 also records
`thm-floor-and-ceiling-are-adjoint-to-the-inclusion-of-integers` as an applied
addition citing the published real-analysis `def-floor-and-ceiling` — check that
id on disk and confirm the page it is homed on is in your closure before
scaffolding it; if it is not, record it rather than citing it.

### Size

MA-1 lists 41 numbered A-page items plus 4 `fs-` items — **45**, under the
60-item ceiling but not by much, and your harvest may add to it. If you pass 60,
propose a split in your notes at step 2 with the exact cut. The design's own
sectioning (the definition and its encodings / the calculus / preservation /
worked adjunctions) is the natural seam. Propose it early; after authoring it is
a rewrite.

**Forward references: the design says NONE.** Keep it that way.
