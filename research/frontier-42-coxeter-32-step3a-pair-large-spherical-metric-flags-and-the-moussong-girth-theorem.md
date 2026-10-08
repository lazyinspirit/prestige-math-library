# Step 3a scope review — Large Spherical Metric Flags and the Moussong Girth Theorem (CG-17)

- Run: `frontier-42-coxeter-32` · role alpha · batch 22 · design label CG-17.
- A page: `large-spherical-metric-flags-and-the-moussong-girth-theorem` (order 1760, 8 items).
- B page: `large-spherical-metric-flags-and-the-moussong-girth-theorem-examples` (order 1761, 2 items).
- Decision: **sufficient** (scope only; no item approval, no owner record, no scaffold edit).
  Receipt: `research/frontier-42-coxeter-32-step3a-review-large-spherical-metric-flags-and-the-moussong-girth-theorem.json`
  (written by `tools/step3-decisions.mjs record-scope`).

## Inputs read

`research/frontier-42-coxeter-32-batch-22.pages.json`, `.coverage.json`, `.notes.md`,
`.cross-batch-dependencies.json`; the ten `research/frontier-42-coxeter-32-step1-<id>.json`
readiness records; `library/coxeter-groups/large-spherical-metric-flags-and-the-moussong-girth-theorem{,-examples}.md`,
`library/coxeter-groups/_pathway.md`; `research/plan-coxeter-groups-track.md` §CG-17 (lines
418–432) and the consumer section §CG-27; `research/plan-spec.json` (orders 1760/1761, the
consumer order 1776); `research/coxeter-scaffold/inventory.json` CG-17;
`research/coxeter-scaffold/definition-justifications.json`;
`research/coxeter-scaffold/independent-audit.md`; `research/coxeter-scaffold/geometric-source-report.md`
(§“Metric-flag proof by bounded radial insertion” and the audit supplement);
`research/frontier-42-coxeter-32-owner-scope.json`, `-owner-authoring-direction.md`,
`-scope-ledger.json`; the drift review `research/frontier-42-coxeter-32-alpha-step1-drift.md`
§`large-spherical-metric-flags-and-the-moussong-girth-theorem` (**VERDICT: no-drift**); the
statements of every in-run supplier item the pair uses (batches 2, 4, 6, 8, 11, 13, 15) and of
the batch-30 consumers; the source files recorded in the coverage (`Charney–Davis 1995`,
`Möller arXiv:2205.07791`, `Moussong thesis transcription` were freshly downloaded and their
relevant statements read from the extracted text; see §3).

## 1. Prose design versus scaffold (A page)

The five designed local supplier contracts (plan §CG-17, lines 426–430; inventory CG-17) are all
present, with their exact ids, kinds and relative order; the scaffold adds three items and no
designed clause was weakened (the strengthenings are recorded in the batch-22 notes).

| Design contract (§CG-17) | Scaffolded item | Coverage |
|---|---|---|
| Finite spherical complexes with off-diagonal≤0 Gram data; metric flag (pairwise adjacent + positive-definite cosine matrix ⇔ simplex); associated almost-negative matrix; links by Schur complement; no small-edge flag theorem | `def-cg-large-spherical-metric-flag-and-almost-negative-matrix` (1)–(4) | complete: all four notions defined; the automatic forward implication and the link convention are stated; the definition’s justifier is `thm-cg-large-metric-flag-complexes-are-cat-one` (matches `definition-justifications.json`) |
| Face links are again finite large metric flag complexes; local-curvature step conditional on lower dimensions; dimension-zero base; componentwise intrinsic metrics; perimeter-<2π comparisons agree with the truncated metric | `lem-cg-metric-flag-links-and-local-cat-one` (i)–(iv) | complete (Schur nonpositivity and PD-test transfer; star = F * Lk_X(F) local model; explicit conditional induction step; vacuous/componentwise conventions) |
| Minimum nonshrinkable loop, radius-π/2 vertex cones, excursion length π, injectivity radius r = m/2 > π/2, at most one excursion per vertex, maximal-vertex continuation into the 1-skeleton | `lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion` (i)–(iv) | complete: every step of the design route is a named clause, including the strict r > π/2 uniqueness use |
| Three-edge structure of short nonshrinkable local geodesic edge loops; 3×3 Gram positive definiteness; metric flag fills the triangle; corner-angle contradiction; compact short-circle criterion closes CAT(1) | `thm-cg-large-metric-flag-short-loop-radial-contradiction` (i)–(iv) | complete; explicitly avoids Moussong Lemma 9.11 and the suspension route |
| Dimension induction for the precise finite large-simplex CAT(1) theorem; disconnected components; no dependency cycle | `thm-cg-large-metric-flag-complexes-are-cat-one` | complete (base case via the link lemma, conditional local CAT(1), contradiction theorems conditional on local CAT(1)) |

