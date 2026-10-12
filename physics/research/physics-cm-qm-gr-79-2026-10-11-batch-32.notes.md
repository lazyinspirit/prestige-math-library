# Batch 32 notes — `cm16-stability-perturbations-and-chaos` / `…-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-32, covers 32.
Step 1 complete initial authoring only; a readiness record is not independent
mathematical approval (Steps 2–3 review follows). Inputs read before
construction: `CLAUDE.md`, `SCHEMA.md`, `../PHYSICS-CONTENT-MODEL.md`,
`WORKFLOW.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
design record `research/plan-non-relativistic-classical-mechanics-track.md`
(the “Stability, perturbations and chaos” section, page order 143),
`research/plan-spec.json`, the first-principles inventory
`research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/proposed-inventory.json`
and its local proof sections D1, E2, E12, E16, E27, E28, M7, M10
(`expansion-proofs.md`, `mathematical-prerequisites.md`,
`mechanical-horseshoe.md`, `analytic-kam.md`), the four complete-work reader
reports (`reader-tong`, `reader-likharev`, `reader-sicm`, `reader-nearing`),
and the batch-dependency-levels file
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 32 is dependency level 10, requires batches 13, 14, 25 and 30, all
complete).

## Scope built

- A page `cm16-stability-perturbations-and-chaos` (order 143, category
  `non-relativistic-classical-mechanics`, `library: physics`), 12 items:
  5 physical definitions (`def-cm16-flow-equilibria-and-invariant-sets`,
  `def-cm16-stability-and-hyperbolicity-concepts`,
  `def-cm16-finite-time-growth-rates`,
  `def-cm16-stroboscopic-and-poincare-maps`,
  `def-cm16-chaos-list-for-model-maps`), 6 physics theorems
  (`pthm-cm16-energy-stability-and-instability`,
  `pthm-cm16-variational-equation-and-linearization`,
  `pthm-cm16-hyperbolic-linearization`, `pthm-cm16-two-rotor-kam`,
  `pthm-cm16-separatrix-splitting-and-horseshoe`,
  `pthm-cm16-recurrence-for-finite-volume-models`) and 1 scope remark
  (`rem-cm16-scope-of-stability-and-chaos`).
- B page `cm16-stability-perturbations-and-chaos-examples` (order 144),
  8 leaf items: 6 examples (`ex-cm16-pendulum-equilibrium-checks`,
  `ex-cm16-linearization-and-growth-checks`,
  `ex-cm16-isotropic-oscillator-return-map-check`,
  `ex-cm16-pulse-horseshoe-data-check`, `ex-cm16-recurrence-volume-check`,
  `ex-cm16-two-rotor-kam-units-check`) and 2 counterexamples
  (`cex-cm16-positive-growth-is-not-chaos`,
  `cex-cm16-stability-does-not-imply-attraction`). Nothing outside the pair
  depends on these eight.
- Page carriers
  `library/non-relativistic-classical-mechanics/cm16-stability-perturbations-and-chaos.md`
  and `…-examples.md` are nonempty, carry the `items`/`examples` lists,
  `requires`, order, kind, category, library and companion metadata, and use
  the plan’s exact transitive `requires` sets (A: `cm-math-chaos`,
  `cm-math-kam`, `cm09-coupled-oscillations-and-approximation`,
  `cm14-hamilton-jacobi-and-integrability`; B: the A page). No
  `_pathway.md` is created here (a closeout artifact).
- Design `contract_text` to delivered IDs: `cm16-flow` →
  `def-cm16-flow-equilibria-and-invariant-sets`;
  `cm16-equilibrium-stability` →
  `def-cm16-stability-and-hyperbolicity-concepts`;
  `cm16-energy-stability` → `pthm-cm16-energy-stability-and-instability`;
  `cm16-variational-equation` →
  `pthm-cm16-variational-equation-and-linearization`;
  `cm16-finite-time-growth` → `def-cm16-finite-time-growth-rates`;
  `cm16-poincare-map` → `def-cm16-stroboscopic-and-poincare-maps`;
  `cm16-chaos` → `def-cm16-chaos-list-for-model-maps`;
  `cm16-hyperbolicity` → `pthm-cm16-hyperbolic-linearization`;
  `cm16-kam` → `pthm-cm16-two-rotor-kam`;
  `cm16-separatrix-splitting` →
  `pthm-cm16-separatrix-splitting-and-horseshoe`;
  `cm16-recurrence` → `pthm-cm16-recurrence-for-finite-volume-models`. The
  design’s provisional IDs are placeholders; the delivered IDs use the run’s
  kind-prefix conventions, and the delivered page adds a scope remark (the
  design’s `A_budget` of 75 is an allowance, not a required count).
- Design `B_and_sources` content is delivered: the quantified numerical
  trajectories appear only as declared-data checks with exact surd/rational
  values and are explicitly not experiments or analytic chaos proofs; the
  phase-flow/energy/stability/chaos material is supplied by the complete
  treatments (Stewart Ch5 and Ch7 with corrected definitions, Likharev Ch5
  and Ch9, SICM Ch4 and §7, Tong Ch4) plus the complete primary mathematical
  treatments (Poeschel’s KAM lecture, de la Llave’s KAM tutorial, ChaosBook,
  Devaney–Nitecki, Teschl).

## Design local proof sections are consumed, not re-authored

The design’s local mathematical proof sections are **already authored in this
run** as mathematical items and are consumed as suppliers:

| design | delivered mathematical supplier(s) |
|---|---|
| D1, M7, M10, E16 | `def-cm-equilibrium-and-lyapunov-stability`, the `cm-math-dynamics` items (`thm-cm-energy-stability-of-a-strict-minimum`, `prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium`, `thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism`, `thm-cm-exponential-stability-by-a-lyapunov-quadratic-form`, `thm-cm-instability-of-a-hyperbolic-saddle`), and `thm-cm-compact-continuation-for-locally-lipschitz-odes` |
| E2 | `thm-cm-smooth-dependence-and-the-variational-equation`, `thm-cm-finite-time-linearization-error-bound`, `thm-cm-compact-continuation-for-locally-lipschitz-odes` |
| E12 | `thm-poincare-recurrence-for-finite-measure-preserving-systems` (published canonical), `def-cm-topologically-mixing-dense-periodic-and-sensitive-maps`, `def-bilateral-symbol-and-bounded-sequence-space` |
| E27 | the `cm-math-chaos` horseshoe items (`def-smooth-periodic-oscillator-pulse-model`, `lem-coded-quadratic-recurrence-is-a-contraction`, `lem-rescaled-pulse-map-is-c-one-close-to-kick`, `thm-explicit-perturbed-horseshoe-and-transversality`, `thm-smooth-fixed-mass-mechanical-horseshoe`, `def-stable-unstable-cones-and-line-slopes`) |
| E28 | the `cm-math-kam` items (`thm-positive-measure-analytic-kam-family`, `def-holomorphic-kam-domain-and-diophantine-labels`, `lem-diophantine-resonance-slab-measure`) |

The physics items therefore author the model reading (definitions, model
constants and units, hypothesis verification, scaling transfer, scope and
empirical qualifications) on top of those carriers; no mathematical core is
re-proved or weakened.

## Dependency graph, levels and construction order

Items were authored in prerequisite order, suppliers before consumers. Levels
were recomputed mechanically by
`tools/physics-support/item-dependency-levels.mjs check --run …` over the run
manifests and recorded on every item and manifest record: the check reports
**no cm16 finding** (the run-wide report still shows other batches’ errors,
below).

| item | level |
|---|---|
| `def-cm16-flow-equilibria-and-invariant-sets` | 10 |
| `def-cm16-stability-and-hyperbolicity-concepts` | 11 |
| `def-cm16-stroboscopic-and-poincare-maps` | 11 |
| `pthm-cm16-energy-stability-and-instability` | 12 |
| `pthm-cm16-variational-equation-and-linearization` | 12 |
| `def-cm16-finite-time-growth-rates` | 12 |
| `def-cm16-chaos-list-for-model-maps` | 12 |
| `pthm-cm16-hyperbolic-linearization` | 12 |
| `pthm-cm16-two-rotor-kam` | 12 |
| `pthm-cm16-separatrix-splitting-and-horseshoe` | 13 |
| `pthm-cm16-recurrence-for-finite-volume-models` | 23 |
| `rem-cm16-scope-of-stability-and-chaos` | 24 |
| `ex-cm16-pendulum-equilibrium-checks` | 13 |
| `ex-cm16-linearization-and-growth-checks` | 13 |
| `ex-cm16-isotropic-oscillator-return-map-check` | 13 |
| `cex-cm16-positive-growth-is-not-chaos` | 14 |
| `ex-cm16-pulse-horseshoe-data-check` | 14 |
| `cex-cm16-stability-does-not-imply-attraction` | 17 |
| `ex-cm16-recurrence-volume-check` | 24 |
| `ex-cm16-two-rotor-kam-units-check` | 13 |

Every in-run supplier was authored earlier in the run; no cycle, forward edge
or missing supplier was introduced, and `depcheck` reports the selected
item/page checks and prerequisite cycle checks passing with no
`cited-not-in-deps` warning.

## Axiom-of-choice branches

- Choice-free: the five definitions, the six theorems except the recurrence
  theorem, the scope remark, `ex-cm16-pendulum-equilibrium-checks`,
  `ex-cm16-linearization-and-growth-checks`,
  `ex-cm16-isotropic-oscillator-return-map-check`,
  `ex-cm16-pulse-horseshoe-data-check`,
  `cex-cm16-positive-growth-is-not-chaos`,
  `cex-cm16-stability-does-not-imply-attraction` and
  `ex-cm16-two-rotor-kam-units-check`. Their suppliers use the real spectral
  theorem, finite-dimensional algebra, explicit estimates, finite
  constructions and the calculus/ODE suppliers, with no arbitrary selection.
- Countable choice ($\mathrm{AC}_\omega$):
  `pthm-cm16-recurrence-for-finite-volume-models` states the assumption and
  declares `def-countable-choice`, inherited from `pthm-cm13-liouville`
  (whose measure-preservation clause uses the change-of-variables theorem);
  `ex-cm16-recurrence-volume-check` inherits it explicitly through [L1].
- Countable and dependent choice: `pthm-cm16-separatrix-splitting-and-horseshoe`
  states both assumptions and declares `def-countable-choice` and
  `def-dependent-choice`, inherited from
  `thm-smooth-fixed-mass-mechanical-horseshoe`; the pulse-data check uses only
  its stated constants and declares no choice.
- No item consumes a recorded or unproved set-theory-beyond-choice item, and
  no incompatible-axiom branch is created; the `foundations` exclusion path is
  not touched.

## Sources, harvest and fetch verification

- Coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-32.coverage.json`
  records 44 harvested results over 9 distinct works: Likharev (complete
  textbook), Stewart (complete course notes), SICM (complete book, 2nd ed.),
  Tong (complete notes), Poeschel (complete KAM article), de la Llave
  (complete KAM tutorial), ChaosBook (complete monograph), Devaney–Nitecki
  (complete paper) and Teschl (complete book). Every page has at least two
  independent treatments, including full books/lecture-note sets, and the
  primary KAM and horseshoe sources are independent of each other.
