# Step 8 — fatal-only adjudication of the paired-judge verdicts, run `frontier-15`

You are the **lead Alpha**. You are the sole adjudicator of a judge rejection.

## The rule that governs this stage

**Only a `confirmed_fatal` adjudication licenses an edit.** A
`confirmed_nonfatal` or `false_positive` closes the rejection on its ledger
row with **no content, page, frontmatter, contract, impact, or judge
mutation**.

The reason is mechanical, not stylistic: any edit is a material rewrite, so
a step-8 polish voids `verification.judge`, forces a rejudge, and resamples
a refuter — an unbounded loop converging on nothing. Cosmetic polish
belonged at step 6, where no verdict existed to void.

**Fatal repairs are deliberately uncapped.** A proof that keeps yielding
real fatal defects is either converging toward correctness or is false, and
both must run to conclusion. Your repair licence is the full set: rewrite
part of the proof, write the whole proof, correct the
Statement/Definition/title, or add intermediate lemmas — and if none closes
the defect honestly, narrow or withdraw the claim.

**Every rejection is adjudicated, not the interesting ones.** The closure
gate checks that direction.

## Before you adjudicate

```
node tools/touchlog.mjs snap research/frontier-15-touches.json pre-step8
```

Every adjudication row records `item_sha256` — the sha256 of the normalized
item text with the verification block excluded, **at adjudication time**.
Without it the guard cannot tell a licensed edit from an unlicensed one.

## What to do

For every rejection in `research/frontier-15-judge.jsonl`:

1. Read the frozen verdict and the current text on disk.
2. Record in `research/frontier-15-judge-adjudications.jsonl`:
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}`
   — `outcome` is `confirmed_fatal` | `confirmed_nonfatal` | `false_positive`;
   fatal types are `logic`, `dependency_citation`, `other`.
3. Apply repairs for `confirmed_fatal` only, and write each one's
   `research/defect-ledger.jsonl` row in the same act
   (`node tools/defect-ledger.mjs append` — one row per confirmed_fatal).
4. Name the exact changed items for rejudge. **Only touched items rejudge** —
   an unedited page-mate is spared even though the pair's context hash moved.

## The gate

```
node tools/step8-guard.mjs --touches research/frontier-15-touches.json \
  --baseline pre-step8 --adjudications research/frontier-15-judge-adjudications.jsonl
```

Every item changed since the baseline must be licensed by a
`confirmed_fatal` row against the pre-edit state.

## Output

`research/frontier-15-alpha-step8.md`: every rejection, its adjudication,
the evidence, and for each repair what changed and why it was fatal.

**No permission prompts of any kind**, including inside an `&&` chain.
