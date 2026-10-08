# Batch 30 — Davis CAT(0) Geometry and Finite Subgroup Fixed Points (CG-27)

Run `frontier-42-coxeter-32`; role beta; pair CG-27, orders 1776 (A) and 1777 (B),
category `coxeter-groups`. Outputs written by this batch:

- `research/frontier-42-coxeter-32-batch-30.pages.json` (4 A items, 3 B items)
- `research/frontier-42-coxeter-32-batch-30.coverage.json` (6 sources on the A page,
  4 on the B page; every one fetch-stamped)
- `research/frontier-42-coxeter-32-batch-30.cross-batch-dependencies.json` (76 reviewed edges)
- `research/frontier-42-coxeter-32-batch-30-url-liveness.json` (6/6 URLs live)
- `research/frontier-42-coxeter-32-step1-<item>.json` (7 readiness records, all `ready`)

## Design, plan and owner direction

`research/frontier-42-coxeter-32-owner-authoring-direction.md` was read before construction.
The design section is `research/plan-coxeter-groups-track.md` L548 (CG-27, order 1776); the
`plan-spec.json` entries for orders 1776/1777 agree with it in id, title, category, companion,
`requires` list and scope. **No design/plan conflict was found.** The design's four A-page
contracts were preserved with their proof routes: the link computation from the orbit-polytope
face geometry, the assembly through the metric-flag theorem and the locally CAT(0)
globalization (with the AC dependence carried from the proper-target geodesic construction),
the complete CAT(0) circumcenter lemma with its minimizing sequence, and the finite-subgroup
theorem with the Tits-cone averaging proof recorded as a comparison only. The B companion's two
constructions (the A2/affine-A2/universal link angles; the circumcenter of a finite orbit in a
metric tree together with its cell stabilizer) are B items 1-3.

### Recorded discrepancies with scaffold-preparation metadata (the design controls)

1. `research/coxeter-scaffold/inventory.json` and `independent-audit.json` list
   `thm-cg-davis-complex-is-simply-connected` and `thm-cg-large-metric-flag-complexes-are-cat-one`
   as dependencies of **every** CG-27 item. The design text names neither for items 1, 3 and 4.
   The following divergences are deliberate: the link lemma (A1) consumes the large-metric-flag
   theorem but not simple connectivity; the CAT(0) theorem (A2) consumes both; the circumcenter
   lemma (A3) is stated for an abstract complete CAT(0) space and consumes neither (its actual
   prerequisites are the CAT(0) definitions and the comparison/convexity lemma, level 10); the
   finite-subgroup theorem (A4) consumes neither directly but inherits the Axiom of Choice
   transitively through A2 and A3, which its record and statement declare. Declaring an unused
   dependency would be a padded inventory, so the prep edges are recorded here rather than copied.
2. The inventory orders the four contracts as link lemma, CAT(0) theorem, circumcenter lemma,
   finite-subgroup theorem. That order is preserved as the authoring order; the dependency
   levels show that A3 is mathematically independent of A2 (level 10 versus 21) and is built
   before its consumer A4, which is the requirement that actually binds.
3. The inventory's `depends_on` for A1 names `thm-cg-davis-complex-is-simply-connected`; the
   link computation does not use simple connectivity (the link of a vertex only needs the cell
   metrics, the orbit polytopes and the gluing). Recorded as a prep-metadata divergence.
4. The A page's `requires` list is fixed by design and `plan-spec.json` and was retained
   unchanged; the published third requirement `relations-functions-and-quotients` is the home of
   `def-axiom-of-choice` and is not an in-run edge.

## Local additions (not scope changes)

