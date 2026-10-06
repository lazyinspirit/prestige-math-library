# Step 3b authoring report — pair `isotopy-extension-and-embedding-theory-beyond-whitney`

- Run: `frontier-41-ha-dt-29`
- Dispatch label: `step3b-pair-isotopy-extension-and-embedding-theory-beyond-whitney-002d03688d6f0fdd`
- Role: alpha-high, Step 3b scaffold auditor and item author
- A page: `isotopy-extension-and-embedding-theory-beyond-whitney` (batch 19, order 569)
- B page: `isotopy-extension-and-embedding-theory-beyond-whitney-examples` (batch 19, order 570)
- Scope review: `research/frontier-41-ha-dt-29-step3a-pair-isotopy-extension-and-embedding-theory-beyond-whitney.md` (`sufficient`, 2026-10-06)
- Owner scope record: `research/frontier-41-ha-dt-29-step3a-owner-isotopy-extension-and-embedding-theory-beyond-whitney.json` (`proceed`, includes the local correction of the primary-double-point definition)
- Scaffold inputs: `research/frontier-41-ha-dt-29-batch-19.pages.json`, `…-batch-19.coverage.json`, `…-batch-19.notes.md`, `…-batch-19.cross-batch-dependencies.json`

## Owned IDs (24 items, in the mandated dependency order)

Level 0: `lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold`.
Level 1: `def-self-transverse-immersion-and-double-point-locus`.
Level 2: `lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks`,
`lem-double-point-locus-has-expected-dimension-two-m-minus-n`,
`rem-metastable-embedding-classification-requires-additional-deleted-product-machinery`.
Level 3: `def-primary-double-point-obstruction-to-removing-self-intersections`,
`def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy`,
`lem-a-self-transverse-immersion-has-no-double-points-when-n-is-greater-than-two-m`.
Level 4: `cor-a-proper-injective-immersion-is-an-embedding`,
`lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image`,
`ex-double-point-dimension-count-for-surfaces-in-four-and-five-space`,
`lem-an-ambient-isotopy-preserves-the-orientation-of-an-invariant-round-sphere`.
Level 5: `lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood`.
Level 6: `lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field`,
`prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range`.
Level 7: `lem-the-extended-time-dependent-field-has-a-global-time-one-flow`.
Level 8: `thm-isotopy-extension`.
Level 9: `cor-isotopic-embeddings-have-diffeomorphic-complements`,
`cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy`,
`rem-isotopy-extension-needs-compact-source-or-proper-support-control`,
`rem-vanishing-primary-double-point-and-characteristic-obstructions-do-not-classify-embeddings`,
`ex-ambient-isotopy-of-an-unknotted-circle-in-r-three`.
Level 10: `ex-isotopic-submanifolds-have-isomorphic-normal-bundles-and-complements`.
Level 14: `cex-the-reflected-sphere-embedding-is-regularly-homotopic-but-not-isotopic-to-the-standard-one`.

Pages owned: `library/differential-topology/isotopy-extension-and-embedding-theory-beyond-whitney.md`,
`library/differential-topology/isotopy-extension-and-embedding-theory-beyond-whitney-examples.md`.
Contracts owned: `research/frontier-41-ha-dt-29-batch-19.proof-contracts.json`.

## Open obligations recorded at entry

Suppliers scaffolded in other in-run batches are **not authored on disk** at the
start of this dispatch (checked 2026-10-06 against `items/`): batch 14 (DT-22)
`def-local-whitney-move`, `thm-whitney-move-removes-a-cancelling-pair-of-intersections`,
`lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range`,
`lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses`,
`lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle`,
`lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points`;
batch 17 (DT-25) `def-regular-homotopy-of-immersions`,
`cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes`;
batch 18 (DT-26) `thm-smale-classification-of-sphere-immersions-in-euclidean-space`;
batch 2 (DT-02) `def-self-intersection-number-of-an-oriented-submanifold`.
Consumers affected here: `def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy`
(regular-homotopy convention), `def-primary-double-point-obstruction-to-removing-self-intersections`
(label lemma, self-intersection number), `prop-whitney-disjunction-…` (the DT-22
machinery plus regular homotopy and the self-intersection number),
`rem-vanishing-primary-double-point-…` (regular homotopy), and
`cex-the-reflected-sphere-embedding-…` (DT-25/DT-26 classification chain). These
assigned consumers are authored here from the scaffold statements, with the
supplier use named step by step; their Step-3 decisions remain **escalated** for
the owner until the suppliers exist and the actual uses are reconciled.

