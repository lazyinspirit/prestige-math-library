# Batch 30 notes — `em-induction-and-circuit-limits` / `em-induction-and-circuit-limits-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **339**, B page order **340**, category
`classical-electromagnetism`, library `physics`. Final inventory: **8 A items + 3 B items**,
all eleven recorded `ready` with current dependency hashes. No item file, page, plan,
published item, engine state or verdict was edited; `research/plan-spec.json` was not modified.
Files written: the batch manifest, the batch coverage file, the consumer-batch
cross-dependency input, the eleven `step1-*` readiness records, the tool-refreshed unified
ledger, and this note.
Read first: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (binding),
`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the Step-1 drift
report `research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md` (this page: **no-drift**),
the design section `research/plan-classical-electromagnetism-track.md` L1905-L1937, and the
design sources `proposed-inventory.json` (rows for `def-em-moving-circuit-geometry`,
`pthm-em-motional-emf`, `post-em-circuit-approximation`, `pthm-em-inductance-reciprocity`,
`pthm-em-inductor-energy`, `pthm-em-rl-lc-dynamics`, `texp-em-sliding-bar-emf`,
`ex-em-transformer-idealization`, `ex-em-rl-time-response`), `definition-contracts.md`
(`def-em-moving-circuit-geometry`, `post-em-circuit-approximation`, `def-em-steady-current-regime`,
`def-em-lab-geometry`), `core-conditional-proofs.md` (K6) and `worked-example-verifications.md`
(X5), together with the design reader directories `reader-tong` and `reader-fitzpatrick`.

## Design vs plan, and recorded conflicts

1. **Page metadata: no conflict.** The design reservation (L1905 ff.) and the current
   `research/plan-spec.json` entries 339/340 agree exactly on page ids, kind, orders,
   category `classical-electromagnetism`, library `physics`, titles, companion links and the
   declared `requires` (`em-electrostatic-boundaries-and-conductors`, `em-magnetostatics-in-vacuum`,
   `em-material-response`, `picard-lindelof-and-first-order-odes`). The plan's item arrays are
   empty by construction; the batch manifest is the scaffold record.
2. **A/B counts: design A=6/B=3, scaffolded A=8/B=3.** The two additions are local pure
   mathematical prerequisites placed on the A page before their consumers, exactly as the
   Step-1 rules require: `lem-em-newtonian-linkage-symmetry` (finiteness, equality and symmetry
   of the Newtonian linkage pairing) and `lem-em-newtonian-curl-field-energy` (the identity
   `int|curl A|^2 = mu0 int<A,J>` for `A = mu0 N(J)`, `div J = 0`). Both are `domain: mathematics`
   with exclusively mathematical dependencies; both are needed by `pthm-em-inductance-reciprocity`
   and hence by `pthm-em-inductor-energy`, and neither replaces or weakens a promised claim.
   Both page caps (100 items) are far from binding.
3. **`dependency_level` labels.** The design's own labels (computed under its smaller dep
   arrays) are 1, 6, 7, 8, 9, 10 for the six A items and 7, 9, 11 for the three B items. The
   whole-run in-run labels recorded in the manifest are **9, 0, 1, 18, 18, 19, 20, 21** (A page,
   in manifest order) and **19, 21, 22** (B page); they include the in-run levels of the
   batch-13, batch-16, batch-23, batch-24, batch-25, batch-26, batch-28 and batch-29 suppliers.
   Recomputation recorded, not hidden.
4. **Dep-array additions and role corrections (recorded, not silent).** The design's dep arrays
   were kept as their core and each item adds only suppliers actually used by its statement,
   well-definedness or proof route; every role was checked against the physics-content role
   rules. Corrections and additions:
   - `pthm-em-motional-emf -> def-em-moving-circuit-geometry` was recorded in the closure ledger
     as `physical-result`, but the supplier is a *definition*; it is recorded here as
     `formulation-prerequisite` (same class of correction batch 29 recorded). Likewise
     `pthm-em-motional-emf` needed `def-em-fields`, `def-em-si-conventions`, `def-em-sources`,
     `def-em-fixed-test-geometry` (formulation) and `def-scalar-and-vector-line-integrals-...`
     (mathematical) to state and apply the frozen-patch Faraday clause.
   - `post-em-circuit-approximation` keeps the design's two formulation prerequisites and adds
     `def-em-si-conventions` (units H, F, ohm) and `def-em-lab-geometry` (laboratory region,
     interval and fixed-time conventions).
   - `pthm-em-inductance-reciprocity` keeps `pthm-em-magnetostatic-vector-potential` and
     `post-em-circuit-approximation` and adds the two new local mathematical lemmas plus the
     linearity-of-the-integral, Fubini, curl-curl, Laplacian, continuity/measure and
     AC-omega carriers needed for the closure of the finiteness, reciprocity, linkage and
     energy clauses (including the exact vanishing criterion `U(I)=0 iff J_I=0`).
   - `pthm-em-inductor-energy` keeps the design's two physical results and adds
     `post-em-circuit-approximation` (physical-assumption: the terminal-voltage branch relation),
     `def-em-steady-current-regime` (formulation: the smooth-profile class of the realization)
     and the product-rule/chain-rule/FTC suppliers.
   - `pthm-em-rl-lc-dynamics` keeps the design's four core deps and adds the explicit
     complex-exponential, ODE-interface, differentiation and constancy suppliers listed in the
     manifest; `ex-em-rl-time-response`, `ex-em-transformer-idealization` and
     `texp-em-sliding-bar-emf` add only suppliers whose objects their statements actually use
     (`def-em-lab-geometry`, `def-em-fields`, `def-si`-units, cross product, vector integral).
5. **Recorded route deviation: the LC solution is proved through the complex exponential.**
   The design's K6 route writes the lossless-oscillator solution with the real cosine and sine.
   The real trigonometric *derivative* suppliers of the library (`thm-sine-and-cosine-derivatives`
   and companions) are homed on `sine-cosine-and-the-definition-of-pi`, which is **not** in the
   transitive closure of this page's declared `requires`; depending on it directly is a hard
   `undeclared-prereq` error of `validate-plan`, and adding the page to the plan is a plan change
   outside this dispatch's authority. Instead `pthm-em-rl-lc-dynamics` states the same solution as
   the real part of the entire function `t -> z0 exp(i Omega (t-t0))`, differentiates it through
   `thm-complex-exponential-is-entire-with-derivative-itself`,
   `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann` and the complex
   and real chain rules, and displays the cosine-sine form through `thm-eulers-formula` and
   `thm-complex-trigonometric-hyperbolic-dictionary`. Euler's formula's own statement defines the
   real cosine and sine involved, and the two displayed forms are identical by that formula, so
   **no promised claim is weakened**; the owner may prefer the textbook trigonometric route and,
   if so, the single plan change needed is adding `sine-cosine-and-the-definition-of-pi` to this
   page's `requires` and swapping the four complex-analysis deps for the two real-trigonometric
   ones. This is recorded for owner reconciliation, not silently substituted.
6. **Source-legend deviation recorded.** The historical design legend names its own source set for
   this category; this dispatch used the retained Tong course (Section 4.1 and subsections,
   printed pp. 67-77), the complete Fitzpatrick course book (Section 4.2 printed pp. 104-108 and
   the chapter `7 Magnetic induction' printed pp. 216-241, with course nodes 43 and 79-86 as
   exact node-level locators) and Griffiths 3rd ed. (Sections 7.1.2-7.1.3, 7.2.1, 7.2.3, 7.2.4)
   for every physical item, plus Hunter's PDE notes (Sections 2.6.1, 2.7) and Teschl's PDE
   monograph (Section 5.3) for the two new mathematical lemmas. The design's Faraday primary
   reading (Experimental Researches) is historical context only: this page has no experiment item,
   and the historical/empirical material is disposed out of scope in the coverage with the
   framework's empirical-test page as its eventual subject.
