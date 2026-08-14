# subjects-01 + ra-enrich-01 — run record and resume state

Last updated 2026-08-14 15:35. Branch `main`, pushed through `43b74abd`; later
commits are local.

## What was commissioned

1. **subjects-01** (owner, 2026-08-13): amend and expand the prose scaffolds
   across **thirteen subjects**, one lane each, each researching sources and
   writing one track file. Deliverable is **prose scaffolds only** — nothing
   spliced into `plan-spec.json`, no item authored, nothing published. The
   owner's fourth requirement made dependency reconciliation the orchestrator's
   own job.
2. **ra-enrich-01** (owner, 2026-08-13/14): research real analysis, examine every
   published page, add items to existing pairs, judge and audit **only the new
   items**, then publish. **COMPLETE — see §3.**

## 1. STATUS: all thirteen tracks complete

| track | pairs | items | file |
|---|---|---|---|
| differential-geometry | 37 | 2,098 | `plan-differential-geometry-track.md` |
| complex-analysis | 27 + **19 new** | 709 | `plan-complex-analysis-track.md` (ENRICHED) |
| pde | 26 | 583 | `plan-pde-track.md` |
| functional-analysis | 25 | 687 | `plan-functional-analysis-track.md` |
| number-theory | 24 | 586 | `plan-number-theory-track.md` |
| measure-theory | 23 | — | `plan-measure-theory-track.md` |
| group-theory | 23 | — | `plan-group-theory-track.md` |
| probability-theory | 22 | 579 | `plan-probability-track.md` |
| category-theory | 18 | 844 | `plan-category-theory-track.md` |
| commutative-algebra | 18 | 443 | `plan-commutative-algebra-track.md` |
| homological-algebra | 17 | 828 | `plan-homological-algebra-track.md` |
| abstract-algebra | — | — | `plan-algebra-track.md` + `-expansion.md` (ENRICHED) |
| combinatorics | — | — | `plan-combinatorics-and-categories.md` (ENRICHED) |

~280 A/B pairs, ~7,800 proposed items, ~68,000 lines. `DEFERRED.md` §1 (measure)
and §2 (functional analysis) both discharged. **Galois theory**, absent from all
448 planned pages, is scaffolded into the free 98–101 slot — now four pairs, not
two, after reconciliation.

## 2. IN FLIGHT as of 15:52 — density enrichment

Cause: measured **decomposition ratio** (items ÷ *included* source headings) split
the thin tracks into two failure modes.

| track | mode | state |
|---|---|---|
| `pde` | DECOMPOSE | **LANDED 15:43, AUDITED, PASSES** — see below |
| `commutative-algebra` | DECOMPOSE | running. 718 headings harvested (most of any track), 443 items = **1.05×**. Transcribed a ToC. Also only **7 source hosts for 18 pairs** — narrowest sourcing in the commission |
| `probability-theory` | WIDEN | running. ratio fine (4.2×), harvest narrow (171 headings) |
| `functional-analysis` | WIDEN | running. ratio fine (4.3×), harvest narrow (210) |
| `number-theory` | dispatched 15:52 into pde's freed slot | measurement suspect — 41 included / 14.3× is probably a grep artifact; told to verify first |

