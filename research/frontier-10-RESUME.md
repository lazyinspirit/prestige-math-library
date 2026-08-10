# `frontier-10` — run record

Started 2026-08-11. Branch `feat/coverage-harvest-and-frontier-10`, baseline
`2b6e537`. Run under `LEVELS.md` steps 0 to 10.

## The owner's request

> Start building all non-topology A/B pairs, as well as adding orbit stabilizer
> theorem and its consequences and examples to "group actions" A/B pair.

Preceded by a diagnosis the owner asked to be carried forward:

> I am not confident with how Beta agents are instructed to fetch sufficient
> amount of knowledge from the open web. We need textbooks, lecture notes, and
> other rich sources of knowledge, not just wikipedia. Keep this in mind.

Amended mid-run, twice:

> Instruct Beta agents to build all prerequisite definitions and theorems if a
> theorem requires them. Do not take the lazy approach and drop an important
> result; build all necessary machinery. If an A page gets too large (over 60
> items), split it into two or more A pages.

> Make sure this is enforced for all future sessions as well.

## Mechanism changes made BEFORE dispatch (both committed)

`a0614cf` — the omission gate. `tools/coverage-checklist.mjs`, required at steps
2 and 6. Per A page: ≥2 independent treatments, ≥1 textbook/monograph/full note
set, per source the exact range read plus that source's own section and
named-result headings, per heading a disposition. `ARCHITECTURE.md` §3.11b.
Also gave the `beta` and `reader` dispatch lanes `web: true`.

`ed4fb82` — build the machinery; split at 60. `validate-plan.mjs --max-items`
default 100 → 60 and `size` moved from WARN to ERROR.

**Diagnosis behind them, for anyone re-reading this later.** The thin pages were
not caused by bad sources. frontier-9's batch notes cite Sharifi (UCLA), Brosnan
(UMD), Judson, Axler, Diestel. The defect was that a Beta could cite a source
without harvesting it: Brosnan's note titled *Orbits and stabilizers* was logged
as covering "orbit structure" and the orbit–stabiliser theorem never reached the
scaffold. frontier-9 shipped 83 items across 20 pages — about 4 per page.
frontier-9's dispatch transcripts were not retained, so whether its Betas
actually fetched or asserted from memory could not be established either way.

## Scope — 12 pair-units

Eleven new non-topology pairs, from the 15 buildable today (`LEVELS.md` §Step 0
frontier rule, computed from disk). The four topology pairs
(`complete-metrizability-and-baire`, `ascoli-arzela`, `stone-weierstrass-general`,
`covering-spaces-and-lifting`) are **deliberately excluded** by the owner's
"non-topology" scope and remain buildable for a later run.

Two scope readings recorded rather than escalated:
`plane-graphs-euler-and-the-five-colour-theorem` is IN — its category is
`combinatorics` and it is graph theory, notwithstanding the planar-topology
subject matter. `categories-functors-and-natural-transformations` is IN — its
category is `category-theory`.

## Batches — 8, all seam-free

**Zero cross-batch dependency edges.** None of the eleven A pages requires
another, so they are provably mutually independent and any grouping is seam-free
at page level. Grouping is therefore by *shared prerequisite* (one Beta reads one
dependency set twice) and by downstream co-unblocking, not by seam burial.

| batch | A pages | why grouped |
|---|---|---|
| 1 | symmetric-groups-and-the-sign-homomorphism (44), matrices-and-the-matrix-of-a-linear-map (78) | jointly the two blockers of `determinants-of-matrices-over-a-commutative-ring` (82) |
| 2 | the-structure-of-finite-abelian-groups (40), free-products-and-amalgamation (62) | group theory, both level 17 |
| 3 | polynomial-rings-and-roots (52) | solo — ring theory, feeds 4 pending pages |
| 4 | bounded-variation-and-riemann-stieltjes (163), improper-integrals (165) | identical single prerequisite |
| 5 | fubini-and-change-of-variables (237) | solo |
| 6 | ramsey-theory (217), plane-graphs-euler-and-the-five-colour-theorem (357) | both from `graph-colouring` |
| 7 | categories-functors-and-natural-transformations (359) | solo — 8 prerequisites across four subjects |
| 8 | group-actions-and-cayleys-theorem (42) | **ENRICHMENT of a published pair** |

Three solo batches are deliberate, not leftovers. The cap is *at most* two pairs
per Beta, not exactly two, and the owner's complaint is about depth: a Beta
holding one meaty topic can harvest it further than one holding two.

## Batch 8 — the enrichment

`group-actions-and-cayleys-theorem` is `status: published` with **6 items** and
`examples: []`. It has `def-orbit-and-stabilizer`, `lem-stabilizer-is-a-subgroup`
and `thm-orbits-partition-the-set` but **not the orbit–stabiliser theorem
itself**, and no class equation, Cauchy's theorem, Burnside/Cauchy–Frobenius, or
p-group fixed-point results. The B page has no items at all.

Follows the `freegroups-1` precedent (its D4): both pages are published, and
`depcheck` raises `draft-on-published-page` when a published page lists a
non-published item. So **every new item is authored `status: draft`**, and the
additions to the two pages' `items:`/`examples:` lists are **staged** in
`research/frontier-10-published-amendments.md` and applied only in the single
publishing commit, together with the status flips.

