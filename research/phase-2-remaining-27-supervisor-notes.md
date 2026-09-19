# Supervisor notes — phase-2-remaining-27, Step 5 in flight

Updated 2026-09-17 21:55 local (11:55Z). Owner instruction in force: run the
engine through the end of Step 5, resolving all blockers, escalations and
workflow defects.

## Where the run is

- Stage: `5a-adjudicate` — five group Alphas (a–e) running on DeepSeek V4.1
  Flash max, each adjudicating its group's routed obligations (touched items,
  page carriers, reader findings, refuter findings).
- Steps 3 and 4 are complete: `3b-author`, `4-splice` and `4-baseline` are
  stamped done; all 15 batches spliced; `validate-plan` exits 0 (only the
  pre-existing `redundant-prereq` warning lines remain) and `depcheck`,
  `precheck`, `fwdcheck`, `scope-decisions`, `frontier-dependency-ledger`,
  `proof-contract`, `boundary-audit` and the auditor certifications are green.
- Step 5a so far: 15/15 reader reports, 15/15 routing splits, 15/15 refuter
  reports, 15/15 collects.

## What was fixed on the way here (this supervision stretch)

- Step-5a model lanes moved from the dead Codex/OpenAI lane to DeepSeek V4.1
  Flash max (commit `967f5e10e`; readers, refuters, adjudicators).
