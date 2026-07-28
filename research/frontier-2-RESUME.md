# `frontier-2` — build state, decisions, and what a resuming session must know

**Started 2026-07-29.** Owner instruction, given after the pair table was
regenerated and reviewed: **build the topology, combinatorics and foundations
A/B pairs only**, autonomously, step 0 through step 10, pausing at the rundown.
`verification.audited` is the owner's field alone and this build does not
publish.

The owner is not adjudicating mid-build, so every step-3 finding is decided by
the orchestrator and **logged here** for review at the pause.

## Why this build is called `frontier-2` and not `level<n>`

It is **not a dependency level**, for the same reason `frontier-1` was not:
`LEVELS.md` names its artifacts `research/level<n>-*`, and this build's are
`research/frontier-2-*`. The six pairs sit at computed levels **5, 7 and 8** and
were selected by a different criterion — every page prerequisite already
**published** — and then narrowed by the owner to three categories.

They are mutually independent at page level: no one of the six `requires`
another. The one-round rule therefore applies and all six pairs are authored in
parallel at step 5.

## Step 0 — the frontier, computed from disk, then narrowed by the owner

`node tools/rounds.mjs --pairs --md > research/BUILD-LEVELS.md`, then every A
page **absent from disk** whose every `requires` is `status: published` **in its
page file on disk**. That gave **eleven** pairs. The `kind: P` placeholder page
`construction-of-the-natural-numbers` is not a build target and was excluded.

The owner then selected topology, combinatorics and foundations. **Six pairs,
twelve pages counting companions:**

| order | A page | category | level | `requires` (all published) |
|---|---|---|---|---|
| 22 | `inclusion-exclusion-and-the-pigeonhole-principle` | combinatorics | 5 | `finite-counting-and-binomial-coefficients` |
| 247 | `cardinal-arithmetic-and-cofinality` | foundations | 5 | `ordinal-arithmetic`, `order-zorn-and-the-axiom-of-choice` |
| 253 | `connectedness` | topology | 7 | `subspaces-products-and-quotients`, `ordinal-arithmetic` |
| 255 | `compactness` | topology | 7 | `subspaces-products-and-quotients`, `filters-and-ultrafilters`, `ordinal-arithmetic` |
| 263 | `hausdorff-via-the-diagonal` | topology | 8 | `separation-axioms` |
| 267 | `urysohn-lemma-and-tietze` | topology | 8 | `separation-axioms` |

**The five real-analysis pairs of the eleven are NOT in this build** and remain
buildable: `darboux-lhopital-and-taylor` (155),
`bounded-variation-and-riemann-stieltjes` (163), `improper-integrals` (165),
`uniform-convergence-of-functions` (169),
`the-riemann-integral-in-rn-and-jordan-content` (235).

### Batching, and the seam count reported before spawning

Two batches of three A pages (the cap), packed by prerequisite affinity. **The
packing was decided by the structural finding in F2-D1 below, not by topic.**

- **Batch 1 — the spine.** `cardinal-arithmetic-and-cofinality` (247),
  `connectedness` (253), `compactness` (255). Both **load-bearing** seams of the
  build are internal to it: cofinality → compactness, and order topology →
  compactness.
- **Batch 2.** `hausdorff-via-the-diagonal` (263), `urysohn-lemma-and-tietze`
  (267), `inclusion-exclusion-and-the-pigeonhole-principle` (22). The two
  topology pages share `separation-axioms` as their sole prerequisite; the
  combinatorics page is genuinely independent of everything else in the build,
  which is stated rather than left silent.

**Cross-batch seam count at spawn: 2 page-level edges — `compactness` → 263 and
`compactness` → 267 — and the item-level count was NOT computable**, because all
twelve pages have empty `items` arrays (`LEVELS.md` step 0.4: say so rather than
report 0).

Both cross-batch edges are **additive rather than load-bearing**: 263 and 267 can
be scaffolded in full without them and then gain the compactness-dependent
theorems once `compactness`'s ids exist. They are also exactly the discharge of
inherited obligation 3. The alternative packing (255 with 263 and 267) would have
put the two *load-bearing* edges across the seam instead, which is strictly
worse: `compactness` cannot even state its signature counterexamples without
them.

## F2-D1 — THE STRUCTURAL FINDING, found by the orchestrator before dispatch

**There is no order topology that `connectedness` or `compactness` may legally
cite.** Verified from disk, not from any agent's report:

- `def-order-topology-on-an-ordinal` and `lem-ordinal-order-topology-is-t3` are
  published and homed on **`separation-axioms`**, order **261** — *above* both
  253 and 255. A page may not cite a later page.
- `ex-order-topology` is published but homed on
  `topological-spaces-and-continuity-examples`, a **B page**. Leaf-locked;
  uncitable from anywhere else.
- `grep` over `items/` finds no other order-topology definition.

**What it blocks as the prose scaffolds stand.** On `connectedness`: "the long
line is connected" and all linear-continuum material. On `compactness`: `ω₁` is
sequentially compact and not compact, `ω₁ + 1` is compact, the long line is
countably compact and not compact — the signature counterexamples of the page.

**Provisional reading handed to Beta-F2-1, which may overturn it:** mint a
general `def-order-topology` on **`connectedness`**, the lowest-ordered page in
this build that needs it, and let `compactness` cite it. The agreement with the
published ordinal special case then runs the *legal* direction — 261 sits above
253, so recording it is a one-sentence **staged amendment to a published item**,
never a forward reference, and never a silent second notion.

