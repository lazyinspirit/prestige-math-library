# Batch 22 Step 1 scaffold — Large Spherical Metric Flags and the Moussong Girth Theorem

Run: `frontier-42-coxeter-32` · pair `large-spherical-metric-flags-and-the-moussong-girth-theorem`
(A order 1760, B order 1761, `coxeter-groups`, design label CG-17). Outputs:
`research/frontier-42-coxeter-32-batch-22.pages.json` (8 A + 2 B items), this note,
`research/frontier-42-coxeter-32-batch-22.coverage.json` (6 sources, 38 harvested rows),
`research/frontier-42-coxeter-32-batch-22.cross-batch-dependencies.json` (56 item rows and
3 page rows, all reviewed) and ten item-readiness records
`research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (read first; binding), the design `research/plan-coxeter-groups-track.md` §CG-17 (lines
  418–436), the machine inventory `research/coxeter-scaffold/inventory.json` (CG-17),
  `definition-justifications.json` (the single CG-17 definition, justified by
  `thm-cg-large-metric-flag-complexes-are-cat-one`), the native A/B prose
  (`library/coxeter-groups/large-spherical-metric-flags-and-the-moussong-girth-theorem{,-examples}.md`),
  the drift review `research/frontier-42-coxeter-32-alpha-step1-drift.md` §
  `large-spherical-metric-flags-and-the-moussong-girth-theorem` (**VERDICT: no-drift**:
  “The metric-flag induction consumes CAT(1) link/cone comparisons, the positive-definite
  simplex test, and Bowditch short-loop class control. The three explicit supplier pages are
  direct predecessors; their compactness/finite-shape inputs are transitive. … No prerequisite
  gap. The finite radial-insertion and triangle-Gram proof contracts remain draft obligations.”),
  and the geometric source report with its audit supplement
  (`research/coxeter-scaffold/geometric-source-report.md`, §“Metric-flag proof by bounded
  radial insertion” and §“Maximal-vertex continuation: the exact injectivity radius use”).
- **Preserved contracts.** The five designed local supplier contracts keep their exact ids,
  kinds and order: `def-cg-large-spherical-metric-flag-and-almost-negative-matrix`,
  `lem-cg-metric-flag-links-and-local-cat-one`,
  `lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion`,
  `thm-cg-large-metric-flag-short-loop-radial-contradiction`,
  `thm-cg-large-metric-flag-complexes-are-cat-one`. Their warnings are kept: the conditional
  form of the local-curvature step (no item secretly consumes the later global theorem), the
  rejected Moussong-suspension step (never used), the exact excursion length π and the strict
  injectivity radius r = m/2 > π/2, the treatment of disconnected components with the
  truncated inter-component convention, and the dimension-zero base case.
- **B companion (2 items).** `ex-cg-a-tilde-2-nerve-perimeter-two-pi-and-vanishing-gram-determinant`
  and `ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve`, matching the
  design's two B checks (the affine Ã2 nerve at the 2π boundary; the all-right triangle versus
  the disconnected universal-Coxeter nerve).

## Plan-spec comparison and recorded conflicts

`research/plan-spec.json` agrees with the task and design on the pair ids, orders 1760/1761,
category, companion and the A page's `requires`. Its item arrays for these two pages are empty,
exactly as for every other new page of this run, so no item-level plan text can conflict; the
design's local supplier contracts are the item-level authority and no plan text was edited.
**No design-versus-plan conflict exists.**

## Inventory changes (additions and strengthened clauses only; nothing weakened or removed)

Beyond the five designed contracts this batch adds three items, all on the A page:

1. **`lem-cg-cat-zero-products-and-cat-one-joins` (lemma, new).** General metric geometry:
   the l²-product of CAT(0) spaces (and of a CAT(0) space with a Euclidean factor) is CAT(0);
   the spherical join of CAT(1) spaces of diameter ≤ π is CAT(1), with the cone-product
   isometry C(L₁)×C(L₂) ≅ C(L₁*L₂) recorded for arbitrary such spaces; round spheres are
   CAT(1) and their balls of radius < π/2 are convex CAT(1) subspaces; convex subsets of
   CAT(1) spaces are CAT(1). **Why it is required:** the design routes the inductive local
   step through “supplied cone/product charts”, but the in-run cone/product charts
   (`thm-cg-cone-join-metric-and-local-product-chart`) are stated for links of *Euclidean*
   isometric polyhedral gluings, and Berestovskii's theorem
   (`thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`) is stated for the Euclidean
   cone; neither by itself yields the local model of a *piecewise spherical* complex. The
   missing ingredients (product of CAT(0) spaces, join of CAT(1) spaces) are supplied here
   and proved from the supplied hinge criterion and cone-product isometry. **Owner
   reconciliation point:** the item is general CAT(0)/CAT(1) geometry and could be re-homed
   to the CAT page at reconciliation; the scaffold does not edit that page and records the
   placement question here (the same pattern batch 15 used for
   `lem-cg-cat-one-short-and-closed-local-geodesics`).
2. **`def-cg-coxeter-nerve-and-moussong-metric` (definition, new).** The Coxeter nerve with
   the Moussong metric: cells are the spherical subsets, carrying the spherical simplices of
   the cosine matrices C_T built from the canonical Coxeter form of batch 4, with the
   finiteness criterion (batch 13) as the exact cell test. **Why it is required:** the page's
   title and prose promise the Moussong girth theorem for Coxeter nerves, and the pair's
   declared prerequisite `finite-coxeter-diagrams-and-complete-classification` is otherwise
   not load-bearing on the A page; the drift evidence names “the positive-definite simplex
   test” as the consumed input, which is precisely this criterion.
3. **`cor-cg-coxeter-nerve-is-cat-one-and-has-girth-at-least-two-pi` (corollary, new).**
   The nerve is a finite large metric flag complex (cells = positive-definite principal
   submatrices), hence CAT(1), and the nerve and all its links contain no isometrically
   embedded circle of length < 2π: Moussong's girth bound g ≥ 2π. A caveat clause states
   explicitly that no Gromov-hyperbolicity claim is made (that is where the published gap
   repaired by Möller lies, and the design's Bowditch route avoids it).
   **Owner reconciliation point:** if the owner prefers the pair to stop at the general
   theorem, the two nerve items can be dropped without touching the other eight; the
   reverse (adding them later) would reopen the page, so they are scaffolded now, with the
   `requires` edge on the finite classification made load-bearing.

Text-level strengthenings inside designed contracts: clause (ii) of
`lem-cg-metric-flag-links-and-local-cat-one` now states the local model explicitly
(closed star = F * Lk_X(F) with the join metric, and small balls are CAT(1) when the face
link is), instead of leaving it to an unstated chart; clause (ii) of
`lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion` now proves the vertex-cone
pairing facts and the covering identity 1 = Σ aᵢ⟨x,vᵢ⟩; clause (iv) of
`thm-cg-large-metric-flag-short-loop-radial-contradiction` states the exclusion of a minimum
nonshrinkable circle and the resulting CAT(1) conclusion (the design's last sentence).
No promised claim was weakened, and no inventory padding was added: every added clause is
used by a named consumer.

**Inventory `depends_on` edges dropped or added (with reasons).** The inventory attaches one
page-level `depends_on` list (three suppliers) to each CG-17 contract; each item's recorded
`deps` is its actual use set. `thm-cg-finite-coxeter-classification-including-h-and-dihedral`
is used by no A item (only the finite-type *criterion* is needed, by the two nerve items and
the two B examples) and `thm-cg-compact-local-cat-one-short-circle-criterion` is used by
four items rather than five; `lem-cg-bowditch-quantitative-short-loop-control` is used by
four items. Added: the new join/product lemma to
`lem-cg-metric-flag-links-and-local-cat-one` and to
`lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion`;
`def-cg-coxeter-diagram-components-and-finite-type` and
`def-cg-real-coxeter-form-and-reflection` to `def-cg-coxeter-nerve-and-moussong-metric`;
`def-cg-short-loop-homotopy-and-nonshrinkability` and
`lem-cg-cat-one-short-and-closed-local-geodesics` to
`lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion`; `def-axiom-of-choice` to
the five items that consume the AC-using compactness/minimization route (see below).

## Dependency levels (in-run only)

Computed with the shared `item-dependency-levels.mjs` logic over the current run manifests and
written into the manifest; `node tools/item-dependency-levels.mjs check --run
frontier-42-coxeter-32` reports **no cycle, dependency or label error naming any batch-22
item** (its 34 errors are all `empty scaffold inventory` for not-yet-scaffolded sibling
pages).

| level | item |
|---|---|
| 7 | `def-cg-large-spherical-metric-flag-and-almost-negative-matrix` |
| 12 | `lem-cg-cat-zero-products-and-cat-one-joins` |
| 13 | `lem-cg-metric-flag-links-and-local-cat-one` |
| 14 | `def-cg-coxeter-nerve-and-moussong-metric` |
| 17 | `lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion` |
| 18 | `thm-cg-large-metric-flag-short-loop-radial-contradiction` |
| 19 | `thm-cg-large-metric-flag-complexes-are-cat-one` |
| 20 | `cor-cg-coxeter-nerve-is-cat-one-and-has-girth-at-least-two-pi` |
| 21 | `ex-cg-a-tilde-2-nerve-perimeter-two-pi-and-vanishing-gram-determinant` |
| 21 | `ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve` |

No item depends on a later item of this page or of another page of the run; the two
definitions' `justified_by` targets depend on them through `deps`.

## Dependency verification (examined, not assumed)

Every declared `deps` target was checked to exist on disk or as an in-run scaffold contract,
and its statement and proof route were read for adequacy. In-run suppliers read in the
current manifests:

- batch 6 — `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric` (chain-metric
  framework);
- batch 8 — `def-cg-spherical-gram-simplex-and-angular-link`,
  `lem-cg-spherical-simplex-existence-and-link-gram-formula` (clauses (i)–(vi) are used
  verbatim, including compactness/minimizing geodesics with AC and the Schur link formula),
  `def-cg-euclidean-cone-and-spherical-join-metrics` (truncation, cone, join and the
  empty conventions), `thm-cg-cone-join-metric-and-local-product-chart` (truncation
  agreement, cone geodesics, cone-product isometry, local product chart);
- batch 11 — `def-cg-cat-zero-cat-one-and-local-geodesic` (clauses (3)–(7)),
  `lem-cg-comparison-convexity-and-model-spaces` (clauses (i)–(vi), in particular the hinge
  criterion (iv)(c) and the convexity of balls of radius < π/2 (v)),
  `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` (Berestovskii, both
  directions), `thm-cg-compact-local-cat-one-short-circle-criterion` (clauses (i)–(ii));
- batch 13 — `def-cg-coxeter-diagram-components-and-finite-type`,
  `thm-cg-finite-type-positive-definite-criterion` (clause (1), the iff used as the cell
  test);
- batch 15 — `def-cg-short-loop-homotopy-and-nonshrinkability`,
  `lem-cg-bowditch-quantitative-short-loop-control` (clauses (iii)–(iv)),
  `lem-cg-cat-one-short-and-closed-local-geodesics` (clauses (i)–(iii));
- batch 2 and batch 4 — `def-hh-coxeter-matrix-word-group-and-length`,
  `def-cg-real-coxeter-form-and-reflection`.

Checks actually made: the **direction** of the finite-type criterion (`W_T` finite ⟺ C_T
positive definite) against its batch-13 statement clause (1); the sign convention
B(e_s,e_t) = −cos(π/m_st) against batch 4, giving edge length π − π/m_st ≥ π/2; the
**direction** of Berestovskii's theorem (both directions are needed: C(L) CAT(0) ⟸ L CAT(1)
for the joins, and L CAT(1) ⟸ C(L) CAT(0) at the end of the proof); the hypothesis
“diameter ≤ π” of the join lemma against the truncated metric of batch 8 clause (2); the
exact clauses of the short-loop control lemma used (the minimum nonshrinkable loop in (iii),
the compact equivalences in (iv)); the vertex–face separation computation
⟨v,x⟩ = Σ aᵢc_vi ≤ 0 with the barycentric ray coordinates of batch 8 clause (ii); the
determinant identity 1 + 2xyz − x² − y² − z² and the planar angle-sum alternative for
dependent triples; the spherical corner shortening d = arccos(cos²t + sin²t cos α) < 2t for
α ∈ (0,π); and the dimension count dim Lk_X(F) = d − dim F − 1 for the induction. No
missing, circular, forward or inadequate dependency was found. Two structural points are
worth recording because they **repaired** the design's compressed phrasing:

- the local-curvature step is *conditional on strictly smaller dimensions* and the global
  theorem discharges it by one explicit dimension induction (the audit's requirement); no
  item consumes the later theorem;
- the local model used is the **spherical join** model (star of a face = face * link), not a
  Euclidean product chart: the batch-8 chart clause is stated for Euclidean polyhedral
  gluings, and the join/product facts needed to convert CAT(1) links into a locally CAT(1)
  complex are now supplied explicitly (new lemma 1 above).

## Choice accounting (AC boundary)

Five items carry `def-axiom-of-choice` in `deps` because their proofs consume the
AC-using route to minimizing geodesics/extremal loops:
`lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion`,
`thm-cg-large-metric-flag-short-loop-radial-contradiction`,
`thm-cg-large-metric-flag-complexes-are-cat-one`,
`cor-cg-coxeter-nerve-is-cat-one-and-has-girth-at-least-two-pi` and both B examples; the
path is batch 8 clause (iii) (finite spherical complexes are compact length spaces with
minimizing geodesics, proved there under AC) together with batch 15's short-loop control
(which itself carries `def-axiom-of-choice`, inherited from the compact short-circle
criterion via Arzelà–Ascoli). The other four items (the two definitions and
`lem-cg-cat-zero-products-and-cat-one-joins`,
`lem-cg-metric-flag-links-and-local-cat-one`) declare no choice principle: their arguments
are choice-free (Schur complements, metric equalities, comparison inequalities, and the
CAT(1) geodesics already required by the CAT(1) hypotheses). No dependency path reaches
`deferred-set-theory-beyond-choice`.

## Sources (full text fetched, stamped and inspected; reading limits stated)

Six independent treatments back the A page; all six bodies were downloaded and stamped at
harvest time (stamps in the coverage file):

1. **B. H. Bowditch, _Notes on locally CAT(1) spaces_** (author preprint,
   `https://www.bhbowditch.com/papers/bhb-catone.pdf`, 27 scanned sheets, 1 459 550 bytes,
   sha256-16 `113b2b86adb4841c`). Used §§2–3.4, printed pp. 13–32: local geodesics and the
   injectivity radius (2.16), loop classes and short-loop homotopy (3.1.4–3.1.7), and the
   shrinkable-loop conclusions (3.4). **Honest reading limit:** the scan has no text layer
   and this environment provides no OCR; the content recorded above is the commissioned
   visual reading of the geometric source report together with the independent audit
   supplement, which cross-checked the statements used against Bridson–Haefliger and Davis.
   This batch did not re-read the scanned pages.
