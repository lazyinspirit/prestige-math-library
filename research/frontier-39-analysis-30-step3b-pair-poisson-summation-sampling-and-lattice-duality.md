# Step 3b authoring — Poisson summation, sampling and lattice duality

- Run: `frontier-39-analysis-30` (role: alpha-high; batch 29; this pair only)
- A page: `poisson-summation-sampling-and-lattice-duality` (order 510.06509, `fourier-analysis`)
- B page: `poisson-summation-sampling-and-lattice-duality-examples` (order 510.06510)
- Owned items: 22 (17 A + 5 B), listed below in the dispatch's dependency-level order.
- Inputs read: `CLAUDE.md`, `SCHEMA.md`, batch-29 manifest/coverage/notes, the FR-19 design
  section (`research/plan-fourier-analysis-track.md` L1366-L1411 and its ledger/source rows),
  `plan-spec.json` rows 510.06509/510.06510, the Step-3a scope review (decision `sufficient`,
  receipt `...-step3a-review-poisson-summation-sampling-and-lattice-duality.json`), the 22
  Step-1 readiness records, the published suppliers named by the scaffold, and the two
  in-run prerequisite pairs' manifests (batches 27/28). No owner authoring direction exists
  for this pair; no pair-specific owner repair report exists.

## Owned IDs (dispatch order)

Level 0: `def-full-rank-lattice-covolume-and-dual-lattice`,
`def-normalized-sinc-function`,
`lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval`,
`lem-invertible-linear-substitutions-preserve-schwartz-space`,
`rem-schwartz-poisson-formula-is-owned-by-functional-analysis`,
`cex-undersampling-identifies-two-distinct-pure-frequencies` (B),
`rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis` (B).

Level 1: `lem-lattice-fundamental-parallelotope-partitions-euclidean-space`,
`lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable`,
`thm-shannon-sampling-for-bandlimited-ltwo-functions`,
`ex-dual-lattice-and-covolume-for-a-diagonal-scaling` (B).

Level 2: `lem-character-orthogonality-on-a-lattice-fundamental-domain`,
`lem-fourier-coefficients-of-lattice-periodisation`,
`lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients`,
`ex-shannon-reconstruction-of-a-sinc-function` (B).

Level 3: `thm-poisson-summation-for-a-full-rank-lattice`,
`thm-poisson-summation-under-two-sided-polynomial-decay`.

Level 4: `lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb`,
`rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation` (B).

Level 5: `lem-sampling-produces-periodisation-in-frequency`.

Level 6: `cor-nyquist-no-aliasing-condition`, `rem-aliasing-above-the-nyquist-rate`.

## Open obligations at entry

1. Author all 22 item files and both `library/fourier-analysis/` pages, in the
   dependency-level order above (ties by dispatch order), one item at a time.
2. Audit each scaffold statement/strategy against its declared suppliers before
   accepting it; repair local gaps (deps, hypotheses, convention statements) in the
   item file, keeping the scaffold claim and updating the manifest row consistently
   when a dependency list changes.
3. Keep the Countable-Choice contract: every FR-19 item carries at most Countable
   Choice, inherited from the published Euclidean integration/Fubini/Plancherel
   suppliers; no Axiom of Choice or DC beyond that.
4. Consume the published `thm-poisson-summation-for-schwartz-functions` exactly for
   its convergence clause in `lem-schwartz-periodisation-over-a-lattice-...`, and
   flag any in-run supplier that is not yet authored with exact ID and consuming
   step. In-run prerequisite pairs (`pontryagin-duality-...` batch 27,
   `finite-fourier-analysis-...` batch 28) are page-scope interfaces only; no
   FR-19 item consumes them.
5. Write the batch proof contracts to
   `research/frontier-39-analysis-30-batch-29.proof-contracts.json` (all 22 items),
   record a Step-3b item decision per item with `confidence: 1` and the examined
   dependency list, or escalate with exact evidence.
6. Run the explicit-path checks (precheck, rendercheck, content-policy,
   proof-layout, depcheck/levels, validate-plan) before handoff and report
   plan/prose amendments for Step 4.

