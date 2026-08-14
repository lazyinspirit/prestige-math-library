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
| `pde` | DECOMPOSE | **LANDED 15:43, AUDITED, PASSES.** +270 (585→855), 2.04× → **2.76×** |
| `functional-analysis` | WIDEN | **LANDED 15:50, AUDITED, PASSES.** +47 (689→736), 4.33× → **4.09×** |
| `probability-theory` | WIDEN | **LANDED 15:55, AUDITED, PASSES.** +34 (618→652 by my count, 579→613 by its own item census), 4.49× → **3.58×**, source pool 8 → 13 |
| `commutative-algebra` | DECOMPOSE | **LANDED 16:06, AUDITED, PASSES.** +691 (443→1134), 1.05× → **2.06×**, source hosts 6 → 13 |
| `number-theory` | WIDEN | **LANDED 16:13, AUDITED, PASSES.** +2 only, and correctly so |

**ALL FIVE lanes corrected the figures I briefed them with** (583→585, 687→689,
137→129, 586→590; commutative algebra confirmed 443/421 exactly). Treat every
number in a dispatch brief as approximate and make the lane re-derive it.

**Number theory's +2 is the right answer, not under-delivery.** It proved the
briefed 14.3× was a *lexical* artifact — clauses like "D.I.1–D.I.9 are included"
dispose of many headings in one word — and refused to report any ratio rather
than substitute a prettier one. Its 24 pairs were already densely decomposed; the
new sources corroborated, and it added exactly the two genuine gaps.

**Three defects found by auditing, not visible in any self-report:**
1. Commutative algebra's page-ceiling table was **malformed** — 14 of 18 rows
   missing the final-B column. Repaired from the per-pair section counts. Every
   final-A verifies; A-added sums to 580, B-added to 111. **CA-18 is at exactly
   60** — at the ceiling, not over, so no split and the splice input is unchanged.
2. 30 overlay rows carried `provenance.statement: directly-checkable`, **not a
   SCHEMA §3 value**. All 30 are `ex-` examples on B pages — the permitted class.
   Relabelled `ai-generated` so the never-load-bearing rule is mechanically
   enforceable; verified each occurs once with no row citing it.
3. **Pair-label collision (ruling R-10).** Number theory had labelled its pairs
   `MT-1…MT-24`, colliding exactly with measure theory's, because SEAMS §0 used
   `MT-n` as its generic illustration. Renamed to `NT-n`; every cross-file
   reference repointed; the bare `MT-n` that genuinely mean measure theory left
   alone. **A pair label is the key the splice joins on — a duplicate is a silent
   mis-splice, not a visible error.**

**A successful WIDEN LOWERS the ratio — that is not a failure.** Widening puts
new headings in the denominator and only the genuinely-new ones become items. FA
read 88 new headings and **67 corroborated coverage it already had**, so the ratio
fell honestly. Judge a WIDEN by what the new sources turned up, not by the ratio;
ratio movement is the DECOMPOSE metric only.

**Both lanes corrected my numerator from disk** (583→585, 687→689) and FA
diagnosed why my denominators were untrustworthy: the legacy harvests mix
one-row-per-heading tables with **grouped prose dispositions**, so the word
`included` is not a recoverable census. Keep telling each lane its figures are
approximate — two of two found them wrong.

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

**FA audit result.** +47 items, **0 removed, 0 renumbered, 0 collisions** against
`items/` or `plan-spec.json`. A **25-row per-pair matrix with page ranges** (finer
than PDE's section ranges), every row carrying 2–5 treatments. The 21 included
headings are spelled out in an exact heading→id crosswalk, and what they bought is
real: Kato–Rellich, the Weyl criterion and essential-spectrum invariance, von
Neumann deficiency-index extensions, Dvoretzky–Rogers, Toeplitz–Hausdorff,
Wiener's lemma, the min-max principle, Stone's formula, the distribution structure
theorems. It names the four headings it read and deliberately did **not**
decompose, each tied to a seam ruling (Brezis §5.3 Lax–Milgram → PDE; TQ §6.5
KLMN → PDE form methods).

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

1. ~~Five enrichment lanes.~~ **ALL FIVE LANDED, AUDITED, COMMITTED.** Net across
   the commission: **+1,044 items** (PDE 270, CA 691, FA 47, PR 34, NT 2). Zero
   ids removed or renumbered, zero collisions against `items/` or
   `plan-spec.json`, **no A page over 60**, so no page split and **the splice
   input is unchanged from what §5.3 describes.**
2. ~~Two held-back published-content amendments.~~ **BOTH DONE.**
   - **Re-home of five published graph items — DONE** (`2da7194a`). Verified legal
     from disk first, then from BOTH sides after: donor's array clean, each id on
     exactly one page, zero within-page order violations. `library/` and
     `plan-spec.json` moved together, receipt at
     `research/subjects-01-rehome-receipt.json`, and depcheck / fwdcheck /
     validate-plan / rendercheck all pass.
   - **`DEFERRED.md` reconciliation — DONE** (`07411164`). Row by row against the
     scaffolds. Measure theory plans a real proof for everything except
     Banach–Tarski; FA for everything except three results its own scaffold ruled
     belong to topology. **This corrected §7: 58 items discharge, not 62, and
     NEITHER catalogue page retires** — the summary count had predicted both
     disappearing.
3. **THE SPLICE — DONE** (`3fac4f29`). **448 → 894 pages, 237 pairs placed,**
   one pass keyed by anchor page id from the live spec. Fractional orders
   renumbered nothing; no authored page was touched. Full layout and rationale:
   `research/subjects-01-splice-record.md`. All gates pass; the 297
   `redundant-prereq` warnings pre-date it (310 before) and none names a new page.

   Three things the seam table alone did not show, now recorded:
   - **Group theory has FOUR blocks, not two.** GT-18/19 need abstract-algebra
     RT-4 (order 150) *and* commutative-algebra completion (111.x), so they anchor
     at the later; the cohomological block sits after homological algebra.
   - **Complex analysis is out of scope** by its own CX-D2 — it already occupies
     its band and performs no splice or renumber. Combinatorics likewise in place.
   - **The 9 retired page ids were safe**: all 19 `requires` edges into them came
     from inside the superseded 365–392 band, no authored page consumed any.
     Measured before the edit.

   **OWNER-GATED CONSEQUENCE.** Seven new `category` values —
   `measure-theory`, `functional-analysis`, `probability`, `pde`,
   `differential-geometry`, `group-theory`, `commutative-algebra` — carry **348
   pages**. `category` is both the `library/<category>/` directory and the index
   group, and the app repo's `web/lib/library-categories.ts` is **frozen
   presentation**. Nothing renders today (every new page has empty `items[]`), but
   **a style must be added there before any of these levels publishes.**

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
