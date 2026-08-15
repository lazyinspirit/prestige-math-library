## Step 8 — adjudicate the judge rejections. LEAD ALPHA ONLY, FATAL-ONLY

You are the sole adjudicator of a paired-judge rejection (owner, 2026-07-31).
The orchestrator runs gates and keeps ledgers but never substitutes its judgment
for yours.

### The sweep

926 verdicts, 463 items, **0 nulls** — every rejection is a real judgment, not a
capacity refusal.

```
gpt-5.6-terra     keep 290   reject 173   (37%)
deepseek-v4-pro   keep 328   reject 131   (28%)

clean in both lanes  245
BOTH rejected         90     <- start here
split (one lane)     128
```

Ids are in `research/frontier-13-rejections.json` (`both`, `split`).
Verdicts with reasons: `research/frontier-13-judge.jsonl`.

**Work the 90 agreed rejections first.** Two adversarial refuters from different
model families, reading byte-identical frozen prompts, independently rejecting the
same item is the strongest signal available. The 128 splits are weaker and
historically where false positives concentrate — but they still need a verdict.

### THE RULE THAT BINDS THIS STEP (R1, owner 2026-08-03)

**Only `confirmed_fatal` licenses an edit.** A `confirmed_nonfatal` or
`false_positive` closes its ledger row with **no content, page, frontmatter,
contract, impact or judge mutation whatsoever.**

This is not fussiness. The text is frozen: any edit is a material rewrite under
SCHEMA §3, so a step-8 polish voids `verification.judge`, forces a rejudge, and
resamples a refuter — an unbounded loop converging on nothing. Cosmetic polish
and 30-second-gap tidying belonged at step 6 and that window is closed.

**Fatal repairs are deliberately uncapped.** A proof that keeps yielding real
fatal defects is either converging on correctness or is actually false, and both
must run to conclusion.

### Ledger format — exact-hash, one row per rejection

`research/frontier-13-judge-adjudications.jsonl`, one JSON object per line:

```json
{"id":"...","model":"deepseek-v4-pro","context_sha256":"...","item_sha256":"...",
 "outcome":"confirmed_fatal|confirmed_nonfatal|false_positive",
 "defect_type":"logic|dependency_citation|other"}
```

`item_sha256` is the sha256 of the normalized item text (verification block
excluded) **at adjudication time** — i.e. before your repair. `tools/step8-guard.mjs`
checks every item changed since the `pre-step8` snapshot against these rows; an
edit without a licensing `confirmed_fatal` row fails as `nonfatal-edit`, and a row
without a hash fails as `judge-adjudication-unhashed`.

The `pre-step8` baseline is already recorded in
`research/frontier-13-touches.json`.

### Hard rules

- **No permission prompts of ANY kind**, from you or any subagent; no segment of
  an `&&` chain may raise one. If blocked, **record a blocker**.
- Adjudicate **from disk**. A judge's stated reason is a claim; open the item and
  every dependency it cites before confirming or refuting.
- Name the exact changed items for rejudge. A repaired item's own `item_sha256`
  changes so it must rejudge; its **unedited page-mates are spared** (owner,
  2026-08-06) — repairing one item moves the whole pair's context hash, and the
  strict reading forced pointless rejudges of untouched siblings.

### Context worth carrying

Step 6 already found and repaired ~40 confirmed fatal defects before the judges
saw this text: inflated dependency restatements, an `lcm` applied to arbitrary
lists by a definition reading "Two arguments only", a cited clause no library item
states, and a regularity-lemma bound that had to change because the honest
estimate did not support it. **Expect a low confirmed-fatal rate here** — this
project has measured 41%/31% rejection rates converting to 2.7% confirmed fatal.
A high rate would itself be a finding worth flagging.

### Report

`research/frontier-13-alpha-a-step8.md`: counts by outcome and defect type, the
exact items repaired, the rejudge target list, and where the two models agreed
versus split. Then run `node tools/step8-guard.mjs` and give its output verbatim.
