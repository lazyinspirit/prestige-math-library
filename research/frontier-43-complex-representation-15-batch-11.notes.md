# Batch 11 notes — `periods-jacobians-and-abel-jacobi-theory`

Run `frontier-43-complex-representation-15`, role beta (Step 1 scaffold), batch 11, attempt 1.

Pair: `periods-jacobians-and-abel-jacobi-theory` (A, order 1614) and
`periods-jacobians-and-abel-jacobi-theory-examples` (B, order 1615), category
`complex-analysis`. Outputs: `research/frontier-43-complex-representation-15-batch-11.pages.json`,
`research/frontier-43-complex-representation-15-batch-11.coverage.json`,
`research/frontier-43-complex-representation-15-batch-11.cross-batch-dependencies.json`, the 29
item-readiness receipts `research/frontier-43-complex-representation-15-step1-<item>.json`, and this
file. A readiness record is not mathematical approval: Step 3 authors the proofs and Step 5 reviews
them.

## Inputs read

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md` and this dispatch.
- Owner direction `research/frontier-43-complex-representation-15-owner-authoring-direction.md`, read
  in full; it is binding. Its Step-1 findings concern batches 13/14 (Beltrami regularity and the
  downstream CA-QC-3 use), batches 1 and 5 (RG-26 decomposition) and batch 4 (RG-29); none adds an
  obligation to this pair beyond the standing rules ("carry the choice assumptions of actual
  suppliers", no active `proved_here:false`, no `external_refs` fallbacks).
- Design `research/plan-complex-analysis-track.md` CA-RS-3 (L4049-L4093) and `research/plan-spec.json`
  (orders, ids, titles, `requires`, companions for both pages).
- Drift review `research/frontier-43-complex-representation-15-alpha-step1-drift.md`: verdict
  `no-drift` for this page ("These supply the design's symplectic homology basis, period pairing,
  discreteness of the period lattice, and divisor/Jacobian constructions. ... No edge or ordering
  correction is needed.").
- `research/frontier-43-complex-representation-15-beta-11.task.md`, the batch stubs, the run
  step-1 blockers record, the run dependency ledger inputs, and the in-run supplier manifests
  `...-batch-9.pages.json` (CA-RS-H) and `...-batch-10.pages.json` (CA-RS-2), read item by item.

### Design vs plan

The design's shorthand `requires` ("CA-RS-2, HA-1 `chain-complexes-and-homology`, DG-14/DG-15 for
Stokes and de Rham homotopy invariance, and finite-dimensional Hermitian linear algebra") is
concretized by plan-spec to exactly the seven published or in-run pages listed on the A page:
`cw-complexes-and-cellular-homology`, `cup-cap-cross-products-and-cohomology-rings`,
`orientations-poincare-lefschetz-and-alexander-duality`, `the-de-rham-theorem-and-degree`,
`hilbert-space-geometry-and-riesz-representation`, `divisors-riemann-roch-and-duality`,
`classification-of-compact-connected-surfaces`. The plan controls. Two observations for the owner,
recorded rather than edited:

1. The design names HA-1 `chain-complexes-and-homology` as the homology supplier; the plan's
   `requires` lists `cw-complexes-and-cellular-homology` instead. The CW page is at least as strong
   for this page (its `thm-cellular-homology-computes-singular-homology` is exactly the bridge used
   by the one-polygon computation), so the substitution is adequate; no drift.
2. The design's proof route needs the Hodge/Dolbeault output of CA-RS-H
   (`hodge-theory-on-compact-riemann-surfaces`, batch 9), which is **not** named in the plan's
   `requires` for CA-RS-3. The dependency is transitive at page level (CA-RS-2 requires CA-RS-H), and
   this batch declares the direct item-level dependencies on batch-9 items
   (`thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology`,
   `cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional`,
   `thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface`,
   `def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface`,
   `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface`) so that the edge is
   explicit. No plan edit is requested.
3. `validate-plan` emits inherited `redundant-prereq` warnings for the page's plan-level `requires`
   (e.g. `cw-complexes-and-cellular-homology` is reachable through several other entries). These are
   properties of the shared plan's `requires` array and are not edited by a scaffold worker.

## Inventory

A page (23 items). The design's 9 items are all present with their claim:
`thm-symplectic-homology-basis-compact-riemann-surface`, `def-period-pairing-and-period-lattice`,
`thm-riemann-bilinear-relations`, `def-jacobian-of-a-compact-riemann-surface`,
`def-abel-jacobi-map`, `thm-abels-theorem-for-divisors`, `thm-jacobi-inversion`,
`cor-picard-zero-is-the-jacobian`, `thm-abel-jacobi-embedding-positive-genus`. Fourteen
prerequisites were added to close the proofs locally:

| added item | why it exists |
|---|---|
| `lem-cellular-homology-of-the-one-polygon-surface-model` | H_1 = Z^{2g} with the side classes as basis from the one-polygon CW structure; the design's "polygonal schema and HA-1 compute H_1" step |
| `def-intersection-form-on-the-homology-of-a-closed-oriented-surface` | the intersection form on H_1 (Poincare-dual cup form), with the adjunction identity used in every computation |
| `lem-holomorphic-differentials-form-a-g-dimensional-space` | dim Omega = g, deg K = 2g-2, finiteness of zeros, closedness of holomorphic forms |
| `lem-period-pairing-is-well-defined-and-computed-by-integration` | well-definedness of the period pairing, agreement with contour integrals, descent to homology |
| `lem-cut-surface-and-boundary-jumps-of-primitives` | the cut surface, primitives of closed forms and the boundary jumps that turn Stokes into the period formula |
| `thm-symplectic-period-formula-for-wedge-integrals` | int_X alpha wedge beta = sum of a- and b-period products (McMullen Thm 15.13); nondegeneracy and isotropy of Omega |
| `lem-abel-jacobi-map-is-well-defined-and-base-point-independent` | path ambiguity = period; holomorphy and derivative; base-point cancellation for degree zero |
| `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity` | Forster's weak solution and the identity int_c omega = (1/2 pi i) int (df/f) wedge omega |
| `lem-dbar-solvability-criterion-for-a-smooth-zero-one-form` | a (0,1)-form is dbar-exact iff it pairs to zero with every holomorphic form (Hodge-star duality of batch 9) |
| `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere` | existence, holomorphy and vanishing of the trace of a holomorphic differential on P^1 |
| `lem-principal-divisors-have-vanishing-abel-jacobi-class` | the easy direction of Abel's theorem via the preimage chain of a curve from infinity to zero |
| `lem-holomorphic-differentials-separate-generic-points` | g points at which the evaluation of Omega is an isomorphism; the Jacobian matrix of the local period map |
| `def-picard-group-of-divisor-classes-and-pic-zero` | the quotient Div/linear equivalence, degree and Pic^0, with the line-bundle dictionary |
| `lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism` | a degree-one holomorphic map is a biholomorphism; used for injectivity of the point map |

B page (6 items), one per design companion entry: `ex-periods-of-a-complex-torus`,
`ex-symplectic-homology-basis-of-a-genus-two-surface`,
`ex-period-matrix-and-jacobian-of-the-pentagon-curve` (the genus-two period matrix, explicit),
`ex-base-point-cancellation-for-degree-zero-divisors`, `ex-principal-divisor-tests-via-the-abel-jacobi-map`,
`ex-abel-image-in-its-jacobian`.

Proof order on the A page (dependency order, verified by `item-dependency-levels`):
polygon homology L0, intersection form L1, symplectic basis L2, holomorphic differentials L15
(batch-10 chain), period pairing L16 and its well-definedness L17, cut surface L18, wedge-period
formula L19, bilinear relations L20, Jacobian L21, Abel-Jacobi map L22-L23, weak solution L24 and
dbar criterion L11 (batch-9 chain), trace L15, principal divisors L24, Abel's theorem L25, separation
L16, Jacobi inversion L24, Picard group L15, Pic^0 = Jac L26, degree-one lemma L0, embedding L26.
B-page levels: 27, 3, 27, 24, 28, 28.

Conventions fixed on the page: intersection form through the Poincare-duality adjunction identity
`<a cup b,[X]> = <b, D(a)>` of `cor-poincare-duality-gives-a-nonsingular-cup-pairing` step 1.1; the
symplectic matrix J with J_{2i-1,2i} = 1 in the ordering (a_1,b_1,...); the period pairing as the
contour integral over the side loops; the pairing S(alpha,beta) = sum (alpha(a_i)beta(b_i) -
alpha(b_i)beta(a_i)) matching McMullen Thm 15.13 and Looijenga's dot product. The adjunction
identity was checked against the library's own cap-product convention (the published corollary's
proof step 1.1) and the standard matrix computation was verified independently in the flat torus
model before the item was written.

## Sources and harvest

Three sources were harvested in full text (all fetch-verified in the coverage file):

- Eduard Looijenga, *Riemann Surfaces* (2007 author notes, 63 PDF pages): Ch. 1 §2, Ch. 2 §2/§4,
  Ch. 3 §§1-3, Ch. 6 §2, and Ch. 7 §§1-2 in full (the Jacobian and the Abel-Jacobi map, including
  Lemmas 7.2/7.4/7.8/7.9, Propositions 7.1/7.5, Theorems 7.6 and Corollary 7.7). Stamp: 443320
  bytes, sha256_16 `0e56ac4ff91be48e`.
- Curtis T. McMullen, *Riemann Surfaces* (Harvard Math 213b notes, 183 PDF pages): Ch. 15 in full
  (Theorems 15.1-15.15, the pentagon example, the wedge-period formula, both proofs of Abel's
  theorem, Jacobi inversion). Stamp: 1128808 bytes, sha256_16 `1442374a6f3a389a`.
- Karl Otto Forster, *Lectures on Riemann Surfaces* (GTM 81, 262 PDF pages): Ch. 2 §§20-21 in full
  (`Abel's Theorem` and `The Jacobi Inversion Problem`). Stamp: 19052171 bytes, sha256_16
  `a7734adc75598d2b`.

