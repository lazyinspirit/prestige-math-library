# Batch 68 notes — `gr-curvature-and-tides` / `gr-curvature-and-tides-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-68, covers 68.
Step 1 complete initial authoring only; neither a worker exit nor a readiness
record is independent mathematical approval (Step 2/3 review follows). The A
page is mixed-domain: the first ten items and the in-page example are
mathematics (`domain: mathematics`), while the tidal comparison theorem and
the scope remark are `domain: physics`. The physics items assert adopted
assumptions and model-conditional deductions only; no experiment, no measured
input and no empirical premise occurs anywhere in the batch, and
`pthm-gr-tidal-comparison` states explicitly that it carries no empirical
premises.

## Scope built

- A page `gr-curvature-and-tides` (order 239, category `general-relativity`,
  `library: physics`), 13 locally authored items: 2 definitions, 3 lemmas,
  4 theorems, 1 physics-theorem, 1 remark and 1 example.
- B page `gr-curvature-and-tides-examples` (order 240), 6 leaf items: 4
  examples and 2 counterexamples, each with a numbered verification or
  counterexample.
- Library carriers `library/general-relativity/gr-curvature-and-tides.md` and
  `library/general-relativity/gr-curvature-and-tides-examples.md`; the
  category file `_category.md` was created by batch-65 and is unchanged.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-68.pages.json`.
  Page orders, kinds, categories and `library` fields are unchanged from the
  run scaffold; the manifest edits are the two `items` arrays, the item
  metadata and the `requires` completion recorded below. The manifest
  statement, deps, justified_by, provenance, reference and level fields were
  regenerated from the final item carriers and verified equal to them (0
  mismatches over all 19 items).
- No page split was needed: 13 + 6 items are far below the 100-item cap; the
  GR04 design budget (34 items) is respected.

## Dependency levels (in-run dependencies only)

Computed mechanically from the run manifests and stored in both manifest and
item frontmatter; the `item-dependency-levels.mjs check --run` run names no
batch-68 item (its error lines are empty scaffold inventories of unauthored
batches such as `gr-gr14-…` and `gr-gr15-…`, none of them batch 68).

- A page: `def-gr-curvature-tensor-and-derived-tensors` 6,
  `thm-gr-curvature-tensoriality-and-coordinate-formula` 9,
  `thm-gr-curvature-algebraic-symmetries` 10,
  `thm-gr-second-bianchi-and-divergence-free-einstein` 11,
  `def-gr-jacobi-field-and-conjugate-instant` 7,
  `thm-gr-jacobi-equation-and-geodesic-deviation` 11,
  `lem-gr-conjugacy-via-the-exponential-map` 12,
  `lem-gr-normal-index-form-factorization` 12,
  `thm-gr-conjugacy-and-local-timelike-maximum` 13,
  `lem-gr-algebraic-curvature-vanishing-criterion` 11,
  `pthm-gr-tidal-comparison` 12,
  `rem-gr-curvature-tidal-scope-and-conventions` 13,
  `ex-gr-curvature-in-a-point-normal-chart` 12.
- B page: `ex-gr-flat-metric-in-cylindrical-coordinates` 12,
  `ex-gr-curvature-of-a-product-with-a-round-sphere` 12,
  `ex-gr-jacobi-fields-in-flat-space` 13,
  `ex-gr-conjugate-instant-on-a-round-sphere-factor` 13,
  `cex-gr-symmetries-do-not-imply-bianchi` 12,
  `cex-gr-vanishing-tidal-operator-for-one-observer` 12.
- The batch-level scheduling metadata (`…-batch-dependency-levels.json`) gives
  batch 68 level 3 requiring batch 67; the batch-65/66/67 supplier items are
  recorded `ready`, and no out-of-run supplier raises an in-run level.

## Design vs plan-spec conflicts (recorded as required)

- The design section `research/plan-general-relativity-track.md` L78
  ("Curvature And Tides") and the dispatch declare the earlier prerequisite
  `gr-connections-and-free-fall` only; `research/plan-spec.json` declares the
  same single prerequisite for the A page, and the scaffold's page
  orders/kinds/budget (34) are preserved. The design inventory (M06 tensorial
  curvature with Ricci/scalar, M11 symmetries/Bianchi, M19 geodesic deviation,
  pthm tidal comparison) is covered item by item below.
- CONFLICT (recorded): the authored closure consumes the published
  mathematical supplier `thm-nonzero-real-polynomial-has-at-most-degree-many-
  distinct-roots` (used by `lem-gr-algebraic-curvature-vanishing-criterion` in
  its finite-dimensional reduction), whose home is the plan's published `P`
  page `fundamental-trigonometric-identities`; that page was not in the A
  page's declared `requires`, so `validate-plan --run` reported
  `[undeclared-prereq] page gr-curvature-and-tides has an item depending on
  fundamental-trigonometric-identities`. Following the validator's own
  instruction and the batch-65/67 precedent, the A page manifest `requires`
  now lists `gr-connections-and-free-fall` plus
  `fundamental-trigonometric-identities`; no plan-spec or design file was
  edited. Because the plan-spec page requires and the manifest differ,
  `splice-plan.mjs` will report a `requires` drift for the owner to reconcile
  at the join; the dependency is genuinely consumed and is not redundant under
  the plan graph (no `redundant-prereq` warning names either batch-68 page).
  The B page requires only its A page.
- After this fix, no `validate-plan` error names a batch-68 page. The
  remaining 4 errors are corpus-level findings in other batches
  (`qm-math-coulomb` twice, `qm-math-magnetic-and-detection`,
  `qm-math-magnetic-and-detection-examples`), recorded here for the owner.

## Supplier policy and dependency evidence

- Batch-65/66/67 in-run suppliers actually used, each read at statement level
  and recorded `ready` in its own batch: `def-gr-smooth-lorentzian-objects`,
  `def-gr-smooth-covariant-two-tensor-field`,
  `def-gr-metric-selected-connection`,
  `def-gr-inverse-metric-and-musical-isomorphisms`,
  `lem-gr-connection-conditions-in-chart-components`,
  `def-gr-si-unit-and-coordinate-conventions`,
  `post-gr-spacetime-and-classical-domain` (batch 65);
  `def-gr-tensor-fields-and-components`, `def-gr-observer-and-rest-space`,
  `lem-gr-observer-projection-decomposition`,
  `lem-gr-observer-pairing-with-future-causal-vectors` (batch 66);
  `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`,
  `thm-gr-local-geodesics-and-exponential-map`,
  `thm-gr-point-normal-and-exponential-coordinate-charts`,
  `lem-gr-parallel-transport-and-geodesic-speed`,
  `thm-gr-lorentz-gauss-lemma-and-normal-maximum`,
  `def-gr-timelike-worldline-and-proper-time`,
  `lem-gr-proper-time-reparametrization-and-four-velocity`,
  `post-gr-ideal-clocks-and-free-fall`,
  `pthm-gr-free-fall-worldline-is-determined-by-initial-data` (batch 67).
- Cross-batch input
  `research/physics-cm-qm-gr-79-2026-10-11-batch-68.cross-batch-dependencies.json`
  has 96 `item` rows (every declared `deps` or `justified_by` edge from a
  batch-68 item into a batch-65/66/67 item, each `verified` with the consumer's
  fact label, the steps that cite it and the supplier's own statement clause)
  plus one `page` row (`gr-curvature-and-tides` -> `gr-connections-and-free-
  fall`). The same-batch B->A `requires` edge is deliberately not in this
  cross-batch input. `frontier-dependency-ledger.mjs refresh --run
  physics-cm-qm-gr-79-2026-10-11` merged the input: batch 68 is in
  `reviewed_batches`, consumer-68 edges 97 with 0 open and 0 orphaned reviews.
- Imported mathematics is read-only and was never edited. Mathematical items
  depend only on mathematical items: no `domain: mathematics` item in this
  batch has a `domain: physics` item in `deps` or `justified_by` (this was
  checked after construction; a first draft of
  `ex-gr-flat-metric-in-cylindrical-coordinates` cited the scope remark and
  the dependency was removed and the sentence rewritten). The physics items'
  physics dependencies are `post-gr-spacetime-and-classical-domain`
  (formulation prerequisite), `post-gr-ideal-clocks-and-free-fall` (physical
  assumption) and `pthm-gr-free-fall-worldline-is-determined-by-initial-data`
  (physical result).
- No item in this batch makes an infinite selection or invokes the Axiom of
  Choice: the selections are single point-normal charts, one parallel
  orthonormal frame (supplied by `lem-gr-parallel-transport-and-geodesic-
  speed`) and finite chart covers of compact segments supplied by finiteness
  arguments; `def-axiom-of-choice` is in no `deps`, and no item reaches
  `deferred-set-theory-beyond-choice` through any proof or prerequisite path.

## Mathematical content and routes

- **M06 (curvature and derived tensors).** The curvature operator
  $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, its
  components $R^a{}_{bcd}$, and the lowered Riemann, Ricci, scalar and
  Einstein tensors are defined with a fixed sign and index order
  (`def-gr-curvature-tensor-and-derived-tensors`); tensoriality, the chart
  formula and the point-normal four-term metric formula are proved in
  `thm-gr-curvature-tensoriality-and-coordinate-formula`.
- **M11 (symmetries and Bianchi).** The two skew-symmetries, pair exchange,
  first Bianchi identity and Ricci/Einstein symmetries
  (`thm-gr-curvature-algebraic-symmetries`), and the second Bianchi identity
  with its two contractions giving $\nabla^aG_{ab}=0$
  (`thm-gr-second-bianchi-and-divergence-free-einstein`).
- **M19 (geodesic deviation and conjugacy).** Jacobi fields, geodesic
  variations, conjugate instants with multiplicity and the normal bundle
  (`def-gr-jacobi-field-and-conjugate-instant`); the commutator identity, the
  deviation equation and the 8-dimensional initial-value theory
  (`thm-gr-jacobi-equation-and-geodesic-deviation`); the identification of
  $d(\exp_p)$ with Jacobi fields and the kernel/multiplicity characterization
  (`lem-gr-conjugacy-via-the-exponential-map`); the matrix index form and its
  factorization before the first conjugate instant
  (`lem-gr-normal-index-form-factorization`); and the local proper-time
  maximum with equality characterization
  (`thm-gr-conjugacy-and-local-timelike-maximum`).
- **Algebraic criterion.** The pointwise lemma that an algebraic curvature
  tensor whose tidal operator vanishes for every timelike direction is zero,
  with its polarization and Lorentzian extension
  (`lem-gr-algebraic-curvature-vanishing-criterion`).
- **Physics items.** The model-conditional tidal comparison
  (`pthm-gr-tidal-comparison`): free-fall congruence deviation is exactly
  $R(U,J)U$, contains no rest mass or internal-structure parameter, vanishes
  with the curvature and detects it for all timelike directions; and the scope
  note `rem-gr-curvature-tidal-scope-and-conventions` fixing units and
  conventions and separating chart artifacts from curvature.
- **B page.** Flat space in cylindrical coordinates with nowhere-vanishing
  Christoffel symbols and identically vanishing curvature
  (`ex-gr-flat-metric-in-cylindrical-coordinates`); the product of a round
  unit sphere with flat time and space directions, with $R_{1212}=\sin^2(x^1)$,
  $\operatorname{Ric}=\operatorname{diag}(0,1,\sin^2(x^1),0)$, $S=2$,
  $G=\operatorname{diag}(1,0,0,-1)$ and a term-by-term divergence check
  (`ex-gr-curvature-of-a-product-with-a-round-sphere`); affine Jacobi fields
  and the absence of conjugate instants in flat space
  (`ex-gr-jacobi-fields-in-flat-space`); the equator geodesic with the Jacobi
  field $\sin(s)\,\partial_1$, first conjugate instant $\pi$ of multiplicity
  one and the one-dimensional kernel of $d(\exp_p)$
  (`ex-gr-conjugate-instant-on-a-round-sphere-factor`); and the two algebraic
  counterexamples promised by the page's remarks
  (`cex-gr-symmetries-do-not-imply-bianchi`,
  `cex-gr-vanishing-tidal-operator-for-one-observer`).

## Sources

- Three independent treatments were read against downloaded full texts:
  Carroll, *Lecture Notes on General Relativity* arXiv:gr-qc/9712019 (Ch. 3
  curvature, symmetries, Bianchi identities, Ricci/Einstein tensors and
  geodesic deviation); Reall, *Part III General Relativity*, October 12, 2022
  revision (sections 4.2-4.6: the Riemann tensor, its symmetries, the second
  Bianchi identity, geodesic deviation with the tidal reading, the
  normal-coordinate formula (4.29) and the expansion (4.35), the Ricci tensor
  and the contracted Bianchi identity (4.33)-(4.34)); Tong, *General
  Relativity*, Michaelmas 2019 (sections 3.2.2, 3.3.2, 3.3.4 and 3.4: the
  Riemann tensor and the S² curvature (3.20), normal coordinates with the
  second-derivative counting, the meridian deviation (3.37)-(3.38), the
  coordinate formula (3.39), the symmetries and Bianchi identity (3.40), and
  the Ricci and Einstein tensors).
- All three are full-text fetch-verified in
  `research/physics-cm-qm-gr-79-2026-10-11-batch-68.coverage.json`:
  `source-fetch-check --coverage … --stamp` reported "3/3 source(s)
  fetch-verified (3 newly stamped)" with byte counts and sha256_16 identical
  to the batch-67 stamps for the same URLs (Carroll 1,583,209 bytes /
  `d4cbfeed3a18370c` / 238 pages; Reall 1,017,792 bytes / `fe8a24c67e884ff1`
  / 125 pages; Tong 3,585,098 bytes / `9d746c8091e7e879` / 289 pages).
- Coverage harvests 28 named results with dispositions (16 included, 5
  inline, 2 deferred, 2 out-of-scope); `coverage-checklist.mjs
  --require-destination` reports 1 page, 28 harvested results, 0 errors, 0
  warnings. The deferred destinations are plan-spec pages
  (`gr-einstein-and-matter`, `gr-spherical-vacuum-model`); the out-of-scope
  results are the dimension-specific component counting and the
  connection-form formalism.
- **Unresolved source limitation (for the owner).** Seven A items cite
  Minguzzi's Living Reviews in Relativity 22 (2019) review for §6.1
  (conjugacy, Proposition 6.3, the matrix of Jacobi fields). The claim was
  read against the locally stored full text
  (`research/first-principles-2026-10-03/relativity/advanced-sources/
  minguzzi-living-review.txt`, 587,582 bytes, containing §6.1 and Proposition
  6.3), but the canonical PDF URL `https://link.springer.com/content/pdf/
  10.1007/s41114-019-0019-x.pdf` is bot-walled in this environment
  (`source-fetch-check` reports the cookie-consent interstitial
  `cookies_not_supported / cookieAbsent`), an arXiv title search returns no
  entry, and no alternate full-text mirror was found. `source-fetch-check` was
  therefore run on the three sources above, which are independent treatments
  of every harvested curvature, conjugacy and deviation result and are the
  page's primary backing; the Minguzzi references remain in the item carriers
  as secondary pointers to content that is also proved locally. The fetch
  limitation on the official URL is recorded here rather than hidden; no
  mathematical claim rests on it alone.

## Repairs and edits to authored carriers in this dispatch

- Authored the six B-page items and, after `adopt-precheck.mjs` renumbered the
  in-page example `ex-gr-curvature-in-a-point-normal-chart`, repaired its
  step cross-references and restored the heading order mangles by the
  adoption helper; the item re-prechecked clean.
- Removed a first-draft dependency of
  `ex-gr-flat-metric-in-cylindrical-coordinates` on the physics scope remark
  and rewrote the sentence, so no mathematical item depends on a physics item.
- Rebuilt `ex-gr-jacobi-fields-in-flat-space` so that it no longer depends on
  the batch-67 B-page item `ex-gr-flat-space-geodesics-and-proper-time`
  (`depcheck` hard error `b-leaf-content`): the flat connection, its
  geodesics and $\exp_p(v)=p+v$ are now proved locally from
  `lem-gr-connection-conditions-in-chart-components`,
  `prop-coordinate-geodesic-equation` and
  `thm-gr-local-geodesics-and-exponential-map`; the same edit removed the
  cross-page link to that B-leaf item from the cylindrical-coordinates example.
- Silenced four `cited-not-in-deps` warnings by declaring the citations that
  the definition texts already use: `def-gr-curvature-tensor-and-derived-
  tensors` now lists `thm-gr-curvature-algebraic-symmetries` in
  `justified_by`, `def-gr-jacobi-field-and-conjugate-instant` lists
  `lem-gr-conjugacy-via-the-exponential-map` and
  `lem-gr-normal-index-form-factorization` in `justified_by`, and
  `lem-gr-normal-index-form-factorization` declares
  `thm-gr-curvature-tensoriality-and-coordinate-formula` in `deps`
  (mathematical-premise; no level change).
- Compressed eight multi-line display blocks into single source lines in the
  A items and the in-page example (rendercheck `multiline-display`), and
  regenerated the manifest and the proof-contract citations afterwards so the
  carriers stay hash-consistent with their quotes.
- Two content repairs during the final read-through of the B page:
  `ex-gr-flat-metric-in-cylindrical-coordinates` step 3.1 displayed the sign
  of the fourth curvature term incorrectly (the correct combination is
  $-\Gamma^1{}_{22}\Gamma^2{}_{12}$ with value $+1$, giving
  $R^1{}_{212}=-1+1=0$); the display and its surrounding sentence were
  corrected, and `ex-gr-curvature-of-a-product-with-a-round-sphere` step 2.1
  now disposes explicitly of the two candidate components with a repeated
  index in the first lower pair (they vanish by the skew-symmetry) instead of
  asserting the reduced two-component check. Both items re-prechecked,
  re-rendered, re-laid-out clean, their contract entries were regenerated, and
  their readiness records (and that of the dependent
  `ex-gr-conjugate-instant-on-a-round-sphere-factor`) were re-recorded.

## Proof contracts

- `research/physics-cm-qm-gr-79-2026-10-11-batch-68.proof-contracts.json`
  covers 17 entries: the 16 proof-bearing items (10 A + 6 B) and the scope
  remark (empty citations/derivations and all eight boundary dispositions).
  The two definitions carry no supplied argument and are outside the contract
  scope, matching batch-65/66/67.
- Citations and derivations were generated by `regen-contract-entries.mjs`
  from the final on-disk Facts and numbered steps, so every `[L#]` link has an
  exact quote from the source item's citable section and every numbered step
  states its inputs; boundary rows were authored per item (136 rows, 85
  marked not_applicable, all item-specific).
- `proof-contract.mjs … --strict`: 0 error(s), 0 warning(s), 17/17 item(s)
  checked. `boundary-audit.mjs … --fail-on-contradicted`: 136 rows over 1
  contract file, 85 not_applicable, no template clusters at or above 3
  members, no contradicted dispositions. `proof-contract-coverage.mjs --run`
  remains blocked by the run-level limitation "Empty or invalid frontier page
  inventory cm-math-numerical" recorded for batch-65/66/67; it names no
  batch-68 item.

## Checks run (exact results)

- precheck (all 19 batch items): 19 pass, 0 fail; each proof-bearing item
  reports "1 checked, 0 failing — all clean" (the definitions and the remark
  report 0 checked each).
- rendercheck (19 items + 2 library pages): OK — 21 file(s): no wikilink
  inside math, no nested or unbalanced delimiters, no multiline display block,
  every math span parses under the real KaTeX, and every frontmatter block
  parses.
- proof-layout (19 items): 19 items, 94 steps, 0 defects.
- manifest-deps (batch-68 manifest): 19 item(s), 0 normalized, 0 error(s).
- content-policy (batch-68 manifest): 19 scoped item(s), 0 error(s),
  0 warning(s).
- depcheck (focused on the 19 items): OK — selected item/page checks and their
  prerequisite cycle checks passed; 0 warnings.
- fwdcheck (focused): OK — no open forward references; no cycle findings.
- extcheck (focused): "extcheck: 27655 items, 0 recorded-not-proved, 0 resting
  on them".
- pathcheck (general-relativity): 0 pathway files checked, 0 errors,
  0 warnings.
- physics-check --run physics-cm-qm-gr-79-2026-10-11 --plan
  research/plan-spec.json: "physics-content: 68 error(s), 531 items checked";
  none of the 68 error lines names a batch-68 item. The errors are in
  concurrently authored other batches (the `nrqm-coulomb` and
  `nrqm-magnetic-and-detection` families and one `cm` item), largely
  `dependency-role-extra` and `mathematical-role` findings on their own
  manifests; they are recorded here as corpus-level findings for the owner and
  are outside this batch's ownership.
- validate-plan (plan-spec, --run): after the manifest `requires` completion
  recorded above, the run reports
  "OK — declared page order is acyclic and consistent; no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the 52
  page(s) with item lists", with no error naming a batch-68 page.
- item-dependency-levels check --run: no line names a batch-68 item; the
  remaining errors are empty scaffold inventories of unauthored batches.
- coverage-checklist --require-destination: 1 page, 28 harvested results,
  0 errors, 0 warnings; source-fetch-check (check mode): 3/3 sources
  fetch-verified.
- audit-manifest over the run's 79 manifests: "6108 relationship(s) over 531
  item(s) in 79 batch(es); 0 defect(s)".
- frontier-dependency-ledger refresh --run: "refreshed and deduplicated";
  batch 68 is in `reviewed_batches` with 97 consumer-68 edges, 0 open and
  0 orphaned reviews.

## Readiness records

All 19 items are recorded `ready` with
`step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item ID
--decision ready --dependencies <the item's declared deps> --reason
<evidence summary>` after the final carrier edits, so each record's hash binds
the final item text to its examined dependency list. Three records were written
again after the last carrier edits: `ex-gr-flat-metric-in-cylindrical-
coordinates` (sign repair of a displayed curvature term),
`ex-gr-curvature-of-a-product-with-a-round-sphere` (candidate-component
clarification and Example list formatting) and
`ex-gr-conjugate-instant-on-a-round-sphere-factor` (whose record binds the
transitive supplier bytes and was therefore invalidated by the supplier's
edits, per `frontier-snapshot.mjs` `itemHash`);
`step1-decisions.mjs check --run` then reports no open record naming a batch-68
item. No item was escalated:
every cross-batch supplier is an in-run batch-65/66/67 item recorded `ready`
or an inspected published mathematical item, and the only plan-level conflict
(the published `P`-page prerequisite) is recorded above for owner
reconciliation at the Step-2 join. Two kind-specific qualifications:
`def-gr-curvature-tensor-and-derived-tensors` and
`def-gr-jacobi-field-and-conjugate-instant` carry no proof section and no
proof-contract entry (definitions with no supplied argument are outside the
contract scope, as in batch-65/66/67), and
`rem-gr-curvature-tidal-scope-and-conventions` carries a contract entry with
empty citations/derivations and eight boundary dispositions rather than step
inputs.
