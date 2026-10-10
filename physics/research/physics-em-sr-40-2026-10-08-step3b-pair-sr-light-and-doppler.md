# Step 3b authoring report — pair `sr-light-and-doppler` / `sr-light-and-doppler-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha-high Step 3b scaffold auditor
  and item author; batch 7 (this pair is the whole batch); dispatch label
  `step3b-pair-sr-light-and-doppler-3d6a21a68991683f`; pass completed
  2026-10-09 (AEDT).
- A page: `sr-light-and-doppler` (order 221, category `special-relativity`,
  `library: physics`, 10 items). B page: `sr-light-and-doppler-examples`
  (order 222, 6 leaf items). Pair scope decision `sufficient`, recorded
  2026-10-09T05:38:48Z and still current (the manifests were not edited
  afterwards).
- Dispatch history: the pair was authored by the interrupted earlier dispatches
  (`…-cd1b0ca1cfe87332` and `…-4b1e37fcbc87d1c3`, 14:56–18:40); attempt 1 of
  this label (07:41Z, 18:41 AEDT) died on a provider balance error before doing
  any work. This pass re-audited every item and page against the current
  on-disk suppliers, reconciled the one flagged unfinished supplier, re-ran the
  full explicit-path battery, re-recorded the one stale item decision, refreshed
  the batch ledger and rewrote this report. No item file was edited in this
  pass (the repairs below are the earlier passes' and were re-verified here).

## Owned items, exact claims, decisions (dependency order as dispatched)

| level | item | page | decision |
|---|---|---|---|
| 2 | `lem-sr-metric-duality-on-lorentz-vector-space` | A | repaired |
| 5 | `def-sr-affine-phase-and-wave-covector` | A | accept (re-recorded in this pass) |
| 6 | `lem-sr-future-causal-pairing-negative` | A | accept |
| 7 | `lem-sr-null-covector-frame-data` | A | accept |
| 8 | `ex-sr-phase-level-sets-and-null-generators` | B | accept |
| 10 | `lem-sr-null-covector-boost-transformation` | A | **escalate (owner-held)** — see Flags |
| 11 | `ex-sr-null-covector-frame-data-worked` | B | accept |
| 12 | `lem-sr-phase-rate-along-worldline` | A | accept |
| 13 | `def-sr-null-wave-covector-and-observer-frequency` | A | accept |
| 14 | `post-sr-ideal-plane-wave-model` | A | accept |
| 15 | `pthm-sr-null-wave-doppler-and-aberration` | A | repaired |
| 16 | `rem-sr-doppler-dimensional-restoration` | A | accept |
| 16 | `cex-sr-transverse-doppler-is-not-unshifted` | B | accept |
| 16 | `ex-sr-aberration-worked-beta-three-fifths` | B | repaired |
| 16 | `ex-sr-doppler-longitudinal-beta-three-fifths` | B | accept |
| 16 | `ex-sr-transverse-doppler-protocols-worked` | B | accept |

Decision receipts: `research/physics-em-sr-40-2026-10-08-step3b-review-<item>.json`
(15 closed at confidence 1; the one escalate cannot be re-recorded by a
non-owner — see Flags). `step3-decisions check --phase final` counts the
run-wide accepted set; of this pair, 15/16 items are closed and the
boost-transformation lemma alone is owner-held.

## Exact claims and conventions (verified on the current carriers)

- **A page.** `lem-sr-metric-duality-on-lorentz-vector-space`: for a
  4-dimensional Lorentz space `(V,eta)` (symmetric, bilinear, both radicals
  `{0}`, inertia `(3,1,0)`) the map `Phi(v)=eta(v,.)` is a linear bijection
  `V -> V*`; the inverse `sharp`; in an `eta`-orthonormal basis
  `k^sharp=-k_0 e_0+k_1 e_1+k_2 e_2+k_3 e_3` and
  `eta(k^sharp,k^sharp)=-(k_0)^2+(k_1)^2+(k_2)^2+(k_3)^2`; for `k != 0` the
  causal trichotomy in the components and, explicitly, the degenerate case
  `k = 0` where `k^sharp = 0` has no causal character. Choice-free.
- `def-sr-affine-phase-and-wave-covector`: affine phases on `(A,V,eta,C^+)`,
  uniqueness of the wave covector, the `V* x R` bijection, the inertial-chart
  form, the constant-phase/kernel/level-set description, the `C^1`-curve
  identity `(theta o gamma)' = k(gamma')`, and null/timelike/spacelike and
  future/past/causal terminology for a **nonzero** wave covector; no units and
  no physical identification.
- `lem-sr-future-causal-pairing-negative`: future timelike `n` pairs negatively
  with every nonzero future causal `v` (and positively with nonzero past causal
  vectors); for nonzero null `v` the sign of `eta(n,v)` is exactly its
  future/past character and is independent of the future timelike `n` used;
  normalization identity. Choice-free.
- `lem-sr-null-covector-frame-data`: for a future null wave covector and an
  inertial frame, `varpi=-k(e_0)>0`, `s_i=k(e_i)/varpi`, `|s|=1`, the component
  form `(-varpi,varpi s)`, `k^sharp=varpi(e_0+s)` future null, the converse
  construction and the uniqueness/completeness of the frame data `(varpi,s)`.
- `lem-sr-null-covector-boost-transformation`: for `x'=B(beta)x+b` the
  covector law `k'_a=(B(-beta))^b_a k_b`, `varpi'=gamma(1-beta.s)varpi>0`, the
  exact `s'` vector formula, the axis formulas, `|s'|=1`,
  `beta.s'=(beta.s-|beta|^2)/(1-beta.s)` with the two iff-equivalences and the
  `-beta` round trip; degenerate `beta=0` and axis `b=0` branches stated
  separately.
- `lem-sr-phase-rate-along-worldline`: `(theta o gamma)'=k(gamma')` for `C^1`
  curves; `d(theta o x)/dtau=k(U)` for future timelike worldlines; `k(U)<0` for
  future null `k`; the inertial case `U=cn` with `eta(U,U)=-c^2`.
- `def-sr-null-wave-covector-and-observer-frequency` (physics): with the SI
  conventions `x^0=ct`, `omega=c varpi`, `nu=omega/(2 pi)`,
  `kappa=(omega/c)s`, `lambda=c/nu` and `k_a=(-omega/c,(omega/c)s)`; the
  observer frequency `omega_n=-ck(n)=-k(U_o)>0` with its proper-time reading
  and sign convention; no light identification, no quantum, no amplitude,
  medium, source, detector or measurement content.
- `post-sr-ideal-plane-wave-model`: adopted ideal monochromatic vacuum plane
  wave with future null wave covector (wave fronts and ideal rays identified
  consistently with `post-sr-ideal-clocks-and-light`), the phase-per-proper-time
  reading rule at reception, the comparison protocol through propagated phases,
  and the exclusion list; adopted, not deduced.
- `pthm-sr-null-wave-doppler-and-aberration`: conditionally on the three
  postulates, frame data `(omega',s')` with
  `omega'=gamma(1-beta.s)omega>0` and the exact `s'` map (axis formulas
  included); `nu'=gamma(1-beta.s)nu`, `lambda'=lambda/[gamma(1-beta.s)]` and
  the general subluminal observer formula
  `omega_o=gamma_w(1-(w.s)/c)omega`; both longitudinal cases; both transverse
  protocols (`gamma` and `1/gamma`) with the exact equivalence
  `beta.s=|beta|^2 <=> s'.beta_hat=0`; the aberration law
  `cos theta'=(cos theta-|beta|)/(1-|beta| cos theta)` with its strictly
  increasing bijection of `[-1,1]`; and the `beta=0` translation branch. Scope
  excludes media, dispersion, modulation, signal speeds, intensity,
  polarization, real line widths, accelerating observers, gravitation, quantum
  effects and every measurement or statistical claim.
- `rem-sr-doppler-dimensional-restoration`: unit table in `x^0=ct`, the two
  coordinate forms with the mixed-unit warning, natural units `c=1` and the
  explicit `c`-restoration list.
- **B page (leaves, no run consumers).** `ex-sr-phase-level-sets-and-null-generators`
  (level sets, kernel positive semidefinite with radical `span(k^sharp)`, the
  line through `k^sharp` the only null direction); `ex-sr-null-covector-frame-data-worked`
  (`varpi>0`, `s=(0,3/5,4/5)`, boost to `s'=(-3/5,12/25,16/25)`, `-beta` round
  trip); `ex-sr-doppler-longitudinal-beta-three-fifths` (factors `1/2` and `2`
  at `beta=3/5`); `ex-sr-transverse-doppler-protocols-worked` (factors `5/4`
  and `4/5`, protocol dependence); `ex-sr-aberration-worked-beta-three-fifths`
  (`s'=(5/13,12/13,0)`, factor `13/20`, aberration sign via exact axis
  components); `cex-sr-transverse-doppler-is-not-unshifted` (two exact witnesses
  refuting "transverse implies unshifted", conditional on the model).

## Sources (locators as in the batch-7 coverage file)

`research/physics-em-sr-40-2026-10-08-batch-7.coverage.json` (1 page, 25
harvested results, 0 errors/0 warnings, fetch-verified stamps): B. Crowell,
*Special Relativity* rev. 2020-12-10, §§3.2–3.3 pp. 55–59 and §§6.4–6.6
pp. 134–141, `https://archive.org/download/sr_20220102/sr.pdf` (signature
`(+---)` converted to `(-+++)`, `c=1` converted to `x^0=ct`); A. Einstein 1905
§7, journal pp. 910–912, German Wikisource transcription
`https://de.wikisource.org/wiki/Zur_Elektrodynamik_bewegter_K%C3%B6rper`;
S. Murugesh, IIST notes PH33003/PH43017, Chapter 6 "Waves" pp. 25–28,
`https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf`. The two
transverse protocols are recorded with their per-source conventions in the
batch notes; no source defect is claimed.

## Inputs read in this pass

`CLAUDE.md` (physics), `../CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`,
`../PHYSICS-CONTENT-MODEL.md`, the owner authoring direction (no owner
correction names this pair), the batch-7 manifests, coverage, notes and
cross-batch ledger, the Step 3a scope report and decision, the design
`research/plan-special-relativity-track.md` L149 and the SR07 source design, all
16 authored carriers, and the statement sections of every direct supplier
actually cited — in-run: `def-sr-affine-minkowski-model`,
`def-inertial-frame-and-inertial-chart`, `def-lorentz-form-and-inertia`,
`def-causal-classification-of-lorentz-vectors`,
`def-time-orientation-and-future-causal-sets`,
`lem-timelike-cone-has-two-convex-components`,
`lem-future-oriented-inertial-frames-exist`,
`lem-lorentz-form-has-orthonormal-basis`,
`def-spatial-euclidean-structure-of-an-inertial-frame`, `def-lorentz-boost`,
`lem-boost-is-proper-orthochronous-with-inverse`,
`lem-inertial-chart-transitions-are-affine-lorentz`,
`def-lorentz-map-and-lorentz-group`, `def-ck-tensor-field-on-minkowski-space`,
`def-sr-regular-causal-curve-and-worldline`, `def-sr-proper-time`,
`lem-sr-proper-time-parametrization`, `def-sr-four-velocity-and-four-acceleration`,
`thm-sr-proper-time-and-observer-decomposition`,
`def-sr-si-units-and-coordinate-conventions`, `post-sr-ideal-clocks-and-light`,
`post-sr-inertial-covariance`, `def-affine-space-and-displacement`, and the
reconciled supplier `thm-sr-tensor-and-current-transformation`; imported
published mathematics: `def-algebraic-dual-and-linear-functional`,
`def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form`,
`thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`, `thm-rank-nullity`,
`def-rank-and-nullity`, `thm-dual-family-is-a-basis-in-finite-dimension`,
`def-linear-map`, `def-linear-isomorphism-and-invertible-linear-map`,
`thm-unique-coordinates-with-respect-to-an-ordered-basis`, `thm-chain-rule`,
`def-derivative`, `thm-cauchy-schwarz-finite` (including its proportional-lists
equality clause), `def-euclidean-inner-product`, `thm-intermediate-value`.

## Checkpoint log

Items 1–6 were authored by the interrupted prior attempts and were re-verified
here against the current on-disk suppliers; items 7–16 were authored by those
attempts and verified here. No item file was edited in this pass.

1. `lem-sr-metric-duality-on-lorentz-vector-space` (2) — authored; 5 steps.
   Precision repair (kept, recorded): the scaffold's null clause was false at
   `k=0`; the statement gives the trichotomy for `k != 0` and names the
   degenerate case. Decision `repaired`, confidence 1.
2. `def-sr-affine-phase-and-wave-covector` (5) — definition; the 3-dimensional
   kernel and `V = ker k (+) R v_0` are justified inline (no rank-nullity edge
   added); the `(theta o gamma)' = k(gamma')` clause via coordinates and the
   one-variable chain rule. Decision `accept`; **re-recorded in this pass** on
   the current inputs (the previous receipt's hash was invalidated by sibling
   edits to `batch-1.pages.json` and `lem-timelike-cone-has-two-convex-components.md`,
   which are in this definition's transitive input closure; the authored text
   and every direct supplier were re-read and matched).
3. `lem-sr-future-causal-pairing-negative` (6) — 5 steps; closed-cone
   coordinates plus finite Cauchy–Schwarz, strict sign argument; past-causal
   mirror; null iff/sign statements; normalization. Decision `accept`.
4. `lem-sr-null-covector-frame-data` (7) — 6 steps; `varpi>0` from the pairing
   lemma; `|s|=1` from the raised-vector quadratic form; converse from the
   closed-cone description; uniqueness. Decision `accept`.
5. `ex-sr-phase-level-sets-and-null-generators` (8, B) — 4 steps; kernel,
   radical, equality case, level hyperplanes. Decision `accept`.
6. `lem-sr-null-covector-boost-transformation` (10) — 5 steps; component law
   from `thm-sr-tensor-and-current-transformation` clause (ii), `varpi'` and
   `s'` formulas, axis case, the two equivalences, round trip. **Decision
   `escalate` (owner-held, see Flags).** All other citations verified:
   `def-lorentz-boost` matrix entries,
   `lem-boost-is-proper-orthochronous-with-inverse` (iii) and
   `lem-inertial-chart-transitions-are-affine-lorentz` (i)–(ii) read and
   matched.
7. `ex-sr-null-covector-frame-data-worked` (11, B) — 3 steps; exact rational
   frame data and round trip; `|s'|^2 = 1` checked. Decision `accept`.
8. `lem-sr-phase-rate-along-worldline` (12) — 4 steps; inverse proper-time
   parametrization and chain rule; `k(U)<0`; inertial case. Decision `accept`.
9. `def-sr-null-wave-covector-and-observer-frequency` (13, physics) —
   definitions, units, positivity and scope; matches the manifest clause by
   clause. Decision `accept`.
10. `post-sr-ideal-plane-wave-model` (14) — postulate with
    `provenance.proof: not-applicable`, `physical_scope` and a `physics_review`
    (formulation/scope/sources/non_derivation all `pass`, evidence in the
    batch-7 contract file); consistent with the two cited postulates read in
    full. Decision `accept`.
11. `pthm-sr-null-wave-doppler-and-aberration` (15) — 7 steps. **Repair made by
    the prior pass**: clause (v) previously proved the bijectivity of the
    aberration map with the derivative plus the intermediate value theorem,
    neither of which had a supplier in the item's declared deps. Step 3.4 now
    proves strict increase and bijectivity by explicit algebra alone: the
    difference identity `f(v)-f(u)=(v-u)(1-b^2)/[(1-bv)(1-bu)]` and the explicit
    two-sided inverse `g(y)=(y+b)/(1+by)` with its range check. No supplier
    beyond the declared deps is used and the promised claim is unchanged; the
    contract's `d3.4` entry and inputs were updated. Decision `repaired`,
    confidence 1.
12. `rem-sr-doppler-dimensional-restoration` (16) — units, two coordinate
    forms, natural units/restoration; every unit read off the cited
    definitions. Decision `accept`.
13. `cex-sr-transverse-doppler-is-not-unshifted` (16, B) — 3 steps; two exact
    witnesses (`5/4` and `4/5` factors) refuting the universal transverse
    claim; conditional-on-the-model scope. Decision `accept`.
14. `ex-sr-aberration-worked-beta-three-fifths` (16, B) — 3 steps. **Repair made
    by the prior pass**: the closing interpretation and its verification
    invoked `arccos` and its strict monotonicity, but the trigonometric home
    `further-trigonometric-identities-and-inverses` is **not** in the pair's
    declared `requires` closure, so that invocation had no supplier in scope.
    The item now states the same conclusion with the exact axis components
    `-s_1=-4/5`, `-s'_1=-5/13` and the elementary comparison `-5/13 > -4/5`;
    the exact cosine data `cos theta=4/5`, `cos theta'=5/13`, the direction
    transformation, the `13/20` frequency factor and the aberration sign are
    all preserved. The contract's `d2.1` claim and `endpoints` boundary evidence
    were updated. Decision `repaired`, confidence 1.
15. `ex-sr-doppler-longitudinal-beta-three-fifths` (16, B) — 3 steps; factors
    `1/2`, `2`, directions `+/-e_1`, wavelength reciprocals; agrees with the
    theorem's longitudinal clause. Decision `accept`.
16. `ex-sr-transverse-doppler-protocols-worked` (16, B) — 3 steps; the two
    protocols with exact factors and directions; protocol dependence stated.
    Decision `accept`.

## Dependency reconciliation (suppliers vs actual proof uses)

- The one previously flagged unfinished supplier is now authored and
  reconciled:
  **`thm-sr-tensor-and-current-transformation`** (home
  `sr-lorentz-transformations`, order 211, batch 2) exists at
  `items/thm-sr-tensor-and-current-transformation.md`. Its clause (ii) states
  "$k'_a=(\Lambda^{-1})^b{}_ak_b$: a covariant index gains the factor
  $(\Lambda^{-1})^b{}_a$" for a $\mathcal C^k$ covector field on an open
  $\Omega\subseteq A$ with affine inertial transition $x'(p)=\Lambda x(p)+b$ —
  exactly the component law used by
  `lem-sr-null-covector-boost-transformation` fact L3 at numbered step 1.1 with
  $\Lambda=B(\beta)$, $\Lambda^{-1}=B(-\beta)$; the constant-field regularity
  requirement is met because a constant field is $\mathcal C^\infty$, hence of
  any class, and the class definition is supplied by the consumer's cited
  `def-ck-tensor-field-on-minkowski-space`. Clause (ii)'s phase-invariance
  sentence matches the consumer's phase setup. No hypothesis is strengthened.
- All 24 distinct in-run suppliers of this pair were located on disk and their
  statement sections read against the consumer uses; no hypothesis mismatch was
  found in the load-bearing uses (notably `def-lorentz-boost` sign/matrix
  conventions, `lem-inertial-chart-transitions-are-affine-lorentz`
  `e'_a = sum_b M^b_a e_b` with `M = Lambda^{-1}`,
  `thm-sr-proper-time-and-observer-decomposition` clauses (a), (c)–(e),
  `def-sr-proper-time` and `lem-sr-proper-time-parametrization` (i)–(iv),
  `def-sr-si-units-and-coordinate-conventions` (1)–(7)).
- Imported published suppliers: 13 distinct items, all `status: published`, all
  pinned; statement and equality-case wording checked where load-bearing
  (`thm-cauchy-schwarz-finite` equality clause used for the radical in the
  phase-level example; `thm-bilinear-forms-correspond-…` bijection used for the
  duality lemma).
- `sr-observer-measurements` (the declared page edge): page authored; the pair
  uses **no item** of it (0 edges), so the edge is ordering-only and its
  closure contains every in-run supplier actually used.
- Batch-7 cross-batch ledger: 63 rows, all `verified`; refreshed again in this
  pass with `frontier-dependency-ledger.mjs refresh`. No sibling file touched.
- Roots/rational powers in the `gamma`-algebra (`gamma=(1-|beta|^2)^{-1/2}`,
  `sqrt` of positive reals) are treated as elementary algebra, matching the
  other authored SR items of this run; recorded as a convention for Steps 5–8,
  not a defect claim.

## Checks run in this pass (exact, current)

| Check | Command | Result |
|---|---|---|
| precheck (explicit paths) | `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` on all 16 items | 13 proof-bearing checked, **0 failing** (3 nonproof: two definitions and the remark) |
| proof layout | `node tools/physics-support/proof-layout.mjs` on the 16 paths, one command | **16 items, 51 steps, 0 defects** |
| rendering | `node tools/physics-support/rendercheck.mjs` on the 16 items + both pages | **OK — 18 files**, KaTeX and YAML clean |
| content policy | `node tools/physics-support/content-policy.mjs research/…-batch-7.pages.json` | **16 scoped items, 0 errors, 0 warnings** |
| proof contracts (strict) | `node tools/physics-support/proof-contract.mjs research/…-batch-7.proof-contracts.json --strict` | **0 errors, 0 warnings, 16/16 items** (the former `citation-source-missing` is cleared by the authored supplier) |
| citation fidelity | `node tools/physics-support/citation-fidelity.mjs research/…-batch-7.proof-contracts.json` | 108 citations, **0 quote-not-found**, 0 widening candidates |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | 473 items / 80 pages checked, **no error**; batch-7 levels 2–16 match the manifest |
| focused depcheck | `node tools/physics-support/depcheck.mjs --items-file /tmp/mf/items.json --json` | **0 errors, 0 warnings** for the 16 items |
| fwdcheck | `node tools/physics-support/fwdcheck.mjs --items-file /tmp/mf/items.json --quiet` | OK |
| depsource | `node tools/physics-support/depsource.mjs --run … --items-file /tmp/mf/items.json` | OK — 16/16 consumers, **0 unresolved** |
| prosecheck | `node tools/physics-support/prosecheck.mjs` on the 16 items + 2 pages | OK — no positional claim contradicts the spec |
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/…-batch-{1..40}.pages.json` | 473 items, **0 errors** |
| coverage checklist | `node tools/physics-support/coverage-checklist.mjs research/…-batch-7.coverage.json --require-destination` | 1 page, 25 harvested, **0 errors, 0 warnings** |
| source fetch check | `node tools/physics-support/source-fetch-check.mjs --coverage research/…-batch-7.coverage.json` | **3/3 sources fetch-verified** |
| plan validator | `node tools/physics-support/frontier-item-gate.mjs --run … --tool validate-plan` | run-wide FAIL on **38 `undeclared-prereq` findings on other pages** (sr-spacetime-primitives, em-elementary-mathematical-prerequisites, em-expanded-analysis-prerequisites, em-material-response, …); **none involves pages 221/222** |
| scope decisions | `node tools/physics-support/scope-decisions.mjs check --run …` | run-wide **352 declines, 352 errors** (the register has not been initialized anywhere); **7 declines belong to `sr-light-and-doppler`** — see Flags |
| extcheck | `node tools/physics-support/frontier-item-gate.mjs --run … --tool extcheck` | run-wide FAIL on 112 `focus-item-unknown` rows for **unauthored items of other pairs**; **none of this pair's 16 items appears** |
| item decisions | `node tools/physics-support/step3-decisions.mjs check --run … --phase final` | this pair: 15 closed at confidence 1, 1 owner-held escalate; scope phase `closed: true` for all 40 pairs |

The batch-7 proof-contract quote `L3 → def-ck-tensor-field-on-minkowski-space`
was corrected by the prior pass to the verbatim excerpt "a change of inertial
frame changes the components by a constant linear transformation of the tensor
indices." so that both the strict contract checker and the citation-fidelity
checker accept it; re-verified here.

## Flags: owner-held escalation (substantive reason resolved)

- **Supplier** `thm-sr-tensor-and-current-transformation` — **authored** at
  18:38 AEDT 2026-10-09 and read in full in this pass.
- **Consumer** `lem-sr-null-covector-boost-transformation` — **fact L3**, used at
  **numbered step 1.1** for the covector component law
  `k'_a=(Lambda^{-1})^b_a k_b` of a constant covector field (clause (ii) of
  that theorem). The use is now reconciled: clause (ii) states exactly this law
  with the stated hypotheses; `proof-contract --strict` is 0-error 16/16 and
  `citation-fidelity` reports no quote-not-found.
