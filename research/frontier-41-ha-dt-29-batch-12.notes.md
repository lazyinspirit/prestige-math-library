# Batch 12 notes — `the-hirzebruch-signature-theorem`

Run `frontier-41-ha-dt-29`, role beta, label batch-12. Owned pair: DT-20
`the-hirzebruch-signature-theorem` (A, order 555) /
`the-hirzebruch-signature-theorem-examples` (B, order 556),
`differential-topology`. Outputs written: this batch's manifest
(`research/frontier-41-ha-dt-29-batch-12.pages.json`, 25 A + 5 B items), the
coverage record (`…-batch-12.coverage.json`, 47 harvested rows over four
sources plus four canonical rows), the cross-batch consumer input
(`…-batch-12.cross-batch-dependencies.json`, 2 page + 15 item rows), 30
per-item readiness records (all `ready`), and this note. No published content,
shared plan, engine state or verdict was edited.

## 1. Design, plan and task comparison

- The dispatch table, the scope ledger, `research/plan-spec.json` (order 555,
  category `differential-topology`, companion pointer) and the design section
  `research/plan-differential-topology-track.md` L1087–1127 agree on the A/B
  ids, orders, category, companion and the A page's seven-page `requires`
  array. The plan's §12.4 printed table is the same array; no scope, order or
  dependency conflict exists.
- Binding owner direction: `research/frontier-41-ha-dt-29-owner-authoring-direction.md`
  requires §12 of the DT plan to control dependency questions and forbids
  rehoming the two inherited characteristic-number definitions. This batch
  cites the published DT-15 definitions
  (`def-pontryagin-number-of-a-closed-oriented-manifold`) and the in-run DT-19
  characteristic-number items; it mints neither. §12.5's DT-19/DT-20 row
  ("Steenrod/Thom detection and Pontryagin normalization are now hard
  dependencies") is honoured: the L-polynomials are normalised against the
  published AT complexification convention `p_i = (-1)^i c_{2i}` and the
  in-run DT-19 computation `p(T CP^n) = (1+y^2)^{n+1}` with `p_1[CP^2] = 3`,
  `p_2[CP^4] = 10`.
- **Locator discrepancy (recorded, not a mathematical conflict).** The
  design's DT-20 source line reads "TW §19, pp. 34–36"; §19 ends on printed
  p. 37 and the final substitution step of the signature-theorem proof is on
  that page. The coverage locator is therefore "section 19, printed pp. 34–37".
  Similarly the design's "F Lectures 11–12, pp. 92–105" is extended to
  §7.6 and §8.1–8.2, printed pp. 65–68, because the design's own item 11 (the
  L-genus of projective space) is Freed's Proposition 8.8, not in Lectures
  11–12. Both extensions widen the read range; no result was dropped.
- The design's 17 A rows are all present under their designed ids and kinds,
  and the 5 B rows likewise. Eight local prerequisites were added in the initial scaffold (below); three additional local proof/definition items are recorded in §9;
  nothing was weakened, merged away or padded. The A page carries 25 items,
  far under the 100-item cap.
- The MS locator follows the plan register's warning that the re-typeset scan
  shifts Chapters 16–19: chapters and sections are the authoritative locator,
  the original pagination is quoted where the design or the register gives it,
  and the actual scan folios are recorded in the reading verification.

## 2. Inventory, design mapping and added prerequisites

Initial A-page order (25 items at first scaffold; the three later local items are recorded in §9; design row numbers are given where they exist):

