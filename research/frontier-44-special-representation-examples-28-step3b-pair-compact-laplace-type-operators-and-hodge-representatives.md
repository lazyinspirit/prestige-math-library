# Step 3b — scaffold audit and authoring: `compact-laplace-type-operators-and-hodge-representatives`

Run `frontier-44-special-representation-examples-28`, batch 31 (orders 1797/1803),
role `alpha-high`, label
`step3b-pair-compact-laplace-type-operators-and-hodge-representatives-5baafa5a19fff951`.
A page `compact-laplace-type-operators-and-hodge-representatives` (7 items, all
to be authored here), B page
`compact-laplace-type-operators-and-hodge-representatives-examples` (1 example,
to be authored here), category `differential-geometry`. Own only this pair;
sibling rows in shared carriers are preserved. Report opened at entry 2026-10-10
before any edit.

## Owned IDs and open obligations at entry

A-page items, in the dispatch's audit/author order (dependency level, then page
order and item ID):

| # | id | kind | scaffold level | source material |
|---|---|---|---|---|
| 0 | `def-complex-manifolds-and-holomorphic-vector-bundles` | definition | 0 | scaffold statement + strategy (no draft file) |
| 0 | `def-second-order-laplace-type-operators-on-vector-bundles` | definition | 0 | scaffold statement + strategy (no draft file) |
| 1 | `lem-formal-adjoints-of-differential-operators-exist-and-are-unique` | lemma | 1 | scaffold statement + strategy (no draft file) |
| 2 | `def-e-valued-dolbeault-operators-and-ltwo-structure` | definition | 2 | scaffold statement + strategy (no draft file) |
| 8 | `thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity` | theorem | 8 | complete draft under `research/…-klr-foundation-elliptic-drafts/items/` |
| 9 | `thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition` | theorem | 9 | complete draft, same directory |
| 10 | `thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology` | theorem | 10 | complete draft, same directory |

B-page item (to be authored here): `ex-compact-flat-torus-hodge-kernel-from-energy-and-coordinates`
(example, scaffold level 11, complete draft, same directory).

Deliverables: 8 item files, `library/differential-geometry/compact-laplace-type-operators-and-hodge-representatives.md`,
`library/differential-geometry/compact-laplace-type-operators-and-hodge-representatives-examples.md`,
`research/frontier-44-special-representation-examples-28-batch-31.proof-contracts.json`
(strict, 5 proof-bearing items), 8 current item decisions, and this report.

Open obligations at entry:
1. All 8 item files and both page files are absent; the scaffold lives in
   `research/frontier-44-special-representation-examples-28-batch-31.pages.json`
   plus the four complete drafts under
   `research/frontier-44-special-representation-examples-28-klr-foundation-elliptic-drafts/`.
2. Rechecked entry facts: all 61 dependency targets of the 8 items resolve — 54
   are published library items (`status: published` verified file by file on
   2026-10-10) and 7 are this pair's own items, to be written here. No missing
   published supplier.
3. Step 3a observations to recheck (report
   `research/frontier-44-special-representation-examples-28-step3a-pair-compact-laplace-type-operators-and-hodge-representatives.md`):
   (a) the four scaffold-added prerequisites are manifest-only in
   `plan-spec.json` — Step-4 splice reconciliation, do not edit the shared plan;
   (b) the `H^k(M,E)` transfer arguments inside `thm-elliptic-…` are proof-stage
   obligations to author here; (c) conventions (`\bar\partial_E^*` signs, the
   first-variable-linear $L^2$ pairing) must be cross-checked directly against
   the published `m=1` Dolbeault items before authoring the E-valued items.
4. Batches 35 (`compact-kahler-hodge-foundations`) and 39
   (`projective-hodge-polarization-foundations`) consume this pair's items; they
   only need the authored interfaces, and their own authors own those consumers.
   The pair's `cross-batch-dependencies.json` input currently records only the
   preserved batch-2 page `countability-and-uncountability` and the item edge
   `thm-elliptic-… → thm-choice-implies-dependent-implies-countable-choice`,
   both verified on disk.
