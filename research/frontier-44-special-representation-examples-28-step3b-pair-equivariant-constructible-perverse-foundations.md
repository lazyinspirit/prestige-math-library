# Step 3b — pair `equivariant-constructible-perverse-foundations` (batch 41)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-equivariant-constructible-perverse-foundations-f616ac8ef41cba97`.
Owned A page: `equivariant-constructible-perverse-foundations` (order 1818,
representation-theory, 8 scaffold items). Owned B page:
`equivariant-constructible-perverse-foundations-examples` (order 1822, 1
scaffold item). Batch 41 contains only this pair, so the shared batch files
(`…-batch-41.pages.json`, `…-batch-41.coverage.json`,
`…-batch-41.cross-batch-dependencies.json`) carry no sibling rows.

## Owned IDs and open obligations (entry checkpoint)

A (all scaffold-only; item files, page, contracts owed):
`def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`
(level 10), `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences`
(level 14), `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`
(level 15), `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`
(level 16), `thm-constructible-six-functors-proper-base-change-and-verdier-duality`
(level 17), `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative`
(level 19), `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`
(level 20), `thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars`
(level 21).

B (scaffold-only; item file, page owed):
`ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite`
(level 22).

Open obligations at entry:

1. create `library/representation-theory/equivariant-constructible-perverse-foundations.md`
   and `…-examples.md`;
2. author all 9 item files in dependency-level order (10, 14, 15, 16, 17, 19,
   20, 21, 22), rechecking each item's exact suppliers against the current
   files;
3. sync the batch-41 manifest deps/provenance to the authored items and refresh
   the cross-batch dependency inputs;
4. write `research/frontier-44-special-representation-examples-28-batch-41.proof-contracts.json`
   with exact quotes, per-step inputs and boundary dispositions;
5. run the explicit-path checks (proof-layout, precheck, rendercheck,
   content-policy, depcheck, depsource, manifest-deps, item-dependency-levels,
   validate-plan, coverage-checklist, source checks, proof-contract --strict,
   boundary-audit, citation-fidelity, pathcheck, prosecheck) and record item
   decisions with `tools/step3-decisions.mjs`;
6. reconcile supplier uses; the two in-run supplier items not yet authored at
   entry —
   `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
   (batch 37, `complex-algebraic-stratified-topology`) and the batch-40
   `analytic-derived-six-operations-and-duality` items
   `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`,
   `lem-analytic-constructible-sheaves-admit-coherent-six-operations`,
   `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`,
   `thm-verdier-duality-on-oriented-stratified-complex-varieties`,
   `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`,
   `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure` —
   must be flagged with exact supplier ID, consumer ID and consuming proof step;
   the affected decisions stay escalated until the suppliers and their proof
   uses are reconciled.

Direct in-run prerequisite pairs to inspect: `analytic-constructible-sheaf-foundations`
(batch 30, authored), `constructible-incidence-and-cochain-models` (batch 36,
authored), `complex-algebraic-stratified-topology` (batch 37, unauthored at
entry) and `analytic-derived-six-operations-and-duality` (batch 40, unauthored
at entry).

## Checkpoint log

(one entry per item, in authoring order; labels are recomputed after every
dependency edit and are re-verified at handoff because sibling authors are
still editing other batches of this run concurrently)

### Level 10: `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`

- **Authored** `items/def-equivariant-constructible-derived-category-for-complex-algebraic-varieties.md`
  (draft, level 10): the action nerve $G^p\times X$ with explicit face and
  degeneracy maps and augmentation, the abelian category of simplicial
  $k$-sheaves with its coinduced injective model, the full subcategory
  $D^b_{G,c}$ of bounded complexes with Cartesian cohomology and constructible
  finite-dimensional degree-zero restriction, the Ext and forgetful
  conventions, and the well-formedness discharge recorded via `justified_by`.
- **Checks.** `proof-layout` 0 steps 0 defects; `rendercheck` OK; `precheck`
  not applicable (definition); `depsource --items-file` 0 unresolved.

### Level 14: `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences`

- **Authored** with a complete proof: local product comparison at each chart,
  the cone bound $D^{\ge b+r+1}$, the Hom comparison for $m\le b+r-a$ via the
  long exact Hom sequence and t-structure orthogonality, full faithfulness at
  $m=0$, the truncated-counit image criterion, retract closure, and extension
  closure only under the strict bound $r\ge a-b+1$; the corrected boundary is
  kept and explained by the unipotent-local-system example. Dependency repair:
  added the published truncation, triangulated-structure, cone-uniqueness,
  Künneth, local-constancy and long-exactness inputs actually used.
- **Supplier reconciliation.** The batch-37 supplier
  `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
  was authored during this session; its Statement clause about bounded finite
  models for bounded algebraically constructible objects on separated
  finite-type varieties was read and supports the use at step 1.1, with the
  bundle setting fixed in the consumer's own Statement. The stale
  supplier-use remark was corrected to the actual use at steps 1.1 and 2.1,
  and the decision is `repaired` (dependency) rather than escalated.
