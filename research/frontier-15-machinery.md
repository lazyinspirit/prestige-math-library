# frontier-15 — machinery analysis and post-run build log

Owner directive (2026-08-17, after the step-10 report): analyze the run
thoroughly; build ONLY parallelisation/optimisation that is safe, cannot
compromise mathematical accuracy or richness, and is certain — on observed
evidence — to improve time or token efficiency; fix outstanding workflow
defects; REWRITE broken or stale code and prompts, never build on top; log
everything here. **Every decision below cites its observed evidence.** Anything
whose benefit is computed rather than observed is HELD, not built.

The run's mathematics is accounted in `research/frontier-15-step10-report.md`
(86 fatal defects found and repaired; one open owner decision, `f15-a-rr-005`).
This file is about the machinery.

---

## 1. Run analysis — where time and tokens actually went

### Wall clock (from `.autopilot/state.json` dispatch records)

| stage | dispatches | lane-minutes (sum) | longest lane |
|---|---|---|---|
| 1-scaffold | 8 | 419 | 90 |
| 3-fix / 3-recheck | 7 / 28 | 87 / 64 | 22 / 13 |
| 5-author | 9 | 337 | 54 |
| 6a-read | 7 | 218 | 62 |
| 6b-adjudicate | 4 | 147 | 46 |
| 6c-cross | 1 | 24 | 24 |
| 7-judge (initial sweep dispatch) | 1 | 48 | 48 |
| 8-adjudicate | 3 | 59 | 36 |
| 8-rejudge | 2 | 28 | 16 |
| 9-scope / 9-receipt | 1 / 1 | 74 / 16 | 74 |
| 10-report | 1 | 39 | 39 |

Engine dispatch `concurrency` is **5** (`autopilot.config.json`) against owner
lane caps of **9** — at steps 1, 5 and 6a the run had 7–8 ready lanes, so
each of those stages ran 5-then-the-rest, roughly doubling its wall clock.

Gate batteries (`events.jsonl`, counting "running N gate(s)"): 8 at stage 1,
48 at the read join, 29 at 7-judge, 6 at 8-adjudicate, 10 at 6c. A full
19-gate battery ≈ 3 minutes. The 29 at 7-judge were overwhelmingly
**identical-input re-runs while blocked on the sonnet account limit** —
including repeated url-sweep probes of archive.org (the network-abuse
footgun). Batteries run **sequentially with fail-fast** (`gates.mts`), so a
battery reports only its FIRST failure: the defect-ledger B41 failure and the
risk-report failure at 8-adjudicate were discovered serially, costing two
repair round-trips and an engine restart where one battery could have named
both.