5. Choice: `def-axiom-of-choice` is declared by the three theorems and the
   example; the exact AC use and its propagation must be stated in the authored
   items. `lem-formal-adjoints-…` and the four definitions must stay choice-free
   unless the actual proofs require otherwise.
6. Direct in-run prerequisite pair to inspect: `countability-and-uncountability`
   (batch 2, preserved); it supplies `thm-choice-implies-dependent-implies-countable-choice`.
7. No sibling rows in batch 31 — the pair owns the whole batch file.

## Checkpoint log

Each item below was audited against its exact suppliers, authored, checked, and
given a current Step-3b receipt. Batch-31 manifest rows were synced to the
authored `deps`; `dependency_level`s recomputed.

### `def-complex-manifolds-and-holomorphic-vector-bundles` (level 0) — accept

- Claim/conventions: complex manifolds of dimension $m\ge1$ (nonempty Hausdorff
  second-countable, holomorphic atlas), maximal atlas, induced smooth structure,
  complex structure $J$, Hermitian metrics, holomorphic vector bundles with
  holomorphic transition matrices, Hermitian bundle metrics (linear in the first
  variable). The one-directional compatibility remark that the library does not
  prove for $m\ge2$ was dropped; both transition directions remain required by
  the definition.
- Suppliers: 17 declared targets, all published; read `def-riemann-surface-and-holomorphic-atlas`
  (maximal-atlas precedent), `cor-holomorphic-functions-in-several-variables-are-smooth`,
  `thm-chain-rule-for-holomorphic-maps-in-several-variables`, `def-smooth-manifold`,
  `def-smooth-bundle-metric`, `def-complex-linear-and-compatible-bundle-connections`.
- Checks: precheck n/a (no phase), rendercheck OK. Decision: `accept`, defects `[]`.

### `def-second-order-laplace-type-operators-on-vector-bundles` (level 0) — accept

- Claim/conventions: order-$\le2$ operators on metric vector bundles, Laplace
  type (scalar symmetric positive-definite leading coefficient), principal symbol
  $\sigma_2(P)=a_x(\xi,\xi)\,\mathrm{id}$, formal symmetry for $(\mu,\langle,\rangle)$.
  The chart/frame well-definedness argument (symmetric-tensor transformation of
  the leading coefficient, frame conjugation, lower-order absorption) is folded
  into the Definition as prose, following `def-riemann-surface-and-holomorphic-atlas`
  and `def-holomorphic-map-and-complex-jacobian`.
- Suppliers: 9 declared targets, all published; chain-rule item read.
- Checks: precheck n/a, rendercheck OK. Decision: `accept`, defects `[]`.

### `lem-formal-adjoints-of-differential-operators-exist-and-are-unique` (level 1) — repaired

- Claim/conventions: existence, uniqueness and local formula
  $P^\star v=\sum(-1)^{|\alpha|}\gamma^{-1}D^\alpha(\gamma a_\alpha^*v)$ for a
  first-order operator on metric bundles, in orthonormal local frames; leading
  coefficients of $P^\star$ are $(-1)^\delta a_\alpha^*$; $(P^\star)^\star=P$;
  formal symmetry $\iff P=P^\star$. **Repair**: the scaffold's item 1 clashed
  with the principal-symbol convention of the new Definition ($\sigma_\delta$
  versus the positive form $\sigma_2$); restated as a leading-coefficient rule
  plus $\sigma_2(P^\star)=\sigma_2(P)$ for Laplace-type $P$. Local orthonormal
  frames are now cited (`thm-gram-schmidt-orthonormalisation`), not silently
  assumed. Proof authored with steps 1.1–7.1: coordinate integration by parts
  from compact-support Stokes, matrix coefficients, the vanishing lemma on a
  chart, gluing by uniqueness, the global identity by finite localization, and
  the consequences.
- Suppliers: 12 deps (9 scaffold + `thm-algebra-of-derivatives`,
  `thm-gram-schmidt-orthonormalisation`, `lem-manifold-bump-for-a-compact-set-inside-an-open-set`),
  all published.
- Checks: precheck PASS (canonical layering adopted), rendercheck OK, proof-layout
  (0 defects), strict contract entry with quotes from the four cited suppliers.
  Decision: `repaired`, defects `["statement","dependency"]`.

