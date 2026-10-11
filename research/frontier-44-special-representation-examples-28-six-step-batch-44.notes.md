# Batch 44 notes — `equivariant-borel-moore-correspondence-convolution-and-constructible-ext` (order 1821) / `...-examples` (order 1826)

Run `frontier-44-special-representation-examples-28`, role beta, one A/B pair, category
`special-topics-in-representation-theory`. The owner authoring direction
(`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`) was read
before constructing any item; it authorizes this pair as one of the 21 appended in-run prerequisite
pairs, requires suppliers before consumers and preserves every approved claim. Canonical plan:
`research/plan-spec.json`. Design: the "Equivariant Borel Moore Correspondence Convolution And
Constructible Ext" section of `research/plan-klr-foundation-prerequisites.md` (lines 1185-1250 at
read time), its five A carriers and two B proofcontracts under
`research/frontier-44-special-representation-examples-28-klr-foundation-convolution-drafts/` and
`research/frontier-44-special-representation-examples-28-klr-foundation-convolution-inventory-proofcontracts.json`,
plus the convolution source ledger, proof packet, recovery record and checks record.

Scaffold written: **5 A items + 2 B items = 7 items**, all recorded `ready`. In-run dependency levels
18, 19, 20, 21, 22 (A, in prerequisite order) and 21, 22 (B), recomputed from the written manifests
with `tools/item-dependency-levels.mjs` and matching `dependency_level` exactly. No new local item,
pair or page split was needed; both pages are far below the 100-item cap. Only this batch's manifest,
coverage, notes, cross-batch input and Step-1 readiness records were written; no published content,
shared plan, engine state or verdict was edited.

## Design / plan comparison (conflicts recorded)

1. **Design locator drift, not a scope conflict.** The dispatch cites the design at
   `research/plan-klr-foundation-prerequisites.md` **L1010**. That line falls inside the preceding
   "Geometric Fixed Parts And Gauss Manin Semisimplicity" material; the pair's section begins at line
   **1185** and ends before "Proper Cohomological Descent And Constructible Hypercovers" (line 1251).
   The section was located by title and read in full, together with every linked carrier draft and the
   convolution source/proof records. The shared plan was not edited.
2. **The plan controls and matches the design item-for-item and dep-for-dep.** The plan-spec
   inventories (same five A ids, the same two B ids, kinds, orders 1821/1826, identical `requires`
   lists and identical declared dependency lists) were compared against the design text and the
   carrier drafts: zero differences in claims, dependencies or order. Nothing was dropped or weakened.
3. **Two B titles replaced (metadata only).** The plan gives machine titles ("Ex unequal dimensional
   proper pushforwards have the summed dimension ext bm shift",
   "Ex a point and projective line check source first convolution and opposite composition"). The
   readable carrier-derived titles were used in the manifest, following the batch-37/41/43 precedent;
   no claim, kind, dependency or order changed. Flagged for owner reconciliation.
4. **Design warnings preserved in substance.** The Thom/exchange lemma keeps "no transversality of
   supports" and the mate-not-iso warning; the definition keeps the normalized dualizing object
   `omega_X^G|_X = omega_X` (never the quotient-stack shift) and the source-first corner convention;
   the Ext/BM theorem keeps `d_i+d_j-r`, degreewise finiteness only (no finite total Ext) and no
   semismallness/decomposition/purity/smoothness of the fiber products; the product theorem keeps the
   opposite-composition convention `alpha*beta = beta[r] o alpha` and the explicit unit image; the
   flag-incidence lemma keeps the arbitrary finite loopless quiver with multiedges and both-direction
   arrows, no smoothness/transversality of the fiber products, and the separate zero-section
   Euler-to-top-Chern clause.

## Items, dependency corrections and levels

Recorded in prerequisite order (in-run level in parentheses; levels recompute mechanically and equal
these labels):

1. `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`
   (18, lemma). Declared inputs kept; added `def-axiom-of-choice` because the two suppliers are
   AC-declared. The lemma's own normal-chart, supported tensor-Hom and iterated-diagonal arguments
   are otherwise choice-free.
2. `def-equivariant-borel-moore-homology-and-correspondence-convolution` (19, definition). Declared
   inputs kept; added AC, and added
   `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties` because the
   definition's `omega_X^G`, `H_G^{-j}` and Hom groups are formed in that equivariant category.
   `justified_by` names the same-page
   `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution`, which proves that
   the sheaf model of the refined operation agrees with the geometric one and so discharges the
   definition's agreement clause; the target depends on this item through `deps`, and the dependency
   is not repeated in `deps`.
