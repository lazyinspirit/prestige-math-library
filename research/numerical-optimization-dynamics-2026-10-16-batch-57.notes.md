# Batch 57 authoring notes — finite-element eigenvalue approximation

## Controlling plan and resolved conflicts

- The binding owner direction, `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md`, controls over stale task/design wording.
- `research/plan-numerical-spatial-track.md` NA-37 controls placement and scope because it is the current unified spatial plan; it agrees with `plan-spec.json` on the A/B pair, category, and page requirements. The duplicate NA-37 section in `plan-numerical-analysis-track.md` is stale and shorter. This conflict is resolved in favor of the spatial plan and owner direction.
- The plan-spec row does not carry the approved PC-VAR amendment. We retain both added interfaces required by the owner direction: finite Hermitian residual-to-spectrum and gap-conditioned eigendirection estimates, plus the finite-basis overlap-whitening application. No new algorithm is defined.
- The older spatial design states the imported elliptic compact-resolvent/min–max branch under Axiom of Choice and Countable Choice. The owner direction also requires the symmetric abstract compact-form result. The A page therefore proves the abstract compact coercive form theorem under Countable Choice, while the elliptic Dirichlet B examples state the stronger Choice and Countable Choice assumptions of their exact published suppliers. These branches are not conflated.
- The nonsymmetric/nonconforming Babuška–Osborn extension remains unclaimed. The owner direction makes it conditional on separate compact-operator perturbation, primal/adjoint approximation, and discrete stability proofs; none is silently inferred from the symmetric proof.

## Inventory and dependency levels

The manifest contains ten A items and four B examples. In-run item levels recomputed from the current manifest are:

| Level | Items |
|---:|---|
| 0 | `def-eigenspace-best-approximation-gap`; `thm-compact-coercive-form-spectrum-and-minmax`; `lem-finite-dimensional-galerkin-minmax`; `lem-compact-self-adjoint-residual-controls-invariant-subspace-gap`; `thm-finite-hermitian-ritz-residual-certifies-spectrum-and-eigendirection`; `prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil` |
| 1 | `ex-nearly-dependent-overlap-matrix-whitening-and-conditioning` |
| 2 | `ex-nonconforming-broken-eigenvalue-below-dirichlet-ground-state` |
| 3 | `lem-conforming-energy-projection-is-best-approximation` |
| 4 | `lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap` |
| 4 | `ex-dirichlet-square-conforming-p1-eigenvalue-upper-bound` |
| 5 | `thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error` |
| 6 | `thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster` |
| 7 | `ex-repeated-eigenvalue-subspace-stable-but-eigenvector-choice-unstable` |

The batch dependency record's current scheduling input is
`ae8957b82a8ad2c9895cb3092af32195034be1b16610dd6fc6881d1df25039e0`; batch 57 is at dependency level 3 with prerequisite batches 24 and 38. No cycle was found in the assigned batch item graph. External published dependencies do not raise an in-run item level.

## Cross-batch supplier verification

- Batch 24 / NA-28: the four relevant actual bodies and full proofs were inspected: `def-matching-affine-simplicial-meshes`, `def-broken-and-conforming-polynomial-spaces`, `thm-matching-continuous-piecewise-polynomials-are-wkp`, and `thm-zero-boundary-piecewise-polynomials-in-w10p`. Their Step 1 readiness records are `ready`. Batch 57 uses only the exact matching-mesh, broken/conforming, cellwise weak-gradient, and zero-boundary closure interfaces; it imports no interpolation rate.
- Batch 38 / NA-29: the actual bodies and proofs of `lem-galerkin-orthogonality-for-conforming-galerkin-approximations`, `thm-cea-quasi-optimality-for-conforming-galerkin-approximations`, and `cor-symmetric-galerkin-best-approximation-in-energy-norm` were inspected. The actual statements and proof routes were checked against the projection, quadratic matrix, eigenvalue, and eigenspace claims. The three producer Step 1 readiness records are missing. This is recorded as an unresolved owner reconciliation check; no supplier approval or readiness is asserted. Batch 57 continues authoring from the present, complete bodies and does not omit dependent claims.
- The item-level interfaces and affected claims are recorded with exact excerpts in `numerical-optimization-dynamics-2026-10-16-batch-57.cross-batch-dependencies.json`.

## Source retrieval and reading history

