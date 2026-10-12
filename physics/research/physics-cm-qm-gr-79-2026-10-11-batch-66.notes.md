# Batch 66 notes — `gr-tensors-and-observers` / `gr-tensors-and-observers-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-66, covers 66.
Step 1 complete initial authoring only; no readiness record is independent
mathematical approval (Step 2/3 review follows). This batch is a **mathematics**
batch (`domain: mathematics` on every item): the page proves the tensor and
observer constructions as conditional deductions inside the classical model's
geometric arena; no item asserts a measurement or a claim about nature.

## Scope built

- A page `gr-tensors-and-observers` (order 235, category `general-relativity`,
  `library: physics`), 16 locally authored items: 5 definitions, 6 lemmas,
  2 theorems, 1 corollary, 1 proposition and 1 remark. B page
  `gr-tensors-and-observers-examples` (order 236), 7 leaf items: 5 examples and
  2 counterexamples, each with a numbered verification/refutation. Library
  carriers `library/general-relativity/gr-tensors-and-observers.md` and
  `library/general-relativity/gr-tensors-and-observers-examples.md`; the
  category file `_category.md` was created by batch-65 and is unchanged.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-66.pages.json`.
  Page `requires` and orders are unchanged from the run scaffold; the only
  manifest edits are the two `items` arrays and the item metadata.
- Dependency levels (in-run dependencies only, stored in both manifest and
  item frontmatter): A page — `def-gr-tensor-fields-and-components` 3,
  `def-gr-observer-and-rest-space` 2,
  `def-gr-observer-congruence-and-adapted-charts` 3,
  `lem-gr-tensor-component-transformation-law` 4,
  `lem-gr-contraction-of-smooth-tensor-fields` 4,
  `lem-gr-observer-projection-decomposition` 3,
  `lem-gr-observer-pairing-with-future-causal-vectors` 4,
  `def-gr-local-frame-and-tetrad-fields` 3,
  `lem-gr-tetrad-change-of-basis-is-lorentz` 4,
  `thm-gr-local-lorentz-tetrad-existence` 4,
  `thm-gr-observer-relative-velocity-decomposition` 5,
  `cor-gr-adapted-chart-existence` 4,
  `prop-gr-rest-space-integrability-criterion` 4,
  `def-gr-observer-relative-energy-and-momentum` 4,
  `lem-gr-observer-energy-momentum-identities` 6,
  `rem-gr-chart-tetrad-congruence-and-observer-distinctions` 5. B page — 5, 4,
  4, 6, 7, 5, 5. `node tools/physics-support/item-dependency-levels.mjs check
  --run physics-cm-qm-gr-79-2026-10-11` names no batch-66 item; its error
  lines are empty scaffold inventories for unauthored batches (65's and 66's
  pages are no longer among them).
- No page split was needed: 16 + 7 items are far below the 100-item cap; the
  GR02 design budget (30 items) is respected.

## Design vs plan-spec conflict (recorded as required)

- `research/plan-general-relativity-track.md` L34 ("Tensors And Observers")
  and the dispatch text declare the earlier prerequisite
  `gr-framework-and-geometry` only (the GR02 reservation is
  `requires: [GR01]`).
- `research/plan-spec.json` declares for `gr-tensors-and-observers` the four
  prerequisites `gr-framework-and-geometry`,
  `distributions-integral-manifolds-and-the-frobenius-theorem`,
  `roots-and-rational-powers` and `the-exterior-derivative-and-cartan-calculus`.
  The dispatch says the current plan controls the run, and the engine's
  `validate-plan --run` gate requires the manifest `requires` to match the
  plan-spec list exactly; the manifest therefore carries the four plan-spec
  entries. No plan-spec or design file was edited. The additional three pages
  are genuinely consumed: `def-rational-power` (square roots in observer
  normalization and rest mass), the cotangent/exterior-calculus layer
  (the Frobenius criterion `alpha \wedge d alpha = 0`) and the
  distributions/Frobenius imports. Ask the owner to reconcile the design text
  at the Step-2 join.
- The GR01 (`gr-framework-and-geometry`) items are in-run suppliers from
  batch-65, which the batch dependency levels record as batch-66 level 1
  (requires 65).

## Supplier policy and dependency evidence

- Batch-65 in-run suppliers actually used, each read at statement level and
  recorded `ready` in batch-65:
  `def-gr-smooth-lorentzian-objects`,
  `def-gr-smooth-covariant-two-tensor-field`,
  `def-gr-inverse-metric-and-musical-isomorphisms`,
  `lem-gr-future-causal-classification-by-a-timelike-field`.
- Owner-exception draft SR mathematics items used as planned mathematical
  suppliers, inspected at statement level:
  `def-lorentz-form-and-inertia`,
  `def-causal-classification-of-lorentz-vectors`,
  `def-time-orientation-and-future-causal-sets`,
  `def-lorentz-orthogonality-and-orthogonal-complement`,
  `lem-lorentz-form-has-orthonormal-basis`,
  `lem-timelike-cone-has-two-convex-components`.
- Imported mathematics (read-only; never edited): the tensor-bundle layer
  (`def-type-r-s-tensor-on-a-finite-dimensional-vector-space`,
  `def-type-r-s-tensor-bundle`, `def-smooth-tensor-field`,
  `thm-tensor-transition-laws-define-a-smooth-vector-bundle`,
  `def-contraction-of-a-mixed-tensor`,
  `lem-contraction-is-independent-of-the-basis-formula`), the chart/tangent
  layer, the Frobenius layer
  (`def-smooth-distribution-on-a-manifold`,
  `prop-local-frame-characterization-of-a-smooth-distribution`,
  `def-involutive-distribution`,
  `cor-codimension-one-frobenius-criterion`,
  `thm-frobenius-local-coordinate-theorem`) and the exterior-calculus layer
  (`def-smooth-differential-k-form`,
  `def-exterior-derivative-by-the-invariant-vector-field-formula`,
  `thm-the-exterior-derivative-is-a-graded-derivation`,
  `prop-exterior-derivative-of-a-function-is-its-differential`,
  `def-wedge-product-of-differential-forms`), together with the flow-box
  theorem, the inverse-function/diffeomorphism corollary, the Euclidean
  calculus and topology suppliers, `def-rational-power`, `def-countable-choice`
  and the linear-algebra coordinate suppliers.
- Cross-batch input
  `research/physics-cm-qm-gr-79-2026-10-11-batch-66.cross-batch-dependencies.json`
  has 29 rows (28 item edges into the four batch-65 suppliers plus the page
  edge `gr-tensors-and-observers` -> `gr-framework-and-geometry`), all
  `verified` with exact claim/use evidence. `frontier-dependency-ledger.mjs
  refresh --run physics-cm-qm-gr-79-2026-10-11` merged them: 0 orphaned
  reviews, batch 66 no longer listed among unreviewed batches, and no
  consumer-66 edge lacks a review.
- `AC_\omega` inheritance is declared where the smooth tangent-bundle
  structure is used (`def-gr-tensor-fields-and-components` clause (d),
  `def-gr-observer-congruence-and-adapted-charts` remarks,
  `def-gr-local-frame-and-tetrad-fields` remarks,
  `thm-gr-local-lorentz-tetrad-existence` [L12] with the citation now placed
  in step 1.1, `prop-gr-rest-space-integrability-criterion` [L6]) and no item
  reaches `deferred-set-theory-beyond-choice`. Mathematical items depend only
  on mathematical items.

## Mathematical content and routes

- Tensors: type `(r,s)` tensors at a point, the tensor bundle, smooth
  component fields over the maximal atlas, index conventions and musical slot
  movement (`def-gr-tensor-fields-and-components`); the chart transformation
  law proved from the change-of-basis formulas for coordinate derivations and
  differentials and the atlas-independence of smoothness
  (`lem-gr-tensor-component-transformation-law`); contraction defined
  pointwise by the basis-independent mixed-tensor formula and proved smooth
  with its component formula (`lem-gr-contraction-of-smooth-tensor-fields`).
- Observers (M04): observer = future-directed unit timelike vector, rest space
  the orthogonal complement of its line, spatial projection
  `h_n(v)=v+g_p(n,v)n` (`def-gr-observer-and-rest-space`); orthogonal
  decomposition with kernel, image and positive definiteness proved
  (`lem-gr-observer-projection-decomposition`); pairing with future causal
  vectors (`lem-gr-observer-pairing-with-future-causal-vectors`); relative
  velocity `u = gamma(n+w/c)` with `gamma = -g(n,u) >= 1`,
  `g(w,w)=c^2(1-gamma^{-2})`, uniqueness of `(gamma,w)` and the converse
  bijection (`thm-gr-observer-relative-velocity-decomposition`).
- Fields and frames (M10): congruences and adapted charts
  (`def-gr-observer-congruence-and-adapted-charts`); frame, coordinate-frame
  and tetrad fields (`def-gr-local-frame-and-tetrad-fields`); local existence
  of a smooth future-directed tetrad by normalization and orthogonalization
  with successive shrinking (`thm-gr-local-lorentz-tetrad-existence`); the
  change between future-directed tetrads is a Lorentz matrix with
  `Lambda^T eta Lambda = eta`, `det Lambda = +/-1`, `Lambda^0_0 > 0`
  (`lem-gr-tetrad-change-of-basis-is-lorentz`); local adapted charts by the
  flow-box theorem (`cor-gr-adapted-chart-existence`); the rest-space family
  is a smooth rank-three distribution, integrable iff
  `alpha \wedge d alpha = 0` for `alpha = n^\flat`
  (`prop-gr-rest-space-integrability-criterion`).
- Observer-relative quantities: `E_n(P) = -c g_p(P,n)`,
  `q_n(P) = h_n(P)`, `m(P) = sqrt(-g_p(P,P))/c`
  (`def-gr-observer-relative-energy-and-momentum`); master identity, positivity
  for nonzero future causal `P`, the mass shell and its null case
  (`lem-gr-observer-energy-momentum-identities`).
- B page: mixed-tensor chart transformation and trace invariance; constant
  boosted tetrad with adapted chart; shearing congruence with tetrad, adapted
  chart and non-coordinate bracket; boost relative-velocity and energy
  computations; two refutations (tetrad need not be a coordinate frame;
  shearing rest spaces not integrable, `alpha \wedge d alpha =
  -gamma^2 lambda dx^0 \wedge dx^1 \wedge dx^2 != 0`).

## Sources

- Five independent treatments were read against downloaded full texts
  (`mutool draw -F txt` page-by-page inspection of the fetched PDFs):
  Carroll, *Lecture Notes on General Relativity* arXiv:gr-qc/9712019
  (lecture-notes); Reall, *Part III General Relativity*, October 12, 2022
  revision (lecture-notes); Tong, *General Relativity*, Michaelmas 2019
  (lecture-notes); Lee, *Introduction to Smooth Manifolds*, 2nd ed.
  (textbook); Gourgoulhon, *3+1 Formalism and Bases of Numerical Relativity*
  arXiv:gr-qc/0703035 (monograph-length lecture notes). All five are full-text
  fetch-verified with stamps: `source-fetch-check --coverage ... --stamp`
  reported "5/5 source(s) fetch-verified (5 newly stamped)".
- Coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-66.coverage.json`
  harvests 42 named results with dispositions (19 included, 12 inline, 9
  deferred, 2 out-of-scope);
  `coverage-checklist.mjs --require-destination` reports 0 errors, 0 warnings.
  Every deferred destination resolves to a plan-spec page
  (`gr-connections-and-free-fall`, `gr-einstein-and-matter`,
  `gr-flat-and-newtonian-bridges`,
  `distributions-integral-manifolds-and-the-frobenius-theorem`,
  `the-exterior-derivative-and-cartan-calculus`,
  `vector-fields-flows-and-lie-derivatives`).
