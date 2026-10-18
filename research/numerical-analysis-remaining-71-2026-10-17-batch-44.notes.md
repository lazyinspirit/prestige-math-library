# Batch 44 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `finite-volume-diffusion-and-mimetic-fluxes` / `finite-volume-diffusion-and-mimetic-fluxes-examples`  
Assigned batch level: **1**; prerequisite batches: **28, 39**  
Assigned scheduling input: `efecba339a8b7856b5374a4ab904fab996a3823f3bf117c5d9b60619a6ac0167`

## Plan and supplier review

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the generated Batch 44 task, the owner authoring direction, the current `plan-spec.json` rows, the complete PE13 section of `research/plan-numerical-spatial-track.md`, current batch evidence, and the actual supplier bodies discussed below. The owner direction contains no pair-specific amendment.

The autopilot status was recomputed from `.autopilot` and checked against the run log: the run remains at `1-scaffold`, no writer is in flight, and an existing owner blocker elsewhere holds advancement. Batch 44 did not alter engine state or trigger a transition.

The task and controlling `plan-spec.json` give the A page three page requirements: `elliptic-finite-difference-methods`, `conservative-finite-volume-weak-limits`, and `nonlinear-parabolic-compactness-and-monotone-evolution`. The PE13 design additionally names `finite-element-meshes-and-interpolation` (NA-28). This is a design-versus-plan discrepancy. Per the dispatch rule, `plan-spec.json` controls: the manifest and page keep the three canonical requirements and do not add an NA-28 edge. This mismatch is recorded here; no shared plan was edited.

The current published elliptic finite-difference page was inspected. Its rectangular-grid formulas and smooth Taylor estimate do not establish generic polytopal TPFA geometry or mimetic consistency; no theorem in this pair cites it as proof support. The assigned page edge remains because it is in the controlling plan.

The current Batch 28 item `thm-conservative-finite-volume-weak-limit` was read with its statement, facts, and proof. It is a one-dimensional scalar hyperbolic conservation-law weak-limit result, assumes strong local $L^1$ convergence and local uniform boundedness, and concludes a distributional weak identity. It supplies no diffusion operator, parabolic reconstruction, or monotone flux graph. The planned page edge is retained, but it is marked **open** in the cross-batch input and is not used as a mathematical premise. Owner reconciliation is needed for that required page interface.

For Batch 39, the current bodies and relevant proofs were inspected for `def-pe12-gelfand-triple`, `def-pe12-monotone-diffusion-flux`, `lem-pe12-space-time-gradient-weak-compactness`, `lem-pe12-minty-identification`, and `lem-pe12-evolution-energy-chain-rule`; `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives` was also read for the scalar initial-trace integration by parts. The conditional limit item states the conforming $W_0^{1,p}$, strong-state, weak-flux, energy-limsup, and $L^\infty(0,T;H)$ hypotheses explicitly, derives the $V^*$ time derivative, obtains the continuous $H$ representative, identifies the initial trace, and then applies Minty. The suppliers are used only under their actual hypotheses and AC branches.

The Batch 39 discrete Aubin–Lions theorem and `thm-pe12-monotone-fem-limit` were also inspected to check for a finite-volume bridge. Their current statements require FEM nodal/projector or already-conforming reconstruction hypotheses; they do not construct conforming reconstructions or prove discrete compactness for this TPFA/hybrid mimetic family. This is why the pair does not claim unconditional convergence of the defined nonlinear scheme.

## Inventory, direct dependencies, and levels

Levels below are recomputed over the assigned items and the in-run supplier batches that determine their labels (2, 28, 39, 44). The assigned page-level batch dependency remains level 1 with batches 28 and 39. The maximum item level in this pair is 3.

