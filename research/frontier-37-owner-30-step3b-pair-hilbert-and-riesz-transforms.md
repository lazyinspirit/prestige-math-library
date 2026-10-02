# Step 3b — pair `hilbert-and-riesz-transforms` / `-examples` (run frontier-37-owner-30, batch 11)

Working notes and running checkpoint. Authoring in scaffold dependency-level order.
Do not commit. No `--owner`. Sibling pairs in batch-11 shared files are preserved.

## Authored items (in order)

| # | item | level | status | checks |
|---|---|---|---|---|
| 1 | def-conjugate-function-on-the-circle | 0 | written (def) | precheck n/a, rendercheck OK |
| 2 | def-truncated-hilbert-transform-and-principal-value | 0 | written (def) | precheck n/a, rendercheck OK |
| 3 | def-riesz-transforms-on-euclidean-space | 0 | written (def) | precheck n/a, rendercheck OK; item deps add `thm-real-gamma-functional-equation` (needs manifest registration) |
| 4 | lem-singular-kernel-sine-integral-under-countable-choice | 0 | written | precheck PASS, rendercheck OK |
| 5 | lem-periodic-conjugate-square-identity | 1 | written | precheck PASS, rendercheck OK |
| 6 | cor-riesz-transforms-are-ltwo-bounded | 1 | written | precheck PASS, rendercheck OK |
| 7 | lem-hilbert-transform-has-signum-fourier-multiplier | 1 | written | precheck PASS, rendercheck OK |
| 8 | lem-conjugate-dirichlet-kernel-and-principal-value-formula | 1 | written | precheck PASS, rendercheck OK |
| 9 | lem-riesz-transform-principal-value-kernel-formula | 1 | written | precheck PASS, rendercheck OK; n=1 soft spot repaired (direct A_1=2, +Gamma(1) dep) |
| 10 | cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity | 2 | written | precheck PASS, rendercheck OK |
| 11 | lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds | 2 | written | precheck PASS, rendercheck OK |
| 12 | thm-marcel-riesz-conjugate-function-theorem | 2 | written | precheck PASS, rendercheck OK |
| 13 | lem-hilbert-transform-is-skew-adjoint-on-ltwo | 3 | written | precheck PASS, rendercheck OK |
| 14 | lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp | 3 | written | precheck PASS, rendercheck OK |
| 15 | rem-hilbert-and-riesz-transform-endpoint-map | 3 | written (rem) | precheck n/a, rendercheck OK |
| 16 | ex-hilbert-transform-of-an-interval-indicator | 3 | written | precheck PASS, rendercheck OK |
| 17 | ex-hilbert-transform-of-the-poisson-kernel | 3 | written | precheck PASS, rendercheck OK; scaffold dep `thm-l-one-fourier-inversion` dropped (unused by the actual argument); real-analysis deps added (cutoff, DCT, a.e. subsequence, FTC/antiderivative calculus) |
| 18 | ex-riesz-transforms-square-to-minus-the-identity-in-sum | 3 | written | precheck PASS, rendercheck OK |

## Open local repairs found in the pre-splice recheck (2026-09-30)

- `ex-hilbert-transform-of-the-poisson-kernel` depends on B-homed published
  `ex-fourier-transform-of-the-poisson-kernel` (homed only on
  `fourier-transform-convolution-and-approximate-identities-examples`): a
  `b-leaf-content`/`batch-b-leaf-target` defect. Repair: drop the dep and the
  statement link; prove `\widehat P_a(\xi)=e^{-2\pi a|\xi|}` locally in the
  example with A-homed suppliers (L1 transform definition, L1 inversion,
  complex FTC, exponential modulus, nonnegative improper = Lebesgue).
- `thm-fourier-partial-sums-converge-in-periodic-lp` (to author) must NOT take
  the scaffold dep on B-homed `thm-lebesgue-constants-grow-logarithmically`
  (homed only on `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples`).
  Repair: use A-homed `lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant`
  (gives `||S_N:C->C|| = int|D_N| >= (1/3pi)log(N+1)`) and the A-homed Fejer
  facts; no local Lebesgue-constant computation is needed.
- Stale pre-splice findings rechecked: the `fejer-and-poisson-summability-of-fourier-series`
  undeclared-prereq is stale (it is already in the A page `requires`); the
  `...-examples` two are exactly the two b-leaf rows above. No prefix or
  intra-order finding touches this pair. No owner authoring direction file
  exists for this run.

## Dispatch order (from `...fe5a6dac6e6ec5cf.task.md`, authoritative)

## Remaining (superseded — completed in the Step 3b handoff below)

- L4 items thm-fourier-partial-sums-converge-in-periodic-lp and the two
  endpoint counterexamples were authored and passed.
- The batch-11 proof contracts, A/B library pages, item decisions and final
  gates were all completed; see "Step 3b handoff — final status" below.

## Plan amendments to report (do not edit plan-spec)

