# Batch 21 — Geometric electrovac equations and flux normalization

Run: physics-remaining-80-2026-10-17  
Role: beta  
Owned pair: emg-ms01 / emg-ms01-examples  
Status: authoring complete; 3 local verifier items ready, 15 model/consumer items escalated pending current supplier closure.

## Inventory and placement

The original plan reservation has 10 A items and 3 B examples. The current proposed inventory adds the exact rational-verifier algorithm, correctness result and termination/resource result, bringing the planned A inventory to 13. Two further same-page mathematical items were necessary to replace unresolved design vocabulary with actual local arguments:

- lem-emg-xs-rn-tensor-identities replaces the non-resolvable design key GR-Q1 with a proof from the actual published warped-spherical and GR curvature items.
- def-emg-xs-kn-full-sphere-exterior supplies the global smooth exterior needed by the planned full-sphere flux claim; def-emg-xs-kn-data itself deliberately excludes the axis.

The final inventory is 15 A items and 3 B items, below the 100-item A-page cap. The A items are ordered by their declared levels 0–5, supplier-first where their current carriers exist. The B page contains only the two parameter examples and the scalar-trace counterexample.

The original design page requirements listed EMG-MG01 and EMG-MG03. The current plan-spec and batch manifest require exactly emg-mg03, gr-spherical-vacuum-model, emg-cp01, algebraic-closure-embeddings-and-separability, and the-field-of-fractions-and-localisation. The current plan controls. The local items retain their proposed typed foundational dependencies; the two published algebra/fraction pages remain in the page requirements under the owner resolution admitting those pages as P context.

GR-Q1 and GR-G1-G4 are research keys, not item IDs. The RN proof now uses lem-gr-warped-spherical-christoffel-and-ricci, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, and thm-gr-curvature-algebraic-symmetries. The rational KN calculation uses the actual published curvature, volume and density-divergence items. No pseudo-ID remains as a supplier.

## Conventions and mathematical scope

The items fix signature (-+++), metric volume orientation, the stated curvature sign, x0 and r in metres, and geometric charge/flux lengths. The dyonic RN field is global while its magnetic potentials are defined on the two pole patches. The KN coordinate definition remains pole-free; the new full-sphere item extends its metric and potential only to r>R0>4|M| by the smooth global one-form lambda = X dY - Y dX. It makes no horizon, r=0, or maximal-extension claim.

The RN Ricci and curvature calculation lists all 21 independent pair-pair curvature components, including the zero entries, before contracting. The KN exact calculation uses rational functions over QQ(r,y,M,a,q); the separate SymPy run is supplementary algebra evidence and is not an independent proof of the general verifier. Duality and flux deductions remain geometric and do not assert magnetic charge quantization or measurements.

A real supplier-status change was found during construction: the batch-3 current-form, observer-stress and finite-chain Gauss item files are present on disk, contrary to the earlier handoff that called them absent. Their actual Statements and full available proofs were inspected. They are draft items with AI-generated proofs and no independent acceptance, so consumers state their conditional uses and readiness stays escalated.

The current observer-stress Statement supplies the conditional SI tensor T_EM = mu0^-1 Q(F) from the action-variation premise and its observer components. It does not state or prove alpha^2 = 4 pi G_N/(mu0 c^4) or (8 pi G_N/c^4)T_EM = 2Q(alpha F), which was the planned use. The geometric RN/KN equations are now proved directly with Q of the geometric length-normalized field; no SI source conversion is asserted. The original dependency edge is preserved and escalated for owner reconciliation.

The actual current-form draft proves the sign identity d(star F) = -i_v vol and states the source-form equivalence. The actual Gauss draft is for finite smooth singular three-chains and finite four-chain balance, not the stale four-chain-to-sphere summary. The KN flux proof now constructs the finite annulus chain from an octahedral sphere triangulation and uses only the draft finite-chain claim. No conservation-at-infinity claim is made.

## Dependencies and levels

The supplied batch-dependency-levels record lists batch 21 at level 2 with suppliers 3 and 6; the final run-wide check reports that shared artifact stale. The current plan page requirements and exact direct item interfaces are in batch-21.dependency-inputs.json. The assigned 18-item level check uses the current run manifests’ actual item-object suppliers and passes 18/18, maximum item level 5:

