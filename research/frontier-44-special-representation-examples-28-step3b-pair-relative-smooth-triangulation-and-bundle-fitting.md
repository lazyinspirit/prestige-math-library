# Step 3b — scaffold audit and authoring: `relative-smooth-triangulation-and-bundle-fitting`

Run `frontier-44-special-representation-examples-28`, batch 29 (orders
1794/1795), role `alpha-high`, label
`step3b-pair-relative-smooth-triangulation-and-bundle-fitting-e4b2908f282cd2a2`.
A page `relative-smooth-triangulation-and-bundle-fitting` (7 items, draft),
B page `relative-smooth-triangulation-and-bundle-fitting-examples` (1 example,
draft), category `differential-topology`. Only this pair is owned; sibling
pairs in shared carriers are preserved. Report opened at entry 2026-10-10
before any edit.

## Owned IDs and open obligations at entry

A-page items (all to be authored here, in this dependency order):

| # | id | kind | scaffold level |
|---|---|---|---|
| 0 | `def-relative-smooth-triangulation-and-projection-preserving-fitting` | definition | 0 |
| 1 | `lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation` | lemma | 1 |
| 1 | `lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps` | lemma | 1 |
| 2 | `lem-corner-adapted-strong-approximations-remain-in-the-same-orthant` | lemma | 2 |
| 3 | `lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection` | lemma | 3 |
| 4 | `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations` | theorem | 4 |
| 5 | `thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation` | theorem | 5 |

B-page item (to be authored here): `ex-a-trivial-smooth-bundle-has-a-projection-preserving-product-triangulation`
(example, scaffold level 1).

Deliverables: 8 item files, `library/differential-topology/relative-smooth-triangulation-and-bundle-fitting.md`,
`library/differential-topology/relative-smooth-triangulation-and-bundle-fitting-examples.md`,
`research/frontier-44-special-representation-examples-28-batch-29.proof-contracts.json`,
8 current item decisions, and this report.

Open obligations at entry:
1. All 8 item files are absent; the scaffold lives only in
   `research/frontier-44-special-representation-examples-28-batch-29.pages.json`
   plus the eight complete authoring drafts under
   `research/frontier-44-special-representation-examples-28-klr-foundation-relative-triangulation-drafts/items/`.
   A prior dispatch (`step3b-pair-…-5c4b7bdf03528a67`) was interrupted by the
   2026-10-10T10:55Z engine restart without writing any item or report file;
   this dispatch re-authors from the drafts and the manifest.
