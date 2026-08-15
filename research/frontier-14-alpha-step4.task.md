## Step 4 — splice ids into `plan-spec.json`, one receipt per batch

You are the **lead Alpha**. Step 4 has one owner by design: one prose writer,
one global citation reader, one exact-hash ledger.

### Before anything else

Take the impact-audit touch snapshot **now, before any authoring**. A baseline
taken after authoring makes the diff empty by construction, and the gate then
confirms instead of checking — that happened on `frontier-13` and the receipt
was worthless.

```
node tools/touchlog.mjs snap research/frontier-14-touches.json pre-step5
```

### What to do

For each batch `i` in 1..N:

1. Read `research/frontier-14-batch-<i>.pages.json`, the batch notes, and group
   Alpha's step-3 review **and** its re-check for that batch.
2. Splice the scaffolded item ids into `research/plan-spec.json` under their
   pages, preserving declared order.
3. Run `node tools/validate-plan.mjs research/plan-spec.json` — it must be
   clean. `undeclared-prereq`, `b-leaf` and `size` are hard errors.
4. Write `research/frontier-14-splice-<i>.json` with the batch id, the item
   ids spliced, and the `validate_plan` result.

**Emit each receipt as it lands. Do not wait for all batches** — the authoring
stage releases per batch, and a receipt held back is a Beta idle for no reason.

### Hard rules

- An A page over **60 items** must have been split at step 3. If one is over
  now, stop and record a blocker; splitting after authoring is a rewrite.
- Item ids are immutable once published. These are new, so you are minting them
  — get them right, because renames go through `aliases` forever after.
- You may not author content, edit `items/`, or change any page's `order`.

**No permission prompts of any kind**, including inside an `&&` chain.