7. **Manifest publication practice.** The closed inventories were prepared in scratch files and
   published by atomic rename; the later interface passes (locator-escaping repair, the
   `def-em-lab-geometry` addition to the sliding-bar item, the inherited-AC_omega declarations)
   rewrote the canonical file in place with the JSON writer, with the file parsed clean after
   each write. This is a recorded operational deviation from strict atomic-rename publication for
   follow-up edits.
8. **Escaping repair recorded.** A first serialization pass left control characters in a handful
   of source locators and one `physical_scope` field (arising from LaTeX commands such as
   `\nabla`, `\times`, `\frac`, `\tau`, `\boldsymbol`, `\alpha`, `\beta` written inside
   non-raw strings). The final pass repaired all of them; after the repair a full manifest scan
   found no control characters and no truncated command names, and every affected item was
   re-recorded on its current hash. No statement, hypothesis or dependency changed in that pass
   (the two inherited-AC_omega sentences were a separate, deliberate addition).

## Inventory decisions (recorded, not silent)

- `def-em-moving-circuit-geometry` (definition): the C2 moving material circuit (compact finite
  elementary Green region, embedded swept patch, nonzero normal, single-valued C1 material
  velocity), its flux and its emf line integral with units, the no-singularity-crossing
  exclusion and the subluminal condition for the relativistic force interpretation; no relation
  between emf and flux derivative is assumed.
