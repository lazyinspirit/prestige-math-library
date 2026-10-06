# Step 3b pair report — `analytic-semigroups-and-linear-evolution-equations`

- Run: `frontier-39-analysis-30`
- A page: `analytic-semigroups-and-linear-evolution-equations` (batch 18, order 458.045)
- B page: `analytic-semigroups-and-linear-evolution-equations-examples` (batch 18, order 458.046)
- Owned items: 27 A + 9 B = 36 (all of batch 18). Scaffold inventory only; no item file existed at entry.
- Inputs read: `CLAUDE.md`, `SCHEMA.md`, `briefs/group-author.md`, the batch-18 manifest / coverage /
  construction note / cross-batch input, the Step-3a pair review and its receipt, `plan-pde-track.md`
  PDE-24 and its additions table, `plan-spec.json` orders 458.043–458.046, the owner repairs
  `.autopilot/frontier-39-analysis-30/owner-repairs/batch18-{core,duhamel,holder,holder-ledger,ledger}.json`,
  and the exact supplier statements of the in-run dependency items (batches 4, 9–12, 17).

## Status ledger (updated as items complete; 36/36 authored)

| # | level | item | status | checks | notes |
|---|-------|------|--------|--------|-------|
| 1 | 0 | lem-power-series-coefficients-are-determined-by-real-values | authored | all checks pass; contract valid | choice-free |
| 2 | 1 | def-closed-sectorial-form-and-its-associated-operator | authored | rendercheck pass; definition; contract valid | sign dictionary inside |
| 3 | 1 | lem-resolvent-identity-and-holomorphy-for-closed-operators | authored | all checks pass; contract valid | operator Neumann lemma; complexification gloss |
| 4 | 2 | def-complex-sector-and-bounded-analytic-semigroup | authored | rendercheck pass; contract valid | definition only |
| 5 | 2 | lem-sectorial-form-angle-controls-the-numerical-range-of-its-operator | authored | all checks pass; contract valid | normalised quadratic forms |
| 6 | 3 | def-sectorial-operator-with-the-semigroup-sign-convention | authored | rendercheck pass; contract valid | dictionary proved in prose |
| 7 | 3 | lem-banach-valued-cauchy-theorem-on-star-shaped-domains | authored | all checks pass; contract valid | star-shaped primitive route |
| 8 | 3 | lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves | authored | all checks pass; contract valid | oriented Bochner convention |
| 9 | 4 | thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions | authored | all checks pass; contract valid | primitive + Riemann-sum interchange |
| 10 | 4 | lem-contour-definition-of-an-analytic-semigroup | authored | all checks pass; contract valid | star-shaped punctured-sector primitive |
| 11 | 5 | lem-dunford-contour-construction-satisfies-the-semigroup-law | authored | all checks pass; contract valid | winding step dense; flagged for Step 5 |
| 12 | 5 | lem-cauchy-estimates-for-an-analytic-semigroup-give-generator-power-bounds | authored | all checks pass; contract valid |  |
| 13 | 5 | lem-classical-parabolic-solution-at-time-zero-needs-the-compatibility-ax-plus-f-zero | authored | all checks pass; contract valid |  |
| 14 | 6 | thm-analytic-semigroup-smoothing-estimates | authored | all checks pass; contract valid |  |
| 15 | 7 | cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero | authored | all checks pass; contract valid |  |
| 16 | 7 | lem-analytic-duhamel-cancellation-removes-the-generator-singularity | authored | all checks pass; contract valid |  |
| 17 | 7 | lem-generator-of-the-contour-semigroup-is-the-sectorial-operator | authored | all checks pass; contract valid |  |
| 18 | 7 | thm-classical-regularity-for-holder-continuous-forcing-under-compatibility | authored | all checks pass; contract valid (self-citation in step 3.1 repaired) |  |
| 19 | 8 | cor-abstract-parabolic-smoothing | authored | all checks pass; contract valid | deps add def-complex-sector; closedness induction |
| 20 | 8 | thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups | authored | all checks pass; contract valid | 15 steps; Schnaubelt Thm 2.25 route; DC caveat in step 4.1 |
| 21 | 8 | cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump | authored | all checks pass; contract valid | B page; 3 steps |
| 22 | 9 | lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator | authored | all checks pass; contract valid | 6 steps; adds Lumer-Phillips + Cauchy-Schwarz deps |
| 23 | 9 | rem-real-banach-spaces-require-complexification-for-analyticity | authored | rendercheck pass; remark; contract valid | no proof |
| 24 | 9 | cex-sector-angle-changes-under-the-sign-convention | authored | all checks pass; contract valid | B page; 3 steps |
| 25 | 9 | cex-the-translation-semigroup-is-not-analytic | authored | all checks pass; contract valid | B page; 7 steps; self-contained (no B-leaf dep) |
| 26 | 13 | thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups | authored | all checks pass; contract valid | self-adjoint sectorial criterion route |
| 27 | 14 | cor-spectral-gap-gives-exponential-decay-of-a-self-adjoint-parabolic-semigroup | authored | all checks pass; contract valid | AC only in spectral step 5.1 |
| 28 | 14 | ex-analytic-semigroup-generated-by-a-bounded-operator | authored | all checks pass; contract valid | B page; extends earlier B witness |
| 29 | 14 | ex-sectorial-multiplication-operator | authored | all checks pass; contract valid | B page; sectorial multiplication |
| 30 | 15 | cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup | authored; decision escalate (batch-12 suppliers unfinished) | precheck/rendercheck/proof-layout pass; contract clean except 3 missing-source citations | AC/CC declared; n=1 handled locally; slab criterion; coercive unbounded witness; steps 2.3/3.2/5.1 consume missing suppliers |
| 31 | 16 | rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification | authored; decision escalate (batch-12 suppliers unfinished) | rendercheck pass; remark; contract valid | no proof; links the three missing batch-12 items plus cor-dirichlet |
| 32 | 16 | thm-form-generated-sectorial-elliptic-semigroups | authored | all checks pass; contract valid | consolidation of closed-form lemma + Dirichlet specialisation; deps trimmed to actual uses |
| 33 | 16 | ex-analytic-dirichlet-heat-semigroup | authored; decision escalate (batch-12 suppliers unfinished) | all checks pass; contract clean except 2 missing-source citations | B page; spectral series proved via form-norm eigenbasis expansion + Laplace transform; bounded (m/(et))^m |
| 34 | 17 | cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero | authored | all checks pass; contract valid | B page; norm-discontinuity witness \|\|T(t)-I\|\|>=1 |
| 35 | 17 | ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation | authored; statement repaired (sup equality to <=) | all checks pass; contract valid | B page; diagonal ell^2 generator; witness x=(1/n) |
| 36 | 17 | ex-sectorial-nonselfadjoint-multiplication-generator | authored; statement repaired (unused AC hypothesis removed; spectrum claim localised) | all checks pass; contract valid | B page; local resolvent bound and sigma(M_q)=essran(q); nonselfadjoint witness |

