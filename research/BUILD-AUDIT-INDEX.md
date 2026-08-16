# Build and audit index

The concise standing record of every dependency-level build and every
published-page audit wave: what it covered, what it cost in judge calls, what it
found, and **where its evidence lives**. Written 2026-08-10, when the raw
dispatch transcripts were compressed and untracked; this file exists so that
compression never costs a future session the ability to answer "what happened in
wave 7?" without unpacking 742 MB.

It is a pointer index, not a replacement for the ledgers. The ledgers named in
each row remain tracked, uncompressed and authoritative. Where this file and a
ledger disagree, the ledger wins.

Library at time of writing: **2859 item files, 2808 published, 195 pages.**

## Where the evidence lives

| artifact | path | state |
|---|---|---|
| judge verdict ledger | `research/<run>-judge.jsonl`, `research/audit/wave<k>-judge.jsonl` | tracked, plain |
| judge adjudications | `research/<run>-judge-adjudications.jsonl`, `research/audit/wave<k>-judge-adjudications.jsonl` | tracked, plain |
| provenance ledger | `research/audit/wave<k>-<category>.provenance.jsonl` | tracked, plain |
| Alpha reports, findings, decisions | `research/**/*-alpha.md`, `*.findings.md`, `*-step*-decisions.md` | tracked, plain |
| proof contracts, impact audits, risk reports | `research/**/*-proof-contracts.json`, `*-impact-audit.json`, `*-risk-report.json` | tracked, plain |
| **raw dispatch transcripts** | `research/**/*-dispatch/<role>-<label>.log.gz` | **on disk gzipped, untracked** |
| **touch snapshots (concluded)** | `research/**/*-touches.json.gz` | **on disk gzipped, untracked** |
| touch snapshots (halted waves 4, 5) | `research/audit/wave{4,5}-touches.json` | tracked, plain, for resume |

Read a compressed transcript with `zless`, `zcat`, or `zgrep`; nothing in
`tools/` reads one programmatically. Recover any historical byte from git:

```
git show <commit>:research/audit/wave<k>-dispatch/<role>-<label>.log
git log --all --oneline -- 'research/audit/wave7-dispatch/*'
```

Every log ever committed remains in history and on `origin`. Untracking removed
them from the current tree only.

## Builds

Dependency-level builds, steps 0 to 10 per `LEVELS.md`. `fatal` counts
`confirmed_fatal` adjudications; a zero in an early run means the adjudication
ledger postdates it, not that the run was clean.

| run | dates | judge verdicts | adjudications | fatal | notes |
|---|---|---|---|---|---|
| `level8` | 2026-07-26..28 | — | — | — | predates the paired-judge ledger |
| `level7-algebra` | 2026-07-27 | 49 | — | — | algebra track, order 20 |
| `level8-algebra` | 2026-07-27..28 | — | — | — | 998 items / 54 pages |
| `level9` | 2026-07-27..08-04 | 58 | — | — | |
| `level9-mixed` | 2026-07-28 | 210 | — | — | |
| `frontier-1` | 2026-07-28..29 | 299 | — | — | |
| `frontier-2` | 2026-07-29 | 233 | — | — | |
| `erdos-cycle-1` | 2026-07-31 | 329 | — | — | see `ERDOS.md` |
| `frontier-4-topology` | 2026-07-31 | 249 | — | — | |
| `frontier-3` | 2026-08-01 | — | — | — | |
| `frontier-5` | 2026-08-01 | 142 | 55 | 25 | first run with an adjudication ledger |
| `frontier-6` | 2026-08-01 | 931 | 401 | 129 | highest fatal density of any build |
| `frontier-7` | 2026-08-02 | 398 | 157 | 25 | proof contracts, spine audit, impact audit |
| `frontier-8` | 2026-08-02 | 3326 | 905 | 106 | largest build; 5 batches, repeated repair rounds |
| `frontier-9` | 2026-08-03 | 547 | 28 | 0 | published-dependency-repairs ledger |
| `zfc` | 2026-08-07 | 281 | 16 | 6 | |

## Audit waves

Published-page retro-audits, steps A0 to A10 per `AUDIT-WORKFLOW.md`. `items` is
the provenance-ledger row count (items retro-tagged). Note the deliberate shape:
verdicts per item fall sharply after wave 5, when A7 narrowed from a whole-wave
sweep to a targeted rejudge of the exact A4/A6 repair ids.

| wave | dates | scope | items | judge verdicts | adjudications | fatal |
|---|---|---|---|---|---|---|
| 0 | 08-02..03 | abstract-algebra, combinatorics, foundations, linear-algebra, number-theory, real-analysis-cauchy, real-analysis-dedekind, topology | 287 | 592 | 64 | 7 |
| 1 | 08-03 | abstract-algebra, combinatorics, foundations, linear-algebra, number-theory, real-analysis, topology | 296 | 1216 | 134 | 5 |
| 1b | 08-03 | wave-1 follow-up | — | — | 108 | 20 |
| 2 | 08-03..04 | combinatorics, foundations, number-theory, real-analysis, topology | 258 | 575 | 146 | 0 |
| 3 | 08-04 | combinatorics-graphs, combinatorics-incidence, foundations, real-analysis, topology | 224 | 456 | 121 | 4 |
| 4 | 08-04..05 | foundations, real-analysis, topology | 91 | 343 | 25 | 7 |
| 5 | 08-04..06 | real-analysis, topology-countability, topology-function-spaces, topology-separation | 209 | 776 | 114 | 10 |
| 6 | 08-06..08 | real-analysis-laurent, real-analysis-limits, topology | 126 | 131 | 10 | 2 |
| 7 | 08-06..09 | real-analysis-completeness-limits, real-analysis-series, topology-separation-urysohn, topology-uniform | 215 | 126 | 40 | 4 |
| 8 | 08-06..09 | real-analysis-absolute-convergence, real-analysis-cantor-continuity, topology | 139 | 36 | 8 | 1 |
| 9 | 08-06..09 | real-analysis | 43 | 12 | 3 | 1 |
| 10 | 08-06..09 | real-analysis | 57 | 8 | 3 | 0 |
| 11 | 08-06..10 | real-analysis | 61 | 36 | 12 | 1 |
| 12 | 08-06..10 | real-analysis | 61 | 116 | 44 | 5 |
| 13 | 08-06..10 | real-analysis | 76 | 12 | 3 | 0 |
| 14 | 08-06..10 | real-analysis | 25 | 26 | 10 | 3 |

Waves 4 and 5 carry `halted` run-state files (`research/audit/wave{4,5}-run-state.json`);
both were subsequently concluded by hand, and later waves proceeded past them.
Waves 6 and 7 carry `complete` run-state. Waves 11 through 14 were concluded in
commit `9db25e1f`.

**Totals across all waves: 2168 items retro-tagged, 4461 judge verdicts, 845
adjudications, 100 confirmed-fatal findings** (an earlier hand-typed total here
said 70 while the wave ledgers alone hold 100 — e.g. wave 2's row said 0 against
30 `confirmed_fatal` rows in its own ledger; counted 2026-08-16). Per-defect
statistics now live in `research/defect-ledger.jsonl`, and
`research/DEFECT-LEDGER.md` is generated from it — prefer both over any
hand-maintained number in this file.

## Maintaining this file

Add a row when a build or wave concludes, in the same commit that concludes it —
the same rule `CLAUDE.md` applies to the normative docs. Keep it a pointer index:
counts and locations, never the findings themselves, which belong in the Alpha
reports and ledgers.
