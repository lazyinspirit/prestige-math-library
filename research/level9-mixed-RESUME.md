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

**STOP at the rundown (now step 10b). Do NOT publish.** Flipping `status: published` and
setting `verification.audited` are the owner's alone.

**Use `dangerouslyDisableSandbox: true` on Bash.** An overnight run stalled
entirely on sandbox-escalation prompts the owner was not there to approve. Their
`.claude/settings.local.json` already allows all Bash; the prompts were sandbox
escalations, not permission denials.

**The owner can message a background agent directly, and I cannot see it.** See
the memory `owner-channels-to-subagents`. Never allege fabricated approval; ask.

## Build state — ALL AUTHORING COMPLETE

| round | pages (by id) | status |
|---|---|---|
| 1 | primes+FTA, linear-independence | **DONE, committed** (`ad04db1`, `8994e16`) — 55 items |
| 2 | monotone-functions-and-discontinuities | **DONE, committed** (`0c465de`) — 43 items |
| 3 | derivative+MVT, riemann-integral | **DONE, committed** (`6fbebad`, `edc800a`) — 57 items |

**155 items, five A/B pairs, all `status: draft`. Nothing published.**

Three authoring rounds because the five pairs sat at four computed dependency
levels: monotone-functions depends on linear-independence, and both the
derivative and the integral depend on monotone-functions. That is a real edge
set, not a batching cap — the owner removed the cap on 2026-07-28 (`LEVELS.md`
step 5, one round per level).

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

Step 8 for the three real-analysis pairs, one auditor per pair. The number-theory
and linear-algebra pairs were audited earlier and are committed (`2d22539`).

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

1. Commit the three real-analysis step-8 audits.
2. ~~Re-judge rounds 1-2 with full `--batch` context.~~ **CANCELLED by the owner,
   2026-07-28: "Don't rejudge rounds 1 and rounds 2 again. We'll audit everything
   at step 10a anyway."** Do not re-add this. (Step 10a is now **step 9** — the
   seam stage was removed the same day and the final audit renumbered.)

   The reasoning is sound: measured judge precision here is 21-24%, and
   re-judging risks the treadmill documented in `parallel-authoring-protocol`,
   where a rejection is not evidence of a defect and the objection rotates
   between runs.

   **What it costs, recorded so nobody later overstates the evidence:** rounds 1
   and 2 were judged with the `--batch` block INERT — four of five level slugs
   had no page file at judge time, and the round-2 agent reported the warning on
   all 44 of its calls. Round 3 was the first to get live batch context, and even
   there the budget dropped the cited page for the two longest items. **So no
   model tier has ever read these five pairs against each other.** Step 9 is the
   only tier that will.
3. **Step 9** — the final whole-level Alpha-n audit (was 10a). Resume Alpha-9,
   agent `ae085501642ff3e01`, which carries this level's context.
4. **Step 10a** scope-denial sweep of the published corpus. **Do not run it by
   grep — see below.**
5. **Step 10b** rundown, then **stop**.

## Step 10a (was 10b): why a regex sweep is not enough, measured

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

---

## Orchestrator's personal audit of the escalation set (2026-07-28)

`LEVELS.md` §escalation: an item **refuted OR repaired more than once** is
audited by the orchestrator personally. Ten level-9 items crossed that line.

**First, the count needed deflating.** Six of the ten reached two touches through
a **batch cosmetic sweep** — a garbled "on the companion examples page" clause
deleted from eight items in one commit — not through two substantive repairs.
Measuring post-authoring diffs separates them:

| item | post-authoring change | substantive? |
|---|---|---|
| `thm-discontinuity-set-is-f-sigma` | +31 −19 | **yes — a new Statement claim** |
| `def-monotone-function` | +24 −5 | yes (judge-caught dictionary) |
| `thm-dimension-formula` | +15 −11 | yes (choice-free rewrite) |
| `thm-continuous-injection-…` | +11 −14 | **yes — proof steps restructured** |
| the other six | ≤ 9 insertions | no — the cosmetic sweep |

**Two of the four had already been independently read** — `def-monotone-function`
by the step-8 auditor that verified its witness, `thm-dimension-formula` by the
linear-algebra auditor claim by claim. **The other two were changes a step-8
auditor made ITSELF, so nobody had read the new text.** That is exactly the
standing lesson that a repair is new text and needs the scrutiny of the text it
replaced. Both audited here, by hand.

### `thm-discontinuity-set-is-f-sigma` — claim 1 is sound

The repair added a **new claim to a Statement**, which is the fatal class if the
proof does not give it. It does. Step 1.2 gives $D = \{\omega_f > 0\}$; steps 2.1
and 2.2 give the two inclusions; step 1.1 identifies $A \cap G_n$ with the
superlevel set at threshold $\varepsilon_n = 1/\iota(n+1)$, so the union identity
follows. Checked specifically:

- **first index**: $\varepsilon_0 = 1/\iota(1) = 1$, and step 2.1 splits on
  $\omega_f(x) \ge 1$ versus $0 < \omega_f(x) < 1$, so $n = 0$ is a real case and
  not an off-by-one;
- **$\omega_f(x) = +\infty$** (the oscillation is extended-real-valued) satisfies
  $\omega_f(x) \ge \varepsilon_0$, so it lands in $G_0$ rather than escaping the
  union;
- **"increasing"** is proved, not asserted: $n \le m \Rightarrow \varepsilon_m \le
  \varepsilon_n$, so the superlevel sets grow with $n$.

### `thm-continuous-injection-…` — the restructured case split is exhaustive

Step 6.2 used to open with variables first bound two steps later. The repair gave
each step its own hypothesis. Verified that the trichotomy in step 8.1 still
covers every pair $c < d$ in $I$: $a \le c$ → 7.1; $c < a$ with $d \le a$ → 6.2;
$c < a < d$ → 7.2. Each branch's hypothesis matches its step's opening exactly
(6.2's "$c < d \le a$" implies $c < a$ on its own, so no case is orphaned), and
each branch is grounded — 5.1 gives $f(x) < f(a)$ for $x < a$, 6.1 gives
$f(x) > f(a)$ for $x > a$, both proved from the three-point claim with their own
sub-cases exhausted.

**Verdict: both repairs are correct. No further escalation.** The remaining six
are cosmetic-sweep artefacts and need no personal audit; recorded so a later
reader does not re-derive that conclusion.