## Open obligations (escalations pending supplier reconciliation)

- `cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup` consumes three batch-12 items that have no item file at authoring time:
  - `thm-global-h-two-dirichlet-regularity` in step 2.3 (n>=2 domain identification D(A)=H^2 cap H^1_0);
  - `thm-higher-order-boundary-regularity-for-dirichlet-problems` in step 3.2 (D(A^m) identification);
  - `rem-regularity-estimates-do-not-create-boundary-compatibility` in step 5.1 (boundary-compatibility caveat).
  The consumer is fully authored and all other gates pass; the contract strict run reports exactly three `citation-source-missing` errors for these citations, with provisional quotes, to be re-verified once the supplier files exist. Decision recorded as `escalate`.
- `rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification` consumes the same three batch-12 items in its Statement and `cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup` as a fourth dependency; it is authored as a no-proof remark and its decision stays `escalate` until the batch-12 files exist and the wikilinks resolve.
- `ex-analytic-dirichlet-heat-semigroup` consumes `thm-global-h-two-dirichlet-regularity` in step 4.1 and `thm-higher-order-boundary-regularity-for-dirichlet-problems` in step 4.1; its contract strict run reports two `citation-source-missing` errors, to be re-verified once the files exist. Decision recorded as `escalate`.
- `cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero`, `ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation` and `ex-sectorial-nonselfadjoint-multiplication-generator` depend only on authored items and need no supplier reconciliation.

