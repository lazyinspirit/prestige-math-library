# Batch 1 notes — `emg-g01`

## Scope, authority, and plan conflicts

This batch owns A page `emg-g01` (order 437) and B companion `emg-g01-examples` (order 438), both in `einstein-maxwell-models`. The binding owner direction and current selected plan were followed. The current page requirements are `emg-mg01`, `em-primitives-and-postulates`, and `em-lorentz-covariant-formulation` for A, and `emg-g01` for B.

The historical design at `research/plan-einstein-maxwell-models-track.md` § “Einstein–Maxwell primitive quantities and SI conventions” reserves only `def-emg-geometry-units` and `post-emg-covariant-maxwell` on A, only `emg-mg01` as a page prerequisite, and `ex-emg-observer-static-field` on B. The owner-authoring direction’s current inventory adds `pthm-emg-flat-electromagnetic-compatibility` to A; the current plan adds the two earlier page prerequisites. The plan controls page identity, order, and requirements; the binding updated inventory controls the three A items and one B item. These differences are recorded rather than silently inherited from the historical design. The current `plan-spec.json` row specifies page metadata and prerequisites but has no item inventory; this batch manifest carries the authored item records.

The shared batch dependency-level record remains unchanged: batch 1 is level 0 with no in-run batch prerequisites. The assigned item graph was recomputed from authored dependencies: `def-emg-geometry-units` level 0; `post-emg-covariant-maxwell` level 1; `pthm-emg-flat-electromagnetic-compatibility` level 2; `ex-emg-observer-static-field` level 2. External prerequisites do not raise an in-run level. The assigned graph is acyclic. The manifest records full item objects with current statements, dependencies, roles, and levels; the earlier bare-ID inventory was corrected because run readers require structured item entries.

## Authoring and mathematical scope

The A definition fixes the model-local quantity roles, smooth Lorentzian geometry and observer conventions, SI units, exact defining constants versus measured μ₀, the ε₀ relation, and the separate gravitational and flux normalizations. The speed-of-light interpretation is explicitly tied to `post-em-minkowski-physical-model`; the local Lorentzian Hodge calculation is an explicit prerequisite. It asserts no field equation, global potential, or empirical result.

The A postulate adopts the smooth vacuum curved Maxwell system on the stated oriented, time-oriented Lorentzian domain. It is not presented as derived from flat special relativity or established by experiment. The A theorem gives the complete conditional flat inertial component calculation under the selected SI −+++ dictionary, including the sourced and homogeneous equations and Lorentz force/power components. It makes no claim that a nonzero field on a flat background solves the coupled Einstein equation. The B example computes the prescribed constant source-free field and verifies its Maxwell identities only; it makes no coupled Einstein claim. There was no need for an additional local intermediate result.

All direct dependencies, roles, supplier interfaces/statuses, phase-step inputs, boundary cases, and applicable finite checks are recorded in the item frontmatter, proof contracts, and item proofs. Draft physical postulates remain adopted assumptions; deductions are conditional; no experiment is described as proof. The pair uses 3 A items and 1 B item, below the 100-item cap. The existing shared category file was not changed.

## Source reading and dispositions

`research/physics-remaining-80-2026-10-17-batch-1.coverage.json` records the exact URLs, locators, supported items, inspected results, conversion cautions, and fetch stamps. The A page has independent complete treatments from Tong’s *Electromagnetism* lecture notes and Griffiths’s *Introduction to Electrodynamics*, alongside the current BIPM SI brochure and full Tong/Reall GR notes. The B page records the full Tong and Reall treatments. Natural-unit, Gaussian-unit, and older pre-2019 μ₀ conventions are not silently imported. The local component proof supplies the selected signs and units.

The coverage record has no dropped candidates, no retrieval failures requiring recovery, and an empty `source_resolution` list. No source is treated as a deductive proof of a physical law. The final `source-fetch-check --stamp` result is 8/8 fetch-verified and 8/8 resolved, with no new stamps.

## Current imported-mathematics blocker

