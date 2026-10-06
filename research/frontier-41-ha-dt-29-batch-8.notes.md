# Frontier 41 (HA + DT) — batch 8 Step 1 notes

**Owner:** beta, batch 8. **Pair:** `fixed-point-index-and-the-lefschetz-theorem`
(A, order 543) / `fixed-point-index-and-the-lefschetz-theorem-examples` (B, order 544),
category `differential-topology`. Constructed artifacts:
`research/frontier-41-ha-dt-29-batch-8.pages.json`, `.coverage.json`,
`.cross-batch-dependencies.json`, `.url-liveness.json`, the 30
`research/frontier-41-ha-dt-29-step1-<id>.json` readiness records, and the batch-8 rows of
`research/frontier-41-ha-dt-29-cross-batch-dependencies.json` (refreshed, 0 orphaned). No
published content, shared plan, engine state or verdict was edited. This file records
scaffold decisions and evidence — not Step-3 mathematical approval.

Read before construction: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-41-ha-dt-29-owner-authoring-direction.md`, the batch task, the complete
design `research/plan-differential-topology-track.md` §DT-14 (L843–878, including the
Hard-proof closure paragraph), and `research/plan-spec.json` (both pages, orders 543/544).
The owner direction has no DT-14-specific amendment; its §12 supersession and "do not rehome
inherited definitions" clauses were checked — this pair mints no published definition and
touches neither `def-stiefel-whitney-number-of-a-closed-manifold` nor
`def-pontryagin-number-of-a-closed-oriented-manifold`.

## 1. Inventory and dependency levels

A page — 25 items (the design's 16 plus 9 added local prerequisites). B page — 5 items
(new; the design names no B entries for this pair). Every item carries an explicit `deps`
array and a `dependency_level` recomputed run-wide by
`node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`; levels count
in-run dependencies only, so published and other out-of-run suppliers do not raise them.
Distribution: five items at level 0, then 4, 2, 1, 3, 1, 0, 1, 2, 1, 1, 3, 2, 4 at levels
1–13 (no level-6 items; maximum 13, on three B-page items and
`rem-lefschetz-index-formula-recovers-poincare-hopf`).

A page `fixed-point-index-and-the-lefschetz-theorem`:

| level | item | kind |
|---|---|---|
| 0 | `lem-a-closed-discrete-subset-of-a-compact-space-is-finite` | lemma |
| 0 | `lem-fixed-points-are-graph-diagonal-intersections` | lemma |
| 0 | `def-nondegenerate-fixed-point` | definition |
| 1 | `lem-graph-transversality-is-fixed-point-nondegeneracy` | lemma |
| 0 | `def-local-fixed-point-index` | definition |
| 1 | `lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation` | lemma |
| 2 | `lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent` | lemma |
| 3 | `thm-index-of-a-nondegenerate-fixed-point` | theorem |
| 4 | `lem-local-fixed-point-index-splits-under-perturbation` | lemma |
| 1 | `def-global-geometric-lefschetz-number` | definition |
| 7 | `def-algebraic-lefschetz-number` | definition |
| 4 | `lem-the-local-intersection-sign-of-the-graph-and-diagonal` | lemma |
| 8 | `lem-diagonal-class-expansion-gives-the-alternating-trace` | lemma |
| 9 | `lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points` | lemma |
| 0 | `lem-the-orientable-double-cover-of-a-smooth-manifold` | lemma |
| 1 | `lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover` | lemma |
| 2 | `lem-fixed-point-sum-of-the-two-lifts-of-a-self-map` | lemma |
| 8 | `lem-lefschetz-numbers-of-the-two-lifts-sum-to-twice-the-base-lefschetz-number` | lemma |
| 10 | `thm-lefschetz-hopf-index-formula` | theorem |
| 11 | `cor-lefschetz-number-is-homotopy-invariant` | corollary |
| 12 | `thm-lefschetz-fixed-point-theorem` | theorem |
| 12 | `cor-lefschetz-number-of-the-identity-is-the-euler-characteristic` | corollary |
| 4 | `prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices` | proposition |
| 5 | `rem-isolated-does-not-imply-nondegenerate` | remark |
| 13 | `rem-lefschetz-index-formula-recovers-poincare-hopf` | remark |

B page `fixed-point-index-and-the-lefschetz-theorem-examples`:

| level | item | kind |
|---|---|---|
| 13 | `ex-rotations-of-the-two-sphere-and-their-lefschetz-number` | example |
| 11 | `ex-degree-d-map-on-a-sphere-has-lefschetz-number-one-plus-minus-d` | example |
| 13 | `ex-a-torus-translation-has-zero-lefschetz-number-and-no-fixed-points` | example |
| 11 | `ex-a-degenerate-isolated-fixed-point-with-nonzero-local-index` | example |
| 13 | `cex-vanishing-lefschetz-number-allows-fixed-points` | counterexample |

In-run suppliers consumed (all reviewed in the batch cross-batch input, 27 rows: 26
`verified`, 1 `removed`, plus the two page-level rows):
batch 7 `vector-field-index-euler-characteristic-and-poincare-hopf`
(19 item rows: the local-index definitions, the nondegenerate-zero determinant theorem,
the additivity lemma, the chart-independence and negation lemmas, Poincare–Hopf, the odd
Euler characteristic corollary, the Euler characteristic definition and the finite-cell
additivity proposition), batch 2 `intersection-pairings-self-intersection-and-euler-classes`
(4 item rows: the geometric intersection pairing and the Poincare-dual cup-pairing
equality), and batch 4 `morse-inequalities-and-the-handle-chain-complex`
(1 verified row for the finite-CW comparison in `def-algebraic-lefschetz-number`, and the
one `removed` row for the diagonal-expansion item whose finite-dimensionality citation was
switched to batch 7; both items supply the same finiteness, and no mathematics is lost).
Published suppliers: 82 items on 31 page homes; every one of those pages lies in the
transitive plan closure of this page (292 pages, checked against `plan-spec.json`).

## 2. Design, owner direction and plan reconciliation

The design's scope, convention warnings and proof route are preserved. Conflicts,
deviations and construction repairs, all recorded rather than silently dropped:

1. **Plan `requires` array vs. the design's named pages (plan controls).** The plan's exact
   array for order 543 is the 10 pages in the dispatch; the design additionally names
   `relative-homology-excision-and-mayer-vietoris` and `cw-complexes-and-cellular-homology`.
   Both are inside the page's transitive closure and both are actually consumed: the first
   through `cor-homology-of-spheres` in all four B-page examples that need sphere homology,
   the second through `thm-cellular-homology-computes-singular-homology`,
   `def-euler-characteristic-of-a-finite-cw-complex`,
   `def-cw-complex-with-closure-finiteness-and-weak-topology` and
   `def-cell-attachment-by-a-characteristic-map`. The `requires` array was left exactly as
   the plan has it; recorded for owner/Step-4 (a readability widening, not a closure gap).
2. **Nonorientable route (the main deviation).** The design's item 11 asks for "AT-23's
   orientation local system and twisted Poincare duality" on a nonorientable manifold. The
   scaffold instead proves the nonorientable case of `thm-lefschetz-hopf-index-formula` by
   the orientation double cover plus the transfer: the two derivative lifts
   `f~`, `f~' = tau o f~` satisfy `tau_# pi_# = id + tau_#`, `pi_# tau_# = 2 id`, their
   fixed-point index sums add to `2 I(f)` and their Lefschetz numbers add to `2 L(f)`, and
   division by 2 in `Q` gives the result. This is mathematically equivalent and keeps the
   proof inside the in-run batch-2/batch-7 suppliers plus published covering-space and
   transfer items (Hatcher §3.3, §3.G). Consequence: the declared require
   `local-coefficients-twisted-homology-and-duality` is consumed by **no** item of this
   batch (interface resolution, recorded; the page-level declaration is unchanged).
