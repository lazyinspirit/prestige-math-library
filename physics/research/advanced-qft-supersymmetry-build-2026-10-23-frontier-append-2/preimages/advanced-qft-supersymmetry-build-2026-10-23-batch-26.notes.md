# Batch 26 — Threshold Matching and Coupled RG Evolution

## Scope and plan reconciliation

This batch owns the pair aqft-eft-matching-running / aqft-eft-matching-running-examples at order 982 in advanced-qft-and-supersymmetry. The A page requires aqft-eft-operators and qftx-eft-rg-data; the B page requires the A page. Both authored page files remain frontmatter-only, with no Markdown body or summaries.

The full design section is “Threshold Matching and Coupled RG Evolution” in research/plan-advanced-qft-and-supersymmetry-track.md (lines 359–369); the detailed A3 direction is in research/advanced-qft-supersymmetry-2026-10-23/research-eft-experiments.md (lines 81–89). We preserve its scope: separate threshold matching from RG evolution; use a common declared basis, scheme, and infrared regulator; state the loop, operator, and mass-expansion orders; compose thresholds in order; prove scale independence only when the supplied maps and flows are compatible; and assert no generic SMEFT coefficient matrix or continuum result.

Plan conflict recorded: the design lists prop-aqft-matching-and-running-scale-independence as a candidate, while the exact assigned inventory uses pthm-aqft-matching-and-running-scale-independence as a physics theorem and stores the candidate ID in research_candidate_id. The mathematical RG uniqueness theorem and finite-scheme definition already belong to batch 17, so this batch does not duplicate them. No change was made to the shared plan.

The category directory currently has no _category.md; category-introduction work is outside this pair’s assigned page and evidence ownership.

## Authored items and dependency levels

### def-aqft-threshold-matching-map — level 4

Defines finite high- and low-energy coefficient spaces and supplied scheme coordinates; natural units and Minkowski signature (-+++); dimensionless logarithmic scale t=log(mu/mu_0); distinct mu_W, mu, M, E_ext, Lambda_reg, and Lambda_op; the selected physical operator-data interface; common-regulator amplitude matching through explicit truncations; a jointly C1 matching family on domains where both beta fields are defined; the realified RG-compatibility identity; and ordered finite-threshold composition.

The physical operator interface matches the current batch-25 definition: finite graded fields and jet domains, Lorentz/gauge/flavor/spurion actions, finite cutoffs, a declared quotient with typed relations, complex reductive algebraic group data and an invariant-space verification or formal-only label, and the optional non-Abelian global group/bundle/connection conventions. The definition claims no universal basis completeness, coefficient calculation, omitted-order bound, or continuum limit. Its axiom base preserves the supplier’s ZF + AC_omega and asserts no full Choice.

Direct dependencies and roles:

- def-aqft-model-and-scale-data — formulation-prerequisite.
- def-aqft-operator-basis-physical-data — formulation-prerequisite.
- def-aqft-scheme-and-wilson-coefficients — mathematical-premise.

The current in-run levels are model 1, physical operator data 3, and scheme 3; therefore this item is level 1 + max(1,3,3) = 4.

### pthm-aqft-matching-and-running-scale-independence — level 5

States conditional scale independence for finite-order matching when the supplied beta fields are continuous and locally state-Lipschitz, the matching family is jointly C1 on the trajectory domains, every required flow exists on the declared compact interval, and the compatibility identity holds. The proof uses the chain rule to transport the high-energy trajectory, common-interval uniqueness to identify each low-energy solution, the matching equality at the fixed final scale, and finite induction for multiple thresholds. It assigns no numerical bounds to discarded orders and calculates no beta or matching coefficients.

Direct dependencies and roles:

- def-aqft-scheme-and-wilson-coefficients — mathematical-premise.
- def-aqft-threshold-matching-map — formulation-prerequisite.
- thm-aqft-truncated-coupled-rge-wellposedness — mathematical-premise.

Levels 3, 4, and 4 give this item level 5. The theorem records inherited AC_omega; its transport proof itself uses no choice.

### ex-aqft-qed-threshold-matching — level 5

Uses the source-reported one-loop two-flavor QED decoupling-subtraction beta equations and continuous muon-threshold boundary condition, then integrates each constant-active-flavor equation for 1/alpha_DS. It verifies the low-energy boundary and continuity at Q=M_mu. No measured masses or coupling, all-orders claim, or numerical truncation error is asserted.

Direct dependencies and roles:

- def-aqft-scheme-and-wilson-coefficients — mathematical-premise.
- def-aqft-threshold-matching-map — formulation-prerequisite.

The maximum supplier level is 4, giving this item level 5. Its axiom metadata preserves the general matching-interface AC_omega base; the displayed integration uses no choice.

## Source reading and coverage

Two independent full treatments were read for the A page; each harvested result and disposition is recorded in the batch coverage file.

