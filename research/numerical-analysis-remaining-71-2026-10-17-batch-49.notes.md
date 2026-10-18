# Batch 49 — Step 1 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `49`  
Pair: `projection-and-pressure-correction-for-incompressible-flow` / `projection-and-pressure-correction-for-incompressible-flow-examples`

## Inventory and dependency order

The A page has 15 items and the B page has 4 examples; both are below the 100-item cap. The manifest inventories all 19 carriers and was prepared before writing the later-level claims. The page carrier order is the dependency order:

- **Level 0:** `def-na-periodic-staggered-grid-stokes-operators`, `def-na-symmetric-saddle-point-system-and-block-preconditioners`, `ex-na-wall-pressure-correction-tangential-velocity-defect`.
- **Level 1:** `lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare`, `lem-na-periodic-staggered-grid-smooth-sampling-consistency`, `thm-na-saddle-point-exact-schur-solve`, `thm-na-pressure-schur-spectral-equivalence-from-infsup`, `cex-na-collocated-central-difference-checkerboard-pressure-mode`.
- **Level 2:** `alg-na-periodic-incremental-pressure-correction`, `alg-na-bdf2-incremental-and-rotational-pressure-correction`, `thm-na-symmetrically-preconditioned-saddle-point-spectrum`.
- **Level 3:** `thm-na-periodic-pressure-correction-solves-well-defined`, `thm-na-periodic-discrete-helmholtz-projection`, `ex-na-saddle-point-block-preconditioner-golden-ratio-spectrum`.
- **Level 4:** `thm-na-periodic-pressure-correction-modified-energy-identity`, `thm-na-periodic-pressure-correction-first-order-velocity-error`, `ex-na-periodic-single-mode-pressure-correction`.
- **Level 8:** `cor-na-mini-element-pressure-mass-schur-bounds`.
- **Level 9:** `cor-na-mini-element-pressure-mass-block-spectrum`.

The scheduling input digest supplied with this dispatch is `71c289d3f8e641afe59da9edfd29a1071647d90fd8ad8b4d14108161c64b04df`. The levels count only in-run item suppliers; the level-8/9 MINI route includes the actual level-7 Fortin item from batch 31. The direct manifest dependencies and item frontmatter are kept aligned. The required dependency checker result is recorded below after the final run.

## Plan and design reconciliation

The current plan-spec row and owner authoring direction control over stale prose in `research/plan-numerical-spatial-track.md` §PE07. The detailed design's narrow periodic Stokes route is retained as the proof route for the exact projection, modified energy identity, and smooth-data estimate. The current commission is broader: it also requires first-order velocity accuracy for smooth periodic data, first-order incremental correction, BDF2 standard and rotational definitions, the symmetric saddle-point solve, and pressure-Schur spectral results with their actual hypotheses and scalings. Accordingly:

- The baseline theorem proves only the periodic Stokes velocity estimate `O(h^2+k)`; it asserts no pressure-error rate.
- Bounded-wall pressure and boundary-layer rates remain outside the claim set. The B page gives an explicit tangential no-slip defect for a Neumann pressure correction; it does not infer a rate.
- BDF2 and rotational variants are defined with their exact coefficients and gauges, but no unproved stability or convergence rate is attached.
- The steady MINI Stokes mass-Schur estimate is derived from the current Fortin, Korn, continuity, and inf-sup constants. It is not transferred to an unsteady shifted Schur matrix.
- Generic block spectral intervals are conditional on the stated SPD, full-row-rank, inf-sup, continuity, and stiffness hypotheses. No iteration count, complexity, or generic speed-up is claimed.

The detailed design lists NA06, NA34, NA36, and PE06 as interfaces. The current task and plan-spec page `requires` are NA06 (`preconditioner-algorithms-and-residual-metrics`) and PE06 (`energy-stable-incompressible-navier-stokes-discretization`). NA34 is consumed through six explicit item dependencies from its batch-31 mixed Stokes page, including the MINI dimension, Korn, Fortin-transfer and Fortin-stability suppliers; it was not silently added as a page-level prerequisite. NA36 is not consumed: the periodic Stokes accuracy estimate is proved locally from the staggered-grid consistency lemma. PE06's actual draft carrier and manifest were read; the current manifest lists 17 A items and 5 B examples with populated item dependencies and levels, and the whole-run item-level checker exits 0. The cross-batch record verifies the actual draft body interface for authoring, not independent approval of batch 41. PE06 itself lists PE12 as a page prerequisite; batch 49 uses no PE12 compactness, nonlinear existence, or projector-stability theorem, so that transitive interface is explicitly recorded as not consumed.

## Mathematical route and assumptions

