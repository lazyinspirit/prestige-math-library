# Batch 114 authoring notes — tgr-phs05

## Plan and design reconciliation

- The run-specific research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md was absent when checked, so there was no later owner override.
- The current research/plan-spec.json row controls page identity, order, category, and page prerequisites: A page tgr-phs05 at 925 and B page tgr-phs05-examples at 926, both in thermodynamics-and-general-relativity with library physics. The current batch manifest matches it. The plan's initially empty item arrays are the expected Step 1 authoring state.
- For item content, the newer frontier-expansion section at research/plan-thermodynamics-and-general-relativity-frontier-expansion-track.md L211 points to the current 2026-10-19 inventory and the complete research/frontier-expansion-2026-10-19/thermodynamics-and-general-relativity/prose-scaffold.md#tgr-phs05 module. That module controls the one A definition and one B remark, the finite-regulator scope, the no-automatic-GSL warning, and the model-definition proof route.
- The older retained track at research/plan-thermodynamics-and-general-relativity-track.md L972 proposes order 661. The item identities and conceptual scope match the newer module, but the order conflicts with the current plan; 925/926 from plan-spec.json and the task are used.
- The current plan gives the B page requirements tgr-phs05 and tgr-phs01; these are followed even though the detailed item module does not repeat the B-page requirement. No pair or page identity was changed.
- The older 2026-10-03 explanatory scaffold mentions an explicit finite reference term; the current module instead says all finite renormalization conditions are fixed as scheme data. The authored functional treats every finite normalization as fixed data and adds no separately selected numerical offset.
- The area-calibration supplier proves a coefficient using fixed G_N only on its restricted stationary family. The planned G_Lambda term is retained as specified regulator-dependent model data. It is identified with G_N only when the model separately chooses that equality; no generalized calibration is inferred.

## Inventory, prerequisites, and levels

- A page inventory: def-tgr-regulated-generalized-entropy.
- B page inventory: rem-tgr-generalized-entropy-no-automatic-second-law, placed as a remark item on the examples companion page.
- The A definition uses the finite outside-entropy definition and finite-part ambiguity lemma from batch 113, the current TGR units and null-screen definitions for its geometry and units, and the exact Countable Choice premise carried by the optional area-calibration interface. The calibration theorem is used only as a restricted reference; it does not prove the regulator-dependent G_Lambda model term.
- The B remark supplies a complete finite matrix comparison. It uses the current generalized-entropy definition, exact restricted area/calibration scope, and the mathematical density, positivity, logarithm, and exponential interfaces needed to verify the two density matrices and their entropies. The labels denote model data, not physical time; the item claims no empirical observation or violation of a physical GSL.
- No further local helper item was required: the geometry/units suppliers and finite mathematical interfaces are available with explicit current statements. The finite-cutoff mode-growth lemma is on the batch-113 supplier page but is not a direct prerequisite because this definition makes no general divergence claim.
- A-item level recomputed as 1: its in-run mathematical suppliers are level 0 in batch 113. B-item level recomputed as 2: its in-run supplier is the A definition at level 1. The selected item-level DAG over batches 113 and 114 has no cycles or errors. Current batch-graph recomputation gives batch 114 level 1 requiring batch 113.
- research/physics-non-fluid-129-2026-10-21-r2-batch-114.cross-batch-dependencies.json contains four verified scoped rows: the A-page to batch-113 page edge, the A-definition to each of its two batch-113 mathematical suppliers, and the B remark's direct finite-entropy edge. The current supplier-use checks do not claim independent proof approval.

## Supplier readiness and exact status

