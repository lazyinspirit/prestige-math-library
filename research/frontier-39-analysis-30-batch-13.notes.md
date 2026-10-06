# Batch 13 construction handoff — frontier-39-analysis-30 (Schauder and L^p Elliptic Estimates)

## Scope and readiness

The single commissioned A/B pair was scaffolded from design PDE-19
(`research/plan-pde-track.md` L1818–L1880 with the PDE-19 additions table at
L3696–L3705; the task file points at L1818). A page:
`schauder-and-lp-elliptic-estimates` (order 458.035, `pde`); B page:
`schauder-and-lp-elliptic-estimates-examples` (458.036). At initial construction,
only this batch's content artifacts were written: the manifest
`research/frontier-39-analysis-30-batch-13.pages.json` (30 items: 22 on A,
8 on B), the coverage record
`research/frontier-39-analysis-30-batch-13.coverage.json` (2 pages, 57 harvested
results, 12 fetch-stamped source entries), the 30 Step-1 readiness records
`research/frontier-39-analysis-30-step1-<item>.json`, and this note. Step 4
subsequently adjudicated the cross-batch input to 11 supported item edges and
updated the shared plan and this batch's scaffold; its rationale is recorded
below. No published item, engine state, verdict or other batch was edited.

`research/frontier-39-analysis-30-owner-authoring-direction.md` does not exist
(checked before construction). The Alpha drift verdict for this page is
**drift-applied**: `calderon-zygmund-decomposition-and-singular-integrals`
(order 458.02605) was added as a published backward supplier, with the note
"use the coefficient regime actually proved; a VMO claim requires its full
local argument". The A14 item (`thm-interior-w-two-p-estimate-...`) therefore
states continuity of the principal coefficients and explicitly disclaims VMO.

## Design, plan, and published-content reconciliation

1. **Plan requires vs the design prose.** `research/plan-spec.json` (order
   458.035) now requires the published page
   `calderon-zygmund-decomposition-and-singular-integrals`. Step 4 removed the
   earlier `interior-and-boundary-sobolev-elliptic-regularity` prerequisite:
   PDE-19's general design lists PDE-11–PDE-18, but the PDE track defines these
   arrows as load-bearing mathematical dependencies, not reading order, and no
   current batch-13 proof consumes a PDE-18 item. The owner-added weak global
   W2p bridge instead uses the shifted-equation argument and Haller-Dintelmann
   Theorem 19.7. Current cross-batch item dependencies are the 11 direct edges
   into batches 4, 9 and 10 recorded below.
2. **Design items 3 and 4 are already published elsewhere and were not
   re-scaffolded.** Design A3
   (`lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials`)
   and design A4 (`thm-interior-schauder-estimate-for-the-laplacian`) were to be
   local. The repository already has (i) the published theorem
   `thm-interior-estimate-for-poisson-equation-with-holder-data` on the A page
   `poisson-problems-and-interior-harmonic-estimates` (frontier-37), which is
   exactly design A4 with the scaled constant convention, and (ii) the
   published example
   `ex-second-derivative-newtonian-kernels-fit-the-cz-framework` on the B page
   `calderon-zygmund-decomposition-and-singular-integrals-examples`
   (frontier-38), which contains the cancelled Hessian identity and the
   standard-kernel verification. Because a B-page item may not be a dependency
   of another page (B-leaf rule) and because the design's "hard proof
   obligation" is that PDE-19 itself verifies the Newtonian-Hessian fit before
   invoking FR-8's strict-L^p theorem, the cancelled representation is
   re-established locally as A3 under its design name; the published A-page
   Laplace–Hölder theorem is consumed directly by the interior Schauder
   theorem. Design additions
   `lem-schauder-decomposition-into-newtonian-potential-and-harmonic-remainder`
   and `lem-ltwo-boundedness-of-second-derivative-newtonian-singular-integrals`
   are subsumed by the published theorem
   `thm-interior-estimate-for-poisson-equation-with-holder-data` (its Newtonian
   decomposition proof) and by the published
   `cor-riesz-transforms-are-ltwo-bounded` together with the local cancellation
   lemma; they are recorded here as covered, not omitted.