1. `def-middle-dimensional-intersection-form` (design 1)
2. `lem-middle-dimensional-intersection-form-is-symmetric-and-nondegenerate` (design 2)
3. `def-signature-of-a-closed-oriented-four-k-manifold` (design 3)
4. `lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals` (design 4)
5. `lem-a-half-dimensional-isotropic-subspace-forces-zero-signature` *(added)*
6. `lem-signature-is-additive-under-disjoint-union-and-orientation-reversal` (design 6; listed before design 5 so the page order respects the dependency)
7. `thm-signature-is-an-oriented-cobordism-invariant` (design 5)
8. `lem-tensor-product-of-real-symmetric-forms-has-multiplicative-inertia` *(added)*
9. `thm-signature-is-multiplicative-under-cartesian-products` (design 7)
10. `def-formal-hyperbolic-tangent-series` *(added; definition of the formal tangent, its inverse series and the even series x/tanh x)*
11. `lem-formal-tangent-and-artanh-series-are-compositional-inverses` *(added)*
12. `lem-l-series-coefficient-identity-for-projective-spaces` *(added; the coefficient of z^{2k} in (z/tanh z)^{2k+1} is 1)*
13. `def-hirzebruch-l-polynomials` (design 8)
14. `lem-l-polynomials-form-a-well-defined-multiplicative-sequence` *(added; well-definedness, Whitney multiplicativity, naturality, rank-two evaluation)*
15. `def-total-l-class-of-a-smooth-manifold` (design 9)
16. `lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism` (design 10)
17. `lem-l-class-of-complex-projective-space` *(added)*
18. `lem-l-genus-of-complex-projective-space-is-one` *(added; the design's item 11 needs this value and the class computation)*
19. `lem-signature-and-l-genus-agree-on-complex-projective-spaces` (design 11)
20. `lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces` (design 12)
21. `thm-hirzebruch-signature-theorem` (design 13)
22. `cor-four-dimensional-signature-formula` (design 14)
23. `cor-eight-dimensional-signature-formula` (design 15)
24. `cor-signature-theorem-imposes-pontryagin-number-congruences` (design 16)
25. `rem-signature-is-not-defined-geometrically-by-zero-in-other-dimensions` (design 17)

B-page (5): `ex-signature-and-p-one-of-complex-projective-two-space`,
`ex-orientation-reversed-complex-projective-plane-has-signature-minus-one`,
`ex-signature-of-s-two-times-s-two-is-zero`,
`ex-signature-is-multiplicative-on-products-of-projective-spaces`,
`cex-euler-characteristic-does-not-determine-signature`.

**Reasons for the eight added prerequisites.** (i) The half-dimensional
isotropic lemma (item 5) is Freed's Lemma 11.30, used twice: in the boundary
vanishing (item 7) and for the off-middle Künneth blocks of a product (item
9). (ii) The tensor-inertia lemma (item 8) is the linear-algebra fact behind
Freed's Exercise 11.25; without it the product theorem's inertia computation
is a citation to a source rather than a proved step. (iii)–(v) Items 10–12
make the L-series and the projective-space coefficient identity precise: the
sources use the analytic substitution `u = tanh z`, the library's
`lem-formal-residue-identities` supplies the same change of variables
formally, and the local items keep the coefficient computation from being an
unproved "substitution" inside the signature theorem. (vi) Item 14 proves
that the sequence `L_k` of item 13 is well defined and multiplicative — the
content of Milnor–Stasheff's Lemma 19.1 and of Weston's explicit verification
— and computes the rank-two case `L(E) = e/tanh e` that the projective-space
and product evaluations consume. (vii)–(viii) Items 17–18 separate the class
computation `L(T CP^n) = (y/tanh y)^{n+1}` from the evaluation
`L[CP^{2k}] = 1`, so the spanning-family check is not one opaque step.

**Design-row adaptations recorded.** The counterexample item
`cex-euler-characteristic-does-not-determine-signature` implements the
design's "same Euler characteristic, different forms" with the connected
manifolds `CP^2` and `−CP^2` (χ = 3 from the Schubert cell count, forms (1)
and (−1)). A connected-sum pair such as `S^2×S^2` versus `CP^2#CP^2` would
require the (unpublished and out-of-closure) additivity of the four-dimensional
intersection form under connected sum; it was not imported.

## 3. Source record

Four full treatments, all fetched and stamped by
`node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-12.coverage.json --stamp`
(4/4 fetch-verified; stamps live in the coverage file):

1. Milnor–Stasheff, *Characteristic Classes* (textbook), Edinburgh mirror
   `https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf`,
   13,204,109 bytes, 326 PDF pages, Chapter 19 in full plus §15.6 and §18.9.
   **Mirror history:** the plan register's Rochester URL was attempted six
   times (initial plus five retries) by batch-11 and timed out every time;
   the Edinburgh mirror is the identical document (same byte size) and is
   already the cited copy of the published DT-15 items. Per the standing
   "reuse genuine attempts; do not restart the retry allowance" rule, no new
   retry cycle was opened; the mirror was downloaded and read in full.
2. Freed, *Bordism: Old and New* (lecture-notes), 7,243,524 bytes, 208 pages,
   §7.6, §8.1–8.2 and Lectures 11–12 read in full.
3. Weston, *An Introduction to Cobordism Theory* (lecture-notes), 395,090
   bytes, 37 pages, §18–§19 read in full.
4. Lurie, *The Hirzebruch Signature Formula*, Lecture 25 (lecture-notes),
   161,998 bytes, 3 pages, complete lecture read; the source row carries a
   `short_document_reading` receipt bound to SHA-256
   `c7cde876…8c9ad867` with pages 1–3. This is the design's "JL".

Every harvested heading has a disposition (47 rows: 34 `included`, 4
`inline`, 1 `already-published`, 5 `deferred` with a resolvable destination,
3 `out-of-scope` with specific reasons). Declines cover: the K3/Rohlin
example block, Corollary 19.6 on oriented homotopy invariance, Wu's mod-ℓ
Theorem 19.7 and the closing problems in Milnor–Stasheff; Freed's Hurewicz and
rational dimension sections and the spanning theorem (deferred to the in-run
`characteristic-numbers-and-cobordism-obstructions` and
`thom-spectra-and-unoriented-bordism-detection` pages); Weston's Wall theorem
and its stated-without-proof Theorem 18.5; and Lurie's L-theory/KO section.
Source caveat recorded without copying: Weston's Theorem 18.5 is stated
without proof in the source; this page never uses it.

`node tools/url-sweep.mjs --coverage …batch-12.coverage.json --recover
--fail-on-dead` reports 4/4 live, and
`node tools/source-backing.mjs --coverage …batch-12.coverage.json --liveness …`
reports every authored result backed (14 authored results, 0 lost).

## 4. Dependency verification

- All 30 manifest items carry explicit `deps`; every target resolves either to
  a published item on disk or to an item of this run (batches 2 and 11 only).
  No missing, circular, forward or same-page-later dependency remains; the B
  page depends only on its own A page items and on published/in-run A-page
  items, so the B leaf rule is respected.
- Actual supplier interfaces were read, not inferred, at the level needed for
  the scaffold:
  - **Published.** AT-cup/cap: `def-singular-cohomology-ring`,
    `thm-singular-cohomology-is-graded-commutative`,
    `def-cap-product-with-cohomology-first`, `thm-cap-product-boundary-identity`,
    `def-kronecker-evaluation-pairing` and its representative-independence
    lemma, `cor-poincare-duality-gives-a-nonsingular-cup-pairing`,
    `thm-poincare-duality-for-oriented-topological-manifolds`,
    `thm-poincare-lefschetz-duality`,
    `def-fundamental-class-of-a-compact-oriented-manifold` (including the
    orientation-negation clause),
    `prop-singular-homology-of-a-disjoint-union-is-the-direct-sum`,
    `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`,
    `cor-homology-of-spheres`; linear algebra:
    `def-definiteness-inertia-and-signature-data-over-the-reals`,
    `thm-sylvesters-law-of-inertia`,
    `cor-real-symmetric-bilinear-forms-are-classified-by-inertia`,
    `thm-symmetric-bilinear-forms-have-an-orthogonal-basis`; formal series:
    `def-formal-exponential-logarithm-and-powers`,
    `thm-formal-exponential-logarithm-identities`,
    `thm-formal-compositional-inverse`, `prop-formal-derivative-algebra`,
    `lem-formal-residue-identities`, `def-formal-laurent-series-and-residue`;
    symmetric functions: `thm-fundamental-theorem-of-symmetric-polynomials`,
    `def-elementary-symmetric-polynomials`; AT characteristic classes:
    `def-pontryagin-classes-by-complexification`,
    `thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes`,
    `thm-pontryagin-whitney-product-away-from-two`,
    `thm-top-pontryagin-class-is-the-square-of-the-euler-class`,
    `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`,
    `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting`;
    DT-15: `def-pontryagin-number-of-a-closed-oriented-manifold`,
    `prop-oriented-boundaries-have-zero-pontryagin-numbers`,
    `def-unoriented-and-oriented-bordism-groups`,
    `thm-cartesian-product-makes-bordism-a-graded-ring`,
    `lem-fundamental-class-of-a-boundary-pushes-forward-to-zero`,
    `def-oriented-smooth-cobordism`, `def-null-cobordant-closed-manifold`;
    CW/Euler: `def-euler-characteristic-of-a-finite-cw-complex`,
    `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`.
    Hypotheses, directions, coefficient rings, orientation conventions and the
    exact wording of the projective-space and boundary statements were
    checked against the item files, not the design prose.
  - **In-run (open cross-batch rows).** Batch 2: the geometric-intersection
    theorem and the cap-product convention remark. Batch 11:
    `lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes`,
    `lem-kronecker-pairing-is-multiplicative-under-cross-products`,
    `lem-fundamental-class-of-a-product-of-closed-manifolds`,
    `lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas`,
    `cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds`,
    `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`.
    All six batch-11 items and both batch-2 items currently carry `ready`
    Step-1 decisions.
- **Axiom of Choice.** AC is inherited from `cor-poincare-duality-gives-a-nonsingular-cup-pairing`
  (and through it Poincaré duality), from the Pontryagin/Chern-class
  construction (`def-pontryagin-classes-by-complexification` assumes AC), and
  from the in-run DT-19 suppliers. Every item that consumes these states the
  assumption and names `def-axiom-of-choice`; the purely formal and linear
  algebra items (5, 8, 10–12) are choice-free.
- **Undeclared prerequisites.** Every item-to-page edge induced by a dep lies
  in the transitive closure of the page's seven declared `requires` entries;
  this was checked explicitly against `plan-spec.json` before the manifest was
  written, so Step 4's `undeclared-prereq` check has no new edge to reject.
  No item depends on the in-run AT support page
  `thom-spectra-and-unoriented-bordism-detection` directly; the rational
  Hurewicz inputs reach this page only through batch 11's spanning
  proposition.
- **Load-bearing risk (recorded, open).** The signature theorem's final step
  consumes batch 11's spanning proposition, whose proof consumes the batch-30
  AT support items and their strict stability ranges. Scaffold adequacy was
  checked against the batch-11 manifest text; the Step-3 author must re-read
  the final supplier statement and proof once batches 11 and 30 close. The
  cross-batch row records this explicitly.
- **100-item cap.** A page 25 items; B page 5 items.

## 5. Cross-batch input and ledger

`research/frontier-41-ha-dt-29-batch-12.cross-batch-dependencies.json` now
holds 2 page rows (to batch 11's DT-19 and batch 2's DT-12 pages, both updated
with the exact planned interface) and 15 item rows, one per actual use, all
`open` pending the Step-3/Step-5 checks. `node
tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`
completed and registered every row (no orphaned reviews). Batch 24's existing
page row (`exotic-smooth-structures-and-milnor-spheres` → this page) is
already present in its own input; nothing outside this batch was edited.

## 6. Checks run (exact results)

- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-12.pages.json`
  — 30 items, 0 missing, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json`
  — 748 scoped items, 0 errors, 0 warnings. (Running the same tool on this
  batch alone reports 15 `batch-dependency-missing` errors for the in-run
  suppliers; that is the expected scoped-run artifact, and the engine gate
  runs the whole-run form that resolves them.)
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`
  — no error for any batch-12 item; the only messages are `empty scaffold
  inventory` for the still-unscaffolded batch 24. Levels run 0–14 within this
  batch; the theorem is level 10 and its corollaries 11–12.
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-12.coverage.json --require-destination`
  — 1 page, 47 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage …batch-12.coverage.json --stamp`
  — 4/4 sources fetch-verified (stamps written); check mode passes.
- `node tools/url-sweep.mjs --coverage …batch-12.coverage.json --recover --fail-on-dead`
  — 4/4 live, 4 citation decisions, 0 failed.
- `node tools/source-backing.mjs --coverage …batch-12.coverage.json --liveness …`
  — 14 authored results, every one backed.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`
  — refreshed and deduplicated.
- `node tools/step1-decisions.mjs record …` — 30 records written (all
  `ready`), verified current by re-running the checker: no batch-12 item
  appears in the remaining work list.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0: "declared
  page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 1420 page(s)
  with item lists" (259 planned pages still carry no item list, including this
  one until the Step-4 splice; the closure check recorded in §4 was performed
  against `plan-spec.json` directly so that the Step-4 splice will not
  introduce an undeclared prerequisite).