2. **M. R. Bridson and A. Haefliger, _Metric Spaces of Non-Positive Curvature_**
   (author-hosted PDF, 669 pages, 7 281 109 bytes, sha256-16 `894ac23c8033d213`).
   **Read directly in this dispatch:** II.5.1–II.5.4, printed pp. 206–207, from the
   extracted text: the link condition (5.1), Gromov's Theorem 5.2 with its proof through
   I.7.39 and Berestovskii's theorem I.3.14, and Theorem 5.4 including the κ > 0 form
   “CAT(κ) ⟺ link condition + no isometrically embedded circles of length < 2π/√κ”. The
   remaining uses (II.1.4, II.4.9–II.4.16) are recorded through the source report's readings
   of the same file. The rest of the book was not read.
3. **M. W. Davis, _The Geometry and Topology of Coxeter Groups_** (author manuscript,
   600 pages, 4 220 570 bytes, sha256-16 `ccefbb950fdcfce9`). Used Appendix I.2.6–I.2.19,
   printed pp. 502–507 (I.2.15–I.2.18 for the cone on a CAT(1)-space and its geodesics,
   I.2.8 for the κ > 0 criterion) and Chapter 7.3 with Chapter 12 for Coxeter cells and the
   nerve, through the source report's recorded readings. Not reread in full here.
