# Wave 3 — A0 batch, baseline and seam report

Run 2026-08-04 by the orchestrator from baseline commit `136fb35` (wave 2
shipped at `a214a80`; `0ca9ad6` merged `feat/unattended-build-workflow`;
`136fb35` pruned wave 2's per-item touch snapshots). Computed from disk with
`rounds.mjs --audit-batches`, never from the wave-2 plan.

## Scope of record

`rounds.mjs --audit-batches --wave 3 --outdir research/audit` emitted four
category manifests: **12 pages · 8 A/B pairs · 224 items · 174 proof-bearing.**
62 already-tagged items were excluded mechanically at generation (owner rule
2026-08-02, R3).

**Corrected 2026-08-04 at A3.** This report first said 161 proof-bearing,
counting only `## Proof`, `## Verification` and `## Refutation` sections. The
`combinatorics-graphs` Beta pointed out that `QUALITY-CONTROLS.md` explicitly
puts proof-bearing counterexamples in contract scope, and it is right: 13 items
carry a numbered `## Counterexample` section instead. Recounted from disk,
**161 → 174**, per batch below. Contract scope is 174.

The combinatorics manifest held **three** A/B pairs, over the two-pair Beta
capacity cap, so it was split into two batch files before dispatch. The wave
therefore runs as **five** Audit-Betas:

| batch | pages | items | proof-bearing (P/V/R) | contract scope (incl. counterexample) |
|---|---|---|---|---|
| `wave3-combinatorics-graphs` | `induced-subgraphs-and-hereditary-graph-classes` (23) + `-examples` (12); `trees-forests-and-spanning-trees` (27) + `-examples` (12) | 74 | 53 | **59** |
| `wave3-combinatorics-incidence` | `incidence-algebras-and-mobius-inversion` (26) + `-examples` (8) | 34 | 19 | **22** |
| `wave3-real-analysis` | `countability-and-uncountability` (22); `roots-and-rational-powers` (22) | 44 | 35 | **35** |
| `wave3-foundations` | `ordinal-arithmetic` (28) + `-examples` (8) | 36 | 28 | **29** |
| `wave3-topology` | `connectedness` (28) + `-examples` (8) | 36 | 26 | **29** |
| **total** | | **224** | 161 | **174** |

**The split is free.** The three combinatorics pairs have **zero cross-pair
dependency edges** — measured from the item `deps` before splitting — so no
Beta loses context another holds. The mechanical confirmation is that the
manifest's `cross-batch` count is **58 both before and after** the split.

Item kinds across the wave: 43 theorem, 40 lemma, 40 definition, 31 example, 22
false-statement, 16 corollary, 13 counterexample, 5 remark.

**Every wave-3 in-scope page is 100% untagged** — 0 items excluded on any of the
twelve — so the manifest counts are the true reading load, with no partially
audited page.

### Where the 62 excluded items are

They are not omissions from the pages above. They are whole pairs at dependency
level 3 that dropped out because *every* item on them is already tagged:

| category | level-3 pairs | in scope | dropped whole-pair |
|---|---|---|---|
| `abstract-algebra` | 1 | 0 | `group-homomorphisms-and-the-isomorphism-theorems` (25 items) |
| `combinatorics` | 5 | 3 | `eulerian-and-hamiltonian-graphs` (31), `graph-colouring` (6) |
| `foundations` | 1 | 1 | — |
| `real-analysis` | 2 | 2 | — |
| `topology` | 1 | 1 | — |

25 + 37 = 62, reconciled exactly against the tool's count.

## Two structural facts about this wave

**`countability-and-uncountability` and `roots-and-rational-powers` have no
`-examples` companion published** — the files do not exist on disk. Their A7
judge context unit is the A page alone, as `ordinals-and-transfinite-recursion`
was in wave 2. This is a fact about the corpus, not a missing file, and it is
why `wave3-real-analysis` is two A pages rather than one pair.

**Wave 3 completes the `combinatorics` category.** There is no level-4-or-later
combinatorics batch. `foundations` completes at wave 4. From wave 5 onward only
`real-analysis` and `topology` remain.

## Seams: markedly better than wave 2

Wave 2 carried 123 edges into pages up to 13 waves later. Wave 3 carries **33**.
Of the 95 dependency edges leaving in-scope items for untagged targets, **58
resolve inside wave 3 itself**:

| batch | pending edges | destinations |
|---|---|---|
| `wave3-foundations` | 29 | all → `countability-and-uncountability`, **in this wave** |
| `wave3-combinatorics-*` | 9 | all → `countability-and-uncountability` (8), `roots-and-rational-powers` (1), **in this wave** |
| `wave3-real-analysis` | 4 | `deferred-set-theory-beyond-choice` — the permanently excluded ‡ tier |
| `wave3-topology` | 53 | 20 in this wave (`countability-and-uncountability` 12, `ordinal-arithmetic` 8); **33 later**: `monotone-sequences-and-cauchy-completeness` (18, w5), `topology-of-r` (12, w6), `rn-as-a-normed-space` (2, w12), `sequences-and-limits` (1, w4) |

**0 dangling deps corpus-wide.**

Only topology's 33 forward-pointing edges remain as a named A6 obligation for
Alpha, against wave 2's 123. What the audit still gets on them is the
citation-precision check — whether the target *states* what the citing step
claims — which is valid against an unaudited target. What it does not get is any
assurance the target itself is correct. Recorded here so waves 4–12 re-check
them rather than rediscovering them.

**Dispatch order.** All five Betas run in parallel, as in waves 1b and 2. The
in-wave seam concentration would also permit serialising `wave3-real-analysis`
first, so that 49 in-wave edges checked against it would land on audited text;
that was declined because the A1/A2 citation-precision check does not depend on
the target being audited, and serialising a batch costs wall-clock on every
other batch.

## Generated artifacts and baseline

- `research/audit/wave3-touches.json` — `touchlog snap … "baseline"`, 2,767
  items, 1 snapshot.
- `research/audit/wave3-audit-manifest.json` — 1,687 edges: **956
  published-backward, 669 same-batch, 58 cross-batch, 4 forward**.
- `research/audit/genrisk.json` — regenerated corpus-wide: **54 seeds, 10
  load-bearing, largest cone 9** (`rem-compactness-choice-ledger-metric`). All
  ten already carry a wave-1/1b/2 Alpha disposition, preserved by seed id. No
  wave-3 item is a seed yet, because a seed is a *tagged* `ai-generated`
  statement; genrisk is regenerated after A4, when this wave's tags exist.

**Pre-audit gate baseline, all passing** — recorded so any regression during
A4/A6/A8 is attributable to this wave rather than inherited (the wave-2 lesson:
attribute a regression by re-running the gate at the old commit, never by
"this stage touched the file"):

```
depcheck    exit 0    no cycles, all references resolve, no draft items on published pages
citecheck   exit 0
fwdcheck    exit 0
extcheck    exit 0
rendercheck exit 0    real KaTeX
prosecheck  exit 0
depsource   exit 0    16,177 deps link to a published page, 0 unresolved
```

## Rules in force this wave, changed since wave 2

**`step8-guard.mjs` binds from this wave onward.** A8 is fatal-only and now
mechanically enforced: Alpha snapshots `pre-a8` before adjudicating, every
adjudication row carries `item_sha256` of the normalized pre-edit text, and only
a `confirmed_fatal` row licenses an edit. Wave 2's ledger predates the field and
is deliberately left unhashed rather than backfilled — hashes computed now would
attest to post-repair text, which is fabricated attestation.

**Audit Alpha is `claude-opus-5`**, dispatched as an Anthropic subagent.
Audit-Beta, independent readers and proof-refuters remain GPT 5.6 Sol at `xhigh`
with a 1,000,000-token context window, so every certifier of an Alpha-authored
repair is a different family from Alpha. Judge lanes unchanged
(`JUDGE_LINEUP=deepseek+terra`, pools 24+16).

**Carried from the wave-2 owner queue** (`wave2-A10.md` §8), unresolved and
re-raised at this wave's A10: the `thm-metric-sequential-closure` rider; the
never-run `level-coverage --audit --verify-current-context` receipt; link
liveness as a gate; the Beta/certifier sandbox DNS failure that forced wave 2's
`established-knowledge` waivers; and the `σ(n)` convention line in
`briefs/judge-conventions.txt` that caused 6 of 9 Terra false positives.
