# Level 9 (mixed) — RESUME STATE, 2026-07-28

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
70/71 · `9575d7e` validate-plan b-leaf fix · `de155bc` extcheck ‡ load-bearing
fix · `91fbe8f` level-8 scope sweep · `70f6a3f` touchlog seed.

App repo (`prestige-intelligence`, branch `feat/reasoning-training-controls`):
`e846c9a` the ‡ chip load-bearing fix — **built and deployed and verified live**.

## In flight

- **Round-2 author** (pages 129/130).
- **LA author, resumed**: asked to make `thm-dimension-formula` **choice-free**
  and drop the AC declaration. It is stated for FINITE-dimensional subspaces,
  which need no choice; the agent's own Remark says the choice-free route was
  "sketched, not carried out"; and `thm-dimension-of-a-linear-subspace` on the
  same page is already routed choice-free. Told to refute me with a specific
  step if I am wrong rather than comply. Must also propagate to
  `cor-dimension-of-a-direct-sum` and the page-70 summary.

## Remaining work

1. Round 3 (131/132, 137/138) once 129 lands.
2. **Re-judge rounds 1-2 with full `--batch` context.** Round 1's batch context
   was largely INERT: four of five level slugs had no page file under `library/`
   at judge time, so they contributed nothing and `judge.mts` warned on stderr
   every call. Batch context only reaches pages already composed.
3. Step 8 per-batch audits (`briefs/beta-step8-audit.md`).
4. Step 9 seam audit and step 10a level audit — **resume Alpha-9**, agent
   `ae085501642ff3e01`, which already carries this level's context.
5. Step 10b scope-denial sweep of the published corpus.
6. Step 10c rundown, then **stop**.

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
