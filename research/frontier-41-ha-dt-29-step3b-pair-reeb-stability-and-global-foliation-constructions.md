# Step 3b — A/B pair `reeb-stability-and-global-foliation-constructions` (+ examples)

- Run: `frontier-41-ha-dt-29`; dispatch
  `step3b-pair-reeb-stability-and-global-foliation-constructions-bfcc42e757dd4432`
  (role `alpha-high`); batch 22; category `differential-topology`; design block DT-30.
- A page `reeb-stability-and-global-foliation-constructions` (order 575, 44 items);
  B page `reeb-stability-and-global-foliation-constructions-examples` (order 576, 5 items).
- **Handoff status: complete for this dispatch.** All 49 owned items are authored and
  carry current Step-3 item decisions (44 `accept`, 5 `repaired`, 0 `escalate`); both
  pages, the batch manifest, coverage, proof contracts and cross-batch inputs are
  present and mutually consistent. No item or page of this pair is escalated.

Entry state (2026-10-05 16:44 UTC). Two earlier dispatches for this pair had failed on
missing artifacts (7 files). A **constructive author-completion pass** then wrote the
body of the pair (its durable record is
`research/frontier-41-ha-dt-29-batch-22.author-completion-checks.json`, checked
16:04:58 UTC, and its handoff text is preserved in Appendix A), and root refreshed the
pair scope to `proceed` at 16:40:55 UTC (scope hash
`ec3812fc9500ef3441c003a29f03ccd1bcf6e1a3f3c56c4521e0dfdd6e91b206`, still current —
§8). No item decision existed for any of the 49 items, which is what this dispatch
audited and recorded.

## 1. Owned outputs on disk

| output | location |
| --- | --- |
| 49 item files (44 A + 5 B) | `items/<id>.md` — every ID of the dispatch list, all `status: draft`, `origin: pipeline` |
| 2 pages | `library/differential-topology/reeb-stability-and-global-foliation-constructions{,-examples}.md` (draft; item/example lists byte-match the manifest) |
| batch manifest | `research/frontier-41-ha-dt-29-batch-22.pages.json` (49 entries; item file deps mirror it exactly, checked after this pass) |
| coverage | `research/frontier-41-ha-dt-29-batch-22.coverage.json` (2 pages, 109 harvested results, 13 sources, 2 documented drops) |
| proof contracts | `research/frontier-41-ha-dt-29-batch-22.proof-contracts.json` (49/49, strict clean) |
| cross-batch input | `research/frontier-41-ha-dt-29-batch-22.cross-batch-dependencies.json` (37 rows, all `verified`) |
| item decisions | `research/frontier-41-ha-dt-29-step3b-review-<id>.json` × 49 |
| this report | `research/frontier-41-ha-dt-29-step3b-pair-reeb-stability-and-global-foliation-constructions.md` |

The 49-item inventory is exactly the inventory covered by the owner scope receipt; this
pass added and removed no item ID.

## 2. Method

Read before editing: `CLAUDE.md`, `SCHEMA.md`, the dispatch order, the DT-30 design block
(`research/plan-differential-topology-track.md` L1497–L1538, §8 L1680, §9.5
L1859–L1863, §11.4 L2009–L2012, §12.4 L2255, §12.5 L2331), the Step-3a review
`research/frontier-41-ha-dt-29-step3a-pair-reeb-stability-and-global-foliation-constructions.md`
(findings F1–F4), the batch-22 scaffold notes, the owner authoring direction and scope
ledger, the batch-21 supplier manifest and the authored batch-21 items actually
consumed, the batch-23 consumer rows, and the full text of every one of the 49 items
with its suppliers. The Calegari monograph (author-hosted PDF) was re-fetched and read
at the cited locators: §4.2 (printed pp. 140–143, Reeb stability and the limit-of-closed-
leaves argument), §4.3 Example 4.7 (Reeb component), and §2.16.2 Theorem 2.119 with its
complete proof (printed pp. 106–107).