- **Decision state**: the receipt
  `research/physics-em-sr-40-2026-10-08-step3b-review-lem-sr-null-covector-boost-transformation.json`
  records `escalate` (recorded 07:36:40Z, before the supplier existed), and its
  stored hash no longer matches the current input closure (the closure changed
  when the supplier and the batch-2 manifest were written).
  `step3-decisions.mjs record-item` refuses a non-owner re-record for an
  escalated target ("The owner must resolve this item decision"), so this
  author leaves the escalation in place as instructed.
- **Owner remedy** (one command): with the proof use above verified, record

  ```bash
  node tools/physics-support/step3-decisions.mjs record-item \
    --run physics-em-sr-40-2026-10-08 \
    --item lem-sr-null-covector-boost-transformation \
    --decision repaired --owner \
    --dependencies '["def-sr-affine-phase-and-wave-covector","lem-sr-metric-duality-on-lorentz-vector-space","lem-sr-future-causal-pairing-negative","lem-sr-null-covector-frame-data","def-lorentz-boost","lem-boost-is-proper-orthochronous-with-inverse","def-lorentz-map-and-lorentz-group","lem-inertial-chart-transitions-are-affine-lorentz","thm-sr-tensor-and-current-transformation","def-ck-tensor-field-on-minkowski-space","def-inertial-frame-and-inertial-chart","thm-unique-coordinates-with-respect-to-an-ordered-basis","def-spatial-euclidean-structure-of-an-inertial-frame","thm-cauchy-schwarz-finite","def-euclidean-inner-product"]' \
    --reason "…"
  ```

  (owner decisions allowed are `repaired|hold|reopen`; `repaired` closes it) or
  `hold` to keep it open; then re-run `step3-decisions check --phase final`.
  Re-verify clause (ii) against the authored text as quoted above if desired.
