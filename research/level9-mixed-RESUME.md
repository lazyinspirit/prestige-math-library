# Level 9 (mixed) — RESUME STATE, 2026-07-28

> **ORDERS IN THIS FILE ARE PRE-SPLICE AND STALE.** On 2026-07-28, after this
> level's authoring finished, 158 pages were spliced into `plan-spec.json` and
> every level-9 order moved. Identify these pages by **id**, never by order:
>
> | page id | old order | **live order** |
> |---|---|---|
> | `primes-and-the-fundamental-theorem-of-arithmetic` | 24/25 | **28/29** |
> | `linear-independence-bases-and-dimension` | 70/71 | **74/75** |
> | `monotone-functions-and-discontinuities` | 129/130 | **151/152** |
> | `the-derivative-and-mean-value-theorems` | 131/132 | **153/154** |
> | `the-riemann-integral` | 137/138 | **159/160** |
>
> `research/level9-mixed-batch-*.pages.json` also carry the old numbers.
> Recompute from `plan-spec.json`; see `LEVELS.md` §"Brief an agent by page id".

Written mid-build so a compacted or fresh session can pick up without guessing.
**Recompute everything here from disk before trusting it.**

## What this level is

Orders **24/25** (primes + FTA), **70/71** (linear independence, bases, dimension),
**129/130** (monotone functions, discontinuities), **131/132** (derivative, MVT),
**137/138** (Riemann integral). Number theory + linear algebra + real analysis,
hence "mixed"; bare `level9-*` was already taken by the pre-renumber level 9.

**156 items spliced** into `research/plan-spec.json`.

## Owner's standing instruction for this run

Continue autonomously **through step 10**, auditing suspicious content myself,
prioritising mathematical accuracy, logical validity between steps, and correct
citation of dependencies. Minor citational quirks and gaps a competent reader
closes in 30 seconds are forgivable.

**STOP at the 10c rundown. Do NOT publish.** Flipping `status: published` and
setting `verification.audited` are the owner's alone.

**Use `dangerouslyDisableSandbox: true` on Bash.** An overnight run stalled
entirely on sandbox-escalation prompts the owner was not there to approve. Their
`.claude/settings.local.json` already allows all Bash; the prompts were sandbox
escalations, not permission denials.

**The owner can message a background agent directly, and I cannot see it.** See
the memory `owner-channels-to-subagents`. Never allege fabricated approval; ask.

## Build state

| round | pages | status |
|---|---|---|
| 1 | 24/25, 70/71 | **DONE, committed** (`ad04db1`, `8994e16`) — 55 items |
| 2 | 129/130 | authoring in flight |
| 3 | 131/132, 137/138 | not started; both depend on 129 |

Three authoring rounds, not two: 131 and 137 genuinely depend on 129 (the spec
denied it; Beta-9-1 found it), and 129 depends on 70 after the Hamel resolution.
`LEVELS` §2 permits depending on an earlier page inside the same level, so this
is authoring order, not three publish cycles.

## Commits (content repo)

`79568d8` scaffolds + staged amendments · `f4129cb` splice · `735576a` Hamel
retitle + Alpha-9 prose propagation · `ad04db1` pages 24/25 · `8994e16` pages
70/71 · `74a6c81` choice-free dimension formula · `9575d7e` validate-plan b-leaf
fix · `de155bc` extcheck ‡ load-bearing fix · `91fbe8f` level-8 scope sweep ·
`70f6a3f` touchlog seed.

## Batch numbering — do not get this backwards

`research/level9-mixed-batch-1.pages.json` is the **real-analysis** batch
(129/130, 131/132, 137/138), still being authored.
`research/level9-mixed-batch-2.pages.json` is the **number-theory + linear
algebra** batch (24/25, 70/71), authored and committed. So *round 1* of
authoring corresponds to *batch 2* of scaffolding. Step 8 for batch 2 can
therefore run while batch 1 is still being written.

App repo (`prestige-intelligence`, branch `feat/reasoning-training-controls`):
`e846c9a` the ‡ chip load-bearing fix — **built and deployed and verified live**.

## In flight

- **Round-2 author** (pages 129/130), 44 items, the level's largest batch.
- **Step-8 auditors for batch 2**, one per A/B pair (24/25 and 70/71), running
  concurrently because page 129 does not depend on page 24 at all and touches
  page 70 through exactly one item. The 70/71 auditor was told to flag loudly if
  it materially changes the **Statement** of `cor-every-vector-space-has-a-basis`,
  `def-linear-basis` or `thm-unique-coordinates-with-respect-to-an-ordered-basis`,
  which page 129's `lem-hamel-basis-exists` cites.

## Done since this file was written

**The choice-free dimension formula, `74a6c81`.** `thm-dimension-formula` and
`cor-dimension-of-a-direct-sum` declared "Assume the Axiom of Choice" for
statements about FINITE-dimensional subspaces, which need none — true but
unnecessarily weak, and this library tracks choice strength deliberately.
`thm-dimension-of-a-linear-subspace` gained **claim 3**, the finite-dimensional
extension statement, by parametrising its existing largest-independent-subset
construction by a given independent `A₀`; claim 1 is now the case `A₀ = ∅`. The
formula runs on that instead of on the Zorn-based
`thm-every-independent-set-extends-to-a-basis`, which left its `deps` entirely.
All three re-judged `keep: true`; gates green. The agent was invited to refute
the instruction with a specific step and reported it could not.