- A page `requires` closure misses two published A pages used as direct item deps:
  `trigonometric-and-oscillatory-examples-in-one-variable` (orders 288.00023; via
  `cor-sine-and-cosine-are-one-lipschitz` in lem-singular-kernel-sine-integral,
  and `lem-finite-sine-harmonic-sums` in lem-conjugate-dirichlet-kernel) and
  `divergence-and-almost-everywhere-convergence-of-fourier-series` (order 288.14018;
  via `lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant` in
  thm-marcel-riesz). Both are strictly earlier; add to the A page requires.
- B page `requires` reaches `fourier-transform-convolution-and-approximate-identities`
  (in closure already through the A page) — no amendment needed. Recheck after the
  B items are written.

## Local scaffold repairs while authoring

- `def-riesz-transforms-on-euclidean-space`: added dep `thm-real-gamma-functional-equation` (for Gamma(1)=1 used in c_1 = 1/pi); register in manifest.
- `lem-singular-kernel-sine-integral-under-countable-choice`: added published deps
  `cor-sine-and-cosine-are-one-lipschitz`, `cor-trigonometric-parity-and-pythagorean-identity`,
  `thm-derivative-of-exponential`, `thm-chain-rule`, `lem-exponential-dominates-one-plus-x`,
  `thm-continuous-implies-integrable`,
  `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`,
  `thm-ftc-second-part`, `thm-additivity-over-subintervals`,
  `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-dominated-convergence`,
  `cor-continuous-functions-are-borel-measurable`, `def-principal-inverse-tangent`,
  and dropped unused `cor-mean-value-theorem`. Register in manifest. All are A-homed
  published items; none is B-homed. Proof is choice-free except the declared AC_omega bridge.

## Step 3b handoff — final status (2026-09-30)

**All 21 assigned items are authored, pass the batch gates, and carry a current
Step-3b decision.** No new item ID was minted; every ID is an original scaffold
ID. The batch-11 manifests contain only this pair (16 A items + 5 B items), so
nothing of a sibling pair was touched except by reading.

### Completed items and recorded decisions

| item | level | decision |
|---|---|---|
| def-conjugate-function-on-the-circle | 0 | accept |
| def-truncated-hilbert-transform-and-principal-value | 0 | accept |
| def-riesz-transforms-on-euclidean-space | 0 | repaired |
| lem-singular-kernel-sine-integral-under-countable-choice | 0 | repaired |
| lem-conjugate-dirichlet-kernel-and-principal-value-formula | 1 | repaired |
| lem-periodic-conjugate-square-identity | 1 | repaired |
| lem-hilbert-transform-has-signum-fourier-multiplier | 1 | repaired |
| lem-riesz-transform-principal-value-kernel-formula | 1 | repaired |
| cor-riesz-transforms-are-ltwo-bounded | 1 | repaired |
| thm-marcel-riesz-conjugate-function-theorem | 2 | repaired |
| cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity | 2 | accept |
| lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds | 2 | repaired |
| lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp | 3 | repaired |
| lem-hilbert-transform-is-skew-adjoint-on-ltwo | 3 | repaired |
| rem-hilbert-and-riesz-transform-endpoint-map | 3 | accept |
| ex-hilbert-transform-of-an-interval-indicator | 3 | repaired |
| ex-hilbert-transform-of-the-poisson-kernel | 3 | repaired |
| ex-riesz-transforms-square-to-minus-the-identity-in-sum | 3 | repaired |
| thm-fourier-partial-sums-converge-in-periodic-lp | 4 | repaired |
| cex-hilbert-transform-is-not-strong-type-one-one | 4 | repaired |
| cex-hilbert-transform-does-not-map-linfinity-to-linfinity | 4 | repaired |

Decisions live in `research/frontier-37-owner-30-step3b-review-<id>.json`
(confidence 1, examined dependency IDs recorded, no owner receipt). The
`step3-decisions check --phase final` work list contains **0 open batch-11
items**; the run as a whole is still open for other batches.

### Artifacts created or updated

- `research/frontier-37-owner-30-batch-11.pages.json` — `deps` arrays
  reconciled item-by-item with the authored item frontmatter (17 of 21 changed).
- `research/frontier-37-owner-30-batch-11.proof-contracts.json` — new; 21/21
  entries, citations regenerated from completed item text, `derivations` cover
  every numbered step, all eight boundary cases disposed per item.
- `library/fourier-analysis/hilbert-and-riesz-transforms.md` and
  `...-examples.md` — new draft pages listing the 16 A items and 5 B examples.
- `research/frontier-37-owner-30-batch-11.cross-batch-dependencies.json` — `[]`;
  verified against the run manifests: every dependency is either one of these
  21 items or an already-published out-of-run item, so there is no cross-batch
  in-run edge and no page-level edge.

### Checks actually run (final state)