- 4-splice: licensed in-flight item divergence applied with the `--update` path;
  22 backward page edges accepted with `--accept-requires`; 13 forward page
  edges adjudicated (12 replaced with earlier suppliers, 1 resolved by a new
  local supplier `lem-pi-three-so-three-generated-by-the-quaternion-double-cover`
  on the consumer's own A page); one duplicate home removed.
- `validate-plan` `b-leaf`/`prefix` cleanup: 51 published-example dependencies
  re-pointed or moved to A pages and 4 kind/prefix mismatches corrected.
- Reader findings for batches 5, 11, 14, 15 used free-form subjects; repaired to
  the `published-dependency` shape so the routing split accepts them.

## Next actions when supervising resumes

1. When the five adjudicators land: check `step5-scope.mjs check --phase
   adjudicate` and the 5a gate battery; resolve any `escalated` obligations
   (owner-held) and any repair the adjudicators could not complete.
2. Then `5a-baseline` (tool) → `5b-edges` (tool) → `5b-cross` (DeepSeek lane) →
   `5b-close` (tool) completes Step 5.
3. The engine holds rather than auto-repairing: every gate failure in Steps 1–9
   is an owner hold. Repair the named items/certifications, then write
   `{"command":"retry"}` to `.autopilot/phase-2-remaining-27/control.json`.
4. Known outstanding bookkeeping: item decision records touched by cleanup
   edits may need re-recording (`step3-decisions check --phase final` reports
   `changed inputs require a current owner decision`); re-record with
   `record-item --owner --decision repaired` and the item's frontmatter deps.

## 2026-09-17 12:33–13:00Z — 5a-adjudicate gate battery, three holds resolved

The 5a battery held twice; each hold was diagnosed and repaired on the tree
before a retry was written (no repair loop was armed in the engine).

1. `fwdcheck` (hold at 12:33Z, stale on retry): `cor-atkinson-in-calkin-algebra-
   language` had cited the published `thm-choice-implies-dependent-implies-
   countable-choice`, homed on a later page. The citation now rests on
   `def-axiom-of-choice` + `def-countable-choice`; `fwdcheck` exits 0.
2. `boundary-audit` (hold at 12:43Z): the `zero` row of
   `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system`
   was a contradicted candidate — step 1.2 divides by $(\alpha_i,\alpha_i)$.
   Verified the denominator can never vanish: $\alpha_i$ is a simple root, so
   $\alpha_i\ne0$ by [L1] ($\Phi\subseteq E\setminus\{0\}$) and the form is a
   positive-definite inner product on $E$, so $(\alpha_i,\alpha_i)>0$. Recorded
   a hash-bound `reviewed.upheld` row in
   `phase-2-remaining-27-batch-11.proof-contracts.json`, re-ran
   `merge-proof-contracts.mjs`, and the audit now reports 48 upheld, 0
   contradicted, 0 templates.
3. `frontier-dependency-ledger` (hold at 12:43Z): the batch-4 cross-batch file
   carried the same consumer/supplier review twice for
   `cor-atkinson-in-calkin-algebra-language -> def-axiom-of-choice`. Removed the
   duplicate row; `frontier-dependency-ledger.mjs refresh` exits 0.

Because the contract entry is part of the Step-5 carrier, the batch-11 edit
made group a's decision for that item hash-stale; `step5-scope.mjs stamp` ran in
the next battery tick (12:54:49Z) and re-sealed the current carrier hashes. The
decision's evidence (the W-conjugacy repair in step 1.2) still describes the
current text, so the re-seal is honest.

## 2026-09-17 13:04–14:12Z — Step 5 completed; two engine defects fixed

Step 5 is complete: `5a-adjudicate`, `5a-baseline`, `5b-edges`, `5b-cross` and
`5b-close` all cleared, and `research/phase-2-remaining-27-step5-closure.json`
freezes the Step-5 closure (1,032 in-scope items, 244 run ledger rows). The 5b
lead Alpha ran on DeepSeek V4.1 Flash max (926 cross-batch edges: 923 accurate,
0 repairs; 15 forward references closed; both impact windows receipted).

### Owner decisions taken during the 5b hold

1. **13 `audit-manifest` unresolved dependencies.** The three run-authored
   examples recorded by the b-leaf reports as moved onto A pages
   (`ex-classical-root-systems-in-euclidean-coordinates`,
   `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n`,
   `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups`) were homed in
   the batch-11 manifest and `splice-plan --update` carried them into
   `research/plan-spec.json`. The move had already been applied to the library
   pages' `examples:` lists and the batch-11 reader had read the items as
   page-level examples; only the plan/manifest lagged. Three `addition`, two
   `page` and four new `edge` verdict rows were added to the 5b verdicts file
   with current carrier hashes (the new edges are the four batch-13 consumers).
2. **Three unresolved `external_refs`.** Following the frontier-24/26/27/28
   precedent, the catalogue remarks `rem-nagata-theorem-cp`,
   `rem-dugundji-extension-linear` and `rem-gerlits-nagy` were promoted to
   `status: published` with `verification.audited` / `sources_checked` stamps
   (they stay `proved_here: false`). The three batch-4 citing items said "draft
   target"; their prose now says "catalogue target", which is what their
   recorded-not-proved statements require.
3. All 16 `5b-cross` audit-manifest gate rows were closed as `fixed` with repair
   evidence, and the `post-5a -> current` impact receipt was refreshed (16
   changed interfaces, 136 affected items, 0 errors).

### Engine / tool defects found and fixed

1. **`step5-close` timeout.** The close tool re-runs the exact Step-5 routing
   check, which costs about ten minutes on this corpus, against a five-minute
   `spawnSync` cap; three attempts died with `spawnSync /usr/bin/node
   ETIMEDOUT`. The cap is now 20 minutes (`tools/step5-close.mjs`) and the
   `5b-close` stage budget is 1,800 s (`tools/autopilot/stages/mathlib.step5.mts`).
2. **`pause-at` never fired on a gates-waived stage.** The armed pause keyed on
   `stages[id].doneAt`, but a stage that waives its gates is finished by
   coverage alone and never reaches `runGroupGates`' stamp loop, so `5b-close`
   never carried a stamp and the engine walked from the end of Step 5 into the
   Step-6 judge fan-out. The check now uses `stageStatus(...).done`, the same
   predicate that advances the pipeline (`tools/autopilot/src/executor.mts`),
   with a regression test. This is why the run is now sitting inside `6-judge`
   rather than exactly at the Step-5 boundary.

### Current position

Paused by owner command. `5b-close`'s dispatch is complete and the closure
receipt exists; `6-scope` (mechanical) also cleared, and the `6-judge` fan-out
was stopped by hand (its judge lane is the exhausted Codex/OpenAI lane and was
recording zero-token failures; the five alpha group reads were killed
~30 s in). Resume continues at `6-judge`; it costs nothing to re-dispatch the
killed lanes.

## 2026-09-20 — token-reduction mechanisms (owner-authorized)

Measured first: the two Step-7 adjudicator lanes averaged **130k input tokens per
call** over ~2,900 calls (177 M and 196 M cumulative, 98% cached), while the
stateless judge sweep averaged 24k per item. Four mechanisms now cut that
without weakening the mathematics:

1. **Evidence bundles** (`tools/evidence-bundle.mjs`, shared with `judge.mts`).
   `step7-scope.mjs render` writes `research/<run>-step7-bundle-<group>.md`: for
   every item under an open objection, the item's claim section and Facts
   section verbatim, plus the recorded `quote` of every cited fact from the
   proof contract. Nothing is summarised, and every cap names the file to open.
   Measured on this run: group a 198 KB (~49k tokens) for 40 rejections; the
   three groups with no open rejection get a 0.9 KB header.
2. **Item-grouped queues.** The renderer sorts rejections by item so a lane
   settles every objection to an item in one pass (167 items carried 359 of the
   811 fatal rows).
3. **Earlier compaction.** `dispatch.mjs` compacts long lanes at 120k instead of
   200k; the briefs already require re-anchoring to the live item and
   dependencies after any compaction.
4. **Read-once, ordered reading.** The shared prompt guidance and the bundle
   preamble require reading each file once in the order given, using the bundle
   first, and reading whatever else the mathematics requires.

Access guarantees restated by the owner on 2026-09-20 and encoded in both the
bundle preamble and the task header: adjudicators keep web search
(`tools.web_search=true`) and shell network access, the entire published
`library/`, and every item of the frontier under `items/` — including other
groups' items for seams and cross-group alerts. A bundle is an entry point,
never a fence. Asserted by `step7-groups.test.mts` on the lane's own command
line and by `evidence-bundle.test.mts` on the bundle text.

**Owner revision (2026-09-20): the compaction threshold is 250k, not 120k, and
applies to EVERY lane whatever its provider.** `dispatch.mjs` now carries a
single `AUTO_COMPACT_TOKEN_LIMIT = 250_000` with scope `total`, and the DeepSeek
lane gets it too — its generated model catalog sets `auto_compact_token_limit:
null`, so without the explicit flag that lane would never compact. Verified by a
live DeepSeek probe with the threshold lowered to 1,500: the session recorded a
`compacted` event, proving the flag overrides the catalog. The 250k value keeps
the earlier token win in the Step-7 lanes (they were already carrying ~130k per
turn after their own 200k compactions) without forcing the more aggressive
120k rewinds.
