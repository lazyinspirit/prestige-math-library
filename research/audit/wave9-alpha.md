# Wave 9 Audit-Alpha report

Role: sole Audit-Alpha for A6, GPT 5.6 Sol via the Codex subscription, `xhigh`, 1,000,000-token context.

## Durable recovery receipt — 2026-08-09

- Baseline commit recovered and verified: `6fb3b6c9d08752db2239a2e0794752f0f69107fc` (`chore(audit): conclude wave 7`). The shared worktree is intentionally dirty with concurrent Wave 8 and Wave 10 work; no concurrent file is to be reverted, overwritten, committed, or pushed by this role.
- Normative instructions read in full: `CLAUDE.md`, `AUDIT-WORKFLOW.md`, `research/audit/RESUME.md`, `briefs/audit-alpha.md`, `SCHEMA.md`, `README.md`, and `QUALITY-CONTROLS.md`; the published exemplar `items/lem-cauchy-bounded.md` was also read in full.
- Durable Wave 9 record read and reconciled from disk: `research/audit/wave9-A0.md`, `research/audit/wave9-A3.md`, `research/audit/wave9-real-analysis.findings.md`, `research/audit/wave9-real-analysis.pages.json`, `research/audit/wave9-real-analysis.provenance.jsonl`, `research/audit/wave9-real-analysis.proof-contracts.json`, `research/audit/wave9-proof-contracts.json`, `research/audit/wave9-audit-manifest.json`, `research/audit/wave9-split.json`, `research/audit/wave9-touches.json`, `research/audit/wave9-impact-template.json`, `research/audit/wave9-url-liveness.json`, and the standing `research/audit/genrisk.json`. No prior Wave 9 Alpha report or adjudication ledger existed.
- Current mathematical reading recovered from disk, not trusted from summaries: all 43 scoped Wave 9 item files and both page files were read in full. Their current SHA-256 values were recorded locally at recovery; the page hashes were `5b4553912a6948938f99d755a9fa5e3605eabdad5693e045df0a84ace0bdfdfb` for `monotone-functions-and-discontinuities.md` and `9d36ff4ade675d7adcfd21fb47c4d7bd5a811533921d17bc97f6bcc35b30c78e` for its examples page. The 43 current item hashes were likewise enumerated before audit action.
- Every exact current Wave 8 target supporting the 65 recorded Wave9-to-Wave8 edges was read in full after Wave 8's A9 freeze: `cor-continuous-image-of-an-interval-is-an-interval`, `cor-q-is-meager-and-not-g-delta`, `def-cantor-function`, `def-cantor-set`, `def-continuity-real`, `def-f-sigma-g-delta`, `def-measure-zero-and-content-zero`, `def-nowhere-dense-meager`, `lem-monotone-with-interval-image-is-continuous`, `lem-nondegenerate-interval-is-not-null`, `thm-algebra-of-continuous-functions`, `thm-baire-category-r`, `thm-cantor-function-properties`, `thm-cantor-set-properties`, `thm-composition-of-continuous-functions`, `thm-continuity-preimage-characterisation`, and `thm-intermediate-value`.
- Inherited open actions: independently adjudicate all 43 items and the page repair; reconcile all 65 cross-level edges; certify the five Beta material repairs plus the page repair against exact final text; refute all 34 proof-bearing high/critical routes; adjudicate provenance, contracts, sources, impact, generated-risk, and spine closure; apply only A6-authorized R1 repairs; restore only independently certified `verification.verified` stamps; emit the exact A7 item rejudge list. A7, commit, and push are explicitly out of scope.
- Exact next action after recovery: spot-check the mechanical URL/split/touch inputs, verify the five material diffs and one page diff against the baseline, then assemble and dispatch the independent Terra certifier and DeepSeek V4 Pro proof-refuter lanes while completing the personal edge and impact adjudications.

## A6 closure — 2026-08-09

Status: **complete for the Wave 9 scope**. No Wave 9 blocker remains. This role did not start A7 and did not commit or push.

### Exact reading and reconciliation surface