- Locator audit and corrections (recorded for the Step-3 reader): inspection of
  the fetched texts showed that several inherited item references named
  sections that do not exist in the fetched revisions. Corrections applied to
  the item `sources.references` of 20 items:
  (i) the claimed Reall "section 2.6 on congruences/vorticity, printed
  pp. 32-35" does not exist in the 2022 revision (its Chapter 2 has only
  §§2.1-2.3; printed pp. 32-35 are §3.1); those entries were replaced by
  Reall §1.9 (integral curves, printed pp. 21-22), §2.2 (orthonormal bases and
  Lorentz transformations, printed pp. 26-28), §2.3 ((2.14) 4-velocity,
  printed p. 28) and §6.3 ((6.17)-(6.19), printed p. 64);
  (ii) the claimed Carroll locators "Ch. 2 on orthonormal frames/tetrad
  existence, printed pp. 48-51" point at the metric/canonical-form discussion;
  Carroll's tetrad material is Ch. 3 "tetrads and non-coordinate bases"
  (printed pp. 88-91), which was substituted;
  (iii) Tong §2.2 "printed pp. 69-71" was corrected to §§2.2.2-2.2.3 (printed
  pp. 62-64, PDF pp. 69-71) — printed p. 69 is §2.3 Tensors;
  (iv) Carroll four-velocity/worldline locators were corrected to printed
  pp. 25-27 (four-velocity (1.98)-(1.99) at printed p. 27);
  (v) Gourgoulhon was added as the second treatment for the orthogonal
  projector (2.60)-(2.64), the adapted-coordinate construction (Ch. 4 §4.2),
  the relative-velocity decomposition `u = Gamma(n+U)` (5.29)-(5.36) and the
  hypersurface-orthogonality/vorticity obstruction used by the two
  counterexamples.

