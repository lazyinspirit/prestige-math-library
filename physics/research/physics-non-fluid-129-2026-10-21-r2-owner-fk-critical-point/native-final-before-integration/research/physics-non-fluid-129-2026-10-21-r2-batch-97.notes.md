# Batch 97 authoring notes

## Scope and plan comparison

Batch 97 owns only csm-frontier-planar-critical-point and csm-frontier-planar-critical-point-examples. The full design section is research/frontier-expansion-2026-10-19/classical-statistical-mechanics/prose-scaffold.md, heading csm-frontier-planar-critical-point. Its reserved A inventory is def-csm-frontier-fk-real-boundaries, lem-csm-frontier-fk-fkg-spatial-markov, lem-csm-frontier-fk-planar-duality, thm-csm-frontier-fk-torus-rsw, lem-csm-frontier-fk-influence-threshold, lem-csm-frontier-fk-crossing-amplification, thm-csm-frontier-fk-square-critical-point, and thm-csm-frontier-potts-square-critical-temperature. The B leaf is ex-csm-frontier-ising-coupling-conversion. Three local items are added on A before their consumers: the state definition def-csm-frontier-fk-infinite-volume-states, the limit lemma lem-csm-frontier-fk-free-wired-limits, and the elementary crossing lemma lem-csm-frontier-grid-crossings-intersect.

research/plan-spec.json and the batch-97 manifest match the design on A/B page IDs, order (891/892), category, titles, and both page requirements. The design warnings are retained: periodic-torus RSW only; self-duality alone does not prove criticality; no behavior at p_c, critical-state uniqueness, transition order, or exponents are asserted. The Ising example keeps J_Potts=2J_Ising.

Inventory comparison: the two plan-spec page entries have empty `items` arrays, as the plan-spec top-level note explicitly says future pages remain placeholder inventories. The design section supplies the reserved eight-item A inventory and one-item B leaf; the assigned task, batch manifest, and authored carriers retain that inventory and the three justified local A-page helpers. This is a documented placeholder difference, not permission to omit the design claims; no shared plan file was changed. The current full design's exact source route and claim boundaries were preserved, with unresolved proof inputs kept conditional below.

## Dependency levels and inventory

The run dependency ledger assigns batch 97 level 3, requiring batches 86 and 90. Recomputed item levels are: lem-csm-frontier-grid-crossings-intersect 0; def-csm-frontier-fk-real-boundaries 1; def-csm-frontier-fk-infinite-volume-states 2; lem-csm-frontier-fk-fkg-spatial-markov 2; lem-csm-frontier-fk-planar-duality 2; lem-csm-frontier-fk-free-wired-limits 3; thm-csm-frontier-fk-torus-rsw 3; lem-csm-frontier-fk-influence-threshold 3; lem-csm-frontier-fk-crossing-amplification 4; thm-csm-frontier-fk-square-critical-point 5; thm-csm-frontier-potts-square-critical-temperature 6; ex-csm-frontier-ising-coupling-conversion 7.

The A page contains 11 items and the B page one example, below the 100-item cap. item-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2 checked 838 items across 258 pages and passed.

## Current supplier inspection and cross-batch status

loadStep1Record and step1Decision were rerun on the current physics-non-fluid-129-2026-10-21-r2 frontier. Batch 90 carriers def-csm-frontier-finite-potts-fk and thm-csm-frontier-edwards-sokal now both have current ready records. Their full statements and proofs were inspected: the finite definition gives integer-Q weights and positive normalizers; Edwards–Sokal proves the finite joint-law marginals and component-coloring identity. The Potts consumer conditions that joint law on the positive event that all boundary spins are color 1 and derives the pinned/wired law by finite summation. Those exact item edges and the page edge to csm-frontier-fk-loop-algebra are recorded verified.

Batch 86's four A items were also rechecked; all four have current ready records. The csm-frontier-quantitative-dlr page requirement is retained, but no high-temperature uniqueness conclusion is used to infer low-temperature FK uniqueness.

## Mathematical holds and proposed supplier placement

All planned claims remain present as conditional drafts, with unresolved inputs labeled and readiness escalated.

1. lem-csm-frontier-fk-influence-threshold is conditional on the continuous-cube BKKKL inequality [A1]. Graham–Grimmett and Grimmett–Janson–Norris reduce to this inequality but do not prove it. Proposed supplier: lem-csm-frontier-fk-continuous-cube-influence immediately before the influence item.
2. thm-csm-frontier-fk-torus-rsw lacks the finite-torus dual-sector likelihood-ratio comparison [A1] and mixed-boundary reflection/exploration surgery [A2]. Proposed suppliers: lem-csm-frontier-fk-torus-dual-sector-bound and lem-csm-frontier-fk-mixed-boundary-reflection-gluing immediately before torus RSW.
3. lem-csm-frontier-fk-crossing-amplification remains conditional on the wired path construction [A1], the subcritical Hamming-distance/finite-size argument with its greedy-lattice-animal strong law [A2], and the free/wired threshold input [A3]. Proposed suppliers: lem-csm-frontier-fk-wired-supercritical-crossing, lem-csm-frontier-fk-greedy-lattice-animal-bound, lem-csm-frontier-fk-subcritical-finite-size-decay, and lem-csm-frontier-fk-free-wired-threshold-coincidence, placed before their consuming steps.
4. thm-csm-frontier-fk-square-critical-point carries those inputs without weakening the exact claim. The Potts-temperature and B Ising conversion arguments are complete conditionally on that result.