### `def-e-valued-dolbeault-operators-and-ltwo-structure` (level 2 → 6) — repaired

- Claim/conventions: $E$-valued $(p,q)$-forms, the Dolbeault operator
  (glued from holomorphic charts/frames, $\bar\partial_E^2=0$), induced
  Hermitian metric, first-variable-linear $L^2$ pairing and completion, formal
  adjoint $\bar\partial_E^*$, Dolbeault Laplacian with energy identity and
  principal symbol $|\xi^{0,1}|_g^2\,\mathrm{id}$. Given a Proof phase
  (precedent: `def-bigraded-complex-differential-forms`), steps 1.1–5.1 verify
  gluing (frame Leibniz with $\bar\partial T=0$; Wirtinger chain rule for
  holomorphic chart changes), the vanishing square, the adjoint and its
  bidegree action, symmetry/energy, and the symbol by the deletion identity in
  a unitary basis.
- **Repair**: declared `def-countable-choice` for the $L^2$ completeness
  interface (`lem-l-two-with-the-integral-pairing-is-a-hilbert-space` assumes
  $\mathrm{AC}_\omega$; the local constructions stay choice-free), which
  recomputes the level from 2 to 6; manifest and item metadata synced. Also
  added `thm-chain-rule-for-total-derivatives` and
  `thm-gram-schmidt-orthonormalisation`.
- Conventions were cross-checked against the published $m=1$ items
  (`def-bigraded-complex-differential-forms`, `thm-d-dbar-decomposition-and-identities`,
  `def-complex-l-two-inner-product`): first-variable-linear pairing agreed.
- Checks: precheck PASS, rendercheck OK, proof-layout, strict contract entry.
  Decision: `repaired`, defects `["dependency"]`.

### `thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity` (level 8) — accept

- Authored from the complete KLR draft; statement kept as designed. Supplier
  statements were read and checked against the actual proof uses:
  `thm-interior-h-two-regularity-for-divergence-form-equations` (nested estimate,
  complex scalars allowed), `lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates`
  ($\varepsilon$-absorption; compactly supported classes), `lem-cutoff-difference-quotient-commutator-estimate`
  (cutoff Leibniz and Sobolev multiplier bounds), `thm-lax-milgram`,
  `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain`,
  `thm-higher-order-sobolev-embedding`, `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`.
- The $H^k(M,E)$ transfer/independence arguments are proved in steps 1.1, 2.1
  (Step-3a proof-stage obligation discharged).
- AC: full AC assumed; countable selections occur in steps 1.1, 2.1, 3.1, 4.1;
  the `thm-choice-implies-dependent-implies-countable-choice` interface was
  re-read and the cross-batch row refreshed.
- Checks: precheck PASS, strict contract (0 errors; one nonfatal
  `shotgun-bracket` style warning on step 2.1), proof-layout. Decision: `accept`,
  defects `[]`.

### `thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition` (level 9) — accept

- Authored from the KLR draft. Checked: the closed-range Riesz argument
  (step 2.1), the orthogonal decomposition via
  `thm-orthogonal-decomposition-by-a-closed-subspace` (AC$_\omega$ supplier,
  covered by the assumed AC), degree-free Green inverse, smoothing projection
  and the optional positivity clause.
- Checks: precheck PASS, strict contract, proof-layout. Decision: `accept`,
  defects `[]`.

### `thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology` (level 10) — repaired

- Claim preserved as designed (de Rham and Dolbeault harmonic representatives,
  degree/bidegree decomposition, commutation identities, endpoint conventions,
  the explicit "no sheaf comparison asserted" boundary).
- **Repair**: the draft began with an inline local construction of $d^*$ using
  partitions of unity; rewritten so that the de Rham and Dolbeault formal
  adjoints come from `lem-formal-adjoints-of-differential-operators-exist-and-are-unique`
  (leading-coefficient rule), with the symbols computed directly from the
  coefficient rule; added `thm-gram-schmidt-orthonormalisation` for the
  pointwise orthonormal/unitary bases used in the deletion check.
- Steps 1.1–6.1 verified against `thm-sobolev-…`, `def-e-valued-…` and the
  exterior-derivative suppliers; both endpoint directions of the representative
  map are checked in step 5.1.