3. **Item structure.** The design's item 7 is renamed
   `lem-local-fixed-point-index-splits-under-perturbation` (splitting, not additivity, is
   what the page uses), and the design's item 10 is factored into the transverse
   nondegenerate case `lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points`
   plus the general theorem, which adds the perturbation and double-cover reductions. The
   9 added local prerequisites are `lem-a-closed-discrete-subset-of-a-compact-space-is-finite`
   (finiteness of Fix for the global sum), `lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation`
   (transport along charts and covering projections), `lem-the-local-intersection-sign-of-the-graph-and-diagonal`
   (the determinant-shear sign `sign det(I-Df_x)` in the DT-11/DT-12 orientation
   conventions), `lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points`,
   the four double-cover/transfer items
   (`lem-the-orientable-double-cover-of-a-smooth-manifold`,
   `lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover`,
   `lem-fixed-point-sum-of-the-two-lifts-of-a-self-map`,
   `lem-lefschetz-numbers-of-the-two-lifts-sum-to-twice-the-base-lefschetz-number`), and
   `rem-lefschetz-index-formula-recovers-poincare-hopf` (the promised derivation of
   Poincare–Hopf). Every design claim is kept and every addition sits on the same A page
   before its consumers.
4. **Sign conventions and hard-proof closure.** The page adopts `I - Df` everywhere, with
   an explicit warning that `Df - I` multiplies the value by `(-1)^n` (GP uses `df - I`).
   `thm-index-of-a-nondegenerate-fixed-point` is derived from the in-run DT-13 vector-field
   theorem applied to the chart displacement field — no orientation of `M` is used. The
   design's demand that the diagonal-class computation (not geometric homotopy invariance)
   prove the trace equality is followed: `thm-lefschetz-hopf-index-formula` routes through
   the transverse lemma and the perturbation lemma, never through homotopy invariance.
