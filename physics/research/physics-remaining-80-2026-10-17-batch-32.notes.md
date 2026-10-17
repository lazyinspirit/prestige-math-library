# Batch 32 authoring notes

Run: physics-remaining-80-2026-10-17

## Plan and inventory comparison

The assigned design section is “Cutoff elastic-reflection collision measure and gain” in research/plan-classical-statistical-mechanics-track.md. Its A/B page identities, order 499/500, titles, five declared external prerequisite pages, and B-to-A prerequisite match the current research/plan-spec.json rows and the pre-authoring batch manifest. The manifest item arrays were empty before this authoring pass. The paired inventory reserves seven A items and one B counterexample; local proof-support lemmas are added on the A page because the selected arguments need their complete well-definedness and regularity proofs. The A page remains below the 100-item cap.

The run's batch dependency record lists batch 32 at level 0 with no in-run supplier batches. Its five page prerequisites are external mathematical context, not same-run suppliers. Their actual inspected item uses and proof statuses are recorded in the carriers, proof contracts, and coverage record. No other pair's supplier is authored here.

## Design-route correction: TD collision-entropy supplier

The original research inventory proposes using thm-tdmath-regular-collision-entropy for the reflection-model entropy result. Its current published Statement requires a collision measure invariant under separate incoming-particle exchange, outgoing-particle exchange, and incoming/outgoing exchange. The assigned uniform-normal reflection parameter measure is not invariant under either particle-pair exchange performed separately.

For a fixed nonzero incoming relative velocity g=v-w, let x=(g/|g|)·n. Under normalized uniform area measure on S², x is uniform on [-1,1], and the outgoing relative velocity is g'=g-2(g·n)n, so (g/|g|)·(g'/|g|)=1-2x². Thus the collision measure assigns probability 1/√2 to positive incoming/outgoing relative cosine and 1-1/√2 to negative cosine. Swapping just the incoming labels (or just the outgoing labels) reverses that cosine, so the two measures differ. The supplier theorem's stronger hypothesis is therefore unavailable for this kernel.

The model, scope, and H-theorem conclusion are preserved. The local proof derives the entropy-production identity directly using the symmetries that do hold: the six-dimensional reflection is an involution with determinant of absolute value one, and swapping the two input variables simultaneously swaps the two outputs and preserves the parameter measure. The TD theorem remains an inspected external context page required by the unchanged plan, but it is not cited as a proof premise or listed as an item-level logical dependency. No external supplier is modified.

## Source treatment

The source URLs, exact locators, harvested results and dispositions are recorded in research/physics-remaining-80-2026-10-17-batch-32.coverage.json; both full-text sources were fetched and stamped. Tong's collision derivation adopts factorization/molecular chaos and discusses dilute-gas scale separation. Those do not prove this selected homogeneous cutoff model. Fitzpatrick treats a multispecies plasma kernel with different scattering symmetries. The local statements retain their own conventions and hypotheses.

## Final item levels and readiness

The scoped item dependency graph is acyclic. Levels are computed from same-run item suppliers only; each external mathematical dependency was checked at its actual carrier.

| Level | Items |
|---:|---|
| 0 | `def-csm-dk-reflection-collision-gain` |
| 1 | `lem-csm-dk-reflection-measure-and-gain-identities`, `def-csm-dk-kinetic-macroscopic-fields` |
| 2 | `post-csm-dk-selected-cutoff-kinetic-model`, `lem-csm-dk-gaussian-mixture-regularity`, `thm-csm-dk-exact-kinetic-moments` |
| 3 | `thm-csm-dk-global-cutoff-collision-evolution`, `cex-csm-dk-moments-do-not-close-stress` |
| 4 | `thm-csm-dk-regular-collision-h-and-equality` |
| 5 | `pthm-csm-dk-qualified-kinetic-entropy` |

All ten items have Step 1 `ready` records with direct dependencies examined and transitive carrier hashes current. The record means authoring inputs, placement, and contracts are complete; it is not an independent proof approval.

## Final scoped checks

- `author-check.mts` for batch 32: pass — precheck, rendercheck, scoped content policy, and strict proof contracts all pass.
- `proof-layout.mjs` on all ten changed carriers: pass — 34 numbered steps, zero defects.
- `proof-contract.mjs --strict`: pass — 10/10 items, zero errors and warnings; 40 exact supplier excerpts and actual step mappings are recorded.
- `depcheck.mjs --items-file` for these ten items: pass — 33,677 corpus items and 2,807 pages scanned, zero errors or warnings; the focused dependency closure contains 1,222 items and 125 pages.
- Scoped content policy: pass — 10 items, zero errors and warnings.
- Source retrieval: 2/2 full-text sources remain fetch-verified; `source-fetch-check --stamp` made no new stamps. Coverage checklist: one page, nine harvested results, zero errors and warnings.
- `manifest-integrity.mjs`: pass — all 160 run pages are present, with no scope drift.
- `validate-plan.mjs` on the A/B pair: page order and declared prerequisites pass. It reports four redundant-prerequisite warnings because the TD page transitively requires four of the other declared pages. The design and plan-spec both list all five directly, so that declared scope is retained. The plan-spec has no item inventories for these pages; current authored item dependencies are checked by the scoped content and dependency tools above.
- The scoped item-level graph recomputes batch 32's own item levels as listed above. `batch-dependency-levels.mjs check --run physics-remaining-80-2026-10-17` reports a stale run-wide input hash after the populated batch manifest changed; recomputing the current run graph still gives batch 32 `dependency_level: 0`, `requires: []`. The run-wide scheduling record is shared engine state and was left for the owner to regenerate. No shared dependency-level file or other batch was edited.

No proof, source, or item-placement prerequisite remains unresolved within this assignment. The TD symmetry mismatch is resolved by the locally proved route above; it is not a missing carrier. Independent mathematical approval remains separate from these authoring records.