- **Consequence for consumers of this lemma**: all downstream items cite the
  lemma directly, it is authored and locally checked, and their decisions are
  closed on their own proof uses; the transitive closure of those items still
  passes through the owner-held row, which is why its resolution is the last
  item-level obligation of this pair.
- **No other item of this pair has an open or stale decision.**

## Run-level items for Step 4 / the owner (not this pair's blockers)

1. `validate-plan` run-wide FAIL: 38 `undeclared-prereq` findings on other
   pages; **none** involves `sr-light-and-doppler` or
   `sr-light-and-doppler-examples`. Reported for the Step-4 splice; not hidden
   open dependencies of this pair.
2. `scope-decisions check` run-wide FAIL: 352 pending declines because the
   per-group registers (`research/<run>-alpha-<label>-scope-decisions.json`)
   have not been created; 7 of them are on `sr-light-and-doppler`
   (decline ids and rows):
   - `0048721cc5d6cec74d1d4d805ad97e4392f71dba9fea3df8d2329b916d0fe057` —
     Crowell Example 7, optical appearance of a cube (out-of-scope: requires
     light-travel-time rendering of many rays).
   - `474a620a2cdbec8bb2cf991f635385a3297dd65d6b71126d7c65e2131dc54075` —
     Crowell §6.6.2 group velocity (out-of-scope: needs a modulated packet and a
     dispersion model).
   - `c0707217d55b17372caa7190996231afb3e1c645944f9897c5183f2fb707769e` —
     Einstein amplitude transformation and intensity remark (out-of-scope).
   - `cdb9bfd8ff1495de30e0f3411fa91efe1d5b0df05d45dd1a6fe1f8e1426e56db` —
     Crowell §3.3 velocity composition/rapidity (out-of-scope: supplied by the
     Lorentz-transformation page; Bertozzi data reserved to the experimental
     interface).
   - `e98f4bdbb051b352c9266d40b435a8ad6760a02e96f15521da580ef0bc8de81a` —
     Crowell Example 1 Ives–Stilwell (deferred to `sr-experimental-interface`;
     secondary retelling cannot back an experiment item).
   - `ef223511660129a66ad0076e0bc242f638779cdf1480ab643ea9a8b647b7b96b` —
     Crowell §3.4 "no frame at c" (out-of-scope: boost/cone property carried by
     other pages).
   - `f51c838910289c602a4d8301b39ba1970976870c5d7c635b6ca5aed01d207b7a` —
     Crowell Example 6 Heckmann plates (deferred to `sr-experimental-interface`).
   These are the rows the coverage file already classifies with reasons; the
   register is a shared, run-wide mechanical artifact whose owner path is the
   `8-scope` prepare/refresh plus the group decision review. This author did not
   write the shared register (leave shared-ledger updates to the serial
   reconciler) and records the exact rows here instead. The owner should treat
   the seven rows above as `stands` candidates when the register is prepared:
   each row is a decline with a recorded reason and destination, none is used by
   any authored item of this pair, and no coverage row of this pair remains
   unclassified.
