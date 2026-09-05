# Final-adjudicator evidence: `ex-two-universal-delta-functors-and-their-unique-isomorphism`

Disposition: `repaired`

Source status: `familiar`. No external verification was needed. The comparison theorem for universal delta functors and the degree-zero computation of derived functors are standard homological algebra familiar to the final adjudicator.

## Independent review

I inspected the current example and all three current direct dependencies; the A page `delta-functors-and-universality` and B companion; the batch-10 page manifest, coverage/notes, item proof contract, merged proof contract, and risk review; the Step-6 reader record; the Step-7 group context; both frozen judge rejections; both exact Alpha adjudications; and both Alpha repairs.

Both frozen rejections identified the same load-bearing omission at successive stages: universality of `(L_n^P F)` does not itself identify `L_0^P F` with `F`. Alpha's terminal item repair is mathematically correct. It assumes the abelian source and target categories required by the cited derived-functor results and cites `thm-left-derived-functors-form-a-homological-delta-functor`, whose statement supplies natural isomorphisms `L_0^P F ~= F` and `L_0^Q F ~= F`. The other dependency supplies universality for both derived delta functors under the stated right-exactness and enough-projectives hypotheses. Applying the unique-isomorphism corollary to those chosen natural degree-zero identifications gives a unique morphism with degree-zero component `tau^{-1} sigma`; applying universality in the reverse direction shows it is an isomorphism. This is precisely what it means for the component to correspond to `id_F` under the two identifications.

The Axiom of Dependent Choice, supplied resolution data on all objects, and enough projectives agree with the local construction conventions. No choice of chain-level comparison is being asserted canonical beyond the unique morphism of universal delta functors.

## Independent metadata/contract repair

Alpha updated the item but did not synchronize all directly required run-local carriers. The batch manifest entry still listed only the universality theorem and unique-isomorphism corollary, and its strategy omitted the separate degree-zero input. More seriously, both the batch-10 and merged proof contracts still quoted only those two dependencies and still stated that `[L1]` supplied the degree-zero identifications—the exact rejected inference.

I added `thm-left-derived-functors-form-a-homological-delta-functor` to the batch manifest entry, updated the manifest strategy, and regenerated this item's citations and derivations in both `research/frontier-30-batch-10.proof-contracts.json` and `research/frontier-30-proof-contracts.json`. Both contracts now quote `[L3]` and attribute step 1.1 to `[L1, L3, given]`. No mathematical dependency item was changed, so no owner-prerequisite-repair licence is required.

## Focused checks

- Item `precheck` passed.
- Strict batch-10 proof-contract validation selected on this item passed with zero errors and zero warnings. The whole-batch command still reports unrelated stale entries for later queued repairs, which this serial review has not yet opened or modified.
- Citation-fidelity validation passed with no missing quote or widening candidate.
- Boundary audit passed with no contradicted disposition.
- Item and batch-page render checks passed.
- Repository dependency checking passed, with only unrelated repository-wide warnings.
