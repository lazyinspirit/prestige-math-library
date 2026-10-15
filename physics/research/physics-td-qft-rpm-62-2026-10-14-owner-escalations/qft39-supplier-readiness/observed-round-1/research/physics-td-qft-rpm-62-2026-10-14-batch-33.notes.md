# Batch 33 notes — emg-c01 / emg-c01-examples

Run physics-td-qft-rpm-62-2026-10-14, role beta, batch 33. These are authoring and evidence notes, not independent proof approval.

## Plan and design

The complete design section is research/plan-einstein-maxwell-models-track.md, “SI and geometrized Einstein–Maxwell parameters.” The current research/plan-spec.json entries agree on IDs emg-c01 and emg-c01-examples, titles, category einstein-maxwell-models-mathematics, library mathematics, orders 435–436, and the page prerequisites emg-c01 requires emg-mg01 and its B companion requires emg-c01. The design reserves six A items and two B leaves; the assigned manifest now contains exactly those eight items. The pre-authoring plan-spec item arrays were empty as designed. There is no design-versus-plan conflict.

The assigned category directory has no _category.md. Category metadata is outside this batch’s file assignment; the gap is recorded for the owner. The authored pages contain six A items and two B items, below the 100-item page cap.

## Item inventory, dependencies, and levels

Batch 33 is dependency level 1 and requires batch 32, as recorded in the run dependency file. Its row is level 1 / requires 32. The item levels in the manifest and frontmatter are:

- Level 1: def-emg-geometric-scaling.
- Level 2: thm-emg-field-normalization-equivalence and thm-emg-conformal-einstein-transformation.
- Level 3: thm-emg-conformal-maxwell, prop-emg-test-field-residual-order, and ex-emg-coulomb-charge-normalization.
- Level 4: prop-emg-constant-electrovac-rescaling and cex-emg-conformal-maxwell-not-einstein.

These levels are one plus the greatest in-run supplier level; without an in-run supplier the level is zero. The direct deps, dependency_roles, domain mathematics, library mathematics, and placements are transcribed in the manifest. All new mathematical items have mathematical prerequisites only. The imported Axiom of Countable Choice item and the existing local Lorentz/GR suppliers were read at their current statements and proofs; no original or imported mathematics was edited. The inherited AC_omega assumption is carried explicitly, and no proof uses full Choice.

The design’s old source inventory understated needed mathematics for the curvature transformation and related consumers. The actual dependency closure includes the Lorentzian form and Hodge definitions/calculus, GR curvature and metric-selected-connection definitions, tensor covariant-derivative rules, and the real-power and total-chain-rule results. These existing carriers have exact statements and proof status in the item Facts & Assumptions; no additional local helper was needed. The curvature convention remains R(X,Y)Z = nabla_X nabla_Y Z - nabla_Y nabla_X Z - nabla_[X,Y]Z and Ric_{bd} = R^a{}_{bad} as stated in the cited supplier.

## Cross-batch supplier interface

The planned page edge emg-c01 to emg-mg01 and eight direct item edges are in batch-33.cross-batch-dependencies.json. Batch 32 now registers the emg-mg01 A page and its four A items. The producer’s five-item strict proof-contract check passes, all four A-page carriers pass precheck (three proof-bearing items and one definition), and all four A-item Step 1 hashes are current. The three directly used interfaces match: the Lorentzian forms definition supplies the oriented smooth four-manifold, metric, forms, volume and length-coordinate convention; the conformal Hodge lemma supplies the exact Omega^(4-2k) multiplier; and the Lorentzian calculus lemma supplies d-squared and the graded product rule. The page and item edges are marked interface-verified, and the unified dependency ledger refresh succeeded. These producer items remain draft; this records interface compatibility, not independent proof acceptance.

## Source research and recovery

Coverage is in batch-33.coverage.json. Tong’s complete author-hosted General Relativity lecture notes and Carroll’s complete 238-page General Relativity lecture notes provide two independent treatments. The BIPM SI Brochure is additional support for the exact SI status of c and the non-exact, experimentally determined value of mu0. Locators, the twelve harvested headings, their inline dispositions, URLs and fetch stamps are recorded in coverage. The definition uses positive symbolic parameters and makes no numerical measurement claim.

The combined Tong PDF route failed the compressed-PDF page-count check. Its initial attempt and five recovery retries, alternative searches, and per-item alternative arguments/dependencies are preserved in source_resolution. The complete author-hosted S3 and S4 HTML sections were fetched and inspected; active item citations point to these successful HTML sources. The failed route alone is documented as dropped. The coverage checklist reports one nonfatal low-yield warning because 0 of 12 harvested results are tagged included; all twelve are mapped inline to assigned items. Alpha should confirm those inline dispositions during scope review.

## Mathematical and physical scope

The A items are mathematical parameter and tensor identities. They do not assume Maxwell’s equation, a matter model, a limiting procedure, or that a model describes nature. The SI dictionary distinguishes exact c from symbolic positive mu0 and states no selected mu0 measurement. The constant-rescaling result does not claim invariance of fixed apparatus or matter data. The fixed-background result is an exact residual identity, not a solution-distance estimate. The conformal counterexample uses Minkowski space, zero field/current, Lambda = 0, and Omega = exp(k x^1) with nonzero inverse-length k. The Coulomb example is restricted to r > 0 and does not claim a point-source solution at the excluded origin.

The B items are leaves: the conformal counterexample exhibits the Einstein-equation failure under a nonconstant rescaling, and the Coulomb example computes the charge conversion. Neither is used as a supplier.

## Checks and current blockers

- All eight assigned Step 1 records are ready with owner:false; a focused hash recheck reports closed=true for each. These records establish Step 1 authoring readiness only, not independent proof approval.
- proof-contract.mjs --strict: 8/8 items, zero errors and warnings. Contracts contain the actual canonical steps, exact supplier excerpts, per-step inputs, all standard boundary dispositions, and finite algebra/component checks where applicable.
- precheck.mts: 7 proof-bearing items checked, zero failing; the parameter definition is nonproof material.
- proof-layout.mjs on the eight explicitly changed items: 8 items, 32 steps, zero defects. The default renderer loader could not resolve the web alias @/components; the same application renderer ran successfully after loading the available shared TSX runtime from the parent math workspace. No application files were changed.
- rendercheck.mjs on the eight items and two pages: 10 files, pass.
- content-policy.mjs on the batch manifest: 8 scoped items, zero errors and warnings.
- coverage-checklist.mjs --require-destination: one A page and 12 harvested results, zero errors, one low-yield warning described above.
- source-fetch-check.mjs in stamp mode: 4/5 sources fetch-verified, 0 newly stamped, and 5/5 resolved with one documented source-route drop; the subsequent check mode also passes.
- Focused depcheck on the eight items: pass; the selected page and prerequisite-cycle closure covered 1,082 items and 269 pages.
- Batch 32 supplier checks: strict proof contracts passed 5/5; precheck passed all four A-page carriers (three proofs and one definition); the four A-item Step 1 hashes are current.
- The full item-dependency-level check reports empty scaffold inventories and mismatched levels in other run batches; none of these eight item IDs is named in its errors, and the eight recorded levels match their batch manifest and current in-run supplier levels. The full batch-dependency-level check reports its shared input hash as stale; the recorded batch-33 value remains level 1 requiring batch 32. Shared dependency-level data was left untouched.
- The recomputed autopilot status at 04:07:35 shows batch 33 still missing from Step 1 scaffold dispatch coverage, but no longer lists it among artifact-missing batches; its pages, contracts, coverage, notes and readiness records are on disk. Run state was not edited; dispatch registration and closeout remain with the owner.
