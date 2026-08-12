# frontier-11, batch 3 — rendercheck failures from your labeled-fact insertion

You are **Beta-frontier-11-3**. Your artifact reconciliation introduced labeled
facts into proofs — correct and required — but it broke inline math in the
process. `rendercheck` now reports **8 errors**, code
`blank-line-in-inline-math`, in `items/thm-erdos-stone-for-balanced-blowups.md`
and possibly others.

**A blank line inside `$…$` ends the paragraph and orphans the delimiter**, so the
page renders as broken TeX. Two reported instances:

- `$-uniform hypergraph. [given, F1, F2] 2.1 Hypergraph KST says that, for large $`
- `$. [step 1.2, given, F3, F4] 3.1 Step 2.1 gives the density upper bound $`

Both look like a step boundary landed inside a math span while you were inserting
the fact labels. Repair so each inline span opens and closes within one
paragraph, and each numbered step begins outside math.

Run `node tools/rendercheck.mjs` and fix **every** error it reports, not only the
two quoted — it reports 8. Read each repaired line character by character; a
delimiter fix can mask a second defect on the same line.

Then re-run, in this order:

```
node tools/tsx-run.mjs tools/precheck.mts <changed item files>
node tools/proof-contract.mjs research/frontier-11-batch-3.proof-contracts.json --strict
node tools/rendercheck.mjs
```

Keep `verification.precheck` truthful. Do not change any Statement, title,
hypothesis or claim — this is a rendering repair. Do not touch another batch,
`plan-spec.json`, `library/real-analysis/the-complex-exponential-and-eulers-formula.md`,
or any normative doc. Do not run `tools/gates.mjs`.
