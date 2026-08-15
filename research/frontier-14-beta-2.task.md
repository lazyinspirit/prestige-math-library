## Batch 2 of run `frontier-14` — Ascoli–Arzelà and Stone–Weierstrass

Two A/B pairs. You own all four pages, and you author them at step 5. Both come
from the same design block, `research/plan-topology-track.md` §**T10** (line
~1356), which was written as one page and split into three spec pages; the third,
`function-space-topologies` (283), is **already published** and is your
foundation.

**Read T10 in full before anything else.** It is unusually prescriptive about
what 283 already owns and what it deliberately does not, and it names two
published items that are NOT usable and were re-minted at 283. Getting this wrong
means citing an item that cannot carry your claim — the largest fatal class in
the previous run.

### Pair A — Ascoli–Arzelà

| | |
|---|---|
| A page | `ascoli-arzela` · order **285** · category `topology` |
| B page | `ascoli-arzela-examples` · order **286** |
| requires | `function-space-topologies` (283, published), `approximation-and-compactness-in-ck` (published), **`compactness` (255, published)** |
| prose scaffold | `plan-topology-track.md` §T10 |

**The `compactness` edge was added at step 0 of this run and you should know
why.** T10 lists "ASCOLI-ARZELA in the metric and the general forms", but the
spec gave this page only the two function-space prerequisites. T10 also states
the metric-only restriction is "forced, not stylistic" because "General
topological compactness is page 255, unbuilt". **255 is now published.** The
constraint that forced the restriction is gone, the spec edge was stale, and the
orchestrator added the backward edge 285 → 255 (full reasoning in
`research/frontier-14-step0-batching.md`).

What that does and does not give you: you may now cite general compactness
directly. But `function-space-topologies` is *published* with a metric-domain
foundation — `def-equicontinuity`, the compact-open topology and the uniform
metric are all developed for a metric domain. **So the general form is only as
reachable as that published foundation actually supports.** Open 283 and decide
honestly how far you can go. If the general form needs equicontinuity for a
non-metric domain and 283 does not supply it, your options are to build the
missing definition on your own page (permitted and preferred — "build the
machinery"), or to carry the metric form and record precisely what blocked the
general one. **What is not permitted is stretching a metric-domain citation to
cover a general domain.** Say in your notes which route you took.

### Pair B — Stone–Weierstrass in general

| | |
|---|---|
| A page | `stone-weierstrass-general` · order **287** · category `topology` |
| B page | `stone-weierstrass-general-examples` · order **288** |
| requires | `function-space-topologies`, `approximation-and-compactness-in-ck`, `compactness` — all published |
| prose scaffold | `plan-topology-track.md` §T10 |

T10 asks for the algebra and lattice forms, real and complex, and names
`thm-complex-stone-weierstrass-self-adjoint` for the complex case — the
self-adjointness hypothesis is not optional and the standard counterexample
(the disc algebra) belongs on your B page.

T10 records that *Gelfand duality* is dropped as needing Banach algebras. That
decline is inherited, not yours to re-litigate — but per the coverage rules it
must still name the page that would license it, and "a functional-analysis
track" is not a page id. Check `research/plan-functional-analysis-track.md` for
the actual id and cite it.

### The hard constraint between your two pairs

`ascoli-arzela` (285) is **not** in `stone-weierstrass-general`'s closure and
vice versa — 285 and 287 are siblings, neither requires the other. So no item on
one may depend on an item on the other. They share a Beta for source economy.
