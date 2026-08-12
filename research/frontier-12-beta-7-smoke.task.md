## Batch 7 fix — two `finite_smoke` rows name no check

Your authoring is otherwise complete and accepted. **One mechanical defect**, in
`research/frontier-12-batch-7.proof-contracts.json`.

These two contracts carry a `finite_smoke` entry with `claim` and `checked_in`:

- `cex-a-functor-preserving-monomorphisms-but-not-pullbacks`
- `cex-a-full-subcategory-limit-can-differ-from-ambient-limit`

Neither field is read by the gate. `tools/finite-smoke.mjs` requires:

- **`check`** — the name of a **registered** check. Free text fails with
  `unknown finite smoke check`.
- **`asserts`** — an exact excerpt of your item's text, whitespace-normalised,
  which must appear verbatim in `items/<id>.md`. It is what ties the machine
  check to the sentence it corroborates.

Plus any parameters the check takes.

### The checks now exist

Your claims were good — they were just written in fields nothing reads. Rather
than drop them, the orchestrator implemented two real checks, because both of
your witnesses are finite posets and a poset is a category in which a pullback is
exactly a meet. Verified by `node tools/finite-smoke.mjs --self-test`:

```
PASS monotone-map-need-not-preserve-meets: f(a^b) = f(0) = 0 but f(a)^f(b) = 1,
     so meets are not preserved while every arrow stays monic
PASS full-subposet-meet-differs-from-ambient: ambient meet of a,b is m; the full
     subposet omits it, so its meet is q — the inclusion does not preserve this limit
```

Both reproduce your own claims independently. Their **defaults are exactly your
witnesses**, so you may pass no parameters at all:

- `monotone-map-need-not-preserve-meets` — defaults to the diamond
  `0 < a,b < 1` collapsed onto the 2-chain, pair `['a','b']`. Parameters, if you
  want them explicit: `domain_covers`, `codomain_covers`, `map`, `pair`.
- `full-subposet-meet-differs-from-ambient` — defaults to the ambient
  `0 < q < m < a,b` with full subposet `['0','q','a','b']`, pair `['a','b']`.
  Parameters: `ambient_covers`, `subset`, `pair`.

**If your item's construction differs from those defaults in any way, pass
explicit parameters matching YOUR construction rather than accepting a default
that happens to pass.** A check that verifies a different poset than the one your
item builds is worse than no check.

### What to do

Rewrite the two `finite_smoke` entries with `check` and `asserts` (and parameters
if needed). Keep the `claim` text if you like — extra fields are ignored — but
`check` and `asserts` must be present and correct.

Then confirm:

```
node tools/finite-smoke.mjs research/frontier-12-proof-contracts.json --items cex-a-functor-preserving-monomorphisms-but-not-pullbacks,cex-a-full-subcategory-limit-can-differ-from-ambient-limit
```

That reads the **merged** contract, which the orchestrator regenerates from your
batch file — so fix the batch file, and report when done; the orchestrator
re-merges and re-gates.

Nothing else about batch 7 changes. Do not edit `plan-spec.json` or any item.