- Read all 43 current scoped items and both current page files in full.
- Read all 109 distinct current out-of-scope dependency targets needed to adjudicate the final manifest, including the Alpha-added `lem-of-triangle-inequality` dependency.
- Read all 59 proof-bearing items in the current top-100 dependency spine in full.
- Read all 318 current consumers affected by the Wave 9 interface changes in full, grouped only for transport; no mathematical surface was sampled.
- Reconciled all 485 final manifest edges against exact current source and target text: 395 published-backward edges and 90 same-batch edges. The frozen Wave9-to-Wave8 subgraph remains exactly 65 edges from 29 Wave 9 sources to 17 Wave 8 targets. All 65 are licensed by Wave 8's exact A9-frozen text.

### Material repairs and Alpha action

- Independently adjudicated the five material A4 item repairs: `def-oscillation`, `fs-additive-implies-linear`, `thm-baire-one-continuity-points`, `thm-continuity-set-realisation`, and `thm-semicontinuous-evt`. All five repaired claims and proofs are mathematically correct.
- Independently adjudicated the page repair narrowing the one-sided-limit summary. The repaired page text is correct and consistent with its item surface.
- Applied exactly one narrow A6 repair under R1: `def-oscillation` now declares and cites `lem-of-triangle-inequality` for the bounded-oscillation estimate instead of relying on `lem-of-abs-value` alone. No other Alpha mathematical edit was made.
- An independent GPT 5.6 Terra exact-final-text pass certified all five material items and the repaired page. Only then were the five item verification stamps restored with the required published-audit metadata. Earlier transport-null, refused, and self-inconsistent attempts remain preserved append-only and were not treated as mathematical verdicts.

### Proof refutation and risk

- All 34 proof-bearing high/critical routes have a final exact-current DeepSeek V4 Pro `CLEAN` result. The final routing is 31 critical and 3 high.
- The dependency-changing `def-oscillation` repair triggered exact-current refreshes of all 12 affected refuter packets. Eleven completed clean at round `a6r3`; the `thm-froda` `a6r3` transport termination was retried append-only as `a6r4-thm-froda` and completed clean.
- No refuter identified a fatal defect or required an additional repair. One refuter correctly noted a nonfatal, closable citation imprecision in `thm-continuity-iff-oscillation-zero`: its triangle-inequality step cites `lem-of-abs-value`. Under the 30-second rule and R1 this was recorded as debt and not edited in A6.

### Provenance, sources, impact, generated risk, and spine

- Provenance adjudication covers all 43 items: 17 literature-anchored and 26 altered statements; 22 altered proofs, 12 generated proofs, and 9 proof-not-applicable entries. No statement is labeled `established` or `ai-generated`, and no provenance escalation is required.
- All 40 distinct cited URLs are live. No source disposition remains open.
- The exact post-A6 Wave 9 interface projection contains 43 changed interfaces and 318 affected consumers. The five material repairs affect a union of 270 consumers: 261 from `def-oscillation`, 6 from `fs-additive-implies-linear`, 4 from `thm-baire-one-continuity-points`, 1 from `thm-continuity-set-realisation`, and 1 from `thm-semicontinuous-evt` (overlaps explain the non-additive union). Every consumer remains licensed by the exact repaired interface.
- Generated-risk review found no Wave 9 scoped seed or consumer requiring action.
- The current top-100 dependency-spine receipt covers all 59 proof-bearing entries with exact-current hashes; no spine defect was found.

### Gate closure and concurrent-run isolation

- The exact Wave 9 gates pass: final-item precheck; strict proof-contract and reviewed-risk checks for 34/34 proof-bearing items; content policy for 43/43 scoped items; the 43-interface/318-consumer projected impact audit; the 59-item spine audit; certification-hash validation; and `git diff --check`.
- The host aggregate `gates.mjs --audit --step A6 --run wave9` wrapper passes 11 of 14 lanes. Its three remaining failures are demonstrably concurrent Wave 10/global-state conditions, not Wave 9 defects: `depcheck` sees the three intentionally unstamped Wave 10 repairs `ex-integral-of-the-floor-function`, `lem-integral-elementary-bounds`, and `thm-monotonicity-from-the-derivative`; global generated-risk awaits Wave 10's disposition for `rem-riemann-integral-choice-ledger`; and the unprojected shared touch interval combines simultaneous Waves 8--10. Wave 9's hash-bound projection isolates its 43 interfaces and passes with all 318 dispositions. Those global lanes can turn green only when the owning concurrent run closes or the orchestrator evaluates the already-produced Wave 9 projection.

