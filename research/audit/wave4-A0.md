# Wave 4 — A0 batch, baseline and seam report

Computed 2026-08-04 by the orchestrator from baseline commit `40f2aac`
(`5b64265` shipped wave 3; `40f2aac` fixed two published pages whose frontmatter
did not parse). Working tree clean at computation, 0 unpushed commits.
Scope read from disk with `rounds.mjs --audit-batches`, never from the wave-3
plan.

## Scope of record

`node tools/rounds.mjs --audit-batches --wave 4 --outdir research/audit` emitted
three category manifests: **5 pages · 3 A/B pairs · 91 items · 75 proof-bearing
(P/V/R) · 77 in contract scope.** 83 already-tagged items were excluded
mechanically at generation (owner rule 2026-08-02, R3).

| batch | pages | items | P/V/R | contract scope |
|---|---|---:|---:|---:|
| `wave4-foundations` | `cardinal-arithmetic-and-cofinality` (26) + `-examples` (8) | 34 | 29 | **29** |
| `wave4-real-analysis` | `sequences-and-limits` (18) | 18 | 15 | **15** |
| `wave4-topology` | `compactness` (31) + `-examples` (8) | 39 | 31 | **33** |
| **total** | **5** | **91** | 75 | **77** |

Contract scope exceeds P/V/R by the two items carrying a numbered
`## Counterexample` section instead (both on `compactness-examples`), which
`QUALITY-CONTROLS.md` puts in contract scope — the wave-3 recount, applied here
from the start.

**No batch split is needed.** Every manifest holds at most one A/B pair, well
inside the two-pair Beta capacity cap. The wave runs as **three Audit-Betas**,
one per category, concurrently.

`real-analysis/sequences-and-limits` has **no `-examples` companion on disk**.
`rounds.mjs --pairs` reports it `published/not-building` — one of the four A
pages whose B companion the owner said (2026-07-28) is never being built. The
single-page batch is correct, not a truncation.

Item kinds across the wave: 26 theorem, 19 lemma, 14 example, 12 false-statement,
11 definition, 4 corollary, 3 remark, 2 counterexample.

| batch | kinds |
|---|---|
| `wave4-foundations` | 9 theorem, 8 example, 5 lemma, 4 definition, 4 false-statement, 3 corollary, 1 remark |
| `wave4-real-analysis` | 10 lemma, 3 false-statement, 2 definition, 2 theorem, 1 remark |
| `wave4-topology` | 15 theorem, 6 example, 5 definition, 5 false-statement, 4 lemma, 2 counterexample, 1 corollary, 1 remark |

**Every wave-4 in-scope page is 100% untagged** — 0 items excluded on any of the
five — so the manifest counts are the true reading load, with no partially
audited page. Verified by re-running scope generation with the tagged-item
exclusion disabled and counting tagged items per page.

### Where the 83 excluded items are

They are not omissions from the pages above. They are whole pairs at
site-parity dependency level 4 that dropped out because *every* item on them is
already tagged:

| category | level-4 pairs | in scope | dropped whole-pair |
|---|---|---:|---|
| `abstract-algebra` | 4 | 0 | `cyclic-groups-and-direct-products` (8), `free-groups-and-presentations` (7), `group-actions-and-cayleys-theorem` (7), `ideals-and-quotient-rings` (30) |
| `combinatorics` | 1 | 0 | `matchings-covers-menger-and-network-flows` (31) |
| `foundations` | 1 | 1 | — |
| `real-analysis` | 1 | 1 | — |
| `topology` | 1 | 1 | — |

52 + 31 = 83, reconciled exactly against the tool's count.

`abstract-algebra` and `combinatorics` leave audit scope permanently at this
wave: neither appears in any manifest at wave 4 or beyond. With
`linear-algebra` and `number-theory` already out, **waves 5 to 14 are
`real-analysis` and `topology` only**, and `foundations` completes here.

## Seams

`node tools/audit-manifest.mjs research/audit/wave4-*.pages.json --output
research/audit/wave4-audit-manifest.json`:

| relationship | count |
|---|---:|
| published-backward | 841 |
| same-batch | 364 |
| **cross-batch** | **12** |

All twelve cross-batch edges point into **`real-analysis/sequences-and-limits`**,
at exactly two targets:

| target | in-edges | sources |
|---|---:|---|
| `def-sequence` | 9 | `compactness` ×8, `cardinal-arithmetic-and-cofinality-examples` ×1 |
| `lem-index-map-grows` | 3 | `compactness` ×3 |

Named: `def-compactness-variants`, `thm-compactness-variants-hierarchy`,
`lem-dependent-choice-along-a-sequence-of-relations`, `def-baire-space`,
`thm-baire-category-locally-compact-hausdorff`, `thm-ordinal-spaces-and-compactness`,
`fs-compact-implies-sequentially-compact` (all `compactness`), and
`ex-the-cardinality-of-the-continuum` (`cardinal-arithmetic-and-cofinality-examples`).

The seam is unusually narrow and unusually concentrated: the 18-item
`sequences-and-limits` batch supplies the subsequence vocabulary that the
compactness hierarchy is stated in. Its Beta finishes first (smallest batch) and
its two exported definitions carry the whole cross-batch load, so an imprecise
restatement of either propagates into eleven `compactness` proofs. A6 audits all
twelve edges against `wave4-audit-manifest.json`.