No new definition or extra lemma beyond the four contracted items was needed. The only
structural additions are internal to the contracted items: (i) A1's clauses (1)-(3) compute the
tangent cone and the link directly from the orbit-polytope face geometry (the design's
"compute link edge length pi - pi/m_st" instruction) and clause (5) records the higher links as
Schur complements (the design's "higher links match Schur complements and face charts"); (ii) A3
clause (5) adds the choice-free proper-space route as an explicit clause, because the design
requires the completeness hypothesis to be stated and the application space (the Davis complex)
is proper; (iii) the B page restates the infinite-dihedral line setup inside B3 instead of
depending on B2, because an item whose `provenance.statement` is `ai-generated` cannot be a
`deps` target (level coverage, future-scope backstop). The page has 7 items, far inside the
100-item cap.

## Mathematical route and the choices made

- **Vertex link (A1).** For a spherical `T` and the cell `wW_T` identified with `C_T`, the
  `B`-dual basis gives `B(x_T,e_s) = d_s`, so `sx_T - x_T = -2d_s e_s`; the facets through the
  vertex are the `F_s = conv(W_{T\{s}}x_T)` with supporting functionals `v_s^{(T)}`, and the
  tangent cone is `{y : B(v_s,y) <= 0} = cone{-e_s}`. Intersecting with the unit sphere gives
  the spherical simplex with cosine matrix `B_T`; gluing over `T in S` along faces gives the
  finite spherical complex `|L|_B`. Edge lengths are `pi - pi/m_st >= pi/2`; the metric flag
  test is `B_T` positive definite iff `W_T` finite (finite-type criterion); the associated
  almost negative matrix is `B` itself; higher links are the iterated Schur complements, again
  large metric flag. The direction of the edge is `-e_s`, not `e_s`, and the edge length is
  `pi - pi/m_st`, not `pi/m_st`; both conventions are recorded explicitly because the source
  report flags them as the two common transcription errors.
- **CAT(0) (A2).** Local CAT(0) is the product chart `R^{|T|} x C(Lk)` plus Berestovskii's
  theorem and the polyhedral link criterion; completeness, properness and the weak topology are
  the in-run gluing theorem; the chain metric is shown to be the intrinsic path metric (chains
  are piecewise-geodesic paths of the same length, every path is at least the chain distance),
  so the space is a length space and, with the Axiom of Choice, geodesic (proper-target
  Ascoli). Globalization then gives the CAT(0) inequality, unique geodesics and the continuous
  geodesic contraction. The AC dependence is carried exactly from the proper-target geodesic
  construction and the CAT(1) theorem for finite spherical complexes, as the design requires.
- **Circumcenters (A3).** The radius function is 1-Lipschitz; a minimizing sequence is forced
  Cauchy by the squared midpoint inequality `d(z,m)^2 <= (d(z,y)^2 + d(z,y')^2)/2 - d(y,y')^2/4`;
  completeness gives the unique minimizer, and isometries permuting the orbit fix it. Fixed
  sets are closed and convex by uniqueness of geodesics; a nonempty intersection is a complete
  CAT(0) space and contracts continuously along geodesics from any of its points, with
  `d(H_t x, H_t y) <= t d(x,y)` from the hinged inequality. The Axiom of Choice is used exactly
  once, for the minimizing sequence, and clause (5) proves the same conclusion in the proper
  case from compactness and the finite-intersection property, so the Davis application has a
  choice-free circumcenter theorem available.
- **Finite subgroups (A4).** A finite subgroup has a bounded orbit; the circumcenter of that
  orbit is fixed; the point lies in the relative interior of a unique cell `wW_T`; the in-run
  point-stabilizer formula gives `Stab_W(y) = wW_{T cap S(y')}w^{-1}`, a conjugate spherical
  parabolic; hence `H <= wW_Tw^{-1}`. The Tits-cone averaging alternative is recorded in the
  strategy as a comparison and is not used as a supplier. The design's prohibitions
  (no automaticity, flat tori, solvable-subgroup or hyperbolicity consequences) are respected.
- **B companion.** B1 verifies the three link computations (arc of length `2pi/3`; circle of
  circumference `2pi` with the affine matrix `(3/2)I - (1/2)J`; the discrete link of the
  universal system with cone `R^{|S|}`), including the equality case `l = 2pi` of the circle
  CAT(1) criterion and the correct omission of the affine 2-simplex. B2 identifies the
  infinite-dihedral Davis complex as the unit-edge line (Cayley graph 2-regular, acyclic by the
  free-product normal form, hence a bi-infinite line) and proves directly that the circumcenter
  of a finite set is the midpoint of a diameter pair, by the tripod decomposition. B3 computes
  the finite subgroups of `D_infinity` (identity and conjugate reflections) and shows that a
  reflection fixes exactly one edge midpoint whose stabilizer is the conjugate spherical
  parabolic `W_r`, with the finite `A_2` hexagon as the opposite (top-rank) extreme.

## Item inventory (level = step-1 dependency level)

| # | Item | Kind | Level | In-run deps (batch) |
|---|---|---|---|---|
| A1 | `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve` | lem | 20 | b2, b4 x2, b6, b8 x4, b11 x2, b13 x2, b22 x3, b26 x4 |
| A2 | `thm-cg-finite-rank-davis-moussong-cat-zero-theorem` | thm | 21 | A1, b2, b6 x4, b8, b11 x3, b22, b26 x4 |
| A3 | `lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets` | lem | 10 | b11 x2 |
| A4 | `thm-cg-finite-subgroups-lie-in-spherical-parabolics` | thm | 22 | A2, A3, b2, b4, b6, b10, b11, b26 x3 |
| B1 | `ex-cg-link-angles-of-a2-affine-a2-and-universal-coxeter-nerve` | ex | 21 | A1, b2 x2, b4 x2, b8, b11 x2, b13, b22 x4, b26 x3 |
| B2 | `ex-cg-circumcenter-of-a-finite-orbit-in-a-metric-tree` | ex | 20 | b2, b6 x2, b26 x4 (plus published graph and free-product items) |
| B3 | `ex-cg-fixed-points-and-cell-stabilizers-in-the-infinite-dihedral-tree` | ex | 23 | A2, A3, A4, b4 x2, b10, b13, b26 x5 (plus published free-product items) |

Every item declares its `deps` explicitly; the deps arrays equal the set of items cited in the
statement and strategy (a script compared `[[...]]` targets with `deps`: no cited item is
missing and no dep is uncited, for all seven items). `node tools/item-dependency-levels.mjs
check --run frontier-42-coxeter-32` prints no batch-30 line; the remaining run-level errors
belong to sibling batches that were being written concurrently (8 empty-scaffold lines at the
last run, all from batches 20, 25, 31 and 32).

## Sources (all fetched as full text and stamped)

Two independent treatments back every A-page claim, with a monograph, a full lecture-note set
and a textbook among them, and the companion pages use the same reading.

1. M. W. Davis, *The Geometry and Topology of Coxeter Groups*, first-edition author manuscript,
   600 pp., `https://people.math.osu.edu/davis.12/davisbook.pdf`, stamp sha256_16
   `ccefbb950fdcfce9`. Read: §7.3-7.4 (printed pp. 128-133: Coxeter polytopes, Lemma 7.3.3,
   Proposition 7.3.4, Examples 7.4.1-7.4.5), §12.1-12.3 (pp. 231-236: Lemma 12.1.1, Lemma 12.3.1,
   Corollary 12.3.2, Theorems 12.3.3-12.3.5), §13.2 (pp. 260-262), Appendix I.1-I.2 (pp. 499-507:
   Theorems I.2.5-I.2.8, Propositions I.2.10-I.2.12, Lemma I.2.15), and the quoted parts of
   Appendices I.3, I.5-I.7 (pp. 507-523). Not read: Chapters 8-11, 14-20 and Appendices B, C, E-J
   beyond the table of contents.
2. M. W. Davis and G. Moussong, *Notes on nonpositively curved polyhedra*, 65 pp.,
   `https://people.math.osu.edu/davis.12/notes.pdf`, stamp sha256_16 `f8c60a2bf6920bf4`. Read:
   §1.4-1.6 and §2.2-2.3 (pp. 8-24), §6.3-6.7 in full (pp. 36-41: Theorem 6.4.1, Lemmas 6.5.1,
   6.5.5, Example 6.7.3, Lemma 6.7.4 and Corollary 6.7.5). Chapters 3-5 and 7-10 were read only
   at the level of the table of contents.
3. M. R. Bridson and A. Haefliger, *Metric Spaces of Non-Positive Curvature*, Grundlehren 319,
   669 pp., `https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf` (no sha16 in
   the stamp: the fetch record stores the byte count). Read: II.2 (Proposition 2.7, Corollary
   2.8(1)), II.4 (Theorem 4.1), II.5.18-5.21 (Moussong's Lemma), II.6 (R-trees, elliptic
   isometries) and II.12.34(2).
4. G. Moussong, *Hyperbolic Coxeter groups*, PhD thesis, McCammond transcription, 40 pp.,
   `https://people.math.osu.edu/davis.12/papers/moussongdissertation.pdf`. Read: Sections 11-15
   (transcription pp. 28-33: the main construction, the link formula (5), Theorem 14.1,
   Remark 14.2). Chapters 1-2 and 4 only at heading level.
5. M. W. Davis, *The geometry and topology of Coxeter groups*, MSC lecture slides, 19 pp.,
   `https://people.math.osu.edu/davis.12/papers/Davis-MSC.pdf`. Read in full: Definitions 2.4-2.7,
   2.15-2.18, Theorem 2.19, Proposition 2.21.
6. P. Moller, *A note on almost negative matrices and Gromov-hyperbolic Coxeter groups*,
   arXiv:2205.07791v2, 19 pp., `https://arxiv.org/pdf/2205.07791`. Read: §§1-3 through
   Proposition 3.4 (pp. 1-7: Lemma 2.1, the Moussong metric, Proposition 2.4, Theorem 3.1); §4
   only at statement level.

Every harvested heading in the read ranges has a disposition in `coverage.json`
(`coverage-checklist --require-destination`: 2 pages, 71 harvested results, 0 errors, 1
warning). The warning is `coverage-low-yield` on the A page (18/59 harvested results have their
own item; the rest are absorbed inline by the in-run suppliers or declined with a written
reason). Batch 22's coverage file carries the same warning under the current tool, and the
warning is advisory ("confirm the declines with Alpha") rather than a defect; no decline reason
is boilerplate, and no declined result is needed by any item of this pair.

`url-sweep --fail-on-dead`: 6/6 unique URLs live, 0 failed.
`source-backing`: 8 authored results, all backed by an openable source. `source-fetch-check
--stamp`: 10/10 sources fetch-verified; check mode 10/10 resolved. No source retrieval failed,
so no `source_resolution` record is attached anywhere.

## Dependency verification

Supplier statements and proof strategies were read for every in-run supplier used, in
dependency order: batch 2 (presentations), batch 4 (forms and reflections), batch 6 (polyhedral
gluings), batch 7 (rank-two orders), batch 8 (spherical simplices, cones and joins), batch 10
(parabolic quotients), batch 11 (CAT comparison and globalization), batch 13 (diagram
classification and the positive-definite criterion), batch 22 (large metric flags) and batch 26
(the Davis complex). The checked clauses are recorded in the 76 evidence rows of
`research/frontier-42-coxeter-32-batch-30.cross-batch-dependencies.json` (consumer, supplier,
required claim, use, and the statement that no mismatch was found in statement, hypotheses,
direction or axiom strength). No missing, circular, forward or inadequate dependency was found:

- every `[[...]]` target in every item statement and strategy is declared in `deps` or
  `justified_by` (no `justified_by` occurs: all four A items are lemma/theorem statements and
  the B items are examples);
- no item of this pair depends on a later item of the same page or of another page: all in-run
  dep levels are strictly below the consumer's level (A1 20, A2 21, A3 10, A4 22, B1 21, B2 20,
  B3 23);