### Resume notes (for post-compaction recovery)

- Working repo path is `/home/lazyinspirit/Projects/prestige-math-library` (the sandbox cwd alias
  `/home/lazyinspirist/...` is unreliable); run commands with `cd` into the real path.
- Item frontmatter template used for all authored items: `id, kind, title, status: draft,
  origin: pipeline, pipeline_run: frontier-39-analysis-30, dependency_level, deps, justified_by: [],
  proof_strategy: direct, provenance: {statement, proof}, sources.references (URLs from the batch-18
  manifest), verification: {precheck: pass}` (definitions/remarks use `precheck: n/a`).
- Proof steps must each be ONE source line, numbered by computed layer (layer = 1 + max layer of cited
  steps; facts are layer 0), tagged at the end, blank line between steps, `[tags] ∎` on the final step.
- Checks after each item: `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`;
  `node tools/rendercheck.mjs items/<id>.md`; `node tools/proof-layout.mjs items/<id>.md`.
- Contract entries live in `/tmp/b18contracts/<id>.json` (one per item) and are merged for validation
  into /tmp/b18partial.json with a Python one-liner; validate with
  `node tools/proof-contract.mjs /tmp/b18partial.json --strict`.
- Contract shape per item: `{id, citations:[{fact, source, source_section (Statement|Definition|Remark|Example|Statement refuted), quote (exact substring after whitespace normalisation), uses:[step ids citing the fact token]}], derivations:[{id, claim, step, inputs (cover every F/L/step token in the step text)}], routine_steps:[], boundaries:[8 rows: empty, zero, one, degenerate, endpoints, nonempty-choice, iff-forward, iff-reverse; checked rows must name a step or the word statement/definition/example/counterexample], finite_smoke:[]}`.
- Remaining items by level: 6: `thm-analytic-semigroup-smoothing-estimates`; 7:
  `cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero`,
  `lem-analytic-duhamel-cancellation-removes-the-generator-singularity`,
  `lem-generator-of-the-contour-semigroup-is-the-sectorial-operator`,
  `thm-classical-regularity-for-holder-continuous-forcing-under-compatibility`; 8:
  `cor-abstract-parabolic-smoothing`,
  `thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups`,
  `cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump`; 9:
  `lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator`,
  `rem-real-banach-spaces-require-complexification-for-analyticity`,
  `cex-sector-angle-changes-under-the-sign-convention`, `cex-the-translation-semigroup-is-not-analytic`;
  13: `thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups`; 14:
  `cor-spectral-gap-gives-exponential-decay-of-a-self-adjoint-parabolic-semigroup`,
  `ex-analytic-semigroup-generated-by-a-bounded-operator`, `ex-sectorial-multiplication-operator`;
  15: `cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup`; 16:
  `rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification`,
  `thm-form-generated-sectorial-elliptic-semigroups`, `ex-analytic-dirichlet-heat-semigroup`; 17:
  `cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero`,
  `ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation`,
  `ex-sectorial-nonselfadjoint-multiplication-generator`.
- Completed after items: library pages (A and B) written; merged contract file
  `research/frontier-39-analysis-30-batch-18.proof-contracts.json` written; cross-batch input reconciled
  and unified ledger refreshed; 36 item decisions recorded with `tools/step3-decisions.mjs record-item`;
  report finalised below.