1. A. V. Manohar, [Introduction to Effective Field Theories](https://arxiv.org/pdf/1804.05863), full 94-page Les Houches lecture notes. Read Chapter 5 §§5.5–5.7 (printed pp. 38–41, equations (5.23)–(5.31)) for matching and common infrared terms; §5.10 (pp. 46–48, equations (5.49)–(5.60)) for coefficient evolution and operator mixing; and Chapter 7 §§7.1–7.2 (pp. 58–60, equations (7.1)–(7.8)) for one-loop QED threshold behavior. These passages support def-aqft-threshold-matching-map, pthm-aqft-matching-and-running-scale-independence, and ex-aqft-qed-threshold-matching; they do not prove the authored compatibility theorem or provide a general SMEFT matrix.
2. C. P. Burgess, [Introduction to Effective Field Theory](https://arxiv.org/pdf/hep-th/0701053), full 55-page review. Read §§2.2.1–2.2.2 (printed pp. 20–22, equations (40)–(41)) for Wilson-action scale cancellation and §4.1.4 (pp. 43–45, equations (81)–(86)) for the electron/muon DS threshold example. These passages support the finite matching/RG context and source-specific QED inputs; they do not prove a universal matching-scale theorem or bound discarded orders.

Browser inspection covered both full PDFs. source-fetch-check --stamp verifies 2/2 sources, with 0 newly stamped on the final check; the retained stamps are Manohar 2,303,533 bytes, SHA prefix 54cc9891912fec15, 94 pages, and Burgess 412,403 bytes, SHA prefix ecacb4530edfd07e, 55 pages. The coverage check reports one page, 13 harvested results, zero errors, and zero warnings. No retrieval failed or was dropped; source_resolution is empty.

## Current prerequisite and cross-batch status

Before readiness recording, loadStep1Record and step1Decision showed current closed-ready records for:

- def-aqft-model-and-scale-data (batch 24; owner record).
- def-aqft-operator-basis-physical-data (batch 25; record timestamp 2026-10-23T09:22:41.690Z).
- def-aqft-scheme-and-wilson-coefficients (batch 17; owner record).
- thm-aqft-truncated-coupled-rge-wellposedness (batch 17; owner record).

The complete live physical-operator definition and its actual interface were inspected. Its recorded in-run dependencies are def-aqft-local-operator-and-dimension, def-aqft-model-and-scale-data, def-aqft-operator-basis-quotient, def-countable-choice, def-qftx-associated-covariant-derivative, def-qftx-nonabelian-gauge-data, def-qftx-principal-connection-form, lem-aqft-finite-order-local-operator-space-finite-dimensional, and lem-qftx-principal-curvature-cartan-bianchi. Current in-run prerequisite records are closed ready. The out-of-run published definitions of countable choice and complex reductivity were read; countable choice is used as the explicit AC_omega axiom, with no full Choice asserted. The right-principal connection, local curvature sign, and associated-covariant-derivative conventions were checked against the current statements and proofs.

All eight direct cross-batch dependency rows are verified: the two required pages and six direct item edges. Each records only the scoped interface/readiness check, not independent proof acceptance. There are no open cross-batch edges for this batch.

The three batch-26 Step 1 records were written supplier-first with owner=false, exact direct dependency IDs, and current hashes:

- def-aqft-threshold-matching-map — ready, recorded 2026-10-23T09:33:18.517Z.
- pthm-aqft-matching-and-running-scale-independence — ready, recorded 2026-10-23T09:33:45.745Z.
- ex-aqft-qed-threshold-matching — ready, recorded 2026-10-23T09:33:58.116Z.

These Step 1 records establish authored prerequisite readiness only; independent review and later gates remain separate.

## Scoped validation and remaining owner-level evidence

- proof-contract.mjs --strict: 3 items, zero errors and warnings.
- proof-layout.mjs on the three changed items: 3 items, 8 numbered steps, zero defects.
- Normative precheck: both proof-bearing items passed; the definition has no proof section.
- Regular content-policy.mjs: 3 items, zero errors and warnings.
- rendercheck.mjs: 5 item/page files, zero errors and warnings.
- Focused depcheck.mjs: all 3 items passed; 3,024 dependency-closure items and 450 pages checked, zero errors and warnings.
- The native statement parser scoped to these 3 items: zero defects. The run-wide statement-first command stops at the unrelated empty inventory in batch 33 (qftx-susy-moduli-and-dualities).
- coverage-checklist.mjs: 1 page, 13 harvested results, zero errors and warnings.
- source-fetch-check --stamp: 2/2 source fetches verified, 0 newly stamped.
- Targeted dependency-level calculation: 4, 5, and 5 match the stored levels. The full run check is blocked by empty scaffold inventories and eight unrelated stale item labels in other batches. The batch-level graph check reports stale shared dependency levels after live manifest changes; that shared run-level evidence remains with the owner and was not edited.
- content-policy.mjs --manifest-only reports batch-item-already-exists for the three already-authored carriers; this is its pre-authoring mint check. Regular scoped content policy passes.
- No category introduction file exists; category authoring is outside this batch’s ownership.

All assigned item/page carriers and batch evidence are complete. At the owner’s drained join, recompute the shared run-level dependency graph and resolve unrelated run-wide scaffold/level findings without altering this batch’s verified content.