| check | actual result |
|---|---|
| `precheck.mts` on all 21 explicit item paths | 17 proof-bearing items checked, 0 failing |
| `rendercheck.mjs` on all 21 items plus both new pages | 23 files OK: frontmatter parses, no wikilinks in math, every span parses under KaTeX |
| `content-policy.mjs research/frontier-37-owner-30-batch-11.pages.json` | 21 scoped items, 0 errors, 0 warnings |
| `proof-contract.mjs ...batch-11.proof-contracts.json --strict` | 0 errors, 0 warnings, 21/21 items |
| `coverage-checklist.mjs ...batch-11.coverage.json --require-destination` | 1 page, 35 harvested results, 0 errors, 0 warnings |
| batch-local `item-dependency-levels` recomputation | all 21 labels match computed levels 0–4 |
| `validate-plan.mjs research/plan-spec.json` | declared page order acyclic and consistent; 367 planned pages still carry no item list (other batches) |
| `depcheck.mjs --quiet` (whole repo) | exit 1 from **other groups'** in-flight content: 78 `link-unresolved`, 64 `dep-unresolved`, 1 `id-filename`; zero findings attributable to this pair |
| `fwdcheck.mjs --quiet` | exit 1, 88 errors, all `link-unplanned`/`forward-dangling` in other pairs' items; none names a batch-11 item or page |
| `item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 1 only on `cex-degree-two-g-not-always-very-ample`, `ex-riemann-hurwitz-double-cover`, `ex-residue-pairing-one-cocycle` (other batches); batch-11 clean |
| `frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | exit 1 — blocked by another pair's file, see below |

### Local scaffold repairs made while authoring

- Both `b-leaf` pre-splice findings for this pair are repaired and re-verified:
  `thm-fourier-partial-sums-converge-in-periodic-lp` no longer depends on the
  B-homed `thm-lebesgue-constants-grow-logarithmically` (it uses the A-homed
  `lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant`), and
  `ex-hilbert-transform-of-the-poisson-kernel` no longer depends on the
  B-homed `ex-fourier-transform-of-the-poisson-kernel`; the Poisson transform
  is proved locally with A-homed suppliers. A grep confirms neither forbidden
  ID occurs in the batch manifests or in those item files.
- Dependency reconciliation: for each of the 21 items the manifest `deps` now
  equals the item frontmatter `deps`; the changed sets contain only published
  out-of-run items plus the pair's own scaffold IDs. The `thm-fourier-basis…`
  `undeclared-prereq` finding for `fejer-and-poisson-summability-of-fourier-series`
  remains stale (that page is already a declared `requires` entry).
- The three-decimal `dependency_level` labels were recomputed after every
  dependency change; all 21 still match the engine's computation.

### Supplier flags and escalations

**None outstanding.** The only in-run suppliers consumed by this pair are its
own items; both counterexamples consume the fully authored, same-page earlier
example `ex-hilbert-transform-of-an-interval-indicator` (a legal backward
B-page edge). No item decision is an escalation, and no owner-held escalation
was overridden.

### Published concerns for the owner

1. Unchanged from Step 1: published `thm-fourier-basis-and-parseval-on-the-n-torus`
   step 1.1 multiplies over `j<n`, which does not prove the statement at `n=1`.
   Not consumed by this pair; recorded for the serial reconciler in
   `research/published-consumer-supplier-ledger.md`.
2. `frontier-dependency-ledger.mjs refresh` is blocked by a YAML defect in
   `items/def-modular-specht-form-and-radical-quotient.md` (batch 23, not this
   pair): the double-quoted reference title on line 26 of the frontmatter
   contains `\cap`, `\lambda` and `\perp`, so the parser reports `Invalid escape
   sequence \c`. Remedy for that pair's owner: double the backslashes or use a
   single-quoted scalar. Until then the unified ledger keeps its last good
   snapshot, which already records batch 11 as reviewed with an empty edge set.
3. Whole-repo `depcheck`, `fwdcheck` and `item-dependency-levels` failures listed
   above belong to sibling batches still mid-authoring and are reported, not
   repaired here.

### Plan amendments for Step 4 (plan-spec is owner-held; not edited here)

- The A page's `requires` closure is missing two published pages used as direct
  item dependencies: `trigonometric-and-oscillatory-examples-in-one-variable`
  (order 288.00023; via `cor-sine-and-cosine-are-one-lipschitz` and
  `lem-finite-sine-harmonic-sums`) and
  `divergence-and-almost-everywhere-convergence-of-fourier-series`
  (order 288.14018; via `lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant`).
  Both are strictly earlier, so adding them changes no order.
- Non-blocking coverage deltas from Step 3a remain open for the serial owner:
  Laugesen chs. 11/13/21, Grafakos pp. 328–329 (Prop. 5.1.17 / Ex. 5.1.18), and
  Williams §§3.1–3.4 could receive explicit dispositions in the coverage record.

### Open obligations at handoff

- Re-run `frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`
  after batch 23's YAML defect is fixed; batch-11's own input is final.
- Step 4 owns the two `requires`-closure amendments above.
- No commit, no `--owner` receipt, and no judge/audit stamp was applied by this
  worker; the pages stay `status: draft`.