- `node tools/fwdcheck.mjs --quiet` — exit 0, no finding.
- `node tools/extcheck.mjs` — exit 0; its two informational
  `unproved-on-published` notes concern `thm-baire-category-locally-compact-hausdorff`
  and `thm-urysohn-lemma`, which are unrelated to this pair.

## 7. Escalations and published defects

- No batch-12 item is escalated: all 30 readiness records are `ready`.
- No new published defect was found. The published DT-15 items consumed here
  (`def-pontryagin-number-of-a-closed-oriented-manifold`,
  `prop-oriented-boundaries-have-zero-pontryagin-numbers`) match the use in
  the L-genus homomorphism; the published AT convention
  `p_i = (-1)^i c_{2i}` matches the design's L_1 = p_1/3 and
  L_2 = (7p_2 − p_1²)/45 exactly as the owner direction requires.
- Noticed but out of this batch's write scope (for the owner/canonical
  ledger): batch 20's freshly scaffolded manifest still lacks Step-1
  decisions and batch 24 is unscaffolded; both are other units' record work,
  not a defect of this pair.

## 8. Final validation pass (after the last content edit)

Three statements were refined after the first readiness round and every record
was then rewritten against the current bytes (all 30 current):

- `def-formal-tangent-and-artanh-series-are-compositional-inverses` now
  spells out the associativity argument (`T∘A=z` makes `A` a right inverse;
  the unique two-sided inverse of `T` is therefore `A`), instead of relying on
  an implicit uniqueness claim.
