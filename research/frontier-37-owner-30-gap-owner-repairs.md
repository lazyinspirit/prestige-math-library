# Frontier 37 owner 30 — Step 5 gap and weighted-cover repairs

## Scope and writer safety

Owned findings: the two ITEM rows in `research/frontier-37-owner-30-refute-17.json`, namely `def-greedy-set-cover` (Definition first paragraph, citation-inaccurate) and `lem-gap-three-sat-reduces-to-gap-independent-set` (Statement final sentence, missing positive-scale hypothesis). Both findings were preserved unchanged. Group h covers batches 6, 17, and 25. Process inspection before source writes and after verification found no native Alpha dispatch; concurrent readers/refuters outside this repair scope were present. The parent reports refuter 17 drained successfully. No workflow controls, decisions, gate receipts, or findings were edited.

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the finished refuter artifact, both failing items, and exact relevant local suppliers and consumers. These are local mathematical repairs and local format checks, not independent audits or a new external-source verification. Published PCP sources and the draft verifier-to-Max3SAT consumer were not edited by this helper.

## Mathematical repair

`def-greedy-set-cover`: arbitrary nonnegative rational costs remain the weighted optimization domain. Its first paragraph now states precisely that when all costs are 1, a natural-number total-cost budget k is the cardinality budget of published `def-set-cover`, restricted to the covering families used here. For general costs the decision counterpart uses a rational total-cost budget. No weighted greedy rule, objective, empty case, zero-cost case, or approximation claim changes.

`lem-gap-three-sat-reduces-to-gap-independent-set`: the 3m-vertex occurrence construction and exact optimum identity are retained for every m≥0, including repeated literals, tautological clauses, and the empty formula. For m=0, the graph is empty, both optima are zero, and the decoder remains valid. The positive-scale gap assertion explicitly requires m≥1 and 0<δ≤1. Step 3.1 proves the identity first, handles m=0 explicitly, then applies the gap definition only with positive m. Empty instances have not been deleted or asserted to have positive scale.

Necessary consistency repair to `def-gap-problem-and-gap-preserving-reduction`: its Max3SAT gap domain explicitly consists of nonempty formulas and its clause-graph gap domain has at least one cluster. Its old final paragraph falsely claimed that both reductions produce positive scale on every source formula. The new paragraph states that the PCP reduction produces a nonempty formula on every language input, its composition therefore lies within these domains, and the raw zero-clause optimum equality remains valid outside the gap domains. The general positive-rational scale requirement is unchanged.

Necessary consumer edit to `thm-independent-set-has-no-ptas-unless-p-equals-np`: F2 now specifies m≥1 for gap transfer. F1 and proof step 1.1 already supply M≥1 from PCP; its Statement and proof conclusion remain unchanged.

## Consumer examination

Direct consumers of the weighted definition: `lem-greedy-set-cover-charging-bound`, `thm-greedy-set-cover-is-an-h-n-approximation`, and `ex-greedy-set-cover-charging-bound` use the weighted objective, procedure, and charges. They do not use the incorrect decision-version identification; their mathematical claims and interfaces need no edits.

Direct consumers of the occurrence lemma: the independent-set theorem has the F2 edit above. `ex-l-reductions-transfer-apx-hardness` uses the exact optimum identity and decoder for every formula, including zero optimum; both remain intact, so its Statement and argument need no edit.

Direct consumers of the changed gap Definition: the occurrence lemma and independent-set theorem were reconciled; `lem-pcp-verifier-reduces-to-gap-max-three-sat` already guarantees M≥1 in its Statement and step 5.1; `thm-max-three-sat-has-no-ptas-unless-p-equals-np` uses only those M≥1 formulas; `def-l-reduction` mentions the distinction between L-reductions and gap reductions, independent of empty-formula conventions. None of those three interfaces needs a source edit. No further consumer propagation is required because the independent-set theorem's Statement is unchanged.

## Contract integration and checks

`research/frontier-37-owner-30-gap-owner-contract-rows.json` carries the revised exact two row objects under `contracts`, necessary related rows under `necessary_related_contracts`, and quote-only patches under `citation_quote_patches`. Merge rows by ID and apply each quote patch to its declared source/index in the latest shared row. The PCP row receives only its F5 Definition quote patch, preserving the separate PCP helper's F1 refresh. The L-reduction example receives its changed lemma Statement quote. The occurrence lemma's empty boundary explicitly separates exact equality from the positive-scale gap domain. Its stale zero-boundary assertion that unsatisfiability forces optimum zero was also corrected: every nonempty three-literal clause is individually satisfiable, so any nonempty formula has optimum at least one.

Local checks completed successfully:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-gap-three-sat-reduces-to-gap-independent-set.md items/thm-independent-set-has-no-ptas-unless-p-equals-np.md`: 2 checked, 0 failing.
- `node tools/rendercheck.mjs items/def-greedy-set-cover.md items/lem-gap-three-sat-reduces-to-gap-independent-set.md items/def-gap-problem-and-gap-preserving-reduction.md items/thm-independent-set-has-no-ptas-unless-p-equals-np.md`: 4 files parsed under the real renderer YAML and KaTeX, no errors.

Outstanding parent actions: integrate the contract sidecar into shared batch 17, refresh invalidated stable-content evidence, and allow the engine to perform its required review/gate lifecycle. This helper did not certify completion of those operations.

Adjacent issue originally reported to parent: `thm-max-three-sat-has-no-ptas-unless-p-equals-np` step 4.2 writes s(x)>ρM, while the algorithm guarantee is s(x)≥ρM. Its intended strict threshold follows from s(x)≥ρM>(1−δ)M. No source change was made here.

## Parent-authorized exact-contract follow-up

After sidecar integration, the parent returned four scoped strict-check failures and authorized direct shared-batch-17 edits plus the adjacent Max3SAT step 4.2 correction. Process inspection immediately before these writes found native Alpha lanes a, f, and g only, covering 2/3/4, 1/14/16, and 5/15/23 respectively; no native Alpha h writer covered batch 17.

Corrected actual contract evidence: anchored the gap Definition empty boundary to its final paragraph; anchored the occurrence lemma zero boundary to steps 1.1, 2.2, and 3.1; included steps 2.1 and 2.2 among step 4.1 derivation inputs. The strict contract grammar accepts only claim sections, so the CLIQUE supplier citation now quotes its actual Statement. An explicit `proof_use` records the inspected source Proof step 1.2 and the distinction between that occurrence construction and the independent local optimum-equality argument. This avoids presenting the decision theorem Statement as a proof of the optimization identity.

The parent-authorized adjacent repair changes Max3SAT proof step 4.2 from s(x)>ρM>(1−δ)M to the justified chain s(x)≥ρM>(1−δ)M and updates exactly its derivation claim in batch 17. Its Statement, hypotheses, supplier interface, and consumer claims are unchanged.

Follow-up checks passed: strict proof-contract check on only the exact four original/necessary repair IDs reported 0 errors, 0 warnings, 4/4 checked. The adjacent Max3SAT source passed its individual precheck and rendercheck. No whole-batch or global recertification was run. Shared batch 17 preserves the integrated PCP F1 row and all other rows, apart from these targeted contract corrections and the authorized Max3SAT step 4.2 derivation update. Findings, decisions, and gates remain untouched.