3. `thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product` (20,
   theorem). Declared inputs kept; added AC and the equivariant category definition (the statement
   quantifies over `D^b_{G,c}(E;k)`).
4. `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution` (21, theorem).
   Declared inputs kept; added AC and the equivariant category definition.
5. `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus` (22,
   lemma). Declared inputs kept; added AC, the equivariant category definition, and
   `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`
   (batch 37, level 12), which is the item that produces finite simplicial/CW models of finite-type
   quasi-projective complex varieties and hence supplies the CW hypothesis of the Euler-to-top-Chern
   supplier. The exact Borel-approximation bookkeeping is an authoring obligation (below).
6. B: `ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift` (21,
   example). Declared input kept (the Ext/BM theorem); added AC, the equivariant category definition,
   and the published cellular items that compute `H^*(CP^1;k)` directly with `k` coefficients:
   `def-stiefel-space-grassmannian-and-tautological-bundle`,
   `def-schubert-cells-in-real-and-complex-grassmannians`,
   `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`,
   `cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary`,
   `thm-cellular-cochains-compute-cohomology-with-local-coefficients` and
   `def-cw-complex-with-closure-finiteness-and-weak-topology`. These live on
   `topological-vector-bundles-and-grassmannian-classification`, `cw-complexes-and-cellular-homology`
   and `local-coefficients-twisted-homology-and-duality`, all inside the transitive `requires`
   closure reached through `equivariant-constructible-perverse-foundations` and
   `analytic-derived-six-operations-and-duality`.
7. B: `ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition` (22,
   example). Same inputs as item 6, plus the product theorem
   `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution`, plus a backward
   same-page dependency on item 6 (the example reuses its `RGamma(P^1,k) = k oplus k[-2]`
   identification). Same-page B-to-B backward dependencies are legal and were checked.

No item depends on a later item of the same page; no cycle exists; every declared dependency resolves
either to a same-page earlier item, to an in-run supplier item on a strictly earlier page, or to a
published item whose home page lies inside the page's `requires` closure.

## Dependency verification against the carriers and suppliers

Every declared input was checked against the supplier's current manifest statement (in-run) or
published frontmatter (published), for hypothesis strength, direction, convention and axiom
strength. The checks actually performed:

- **Ext/BM chain (item 3).** `Hom_E(f_{i!}k_i, f_{j!}k_j[t]) = Hom_{X_i}(k_i, f_i^!f_{j!}k_j[t])`
  uses `f_{i!} -| f_i^!`; the dual mate of proper base change gives `f_i^!f_{j!} = p_* q^!`;
  smooth orientation gives `q^!k_j = omega_Z[-2d_j]`; the corner degree `d_i+d_j-r` and the
  finite-approximation degree `d_i+d_j+2b-r` (no stack shift) were checked against the definition
  item and the batch-41 statements. Degreewise finiteness is exactly the cartesian-simplicial
  lemma's conclusion.
- **Definition well-definedness (item 2).** Stable Borel value, the `+2b` shift and independence of
  the approximation come from `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`;
  `omega_X^G|_X = omega_X` and `omega_X = k_X[2d]` come from
  `thm-constructible-six-functors-proper-base-change-and-verdier-duality`; the arbitrary-support
  refined diagonal operation comes from item 1.