- **Checks.** `precheck` PASS, `proof-layout` 8 steps 0 defects, `rendercheck` OK.

### Level 5 (added prerequisite): `lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap`

- **Added and authored** as the missing Stiefel CW/smooth prerequisite flagged
  by the Step-3a review: QR retraction, compact-manifold structure, finite CW
  model via the in-run triangulation theorem, numerable sphere bundle, and the
  Serre spectral sequence induction giving $H^0=k$, $H^j=0$ for
  $1\le j\le2(N-n)$, and the product bound $r_N$. Its computed in-run level is
  5; all deps are published or authored, and engine addition certification
  applies, so no self-review decision is recorded for it.
- **Checks.** `precheck` PASS, `proof-layout` 7 steps 0 defects, `rendercheck` OK.

### Level 15: `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`

- **Authored** with the frame-bundle geometry, the levelwise cone bound from
  the new prerequisite, the transfer of the acyclic-fiber comparison into the
  simplicial bounded derived category, the descent identification $Q_N$, the
  resolution-triple image description, retract and strict-bound extension
  closure, coherence on products of resolutions, and the trivial-group
  identity model. The scaffold strategy was amended to cite the new
  prerequisite for the fiber gap; the manifest was synced. Repairs: stale
  step references ("steps 8.1 to 2.5", "Steps 1.1 to 1.5") corrected, the
  definition fact [F6] given its actual use at step 1.1, and the batch-37
  supplier use at step 2.1 reconciled against its authored Statement.
- **Checks.** `precheck` PASS, `proof-layout` 8 steps 0 defects, `rendercheck` OK.

### Level 16: `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`

- **Authored**: ambient category and set-sized Hom groups, triangulated
  structure of $D^b_{G,c}$, conservativity of restriction, the finite Stiefel
  resolution-triple identification with the degree-zero ring comparison and
  retract closure, and idempotent completeness by the explicit telescope
  splitting inside the ambient bounded-below category.
- **Repair.** The conclusion's stale range "Steps 1.1 to 1.4 and 2.1" was
  corrected to the steps that actually prove the claims: 1.1, 1.2, 2.1 and
  2.2.
- **Checks.** `precheck` PASS, `proof-layout` 7 steps 0 defects, `rendercheck` OK.

### Level 19: `thm-constructible-six-functors-proper-base-change-and-verdier-duality`

- **Authored**: the four operations defined by transport on a sufficiently
  large resolution interval with resolution-independence from coherence,
  composition/identity comparisons, support localization, projection formula
  and trace, the normalized dualizing object
  $\omega^G_{X_N}=\omega_{X_N}\otimes a_{X_N}^*\omega_{B_N}^{-1}$ cancelling
  the base contribution, the smooth normalization $\omega_X^G\simeq k_X[2d]$,
  and the extraordinary dual exchange with Cartesian pasting.
- **Repair.** The conclusion's stale range "Steps 1.1 to 1.4" was corrected to
  steps 1.1, 2.1, 2.2 and 3.1; the manifest level was recomputed 17 → 19 after
  sibling level changes.
- **Checks.** `precheck` PASS, `proof-layout` 5 steps 0 defects, `rendercheck` OK.

### Level 21: `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative`

- **Authored**: the dimension correction $s_N=u_N-g=\dim_{\mathbb C}B_N$,
  detection of the middle-perverse aisles by restriction to $X$ and by
  $Q_N(-)[s_N]$, exactness and conservativity of the normalized functor,
  finite lifting of perverse truncations with uniqueness, and the
  projector/concentration/simplicity statement at the stabilization bound
  $r_N\ge a-b$.