Alternatives Beta was told to reject explicitly and give reasons for: homing it
on the foundations page (topically wrong); dropping all ordinal-space material
(a large permanent loss); a declared forward reference (barred outright on a
definition by `fwdcheck`'s `forward-on-spine`).

**Status: awaiting Beta-F2-1's step-3 report. Decision logged at step 3.**

## The three inherited obligations, and their disposition in this build

From `research/NEXT-SESSION-PROMPT.md`, written at the close of `frontier-1`.

1. **`compactness` owes an agreement — LANDS IN THIS BUILD.** `frontier-1` minted
   `def-locally-compact-metric-space` (published, `function-space-topologies`) as
   a metric special case because general topological compactness did not exist.
   This build defines it in general, so the agreement must be recorded in the
   dictionary style of `def-metrizable-space`. Note the direction:
   `function-space-topologies` sits *above* `compactness`, so that half can only
   be a staged amendment to the published item; the `def-metric-compactness`
   half (order 120, *below*) is an ordinary backward citation and belongs on the
   new page. Assigned to Beta-F2-1.
2. **`uniform-convergence-of-functions` (169) — DOES NOT LAND.** It is
   real-analysis and the owner excluded that track from this build. The
   two-notions risk against `def-topology-of-uniform-convergence`,
   `thm-uniform-limit-theorem` and `thm-dini` (all published at order 283)
   therefore remains open, and the BINDING note in
   `research/plan-realanalysis-pages.md` §RA-23 stands unchanged. **Nothing in
   this build may assert anything about page 169.** Carried forward.
3. **The plan defect at `compactness` — LANDS IN THIS BUILD.**
   `plan-topology-track.md` §T5 plans "compact Hausdorff ⇒ normal" on the
   compactness page, but normality is defined at 261, above it; as planned that
   is a forward reference on the spine, which `fwdcheck` forbids outright on a
   theorem. Its only legal home is a page above both 255 and 261 — in this build,
   263 or 267, both owned by Beta-F2-2. The same reasoning was extended to two
   further §T5 entries with the same defect: **"locally compact Hausdorff ⇒
   completely regular"** (also needs Urysohn, so 267) and **"paracompact
   Hausdorff ⇒ normal"**. Both Betas were briefed on the reconciliation
   protocol: Beta-F2-2 names the *statements* it needs, never invented ids, and
   the orchestrator binds them at step 4.

## The Sonnet 5 authoring pilot — protocol, pre-registered

Owner-approved; the protocol is fixed in `LEVELS.md` §Step 5 and must not be
loosened after the fact. One A/B pair authored by **Sonnet 5**, one comparable
pair by **Opus 5**, identical brief, identical scaffold quality, and the step-9
readers are **not told which is which**.

`LEVELS.md` requires the two pairs to be "comparable in item count, proof length
and prerequisite depth" — which is measurable only once the scaffolds exist. So
the candidate set is fixed **now** and the assignment is made at step 5:

- **Candidate pairs:** {`hausdorff-via-the-diagonal`, `urysohn-lemma-and-tietze`}
  (same sole prerequisite, same batch, same subject) and {`connectedness`,
  `compactness`} (same two prerequisites, same batch, both flagship pages).
- **Selection rule, pre-registered:** take whichever of the two candidate pairs
  comes out **closest in scaffolded item count**, and give **Sonnet 5 the
  heavier of that pair's two pages**, so the pilot cannot flatter Sonnet by
  handing it the lighter page.
- **Measured per pair:** defects by class (proof / Statement / Remark /
  summary); scaffold errors caught and reported; gate failures before clean;
  tokens; wall clock.
- **Decision rule, fixed in advance:** switch the bulk only if Sonnet matches on
  **proof defects AND on scaffold errors caught**. Matching on proofs alone is
  not enough. If it matches on proofs but not on scaffold catching, the fallback
  is the split — Sonnet for B-page examples, definitions and routine proofs;
  Opus for whatever the scaffold flags high-risk.

A caveat recorded now rather than discovered later: `compactness` carries two of
the three inherited obligations and is the most consequential page in the build,
so if {`connectedness`, `compactness`} is the closer pair, the obligation load is
a confound and will be reported as one.

## Judge

`tsx tools/judge.mts --preflight` returned **OK (`z-ai/glm-5.2`), exit 0** before
anything was spawned. The credit exhaustion that truncated `frontier-1` to
122/212 is resolved. The judge runs **once, after step 9**, per the reformed
execution order `0 → 1 → 2 → 3 → 4 → 5 → 9 → 6 → 7 → 10`.

`JUDGE_VERDICTLOG=research/frontier-2-judge.jsonl` on every run, committed.

## Ledgers

- Repair ledger: `research/frontier-2-touches.json`, snapshotted **after every
  item-modifying stage** — `frontier-1`'s was snapped twice and was consequently
  blind, which was the orchestrator's error and is recorded in
  `ARCHITECTURE.md` §4.
- Refutation ledger: `research/frontier-2-judge.jsonl`.

## Progress

- [x] Step 0 — frontier computed from disk, narrowed by owner, batched, seams reported
- [ ] Steps 1–2 — Beta-F2-1 and Beta-F2-2 scaffolding (running)
- [ ] Step 3 — findings adjudicated and logged
- [ ] Step 4 — spliced into plan-spec.json, Alpha-F2 spawned
- [ ] Step 5 — six A/B pairs authored in parallel, Sonnet pilot assigned
- [ ] Step 9 — Alpha-F2 fanned-out whole-build audit
- [ ] Step 6 — judge sweep, once, on final text
- [ ] Step 7 — rejections adjudicated by the orchestrator
- [ ] Step 10 — scope-denial sweep, gates of record, rundown, PAUSE
