# Final adjudication: ex-lc-first-inaccessible-is-not-mahlo

Run `phase-2-next-20`, group h, queue position 1. Disposition: **repaired**. Source status: **familiar**. This is independent terminal adjudication, not a judge verdict, publication approval, or pass stamp.

## Material inspected

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and the frozen single-item queue. Read the complete current item, both cited theorem/lemma proofs, the defining items `def-lc-inaccessible-and-mahlo-cardinals`, `def-lc-weakly-compact-cardinal`, `def-club-subsets-of-ordinals` and `def-axiom-of-choice`, and both large-cardinal A/B pages under `library/foundations/`. Read this item's batch-14 manifest entry, proof contract (including every boundary and the risk review), relevant coverage/source-limit records and batch notes. Consulted `research/phase-2-next-20-alpha-h-step7-context.json`, especially convention 10, and the item section of `research/phase-2-next-20-alpha-step7-h.md`. Read both item rows in the judge JSONL and its Sol adjudication row. Historical scaffold escalation records are not treated as live blockers or proof certificates.

The initial Terra rejection (context 3753b222683d83128418aacc161d2bd9375e2d15e8d2d4af5250b5e47f8bd3f2) correctly objected to an inaccurate restatement of AC. Sol removed that fact and dependency. The terminal Terra rejection (context 682d826e02a4f4999d2c8f36e71b9cf67961fd12ca083ac4403a9be76b7e8708) says omega can belong to C and therefore requires a tail club. These are distinct issues.

## Independent mathematical basis

The page's exact Mahlo definition tests R = {alpha < kappa : alpha is an **uncountable** regular cardinal}. It does not test all regular cardinals. This is stated explicitly in `items/def-lc-inaccessible-and-mahlo-cardinals.md`, inherited through the weak-compact definition, used in F1's proof step 3.1, and retained by group convention 10. Consequently the terminal rejection's omega objection is false under the required convention. No tail club or new supplier is necessary.

Conditional on a supplied inaccessible lambda, Separation forms the nonempty set of inaccessible ordinals at most lambda. Ordinal well-ordering supplies its least member kappa without a choice operation. By F2 there is a club C of infinite strong-limit cardinals below kappa. Any rho in C intersect R would be uncountable, regular and strong limit, hence inaccessible, contradicting leastness. Thus C intersect R is empty, so R is nonstationary and kappa is not Mahlo. Omega is not in R, irrespective of whether it belongs to C. F1 then excludes weak compactness. Neither existence, consistency of existence, nor a converse is inferred.

F2's Statement supplies a club subset of strong-limit cardinals; its proof 5.1 explicitly proves that the infinite strong-limit cardinals themselves form a club, so the item's more specific F2 restatement is supported by the complete supplier. Unboundedness follows by starting above a bound, iterating theta -> 2^theta for omega steps, and using regularity of kappa to keep the supremum below kappa. Strict increase and cardinal comparison make the supremum a cardinal; every smaller power set is bounded by the next iterate. At an accumulation point of C the same argument, using a larger member of C for each smaller cardinal, proves strong-limit closure. These are exactly the declared nonzero limit accumulation points. F1 explicitly concludes Mahloness and proves it in 3.1 by reflecting an arbitrary club to an uncountable regular rho, then using closure to put rho in the club. I checked the supplied restriction-tree argument and its use of cardinal bounds/pressing down as the supporting interface; settled supplier items are not reopened or changed.

The mathematics used here (least-ordinal selection, regular/strong-limit cardinal bounds, clubs and stationarity, and the supplied weak-compact-to-Mahlo implication) is familiar enough to verify directly from these complete local arguments. No external source retrieval or source reading is claimed. Source status is therefore familiar; existing bibliographic references are not presented as newly verified sources.

## Final local repair and contracts

Sol's deletion fixed the false attribution but omitted the direct AC dependency required by CLAUDE.md rule 11 for inherited choice assumptions. Restored `def-axiom-of-choice` as F3 with its actual assertion: every family of nonempty sets has a choice function. Proof 1.1 identifies inherited AC through F2's cardinal-size estimates, separately from choice-free ordinal minimization; 2.1 identifies its inheritance through F1's cardinal estimates and pressing-down argument. This does not attribute propagation of ZFC to the AC definition. Proof 1.1 now explicitly names the uncountable regular set and explains omega's exclusion.

Updated only the owned item contract's F3 citation, affected derivations and choice boundary. Preserved the independent earlier risk review. The owning batch-14 manifest already listed AC; its proof strategy now records the exact page convention and conditional choice accounting. The A/B claims and all suppliers are unchanged.

Dependency bookkeeping follows `briefs/tasks/frontier-dependency-ledger.md`. Inspected the owning `research/phase-2-next-20-batch-14.cross-batch-dependencies.json`. Both mathematical suppliers belong to batch 14, while AC is published outside this run. There is no cross-batch row for this consumer to add, remove or update: such a row would be classified as orphaned by `tools/frontier-dependency-ledger.mjs`. Updated the owning batch notes with this exact reconciliation and refreshed the derived ledger after the dependency/manifest edits. No unrelated consumer edge is changed. No published mathematical defect was found, so the published-defect ledger is untouched.

## Validation and terminal obligation

- Focused precheck: PASS, 1 item, 0 failing.
- Strict `tools/proof-contract.mjs` on batch-14 contracts with `--items ex-lc-first-inaccessible-is-not-mahlo`: 0 errors, 0 warnings, 1/1 checked.
- Focused rendercheck: 1 file, no errors; renderer YAML and KaTeX checks available.
- `node tools/depcheck.mjs --quiet`: exit 0, no cycles, unresolved references or draft items on published pages; 473 repository-wide warnings were reported. This is not a claim to have audited those unrelated warnings.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-20`: successful refresh and deduplication after the final manifest edit.

No unresolved mathematical obligation remains for this queued item. The next and only action is the exact queue-bound recorder invocation with disposition repaired and source-status familiar. Its successful output is the terminal receipt; no third judgment or supplier repair is authorized or requested.
