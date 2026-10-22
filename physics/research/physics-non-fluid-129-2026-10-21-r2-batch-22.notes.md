# Batch 22 authoring notes

## Plan and task reconciliation

- The assigned design section at research/plan-einstein-maxwell-models-frontier-expansion-track.md, “Extremal horizon conservation and conditional derivative growth,” specifies A items def-emg-fx-extremal-test-scalar, thm-emg-fx-aretakis-spherical-charge, and prop-emg-fx-conditional-horizon-growth, plus B leaf ex-emg-fx-constant-scalar-exception.
- The current research/plan-spec.json entries and batch manifest agree with the design on page IDs, order 741/742, category, library mathematics, title, companions, and A-page requires emg-fx04, emg-fx06, emg-ms02; the B page requires the A page. There is no substantive plan/design conflict. Their empty item arrays are unpopulated inventory slots, not contradictory item assignments; the detailed design supplies the inventory above.
- The optional research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md is absent. No later owner direction overrides the assigned design.

## Dependency order

research/physics-non-fluid-129-2026-10-21-r2-batch-dependency-levels.json assigns batch 22 dependency level 3 with in-run page suppliers batches 19 and 21. Batch 19 owns emg-fx04; batch 21 owns emg-fx06. emg-ms02 is a published outside-run page. The batch-level value is retained; item levels are computed from the in-run item edges and are:

| Item | Direct in-run suppliers | dependency_level |
|---|---|---:|
| def-emg-fx-extremal-test-scalar | def-emg-fx-wave-currents (batch 21, level 0) | 1 |
| thm-emg-fx-aretakis-spherical-charge | def-emg-fx-extremal-test-scalar | 2 |
| prop-emg-fx-conditional-horizon-growth | thm-emg-fx-aretakis-spherical-charge | 3 |
| ex-emg-fx-constant-scalar-exception | prop-emg-fx-conditional-horizon-growth | 4 |

The item order above is the authoring order. emg-fx07 → emg-fx04, emg-fx07 → emg-fx06, and def-emg-fx-extremal-test-scalar → def-emg-fx-wave-currents are the exact cross-batch edges; the B-to-A page edge is within batch 22. No logical item edge is created to the unrelated photon-trapping, wave-energy, or bootstrap results merely because those pages are required.

## Supplier inspection and readiness

- Batch 19's exact extremal RN throat statement and proof were inspected. Its dyonic length parameters, (-,+,+,+) metric convention, and local R>0 scaling domain agree with the chosen fixed extremal ingoing metric. The companion photon-trapping result is not used as a logical premise.
- Batch 21's def-emg-fx-wave-currents, multiplier identity, positive matrix-potential energy theorem, subextremal scalar-wave potential lemma, and conditional bootstrap result were inspected for page context. The scalar-wave definition and positive matrix-energy result are not used to infer horizon decay. The subextremal scalar-wave lemma had no Step 1 record at initial inspection; a fresh current loadStep1Record/step1Decision check now returns ready. It remains outside the logical dependency set because its subextremal exterior energy estimate is not used.
- Before drafting, loadStep1Record/step1Decision returned current ready records for batch-19 prop-emg-fx-rn-photon-trapping, prop-emg-fx-throat-scaling, and batch-21 def-emg-fx-wave-currents, lem-emg-fx-multiplier-divergence, and thm-emg-fx-coupled-potential-energy. Their recorded dispositions are authoring readiness only, not independent mathematical approval.
- The published emg-ms02 suppliers def-emg-xs-ingoing-rn and prop-emg-xs-rn-horizon-data were read at their exact metric, parameter, horizon, and regular-coordinate conventions. The additional imported mathematical prerequisites cor-zero-derivative-implies-constant, cor-primitives-of-a-continuous-function, and cor-mean-value-theorem were read with their complete current statements and proofs. research/math-imports.json identifies the latter three as read-only mathematical imports; no imported bytes were changed.

## Proof scope

The proof derives the spherical neutral wave equation in the smooth ingoing coordinates, then evaluates it and its radial derivative at the exact extremal horizon. Conservation is an unconditional local consequence for the stated regular solution class. Linear second-derivative growth is conditional on the explicitly stated limit of the horizon trace; no global decay estimate is imported to establish that hypothesis. The claims concern a test scalar on a fixed RN geometry, not coupled perturbations, nonlinear stability, or generic Kerr–Newman instability. Static-coordinate derivatives are not substituted for the regular ingoing-chart transverse derivative.

## Sources and checks

Full-text retrieval and scoped reading evidence, locators, supported items, and per-item dispositions are in physics-non-fluid-129-2026-10-21-r2-batch-22.coverage.json. It records the complete Aretakis papers, the independent Reall lecture presentation, and Taylor's complete lecture notes for the scope boundary. source-fetch-check --stamp succeeded for all four full texts. No retrieval failure, dropped source, or source-resolution escalation occurred.

The page pair has four items total and is within the 100-item page limit. No prerequisite cycle or unresolved significant mathematical gap was found.

## Final scoped checks and readiness

- The focused item dependency-level audit passes with levels 1, 2, 3, and 4 as listed above; it reports no batch errors or mismatches. The full-run `item-dependency-levels.mjs check` currently exits with empty-scaffold-inventory errors on unrelated pages outside batch 22 (including emg-fx13 and pages in qftx/csm/qsmx/tgrx). No batch-22 inventory is empty.
- `rendercheck` passed for the four items and two pages (6 checked, 0 errors or warnings). `depcheck` passed for all four items and both pages (0 errors or warnings). `content-policy` passed for the batch manifest (4 items, 0 errors or warnings). Focused `fwdcheck` and `extcheck` passed (0 errors or warnings). `precheck` passed all three proof-bearing items; the definition is not applicable.
- `proof-contract --strict --json` passed all four contracts with no errors or warnings. `proof-layout` passed all four explicitly changed items (11 proof steps, 0 defects). The supplier audit found all seven inspected in-run dependencies currently Step 1 ready, including the scalar-wave-potential lemma whose readiness record was absent at initial inspection and is current now. Published suppliers without run-local Step 1 records were checked at their current carrier statements and complete proofs where applicable; absence of a run-local record did not by itself block readiness.
- The exact source URLs and full-text fetch stamps are recorded in the coverage file; all four sources verified. The final source-resolution rows are present for every item, with no retrieval failures or unresolved source disposition.
- The final Step 1 records are made only after the checks above and include each item's complete declared dependency set. These records certify current authorship readiness and do not claim independent proof approval.
