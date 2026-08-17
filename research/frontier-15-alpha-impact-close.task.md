# Impact-receipt closure, run `frontier-15`

The `impact-receipt` gate is red. The receipt at
`research/frontier-15-impact.json` has just been mechanically refreshed
against the full window (`pre-author` → the newest snapshot), which added
`"status": "pending"` rows for consumers the old receipt predates — expected
to be the three step-9 builds that cite changed interfaces
(`ex-the-group-action-monad-and-its-algebras`,
`prop-complement-and-disjoint-union-axioms-for-a-lambda-system`,
`thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group`),
plus anything the wider window surfaces.

Reproduce from the repo root:

```
node tools/impact-audit.mjs --touches research/frontier-15-touches.json \
  --from pre-author --to post-step9 --receipt research/frontier-15-impact.json
```

For EVERY `pending` disposition: open the consumer item on disk, read the
step(s) citing the changed interface against that interface's CURRENT text,
and write the real disposition — `still-licensed`, `repaired`, or
`not-load-bearing` — with a concrete note naming what you actually checked.
Never bulk-mark; each row is one read. If a consumer is genuinely broken by
an interface change, that is a fatal defect: repair it under the standing
licence, ledger row in the same act, and note that the item must rejudge.

Do not touch dispositions that are already written. Exit when the command
above exits 0.

**Read the latest prior repair-round result for this stage before deriving
anything** (`research/frontier-15-dispatch/`). **No permission prompts of any
kind**, including inside an `&&` chain.
