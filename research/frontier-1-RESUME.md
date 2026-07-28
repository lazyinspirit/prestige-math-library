# `frontier-1` — build state, decisions, and what a resuming session must know

**Started 2026-07-28.** Owner instruction: build the next **six buildable A/B
pairs** off `research/BUILD-LEVELS.md`, autonomously, step 0 through step 10,
pausing only at the rundown. The owner is away for the duration and cannot
adjudicate mid-build, so every step-3 finding is decided by the orchestrator and
**logged here** for the owner's review at the pause.

## Why this build is called `frontier-1` and not `level<n>`

It is **not a dependency level**. `LEVELS.md` names its artifacts
`research/level<n>-*`; this build's are `research/frontier-1-*`. The six pairs
sit at computed levels **4, 7 and 11** and were selected by a different
criterion: every page prerequisite already **published**. They are nevertheless
mutually independent — no one of the six `requires` another — so the owner's
one-round rule applies unchanged and all six pairs are authored in parallel.

The distinction matters for a resuming session: the level column of
`BUILD-LEVELS.md` did **not** choose these pages. The *blocked-on* column did.

## Step 0 — the frontier, computed from disk

`node tools/rounds.mjs --pairs --md > research/BUILD-LEVELS.md`, then filtered to
A pages that are `unscaffolded` with an empty blocker list, then each page's
`requires` verified against `status: published` in its page file. Six pairs, and
the same six the owner's table showed:

| order | A page | category | level | `requires` (all published) |
|---|---|---|---|---|
| 20 | `finite-counting-and-binomial-coefficients` | combinatorics | 4 | `countability-and-uncountability`, `roots-and-rational-powers` |
| 161 | `properties-of-the-integral-and-the-working-ftc` | real-analysis | 11 | `the-riemann-integral`, `the-derivative-and-mean-value-theorems` |
| 167 | `rn-as-a-normed-space` | real-analysis | 11 | `the-derivative-and-mean-value-theorems`, `metric-spaces` |
| 245 | `ordinal-arithmetic` | foundations | 4 | `ordinals-and-transfinite-recursion`, `countability-and-uncountability` |
| 261 | `separation-axioms` | topology | 7 | `subspaces-products-and-quotients` |
| 283 | `function-space-topologies` | topology | 7 | `subspaces-products-and-quotients`, `compactness-in-metric-spaces` |

Twelve pages counting companions.

### Batching, and the seam count reported before spawning

Two batches of three A pages (the cap), packed by prerequisite affinity:

- **Batch 1** — `ordinal-arithmetic` (245), `separation-axioms` (261),
  `function-space-topologies` (283). Set-theoretic topology.
- **Batch 2** — `finite-counting-and-binomial-coefficients` (20),
  `properties-of-the-integral-and-the-working-ftc` (161),
  `rn-as-a-normed-space` (167).

**Cross-batch seam count at spawn: 0 page-level edges, and the item-level count
was not computable** — all twelve pages had empty `items` arrays, so the honest
report is "not computable", not "0" (`LEVELS.md` step 0.4).

The packing is not cosmetic. The **Tychonoff plank**, the standard witness that
normality is not productive, needs ω₁ — so `separation-axioms` (261) has a real
edge onto `ordinal-arithmetic` (245). Putting those two in the same batch is what
makes that seam *internal*. The same reasoning pairs 161 with 167 (componentwise
integrals) and keeps the two topology pages together (283 may use 261's
separation hypotheses).

## The constraint that dominates this build

**30 A pages are published; 159 are unscaffolded.** Plan order alone is therefore
not a usable resolution rule here: a page with a smaller `order` usually does not
exist. Every external dependency must be a published item, an earlier item on the
same page, or an item on another `frontier-1` page of strictly smaller order.

`depsource.mjs` classifies a dep onto an unbuilt planned page as
**`planned-earlier`, which does not fail**. In this build that classification is a
trap and both Betas were told so explicitly.

