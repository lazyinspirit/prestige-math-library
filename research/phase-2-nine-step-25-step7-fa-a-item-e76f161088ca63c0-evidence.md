# Final adjudicator evidence — group a, queue position 1 of 1

Item: `cex-pointwise-cdf-convergence-at-a-jump-is-not-required`.
Run: `phase-2-nine-step-25`. Decision: **repaired**. Source status: **familiar**.

## Independent review and exact history

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the exact dispatch queue `research/phase-2-nine-step-25-step7-fa-a-item-e76f161088ca63c0.json` before repair. Reviewed the complete current item, both declared dependency definitions, the published law and random-variable definitions underlying F2, both `library/probability/weak-convergence-tightness-and-representation*.md` pages, and the preceding Dirac-laws example as context, not as an added dependency. Reviewed the item's batch-3 manifest, coverage entry, both current proof contracts, and the item's boundary/risk record. Existing independent risk-review attribution is preserved; an explicit FA supplement records the additional interface check.

The Step-6 rejection in `research/phase-2-nine-step-25-judge.jsonl` at 2026-09-10T06:40:06.172Z identifies division by zero under zero-based natural indexing. The Sol adjudication in `research/phase-2-nine-step-25-judge-adjudications.jsonl` at 2026-09-10T07:19:32.152Z and the corresponding section of `research/phase-2-nine-step-25-alpha-step7-a.md` correctly restrict the example to n >= 1. That restriction is retained.

The one Terra rejudge at 2026-09-10T08:50:45.981Z rejects applying a random-variable CDF definition to bare measures without constructing any random variables. Its context hash is `df1c68890eb391fb2e1996d1c5680e2455548263513143d4aa5fdadd0ce241bc`; its judge item hash is `89772df558bf10725bfd13784f537f80599bd2a81bd6ae87ff4ec883dfabe2ac`. The per-item closure file records this same unresolved rejection. I independently agree that the supplied interface warrants an explicit realization, although the intended point-mass example is mathematically standard. Sol's indexing repair alone did not supply it.

Pre-FA itemHashGuard: `cdc1d76881652c99a240b9fac911fc926fe8e4fd3e1ef52e0a93dfd866a03240`.

## Mathematical basis and repair

Step 1.1 now constructs the singleton probability space with total mass one. Its countable additivity follows because a disjoint family contains at most one nonempty event. The maps X_n(*)=1/n (n >= 1) and X(*)=0 are measurable: all Borel preimages are empty or the entire singleton. The law of each map assigns mass one exactly to sets containing its constant value, hence is precisely the stipulated Dirac law. Defining F_n=F_{X_n} and F=F_X now applies F2 literally.

Step 2.1 justifies point-mass integration first for simple functions, then by nonnegative simple approximation and positive/negative parts. Consequently every bounded continuous real test satisfies integral f dmu_n=f(1/n) -> f(0)=integral f dmu. This is exactly F1's weak-convergence criterion.

Step 3.1 computes the right-closed CDFs: F_n(t)=1 when t>=1/n and zero otherwise; F(t)=1 when t>=0 and zero otherwise. Thus F_n(0)=0 for every positive index whereas F(0)=1 and the left limit of F at zero is zero. Weak convergence therefore fails to force CDF convergence at this limiting jump. At every t<0 all these CDFs vanish; at each fixed t>0 they eventually equal one, so this witness does not contradict the continuity-point convention of the A/B pair. No assertion at n=0 is made. No coupling theorem, choice, or new supplier is needed.

The declared dependencies remain `def-weak-convergence-of-borel-probability-measures` and `def-cumulative-distribution-function-of-a-random-variable`; the latter already includes the law interface and its random-variable prerequisites. Neither dependency is defective or edited. No existing or new dependency requires a repair licence, a new lemma, or additional judgment.

This mathematics (constant random variables, their point-mass laws, bounded test convergence, and explicit CDF evaluation) is familiar enough to verify completely from the local definitions. No external source was consulted and no external reading is claimed. The item's inherited bibliographic reference is retained as provenance, not presented as newly verified evidence.

## Scoped metadata and checks

Updated only this item's mathematical text and its entries in:
- `research/phase-2-nine-step-25-batch-3.pages.json` (positive-index statement and explicit realization strategy);
- `research/phase-2-nine-step-25-batch-3.coverage.json` (matching support and proof plan);
- `research/phase-2-nine-step-25-batch-3.proof-contracts.json` and `research/phase-2-nine-step-25-proof-contracts.json` (exact three derivations, citation uses, affected boundaries, and FA risk supplement).

The page placement, item inventory, statement scope, and dependency edges are unchanged. Read `briefs/tasks/frontier-dependency-ledger.md`: its consumer-batch input rule applies to dependency changes. Here no dependency was repaired or added, so there is no changed cross-batch input row and no ledger refresh is required. No other group's item or historical independent judgment was edited.

Focused precheck initially requested canonical phase numbering. Adopted 1.1, 2.1, 3.1 and synchronized the contracts. Final focused results:
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-pointwise-cdf-convergence-at-a-jump-is-not-required.md`: pass, 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-3.proof-contracts.json --strict --items cex-pointwise-cdf-convergence-at-a-jump-is-not-required`: 0 errors, 0 warnings, 1/1 checked.
- Same focused command against `research/phase-2-nine-step-25-proof-contracts.json`: 0 errors, 0 warnings, 1/1 checked.
- `node tools/rendercheck.mjs items/cex-pointwise-cdf-convergence-at-a-jump-is-not-required.md`: one file passes YAML, wikilink, delimiter and KaTeX checks.

These are focused mechanical checks plus the independent mathematical argument above, not another judge verdict. No third consumer judgment was invoked and no pass stamp was created. No unresolved mathematical obligations or blockers remain. Next action: record the repaired disposition through the prescribed terminal recorder, then return control to the owning Alpha via the engine.

Final post-FA itemHashGuard: `7ccc7a43bda290dab14c2ff233f71736e659ccd77d6994b425b319295aed2c36`. Final reread caught and restored an accidental source-locator substitution during phase renumbering; the inherited locator remains unchanged, and rendercheck passed again on the final bytes.