## Repairs to authored carriers in this dispatch

- Manifold-setting mismatch: `lem-gr-tensor-component-transformation-law`
  and `lem-gr-contraction-of-smooth-tensor-fields` were stated for a bare
  smooth (four-)manifold while citing the four-dimensional Lorentzian
  definition of type `(r,s)` tensor fields; both statements and their `Given`
  lines were restricted to `(M,g,N)` a time-oriented smooth Lorentzian
  four-manifold (with `def-gr-smooth-lorentzian-objects` added to `deps` and
  roles; levels unchanged), and
  `ex-gr-mixed-tensor-transformation-and-contraction` now records the flat
  metric and time orientation explicitly as the ambient setting, with a
  sentence stating that they play no part in the computation.
- Step-reference defect: `lem-gr-tensor-component-transformation-law` step 4.1
  referred to a nonexistent "step 2.2"; corrected to "steps 1.1, 2.1 and 3.1"
  with the matching citation bracket.
- `thm-gr-local-lorentz-tetrad-existence`: the axiom citation [L12] was used
  only in a remark, leaving it uncited by any numbered step; step 1.1 now
  cites it where the tangent-bundle smooth structure is invoked.
- Three `shotgun-bracket` warnings were removed by citing facts at the steps
  that use them (`lem-gr-observer-energy-momentum-identities` step 3.1,
  `lem-gr-tensor-component-transformation-law` step 3.1,
  `lem-gr-tetrad-change-of-basis-is-lorentz` steps 2.3, 3.1, 4.1).
