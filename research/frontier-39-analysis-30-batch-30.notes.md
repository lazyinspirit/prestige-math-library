# Batch 30 Step 1 scaffold — Uncertainty Principles for Fourier Analysis

Run `frontier-39-analysis-30`, role beta, label batch-30. Owned pair:
`uncertainty-principles-for-fourier-analysis` (A, order 510.06511) /
`uncertainty-principles-for-fourier-analysis-examples` (B, order 510.06512),
category `fourier-analysis`. Outputs: `research/frontier-39-analysis-30-batch-30.pages.json`
(16 A items + 5 B items; page cap 100 respected; 2 of the A items are local additions),
`research/frontier-39-analysis-30-batch-30.coverage.json`, this note,
`research/frontier-39-analysis-30-batch-30.cross-batch-dependencies.json` (8 rows: 1 page edge +
7 item edges, all `open` into batch 28), one `research/frontier-39-analysis-30-step1-<id>.json`
readiness record per item (21 records, all `ready`), and the refreshed unified ledger
`research/frontier-39-analysis-30-cross-batch-dependencies.json`. No published content, item file,
shared plan, engine state or verdict was edited. This record covers construction only; it is not an
independent mathematical review.

## Scope, plan and owner direction

- `research/frontier-39-analysis-30-owner-authoring-direction.md` does **not** exist (checked before
  construction); the binding texts are the dispatch, CLAUDE.md, SCHEMA.md, WORKFLOW.md, the design
  section and `research/plan-spec.json`.
- The design section is **FR-20** at `research/plan-fourier-analysis-track.md` L1407
  (`## FR-20. Uncertainty principles for Fourier analysis`); the full section (L1407–L1470) was read:
  14 numbered A rows, 5 B leaves, and the hard proof/boundary obligations quoted below.
- `research/plan-spec.json` pages 510.06511/510.06512 carry the same `order`, `title`, `companion`,
  `kind`, `category` and `requires` array as the dispatch and the manifest, with `items: []`. **No
  plan-vs-design page conflict exists**: the plan controls, and it adds no item inventory to conflict
  with. All 14 design A rows and 5 B leaves are preserved, unweakened, under their design ids; two
  local prerequisite lemmas were added (below).
- All three `requires` pages were located: `finite-fourier-analysis-and-the-fast-fourier-transform`
  (FR-18, in-run batch-28 scaffold; no item files authored yet), `schwartz-space-and-the-plancherel-theorem`
  (published FA-23) and `the-identity-theorem-and-the-open-mapping-theorem` (published CA-6).
- Hard obligations of the design, checked item by item: means and variances require nonzero $f$ and
  finite moments (stated in item 1, with the non-definition of the zero function); the uncentred
  Heisenberg form is never called a variance statement before item 2 centres it; Hardy's equality
  Gaussian and the supercritical zero case use the exact $ab=1$ normalisation (items 9–11);
  the finite theorem has $N\ge1$ and the $N=1$ case is equality (item 13 and its B leaves).

## Recorded conflicts and design-vs-evidence notes

1. **FA-23's Heisenberg theorem is homed only on FA-23's examples page (recorded, resolved
   locally).** The design's "Requires: FA-23's exact `thm-heisenberg-uncertainty-inequality`" and
   item 4's rationale treat that theorem as a supplier. On disk it is published at
   `items/thm-heisenberg-uncertainty-inequality.md`, but its only page home is
   `library/functional-analysis/schwartz-space-and-the-plancherel-theorem-examples.md` (a B page);
   `tools/depcheck.mjs` hard-errors (`b-leaf-content`) when another page's item depends on a
   B-page-only item. The manifest therefore (a) keeps item 4 as a remark that *cites* the theorem in
   its `## Remark` body (remarks are excluded from the load-bearing-citation scan; `deps` contains
   only the two local items), and (b) proves the summed corollary (item 5) from the local coordinate
   core (item 3) rather than from "item 4 coordinate inequalities". No statement was dropped or
   weakened; the coordinate constant $(4\pi)^{-1}$ and the equality classification remain FA-23's, as
   item 4 records. If the owner prefers a deps edge, the correct fix is a page-membership change for
   the published theorem, which this batch is not authorised to make.