3. **B-page names.** The design's B2
   `cex-continuous-forcing-need-not-give-continuous-second-derivatives` is
   scaffolded under the sharper additions-table name
   `cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives`;
   the other five design B items and the remaining two additions are present
   with the design IDs. The design's B3 keeps its ID and is stated with the
   source-backed sharpness route (see "Unresolved findings" below).
4. **Local prerequisites added on A.** Beyond the design inventory the page
   needs `def-uniformly-elliptic-nondivergence-operator` (no published
   nondivergence-form definition exists),
   `lem-lp-interpolation-absorbs-lower-order-derivatives`,
   `lem-interior-w-two-p-regularity-for-the-laplacian`, and the three
   additions-table lemmas/theorem already quoted. All are consumed before their
   consumers in level order.

## Sources and harvest

Seven independent treatments back the pair; full texts were fetched and read,
and every entry in the coverage file carries `fetch_verified` from
`tools/source-fetch-check.mjs --stamp` (12/12 source entries verified, 0 drops):

- [S] Armin Schikorra, *PDE I & II* (2025), `https://sites.pitt.edu/~armin/pde2022/pde.pdf`
  — §7.5–7.6 and Chapter 8, pp. 134–156.
- [Si] Leon Simon, *Lectures on PDE* (Stanford), `https://math.stanford.edu/~lms/lecs-on-pde.pdf`
  — Lecture 12, pp. 125–137.
- [V] John Villavert, *Elementary Theory and Methods for Elliptic PDE* (2017),
  `http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf`
  — §1.4, §§3.1–3.5, pp. 31–42, 92–114, 125–128.
- [W] Xu-Jia Wang, *Schauder Estimates for Elliptic and Parabolic Equations*,
  `https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf`
  — §1, Theorem 1, (1.2)–(1.4), §3.3(iii), pp. 1–6.
- [H] John K. Hunter, *Notes on PDE* (UC Davis),
  `https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf` — §2.7–2.8, pp. 34–45.
- [T] Gerald Teschl, *PDE: From Classical to Modern* (archived manuscript),
  `https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf`
  — §10.3–10.4 and Example 10.1, pp. 240–247.
- [HD] Robert Haller-Dintelmann, Partial Differential Equations lecture notes (WiSe 2021/22, version 7 January 2022), https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/PDESkriptWiSe22.pdf
  — §19, Theorem 19.7 and proof, printed pp. 148–155; the strong shifted Dirichlet solver used to establish weak global W2p regularity.

Every named heading harvested from these ranges has an explicit disposition in
the coverage file; `node tools/coverage-checklist.mjs --require-destination`
reports 2 pages, 57 harvested results, 0 errors, 0 warnings.

## Choice and axiom ledger

- Countable Choice is declared where the Sobolev/measure interfaces are used:
  A2, A3, A6, A11, A12, A13, A14, B2, B3, B4, B5, B6, B7 (`def-countable-choice`).
- The Axiom of Choice is declared by A15
  (`thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`), A16
  (`thm-global-schauder-estimate-and-classical-dirichlet-solvability`), A18
  (`cor-injectivity-...`) and A19 (`cor-w-two-p-regularity-...`) because their
  routes consume the in-run drafts of the embeddings, the weak Dirichlet
  existence theorem, the trace lifting and the Rellich–Kondrachov theorems,
  each of which records AC; `def-axiom-of-choice` is in every such `deps` list
  and the reasons name the use. These attributions must be re-checked at Step 3
  against the final supplier statements.
- No consumer of this pair may reach `deferred-set-theory-beyond-choice`
  through these items; no such path exists in the manifest graph.

## Dependency notes and cross-batch input

- Dependency labels were recomputed with the engine's own algorithm
  (`tools/item-dependency-levels.mjs`): levels run 0–10, all labels match the
  computed values, and there is no cycle. Because batches 14–20 are still
  unscaffolded, the run-wide `check` exits 1 with 14 `empty scaffold inventory`
  errors that do not mention any batch-13 item.