The two design B checks map one-to-one onto the two `example` items (§2 below).

Three scaffold additions beyond the design, each independently justified and consumed:

1. `lem-cg-cat-zero-products-and-cat-one-joins` (l²-products of CAT(0) spaces; joins of CAT(1)
   spaces; round spheres; convex subsets). This is the local-model ingredient the design calls
   “supplied cone/product charts”, but which the named suppliers do not supply: batch-8
   `thm-cg-cone-join-metric-and-local-product-chart`(3) gives the join *metric* and the
   cone-product isometry and batch-11 `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`
   gives Berestovskii plus the link criterion for **Euclidean** isometric polyhedral gluings;
   neither states “a join of CAT(1) spaces is CAT(1)”, which the piecewise-spherical local model
   `F * Lk_X(F)` needs. Verified directly in the two supplier statements. Consumed by
   `lem-cg-metric-flag-links-and-local-cat-one`(i)–(ii) and by a batch-30 example.
   Owner reconciliation point (recorded in the batch notes): the lemma could be re-homed to the
   CAT page; its live home is here.
2. `def-cg-coxeter-nerve-and-moussong-metric`. The page title and the page’s only downstream
   consumer need the nerve; the finiteness criterion (batch 13) is thereby load-bearing, which
   the drift evidence names as the consumed positive-definite simplex test. Cells = spherical
   subsets = positive-definite principal submatrices; edge lengths π − π/m ≥ π/2; constructed
   from the batch-4 form with its −cos(π/∞) = −1 convention.
3. `cor-cg-coxeter-nerve-is-cat-one-and-has-girth-at-least-two-pi`. This is the “Moussong girth
   theorem” of the title: the nerve and every link are finite large metric flag complexes, hence
   CAT(1), hence have no isometrically embedded circle and no nonshrinkable loop of length < 2π
   (girth ≥ 2π). A caveat clause explicitly withholds Gromov hyperbolicity — the branch where
   the published Moussong proof has the defect repaired by Möller — and the proof route never
   consumes the defective Lemma 9.11. Owner reconciliation point (batch notes): the two nerve
   items can be dropped by the owner without touching the other eight.

## 2. B companion versus design

| Design B task (§CG-17 line 432) | B item | Coverage |
|---|---|---|
| Ã₂ nerve: every edge exists, the 3-cycle has perimeter 2π, the Gram determinant vanishes, metric flag does not fill it | `ex-cg-a-tilde-2-nerve-perimeter-two-pi-and-vanishing-gram-determinant` (i)–(iii) | complete: exact rational/eigenvalue computation; the surviving complex is the round circle of length 2π; the girth bound is attained, giving the equality case |
| Compare the all-right triangle that must be filled with the disconnected universal-Coxeter nerve | `ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve` (i)–(iii) | complete: id₃ fills the triangle and the boundary loop is not locally geodesic; the universal-Coxeter nerve is discrete with truncated distance π and vacuously CAT(1); boundary value π/2 of the “large” hypothesis contrasted with the non-edge value −1 |

The B page is a dependency leaf, as its prose requires: a scan of all 32 current batch manifests
finds no page whose `requires` names it and no item outside batch 22 that references either B id.
The B items’ declared deps stay inside the A page’s item closure or published items
(batches 2, 8, 11, 13), consistent with the B prose (“only the theory of the A page and that
page’s established prerequisite closure”).

## 3. Source coverage

`batch-22.coverage.json` records one page (the run convention for B pages), 6 sources, 38
harvested rows, every row dispositioned, and 6 fetch-verified stamps (Bowditch 27 pp; Bridson–Haefliger
669 pp; Davis 600 pp; Moussong 40 pp; Charney–Davis 25 pp; Möller 19 pp). The
`coverage-low-yield` advisory (12/38 scaffolded) is confirmed as a reasoned decline pattern:
Charney–Davis §§4–7 are the Hopf-type conjectures; Moussong Lemma 9.11 is the step Möller
counterexamples and this pair’s route avoids; Moussong Chapters 3–4 and Möller §4/Theorem C are
the hyperbolic criterion, which the corollary’s caveat clause deliberately does not claim;
Davis 7.4–7.5/13 and the Bridson–Haefliger remainder are outside the pair’s theorem; Bowditch
§§3.5–3.7 are applications/curve-shortening flows owned by the short-loop page. No row is
undecided (`coverage-checklist --require-destination`: 0 errors).

Independent source checks made for this review (fresh downloads of the recorded URLs, text
extraction, bounded reading):