## Baseline

- `tools/touchlog.mjs snap research/audit/wave4-touches.json baseline` — recorded
  at 2767 items, 1 snapshot in the ledger. **Re-snap if anything changes before
  A4**; `impact-audit --from pre-A4` is only as honest as this baseline.
- `research/audit/genrisk.json` regenerated at this baseline and **unchanged**:
  56 seeds, 0 added, 0 removed, 0 cone or disposition changes, and **0
  load-bearing seeds pending a disposition**. The committed file (with wave-2
  Alpha's `unfold` dispositions intact) is retained rather than rewritten with a
  fresh timestamp.

## Gates

`node tools/gates.mjs --audit --step A0 --run wave4` — **STEP A0 CLEAR, 9 of 9**,
after the gate-table repair recorded below.

`precheck` (2111 checked, 0 failing), `depcheck`, `fwdcheck`, `extcheck`,
`rendercheck` (including the new YAML frontmatter pass), `prosecheck`,
`citecheck`, `depsource` (16177 deps resolved, 0 unresolved),
`content-policy` (91 scoped items, 0 errors, 0 warnings).

### The A0 gate row could not pass on any audit wave — fixed 2026-08-04

**First found here, and repaired before the wave started.** As shipped, the row
produced 95 errors on wave 4 and would have produced the same class on every
wave; `run-wave.mjs --wave 4` would have halted at A0 with `gate-failed`.

This row has never been executed against real audit manifests: the audit gate
table shipped in wave 3's own commit (`5b64265`), after wave 3's A0 had already
been run by hand. Wave 4 is the first wave that would reach it, and it fails by
construction:

- `batch-item-already-exists` (91 errors) — `--manifest-only` was written for a
  **future** build batch, where an id that already has a file is a collision. In
  an audit every scoped item is published by definition, so this fires on all 91.
- `batch-b-leaf-target` (4 errors) — the current build rule forbids a dependency
  edge into a B/examples item. Legacy published pages predate that rule:
  `ex-aleph-one-is-at-most-the-continuum`, `ex-the-beth-hierarchy-computed` and
  `ex-counting-functions-and-subsets-of-the-continuum` all cite
  `ex-the-cardinality-of-the-continuum`, and
  `ex-one-point-compactifications-of-the-line-and-of-the-naturals` cites
  `ex-compactness-in-the-standard-topologies`. These are findings for the audit
  to read, not gate failures — and the gate cannot distinguish them.

Worse, the row's stated purpose is void here. `gates.mjs` gives its `why` as
"the two-A/B-pair Beta capacity cap", but `content-policy.mjs` deliberately
exempts audit manifests from that cap (`if (!auditMode && aPages.length >
BATCH_A_PAIR_CAP)`, with the comment that an audit batch is a whole
category-level and the cap binds the Betas assigned inside it). Adding `--audit`
to the invocation therefore does not fix it: `auditMode` suppresses the one check
the row is there for, while `manifestOnly` keeps the two that misfire.

**Fix applied.** `content-policy.mjs` now accepts `--audit --manifest-only` (and
requires no `--ledger` in that shape, because manifest-only never opens an item
file), and under `--audit` it suppresses the three checks that ask whether a
batch may **mint** its ids: `batch-item-already-exists`, `batch-b-leaf-target`,
`batch-forward-dependency`. `gates.mjs` invokes the A0 row that way. Retained,
because they still mean something for an audit manifest: `batch-item-shape`,
`batch-duplicate-item` (one id claimed by two batches),
`batch-plan-id-collision`, `batch-dependency-missing` (a dangling `deps`
target).

Verified: wave-4 A0 goes 95 errors → 0; the **build** mode is untouched (the same
manifest through `--manifest-only` alone still reports all 37 of its errors);
the audit's `--audit --ledger` post-tagging mode still passes wave 3 at 224/0/0;
all 20 `run-wave.test.mjs` properties pass. `AUDIT-WORKFLOW.md`'s tool table was
updated in the same commit.

## Remaining pipeline after wave 4

17 batch manifests across waves 4–14, **1102 items** still in audit scope.

| wave | batches | items |
|---:|---|---:|
| 4 | foundations, real-analysis, topology | 91 |
| 5 | real-analysis (31), topology (178) | 209 |
| 6 | real-analysis (76), topology (50) | 126 |
| 7 | real-analysis (101), topology (113) | 214 |
| 8 | real-analysis (107), topology (32) | 139 |
| 9 | real-analysis | 43 |
| 10 | real-analysis | 57 |
| 11 | real-analysis | 61 |
| 12 | real-analysis | 61 |
| 13 | real-analysis | 76 |
| 14 | real-analysis | 25 |

**Wave 5 will need a split.** Its topology manifest holds 10 pages — five A/B
pairs — against a two-pair Beta cap, so it must be broken into at least three
batches before dispatch, the wave-3 combinatorics situation at larger scale.
Check the cross-pair edge count before and after, as wave 3 did, so the split is
demonstrably free.