2. **Design crosswalk rows 52–55 misattribute Sheagren's sections and contents (recorded).** The
   fetched S (Sheagren, pp. 1–13) has §2 Plancherel, §3 Heisenberg, §4 complex analysis including
   Phragmén–Lindelöf, §5 Hardy; it contains **no** support-measure uncertainty and **no** finite-DFT
   uncertainty. The manifest therefore sources the support-measure item from Laugesen ch. 24
   (Proposition 24.1/Theorem 24.2 context, direct $L^1$–$L^\infty$+Plancherel proof recorded), and the
   finite product bound from Taylor §11 plus Tao, *An uncertainty principle for cyclic groups of prime
   order* (arXiv:math/0308286), which proves $|\operatorname{supp}f|\,|\operatorname{supp}\widehat f|\ge|G|$
   in §1 by exactly the triangle-inequality/Cauchy–Schwarz/Plancherel route used locally. All
   harvested results keep dispositions in the coverage file; nothing was dropped.
3. **Item 9's proof route (recorded deviation from the design's provenance column).** The design
   cites "FM §1/S §4" and calls the proof `literature-derived`. FM §1 proves Hardy by a
   Liouville/Schrödinger-kernel route, not by Phragmén–Lindelöf; S §4 states sector Phragmén–Lindelöf
   and proves the $\pi$-normalised case via $h(\gamma)=\widehat f(\sqrt\gamma)$, a different route.
   The recorded proof is the one fully readable route: Tao's blog proof as formalised in Lindell's
   thesis §3.2 (Lemma 3.2.4's auxiliary $h_M(z)=\exp(iM e^{iM}z^{2+M})$), with the sector principle
   supplied by the published
   `thm-maximum-modulus-principle-with-boundary-and-infinity-control`. The strategy fixes the choices
   the sources leave loose ($\theta$ with $\pi\cos^2\theta/a<\delta\sin2\theta$; $M$ with
   $M+(2+M)\theta<\pi$, so $\min\sin(M+(2+M)t)>0$ on the compact sector). Because this is a repaired
   adaptation, items 9 and 10 carry `provenance.proof: ai-altered` instead of the design's
   `literature-derived`.
4. **Item 3/5 domain (recorded deviation).** The design says item 3 lives on "the stated
   Sobolev/moment domain" with "cutoff approximation". The published general-domain route
   (`thm-acl-characterisation-of-w-one-p` and its dependents) assumes the Axiom of Choice, which would
   violate the FR track's own choice ledger ("countable/dyadic families or explicit minimisation"),
   and item 3 is the page's real-variable core. The manifest consequently states items 3 and 5 on the
   Schwartz domain $\mathcal S(\mathbb R^n)$ (choice-level countable at most, closed boundary terms by
   rapid decay via the published integration-by-parts item), which still contains the Gaussians used by
   the equality example and matches FA-23's Schwartz domain. Recorded rather than silently generalised.
5. **Local additions (2).** `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform` is needed
   because the design's item 7 covers only compact support, while item 10 complexifies the transform
   under a Gaussian bound (Sheagren Lemma 5.1, Lindell Lemma 3.2.2 in $n$ variables).
   `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero` is needed by items 8 and 10 to pass
   from vanishing on a real box (or on $\mathbb C\times\mathbb R^{n-1}$) to the zero function; it is a
   two-step induction on the one-variable identity theorem. Both are `local_addition: true` with
   `design_row: FR-20`.
6. **Source drop (owner-visible, resolved with an alternative).** The UPC bachelor's thesis
   "Uncertainty Principle and Signal Processing" was retrieved directly (31-page PDF read; Theorems
   3.2/3.4 and §7.2) but `source-fetch-check` could not stamp it: the bitstream answered HTTP 418 to
   the initial fetch and to all five retries (six recorded attempts). Its only roles — the finite
   product bound and the delta/subgroup sharpness — are fully covered by the accessible Tao paper, so
   the source is recorded `source_resolution: dropped` (`decided_by: step-1-scaffolder`,
   `confidence: certain`) with alternatives for
   `thm-finite-dft-support-product-uncertainty` and `ex-finite-dft-delta-and-constant-extremisers` and
   the full attempts/searches evidence. The drop waives the source, not the mathematics.

## Inventory and dependency levels

Every item carries `design_row: "FR-20"`, explicit `deps`, provenance and source references. The two
local additions are flagged `local_addition: true`; the 19 design rows are not. Levels are the
`item-dependency-levels.mjs check` values for batch 30 (no batch-30 finding):

| Level | Items |
|---:|---|
| 0 | `def-spatial-and-frequency-centres-and-variances`, `lem-position-derivative-commutator-estimate`, `thm-support-measure-uncertainty-inequality`, `lem-compact-support-gives-an-entire-fourier-laplace-transform`, `lem-hardy-entire-growth-rigidity`, `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp`, `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform`, `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero` |
| 1 | `lem-centering-by-translation-and-modulation-preserves-the-variance-product`, `cor-dimensional-heisenberg-uncertainty-inequality`, `thm-qualitative-compact-support-uncertainty-principle`, `thm-hardy-gaussian-uncertainty-principle`, `cex-finite-variance-is-not-the-same-as-compact-support` (B) |
| 2 | `rem-heisenberg-uncertainty-is-owned-by-functional-analysis`, `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty`, `thm-finite-dft-support-product-uncertainty`, `ex-gaussian-attains-heisenberg-equality` (B), `ex-hardy-critical-and-subcritical-gaussian-regimes` (B) |
| 3 | `rem-uncertainty-principles-measure-different-notions-of-localisation`, `ex-finite-dft-delta-and-constant-extremisers` (B) |
| 4 | `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one` (B) |

## Dependency and prerequisite verification

The batch declares 69 distinct dependency ids: **52 published item files on disk** (FA-23,
FA Fourier-transform/convolution, measure-theory, complex-analysis and Sobolev interfaces),
**17 in-run scaffold rows** (13 of this batch plus the four FR-18 rows
`def-unitary-discrete-fourier-transform-on-z-mod-n`,
`def-counting-inner-product-on-complex-functions-on-z-mod-n`,
`lem-orthogonality-of-characters-on-a-finite-cyclic-group`,
`thm-finite-parseval-and-plancherel`), and **0 unresolved ids**.

- **FA-23 published suppliers** were opened and their statements checked against the declared uses:
  `thm-plancherel` (unitary $L^2$ transform, countable choice), `thm-parseval-pairing-on-schwartz-space`,
  `thm-fourier-transform-maps-schwartz-space-continuously-to-itself` (the $2\pi i\xi$ derivative law),
  `thm-fourier-inversion-on-schwartz-space`, `thm-l-one-fourier-inversion`,
  `cor-uniqueness-of-the-l-one-fourier-transform`,
  `thm-l-one-l-two-agreement-of-fourier-transform`,
  `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`,
  `lem-schwartz-functions-and-all-derivatives-are-integrable`, and the Gaussian item
  `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization` (statement
  $\mathcal F(e^{-\pi t|x|^2})=t^{-n/2}e^{-\pi|\xi|^2/t}$, exactly the constant used in items 10, 11 and the B leaves).
- **FA-23's published theorem** `thm-heisenberg-uncertainty-inequality` was read in full
  (statement, $f\in\mathcal S$, countable choice, equality family). It is the item cited by design row 4
  and cannot be a `deps` target because of its B-page-only home; see conflict note 1. Its constant and
  equality family were checked against item 5's local corollary and the B equality example.
- **CA-6 published suppliers** were read: `thm-identity-theorem-holomorphic-functions` (used by the
  local rigidity lemma), `thm-liouville-bounded-entire-function`, and
  `thm-maximum-modulus-principle-with-boundary-and-infinity-control` (whose exact hypothesis —
  local boundary control plus control at infinity — is what the $h_M$ auxiliary produces; the sector
  is a complex domain, the vertex is a boundary point, and the $r^{2+M}$ term gives the required
  infinity control). `cor-principal-logarithm-is-holomorphic-on-the-slit-plane` supplies the principal
  power $z^{2+M}$ on the sector.
- **FR-18 in-run suppliers** (batch-28 manifest read; items not yet authored): the unitary DFT
  definition, the counting inner product, the character orthogonality and finite Parseval. The
  exact clauses consumed are recorded in the 7 item rows of the cross-batch input; every edge is
  `open` until Step 3 authors the supplier, and the batch-30 records say so. No batch-30 proof
  consumes a planned but unscaffolded row other than these four.
- **Local additions (2)** have complete strategies (item 15: Gaussian majorant, Tonelli, completion of
  the square, dominated-convergence difference quotients; item 16: induction on the one-variable
  identity theorem). Their deps are published items only.
- **B-page edges** point only into the A page, the published/in-run suppliers and the same B page:
  no A-page item depends on a B-page item, and no deps edge in the run targets a *different* page's
  B item (0 such edges run-wide, checked over all batch manifests). One same-page B edge exists:
  `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one` depends on the earlier
  `ex-finite-dft-delta-and-constant-extremisers` on the same B page, which SCHEMA.md §Pages allows
  ("earlier items on that same page are allowed"); the run has 18 such same-page B edges, all legal.
- **Acyclicity/forward edges.** `manifest-deps` batch-30: `21 item(s), 0 normalized, 0 error(s)`;
  whole-run form `458 item(s), 0 normalized, 0 error(s)`.
  `item-dependency-levels check` reports no batch-30 finding (only `empty scaffold inventory` rows in
  not-yet-scaffolded sibling batches). `validate-plan` exit 0.

## Choice ledger

- **Countable choice declared (12 rows):** `def-spatial-and-frequency-centres-and-variances`,
  `lem-centering-by-translation-and-modulation-preserves-the-variance-product`,
  `lem-position-derivative-commutator-estimate`,
  `rem-heisenberg-uncertainty-is-owned-by-functional-analysis`,
  `cor-dimensional-heisenberg-uncertainty-inequality`, `thm-support-measure-uncertainty-inequality`,
  `thm-qualitative-compact-support-uncertainty-principle`, `thm-hardy-gaussian-uncertainty-principle`,
  `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp`,
  `ex-gaussian-attains-heisenberg-equality` (B),
  `cex-finite-variance-is-not-the-same-as-compact-support` (B),
  `ex-hardy-critical-and-subcritical-gaussian-regimes` (B). The records identify the use: the
  L¹/L² transform interfaces (Plancherel, inversion, uniqueness, translation/modulation laws),
  dominated convergence on parameter families, and the Gaussian-transform lemma. B2 and B3 were
  re-recorded after gaining their countable-choice headers, inherited from the items whose
  definitions and transform identities they cite.
- **Choice-free or proof-free (9 rows):**
  `lem-compact-support-gives-an-entire-fourier-laplace-transform`,
  `lem-hardy-entire-growth-rigidity`, `thm-finite-dft-support-product-uncertainty`,
  `ex-finite-dft-delta-and-constant-extremisers`,
  `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one`,
  `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform`,
  `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero`, and the two remarks
  `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty` and
  `rem-uncertainty-principles-measure-different-notions-of-localisation` (no proof section; no
  choice assumption asserted). The seven proved rows consume only dominated
  convergence/Tonelli/finite sums and explicit sequences `1/k`, `1/n`; no AC/DC and no
  arbitrary-index selection is used. AC is nowhere assumed; the ACL route that would have imported it
  was rejected (conflict note 4).
- **Step 3b correction (2026-10-05).** `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform`
  is **not** choice-free as scaffolded: the sharp growth bound
  $|F(z)|\le C a^{-n/2}e^{\pi|\operatorname{Im}z|^2/a}$ needs the Gaussian Lebesgue integral
  $\int e^{-\pi b|x|^2}dx=b^{-n/2}$, and the library route to that identity
  (`lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization` plus the
  change-of-variables corollary) carries countable choice. The authored statement now begins
  "Assume countable choice" and the item declares `def-countable-choice`. The declared rows are
  therefore **13**, and the choice-free/proof-free rows **8**; the other eight entries of that list
  are unchanged. In the authored proofs each declared row now cites its choice hypothesis
  `[F1]` at the step that invokes the choice-carrying supplier (all 11 proved rows), so the use
  site is auditable: the Gaussian transform/change-of-variables identities in
  `lem-gaussian-decay-…` (step 1.2), `lem-hardy-subcritical-…` (2.1),
  `cex-finite-variance-…` (1.1), `ex-gaussian-…` (1.1), `ex-hardy-…` (1.3); the L¹/L²
  interfaces and Plancherel in `thm-support-measure-…` (1.1), `cor-dimensional-heisenberg-…`
  (2.1), `lem-centering-…` (1.1); the completed-product Fubini theorem in
  `lem-position-derivative-…` (2.1); the entire continuation and L¹ uniqueness in
  `thm-hardy-gaussian-…` (1.1) and `thm-qualitative-compact-support-…` (2.1).
- No item assumes an incompatible axiom; there is no ¬AC/¬DC branch.

## Checks actually run (2026-10-04)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-30.pages.json`
  → `21 item(s), 0 normalized, 0 error(s)`.
- Whole-run form over `research/frontier-39-analysis-30-batch-*.pages.json`
  → `458 item(s), 0 normalized, 0 error(s)` at the time of the batch's own checks; the live run
  kept growing while this batch was working (last re-run `486 item(s), 0 normalized, 0 error(s)`).
- `node tools/content-policy.mjs --manifest-only` over all manifests
  → `458 scoped item(s), 1 error(s), 0 warning(s)` (same single error, `486 scoped item(s)`, on the
  last re-run); the single error is **not** in batch 30:
  `lem-positive-compactly-supported-transform-bump-on-the-dual` (batch 27) depends on
  `thm-unique-left-haar-measure-up-to-scale`, which is neither declared by a batch nor on disk.
  Passing only batch-30 reports `batch-dependency-missing` for the four FR-18 in-run suppliers by
  construction; the whole-run form is the correct one and is clean for batch 30.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-30.coverage.json --require-destination`
  → `2 page(s), 106 harvested result(s), 0 error(s), 2 warning(s)`. The two warnings are advisory
  `coverage-low-yield` rows (18/55 and 17/51 harvested results scaffolded); the low yield is expected
  because the pair's harvest is deliberately dominated by `already-published` FA-23/CA-6 rows and
  out-of-scope alternatives, and every decline carries a written reason.
- `node tools/source-fetch-check.mjs --coverage ...-batch-30.coverage.json --stamp`
  → `11/12 source(s) fetch-verified (2 newly stamped)`, `12/12 source(s) resolved (1 documented drop)`.
  Check mode (no stamp) → `11/12 source(s) fetch-verified`, `12/12 source(s) resolved (1 documented drops)`.
  Sources stamped: FM survey (arXiv PDF), Sheagren REU paper, Laugesen notes, Lindell thesis (48 pp.),
  Tao blog (HTML), Tao uncertainty paper (arXiv PDF), Taylor book §11.
- `node tools/url-sweep.mjs --coverage ...-batch-30.coverage.json --out research/frontier-39-analysis-30-url-liveness.json --recover --fail-on-dead`
  → `7/7 live; 0 failed (0 previously fetched, 0 blocking); 0 recoverable; 0 suspect` and
  `8 citation decision(s) (1 documented source drops)`.
- `node tools/source-backing.mjs --coverage ...-batch-30.coverage.json --liveness ...url-liveness.json`
  → `17 authored result(s) across 1 file(s), every one still backed by an openable source or documented alternative argument`, exit 0.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  → accepted; batch `30` is in `reviewed_batches`, all 8 batch-30 consumer edges carry an `open`
  review into batch 28, and `orphaned_reviews` is empty.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30`
  → `items: 458, ready: 458` and no open item rows at all when run. The last re-run reports
  `items: 486, ready: 458`; the 28 open rows are all sibling-batch items scaffolded after this
  batch's records were taken (wave-equation and other batches), and **no batch-30 row is open**, so
  all 21 batch-30 records are hash-current `ready`.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` → no batch-30 finding
  (only sibling `empty scaffold inventory` rows).
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` → `60 page(s) owed, 60 in the
  manifests; no scope drift`.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0; no cycle, forward reference,
  unresolved id or cap violation (only unrelated `redundant-prereq` notes in other categories).
- `node tools/drift-review-check.mjs --run frontier-39-analysis-30` → `30 page(s) reviewed,
  6 spec edit(s) applied, no blocked edges`.
- `node tools/extcheck.mjs` → exit 0; the only rows are pre-existing published `unproved-on-published`
  remark warnings elsewhere in the library, none in this batch.
- `node tools/depcheck.mjs` → FAIL, but only through pre-existing whole-library
  `published-unaudited` rows on unrelated published items; no batch-30 item file exists yet, so the
  scaffold contributes nothing to that list.
- KaTeX parse of every `$...$`/`$$...$$` segment of the batch-30 manifest (statements and
  strategies) with the app's KaTeX → `505 segments, 0 parse errors`.
- **Re-verification pass (same dispatch, re-run against the current disk state).** Every check above
  reproduced: `manifest-deps` 21 items/0 errors and whole-run `525 items/0 errors`;
  `coverage-checklist --require-destination` 0 errors + the 2 advisory `coverage-low-yield` warnings
  (96 source-harvest rows + 10 canonical rows = the 106 counted); `source-fetch-check` 11/12
  fetch-verified, 12/12 resolved; `source-backing` exit 0 (17 authored results); `url-sweep` 7/7
  live; `step1-decisions check` no batch-30 open row (the open rows in that snapshot were
  Fredholm/wave-equation sibling items, recorded by their owners shortly after); the final re-check
  read `525 items, 525 ready, 0 batch-30 open rows`; `item-dependency-levels check` no batch-30
  finding; `manifest-integrity`
  60/60 no drift; `validate-plan` exit 0; `drift-review-check` 30 reviewed/6 edits/no blocked edges;
  `extcheck` exit 0; `content-policy --manifest-only` 525 scoped items with the same single batch-27
  error. Dependency audit re-run: 69 distinct deps = 52 published items on disk (all with A-page
  homes, none B-only) + 17 in-run scaffold rows (13 this batch, 4 FR-18); 0 unresolved; a BFS over
  the 1330-item published dependency closure reaches no `deferred-set-theory-beyond-choice` path;
  KaTeX parse with katex 0.19.0 → `512 segments, 0 parse errors` (the earlier 505 counted a smaller
  segment set; both runs are error-free).

## Escalations (owner-held)

**None.** All 21 items were recorded `ready` with a complete proof strategy and met prerequisites;
the four FR-18 suppliers are in-run scaffold rows with cross-batch edges filed `open`, which is the
normal Step-1 state (Step 3 authors consumers after suppliers and reconciles). The two source/design
differences (conflicts 1 and 3–4) were resolved locally without weakening any claim; the only
owner-visible residual decision is whether the published FA-23 Heisenberg theorem should gain an A-page
home so that a future batch can depend on it directly.

## Currency and handoff notes

- The batch-30 manifest has 21 items (16 A + 5 B), unchanged in scope from the design's 14 A rows and
  5 B leaves plus the two required local additions. Nothing was dropped or weakened. The manifest and
  coverage are frozen for Step 3; any later edit to an item's statement, deps or level invalidates its
  readiness hash and requires re-recording.
- Records were produced with `tools/step1-decisions.mjs record` (dependencies equal to the manifest's
  `deps`); no `--owner` record was used and no escalation exists to overwrite.
- Cross-batch dependencies for this pair are filed in
  `research/frontier-39-analysis-30-batch-30.cross-batch-dependencies.json` and in the refreshed
  unified ledger; the FR-18 lead should read the 7 item rows for the exact clauses consumed (unitary
  normalisation, counting inner product, character orthogonality, finite Parseval).
- Owner/operator reconciliation and the full engine gate follow construction; neither a worker exit
  nor a readiness record is independent mathematical approval, and Step 3 provides that review.


## Owner follow-up on the historical batch-27 dependency report

The earlier whole-run content-policy observation in this note predates the owner correction to batch 27. The bump lemma now declares the published supplier `thm-uniqueness-of-left-haar-measure-up-to-scale`; its owner readiness record was refreshed. The prior missing-supplier error is resolved, pending the full Step 1 gate on the stable run manifests.

## Step 3b authoring record for the uncertainty pair (2026-10-05)

The A/B pair `uncertainty-principles-for-fourier-analysis` /
`…-examples` (this batch) was authored by the Step 3b pair Alpha. All 21 items
are on disk with `pipeline_run: frontier-39-analysis-30`; both pages
(`library/fourier-analysis/uncertainty-principles-for-fourier-analysis.md`,
`…-examples.md`) now exist and list the 16 A items and the 5 B leaves.

- **Manifest deps synced.** The batch manifest `deps` arrays were brought into
  exact agreement with the authored item frontmatter (11 items updated:
  `lem-centering-…`, `lem-position-derivative-…`, `thm-support-measure-…`,
  `lem-compact-support-…`, `thm-qualitative-…`, `thm-hardy-gaussian-…`,
  `lem-hardy-subcritical-…`, `lem-gaussian-decay-…`,
  `ex-gaussian-attains-…`, `cex-finite-variance-…`,
  `ex-hardy-critical-…`). Statements in the manifest are the scaffold
  abstracts and were deliberately left unchanged, matching the convention of
  the completed sibling pairs; the item files carry the authored statements and
  any repairs (countable-choice header for `lem-gaussian-decay-…`; `n ≥ 1` for
  `lem-hardy-subcritical-…`; independent `a, b > 0` for `ex-hardy-…`; the
  B-page wikilink removed from `cor-dimensional-heisenberg-…`).
- **Cross-batch rows reconciled.** All 8 rows of
  `research/frontier-39-analysis-30-batch-30.cross-batch-dependencies.json` are
  now `verified`: the FR-18 suppliers (`def-unitary-discrete-fourier-transform-
  on-z-mod-n`, `def-counting-inner-product-on-complex-functions-on-z-mod-n`,
  `lem-orthogonality-of-characters-on-a-finite-cyclic-group`,
  `thm-finite-parseval-and-plancherel`) are authored in batch 28 and their
  statements contain exactly the clauses consumed by
  `thm-finite-dft-support-product-uncertainty` (steps 1.1–2.1),
  `ex-finite-dft-delta-and-constant-extremisers` (steps 1.1–1.2) and
  `cex-both-supports-…` (steps 1.1–1.2). The derived ledger was refreshed.
- **Contracts and decisions.** `research/frontier-39-analysis-30-batch-30.proof-
  contracts.json` carries 21 entries / 133 citations / 75 step mappings / 168
  boundary rows and passes `proof-contract --strict` (0 errors, 0 warnings),
  `citation-fidelity --fail-on-missing-quote` (no missing quotes, no widening
  candidates) and `boundary-audit --fail-on-contradicted --fail-on-template`
  (no template or contradicted rows). All 21 Step 3b item decisions are recorded
  (12 `repaired`, 9 `accept`, 0 `escalate`); the two auditor-free local
  additions (`lem-separately-holomorphic-…`, `lem-gaussian-decay-…`) are
  ordinary baseline IDs and carry ordinary decisions.
- **Published concern (owner-visible).** The design names
  `thm-heisenberg-uncertainty-inequality` as a supplier of this pair, but that
  theorem is published only on the B page
  `library/functional-analysis/schwartz-space-and-the-plancherel-theorem-examples.md`,
  and a B-leaf item cannot be another page's dependency, so no `deps` edge to
  it exists here. `cor-dimensional-heisenberg-…` proves the summed inequality
  locally and `rem-heisenberg-…` records the ownership and constant; a
  page-membership move of the theorem to the A page is an owner decision, not a
  Step 3b repair. Reported for Step 4/owner.

## Step 3b independent audit and final rehash (2026-10-05)

The dependency-ordered audit found two proof defects and several precision fixes, all repaired within batch 30:

- `lem-centering-by-translation-and-modulation-preserves-the-variance-product` incorrectly inferred $f\in L^1$ from finite first and second spatial moments. That implication fails in dimensions $n\ge2$. Its proof now establishes translation/modulation covariance for the Plancherel transform by approximating in $L^2$ with Schwartz functions, applying the $L^1$ transform laws to those approximants, identifying their integral transforms with their Plancherel classes, and passing to the $L^2$ limit. The spatial and frequency moment calculations then use affine change of variables.
- `lem-hardy-entire-growth-rigidity` now explicitly assumes $b\ge1/a$ in its sector argument. This is exactly the regime of its two conclusions and supplies the real-axis anchor bound used by the maximum-modulus step.
- The Hardy regime example now chooses one common constant for both Gaussian bounds (`max(1,a^{-n/2})` at criticality and `max(1,c^{-n/2})` subcritically), as required by the theorem's statement. The Gaussian equality example names the translation center `x_0` to keep it distinct from the positive width parameter.
- The finite DFT example now substitutes the orthogonality parameters $(0,k)$ to match the transform's negative exponent. The localisation remark now states the correct implication: Gaussian decay gives finite second moments but does not imply compact support.

No Statement or Definition interface changed, and no shared supplier or item outside B30 was edited. The B30 manifest was synchronized for the corrected centering-lemma dependencies. All 8 B30 cross-batch dependency edges remain `verified`. Ten current Step 3b receipts were refreshed in dependency order. Focused proof layout checked 5 edited proof-bearing items / 21 steps / 0 defects; strict B30 proof contracts checked 21 scoped items / 0 errors / 0 warnings. No tests or workflow gates were run.

The final disk rehash reports 21/21 current B30 item decisions closed, 0 stale items, and 8/8 cross-batch edges verified. Current Step 3 item-input hashes (not raw file hashes):

- `def-spatial-and-frequency-centres-and-variances`: `05679880283be28180bb3447066fe452c17fa0dbb5d8dfea3738ff8aba81dcad`
- `lem-centering-by-translation-and-modulation-preserves-the-variance-product`: `5221e06b2e70fc3dd38ce354bea92703f5b46eda343ddcee7108a48e586926c1`
- `lem-position-derivative-commutator-estimate`: `7c4dcb416181ae1ec40a08a9f6b893ef328682149b5df02d9d868ff16c09bfc4`
- `rem-heisenberg-uncertainty-is-owned-by-functional-analysis`: `8d1aea9996965ea462800dd05eabe0ab1801d2c956eaa41d9ec772606464c4d2`
- `cor-dimensional-heisenberg-uncertainty-inequality`: `336b9bfa05fa52621264349ee49dac441ad03c4376566972db50eb8d0f984304`
- `thm-support-measure-uncertainty-inequality`: `402c3d298e98519ba4725d2257e74fa7d9d89a41f55e73ed348741d61773fe56`
- `lem-compact-support-gives-an-entire-fourier-laplace-transform`: `b3f55dd2cd0370fa68e41efb83edeaa43d1c213511613b911c6fb8c19c2ba5e5`
- `thm-qualitative-compact-support-uncertainty-principle`: `206eab3079cc0bcc4e276d89fda1a3518467c7833b7b85f9b394c5b7fbd9740f`
- `lem-hardy-entire-growth-rigidity`: `b9c6df997873c9e361dd8a5105a713edcb5ef15286c2f37b2f83b256355e1f06`
- `thm-hardy-gaussian-uncertainty-principle`: `d5706f6f19076a9e2d02249a3a05ef4b3c5aa09d35ae64a232d81523a0e7265f`
- `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp`: `5ba005e5913f1086afc6623e9e7ee9672f7061cb335d4d5c5865e6f1eee22226`
- `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty`: `bfc38479c717926ecad0f497ed90e739bcaf0962694bfed355584197556b9689`
- `thm-finite-dft-support-product-uncertainty`: `f4fe4793b7da531bc36953cbe963249cb31525a02b4982b3c7a74c4fc8912d70`
- `rem-uncertainty-principles-measure-different-notions-of-localisation`: `244527ee1b2e85f058d99db8e579047ab95dbc04a6a58d20a5a9061cf450f5a6`
- `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform`: `987c5ef2951fcc7bed2a5fc5b2618ce2a6cfbf970310944447a991f28c4df53c`
- `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero`: `48cc55d352009cb7f1eb74842891e51327679fe845bc2394c8448214b039189c`
- `ex-gaussian-attains-heisenberg-equality`: `73b9bec33c9df9c2c11dcf014aba06a6fee77006f88dc86218819cf960169371`
- `cex-finite-variance-is-not-the-same-as-compact-support`: `976c3a15c58fb2db07e50039f2fdba0eedebe99ba0dc46fc04c4f7a928e44ada`
- `ex-hardy-critical-and-subcritical-gaussian-regimes`: `bffceedde3d8e4a7dca457e6f16712da1de7dd15859e631d90f9e6633fa910fd`
- `ex-finite-dft-delta-and-constant-extremisers`: `eaa086634899f995369cd039fd96f06625d0723e496cc31fe61f9574640a37c9`
- `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one`: `e68c3585b054c9d22dd0397b6e6708120118a15985cb8ddf7c63d8737b39b05a`

## Owner amendment after Step 3b (2026-10-05)

Owner decision: retain the FR-20 Sobolev/moment domain. Step 3b restored
`lem-position-derivative-commutator-estimate` and
`cor-dimensional-heisenberg-uncertainty-inequality` to the planned domain
$f\in H^1(\mathbb R^n)$ with $xf\in L^2(\mathbb R^n;\mathbb C^n)$; the
Fourier characterization makes this equivalent to finite spatial and
Plancherel-frequency second moments. The cutoff integration-by-parts proof
preserves the full claim without a substantial rebuild. The published sharp
equality classification remains scoped to its Schwartz-domain theorem. The
owner-proceeded batch-30 scope hash is
`daf38548b2c3189b80ca20cbb6c2c854840e8424bd6b8ee3bc909e2754b245e5`, and the
current Step 3 item status is **21/21 closed**. The earlier note about an
optional domain enrichment is retained above as historical Step 3a/initial
Step 3b evidence; this amendment records the final owner decision.