## Decisions taken by the orchestrator (owner away) — for owner review

**F1-D1. General topological compactness does not exist, and this build may not
mint it.** Only `def-metric-compactness` (published, `compactness-in-metric-spaces`,
order 120) exists. The general notion belongs to the planned page `compactness`
at order **255**, which is unscaffolded and *below* both topology pages in this
build, so no later page can supply it retroactively. Consequences:

- `separation-axioms` (261) **drops "compact Hausdorff implies normal"**, with a
  recoverable note naming page `compactness` as what would license it.
- `function-space-topologies` (283) is built with a **metric domain**: the
  compact-open topology over compact subsets of a metric `X`, `Y` an arbitrary
  space. The exponential law and continuity of evaluation are stated for `X` a
  **locally compact metric space**, with `def-locally-compact-metric-space` minted
  on 283 and carrying a dictionary Remark in the style of `def-metrizable-space`.
  An obligation is recorded for page `compactness` to state the agreement when it
  is built.
- *Risk accepted:* this is a deliberate special case of a notion the library will
  later define in generality. The dictionary remark is the mitigation, and it is
  the mitigation §7 of `briefs/beta-scaffold.md` prescribes for exactly this.
- *If the exponential law turns out not to be honestly reachable in that scope,
  the page is retitled* — the spec title "…and the Exponential Law" asserting more
  than the page proves would be the fatal class `LEVELS.md` step 9 exists for.

**F1-D2. Pages 263, 265, 267 and 271 are not in this build.** The spec splits the
separation material five ways. Urysohn's lemma, Tietze, the diagonal
characterisation, hereditary/productive behaviour and the cube embedding all live
above 261 and are not pulled forward. Page 261 is the hierarchy itself.
`def-hausdorff-space` is reused from `subspaces-products-and-quotients` (251),
not re-minted.

**F1-D3 / F1-D5. Findings are adjudicated by the orchestrator, logged here, and
presented at the pause.** No stage blocks on an absent owner. Any item whose
inclusion rests on a decision the owner might reverse is flagged in the Beta
notes.

**F1-D4. Levy–Steinitz on `rn-as-a-normed-space`.** The RA-22 note is binding and
is the *only* carrier of that plan line — the owner declined a ‡ stub, so a silent
drop erases it from the plan. Beta-F1-2 scaffolds the Steinitz rounding lemma and
the theorem **if and only if** it judges the proof can be written completely and
correctly; otherwise it drops them and names the specific later page that inherits
the obligation. Mathematical accuracy outranks completeness, and the outcome is
reported either way.

## A plan defect found at step 0, for a later build (not this one)

`plan-topology-track.md` §T5 lists **"compact Hausdorff implies normal"** on the
`compactness` page, order **255**. Normality is defined at order **261**. As
planned that item is a forward reference on the spine, which `fwdcheck` forbids
outright on a theorem. It cannot live on 261 either, since compactness is not
available there. **Its only legal home is a page above both** — most naturally
`hereditary-and-productive-separation` (265) or `urysohn-lemma-and-tietze` (267).
Recorded here so the session that scaffolds 255 does not rediscover it as a
surprise. No action in this build.

## Progress

- [x] Step 0 — frontier computed, batched, seams reported
- [ ] Steps 1–2 — Beta-F1-1 and Beta-F1-2 scaffolding (running)
- [ ] Step 3 — findings adjudicated and logged
- [ ] Step 4 — splice into `plan-spec.json`, Alpha-F1 spawned
- [ ] Step 5 — six A/B pairs authored in parallel
- [ ] Step 6 — judged (`z-ai/glm-5.2`, `JUDGE_VERDICTLOG=research/frontier-1-judge.jsonl`, `--batch`)
- [ ] Step 7 — rejections adjudicated
- [ ] Step 8 — batch audits
- [ ] Step 9 — Alpha-F1 whole-build mathematical-accuracy audit
- [ ] Step 10a — scope-denial sweep · 10b — rundown, then pause