- **Flag-incidence item (item 5).** The associated-bundle model `G x_{P_nu} S_nu`, smoothness and
  pure dimension `d_nu`, projectivity of `pi_nu`, properness of the middle-forgetting map as a base
  change of `pi_eta`, the equivariant orientation/Thom calculus and the zero-section
  Euler-to-top-Chern clause were checked against the published flag-variety lemma and Euler-to-Chern
  theorem (read on disk, including the latter's "numerable complex bundle over a path-connected CW
  complex" hypothesis). The CW-type supplier declared for that hypothesis is the batch-37
  finite-triangulation item; its exact application at each finite Borel approximation remains an
  authoring obligation for Step 3 and is not hidden.
- **Examples (items 6-7).** `P^1 = Gr_1(C^2)` has the Schubert CW structure with one cell in real
  dimensions 0 and 2 and no adjacent cells, so the cellular cochain complex with constant `k`
  coefficients has zero differentials and `H^0 = H^1 = H^2` values `k, 0, k`; the corner values
  (`Ext^r` nonzero exactly for `r = -1, 1` in both corners, Borel-Moore degrees 2 and 0) and the
  product check (`beta[-1] o alpha = id_k`, `[P^1]*[pt] = [pt]`) were recomputed from those facts and
  the A-page items.
- **Link/dependency audit.** A scripted scan extracted every `[[...]]` link from all seven
  statement/strategy fields; every link resolves to a declared `deps` or `justified_by` target
  (after adding the same-page example dependency in item 7).
- **Concurrent-writer recheck.** During this dispatch other writers reworked the batch-41 and batch-42
  manifests (2026-10-10T00:39+1100) and appended to `research/plan-klr-foundation-prerequisites.md`
  outside this pair's section, and batch 45 was scaffolded in parallel. The batch-40/41 items this
  pair consumes were re-read after the rework: the consumed clauses and their in-run levels
  (10/12/15/16/17) are unchanged. The readiness records below were written after that recheck; the
  stale records invalidated by the rework (including the batch-41 six-functor item) belong to those
  batches' owners and were not touched here.

Additions beyond the design's declared inputs are only the AC declarations, the equivariant category
definition (well-definedness), the finite-triangulation CW supplier for item 5, and the published
cellular/Schubert items for the two B examples. No claim was narrowed and no inventory was padded.

## AC bookkeeping

All seven items state AC (or its inheritance) and declare `def-axiom-of-choice`, with the exact use
recorded in `axiom_use`: every proof consumes AC-declared suppliers (the analytic and equivariant
six-operation/duality theorems, the equivariant category construction, the Borel/Stiefel
stabilization lemmas, the flag-variety and Euler-to-Chern theorems, and the cellular items), while
the normal-chart, orientation, adjunction, degree, cellular and corner computations are otherwise
choice-free. No incompatible-axiom branch is created; no path from this pair reaches
`deferred-set-theory-beyond-choice`.

## Sources (full text fetched, stamped and inspected)

`source-fetch-check --coverage ... --stamp`: **5/6 source instances fetch-verified (5 newly
stamped)**; check mode **6/6 resolved (1 documented drop)**. Four active treatments back the pair:

- **Ginzburg, Geometric methods in representation theory** (57 PDF pp., arXiv:math/9802004,
  `sha256_16 21bd3b692868e16b`): §1 (intersection pairing), §2 (supported convolution, orientation
  dependence and associativity; PDF pp. 6-10) and §5 Proposition 5.1 (the convolution/Ext chain and
  its explicit import note; PDF pp. 17-20). The notes themselves state that the algebra-structure
  compatibility "is proved in [CG, Theorem 8.6.7]".
- **Varagnolo-Vasserot, Canonical bases and KLR-algebras** (arXiv:0901.3992): §1.1-1.10, including
  §1.7 (details cited to [CG, §8.6]), Lemma 1.8(b) ("proved as in [CG, Prop. 8.6.35]") and the
  source-first convolution/grading conventions.
- **Varshavsky, Lefschetz-Verdier trace formula** (arXiv:math/0505564): §0.2-0.4 and §1.1, with the
  complete short base-change-pasting proof 1.1.6(b); recorded honestly as l-adic formal supporting
  evidence, not as an analytic-equivariant construction theorem.
- **Hatcher, Algebraic Topology** (complete book, author-hosted PDF): Example 0.6 and §2.2 for the
  one-cell-per-even-dimension CW structure and cellular homology of `CP^n`, and §3.2 for
  `H^*(CP^n;Z)`; used by both B examples.

### Documented source drop: Chriss-Ginzburg, *Representation Theory and Complex Geometry*

The product-compatibility slot of the pair corresponds to **[CG, Theorem 8.6.7]**, which Ginzburg §5
Proposition 5.1 and VV Lemma 1.8(b) import, and the associativity proof is cited to [CG] as well.
The original monograph full text was **not retrieved**: after the initial failure (math.uchicago.edu
`ChrissGinzburg.pdf`, HTTP 404, re-confirmed; the earlier author attempt had the same outcome) five
recovery retries were recorded (Harvard Gaitsgory notes HTTP 403; the d-nb.info front-matter/
table-of-contents PDF, which confirms §2.7 and §8.6 but contains no theorem text; the Springer
`978-0-8176-4938-8` landing page, paywalled with no mathematics; an archive.org details request HTTP
404; the `978-0-8176-4938-4` Springer path HTTP 404), together with two autonomous web searches
(exact-theorem search and open-copy search) that located only the paywalled/landing/ToC material and
third-party citations.

The batch therefore records, in the coverage file, a **`source_resolution` with `status: dropped`,
`decided_by: step-1-scaffolder`, `confidence: certain`**, the full attempts/searches lists, and
alternatives for the two affected item contracts:

- the convolution definition (`def-equivariant-borel-moore-homology-and-correspondence-convolution`),
  supplied by the supported construction of Ginzburg §2 plus Varshavsky §1.1 and the in-run
  six-functor inputs;
- the product theorem
  (`thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution`), supplied by the
  complete local reconstruction already present in the carrier draft (typed triple diagram, mate
  exchange, supported orientation comparison, Beck-Chevalley composed-unit identity).

No reliance on unread CG text remains, and the drop is not proof acceptance: the local reconstruction
is the declared alternative and remains open to Step-3 mathematical review. All other source rows are
`included`/`inline`/`deferred`/`out-of-scope`, each with a specific reason; one deferral resolves to
`signed-quiver-flag-convolution-and-klr-ext-realization` (the KLR comparison material built by
batch 47, which declares this page as a prerequisite).

Coverage: **2 pages, 26 harvested results, 0 errors, 0 warnings**
(`coverage-checklist --require-destination`). Scoped `url-sweep --recover --fail-on-dead`: **4/4
live, 0 failed, 0 blocking** (the CG landing URL is the one documented drop). Scoped `source-backing`:
**5 authored results, every one still backed by an openable source or a documented alternative
argument**.

## Cross-batch dependency input

`research/frontier-44-special-representation-examples-28-batch-44.cross-batch-dependencies.json`
carries **19 declaration-level `verified` rows**: two page edges
(`analytic-derived-six-operations-and-duality`, batch 40; `equivariant-constructible-perverse-foundations`,
batch 41) and 17 item edges, each with the exact consumed clause — 15 to batch 41
(the equivariant category definition, the cartesian stabilization lemma and the equivariant
six-functor theorem, consumed by the five A items and the two examples), 1 to batch 40 (the analytic
six-operations theorem consumed by the Thom/exchange lemma) and 1 to batch 37 (finite stratified
triangulations for the CW type used by the Euler-to-Chern clause). Supplier proofs are owed to
Steps 3-5, where the uses must be rechecked.

`frontier-dependency-ledger refresh --run ...`: refreshed and deduplicated; the unified ledger lists
batch 44 in `reviewed_batches` with all 19 of its declared edges reviewed, and no orphaned batch-44
row. `--require-reviewed` still fails only through the pending sibling batches (11, 24, 25, 45-49).
Sibling expectation: batch 47 (`signed-quiver-flag-convolution-and-klr-ext-realization`, order 1829)
declares this A page as a prerequisite and its items consume the Thom lemma, the definition, the
Ext/BM theorem, the product theorem and the flag-incidence lemma; that batch's writer owns the
consumer rows.

## Published defects

None found. Every published `deps` target used by this batch (the flag-variety lemma,
the Euler-to-Chern theorem, the CW/Schubert/cellular items, the Stiefel-Grassmannian definition,
`def-axiom-of-choice`) was read on disk and matches its use. No repair was needed and no defect row
is entered. Pre-existing run state not touched here: the batch-10 owner-held escalation, the retired
dedicated prerequisite run's history, and the 14 empty sibling page inventories still awaiting their
writers.

## Checks run (exact results at this writing)

- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — no error for any batch-44 item; every label equals the computed level (18/19/20/21/22/21/22); the
  remaining findings are `empty scaffold inventory` for pending sibling batches (14 at this writing,
  shrinking as siblings are scaffolded).
- `node tools/manifest-deps.mjs research/...-batch-44.pages.json` — `7 item(s), 0 normalized,
  0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/...-batch-*.pages.json` — `0 error(s),
  0 warning(s)` (710 scoped items when this batch alone was written; 715 after sibling batches were
  scaffolded concurrently, still clean).
- `node tools/validate-plan.mjs research/plan-spec.json --run ...` — exit 0; declared page order
  acyclic and consistent, no item-level cycles, forward references, B-page dependencies or unresolved
  ids. Only `[redundant-prereq]` advisories for this page's `requires` (analytic-derived operations
  and relations-functions reached transitively), which the plan already carried and which were not
  edited.