The coverage file records 55 harvested headings with dispositions: 29 `included`, 17 `inline`
(alternative proofs or absorbed steps with explicit proof mappings), 2 `already-published`
(Looijenga's complex-torus example and meromorphic-differential definition, both existing library
items), 2 `deferred` with destinations (the Bergman metric to `bergman-and-szego-kernels`; linear
systems as fibers to `divisors-riemann-roch-and-duality`), and 5 `out-of-scope` with specific
reasons (Looijenga Exercise 7.1; McMullen's Gauss-map remark, folds remark, and the later
abelian-variety/theta section; Forster's harmonic-representative Corollary 20.6). Every harvested
heading carries a disposition.

`coverage-checklist --require-destination` reports 55 harvested results, 0 errors, 0 warnings.
`source-fetch-check` confirms 3/3 fetch-verified; `url-sweep` reports 3/3 live, 0 suspect;
`source-backing` confirms 17 authored results are backed by openable sources.

### Design source pointer that could not be honoured as written (owner-relevant, non-blocking)

The design's source list names "Schlag Ch. 8 §§1-5 ('Homology, periods and bilinear relations',
'Divisors', 'Riemann-Roch', 'Applications', 'Abel and Jacobi')". The published book (AMS GSM 154)
has Chapter 8 "Uniformization"; the Riemann-Roch/Abel/Jacobi material is Chapter 7, printed
pp. 269-304. Retrieval attempts (2026-10-07): (1) `https://www.ams.org/books/gsm/154/gsm154.pdf`
→ HTTP 403; (2) `https://www.ams.org/books/gsm/154/07` (chapter landing) → HTTP 403/HTML shell, no
body; (3) `https://math.uchicago.edu/~schlag/book.pdf` → HTTP 404; (4) a web search found only the
publisher page, Google Books front matter, and file-sharing aggregators (not authoritative). The
design's locator is therefore stale and the book is not openly readable. The two-treatment rule is
met with room to spare by Looijenga (book-length notes), McMullen (full course notes) and Forster
(monograph, GTM 81), each read in full over the exact ranges recorded above, so the page does not
depend on Schlag. Recorded for owner reconciliation of the design text; no scope or claim was
narrowed.