- `source-fetch-check.mjs --stamp`: **18/18 source(s) fetch-verified, 0
  documented drops** (Likharev 252 pages, Stewart 199, SICM zip 4 201 563
  bytes, Tong 139, Poeschel 33, de la Llave 135, ChaosBook 1153,
  Devaney–Nitecki 10, Teschl 364; stamps carry byte counts, sha256-16 and
  kind). Check mode after stamping: **18/18 resolved**. No retrieval failure
  or source-recovery retry was needed, so no `source_resolution` drop or owner
  escalation was required.
- `coverage-checklist.mjs`: **2 pages, 44 harvested results, 0 errors, 0
  warnings**. Each declined result carries a specific reason; the
  mathematical-core results assigned to the in-run mathematical pages are
  recorded as `deferred` with their exact on-disk page destinations
  (`cm-math-chaos`, `cm-math-kam`).
- Dispositions of the design’s named published canonical mathematical
  suppliers: `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`
  consumed by `pthm-cm16-energy-stability-and-instability`;
  `thm-poincare-recurrence-for-finite-measure-preserving-systems` consumed by
  `pthm-cm16-recurrence-for-finite-volume-models`;
  `thm-smooth-dependence-and-the-variational-equation` consumed by
  `pthm-cm16-variational-equation-and-linearization` and
  `pthm-cm16-recurrence-for-finite-volume-models`;
  `thm-jordan-canonical-form-from-pid-module-structure`,
  `thm-picard-lindelof-local-existence-and-uniqueness`,
  `thm-gronwall-integral-inequality`,
  `cor-second-order-taylor-expansion-with-the-hessian`,
  `lem-cauchy-estimates-on-concentric-subdiscs`,
  `thm-cauchy-integral-formula-circle`,
  `thm-real-analytic-inverse-and-implicit-function-theorems`,
  `thm-smooth-dependence-of-ode-solutions-on-parameters`,
  `thm-banach-fixed-point` and
  `thm-fundamental-theorem-of-algebra-minimum-modulus-proof` are consumed
  through the already-authored in-run mathematical supplier pages
  (`cm-math-dynamics`, `cm-math-approximation`, `cm-math-chaos`,
  `cm-math-kam`) and are not re-imported directly by this page;
  `thm-fundamental-theorem-of-algebra-minimum-modulus-proof` is not needed
  directly because the hyperbolicity computation uses the real spectral
  theorem to produce the eigenvalues instead of a complex root existence
  argument.

