# frontier-13 — finite-smoke authoring pass (corrected brief)

**My first brief was wrong and you were right to refuse it.** It asked you to add
tests when the registry held only graph, poset and cyclic-subgroup checks, and a
contract can *reference* a registered check but never *define* one. Batches 1 and
5 correctly reported this as a blocker rather than attaching an unrelated check to
manufacture coverage. That was the right call and it is what got the tool fixed.

**Four checks have now been added to `tools/finite-smoke.mjs`**, all verified
running against real items in this run:

| check | params | what it falsifies |
|---|---|---|
| `binomial-congruence-solution-count` | `max_modulus`, `max_exponent` | a dropped primitive-root or coprimality hypothesis in a congruence count |
| `vieta-elementary-symmetric` | `max_root`, `max_degree` | a sign or index-shift error relating roots to coefficients |
| `linear-recurrence-matches-rational-series` | `max_order`, `terms` | an off-by-one in numerator degree or initial-value indexing |
| `matrix-ring-laws-mod-n` | `max_modulus`, `size` | a transposition or convention error in matrix statements over a commutative ring |

Plus the six that already existed: `tree-characterisation`,
`forest-edge-component-count`, `induced-complement-commutes`,
`monotone-map-need-not-preserve-meets`, `full-subposet-meet-differs-from-ambient`,
`cyclic-subgroup-lagrange`.

## The schema — this is what my first brief omitted

`contracts` is an **object keyed by item id**. Each `finite_smoke` entry is:

```json
{ "check": "binomial-congruence-solution-count",
  "asserts": "<exact text excerpt from that item's own file>",
  "max_modulus": 60, "max_exponent": 8 }
```

**`asserts` must appear verbatim in `items/<id>.md`** or the gate fails with
`smoke-assertion-mismatch`. That is deliberate: it makes attaching an unrelated
check impossible rather than merely discouraged. Quote the hypothesis-bearing
clause of the Statement the check actually probes.

## Hard rules

- **No permission prompts of ANY kind**; if blocked, **record a blocker**.
- **Write scope: `research/frontier-13-batch-<i>.proof-contracts.json` only.**
- **Add `finite_smoke` entries. Change nothing else** — no claim, citation,
  derivation, boundary row or provenance value moves.
- **Do not attach a check to an item it does not probe.** If none of the ten fits
  an item, that item gets no test and you say so. A statement about arbitrary
  fields or infinite-dimensional spaces correctly gets none.

## Where to look first

`fs-` items assert a FALSE statement and exist to be refuted; `cex-` items carry a
counterexample's defining computation. Both are finite by construction. Then any
claim with an enumerable parameter — congruence counts, small graphs, finite
groups, matrices over a small ring, low-degree polynomials, finite posets.

## Then

```
node tools/finite-smoke.mjs research/frontier-13-batch-<i>.proof-contracts.json
node tools/proof-contract.mjs research/frontier-13-batch-<i>.proof-contracts.json --strict
```

Both exit 0, and finite-smoke must report a **nonzero check count**. Report tests
added, items covered, items deliberately uncovered and why, and — immediately, not
in a summary — **any check that actually found a counterexample.**


---

# This dispatch

## Batch 5 — finite-smoke authoring

Your contract file: `research/frontier-13-batch-5.proof-contracts.json`.
Currently **0 finite-smoke tests**. Add them per the brief.

Your `fs-` and `cex-` items are the first target — they are already claims with
explicit finite witnesses, and each should carry that witness as a test.