- `lem-em-newtonian-linkage-symmetry` (mathematics): absolute convergence, equality of the three
  integral representations and symmetry/bilinearity of the Newtonian linkage pairing for smooth
  compact vector fields, by Tonelli/Fubini plus local integrability of the kernel.
- `lem-em-newtonian-curl-field-energy` (mathematics): `div A = 0`, `-Delta A = mu0 J`,
  the decay `|curl A| <= C(1+|x|^2)^{-1}` and the exact energy identity
  `int |curl A|^2 = mu0 int <A,J> >= 0` for `A = mu0 N(J)`, `div J = 0`, by one ball excision
  with a vanishing boundary flux.
- `pthm-em-motional-emf` (physics theorem): the transport formula of the moving-patch lemma
  plus the frozen-patch Faraday clause of the integral-Maxwell theorem give
  `emf(t) = -Phi_B'(t)` at every time in a compact no-crossing subinterval; the work-per-charge
  reading uses the adopted Lorentz coupling.
- `post-em-circuit-approximation` (postulate): fixed finite branch data, constant symmetric L,
  positive-definite C and positive-semidefinite R, the Faraday/capacitive/Ohmic branch
  relations, Kirchhoff laws, the declared quasistatic smallness condition with the explicit
  warning that no error theorem follows from it, SI units and the full exclusion list
  (radiation, leakage, distributed, nonlinear, hysteretic, proximity effects). No fabricated
  proof; `provenance.proof: not-applicable`.
- `pthm-em-inductance-reciprocity` (physics theorem): finite reciprocal linkage coefficients of
  fixed compact smooth conserved current profiles, the linear linkage identity, and
  `U(I) = (1/2) I^T L I = (1/2 mu0) int |B_J|^2 >= 0` with vanishing exactly for vanishing
  current and positive definiteness exactly for pointwise-independent profiles; the thin-wire
  and singular self-inductance exclusions are explicit.
- `pthm-em-inductor-energy` (physics theorem): the exact terminal-energy bookkeeping
  `int V.I dt = Delta(1/2 I^T L I)` for C1 currents and constant symmetric L in fixed geometry,
  and the identification of the quadratic form with the frozen magnetic field energy of the
  smooth-profile realization; changing geometry needs the mechanical work term and is excluded.
- `pthm-em-rl-lc-dynamics` (physics theorem): the unique C1 solution of the scalar RL equation
  with continuous source voltage and its power split; the explicit C2 LC oscillator, its exact
  initial values, the cosine-sine form, and conservation of `1/2 L I^2 + Q^2/(2C)` with the
  capacitive energy identified through the two-conductor reading of the capacitance theorem.
  Scope: lumped model only, no general networks, no radiation or distributed effects.