- **Repairs.** The conclusion's stale range "Steps 1.1 to 1.3" was corrected to
  steps 1.1, 2.1 and 3.1 and the truncation-lifting step's shift identity was
  corrected to the exact pullback computation
  $q_N^*T\cong\operatorname{pr}_X^*\bigl({}^p\tau^{\le a}A_X\bigr)[s_N]$ via
  perverse exactness of the shifted smooth pullbacks; the manifest level was
  recomputed 19 → 21.
- **Checks.** `precheck` PASS, `proof-layout` 6 steps 0 defects, `rendercheck` OK.

### Level 22: `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`

- **Authored**: the equivariant middle-perverse t-structure by the two
  support/cosupport inequalities with detection by restriction, independence
  of refinement and gluing across algebraic open/closed decompositions via the
  recollement triangles, the abelian finite-length heart, the intermediate
  extension $\operatorname{IC}_Z(L)=j_{!*}L[\dim_{\mathbb C}Z]$ classification
  of simple objects, negative-Hom vanishing, and division endomorphism rings.
- **Repairs.** The conclusion's stale range "steps 2.2 to 1.5" was corrected to
  steps 2.2, 3.1 and 4.1; a literal `\u010c` escape in the gluing step was
  restored to `Čech`; the manifest level was recomputed 20 → 22.
- **Checks.** `precheck` PASS, `proof-layout` 6 steps 0 defects, `rendercheck` OK.

### Level 23: `thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars`

- **Authored**: degreewise finiteness of $\operatorname{Ext}_G^m(A,B)$ and
  vanishing for sufficiently negative $m$ through one sufficiently large
  finite Stiefel resolution, the scalar-extension isomorphism with naturality
  and Yoneda compatibility, and commutation of coefficient extension with the
  coherent six operations, normalized duality, perverse truncation and
  intermediate extension; total finiteness and preservation of simplicity are
  deliberately not asserted.
- **Repairs.** The frame-gap prerequisite
  `lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap` was added
  to the deps actually used by the finite comparison; the conclusion's stale
  range "Steps 1.1 to 1.3" was corrected to steps 1.1, 1.2 and 2.1; the
  manifest level was recomputed 21 → 23.
- **Checks.** `precheck` PASS, `proof-layout` 4 steps 0 defects, `rendercheck` OK.

### Level 24: `ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite`

- **Authored**: for $G=\mathbb C^\times$ acting trivially on the point, the
  identifications $U_N=\mathbb C^N\setminus\{0\}$, $X_N=\mathbb P^{N-1}$ and
  $Q_N(k)=k_{\mathbb P^{N-1}}$, the Schubert cell computation giving
  $\operatorname{Ext}_G^m(k,k)\cong k$ for even $m\ge0$ and zero otherwise,
  infinite-dimensional total Ext, and non-full-faithfulness of the forgetful
  restriction.
- **Repair.** The missing citation of the choice assumption [A1] was added to
  the conclusion step so every declared fact has an actual use; the manifest
  level was recomputed 22 → 24.
- **Checks.** `precheck` PASS, `proof-layout` 5 steps 0 defects, `rendercheck` OK.

## Pages, manifests, contracts

- **Pages.** Created `library/representation-theory/equivariant-constructible-perverse-foundations.md`
  (9 items, the added frame-gap lemma placed third, between the acyclic-fiber
  lemma and the Stiefel stabilization lemma) and
  `library/representation-theory/equivariant-constructible-perverse-foundations-examples.md`
  (1 example). Both match the manifest item order and the plan's promised
  claims; no original item or page ID was changed and no promised claim was
  narrowed.
- **Manifest.** `research/frontier-44-special-representation-examples-28-batch-41.pages.json`
  now carries 10 items: the new frame-gap item is registered with its computed
  level 5, deps of the acyclic-fiber lemma, the stabilization lemma and the
  Ext theorem were synchronised to the authored item files (including removal
  of the unused
  `lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses`
  from the frame-gap item), the stabilization strategy cites the new
  prerequisite for the fiber gap, and `dependency_level` was updated for the
  six items whose recomputed levels changed (frame-gap 5, six-functors 19,
  perverse normalization 21, middle perverse 22, Ext 23, example 24).
