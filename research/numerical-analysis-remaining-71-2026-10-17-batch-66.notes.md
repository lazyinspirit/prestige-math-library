# Batch 66 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: beta  
Assigned A/B pair: `phase-field-and-energy-dissipative-discretization` / `phase-field-and-energy-dissipative-discretization-examples`  
Scheduling input supplied by dispatch: `554aac2ac14f0ee562e182fa1466370188ef748f580ddeddaff027dd975fd33a`  
Batch dependency level: 2; generated prerequisite batches: 44.

## Controlling plan and conflicts

Read the binding owner direction, PE23 design section in `research/plan-numerical-spatial-track.md`, and PE23 entry in `research/plan-spec.json`.

- The detailed PE23 design describes same-frontier interfaces NA-29, NA-36, PE12, PE13, and T04. The generated page/task `requires` list and the PE23 `plan-spec` page entry list PE13 and T04 only. The `plan-spec` description separately says mesh/time convergence uses PE12. I preserved the assigned page-level requirements `[finite-volume-diffusion-and-mimetic-fluxes, imex-and-operator-splitting-methods]`, added direct PE12 item dependencies for the compactness proof, and made no NA-29/NA-36 quantitative spatial error claim. The run-level dependency input therefore needs owner recomputation to add batch 39 as a direct prerequisite for batch 66; batch 66 remains level 2 because batch 44 is level 1 and batch 39 is level 0. The shared dependency input was not edited.
- The task, dispatch, and generated page manifest assign orders 2686/2687. The PE23 entries in `plan-spec.json` are 2675/2676. I retained the generated assignment orders in this batch artifact and leave that shared-plan/order conflict for owner reconciliation.
- PE23 permits the selected backward-Euler convex-splitting proof route. I used that route. No ARS(2,2,2), Lie, Strang, stiff-stability, or positivity conclusion is claimed. The page-level T04 requirement remains intact, but no T04 theorem is used as a proof fact.
- The design requires explicit quartic-growth dimension limits, SAV/stabilized variants kept separate, no inference from modified to physical energy, and no sharp-interface limit. These caveats are stated in the local items. The only mesh/time PDE limit claimed is for the conforming interval realization in one space dimension at fixed epsilon.
- Axiom ledger: the core continuous definitions and all finite-dimensional graph, minimization, SAV, error, and example arguments use no choice axiom. The optional d=2/d=3 quartic-embedding remarks use the Axiom of Choice because their exact Sobolev-embedding suppliers declare it. The interval projector and PE12 mesh/time compactness theorem also declare AC (the projector uses the AC-backed one-dimensional representative; the convergence theorem uses PE12 compactness and weak subsequence extraction). These are separate axiom branches and are not propagated to the finite-dimensional decay claims.

## Item inventory and dependency levels

Levels were recomputed over the actual in-run supplier pages 39, 44, and 66. The scoped dependency calculation reported no cycles or label errors.

| Item | Level | In-run suppliers setting the level |
|---|---:|---|
| `def-phase-field-gradient-flow-and-double-well` | 0 | none |
| `def-phase-field-discrete-realizations` | 2 | `def-fv-admissible-cell-face-mesh` (0), `def-tpfa-harmonic-face-scheme` (1), local flow definition (0) |
| `lem-phase-field-neumann-laplacian-kernel-and-gauge` | 3 | local realization (2) |
| `lem-phase-field-interval-p1-projector-stability` | 3 | local realization (2); other prerequisites are published suppliers |
| `def-phase-field-stabilized-semi-implicit-variant` | 3 | local realization (2) |
| `alg-phase-field-sav-cahn-hilliard-step` | 3 | local realization (2) |
| `alg-phase-field-convex-splitting-backward-euler` | 4 | Neumann kernel/gauge lemma (3) and realization (2) |
| `thm-phase-field-sav-modified-energy-law` | 4 | SAV algorithm (3), Neumann kernel/gauge lemma (3) |
| `thm-phase-field-convex-splitting-step-existence-and-energy` | 5 | convex-splitting algorithm (4), realization (2), Neumann lemma (3) |
| `thm-phase-field-convex-splitting-ac-ch-time-error` | 6 | step theorem (5), algorithm (4), Neumann lemma (3) |
| `thm-phase-field-convex-splitting-mesh-time-convergence` | 6 | step theorem (5), projector lemma (3), `thm-pe12-discrete-aubin-lions-compactness` from batch 39 (1) |
| `ex-phase-field-allen-cahn-stationary-front` | 1 | flow definition (0) |
| `ex-phase-field-interface-width-and-grid-resolution` | 2 | front example (1), flow definition (0) |
| `cex-phase-field-sav-modified-energy-not-physical-energy` | 5 | SAV modified-energy theorem (4), SAV algorithm (3) |
| `ex-phase-field-ch-two-cell-energy-ledger` | 6 | convex-splitting step theorem (5), realization (2) |