| Level | Item | Direct item dependencies |
|---:|---|---|
| 0 | `def-fv-admissible-cell-face-mesh` | none |
| 1 | `def-tpfa-harmonic-face-scheme` | `def-fv-admissible-cell-face-mesh` |
| 1 | `def-hybrid-mimetic-fv-scheme` | `def-fv-admissible-cell-face-mesh` |
| 2 | `thm-tpfa-green-coercivity-maximum-principle` | `def-fv-admissible-cell-face-mesh`; `def-tpfa-harmonic-face-scheme` |
| 2 | `thm-path-certified-fv-discrete-poincare` | `def-fv-admissible-cell-face-mesh`; `def-tpfa-harmonic-face-scheme` |
| 2 | `prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact` | `def-fv-admissible-cell-face-mesh`; `def-hybrid-mimetic-fv-scheme` |
| 2 | `ex-orthogonal-voronoi-harmonic-diffusion` | `def-fv-admissible-cell-face-mesh`; `def-tpfa-harmonic-face-scheme` |
| 2 | `cex-nonorthogonal-two-point-flux-inconsistent` | `def-fv-admissible-cell-face-mesh`; `def-tpfa-harmonic-face-scheme` |
| 2 | `ex-harmonic-transmissibility-material-interface` | `def-fv-admissible-cell-face-mesh`; `def-tpfa-harmonic-face-scheme` |
| 3 | `thm-tpfa-flux-energy-convergence-smooth-interface` | `def-fv-admissible-cell-face-mesh`; `def-tpfa-harmonic-face-scheme`; `thm-tpfa-green-coercivity-maximum-principle` |
| 3 | `lem-mimetic-fv-parabolic-limit-identification` | `def-pe12-gelfand-triple`; `def-pe12-monotone-diffusion-flux`; `lem-pe12-space-time-gradient-weak-compactness`; `lem-pe12-minty-identification`; `lem-pe12-evolution-energy-chain-rule`; `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`; `def-axiom-of-choice` |
| 3 | `ex-anisotropic-mimetic-flux-on-skew-cell` | `def-fv-admissible-cell-face-mesh`; `def-hybrid-mimetic-fv-scheme`; `prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact` |

The conditional nonlinear item has in-run suppliers in Batch 39 (maximum supplier level 2) and the base AC item in Batch 2; its label is therefore 3. The published one-dimensional $W^{1,1}$ representative result is a direct item dependency but is not an in-run supplier. These are item-level edges; they do not add a page-level prerequisite to the assigned plan.

## Mathematical scope and open claims

- The TPFA formula is restricted to scalar positive isotropic cellwise-constant coefficients on meshes where each interior center segment actually crosses the shared face orthogonally. The interior coefficient is the distance-weighted harmonic conductance of two half-cell resistances; boundary transmissibilities are one-sided.
- The discrete Green identity gives a symmetric positive definite stiffness matrix and a self-adjoint operator in the cell-volume weighted inner product. The ordinary coordinate matrix of $A_h$ need not be symmetric when cell volumes differ. The minimum-principle proof uses the explicit boundary-anchor path condition.
- The discrete Poincaré result is proved from supplied simple boundary paths and an explicit finite congestion constant. Mesh-uniformity is conditional on a uniform bound for that constant; no claim is made for every orthogonal mesh family.
- The TPFA flux-energy estimate assumes a uniformly refining regular family, face-aligned coefficient jumps, matching normal flux traces, exact cell balances, piecewise $C^2$ solutions, and a family-wide Hessian bound. It does not cover arbitrary nonorthogonal meshes or nonsmooth weak solutions.
- The hybrid mimetic branch states its cell/face unknowns and face-moment closure. The local proposition proves coercivity in the displayed gradient-residual norm, boundary-anchored global uniqueness, local conservation, and affine flux exactness. It claims no general mimetic maximum principle and no mesh-refined convergence theorem.
- The conditional parabolic lemma is fully proved as an implication. It does not prove that the candidate hybrid backward-Euler scheme is solvable or that it supplies the reconstruction, compactness, residual, and energy hypotheses.

The following significant theory remains for owner placement or reconciliation:

1. A scheme-specific `thm-fv-discrete-compactness-and-conforming-reconstruction` should prove the mesh hypotheses and discrete bounds that produce conforming $W_0^{1,p}$ reconstructions, strong state convergence, and weak gradient limits for this finite-volume family.
2. A `lem-fv-weak-consistency-and-energy-limsup` should establish the vanishing parabolic weak residual and the Minty energy limsup from the actual discrete equations and mesh assumptions.
3. If the page is to claim general hybrid mimetic convergence, a separate supplier such as `thm-hybrid-mimetic-discrete-compactness-and-limit-conformity` must relate the gradient-residual norm to a continuous Sobolev space and prove the required limit-conformity/compactness. The current local coercivity and affine-exactness proposition does not do this.

The proposed supplier IDs do not exist in the current run inventory. They are recorded as unresolved in the Batch 44 cross-batch input and as `deferred` to `owner-decision` in coverage. The A page has eight of the permitted 100 items, so there is room to place these results if approved; no claim was weakened to fit capacity.

## Sources and retrieval