2. Metric-separation citation question (Step 3a observations §"Unmet
   prerequisites" item 2): the fitting/corner/bundle arguments use "positive
   distance from a compact image of a complement". The published suppliers
   `ex-distance-to-a-set-is-attained-on-a-compact-set` and
   `lem-relative-compact-closed-sets-have-a-positive-distance-gap` are outside
   the pair's declared `requires` closure. The round-1 scaffold repair added
   the in-closure suppliers `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`
   and `thm-lebesgue-number-lemma` to the fitting and bundle items; audit
   whether the actual proof steps use separation facts those suppliers do not
   give, and either supply the needed fact locally or flag the exact step with
   the required supplier.
3. Two conservative frozen `def-axiom-of-choice` edges on the two theorems
   (metadata-cleanup candidates). Both statements say the ambient AC hypothesis
   is dispensable; verify the actual proofs are choice-free and record the
   exact status.
4. Consumers are owned by batch 37 (`complex-algebraic-stratified-topology`);
   this pair's `cross-batch-dependencies.json` input is empty. Do not edit the
   consumer rows.
5. B page holds a single frozen example; do not add subjects beyond the frozen
   inventory.
6. No direct in-run prerequisite pairs to inspect (dispatch: none).

## Checkpoint log

### 0. `def-relative-smooth-triangulation-and-projection-preserving-fitting` (A, level 0) — authored

- Kept the scaffold contract verbatim in content (tangent star, piecewise smooth
  differential, whole-star immersion/embedding, strong $C^1$ approximation,
  relative fixing, shape control, fitting in a (full) subcomplex,
  projection-preserving diagrams, corner-adaptation); added the gluing
  well-definedness sentence from the strategy. Deps unchanged
  (`def-simplicial-subcomplex-star-closure-and-link`). `verification.precheck:
  n/a` (no proof phase). Provenance literature-derived / not-applicable with the
  Munkres and Putz locators. File: `items/def-relative-smooth-triangulation-and-projection-preserving-fitting.md`.
- Checks: precheck 0 checked 0 failing (n/a by design), rendercheck clean.

### 1a. `lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation` (A, level 1) — authored

- Rewrote the proof of Munkres Theorem 8.8 in the item's own terms: rank bound
  $\mu>0$; finite-star separation angle $\alpha$ via projections natural under
  linear injections; a $\delta$ giving non-degeneracy and angle budgets
  $\alpha/4$ (two-term) and $3\alpha/8$ (three-term); a two-segment projection
  lemma (line $\ell$ perpendicular to the bisector, strict sign separation of
  the projected derivatives) replacing the draft's insufficient
  "cone-of-angle" conclusion; immersion and local injectivity by the two-segment
  lemma; global injectivity when $f$ is an embedding by the compact pair set
  $D=|K|^2\setminus\bigcup(V_i\times V_i)$ whose continuous minimum
  $\eta>0$ forces injectivity for $\delta<\eta/3$.
- Deps extended for the compactness mechanism (all published, on the declared
  requires page `compactness-in-metric-spaces`, all choice-free):
  `thm-heine-borel-rn`, `lem-closed-subset-of-a-compact-space-is-compact`,
  `thm-continuous-bijection-from-a-compact-space-has-continuous-inverse`.
  `dependency_level` stays 1 (published additions only). Manifest deps to be
  updated in the final pass.
- Checks: precheck PASS after adopting the checker's canonical step layering,
  rendercheck clean. No AC use.

### 1b. `lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps` (A, level 1) — authored

- Audited the draft's three routes and kept them: lattice-cell shape-controlled
  subdivisions (Munkres 9.4, with the 9.4(a) exclusion of iterated barycentric
  subdivision); the barycentre-ball secant estimate with the $2/\theta$
  derivative factor; the full-subcomplex cutoff $g_m=f+\chi(d)(S_m-f)$ with
  plane preservation; the tapered coning extension with
  $|Dt|,\|Dy\|$ bounds from the barycentric formula $t=1-\frac{n+1}{k}B$
  (affine in $x$), giving $C_\sigma\|e\|_{C^1}$ uniformly over subdivisions of
  $A$. Deps unchanged from the scaffold.
- Checks: precheck PASS, rendercheck clean. No AC use.

### 1c. `ex-a-trivial-smooth-bundle-has-a-projection-preserving-product-triangulation` (B, level 1) — authored

- Explicit product-cell triangulation of the trivial bundle: cells
  $\sigma\times\tau$ form a finite convex cell complex; compatibility gives
  $K$; $F=(h,g)$, $r=\operatorname{pr}_1$, $\pi F=hr$ exactly; differential
  $(u,v)\mapsto(dh(u),dg(v))$ injective on the tangent star by the two
  whole-star hypotheses; corner fans and zero sets are products. Provenance
  ai-generated statement with `generation.role: example` (leaf example, no dep
  target). Deps unchanged.
- Checks: precheck PASS, rendercheck clean.

Open at this checkpoint: items 2–5 unauthored; waiting state has no remaining
supplier flags for items 0–1.

### 2. `lem-corner-adapted-strong-approximations-remain-in-the-same-orthant` (A, level 2) — authored

- Kept the scaffold contract (adapted face/tangent hypotheses; small
  plane-preserving strong approximations keep the orthant and the coordinate
  zero sets; embedding preserved). In step 1.1 the maximal-face structure of the
  zero cone is made explicit: the zero set of the supporting form on the tangent
  cone is a face of that cone and equals the cone of a largest face $F_b$ of the
  simplex with $b\in F_b\subseteq Z$; step 2.1 gives the distance-uniform lower
  bound $\rho_iF\ge a\,\operatorname{dist}(\cdot,Z)$ by the barycentric-projection
  argument plus a compact ratio minimum; step 3.1 converts the strong error into
  $|\rho_iG-\rho_iF|\le\delta\operatorname{dist}(\cdot,Z)$ along the segment from
  a closest point, so $\delta<a/2$ preserves the sign and the zero set. Deps
  unchanged. Audit point for Step 5: the uniformity of the positive lower bound
  across the finitely many face strata (step 1.1) is the load-bearing estimate;
  the argument is complete as written but is the first place an independent
  reader should re-derive the constants.
- Checks: precheck PASS, rendercheck clean, proof-layout clean.

### 3. `lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection` (A, level 3) — authored

- Adopted the round-1-repaired scaffold route: compactness/Lebesgue margins
  (step 1.1, the two published suppliers added by the owner repair); Euclidean
  arbitrary-overlap fitting by cutting a box with all supporting hyperplanes and
  making the fit full by one barycentric subdivision (step 1.2); the local
  fitting of an attached piece with positive-distance star supports and the
  union-embedding argument (step 2.1); exact diagram preservation in the
  affine-base case (step 3.1) and via the temporary secant $T_1=(h'r,v)$ with
  shift-back $T_3=(hr,v')$ in general (step 4.1); the finite simplex-order
  induction and the supported protected-region/corner-orthant interface
  (steps 5.1–6.1). The shift/shift-back embedding and "same intersections after
  shift-back" claims were re-derived ($h,h'$ injective, fibre coordinate
  unchanged). Deps unchanged from the repaired scaffold.
- Checks: precheck PASS after adopting the checker's canonical step layering
  (fixed the range citation to steps 3.1–4.1), rendercheck clean, proof-layout
  clean.

### 4. `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations` (A, level 4) — authored

- Followed the scaffold strategy: box pieces with adapted face/tangent
  conditions in every chart (1.1); explicit total-boundary collar from an inward
  field via the published Picard–Lindelöf and smooth-dependence suppliers (1.2);
  fitting inside corner charts with plane/orthant preservation (2.1); the collar
  injectivity, neighbourhood and differential-fan decomposition
  $v=w+tV$, $t=\min_j v_j/V_j$ (2.2); coverage of all of $M$ by the Brouwer box
  fixed-point argument and the surjectivity of the differential fans (3.1); the
  relative case with the protected smaller collar and the interior boxes (4.1).
  The ambient AC edge is retained exactly as the frozen scaffold declares, with
  no essential use identified (only finitely many charts, bumps and ODE data).
- Checks: precheck PASS, rendercheck clean, proof-layout clean.

### 5. `thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation` (A, level 5) — authored

- Followed the scaffold strategy: compact base/Lebesgue and star-diameter
  margins (1.1, using the declared `thm-lebesgue-number-lemma`); fibre
  triangulation by the corner theorem and finitely many explicit product-chart
  pieces (2.1, renumbered); fitting with exact diagrams and descent of $r$
  (3.1); fibre-by-fibre coverage by the box fixed-point argument with the
  true-face constraint $e_j=0$ (4.1); relative protected-collar case (5.1);
  conclusion with the exact $\pi F=hr$ and the ambient AC bookkeeping (6.1).
  The manifest's declared deps were used as-is; no addition was needed.
- Checks: precheck PASS after adopting the canonical step layering and fixing a
  stale internal cross-reference, rendercheck clean, proof-layout clean.

## Formal checks actually run (authoring stage, not independent review)

| Check | Command (scope) | Result |
|---|---|---|
| precheck | `node tools/tsx-run.mjs tools/precheck.mts` on the 8 item paths | 8 PASS (canonical renumbering adopted where proposed) |
| rendercheck | `node tools/rendercheck.mjs` on the 8 items and both pages | OK, no YAML/math/diagram defects |
| proof layout | `node tools/proof-layout.mjs` on the 8 changed item paths (single batch) | 8 items, 42 steps, 0 defects |
| content policy | `node tools/content-policy.mjs research/…-batch-29.pages.json` | 8 scoped items, 0 errors, 0 warnings |
| depcheck (focused) | `node tools/depcheck.mjs --items-file <8 ids>` | selected item/page and prerequisite cycle checks passed |
| dependency levels | `node tools/item-dependency-levels.mjs check --run …` | 862 items, no errors (our levels 0,1,1,1,2,3,4,5) |
| coverage | `node tools/coverage-checklist.mjs …-batch-29.coverage.json --require-destination` | 2 pages, 25 rows, 0 errors |
| manifest deps | `node tools/manifest-deps.mjs …-batch-29.pages.json` | 8 items, 0 errors |
| manifest integrity | `node tools/manifest-integrity.mjs --run …` | 100/100 owed pages, no scope drift |
| validate-plan | `node tools/validate-plan.mjs research/plan-spec.json --run …` | FAIL with 3 errors, all in other pairs (see below); our pair has none |
| proof contracts | `node tools/proof-contract.mjs …-batch-29.proof-contracts.json --strict` | 0 errors, 0 warnings, 7/7 items |
| boundary audit | `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template --json` | no contradicted and no template rows |
| citation fidelity | `node tools/citation-fidelity.mjs … --fail-on-missing-quote` | every quote found; no widening candidates |
| finite smoke | `node tools/finite-smoke.mjs …` | 0 errors (0 obligations carried at file level) |
| item decisions | `node tools/step3-decisions.mjs record-item` ×8, then `check --phase final` | 8 current rows; no work row for this pair |

## Manifest and dependency changes

- Only one manifest edit: `lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation`
  gains the published deps `thm-heine-borel-rn`,
  `lem-closed-subset-of-a-compact-space-is-compact` and
  `thm-continuous-bijection-from-a-compact-space-has-continuous-inverse`, and
  its scaffold `strategy` sentence that claimed an angle bound forbids equality
  of the perturbed endpoint differences was corrected to the projection
  argument actually used. All three suppliers are published, on the declared
  requires page `compactness-in-metric-spaces`, and choice-free;
  `dependency_level` remains 1.
- No other scaffold row changed; the B page keeps its single frozen example and
  no pages/items were added or removed. Cross-batch input
  `research/…-batch-29.cross-batch-dependencies.json` stays `[]`.

## Open obligations and findings at handoff

1. Step-1 readiness receipts for this pair are owner-held (`owner: true`,
   recorded 2026-10-09 by the round-1 owner integration) and now record
   pre-authoring inputs; the authoring-stage dependency addition cannot be
   re-bound by a non-owner writer. The same staleness now holds for the whole
   run's Step-1 records because item files exist; the owner refresh remains
   outstanding. The `1-scaffold` stage is stamped complete and no Step-3b gate
   reads Step-1 receipts.
2. `validate-plan` (whole run) reports three errors in other pairs, not in this
   one: `def-the-local-ring-at-q-zero` (pair `kashiwara-operators-and-crystal-lattices`)
   depends on a published item homed on a B page (`b-leaf`), with the matching
   undeclared-prereq row, and `character-polynomials-fi-modules-and-representation-stability`
   has an undeclared-prereq row for `eilenberg-watts-theorem-and-natural-transformations`.
   These are reported for their owners and for Step 4; they do not block this
   pair.
3. Audit point for the independent Step-5 review (not a discovered defect): the
   uniformity of the positive lower bound $a$ in
   `lem-corner-adapted-strong-approximations-remain-in-the-same-orthant` step 1.1
   across the finitely many face strata, and the compactness/star-margin
   constants in `lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection`
   step 1.1, are the two places where a reader should re-derive the constants
   from the written hypotheses.
4. The two frozen conservative AC edges on the two theorems are retained; both
   statements declare AC as ambient and both finished proofs record that only
   finitely many choices are made, with no essential AC use identified. Their
   metadata cleanup remains an owner/Step-4 consideration, not a defect found
   here.
5. No published defect was found in the suppliers cited by this pair; no
   consumer edges of this batch needed updating. The batch-37 consumer rows for
   this page remain owned by that batch.
6. Whole-run gates that fail only on sibling pairs (recorded for the serial
   reconciler; none of the failing rows names an item or page of this pair):
   `depcheck` and `fwdcheck`/`extcheck` fail on unauthored or unresolved
   sibling rows; whole-run `content-policy` fails on other batches
   (unauthored `scope-item-missing` rows in later batches and legacy notation
   rows); `validate-plan` fails on the three errors of item 2 above. The
   single-batch and focused runs for this pair are clean.

## Handoff summary

Completed IDs (all authored, checked, registered, and given current item
decisions): `def-relative-smooth-triangulation-and-projection-preserving-fitting`
(level 0), `lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation`
(1, repaired dependency), `lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps`
(1), `ex-a-trivial-smooth-bundle-has-a-projection-preserving-product-triangulation`
(B, 1), `lem-corner-adapted-strong-approximations-remain-in-the-same-orthant`
(2), `lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection`
(3), `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations`
(4), `thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation`
(5). Pages `library/differential-topology/relative-smooth-triangulation-and-bundle-fitting.md`
and `…-examples.md` written (draft). Contract file
`research/frontier-44-special-representation-examples-28-batch-29.proof-contracts.json`
written and strict-clean. All checks above were run in this dispatch; independent
mathematical review and every Step-5–8 gate remain for the later stages.