The periodic grid definition fixes the cell and face locations, all signs, and the real mass pairings. Finite periodic summation proves `D_h=-G_h^*`; the pressure Laplacian is `D_hG_h`, so its kernel on all cell arrays is exactly the constants. Counting coordinate paths proves the resolution-independent `sqrt(d)` Poincare bound. These facts make the mean-zero pressure solve unique and define the mass-orthogonal Helmholtz projector.

The smooth-sampling lemma proves each centered-difference truncation estimate from Taylor's formula and proves the `O(h^2)` midpoint-sample mean defect used to enforce discrete force compatibility. The accuracy theorem then reduces the projected incremental scheme to backward Euler on `ker D_h`, uses contractivity of `(I+k nu A_h)^-1`, and controls the initial and terminal sampling-projection defects by the discrete pressure Poincare inequality. Its assumptions include bounded derivatives through the orders stated in that theorem, zero spatial mean of each force component, a zero-mean pressure gauge, and fixed `T` and `nu>0`.

The exact energy identity uses the unmodified predictor, periodic discrete integration by parts, orthogonal projection Pythagoras, and the incremental pressure update. The BDF2 rotational pressure correction has the `-nu D_h \tilde u` pressure term and is only defined, not assigned a rate.

The proof contracts list no executable `finite_smoke` rows because the batch has no registered numerical smoke harness for these symbolic statements. The scalar saddle example and alternating Fourier-mode example are checked exactly by their written substitutions, determinant/eigenvalue calculations, and discrete operator identities; no computation is presented as proof evidence.

For the saddle route, `S=BA^{-1}B^T` is the positive Schur matrix; the block-LU trailing complement is `-S`. The generic pressure-mass equivalence is proved through the energy-dual identity and displays all constants. The MINI specialization uses `a_nu=2 nu (epsilon,epsilon)`, Korn's identity, `|div v|^2<=d|grad v|^2`, and `beta_h >= (C_F C_div(D))^-1`, giving lower and upper factors `(C_F C_div(D))^-2/(nu(1+d))` and `d/nu`. Countable Choice is declared and carried through this bounded-domain MINI/Fortin chain only. The periodic grid, finite-dimensional saddle solve, and spectral decomposition use no choice axiom. No full Axiom of Choice is used.

## Cross-batch supplier inspection

The published NA06 preconditioner page and all four actual item carriers were read. It provides ILU0 and flexible-GMRES residual context, not the block pressure-Schur theorem authored here.

One final snapshot of the PE06 supplier shows its draft A-page carrier on disk and 17 A/5 B items in the manifest. Its actual body fixes bounded connected Lipschitz no-slip scope, zero-mean pressure, and the viscosity form `a_nu=2 nu (epsilon,epsilon)`; it also separates the torus example from the bounded-wall branch. Its declared PE12 page parent and PE12's own parabolic-FEM/homology page parents are recorded as not consumed because none of batch 49's claims uses those results.

The MINI corollary uses actual batch-31 suppliers and their exact statements/proofs:

- `def-na-stokes-zero-mean-pressure-and-velocity-spaces`: `V=H^1_0(D;R^d)`, `Q=L^2_0(D)`, gradient/L2 norms, `b(v,q)=-int_D q div v`, and `a_nu=2 nu int_D epsilon(u):epsilon(v)` for bounded connected Lipschitz `D`, `d=2,3`.
- `def-na-mini-element-p1-bubble-p1-spaces`: conforming shape-regular affine simplices, continuous P1 plus cell bubbles for velocity, continuous mean-zero P1 pressure, `d=2,3`.
- `lem-na-mini-element-local-and-global-dimensions`: the explicit global dimensions `dim V_h=dN_{v,0}+dN_K` and `dim Q_h=N_v-1`; together with a nonempty d-simplex mesh, this verifies both saddle block dimensions are positive.
- `lem-na-homogeneous-dirichlet-korn-identity`: `2||epsilon(v)||_2^2=||grad v||_2^2+||div v||_2^2` for `H^1_0` fields; its proof explicitly assumes Countable Choice for the approximation sequence.
- `lem-na-fortin-transfers-discrete-infsup`: the exact definition of the discrete inf-sup constant as an infimum over nonzero pressures and a velocity supremum; this is used to infer full row rank from its positive lower bound.
- `thm-na-mini-element-fortin-stability`: the actual Fortin construction preserves the pressure pairing and yields `beta_h >= (C_F C_div(D))^-1`, with `C_F` uniform on shape-regular meshes.

The relevant transitive proof chain was inspected, including the Stokes definitions, bounded Lipschitz divergence right inverse/Bogovskii construction, continuous inf-sup, Fortin transfer, Scott–Zhang interpolant, Korn/Poincare inputs, and Countable Choice branch. The published matrix-product, transpose, inverse, block-LU, Cholesky, symmetric-preconditioning, rank-nullity, inner-product/Cauchy–Schwarz, real spectral, Taylor, chain-rule, and Holder suppliers were read for the exact conventions used in the local proofs. The six direct batch-31 item suppliers have current Step 1 records `ready` with `owner:false`; those are authoring-readiness records, not independent approval. Evidence and exact cross-batch edge status are in `batch-49.cross-batch-dependencies.json`.