- **Coverage.** `research/frontier-44-special-representation-examples-28-batch-41.coverage.json`
  now has 47 harvested results over the 2 pages, with the Bernstein-Lunts
  §3.1 and Hatcher §4.2 (Theorem 4.41) headings additionally disposed as
  `included` in the new frame-gap lemma. `coverage-checklist
  --require-destination` passes with 0 errors and 0 warnings;
  `source-fetch-check` reports 5/5 fetch-verified; `url-sweep` reports 3/3
  live; `source-backing` reports 10 authored results all still backed.
- **Proof contracts.** `research/frontier-44-special-representation-examples-28-batch-41.proof-contracts.json`
  (version 1) has the ten owned IDs in `scope`, 91 citations with exact
  source quotes from the cited sections, one derivation per numbered step
  (56 total) with the step's own claim and every cited fact/step as an input,
  and 80 boundary rows (65 checked, 15 not applicable). `proof-contract
  --strict` reports 0 errors and 0 warnings over 10/10 items;
  `boundary-audit` reads 80 rows with one advisory candidate (the frame-gap
  `empty` disposition, which is outside the Statement's $s\ge1$ and
  $n_i\ge1$ hypotheses); `citation-fidelity` finds every quote in its cited
  item and no widening candidates; `finite-smoke` reports 0 errors.
- **Cross-batch inputs.** `research/frontier-44-special-representation-examples-28-batch-41.cross-batch-dependencies.json`
  carries 33 declaration-level `verified` rows (29 item, 4 page), including
  the two new edges created by the session's edits
  (`lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap` to
  `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations`,
  batch 29, used at step 3.1; and the acyclic-fiber lemma to
  `def-locally-constant-sheaf-of-finite-rank`, batch 30, used at steps 2.1,
  4.1 and 4.3). Evidence for the batch-37 and batch-40 supplier rows was
  refreshed against the authored statements, the four page rows now name item
  IDs rather than positional indices, and
  `frontier-dependency-ledger.mjs refresh` reports no orphaned batch-41 rows
  and no unreviewed batch-41 edges.
- **Scope and item decisions.** Because the added prerequisite changed the
  pair's `scopeHash`, the stale Step-3a review receipt was refreshed with a
  current `sufficient` scope review (the prior review's substance is
  preserved; the addition is the only scope change). Item decisions were then
  recorded: `accept` for the definition, `repaired` for the seven other
  scaffolded items with defect labels `dependency`/`reference`/`format`/
  `citation` as applicable. No self-review decision is recorded for the added
  prerequisite, which the engine certifies as an addition.

## Checks actually run

- `proof-layout` on the explicit paths of all 10 changed items: 10 items,
  56 steps, 0 defects (final run after the last edit).
- `precheck` on the same explicit paths: 9 checked, 0 failing (the definition
  has no phase body).
- `rendercheck` on the 10 items and 2 pages: 12 files, no wikilink-in-math,
  delimiter, display-block, KaTeX or YAML problems.
- `content-policy` on the batch-41 manifest: 10 scoped items, 0 errors,
  0 warnings; `manifest-deps` on the manifest: 10 items, 0 errors.
- `depcheck --items-file`, `fwdcheck --items-file`, `extcheck --items-file`
  over the 10 owned IDs: pass, including page-cycle checks and 0
  recorded-not-proved items.
- `depsource --items-file --run`: 10/10 consumer coverage, 0 unresolved
  (109 dependency links resolve to a published page, 50 to neither a
  published nor an earlier planned page, all in-run suppliers authored).
- `item-dependency-levels check --run`: every owned item's recorded level
  equals the computed level; the 28 remaining whole-run errors belong to
  sibling batches still being authored.
- `validate-plan` against `research/plan-spec.json`: no error or warning for
  this pair apart from the pre-existing `redundant-prereq` advisories on the
  A page's declared `requires` list (recorded here for Step 4); the 4
  `undeclared-prereq` errors are in other pairs
  (`logarithmic-hodge-complexes-and-smooth-open-weights`,
  `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`,
  `proper-hyperresolutions-and-mixed-hodge-restriction-images`,
  `ariki-categorification-and-graded-decomposition-numbers`).
