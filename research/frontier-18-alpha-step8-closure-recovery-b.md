# Frontier 18 - Alpha group b step-8 closure recovery

## Scope

This recovery dispatch took the exact group-`b` remainder from the live judge/adjudication join after the round-2 recovery work. The current scope was 13 exact rejection rows over 9 items in batches 5 and 10. I preserved the prior group-b step-8 work, read only the current rows, and wrote only inside group `b`.

Rows closed here: 13 exact rows. Confirmed fatal rows: 10. Confirmed nonfatal rows: 3. False positives: 0.

No cross-group finding was raised. No row belonged to no group. No published-item repair was needed.

## Exact rows and dispositions

- `cex-cauchy-davenport-fails-for-a-composite-modulus` · `gpt-5.6-terra` · `914a84ba701c`. Confirmed nonfatal. Step 3.1 omits a citation for the elementary fact that the modulus is not prime; the counterexample and the hypothesis boundary remain mathematically clear with a thirty-second reader fill-in, so no step-8 edit is licensed.
- `cor-sauer-shelah-polynomial-bound` · `gpt-5.6-terra` · `a93080fa231d`. Confirmed nonfatal. Fact `F1` packages a short increasing-enumeration injection from the cited counting definitions; the argument is local and immediate, so the row closes without mutation.
- `ex-restricted-sets-in-a-complete-bipartite-graph` · `gpt-5.6-terra` · `f88f6629c929`. Confirmed fatal. The example used `\epsilon`-restricted with only `\epsilon<1/2`, omitting the definition’s domain `\epsilon\ge0`. I repaired the statement and Given to `0\le\epsilon<1/2`.
- `ex-restricted-sets-in-a-union-of-two-cliques` · `deepseek-v4-pro` / `gpt-5.6-terra` · `afd7964d96ce`. Confirmed fatal. Fact `L1` dropped the cited nonempty hypothesis, and the item also needed the domain `0\le\epsilon<1/2`. I restored the nonempty hypothesis, made `X` nonempty, and fixed the title/example domain.
- `ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs` · `gpt-5.6-terra` · `ec5965be850b`. Confirmed nonfatal. The connected-`P_3`-free-implies-clique step is a short omitted shortest-path argument, not a fatal break in the example.
- `lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies` · `deepseek-v4-pro` / `gpt-5.6-terra` · `d66a4fd39fb2`. Confirmed fatal. Fact `L2` cited only the regularity definition for a monotonicity step on a self-pair. I replaced it with the direct monotonicity argument from the published definition and removed the unused dependency.
- `lem-grid-reduction-of-a-multivariate-polynomial` · `deepseek-v4-pro` · `3ba3bd87011f`. Confirmed fatal. Fact `F3` cited the evaluation/root definition for a product-vanishing claim it does not state. I rewrote `F3` as the direct factor computation `g_i(s)=0`.
- `lem-grid-reduction-of-a-multivariate-polynomial` · `gpt-5.6-terra` · `3ba3bd87011f`. Confirmed fatal. Step 1.1 falsely claimed each single subtraction lowers the offending separate degree. I replaced the monomial-by-monomial argument with successive monic division in each variable, which also preserves the top-degree coefficient clause cleanly.
- `thm-alon-furedi-hyperplane-cover-of-the-cube` · `deepseek-v4-pro` / `gpt-5.6-terra` · `1a46e57c3c96`. Confirmed fatal. The proof built its cube polynomial with coordinates `x_1,\dots,x_n` while the cited coordinate-space convention indexes vectors by `i<n`. I reindexed the product, top monomial, and Nullstellensatz application by `i<n`.
- `thm-nikiforov-few-induced-copies-force-a-linear-restricted-set` · `gpt-5.6-terra` · `f145a172b7b1`. Confirmed fatal. Fact `L4` omitted the cited sparsity lemma’s nonempty hypothesis. I restored that hypothesis before step 3.1 applies the fact to a singleton.

## Repaired items

- Batch 5: `lem-grid-reduction-of-a-multivariate-polynomial`, `thm-alon-furedi-hyperplane-cover-of-the-cube`
- Batch 10: `ex-restricted-sets-in-a-complete-bipartite-graph`, `ex-restricted-sets-in-a-union-of-two-cliques`, `lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies`, `thm-nikiforov-few-induced-copies-force-a-linear-restricted-set`

Every changed proof-bearing item passed precheck after repair. I regenerated the owning batch proof-contract entries for all 6 changed items.

## Rejudge targets

- `ex-restricted-sets-in-a-complete-bipartite-graph`
- `ex-restricted-sets-in-a-union-of-two-cliques`
- `lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies`
- `lem-grid-reduction-of-a-multivariate-polynomial`
- `thm-alon-furedi-hyperplane-cover-of-the-cube`
- `thm-nikiforov-few-induced-copies-force-a-linear-restricted-set`

## Gate results

- `node tools/tsx-run.mjs tools/precheck.mts ...`
  Result: all 6 changed proof-bearing items pass.
- `node tools/regen-contract-entries.mjs ...`
  Result: regenerated 2 batch-5 entries and 4 batch-10 entries.
- `node tools/proof-contract.mjs research/frontier-18-batch-5.proof-contracts.json --strict --items ...`
  Result: 0 errors, 0 warnings, 2/2 items checked.
- `node tools/proof-contract.mjs research/frontier-18-batch-10.proof-contracts.json --strict --items ...`
  Result: 0 errors, 0 warnings, 4/4 items checked.
- `node tools/citecheck.mjs ...`
  Result: 9 scoped items scanned, no warnings.
- `node tools/citation-fidelity.mjs research/frontier-18-batch-5.proof-contracts.json research/frontier-18-batch-10.proof-contracts.json --fail-on-missing-quote`
  Result: 772 citations checked, no missing quote and no widening candidate.
- `node tools/depcheck.mjs`
  Result: global pass; only pre-existing repository warnings outside this recovery scope.
- `node tools/step8-guard.mjs --touches research/frontier-18-touches.json --baseline pre-step8 --adjudications research/frontier-18-judge-adjudications.jsonl`
  Result: `OK - every step-8 edit is licensed by a confirmed fatal defect` (231/231 changed items licensed level-wide).
- `node tools/step8-scope.mjs check --run frontier-18`
  Result: 4 groups scoped, 796 items partitioned, 51 open rejection rows still routed level-wide, 0 cross-group findings answered. Those remaining rows are outside the group-b recovery scope.
- Exact live join over `research/frontier-18-judge.jsonl` and `research/frontier-18-judge-adjudications.jsonl`, filtered to group `b` items and exact `(id, model, context_sha256)` keys
  Result: 0 group-`b` unadjudicated rejection rows remain.
- `node tools/defect-ledger.mjs check --run frontier-18 --adjudications research/frontier-18-judge-adjudications.jsonl`
  Result: 386 frontier-18 defect rows checked, 0 errors.

## Closure note

The official `node tools/level-coverage.mjs --judge-only --verify-current-context ... --allow-pending-rejudge --out research/frontier-18-judge-closure.json ...` recomputation again failed to yield a usable fresh closure receipt for this dispatch. The file timestamp advanced, but its `unadjudicated_rows` content remained stale and still listed group-b rows that are now present in `research/frontier-18-judge-adjudications.jsonl`. I interrupted the long-running process after more than a minute with no terminal result. The reliable closure evidence for this recovery is the exact live join above: group `b` has 0 remaining unadjudicated rows, and the repaired group-b items are now waiting only for engine-owned rejudge.