## Source reading, harvest, and retrieval history

The A page has three independently retrieved full-text treatments, including a survey and lecture notes. The exact locators, supported item IDs, harvested headings, and each heading's disposition are in `batch-49.coverage.json`.

- Guermond, Minev and Shen, *An overview of projection methods for incompressible flows*, [full PDF](https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_2006.pdf): the 35-page document was retrieved; §§2.1–2.2, 3.1–3.3 and §8, including complete surrounding derivations and pressure-boundary caveats, were inspected. Local retrieval: `/tmp/na49-guermond.pdf` and `/tmp/na49-guermond.txt`.
- NPTEL, Lecture 5.4, *Methods based on Coupling of Pressure and Velocity*, [full PDF](https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/Lecture_5.4.pdf): all 14 pages were inspected, including §§2.1.3 and 2.3.1–2.3.3. Local retrieval: `/tmp/na49-nptel.pdf` and `/tmp/na49-nptel.txt`.
- Benzi, Golub and Liesen, *Numerical solution of saddle point problems*, [full PDF](https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/bgl04.pdf): the 137-page document was retrieved; §§3.1–3.2, 10.1.1 and 10.1.3 were inspected in full. Local retrieval: `/tmp/na49-bgl.pdf` and `/tmp/na49-bgl.txt`.

An MIT OCW Lecture 17 URL was an unselected candidate: its official URL was inaccessible and a mirror request returned HTTP 404, although the exact mirror URL and timestamp were not retained. The candidate has a nested `source_resolution` record under `source_candidates`, including the actual retained attempt, a transparent note that the search text was not retained, and item-by-item alternative arguments and dependencies. It is dropped from the selected bibliography with certainty only about that exclusion, not with a claim that the host is permanently unavailable. Search stopped once the full NPTEL alternative had been retrieved and inspected. The selected treatments therefore have no unresolved retrieval obligation. The source-fetch stamp result is recorded after the command below.

## Scoped checks and readiness

Final results after the last item edit:

- `proof-contract.mjs --strict`: 19/19 items, 0 errors, 0 warnings; 53 numbered proof steps and 55 exact supplier excerpts.
- `precheck.mts`: 15 proof-bearing items, 0 failures. The two definitions and two algorithm carriers have no proof body to check.
- `proof-layout.mjs` on all 19 assigned items: 53 steps, 0 defects.
- `rendercheck.mjs`: all 19 items and 2 pages, 0 errors.
- Focused `depcheck.mjs`: selected item/page and prerequisite-cycle checks pass.
- `content-policy.mjs`: 19 items, 0 errors and 0 warnings.
- `coverage-checklist.mjs --require-destination`: 1 A page, 18 harvested source results, 0 errors and 0 warnings.
- `source-fetch-check --stamp`: all 3 selected full-text sources newly fetch-verified; the later check remains 3/3.
- Carrier frontmatter and manifest title/dependencies/levels match for all 19 items. A scoped dependency calculation over batches 31 and 49 checks 49 items with 0 errors for batch 49; the 19 item levels match the required sequence above.
- Whole-run `item-dependency-levels.mjs check`: 1,390 items across 142 pages, maximum level 12, exit 0.
- Whole-run `batch-dependency-levels.mjs check` is blocked by a YAML parse error in the unassigned batch-42 carrier `items/def-maxwell-edge-fem-semidiscretization.md`: its source title containing “Finite element exterior calculus: from Hodge theory to numerical stability” is unquoted at physical line 24 (frontmatter parser reports line 23, column 14). That file is outside this assignment and was not changed.

All 19 batch-49 Step 1 records are current `ready` records with `owner:false`, hash-checked after writing, and carry their exact direct item dependencies. They record the PE06 actual draft interface as read while explicitly leaving batch-41 approval to its owner. No record uses `--owner`.

The final recomputed autopilot status remains `running` at Step 1 scaffold, 52/71 covered, with no active writer. It reports missing batches `25, 36, 37, 38, 41, 42, 43, 49` plus 11 others, even though batch 49 now has 19/19 current Step 1 item records. Batch-level dispatch/artifact completion remains owner-controlled; engine state and verdicts were left untouched. The existing stage blocker still requires owner repair and recertification before the stage gate; it is recorded in `research/numerical-analysis-remaining-71-2026-10-17-step1-blockers.json` and was left untouched. These mechanical checks and authoring records do not approve mathematical correctness.