| Full source inspected | Read range and disposition |
|---|---|
| Eymard–Gallouët–Herbin, *Finite Volume Methods*, updated author text, [full author-hosted PDF](https://raphaeleh.github.io/PUBLI/bookevol.pdf) | Full 254-page PDF fetched; detailed reading of Chapter 9 §§9.2–9.5, including Definition 9.1, the full proof of Lemma 9.1, and Chapter 11 §11.1. Used for mesh/TPFA conventions, the discrete H1/Poincaré route, smooth flux consistency, and the harmonic interface formula. |
| Jérôme Droniou, *Finite volume schemes for diffusion equations: introduction to and review of modern methods*, [full 38-page preprint](https://arxiv.org/pdf/1407.1567) | Read §§1.1–1.3, 2.1–2.3, 3.4, and 4.0–4.1. Used for conservative flux conventions, TPFA's orthogonality limitation, HMM gradient/residual structure, and cautions on general maximum principles. |
| Lipnikov–Manzini, *Discretization of mixed formulations of elliptic problems on polyhedral meshes*, [full 27-page preprint](https://arxiv.org/pdf/1610.05850) | Read §3.1–§3.3. Used for mixed-hybrid/mimetic consistency and stability context; the local finite-volume claims are proved in the carriers rather than imported from a differently normalized scheme. |

The original Eymard HAL URL was fetched locally as a 255-page PDF, but five `source-fetch-check` attempts returned a 1445-character HTML response. Two recorded searches located the author-hosted mirror; its complete 254-page PDF was inspected against the HAL copy and passed the stamped checker. The original URL is recorded as a certain drop in the coverage file with all attempts, searches, per-item arguments, and exact declared dependencies; the equivalent author text remains active. No mathematical result was dropped. Source headings and dispositions are in `batch-44.source-coverage.json`; the source-resolution history and fetch receipt are in `batch-44.source-evidence.json`.

The four worked examples/counterexample include explicit finite arithmetic in their verification steps. No `finite-smoke` check is registered for these finite-volume models; the contracts therefore leave `finite_smoke` empty rather than claiming an unrun or unrelated checker.

## Cross-batch evidence and scoped checks

The Batch 44 cross-batch input records the Batch 28 page edge as open, the Batch 39 finite-volume compactness/reconstruction bridge as open, and the actual PE12/AC item suppliers for the conditional lemma as verified with their required hypotheses. It does not treat the page-level dependencies as proof premises.

| Check | Result |
|---|---|
| `node tools/tsx-run.mjs tools/author-check.mts numerical-analysis-remaining-71-2026-10-17 44` | Pass. Precheck, renderer, content-policy, and strict proof-contract gates all pass; receipt: `research/numerical-analysis-remaining-71-2026-10-17-author-check-44.json`. |
| `node tools/proof-layout.mjs` on the 12 assigned item files | Pass: 12 items, 36 numbered steps, 0 defects. |
| Strict proof contracts | Pass: 12/12 items, 36 mapped steps, 24 exact supplier excerpts, 0 warnings. |
| `node tools/coverage-checklist.mjs ...batch-44.coverage.json --require-destination` | Pass: 1 A page, 14 harvested source results including the preserved original-URL history, 0 errors/warnings. |
| `node tools/source-fetch-check.mjs --coverage ...batch-44.coverage.json` | Pass: 3/4 source URLs fetch-verified; 4/4 resolved with 1 documented original-URL drop. The earlier `--stamp` pass recorded 0 new stamps on the final coverage file because the three active source stamps were already present. |
| Scoped `depcheck`, `fwdcheck`, and `extcheck` over the 12 assigned items | Pass: dependency closure covers 1,336 items/274 pages; forward closure covers 1,329 items/282 pages; no external or recorded-not-proved items. |
| `manifest-deps.mjs` on Batch 44 | Pass: 12 items, 0 normalized, 0 errors. |
| Scoped item dependency levels using current batch manifests 2, 28, 39, and 44 | Pass for all 12 assigned items, maximum level 3, 0 Batch 44 label/cycle errors. |

A read-only run-wide `batch-dependency-levels.mjs check` could not reach the graph check because `loadStep3` encounters malformed YAML in unrelated Batch 38 supplier-source metadata (unquoted `Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, ...` titles in `items/def-na-hcurl-space.md` and eleven other `na-*` items). These files are outside this assignment and were not edited. The stored Batch 44 schedule row still says level 1 with requirements 28 and 39; the scoped item-level calculation above passes. Owner repair of Batch 38 metadata is needed before the run-wide derived check can complete.

## Readiness

All 12 assigned items have complete local placement, explicit direct dependencies, proof/definition content, and passing strict contracts. Step 1 records mark these items `ready`; the broader finite-volume scheme instantiation claims remain deferred/open as described above. These authoring records are not independent approval and do not change autopilot state.

Batch artifacts: `research/numerical-analysis-remaining-71-2026-10-17-batch-44.pages.json`, `batch-44.coverage.json`, `batch-44.proof-contracts.json`, `batch-44.cross-batch-dependencies.json`, `batch-44.source-coverage.json`, `batch-44.source-evidence.json`, and `batch-44.notes.md`.
