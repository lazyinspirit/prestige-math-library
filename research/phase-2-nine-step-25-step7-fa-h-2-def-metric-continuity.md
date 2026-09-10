# Final adjudication — queue position 2

Run phase-2-nine-step-25; group h. Mathematical disposition: repaired. Source-status: familiar. Terminal recording is blocked as detailed below; no terminal acceptance is asserted.

## Independent mathematical basis

The definition has the correct quantifier order: for every positive real epsilon, a positive real delta, then all x in X. Delta may depend on the point. Metric symmetry identifies its distance condition with membership in the ball defined by def-metric-ball, and the image inclusion is exactly the same universal statement. Global continuity quantifies over all points, vacuously for an empty domain. Restriction to a ball preserves the pointwise property by replacing delta by the minimum with the ball radius. A nonexpansive map is continuous with delta=epsilon, and the isometry example satisfies that inequality with equality.

The choice-scope orientation is sound. I read the full thm-metric-continuity-characterisations proof during the preceding dependency review and checked its precise implications against this remark: (a),(b),(c),(e) are equivalent choice freely, (a) implies (d) by the elementary epsilon-delta argument, and the sequential converse uses the countable selection in sequential closure. def-countable-choice states precisely the indexed nonempty-set choice principle required. This definition does not itself assume choice for continuity. The earlier Sol repair properly narrows the orientation remark and needs no further alteration.

Terra's rejection at 2026-09-10T11:20:55.766Z in research/phase-2-nine-step-25-judge.jsonl is valid (item hash dce7dab1c3213854979ee35eba94e7a4e94fe53daac283520cdac6db7cdd3bc7, context 47b2d0a85cb4742dac03aff4603a4fcc4243385a1889944fd38d093573649626). The last remark omitted the nonemptiness restriction on distance to a set. def-metric-bounded-diameter defines d(u,A) as a real infimum only for nonempty A. The complete lem-distance-to-set-is-lipschitz proof first uses this nonemptiness to obtain the two real infima, then the triangle inequality and greatest-lower-bound inequalities give both differences bounded by d(u,v). It applies to unbounded and nonclosed A as well, so neither boundedness nor closedness should be added. For the empty set there is no real infimum and no map to which the continuity assertion applies.

Repair: append “for a fixed nonempty subset A subseteq X” to the distance-to-set example, retaining its existing citation. Update the local verification description truthfully. The definition, choice split, dependency declarations, aliases, home, and all supplier files are unchanged. The existing lemma supplies everything; no new prerequisite or further judgment is needed mathematically.

All mathematics used here is familiar elementary metric and infimum reasoning. It was checked directly against the local definitions and complete relevant proofs; no external verification was necessary or performed. Existing external references are not claimed as newly read.

## Context, contracts, risk and bookkeeping

Read the current item and its three declared suppliers def-metric-space, def-metric-ball and def-countable-choice. Also read both library/topology/metric-spaces pages; def-metric-bounded-diameter's full distance scope; lem-distance-to-set-is-lipschitz including proof and remarks; def-isometry-and-metric-embedding; lem-isometry-is-an-embedding including its proof; def-equivalent-metrics' comparison definitions and remarks; and the full continuity-characterisations argument. Page conventions require real-valued distances, positive ball radii and no empty-set infimum convention. The page itself explicitly calls the distance example a distance to a fixed nonempty set.

The group-h Step-6 context has no reader concerns. The batch-17 manifest/coverage and proof-contract scope cover the cone pair, not this inherited published definition. A parsed search of every research/*proof-contracts.json explicit scope found no owning row for this id. It is explicitly proof-not-applicable and needs no new contract under WORKFLOW. Its relevant boundary risk is the empty set, now excluded exactly at the example using it. No independent evidence or risk-review record is overwritten.

Read the earlier HG 6c adjudication and impact evidence and the migrated phase-2-nine-step-25-step7-published-repairs.jsonl record. They establish the history of the choice-scope repair, not the correctness of the newly found empty-set omission. Current local reconciliation metadata had left mathematical text unchanged before this FA repair.

Updated the existing item entry in research/published-consumer-supplier-ledger.md. Under briefs/tasks/frontier-dependency-ledger.md the batch-17 same-frontier input remains correctly empty: this published consumer is not in any current batch manifest, all named suppliers are published, and no dependency declaration changed. The collector rejects a fabricated batch-17 row for this consumer. The derived ledger was refreshed after position 1; no subsequent dependency/input edit calls for another refresh.

## Validation and blocker

Focused rendercheck passes. Focused precheck reports 0 checked, 0 failing, as expected for a definition with proof-not-applicable; this is not proof verification. The previous full depcheck passed and this repair changes no dependency declarations. The final remark's nonemptiness qualification was compared with both supplier statements and the complete Lipschitz proof.

Position 1 was successfully recorded before any substantive review of this item. However, def-metric-continuity is a declared supplier of position 1. Its repaired remark changes the dependency context hash used by the terminal recorder. The recorder's own currentHashes and terminalResolutionIsCurrent functions now return false for position 1. Its item bytes were not reopened or changed. The queue predecessor gate requires that record to remain current before recording position 2.

Next action: attempt the exact required terminal recorder for this repaired item. If the predecessor gate refuses it, escalate and stop: the owner/operator must resolve the conflict between dependency-sensitive terminal hashing and the frozen consumer-before-supplier queue. No third judge, new review wave, out-of-order record, reset, or resealing of the settled predecessor is authorized. Both mathematical repairs are complete locally, but the queue cannot be claimed terminally complete while this exact-hash obligation remains unresolved.

Recorder result: refused with `ERROR def-metric-continuity: queue item cex-separately-continuous-not-jointly-continuous at position 1 must remain current before this item`. No position-2 terminal resolution was written. Escalated and stopped; no predecessor reseal or additional wave was attempted.