## Design versus plan-spec, and conflicts recorded

1. **Page `requires`.** The carriers and manifest use exactly the plan-spec
   transitive sets; `validate-plan` shows the two cm16 rows with the intended
   prerequisites and no cm16 warning or error.
2. **Design source line.** The design’s `B_and_sources` line (“S Ch4,
   §§6.3–6.5; L Ch9; W Ch7”) is realised as SICM §§4.3, 4.6, 6.3–6.5, 7.2,
   7.4, Likharev §§3.2–3.3, 5.1–5.3, 5.6, Ch9, Stewart Ch5 and Ch7, and Tong
   Ch4 §§4.2.3, 4.5–4.7 (the HJ subsection is out of scope here and recorded
   in coverage), consistent with the four-work table in the same design.
3. **Design’s published-supplier list.** Recorded above; the two suppliers
   consumed directly are the spectral theorem and the recurrence theorem, with
   the remaining named suppliers reached through the in-run mathematical
   pages rather than by fresh direct import.
4. **Budget.** The design’s A/B allowances (75/30) are not item targets; the
   delivered 12/8 keep every promised topic and add the scope remark, with the
   mathematical core on the supplier pages as the design’s own contract text
   prescribes.

## Local closure, proof routes and recorded decisions

- Every claim is proved or sourced locally; no new cross-batch prerequisite
  pair was needed and no escalation was raised.