Step-7 closure took ~5h wall clock, of which the majority was the sonnet
account-limit outage plus repair rounds burnt into exhaustion during it —
both fixed mid-run (outage refund + backoff clock, commit `9e...` "external
outage refunds the repair round"; rounds surgery documented in-session).

### Tokens (from `research/frontier-15-judge-cost.jsonl`)

| lane | attempts | prompt tokens | completion tokens |
|---|---|---|---|
| deepseek-v4-pro | 409 | **12,610,429** | 3,822,302 |
| claude-sonnet-5 | 626 | **unrecorded (0)** | unrecorded (0) |
| gpt-5.6-terra (retired) | 2,352 | unrecorded (0) | unrecorded (0) |

One judge call per ITEM per lane (verified: 409 calls / 398 distinct ids),
averaging **30,832 prompt tokens per call**. The shared A/B-pair context
(~25 items per pair on average) is re-sent for every item, and the prompt
places the TARGET ITEM before the shared context ("supplied below the item"),
so no server-side prefix cache can help. **CLI lanes record zero usage** —
sonnet's 626 attempts are financially invisible.

Model-token waste from plumbing failures across the whole run: ≈0 — every
failed dispatch died pre-model (dispatch usage errors) or returned nulls
without content (Terra's 2,352 `codex_exit` attempts, the throttled account).

### What the engine proved

First full end-to-end drive, steps 0–10, no LLM driving any transition. Real
self-correcting loops fired and converged: scaffold review→fix→recheck (5 of
8 pairs `insufficient` → all `sufficient`), splice refusal→adjudication,
step-8 fatal-repair→rejudge→re-adjudication (5 repairs, 3 clean on rejudge,
2 closed nonfatal with reasons on record), step-9 decline sweep (3 overturned
and built + 3 support items). Five workflow defects were found and rewritten
DURING steps 7–10 (outage rounds burn; defect-ledger open-row conflation;
8-adjudicate unrouted contract-audit failures; risk-review write-after-exit
prompt defect; ledger-close append wording) — each with tests and same-commit
docs, details in §3.

---

## 2. Decision table — every candidate, its evidence, and the verdict

Non-negotiables: mathematical accuracy and richness. "Certain" means the
benefit is observed in this run's artifacts, not extrapolated.

### BUILD — efficiency (safe + certain)

| id | change | observed evidence | why quality is untouched |
|---|---|---|---|
| E1 | engine `concurrency` 5 → 9 | steps 1/5/6a ran 7–8 ready lanes at 5 (state.json timings above) | owner lane caps (9/9/3) remain the enforced ceilings; 5 is an engine default predating them |
| E2 | re-run a blocked stage's battery only on a state-changing event (dispatch end, repair end, backoff expiry, control command) | 29 identical-input battery re-runs at 7-judge; archive.org re-probed each time | unchanged inputs into deterministic tools cannot change a verdict; every actual change still re-verifies |
| E3 | report-all batteries: after first failure, run remaining gates read-only as ADVISORY; clearing still requires the sequential green pass | B41 → risk-report serial discovery cost 2 round-trips + restart | pass/fail authority unchanged; advisory results only feed repair routing |
| E4 | mechanical repairs run as dispatches, not in-tick `spawnSync` | the judge re-sweep ran ~1h inside the hook; stop/pause could not land | same tools, same argv; scheduling only |
| E5 | hot-reload `stages/mathlib.mts` per tick | two stop→drain→restart cycles today just to load stage-table fixes | code-loading mechanics; no behavioral change |
| E6 | record claude-CLI token usage into the cost ledger (`pt`/`ct`) | sonnet 626 attempts recorded as 0 tokens | measurement only |
| E8 | `pack-refuter-task.mjs` defaults to ONE item per dispatch | 7-item packs: 5 of 6 died `finish_reason: length`; 3-item packs still left 40/92 unread; 1 item = 31 KB, exit 0 (step-10 report finding 7) | the packing ratio was losing refuter READS — this is accuracy-positive |
| E9 | repair-round dispatches receive the previous round's result path in their task | risk-review round 2 re-derived round 1's on-disk verification (~15 Opus-minutes) | strictly additive context |

### BUILD — workflow defects (all observed)

| id | defect | observed evidence |
|---|---|---|
| D1 | `judge-compare.mjs` still carries only `deepseek+terra`; exits 2 under the current lineup | step-10 report finding 2: the agreement table had to be computed by hand |
| D2 | `defect-ledger.mjs` `caught_by_role` enum lacks `judge-sonnet` | finding 17: the next sonnet-only fatal cannot be attributed |
| D3 | ledger completeness is unverifiable: group a wrote 13 rows against 58 accepted fatal findings; the check clause only requires rows to EXIST | finding 1 — the run's headline understates fatals 28 vs 86; fix: a per-group 6b findings artifact (machine half) + a check clause comparing counts |
| D4 | `splice-plan` blind two ways: never flags a plan-missing edge induced by item `deps`; drift compare is item-id-only | finding 10: `cor-cauchy-inequalities`' undeclared prereq reached step 4; step 4 hand-mirrored objects to work around |
| D5 | touchlog cannot see repairs: only 3 snapshots exist, nothing after `pre-step8`; both-lane rejections count as 2 refutations | report §twice-touched: "blind by construction"; step 8's 5 repairs and step 9's 6 builds invisible |
| D6 | adopted dispatch records never get `endedAt` | observed on the three 3-review records all session |
| D7 | blocker messages embedding variable text dedupe poorly | duplicate-shaped blockers observed at 7-judge and 8-adjudicate |
| D8 | sonnet verdict transport: 28 stated rejections lost as UNPARSEABLE | §1 nulls breakdown; phrasings vary ("Flagged:", "Reported one finding:", "Verdict: **keep=false**") so the fix is (a) extract an embedded well-formed JSON verdict object anywhere in the reply, (b) harden the output contract in the next-run frozen prompt. NO prose inference — a "Flagged:" without a parseable keep stays a re-spendable null |
| D9 | `boundary-audit` template clustering defeated by title interpolation and long shared tails | caveat 4: ~450 generated rows, 0 clusters; the normalizer strips the id but not the title |
| D10 | shotgun input brackets: step 1.1 credited with every `[L#]`, later steps only `[step 1.1, given, algebra]` | the single largest driver of 145 rejections AND what let Sylow I's contract pass over an announcement step; report: "mechanically detectable and was not detected" |
| D11 | `coverage-checklist` accepts a decline reason that resolves to nothing | caveat 9: 86 of 168 declines name no destination; the Craven hole was found at step 9 instead of step 2 |
| D12 | iff-branch labels in headings are scrambled by precheck's stratification | finding 15: a DeepSeek rejection correctly read the interleaved prose; rule belongs in the author brief |

### HOLD (benefit or safety not yet observed)

| id | change | why held |
|---|---|---|
| J1 | reorder judge prompt so the shared pair context is a cacheable prefix | token win is arithmetically certain (12.6M prompt tokens, ~25× context re-send per pair) but accuracy-neutrality is UNOBSERVED — prompt order measurably changes judge behavior in this repo's history (the certify-arm was deleted for halving recall). Ships only behind `research/verification-benchmark.md` (150 items, 50 known defects) at non-inferior recall. A default-off variant may be prepared; the default may not move without the benchmark |
| E7 | fs.watch instead of 30s polling | latency bound computed, never measured; revisit if it shows up in a future run's numbers |
| — | parallel step-8/9 adjudication | owner rule: the lead Alpha alone owns steps 4, 6c, 8, 9; consistency of one adjudicating mind is a quality property. Not mine to trade |
| — | finite-smoke registry extension | report caveat 3 names it an owner decision |

### REJECT (would trade accuracy or richness)

- Batching multiple verdicts per judge call (a malformed reply nulls a whole
  pair; per-item independence is the screen's design).
- Any softening of the refuter prompt to cut false positives (measured
  2026-07-25: halves recall).
- Early judging before the 6c freeze (voided hashes; the measured
  two-stages-one-ledger race).
- Inferring a verdict from prose ("Flagged:" ⇒ keep=false) — interpretation,
  not parsing; risk of misclassifying a pass as a rejection or vice versa.
- Model/effort downgrades anywhere in the lineup (owner-bound).

### Resolved without a build

- **7-judge exhaustion stamp**: the `repair-exhausted` event DID fire
  (01:29:02 in `events.jsonl`); the field's later absence traces to mid-run
  state surgery, not a code path. The whole branch was rewritten today
  (outage refund) with tests. Watch next run; no separate fix.

---

## 3. Build log

Entries appended as work lands. Format: what / commit / tests / docs.

- **(pre-directive, during the run)** outage-refund repair rounds +
  `backoffUntil` clock, both round-spending sites unified
  (`spendRepairRound`); judge-closure/8-rejudge outage classifiers. 6 tests.
  ARCHITECTURE §3.11d, UNATTENDED signals table.
- **(pre-directive)** `defect-ledger check`: closure cross-check scoped to
  fatal rows; `--no-open` terminal backstop (caught `f15-a-rr-005`); step-9
  open-row sweep duty. 4 tests. ARCHITECTURE §3.11h.
- **(pre-directive)** 8-adjudicate routes contract-audit failures to a
  risk-review Alpha (was: silent round burn ×2). 1 test.
- **(pre-directive)** contract-audit task: risk_review written from the
  Alpha's own verification BEFORE any refuter; session ends at the final
  message. (The round-1 lane verified everything and wrote nothing.)
- **(pre-directive)** step-9 task: open-row closing is an in-place
  disposition update, never an append; render re-run after a hand edit.
- **E1** — `autopilot.config.json` concurrency 5 → 9 (the owner lane caps).
- **D1** — `judge-compare.mjs` carries `deepseek+sonnet` and defaults to it,
  matching the four tools that already did.
- **D2** — `defect-ledger.mjs` `caught_by_role` gains `judge-sonnet`.
- **E8** — `pack-refuter-task.mjs` refuses >1 item without `--allow-multi`,
  citing the measured read-loss in its error text.
- **E6 + D8 + J2** — sonnet lane: `--output-format json` envelope (live shape
  verified by probe: `result` + `usage` keys) unwrapped into content + summed
  submitted tokens for the cost ledger; embedded-verdict extraction
  (`tools/judge-parse.mjs`, parsing never inference — the three lost-rejection
  phrasings stay nulls by test); terminal format reminder appended after the
  context blocks (recency fix — the rule already existed ~30k tokens earlier;
  refuter framing untouched). Verdict currency survives via the item-hash
  clause; next sweep's UNPARSEABLE rate is the measurement of J2. 8 tests.
- **E2 + E3 + E5 + D6 + D7** — the executor batch, 7 tests (suite 288/288,
  zero regressions in the 281 that predate it):
  E2 event-driven battery (skip while `stateVersion`, dispatch-dir
  fingerprint, and backoff clocks are all unchanged; unconditional backstop
  battery every 20th skip; `autopilot retry` documented as the hand-edit
  re-arm); E3 report-all (first failure keeps sole authority; remaining gates
  run once advisory, named in `gate-advisory` and on `failure.advisory`);
  E5 stage-table hot-reload (validated first, refused tables never load);
  D6 `reconcileAdopted` stamps `endedAt` from result files; D7 blockers
  dedupe on stage+key. ARCHITECTURE §3.11d and the UNATTENDED signal table
  carry all five.
- **E9** — `briefs/alpha.md`: repair rounds read the latest prior round's
  result/log before deriving anything (the 15-Opus-minute re-derivation).
- **E4 — decision revised to HOLD.** The outage classification and residual
  routing are SYNCHRONOUS by design in the tested repair loop; an async
  repair moves classification a round later and destabilizes tested behavior
  for a benefit observed exactly once (pause latency during a 1h sweep).
  Revisit if a future run shows group members starved behind a long repair.