**PDE audit result (orchestrator, from disk, not from the lane's self-report).**
585 → 855 distinct ids = **+270, exactly as claimed**. Ratio 2.04× → **2.76×**
expanded-corpus (2.98× on the fixed denominator). It corrected its own baseline
(288 → 286 `included`, and explained the whole-file grep discrepancy unprompted),
added three full treatments — Oh, Simon, Jakobsen — and wrote a **26-row per-pair
source matrix, every row naming 3–4 treatments with exact ranges**, plus a
convention audit resolving [SO]'s $d$-vs-$n$ and Laplacian-sign conflicts.
**270/270 rows are `literature-derived` with a source locator; zero
`ai-generated` statements.** Zero duplicate ids in-file, zero collisions against
`items/` or `plan-spec.json`. Largest A page 28 items. It explicitly **declined to
chase the 5.7× benchmark**, naming what it refused to mint (no plane Poisson/
Perron, no abstract spectral theorem, no conservation-law systems) — the
anti-padding posture the brief asked for.

**MEASURE AGAINST THE PRE-DISPATCH COMMIT, NEVER `HEAD`.** Commit `32689b0b`
swept 460 lines of pde's in-flight work into an unrelated docs commit, and
measuring from `HEAD` afterwards showed +52 where the truth was +270. The pde
baseline is `a2b781f8`. **Do not `git commit -a` while lanes are running** —
commit named paths only.

Benchmark: differential geometry **5.7×** with 532 headings and 27 source hosts.
Brief: `briefs/subjects-01-enrich.md`. Both modes now require **wider source
acquisition** and an **auditable per-pair source table** (owner asked explicitly
whether agents were being told to find more textbooks — they were not, and now
are). Hardest constraint in the brief is anti-quota: **a reasoned 2.5× beats a
padded 5×**; generated-claim minimization binds unchanged.

**Expected shape:** DECOMPOSE lanes write immediately; WIDEN lanes stay near-flat
early because they are acquiring and reading full texts first. If a WIDEN lane
writes a lot immediately, suspect it skipped acquisition and is padding.

## 3. ra-enrich-01 — COMPLETE and PUBLISHED

Seven items published across five real-analysis pages (`43b74abd`, pushed).
Six carry a paired judge pass; `thm-standard-maclaurin-expansions` publishes with
`verification.audited` and **no judge stamp** — DeepSeek passes, Terra holds an
adjudicated nonfatal rejection, and `apply-judge-stamps` declined to stamp it.
**Never hand-write a stamp the tool refuses.**

The headline result: the library defined sine/cosine by power series and never
connected them to $\cos\theta=A/H$ — zero of 4,172 items mentioned "hypotenuse".
Now `def-radian-angle-by-unit-circle-arc-length` +
`thm-analytic-sine-cosine-agree-with-right-triangle-ratios`, spliced at π-page
positions 5–6, immediately before the Archimedean polygon theorem that had
already been assuming them.

**5 judge rounds, 36 verdicts, 14 adjudications — all `confirmed_nonfatal`, zero
fatal, ZERO false positives.** Every objection was a real defect. Alpha's
round-3 audit also found `[L7]` **misquoting `thm-binomial-theorem`** with the
coefficient index moved to the other variable, and 9 `rendercheck` errors no
judge or reader looks for.

Owner still owes a decision: whether to SPLIT `thm-standard-maclaurin-expansions`
(Alpha argues no on defect distribution; the orchestrator argues yes on
reviewability — it exhausted DeepSeek's 40k reasoning budget twice). Also open:
the four phase-2 A/B pairs in `research/ra-enrich-01-PLAN.md` Table B (Fourier/
Fejér, Picard–Lindelöf, constant-rank, surface integrals/divergence/Stokes).

## 4. Reconciliation — DONE, with rulings

`research/subjects-01-RECONCILIATION.md` audited all thirteen. **153 routes: 48
apply, 5 conflicts, 19 owner, 81 stale. 41 duplicate-id candidates, NO genuine
double-mint.** Applied in `a2b781f8`.

**Rulings R-1…R-9 are in `research/subjects-01-SEAMS.md` §7 and bind future
builds.** R-1 corrected an error in §4 itself (flatness). The four SILENT seams —
where the contract said nothing and each track assumed the other would supply the
object — were **Riesz–Thorin** (offered by MT, never accepted by CA, excluded by
FA → assigned MT), **floor/ceiling** (→ real analysis), **$\mathbb{C}\cong\mathbb{R}^2$
dictionary** (→ CA-1), **general $C^1$ change of variables** (→ MT, items still
written conditionally and must be made unconditional).

## 5. EXACT NEXT ACTIONS

1. **Wait for the five enrichment lanes.** Dispatch `number-theory` when a slot
   frees. Verify each reports a *verified* before/after ratio and a per-pair
   source table — and check for padding, not just for growth.
2. **Two held-back published-content amendments, orchestrator does these by hand:**
   - **rehome five PUBLISHED graph items** to earliest legal pages
     (`plan-combinatorics-and-categories.md` §28 A1). **Verify from BOTH donor and
     receiving page** — no gate fails a half-done re-home.
   - `DEFERRED.md` row reconciliation — now narrowed by §7 below.
3. **THE SPLICE — not started, and it is the last step.** Convert anchors to
   concrete orders for ~280 pairs in **ONE pass, by anchor page id, never by
   composing shift tables**. Free integers **98–101** take part of the Galois
   block; everything else needs fractional orders in the `5.1`/`53.2` idiom,
   which renumber nothing. Galois is now **four** pairs and two homological-algebra
   page ids **retired**, so the splice input changed after reconciliation.
   The owner authorised "do all of them"; the splice was still held back and
   should be confirmed before it runs.

## 6. Machinery added or changed this run

- **`scaffolder` role** — was Opus 5, **moved to Sol 2026-08-14** by owner after
  two rounds of Claude session-limit deaths. cap 4, `web: true` (load-bearing:
  half the brief is source research).
- **`mechanic` role (2026-08-14)** — Terra at `medium`, for bookkeeping after the
  judgment is made. **May never author mathematical content** (CLAUDE.md: the
  authoring role uses Sol, never Terra) and **may never produce anything a Terra
  judge lane will later judge** (self-agreement; the frontier-12 certifier trap).
- **Codex effort is now role-driven**, defaulting `xhigh`, so pre-existing lanes
  are unchanged.
- `research/subjects-01-launch.sh` — refuses a duplicate label, running or landed.

## 7. Standing owner decision: the `not-proved-here` category

Owner asked whether to delete it; chose **discharge, not deletion**. Recorded in
`DEFERRED.md` §7 with the measurement: 5 pages, 116 `proved_here: false` items,
and **80 other items depending on them**. Deleting hides the debt rather than
paying it. A `rem-` item earns removal by being replaced with a real proof when
its track is BUILT, consumers repointed via `impact-audit`, and the old id
**aliased, never deleted** (ids are immutable on `main`). 62 of the 116 become
dischargeable once the measure-theory and functional-analysis levels are built.