- `ex-signature-of-s-two-times-s-two-is-zero` now derives
  `p_1[S^2×S^2]=0` from the four-dimensional signature formula it already
  cites, instead of a vague degree argument.
- `def-middle-dimensional-intersection-form` and the signature definition
  point to the same-page lemma/remark in prose rather than through a forward
  wikilink, so the Step-3 `depcheck` pass has no forward-citation warning to
  resolve.

Recomputed: `node tools/manifest-deps.mjs …batch-12.pages.json` (30 items, 0
errors), `node tools/content-policy.mjs --manifest-only` over all 30 manifests
(770 items, 0 errors), `node tools/item-dependency-levels.mjs check --run
frontier-41-ha-dt-29` (no batch-12 error; only batch 24's empty inventory),
`node tools/coverage-checklist.mjs` over all coverage files (0 errors; no
warning on this page), `node tools/source-fetch-check.mjs` in check mode over
all coverage files (186/186 resolved, this batch 4/4 verified), and the
engine's batch predicate for unit 12 (manifest + coverage + all 30 closed
readiness records + every `dependency_level` equal to the computed level)
reports **COMPLETE** with no problems.


## 9. Owner-directed mathematical audit and repair

A read-only mathematical/source audit identified and repaired the following local proof issues without changing the 30-pair scope or the Hirzebruch theorem's claim.

