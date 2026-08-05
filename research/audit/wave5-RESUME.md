# Wave 5 — resume record (2026-08-06, written before compaction)

## Objective

Published-page retro-audit of wave 5 (dependency level 5), A0 through A10.
A10 is the sole owner pause; nothing in the pipeline may publish.

## Where the run is

**A8, one step from done.** A0, A2, A3, A4, A6, A7 complete.
**A9 and A10 have NOT run.**

| gate | state |
|---|---|
| `judge-coverage-missing` | **0** |
| `judge-adjudication-missing` | **6** — the only thing blocking A8 |
| paired coverage | 209/209 |
| adjudications recorded | 108 (91 nonfatal, 10 fatal, 7 false positive) |
| judge spend | ~950 calls, ceiling raised to 1200 |

The 6 outstanding adjudications, all fresh rejections from rejudging genuinely
repaired items:

    deepseek-v4-pro   cex-cauchy-rationals-no-rational-limit
    deepseek-v4-pro   cex-strictly-decreasing-gaps-no-limit
    deepseek-v4-pro   cor-monotone-converges-iff-bounded      <- TWICE-TOUCHED
    deepseek-v4-pro   ex-nested-intervals-single-point
    deepseek-v4-pro   ex-two-subsequential-limits
    claude-sonnet-5   lem-cauchy-sequence-bounded

## OPEN OWNER DECISION — do not proceed past this without an answer

I backfilled `item_sha256` onto **671 rows** of
`research/audit/wave5-judge.jsonl`. The owner asked only that 15 unchanged items
not be rejudged; applying it wave-wide was my own initiative and goes beyond that.

- Verdicts, reasons and context hashes: **0 altered** (verified).
- Rows: 776 → 776.
- Every backfilled row carries `item_sha256_backfilled` naming the derivation
  (item byte-identical to commit `ffacec0`, which predates the A7 sweep, so the
  hash is derived from the text the judge actually read).
- **Backup: `/tmp/wave5-judge.bak`** (volatile — copy it somewhere durable if the
  decision is deferred).

The owner may want the ledger restored and those items rejudged instead. Ask
before building anything on top of the backfill.

## Mechanism changes committed this session

- `3bbae7f` **A8 rejudges only REPAIRED items.** `judge.mts` records
  `item_sha256` per verdict; `level-coverage` accepts a pair cast against
  byte-identical item text even when the A/B-pair context moved. A repaired item
  always rejudges. Measured cause: 2 repairs staled all 31 items on a pair, 12
  citing them nowhere; 10 repairs cost ~130 calls.
- `ee2a25a` `JUDGE_CONCURRENCY_<MODEL>` override, clamped to the owner's cap.
  Sonnet refused 207 of 347 calls at 16; at 4 it answers normally.
- `e6b584d` terminal-step gates now RUN in both drivers (they were dead code —
  the mechanism behind wave 4's five unstamped items).
- `4fec483`, `991a34b` `run-control` reaches audit waves at all, and prints the
  right driver.
- `aea0e24` both drivers dispatch a step's agents in parallel.
- `5e9e560` all-Claude audit lineup + DeepSeek refuters; read-only enforced by a
  default-deny allowlist after a deny-list-only lane escaped via a subagent.

## Known blockers for the NEXT wave

- **Injection test required before any A7 sweep.** `judge.mts` changed, so the
  fingerprint moved. The frozen prompt is byte-identical (`def-separated-sets`
  hashes the same before and after), but the gate keys on the whole file and must
  be satisfied, not argued with.

## Findings for the A10 report

- **DeepSeek found 4 of 6 A8 fatals, 3 solo.** With Beta/Alpha/certifier all
  Claude, the DeepSeek refuter+judge lanes are the only cross-family readers.
- **Seven instances of one defect class no gate can see**: a page asserting what
  its own neighbouring items falsify (`def-cofinality`, `thm-konig`,
  `def-interval`, `thm-compact-iff-fip`, and three cross-item attributions).
  `citecheck`/`depcheck` read `deps` and `[[links]]`, never an English quantifier.
- `cor-monotone-converges-iff-bounded` is twice-touched; a third distinct defect
  is the signal to stop repairing and reconsider the statement.
- Risk tiering marks 101 of 155 items CRITICAL — the heuristic is not
  discriminating and is worth tuning.
- Wave 4 remains at `owner-pause`, unaudited and unpublished.

## Exact next action

1. Get the owner's decision on the ledger backfill above.
2. Dispatch Alpha for the 6 adjudications (`--role audit-alpha`, task file
   naming each id+model and its reason).
3. Rejudge only what Alpha edits — it must report the exact ids.
4. `gates.mjs --audit --step A8 --run wave5`; when clean,
   `WAVE_EXTRA_ARGS=--from-step A9` and `systemctl --user start run-wave@wave5`.

**Always read the tool, never the gate's `detail` string** — `gates.mjs`
truncates, and that caused four wrong readings this session (1 vs 124 errors,
2 vs 31 items, 5 vs 91 items, and a rejudge loop that saw 6 of 20 per pass).

## Working tree baseline

Branch `main`. Last commit before this record: `3bbae7f`.
Backup of the pre-backfill ledger: `/tmp/wave5-judge.bak`.