To be filled as the audit proceeds. Known at entry:

- The in-run suppliers of batches 10, 11, 12 and 17 have no item files yet; every consumer that
  uses one is authored against its manifest statement and its decision stays open until the supplier
  and its actual use are reconciled (per the dispatch).
- Page-level `requires` edges owed at Step 4 (recorded by Step 3a; not an item gap): PDE-16, PDE-17,
  PDE-18, PDE-14 page prerequisites of this pair.

## Published concerns

None confirmed so far.

## Handoff

### Completed items (36/36)

A page: `lem-power-series-coefficients-are-determined-by-real-values`,
`def-closed-sectorial-form-and-its-associated-operator`,
`lem-resolvent-identity-and-holomorphy-for-closed-operators`,
`def-complex-sector-and-bounded-analytic-semigroup`,
`lem-sectorial-form-angle-controls-the-numerical-range-of-its-operator`,
`def-sectorial-operator-with-the-semigroup-sign-convention`,
`lem-banach-valued-cauchy-theorem-on-star-shaped-domains`,
`lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves`,
`thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions`,
`lem-contour-definition-of-an-analytic-semigroup`,
`lem-dunford-contour-construction-satisfies-the-semigroup-law`,
`lem-cauchy-estimates-for-an-analytic-semigroup-give-generator-power-bounds`,
`lem-classical-parabolic-solution-at-time-zero-needs-the-compatibility-ax-plus-f-zero`,
`thm-analytic-semigroup-smoothing-estimates`,
`cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero`,
`lem-analytic-duhamel-cancellation-removes-the-generator-singularity`,
`lem-generator-of-the-contour-semigroup-is-the-sectorial-operator`,
`thm-classical-regularity-for-holder-continuous-forcing-under-compatibility`,
`cor-abstract-parabolic-smoothing`,
`thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups`,
`lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator`,
`rem-real-banach-spaces-require-complexification-for-analyticity`,
`thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups`,
`cor-spectral-gap-gives-exponential-decay-of-a-self-adjoint-parabolic-semigroup`,
`cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup`,
`rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification`,
`thm-form-generated-sectorial-elliptic-semigroups`.

B page: `cex-the-translation-semigroup-is-not-analytic`,
`cex-sector-angle-changes-under-the-sign-convention`,
`cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump`,
`ex-analytic-semigroup-generated-by-a-bounded-operator`,
`ex-sectorial-multiplication-operator`,
`ex-analytic-dirichlet-heat-semigroup`,
`cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero`,
`ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation`,
`ex-sectorial-nonselfadjoint-multiplication-generator`.

### Decisions

29 items closed: 22 `accept` and 7 `repaired` (`cex-the-translation-semigroup-is-not-analytic`,
`cor-abstract-parabolic-smoothing`, `lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator`,
`thm-classical-regularity-for-holder-continuous-forcing-under-compatibility`,
`thm-form-generated-sectorial-elliptic-semigroups` (recorded as escalate because it is in the open cone),
`ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation`,
`ex-sectorial-nonselfadjoint-multiplication-generator`). 7 items are owner-held `escalate`:
`cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup`,
`rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification`,
`ex-analytic-dirichlet-heat-semigroup`, `thm-form-generated-sectorial-elliptic-semigroups`,
`cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero`,
`ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation`,
`ex-sectorial-nonselfadjoint-multiplication-generator`.

### Checks actually run (final pass)

- `node tools/proof-layout.mjs <all 36 explicit item paths>` — `36 items, 175 steps, 0 defects`.
- `node tools/tsx-run.mjs tools/precheck.mts <all 36>` — 31 proof-bearing items checked, 0 failing
  (5 definitions/remarks carry `precheck: n/a`).