- `texp-em-sliding-bar-emf` (thought experiment): the ideal rigid rectangular circuit with a
  frictionless bar at prescribed speed in a uniform static field; `emf = -B0 l x'(t)`,
  `F = I l B0 e1` from the adopted continuum force density, and the exact instantaneous
  power balance `F.v + emf I = 0`; no measurement, no bar dynamics.
- `ex-em-transformer-idealization` (example): the two-circuit quadratic energy and power
  identity, the realization bound `|M| <= sqrt(L1 L2)` (with the perfect-linkage null direction
  carrying zero current), and the explicitly adopted common-flux ideal-transformer relations
  `V1/N1 = V2/N2 = Phi_c-dot` with the corresponding induced-emf signs; leakage, resistance,
  core loss, stray capacitance and magnetising current are excluded.
- `ex-em-rl-time-response` (example): the constant-voltage RL transient
  `I = V0/R + (I0 - V0/R) exp(-R(t-t0)/L)`, verified by differentiation with uniqueness
  inherited from the RL theorem, with the limit statement correctly qualified by the interval
  hypothesis.

## AC_omega declarations and exact uses

Eight items state Countable Choice (`def-countable-choice`, role `mathematical-premise`) and
identify its exact use; no item uses a stronger choice principle and no item states full AC:

- `lem-em-newtonian-linkage-symmetry` and `lem-em-newtonian-curl-field-energy`: the
  Tonelli/Fubini, local-integrability, polar and convergence interfaces of their published
  suppliers.
- `pthm-em-motional-emf`: inherited from `pthm-em-integral-maxwell` and `lem-em-moving-flux`.
- `pthm-em-inductance-reciprocity`: inherited from the magnetostatic vector-potential theorem
  and the two Newtonian lemmas.
- `pthm-em-inductor-energy`: clause (b) only, inherited through the linkage theorem; clause (a)
  is choice-free.
- `pthm-em-rl-lc-dynamics`: the capacitive-energy identification of clause (b) only, inherited
  from `pthm-em-capacitance-energy`; the RL solution, the LC candidate and the energy
  differentiation themselves are choice-free.
- `texp-em-sliding-bar-emf`: inherited from the transport supplier; the force integral is finite
  and explicit.
- `ex-em-transformer-idealization`: the realization clauses (b), inherited from the linkage and
  energy theorems.

## Sources (treatments, stamps)

1. **D. Tong, Electromagnetism (Cambridge lecture notes, 2026 printing, 236 pp.)**, Section 4.1
   and subsections, printed pp. 67-77; `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf`;
   stamp: 1 882 418 bytes, sha256_16 `b99b41156dfe6cd9`, 236 pages.
2. **R. Fitzpatrick, Classical Electromagnetism (complete course book, University of Texas, 364 pp.)**,
   Section 4.2 printed pp. 104-108 and chapter 7 printed pp. 216-241 (course nodes 43 and 79-86);
   `http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf`;
   stamp: 2 077 854 bytes, sha256_16 `dfc0d3b41ba2fa99`, 364 pages.
3. **D. J. Griffiths, Introduction to Electrodynamics, 3rd ed. (1999, 596 pp.)**, Sections
   7.1.2-7.1.3, 7.2.1, 7.2.3, 7.2.4;
   `https://www.hlevkin.com/.../David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf`;
   stamp: 13 484 424 bytes, sha256_16 `ab7b67a3f6d60049`, 596 pages.
4. **J. K. Hunter, Notes on Partial Differential Equations (UC Davis, 2014)**, Sections 2.6.1
   and 2.7 (printed pp. 33-37); `https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf`;
   stamp: 1 597 256 bytes, sha256_16 `0dbade1806f7a1ea`, 242 pages.
5. **G. Teschl, Partial Differential Equations: From Classical to Modern (archived author
   manuscript)**, Section 5.3, printed pp. 117-119; the archived URL in the coverage;
   stamp: 2 912 992 bytes, sha256_16 `cea9939acea1858e`, 392 pages.