- a script resolved every `deps` target of all seven items to an in-run manifest item or to a
  published item on disk and checked the target page against `closure(requires)` of the
  consuming page (for B items against `{A page} union closure(requires of A)`); no target falls
  outside that closure, and no target is homed only on a B/examples page outside the consumer's
  own page;
- the Axiom of Choice is declared and its exact use identified in A1-A4 (A1, A2 through the
  finite-spherical-complex construction and the CAT(1) theorem, A2 also through the
  proper-target minimizing-geodesic construction, A3 once for the minimizing sequence with the
  choice-free proper case stated in clause (5), A4 transitively through A2 and A3). No item
  consumes `def-axiom-of-choice` vacuously, and the Tits-cone comparison in A4 is marked as a
  comparison only.

`node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` succeeds;
all 76 batch-30 edges carry a review row and there are no orphaned reviews. Its
`unreviewed_batches` list contains only batches other than 30 (20, 25, 27, 31, 32 at the last
refresh), so the `--require-reviewed` stage gate cannot pass until those siblings land; that is
a run-level condition, not a batch-30 defect.

## Checks run (actual commands and results)

| Command | Result |
|---|---|
| `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no batch-30 error line; levels 20, 21, 10, 22, 21, 20, 23 match the computed values. The remaining errors are the empty scaffolds of batches 20, 25, 31 and 32, all in flight |
| `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | all 7 batch-30 records present and current at report time; the run-level `closed:false` comes from sibling pages still in flight |
| `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-30.coverage.json --require-destination` | 2 pages, 71 harvested, 0 errors, 1 advisory low-yield warning (recorded above) |
| `node tools/source-fetch-check.mjs --coverage ...batch-30.coverage.json --stamp` | 10/10 sources fetch-verified (full text) |
| `node tools/source-fetch-check.mjs --coverage ...batch-30.coverage.json` | 10/10 resolved in check mode |
| `node tools/url-sweep.mjs --coverage ...batch-30.coverage.json --out ...batch-30-url-liveness.json --fail-on-dead` | 6/6 live, 0 failed |
| `node tools/source-backing.mjs --coverage ...batch-30.coverage.json --liveness ...batch-30-url-liveness.json` | 8/8 authored results backed |
| `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | 268 items, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | 268 scoped items, 0 errors, 0 warnings |
| `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 present, no scope drift |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed; 76/76 batch-30 edges reviewed, 0 orphaned |
| `node tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` | exit 2: `Empty frontier page finite-coxeter-invariants-and-coinvariant-gradings` (batch 20, in flight); the validator stops before its per-page passes, so the requires-closure condition was verified separately (see Dependency verification) with no violation |