- Checks: precheck PASS, strict contract, proof-layout. Decision: `repaired`,
  defects `["dependency"]`.

### `ex-compact-flat-torus-hodge-kernel-from-energy-and-coordinates` (level 11) — repaired

- Claim preserved: constant-coefficient forms are a basis of $\mathcal H^k$,
  unique representative per real de Rham class, $\dim H^k_{\mathrm{dR}}(T^n)=\binom nk$.
- **Repair**: added the flat-torus model (`prop-flat-torus-model-geometry`) and
  `def-smooth-differential-k-form` facts (the global coframe and periodic
  coefficients were previously implicit), added
  `def-interior-product-of-a-form-by-a-vector-field` to deps, and replaced the
  content-policy-forbidden applied-$\iota$ notation by $\iota_{\partial_j}$.
- Energy computation and the converse checked; the integration-by-parts sign
  $\Delta u=-\sum_I\sum_j\partial_j^2u_I\,dx^I$ and
  $(\Delta u,u)_2=\sum_{I,j}\int|\partial_ju_I|^2$ verified.
- Checks: precheck PASS, strict contract, proof-layout, content-policy clean.
  Decision: `repaired`, defects `["dependency"]`.

## Source locators of the four scaffold-authored items

- `def-complex-manifolds-and-holomorphic-vector-bundles`: Schnell, Complex Manifolds
  MAT 545, classes 4, 5 and 9 (Definition 4.5/Proposition 4.6, Definition 5.4/Proposition 5.6,
  Definition 9.4); Demailly, Complex Analytic and Differential Geometry, Ch. I §11,
  Definition (11.1) and following paragraph, printed pp. 267–268.
- `def-second-order-laplace-type-operators-on-vector-bundles`: Demailly, Ch. VI §1,
  (1.1)–(1.2) and (1.4)–(1.8), printed pp. 287–289; Lee, Introduction to Smooth
  Manifolds (2nd ed.), Ch. 13 and Ch. 15.
- `lem-formal-adjoints-of-differential-operators-exist-and-are-unique`: Demailly,
  Ch. VI §1, Definition (1.5), formula (1.6) and (1.7), printed pp. 288–289; Hunter,
  Notes on PDE, §4.7, printed pp. 103–105.
- `def-e-valued-dolbeault-operators-and-ltwo-structure`: Demailly, Ch. I §10–§11,
  (10.1)–(10.2), Definitions (11.1), (11.3), printed pp. 266–268, and Ch. I §3.C,
  printed pp. 23–25; Schnell, classes 7 and 9 (Definition 7.9, Definition 9.4).

The four designed items carry the draft-carrier locators (Demailly Ch. VI §§1–3.3, §7.1;
Hunter §§4.7–4.11) recorded in the scaffold manifest and item files.

## Checks actually run (with results)

- `node tools/tsx-run.mjs tools/author-check.mts frontier-44-special-representation-examples-28 31`
  — exit 0; `research/…-author-check-31.json` `ok: true`, fingerprint
  `518bd89627e59352`; sub-gates `precheck`, `rendercheck`,
  `content-policy-items`, `proof-contract` all ok.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 8 explicit item paths — 6
  proof phases checked, 0 failing; the two proof-free definitions report n/a.
- `node tools/rendercheck.mjs` on the 8 items and 2 pages — OK (YAML, KaTeX,
  wikilink/delimiter rules).
- `node tools/proof-layout.mjs` on all 8 items in one command — 8 items,
  35 steps, 0 defects.