4. **G. Moussong, _Hyperbolic Coxeter groups_** (PhD thesis, McCammond transcription,
   40 PDF pages, 363 666 bytes, sha256-16 `83d82291519b8bde`). **Read directly in this
   dispatch:** Chapter 1, Sections 4–5 (almost-negative matrices; the girth defined as the
   infimum of lengths of closed geodesics; Lemmas 5.1 and 5.4) and Chapter 2, Sections 9–10
   (Lemma 9.11; Proposition 10.1 “the girth of N(A) is at least 2π”; Corollary 10.2 for
   links; the opening of Lemma 10.3), from the extracted text. The original scan and the
   remaining sections were not read.
5. **R. Charney and M. W. Davis, _The Euler characteristic of a nonpositively curved,
   piecewise Euclidean manifold_**, Pacific J. Math. 171 (1995) 117–142 (25 PDF pages,
   2 258 109 bytes, sha256-16 `453bcf48b7d61780`). **Read directly in this dispatch:**
   §§1–3, in particular 2.1.1 (large links), 2.3–2.4.1 (cosine matrices; links of simplices
   of size > π/2 again have size > π/2), 2.7–2.8 (flag complexes; Gromov's Lemma),
   2.9 (the definition of a metric flag complex) and 2.10 (Moussong's Lemma). Sections 4–7
   were not read.
6. **P. Möller, _A note on almost negative matrices and Gromov-hyperbolic Coxeter groups_**,
   arXiv:2205.07791 (19 PDF pages, 245 398 bytes, sha256-16 `12cccca1640780b0`).
   **Read directly in this dispatch:** §§1–3, in particular §2 (almost-negative matrices,
   the nerve complex N(A), link matrices, Lemma 2.1) and §3 (Theorem 3.2, Proposition 3.3,
   Proposition 3.4 = [Moussong, Cor 10.2], and the discussion of the gap in Moussong's
   Lemmas 9.5/9.7/9.11 with the Lemma 3.7 counterexample and Lemma B). Section 4 was not
   read.

**Source defects recorded, not consumed.** (a) Bowditch 3.2.1 prints “curvature ≤ −1”
where the product model requires ≤ 1; no item of this pair consumes the printed value.
(b) Davis's Lemma I.2.16 prints the length bound π/κ in the book's curvature normalisation;
only the case D₁ = π is used. (c) **Moussong's Lemma 9.11** (the star-avoiding excursion
implication used in the case analysis of Proposition 10.1) is defective in general: Möller
exhibits counterexamples and repairs the affected hyperbolic argument. The proof route of
this page **avoids Lemma 9.11 entirely** (the direct three-edge Bowditch-type argument of
`thm-cg-large-metric-flag-short-loop-radial-contradiction`), and no item consumes it. This
is recorded in the coverage file under Moussong's source row.

## Cross-batch dependencies

`research/frontier-42-coxeter-32-batch-22.cross-batch-dependencies.json` registers 56 item
rows and 3 page rows (the A page's three declared prerequisites), each with the exact
required claim and its use; every row carries a review. `frontier-dependency-ledger.mjs
refresh` now lists all 59 batch-22 edges with reviews and no orphans; the strict form
(`--require-reviewed`) reports `Cross-batch review incomplete: supply every batch input and
review every declared edge` **only** because sibling batches 12, 14 and 16–32 have no
consumer input files yet — no batch-22 edge is missing a review. The input contains **no
proposed removals**. Downstream note: batch 30's page
`davis-cat-zero-geometry-and-finite-subgroup-fixed-points` declares `requires:
large-spherical-metric-flags-and-the-moussong-girth-theorem`; its writer will find this
page scaffolded with the CAT(1) theorem and the link/local-model lemma it needs (its edge
row is currently unreviewed, which is batch 30's input to supply).

## Checks run (actual results)

| check | command (prefix `node`) | result |
|---|---|---|
| manifest dependency fields | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | `141 item(s), 0 normalized, 0 error(s)` |
| scaffold policy (whole run) | `tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | `141 scoped item(s), 0 error(s), 0 warning(s)` |
| manifest integrity / scope | `tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| coverage | `tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-22.coverage.json --require-destination` | `1 page(s), 38 harvested result(s), 0 error(s), 1 warning(s)` — the warning is `coverage-low-yield` (12/38 scaffolded), the remaining 26 rows being inline/out-of-scope with reasons |
| full-text fetch (stamp mode) | `tools/source-fetch-check.mjs --coverage …batch-22.coverage.json --stamp` | `6/6 source(s) fetch-verified (6 newly stamped)` |
| full-text fetch (check mode, after all edits) | `tools/source-fetch-check.mjs --coverage …batch-22.coverage.json` | `6/6 source(s) resolved (0 documented drops)` |
| URL liveness | `tools/url-sweep.mjs --coverage …batch-22.coverage.json --out /tmp/b22-url-liveness.json --recover --fail-on-dead` | `6/6 live; 0 failed; 0 suspect; 6 citation decision(s)` (artefact written to `/tmp` so shared run state is untouched) |
| source backing | `tools/source-backing.mjs --coverage …batch-22.coverage.json --liveness /tmp/b22-url-liveness.json --reharvest-plan /tmp/b22-reharvest.json` | `6 authored result(s) across 1 file(s), every one still backed`; empty reharvest work list |
| readiness (whole run) | `tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | `items 141, ready 141`; the 34 open entries are all `Empty scaffold inventory` for sibling batches; **none names a batch-22 item** |
| dependency levels (whole run) | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1 with exactly 34 `empty scaffold inventory` errors for not-yet-scaffolded sibling pages; **no cycle, dependency or label error names a batch-22 item** |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0; 59 batch-22 edges, all reviewed, no orphans |
| dependency ledger (strict) | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32 --require-reviewed` | exit 1 with `Cross-batch review incomplete: supply every batch input and review every declared edge` (sibling batches 12, 14, 16–32 have no inputs; no batch-22 edge lacks a review) |
| plan | `tools/validate-plan.mjs --run frontier-42-coxeter-32` | exit 2 with `frontier gate selection: Empty frontier page bruhat-subword-order-and-lifting` (batch 12's empty page; **no diagnostic names a batch-22 page**) |
| own wikilink/deps audit | (script) every `[[id]]` in the ten item statements resolves; every cited in-run item is declared in `deps` | `0 unresolved links; 0 undeclared in-run citations` |

## Unresolved findings and escalations

- **No owner escalation is required** by this batch: every item is recorded `ready`, no
  supplier is missing, no source was dropped, and no page-split or cross-batch change is
  requested.
- Whole-run, not batch-22: the step-1 readiness/level/plan gates remain open on sibling
  batches with empty scaffold inventories (batches 12, 14, 16–32). These are for the engine
  and those batches' Betas, not for this pair.
- Owner reconciliation points recorded above: (i) the possible re-home of
  `lem-cg-cat-zero-products-and-cat-one-joins` to the CAT page; (ii) the two nerve items,
  which can be dropped by the owner without disturbing the other eight.
- The `coverage-low-yield` warning (12/38) is expected for a page whose sources are shared
  with batch 15 and whose declines are all reasoned; Alpha should confirm the declines when
  reading this page.
- Honesty note: this scaffold certifies a *proof design*, not authored proofs. Every item's
  argument remains Step-3 authoring work; the local-model and excursion details named in the
  strategies must be written out in full there. The two structural repairs (conditional
  local-curvature step; explicit join/product local model) and the exact reading limits above
  are recorded so that Step 3 cannot silently re-import the compressed phrasing.