- Level 0: alg-emg-rational-electrovac-verification.
- Level 1: verifier correctness, verifier termination/resources, geometric electrovac definition.
- Level 2: RN and KN data definitions.
- Level 3: RN tensor identities, full-sphere KN extension, KN rational calculation.
- Level 4: RN verification, KN verification, duality.
- Level 5: RN curvature, KN invariants, dyonic flux, and the three B examples.

The seven common transitive typed EMG foundations remain absent: def-emg-finite-real-supremum-domain, def-emg-real-metric-axiom-convention, lem-emg-metric-axioms-imply-nonnegativity, def-emg-explicit-power-regimes, lem-emg-sequence-limit-criterion-with-choice, def-emg-boundaryless-completeness-domain, and def-emg-set-size-and-class-schema. RN curvature additionally retains the absent def-emg-extended-pointwise-product and def-emg-lp-class-and-representative. These declared dependencies were not removed or treated as established. The batch-2 local-potentials definition and circle-gluing lemma are present as drafts, not missing carriers. The circle-gluing proof explicitly assumes the absent set-size item and the seven unresolved foundations; the Maxwell action-variation and observer-stress chain remains draft and conditional on those inputs.

The page files emg-mg03 and emg-cp01 exist as drafts; gr-spherical-vacuum-model and the two algebra/fraction prerequisite pages exist as published pages. The draft status of the two EMG pages and of their proof carriers is preserved in the dependency ledger. No cross-batch producer was edited.

## Source reading and dispositions

Two independent full texts were inspected for the A page: Carroll’s complete 238-page Lecture Notes on General Relativity and Adamo–Newman’s complete 30-page Kerr–Newman review. Exact reading locators, supported items, convention limitations and every harvested result’s disposition are in batch-21.coverage.json. Adamo–Newman use signature +--- and geometrized units; their signs and SI normalization were not imported.

A prior open of a Carroll HTML mirror timed out. The exact failed URL and time were not preserved in the handoff, so they are explicitly recorded as unknown rather than reconstructed. The complete arXiv PDF was then located, read and fetch-stamped; the failed HTML route is not cited, no source is dropped, and coverage remains complete. The current source-fetch check reports both active sources fetch-verified.

## Exact finite check

The archived copy research/physics-remaining-80-2026-10-17-batch-21-check-kn.py is the final all-component version of the existing research check; the original research script was left unchanged. It computes all 16 ordered Ricci components directly, all 4 Maxwell-density residuals, all 16 Einstein residuals, inverse and ingoing-transform entries, determinant, scalar curvature, Ricci-square and F-square over the exact rational-function field. All assertions passed with SymPy 1.14.0. The exact command, output summary, hash, domain and limitations are in batch-21.finite-check.json.

## Scoped check record

- precheck: 18 assigned files, 13 proof-bearing items, 0 failures.
- proof-layout: 18 items, 48 steps, 0 defects.
- strict proof contracts: 13/13 checked, 0 errors, 0 warnings.
- rendercheck: 20 assigned item/page files, 0 errors, 0 warnings.
- content-policy: 18 manifest items, 0 errors, 0 warnings.
- coverage-checklist: 1 A page, 26 harvested results, 0 errors, 0 warnings.
- source-fetch-check: 2/2 active sources verified.
- Assigned item dependency levels: 18/18 match the current in-run supplier levels; maximum 5.
- depcheck: 93 unresolved dependency errors, all from the absent typed foundational replacements listed above; no circularity or page-placement defect was reported in the owned scope.
- A separate assigned-level calculation following actual item-object suppliers across all run manifests matches 18/18 items, maximum level 5. The run-wide `item-dependency-levels` check reports 100 errors (91 empty unowned scaffolds and 9 unrelated level mismatches); none names an owned item. The run-wide `batch-dependency-levels` check reports the shared artifact stale. It was left unchanged under the owner-only shared-state rule.

## Readiness

`step1-decisions.mjs record` was used for all 18 assigned items without `--owner` or overwriting an existing escalation. The three verifier items at levels 0–1 have complete arguments and current prerequisites, and their records are ready. The remaining 15 records are escalated with their direct dependencies and exact transitive blockers: the seven absent common foundations, the two RN-curvature-only missing carriers, and the relevant present-but-unaccepted EMG draft chain. The run-wide Step 1 check remains open (324 items, 101 ready, 223 pending items and 93 empty page inventories); all 18 owned records are current, with 3 ready and 15 escalated. The alpha-scaling interface mismatch is escalated without weakening the geometric claims.

Draft completion records do not imply independent proof approval or publication.
