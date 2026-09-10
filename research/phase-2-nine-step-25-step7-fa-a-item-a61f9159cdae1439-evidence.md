# Final adjudication: thm-converging-together-lemma

Run: phase-2-nine-step-25. Group: a. Queue position: 1 of 1 in research/phase-2-nine-step-25-step7-fa-a-item-a61f9159cdae1439.json.
Disposition: repaired. Source status: familiar.

## Independent inspection and decision

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md. Inspected the complete current item and all four declared dependencies: thm-portmanteau-theorem, thm-continuity-from-above-for-measures, def-convergence-in-probability, and lem-distance-to-set-is-lipschitz. Also inspected the local definitions def-convergence-in-distribution-of-random-elements and def-random-element-and-real-random-variable, the A/B pages library/probability/weak-convergence-tightness-and-representation.md and its -examples.md companion, the owning batch-3 manifest and coverage entry, both owning/aggregate proof-contract entries including boundaries and risk review, and the Step-7 scope/ownership entry. The pair places Portmanteau and the distribution definition before this consumer; its examples do not change the theorem's hypotheses.

The initial Terra rejection in research/phase-2-nine-step-25-judge.jsonl (context 640935aec26a6130836c78199b1d466f6c3e7233bcd07abd90f4c7529174e5f5) concerned the undefined radius 1/m at m=0. Sol's confirmed-fatal adjudication in research/phase-2-nine-step-25-judge-adjudications.jsonl and item section in research/phase-2-nine-step-25-alpha-step7-a.md replace this by E_m=F^[1/(m+1)] for m in N. That repair is correct under the natural-number convention explicitly used by continuity from above.

The one Terra rejudge (context 1162190c20817dc1b0519040b199e643c06cd8c6a9e98ea30ba2045f20e9d0fc) instead rejects missing Borel measurability of Y_n. The coverage entry intends S-valued random elements, but the actual statement merely said X_n,Y_n “take values” in S, and the page has no explicit blanket measurability convention. Measurable distance alone cannot supply the missing premise. For example, on a probability space with a nonmeasurable subset A, let X_n=X=0 and let Y_n equal 1/(n+1) on A and -1/(n+1) off A. Distances are constant and tend to zero, whereas the inverse image under Y_n of the positive half-line is A. Thus the written distance hypothesis does not define the law of Y_n. This is a typing/hypothesis defect, not a flaw in the closed-set argument.

The final repair explicitly requires X_n, Y_n and X to be Borel-measurable random elements of S. This restores the intended coverage claim without requiring separability, completeness, a single common space for all n, or joint measurability of the pair. Retaining the separate distance-measurability assumption is essential for the stated arbitrary metric-space scope. No independence or AC is used.

## Mathematical verification

For every nonempty closed F and epsilon>0, the distance lemma makes F^[epsilon] closed and hence Borel. The repaired measurability hypotheses define each event and each marginal Borel probability law. If Y_n is in F and d(X_n,Y_n)<=epsilon, then d(X_n,F)<=epsilon, giving the displayed union bound. Portmanteau for the laws of X_n, with epsilon fixed, and the vanishing error imply limsup P(Y_n in F)<=P_X(F^[epsilon]).

For all m in N the radius 1/(m+1) is positive and decreases to zero. The corresponding sets decrease, contain F, and have intersection exactly F: a point outside closed F has a positive-radius ball disjoint from F, so its distance from F is positive and it is excluded for sufficiently large m. All their probabilities are at most one. Continuity from above therefore identifies their decreasing masses with P_X(F). Since the limsup bound holds for every m, it is bounded by that infimum. Empty F gives zero directly. The closed-set implication of Portmanteau now yields Y_n=>X. This verifies the entire repaired proof, including equality at the radius, zero distances and the finite-measure hypothesis.

This mathematics is familiar: measurable maps and pushforward laws, metric distance neighborhoods, a union bound, and continuity of finite measures. No external source was consulted or claimed read; the complete local dependency arguments and exact interfaces suffice. Existing bibliography entries are retained without inventing external verification.

## Scope, metadata and checks

Pre-FA itemHashGuard: feeef8f680eba2a77fbbc052230946142c4d04025f5cd83726357598d3f44408.
Post-FA itemHashGuard: 863c3baef27e70c32ce3957c5fe4b363f0869cd928122033fa968b5db1f6b511.

Changed only this theorem's statement in items/thm-converging-together-lemma.md, its owning research/phase-2-nine-step-25-batch-3.pages.json statement, and its matching research/plan-spec.json statement; reconciled only its entries in research/phase-2-nine-step-25-batch-3.proof-contracts.json and research/phase-2-nine-step-25-proof-contracts.json. Preserved the earlier risk review with an attributed FA addition, corrected its stale radius boundary note, and synchronized the aggregate derivation with Sol's actual repaired proof. Coverage already states random elements and needs no change. Page order and Step-7 inventory are unchanged.

No dependency item or edge changed, no new lemma was needed, and no owner-prerequisite-repair licence is applicable. Read briefs/tasks/frontier-dependency-ledger.md and the owning batch-3.cross-batch-dependencies.json: this consumer has no cross-batch edge (Portmanteau is in the same batch; the other three suppliers are published). Consequently there is no affected consumer-batch row to update and no dependency repair requiring a ledger refresh. Unrelated batch rows are preserved.

Focused checks completed successfully:
- node tools/tsx-run.mjs tools/precheck.mts items/thm-converging-together-lemma.md: 1 checked, 0 failing.
- node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-3.proof-contracts.json --strict --items thm-converging-together-lemma: 0 errors, 0 warnings.
- node tools/proof-contract.mjs research/phase-2-nine-step-25-proof-contracts.json --strict --items thm-converging-together-lemma: 0 errors, 0 warnings.

These are focused structural checks accompanying the independent mathematical argument above, not judge verdicts. No third consumer judgment or pass stamp was created. Unresolved mathematical obligations: none. Next action: record this repaired terminal decision using tools/step7-terminal-resolution.mjs and return control to the engine/owning Alpha.