The run's current batch-level artifact lists only batch 44 for batch 66. Direct item dependencies on PE12 suppliers `def-pe12-gelfand-triple` (batch 39, level 0) and `thm-pe12-discrete-aubin-lions-compactness` (batch 39, level 1) require the owner to refresh that shared scheduling input. No dependency cycle was found.

The scoped item-level calculation over batches 39, 44, and 66 passes with no cycles or label mismatches. `node tools/batch-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` could not complete: the global loader rejects the unquoted source title at [items/def-maxwell-edge-fem-semidiscretization.md:22] (batch 42, outside this assignment; YAML reports “Nested mappings are not allowed in compact mappings”). I did not edit that pair. The owner should rerun the batch-level graph check after that metadata is repaired and batch 39 is included.

## Supplier-body audit and unresolved boundaries

- Read the current PE13 bodies for `def-fv-admissible-cell-face-mesh`, `def-tpfa-harmonic-face-scheme`, `thm-tpfa-green-coercivity-maximum-principle`, `thm-path-certified-fv-discrete-poincare`, `thm-tpfa-flux-energy-convergence-smooth-interface`, and `lem-mimetic-fv-parabolic-limit-identification`. The TPFA theorem and its boundary penalty are on the homogeneous Dirichlet branch; the parabolic limit lemma assumes zero-boundary `W_0^{1,p}` reconstructions. Neither proves the desired Neumann/no-flux finite-volume limit. The local Neumann graph operator and finite-dimensional kernel/gauge are proved directly. The convergence theorem uses the stated conforming 1D interval realization and PE12 compactness instead; it makes no PE13 finite-volume convergence claim.
- Read the current T04 bodies `def-additive-ode-and-partition`, `def-ars222-additive-tableau-and-stages`, `lem-ars222-stage-branch-and-residual-control`, and `thm-ars222-additive-order-two-and-tolerance`. They are not used in the selected backward-Euler proof. T04 remains a page-level requirement only.
- Read the complete PE12 bodies `def-pe12-gelfand-triple`, `thm-pe12-discrete-aubin-lions-compactness`, and the generic Bochner weak-compactness item used for the limit extraction. The zero-boundary PE12 weak-gradient lemma is not used. The direct PE12 item edge is the reason for the scheduling-input update recorded above.
- No required supplier body is absent from this draft. Cross-batch body review is not an assertion of supplier acceptance or independent approval.

## Source inspection and retrieval history

The six included A-page sources and per-item dispositions are in `research/numerical-analysis-remaining-71-2026-10-17-batch-66.source-coverage.json`. Full PDFs were fetched, text-extracted, and the cited sections read; their local paths, byte counts, SHA-256 hashes, page counts, locators, supported items, and limitations are recorded there. The page uses independent phase-field analyses plus the complete finite-volume book, finite-volume review, and complete Clason lecture notes.

Retrieval recovery history:

- An initial CiteseerX copy of Shen–Yang returned HTTP 403. Searching the title and authors for an author-hosted full text found the complete Purdue PDF, which was fetched and inspected; only that successful source is cited.
- The first direct fetch of the Guo et al. PDF returned an internal fetch error. A direct shell retrieval of the same complete 27-page publisher PDF succeeded, after which the cited sections and full convergence proof were inspected.
- A UTEP thesis PDF route returned HTTP 403 and Eyre's postscript source was unsupported. Neither is cited or used for a claim; the required coverage is supplied by the full sources listed in source coverage and by the local complete proofs.
- These unsuccessful candidate routes are recorded here as retrieval history, not as cited-source failures. No included source is unresolved, dropped, or awaiting owner escalation, so no `source_resolution` dropped record was created. The failed candidates do not waive coverage: the included full-text sources and local arguments cover every item above.
- The earlier retrieval handoff retained the failed host/result but not the exact CiteseerX and UTEP URLs or retry timestamps; I have not reconstructed those fields. The successful included-source fetches, hashes, and timestamps are verified in the stamped source-coverage file.

## Mathematical scope checks

- The convex split is `F_c(s)=s^4/(4 epsilon^2)+s^2/(2 epsilon^2)` and `F_e(s)=s^2/epsilon^2-1/(4 epsilon^2)`. Their convexity is checked from second derivatives, and quartic coercivity is proved in the stated finite-dimensional realizations.
- The CH objective is minimized on the fixed discrete-mean affine set with the mean-zero inverse. The proof establishes the Euler equation, conservation, and dissipation for the original physical discrete energy.
- The SAV proof establishes uniqueness and an exact modified-energy identity only. The B counterexample is an implication counterexample, not a trajectory of the SAV equations.
- The fixed-mesh temporal error assumes a compact, `C^2` semidiscrete exact trajectory. Constants can depend on the mesh, epsilon, trajectory, and final time.
- The PDE mesh/time theorem fixes epsilon, uses `Omega=(0,L)`, and claims subsequential weak-solution convergence for the conforming interval reconstruction. It makes no higher-dimensional, finite-volume Neumann-limit, or epsilon-to-zero claim.