- `node tools/rendercheck.mjs <all 36>` — clean after repairing a multiline display block in
  `lem-analytic-duhamel-cancellation-removes-the-generator-singularity` (one source line now).
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-18.pages.json` — 36 scoped items,
  0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-18.proof-contracts.json --strict`
  — 36/36 items checked, 5 errors, all `citation-source-missing` for the three unfinished batch-12 items
  (3 in `cor-dirichlet-...` facts L12/L13/L16, 2 in `ex-analytic-dirichlet-heat-semigroup` facts L8/L9).
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-18.pages.json` — 36 items, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-18.coverage.json` — 2 pages,
  56 harvested results, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — OK: acyclic and consistent, no item-level cycles,
  forward references, B-page dependencies or unresolved ids among the 1420 pages with item lists.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` — no findings for any of the
  36 owned items (remaining findings belong to other in-flight pairs).
- `node tools/depcheck.mjs` — 20 findings touching this pair, all `dep-unresolved`/`link-unresolved` for the
  three absent batch-12 items in `cor-dirichlet-...`, `ex-analytic-dirichlet-heat-semigroup` and
  `rem-abstract-...`; no other dependency defect in the pair.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` — refreshed; the batch-18
  input now holds 78 `verified`, 7 `removed`, 9 `open` rows with exact evidence.

### Added suppliers and plan/prose amendments for Step 4

- Added published suppliers (beyond the manifest) include `lem-eigenbasis-expansion-in-the-form-norm` and
  `thm-laplace-transform-formula-for-the-semigroup-resolvent` (spectral-series proof of the Dirichlet
  heat semigroup), `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set` and
  `thm-trigonometric-system-is-complete-in-l-two-of-the-torus` (Hilbert structure of $\ell^2$),
  `lem-unbounded-adjoint-is-well-defined-and-closed` and
  `lem-generator-of-the-contour-semigroup-is-the-sectorial-operator` (adjoint calculus and semigroup
  uniqueness), `thm-poincare-inequality-for-w-one-p-zero` and
  `lem-sharp-dirichlet-poincare-inequality-on-an-interval` (coercivity and the unbounded witness), and
  `thm-bochner-dominated-convergence` (termwise Laplace transform); the full per-item additions are in the
  item frontmatter.
- Dropped modelled dependencies (recorded as `removed` in the ledger) include
  `ex-spectrum-of-a-multiplication-operator` (another pair's examples-page item, replaced by a complete
  local spectrum proof) and, for several earlier items, planned items replaced by equivalent published
  suppliers or by local arguments; the manifest rows are otherwise preserved.
- Statement repairs to report to Step 4: the false equality
  `sup_{n>=1} n^{2m}e^{-n^2 t}=(m/(et))^m` in `ex-abstract-smoothing-does-not-imply-...` was corrected to
  the valid inequality bounded by the continuous supremum; the unused Axiom-of-Choice hypothesis of
  `ex-sectorial-nonselfadjoint-multiplication-generator` was removed after the spectrum argument was
  localised; `cor-dirichlet-...` proves the $n=1$ cases locally (weak-derivative argument) in addition to
  the cited $n\ge2$ elliptic-regularity route.
- Two reasoning steps flagged for Step 5: the keyhole winding computation in
  `lem-dunford-contour-construction-satisfies-the-semigroup-law` (dense but delicate) and the
  Lumer-Phillips route in `lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator`.

### Open obligations

The three batch-12 items have no item files at handoff, and every consumer use is escalated with the exact
consumer/step mapping recorded in the open-obligations section above: `thm-global-h-two-dirichlet-regularity`
(consumer steps 2.3/4.1), `thm-higher-order-boundary-regularity-for-dirichlet-problems` (3.2/4.1) and
`rem-regularity-estimates-do-not-create-boundary-compatibility` (5.1). When the files appear, update the
provisional contract quotes, re-run the strict contract and depcheck for the three consuming items, and
re-verify the seven escalations before clearing them.

### Published concerns

None confirmed. No published item was found defective; all remaining findings are the in-run missing
suppliers above. The strict-contract and depcheck failures reported here are exactly those absences.
