# Step 3b — pair `analytic-derived-six-operations-and-duality` (batch 40)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-analytic-derived-six-operations-and-duality-9e6fef0239462c91`.
Owned A page: `analytic-derived-six-operations-and-duality` (order 1813,
scheme-theory, 9 scaffolded items). Owned B page:
`analytic-derived-six-operations-and-duality-examples` (order 1817, 1
scaffolded item). Batch 40 (`…-batch-40.pages.json`) contains only this pair,
so the shared batch files carry no sibling rows.

## Owned IDs and open obligations (entry checkpoint)

A items, in the dispatch's dependency-level authoring order (all scaffold-only;
item files, page, contract entries owed):
1. `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions` (level 8)
2. `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces` (level 9)
3. `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint` (level 10)
4. `lem-analytic-six-operation-support-and-trace-calculus` (level 11)
5. `thm-verdier-duality-on-oriented-stratified-complex-varieties` (level 14)
6. `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace` (level 15)
7. `lem-analytic-constructible-sheaves-admit-coherent-six-operations` (level 16)
8. `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` (level 17)
9. `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure` (level 18)

B item (scaffold-only; item file and B page owed):
`ex-dualizing-and-closed-support-shifts-on-the-complex-line` (level 15; author
with item 6 by dispatch order, ties broken by page order).

Open obligations at entry: (1) author all 10 item files and both pages
`library/scheme-theory/analytic-derived-six-operations-and-duality.md` and
`library/scheme-theory/analytic-derived-six-operations-and-duality-examples.md`;
(2) audit each scaffold statement, hypothesis and declared supplier against the
current inputs, repairing local gaps; (3) sync the batch-40 manifest
deps/provenance to the authored items; (4) write
`research/frontier-44-special-representation-examples-28-batch-40.proof-contracts.json`;
(5) refresh `…-batch-40.cross-batch-dependencies.json` and the frontier
dependency ledger; (6) run the explicit-path checks (proof-layout, precheck,
rendercheck, content-policy, depcheck, depsource, manifest-deps,
item-dependency-levels, validate-plan, coverage-checklist, source checks,
proof-contract --strict, boundary-audit, citation-fidelity, pathcheck,
prosecheck); (7) record a step-3 item decision for every owned ID, escalating
consumers of still-unfinished suppliers with exact IDs and consuming steps.

## Entry audit notes (recheck of Step 3a findings against current inputs)

- **U1 (topological properness, confirmed).** `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces`
  defines $f_!$ by "sections whose closed support maps properly to $V$"; no
  published or scaffolded item defines properness of a continuous map of
  general topological spaces (`def-proper-map-between-euclidean-open-sets` is
  restricted to Euclidean open sets; `def-proper-morphism` is scheme-theoretic).
  Rechecked on disk: still absent. Per the dispatch the item is authored with
  this obligation stated plainly (a stipulation of the standard meaning of
  properness inside the definition, with the exactly used stability facts —
  closed inclusions proper, properness stable under base change along open
  inclusions, composites of proper maps proper — used only in the form
  "$f$ proper $\Rightarrow f_!=f_*$" and fibre-compactness), and the item
  decision is left escalated with the exact gap; a fresh scope decision or an
  owner-authorized atomic `def-proper-continuous-map` remains the owner's call.
- **U2 (declaration housekeeping).** Repaired during authoring: item 1 declares
  the flatness/K-flatness and derived-functor suppliers it uses
  (`lem-acyclic-assembly-by-exact-columns`,
  `thm-right-derived-functors-form-a-cohomological-delta-functor`,
  `prop-positive-right-derived-functors-vanish-on-injective-objects`), and
  item 2 declares the local compactness/Hausdorff definitions it uses.
