# frontier-10, batch 6 — owner-directed addition after step 10

The owner reviewed the step-10 rundown and directed one addition to your batch.

## What and why

`cor-planar-simple-graph-edge-bound` currently states equality for a
**connected** plane triangulation. That hypothesis is **redundant** — every plane
triangulation of order at least three is connected — but Alpha narrowed the
Statement at step 8 rather than assert it, because proving connectedness needs a
lemma and step 8 permits only fatal repairs. The owner has authorised building
that lemma now.

## Author the lemma

Add to `plane-graphs-euler-and-the-five-colour-theorem`:

**Every plane triangulation with at least three vertices is connected.**

Alpha named the argument: *a face meeting two components has a disconnected
boundary subgraph*, contradicting the triangulation condition that every face is
bounded by a 3-cycle. Work it out properly from your page's own toolkit — do not
take that sketch as a proof. Mind the boundary cases: exactly three vertices, and
the outer face.

Suggested id `lem-plane-triangulation-is-connected`, but follow the page's
naming. Source it: this is standard (Diestel ch. 4 is already in your ledger) —
find the exact statement rather than inventing one, and give it a real harvest
row in `coverage.json` with its source.

## Then update the two consumers

1. **`cor-planar-simple-graph-edge-bound`** — drop "connected" from the equality
   clause, cite the new lemma, and adjust the surrounding sentence, which
   currently explains that two-connectivity supplies the connectedness the
   equality case assumes. That explanation becomes unnecessary.
2. **`prop-maximally-planar-edge-characterisation`** — its `[L1]` was corrected
   an hour ago to read "with equality for a connected plane triangulation", to
   match the source exactly. Once the source drops "connected", bring `[L1]` back
   into exact agreement.

Keep `pages.json`, `coverage.json` and `proof-contracts.json` in step with all
three items.

## A warning from the last hour

I edited that lemma's *title* myself and introduced a false one: I wrote "girth
at least $g$" where the Statement says "every facial boundary walk has length at
least $g$". Both judges rejected it with the same counterexample — a one-edge
tree has infinite girth but a face of boundary length 2. **Girth and facial
boundary walk length are not interchangeable.** Do not repeat that in your new
lemma's title or Statement.

## Gates

```
node tools/tsx-run.mjs tools/precheck.mts
node tools/depcheck.mjs
node tools/rendercheck.mjs
node tools/content-policy.mjs research/frontier-10-batch-6.pages.json --rehomed research/frontier-10-rehomed.json
node tools/coverage-checklist.mjs research/frontier-10-batch-6.coverage.json
node tools/proof-contract.mjs research/frontier-10-batch-6.proof-contracts.json --strict
```

Do not run `tools/gates.mjs` (EPERM in this sandbox). Author `status: draft` with
both provenance components. Report the three items and their new/changed text.