## Checkpoints

(updated after each item; append only)

### Checkpoint 0 — entry audit (2026-10-05)

- No item file and no page file of this pair exists yet: all 22 `items/<id>.md` and
  both `library/fourier-analysis/poisson-summation-*.md` are MISSING.
- Scaffold manifest carries full statements, strategies, deps, provenance and
  locators for all 22 items; readiness records all `ready`; Step-3a scope
  `sufficient`; the two page edges (batches 27/28) are `open` page-scope
  interfaces with nothing consumed.
- Suppliers verified as published and statement-checked: `def-full-euclidean-lattice-and-covolume`,
  `def-schwartz-space-and-its-seminorms`, `thm-poisson-summation-for-schwartz-functions`,
  `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients`,
  `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`,
  `def-dirac-comb`, `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products`,
  `def-convolution-of-a-tempered-distribution-with-a-schwartz-function`,
  `thm-riesz-fischer-for-fourier-coefficients`, `thm-plancherel`, `thm-l-two-fourier-inversion`,
  `thm-l-one-l-two-agreement-of-fourier-transform`, `ex-fourier-transform-of-an-interval-indicator`,
  `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`,
  `thm-kernel-and-fibres-of-complex-exponential`, `lem-trigonometric-characters-are-orthonormal`,
  `lem-integer-part`, `thm-linear-change-of-variables-for-lebesgue-measure`,
  `thm-lebesgue-measure-of-a-box-of-every-kind`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-countable-choice`.
- Next action: author `def-full-rank-lattice-covolume-and-dual-lattice`.

### Checkpoint 1 — item 1 (def-full-rank-lattice-covolume-and-dual-lattice)

- Convention fixed as in the scaffold: `Lambda = A Z^n`, `covol = |det A|`,
  `Lambda* = A^{-T} Z^n`; well-definedness shown independent of the `GL_n(Z)` basis
  change; `covol(Lambda*) = covol(Lambda)^{-1}`; `x -> e^{2 pi i lambda* . x}`
  is `Lambda`-periodic exactly for `lambda*` in `Lambda*`.
- Deps audited at entry: scaffold list kept, minus nothing; the character clause uses
  `thm-kernel-and-fibres-of-complex-exponential`. Choice-free. (Authoring later extended the
  deps to the suppliers actually used; see "Scaffold repairs" item 3.)

(further checkpoints appended as items are completed)

### Checkpoints 2-10 — levels 0-1 (files written, precheck/rendercheck per item)

- `def-normalized-sinc-function` (item 2, local addition): normalised $\operatorname{sinc}(t)=\sin(\pi t)/(\pi t)$, $\operatorname{sinc}(0)=1$; deps extended with
  the parity/Lipschitz/limit/continuity suppliers and `ex-fourier-transform-of-an-interval-indicator`
  (identity not claimed here). Check: rendercheck OK; precheck n/a (definition).
- `lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval` (item 3): proof written
  (L¹ inclusion on the band; continuous representative via L¹-L² agreement and inversion; rescaled
  torus class $G_h$; substitution; Riesz–Fischer isometry); precheck PASS, rendercheck OK.
- `lem-invertible-linear-substitutions-preserve-schwartz-space` (item 4, local addition): proof
  written (linear maps are $C^\infty$; total-derivative chain rule; induction giving
  $\partial^\beta(f\circ A)=\sum_{|\gamma|=|\beta|}c_{\beta\gamma}(\partial^\gamma f)\circ A$;
  seminorm estimate; continuity from the Schwartz topology). Deps extended with
  `thm-chain-rule-for-total-derivatives`, `def-total-derivative-in-euclidean-space`,
  `thm-continuous-partial-derivatives-imply-total-differentiability`, `def-jacobian-matrix-and-gradient`,
  `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `def-schwartz-topology-and-convergence`,
  `thm-multinomial-theorem`. Precheck PASS, rendercheck OK.
- `rem-schwartz-poisson-formula-is-owned-by-functional-analysis` (item 5): recorded remark with
  `proved_here: false` and the manifest `external_dependency` (Elkies PDF URL matching
  `sources.references`); no proof section; precheck n/a.
