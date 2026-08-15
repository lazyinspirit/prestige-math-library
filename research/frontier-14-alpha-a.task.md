## Group Alpha **a** — batches 1, 2, 3

Five A/B pairs, all analysis and topology.

| batch | pairs | Beta task file |
|---|---|---|
| 1 | `complex-power-series-and-analytic-functions`, `contour-integration` | `research/frontier-14-beta-1.task.md` |
| 2 | `ascoli-arzela`, `stone-weierstrass-general` | `research/frontier-14-beta-2.task.md` |
| 3 | `complete-metrizability-and-baire`, `covering-spaces-and-lifting` | `research/frontier-14-beta-3.task.md` |

Write `research/frontier-14-alpha-a-step3-scaffold-review.md`.

### Three things specific to your batches

**1. Batch 2 and the `compactness` edge — check the answer, not the question.**
At step 0 the orchestrator added a backward `requires` edge
`ascoli-arzela` → `compactness` (255), because `plan-topology-track.md` T10 calls
for "ASCOLI-ARZELA in the metric and the general forms" and the spec edge was
stale — T10 called the metric-only restriction "forced, not stylistic" *because
255 was unbuilt*, and 255 has since published. Full reasoning in
`research/frontier-14-step0-batching.md`.

The Beta was told the edge does **not** license stretching a metric-domain
citation to cover a general domain: `function-space-topologies` (283) is
*published* with `def-equicontinuity`, the compact-open topology and the uniform
metric all developed for a **metric domain**. So check what the scaffold
actually did. Three outcomes are all legitimate — built the missing general
definition on its own page, carried the metric form with the blocker recorded,
or found 283 sufficient — and one is not: an item whose `deps` cite a
metric-domain item for a general-domain claim. **Open 283 on disk** and decide
which happened.

**2. Batch 3's covering-spaces pair has no design block, and downstream tracks
are waiting on it.** I checked every `research/plan-*.md`: there is no design
section for `covering-spaces-and-lifting`. The Beta designed it from sources,
so the coverage harvest is doing all the load-bearing work and your faithfulness
check matters more than usual here.

`research/plan-differential-geometry-track.md` §9.3 (line ~10639) states the
obligation in as many words — the page owes stable definitions, existence and
uniqueness of path and homotopy lifts, deck transformations, and universal
covers **under the printed local path-connectedness and semilocal simple-
connectedness hypotheses**. Ten differential-geometry deferrals plus pages in
the algebraic-topology and complex-analysis tracks name it as their licensing
destination. Check the hypotheses are stated on every item that needs them —
this subject goes wrong exactly there, and the Hawaiian earring is the witness.

The scope boundary is firm and the Beta was told it: the *classification* of
covering spaces is `classification-of-covering-spaces` (299) and
$\pi_1(S^1)\cong\mathbb Z$ is `the-fundamental-group-of-the-circle` (295), both
later waves. Declining those two is correct; declining them **without naming
those page ids** is not.

**3. Batch 3 owns `def-polish-space`, and a whole track is waiting.**
`research/plan-probability-track.md` line ~214: *"planned topology predecessor
with `items: []`: owns `def-polish-space`; probability must not re-mint it."*
Confirm it is scaffolded, on the **A page** (a B page is a leaf and nothing
could cite it), with a stable id.

### Sizing

`complete-metrizability-and-baire` scaffolded 40 A items and
`covering-spaces-and-lifting` 31 — both under the 60 threshold, so no split is
forced. Say whether you think either is *thin* for its remit, which is the
opposite question and the one that matters here.