Stale flagged edge: `…-batch-19.cross-batch-dependencies.json` still lists
`lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points` as a supplier of
`lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks`;
the current scaffold does not cite it there (arc existence is consumed on
`prop-whitney-disjunction-…`). To be reconciled in that file at handoff.

Everything else on the two pages consumes published items only (checked against
`items/` on disk), so those items are recordable as ordinary Step-3 decisions
once their own lower-level suppliers on this page are recorded.

## Checkpoint log

(Each entry: item, action, source locators, checks run, open gaps, next action.)

- **2026-10-06, levels 0–2 written.** `lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold`
  (Wall §6.2; proved locally via slice charts of the product smooth structure; added published DG deps for
  the product structure, the identity/component smoothness and the initial-property criteria, and cited the
  published `prop-the-diagonal-is-an-embedded-submanifold` for the embedded half; passed precheck, rendercheck,
  proof-layout); `def-self-transverse-immersion-and-double-point-locus` (definition; added
  `def-local-oriented-intersection-sign` and `cor-every-immersion-is-locally-an-embedding`; `justified_by`
  the sheet-disk lemma for its local disk clause); `lem-double-point-locus-has-expected-dimension-two-m-minus-n`
  (repair: the scaffold's clause 3 promised a two-to-one *local diffeomorphism* onto `Σ(f)`;
  that is false at triple points and `Σ(f)` has no structure by itself, so the clause is restated as the
  true statements — smooth free involution on `Δ_2(f)`, `q` an immersion and local embedding with image
  `Σ(f)`, the orbit-set surjection bijective exactly when no point has more than two preimages; recorded as
  a Step-3 repair for Step 4/5 scrutiny); `lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks`
  (local transversality + 0-dimensionality of the intersection gives the two closed embedded disks and the
  standard model; added `cor-transverse-intersection-theorem`, the inverse function theorem and the
  local sign interface); `rem-metastable-embedding-classification-…` (recorded, non-load-bearing,
  `proved_here: false`, precheck n/a). All passed precheck/rendercheck/proof-layout. Open gaps: supplier
  reconciliation only (see below) — no mathematical gap recorded at this point.

- **2026-10-06, levels 3–4 written.** `lem-a-self-transverse-immersion-has-no-double-points-when-n-is-greater-than-two-m`
  (immediate from the dimension lemma; passed); `cor-a-proper-injective-immersion-is-an-embedding`
  (repair: added the `AC_ω` hypothesis and `def-countable-choice` for the consequences that consume the
  previous lemma, and cited the compact-Hausdorff properness facts; passed); `def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy`
  (definition, cites the unfinished in-run `def-regular-homotopy-of-immersions` for the terminology
  reservation); `lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image` (track is a
  closed embedded submanifold via compact-source properness and the published embedding criterion;
  velocity well defined and smooth along the image; boundary-stratum clause by the chart argument; passed);
  `ex-double-point-dimension-count-for-surfaces-in-four-and-five-space` (B page; finiteness of the double
  point set argued through a diagonal-free neighbourhood and compactness; passed);
  `lem-an-ambient-isotopy-preserves-the-orientation-of-an-invariant-round-sphere` (B page; determinant
  continuity + IVT gives orientation preservation, outward-normal-first boundary orientation gives degree
  `+1`; passed); `def-primary-double-point-obstruction-to-removing-self-intersections` (definition written
  from the owner-corrected scaffold text: finite sums, ordering-independent sign for even `m`, fixed
  whiskers/branch paths with the π₁-triviality hypothesis for label independence, direct well-definedness
  argument; consumes the unfinished in-run label lemma and self-intersection-number item, decision to be
  escalated). Next action: level 5 `lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood`,
  then the cutoff/dissection, flow, isotopy-extension, corollaries, remarks and the two remaining B items.