## Checks run (actual results)

| check | actual result |
|---|---|
| `node tools/item-dependency-levels.mjs check --run frontier-43-complex-representation-15` | all 29 batch-11 labels match the computed levels (0-28); the only errors are `empty scaffold inventory` for the still-empty batches 4 and 5 (`kazhdans-property-t-and-spectral-gap`, `sl2-r-discrete-series-and-unitary-dual` and their B pages) |
| `node tools/manifest-deps.mjs research/...batch-*.pages.json` | 313 item(s), 0 normalized, 0 error(s) (all 15 manifests at run time) |
| `node tools/content-policy.mjs --manifest-only research/...batch-*.pages.json` | 313 scoped item(s), 0 error(s), 0 warning(s) |
| `node tools/coverage-checklist.mjs research/...batch-11.coverage.json --require-destination` | 1 page, 55 harvested results, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage research/...batch-11.coverage.json --stamp` | 3/3 fetch-verified (3 newly stamped); check mode 3/3 resolved |
| `node tools/url-sweep.mjs --coverage research/...batch-11.coverage.json --out /tmp/b11/url-sweep.json` | 3/3 live, 0 failed, 0 suspect |
| `node tools/source-backing.mjs --coverage ... --liveness /tmp/b11/url-sweep.json` | 17 authored result(s), every one backed by an openable source |
| `node tools/frontier-item-gate.mjs --run ... --tool validate-plan` | exit 0; no item-level cycles/forward references for the pages with item lists; inherited `redundant-prereq` warnings on the shared plan's `requires` arrays (including this page's) and a NOTE that 30 planned page files carry no item list yet. Re-check after authoring |
| `node tools/frontier-item-gate.mjs --run ... --tool extcheck` | FAIL, 313 ERROR(s), all `focus-item-unknown` for manifest items with no authored carrier yet (including this batch's ids): the documented Step-1 state; extcheck is re-run after Step-3 authoring |
| `node tools/frontier-item-gate.mjs --run ... --tool depcheck` | FAIL, 313 ERROR(s), all `focus-item-unknown` for the same reason; the page-level prerequisite depth section is empty until carriers exist. Re-run after Step-3 authoring |
| `node tools/frontier-dependency-ledger.mjs refresh --run ... --require-reviewed` | run-level FAIL "Cross-batch review incomplete": this batch's 34 consumer-side edges are all reviewed (batch 11 is listed under `reviewed_batches`); the remaining unreviewed edges belong to batches 4, 5, 14 (not yet scaffolded) and one page edge `divisors-riemann-roch-and-duality -> hodge-theory-on-compact-riemann-surfaces` whose review row belongs in batch 10's consumer input (observation below) |
| `node tools/step1-decisions.mjs check --run frontier-43-complex-representation-15` | run snapshot 313 items, 308 closed at the final check (the count rises as concurrent batches write their receipts); **zero** open or invalid rows belong to this pair; all 29 batch-11 receipts closed against the final manifest bytes |
| `git status` | this attempt wrote only `research/frontier-43-complex-representation-15-batch-11.*` and the 29 `research/frontier-43-complex-representation-15-step1-<batch-11 item>.json` receipts; no published item, shared plan or engine file was touched (other files in the tree are concurrent writers) |

## Cross-batch record

Consumer-side edges of this batch (see `...-batch-11.cross-batch-dependencies.json`, 34 rows):

- Page edge: the A page `periods-jacobians-and-abel-jacobi-theory` (order 1614) **requires**
  `divisors-riemann-roch-and-duality` (batch 10, order 1612). It is the only page-level cross-batch
  edge.
- Item edges to batch 10 (planned, not yet authored): `def-divisor-principal-and-canonical-divisor-
  riemann-surface`, `def-line-bundle-associated-to-a-divisor`,
  `thm-riemann-roch-compact-riemann-surfaces`, `thm-serre-duality-compact-riemann-surfaces`,
  `thm-finiteness-cohomology-compact-riemann-surface`.
- Item edges to batch 9 (CA-RS-H, planned, not yet authored):
  `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface`,
  `def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface`,
  `thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology`,
  `thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface`,
  `cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional`.

Suppliers examined and found adequate: the batch-10 statements are stated for compact connected
Riemann surfaces under AC and carry `l(D)`, `l(K)`, `i(D)`, the divisor-to-line-bundle dictionary
and `l(K) = g` via Serre duality; the batch-9 statements supply the harmonic-star duality
`H^{0,1}(X,O) ≅ H^0(X,K)^*` and finite-dimensional Dolbeault groups, which is exactly the
dbar-solvability input. Both supplier manifests were read in full, item by item, before readiness
was recorded. Status `open` on every row because the supplier items are scaffolded but not
authored; re-verify the written proofs at the Step-3 reconciliation, not from page presence.

Assumption propagation the consumers must carry: every cross-batch supplier used here assumes the
**Axiom of Choice** (Riemann-Roch, Serre duality, finiteness, Hodge decomposition, harmonic-star
duality), and so do all batch-11 items that consume them; the items whose dependency closure is
choice-free are the polygon homology lemma, the degree-one lemma, the cellular/homology part of the
intersection-form definition, and (through the published polytope/CW/qrpr items) the top of the
symplectic-basis theorem up to the cup-pairing lemma's AC use. Batches 12-15 and any later consumer
of `periods-jacobians-and-abel-jacobi-theory` must state the same assumption.

## Published defects / observations (for the canonical ledger)

- No defective published **statement** among the consumed suppliers: every out-of-run dependency
  resolves to a published item (checked mechanically: 0 drafts, 0 missing) and the specific
  statements used (`cor-poincare-duality-gives-a-nonsingular-cup-pairing`,
  `lem-integral-surface-cup-pairing-from-the-oriented-polygon`, `thm-smooth-and-continuous-real-
  singular-cohomology-agree`, `thm-de-rham-theorem`, `thm-stokes-theorem-for-smooth-singular-chains`,
  `lem-stokes-for-piecewise-smooth-surface-regions`, `thm-complex-torus-quotient-is-well-defined`,
  `thm-elliptic-function-divisor-laws`, `thm-meromorphic-functions-riemann-sphere-are-rational`,
  `def-complex-lattice-and-complex-torus`, `def-full-rank-lattice-covolume-and-dual-lattice`) carry
  the hypotheses used here.
- Observation (not a defect): there is no published definition of a complex manifold of dimension
  > 1, and `def-complex-lattice-and-complex-torus` defines a lattice only in C. The Jacobian
  definition therefore transfers the full-lattice notion to the finite-dimensional complex vector
  space Omega(X)^* through `def-full-rank-lattice-covolume-and-dual-lattice` (a real-linear
  identification) and describes the complex-torus structure through the quotient charts. Step 3
  should keep this transfer explicit, and Step 5 should check that it is not read as a new
  definition of a g-dimensional complex manifold.
- Observation for the owner (outside this batch's ownership): the run ledger shows the page edge
  `divisors-riemann-roch-and-duality -> hodge-theory-on-compact-riemann-surfaces` (batch 10 ->
  batch 9) without a review row, because batch 10's consumer input does not mention it. This batch
  does not edit another batch's consumer input; it is recorded here so the owner can have batch 10's
  input completed before the Step-1 gate.
- Observation for the owner (source pointer): the design's Schlag Ch. 8 locator is stale (Chapter 8
  is Uniformization; the material is Chapter 7) and the book is not openly readable; see the source
  section above. No claim was narrowed; three other full-text treatments cover every item.

## Unresolved findings and escalations

- None for this pair. No cross-batch change, page split, new prerequisite pair, or scope escalation
  is required: the A page has 23 items against a hard cap of 100 and its whole local closure is on
  the one A page plus planned batch-9/batch-10 suppliers.
- Non-blocking owner-relevant items: (i) the plan's `requires` does not name the Hodge page although
  the design route needs it (transitive via CA-RS-2; direct item edges declared here); (ii) the
  stale Schlag locator; (iii) the missing review row for the 10 -> 9 page edge. All three are
  recorded above with exact evidence.

## Decisions (29/29 `ready`)

Every item was recorded with `node tools/step1-decisions.mjs record --run
frontier-43-complex-representation-15 --item ID --decision ready --dependencies '<manifest deps>'
--reason '<strategy + examined suppliers + source stamps>'`. Each reason names the proof route, the
examined supplier ids and the fetch-stamped source locators. No item is escalated. The record hashes
were computed after the final manifest edit (2026-10-07, this attempt); any later manifest change
invalidates them and must be re-recorded. Final check
(`node tools/step1-decisions.mjs check --run frontier-43-complex-representation-15`): the run
snapshot held 313 items with 308 closed; **zero** work rows belong to this pair.

## Close-out pass (successor dispatch, 2026-10-07)

The final B-page revision (statement/strategy fixes on the four newer examples plus two added
dependencies on `ex-principal-divisor-tests-via-the-abel-jacobi-map`) landed after the first
readiness recordings, so those four `ready` records were stale. This pass closed out the batch on
the frozen bytes:

1. Re-recorded the four receipts
   (`ex-period-matrix-and-jacobian-of-the-pentagon-curve`,
   `ex-base-point-cancellation-for-degree-zero-divisors`,
   `ex-principal-divisor-tests-via-the-abel-jacobi-map`,
   `ex-abel-image-in-its-jacobian`) against the current manifest. The reason for
   `ex-principal-divisor-tests-via-the-abel-jacobi-map` records the two added suppliers
   (`thm-proper-holomorphic-map-riemann-surfaces-has-degree`,
   `lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism`), both read: a
   principal $(q)-(p)$ would give a degree-one map to the sphere, hence a biholomorphism forcing
   $g=0$.
2. Re-ran every check in the table above on the frozen bytes: `step1-decisions check` reports 313
   items / 308 ready with **zero** work rows for this pair (the 9 remaining rows are the five
   owner-held Glimm items in batch 1 and the four empty page shells of batches 4/5);
   `item-dependency-levels` still matches all 29 labels (only the batches 4/5 `empty scaffold
   inventory` errors remain); `manifest-deps` 313/0/0; `content-policy` 313/0/0;
   `coverage-checklist` 55 harvested/0/0; `source-fetch-check` 3/3; `url-sweep` 3/3 live;
   `source-backing` 17/17 backed; `validate-plan` exit 0; `extcheck` and `depcheck` both FAIL with
   exactly 313 `focus-item-unknown`, the documented Step-1 state before authoring.
3. Re-verified the cross-batch input mechanically: its 34 rows match the current manifest exactly
   (no missing and no stale rows), and the run ledger lists batch 11 under `reviewed_batches`. The
   run-level refresh still fails only on the four page edges of not-yet-scaffolded batches 4 and 5
   and the batch-10 input's `divisors-riemann-roch-and-duality -> hodge-theory-on-compact-riemann-
   surfaces` row, none of which this batch owns.
4. The engine status now lists batch 11 **not** among the artifact-missing units; it still appears
   under "missing" only until this dispatch exits and writes its coverage result.

No item changed mathematically in this pass, no record was escalated, and nothing published,
shared, or engine-owned was edited.