3. `extcheck` run-wide FAIL: 112 `focus-item-unknown` rows for unauthored items
   of other pairs; none belongs to this pair.
4. No published-concern findings: no imported or sibling supplier was found
   defective in the checked uses.

## Reviewer notes for Steps 5–8 (non-blocking; no edit made)

- `lem-sr-phase-rate-along-worldline` clause (d) ends with "conversely every
  future timelike worldline has `eta(U,U)=-c^2`". The sentence is a true
  stand-alone fact (clause (a) of
  `thm-sr-proper-time-and-observer-decomposition`, cited there), but "conversely"
  is not the logical converse of the preceding implication. Content is sound;
  the wording is noted for the later review rather than edited here so as not to
  churn current decision hashes for a stylistic point.

## Open obligations at handoff

- `lem-sr-null-covector-boost-transformation`: **owner-held escalation** — the
  substantive supplier obligation is reconciled (supplier authored, use verified,
  contract strict-clean); only the owner may re-record the decision. No other
  work on this pair is blocked by it.
- The 7 run-level scope-decline rows above remain for the owner's register path.
- Steps 5–8 independent review, judgment and adjudication remain owed for all
  16 items and both pages; the B items are leaves and must not be consumed.
- The pair still has **no** publication or push action (draft only).

## Next action

Owner: re-record `lem-sr-null-covector-boost-transformation` as `repaired`
(owner) with the current input closure, then re-run
`step3-decisions check --phase final`. Everything else of this pair is authored,
checked, decided and registered.