- `cex-undersampling-identifies-two-distinct-pure-frequencies` (item 6, B): counterexample proof
  (addition law; $e^{2\pi imk}=1$; distinctness at $x=h/(2m)$); precheck PASS.
- `rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis` (item 7, B):
  recorded remark, `proved_here: false`, manifest external dependency (Sutherland PDF); precheck n/a.
- `lem-lattice-fundamental-parallelotope-partitions-euclidean-space` (item 8): proof written
  (coordinate decomposition via integer part; uniqueness by injectivity; volume by the linear
  change-of-variables theorem; CC only in the volume step). Precheck PASS.
- `lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable` (item 9): proof
  written by reduction to the unit lattice (substitution lemma + published Schwartz Poisson
  convergence clause), coordinate-line differentiation via the uniform-derivative limit theorem,
  induction in the order, periodicity by reindexing. Deps extended with
  `def-matrix-product-and-identity-matrix`, `thm-real-square-matrix-invertible-iff-determinant-nonzero`,
  `thm-compactness-under-continuous-maps`,
  `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space`.
  Precheck PASS.
- `thm-shannon-sampling-for-bandlimited-ltwo-functions` (item 10): proof written (torus expansion,
  rescaling by change of variables, termwise unitary inverse transform, indicator transform giving
  the sinc kernel, $L^2$ identity; absolute/uniform convergence and pointwise identity under
  $\sum_k|f(hk)|<\infty$). Precheck PASS after adopting the canonical phase numbering; rendercheck OK.
- Open obligation: the published supplier `thm-poisson-summation-for-schwartz-functions` is consumed
  exactly for its convergence clause in item 9 (and its statement's absolute-convergence clause for
  translated Schwartz functions); no unfinished supplier is consumed by any item so far.

### Checkpoints 11-22 — levels 2-6

- `lem-character-orthogonality-on-a-lattice-fundamental-domain` (item 12, local addition): proof via
  the substitution on the open box, null boundary, Fubini factorisation and the unit-cube character
  integral; canonical phase numbering adopted after the precheck repair. Precheck PASS.
- `lem-fourier-coefficients-of-lattice-periodisation` (item 13): proof by termwise integration over
  the tiling (Tonelli + translation invariance), the cell substitution and the exponential factor
  `e^{-2\\pi i\\lambda^*\\cdot\\lambda}=1`. Precheck PASS.
- `lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients`
  (item 14, local addition): pullback to the unit lattice and the published unit-lattice uniqueness;
  all deps published. Precheck PASS.
- `ex-shannon-reconstruction-of-a-sinc-function` (item 15, B): the interval-indicator transform is
  computed locally from the complex primitive (the B-page example dependency was removed).
  Precheck PASS.
- `thm-poisson-summation-for-a-full-rank-lattice` (item 16): Fourier expansion of the periodisation;
  absolute convergence of the dual series by the weight bound + lattice shell count + p-series;
  coefficients matched by character orthogonality and uniqueness. Precheck PASS.
- `thm-poisson-summation-under-two-sided-polynomial-decay` (item 17): the source's exact two-sided
  `(n+\\varepsilon)` hypotheses; shell majorants, tiling/Tonelli interchange, dual series and
  uniqueness. Precheck PASS.
- `lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb` (item 18): temperedness by the
  transported shell estimate and finite-seminorm characterisation; transform computed by the lattice
  Poisson theorem applied to `\\widehat\\varphi` and `\\mathcal F^2=R`. Precheck PASS.
- `rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation` (item 19, B): recorded
  remark with `proved_here: false` and the manifest external dependency; precheck n/a.
- `lem-sampling-produces-periodisation-in-frequency` (item 20): product with the comb identified
  through transposition, then the product-to-convolution law and comb duality; `h\\mathbb Z^n`
  specialisation by the diagonal computation. Precheck PASS.
- `cor-nyquist-no-aliasing-condition` (item 21): **scaffold claim repaired** — see "Scaffold repairs"
  below; proof gives the a.e. disjointness of the translates and the band-local identity. Precheck PASS.
