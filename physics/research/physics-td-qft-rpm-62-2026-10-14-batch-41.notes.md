# Batch 41 authoring notes

Run physics-td-qft-rpm-62-2026-10-14; assigned pair qft-mx01 only. The active owner direction was read before authoring. The two pages are draft. The A page has four items and the B page has two worked examples; neither page approaches the 100-item limit.

## Plan and inventory conflicts

The original reservation quoted in research/plan-quantum-field-theory-track.md says requires: []. The current research/plan-spec.json and batch task both require countability-and-uncountability, qm-math-controlled-dynamics, and schwartz-space-and-the-plancherel-theorem; the plan wins and those three page prerequisites are preserved.

The inspected repaired inventory and actual supplier statements add a necessary oscillator prerequisite that is absent from the plan: lem-qft-example-oscillator-feynman-prescription uses the published thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, whose canonical page is qm-math-oscillator. The A-page manifest and page now name that page. The oscillator lemma also directly names thm-nrqm-oscillator-hermite-recurrence, because its proof uses that exact recurrence to show multiplication by position preserves the finite span. The owner should reconcile the shared plan metadata after this batch; no shared plan file was changed.

The repaired inventory is used as the content authority for the four A items and two B examples; the stale original requires: [] reservation is not treated as permission to omit a proved dependency. Direct local unit-convention dependencies were added to both B examples. Countable Choice is explicit in the finite Dyson theorem and both B examples because their actual supplier chains assume AC_omega. The QX03 Fourier proof directly names the Schwartz/Fourier definitions and Fubini supplier used to define and identify the distributional transform.

## Dependency levels and placement

Within this batch, def-qft-example-data is level 0; the finite Dyson theorem, golden-kernel lemma, and oscillator/Feynman lemma are level 1; both examples are level 2. External published suppliers do not increase the in-run item level. Batch 41 has no incoming in-run batch suppliers, so its batch level remains 0. Its outgoing downstream dependencies are owned by their consumer batches; this file records no incoming cross-batch edge.

The shared batch-dependency-levels.json is owner-maintained engine evidence. The manifest update changes its input hash even though batch 41's recomputed level and prerequisites stay the same. It was not rewritten here; the owner must refresh that shared derived file after the run inventories settle.

## Source reading and dispositions

The supporting full-text treatments actually inspected were Tong's author-hosted lecture-note sections, Fitzpatrick's complete author-hosted textbook PDF (relevant Chapter 13 sections), Srednicki's author-hosted prepublication draft (relevant §§4, 7, and 8), and BIPM's complete current SI brochure (relevant §§1.1, 2.1–2.3, 5.4.2). Source URLs, locators, harvested headings, dispositions, limitations, and supported item IDs are recorded in physics-td-qft-rpm-62-2026-10-14-batch-41.coverage.json. Srednicki is identified there as a prepublication draft and is contextual only; the local proofs supply all claimed mathematics. Tong's formal delta discussion is not copied as a proof of a delta-square identity. The worker's Fan electron-moment report is empirical and irrelevant to these mathematical items; no observation from it is used or recast as proof support.

The exact published mathematical suppliers were read at their actual statement and proof status: bounded norm-Dyson dynamics; Plancherel and L1/L2 Fourier agreement; the Schwartz Fourier map; the oscillator realization and Hermite recurrence; Countable Choice; and the exact complex-exponential, Fubini, and Borel change-of-variables suppliers. Draft labels are not treated as proof. No imported math or shared plan/state/verdict file was edited.

The required source-fetch-check --stamp succeeded for all six full-text URLs on 2026-10-14; the coverage file records byte counts, hashes, and timestamps. No retrieval failure, recovery retry, or dropped-source resolution occurred.

## Scope and proof boundaries

All results are mathematical deductions from stated finite-dimensional or one-mode data. The Dyson estimate and coefficient identities do not assert continuum optical-theorem validity or physical probabilities. The golden-kernel limit is a theorem about a bounded Borel weight and the displayed coefficient integral; it forms no delta squared and proves no exact long-time transition law. The oscillator calculation stays on the finite Hermite span and distinguishes a time-ordered correlator from a retarded response; it proves no spatial causality or interacting-field construction. Any Born interpretation remains a separately adopted physical rule.

physics-td-qft-rpm-62-2026-10-14-batch-41.cross-batch-dependencies.json is correctly empty: every item prerequisite is either external published mathematics or inside this same assigned pair.

## Final scoped checks and readiness

All six scoped items pass precheck, rendercheck, proof-layout, focused dependency checking, content-policy, and the strict proof-contract gate. Proof-layout checked 30 proof steps with zero defects. The renderer needed a temporary alias-aware TypeScript loader under /private/tmp because the standard fallback could not resolve the sibling app's @/components imports; the final proof-layout run passed with that read-only app checkout shim. The two page overviews pass prosecheck with zero warnings. Source coverage records 16 harvested results, zero errors or warnings; source-fetch-check stamped and verified all six URLs, with no retry or drop.

Scoped item levels recomputed from the current manifest are 0 for def-qft-example-data; 1 for the three A results; and 2 for both B examples. A fresh read-only batch graph computation gives batch 41 dependency level 0 with requires []. The shared batch-dependency-levels.json was left untouched; its input hash is stale after this batch manifest change and the owner should regenerate that shared derived record.

Step 1 readiness records mark all six assigned items ready with their exact dependencies and current hashes. The run-wide proof-contract-coverage command was also attempted but stops before checking batch 41 on an unrelated empty/invalid frontier page inventory, td-cycles-and-low-temperature. The scoped proof-contract --strict check passes all six assigned items; no other batch files were changed.