`extcheck`, `fwdcheck`, `depcheck`, `depsource` and `precheck` are item-level validators that
resolve manifest ids through authored item files; at Step 1 those files intentionally do not
exist yet, and the engine runs the manifest-only policy and dependency passes instead. They
remain Step-3 obligations. No source note or batch manifest of this batch cites a `forward_refs`
target or an external fallback.


## Post-recording correction pass (honest record)

After the first write of the manifest and before the final battery, a full read-through found
and corrected the following defects:

- A3's clause (6) first derived uniqueness from a mis-transcribed rearrangement of the midpoint
  inequality ("d(c,c')^2 <= 2 r(c)^2 + 2 r(c')^2 - 4a^2"). The clause now proves
  d(c,c')^2 <= 2(d(z,c)^2 + d(z,c')^2) - 4d(z,m)^2 <= 4a^2 - 4d(z,m)^2 for every z in Y, takes
  the infimum over z (whose distances to m have supremum r_Y(m)) and concludes
  d(c,c')^2 <= 4a^2 - 4 r_Y(m)^2 <= 0; this is the correct computation and A3's readiness record
  was re-hashed after the edit, together with the records of its consumers A4 and B3 (whose
  item closures include A3).
- A2's clause (4) claimed that Sigma is a model for the universal space for proper W-actions.
  That assertion needs the definition of the universal space for proper actions, which no item
  of this pair's closure supplies, so it was removed; the clause now stops at contractibility,
  which is what the cited globalization theorem proves.
- A4's clause (3) said "the parabolic to be the stabilizer of the unique smallest carrier cell
  of c, namely wW_T", which conflates the cell with its stabilizer; it now names the spherical
  parabolic w W_T w^{-1} explicitly.
- B3's clause (i) asserted without argument that the finite subgroups of W are exactly {1} and
  the two-element subgroups generated by conjugate reflections; the statement now records that
  two distinct conjugate reflections have a translation as their product (normal form), closing
  the gap.
- Four readiness reasons carried stale dependency counts from before the last pruning
  (25/22/15/21/19 instead of 26/21/13/18/17); the records were re-hashed with corrected counts.
  No mathematical claim, dependency array or decision changed in that pass.

## Second correction pass (post-handoff verification)

After the handoff read, a fresh pass over the final manifest text found and corrected two
internal cross-reference slips in the Axiom-of-Choice bookkeeping sentences; no clause,
dependency, source or decision changed.

- A2's declaration sentence said Choice is used "through the two suppliers named in (2) and (1)
  respectively"; clause (2) names neither supplier, while the proper-target minimizing-geodesic
  theorem is named in clause (3) and the large-metric-flag theorem is reached through the link
  lemma of clause (1), not named there. The sentence now reads "only through
  [[thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics]] (used in (3)) and
  [[thm-cg-large-metric-flag-complexes-are-cat-one]] (reached through the link lemma of (1))",
  matching the strategy paragraph.
- A4's declaration sentence said Choice is "inherited from the two cited suppliers of this
  statement" without naming them; the suppliers are A2 and A3 (the batch-26 and batch-10 items
  used by A4 declare no Choice), so the sentence now names
  `thm-cg-finite-rank-davis-moussong-cat-zero-theorem` and
  `lem-cg-complete-cat-zero-circumcenters-and-convex-fixed-sets` explicitly and states that no
  further choice occurs in (2) or (3), matching the strategy paragraph.