- Earlier in the dispatch, precheck auto-repairs were adopted into item files
  and duplicate prose tails between the proof and `## Remarks` were removed in
  five items; the final precheck over the 23 items reports
  "17 checked, 0 failing — all clean" (the five definitions and the remark
  carry `proof: not-applicable` and are not precheck targets).

## Proof contracts

- `research/physics-cm-qm-gr-79-2026-10-11-batch-66.proof-contracts.json`
  covers the 17 proof-bearing items (6 lemmas, 2 theorems, 1 corollary,
  1 proposition, 5 examples, 2 counterexamples) plus the remark (empty
  citations/derivations/routine steps and all eight boundary dispositions).
  Every `[L#]/[F#]/[A#]` fact-source link has a citation with an exact quote
  from the source item's allowed section, every numbered step has a derivation
  entry with its stated inputs, and all eight standard boundary cases carry a
  checked/not-applicable disposition per item.
- `proof-contract.mjs ... --strict` reports
  "0 error(s), 0 warning(s), 18/18 item(s) checked".
- `proof-contract-coverage.mjs --run ... --contracts ...` is blocked by the
  run-level limitation "Empty or invalid frontier page inventory
  cm-math-numerical", exactly as recorded for batch-65; it names no batch-66
  item. This is an unresolved corpus-level finding for the owner.