- **Unfinished in-run suppliers (from the dispatch's direct list).** At entry,
  `compact-support-sheaf-calculus` (batch 32: `def-c-soft-sheaf`,
  `def-compactly-supported-global-sections`,
  `lem-c-soft-field-sheaves-are-compact-support-acyclic`,
  `lem-sections-near-a-compact-set-are-sections-on-that-set`,
  `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`) and
  `complex-algebraic-stratified-topology` (batch 37:
  `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`,
  `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`)
  have no item files on disk. The authored consumers state the exact
  supplier IDs and consuming steps and their decisions are escalated.
  `analytic-constructible-sheaf-foundations` (batch 30) and
  `constructible-incidence-and-cochain-models` (batch 36) items are authored
  and are checked against their actual files.

## Checkpoint log

(one entry per item, in the dispatch's dependency order; all paths below were
newly authored by this dispatch and pass precheck / rendercheck / proof-layout
unless stated otherwise)

### Added prerequisites (levels 0 and 1): `def-proper-continuous-map`,
`lem-proper-continuous-map-stability`

- **Added on this A page** to close Step 3a finding U1: no published or
  scaffolded item defined properness of a continuous map between general
  topological spaces, although items 2–4 use the notion. The owner direction
  for this run authorizes necessary local prerequisites inside the selected
  scope, so the atomic closure was minted here rather than left undefined.
- Content: the definition by preimages of compacta (with the intrinsic/ambient
  reading of compactness linked to `lem-compactness-of-a-subspace-is-ambient`),
  and a stability lemma: closed inclusions, composites, base change along a
  continuous map into a Hausdorff space, compact fibres, restrictions to closed
  subspaces, and closedness of proper maps into locally compact Hausdorff
  spaces.
- Checks: precheck n/a (definition) / PASS (lemma, canonical layering
  1.1–1.6, 2.1); rendercheck OK; proof-layout 0 and 7 steps, 0 defects;
  prosecheck clean. Both cite the pair's existing Verdier/Stacks source
  documents, so the coverage file needs no new source row.
- **Additions rule.** These two IDs are absent from the immutable pre-author
  scaffold inventory, so their scope and item certifications are left to the
  engine after successful dispatch (no self-review receipt recorded); they are
  registered normally in the manifest, both pages and the proof contracts.

### Item 1 (level 8): `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`

- **Authored** with a 12-step proof: inverse image exactness and the
  $k$-linear adjunction with injectivity transfer; the tensor stalk formula and
  exactness in each variable; injective $k$-sheaves are flasque; flasque
  acyclicity; bounded complexes are K-flat and the signed total tensor computes
  the derived tensor; the injective model for the internal derived Hom; its
  well-definedness; bounded-below flasque complexes compute their derived
  sections; the tensor–Hom transposition and the dg identities; and the AC
  bookkeeping.
- **Declaration repair.** Added the published suppliers actually cited:
  `lem-acyclic-assembly-by-exact-columns`,
  `thm-right-derived-functors-form-a-cohomological-delta-functor`,
  `prop-positive-right-derived-functors-vanish-on-injective-objects`,
  `thm-sheafification-preserves-stalks`,
  `thm-long-exact-sequence-in-cohomology`,
  `cor-the-cone-criterion-from-the-general-long-exact-sequence`.
- **Checks / decision.** precheck PASS, rendercheck OK, proof-layout 12 steps /
  0 defects. Decision `repaired` / `["dependency"]`.

### Item 2 (level 9, recomputed 13): `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces`

- **Authored** to the reviewed statement, with the properness stipulation now
  linked to the two added prerequisites so that "maps properly to $V$" is well
  formed; the presheaf/sheaf and well-definedness obligations are stated
  exactly as the manifest fixes them (`justified_by` the exceptional-adjoint
  theorem).
- **Declaration repair / U1.** Added `def-locally-compact-space`,
  `def-hausdorff-space`, `def-proper-continuous-map`,
  `lem-proper-continuous-map-stability`. U1 is thereby supplied within the
  authorized scope on the assigned A page; the recorded item decisions for the
  two added IDs themselves remain with the engine (additions rule), and the
  scope decision was refreshed for the enlarged inventory.
- **Checks / decision.** precheck n/a, rendercheck OK, proof-layout 0 steps.
  Decision `repaired` / `["dependency"]`.

### Item 3 (level 10, recomputed 14): `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint`

- **Authored** with a 9-step proof: $f_!$ as a sheaf and its left exactness
  with the proper/open/closed cases; the injective and surjective halves of the
  fibre comparison; fibrewise acyclicity, the fibre formula and boundedness;
  the flasque complex $H_K(I)$ with lower bound $\inf(I)-d$; the generator
  resolution and the $\operatorname{RHom}$ comparison; the Hom transposition
  and lower bound; the counit and the coherence laws on the bounded
  constructible specialization.
- **Unfinished supplier (escalated).** The proof consumes
  `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions` (batch
  32) in step 2.1 (the uniform bound $d$ and the resolution $k_X\to K$) and in
  step 3.1 (the finite resolution used for $K_U$ and $H_K(I)$). That item file
  did not exist when the decision was recorded, so the decision is `escalate` /
  `["dependency"]`; the supplier was authored later during this dispatch and
  its Statement was re-read against these two uses — it states the uniform
  all-fibre-open bound and the bounded fibrewise-soft resolution verbatim as
  consumed, so the use is reconciled, and the escalation now waits only on the
  owner's resolution of the recorded receipt. The other batch-32 suppliers of this item
  (`def-c-soft-sheaf`, `def-compactly-supported-global-sections`,
  `lem-c-soft-field-sheaves-are-compact-support-acyclic`,
  `lem-sections-near-a-compact-set-are-sections-on-that-set`) were authored
  during this dispatch and were re-read; their clauses match the declared uses.
- **Checks.** precheck PASS (canonical layering 1.1–1.3, 2.1, 3.1, …, 7.1),
  rendercheck OK, proof-layout 9 steps / 0 defects.

### Item 4 (level 11, recomputed 15): `lem-analytic-six-operation-support-and-trace-calculus`

- **Authored** with a 7-step proof: closed-support localization and
  $R\mathcal Hom(i_*k_Z,A)\cong R\Gamma_ZA$; Cartesian base change and ordinary
  proper base change; the independent proper-map verification; the projection
  formula on fibres; composition of proper-support images; exceptional
  composition and traces on the bounded constructible specialization; pasting
  coherence and the explicit "no extraordinary dual base change before
  biduality" boundary.
- **Checks / decision.** precheck PASS, rendercheck OK, proof-layout 7 steps /
  0 defects; its batch-32 clause uses were rechecked against the now-authored
  files. Decision `repaired` / `["dependency"]` (dependency list extended).

### Item 5 (level 14, recomputed 16): `thm-verdier-duality-on-oriented-stratified-complex-varieties`

- **Authored** with a 7-step proof: dualizing transitivity by local section
  complexes; the orientation computation; local systems and the caution about
  boundary links; the finite incidence model; the duals of the cogenerators;
  biduality by induction through the finite resolution; and the duality
  exchange with the extraordinary proper exchange.
- **Supplier status.** `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
  (batch 37) was **authored during this dispatch**; its Statement carries
  exactly the bounded-finite-model clause this item consumes in step 1.4, so
  the use is reconciled at the interface level. The recorded decision is
  nevertheless `escalate` / `["dependency"]` because it was recorded while the
  supplier was missing and only the owner may now resolve the escalation.
- **Checks.** precheck PASS, rendercheck OK, proof-layout 7 steps / 0 defects.

### Item 6 (level 15, recomputed 17): `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`

- **Authored** with a 4-step proof: the ordinary/support-locality clauses, the
  constructible and extraordinary clauses, the product projection with its
  finite model $B\otimes_kC^*(F;k)$ and supplied-factorization smooth base
  change, and coefficient extension.
- **Repairs / escalation.** The dependency list gained the ordinary-operations
  supplier actually cited; the batch-37 finite conical supplier is the same
  now-authored item as in item 5, consumed in steps 1.2 and 1.3, and the
  decision stays `escalate` / `["dependency"]` for the same reason.

### B example (level 15, recomputed 17): `ex-dualizing-and-closed-support-shifts-on-the-complex-line`

- **Authored** with a 2-step verification: the positively oriented disk
  computation giving $\omega_{\mathbb C}=k_{\mathbb C}[2]$, and the
  closed-support computation giving $i^!k_{\mathbb C}=k[-2]$ and
  $i^!\omega_{\mathbb C}=k$ by both the relative-cellular and duality routes.
- **Checks / decision.** precheck PASS, rendercheck OK, proof-layout 2 steps /
  0 defects. Decision `repaired` / `["dependency"]`.

### Item 7 (level 16, recomputed 18): `lem-analytic-constructible-sheaves-admit-coherent-six-operations`

- **Authored** with a 4-step proof: restriction of the operations to $D_c^b$
  with the three adjunctions and the coherent diagrams; proper equality and
  involutive duality; smooth normalization and relative pullback; coefficient
  extension. Decision `escalate` / `["dependency"]` for the batch-37 supplier
  consumed in steps 1.1–1.3 (now authored; interface matches).
- **Checks.** precheck PASS, rendercheck OK, proof-layout 4 steps / 0 defects.

### Item 8 (level 17, recomputed 19): `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`

- **Authored** with a 5-step proof: the recollement and glued t-structure by
  octahedral completion; independence of refinement and gluing; duality
  exchange of the aisles; the heart, intersection complexes, simplicity and
  finite length; negative Hom and division endomorphism algebras over every
  field. Decision `escalate` / `["dependency"]` for the batch-37 supplier
  consumed in step 1.1 (now authored; interface matches). Declaration repair:
  added the octahedral-completion suppliers.

### Item 9 (level 18, recomputed 20): `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure`

- **Authored** with a 3-step proof: the upper aisle by the dimension count on
  compatible strata; the lower aisle by duality and the orientation
  normalization $a^!=a^*[2d]$; truncation, cohomology and reflection for
  surjective $a$. Decision `accept` / `[]`: its reviewed dependency list is
  unchanged, and the compatible-stratification supplier
  (`thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`,
  batch 37) was authored during this dispatch and re-read.

## Pages, manifests, contracts

- Created `library/scheme-theory/analytic-derived-six-operations-and-duality.md`
  (draft; 11 items, the two added prerequisites first, then the nine plan items)
  and `library/scheme-theory/analytic-derived-six-operations-and-duality-examples.md`
  (draft; the single example), both with the plan-controlled `requires` lists
  unchanged.
- `research/…-batch-40.pages.json`: the two added items were registered with
  their statements, dependencies, provenance, sources, `axiom_use` and levels;
  all other entries had their `deps` synced to the authored item files and
  their statements aligned to the authored texts (no claim changed). Because
  sibling manifests drifted during this dispatch, the **dependency levels were
  recomputed and re-recorded**: 0, 1, 8, 13, 14, 15, 16, 17, 17 (B), 18, 19, 20
  — all matching `item-dependency-levels` for this pair at handoff.
- `research/…-batch-40.proof-contracts.json` written: 12 contracts, 159
  citation rows with exact quotes from the cited Statements/Definitions, one
  derivation row per numbered step with complete input tokens, and the eight
  standard boundary dispositions per item (96 rows).
- Coverage (`…-batch-40.coverage.json`) unchanged: the additions reuse the
  pair's existing Verdier/Stacks source documents;
  `coverage-checklist --require-destination` reports 0 errors / 0 warnings and
  `source-fetch-check` 6/6 fetch-verified, 6/6 resolved.
- `research/…-batch-40.cross-batch-dependencies.json` refreshed: **38 verified,
  1 open**. The single open row is the page requirement
  `compact-support-sheaf-calculus` (batch 32, page not yet published); the two
  `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions` rows
  (consumers item 2 and item 3) and the batch-37 supplier and page rows were
  re-verified after their authoring. The frontier dependency ledger was
  refreshed afterwards.

## Checks actually run

- `manifest-deps` on `…-batch-40.pages.json`: 12 items, 0 errors.
- `precheck` (explicit 12 paths): 10 checked, 0 failing; the two definitions
  are not-applicable.
- `rendercheck` (12 items + 2 pages): 14 files OK.
- `proof-layout` (single batch command over the 12 item paths, after the final
  edits): 12 items, 60 steps, 0 defects.
- `content-policy` on `…-batch-40.pages.json` (item mode): 12 scoped items,
  0 errors, 0 warnings.
- `depcheck --items-file` (12 owned IDs): **OK** — all dependencies resolve
  after the batch-32 bounded-resolution supplier was authored. `fwdcheck`
  over the same scope: **OK**, no `link-unplanned` row left. `extcheck`:
  OK, 12 items, 0 recorded-not-proved, 0 resting on them.
- `depsource --items-file … --run …`: 12/12 consumer coverage, 0 unresolved;
  at the final re-run, 147 dependency links resolve to published pages and the
  remainder are in-pair edges to the pair's draft items (the published/planned
  split drifts as sibling manifests are authored; the owned fact is 0
  unresolved).
- `item-dependency-levels check --run …`: every owned label matches its
  computed level (the tool's remaining errors are sibling pairs' rows).
- `validate-plan research/plan-spec.json --run …`: exit 1 with 7
  `undeclared-prereq` errors, **none** touching either owned page; the owned
  page's only messages are the inherited `redundant-prereq` advisories.
- `coverage-checklist --require-destination`: 2 pages, 36 results, 0 errors,
  0 warnings. `source-fetch-check`: 6/6 fetch-verified, 6/6 resolved.
- `proof-contract --strict`: 12/12 items checked, **0 errors, 0 warnings**
  after the batch-32 supplier was authored and its quote re-read.
- `boundary-audit --fail-on-contradicted --fail-on-template`: exit 0; no
  template-reuse cluster and no contradicted disposition.
- `citation-fidelity --fail-on-missing-quote`: every recorded quote appears in
  its cited item (2 not-yet-authored referenced items were skipped, not
  passed).
- `manifest-integrity --run …`: 100 pages owed, 100 in the manifests, no scope
  drift. `prosecheck` over the 12 items and 2 pages: OK. `pathcheck`: the only
  errors are 3 pre-existing pathway errors in other categories; nothing for
  this pair.
- `frontier-dependency-ledger refresh --run …`: refreshed and deduplicated.
- `step3-decisions check --run … --phase final`: of the owned rows, the five
  `repaired`/`accept` items are closed, the five escalations are listed open
  with their recorded `escalate` receipts, and the two added IDs are listed as
  "current item bookkeeping receipt required" — their certifications belong to
  the engine under the additions rule. Receipts were refreshed after sibling
  authoring changed transitive closure bytes; the escalation receipts were left
  untouched, as only the owner may resolve them.

## Supplier reconciliation, published concerns

- **Previously unfinished supplier, reconciled during the dispatch.**
  `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`
  (batch 32) was unauthored when first flagged; it was authored before handoff
  and its Statement now carries exactly the uniform all-fibre-open bound and
  bounded fibrewise-soft resolution clause consumed by
  `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces`
  (Definition: the uniform bound and the resolution $k_X\to K$) and
  `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint`
  (step 2.1: the uniform bound and the finite resolution; step 3.1: the
  resolution of $K_U$). All three gates that had failed on it (`depcheck`,
  `fwdcheck`, `proof-contract --strict`) now pass. The two consumer decisions
  still read `escalate`, because they were recorded while the supplier was
  missing and only the owner may resolve a recorded escalation; the recorded
  reason names the now-satisfied remedy.
- **Also reconciled during dispatch.** `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
  and `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`
  (batch 37) plus the batch-32 c-soft/compact-support/sections-near items were
  authored while this dispatch ran; their statements were re-read and match the
  declared uses. The escalations recorded against the batch-37 supplier remain
  open only because only the owner may resolve a recorded escalation.
- **Published concerns:** none new. No published item was edited; the only
  published contacts are citations, all re-read. Shared-ledger updates remain
  with the serial reconciler.
- **Pre-splice note for Step 4.** The A page now carries **11 items** (nine
  plan items plus the two authorized prerequisites) against the plan's nine;
  `validate-plan` does not flag this, but the inventory addition (and the
  refreshed scope decision) should be carried into the splice record. The
  page's `requires` list is unchanged.

## Handoff status

- **Completed.** All nine plan items and the B example are fully authored;
  both pages exist; the two authorized prerequisite items are fully authored
  and registered (certification with the engine per the additions rule); the
  manifest, coverage, cross-batch inputs, proof contracts and ledger are in
  place; per-item decisions are recorded for the nine plan items and the
  example (five closed, five escalated on the exact supplier flags above).
- **Checks actually run** are listed above with their actual results; all
  owned gates pass at handoff. The only owned open bookkeeping rows are the
  two added IDs awaiting engine certification and the five owner-held
  escalations whose supplier files are now authored and reconciled, plus the
  single open cross-batch row for the batch-32 page requirement.
- **Added suppliers.** Two new IDs minted on this A page:
  `def-proper-continuous-map` and `lem-proper-continuous-map-stability`.
- **Open obligations.** (1) the batch-32 page `compact-support-sheaf-calculus`
  required by the A page; (2) owner resolution of the five recorded
  escalations, whose supplying items are now authored and reconciled at the
  interface level; (3) engine certification of the two added IDs;
  (4) Step 4 splice record of the 11-item inventory, the refreshed scope
  decision and the two new prerequisite IDs.