Because the readiness hash covers each item together with the transitive closure of its
dependencies, exactly three records went stale (A2, A4, B3 — the edited items and their
dependents); each was deleted and re-recorded `ready` with its unchanged dependency array and
reason text (A4's reason sentence updated to match its statement). A1, A3, B1 and B2 were
untouched and their records remained current. The check battery was re-run after the edit and
reproduced the same results as the table above: `manifest-deps` 7/7 (0 errors) and 268/268
whole-run (0 errors); `content-policy --manifest-only` whole-run 268 items, 0 errors, 0
warnings; `item-dependency-levels` no batch-30 line (remaining errors are the sibling empty
scaffolds); `step1-decisions` no batch-30 item in `work` (run-level 255/268 ready);
`frontier-dependency-ledger refresh` clean (76/76 batch-30 edges reviewed, 0 orphaned);
coverage, source-fetch, URL and source-backing results unchanged.

## Escalations and unresolved findings

None for this batch. No source retrieval failed, no prerequisite belongs in another batch, and
the complete local closure fits comfortably inside the 100-item page cap. The only open items
are run-level: the empty page shells of batches 20, 25, 31 and 32, together with the not yet
written cross-batch inputs of batches 20, 25, 27, 31 and 32, keep `validate-plan --run` and the
`--require-reviewed` ledger gate red until those siblings land. Owner/operator reconciliation
and the full engine gate follow construction; neither the worker exit nor these readiness
records is independent mathematical approval — Step 3 provides that review.