- loadStep1Record and step1Decision report the current batch-113 def-tgr-finite-cutoff-outside-entropy and lem-tgr-renormalization-finite-part-ambiguity records as closed/ready. I inspected the complete finite partial-trace and basis-independence proof, and the complete epsilon proof of finite-part shifting. Their draft and precheck-pending metadata are preserved; no independent mathematical acceptance is inferred.
- lem-tgr-finite-cutoff-mode-entropy-growth also has a current ready record and was inspected, but its unbounded-cutoff result is not used here.
- pthm-tgr-area-entropy-calibration and pthm-tgr-restricted-classical-area are published out-of-run suppliers. step1Decision returns “Readiness record missing” for them because they are not in this run; their actual current statements and full relevant proofs were inspected, so this is not treated as a prerequisite gap. The area-calibration proof retains its explicit AC_omega, reversible-heat, stationary-family, and reduced-temperature hypotheses; the classical area theorem retains its smooth Einstein–Maxwell, energy, affine-completeness, and persistent-cut hypotheses.
- The remaining mathematical inputs are imported/published definitions or results. Their exact interfaces and proof status are recorded in the item facts and batch proof contract; no root mathematical original or imported file was edited.

## Sources and harvest

- Two independent full-text treatments were read for the A-page scope, including a complete lecture-note source: H. S. Reall's full 149-page Cambridge notes and Aron Wall's full 44-page article. Exact locators, supported items, limitations, search history, and a disposition for each harvested result are in research/physics-non-fluid-129-2026-10-21-r2-batch-114.coverage.json; reading notes are in research/physics-non-fluid-129-2026-10-21-r2-batch-114-sources/source-reading.md.
- Reall's notes summarize the GSL without the full hypotheses in §10.9; that summary is recorded as context, not proof. Wall's §§2.1–2.8 state the additional semiclassical, horizon-algebra, state, and renormalization conditions and explicitly assume a renormalized relative-entropy/free-energy relation.
- The browser PDF renderer failed to open the full Reall PDF, but direct retrieval from the same author-hosted URL succeeded; MuPDF extracted all 149 pages for inspection. No source retrieval failed, so no retries or source-resolution escalation were needed.
- source-fetch-check --stamp verified and stamped both selected sources: Reall 4,459,293 bytes, 149 pages, SHA256 prefix bf0da77ce600940b; Wall 498,507 bytes, 44 pages, SHA256 prefix d9d2e76448c7c48e. No source was dropped.

## Scoped checks and authoring readiness

- Focused depcheck on the two items and their dependency closure: 0 errors, 0 warnings; 2 assigned items, 2,706 closure items, 465 prerequisite pages.
- content-policy on the batch manifest: 2 items, 0 errors, 0 warnings.
- rendercheck on the two item and two page files: 4 files, 0 errors, 0 warnings.
- Strict proof-contract check: 2/2 items, 0 errors, 0 warnings. The definition has no proof steps; the remark's actual steps, supplier excerpts, boundaries, and finite check match the contract.
- proof-layout on both explicit item paths: 2 items, 5 numbered steps, 0 defects.
- Normative precheck: 1 proof-like item checked, 0 failing. The definition has no proof phase; the remark's direct argument passes.
- Source-fetch check: 2/2 selected full-text sources verified; 0 documented drops.
- Scoped item-level dependency calculation over batches 113 and 114: no cycles/errors; the assigned items are at levels 1 and 2 as recorded above. Cross-batch row structure check: 4 rows, 0 errors.
- The final read-only current run batch graph recomputes batch 114 at level 1 with requires [113] and input hash b2af4b706fd412043110337756041a60c6bffe947f0a1b6130c77ba2375e329f. The stored research/physics-non-fluid-129-2026-10-21-r2-batch-dependency-levels.json check reports stale. It is shared run scheduling metadata and remains untouched; the owner join must refresh it before run-wide gates.
- Final Step 1 records were written after all authoring and scoped checks: def-tgr-regulated-generalized-entropy is ready with input hash 3e6743521423512198c840600ed9e421c96eef91bf3d92e86e254b72d72a7fc0, and rem-tgr-generalized-entropy-no-automatic-second-law is ready with input hash f05ded0acd839996f85af24469c15357f437f9bc0979313d92e0e8cab23cfd4c. Both records have owner false and bind the direct dependencies listed in the item carriers. They attest current authoring inputs and placement, not independent proof review, audit, or acceptance.