Every item was checked for: statement completeness and hypothesis preservation against
DT-30 (including the §12.5 binding repairs), validity of each numbered inference,
correctness of each supplier use against the supplier's actual current statement,
quantifier and well-definedness conditions (germ independence, chart-chain
independence, quotient/free-action hypotheses), empty/zero/one/degenerate cases, and the
exact Choice use. The five support lemmas added earlier for F1 (group-image closure), the
C¹ block, the finite-CW/rational-homology block, the closed-transversal block and the
ACω carriers were re-read end to end.

## 3. Repairs made by this pass

1. **`def-transversely-oriented-codimension-one-foliation`** — repaired a malformed
   comma-joined wikilink in the statement
   (`[[def-countable-choice-principle-for-foliation-pair, thm-smooth-partitions-of-unity-exist-on-manifolds]]`,
   a `link-unresolved` hard error in `depcheck`) into two links. The manifest statement
   snapshot was deliberately **not** changed (§8).
2. **`cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis`**
   — same repair for
   `[[def-countable-choice-principle-for-foliation-pair, lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite]]`.
3. **`lem-trivial-c1-holonomy-gives-a-saturated-product-neighbourhood`** — the proof used
   a "fact" that restated its own injectivity conclusion and a choice-dependent
   sequential compactness argument over a merely compact leaf. Replacement: a
   choice-free compactness argument — finite products of compact spaces, closed
   agreement set of the two continuous maps into the Hausdorff ambient manifold, and
   the finite-intersection property of the nested closed sets `E_n` — over `L x K`.
   The slip "slices ... are tangent to the foliation" was corrected to "transverse
   curves ... transverse to `F`" plus "slices land in single leaves". Six published
   general-topology dependencies were declared
   (`thm-finite-products-of-compact-spaces`,
   `cor-euclidean-closed-balls-and-spheres-are-compact`, `thm-compact-iff-fip`,
   `cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed`,
   `def-topological-manifold-without-boundary`, `def-hausdorff-space`), mirrored into
   the manifest, and the contract entry was regenerated.
4. **`lem-the-normal-model-map-restricts-to-a-diffeomorphism-onto-a-saturated-neighbourhood`**
   — same defect class in the key "injectivity on a small model" step, which asserted
   uniformity instead of proving it. Replacement: the same choice-free
   compactness/FIP argument applied to the compact central leaf of the model, using
   `thm-compactness-is-invariant-under-finite-sheeted-coverings` (the holonomy cover is
   a finite cover of the compact leaf), `thm-continuous-image-of-a-compact-space-is-compact`,
   `thm-finite-products-of-compact-spaces`, `thm-compact-iff-fip`, the agreement-set
   corollary and `def-hausdorff-space`/`def-topological-manifold-without-boundary`;
   dependencies mirrored into the manifest and the contract entry regenerated.
5. **`thm-thurston-stability-for-c1-interval-germ-groups-are-locally-indicable`** — the
   normalized-displacement step asserted that its countable sequence selection used no
   choice. The selection is now made canonically (the rational of least index in a
   fixed enumeration lying in the nonempty open set where the displacement is
   nonzero), so the claim that the theorem is choice-free is justified; contract entry
   regenerated.

No statement's mathematical content was changed by this pass; items 1–2 changed
wikilink syntax only, items 3–5 changed proofs, Facts and dependency lists only.

## 4. Checks actually run (results as observed)

