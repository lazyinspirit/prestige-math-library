# frontier-18 — blocker at stage `2-assign`

**Alpha, `assign` dispatch, 2026-08-24. The stage cannot be satisfied as
specified: this run has ten batches and the assignment caps allow nine.**

No permission was requested at any point. `research/frontier-18-alpha-groups.json`
is written and covers all ten batches; it fails the gate on the group count
alone, which is the decision this file is asking for.

## The arithmetic

`tools/alpha-groups.mjs` enforces `MAX_GROUPS = 3` (the `alpha` lane cap,
`dispatch.mjs:194`) and `MAX_BATCHES_PER_GROUP = 3` (the owner's per-Alpha
bound, 2026-08-01/08-14). Three groups of at most three batches cover at most
**nine** batches, and every batch must belong to exactly one group. This run has
**ten**. No arrangement exists — the gate rejects any of the three escapes:

| what I could write | gate error |
|---|---|
| 4 groups of ≤3 | `alpha-groups-too-many` (what is on disk now) |
| 3 groups, one with 4 batches | `alpha-groups-oversize` |
| 3 groups of 3, one batch unassigned | `alpha-groups-uncovered` |

I wrote the first, because it is the only one of the three that states the real
constraint and leaves no batch silently unowned.

## Why there are ten batches

Not drift and not a rescope: the step-0 drift review recorded 10 no-drift and 4
drift-applied verdicts with no minting, no reordering and no rescoping
(`research/frontier-18-alpha-step0-drift.md`), so this pair set is the planned
one. `packBatches` (`tools/plan-manifests.mjs:44`) packs A pages at cap 2 and
**only within a category**. Fourteen pairs spread over **nine** categories —
seven of them holding a single batch — therefore pack into ten batches, and no
re-packing can do better without pairing two literatures under one Beta, which
that function deliberately refuses. All ten are already fully scaffolded (items,
notes, coverage, contracts), so re-batching now is a teardown of authored work,
not a re-plan.

The group-Alpha arithmetic in `ARCHITECTURE.md` §6 — "one Alpha per ≤3 batches
against a beta/reader cap of 9" — assumes at most nine batches. This run is the
first to leave that assumption.

## What the data says about the grouping itself

**There are zero cross-batch dependency edges in this run**, at both levels:
no A page's `requires` names another in-run page, and no item's `deps` names an
item owned by another batch (verified over all ten manifests; the `--facts`
output reports the same). Every dependency points inside its own batch or at
published content. So minimisation criterion (2) — fewest edges to everything
else — is uniformly zero and discriminates nothing, and the grouping was decided
on criterion (1), shared machinery, with criterion (3), reading load, as the
tiebreak. Item counts per batch: 1→26, 2→141, 3→65, 4→50, 5→131, 6→60, 7→68,
8→98, 9→58, 10→84; 781 in the run.

## Option A — allow a fourth group, keep ≤3 batches each (recommended)

Already written to `research/frontier-18-alpha-groups.json`:

| group | batches | categories | items |
|---|---|---|---|
| a | 6, 7, 8 | real-analysis + measure-theory + complex-analysis | 226 |
| b | 5, 10 | combinatorics (whole) | 215 |
| c | 1, 3, 4 | number-theory + abstract-algebra + commutative-algebra | 141 |
| d | 2, 9 | group-theory + category-theory | 199 |

Change needed: `MAX_GROUPS` 3 → 4 in `tools/alpha-groups.mjs:38` (or a
`--max-groups 4` on the gate in `tools/autopilot/stages/mathlib.mts:1047`).
Nothing else moves.

Why this is the cheaper relaxation: the thing the owner's bound protects is an
Alpha's **attention**, and that is the ≤3-batch scope, which Option A keeps
intact for every group. The `alpha` cap of 3 is a *concurrency* ceiling — set
against a measured session-limit cliff — and stage `3-review` already declares
`concurrency: 3`, so a fourth group queues behind the first three rather than
widening the fan-out. `ARCHITECTURE.md` §6 says this directly: "running the
groups in series costs only wall clock and burns no more quota than the single
Alpha it replaces." Corroboration that four groups is representable everywhere
except the gate: `alphaGroups`' own positional fallback chunks ten batches into
**four** groups today (a:1,2,3 / b:4,5,6 / c:7,8,9 / d:10) — it is only unsound
here because it splits combinatorics across b and d, not because it emits four.

## Option B — keep three groups, let one own four batches

If the concurrency ceiling is the thing that must not move:

| group | batches | categories | items |
|---|---|---|---|
| a | 6, 7, 8 | analysis on R^n | 226 |
| b | 5, 10, 9 | combinatorics + category-theory | 273 |
| c | 1, 2, 3, 4 | number-theory + group-theory + abstract-algebra + commutative-algebra | 282 |

Change needed: `MAX_BATCHES_PER_GROUP` 3 → 4. Group c is coherent — extraspecial
p-groups are symplectic F_p-spaces, which is batch 3's finite-field linear
algebra, and batch 4's Hilbert basis sits over the same polynomial rings — but
b's pairing of ends/coends with combinatorics is thin (Day convolution and
species), and this option spends the attention bound rather than the wall clock.
Say the word and I will write it out.

## What I did not do

I did not re-batch, merge two batches, or edit any batch manifest: batching is
the engine's, the manifests are Beta-owned and already scaffolded, and merging
two single-pair batches across categories is exactly what the packer refuses.
I did not raise either cap myself — both are owner values.

The run holds at `2-assign` until one of the two changes above is made; after
either, the gate clears with no further Alpha work.
