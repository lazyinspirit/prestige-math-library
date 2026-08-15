## Batch 3 of run `frontier-14` — Baire category, and covering spaces

Two A/B pairs. You own all four pages, and you author them at step 5. The two
pairs share a point-set idiom but not a literature; budget your reading for two
distinct source sets.

### Pair A — complete metrizability and Baire category

| | |
|---|---|
| A page | `complete-metrizability-and-baire` · order **277** · category `topology` |
| B page | `complete-metrizability-and-baire-examples` · order **278** |
| requires | `metrization-theorems` (published), `compactness-in-metric-spaces` (published) |
| prose scaffold | `research/plan-topology-track.md` §**T8** "Countability, Metrization, and Baire", from line ~1082 |

Read T8 in full; the metrization band is developed there across several spec
pages and you own only the completeness/Baire end of it. Line ~709 and line
~1539 of that file both constrain this page specifically — read both.

**This page owns `def-polish-space`.** `research/plan-probability-track.md` line
~214 records it explicitly: *"planned topology predecessor with `items: []`:
owns `def-polish-space`; probability must not re-mint it."* A whole probability
track is waiting on that definition landing here with a stable id. Do not defer
it and do not home it on the B page.

The load-bearing results: complete metrizability as a topological property
(not a metric one — a homeomorphism-invariant notion, which is the whole point);
a $G_\delta$ subspace of a complete metric space is completely metrizable, and
the converse (Alexandrov); the Baire category theorem for complete metric
spaces and for locally compact Hausdorff spaces; nowhere dense, meagre and
residual sets; Polish spaces. Čech-completeness is in the title — decide
honestly whether you can close it from the published foundation, and if not,
record what blocks it rather than half-stating it.

### Pair B — covering spaces and lifting

| | |
|---|---|
| A page | `covering-spaces-and-lifting` · order **293** · category `topology` |
| B page | `covering-spaces-and-lifting-examples` · order **294** |
| requires | `the-fundamental-group` (published), `compactness` (published) |
| prose scaffold | **NONE — see below** |

**There is no design block for this page anywhere in `research/plan-*.md`.** I
checked all of them. You are designing this pair from sources, which is what a
Beta does anyway — but it means the usual "harvest against the proposed
inventory" check is not available to you, so the coverage harvest is doing all
the work. Use Hatcher §1.3, May Ch. 3, and Munkres Part II §§53–54 or an
equivalent full lecture-note set; at least two independent treatments, at least
one a textbook or monograph.

**What downstream tracks are explicitly waiting for.**
`research/plan-differential-geometry-track.md` §9.3 (line ~10639) states the
obligation in as many words:

> Its future build owes stable definitions and the existence/uniqueness of path
> and homotopy lifts, deck transformations, universal covers under the printed
> local path-connectedness/semilocal simple-connectedness hypotheses, and the
> classification needed by DG-20, DG-23, DG-26, DG-29, and DG-34. Until then,
> every covering conclusion in those pairs is a forward reference, not a
> published fact.

Ten differential-geometry deferrals, plus pages in the algebraic-topology and
complex-analysis tracks, name this page as their licensing destination. Read
§9.3 and grep `research/plan-differential-geometry-track.md` for
`covering-spaces-and-lifting` to see what each expects.

**One scope boundary is firm:** the *classification* of covering spaces is a
separate spec page, `classification-of-covering-spaces` (order 299), and
`the-fundamental-group-of-the-circle` is another (order 295). Both are later
waves. Your page owes the definitions, the lifting theorems, deck
transformations and the universal cover — **not** the Galois correspondence, and
**not** $\pi_1(S^1) \cong \mathbb{Z}$. Scaffold up to but not including them, and
name those two pages when you decline the material they own. That is the correct
kind of decline: it belongs to another page's topic and the page exists.

**The hypotheses are the content.** Local path-connectedness and semilocal
simple-connectedness are exactly where this subject goes wrong when stated
loosely. State them on every item that needs them; the Hawaiian earring is the
standard witness and belongs on your B page.

### The hard constraint between your two pairs

Neither page is in the other's `requires` closure, so no item on either may
depend on an item on the other. `validate-plan` fails it as `undeclared-prereq`.
