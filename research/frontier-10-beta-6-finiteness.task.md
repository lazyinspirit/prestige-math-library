# frontier-10, batch 6 — one citation fix, then done

`lem-plane-face-handshake-by-girth` is **rejected by both judge lanes** and is the
last thing blocking this run. One concrete defect, one available fix.

## The defect

Step 1.1 sums over the face set $F(G)$ using `def-sum-over-a-finite-index-set`,
which requires a finite index set — but **nothing establishes that $F(G)$ is
finite**. Both lanes flagged it independently:

> the sum over F(G) uses the finite-sum definition which requires F(G) to be
> finite, but finiteness of the face set is not proved here

The gap predates the Statement change; exporting the identity
$\sum_f\ell(f)=2|E|$ into the Statement made it load-bearing and visible.

## The fix

`lem-plane-graph-faces-are-finite-with-one-unbounded-face` is on your own page at
position #7, against this lemma's #20 — a legal backward citation. Its Statement:

> Every plane graph has finitely many faces, exactly one of which is unbounded.

Add it to `deps`, add an `[L#]` fact restating it faithfully, and cite that fact
in step 1.1 where the finite sum is taken. Keep `coverage.json` and
`proof-contracts.json` in step.

**Restate it accurately.** Inflated `[L#]` restatements were the single largest
fatal class in this run — 16 of them. Do not write more than that lemma gives.

## Do not change anything else

The Statement and title are settled and must not move:

- Statement exports $\sum_{f\in F(G)}\ell(f)=2|E(G)|$ **and** the consequent
  $g|F(G)|\le2|E(G)|$.
- The title says "every facial boundary walk has length at least $g$", **not**
  "girth". I broke this earlier by writing "girth": a one-edge tree has infinite
  girth but a face of boundary walk length 2, so $3\cdot1\le2$ is false. Both
  lanes caught it. Leave the title alone.

## Gates

```
node tools/tsx-run.mjs tools/precheck.mts
node tools/depcheck.mjs
node tools/proof-contract.mjs research/frontier-10-batch-6.proof-contracts.json --strict
node tools/coverage-checklist.mjs research/frontier-10-batch-6.coverage.json
```

Report the added fact and the changed step.