- The cross-batch input now records 11 supported item edges whose suppliers
  are A-page drafts of batches 4 (3 edges), 9 (3), and 10 (5); all are
  `status: open`, none is treated as published. The transitive-only Morrey
  edge was removed because the global Schauder proof directly uses the
  higher-order embedding, which itself depends on Morrey. The unsupported PDE-18
  page edge was removed from both plan-spec and the batch-13 A-page scaffold.
  `tools/frontier-dependency-ledger.mjs refresh` marks batch 13 reviewed with
  no orphaned reviews.
- Three dependency hazards were removed rather than escalated, because each
  claim is self-contained and its B-page supplier was only illustrative:
  B5 no longer depends on the batch-12 B item
  `ex-reentrant-sector-harmonic-singularity-has-explicit-sobolev-threshold`
  (the sector computation is verified inline), B6 no longer depends on the
  batch-11 B item `ex-dirichlet-laplacian-eigenpairs-on-an-interval` (the
  eigenbasis is verified inline), and B7 no longer depends on the batch-12 B
  counterexample (the interface computation is verified inline). The published
  B-page example `ex-second-derivative-newtonian-kernels-fit-the-cz-framework`
  was likewise replaced on both consumers by the new A-page lemma A3.

## Initial Beta checks (before owner reconciliation)

These are the original scaffold gate outputs; current owner-repair checks are listed below.

## Checks actually run (exact results)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-13.pages.json`
  → exit 0, "29 item(s), 0 missing, 0 error(s)".
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  (whole run) → exit 0, "665 scoped item(s), 0 error(s), 0 warning(s)".
  The batch-13-only invocation exits 1 with 13
  `batch-dependency-missing` errors for deps that resolve to in-run draft
  suppliers of other batches — expected at Step 1, which is why the whole-run
  form is the correct check.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  → exit 1 with 14 `empty scaffold inventory` errors for batches 14–20 and **no**
  error for any batch-13 item (labels and cycle check clean).
- `node tools/coverage-checklist.mjs --require-destination research/frontier-39-analysis-30-batch-13.coverage.json`
  → exit 0, "2 page(s), 57 harvested result(s), 0 error(s), 0 warning(s)".
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-13.coverage.json --stamp`
  → exit 0, "12/12 source(s) fetch-verified (11 newly stamped)"; check mode
  afterwards: "12/12 source(s) fetch-verified".
- `node tools/validate-plan.mjs research/plan-spec.json --repo .` → exit 0,
  "declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 1420 page(s)
  with item lists" (247 planned pages still carry no item list).
- `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify` → exit 1
  (run-wide, expected at Step 1). For batch 13 it reports the two manifest-vs-
  plan inventory lines and **12 item-level edges into unbuilt pages**:
  `sobolev-poincare-and-morrey-inequalities` (4:
  `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n`,
  `thm-morrey-inequality-for-p-greater-than-n`,
  `thm-higher-order-sobolev-embedding` ×2), `lax-milgram-and-weak-elliptic-solutions`
  (5: `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`,
  `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`,
  `lem-classical-solutions-satisfy-the-weak-formulation`,
  `def-weak-dirichlet-solution-for-a-divergence-form-operator`,
  `def-uniformly-elliptic-divergence-form-operator`) and
  `rellich-kondrachov-and-sobolev-compactness` (3: the three
  Rellich–Kondrachov branches). These are genuine uses of pages licensed only
  transitively (458.035 → 458.033 → … → 458.025); Step 4 must either add the
  direct `requires` edges or accept the transitive license. No page, pair or
  ordering was changed here.
- `node tools/fwdcheck.mjs --quiet` → exit 0 ("every forward reference is
  declared, points strictly forward, is closed by a planned later page…"), with
  40 pre-existing `unproved-on-published` warnings on unrelated published items.
- `node tools/extcheck.mjs --quiet` → exit 0.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` → exit 1
  solely because of the 14 empty-batch inventories; of 633 run items, 633 have
  closed readiness records and there is **no** batch-13 work item.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  → exit 0; batch 13 in `reviewed_batches`, `orphaned_reviews: []`.

## Unresolved findings and Step-3 notes

