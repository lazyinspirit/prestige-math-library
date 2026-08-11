# This dispatch — Stage 3, step 8: adjudicate the paired-judge rejections

The step-7 sweep is complete: **1,182 verdicts, both lanes on all 591 items,
zero nulls**. Ledger `research/frontier-10-judge.jsonl`.

| | count |
|---|---|
| items with a live rejection | **322** |
| rejected by Terra | 295 |
| rejected by DeepSeek | 143 |
| rejected by **both** lanes | 116 |

**You are the sole adjudicator.** The orchestrator runs gates and keeps ledgers
and does not substitute its judgment for yours.

## R1 — step 8 is FATAL-ONLY, and this is the rule that matters most here

With 322 rejections in front of you, the temptation to tidy is the exact failure
R1 exists to prevent.

- Only **`confirmed_fatal`** licenses an edit to an item.
- **`confirmed_nonfatal`** and **`false_positive`** close the rejection on its
  exact-hash ledger row with **no content, page, frontmatter, contract, impact or
  judge mutation of any kind.** Not a word.
- Cosmetic polish and 30-second-gap tidying belonged at step 6 and are now
  withdrawn. Any edit is a material rewrite under SCHEMA §3: it voids
  `verification.judge`, forces a rejudge, and resamples a refuter that will find
  a fresh nitpick on each stochastic run — an unbounded loop costing two judge
  calls a turn and converging on nothing.
- **Fatal repairs are deliberately uncapped.** A proof that keeps yielding real
  fatal defects is either converging on correctness or is actually false, and
  both must run to conclusion.

## Every row needs `item_sha256`

Write `research/frontier-10-judge-adjudications.jsonl`, one row per rejection:

```json
{"id": "...", "model": "deepseek-v4-pro|gpt-5.6-terra",
 "context_sha256": "...", "item_sha256": "...",
 "outcome": "confirmed_fatal|confirmed_nonfatal|false_positive",
 "defect_type": "logic|dependency_citation|other"}
```

`item_sha256` is the sha256 of the normalized item text (verification block
excluded) **at adjudication time**, i.e. the pre-edit state. `tools/step8-guard.mjs`
checks every item changed since the `pre-step8` baseline against a
`confirmed_fatal` row recorded on that hash. Error codes `nonfatal-edit` and
`judge-adjudication-unhashed`.

The baseline snapshot `pre-step8` is taken. It noted **36 items repaired more
than once** — the twice-touched escalation is advisory, but read those with extra
suspicion: a proof touched repeatedly is either converging or false.

## What the lane split is telling you

Terra rejects at twice DeepSeek's rate while sharing the GPT family with the
authoring Betas; DeepSeek is the only cross-family screen. Weight same-family
agreement accordingly. **The 116 both-lane rejections are where real defects most
likely concentrate — start there.** A Terra-only rejection on citation precision
deserves the 30-second rule before anything else.

From the sample I read, many rejections are of the form "[L1] claims slightly
more than the cited item states". Judge each on its merits: an inflated
restatement that the proof actually leans on is `dependency_citation` **fatal**;
one where the proof only uses the weaker true content is nonfatal.

## Then

Select the exact changed items for rejudge — only what you actually edited — and
report them to the orchestrator. Keep
`research/frontier-10-alpha-report.md` current, and record blockers rather than
prompting.