- **2026-10-06, levels 5–14 written.** `lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood`
  (horizontal extension, boundary-stratum tangency, prescribed-neighbourhood and relative clauses; the
  published slice-chart extension lemma is used and its construction inspected for the horizontal
  refinement); `lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field`
  (relatively compact neighbourhood of the compact track, product cutoff field); `prop-whitney-disjunction-…`
  (the full DT-22 consumer, with the clean-disk strengthening stated as an open supplier obligation at its
  transport step); `lem-the-extended-time-dependent-field-has-a-global-time-one-flow` (published evolution
  theorem + cocycle law + ODE uniqueness); `thm-isotopy-extension` (four clauses); `cor-isotopic-embeddings-…`;
  `cor-tubular-neighbourhoods-…`; `rem-isotopy-extension-needs-…`; `rem-vanishing-primary-double-point-…`
  (`external_refs` keeps the metastable leaf non-load-bearing); `ex-ambient-isotopy-of-an-unknotted-circle-…`
  (explicit affine isotopy using the connectedness of `SO(3) ≅ V_2(R^3)`); `ex-isotopic-submanifolds-…`;
  `cex-the-reflected-sphere-…` (regular homotopy through the DT-26 classification and its explicit
  formal-data lemma, non-isotopy through the invariant-ball orientation lemma). All 24 items pass precheck,
  rendercheck and the batched proof-layout run (24 items, 106 steps, 0 defects).

## Final verification (2026-10-06)

| Check | Command (explicit paths / batch scope) | Result |
| --- | --- | --- |
| proof layout (required final batch) | `node tools/proof-layout.mjs items/<24 owned items>` | 24 items, 106 steps, **0 defects** |
| rendering | `node tools/rendercheck.mjs items/<24>` and both pages | OK: YAML parses, KaTeX parses, no nested/multiline math |
| proof format | `node tools/tsx-run.mjs tools/precheck.mts items/<24>` | 24 checked, 0 failing (canonical numbering adopted wherever the checker re-laid the steps) |
| content policy | `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-19.pages.json` | 24 scoped items, **0 errors, 0 warnings** |
| strict proof contracts | `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-19.proof-contracts.json --strict` | 24/24 items checked, **5 open citation obligations** — exactly the five unauthored DT-22 suppliers of `prop-whitney-disjunction-…` (L2→`lem-general-position-…`, L2→`lem-whitney-disk-framing-…`, L3→`def-local-whitney-move`, L3→`thm-whitney-move-…`, L4→`lem-fundamental-group-label-…`); no other contract error |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | 0 errors naming any owned item; the levels were recomputed from the current manifests and synchronised into both the item metadata and the batch-19 manifest (13 items rose by one level after sibling manifests landed: 4,5,5,6,7,8,9,10,10,10,10,10,11) |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | OK — declared page order acyclic and consistent; no item cycles, forward references, B-page dependencies or unresolved ids |
| dependencies (focused) | `node tools/depcheck.mjs --items-file /tmp/b19-items.json` | only the expected findings for the five unauthored DT-22 suppliers (dep-unresolved/link-unresolved); no b-leaf, cycle, self-dep, id/kind or YAML error in any owned item |
| Step-3 decisions | `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` | 21 owned items closed as `accept`; 3 remain **escalated** and owner-held: `def-primary-double-point-obstruction-…`, `prop-whitney-disjunction-…`, `cex-the-reflected-sphere-…` |

## Step-3 repairs and deviations (for Step 4/5)

1. **Clause-3 repair in `lem-double-point-locus-has-expected-dimension-two-m-minus-n`.** The scaffold
   promised that the first projection is a two-to-one smooth local diffeomorphism `Δ_2(f) → Σ(f)` with
   `Σ(f)` the quotient by the involution. That is false at triple points (fibres are unions of orbits) and
   `Σ(f)` has no smooth structure of its own before such a theorem. The clause is restated to the true
   statements: the swap involution is a smooth free involution of `Δ_2(f)`, `q` is a smooth immersion with
   image `Σ(f)` and is a local embedding everywhere, and the induced orbit-set surjection
   `Δ_2(f)/τ → Σ(f)` is a bijection exactly when no point of `X` has more than two preimages under `f`.
   No other item consumed the removed two-to-one/local-diffeomorphism claim.
2. **Choice propagation in `cor-a-proper-injective-immersion-is-an-embedding`.** The scaffold statement and
   deps omitted the `AC_ω` hypothesis carried by the high-codimension lemma it consumes; the item now says
   "Assume `AC_ω`" for those consequences and lists `def-countable-choice`, while the general
   proper-injective-immersion criterion remains choice-free.
