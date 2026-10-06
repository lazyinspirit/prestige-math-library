# Step 3a scope review — pair `isotopy-extension-and-embedding-theory-beyond-whitney`

- Run: `frontier-41-ha-dt-29` (stage `3a-scope`), dispatch label
  `step3a-pair-isotopy-extension-and-embedding-theory-beyond-whitney-a6b07c6097836b93`
- Role: alpha (scope reviewer only — not owner, not item author)
- A page: `isotopy-extension-and-embedding-theory-beyond-whitney` (batch 19, order 569,
  `differential-topology`; 19 items: 3 definitions, 8 lemmas, 1 theorem, 3 corollaries,
  1 proposition, 3 remarks)
- B page: `isotopy-extension-and-embedding-theory-beyond-whitney-examples` (batch 19,
  order 570; 5 items: 1 lemma, 3 examples, 1 counterexample)
- Decision: **`sufficient`**
- Date: 2026-10-06.

This report decides scope only. It is not an item approval, not a proof judgement, and
not an owner record. No scaffold, manifest, coverage, item or library file was edited.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-differential-topology-track.md` DT-27
(lines 1376–1415; summary row line 56; hard-proof-closure paragraph at 1404–1408),
binding `requires` array §12.4 (line 2243), DT-27 repair §12.5 (lines 2310–2316),
not-supplied leaf invariant §12.1 (lines 2030–2046), scope-boundary table §6
(lines 284–307, rows "Whitney immersion/embedding and tubular neighbourhood theorems"
and "knot concordance and low-dimensional surgery"). Registry
`research/plan-spec.json` (orders 569/570); scope ledger
`research/frontier-41-ha-dt-29-scope-ledger.json`; scaffold
`research/frontier-41-ha-dt-29-batch-19.pages.json`; coverage
`…-batch-19.coverage.json`; batch notes `…-batch-19.notes.md`; cross-batch edges
`…-batch-19.cross-batch-dependencies.json`; owner direction
`research/frontier-41-ha-dt-29-owner-authoring-direction.md`; Step-1 drift verdict
`research/frontier-41-ha-dt-29-alpha-step1-drift.md` (DT-27: no-drift).

Intended subject: the ambient side of embedding theory beyond the Whitney existence
theorems — smooth isotopies/diffeotopies and the isotopy extension theorem with its
relative, boundary-stratum and general forms; uniqueness of tubular neighbourhoods up
to ambient isotopy; diffeomorphism of complements; then the obstruction side —
self-transverse immersions and their double point locus, the high-codimension embedding
upgrade, Whitney disjunction of algebraically cancelling double points in the
complementary ($2m$-dimensional target) range, the primary double point obstruction,
and the recorded boundaries (knotting surviving characteristic-class tests;
Haefliger–Weber deleted-product classification in the metastable range; failure of
extension for noncompact sources).

Intended role: DT-27 is the "isotopy and obstruction theory beyond" pair that sits
between DT-22 (Whitney trick), DT-25 (Smale–Hirsch), DT-26 (regular homotopy/eversion)
and DT-28 (characteristic-class obstructions), and it consumes the published DG
tubular-neighbourhood/flow/transversality pages. Declared consumer: only
`characteristic-class-obstructions-to-immersions-and-embeddings` (batch 20, order 571),
whose remark `rem-characteristic-class-vanishing-is-only-necessary-for-embedding` and B
counterexample `cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic`
both depend on `thm-isotopy-extension` and cite `rem-metastable-embedding-classification-…`;
both exist on this A page. The B page is a genuine leaf (consumed by nothing, including
no A page and no other B page; verified below). No page-specific owner direction or
owner scope receipt existed for this page when this review was recorded; the owner
direction file touches only the AT support pair and DT-19.

## 2. Design-to-manifest mapping

All 16 designed A rows and all 4 designed B rows are realized, with the two deviations
that the binding plan itself mandates or permits (both recorded by the Step-1 beta in
`…-batch-19.notes.md`).

| design row (DT-27) | manifest item | note |
|---|---|---|
| A1 definition of isotopy/diffeotopy/ambient isotopy | `def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy` | also reserves "regular homotopy" for immersions, as the design requires |
| A2 velocity field along the image | `lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image` | track is a closed embedded submanifold (compact source) |
| A3 extension over a tube | `lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood` | includes the boundary-stratum tangency and support clauses |
| A4 compactness/cutoff | `lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field` | constant-near-ends and prescribed-neighbourhood support |
| A5 global time-one flow | `lem-the-extended-time-dependent-field-has-a-global-time-one-flow` | consumes the published compactly-supported evolution theorem |
| A6 isotopy extension theorem | `thm-isotopy-extension` | compact main case + relative form + boundary stratum + general isotopies (Hirsch 1.3–1.4 structure) |
| A7 complements diffeomorphic | `cor-isotopic-embeddings-have-diffeomorphic-complements` | includes the extension-of-embedding clause (Hirsch 1.5, Exercise 16) |
| A8 tube uniqueness up to ambient isotopy | `cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy` | strengthens the published DG germ-uniqueness |
| A9 self-transverse immersion / double point locus | `def-self-transverse-immersion-and-double-point-locus` | product map off the diagonal transverse to the diagonal |
| A10 dimension count $2m-n$ | `lem-double-point-locus-has-expected-dimension-two-m-minus-n` | negative-dimension case empty; no finiteness asserted |
| A11 genericity corollary | split into `lem-a-self-transverse-immersion-has-no-double-points-when-n-is-greater-than-two-m` + `cor-a-proper-injective-immersion-is-an-embedding` | exactly the §12.5 mandated split; optional genericity corollary **not** retained, which §12.5 permits |
| A12 Whitney disjunction | `prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range` | stated in the complementary range ($m\ge3$, target $2m$); pairing/null-homotopy hypotheses printed; no metastable cancellation claimed |
| A13 primary double point obstruction | `def-primary-double-point-obstruction-to-removing-self-intersections` | mod-two count, oriented count for $m$ even, group-label refinement, non-invariance caveat |
| A14 vanishing is not classification | `rem-vanishing-primary-double-point-and-characteristic-obstructions-do-not-classify-embeddings` | knotting witness and deleted-product boundary recorded |
| A15 metastable boundary | `rem-metastable-embedding-classification-requires-additional-deleted-product-machinery` | `proved_here:false`, `not-supplied`, non-load-bearing, §12.1 orientation leaf |
| A16 compact-source/proper-support guard | `rem-isotopy-extension-needs-compact-source-or-proper-support-control` | knotted-line counterexample; bounded-velocity substitutes |
| B1 visible isotopy of an unknotted circle | `ex-ambient-isotopy-of-an-unknotted-circle-in-r-three` | tests `thm-isotopy-extension` in the simplest case |
| B2 isotopic submanifolds: normal bundles and complements | `ex-isotopic-submanifolds-have-isomorphic-normal-bundles-and-complements` | tests the two corollaries |
| B3 regularly homotopic but not isotopic knots | substituted by `cex-the-reflected-sphere-embedding-is-regularly-homotopic-but-not-isotopic-to-the-standard-one` | see §5; same phenomenon ("regular homotopy strictly coarser than isotopy"), provable instance $S^2\subset\mathbb R^3$ |
| B4 double point dimension count for surfaces | `ex-double-point-dimension-count-for-surfaces-in-four-and-five-space` | tests A10/A11 and why dimension four is critical |

Two local prerequisites were added on the A page (`lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold`
for A9/A10; `lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks`
for A12) and one on the B page (`lem-an-ambient-isotopy-preserves-the-orientation-of-an-invariant-round-sphere`
for the substituted B3). These are supports for designed claims, not scope additions.
The canonical heading harvest §9.4 (H129–H132) proposes the same item set modulo the
§12.5 split; nothing in the design's A/B inventory is dropped or narrowed.

## 3. Source coverage

- Five independent treatments were fetched as full text and read at exact locators
  (Hirsch Ch. 8 §1 pp. 177–183 incl. Exercises 3, 7, 9, 10, 11, 16, from a Wayback
  recovery of the dead plan URL; Wall §§6.2–6.4 pp. 169–192, Wayback recovery;
  Chaidez Prop. 2.38/Thm 2.39 pp. 35–36; Skopenkov §§1–3 pp. 2–20 at the `/pdf/`
  access point; the UCR isotopy-extension handout, complete 14-page document).
- The plan's Juhasz copy is login-gated and was **not** read; the two results its
  locators were to support (isotopy extension; Whitney trick) are covered by the
  fetched Hirsch/Wall/Chaidez/UCR treatments, and the gap is recorded in the batch
  notes. No harvested result of this pair rests on an unread source.
- Coverage file: A page 5 sources / 53 rows (24 included, 5 inline, 8 deferred,
  14 out-of-scope, 2 already-published), B page 2 sources / 6 included rows; all 59
  rows carry dispositions. The 8 deferred rows name destinations (DT-25, DT-22, or
  this page's recorded metastable boundary); the 2 already-published rows are inherited
  DG results (`thm-weak-whitney-immersion-theorem`, `rem-strong-whitney-embedding-theorem`).
  `coverage-checklist --require-destination` reports 0 errors, 0 warnings.
- The deferred Wall §6.4 Lemma 6.4.1 and Theorems 6.4.8–6.4.9 resolve to this page's
  recorded boundary (A15); that is exactly the design's "source the Haefliger–Weber
  boundary but do not make it load-bearing".

## 4. Prerequisites (unmet-prerequisite check)

- **Page level.** The A page's `requires` array equals the §12.4 exact array. DT-25
  (batch 17) and DT-22 (batch 14) are earlier in-run scaffolds; `sard-theorem-and-transversality`,
  `whitney-embedding-tubular-neighbourhoods-and-approximation` and
  `vector-fields-flows-and-lie-derivatives` are published
  (`library/differential-geometry/…`). The B page requires only its own A page.
- **Item level.** All 24 `deps` arrays resolve: 43 distinct published dependencies,
  all with `status: published`; and in-run suppliers in batches 2, 14, 17, 18, 19.
  All 92 `[[…]]` citations in the 24 statements/strategies resolve too: 56 point to 26
  distinct in-run items (batches 2/14/17/18/19, all earlier or in-batch) and the rest
  to published items. There is no reference to any batch later than 19 and no
  forward/self/cyclic edge; `manifest-deps` reports 24 items, 0 errors.
- **Confirmed unmet prerequisites: none.** No prerequisite required by any scaffolded
  claim on this pair is absent from both the published library and the current
  scaffold. The design's DT-25/DT-22/DG inputs are all present; the item-level edges
  that go beyond the §12.4 page array (batch 2's
  `def-self-intersection-number-of-an-oriented-submanifold`; batch 14's Whitney-trick
  items; batch 18's `thm-smale-classification-of-sphere-immersions-in-euclidean-space`;
  batch 17's `def-regular-homotopy-of-immersions` and
  `cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes`) are all
  present in the current scaffold and are recorded as `open` in
  `…-batch-19.cross-batch-dependencies.json`. The DT-26 edge is an item-level edge of
  the B counterexample beyond the §12.4 array; the array was set "exactly as printed",
  so this is a plan-conformance note for the owner, not an unmet prerequisite.
- **B-leaf and consumer checks.** No item anywhere depends on a batch-19 B item and no
  earlier-batch item cites a batch-19 A item; batch-20's DT-28 pair consumes only
  `thm-isotopy-extension` (dep) and cites `rem-metastable-…` (citation only, no dep
  edge). `rem-metastable-…` has no `deps` consumer anywhere, as §12.1 requires.
- **Uncertainty (recorded, not a blocker).** The in-run suppliers of batches 2, 14, 17,
  18 are scaffolds only — not authored or published — so their exact hypotheses
  (DT-22 clean-disk range $a,b\le m-3$ / complementary branches; DT-26's classification
  clause for $m=2,n=3$) must be re-read against these items at Step 3b before the
  consuming proofs (A12, A13, the substituted B3) are accepted. This is a supplier
  verification risk, not a missing input.
- **Evidence-state flags (not scope omissions).** Repo-wide `depcheck` flags 3 of the
  43 published direct dependencies as `published-unaudited`
  (`cor-negative-expected-dimension-generic-intersections-are-empty`,
  `def-local-oriented-intersection-sign`, `def-oriented-intersection-number` — all
  pre-existing frontier-38-owner-30 publications with judge markers but no
  audited/verified marker). The batch notes additionally record the published
  duplicate `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy`
  (not consumed here; this page builds the theorem in the design's stronger form).
  Recommended owner action if desired: record the already-completed Step-5 evidence on
  those published items; no statement or proof change is proposed, and neither finding
  affects the scope of this pair.

## 5. Scope deviations, boundaries and uncertainty

1. **Substituted B3 (recorded conflict).** The design asks for
   `cex-regularly-homotopic-knots-need-not-be-isotopic-as-embeddings` — circle
   embeddings in $\mathbb R^3$ that are regularly homotopic but not isotopic. Every
   provable non-isotopy witness for circle embeddings needs knot-theoretic invariants
   (trefoil complement group, Alexander-type data) that this run's closure does not
   contain, and the plan's §6 scope boundary assigns low-dimensional knot invariants to
   a dedicated track. The batch therefore proves the same phenomenon in
   `cex-the-reflected-sphere-embedding-is-regularly-homotopic-but-not-isotopic-to-the-standard-one`
   ($S^2$ vs. its reflection in $\mathbb R^3$; regular homotopy via DT-26, non-isotopy
   via this page's own extension theorem and orientation), and records the $S^1$-knot
   instance as a cross-track boundary rather than claiming it. The design's "For"
   clause ("distinguishes theories") is preserved; the topic is not silently dropped.
   Owner option (not required for scope): enrich B3 when a knot track supplies the
   invariant, or add the declined Hirsch Exercise 10 (homotopic embeddings are isotopic
   in the range $1+\dim V>2(1+\dim M)$) as a "uniqueness beyond Whitney" example.
2. **Not-supplied leaf.** A15 records, but does not prove, the Haefliger–Weber
   classification; this is mandated by §12.1 and matched by the coverage deferrals of
   Wall §6.4. No mathematical consumer depends on it.
3. **Declined rows.** The out-of-scope dispositions (Hirsch Exercise 7(b), 10, §8.2,
   §8.3 Cerf–Palais; Wall 6.3.4 and the Stiefel/skew-map connectivity; Skopenkov 2.1.a,
   2.2.b, 2.3, 2.8.a and the link/knotted-torus classifications) are consistent with
   the design and the plan's §6 boundary; none hides a claim the page uses. The two
   `already-published` rows are inherited DG results.
4. **Interpretive note.** The disjunction proposition is confined to the complementary
   range (self-transverse immersion of a closed $m$-manifold, $m\ge3$, into a
   $2m$-manifold). This is what the design's "stable range" means here; the design's
   high-codimension upgrade is delivered by the split A11, not by over-reading the
   proposition. No metastable cancellation is claimed.

None of items 1–4 narrows the pair below the designed scope; the pair's definitions,
results and examples adequately cover the intended subject, with the boundaries
recorded rather than fabricated.

## 6. Mechanical checks rerun 2026-10-06

| Check | Result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-19.pages.json` | 24 items, 0 normalized, 0 errors |
| `node tools/coverage-checklist.mjs …batch-19.coverage.json --require-destination` | 2 pages, 59 harvested results, 0 errors, 0 warnings |
| `[[…]]` citation resolution scan over all 24 items (statements + strategies) | 92 references, 0 unresolved; no forward edges; no B-item consumer |
| dependency-status scan of the 43 distinct published direct deps | all files exist, all `status: published`; 3 `published-unaudited` (evidence-state only) |
| batch-19 Step-1 readiness records | 24 of 24 present, all `ready` |
| batch-20 (DT-28) consumer edges into this pair | 2 item deps on `thm-isotopy-extension` + 1 citation of `rem-metastable-…`; all supplied |
| owner/scope receipts for this page | none existed before this review; no owner decision to respect |

## 7. Decision

Record `sufficient` for `isotopy-extension-and-embedding-theory-beyond-whitney` with this
report path as the scope evidence. No owner scope action is required; Step 3b authoring
must re-read the exact statements of the batch-2/14/17/18 suppliers it consumes and keep
the metastable remark non-load-bearing.
