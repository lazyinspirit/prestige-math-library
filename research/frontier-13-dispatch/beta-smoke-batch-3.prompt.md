# frontier-13 — finite-smoke authoring pass

`finite-smoke.mjs` currently reports **"0 errors, 0 checks"** across all 390
contracts in this run: not one declares a test. That is a gate passing while
checking nothing, and it would have reached the step-10 report as a green line.

## Hard rules

- **No permission prompts of ANY kind**, from you or any subagent; no segment of
  an `&&` chain may raise one. If blocked, **record a blocker**.
- **Write scope: your own `research/frontier-13-batch-<i>.proof-contracts.json`
  only.** Do not edit items, pages, the spec, or another batch.
- **Add tests. Change nothing else.** No claim, citation, derivation, boundary
  row or provenance value moves in this pass.

## What a finite smoke test is

A **bounded countermodel search**, never a general proof: enumerate a finite
family of small instances of a claim and check none refutes it. It cannot prove a
theorem. It catches a false statement, a dropped hypothesis, or an off-by-one
before a judge does.

The strongest example this run produced was done by hand, not in a contract: the
binomial-congruence corollary was checked over **18,895 solvable instances** —
every modulus below 120 with a primitive root, m = 1..14, every unit a — with zero
counterexamples. That is exactly the shape wanted, and it should have been a
`finite_smoke` entry so it re-runs.

## Where they belong

Prioritise, in this order:

1. **Every `fs-` item.** These assert a FALSE statement and exist to be refuted —
   each one should carry the explicit finite witness that refutes it.
2. **Every `cex-` item.** The counterexample's defining computation is a finite
   check; write it out.
3. **Claims with an enumerable parameter**: congruence counts, small graphs,
   finite groups of small order, matrices over a small ring, low-degree
   polynomials, finite posets.
4. **Any item where a hypothesis could be silently dropped** and small cases would
   expose it — degenerate, empty, zero/one-index, endpoint.

Do **not** invent a test for a claim with no finite instances. A statement about
arbitrary fields or infinite-dimensional spaces gets none, and that is correct —
say so rather than fabricating one.

## Then

```
node tools/finite-smoke.mjs research/frontier-13-batch-<i>.proof-contracts.json
node tools/proof-contract.mjs research/frontier-13-batch-<i>.proof-contracts.json --strict
```

Both must exit 0, and finite-smoke must now report a **nonzero check count**.
Report: tests added, items covered, items deliberately left uncovered and why,
and any claim where the search actually found a counterexample — **that last one
is a blocker and I need it immediately, not in a summary.**


---

# This dispatch

## Batch 3 — finite-smoke authoring

Your contract file: `research/frontier-13-batch-3.proof-contracts.json`.
Currently **0 finite-smoke tests**. Add them per the brief.

Your `fs-` and `cex-` items are the first target — they are already claims with
explicit finite witnesses, and each should carry that witness as a test.