1. **Endpoint sharpness counterexample resolved after scaffold.** The initial
   handoff cited Wang's log-Lipschitz upper bound and Burch's sharpness result,
   but did not give a concrete Lipschitz source; the tentative Hilbert-transform
   discussion was only a model. The owner has now added an explicit compactly
   supported Lipschitz source $f(r,\theta)=\chi(r)r\cos(3\theta)$ in two
   dimensions, with a piecewise-linear radial cutoff. In the unit disk the local
   particular solution is $p=-\frac16r^3\log r\cos(3\theta)$, so along the
   positive axis $\partial_{11}p=-x\log x-5x/6$. The Newtonian potential
   differs from $p$ by a harmonic function, smooth by the published real-analyticity
   theorem, and therefore the Hessian difference quotient still diverges. The
   item now states this witness and adds that harmonic-regularity dependency;
   its owner readiness record is refreshed. No inaccessible Burch proof or
   unproved dyadic example is needed for this counterexample.
2. **Published B-page placement hazard (recorded, not a repair).** The
   published example `ex-second-derivative-newtonian-kernels-fit-the-cz-framework`
   carries load-bearing Newtonian-Hessian content but is homed on the B page
   `calderon-zygmund-decomposition-and-singular-integrals-examples`; the
   B-leaf rule makes it unusable as a dependency for any other page. This batch
   avoids the edge by proving the same representation locally (A3) and citing
   the B item only as historical evidence in this note, not in any `deps`.
   The canonical defect ledger may wish to record that the analytic content is
   stranded on an examples page.
3. **Design additions subsumed.** As recorded in §"Design" above, design
   additions `lem-schauder-decomposition-into-newtonian-potential-and-harmonic-remainder`
   and `lem-ltwo-boundedness-of-second-derivative-newtonian-singular-integrals`
   are covered by the published `thm-interior-estimate-for-poisson-equation-with-holder-data`
   and by the published Riesz-transform L^2 items plus the new A3; if the Step-5
   reviewer disagrees, they can be added as local items with no new sources.
4. **AC attributions on A15/A16/A18/A19** follow the in-run draft suppliers;
   Step 3 must confirm each supplier's final choice ledger before authoring.


## Owner repairs after the initial Beta handoff

The counts and gate outputs above describe the original 29-item Beta scaffold;
the following owner reconciliation supersedes the affected counts and records.
The A/B page inventory remains the same pair, so the run still has exactly 30
planned pairs.

- Added the local weak global W2p supplier to the existing A page (one helper
  theorem, no new pair). Its proof starts from u in H1_0 and iterates
  Haller-Dintelmann Theorem 19.7 for (lambda - Delta) z = f + lambda u, using
  Sobolev embeddings to raise the exponent and energy uniqueness to identify
  each strong solution with the given weak solution. The direct a priori
  estimate is used only after W2p membership is established. The full source
  proof and shifted-equation bridge were independently audited.
- Fixed the formula and assumption findings in the Newtonian cancellation,
  Holder interpolation, freezing, Schauder, flattening, cutoff and local W2p
  items; corrected the invalid coefficient counterexample and clarified the
  reentrant-sector example's a priori-estimate scope and local divergence
  threshold. Removed the circular global weak-Schauder inference, corrected its
  Holder extension and barrier, and repaired the continuity contradiction and
  Sobolev extension-domain hypothesis.
- The new source is fetch-verified. Current batch-13 checks: 30 manifest items,
  0 dependency-manifest errors; 57 harvested results, 0 coverage errors or
  warnings; 12/12 full-text sources resolved. Whole-run manifest-only content
  policy passes for 665 scoped items. The dependency-level check has only the
  expected empty inventories for pending batches; the three batch-13 level
  labels reported in the earlier check were corrected. The earlier snapshot
  also reported 23 stale readiness records and one missing record; that state
  is superseded by the current Step 1 check, which reports all 665 of 665 items
  ready, including all 30 batch-13 items.