- `node tools/frontier-item-gate.mjs --run ... --tool validate-plan` — exit 0, same advisories.
- `node tools/coverage-checklist.mjs research/...-batch-44.coverage.json --require-destination` —
  `2 page(s), 26 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage ... --stamp` — `5/6 source(s) fetch-verified
  (5 newly stamped)`; check mode `6/6 resolved (1 documented drop)`.
- `node tools/url-sweep.mjs --coverage ... --out /tmp/b44/url-liveness.json --recover
  --fail-on-dead` — `4/4 live; 0 failed; 0 blocking`.
- `node tools/source-backing.mjs --coverage ... --liveness /tmp/b44/url-liveness.json` — `5 authored
  result(s) ... every one still backed`.
- `node tools/frontier-dependency-ledger.mjs refresh --run ...` — refreshed; batch 44 fully
  reviewed (19/19 edges).
- `node tools/drift-review-check.mjs --run ...` — `49 page(s) reviewed ... no blocked edges`.
- `node tools/manifest-integrity.mjs --run ...` — `98 page(s) owed, 98 in the manifests ... no
  scope drift`.
- `node tools/step1-decisions.mjs check --run ...` — `715 items, 714 ready`; every batch-44 item
  closed; the single unresolved item run-wide is the pre-existing batch-10 owner escalation.