- `lem-a-half-dimensional-isotropic-subspace-forces-zero-signature`: the first scaffold incorrectly set `dim(U^perp+W)=dim(V)`. In fact `U^perp+W=e^perp`, of dimension `dim(V)-1`; the corrected proof uses the nonzero functional `B(-,f)|W`, obtains `dim(W1)=dim(W)-1`, and verifies `dim(U^perp)-dim(W1)=dim(W1)`. Its direct consumers are the boundary-cobordism theorem and the Cartesian-product signature theorem.
- Added `lem-boundary-restriction-image-is-lagrangian`. For the positive cohomology connector `delta`, PL duality and the cap/cup evaluation identity give `⟨a, T(delta x)⟩=⟨x cup i^*a,[M]⟩=Q_M(i^*a,x)` with sign `+`; both boundary degrees are `2k`, and `∂[W,M]=[M]` uses the published outward-normal-first orientation. Exactness then gives `ker(delta)=im(i^*)=K^perp`, hence the restriction image is Lagrangian. `thm-signature-is-an-oriented-cobordism-invariant` now consumes this local lemma instead of the previous tautological rank calculation.
- Under `def-oriented-smooth-cobordism`, a cobordism from `M0` to `M1` has induced boundary `-M0 ⊔ M1`; the theorem now applies boundary vanishing to `-V`, whose boundary is `M0 ⊔ -M1`.
- `lem-signature-is-independent-of-basis-and-field-extension-from-rationals-to-reals` now locally proves coefficient change. Integral UCT plus finite generation and the finitely-generated-abelian-group decomposition identify field cohomology for `F=Q,R` with `Hom_Z(H_{2k}(M;Z),F)`; divisibility kills each finite-cyclic Ext term, and the natural coefficient map is `Q^b tensor_Q R -> R^b`. Cup and Kronecker naturality then identify the real intersection form with the scalar extension of the rational one. The bare middle-form definition now states only its integral restriction; the scalar-extension claim is proved in this lemma.
- The total L-class previously targeted the library's direct-sum notation `H^{4*}` on arbitrary CW-type bases. Added `def-completed-fourfold-graded-cohomology-ring` and `lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality`, with finite convolution in each degree. `def-hirzebruch-l-polynomials`, its multiplicativity lemma, and `def-total-l-class-of-a-smooth-manifold` now use the completed target, preserving the broad CW-base scope. The closed-manifold L-genus still evaluates only the degree-`4k` component.
- Full AC is now stated and directly declared in dependencies for all repaired AC consumers in A and B. The batch-12 statements retain full AC because Poincaré duality/field UCT and the Chern/Pontryagin suppliers explicitly require it; no local batch-12 proof independently spends ACω. A transitive Chern path also invokes `thm-subordinate-partitions-of-unity-exist` (AC and DC). The exact missing bridge is in published `def-complex-flag-bundle-and-chern-roots`: its body says “AC implies DC” but its `deps` omit the published `thm-choice-implies-dependent-implies-countable-choice`. This frontier compensates at the narrow batch-12 characteristic-class root `def-hirzebruch-l-polynomials` by declaring that bridge; its existing AC contract discharges the DC premise through a locally proved theorem, and all descendants inherit it without widening their hypotheses. The published carrier remains unchanged pending its required Step-5 ownership claim, and the precise status/direct-consumer mapping is recorded in `research/published-consumer-supplier-ledger.md`. The batch-11 projective-product spanning supplier separately omits AC from its contract and is queued with its owning repair pass; this batch uses it under its own explicit AC hypothesis. The five B leaves, the three signature corollaries, the dimension-bookkeeping remark, the CP L-genus evaluation, the signature/L agreement lemmas, and the rational-to-real lemma now carry the assumption.