### A7 handoff

Only the five materially repaired item files require A7 paired rejudging:

1. `def-oscillation`
2. `fs-additive-implies-linear`
3. `thm-baire-one-continuity-points`
4. `thm-continuity-set-realisation`
5. `thm-semicontinuous-evt`

The page-only repair, 38 pure-retag items, unchanged dependencies, and affected consumers are excluded from A7. The machine-readable target list is `research/audit/wave9-rejudge-targets.json`.

## A8 closure — 2026-08-09

Status: **Audit-Alpha's A8 adjudication and fatal-only repair are complete**.
No Alpha blocker remains. This role did not run a judge, did not start A9, and
did not commit or push.

### Durable recovery and exact rejection surface

- Recovered the A6 record above, the complete current A7 judge, cost, and
  attempt ledgers, the five-target A7 receipt, and the sole orchestrator-owned
  `pre-a8` touch snapshot at `2026-08-09T10:19:50.008Z`. A7 contains exactly
  ten valid response rows (five targets times two models), with no null. The
  DeepSeek lane passed all five; Terra rejected exactly the three assigned
  here.
- Verified every rejection against its exact current A/B-pair context and both
  hash representations. The A7 verdict rows' item hash omits only the judge
  sub-block; R1 strips the complete `verification` block. The exact pre-A8 R1
  hashes are `5db1f9a5...3378` for
  `thm-baire-one-continuity-points`, `b8abe4f6...cee4` for
  `thm-continuity-set-realisation`, and `6c9c462f...b0b2` for
  `thm-semicontinuous-evt`.
- Re-read all three current target items, all 35 distinct declared dependency
  items, the two exact closure sources `lem-of-triangle-inequality` and
  `lem-of-inverse-positive`, both current pair pages, the complete companion
  `cex-upper-semicontinuous-need-not-attain-its-infimum`, and the exact target
  and consumer objects in both current Wave 9 contract files. Nothing was
  inferred from the judge summaries alone.

### Exact adjudications

The append-only owner decisions are in
`research/audit/wave9-judge-adjudications.jsonl` and are bound to each A7
model/context row and exact pre-edit R1 item hash.

| outcome | count |
|---|---:|
| `confirmed_fatal` | 1 |
| `confirmed_nonfatal` | 2 |
| `false_positive` | 0 |

1. `thm-baire-one-continuity-points` — **confirmed nonfatal**. Terra correctly
   observes that L11's cited `lem-of-abs-value` does not state the triangle
   inequality. `lem-of-triangle-inequality` states exactly
   `$|x+y| \le |x|+|y|$`; applying that standard inequality closes steps 2.2,
   4.1, and 5.1 immediately. The proof and theorem are correct, and the omission
   is below the binding thirty-second threshold. R1 therefore forbids an edit.
2. `thm-continuity-set-realisation` — **confirmed nonfatal**. L4's contracted
   sources do not themselves export strict reciprocal monotonicity, but
   `lem-of-inverse-positive` states exactly that `0<a<b` gives
   `0<b^{-1}<a^{-1}`. Applying it to the two positive canonical naturals closes
   step 4.1 in one line. The construction is correct; R1 forbids an edit.
3. `thm-semicontinuous-evt` — **confirmed fatal**, type `other` (false/
   overstrong public Statement). The old warning said a compact-domain upper
   semicontinuous function need be neither bounded below nor attain its
   infimum, and said the companion supplied such an example. The companion is
   explicitly bounded below by zero and only fails to attain its infimum.

### Exact fatal-only mutation

The plain list of A8-edited item ids — and therefore the complete targeted
paired-rejudge set — is:

1. `thm-semicontinuous-evt`

Alpha changed only the false Statement clause to: “An upper semicontinuous
function on a compact set need not attain its infimum.” The title, both theorem
claims, Facts, all nine proof steps, dependencies, sources, provenance, page
text, and companion item remain unchanged. The stale A6
`verification.verified` block was removed before the repair; there was no judge
block. Provenance remains `statement: literature-derived`,
`proof: ai-altered`, `evidence: exact-source`.