Item-mode `fwdcheck`/`extcheck` are deliberately not run: they require Step-3 item carriers, which do
not exist at Step 1 (`focus-item-unknown`), the same boundary recorded in batches 41 and 43.

## Step-1 decisions

Recorded `ready` one at a time in prerequisite order, with examined dependency IDs and the evidence
above (hashes are the first 12 hex digits of the recorded `sha256`):

1. `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`
   (3 deps, level 18, `b11d4f565359`).
2. `def-equivariant-borel-moore-homology-and-correspondence-convolution`
   (5 deps, level 19, `b3a1b4bb3574`).
3. `thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product`
   (5 deps, level 20, `b3a1b4bb3574`).
4. `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution`
   (7 deps, level 21, `b3a1b4bb3574`).
5. `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus`
   (11 deps, level 22, `e58ac7b2d10d`).
6. `ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift`
   (10 deps, level 21, `7939172365e8`).
7. `ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition`
   (12 deps, level 22, `4ffa57b289d6`).

The first three records were re-recorded after the concurrent batch-41/42 manifest rework invalidated
their earlier hashes; items 2-4 share a closure hash because the definition's `justified_by` edge and
the product theorem's dependency on the definition make their input closures coincide (the tool
hashes the dependency closure, so a change in any of them invalidates all three). Scaffold readiness
only: no authored item file, independent mathematical audit, gate pass or stage close is claimed.

## Findings for the owner / operator (none caused by this scaffold, none edited here)

1. **CG source drop adjudication.** The [CG, Theorem 8.6.7] product-compatibility import is covered
   by the local reconstruction rather than the original text. The drop is recorded with full
   attempts/searches and alternatives in the coverage; Step 3 must review the reconstruction, and the
   owner may prefer to keep the CG reading open as an independent treatment if a copy becomes
   accessible.
2. **CW bookkeeping obligation (item 5).** The Euler-to-top-Chern theorem needs the flag/bundle
   Borel approximations to have CW type; the finite-triangulation supplier is declared, but Step 3
   must reconcile the precise approximation model with the CW hypothesis.
3. **B-page title divergence** from the plan-spec machine titles, recorded above for reconciliation.
4. **`requires` advisories.** The A page reaches `analytic-derived-six-operations-and-duality` and
   `relations-functions-and-quotients` transitively; this produces only `redundant-prereq` warnings
   and was left untouched as a plan-level question.
5. **Concurrent writers observed.** Batch 41/42 manifests and the design file were modified by other
   writers during this dispatch (00:39/00:41+1100); batch 45 was scaffolded in parallel. The consumed
   interfaces were re-read afterwards and the readiness records written after the recheck. Sibling
   owners retain their own stale-record cleanup.
6. **Orphaned ledger rows.** The unified ledger still carries 25 pre-existing orphaned review rows
   (batches 9 and 23); no batch-44 row is orphaned.
