# Batch 60 notes — Qm Driven Dynamics And Adiabatic Limits

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **60**, covering the
pair `qm-driven-dynamics-and-adiabatic-limits` (A, order 199) and
`qm-driven-dynamics-and-adiabatic-limits-examples` (B, order 200), category
`non-relativistic-quantum-mechanics`, library `physics`. Both pages are
`status: draft`; this batch publishes nothing. No experiment item is built and
no measurement is asserted.

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` (no
batch-60-specific override; the general rules — draft content only, define
before naming, keep model deductions and empirical observations distinct —
were applied), the batch dependency levels
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch
60: level 14, requires batch 59), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3337, and
`research/plan-spec.json`.

## Design vs plan-spec

The design reservation row 18 lists prerequisites `NRQ-A05`, `NRQ-A12`,
`NRQ-A17`, i.e. `qm-autonomous-dynamics`, `qm-angular-momentum-and-spin` and
`qm-controlled-approximations`. The current plan-spec entry (which controls
this run) requires only `qm-controlled-approximations`. The conflict is
resolved in favour of the plan: the A page declares exactly that one page
prerequisite in its manifest and carrier, and the B page declares the A page.
Item-level review found that the pair consumes the framework postulates and
readings of batches 43-47 (including `post-nrqm-framework-autonomous-dynamics`
and `def-nrqm-autonomous-dynamics-framework-evolution` from
`qm-autonomous-dynamics`, batch 47), the mathematical controlled-dynamics
page of batch 40 (`qm-math-controlled-dynamics`), the mathematical
orbital-and-spin Pauli-matrix item of batch 37, the oscillator items of
batches 36/40/52 (`qm-harmonic-oscillator`), the Coulomb items of batches
39/58 (`qm-central-potentials-and-hydrogen`), and published canonical root
mathematics. **No** item consumes a batch-59 item: the declared
`qm-controlled-approximations` prerequisite is retained exactly as the plan
requires and is recorded as a page-level cross-batch row with the explicit
note that no item-level premise is drawn from it. No physics item of
`qm-angular-momentum-and-spin` is consumed either; the declared two-level
models use the mathematical Pauli matrices directly, and that choice is
recorded here because the design's reservation row named the physics page.

## Inventory

A page `qm-driven-dynamics-and-adiabatic-limits` (13 items; manifest
`dependency_level` in parentheses):

1. `def-nrqm-driven-dynamics-framework-driven-model` (8) — the declared
   driven model: prescribed self-adjoint families in three regularity classes
   (bounded norm-continuous; fixed self-adjoint part plus strongly continuous
   bounded control; common-domain C¹), the propagator demand with its cited
   mathematics, the evolved-preparation and outcome-law readings, the
   energy-basis amplitude/population reading, and the declared circular and
   linear two-level drive models.
2. `def-nrqm-driven-dynamics-framework-interaction-picture` (9) — the
   free-flow factor, interaction control and propagator, interaction state
   and preparation, the decomposition of the physical propagator, the
   outcome-law equivalence with the conjugate observable, and the amplitude
   phase identity.
3. `lem-nrqm-driven-dynamics-two-level-rotating-frame` (1) — pure
   linear-algebra lemma: the frame $R(t)=\cos(\omega t/2)I+i\sin(\omega t/2)\sigma_z$
   is unitary with $R'=(i\omega/2)\sigma_zR$, the conjugation identities for
   $\sigma_{x,y,z}$, the exact reductions of the circular and linear families,
   the transformation of the dynamics and the frame invariance of the level
   populations.
4. `pthm-nrqm-driven-dynamics-bounded-norm-propagator` (9) — class (i):
   existence, uniqueness, unitarity and the two operator-norm endpoint
   equations; Dyson truncation budget; evolved preparations; the bound
   $2e^{K\tau}(K\tau)^{2}$-type on the difference of the exact and truncated
   Born probabilities.
5. `pthm-nrqm-driven-dynamics-mild-propagator-and-pictures` (10) — class
   (ii): the mild propagator and its vectorwise identity, the weak
   Schroedinger identity on $D(H_0)$, the interaction-picture evolution and
   the equivalence of the two readings including transition probabilities.
6. `pthm-nrqm-driven-dynamics-first-order-transition-amplitude` (11) — the
   exact amplitude with Dyson remainder $e^{K\tau}(K\tau)^{2}/2$, the closed
   sinusoidal drive split into co- and counter-rotating parts with their
   bounds and the linear growth at resonance, and the outcome-probability
   error bound.
7. `pthm-nrqm-driven-dynamics-common-domain-propagator` (9) — class (iii):
   the strong propagator with $Y$ invariance, uniform graph bounds, the strong
   Schroedinger equation on $Y$, reverse and adjoint equations, and the
   driven oscillator $H_{\mathrm{osc}}-f(t)Q$ as the declared instance.
8. `pthm-nrqm-driven-dynamics-circular-drive-exact-rabi` (10) — the exact
   rotating-frame reduction of the circular two-level model to
   $\frac{\hbar}{2}(\Delta\sigma_z+\Omega_1\sigma_x)$, the Rabi populations,
   resonance, pi-pulse, return time and periodicity, and the $\Omega_1=0$
   branch.
9. `pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error` (10) — the
   exact rotating-frame family $A+e^{2i\omega t}B+e^{-2i\omega t}B^{*}$, the
   rotating-wave contract $\|U^{R}-e^{-i\tau A/\hbar}\|\le\varepsilon(\tau)$
   and the population bound $|p-p^{\mathrm{avg}}|\le2\varepsilon$.
10. `def-nrqm-driven-dynamics-framework-adiabatic-protocol` (9) — the slow
    protocol model in the finite and common-domain branches, the protocol
    propagator, the uniformly gapped and coherently followed label, and the
    leakage-probability reading.
11. `pthm-nrqm-driven-dynamics-finite-adiabatic-leakage` (10) — the finite
    branch: $P\in C^2$, $K$, the Hermitian $X$, intertwining, the estimate
    $\|(I-P(s))U_T(s)P(0)\|\le C/T$ and the Born leakage $C^{2}/T^{2}$.
12. `pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage` (15) — the
    one-centre Coulomb model with a prescribed $C^{2}$ source-strength path:
    level identification and $n^{2}$ degeneracy along the path, the verified
    uniform gap with the explicit rational constant $\delta_n=(2n+1)/(4n^{2}(n+1)^{2})$
    and the $1/T$ leakage estimate after rescaling to physical time.
13. `rem-nrqm-driven-dynamics-scope-and-empirical-status` (16) — adopted
    clauses, proved statements, exclusions and the empirical status.

B page `qm-driven-dynamics-and-adiabatic-limits-examples` (5 items):

14. `ex-nrqm-driven-dynamics-circular-drive-exact-populations` (11) — the
    quarter-inversion value $1/2$, the pi-pulse value $1$, the return value
    $0$, the detuned value $1/4$, the undriven constant-population branch and
    the precession of the transverse coherences at the splitting frequency.
15. `ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget` (11) — the
    budget $\varepsilon=\frac{1}{100}(1+\frac{3\omega\tau}{200})$ at three
    declared times, the exact averaged population $1/4$ at
    $\omega\tau=100\pi/3$, the circular contrast and the conservatism at
    $\tau=0$.
16. `ex-nrqm-driven-dynamics-ammonia-two-level-resonance` (11) — the declared
    two-level inversion family with an oscillating field, its identification
    with the linear model, the resonance condition $\hbar\omega=2\Delta_0$, the
    averaged inversion at $\pi\hbar/(2\mu E_0)$ and the error contract there
    for $x=\mu E_0/\Delta_0=1/100$.
17. `ex-nrqm-driven-dynamics-driven-oscillator-coherent-response` (13) — the
    exact classical mean response $\sqrt2\ell\operatorname{Re}(ze^{-i\omega\tau})+q(t)$
    and the stationary spreads of a coherent preparation of the driven
    oscillator.
18. `rem-nrqm-driven-dynamics-examples-scope-limits` (17) — what the examples
    check and what they do not contain.

Capacity: A 13 items, B 5 items — both far below the 100-item page cap.
Items were authored suppliers-first in ascending dependency order (1, 8-17),
with the manifest levels recomputed mechanically (`/tmp/b60/build-60.mjs`)
after the final dependency edit; `item-dependency-levels check --run` reports
no batch-60 finding (the remaining run-wide errors are the later batches
61-64 whose scaffold inventories are still empty).

## Model choices and conventions

- **Three regularity classes instead of one.** The driven model is declared in
  the bounded norm-continuous, bounded-control and common-domain classes
  because P4 clause (iv) adopts no general unbounded family; each class is
  carried by its own cited mathematics (Dyson series, interaction-picture
  mild propagator, common-domain strong propagator).
- **Circular versus linear drive.** The circular family
  $\frac{\hbar}{2}(\omega_0\sigma_z+\Omega_1(\cos\omega t\,\sigma_x+\sin\omega t\,\sigma_y))$
  reduces exactly to the constant averaged matrix; the linear family
  $\frac{\hbar}{2}(\omega_0\sigma_z+\Omega_1\cos\omega t\,\sigma_x)$ retains the
  counter-rotating terms $e^{\pm2i\omega t}B$, and only the contract theorem
  bounds them. Both declarations are model data; no field identification is
  made.
- **The rotating-wave direction.** The frame is
  $R(t)=\cos(\omega t/2)I+i\sin(\omega t/2)\sigma_z$; the identities
  $R\sigma_xR^{*}=\cos\omega t\,\sigma_x-\sin\omega t\,\sigma_y$ and
  $R\sigma_yR^{*}=\sin\omega t\,\sigma_x+\cos\omega t\,\sigma_y$ of the lemma
  fix the sense conventions once, and the two drive models are stated in the
  resulting co-rotating convention.
- **Remainders are explicit.** The amplitude theorem carries the Dyson
  remainder $e^{K\tau}(K\tau)^{2}/2$ as a bound (with the stronger unitary
  bound $(K\tau)^{2}/2$ recorded), the truncation-to-probability bound is
  $2e^{K\tau}(K\tau)^{2}$ for the first order, the rotating-wave contract is
  linear in time, and the adiabatic estimates are $C/T$ and $C^{2}/T^{2}$.
- **The Coulomb branch is a declared external-source model.** The adiabatic
  Coulomb theorem uses a prescribed $C^{2}$ strength path as an external
  source of the one-centre model; the branch-(u) regularity of the family is
  declared with the protocol hypothesis and is not re-derived, and the gap is
  verified from the model's own spectrum theorem. Linear Stark coupling is not
  treated.
- **Choice.** The page assumes Countable Choice throughout and the Axiom of
  Choice where the outcome-law reading and the spectral supplier require it;
  roles and use sites are recorded in the manifest `dependency_roles` and the
  proof contracts.
- **Defined, not named.** Every technical term is defined on the page or in a
  cited carrier: the three classes with their operator domains and
  regularity, the two-time propagator with its cocycle and equations, the
  interaction-picture readings, the transition amplitudes and populations as
  Born probabilities, the two-level drive models with their parameters and
  units, and the protocol with its gap, following condition and leakage
  probability.

## Sources and dispositions

`research/physics-cm-qm-gr-79-2026-10-11-batch-60.coverage.json`:

- A page: Binney–Skinner, *The Physics of Quantum Mechanics* (textbook), §9.3
  printed pp. 213-219 (PDF = printed + 8); Zwiebach, MIT 8.05 Ch. 6
  (course notes) §§1-5 (pp. 1-45, in particular §2 pp. 10-17 and §§4.3-4.5
  pp. 30-39); Zwiebach, MIT 8.05 Ch. 7 §§2-6 and the MRI discussion
  (pp. 2-21); Teschl, *Mathematical Methods in Quantum Mechanics* (monograph,
  1st ed.) §5.1 printed pp. 123-125 and Chapter 6 printed pp. 133-159.
- B page: the same MIT Ch. 7 chapter and the same Binney section, restricted
  to the examples' ranges.
- Harvest: 31 source-anchored results, every one disposed — 13 `included`,
  5 `inline`, 6 `deferred` and 7 `out-of-scope`, each decline with a
  result-specific reason. Deferrals resolve to
  `qm-light-matter-and-spectral-transitions` (Fermi's golden rule, radiative
  rates and selection rules); the out-of-scope declines record the oscillator
  spectrum (owned by `qm-harmonic-oscillator`), squeezed states, the MRI
  relaxation discussion, Teschl's scattering chapter and the exercise blocks.
- Locator honesty: the Fitzpatrick course text cited in an early draft of the
  item carriers was **removed** rather than kept as an unread citation; the
  remaining four sources were read in full text (Binney §9.3, MIT Ch. 6 and
  Ch. 7 in the recorded reader copies, Teschl §5.1/Ch. 6) and are the
  page's two-plus independent treatments.
- `source-fetch-check --stamp`: **6/6 source instances fetch-verified** (six
  instances across the two pages), full bodies, stamps recorded in the
  coverage file; no drop, no `source_resolution` entry, no retries consumed.

## Cross-batch dependencies and ledger

`research/physics-cm-qm-gr-79-2026-10-11-batch-60.cross-batch-dependencies.json`
contains 124 rows: 123 item edges and 1 page edge, every row `verified` with
inline-citation evidence and the supplier's read title. Supplier batches: 37,
40, 43, 44, 45, 47, 52, 58, 59 (page level only). The page edge records the
declared `qm-controlled-approximations` prerequisite and states explicitly
that no item-level premise is drawn from that page.

`frontier-dependency-ledger.mjs refresh --run ...` was attempted after the
final edits and remains blocked by an out-of-scope concurrent condition:
`physics-cm-qm-gr-79-2026-10-11-batch-66.cross-batch-dependencies.json`
(another batch's file) contains two rows with `status: "pending"`
(`lem-gr-observer-projection-decomposition` against
`def-gr-smooth-lorentzian-objects` and against
`lem-gr-future-causal-classification-by-a-timelike-field`), which the ledger
schema rejects (allowed statuses are open/verified/removed). No batch-60 row
is affected: a direct re-check of the batch-66 file against the current
manifests found the two offending rows belong to batch 66, and batch 60's 124
rows all validate. The run-level merge is an engine/owner reconciliation item
for that batch's owner, and this batch does not edit another batch's input.

## Verification

- `precheck.mts` on all 18 items: **13 proof-bearing items pass, 0 failing**
  (the two framework definitions, the protocol definition and the two remarks
  are `not-applicable`).
- `rendercheck.mjs` on all 18 items and both pages (via author-check):
  **OK, 20 files** — no wikilink in math, no nested delimiters, no multiline
  display block, every math span parses under KaTeX, every frontmatter block
  parses.
- `proof-layout.mjs` on all 18 items: **18 items, 54 numbered steps,
  0 defects** (final run after the last edits).
- `proof-contract.mjs ... --strict`: **0 errors, 0 warnings, 13/13 items
  checked** (124 exact source citations, per-step derivations and all eight
  standard boundary cases per proof item).
- `content-policy.mjs` on the manifest: **18 items, 0 errors, 0 warnings**.
- `author-check.mts physics-cm-qm-gr-79-2026-10-11 60`: **ok: true**
  (fingerprint `1c16fa2a36bca7cc...`), all four sub-gates true.
- Scoped `depcheck --items-file`, `fwdcheck --items-file`,
  `extcheck --items-file` on the 18 ids: **all pass**; depcheck 0 warnings
  after the three cited-not-in-deps repairs recorded below, fwdcheck 0
  findings, extcheck corpus-wide "0 recorded-not-proved, 0 resting on them".
- `coverage-checklist.mjs ... --require-destination`: **2 pages, 31
  harvested results, 0 errors, 0 warnings**.
- `source-fetch-check.mjs` (check mode): **6/6 fetched-verified research
  sources**.
- `item-dependency-levels check --run`: no batch-60 finding; the listed errors
  are the later batches (61-64) whose scaffold inventories are still empty.
- `manifest-deps.mjs` on the batch manifest: **18 items, 0 errors**.
- `validate-plan.mjs plan-spec.json --run ...`: 7 run-wide errors, **all in
  the `qm-many-body-and-equilibrium-models` and `gr-gr15-...` pages**; none
  involves `qm-driven-dynamics-and-adiabatic-limits` or its examples. Recorded
  as unrelated run-wide debt.
- Three repairs during the loop: scoped depcheck flagged three
  cited-not-in-deps warnings
  (`def-nrqm-driven-dynamics-framework-interaction-picture` citing
  `def-nrqm-framework-quantities-and-units`;
  `pthm-nrqm-driven-dynamics-bounded-norm-propagator` citing
  `lem-nrqm-composites-density-and-scalar-spectral-probability`;
  `pthm-nrqm-driven-dynamics-first-order-transition-amplitude` citing
  `def-nrqm-state-geometry-pure-mixed-states-and-purity`); each edge was added
  to `deps` with its role, the manifest and cross-batch input regenerated, and
  all checks re-run. The proof-layout/precheck repair loop also adopted the
  canonical step labelling proposed by `precheck.mts`.
- Readiness: 18 `ready` records written with
  `step1-decisions.mjs record`, each listing the examined dependency IDs and
  the current checks; this is Step 1 readiness, not independent review.

## Escalations and deferrals

No unresolved prerequisite and no owner escalation. The design/plan conflict
above is recorded and resolved in favour of the plan. The deferrals (golden rule,
radiative rates and selection rules, counted once per page on which the
source instance is recorded) resolve to their own track pages; the out-of-scope declines name
result-specific reasons. No page split or capacity escalation is needed
(A 13/100, B 5/100).