Its manifest lists **only ids the batch mints**; the 7 already-published ids are
recorded under `enrichment_of_published` as context. Listing them as batch items
is what `content-policy.mjs` rejects with `batch-item-already-exists` — that was
the first step-0 failure of this run.

## Mid-run owner instructions (2026-08-11), all landed before step 3

- **`\iota` gone from the free-groups pair**, with rejudge/restamp explicitly
  waived. 12 items, commit `cce8d63`. Full record and the one non-cosmetic spot:
  `research/frontier-10-notation-change.md`.
- **Alpha reviews scaffold breadth and depth at the end of step 3**, standing for
  all future sessions. Alpha now spawns at step 3, not step 4. Commit `fa4448b`;
  `briefs/alpha.md` §"Stage 0", `LEVELS.md` §"Step 3".
  **This binds the current run** — step 3 is not complete until
  `research/frontier-10-alpha-step3-scaffold-review.md` exists and every pair is
  `sufficient`.

## State — STEP 6 AUDIT (steps 0–5 all CLEAR)

- **Steps 0–4 CLEAR.** Step 4 gate green: 583 scoped items, 0 errors.
- **Step 5 CLEAR.** All 583 items authored; 474/474 proof contracts check;
  content-policy 583 items 0 errors (complete provenance, no applied iota).
  Its one failure was an orchestrator sequencing error: batch 5 depends on batch
  9's determinant interfaces but both were dispatched in parallel, so batch 5
  quoted the scaffold while batch 9 was still authoring — 11
  `citation-quote-mismatch`. Repaired against the authored text, and Beta-5
  confirmed in writing that no proof step was unlicensed by the ring-versus-field
  split. **Dispatch a dependent batch AFTER the batch it depends on.**
- **Step 6 running**: 9 independent readers (fresh processes, cap 5), then Alpha
  Stage 2. Baseline snapshot `after-authoring` taken (3479 items).
- Batch 8 enrichment protocol verified: published pages untouched, all 47 items
  `status: draft`, `research/frontier-10-published-amendments.md` written (5.9 KB),
  depcheck clean.
  `items/` was **51** (pre-existing `rem-*` deferred-catalogue items) — subtract
  it when reading the monitor's `drafts:` field.
- 14 A/B pairs, **583 items** to author, 877 harvested source headings.

### What step 4 caught that nothing earlier could

Only visible once every item list existed in one graph:

1. **10 `b-leaf` violations** — batches 2, 5, 8 cited *published examples* as
   dependencies. B pages are leaves. Alpha's pass reported "0 unresolved, 0
   forward references", both true; b-leaf is a third rule it was not checking.
   All repaired.
2. **A rule collision on the re-home.** §3.11a defers page edits to the
   publishing commit, but that assumes an UNPUBLISHED destination. With both
   endpoints published, deferring is what breaks the gate: `validate-plan`
   resolves homes from `library/` on disk, so a staged move left 4 pages flagged
   `undeclared-prereq`. Applied at step 4 instead; all 11 published consumers
   verified independently (orders 203 and 213, both above 46). §3.11a now records
   the distinction, **and that both halves must move together** — `library/`
   page items AND `plan-spec.json` page items. Moving only the files raised 2
   `dup-id`, which is how that was found.
3. **Two bugs in `research/frontier-10-splice.mjs`.** Replacing rather than
   appending would have deleted the 6 published items from the group-actions
   page. Then appending only *unseen* ids meant a re-run carried pre-repair
   `deps` forward — the Betas' b-leaf fixes never reached the spec and
   `validate-plan` kept reporting edges that no longer existed. The manifest is
   now authoritative for every id it declares, undeclared page items preserved
   first. **Sequencing rule: splice AFTER scaffold repairs, never before.**

### Alpha Stage 0 outcome

First pass 5 sufficient / 7 insufficient; after two repair rounds **all 14 pairs
`resolved` or `sufficient`**. F1 (7 forward references) closed and verified
run-wide at zero. Two ledger corrections ride to step 6: L1 (batch 4's MIT
syllabus row → Rudin ch. 6) and L2 (batch 8's Theorem 6.9 home →
`cosets-and-lagranges-theorem`).

## Exact next action

Await the 9 readers, then Alpha Stage 2 (step 6): adjudicate reader findings from
disk, dispatch read-only refuters, run §6b.0 harvest faithfulness against the
sources, reconcile contracts and risk tiers, apply L1/L2, audit cross-batch and
cross-level citations. Then:

```
node tools/gates.mjs --step 6 --run frontier-10
```

Step 7 is the paired judge sweep (DeepSeek + Terra, `JUDGE_LINEUP=deepseek+terra`),
which SPENDS — supply every A page in the run. Then step 8 fatal-only
adjudication, step 9 scope-denial sweep, step 10 rundown and the owner pause.

## Open risks

- The coverage gate is new and has never run against a real Beta's output. Its
  four paths were verified against fixtures only.
- The 60-item ceiling is now a hard error and the build-the-machinery rule pushes
  pages toward it. Expect split proposals at step 2; those are Step-3
  orchestrator decisions and need `plan-spec.json` order insertions at step 4.
- `run-wave.test.mjs` has 2 pre-existing failures at baseline `2b6e537`
  (A10 owner-pause exit code). Untouched by this run; audit driver, not build.