- `pthm-cm16-energy-stability-and-instability` proves: strict minimum ⇒
  Lyapunov stability (supplier); negative Hessian eigenvalue ⇒ explicit
  unbounded variational solution and linear instability (spectral theorem plus
  matrix-square-root computation); negative definite Hessian ⇒ linearisation
  hyperbolic with a positive eigenvalue and nonlinear instability (instability
  theorem); exact energy conservation ⇒ no asymptotic stability whenever
  different-energy data accumulate, with the strict-minimum case stable but
  not attracting. Degenerate Hessians and mixed saddles are explicitly
  excluded from nonlinear conclusions.
- `pthm-cm16-variational-equation-and-linearization` transfers the
  smooth-dependence theorem (flow derivative solves the variational equation,
  exponential Lipschitz bound), derives the constant-metric second-order form
  $M\eta''=-D^2U(q(t))\eta$, and states the supplier’s finite-time error bound
  under declared quantitative remainder and growth bounds.
- `pthm-cm16-hyperbolic-linearization` transfers the dichotomy and the two
  stability/instability theorems to the model’s equilibrium, with the chart
  dependence of the spectrum and the centre-case gap recorded.
- `pthm-cm16-separatrix-splitting-and-horseshoe` defines the smooth
  $P$-periodic one-coordinate model, proves the exact scaling to the
  dimensionless pulsed equation, transfers the supplier conjugacy through the
  linear scaling, and records the explicit coded-state bounds
  ($\lvert Q\rvert\le R\ell_0$, $\lvert\Pi\rvert\le m\ell_0\omega_0R$,
  $R=\sqrt a+3$), with the countable/dependent choice assumptions declared.
