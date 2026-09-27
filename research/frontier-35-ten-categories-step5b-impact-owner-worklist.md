# Frontier 35 Step 5b direct impact owner worklist

The [JSON worklist](frontier-35-ten-categories-step5b-impact-owner-worklist.json) assigns 800 current item IDs to three disjoint context lanes: 770 direct dependency consumers, 25 citation-only consumers, and five direct citations that also have a transitive dependency path. Every changed supplier pair/channel has current consumer and supplier guard hashes and one pair owner. The 87 pairs in the [separate high-fanout review](frontier-35-ten-categories-step5b-high-fanout-direct-uses.jsonl) retain `pair_owner: separate_high_fanout_owner`; other pairs belong to `owner_lane_1`–`owner_lane_3`. A consumer with additional suppliers keeps those pairs in its lane. A `reference_only_all_pairs_owned_elsewhere` row has no lane-owned pair. The worklist makes no mathematical disposition. Recheck hashes after carrier edits.

| Lane | Context items | Active items | Run drafts | Published external | Assigned pairs | Separate high-fanout pairs |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 267 | 240 | 199 | 68 | 771 | 29 |
| 2 | 267 | 240 | 199 | 68 | 776 | 29 |
| 3 | 266 | 240 | 199 | 67 | 774 | 29 |

The direct dependency set is 578 run drafts and 192 published external items. The 25 citation-only rows add 18 drafts and seven published items; the five citation overlaps add one draft and four published items. The 800 items therefore split into 597 run drafts and 203 published external items, with 2,408 changed-supplier links: 87 separately owned and 2,321 assigned to these lanes.

Tier 0 prioritizes hash-confirmed substantive Statement/Definition changes in `def-graph-nonisomorphism-protocol`, `def-jacobson-radical-of-a-finite-dimensional-algebra`, `def-supersolvable-groups-and-monomial-characters`, `lem-monomiality-lifts-along-a-quotient`, and `thm-svarc-milnor-lemma`. It also flags current AC-qualified sources whose old text is unrecovered; that is a priority, not an assertion AC entered during this window. Git HEAD matches the `pre-author` surface fingerprint for only 34 of 57 existing changed sources; the other 23 require exact old text or conservative direct-use review.

Current-hash 5a decisions are related item reviews, not automatic supplier-use approvals. A 5b edge verdict is exact-use evidence only when both raw hashes still match current carriers. The separately owned high-fanout record is cited by path and line without importing its disposition. Reader/group reports and contracts are navigation leads for run drafts. Published consumers need current clause, use, and hypothesis checks, especially AC propagation. The [owner diagnostic](frontier-35-ten-categories-step5b-impact-owner-audit.md) explains conditional propagation. The full impact receipt still requires 5,877 evidence-bearing rows under the current tool; this worklist changes neither that scope nor controller state.