- `rem-aliasing-above-the-nyquist-rate` (item 22): recorded orientation remark, no proof, precheck n/a.

## Scaffold repairs, deviations and evidence

1. **`cor-nyquist-no-aliasing-condition`: falsified inference corrected (statement repair).** The
   scaffold inferred "the aliasing sum $\\sum_m\\widehat f(\\xi-m/h)$ equals $\\widehat f(\\xi)$ for
   almost every $\\xi$" from the a.e. disjointness of the translates $E+m/h$. That inference is false
   as stated: for $\\xi\\notin E$ with $\\xi-m/h\\in E$ and $m\\ne0$ the sum equals
   $\\widehat f(\\xi-m/h)$ while $\\widehat f(\\xi)=0$. The item and the batch manifest now assert the
   correct content of the design row: the translates are pairwise null-disjoint, for a.e. $\\xi$ at
   most one term of the aliasing sum is nonzero, and for a.e. $\\xi\\in E$ the scaled periodisation
   satisfies $h^{-1}\\sum_m\\widehat f(\\xi-m/h)=h^{-1}\\widehat f(\\xi)$. Item id, kind, home page
   and the Nyquist threshold content are unchanged. This invalidated the Step-3a scope hash, so a
   fresh scope decision was recorded by this author (see below); the original Step-3a review's
   mathematical conclusions are otherwise untouched and require no amendment.
2. **B-page dependencies removed (depcheck `b-leaf-content`).** Four scaffold dependencies reached
   items homed only on B/examples pages, which the repository forbids: the
   `ex-fourier-transform-of-an-interval-indicator` dependency of `def-normalized-sinc-function`,
   `thm-shannon-sampling-for-bandlimited-ltwo-functions` and
   `ex-shannon-reconstruction-of-a-sinc-function` (each replaced by a complete local computation of
   the modulated indicator integral from the complex primitive `\\int_a^be^{c\\xi}d\\xi=(e^{cb}-e^{ca})/c`,
   with the degenerate point $u=0$ evaluated separately), and the
   `ex-poisson-summation-for-the-gaussian-and-theta-functional-equation` dependency of
   `rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis` (the recorded
   pointer now cites the exact stable id in code text and keeps its `external_dependency` record;
   no logical edge is declared). After these repairs the repo-wide depcheck reports no
   `b-leaf-content` row for any item of this pair.
3. **Dependency-list extensions (local repairs).** Every deps list was re-audited against the
   authored argument; the added suppliers are all published items and none changed a computed
   `dependency_level`. The distinct added suppliers are:
   `def-complex-exponential`, `thm-kernel-and-fibres-of-complex-exponential`, `def-euclidean-inner-product`,
   `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-determinant-of-transpose`,
   `def-matrices-over-a-commutative-ring`, `def-ring-matrix-product-identity-and-transpose`, `lem-units-of-z`,
   `cor-trigonometric-parity-and-pythagorean-identity`, `cor-sine-and-cosine-are-one-lipschitz`,
   `cor-sin-x-over-x-limit`, `thm-composition-of-function-limits`, `thm-algebra-of-continuous-functions`,
   `thm-composition-of-continuous-functions`, `thm-chain-rule-for-total-derivatives`,
   `def-total-derivative-in-euclidean-space`, `thm-continuous-partial-derivatives-imply-total-differentiability`,
   `def-jacobian-matrix-and-gradient`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`,
   `def-schwartz-topology-and-convergence`, `thm-multinomial-theorem`,
   `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-multidimensional-rectangle-and-volume`,
   `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`,
   `cor-integral-over-a-null-set-vanishes`, `lem-a-uniformly-approximable-real-valued-map-is-continuous`,
   `thm-componentwise-limits-and-continuity`, `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences`,
   `thm-algebra-of-continuous-functions`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`,
   `lem-schwartz-functions-and-all-derivatives-are-integrable`, `def-schwartz-space-and-its-seminorms`,
   `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `lem-euclidean-linear-maps-have-matrices-and-are-bounded`,
   `def-dirac-comb`, `thm-p-series-real-exponents`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`,
   `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-chain-rule-for-complex-derivatives`,
   `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-measure-null-set-and-almost-everywhere`,
   `def-countable-choice` (where not already scaffolded), `prop-transpose-laws`, `def-invertible-matrix-and-general-linear-group`
   (where not already scaffolded), `thm-determinant-of-transpose`, `thm-real-square-matrix-invertible-iff-determinant-nonzero`.
   The batch manifest's `deps` rows were synchronised to the item files, and the 22 Step-1 readiness
   records were re-recorded as `ready` for the current bytes (all 22 now current).
