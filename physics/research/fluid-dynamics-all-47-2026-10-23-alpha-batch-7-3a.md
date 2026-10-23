# Batch 7 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-7`.

## Dependency level 1: thm-fd-x07

Reviewed the complete current Statement and nine proof steps and the actual cited supplier statements/definition: `def-fd-x00`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `def-countable-choice`. The divergence applications have C1 product fields and zero boundary flux under explicit countable choice. The local scalar integral inequality includes the zero-norm branch. The residual estimates follow from the assumed Poincare bound, dividing only for positive gradient norm. Empty-domain norms, if admitted by the spelled-out definition, vanish. The separate periodic-channel proof uses the vertical FTC, giving C=h without applying a C1-domain theorem to a rectangular cell. Stationary subtraction has the correct negative convective residual and asserts no existence or physical applicability.

The initial risk report routes this item CRITICAL (9). Its specific risk review is now complete in the batch contract. No item decision is owed: it is untouched and unflagged. No item change or consumer propagation is needed.

Sources independently opened at the relevant sections: [Guermond, Part I Chapter 3](https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf), sections 3.3 and 3.4.4, printed pp.23,25-26: context only, Poincare proof explicitly deferred. [Tong, Chapter 2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf), section 3.2.2 and printed pp.82-83: Couette/Stokes context only. These were scoped readings, not complete-book review or external proof imports.

Checkpoint: level-1 review complete before the level-2 review below.

## Dependency level 2: thm-fd-x10

Reviewed the complete current Statement, all five steps and each actual supplier. Subtracting the base field gives the stated shear term; periodicity and zero perturbation trace remove all transport, pressure and diffusion boundary terms by componentwise FTC. The bound 2|w1w2|<=|w|² and the reviewed channel inequality give Eprime<=-(2nu/h²-|S|)E; the exponential integrating factor proves the asserted bound. Positive parameters and the strict condition give positive decay rate. The endpoints t=0,T, zero shear and zero perturbation energy cause no division issue. Equality at the excluded threshold is not asserted to give strict decay. Explicit solution regularity justifies differentiation and integration; no existence or empirical transition claim follows.

Initial risk score CRITICAL (10); risk review complete in the owning contract. No item decision owed. Independently read [Falsaperla, Mulone and Perrone, arXiv:2105.06443v1](https://arxiv.org/pdf/2105.06443), section 2.1 and the section 3.1 energy argument: its streamwise restriction is preserved in the item's source qualification. The all-perturbation sufficient bound here is established locally. The Tong and Guermond contexts are as recorded above; no external claim is used to replace a missing proof.

Checkpoint: level-2 review complete before the page-only obligations below.

## Page findings and repairs

Confirmed `reader:7:1`, `reader:7:2`, `refuter:7:1`, and `refuter:7:2` as nonfatal. The A/B inventories include Stokes, Couette and linear vortex-sheet items; each old title named only Stokes. Updated both frontmatter titles and their top-level titles in the owning batch-7 page manifest to “Stokes residual estimates, Couette stability and linear vortex-sheet modes” (with “— Examples” on B). Kept inventories, ordering, prerequisites, status, compact layout and empty bodies. Reader and refuter reports identify the same two defects; each paired finding shares one closed ledger row with an explicit same-defect reference. All four repair confidences are 1.

The pre/post snapshots have identical item/contract/manifest maps and page maps: no reader repair occurred. Immediately before editing, each actual raw page SHA256 matched its post-reader snapshot (A: `7bf83933bd8a74f7ed4c4c4e7baf907c00dce7e70edd61a2937a9e74f245e6bc`; B: `38468ca67a0c8204f214cabd7cef8a7d827cddd53834a6b82fa4f444721fe737`). The scope's observed finding fingerprints are retained unchanged. No missing historical preimage or historical-disposition exception was needed.

Read the current remaining page carriers `thm-fd-x11` and all three examples to check title coverage. Their displayed mode substitution, quadratic dispersion relation and two Fourier coefficients give the stated linear growth, including the zero-jump non-growth distinction and fixed t>0 restriction. The three worked fields have the stated residual, exact energy and interface traces by direct differentiation/integration. No item repairs, diagrams, missing required diagrams, uninterrupted-statement violations, empirical claims or published supplier defects were found. The page-title repair changes no item Statement/Definition or physical public interface; no downstream item repair or external consumer escalation is required.

Updated the owned cross-batch input with specific current supplier uses, preserving prior owner-resolution evidence. Published mathematical suppliers and all mathematical originals/imports remain read-only. No published-consumer ledger entry is needed.

Checkpoint: the two page-title repairs and four decisions are complete; final checks follow.

## Final local checks and handoff

- `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-7.proof-contracts.json`: exit 0; identified the two CRITICAL items before their reviews.
- The same command with `--require-reviewed`: exit 0, zero errors, six routed items; both required reviews complete.
- `node tools/physics-support/rendercheck.mjs library/fluid-dynamics-mathematics/fd-x03.md library/fluid-dynamics-mathematics/fd-x03-examples.md`: exit 0; both frontmatter blocks parse.
- Native serialized `defect-ledger.mjs append --file /tmp/fluid-batch7-title-defect-rows.json`: exit 0; appended exactly two valid closed rows and refreshed the generated ledger view. Row IDs are `fluid-dynamics-all-47-2026-10-23-3a-batch-7-fd-x03-title-scope` and `fluid-dynamics-all-47-2026-10-23-3a-batch-7-fd-x03-examples-title-scope`.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run fluid-dynamics-all-47-2026-10-23`: exit 0; refreshed and deduplicated the derived ledger from consumer inputs.
- Final scoped assertions: exact four-obligation coverage, correct subjects and route-specific decisions, one closed row per finding, confidence 1, matching manifest/page titles, empty page bodies, retained draft status and compact-v1. All passed.

Final page raw SHA256: A `85c349873c6c52ffece81cec8667ffe822b148b42d72a1e32b8711e9e81482fc`; B `0ff041beb27aec4cf8c19e8831483af94f2106ea23433211353d6d8a8bd921ec`.

No item file was changed, so changed-item precheck/reflow/proof-layout requirements have no paths to process. No judge, stamp, self-certification, dispatch, publication or gate battery was initiated. Engine hash stamping and gates remain with the engine. No unresolved obligation, published finding, owner escalation or mathematical blocker remains in this dispatch. The decisions file contains exactly the four owed findings, without adding decisions for untouched unflagged items or originally untouched pages.