- Contract and boundary audit: `proof-contract --strict` 0 errors/0 warnings,
  10/10 items; `boundary-audit` 80 rows; `citation-fidelity` 91 citations all
  found; `finite-smoke` 0 errors.
- Source checks: `coverage-checklist --require-destination` 0 errors/0
  warnings over 47 harvested results; `source-fetch-check` 5/5;
  `url-sweep` 3/3 live; `source-backing` 10 backed.
- `pathcheck representation-theory`: 0 errors and 3 `draft-unplaced` warnings
  for draft pages this session does not publish (pathway-sync owns placement
  at Step 8); `prosecheck` on the 10 items and 2 pages: 0 errors, 0 warnings.
- `step3-decisions check --phase final`: the pair's only remaining open row is
  the added prerequisite awaiting engine addition certification; all nine
  scaffolded items have current receipts.

## Supplier reconciliation, pre-splice rechecks, published concerns

- **Supplier reconciliation (all now authored and verified at declaration
  level).** The batch-37 supplier
  `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
  was authored during this session; its Statement's clause on bounded finite
  models, coefficient-extension compatibility and finite affine-open descent
  for bounded algebraically constructible objects supports the acyclic-fiber
  lemma at step 1.1 (and the setting) and the stabilization lemma at step 2.1.
  The batch-40 suppliers
  `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`,
  `lem-analytic-constructible-sheaves-admit-coherent-six-operations`,
  `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`,
  `thm-verdier-duality-on-oriented-stratified-complex-varieties`,
  `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`
  and
  `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure`
  were all authored during this session and their statements were read against
  the uses recorded in the items and in the cross-batch rows (acyclic-fiber
  step 1.1; six-functors steps 1.1–3.1; perverse normalization steps 1.1–4.2;
  middle perverse steps 1.1–4.1; Ext steps 1.1–2.1). The batch-29 supplier
  `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations`
  and the batch-30 definition `def-locally-constant-sheaf-of-finite-rank` were
  likewise read for the two new edges. No consumer in this batch remains
  escalated.
- **Pre-splice rechecks.** The Step-3a finding that the Stiefel CW/smooth
  cohomology-gap prerequisite was missing from the scaffold is resolved by the
  added lemma, placed before its consumer; the earlier corrected boundary
  (extension closure only for $r\ge a-b+1$) is preserved and still tested by
  the unipotent rank-two local system over $\mathbb C^*\to\operatorname{pt}$;
  no owned item is justified by a later item, and every fact-to-source link in
  the Facts block is contracted and used exactly at the steps the contracts
  record. The only facts that previously lacked an actual use ([F6] of the
  stabilization lemma and [A1] of the example) now have one; the unused
  Künneth fact and its dependency were removed from the frame-gap lemma.
- **Published concerns.** No newly confirmed defect in published content.
  Two observations are routed, not resolved here: (1) the batch-37 item
  `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
  records in its own Remarks that its uses of the batch-36 items
  `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`
  and `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`
  carry provisional reconciliation obligations — a Step-5 concern for batch
  37 that does not block the declaration-level use in this batch; (2) the
  `validate-plan` errors listed above are other pairs' obligations, reported
  for the engine's Step-4 reconciliation without hiding our own unresolved
  dependency rows (there are none).

## Handoff status

- **Completed.** All nine scaffolded items are authored, checked and decided,
  and the added prerequisite
  `lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap` is
  authored, registered in the manifest, coverage, pages and contracts,
  verified at level 5, and placed before its consumers. Both pages exist and
  pass rendering and content policy. The batch-41 manifest, coverage,
  cross-batch input and proof-contracts artifacts all exist and pass their
  gates; the report you are reading is complete.
- **Open obligations.** (1) Engine certification of the added prerequisite's
  scope/item bookkeeping (intentionally not self-reviewed). (2) Steps 5–7
  independently audit the proofs of this batch and of the consumed suppliers,
  including batch 37's provisional batch-36 obligations noted above. (3) The
  four `validate-plan` errors in other pairs and the whole-run
  `item-dependency-levels` errors in sibling batches are their owners'
  Step-3/4 obligations.
- **No escalations remain in batch 41.** The two consumers that were to stay
  escalated while the batch-37 supplier was unauthored were reconciled against
  the now-authored supplier statement and recorded as `repaired`
  (dependency), with the exact consuming steps fixed in the cross-batch rows
  and in this report.