## Checks run (exact results)

- precheck (23 items): 17 checked, 0 failing — all clean.
- rendercheck (23 items + 2 library pages): OK — no wikilink inside math, no
  nested/unbalanced delimiters, every math span parses under KaTeX, every
  frontmatter block parses.
- proof-layout (23 items): 23 items, 89 steps, 0 defects.
- manifest-deps (batch-66 manifest): 23 items, 0 normalized, 0 errors.
- content-policy (batch-66 manifest): 23 scoped items, 0 errors, 0 warnings.
- depcheck / fwdcheck / extcheck (focused on the 23 batch items): OK for all
  three (prerequisite cycles, forward-reference cycles and
  recorded-not-proved status all clean; extcheck over the corpus finds 0
  recorded-not-proved statements resting on anything).
- physics-check --run physics-cm-qm-gr-79-2026-10-11 --plan
  research/plan-spec.json: "physics-content: 0 error(s), 226 items checked",
  no warning and no finding naming a batch-66 item.
- validate-plan (plan-spec, all 158 run page ids, --run): "OK — declared page
  order is acyclic and consistent; no item-level cycles, forward references,
  B-page dependencies, or unresolved ids among the 22 page(s) with item
  lists."
- item-dependency-levels check --run: no line names a batch-66 item; the
  remaining errors are empty scaffold inventories of unauthored batches.
- coverage-checklist --require-destination: 1 page, 42 harvested results,
  0 errors, 0 warnings. source-fetch-check (check mode): 5/5 sources
  fetch-verified.
- Corpus-level observations (not batch-66): the all-items precheck prints
  REPAIR notices for two `nrqm-composites` items (batch 35/36 area) asking for
  the canonical auto-repair form; those items are outside this batch. The
  precheck, depcheck and item-dependency-levels batteries otherwise pass on
  the 23 batch items.

## Readiness records

All 23 items were recorded `ready` with
`step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item ID
--decision ready --dependencies <the item's declared deps> --reason <evidence
summary>` after the final carrier edits, so each record's `sha256` binds the
final item text to its examined dependency list. `step1-decisions.mjs check
--run physics-cm-qm-gr-79-2026-10-11` reports `items 226, ready 226` and no
work row naming a batch-66 item (the 136 remaining work rows are empty
scaffold inventories of unauthored pages in other batches). No item was
escalated: no significant unmet prerequisite was found, and every cross-batch supplier is
in-run batch-65 (recorded ready) or an inspected imported/draft mathematical
item. The temporary scope list
`research/physics-cm-qm-gr-79-2026-10-11-batch-66.scope-items.json` used for
focused depcheck/fwdcheck/extcheck runs was deleted before handoff; the
cross-batch input, coverage, proof contracts and these notes are the batch
carriers.
