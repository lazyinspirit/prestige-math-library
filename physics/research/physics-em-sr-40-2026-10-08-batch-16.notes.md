# Batch 16 notes — `em-expanded-analysis-prerequisites` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **310**, B page order **320**, category
`classical-electromagnetism-mathematics`, library `mathematics`. Final inventory:
**25 A items + 1 B item**, all 26 recorded `ready` with current dependency hashes.
No item file, page, plan, published item, engine state or verdict was edited.
Files written: the batch manifest, coverage, cross-batch input, the 26
`step1-*` readiness records, the tool-refreshed unified ledger, and this note.
The binding owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`
and the Step-1 drift report `research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md`
were read first.

## Design vs plan, and the F3/F4 placement conflict (resolved by binding direction)

Design section `research/plan-classical-electromagnetism-track.md` L946–L1508 (the
"Em Expanded Analysis Prerequisites" reservation quoting `proposed-inventory.json`
and the `completed-expansion-arguments.md` / `exterior-scattering-arguments.md`
sections). Compared with `research/plan-spec.json` entries 310/320:

- page ids, kind, orders (310/320), category, library `mathematics`, titles,
  companion links and the declared 18-entry `requires` agree exactly. **No plan
  conflict** on page metadata.
- the design's A inventory has **27** items. The binding owner direction and the
  recorded Step-1 drift report place the **exterior F3/F4 chain** —
  `lem-em-exterior-outgoing-scalar-uniqueness`,
  `lem-em-exterior-vector-helmholtz-mixed-boundary-existence`, together with
  `thm-bounded-potential-weak-unique-continuation-in-three-dimensions` and
  `lem-three-dimensional-radial-carleman-integer-weight` — on
  **`em-boundary-and-spectral-prerequisites` (order 313, batch 18)**, "overriding
  the proposal inventory's older homes for the F3/F4 chain" (drift report,
  `em-expanded-analysis-prerequisites` and `em-boundary-and-spectral-prerequisites`
  verdicts). They are therefore **not** scaffolded here; this batch keeps the 25
  remaining A items including `lem-em-helmholtz-boundary-representation` (whose
  deps P3/F1/cor-second-green are all on this page or published). No claim is
  dropped: F3/F4 and the UCP/Carleman suppliers remain in
  `research/first-principles-2026-10-03/classical-electromagnetism/closure-ledger.json`
  and must be scaffolded with the page-313 inventory by batch 18. The design's
  closing "Particle-curve variation is completed in V1" is respected: V1 is
  `lem-em-particle-curve-variation`, scaffolded here.
- the design's `dependency_level` labels were computed under the design's
  "in-design deps" convention. Labels in this manifest are the tool's whole-run
  in-run labels (all current manifests), which differ for one item, as expected
  and deliberately: `lem-em-particle-curve-variation` is **level 12**
  (the in-run SR chain `thm-sr-proper-time-and-observer-decomposition` already
  carries level 11), not the design's 2. All other labels equal the design's
  labels after recomputation.

## Inventory decisions (recorded, not silent)

Every item's `statement` and `strategy` were rebuilt from the exact research
argument (`completed-expansion-arguments.md` U1/H1/R1/D2/D3/S1/S2/S3/V1/B1–B7/G2/G3/P3/W1/H2/H3;
`exterior-scattering-arguments.md` F1/F2/F6; `mathematical-example-verifications.md#outgoing-dtn`),
with hypotheses, conventions and caveats preserved. Changes to the design's
declared dep arrays, each because the recorded proof actually consumes the
suppler or because the design's dep block was not item-specific:

1. **Additions where the recorded proof names a tool not in the design list**
   (all published on disk, all read for statement/hypotheses before use):
   `def-interval`, `def-derivative`, `def-continuity-real`, `def-abs-value`,
   `lem-of-triangle-inequality` (U1); `def-complex-domain`, `thm-substitution`,
   `thm-principal-inverse-tangent-calculus`,
   `thm-weierstrass-m-test-for-function-series`, `def-series-of-real-functions`
   (H1); `def-vector-valued-derivative-and-integral`,
   `thm-integral-triangle-inequality`, `thm-intermediate-value` (R1);
   `def-complex-domain`,
   `thm-existence-of-complex-line-integrals-on-rectifiable-paths`,
   `thm-dominated-convergence`, `thm-integration-by-parts` (D2);
   `def-bounded-c-k-domain-and-boundary-charts`, `thm-fubini-…`,
   `thm-tonelli-…`, `cor-cauchy-schwarz-inequality-for-l-two`,
   `thm-finite-jensen-inequality`, `def-connected-space`, `def-compact-space`
   (B5); `cor-zero-derivative-implies-constant` (F1);
   `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
   `def-orthonormal-family-…`, `thm-fubini-…`, `thm-tonelli-…`,
   `cor-cauchy-schwarz-inequality-for-l-two`,
   `thm-existence-and-uniqueness-of-a-maximal-ode-solution`,
   `def-distributional-derivative` (G2); `lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes`,
   `def-cross-product-in-r3`, `def-euclidean-inner-product`,
   `thm-integral-triangle-inequality`,
   `cor-multivariable-taylor-formula-with-peano-remainder`,
   `lem-the-divergence-and-curl-of-a-cross-product` (S3); `def-laplacian-of-a-c2-function`,
   `thm-integral-triangle-inequality` (P3); `thm-gram-schmidt-orthonormalisation`,
   `def-orthonormal-family-…`, `def-laplacian-of-a-c2-function` (H2);
   `def-surface-integral-on-a-compact-c-one-hypersurface`,
   `def-laplacian-of-a-c2-function`, `thm-ftc-first-part`,
   `thm-algebra-of-derivatives` (W1); `cor-cauchy-schwarz-inequality-for-l-two`,
   `def-laplacian-of-a-c2-function` (H3); `def-surface-integral-…` (F6);
   `def-sr-regular-causal-curve-and-worldline` (V1);
   `def-fractional-sobolev-space-on-a-compact-c-one-boundary`,
   `thm-lp-trace-operator-on-a-bounded-c-one-domain` (B4/B6);
   `cor-cauchy-schwarz-inequality-for-l-two` (B2/B3/B7); `def-hilbert-space`,
   `def-complete-metric-space`, `thm-parallelogram-law`, `def-bounded-bilinear-map`,
   `def-operator-norm` (B2); `cor-cauchy-schwarz-inequality-for-l-two`,
   `thm-newton-leibniz-with-interior-derivative` (B1); `thm-extension-theorem-for-bounded-smooth-domains`,
   `cor-first-green-identity-on-a-bounded-c-one-domain`, `def-compact-linear-operator`
   (G3).
2. **D2 preserved in its promised matrix form.** The design's D2 is a real
   matrix kernel; the statement keeps `K:[0,∞)→R^{d×d}` with entrywise
   integrability and entrywise dispersion formulas, scalar case `d=1`. This is
   the design's claim, not a narrowing.
3. **No design dep was dropped where the argument uses it**; the design's
   remaining deps are kept verbatim. No claim was weakened and no item was
   omitted except the owner-directed F3/F4 relocation above.
4. **B item.** `ex-em-outgoing-dtn-and-pec-zero-mode-boundaries` keeps the
   design's two deps and adds the four published suppliers its two explicit
   computations use (curl-of-gradient, harmonicity of the fundamental solution,
   algebra of derivatives, entire exponential). It is homed on the B page, and
   no A item depends on it.
5. Hard cap: 25 ≤ 100 items on the A page; no split needed.

## Dependency verification (actual uses, not declared edges)

All 101 distinct dep targets resolve: 81 published imported items on disk and 20
in-run items (14 own items plus six cross-batch suppliers, listed below). The
published suppliers were read for statement, hypotheses, conventions and
direction: the mean-value theorem, triangle inequality, Sobolev spaces
(`def-sobolev-space-wkp-and-its-norm`, `def-wkp-zero-as-a-sobolev-closure`,
`thm-sobolev-spaces-are-banach-spaces`), the trace chain
(`thm-sharp-trace-theorem-for-w-one-p`,
`thm-bounded-right-inverse-for-the-sobolev-trace`,
`thm-kernel-of-the-trace-is-w-one-p-zero`,
`def-fractional-sobolev-space-on-a-compact-c-one-boundary`,
`thm-lp-trace-operator-on-a-bounded-c-one-domain`), Riesz representation,
extension and Fourier characterisation, Fredholm alternative, compact
self-adjoint spectral theorem, interior derivative estimates, Stone–Weierstrass,
approximate identities, Fubini/Tonelli, Cauchy–Schwarz L², Jensen, Newton–Leibniz,
FTC, Green identities, divergence theorem, distributional derivative, and the
in-run statements of `lem-em-coulomb-dipole-remainder`,
`lem-em-parameter-integrals`, `def-sr-affine-minkowski-model`,
`def-sr-regular-causal-curve-and-worldline`,
`thm-sr-proper-time-and-observer-decomposition` and
`lem-em-fundamental-variation-lemma`. No missing, circular, forward or inadequate
dependency was found; no cycle exists (the levels check validates the full
whole-run item graph).

Cross-batch item edges (all recorded with review rows in
`research/physics-em-sr-40-2026-10-08-batch-16.cross-batch-dependencies.json`,
9 rows: 2 page edges + 7 item edges):

| consumer | supplier | supplier home |
|---|---|---|
| `lem-em-magnetic-dipole-remainder` | `lem-em-coulomb-dipole-remainder` | batch 13 (ready, level 0) |
| `lem-em-outgoing-source-helmholtz-and-diffraction` | `lem-em-coulomb-dipole-remainder` | batch 13 |
| `lem-em-spherical-mean-wave-identity` | `lem-em-parameter-integrals` | batch 13 |
| `lem-em-particle-curve-variation` | `def-sr-affine-minkowski-model` | batch 1 (level 3) |
| `lem-em-particle-curve-variation` | `def-sr-regular-causal-curve-and-worldline` | batch 3 |
| `lem-em-particle-curve-variation` | `thm-sr-proper-time-and-observer-decomposition` | batch 3 (level 11) |
| `lem-em-particle-curve-variation` | `lem-em-fundamental-variation-lemma` | batch 15 (level 1) |
| page `em-expanded-analysis-prerequisites` | `em-variational-mathematical-prerequisites` | batch 15 |
| page `em-expanded-analysis-prerequisites` | `sr-worldlines-and-clocks` | batch 3 |

## AC declarations and exact uses

- `lem-em-zero-boundary-coercivity` declares AC and uses it only through the
  published Banach-space statement of `thm-sobolev-spaces-are-banach-spaces`;
  the coordinate-line proof itself is choice-free.
- `lem-em-mean-zero-coercivity-on-a-c-one-domain` declares AC (through
  `thm-smooth-up-to-the-boundary-density-on-smooth-domains`) and Countable
  Choice (declared by `lem-c-k-boundary-flattening-preserves-wkp-locally`).
- `lem-em-symmetric-coercive-variational-solver` declares Countable Choice for
  the minimising-sequence choice; no Zorn-type argument and no Lax–Milgram
  citation.
- `lem-em-prescribed-fractional-dirichlet-existence` and
  `lem-em-weak-neumann-and-transmission-existence` inherit AC through the trace
  chain (`thm-sharp-trace-theorem-for-w-one-p`,
  `thm-bounded-right-inverse-for-the-sobolev-trace`,
  `thm-kernel-of-the-trace-is-w-one-p-zero`) and through
  `lem-em-lift-specified-dirichlet-existence` → the solver.
- `lem-em-smooth-domain-elliptic-regularity` and
  `lem-em-smooth-pec-cavity-spectral-closure` inherit the AC/Countable-Choice
  declarations of Riesz representation, extension, Fourier characterisation and
  the spectral theorem through those suppliers. No item touches
  `deferred-set-theory-beyond-choice`; no Foundation path is involved.

## Source harvest

Six sources fetched and stamped (`source-fetch-check --stamp`: 6/6
fetch-verified, 0 drops; `url-sweep`: 6/6 live):

| source | kind | stamp |
|---|---|---|
| J. K. Hunter, Notes on PDEs (UC Davis, 242 pp.) | lecture-notes | 1,597,256 B, 242 pp., `0dbade1806f7a1ea` |
| S. Dyatlov, 18.155 notes (MIT, 266 pp.) | lecture-notes | 4,036,967 B, 266 pp., `9c03576df76ce8ad` |
| NIST DLMF §18.12 | reference-work | 197,961 B HTML, `b21008edf6404e4f` |
| NIST DLMF §14.30 | reference-work | 188,125 B HTML, `d5eb23701a7f971e` |
| NIST DLMF §10.47 (+§10.50) | reference-work | 203,893 B HTML, `d35b7997bfe0ba90` |
| D. Tong, Kinetic Theory ch. 4 (24 pp.) | lecture-notes | 536,753 B, 24 pp., `1fc4b960e2e9da00` |

26 harvested results, all disposed in the coverage file: 10 `included`
(Poincaré inequality → B1; weak Dirichlet existence → B3; interior/boundary
regularity → B7; Newtonian potential → S1; Legendre generating function → H1;
spherical-harmonic addition theorem → H2; spherical Bessel equation and
standard solutions → F1; Kramers–Kronig derivation → D2), 4 `already-published`
(Sobolev spaces and trace chain, Green identities, interior derivative
estimates), 6 `inline`, 6 `out-of-scope` (weak wave solutions, Hodge theory,
oscillator examples, Fourier-on-distributions), each with a written reason.
`coverage-checklist --require-destination` reports 0 errors and the honest
warning `coverage-low-yield ... 10/26 harvested results scaffolded`: the page's
inventory was fixed by the design before the harvest, so most source rows
corroborate rather than mint items. Convention notes: Hunter/Dyatlov use the
same weak-solution and Sobolev conventions as the imported suppliers; DLMF
14.30.9 is stated for normalized complex harmonics and the pair states the
equivalent real-basis form; Tong's `e^{-iωt}`-era contour derivation matches the
pair's analyticity hypotheses, with the pair's own stronger integrability
hypotheses on `K`.

## Checks run (actual results)

- `manifest-deps` (batch): 26 items, 0 missing, 0 errors. Whole run: same, 0 errors.
- `content-policy --manifest-only` (batch alone): 7 `batch-dependency-missing`
  errors for the cross-batch in-run suppliers, which resolve in whole-run scope.
  Whole run (all 40 manifests): **117 items, 0 errors, 0 warnings**.
- `item-dependency-levels check --run` (observed 2026-10-09 ~01:06, while sibling
  batches were still in flight): 66 `empty scaffold inventory` errors for the
  not-yet-scaffolded batches; **no label, dep-shape or cycle error**; all 26
  new labels equal the computed whole-run levels (0×11, 1×6, 2×4, 3×2, 4×1,
  5×1, 6×1, 12×1).
- `step1-decisions check --run` (same time window): 117/117 then-declared run
  items ready; none of this
  batch's items or pages outstanding (the residual work list is exactly the 66
  empty future pages).
- `coverage-checklist --require-destination`: 1 page, 26 harvested results,
  0 errors, 1 low-yield warning (explained above).
- `source-fetch-check --stamp`: 6/6 fetch-verified (6 stamped); check mode 6/6
  resolved, 0 drops. `url-sweep --coverage ... --recover`: 6/6 live, 0 failed,
  0 recoverable (output in `/tmp`, not engine state).
- `validate-plan research/plan-spec.json` (page-level): exit 0; note that 578
  planned pages carry no item list (Step 4).
- `validate-plan research/plan-spec.json --run physics-em-sr-40-2026-10-08`:
  **FAIL**, exit 1 — 10 `undeclared-prereq` errors, all on this batch's A page:
  see the escalation below. 10 `redundant-prereq` warnings elsewhere in the run.
- `extcheck --quiet`: exit 0. `manifest-integrity --run`: 80 pages owed, 80 in
  the manifests, no scope drift. `manifest-deps`/`content-policy` whole-run: above.
- `frontier-dependency-ledger refresh`: batch input present with 9 rows; batch
  16 listed reviewed; 0 orphaned reviews; every declared edge carries its review row.
- `physics-check --plan research/plan-spec.json`: **FAIL**, exit 1, with
  `mathematics import changed: items/thm-hilbert-basis-theorem.md; reconcile and
  re-import before a new run` — the pre-existing owner-held import drift first
  recorded by batch 15 (original now `7fc568a1…`, mtime 2026-10-08 23:28:34 +1100;
  pin and snapshot `477f7015…`). Not caused by this batch and not repairable by a
  worker; no item here reaches that theorem through any dependency path.

## Unresolved findings / escalation (owner action)

1. **Plan-context escalation: 10 additional genuinely used published supplier
   homes must be declared for page 310 before the run's plan gate can pass.**
   `validate-plan --run` fails solely because the canonical plan's `requires`
   closure for `em-expanded-analysis-prerequisites` predates this batch's exact
   dep reading. Exact table (page → supplier item → consumer items in this batch;
   plan orders are the current plan-spec orders):

   | missing home page | order | supplier items used | consumers |
   |---|---|---|---|
   | `completeness-and-uniform-continuity` | 8 | `def-complete-metric-space` | `lem-em-symmetric-coercive-variational-solver` |
   | `picard-lindelof-and-first-order-odes` | 43 | `thm-existence-and-uniqueness-of-a-maximal-ode-solution` | `lem-em-rectangular-pec-energy-completeness` |
   | `product-measures-and-the-fubini-tonelli-theorems` | 46 | `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-tonelli-theorem-for-sigma-finite-product-spaces` | `lem-em-mean-zero-coercivity-on-a-c-one-domain`, `lem-em-rectangular-pec-energy-completeness` |
   | `uniform-convergence-of-functions` | 77 | `thm-weierstrass-m-test-for-function-series`, `def-series-of-real-functions` | `lem-em-convergent-legendre-kernel` |
   | `compactness` | 80.0854 | `def-compact-space` | `lem-em-mean-zero-coercivity-on-a-c-one-domain` |
   | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | 80.8780 | `cor-cauchy-schwarz-inequality-for-l-two` | `lem-em-mean-zero-coercivity…`, `lem-em-rectangular-pec-energy-completeness`, `lem-em-zero-boundary-coercivity`, `lem-em-lift-specified-dirichlet-existence`, `lem-em-ball-poisson-series-boundary-convergence`, `lem-em-weak-neumann-and-transmission-existence`, `lem-em-smooth-domain-elliptic-regularity` |
   | `further-trigonometric-identities-and-inverses` | **not in plan-spec** | `thm-principal-inverse-tangent-calculus` | `lem-em-convergent-legendre-kernel` |
   | `contour-integration` | **not in plan-spec** | `thm-existence-of-complex-line-integrals-on-rectifiable-paths` | `lem-em-integrable-causal-dispersion` |
   | `convexity` | **not in plan-spec** | `thm-finite-jensen-inequality` | `lem-em-mean-zero-coercivity-on-a-c-one-domain` |
   | `wave-energy-finite-propagation-and-huygens` | **not in plan-spec** | `lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes` | `lem-em-magnetic-dipole-remainder` |

   Six entries are declared plan pages whose `requires` need this page added to
   their consumer's closure (or added to page 310's `requires`); four are
   published library pages **absent from plan-spec** and need P-context entries
   plus the same declaration. All ten are pure mathematical pages at earlier
   orders. This is a plan-metadata declaration gap, not an item defect: every
   supplier resolves on disk, was read, and its use is recorded in the strategy
   text and the readiness evidence. Per the owner direction ("declare any
   additional genuinely used published supplier homes through the ordinary
   escalation path"), no plan or `requires` field was edited by this worker;
   owner/operator reconciliation and the native same-scope sync are required
   before the Step-1/2 plan gate can pass. If the native flow instead expects
   the scaffolder to write these into the manifest `requires`, the exact list
   above is ready to apply verbatim.
2. **Import drift** (`thm-hilbert-basis-theorem.md`) blocking whole-run
   `physics-check`: owner re-import action outside the active run; unchanged from
   batch 15 and unrelated to this batch.
3. **Coverage low-yield warning** (10/26 `included`): explained above; the
   declines are named rows with reasons, and this warning is for Alpha's Step-5
   confirmation, not an omission claim.

No defective published prerequisite was found among the 81 published suppliers
used. No test, judgment or review stamp is claimed. Owner/operator reconciliation
and the full engine gate follow construction; Step 3 provides the independent
mathematical review.