Pre-edit normalized hash:
`6c9c462f58c2a7d6ccbcdbca3e14db97d084d68d6bc760f02d7737896cdfb0b2`.
Exact-final normalized hash:
`2c41870f7473c660ab787bedf0da90b98661325380944cc20ffdc44e999ef685`.
The final verification-stamped full-file hash is
`2906e58bb366c631f921b470cf5ae8567eb6a875d5b28f15fc3aa63b58def863`.

The companion's L5 proof-contract quote was the only contract text made stale
by the public repair. Alpha updated that exact quotation in both
`wave9-real-analysis.proof-contracts.json` and
`wave9-proof-contracts.json`; no obligation, derivation, boundary record,
dependency, or consumer item changed. The complete old/new repair record is
appended to `wave9-published-repairs.md`.

### Consumer impact

The exact current reverse-dependency/direct-citation union is one item:
`cex-upper-semicontinuous-need-not-attain-its-infimum`. Alpha read it in full.
It proves a bounded-below upper semicontinuous example whose infimum is not
attained and invokes only the theorem's unchanged maximum conclusion. Its
title, Statement refuted, example, L5, step 4.1, and Remarks all agree with the
repaired public warning. It is `still-licensed`; no consumer edit or rejudge is
required. The hash-bound disposition and exact counts (one logical consumer,
one direct-citation consumer, union one) are in
`wave9-A8-impact-review.json`.

The formal `impact-audit.mjs` receipt awaits the orchestrator-owned `post-a8`
snapshot. Alpha took no stage snapshot and did not duplicate the existing
`pre-a8` record.

### Independent exact-final certification

The A8 reader context is durable and hash-bound in:

- `research/audit/wave9-A8-certifier-brief.md`;
- `research/audit/wave9-A8-certifier-tasks/thm-semicontinuous-evt.md`;
- `research/audit/wave9-A8-certifier-index.json`;
- `research/audit/wave9-A8-certifier-runner.mjs`.

The read-only GPT 5.6 Terra certifier ran at `xhigh` through the Codex
subscription against the exact-final normalized hash. It independently read
the complete target, all 13 dependencies, the complete companion, and both
current contract copies; it recomputed the exact hash and returned
`VERDICT: CERTIFIED`, `CURRENT-TEXT: READ`, and `FINDINGS: NONE`. Its
append-only result is
`research/audit/wave9-dispatch/certifier-a8-final1-host-thm-semicontinuous-evt.result.json`
(SHA-256 `874f1512e365a4c757b4668d547026676a37def5dd5ecea970919aab9238987c`);
the complete log SHA-256 is
`2ac326ba4d04e086f8b3aa4989d7ab20ac89ac44688782d7e5a36669caab27f5`.

Only after verifying that successful result and rechecking the current
exact-final hash did Alpha restore `verification.verified` with model
`gpt-5.6-terra-codex-subscription`, verdict `certify`, date `2026-08-09`, scope
`published-audit`, and `delegated_by: owner`. No judge stamp was written.

### Gates and exact handoff

- Target precheck passes 1/1.
- The namespaced and merged proof contracts agree on the repaired quote; the
  merged strict gate passes 34/34 with zero errors or warnings, and reviewed
  risk routes 34/34 with zero errors.
- The `pre-a8` R1 guard sees exactly one changed item,
  `thm-semicontinuous-evt`, and 1/1 is licensed by its confirmed-fatal row;
  creations, deletions, errors, and warnings are all zero.
- The exact-final normalized hash remains `2c41870f...f685` after the
  verification stamp, and `git diff --check` passes.

The orchestrator next records `post-a8`, builds the formal one-interface/
one-consumer impact receipt from Alpha's disposition, and runs DeepSeek plus
Terra only on the singleton in `wave9-A8-rejudge-targets.json`. It then writes
the targeted receipt and judge stamp only after both exact-current lanes pass.
Neither confirmed-nonfatal item nor the unchanged consumer belongs in that
rejudge set.

### Required personal-audit escalation

The workflow's repeat-touch rule separately escalates these three ids to the
orchestrator's personal audit because each was an A4/A6 repair target and then
received the A7 rejection adjudicated here:

- `thm-baire-one-continuity-points`
- `thm-continuity-set-realisation`
- `thm-semicontinuous-evt`

This escalation does not license additional edits and does not broaden the
targeted rejudge set. No deletion, id change, or reading-order change is
proposed.