The repaired pair has 28 A items plus 5 B items (33 total), within the existing item cap. No page, batch, prerequisite edge, or frontier scope was added. The three additional items are local support inside the existing signature-theorem pair. The three added canonical coverage rows record the boundary-image lemma and the completed cohomology construction; the original source headings and their dispositions are unchanged.

## 10. Post-repair batch-local verification

After the edits in §9, the following focused checks were run against the current batch manifest and source record:

- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-12.pages.json` — 33 items, 0 missing dependency arrays, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-12.coverage.json --require-destination` — 1 A page, 50 harvested results, 0 errors, 0 warnings. The four original source treatments and every original disposition remain intact; three local-support canonical rows were added.
- `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json` — 770 scoped items across the full current run context, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` — no batch-12 level errors. The only reported messages are the known empty A/B inventories in batch 24, still being scaffolded. Recomputed batch-12 levels range 0–14.
- Focused Step-1 hash/readiness check over the current manifest — all 33 batch-12 items have current `ready` receipts (33/33); the 29 stale or new records were refreshed in dependency order.
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-12.coverage.json` — all 4 sources fetch-verified and all 4 source rows resolved. No source URL, fetch stamp, or liveness record was rewritten by this repair.

No gate, retry, controller, Step-3, page-splice, or run-level dependency-ledger command was run. The existing two cross-batch page rows and 15 item-use rows remain open for the planned Step-3/Step-5 supplier re-read; no cross-batch input was edited.


The final official Step-1 hash check after adding the AC-to-DC bridge reports batch12 33/33 ready. The broader run is not closed: one owner-held batch11 item (`thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism`) and 18 batch23 items have stale readiness records, and batch24 still has two empty inventories. The final run-wide level check also reports the batch23 label mismatch `lem-a-nullhomotopic-closed-transversal-yields-a-vanishing-cycle` (stored 12, computed 7). These independent units were left untouched. No run gate or controller transition was attempted.