- `pthm-cm16-two-rotor-kam` verifies the analytic KAM hypotheses for the
  two-rotor potential with explicit domains and constants, applies the
  supplier theorem, restores units and records the scope (no claim about the
  complement, no empirical smallness, no computed constant $c$).
- `pthm-cm16-recurrence-for-finite-volume-models` combines the phase-volume
  preservation theorem with the finite-measure recurrence theorem: a bounded
  flow-invariant Borel set of finite phase volume has almost-everywhere
  infinite unit-time returns, under the inherited countable choice.
- B-page items: the pendulum check computes the strict minimum and the
  imaginary frequencies, the negative Hessian and the real rates, and the
  failure of attraction; the linearisation/growth check computes the rotation
  flow with zero rates and the repulsive flow with rates $\pm1$ and exponent
  $1$; the isotropic-oscillator check computes the half-period stroboscopic
  map $-\mathrm{id}$, the identity return map to the upper section, dense
  periodic points and the failure of mixing/sensitivity; the pulse check
  evaluates $R=13$, radicands $[74,126]$, contraction $1/\sqrt{74}$, fixed
  points $1\pm\sqrt{101}$, the kick composition and the physical bounds; the
  recurrence check realises the hypotheses on the radial quartic one-label
  model of the flat Cartesian presentation and shows the flat model fails
  them; the two-rotor units check verifies the scaling
  identities, the physical frequencies, the exclusion of rational labels and
  equal-rescaling invariance. The counterexamples refute positive-growth ⇒
  chaos and stability ⇒ attraction by explicit complete classifications.
- No item reports a measurement, uncertainty or empirical comparison; all
  numbers are declared model data. Decimal numerals were removed from all
  numbered steps (the pendulum check now uses the exact datum
  $g=981/100\ \mathrm{m\,s^{-2}}$) so that no decimal token collides with the
  proof-contract step grammar.

## Checks actually run (on the final carriers)

- `precheck.mts` on all 20 items: **14 checked, 0 failing** (the 5 definitions,
  the scope remark and the 6 non-proof-free kinds that carry no phase body are
  reported not-applicable).
- `proof-layout.mjs` on all 20 items: **20 items, 67 steps, 0 defects**.
- `rendercheck.mjs` on all 20 items and 2 page carriers: **22 files, OK**
  (after `fix-multiline-display.mjs` joined 8 hard-wrapped display blocks
  without changing any character of the mathematics).
- `content-policy.mjs` (batch manifest): **20 scoped items, 0 errors, 0
  warnings**.
- `manifest-deps.mjs`: **20 items, 0 normalized, 0 errors**;
  `manifest-integrity.mjs --run …`: **158 pages owed, 158 in the manifests, no
  scope drift**.
- `proof-contract.mjs --strict` on
  `research/physics-cm-qm-gr-79-2026-10-11-batch-32.proof-contracts.json`:
  **0 errors, 0 warnings, 14/14 proof-bearing items checked** (58 contracted
  citations, every one with a verbatim quote and step mapping, every step with
  a derivation entry and stated inputs, all eight standard boundary cases
  dispositioned per item).
- `citation-fidelity.mjs --fail-on-missing-quote`: **58 citations over 14
  authored items; every recorded quote found; no widening candidates**.
- `proof-contract-coverage.mjs` against an overlay root whose only run
  manifest is this batch’s: **20 items, 14/14 supplied arguments covered, 0
  errors**.
- `depcheck.mjs --items-file …`: **OK — selected item/page checks and their
  prerequisite cycle checks passed**; 0 `cited-not-in-deps` warnings after
  moving same-page forward mentions into remark sections and declaring
  `def-variational-equation-along-an-ode-solution` and
  `pthm-cm13-flow-preservation` where the statements cite them.
- `fwdcheck.mjs`: the run-wide report shows 0 open forward references; no
  cm16 item or page carries an open or undeclared forward reference.
- `extcheck.mjs`: **28 381 items, 0 recorded-not-proved, 0 resting on them**;
  no cm16 item rests on unproved material.
- `coverage-checklist.mjs`: **2 pages, 44 harvested results, 0 errors, 0
  warnings**.
