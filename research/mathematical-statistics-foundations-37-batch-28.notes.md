# Batch 28 authoring notes — Semiparametric Models and Tangent Spaces

## Design control and conflicts

The binding owner direction selects research/plan-mathematical-statistics-track.md as the controlling design. The assigned pair is MSF-27 there, despite being dispatch batch 28; the plan row, task, and plan-spec.json agree on both page IDs, titles, orders 1898–1899, category, and the three page prerequisites. The plan-spec's empty items arrays are the pre-authoring shells, not a different inventory.

The plan row describes def-dqm-submodel-through-a-law with score s in L²₀(P) and also asks thm-dqm-score-mean-zero to prove the zero-mean constraint. Assuming mean zero in the definition would make that theorem circular. The definition therefore asks only for s in L²(P); the local theorem derives Ps=0 from normalization and also proves score uniqueness. The planned result is preserved.

At original authoring handoff, the MSF-16 page prerequisite and planned def-qmd-path body were unfinished; the ten escalation records retain that historical reason and time. Owner E8 round 1 subsequently read the current body: def-qmd-path is now authored by actual batch 22 on likelihood-asymptotics-wald-score-and-likelihood-ratio. Its common-dominator vector interface is compatible with this page's one-sided scalar interface. Current reconciliation is recorded in batch-28.cross-batch-dependencies.json and mathematical-statistics-foundations-37-owner-qmd-tangent-resolution.json; this is not independent supplier acceptance.

## Inventory, dependencies and levels

The manifest declares nine A-page items and three B-page examples before carrier authoring. The A levels are 0,0,1,1,2,3,4,5,6; B levels in manifest order are 4,2,4. The item graph is acyclic, the manifest levels match the carrier frontmatter, and each item declares deps explicitly. The scheduled batch level remains 8 with in-run prerequisite batches 4 and 23, from the supplied scheduling input.

The local L²₀(P) definition records quotient and expectation well-definedness. Its Hilbert-space theorem uses Countable Choice exactly through the published Riesz–Fischer/L² Hilbert supplier. DQM paths use the existing likelihood-density convention, which selects a family of density versions under AC; the score-normalization proof itself spends no choice. The finite examples display their density versions explicitly. No Riesz representation or Hilbert projection theorem is used here.

## Sources and source history

The full van der Vaart St-Flour PDF was inspected at Lecture 1 §1.2, printed pp. 10–11, including Definition 1.6 and the complete proof of Lemma 1.8. Kennedy's complete 8-page paper was inspected, especially §4, pp. 4–6. The two independent treatments support the DQM/tangent vocabulary; their proof limitations were respected, and the local carriers supply all proofs required here. Source URLs, locators, supported items and dispositions are in batch-28.coverage.json.

During navigation, the browser's direct open timed out on the van der Vaart PDF; search found the same author-hosted full-text URL. The local full PDF cache was then inspected. source-fetch-check --stamp succeeded on the first fetch attempt for both sources: van der Vaart, 912,548 bytes / 120 pages / sha256 prefix 2b0ed40dd289a0cb; Kennedy, 128,491 bytes / 8 pages / sha256 prefix d01abeaeefd8510f. Both prefixes match the locally inspected source-cache PDFs. The exact stamps and fetch-attempt records are in batch-28.coverage.json; no source was dropped or escalated.

## Cross-batch supplier review

The current MSF-04 dominated-experiment and likelihood-density bodies were read. They remain draft and do not constitute independent acceptance. The existing published Hilbert page's L², orthogonal-complement, and Riesz suppliers were read; the only selection principle needed for this batch's Hilbert subspace proof is Countable Choice.

Owner E8 round 1 resolved the missing-body/interface blocker against the current batch-22 QMD definition. Setting h=tv gives score v^T s and an o(t) remainder for each fixed v; normalization proves centering without circularity. Interior negative directions and one-sided boundary paths remain distinct. All local DQM, closed-span, bounded-score, Bernoulli and boundary arguments were checked without mathematical changes. The planned MSF-16 page requirement is retained; ordinary independent supplier review and native gates remain pending. Root owns readiness and metadata reconciliation.

## Scoped checks and readiness

- Item dependency levels: 12 items, acyclic, levels match item frontmatter and manifest; author order is 0: def-dqm-submodel-through-a-law, def-mean-zero-square-integrable-space; 1: thm-dqm-score-mean-zero, thm-mean-zero-square-integrable-space-is-hilbert; 2: def-tangent-set, ex-regular-bernoulli-submodel-dqm-score; 3: def-tangent-space; 4: thm-tangent-space-is-closed-linear-subspace, ex-boundary-score-cone-and-linear-tangent-space, ex-bounded-scores-generate-unrestricted-tangent-space; 5: def-nuisance-tangent-space; 6: def-nuisance-tangent-orthogonal-complement.
- Batch scheduling input remains level 8 with prerequisite batches 4 and 23.
- manifest-deps: 12 items, zero missing deps and zero errors.
- Strict proof-contract check: 12/12 items, zero errors and warnings.
- content-policy: 12 scoped items, zero errors and warnings.
- Focused depcheck: 12 selected items and 2 pages; 980 dependency-closure items and 154 closure pages inspected; zero errors and warnings.
- precheck: 6 proof-bearing items passed, zero failures or repairs.
- proof-layout: 6 items, 24 numbered steps, zero defects.
- rendercheck: all 14 changed item and page files passed.
- source-fetch-check: both full-text PDFs fetched and stamped on their first attempts; check mode passed 2/2.

Step-1 readiness was initially blocked by the malformed batch-5 manifest: the record CLI reported a trailing literal backslash-n after its final JSON closing bracket (position 53570, line 1176, column 2). Batch 28 did not edit batch 5. The manifest later became parseable on disk, and the required CLI then wrote records for all 12 items. A targeted hash check through the step1Decision API confirms 2 ready records and 10 escalated records. The ready items are def-mean-zero-square-integrable-space and thm-mean-zero-square-integrable-space-is-hilbert; the other ten retain the exact MSF-16/def-qmd-path reconciliation blocker above. No item is marked ready based on a missing supplier.

## Owner E8 round-1 reconciliation

The native batch-28 writer was confirmed drained by the owner before these evidence-only updates. The ten original escalation records remain unchanged as historical evidence. No item, page, manifest, proof contract, hash, readiness record or native state was edited. All approved claims and choice assumptions are preserved. No new mathematical prerequisite or consumer repair was found necessary; the dedicated owner resolution records the actual direct and transitive consumer closure and focused no-repair dispositions. No optional tests or validator commands were run; proof-layout is inapplicable because no item was edited.