The scoped imported-mathematics frontier for all four assigned items reaches `items/lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval.md` through the declared chain `def-emg-geometry-units` → `def-emg-lorentzian-forms` → `thm-gr-curvature-tensoriality-and-coordinate-formula` → `thm-gr-point-normal-and-exponential-coordinate-charts` → `thm-gr-local-geodesics-and-exponential-map` → `thm-smooth-dependence-of-ode-solutions-on-parameters` → the ODE lemma. A full selected-frontier comparison covered 1,479 context items, 1,387 relevant imported items, and 1,572 scoped paths; this is the only relevant imported original whose bytes differ from its receipt pin. The local snapshot still matches its receipt hash `993f0404d772f05ad036d289e7f40d605fe3f9cd0160605558ce0c2ebbe7b1b0`; the current read-only root original hashes to `ee393eca16ff7f7ec9baae1c17c6efda5da0fb3787fd6dac6afdadacd589d7b9`. The current original adds substantive statement/proof cases for zero-dimensional matrices, singleton intervals, and endpoint derivatives, and a new direct dependency on `thm-existence-and-uniqueness-of-a-maximal-ode-solution`; its revised proof uses that supplier to obtain the maximal open-interval solution. That maximal-ODE supplier itself is present and byte-identical in the local snapshot and root original (SHA-256 `b07b9bf1fd13b3f5f1eb04d2142ed91ff74fec0d2a03d70e91df674e84a9288b`). The scoped `physics-check --plan` attempt fails with `mathematics import changed` for the ODE lemma path. No imported snapshot or root mathematical original was modified or refreshed.

Because that source path is in the actual declared prerequisite closure, the four assigned items are recorded `escalated` pending owner reconciliation of the current import provenance. This is a source-currentness hold, not a claim that the local mathematical snapshot was edited or that the assigned arguments are incomplete. The assigned authoring and local checks were completed despite the blocker.

## Cross-batch consumers for owner review

The current run’s batch-13 evidence consumes A page `emg-g01` and items `def-emg-geometry-units` and `post-emg-covariant-maxwell` for `emg-g02`, `def-emg-topological-sector`, and `pthm-emg-potentials-and-topological-limits`. It correctly records those two supplier interfaces, but its evidence says the postulate lacks source/scope review; this batch has now documented that review. The postulate remains a draft adopted physical assumption, and the source-currentness escalation above still blocks readiness. Batch 13 should refresh that review-status detail and recheck the page prerequisite against current G01 readiness, keeping its consumers open until the imported-mathematics blocker is resolved.

Batch 14 also consumes the postulate for `pthm-emg-observer-maxwell-current` and `pthm-emg-gauss-global-constraints`. Its evidence matches the current equation and appropriately keeps those conditional deductions open because the physical law is an adopted draft postulate. No other current-run cross-batch evidence mentions the assigned G01 items. This batch records the outgoing impact here and does not alter batch-13 or batch-14 evidence, which belongs to those batches.

## Scoped checks

- Assigned item levels: 0, 1, 2, 2; no errors or cycles.
- `proof-layout.mjs` on the four explicitly changed items: 4 items, 14 steps, 0 defects.
- Mechanical proof precheck on the theorem and example: 2 checked, 0 failing.
- Focused dependency check: pass; 4 selected items and their closure cover 1,479 items and 371 pages, with no selected item/page cycle or unresolved reference.
- Renderer and content policy: six files pass render/YAML checking; four items have 0 content-policy errors and 0 warnings.
- Strict proof-contract check: theorem and example, 0 errors and 0 warnings.
- Source fetch check: 8/8 fetch-verified and resolved.
- Imported mathematics planning check: blocked by the exact pinned-source mismatch above; no source refresh was attempted.
- `step1-decisions.mjs record` created four `escalated` records with each item’s direct dependencies and the exact source-drift evidence. The run-wide `step1-decisions.mjs check` is currently unable to load other in-flight manifests and exits `Duplicate item undefined`; batches 26 and 30 still contain bare-ID item arrays. This batch’s manifest uses structured item entries.
- The run-wide `item-dependency-levels.mjs check` also fails on other pages outside this assignment: empty scaffold inventories, bare-ID entries, and current level differences including `ex-emg-electric-stress`. The scoped batch-1 level recomputation above passes; no other batch’s manifest or item was changed.
