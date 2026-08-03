# Wave 2 — A0 batch, baseline and seam report

Run 2026-08-03 by the orchestrator from baseline commit `720c747` (wave 1b
shipped at `87236c1`). Computed from disk with `rounds.mjs --audit-batches`,
never from the wave-1b plan.

## Scope of record

`rounds.mjs --audit-batches --wave 2 --outdir research/audit` emitted five batch
manifests: **5 batches · 15 pages · 8 A/B pairs · 258 items · 175 proof-bearing**.
31 already-tagged items were excluded mechanically at generation (owner rule
2026-08-02, R3).

| batch | pages | items |
|---|---|---|
| `wave2-combinatorics` | `chains-antichains-sperner-and-dilworth` (32) + `-examples` (8); `graphs-walks-and-connectivity` (35) + `-examples` (8) | 83 |
| `wave2-topology` | `compactness-in-metric-spaces` (26) + `-examples` (11); `subspaces-products-and-quotients` (24) + `-examples` (13) | 74 |
| `wave2-foundations` | `filters-and-ultrafilters` (12) + `-examples` (8); `ordinals-and-transfinite-recursion` (23, **no B page**) | 43 |
| `wave2-number-theory` | `congruences-and-the-chinese-remainder-theorem` (23) + `-examples` (10) | 33 |
| `wave2-real-analysis` | `suprema-and-infima` (17) + `-examples` (8) | 25 |

Every wave-2 page is **100% untagged** — the wave contains no partially audited
page, so the manifest counts are the true reading load. Item kinds: 54 theorem,
51 definition, 49 lemma, 39 example, 26 counterexample, 21 false-statement,
12 corollary, 6 remark.

Each batch is at or under the two-pair Beta capacity cap, so the wave dispatches
as exactly five Audit-Betas with no batch split.

**Waves 0 and 1 emit no manifest at all.** That is the mechanical confirmation
that both are fully tagged and permanently out of scope, not an omission.
`abstract-algebra`, `linear-algebra` and `not-proved-here` are now complete
categories; `number-theory` completes with this wave.

## Baseline and generated artifacts

- `research/audit/wave2-touches.json` — `touchlog snap … "baseline"`, 2,767 items,
  1 snapshot.
- `research/audit/wave2-audit-manifest.json` — 1,754 edges: **1,020
  published-backward, 662 same-batch, 50 cross-batch, 22 forward**.
- `research/audit/genrisk.json` — regenerated corpus-wide: 45 seeds, 8
  load-bearing, largest cone 3 (`cex-progressive-map-without-fixed-point`).

## The wave's structural hazard: topology's unaudited real-analysis seams

Seam analysis over the in-scope items: **0 dangling deps** corpus-wide, 659
in-batch edges, 871 into already-audited (tagged) targets, and **190 into targets
that are not yet audited**. That 190 is concentrated almost entirely in one batch:

```
wave2-topology     228 in-batch   498 -> audited   172 -> PENDING
```

Of topology's 172 pending edges, only 49 resolve inside wave 2 itself
(`suprema-and-infima` x47, `filters-and-ultrafilters` x2). The other **123 point
into real-analysis pages sitting at waves 3, 4, 5, 7 and 8** — that is, pages
that will be audited *later*:

| target page | wave | edges |
|---|---|---|
| `countability-and-uncountability` | 3 | 41 |
| `monotone-sequences-and-cauchy-completeness` | 5 | 31 |
| `sequences-and-limits` | 4 | 20 |
| `roots-and-rational-powers` | 3 | 15 |
| `series-and-nonnegative-tests` | 7 | 11 |
| `limits-of-real-functions` | 7 | 3 |
| `cantor-set-baire-and-measure-zero` | 8 | 2 |

This is not a tool defect. Waves are **category-local** by construction
(`AUDIT-WORKFLOW.md` §4), so a topology page at level 2 carries no guarantee that
its cross-category dependencies have been verified. What the audit still gets on
those 123 edges is the citation-precision check — whether the target *states*
what the citing step claims — which is valid against an unaudited target. What it
does not get is any assurance the target itself is correct.

**Disposition: run wave 2 as computed**, and carry the 123 edges as a named A6
obligation for Alpha rather than reordering the wave plan. Draining the
real-analysis spine first would delay topology by 13 waves (44 pages / 725 items)
to buy a guarantee that the A6 check does not actually depend on. Recorded here
so a future wave re-checks these edges rather than rediscovering them.

Nine `wave2-foundations` edges point at `deferred-set-theory-beyond-choice`, a
`not-proved-here` catalogue page permanently excluded from audit scope by owner
instruction. Those are the fuchsia double-dagger tier and are legitimate
citations; they will never carry an audit provenance tag.

`ordinals-and-transfinite-recursion` has no `-examples` companion on disk, so its
judge context unit at A7 is the A page alone rather than an A/B pair. That is a
fact about the corpus, not a missing file.

## Model change in force from this wave

Audit **Alpha is `claude-opus-5`** (owner, 2026-08-03), dispatched as an
Anthropic subagent of the orchestrator rather than through Codex. Audit-Beta,
independent readers and proof-refuters remain GPT 5.6 Sol at `xhigh` with a
1,000,000-token context window; keeping the readers on Sol is deliberate, since
it leaves every certifier of an Alpha-authored repair in a different family from
Alpha. Judge lanes are unchanged (`JUDGE_LINEUP=deepseek+terra`). No injection
test was required: that bar governs judge lanes, which return a mechanical
verdict, not adjudicators whose findings are re-checked by readers and gates.

Measured while dispatching: `codex exec` has the web-search tool **on by
default**, so the Sol Betas' literature search is not silently disabled. It is
nonetheless passed explicitly (`-c tools.web_search=true`), because the wave-1b
Terra defect was exactly an implicitly inherited setting that turned out not to
be inherited.