- `source-fetch-check.mjs`: **18/18 fetch-verified, 18/18 resolved** in check
  mode (no network needed).
- `item-dependency-levels.mjs check --run …`: **no cm16 finding**; the
  run-wide report still shows other batches’ errors.
- `validate-plan.mjs research/plan-spec.json --run …`: the two cm16 rows show
  the intended items and prerequisites with no cm16 warning or error; the
  run-wide note about unbuilt pages is other batches’ outstanding work.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and
  deduplicated with the batch-32 edges (134 edges: 5 page and 129 item)
  included.
- Not run at Step 1: `level-coverage.mjs` and the full engine closeout gate,
  which require judge ledgers, audit receipts and owner/operator
  reconciliation that do not exist before Steps 2–3.

## Post-check repairs (before readiness; recorded)

1. The precheck auto-repair re-layered the numbered steps of 11 proof items
   (steps that cite no earlier step must come first). Every affected item was
   rewritten in the canonical repaired form and re-passed precheck and
   proof-layout; no mathematical claim changed.
2. `fix-multiline-display.mjs` joined 8 hard-wrapped `$$…$$` blocks so the
   renderer sees one source line per display; no character of the mathematics
   changed.
3. Decimal numerals were removed from numbered proof steps
   (`ex-cm16-pendulum-equilibrium-checks` now declares
   $g=981/100\ \mathrm{m\,s^{-2}}$); all claims and data are unchanged.
4. Same-page forward mentions in three definitions and one growth-rate
   definition were moved from the Definition/Statement sections into remark
   sections so that `depcheck`’s citation scan sees no undeclared dependency;
   the declarations and their content are unchanged.
5. The manifest records were regenerated from the final item files after these
   repairs, and the readiness records were written last, binding the current
   carrier bytes.
6. `ex-cm16-recurrence-volume-check` was rewritten from a one-dimensional
   chart model to the one-label flat Cartesian presentation
   ($N=1$, $\mathsf M=I_3$, radial quartic potential), because
   [[pthm-cm16-recurrence-for-finite-volume-models]] inherits its phase-volume
   clause from `pthm-cm13-liouville`, which is stated for the Cartesian
   $Q\times\mathbb R^{3N}$ presentation. The claims are unchanged; the
   explicit bound became
   $\lambda_6(A_{E_1})\le512E_1^{9/4}$. The manifest record, the proof
   contract and this item's readiness record were regenerated after the
   rewrite; no other item was edited.

## Readiness records

All 20 items are recorded `ready` — never `--owner`, no escalation overwritten
— **after** the final item and page carriers, with complete carriers, met
prerequisites examined at statement/proof level, adequate page placement and
the current proof contract in place. Each record carries the item’s exact
frontmatter `deps` array and the engine’s item-hash binding, which includes
the transitive input closure; no item file was edited after the records were
written, so the hashes are current. `step1-decisions check --run …` reports
**0 work items for the 20 cm16 items** (the remaining work rows are other
batches’ empty scaffold inventories). The readiness records are Step-1
authoring dispositions, not independent mathematical approval.

## Open findings for the owner (none attributable to batch 32)

1. Run-level failures caused by other batches: `item-dependency-levels` and
   `validate-plan` still report other pages’ unresolved prerequisites or
   level-label differences (for example in the `qm-math-controlled-dynamics`
   batch), and the 1-scaffold stage carries the existing owner-repair blocker
   `research/physics-cm-qm-gr-79-2026-10-11-step1-blockers.json`; none names a
   cm16 item or page.
2. No published defect in a batch-32 actual prerequisite was found. One
   observation for the canonical ledger, without a repair claim: the in-run
   mathematical KAM item `thm-positive-measure-analytic-kam-family` is the
   only published carrier of the two-rotor persistence proof and is still
   `draft`; the physics page consumes it as an in-run supplier with its exact
   hypotheses, and its consumer-facing sharpness (the explicit constant
   $c$ is not numerically evaluated) is recorded in the KAM item and in this
   batch’s scope clauses. This is a scope observation, not a defect finding.
3. This handoff is Step-1 initial authoring evidence only; owner/operator
   reconciliation and the full engine gate follow construction, and Steps 2–3
   provide the independent review.