- Two independent full-text treatments support the A page: Jean-Luc Guermond, MATH 661 Chapters 46–47, and Bertrand Mercier, *Topics in Finite Element Solution of Elliptic Problems*, Chapter 8. The Guermond PDFs were fetched and extracted to `/tmp/na37-sources/guermond-2025-ch46.{pdf,txt}` and `guermond-2025-ch47.{pdf,txt}`; the cited complete sections were inspected. Mercier's full PDF was fetched to `/tmp/na37-sources/mercier-tifr63.pdf`; the complete relevant Chapter 8 argument, printed pp. 128–141, was read.
- A separate AMS-hosted Babuška–Osborn full-text candidate returned HTTP 403 on one direct curl attempt. Alternative full-text sources were searched and retrieved successfully as listed above. The failed candidate was not used as evidence, is not an active coverage source, and is not marked dropped; the inherited work log did not retain its URL or attempt timestamp, so neither is fabricated here.
- The original scaffold also listed a Teschl 2017 text for the finite residual item, but this batch had no full-text retrieval or reading evidence for it. It was removed from active citations and replaced with the two inspected treatments above; it is not represented as read or as a failed-source drop.
- `batch-57.coverage.json` records the active URLs, locators, supported items, and per-result dispositions. `source-fetch-check --stamp` verified all five source entries, with zero documented drops.

## Scope and readiness limitations

- The overlap example is exact arithmetic only; no floating-point stability claim is added.
- The broken P0 example uses a semidefinite broken stiffness and is explicitly outside the conforming theorem's hypotheses.
- The square P1 calculation verifies the first-index upper bound for one mesh, but does not claim that this coarse mesh satisfies the small-gap premise for the quadratic estimate.
- The repeated-eigenvalue example is an abstract conforming compact-form model, not a mesh-refinement family. Its invariant subspace is exactly stable while valid eigenvector choices fail to converge.
- Current autopilot status was `running`, stage `1-scaffold`, with 26/107 items covered and no active workers; the reported stalemate/owner-recertification hold concerns other units, not batch 57. No autopilot state, shared plan, published content, or other pair's item was edited.

## Scoped checks

The first proof-layout and renderer pass found multiline display-math blocks; all display math was collapsed to one source line, and proof-step paragraphs were placed on one tagged source line. Precheck also required canonical phase stratification; its proposed step order and references were adopted and the proof contracts regenerated. Final checks now report:

- `node tools/proof-layout.mjs` on the 14 changed items: 14 items, 54 numbered steps, zero defects.
- Scoped `precheck`: 13 proof-bearing items checked, zero failing. The definition has no proof phase.
- Scoped `rendercheck`: 16 item/page files checked, zero errors and warnings.
- Scoped `depcheck`: selected item/page checks and prerequisite cycle checks passed.
- Strict proof contracts: 14/14 entries, zero errors and warnings. The contracts include exact supplier excerpts, derivations, boundary cases, axiom uses, and the applicable finite calculations.
- `manifest-deps`: 14 items, zero missing dependency lists and zero errors. Frontmatter dependencies match the scaffold manifest for every item.
- `source-fetch-check --stamp` and check mode: all five coverage entries fetch-verified; zero documented drops.
- Full-run item DAG calculation covers 1,126 items. Every batch-57 label matches its recomputed level, and there are no batch-57 dependency-level errors or manifest-dependency differences. The assigned levels are the table above.
- `node tools/step1-decisions.mjs record` wrote 14 `ready` authoring records without `--owner`; a focused hash check confirms all 14 remain closed. These records do not constitute independent approval. The batch-38 producer readiness records remain absent and are disclosed in the cross-batch file and in dependent item reasons.

Two global checks remain blocked by unrelated scaffold state and were not repaired because those files are outside this assignment. The whole-run `item-dependency-levels.mjs check` reports 84 empty scaffold inventories on other pages; the independent full-run calculation finds no batch-57 error. The whole-run `batch-dependency-levels.mjs check` stops while parsing the unquoted colon in a source title in `items/alg-certified-adaptive-simpson.md` (line 24); `items/thm-certified-adaptive-simpson-enclosure.md` has the same renderer frontmatter defect at line 28. Neither item belongs to batch 57. The assigned batch remains at dependency level 3 with prerequisite batches 24 and 38 as recorded in its cross-batch evidence.

The active autopilot status observed at authoring was `running`, stage `1-scaffold`, with 26/107 covered and no workers. The reported stalemate/owner-recertification hold concerns other units, not batch 57. No autopilot state, shared plan, published content, or other pair's item was edited.
