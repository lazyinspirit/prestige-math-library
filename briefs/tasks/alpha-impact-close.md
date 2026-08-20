# Impact-receipt closure, run `{{run}}`

The `impact-receipt` gate is red. The receipt at `research/{{run}}-impact.json`
has just been mechanically refreshed against the full window, which adds
`"status": "pending"` rows for consumers the old receipt predates.

Reproduce from the repo root:

```
node tools/impact-audit.mjs --touches research/{{run}}-touches.json \
  --from pre-author --to post-step9 --receipt research/{{run}}-impact.json
```

The window is `pre-author` → the newest snapshot, and both ends matter: a
baseline taken *after* authoring makes the diff empty by construction, so the
gate confirms instead of checking.

For EVERY `pending` disposition: open the consumer item on disk, read the
step(s) citing the changed interface against that interface's CURRENT text,
and write the real disposition — `still-licensed`, `repaired`, or
`not-load-bearing` — with a concrete note naming what you actually checked.
Never bulk-mark; each row is one read.

If a consumer is genuinely broken by an interface change, that is a fatal
defect: repair it under the standing licence, ledger row in the same act, and
note that the item must rejudge.

Do not touch dispositions that are already written. Exit when the command
above exits 0.

**Read the latest prior repair-round result for this stage before deriving
anything** (`research/{{run}}-dispatch/`). **No permission prompts of any
kind**, including inside an `&&` chain.