3. **Item-level dependency additions.** Deps were extended where a complete proof needs a published supplier
   that the manifest omitted: the product smooth structure, the smooth-into/out-of-embedded-submanifold
   criteria, the chain rule and the identity-map smoothness (diagonal lemma), `cor-transverse-intersection-theorem`,
   the inverse function theorem and the local sign interface (sheet disks), the compact-Hausdorff
   properness items and `thm-finite-products-of-compact-spaces`/`thm-heine-borel-r` (velocity and cutoff
   lemmas), `prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold` (track), the Urysohn/compact-Hausdorff
   items (tubes and the extension theorem), and `lem-stiefel-manifolds-…` (the `SO(3)` path). All additions
   are earlier, published or earlier-in-run items; `validate-plan` reports no undeclared-prereq for the pair.
4. **B-page dependencies replaced (dispatch requirement).** The scaffold's deps on the B-page-only items
   `ex-degree-of-a-reflection-of-a-sphere`, `ex-boundary-orientation-of-the-unit-sphere-…` and
   `ex-the-interval-the-cantor-set-and-the-hilbert-cube-are-compact` were replaced by the A-page suppliers
   `prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism` (with the local
   orientation-reversal computation for the reflection), `def-induced-boundary-orientation` and
   `thm-heine-borel-r`; the corresponding `b-leaf-content` errors are gone.
5. **Reference text deviation (pre-splice note).** In `prop-whitney-disjunction-…` the statement's final
   citation of the later same-page remark is written as prose ("the vanishing/knotting boundary remark
   below") instead of a wikilink, since a `deps` edge would have reversed the dependency order; the manifest
   statement still carries the display text with the link. No mathematical content changed.
6. **Cross-batch bookkeeping.** `…-batch-19.cross-batch-dependencies.json` was reconciled: the stale
   `lem-arcs-…` edge moved from the sheet-disk lemma to `prop-whitney-disjunction-…` (its actual consumer),
   the four suppliers that landed during authoring (`def-regular-homotopy-of-immersions`,
   `cor-regular-homotopy-classes-…`, `def-self-intersection-number-…`, `lem-arcs-…`) were marked available,
   and the clean-disk strengthening requested from `lem-general-position-…` was recorded. Sibling rows and
   other batches were not touched.

## Open obligations and escalations (owner-held)

1. `prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range` consumes
   five DT-22 suppliers that are still not authored on disk (`def-local-whitney-move`,
   `thm-whitney-move-removes-a-cancelling-pair-of-intersections`,
   `lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range`,
   `lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses`,
   `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle`); the strict proof
   contract leaves exactly those five citation obligations open. **Additional supplier requirement:** the
   scaffolded general-position lemma supplies a disk clean with respect to the two sheet germs, while the
   transport step of this consumer needs the stronger cleanliness that the disk interior meets the immersed
   image only near the boundary arcs (Wall Ch. 6 §6.3-level statement). The consumer states this requirement
   at its transport step; it must be verified against the authored supplier (or a companion lemma).
2. `def-primary-double-point-obstruction-to-removing-self-intersections` consumes
   `lem-fundamental-group-label-…` (not yet authored) in its labelled clause; escalation stays until the
   supplier exists and the label criterion is reconciled with the fixed whiskers/branch paths.
3. `cex-the-reflected-sphere-embedding-…` was escalated while `thm-smale-classification-of-sphere-immersions-in-euclidean-space`
   was unauthored; that supplier (and the direct formal-data lemma
   `lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three`) has since
   landed and the use was reconciled here, but the engine reserves re-decision of an escalated item to the
   owner, so the escalation remains on the book for owner resolution.

## Published concerns

- `cor-negative-expected-dimension-generic-intersections-are-empty`, `def-local-oriented-intersection-sign`
  and `def-oriented-intersection-number` are published dependencies whose `depcheck` state is
  `published-unaudited` (pre-existing, other runs). No statement or proof change is proposed here; recorded
  for the canonical ledger.
- The published duplicate `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy`
  (braid-groups home) is not consumed by this pair; this page builds its own extension theorem. Recorded for
  the ledger as before.