`source-fetch-check` (stamp and check modes): **8/8 fetch-verified, 8/8 resolved, 0 drops**.
`url-sweep` on the coverage (scratch output under `/tmp/b30`): **5/5 live, 0 failed, 0 suspect**.
`source-backing --require-verified`: **18 authored results, every one backed**. Coverage
harvest: **38 dispositions, 0 errors, 0 warnings** (including the out-of-scope dispositions for
the historical Faraday account, the ideal solenoid self-inductance, the driven LCR resonance,
the distributed transmission line and the coupled bar dynamics, each with a specific reason).
The short Fitzpatrick nodes 79 and 80 (below the fetch checker's substantive-text floor) were
not used as sources; the chapter content is cited through the complete book and nodes 81-86,
which are all above the floor and were stamped.

## Dependency verification, levels and cross-batch input

Every `deps` entry was checked against the current statement of the supplier: hypotheses,
direction, conventions, regularity and axiom strength. All in-run suppliers are scaffolded
(batches 13, 16, 23, 24, 25, 26, 28 and 29); every out-of-run supplier is a published item
homed on a page inside the transitive closure of this page's declared `requires`, verified
against `research/plan-spec.json` and the library pages, and the one deliberate avoidance (the
real-trigonometric derivative page) is recorded above. Roles follow the physics-content rules:
`physical-result` only for established physics theorems, `physical-assumption` only for
postulates, `formulation-prerequisite` for definitions and model language, and
`mathematical-premise` for every mathematical supplier (the two new lemmas have only
mathematical roles).

| item | level | principal in-run deps |
|---|---|---|
| `def-em-moving-circuit-geometry` | 9 | `def-em-lab-geometry` (6), `def-em-moving-patch` (0) |
| `lem-em-newtonian-linkage-symmetry` | 0 | none in-run |
| `lem-em-newtonian-curl-field-energy` | 1 | `lem-em-smooth-newtonian-upgrade` (0) |
| `pthm-em-motional-emf` | 18 | `pthm-em-integral-maxwell` (14), `post-em-lorentz-coupling` (17) |
| `post-em-circuit-approximation` | 18 | `def-em-steady-current-regime` (17), `post-em-material-closure` (16) |
| `pthm-em-inductance-reciprocity` | 19 | `pthm-em-magnetostatic-vector-potential` (18), `post-em-circuit-approximation` (18) |
| `pthm-em-inductor-energy` | 20 | `pthm-em-inductance-reciprocity` (19), `pthm-em-motional-emf` (18) |
| `pthm-em-rl-lc-dynamics` | 21 | `pthm-em-inductor-energy` (20), `pthm-em-capacitance-energy` (20) |
| `texp-em-sliding-bar-emf` | 19 | `pthm-em-motional-emf` (18), `def-em-moving-circuit-geometry` (9) |
| `ex-em-transformer-idealization` | 21 | `pthm-em-inductance-reciprocity` (19), `pthm-em-inductor-energy` (20) |
| `ex-em-rl-time-response` | 22 | `pthm-em-rl-lc-dynamics` (21) |

The consumer-batch input
`research/physics-em-sr-40-2026-10-08-batch-30.cross-batch-dependencies.json` contains **34
rows**: three page rows (to `em-electrostatic-boundaries-and-conductors`, `em-magnetostatics-in-vacuum`
and `em-material-response`) and 31 item rows (18 to batch 23, 5 to batch 28, 2 to batch 13, 2 to batch 24,
and 1 each to batches 16, 25, 26 and 29; the remaining edges are same-batch). Every row
states the exact consumer, supplier, claim, hypotheses and proof/formulation use and is
`open` (suppliers scaffolded, not authored). The refreshed unified ledger shows batch 30
reviewed, **34/34 consumer edges reviewed, no batch-30 consumer edge without a review row and
no orphaned reviews**.

## Checks actually run (2026-10-09, this dispatch)

- `item-dependency-levels.mjs check --run …`: no error names a batch-30 item; the stored labels
  equal the computed ones. The remaining run-wide errors observed during this dispatch are the
  `empty scaffold inventory` rows of two other batches' still-unscaffolded pages
  (`em-empirical-tests-and-scope` and `em-scattering-and-scalar-diffraction`, held by their own
  workers; the row count varied between two and four during the dispatch as sibling scaffolds
  landed).
- `step1-decisions.mjs check --run …`: **452 of 452 ready** at the final observation; all eleven
  batch-30 items are closed with current hashes and the only open work rows are other batches'
  still-empty pages.
- `content-policy.mjs --manifest-only` over all run manifests: **452 scoped items, 0 errors,
  0 warnings**.
- `manifest-deps.mjs` on this batch: **11 items, 0 errors**.
- `coverage-checklist.mjs …batch-30.coverage.json --require-destination`: **2 pages,
  38 harvested results, 0 errors, 0 warnings**.
- `source-fetch-check.mjs --coverage … --stamp` then check mode: **8/8 fetch-verified,
  8/8 resolved**, stamps recorded above.
- `url-sweep.mjs` on the coverage (scratch output under `/tmp/b30`): **5/5 live, 0 suspect**,
  5 citation decisions (0 drops).
- `source-backing.mjs --require-verified` with that liveness file: every authored result
  still backed.
- `manifest-integrity.mjs --run …`: 80 pages owed, 80 in the manifests, **no scope drift**.
- `drift-review-check.mjs --run …`: 40 pages reviewed, no blocked edges, every owed A and B
  page strictly above 95 % published-or-earlier-in-run.
- `validate-plan.mjs research/plan-spec.json --run …`: **OK** — acyclic, no item cycles,
  forward references, B-page dependencies or unresolved ids. 25 warnings remain; three of them
  are pre-existing `redundant-prereq` warnings naming this page (`picard-lindelof-and-first-order-odes`
  is reached transitively through the three EM pages) — plan metadata, not edited here. An
  earlier transient in this dispatch showed two `undeclared-prereq` errors on other batches'
  example pages; they were fixed by their owners and no finding named this pair.
- `physics-check.mjs --plan research/plan-spec.json`: **0 errors, 26 654 items checked**.
- `frontier-item-gate.mjs --run … --tool extcheck -- --manifest-only`: **cannot run to
  completion** while any run manifest still has an empty inventory (it failed on batch 38's
  empty page at the observations made during this dispatch) — a run-wide condition that clears as sibling workers
  land; batch-30 items declare no `proved_here: false`, `external_refs` or `forward_refs`.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and deduplicated; batch 30 has
  all 34 edges reviewed and no orphaned reviews; `--require-reviewed` still fails run-wide only
  because two other batches have not written their inputs.

## Published defects and unresolved findings

No published defect was found in any supplier examined: the published mathematics used
(`def-newtonian-potential`, `lem-laplace-fundamental-kernel-is-locally-integrable`,
`thm-decay-of-the-newtonian-potential-of-compactly-supported-data`, the Fubini/Tonelli pair,
`thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
`lem-the-divergence-and-curl-of-a-cross-product`, `cor-the-curl-of-a-curl-of-a-c2-field`,
`thm-first-order-linear-ode-integrating-factor`, the complex-exponential/analytic items,
`thm-eulers-formula`, `thm-complex-trigonometric-hyperbolic-dictionary`,
`cor-zero-derivative-implies-constant`, `def-countable-choice`) is published with statements
matching their uses, and every declared Countable-Choice hypothesis is carried into the
consuming statement. Unresolved findings, all outside batch 30's authority: (i) the run-wide
gates still held by two other batches' empty pages; (ii) the pre-existing `redundant-prereq`
plan warnings on this and other pages' `requires` metadata; (iii) the recorded route choice for
the LC solution, with the single plan change that would substitute the textbook trigonometric
route if the owner prefers it; (iv) the operational notes on in-place follow-up edits and the
escaping-repair pass above.

Status: **scaffold-complete; Step-3 authoring and independent review pending.** Owner/engine
reconciliation and the full engine gates follow construction; the readiness records are not
independent mathematical approval.