- Step 4 adjudicated 11 direct item-level edges into batches 4 (3), 9 (3), and
  10 (5). It removed the transitive-only global-Schauder-to-Morrey item edge,
  retaining the direct higher-order embedding edge, and removed the unsupported
  PDE18 page prerequisite from plan-spec and the batch-13 scaffold together.
  The PDE track defines `Requires` as load-bearing, while the current PDE19 proof
  routes use PDE14/PDE16, batch 4, batch 9, batch 10, and local arguments; no
  PDE18 item is consumed. The lift recombination and classical-to-weak uses
  remain among the five batch-10 item edges.

## Owner-authorized B13 repairs after the B15 review

- Strengthened the freezing-error lemma to hold uniformly for every radius
  below a normalized cutoff \(R\eta_\varepsilon\), with the cutoff and constant
  controlled by dimensionless coefficient bounds. This supplies the small
  scales used by the Schauder nested-ball absorption.
- Repaired the interior Schauder proof without weakening its \(C^2\to
  C^{2,\alpha}\) claim: the proof first obtains finite Hölder regularity by a
  frozen-operator \(L^2\) Campanato excess iteration with a mean-zero
  Newtonian-potential replacement, then applies the finite-norm estimate on
  ellipsoid-controlled nested patches. The quantitative bound comes from the
  a-priori estimate; the preliminary \(C^2\) bound is used only to establish
  finiteness.
- Repaired the boundary Schauder cover using ambient chart neighborhoods that
  include the flattened boundary face, and corrected the flattening Hessian
  formula with \(J=D\Psi\), \(J^{-1}AJ^{-T}\), and the signed lower-order
  chain-rule term.
- The local \(W^{2,p}\) theorem now states its scale-invariant weighted norm;
  hole filling starts from \(B_{3R/4}\) and the gradient interpolation cover
  stays inside the controlled Hessian region. Its global \(W^{2,p}\) consumer
  quotes the weighted input and specializes the nonsymmetric cutoff identity
  using its own symmetric principal matrix.
- Also repaired the Hölder interpolation lemma at boundary points, narrowed
  the injectivity corollary's extension input to \(W^{1,p}\), corrected the
  quadratic scaling example by removing its unsupported necessity claim, and
  synchronized the weak global \(W^{2,p}\) exponent bootstrap's \(q_0=p\)
  case.
- Local checks on the current carriers: proof-layout 11 items / 55 steps /
  0 defects; batch-13 strict proof contract 0 errors / 0 warnings; manifest
  dependency check 30 items / 0 errors. The run-wide dependency-level check
  reports no B13 mismatches; the remaining mismatches are in the separate B16
  obstacle items. No workflow gate was retried.
- Current pair scope hash: 51189125565b0e1fb8481f8c8f74788aa5da4c34b1c4e51a3f164ce65aa12154.
  B13 dependent receipts remain open while the B12 supplier is not yet frozen.

## Follow-up current-hash audits

- Extended the interior Schauder Campanato embedding to $B_{5R/8}$ using the
  uniform $B_{3R/4}$ excess bound. This supplies the finite norm on the terminal
  nested ball $B_{5R/8}$; the exact derivation is synced in the B13 contract.
  Focused checks: strict contract 0 errors/warnings; proof-layout 1 item, 7
  steps, 0 defects.
- Repaired the weak global $W^{2,p}$ item's final a.e. PDE identification with
  an explicit direct dependency on regular-distribution injectivity. The proof
  now derives $-\Delta u=f$ a.e. after obtaining $W^{2,p}$, and the manifest
  strategy/contract are synced. Focused checks: strict contract 0 errors /
  warnings, proof-layout 1 item, 5 steps, 0 defects, manifest-deps 30 items /
  0 errors. Current Step3 itemHash:
  `e5b282e66201387fcbb4fc6304cf587a232a4657ba47ea2260acf1fbcd8cb9c5`.
- Rechecked the reopened Hölder interpolation proof at the full-ball current
  hash. The inward-frame construction controls all points of $B_1$; its only
  additional correction was the Remark's Young-exponent rate, now
  $\varepsilon^{-k/\alpha}$. B15 recorded a confidence-1 accept at
  `7546fd238976aa8ac24efbc098b8ea7aff239e957f47c8b3426dd247af012296`.
- No other dependent Schauder receipt was refreshed. Those current hashes
  remain open for independent re-audit after the interpolation hash update and
  B12 supplier freeze.