| check | command | result |
| --- | --- | --- |
| precheck (explicit paths) | `node tools/tsx-run.mjs tools/precheck.mts <49 item paths>` | 39 checked (proof-bearing), 0 failing |
| proof layout (explicit paths) | `node tools/proof-layout.mjs <49 item paths>` | 49 items, 152 steps, 0 defects |
| proof layout, changed paths only | `node tools/proof-layout.mjs <the 5 changed item paths>` | 5 items, 14 steps, 0 defects |
| rendering | `node tools/rendercheck.mjs <49 item paths> <2 page paths>` | OK — 51 files; KaTeX/YAML clean |
| content policy | `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-22.pages.json` | 49 scoped items, 0 errors, 0 warnings |
| strict proof contracts | `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-22.proof-contracts.json --strict` | 0 errors, 0 warnings, 49/49 |
| contract quote fidelity | `node tools/citation-fidelity.mjs research/frontier-41-ha-dt-29-batch-22.proof-contracts.json --fail-on-missing-quote` | 292 citations; no quote-not-found; no widening candidate |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-22.pages.json` | 49 items, 0 normalized, 0 errors |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | no mismatch or cycle names a batch-22 item (the 21 run-wide errors are in concurrently authored other pairs) |
| plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; acyclic and consistent (my pages carry no item list pre-splice, see §8) |
| depcheck | `node tools/depcheck.mjs` | no finding (hard error or warning) names a batch-22 item or page; both former `link-unresolved` errors are cleared |
| audit manifest (all 31 batches) | `node tools/audit-manifest.mjs research/frontier-41-ha-dt-29-batch-*.pages.json` | 8762 relationships, 1 defect, in batch 3 (`the-whitney-trick-…` forward ref, in flight elsewhere); none in batch 22 |
| coverage | `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-22.coverage.json` | 2 pages, 109 results, 0 errors, the 2 documented low-yield warnings |
| cross-batch ledger (read-only collect) | `collect(root,'frontier-41-ha-dt-29')` | 37 batch-22 rows, all `verified`; every batch-22 consumer edge into batch 21 remains reviewed |
| item decisions | `checkStep3(final)` | 49/49 batch-22 items closed; pair scope closed |

## 5. Supplier reconciliation (batch 21 and batch 23)

The direct in-run prerequisite pair `foliation-holonomy-and-the-holonomy-groupoid`
(batch 21) is now fully authored. The batch-22 uses were re-read against the authored
statements, in particular: `def-holonomy-cover-of-a-leaf` (`Lhat = L~ / K`,
`p_* pi_1 = K`) for `lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group` and
`lem-transverse-holonomy-transport-…`; `def-holonomy-representation-and-holonomy-group-of-a-leaf`
for the finite-π₁ trivial-holonomy lemma, the finite-holonomy disk lemma and the normal
model; `def-local-transversal-to-a-regular-foliation` (embedded transversal with
`T_xM = D_x ⊕ T_xT`) for the disk/tranversal hypotheses; `prop-quotient-foliation-under-a-free-proper-foliated-action`
(free properly discontinuous action preserving a regular foliation) for
`def-finite-holonomy-normal-model` and `prop-mapping-torus-…`; and the covering-space
suppliers (`lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists`,
`thm-path-lifting-…`, `thm-homotopy-lifting-…`, `cor-deck-group-of-a-regular-covering`)
for the deck-group lemma. No supplier statement change was found that invalidates a
batch-22 use; no batch-22 consumer needs an escalation.

## 6. Choice accounting (exact)

- Pure definitions and the local C¹/germ, gluing, embedding and finite/CW items that use
  no selection are choice-free (`def-c1-*`, `lem-c1-foliated-atlas-…`, `lem-c1-germs-…`,
  `lem-compact-c1-foliation-leaf-…`, `lem-c1-holonomy-…`, `lem-gluing-…`,
  `lem-images-…`, `lem-axiom-of-choice-implies-countable-choice`,
  `lem-countable-choice-…`, `thm-thurston-…` after repair 5, and the two repairs of §3).
- The pair-local principle `def-countable-choice-principle-for-foliation-pair` (ACω) is
  the stated hypothesis of the local-stability items that select countably many plaque
  data, and of `lem-a-compact-connected-one-dimensional-manifold-…`,
  `def-transversely-oriented-…`, `def-foliation-tangent-…`, `lem-gluing-…`,
  `prop-gluing-two-reeb-components-…` and `prop-reeb-foliation-of-the-solid-torus-…`.
- Full AC is declared exactly where the finite-CW/rational-homology inputs are consumed:
  `lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex`,
  `lem-rational-homology-of-a-closed-smooth-manifold-is-finite-dimensional`,
  `lem-compact-c1-leaf-has-finitely-generated-fundamental-group`,
  `lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness`,
  `thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations` and
  `thm-reeb-thurston-stability-for-codimension-one-leaves`; full AC supplies the ACω
  inputs through `lem-axiom-of-choice-implies-countable-choice`, never the converse.
- Both injectivity repairs of §3 were deliberately made **choice-free** rather than
  weakening the lemmas with an extra choice hypothesis.

## 7. Step-3a findings F1–F4 rechecked against current inputs

- **F1 (missing group-image closure fact):** resolved. `lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite`
  is authored, registered on the A page and placed before its consumers; it is declared
  and used by `thm-thurston-…`, `thm-reeb-thurston-…`,
  `cor-finite-fundamental-group-…` and
  `lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-…`. The separately
  suggested smooth finitely-generated-π₁ corollary was not needed in that form: the
  closedness lemma consumes `lem-compact-c1-leaf-has-finitely-generated-fundamental-group`
  under the declared full AC instead.
- **F2 (B-page fibration example defects):** resolved. The current example uses the
  A convention (positive return `f^{-1}`), explicitly records that the torus leaf
  fundamental groups are infinite so the global theorem's finite-π₁ hypothesis is not
  satisfied, and proves the non-product bundle claim from the non-identity induced
  matrix on `π₁(T²) = Z²`; no false "theorem applies" sentence remains.
- **F3 (remark quotient citation):** the remark now carries its own local quotient-chart
  argument for the free involution `(x,θ) ↦ (−x,−θ)`. The recommended published
  supplier `thm-free-proper-action-quotient-manifold` is still not declared; the
  remark is prose (no contract) and its manifest statement snapshot was left untouched
  under the scope-hash policy of §8. Recorded here as a Step-5 presentation point, not
  a mathematical gap.
- **F4 (duplicate ACω carrier):** retained deliberately and now documented inside
  `def-countable-choice-principle-for-foliation-pair`: the pair-local ACω is the
  sequence form consumed by the foliation items, the published `def-countable-choice`
  states the same principle, and the retention (with its 113 cross-batch consumers)
  is an interface decision covered by the owner's current scope `proceed`. No consumer
  proof changes either way.

## 8. Open obligations, published concerns and residual uncertainty (honest)

1. **Batch-23 contract quotes invalidated by the two link repairs (mechanical,
   cross-group).** Fixing the malformed wikilinks changes the *exact text* of the
   statements of `def-transversely-oriented-codimension-one-foliation` and
   `cor-finite-fundamental-group-…`. Four entries in
   `research/frontier-41-ha-dt-29-batch-23.proof-contracts.json` quote the old text and
   now report `citation-quote-mismatch`: `lem-characteristic-disk-center-saddle-index-count`
   (F2), `lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar`
   (F1), `lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle` (F1),
   `lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier` (F9).
   **Remedy:** re-run
   `node tools/regen-contract-entries.mjs research/frontier-41-ha-dt-29-batch-23.proof-contracts.json <those four ids>`
   (or make the equivalent quote substitution) once that batch's writer has drained —
   its contract file was being rewritten concurrently during this dispatch (mtime
   16:55:43 UTC), so it was deliberately not touched from here. Batch-23 already had
   two unrelated quote mismatches for
   `lem-finitely-cornered-regular-plane-curve-separates-without-choice`, which are its
   own in-flight business.
2. **Manifest statement snapshot vs authored item text (deliberate).** For the two
   link-repaired items the batch manifest still stores the scaffold's comma-joined link
   text, because `scopeHash` is computed from the manifest statements and any change
   there would stale the owner's current `proceed` receipt. The item files (the
   rendered, checked content) are correct; the divergence is 2 wikilinks of syntax,
   not mathematical content. A future owner scope refresh or the Step-4 writer may
   mirror them.
3. **Pre-splice plan state (for Step 4).** `research/plan-spec.json` carries no item
   list yet for either page (page metadata — ids, kinds, orders 575/576, companion,
   `requires` — already matches the manifest exactly). The Step-4 splice must insert
   the manifest's 44 + 5 items; the one item added after the original scaffold
   inventory, `lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite`
   (a lemma on the A page consumed by A-page items), is exactly the case
   `authoredLocalAdditions` licenses once the Step-3 final check closes.
4. **External classification input.** `lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle`
   proves the smooth case from the published compact-1-manifold classification but
   consumes the *topological* classification of connected 1-manifolds by exact
   citation (Manifold Atlas Theorem 3.1 and §3.3 with its complete proof; MIT
   18.966/18.965 notes, Theorem 1.1). This is the topological input the circle leaf
   space of the global theorem needs; no in-library topological classification item
   exists. Recorded as a documented external input, not newly claimed source reading.
5. **Compressed-but-true arguments left for Steps 5–8** (I read each and believe the
   claims; the arguments are detailed but dense): the finite-chain smoothing and
   face-cancellation sketch in `lem-oriented-intersection-detects-nonvanishing-rational-homology`
   step 1.2; the compact-barrier and compact-generator detail in
   `lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness`
   steps 1.1–1.2 and 3.1; the transport-closure construction in
   `lem-trivial-c1-holonomy-…` step 1.1; the collar construction in
   `lem-compact-c1-leaf-has-finitely-generated-fundamental-group` step 1.2. No
   narrowed claim or missing hypothesis was found.
6. **Recorded source-depth exception (inherited from the design).** The general local
   finite-holonomy Reeb theorem has MMF §§2.3/2.5 only as an unavailable first-named
   treatment (documented drop with recovery attempts); the scaffold's proof route rests
   on Calegari §4.2, Mrowka §§20–23, Leiden (MMF-derived corroboration),
   del Hoyo–Fernandes and Santos. The codimension-one/sphere-leaf specialisations have
   two independent treatments. This limitation is preserved, not repaired, and is a
   Step-5 source-gate subject.
7. **Two pages carry only `draft` status** and no pathway placement yet; that is
   Step-9/pathway work, not this dispatch.

8. **Next action.** No further authoring work is owed on this pair. The engine may
   rerun the Step-3b gates for batch 22 at any time: every input named in §4 is green
   as of the end of this dispatch, and the 49 item receipts are current. The only
   cross-group follow-up generated here is the batch-23 quote refresh of item 1 above.

## 9. Decisions recorded (2026-10-05, this dispatch)

`node tools/step3-decisions.mjs record-item --run frontier-41-ha-dt-29` for all 49 items,
confidence 1, with the examined direct dependency IDs recorded per item: 44 `accept`,
5 `repaired` (`def-transversely-oriented-codimension-one-foliation`,
`cor-finite-fundamental-group-…`, `lem-trivial-c1-holonomy-…`,
`lem-the-normal-model-map-restricts-…`,
`thm-thurston-stability-for-c1-interval-germ-groups-are-locally-indicable`). The pair's
`checkStep3(final)` work list now contains no batch-22 item and no owner-held item for
this pair.

## 10. Completed IDs (all 49, all with current decisions)

A page (44): def-c1-germ-of-a-local-diffeomorphism-at-a-point, def-c1-regular-codimension-one-foliation-and-transverse-orientation, def-countable-choice-principle-for-foliation-pair, def-saturated-neighbourhood-of-a-leaf, lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite, def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary, def-stable-leaf-of-a-foliation, def-transversely-oriented-codimension-one-foliation, lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle, lem-axiom-of-choice-implies-countable-choice, lem-c1-foliated-atlas-preserves-plaque-equivalence-and-transverse-orientation, lem-c1-germs-of-local-diffeomorphisms-form-a-group, lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface, lem-countable-choice-sequence-and-product-formulations-are-equivalent, lem-gluing-manifolds-with-boundary-along-a-boundary-diffeomorphism, lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex, lem-a-non-closed-leaf-of-a-codimension-one-foliation-meets-a-closed-transversal, lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs, lem-germs-of-orientation-preserving-diffeomorphisms-of-the-line-at-zero-are-torsion-free, lem-oriented-intersection-detects-nonvanishing-rational-homology, prop-mapping-torus-foliations-realize-global-reeb-stable-examples, prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf, rem-transverse-orientability-is-load-bearing-in-the-global-codimension-one-form, thm-thurston-stability-for-c1-interval-germ-groups-are-locally-indicable, lem-compact-c1-leaf-has-finitely-generated-fundamental-group, lem-rational-homology-of-a-closed-smooth-manifold-is-finite-dimensional, lem-trivial-c1-holonomy-gives-a-saturated-product-neighbourhood, prop-gluing-two-reeb-components-gives-a-foliation-of-s-three, thm-reeb-thurston-stability-for-codimension-one-leaves, lem-finite-holonomy-acts-on-a-small-transverse-disk, lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group, def-finite-holonomy-normal-model, lem-transverse-holonomy-transport-is-well-defined-and-equivariant, lem-the-normal-model-map-is-a-foliated-local-diffeomorphism, lem-the-normal-model-map-restricts-to-a-diffeomorphism-onto-a-saturated-neighbourhood, thm-local-reeb-stability, cor-trivial-holonomy-gives-a-product-foliated-neighbourhood, cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis, lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented, lem-a-compact-holonomy-free-codimension-one-foliation-is-a-fiber-bundle-over-its-leaf-space, lem-compact-stable-leaves-form-an-open-saturated-set, rem-compact-leaf-does-not-mean-finite-holonomy-or-finite-fundamental-group, lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness, thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations

B page (5): ex-a-fibration-over-the-circle-as-a-global-stable-foliation, ex-finite-holonomy-mobius-normal-model, cex-a-reeb-component-has-a-compact-boundary-leaf-with-infinite-holonomy-behaviour, ex-product-foliation-near-a-compact-trivial-holonomy-leaf, cex-a-compact-leaf-with-infinite-fundamental-group-can-still-have-trivial-holonomy

No new item ID was created by this pass, and no declared item was deleted, rehomed or
renamed. The only new *declared suppliers* are the published general-topology items of
§3 (finite products of compact spaces, Euclidean closed-ball compactness, the
finite-intersection characterisation of compactness, agreement-set closedness,
Hausdorffness of manifolds and the finite-covering compactness theorem); no new item
was added to any batch inventory.

## Appendix A — predecessor constructive-pass handoff (preserved verbatim)

The text below was written by the earlier author-completion pass; it is kept here
because the file is not committed elsewhere. Its claims were re-verified where
indicated in §4–§8; where this report updates them, this report governs.

---

# Batch 22 constructive author-completion handoff

2026-10-06. This report replaces the obsolete interrupted checkpoint. Work was performed in `/home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29`, with no separate review wave, owner decisions, dispatch receipts, engine controls, or publication stamps.

## Actual deliverables

The latest DeepSeek result `alpha-high-step3b-pair-reeb-stability-and-global-foliation-constructions-8e5211c2ce29c529.result.json` reported exactly seven missing artifacts. All seven now exist: the closedness lemma, global theorem, transverse-orientation remark, circle-fibration example, both pair pages, and batch proof contracts. All original 48 items are retained. The previously authored local group-image lemma is now registered before its consumers, giving 49 items (44 A and 5 B). Actual authored dependencies and statements, dependency levels, page order, coverage projections, and batch-owned cross-batch supplier rows are synchronized.

Existing complete arguments were retained except for confirmed defects encountered on the global theorem's chain. No original item ID was dropped.

## Constructive proof and exact interfaces

The global theorem retains a **smooth**, **closed connected ambient manifold**, a **smooth transversely oriented codimension-one foliation**, and a **compact leaf with finite fundamental group**. Its proof gives every leaf compact and diffeomorphic to that leaf, trivial holonomy, a Hausdorff circle leaf space, a smooth locally trivial bundle, and an actual mapping torus with whole-fibre return monodromy.

The closedness argument uses the span of all compact leaf classes in finite-dimensional `H_(dim M−1)(M;Q)`. At a hypothetical intrinsically noncompact limit leaf, finite inner/outer foliation boxes provide distinct plaques; a compact leafwise strip and closing positive segment produce a transversal avoiding any chosen finite compact barriers. Saturation is open. Oriented intersection detects a class outside the finite basis span, a contradiction. An orientation double cover handles a nonorientable ambient manifold. No connected saturated Hausdorff limit is identified with a single leaf.

Once the reference limit leaf is compact, finitely many holonomy generators and finitely many chart overlap comparisons are controlled on a single short base interval. If an increasing generator moves a compact nearby leaf parameter, the direction of iteration toward zero produces infinitely many intersections of that embedded compact leaf with a compact transversal. This is impossible. All generators fix the parameter; finite chart continuation therefore patches to one compact graph over the reference leaf. It is open and closed in the connected nearby leaf, hence is the whole leaf. This proves the common diffeomorphism type without presupposing finite fundamental group for the limit leaf.

Full AC is explicitly retained for the finite-CW/rational-homology inputs. Full AC implies the separate pair-local ACω; the reverse is never used. The graph and finite-basis selections are finite. The compact C¹ embedding supplier now proves compact-to-Hausdorff embedding by finite separation, without invoking the published full-AC metrization theorem; it also correctly excludes other local branches through the subspace topology. Thus the extra C²/ACω consumer does not import a smooth/full-AC compactness theorem.

The intersection carrier now handles a finite relative smooth singular-chain pullback and cancellation of paired faces. It no longer claims that an arbitrary bounding chain can be made an embedded manifold. Bundle monodromy is the return of an entire fibre for a chosen transverse connection; a single closed transversal does not specify such a map. The mapping-torus convention `(x,t)~(f(x),t+1)` gives positive return `f⁻¹`. Classification is by **conjugacy classes** of mapping classes over the fixed oriented base, rather than claiming distinct bundles for every pair of nonisotopic diffeomorphisms.

The torus Dehn-twist example retains the non-product bundle claim, now proved from the nonidentity matrix on `π₁(T²)=Z²`. It has infinite leaf fundamental groups and illustrates the theorem's fibration conclusion without falsely applying its finite-fundamental-group hypothesis. Its verification uses ACω and the explicit mapping-torus construction, not the full-AC global theorem.

The transverse-orientation remark computes the free quotient `(x,θ)~(−x,−θ)`, two projective-plane leaves, generic sphere leaves and interval leaf space. A pulled-back hypothetical coorientation would change sign under the involution, contradicting constant sign on the connected product.

## Root-adjudicated localization correction

The standalone nonclosed-leaf lemma promised a closed transversal inside **every** open neighborhood of the entire leaf. That localization is false and was removed on root's explicit adjudication. The valid smooth cooriented existence theorem is proved by a finite tilted leafwise strip; all actual consumers inspected already have coorientation. Its proof provenance is now `ai-altered` and remains draft.

The exact counterexample is included in the item: on `R×S¹`, the foliation tangent to `∂θ−r∂r` has the nonclosed leaf `(e^(−t),t mod 2π)`. On `r>0`, `Φ=θ+log r mod 2π` is a first integral. The open neighborhood `Φ⁻¹((−ε,ε))`, `0<ε<π`, contains the entire leaf and admits a real-valued first-integral lift. A closed transverse curve would make this periodic real function have a continuous nowhere-zero derivative, impossible. This is removal of a false extra clause, not weakening a valid global stability claim.

Direct consumers are the owned closedness lemma and batch31 `lem-a-foliation-is-taut-if-and-only-if-it-has-no-dead-end-component`. Owned closedness has its own explicit finite-barrier construction and does not consume arbitrary-neighborhood localization. The batch31 consumer's statement is already cooriented. No incoming consumer statement needs narrowing.

## Precisely authorized batch31 repair

Root additionally authorized only `lem-a-noncompact-leaf-of-a-compact-c2-foliation-meets-a-positive-closed-transversal` and its own metadata. Its full C²/ACω finite-compact-barrier avoidance statement is retained.

Its intrinsic compactness argument now uses finitely many compact plaque disks in larger boxes covering smaller boxes, rather than the false claim that plaque-union intersections characterize embedded leaves. Its actual C² strip has fixed-label paths leafwise, so `ω∂rP=0`; strict label increase gives positivity exactly. C² scalar-root and finite-transport suppliers justify strip gluing. The perturbation proof uses uniform local injectivity near the diagonal and a compact set of separated parameter pairs. Independent bump values make the equality map a submersion with zero manifold dimension `N−1`; its projection to `N` parameters is null by the published lower-dimensional C¹ image proposition. It does not assume finitely many self-crossings or use the wrong Sard dimension. The protected crossing, positive cone and compact barriers persist under small perturbation.

Only that batch31 item, its manifest entry, its contract entry, its coverage support, its own cross-batch rows and an appended note were changed. Other batch31 items and all batch23 items were read-only. Supplier statement additions/corrections invalidate exact whole-claim quotes in some existing other-batch contracts; root's stable-content reconciliation must refresh those mappings without a new review wave.

## Sources and verification actually inspected

Read the current repository instructions, README and schema; current batch22 manifest, notes, task/result and previous author checkpoint; root's stable Step1 strategy; relevant full on-disk supplier claims; and complete extracted Calegari printed pp.140–143 and pp.154–155, with Mrowka pp.52–56. Calegari's intrinsic-noncompact construction and cooriented intersection route are adapted explicitly. Mrowka's Remark 7 supports the orientation quotient. The erroneous unrestricted closed-transversal assertion in Mrowka's Theorem 23.5 is not a supplier of this proof. The unavailable MMF treatment remains a documented drop, not newly claimed source reading. Contracts quote actual current local/published claim sections verbatim and map each declared fact to its actual numbered uses.

The durable evidence is `research/frontier-41-ha-dt-29-batch-22.author-completion-checks.json`, with actual commands, outputs, exit codes and current raw file hashes. The final explicit selection is 49 owned items plus the one authorized batch31 item and two owned pages:

- Precheck: 40 proof-bearing items checked, 0 failing.
- Proof layout: 50 items, 157 numbered steps, 0 defects.
- Render: 52 explicit files, no errors; real YAML and KaTeX parsers used.
- Strict batch22 contracts: 49/49 checked, 0 errors or warnings.
- Strict authorized batch31 contract: 1/1 checked, 0 errors or warnings.
- Content policy: 49 owned items, 0 errors or warnings.
- Manifest dependencies: 49 items, 0 errors.
- Current owned dependency levels: 0 mismatches or cycles.
- Coverage: 109 results, 0 errors, the two existing focused-harvest low-yield warnings remain.
- Plan validation: exit 0; pre-splice unpopulated planned pages elsewhere remain informational.

These are author-completion checks, not independent mathematical audits or gate certification. No unresolved local adapter is being cited as proved. Root owns stable writer-drained certification, genuine bounded engine handoff, and all remaining controller transitions.