## Scoped closeout checks

- `proof-layout` was run on all ten proof-bearing batch items after the final proof edits; every item reported zero defects.
- The strict proof-contract check passed for all ten proof-bearing items with zero errors and zero warnings.
- `source-fetch-check --stamp` verified all six included full-text sources; the final check required no new stamps and reported zero drops.
- The item-dependency calculation over actual supplier pages 39 and 44 plus batch 66 checked all 15 batch items: zero graph errors, zero cycles, and zero item-level label mismatches.
- Hash-bound Step 1 readiness records for all 15 assigned items are current and closed as `ready`. The whole-run Step 1 check remains open because other batches still have missing or escalated items; this pair is closed locally. Author readiness is not independent approval.
- The whole-run batch-dependency check remains blocked by the unrelated batch 62 YAML error identified above and requires owner-side repair/recomputation after adding the PE12 batch 39 edge.

## Owner-requested page-carrier continuation — 2026-10-17

The binding owner direction and the complete PE14/PE23 reconciliation packets were reread. They preserve the approved PE23 mathematical inventory and Statements; they correct the planning interface only. The current PE23 plan-spec orders are **2686/2687**, matching the assigned task and batch manifest, so the old order discrepancy above is historical. The current A-page requirements are PE13 (`finite-volume-diffusion-and-mimetic-fluxes`), T04 (`imex-and-operator-splitting-methods`), and PE12 (`nonlinear-parabolic-compactness-and-monotone-evolution`). The PE12 edge is now present in both the batch 66 manifest and the shared dependency-level input. NA29/NA36 remain quantitative conforming-FE error context; this selected route makes no spatial-rate claim from them.

Both formerly absent declared library carriers now exist:

- `library/numerical-pdes-and-spatial-discretization/phase-field-and-energy-dissipative-discretization.md` carries the unchanged 11 A items and explains the finite-volume graph versus exact-mass conforming interval branches, the distinct energy laws, the one-dimensional PE12-backed limit, AC requirements, and mesh-dependent time constants.
- `library/numerical-pdes-and-spatial-discretization/phase-field-and-energy-dissipative-discretization-examples.md` carries the unchanged four B examples and records each exact calculation and its scope caveat.

The actual PE12 `def-pe12-gelfand-triple` and `thm-pe12-discrete-aubin-lions-compactness` bodies, the generic Bochner weak-compactness result, and the PE13 cell-mesh and TPFA definitions were inspected. Their stated spaces, embedding direction, no-flux boundary convention, and AC/CC/DC uses match the consuming phase-field items. The other current direct suppliers and all same-page predecessors used by the 15 assigned items were also examined. No required supplier is absent, and no item Definition or Statement changed in this continuation.

Current dependency evidence is in `research/numerical-analysis-remaining-71-2026-10-17-batch-66.dependency-level-check.json`. The scoped item DAG over batches 39, 44, and 66 checked 50 items with zero errors; all 15 batch 66 labels match their recomputed levels 0–6. The current shared row is `batch 66: requires [39, 44], dependency_level 2`; its input hash is `4b596ec2dca3df12d5484d595004ec1f082067745dfb38d7b48fb338d3389d76`. The whole-run item-level command now passes for 1,420 items across 142 pages. The whole-run batch-level command is still blocked by an unrelated malformed source title at `items/def-na-finite-state-discounted-bellman-system.md:19` in batch 71 (`monotone-hjb-schemes-and-policy-iteration`); no out-of-scope file was changed. This replaces the older batch 42 blocker as the current observed failure.

The current full-text source records and six harvested-result dispositions were preserved. The six local PDFs are present and their SHA-256 hashes match `source-coverage.json`; the four B examples cite sources harvested on the A page. `source-fetch-check --stamp` returned 6/6 fetch-verified, zero newly stamped, and zero documented drops. No cited source remains unresolved, so no new `source_resolution` disposition was added; the original unsuccessful candidate-route history remains unchanged and no missing URLs or timestamps were reconstructed.

Current scoped checks: `rendercheck` passed for both new pages; `proof-layout` passed for all ten proof-bearing items (39 steps, zero defects); strict proof-contract validation passed for 10/10 items with zero errors or warnings; and source fetch verification passed for all six sources. The owner-added PE12 page prerequisite invalidated the original 15 readiness hashes. All 15 assigned Step 1 records have now been refreshed to `ready` against the current manifest with their direct dependencies and `justified_by` suppliers listed. These records describe authoring readiness only. The original native batch 66 result, prompt, page inventory, statements, proofs, source history, shared plan, run graph, engine state, and verdicts were not rewritten.