**The general lesson, which is why this is recorded rather than just committed:**
a repair that is merely TRUE is not automatically the right repair. Ask whether
it weakens a claim the library could actually make.

## Remaining work

1. Round 3 (131/132, 137/138) once 129 lands.
2. ~~Re-judge rounds 1-2 with full `--batch` context.~~ **CANCELLED by the owner,
   2026-07-28: "Don't rejudge rounds 1 and rounds 2 again. We'll audit everything
   at step 10a anyway."** Do not re-add this.

   The reasoning is sound and worth keeping: the judge's measured precision on
   this corpus is 21-24%, step 10a is a full-level mathematical-accuracy audit by
   Alpha-n, and re-judging risks the treadmill documented in
   `parallel-authoring-protocol` — a rejection is not evidence of a defect, and
   the objection rotates between runs.

   **What this costs, recorded so nobody later claims otherwise:** rounds 1 and 2
   were judged with the `--batch` block INERT. Four of five level slugs had no
   page file under `library/` at judge time, so they contributed nothing and
   `judge.mts` warned on stderr on every call — the round-2 agent reported the
   warning on all 44 of its invocations. So **the A/B-pair batch-context change
   was never actually exercised on orders 24/25, 70/71 or 129/130**, and any claim
   about its effect on those pages is unmeasured rather than measured. Round 3 is
   the first round to get live batch context. Step 10a is now the only tier that
   reads those three pairs against their siblings.
3. Step 8 for **batch 1** (the real-analysis pages), once they are authored.
   Batch 2's step 8 is in flight; see above.
4. Step 9 seam audit and step 10a level audit — **resume Alpha-9**, agent
   `ae085501642ff3e01`, which already carries this level's context.
5. Step 10b scope-denial sweep of the published corpus. **Do not run it by
   grep — see below.**
6. Step 10c rundown, then **stop**.

## Step 10b: why a regex sweep is not enough, measured

I probed the published corpus for scope-denial claims level 9 falsifies, using
the phrasings the step-8 brief names: `not (developed|proved|available|
established|defined|introduced) (here|in this library|at this point)`, `this
library does not`, `is not available`, `does not develop`, `not yet …`. That
matched 157 published items; narrowing to level-9 topics left 80 items and 14
actual sentences. **All 14 survive**, because each uses the order-relative
phrasing and sits at a strictly earlier order than the page that supplies the
machinery — items at orders 68/69 denying dimension (arrives at 70), one at 105
denying the mean value theorem (131), one at 123 denying one-sided limits of
monotone functions (129).

That reads like a clean sweep and **it is not one.** The same regex misses both
amendments already staged in `level9-mixed-published-amendments.md`, which
Beta-9-2 found by reading:

- `rem-choice-ledger`: *"Neither direction is proved here, and no item derives
  either."* — "neither … proved here", not "not proved here".
- `ex-p-adic-ultrametric`: *"neither of which this item develops or assumes."* —
  no denial keyword at all in the matched form.

So the real defect class is a claim about **what the library does not contain**,
written in whatever English the author reached for, and no pattern enumerates
that. Use a reading agent at step 10b, and give it those two sentences as recall
tests: a sweep that does not rediscover both is not measuring what it claims to.

The order-relative convention IS working, though — every item that used it
survived, which is the whole point of having adopted it.

## Owner decisions taken at step 3 — do not re-open

- basis id is **`def-linear-basis`**, not `def-basis` (follows level 8's
  `def-linear-subspace`; the unqualified name belongs to topology);
- both published items this level falsifies are **staged, not applied** —
  `research/level9-mixed-published-amendments.md`;
- the **Blass converse** stays as prose + `sources.references`, no
  `external_refs`, nothing resting on it;
- page 129 **keeps all 32 items**; the `size` warning stands rather than trimming;
- four items carry an explicit **defer licence** if the proof does not come out:
  `thm-darboux-equals-riemann` (hardest in the batch),
  `thm-continuity-set-realisation`, `thm-baire-one-continuity-points`,
  `ex-conway-base-13-function`. Defer with a recoverable note, never delete.

## Open items for the OWNER, not for me

- **A missing reusable lemma:** "a positive integer $x$ satisfies $x \ge 1$" is
  re-derived inline in ~12 items and exists as no citable statement. A one-line
  lemma on page 22 would serve the whole number-theory track — but page 22 is
  published, so it is an amendment, not my call.
- **`redundant-prereq` pruning** deferred: `requires` carries entries reachable
  transitively. Warnings only, and page-level Prerequisites render from the item
  closure rather than from `requires`, so pruning changes nothing a reader sees.
- **Tom's track is in no spec at all** — 12 pages, prose only, invisible to every
  level computation and gate. ST-1 is buildable today. Orders 185/187/197 collide
  with published pages because his renumber (TS-D2) was never applied, and FG-1/2
  at 56/58 sit inside the band `LEVELS.md` reserves for Sylow and Galois.

## Judge measurement this level

Round 1 produced **3 rejections, all 3 true positives**, against a measured
21-24% precision prior — the level-8 pre-context sweep returned 58 accepts and
zero rejections. Too small a sample to restate the prior; worth watching.

The one that matters: `thm-dimension-formula`'s `[L5]` restated its source while
dropping "Assume the Axiom of Choice", making the fact stronger than the item it
cited. That is the dominant defect class in this library.