- `node tools/content-policy.mjs research/…-batch-31.pages.json` — 8 items,
  0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/…-batch-31.proof-contracts.json --strict`
  — 6/6 scoped proof-bearing items, 0 errors, 1 nonfatal `shotgun-bracket`
  warning on `thm-elliptic-…` step 2.1.
- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — 862 items, 0 errors (levels recomputed; `def-e-valued-…` now 6).
- `node tools/manifest-deps.mjs research/…-batch-31.pages.json` — 8 items,
  0 errors.
- `node tools/frontier-item-gate.mjs --run … --tool validate-plan` — no error
  names either batch-31 page or its items (only the run-wide inherited
  `redundant-prereq` advisories around `countability-and-uncountability`, which
  every page in this run inherits).
- `node tools/frontier-item-gate.mjs --run … --tool depcheck` — no diagnostic
  names any of the 8 items (the run-wide failures are other in-flight pairs).
- `node tools/frontier-item-gate.mjs --run … --tool depsource` — selected
  consumer coverage 861/861, 0 unresolved.
- `node tools/coverage-checklist.mjs research/…-batch-31.coverage.json --require-destination`
  — 2 pages, 0 errors, the already-acknowledged `coverage-low-yield` advisory.
- `node tools/frontier-dependency-ledger.mjs refresh --run …` — refreshed; the
  batch input now carries three rows (page and item edges to batch 2 plus the new
  `def-e-valued-… → def-countable-choice` edge).
- `node tools/step3-decisions.mjs record-item` — 8 version-2 receipts; the
  run-wide item check shows no open receipt for any of the 8.

## Added suppliers and scope notes

- No new item IDs were created. The authored batch remains exactly the eight
  scaffold IDs; the four local prerequisites (`def-complex-manifolds-…`,
  `def-second-order-…`, `lem-formal-adjoints-…`, `def-e-valued-…`) were already
  manifest-only additions at scaffold time.
- New published dependencies declared by authored items (all previously
  published, none newly written): `thm-algebra-of-derivatives`,
  `thm-gram-schmidt-orthonormalisation`,
  `lem-manifold-bump-for-a-compact-set-inside-an-open-set`,
  `def-countable-choice`, `def-interior-product-of-a-form-by-a-vector-field`.
- `def-e-valued-…` `dependency_level` recomputed 2 → 6 after declaring the
  Countable Choice dependency; all other levels unchanged (0, 0, 1, 8, 9, 10, 11).

## Published concerns and pre-splice mismatches

- **Step-4 splice mismatch (known, not a defect)**: the four scaffold-added
  prerequisite IDs remain absent from `research/plan-spec.json`; the owner update
  of 2026-10-09 reconciled only the two pages' `requires` extensions. Step 4
  must reconcile this manifest-only inventory (`splice-plan --update` after
  adjudication). No further `requires` additions were needed at 3b.
- **Unrelated run-wide failures (not this pair)**: `validate-plan` currently
  fails on batch 6 (`kashiwara-operators-and-crystal-lattices`: a B-page leaf and
  an undeclared `valuation-rings-and-discrete-valuation-rings-examples`
  prerequisite); `depcheck`/`fwdcheck` fail on other in-flight pairs
  (`thm-triangular-fixed-tabloid-reconstruction-of-the-character-table` and
  others); `extcheck` reports a `focus-item-unknown` from another batch's
  in-flight manifest. None names a batch-31 page or item.
- The previously recorded published defect in `prop-flat-torus-model-geometry`
  (Datar locator) is resolved on disk (recorded local repair); the pair continues
  to consume the published item and its mathematics is unaffected.
- No new published-content defect was confirmed by this batch.

## Handoff

- Completed and decided (all 8, batch 31): `def-complex-manifolds-and-holomorphic-vector-bundles`,
  `def-second-order-laplace-type-operators-on-vector-bundles`,
  `lem-formal-adjoints-of-differential-operators-exist-and-are-unique`,
  `def-e-valued-dolbeault-operators-and-ltwo-structure`,
  `thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity`,
  `thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition`,
  `thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology`,
  `ex-compact-flat-torus-hodge-kernel-from-energy-and-coordinates`.
- Deliverables on disk: 8 item files, both page files, the batch manifest rows
  with synced deps/levels, `research/…-batch-31.proof-contracts.json` (strict,
  6 entries), the refreshed batch cross-batch input, and this report.
- Open obligations: (1) Step-4 splice reconciliation of the four manifest-only
  prerequisites (owner adjudication); (2) thorough independent audit of these
  items follows in Steps 5–7 — this report claims no independent verification;
  (3) the nonfatal `shotgun-bracket` contract warning is left for the Step-5
  reviewer's discretion.
- No blocker, no unresolved in-pair supplier, and no escalation remained at
  handoff: every supplier consumed by these items is either published or an
  authored item of this pair.