4. **No other statement was altered.** All other 21 scaffold statements, ids, kinds, page homes,
   design rows and provenance tags are authored as scaffolded; the recorded remarks keep
   `proved_here: false`, `verification.precheck: n/a` and their `external_dependency` records.

## Checks actually run (2026-10-05)

- `node tools/rendercheck.mjs` on all 22 item files and both page files →
  `OK — 24 file(s)`, no wikilink inside math, no nested/unbalanced delimiters, no multiline display,
  every math span parses under KaTeX, every frontmatter block parses.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 16 proof-bearing item files →
  `16 checked, 0 failing`; the six definition/recorded-remark items are `not-applicable` (verified:
  no proof-like body).
- `node tools/proof-layout.mjs` on the 22 item files (single batched explicit-path run) →
  `22 items, 51 steps, 0 defects` (after one repair: a period between the final tag and `∎` in
  `ex-dual-lattice-and-covolume-for-a-diagonal-scaling`).
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-29.proof-contracts.json --strict`
  → `0 error(s), 0 warning(s), 22/22 item(s) checked`; every Facts-block link has an exact quoted
  citation, every numbered step is mapped exactly once with its inputs, and all eight standard
  boundary cases are dispositioned for all 22 items.
- `node tools/tsx-run.mjs tools/author-check.mts frontier-39-analysis-30 29` → batch author gate
  **ok = true**: precheck `16 checked, 0 failing`, rendercheck 22 items + 2 pages OK, content-policy
  `22 scoped item(s), 0 error(s), 0 warning(s)`, strict proof contract `0 error(s), 0 warning(s)`;
  receipt `research/frontier-39-analysis-30-author-check-29.json`.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-29.pages.json` →
  `22 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/depcheck.mjs` → exit 1 only through pre-existing or other-batch rows; filtering for the
  22 item files and both page files of this pair returns **no row** (no unresolved id, no cycle, no
  B-leaf edge, no cited-not-in-deps, no multi-home, no page-order or draft-on-published finding).
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` → findings only in other
  batches; **no batch-29 row**, so the recorded `dependency_level` labels (0-6) equal the computed
  values, including the five local additions.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-29.pages.json` →
  `22 item(s), 0 normalized, 0 error(s)`; `node tools/manifest-integrity.mjs --run frontier-39-analysis-30`
  → `60 page(s) owed, 60 in the manifests; no scope drift`.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-29.coverage.json --require-destination`
  → `2 page(s), 39 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0.