The source's subcritical proof invokes a finite-size/Hamming-distance route and cites a greedy-lattice-animal upper bound; the citation is not treated as a proof. Hammond's 46-page article was retrieved as a possible alternative, but only its introduction and the start of Theorem 1.2's proof were inspected; it does not supply the exact local argument here.

## Source dispositions and checks

Full URLs, locators, supported items, fetch stamps, search history, and item dispositions are in research/physics-non-fluid-129-2026-10-21-r2-batch-97.coverage.json. Read extents and limits are in research/physics-non-fluid-129-2026-10-21-r2-batch-97-source-reading.md. Four full-text sources have verified stamps: Beffara–Duminil-Copin, Grimmett's complete book, Graham–Grimmett, and Grimmett–Janson–Norris. The BKKKL ResearchGate route remains owner-escalation after its recorded initial fetch plus five recovery retries; it is not marked dropped. The CGGK greedy-lattice-animal route also remains owner-escalation after alternative routes failed to return the full paper. The final source-fetch-check --stamp result and blockers are recorded in the final check log.

The proof contracts are generated from the finished proof steps, facts, exact source quotes, per-step inputs, and all eight boundary rows for ten proof-bearing items. Required proof-layout checks were run on all explicitly changed items after final edits. Step-1 records document authoring readiness only and do not constitute independent proof approval.

## Final scoped checks and readiness

The final checks produced these results:

- item-dependency-levels: pass, 838 items across 258 pages, maximum level 11.
- content-policy manifest-only authored scope: pass, all 12 batch-97 items, 0 errors and 0 warnings.
- depcheck focused scope: pass for all 12 assigned items and prerequisite cycles; 450 dependency-context items across 391 pages.
- proof-contract strict: pass for all 10 proof-bearing batch-97 items, 0 errors and 0 warnings.
- run-wide proof-contract coverage: temporary aggregation of the 129 batch contract files gave 659/659 proof-bearing carriers covered; the temporary merged file was kept in /tmp only.
- coverage-checklist: pass, one A page and 21 harvested results, 0 errors and 0 warnings.
- proof-layout: pass on all 12 explicitly changed item files, 39 numbered steps, 0 defects.
- Manifest consistency: current authored statements, dependency lists, roles, and levels match the batch manifest; `manifest-deps` checked 12 items with 0 normalized and 0 errors.
- source-fetch-check --stamp: pass for the four cited full-text sources, 4/4 verified, 0 new stamps and 0 documented drops. Unresolved retrieval routes remain separately recorded as owner escalations.
- Step-1 records: six foundational local items are ready; torus RSW, influence threshold, crossing amplification, square critical point, Potts critical temperature, and the Ising example are escalated for the exact unresolved inputs stated in their records.

The run-wide batch-dependency-levels check reports stale shared metadata. A read-only recomputation confirms batch 97 remains level 3 with requires 86 and 90; the recorded/current graph differences are in batches 118 and 121. The shared run ledger is owner-controlled and was left unchanged.

### Readiness refresh hold

The crossing-amplification carrier now declares planar duality directly for its dual-parameter route. The current Step-1 records show six ready items (the finite real-q definition, infinite-volume state definition, FKG/spatial-Markov lemma, planar duality, free/wired limit lemma, and grid-crossing lemma) and six escalated consumers (torus RSW, influence, crossing amplification, square critical point, Potts temperature, and Ising conversion).

The six escalated records were written before the final proof-layout and dependency-interface refinements. Current itemHash values differ from their recorded hashes:

- thm-csm-frontier-fk-torus-rsw: recorded a0564fc55ec3915501be95fd59c50011d62671c91a9f746698c104be0dff1e79; current a85935b5ab3748d1a1247986aa07ced8f97f7f70cb7fe9df09ea211e314b1878.
- lem-csm-frontier-fk-influence-threshold: recorded ecfb43d16cc09d235ef7ba03a2cb17a28871c0f711d0b2b742232f5959296332; current bac9044d455ed8c2783a7a6464e8fec88857490ab8171eb78e423f53fb917229.
- lem-csm-frontier-fk-crossing-amplification: recorded 0d0c755a22265a440d47c48e4270af6572ebbe64532e16e53acd765ef9b65fa5; current 6f23e7b6a857f2f9ebe2333f1350fb47f2a6f7627f7fdbdbd2c4df1966ba3670.
- thm-csm-frontier-fk-square-critical-point: recorded 2339a7eec383792c3fead30c84a6bd8e7996f2add7f39f6c1c54642238e47fe0; current 42dd279f3a6f9270999d7fc3085d98f67f663405961a83cf312b2d3f4a17e23e.
- thm-csm-frontier-potts-square-critical-temperature: recorded d451b20dad3bc3d1e246afa8a34bc838db8a08f1b0555de9f0c715c5310e3fb3; current a9e836faf33a21d515c92913bd4c3603577f33b388f4a54f9233bfd2e6022da1.
- ex-csm-frontier-ising-coupling-conversion: recorded 4b6d4d88ad941a11245f44ef6dd79c326d899c9a0134795f8731eca0b2505853; current aa8ebc4ee150ae567cdb352bbd7bee9665d71768175aa10c37d59587810233cc.

A refresh attempt for the torus RSW escalation was rejected with “Only the owner may resolve this record.” Per the dispatch rule, no owner override or escalation overwrite was used. The escalation decisions and reasons remain intact, but their hash-bound records need owner refresh before Step 1 readiness can be considered current.