- Charney–Davis (MSP PDF): 2.4 (all-right, size > π/2), 2.4.1 (links preserve the property),
  2.8 (Gromov's Lemma, all-right flag criterion), 2.9 (metric flag definition, exactly the
  pairwise-adjacent + PD ⇒ simplex form), 2.10 (Moussong's Lemma for simplices of size > π/2).
  The pair’s definition adds the automatic converse for spherical complexes, as its clause (3)
  states, and its “large” (all edge lengths ≥ π/2) is the union of the all-right and
  size > π/2 settings, with the ≥ boundary used by the B example; the mixed-≥ case is carried by
  the pair’s uniform induction (and by Moussong’s almost-negative-nerve setting: off-diagonal ≤ 0).
- Möller arXiv:2205.07791: §3, Proposition 3.3 (nerve of an almost-negative matrix is CAT(1)
  iff girths of the nerve and all links are ≥ 2π), Proposition 3.4 (= Moussong Cor. 10.2), and
  the §3/§4 discussion recording the defect in Moussong’s Lemmas 9.5, 9.7, 9.11 and its repair
  for the hyperbolic case.
- Moussong transcription: §5, p. 10 (girth = infimum of lengths of closed geodesics), and
  Proposition 10.1 (the girth of N(A) is at least 2π for an almost-negative matrix), with the
  Lemma 9.11 step appearing inside its proof — the step the pair’s route replaces.

Honest limits: the Bowditch preprint is a scan without a text layer and was not re-read here;
its use is recorded through the commissioned source report and audit supplement, and the
Bowditch-dependent item (`lem-cg-bowditch-quantitative-short-loop-control`) is homed in batch 15,
not in this pair. Davis was not re-read here. The pair’s own item proofs are Step-3b work.

Presentational note (non-blocking): Moussong defines girth over closed geodesics; the corollary
states the bound “in the form of the infimum of the lengths of isometrically embedded circles”.
The two agree in the pair’s compact locally CAT(1) setting through batch-15’s short-loop control
(every short loop shrinkable, the minimum nonshrinkable loop is an isometrically embedded
circle, and a closed local geodesic is never shrinkable). The Step-3b author of the corollary or
of B1(iii) should state that equivalence explicitly rather than leave “girth” as an inline
identification. Likewise, the source word “large” (Charney–Davis 2.1.1: unique geodesics below
π) collides with the pair’s “large” (edge lengths ≥ π/2); the author should keep the two usages
apart in prose. Neither point is a scope omission.

## 4. Intended role in the library

The page sits in pathway part `finite-geometry-and-curvature-tools`
(`library/coxeter-groups/_pathway.md` line 13), whose role statement is exactly this pair’s
subject (“Quantitative loop shortening and the spherical metric-flag criterion supply the
curvature branch”), with `lem-cg-spherical-simplex-existence-and-link-gram-formula`,
`thm-cg-cone-join-metric-and-local-product-chart`, the CAT page and the short-loop page as its
declared predecessors. Downstream consumers in the current scaffold:

- page `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` (CG-27, batch 30, order 1776)
  declares `requires: large-spherical-metric-flags-and-the-moussong-girth-theorem`; its items
  `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve` and
  `thm-cg-finite-rank-davis-moussong-cat-zero-theorem`(1) use this page’s
  `def-cg-large-…`(3), `lem-cg-metric-flag-links-and-local-cat-one` and
  `thm-cg-large-metric-flag-complexes-are-cat-one` to conclude that the Davis-complex links are
  CAT(1); its example `ex-cg-link-angles-of-a2-affine-a2-and-universal-coxeter-nerve` also uses
  `lem-cg-cat-zero-products-and-cat-one-joins`(iii). Every clause the consumers cite is present
  in the scaffolded statements above.
- No published item states the metric-flag criterion, CAT(1) links or the girth bound (a
  `items/` scan for “metric flag”/“CAT(0)”/“CAT(1)” finds none), so the pair has no competing
  home; the intended role is the run’s only curvature-branch supplier.
- The B page is consumed by nothing outside the pair (§2), matching its leaf role.

## 5. Prerequisite availability

- Page `requires` closure: `cat-comparison-link-criteria-and-local-globalization` (batch 11),
  `finite-coxeter-diagrams-and-complete-classification` (batch 13) and
  `short-loop-polygons-and-quantitative-energy-decrease` (batch 15) are all scaffolded in-run
  with their items; no page-level prerequisite is missing.
- Item dependency scan: all declared `deps` of the 10 items resolve (no unresolved id), to
  published item files or to in-run scaffold items in batches 2, 4, 6, 8, 11, 13, 15; no edge
  points to a later batch, and `item-dependency-levels check` reports no cycle, dependency or
  label error (302 items, 64 pages, max level 31). The transitive closure walked through in-run
  and published deps has 946 nodes (54 in-run, 892 published) and 0 unresolved targets.
- The in-run suppliers’ clauses consumed were read in their current statements and are adequate
  (finite spherical complex/Schur formula/truncation; CAT definitions, comparison and hinge
  criteria, compact short-circle criterion; Berestovskii both directions; finiteness criterion
  (1); short-loop homotopy and quantitative control (iii)–(iv); join/cone-product isometry).
- **Confirmed unmet prerequisites: none.** Residual uncertainty, stated honestly: this is a
  manifest/statement-level verification; the suppliers and this pair’s proofs are Step-3b
  authoring work and are scaffolded, not certified.
- Non-blocking plan-declaration gap (same pattern recorded for batches 8 and 11): four published
  dependencies are homed outside the page’s declared `requires` closure —
  `def-principal-inverse-sine-and-cosine` (home `further-trigonometric-identities-and-inverses`)
  and `def-real-and-complex-inner-product-space`, `cor-inner-product-induces-a-norm`,
  `thm-cauchy-schwarz-in-an-inner-product-space` (home
  `hilbert-space-geometry-and-riesz-representation`). Both homes are published, so the
  prerequisites are met; only the page-level declaration is incomplete. `validate-plan` currently
  reports for this page only the informational `[redundant-prereq]` note (CAT page reachable
  through the short-loop page); owner plan reconciliation is recommended before the Step-4
  splice. No scaffold edit was made.

## 6. Checks actually run (current bytes)

| Check | Result |
|---|---|
| `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-22.pages.json` | 10 item(s), 0 errors |
| `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 0; 302 item(s), 64 page(s), max level 31; no batch-22 error |
| `tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | 302 scoped item(s), 0 error(s), 0 warning(s) |
| `tools/coverage-checklist.mjs …batch-22.coverage.json --require-destination` | 1 page, 38 harvested result(s), 0 errors, 1 advisory warning (`coverage-low-yield`, 12/38) |
| `tools/source-fetch-check.mjs --coverage …batch-22.coverage.json` | 6/6 fetch-verified; 6/6 resolved |
| `tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64/64 pages owed, no scope drift |
| `tools/validate-plan.mjs research/plan-spec.json` | exit 0; for this pair only `[redundant-prereq]` (CAT via short-loop) |
| `tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0 |
| dependency-resolution and transitive-closure scan (all 32 manifests + `items/*.md`) | 0 unresolved; 946-node closure clean |
| consumer scan (all 32 manifests) | batch 30 page + 4 item rows consume A items; 0 references to the B page |

## 7. Non-blocking observations for the owner

1. The scaffold’s three additions are inside the pair’s promised subject (the title names the
   girth theorem; the nerve is needed to state it; the join/product lemma is the local-model
   ingredient), and the batch notes already record the two owner reconciliation points: a
   possible re-home of `lem-cg-cat-zero-products-and-cat-one-joins` to the CAT page, and the
   option to drop the two nerve items. Both are owner calls; neither affects the scope verdict.
2. “Girth” is used via the equivalent embedded-circle form; recommend the author states the
   equivalence to Moussong’s closed-geodesic definition explicitly (supplied by batch 15’s
   short-loop items). See §3.
3. “Large” collides with Charney–Davis’s usage (unique geodesics below π); recommend keeping
   the two meanings apart in the definition’s prose. See §3.
4. Four published dependencies have undeclared homes (§5); plan reconciliation before splice.
5. No B example exercises the join/product lemma or the local product chart directly; the
   design promised exactly the two present checks, and those clauses are consumed downstream by
   batch 30, so no example gap was found.
6. The Moussong Lemma 9.11 defect (Möller’s counterexample) is a known source defect, not a
   library defect; the pair refuses the defective step and no item consumes it.

## 8. Decision

**`large-spherical-metric-flags-and-the-moussong-girth-theorem`: sufficient.** The planned
definitions (finite large spherical complexes, almost-negative matrix, metric flag condition,
face links, Coxeter nerve with the Moussong metric), results (Schur-preserved links,
conditional local CAT(1), minimum nonshrinkable loop and radial insertion, three-edge
short-loop exclusion, the finite large metric flag CAT(1) theorem, and the nerve girth bound
with hyperbolicity explicitly not claimed) and examples (the affine Ã₂ equality case; the
all-right triangle versus the disconnected universal-Coxeter nerve) adequately cover the
intended subject of CG-17 and the role recorded in the pathway. No designed contract, topic,
result or example was omitted; no enrichment or merger is recommended; every declared
prerequisite resolves to the published library or to the current in-run scaffold, and no unmet
prerequisite was confirmed. Owner authority over the recorded reconciliation points is
unaffected; no scaffold file was edited.