- `node tools/extcheck.mjs` → exit 0 (every recorded-not-proved statement is a cited remark; the three
  recorded items of this pair are among them). `node tools/fwdcheck.mjs` → exit 1 only through other
  batches' rows; no row names any item of this pair (the pair's items appear only in the inherited
  forward-marker list, which is the intended marker for published forward material).
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` → after the refresh described
  above, **no stale or missing readiness record for any of the 22 items**.
- `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase scope` and `--phase final`
  → after the recorded decisions, **no open scope or item row for this pair** (all 22 items closed:
  17 `repaired`, 5 `accept`; the run-wide gate remains open only through other pairs still authoring).
- Scope refresh: `record-scope` for `poisson-summation-sampling-and-lattice-duality`,
  decision `sufficient`, against sha256 `9cd049df05c1d46cb8968181010a23ad16a8bf3e49d68e001b302c5a834f03d9`
  (this replaces the Step-3a review receipt; the repair it records is item 1 above and the review is
  the author's, so it is flagged for Step-5 independent scrutiny).
- Item decisions: `record-item` for all 22 ids, `confidence: 1`, each with its examined dependency
  list and the per-item note: five `accept` (authored from unchanged scaffold rows:
  `lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval`,
  `ex-dual-lattice-and-covolume-for-a-diagonal-scaling`,
  `rem-schwartz-poisson-formula-is-owned-by-functional-analysis`,
  `rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation`,
  `rem-aliasing-above-the-nyquist-rate`) and seventeen `repaired` (all rows whose deps changed,
  plus the corrected Nyquist statement).

## Open obligations and matters for later steps

1. **Two page-scope interface edges remain `open`** in
   `research/frontier-39-analysis-30-batch-29.cross-batch-dependencies.json`: the `requires`
   pointers to `pontryagin-duality-for-locally-compact-abelian-groups` (batch 27) and
   `finite-fourier-analysis-and-the-fast-fourier-transform` (batch 28). Neither is consumed by any
   item of this pair (verified against the authored deps), so they do not block this pair; they can
   only close when the sibling authors finish. No shared plan/prose amendment is required for them.
2. **Reported for Step 4 (pre-splice plan/prose):** (a) the Nyquist statement repair in item 1 must
   be spliced with the corrected manifest text, not the original scaffold sentence; (b) the four
   B-leaf de-links in item 2 replace scaffold citations, so the spliced pages must not re-import
   them; (c) the A-page `requires` list keeps the plan's six entries even though FR-16
   (`bochner-inversion-and-plancherel-on-lca-groups`) is absent from the plan's own ledger (the
   recorded Step-1 conflict 2); nothing in this pair consumes either sibling page, so no plan change
   is requested.
3. **Published concerns (not repairs of this pair; exact ids).** The repo-wide gates surfaced these
   rows, none of which touches this pair: `[b-leaf-content]` on in-run sibling items
   `def-counting-inner-product-on-complex-functions-on-z-mod-n`,
   `def-cyclic-convolution-on-z-mod-n`, `def-unitary-discrete-fourier-transform-on-z-mod-n`
   (batch 28) and on three items of the Lie-theory/verma pairs
   (`ex-annihilator-of-the-trivial-sl2-module`,
   `lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters`); and the
   `[stack-cycle]`, `[forward-undeclared]` rows of other frontier-39 pairs. These are sibling or
   pre-existing findings owned by their authors; recorded here for visibility with exact ids, no
   confidence claimed about their resolution.
4. **Unfinished suppliers consumed:** none. Every supplier consumed by the pair is published; the
   four in-run items consumed inside the pair (`lem-invertible-linear-substitutions-preserve-schwartz-space`,
   `lem-lattice-fundamental-parallelotope-partitions-euclidean-space`,
   `lem-character-orthogonality-on-a-lattice-fundamental-domain`,
   `lem-fourier-coefficients-of-lattice-periodisation`, `lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients`,
   `lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb`) were authored before their
   consumers in the dispatched dependency order and their actual uses are reconciled in the proof
   contracts. No escalation is left open.
5. **Independent audit:** Steps 5-8 follow. No item here records a self-audit stamp, judge stamp or
   owner decision; all 22 items are `draft` on draft pages, awaiting the later gates.

## Handoff summary

- Completed: all 22 assigned items (17 A-page + 5 B-page), both pages, batch proof contracts,
  manifest `deps` synchronisation, 22 current Step-3b item decisions, refreshed scope decision and
  22 refreshed Step-1 readiness records.
- Checks run: rendercheck (24 files OK), precheck (16/16 PASS + 6 n/a), proof-layout (22 items/51
  steps/0 defects), strict proof contracts (0/0), content-policy (22/0/0), depcheck (no row for this
  pair), item-dependency-levels (no row for batch 29), manifest-deps and manifest-integrity clean,
  coverage-checklist (2/39/0/0), validate-plan exit 0, extcheck exit 0, fwdcheck no row for this pair.
- Added suppliers: the published items listed in "Scaffold repairs" item 3 (all now declared and
  contract-cited); no new library ids were minted beyond the scaffold's 22.
- Published concerns: none established for this pair; the sibling findings in item 3 above are
  reported for their owners.
- Open obligations: the two non-blocking page-interface edges (item 1 above) and the later
  independent Steps 5-8 review. Nothing in this pair is unresolved, hidden or marked complete
  without evidence.

## Independent Step 3b closure audit — 2026-10-05

- Scope: unchanged and owner-proceeded at `8e6a0976caa0ed1a780c1aec12346b5e3570c6340f44cc262319546e37a01380`.
  Pair inventory remains 22 items (17 A-page, 5 B-page); no Statement or Definition changed.
- Supplier audit: 104 unique direct supplier IDs are bound by the current item hashes; 14 are
  B29 items reviewed in dependency order, no direct in-run supplier belongs to another pair, and
  the 90 external direct suppliers are published. There are no current blockers.
- Current Step 3b status: 22/22 items are closed at their live composite hashes. The three local
  proof repairs are recorded as `repaired`; the remaining current reviews are `accept`.

### Repairs and rehashed consumers

- `lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval` — the coefficient
  substitution now explicitly carries the Jacobian: `h^{-1/2}·h = h^{1/2}`. Current hash:
  `52ff3b520b7847dc8bd068dc26992538c7380f26022679577cff1f53ea3464b4`.
- `lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable` — differentiation
  now applies the closed-interval derivative-limit theorem on `[-1/2,1/2]`. Current hash:
  `e1ac18fbaa24fe856ae80808609234ef82123213b82022c0803f8b41c033a88c`.
- `thm-poisson-summation-under-two-sided-polynomial-decay` — the B29 carrier now declares the
  L¹-to-BUC Fourier-transform supplier and the complex componentwise continuity supplier; the
  proof states the continuity step for both real and imaginary parts. Statement unchanged.
  Current hash: `330be7475d696688eeea4914b5bfaa764f4e8996547fdba588c54814e1681b65`.
- Refreshed affected B29 consumers in dependency order: `lem-fourier-coefficients-of-lattice-periodisation`
  `d291fc4eaa7d6b4ce3fbb2294d460c3a1dbf594157087caa9100f2f398bf9aaa`; `thm-poisson-summation-for-a-full-rank-lattice`
  `8fdd2cc352fa095096be9db3bf5bebeabe87381deabfc0b62459812a8a088931`; `lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb`
  `353617bc4da99d32ad73aae1c5f255322d7f4303b0382dd46c1f53a945f5e405`; `lem-sampling-produces-periodisation-in-frequency`
  `c9da6f4849078b70e4883a5fee7fd4733701c988db5252c1b372b2d860ce315a`; `thm-shannon-sampling-for-bandlimited-ltwo-functions`
  `b89aef81b26075ebe7bdf12ea8b69cfbb587a12dc75a27059a19b9c80e3f8a26`; `ex-shannon-reconstruction-of-a-sinc-function`
  `f5e0aa7effe0e68a4c95059e62cef1d349e0b49ce52427bf4f41f59bb2e72dfb`; `cor-nyquist-no-aliasing-condition`
  `a16b6c288e8b5375fd6847037e4c364dc94ab3c98e4bd06f594661d42133b1e8`; `rem-aliasing-above-the-nyquist-rate`
  `1ca0a399bd59c434031776a1eb746f228dfb8f81e388c1941212eacfb483d33b`; and `rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation`
  `e43d6b9a21505e2cf5ba539fe488dbc84f649b953734eb952884ec5fe1f92690`.

### Changed files and checks

- Source edits were confined to the three B29 items named above. B29-only carriers updated were
  `research/frontier-39-analysis-30-batch-29.pages.json` and
  `research/frontier-39-analysis-30-batch-29.proof-contracts.json`; only B29 contract entries
  were copied into the two merged run proof-contract files. The 22 B29 Step 3b review receipts
  were refreshed at current hashes. No other pair or shared supplier source was edited.
- Focused strict proof contracts: `0 errors, 0 warnings, 22/22 items`.
- Focused proof layout: `22 items, 51 steps, 0 defects`.
- No tests or workflow gates were run in this independent closure pass.