5. **Locator extensions.** Beyond the design's "GP Ch. 3 §4, pp. 119–131" the batch reads
   GP §5 pp. 132–137 (the vector-field/Poincare–Hopf bridge for the design's item 15), and
   Stanford Lecture 16 pp. 51–52 (the Kunneth diagonal splitting used by design item 11).
   The design's "Lecture 17, pp. 52–55" locator is confirmed: Theorem 155, Corollary 156
   and Examples 157–158 are present at printed pp. 54–55. The same file announces
   Poincare–Hopf as forthcoming without proving it (the batch-7 observation); this batch
   uses only its Lefschetz material, so the two notes are consistent.
6. **Design item 5's "excision/homotopy" language** is realized as degree-homotopy
   invariance of the normalized sphere maps plus the chart-transition determinant
   comparison, the model of the in-run DT-13 chart-independence lemma; no excision input is
   needed in the local Euclidean model.
7. **Repairs made during construction (honest record).**
   (a) *B-leaf repair.* The B item `ex-a-torus-translation-has-zero-lefschetz-number-and-no-fixed-points`
   originally declared `ex-cellular-boundary-matrix-of-a-closed-orientable-surface`, which
   is homed **only** on the B page `cw-complexes-and-cellular-homology-examples`; depcheck's
   `b-leaf-content` rule rejects any cross-page dependency on a B-only item once the item is
   authored. The dependency and `thm-cellular-homology-computes-singular-homology` were
   removed; the example now constructs the standard finite CW structure of the torus
   explicitly (one 0-cell, two 1-cells, one 2-cell attached along `a b a^{-1} b^{-1}`) and
   computes `chi(T^2) = chi(empty) + 1 - 2 + 1 = 0` from clause (ii) of the in-run batch-7
   `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions`, citing
   the published A-page CW definitions and `def-euler-characteristic-of-a-finite-cw-complex`.
   Hatcher Chapter 0, printed pp. 5–6 backs the cell structure (new coverage row; coverage
   now 47 harvested rows) and a new ledger row records the added in-run dependency. A
   manifest-wide scan confirms no other batch-8 dependency reaches a B-only item.
   (b) *Inaccurate axiom sentence.* The strategy of
   `lem-local-fixed-point-index-splits-under-perturbation` claimed that AC enters through
   the in-run DT-13 additivity lemma, which assumes no choice principle; the sentence was
   corrected to state that the regular value and bump are selected explicitly in the chart
   (the in-run lemma's strategy uses only Sard, the density of regular values and a bump
   function). The item's readiness record was re-recorded.
   (c) *Countable-choice carry.* Six items whose arguments use countable-choice-assuming
   suppliers (the oriented intersection number and factor interchange, the geometric
   intersection pairing, or the Morse/handle finite-CW comparison) now declare
   `def-countable-choice`; five of them carry it alongside `def-axiom-of-choice`, while
   `lem-the-local-intersection-sign-of-the-graph-and-diagonal` assumes only countable
   choice. See §4.

## 3. Dependency and readiness verification

Method: every declared dependency was read against the actual current supplier text — the
published `items/*.md` files for the 82 out-of-run suppliers and the in-run batch-2/4/7
manifest statements for the 13 cross-batch edges (all 26 verified rows carry the exact
interface read in their evidence strings). Checked per item: hypothesis match, direction of
the used implication, dimension and parity conventions (the `(-1)^n` negation law, the
`sign det(I-Df)` convention, the factor-order sign `(-1)^n` for `(Delta, Gamma)` versus
`(Gamma, Delta)`), the compactness/closedness and isolatedness hypotheses, and the choice
strength of each supplier. Every declared dependency resolves; no missing, circular,
forward or inadequate dependency was found; no item consumes a Recorded
(`proved_here: false`) result; no proof or prerequisite path reaches
`deferred-set-theory-beyond-choice`. The exact substitution `T^2` cell-count route of the
torus example and the `1 - 2 + 1 = 0` arithmetic were re-derived; the graph/diagonal
determinant shear `det [[I, I], [Df, I]] = det(I - Df)` was re-derived; the transfer
identities `pi_* tau_* = 2`, `tau_* pi_* = 1 + tau_*` and the eigenspace splitting were
checked against Hatcher §3.G; the two-to-one fixed-point correspondence of the two lifts
was checked orientation-preserving and orientation-reversing point by point.

All 30 items carry a complete proof strategy with named suppliers and met prerequisites;
all 30 readiness records are `ready`, none escalated. Twenty-eight re-record operations
were performed during the three repairs of §2.7 (the two content-edited items, the eleven
transitive consumers of the first repair, and the fifteen transitive consumers of the
axiom carry — overlapping sets of records), each after re-reading the declared
dependencies. Final state:
`node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` reports 579 items and 564
ready with 25 open work rows, **none touching batch 8**.

## 4. Axiom-strength bookkeeping

- Items declaring the full Axiom of Choice (`def-axiom-of-choice` in `deps`; the strategies
  identify the use): 14 — `def-algebraic-lefschetz-number` (finite-dimensionality of
  `H_*(M;Q)` through the published excellent-Morse existence corollary),
  `lem-diagonal-class-expansion-gives-the-alternating-trace` and
  `lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points` (the intersection-theoretic
  Poincare duality theorem), `lem-lefschetz-numbers-of-the-two-lifts-sum-to-twice-the-base-lefschetz-number`
  (finiteness in `L`), `thm-lefschetz-hopf-index-formula`, `cor-lefschetz-number-is-homotopy-invariant`,
  `thm-lefschetz-fixed-point-theorem` (also the Whitney approximation),
  `cor-lefschetz-number-of-the-identity-is-the-euler-characteristic`,
  `rem-lefschetz-index-formula-recovers-poincare-hopf`, and all five B-page items (inherited
  through the definition of `L`).
- Items declaring countable choice (`def-countable-choice`): 7 — the six items whose proof
  invokes the countable-choice-assuming suppliers (`lem-the-local-intersection-sign-of-the-graph-and-diagonal`,
  `lem-diagonal-class-expansion-gives-the-alternating-trace`,
  `lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points`,
  `def-algebraic-lefschetz-number`, `thm-lefschetz-hopf-index-formula`,
  `rem-lefschetz-index-formula-recovers-poincare-hopf`) plus `thm-lefschetz-fixed-point-theorem`
  (Whitney approximation). `lem-the-local-intersection-sign-of-the-graph-and-diagonal`
  assumes only countable choice, not full AC; the other six carry both.
- Choice-free items (15): the local index machinery
  (`def-local-fixed-point-index`, `lem-local-fixed-point-index-is-invariant-under-diffeomorphism-conjugation`,
  `lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent`,
  `thm-index-of-a-nondegenerate-fixed-point`, `lem-local-fixed-point-index-splits-under-perturbation`),
  the local algebra (`def-nondegenerate-fixed-point`, `lem-graph-transversality-is-fixed-point-nondegeneracy`),
  the bookkeeping lemmas (`lem-fixed-points-are-graph-diagonal-intersections`,
  `lem-a-closed-discrete-subset-of-a-compact-space-is-finite`,
  `def-global-geometric-lefschetz-number`, `rem-isolated-does-not-imply-nondegenerate`),
  the double-cover/transfer lemmas (`lem-the-orientable-double-cover-of-a-smooth-manifold`,
  `lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover`,
  `lem-fixed-point-sum-of-the-two-lifts-of-a-self-map`) and
  `prop-small-time-flow-fixed-point-indices-agree-with-vector-field-zero-indices`. Their
  proofs are kept choice-free; no item assumes the negation of any consequence of AC, and
  no item consumes a choice principle stronger than AC.

## 5. Sources, stamps and coverage

Three sources were downloaded in full, read at the cited locators, and stamped with
`source-fetch-check --stamp` on 2026-10-04; the fourth is documented as dropped. The
remaining A-page requirement of two independent treatments is met by GP (textbook) and the
Stanford notes (lecture notes), with Hatcher as the third full book treatment for the
double-cover/transfer and CW material.

| source | kind | bytes | sha256_16 | batch-8 use |
|---|---|---|---|---|
| Guillemin–Pollack, *Differential Topology* (236 pp.) | textbook | 3472576 | `e4d815443ae77128` | global/local Lefschetz numbers, the splitting proposition, homotopy invariance, `L(id)=chi`, the vector-field bridge §5, the examples |
| Ionel, notes by Lin, Stanford Math 215B (63 pp.) | lecture-notes | 543433 | `7ac76c813f493ed7` | Lemma 150 (Kunneth diagonal splitting), nondegenerate fixed points and `sign det(I-df)`, Theorem 155, Corollary 156, Examples 157–158 |
| Hatcher, *Algebraic Topology* (560 pp.) | textbook | 8121741 | `bebb3032bf9021b9` | Chapter 0 pp. 5–6 (torus CW structure), §3.3 pp. 234–235 (orientation double cover), §3.G pp. 321–322 (transfer) |
| Wong, *Lectures on Fixed Point Theory* (32 printed pp.) | lecture-notes | 236918 | `d13125f5b72e9c65` | dropped as a gate-valid source; its content was read via `curl -k` and supports six items |

**Wong source drop (required record).** `https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf`
serves an incomplete TLS certificate chain: six recorded `source-fetch-check` attempts (the
initial failure plus five retries) all fail with `UNABLE_TO_VERIFY_LEAF_SIGNATURE`, and the
HTTP URL 302-redirects to the same failing HTTPS endpoint. Six recovery searches were
recorded (alternate host, mirror, Wayback availability, CDX index, Save Page Now, plain
HTTP); no snapshot or alternate host exists. The document itself was retrieved once with
certificate verification disabled (236918 bytes, sha256
`d13125f5b72e9c656d6fd9c58cc3c93e5333473a53d1d991e192cb2fad62bab1`), its text read in full
at the cited pages, and every result used from it is independently present in the two
stamped treatments. `source_resolution` is recorded on the source row with
`status: dropped`, `decided_by: step-1-scaffolder`, `confidence: certain`, the attempts and
searches above, and an `alternatives` argument (with deps) for each of the six
Wong-backed items: `def-local-fixed-point-index`,
`thm-index-of-a-nondegenerate-fixed-point`, `def-algebraic-lefschetz-number`,
`thm-lefschetz-hopf-index-formula`, `ex-degree-d-map-on-a-sphere-has-lefschetz-number-one-plus-minus-d`
and `cex-vanishing-lefschetz-number-allows-fixed-points`. The drop waives the source gate
for those results, not their mathematical coverage or dependency review.

Coverage: 47 harvested results over the two pages — 35 `included`, 2 `inline`, 9
`out-of-scope`, 1 `already-published` (Brouwer for the disk, published elsewhere), 0
`deferred`; every decline carries a specific reason (surface classification, DT-11/DT-12
exercise material, the Lefschetz zeta function, the index axioms, Nielsen theory, the
chain-level polyhedral proof, transfer applications to lens spaces). Every A-page item has
at least one harvest row; `source-backing` reports 25 authored results, all still backed by
an openable source or a documented alternative argument.

## 6. Command results (actual)

| check | result |
|---|---|
| `coverage-checklist research/frontier-41-ha-dt-29-batch-8.coverage.json --require-destination` | 2 pages, 47 harvested results, 0 errors, 0 warnings |
| `source-fetch-check --coverage …` (check mode) | 5/6 source rows fetch-verified; 6/6 resolved (1 documented drop) |
| `url-sweep --coverage … --out … --recover --fail-on-dead` | 3/3 URLs live, 0 failed, 0 recoverable, 0 suspect; 4 citation decisions (1 documented source drop) |
| `source-backing --coverage … --liveness …` | 25 authored results; every one still backed by an openable source or documented alternative |
| `manifest-deps` (all 29 run manifests) | 579 items, 0 normalized, 0 errors |
| `content-policy --manifest-only` (all 29 run manifests) | 579 scoped items, 0 errors, 0 warnings |
| `item-dependency-levels check --run` | exit 1 only for 10 empty inventories of other batches; 0 findings touching batch 8; all 30 labels match the computed values (max 13) |
| `step1-decisions check --run` | 579 items / 564 ready run-wide; 25 open work rows, **0 touching batch 8** |
| `frontier-dependency-ledger refresh --run` | refreshed and deduplicated; 431 edges, 0 orphaned; batch 8 reviewed with 27 rows (26 verified, 1 removed, 2 page-level) |
| `validate-plan research/plan-spec.json` | exit 0 (acyclic order; no item-level cycles, forward references, B-page dependencies or unresolved ids) |
| `extcheck` | exit 0 (every recorded-not-proved statement is a cited remark and every consequence is marked) |
| `fwdcheck` | exit 0 (all forward references declared, strictly forward and closed) |
| `drift-review-check --run … --before-apply` | 29 pages reviewed, decisions valid; this page `no-drift` (`research/frontier-41-ha-dt-29-alpha-step1-drift.md` L49–53) |
| `audit-manifest research/frontier-41-ha-dt-29-batch-8.pages.json` | 30 `missing-source` defects, one per scaffold id, because no batch-8 item is authored yet; expected at Step 1, not a scaffold defect |
| `depcheck` (repo-wide, published content) | FAIL: pre-existing published audit/verification debt (e.g. `published-unaudited`); 0 findings mention a batch-8 id; 4 findings touch published prerequisites of this batch (see §7) |

The whole-run `frontier-dependency-ledger --require-reviewed` still exits 1 because batches
9, 12, 16, 20, 23 and 24 have not yet supplied inputs or emptied their inventories; that is
the operator/engine reconciliation step, not a batch-8 blocker. Neither a worker exit nor a
readiness record is independent mathematical approval: Step 3 owns the authoring review and
the Step-3 gate.

## 7. Published items examined; findings for the canonical ledger

All 82 published suppliers in the closure were read at statement level and their frontmatter
checked. No mathematical defect was found in a statement actually consumed, and no
published content was edited. Mechanical findings for owner reconciliation:

| published item (page) | finding | publication state / planned supplier | repair strategy |
|---|---|---|---|
| `def-local-oriented-intersection-sign`, `def-oriented-intersection-number`, `thm-intersection-number-under-factor-interchange` (all `oriented-and-mod-two-intersection-numbers`) | depcheck `published-unaudited`: neither `verification.audited` nor `verification.verified` is set and there is no local repair receipt | published; mathematics unchanged, no new supplier needed | add the missing audit/verification receipt (or a local published-repair receipt) through the owner's published-repair process; the Statements and Proofs need no change. They are consumed by `lem-the-local-intersection-sign-of-the-graph-and-diagonal` |
| `def-rationals` (`construction-of-r-via-cauchy-sequences` and `construction-of-r-via-dedekind-cuts`) | depcheck `multi-home` warning (legal per SCHEMA; dependency tools use the first home) | published | none required; recorded so it is not mistaken for a defect |

The in-run suppliers of batches 2, 4 and 7 are scaffolded drafts, not published items; their
statement-level interfaces are checked in the cross-batch rows of §1 but they are not
publication defects, and none of them may be treated as published by Step 3.

## 8. Step-3 caveats

The following are the batch's known places where Step 3 must verify the written proof in
full; they are scaffold-level assembly notes, not known gaps:

1. `lem-local-fixed-point-index-splits-under-perturbation`: the bump/support bookkeeping of
   `g = f + rho a` (fixed points solve `d(u) = a` where `rho = 1`, no solutions where
   `d != 0`, `|a|` below the positive minimum of `|d|` on the compact annular region), and
   the affine homotopy's support inside `V`.
2. `lem-the-local-intersection-sign-of-the-graph-and-diagonal` and
   `lem-diagonal-class-expansion-gives-the-alternating-trace`: the ordered-pair factor sign
   `(-1)^n` against GP's `(Delta, Gamma)` ordering, and the Koszul signs in the Kunneth
   expansion of the graph and diagonal classes (checked examples on `S^1` and `S^2` in the
   strategy).
3. `lem-lefschetz-numbers-of-the-two-lifts-sum-to-twice-the-base-lefschetz-number`: the
   rational-chain transfer is canonical (the sum over the full two-element lift set), so no
   selection is needed; Step 3 should check the chain-level identities
   `pi_# tau_# = 2 id`, `tau_# pi_# = id + tau_#` and the eigenspace decomposition against
   Hatcher §3.G, and that only rational coefficients are used (no integral transfer claim).
4. `thm-lefschetz-fixed-point-theorem`: the tube radius `rho`, the uniform separation
   `delta = min |f(x) - x| > 0` and the constants `eps < min(rho/2, delta/4)`,
   `|r(y) - f(x)| <= 2|y - f(x)|` in the tubular neighbourhood, and the segment
   homotopy `r((1-t) f(x) + t H(x))`.
5. The B-page chart computations: the `z^d` examples (local indices `+1` at `0`, `infinity`
   and the simple roots, `det(I - Df) = (1-d)^2 > 0`), the degenerate `z + z^2` example
   (degree 2, index 2 at 0, index +1 at infinity in the `w = 1/z` chart), and the CW
   cell-count `chi(T^2) = 1 - 2 + 1 = 0` via clause (ii) of the batch-7 additivity
   proposition.
6. The axiom declarations: Step 3 must keep the AC/AC_ω statements of §4 in the item
   contracts, keep the 15 choice-free items choice-free, and carry the assumptions exactly
   as recorded.

Owner/operator reconciliation and the full engine gate follow construction; a readiness
record is not a mathematical acceptance.


Root final local dimensional reconciliation (2026-10-05): def-local-fixed-point-index supplies n>=1. The geometric homotopy-invariance clause and the twisted-diagonal geometric evaluation now explicitly carry this premise; algebraic trace and cohomological diagonal statements still include dimension0. Precheck2/2, proof-layout9steps/0defects, five affected strict contracts5/5 pass. No broad additional review or native author-result alteration. Owner resolves stale original supplier escalations in the final stable supplier-first certification pass; no new rereview wave is required.
