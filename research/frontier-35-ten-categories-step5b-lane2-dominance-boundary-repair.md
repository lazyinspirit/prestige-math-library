# Dominance order: size-zero boundary repair

The draft definition `def-dominance-order-on-partitions` had a confirmed nonfatal boundary defect in its exported `## Definition`. Its prefix-sum criterion already covered `n=0`, and its last paragraph correctly identified the sole partition as `∅`; however, the extrema sentence asserted that `(n)` and `(1^n)` were partitions of every `n`. The supplier `def-partition-young-diagram-and-conjugate-partition` defines partitions as sequences of **positive** parts and explicitly makes the empty sequence the sole partition of zero. Thus `(0)` is not a partition under this contract. The displayed extrema identity likewise needs the positive-size domain.

- Pre-edit item guard: `5f24ff261b7cf985d884a78e61f0b2e1406e1dacae00686e7c262fd0eff15422`.
- Post-edit item guard: `5eb031012f17f0c74a042a75bd8c504e19c2f10e356b37e199470ba12482d9f2`.
- Exact edit at `items/def-dominance-order-on-partitions.md:44`: `Hence $\unrhd$ is a partial order on the set of partitions of $n$. The` became `Hence $\unrhd$ is a partial order on the set of partitions of $n$. For $n\ge1$,`.
- Affected use: the extrema assertion and its displayed prefix-sum bound in Definition lines 44–47. Invalidated claim: `(n)` is the maximum and `(1^n)` the minimum when `n=0`. Minimality: the defining relation, proof of partial-order properties, and explicit size-zero paragraph are sound; one domain qualification repairs precisely the false clause.
- Exported `## Definition` changed textually, so this is a new direct-consumer event. No consumer Statement or Definition needed a change.

`tools/consumers.mjs` lists exactly three direct dependency/wikilink consumers. The separate JSONL file `research/frontier-35-ten-categories-step5b-lane2-dominance-direct-uses.jsonl` records current guards, line anchors, consumed clauses and hypotheses for each:

1. `ex-partitions-and-dominance-through-size-five` uses the unchanged prefix-sum criterion in F2 and Verification 1.3–2.1. It lists `∅` at `n=0` and treats that order as a one-element chain. Guard `63d84e6d62ae5544c6d6135741a8ee15cd386328efe27200b384c8d5178571d1`; **still licensed**.
2. `lem-basic-combinatorial-lemma-for-tableaux` uses the unchanged inequalities in L3 and Proof 2.1. Empty tableaux yield zero on both sides at `n=0`; the equality construction remains empty with identity permutations. Guard `635ae0e82b507b51ccb1812271d49b6acb292a2b562c371270e3085e2b25ec84`; **still licensed**.
3. `lem-conjugation-reverses-dominance` uses the unchanged criterion in L1 and Proof 2.1–3.1. The `n=0` case is `∅` versus `∅`, so all prefix comparisons are `0≥0`; no extrema clause enters. Guard `af764aa79f9d5cc32f2128adce1e9d4c0d655a151528b0e514b9a31f0615f156`; **still licensed**.

The batch-11 plan statement and strategy describe only the unchanged prefix-sum relation and antisymmetry; the three proof contracts quote only unchanged supplier clauses and already document the `n=0` cases. No local plan, contract, manifest or page edit is needed. The exact incoming dependency and forward-reference dispositions are in `research/frontier-35-ten-categories-step5b-impact-lane-2-evidence.jsonl`. The rendered item precheck reports no failures; strict batch-11 proof-contract check reports 0 errors and 0 warnings for the three consumers.

Central defect proposal: `def-dominance-order-on-partitions`, draft, confirmed nonfatal size-zero extrema-domain error, repaired by adding `For n≥1` at Definition line 44; pre/post guards above. This Definition change requires the three direct-use rows above in the post-5a→current impact receipt. No published-consumer ledger row is appropriate because the repaired carrier is draft.
