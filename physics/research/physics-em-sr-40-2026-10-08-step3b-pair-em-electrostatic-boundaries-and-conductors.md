# Step 3b authoring report — pair `em-electrostatic-boundaries-and-conductors` / `-examples`

- Run: `physics-em-sr-40-2026-10-08`, role alpha-high, label
  `step3b-pair-em-electrostatic-boundaries-and-conductors-7cd15f520d380796`, batch 26, 2026-10-09.
- A page `em-electrostatic-boundaries-and-conductors` (order 331, 9 items);
  B page `em-electrostatic-boundaries-and-conductors-examples` (order 332, 3 items);
  category `classical-electromagnetism`, library `physics`.
- **Entry state of this dispatch.** The pair's twelve item carriers, the two page
  carriers under `library/classical-electromagnetism/`, the batch-26 manifest,
  coverage, proof-contracts and cross-batch input already existed from earlier
  Step-3b attempts of this run (labels `a850b2cbab5e09a8` and
  `86ec5f8bcd302f59`; the previous report was checkpointed through item 3). No
  Step-3b item decision was recorded for any of the twelve items, two strict
  proof-contract citations were missing, and no completion battery had been run
  on the final carriers. This pass audited all twelve items end to end, repaired
  two local proof defects, completed the missing citation contracts, recorded
  `dependency_level` in the item metadata, updated five cross-batch rows with the
  exact blocker evidence, recorded all twelve Step-3b item decisions, and ran the
  completion battery.

## Owned IDs, levels and final decisions (authoring order)

| # | level | item | page | kind | decision |
|---|-------|------|------|------|----------|
| 1 | 0 | `lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface` | A | lemma (math) | accept |
| 2 | 0 | `lem-em-half-space-harmonic-uniqueness-with-decay` | A | lemma (math) | accept |
| 3 | 1 | `lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain` | A | lemma (math) | accept |
| 4 | 16 | `post-em-electrostatic-conductor-model` | A | postulate | accept |
| 5 | 17 | `pthm-em-conductor-surface-charge` | A | physics-theorem | repaired |
| 6 | 17 | `pthm-em-electrostatic-bvp-uniqueness` | A | physics-theorem | escalate |
| 7 | 17 | `pthm-em-image-method-certificate` | A | physics-theorem | accept |
| 8 | 18 | `pthm-em-electrostatic-bvp-existence` | A | physics-theorem | escalate |
| 9 | 18 | `ex-em-grounded-plane-image-force` | B | example | accept |
| 10 | 19 | `ex-em-neumann-data-failure` | B | example | escalate |
| 11 | 20 | `pthm-em-capacitance-energy` | A | physics-theorem | escalate |
| 12 | 21 | `ex-em-parallel-plate-capacitor` | B | example | accept |

Levels 0,0,1,16,17,17,17,18,20 (A) and 18,19,21 (B) were re-computed by
`item-dependency-levels check --run` on the final manifests (no error names a
batch-26 page or item); the same values are now recorded in each item's
frontmatter and in the batch-26 manifest entry.

## What this pass changed

Re-checked the applicable Step-3a findings against the current inputs: the 3a
scope decision is still current (`step3-decisions check --phase scope` closed),
its two recorded findings are the deliberate out-of-scope exclusions
(cavity/Faraday, conductor surface pressure) and the advisory B-page
`coverage-low-yield` warning, and neither requires authoring action in this
pair; the scope hash still binds the unchanged page/statement objects.

1. **Repairs (item 5 and item 6).**
   - `pthm-em-conductor-surface-charge`, proof step 2.2: removed the false chart
     identity `R(X(y)+sn(y)) = R(X(y))+s e_3` (it holds only for a chart whose
     normal direction is the chart's third axis, which a general graph chart does
     not satisfy); the step now asserts only that `x_s := X(y)+sn(y)` lies on the
     vacuum side for small `s>0`, which is all the argument uses. Everything else
     in the step was re-checked.
   - `pthm-em-electrostatic-bvp-uniqueness`, proof step 2.2: the upgrade from
     `\nabla w=0` almost everywhere to `\nabla w=0` everywhere now explicitly
     cites the continuity of `\nabla w` on the connected open `\Omega_v` before
     applying the vanishing-differential characterisation.
2. **Citation contracts.** Added exact-quote contracts for
   `[F6] -> thm-em-elliptic-boundary-existence` (bvp-uniqueness) and
   `[F1] -> thm-em-elliptic-boundary-existence` (bvp-existence) in
   `research/physics-em-sr-40-2026-10-08-batch-26.proof-contracts.json`.
3. **Metadata.** Added `dependency_level` to the twelve items' frontmatter
   (manifest already carried the same values). No statement/definition interface
   was changed; no deps edge was added or removed.
4. **Cross-batch input.** Updated the five batch-26 rows whose supplier is
   unfinished (below) with the exact missing IDs, consuming items and proof
   steps, and refreshed the unified ledger with
   `frontier-dependency-ledger.mjs refresh --run` (59 rows in the batch input,
   no orphaned reviews).
5. **Decisions.** Recorded with `step3-decisions.mjs record-item` (confidence 1
   for every accept/repaired, examined-dependency lists recorded): 7 `accept`,
   1 `repaired`, 4 `escalate`.

## Flagged unfinished suppliers (exact IDs, consumers, consuming steps)

Root cause of all four escalations: the pair `em-expanded-analysis-prerequisites`
(batch 16) has 20 of its 29 A items unauthored, including the three weak
solvability/regularity suppliers below. `thm-em-elliptic-boundary-existence`
(batch 18) is a carrier but is itself unfinished through those same items.

| missing supplier (batch 16) | consumer (this pair) | consuming proof step |
|---|---|---|
| `lem-em-prescribed-fractional-dirichlet-existence` | `pthm-em-electrostatic-bvp-uniqueness` | step 1.3, `[F4]` (weak Dirichlet uniqueness, claim (c)(i)) |
| `lem-em-prescribed-fractional-dirichlet-existence` | `pthm-em-electrostatic-bvp-existence` (indirect) | step 1.1 via `[F1]` = `thm-em-elliptic-boundary-existence` `[L1]` |
| `lem-em-weak-neumann-and-transmission-existence` | `pthm-em-electrostatic-bvp-uniqueness` | step 1.3, `[F5]` (weak Neumann/transmission uniqueness, claim (c)(ii)-(iii)) |
| `lem-em-weak-neumann-and-transmission-existence` | `ex-em-neumann-data-failure` | steps 2.3 and 4.1, `[F4]` (weak no-solution and companion failure, claim (b)) |
| `lem-em-weak-neumann-and-transmission-existence` | `pthm-em-electrostatic-bvp-existence`, `pthm-em-capacitance-energy` (indirect) | via `[F1]`/`[F7]` and bvp-uniqueness, through `thm-em-elliptic-boundary-existence` `[L3]` steps 1.2-1.3 |
| `lem-em-smooth-domain-elliptic-regularity` | `pthm-em-electrostatic-bvp-uniqueness` (indirect), `pthm-em-electrostatic-bvp-existence`, `pthm-em-capacitance-energy` | via `thm-em-elliptic-boundary-existence` `[L2]` steps 2.1-2.2 |
| `thm-em-elliptic-boundary-existence` (batch 18; carrier exists, proof unfinished) | `pthm-em-electrostatic-bvp-uniqueness` | step 1.3, `[F6]` |
| `thm-em-elliptic-boundary-existence` | `pthm-em-electrostatic-bvp-existence` | steps 1.1, 1.2, 1.3, 3.1, `[F1]` |

Consequences actually observed on the final carriers: strict proof-contract
reports exactly three errors, `citation-fact-uncontracted` for
`F4/F5 -> lem-em-prescribed-fractional-dirichlet-existence`/`lem-em-weak-neumann-and-transmission-existence`
in `pthm-em-electrostatic-bvp-uniqueness` and
`F4 -> lem-em-weak-neumann-and-transmission-existence` in
`ex-em-neumann-data-failure`; run `depcheck` reports `dep-unresolved` for those
ids; run `fwdcheck` reports `link-unplanned` for the same ids in those two
items. **Remedy:** author the three batch-16 items, then re-reconcile the exact
uses in the table (and re-clear the two items' contract errors). The four
escalated decisions remain owner-held until then; nothing outside this scope is
required.

## Checkpoints (one per item; state after the final edits)

### Item 1 — `lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface` (level 0) — accept
- Claim kept from the accepted scaffold: (a) nonempty compact boundary with
  finitely many compact components; (b) finite regular injective `C^k` graph
  parametrisations with `C^k` transitions and the finite surface measure; (c) the
  continuous outward unit normal orthogonal to the graph tangents; plus the
  two-ball witness that the complement need not be connected.
- Authoring note carried from the earlier pass (re-verified): the chart patch is
  taken over the open projection set `B''` and its sub-ball `B_1`, so no
  full-cylinder assumption is used; the two-ball witness uses the published
  ball-chart lemma, whose chart domain is a cylinder.
- Deps: 37, all published/imported mathematics plus the declared `AC_\omega`
  convention. Checks: precheck PASS (direct), proof-layout 0 defects,
  rendercheck OK.

### Item 2 — `lem-em-half-space-harmonic-uniqueness-with-decay` (level 0) — accept
- Claim kept: a function continuous on the closed half-space minus the pole,
  `C^2` harmonic off the pole, zero on the plane, sub-Coulomb at the pole and
  vanishing at infinity is zero. Proof: truncated domain
  `U = H cap (B_R(0) \ B_delta(p))`, harmonic barrier `eta(1+|x-p|^{-1})`,
  boundary signs plane/outer sphere/inner sphere, weak maximum principle,
  `eta -> 0`.
- Deps: 15, all published/imported mathematics. Checks: PASS (direct),
  proof-layout 0 defects, rendercheck OK.

### Item 3 — `lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain` (level 1) — accept
- Claim kept: (a) bounded `C^k` domain; (b) boundary the disjoint union of outer
  boundary and conductor surfaces; (c) normal sign (outer unchanged, conductor
  negated); (d) finitely many components, each a bounded `C^k` domain with
  boundary a union of incident compact pieces.
- Authoring note carried (re-verified): the collar argument uses a ball patch
  `B_1'` and the positive graph-to-complement distance `delta` with
  `|h-h(y_x)|<=delta/4`, so the level `H` is admissible and the three-segment
  polygonal path lies inside the collar; I additionally re-derived the
  component-coincidence reading of step 8.1 via the band chart
  `R^{-1}({|s-h(y)|<delta})`, which is sound with the constructed `B_1'`.
- Deps: 36 (published/imported mathematics, `AC_\omega`, and item 1). Checks:
  PASS (direct), proof-layout 0 defects, rendercheck OK.

### Item 4 — `post-em-electrostatic-conductor-model` (level 16) — accept
- Adopted model as stated in the file: geometry (compact smooth bodies strictly
  inside a general open region; separate bounded smooth ambient branch with
  connected vacuum), field-free interior, continuous stationary surface charge
  as the declared stationary-sheet source, the adopted distributional vacuum
  Maxwell equations, the single-function equipotential convention, the two data
  types, and the explicit scope exclusions (dynamics, material, forces, energy,
  cavity configurations, measurement).
- Physics-review contract present (formulation/scope/sources/non_derivation);
  three source URLs (Griffiths §2.5.1-2.5.4, §3.1.5-3.1.6; Tong §2.4-2.4.2;
  Chew §32.1-32.2, §24.4); `verification.precheck: n/a` and precheck reports
  nonproof structure PASS; no empirical claim. Deps: 12 formulation
  prerequisites and the two local geometry lemmas. Checks: content-policy
  clean, contract clean.

### Item 5 — `pthm-em-conductor-surface-charge` (level 17) — repaired
- Claim: pointwise, under the model plus the one-sided joint `C^1` regularity of
  `pthm-em-fixed-vacuum-jumps` across `S`: `n.E_+ = sigma/eps0`, `n x E_+ = 0`;
  `partial phi/partial n = -sigma/eps0`; the trace of `phi` is constant on each
  connected component of `S` with value `V_j` on `partial D_j`; and
  `Q_j = integral sigma = eps0 integral n.E_+ = eps0 integral partial phi/partial nu`.
- Repair as recorded above (false chart-normalisation clause removed in step
  2.2). Re-checked: the jump-theorem use with conductor side `Omega_-`; the sign
  chain; the uniform-derivative-limit constancy argument; the flux identities
  with `nu=-n`. Deps: 19; the jump theorem carrier exists and its own closure
  contains no missing item (its Step-3b decision is recorded elsewhere).
  Checks: precheck PASS, proof-layout 0 defects, rendercheck OK,
  content-policy clean.

### Item 6 — `pthm-em-electrostatic-bvp-uniqueness` (level 17) — escalate
- Claim: classical Dirichlet uniqueness; classical Neumann uniqueness modulo
  componentwise constants with the necessary componentwise flux compatibility;
  weak Dirichlet/Neumann/transmission variants; the conductor reading; the
  unbounded exterior witness `0` and `1-R/|x|` showing the decay hypotheses
  cannot be dropped.
- Local repair: step 2.2 continuity bridge (above). **Escalation:** steps 1.3
  consume `[F4]`, `[F5]` (missing batch-16 items) and `[F6]`
  (`thm-em-elliptic-boundary-existence`, itself unfinished through the same
  batch-16 items plus `lem-em-smooth-domain-elliptic-regularity`). Exact state
  and remedy in the table above. Deps: 25.
- Checks: precheck PASS, proof-layout 0 defects, rendercheck OK, content-policy
  clean; strict proof-contract 2 errors confined to `[F4]`,`[F5]` (see above);
  depcheck `dep-unresolved`; fwdcheck `link-unplanned`.

### Item 7 — `pthm-em-image-method-certificate` (level 17) — accept
- Claim kept: the image potential is `C^\infty` and harmonic off the pole (a);
  locally integrable with `-Delta T = (q/eps0) delta_p`, `div E = (q/eps0) delta_p`,
  `curl E = 0` in `D'(H)` (b); continuous on the closed half-space minus the pole
  with zero plane trace and the bound `|phi_I(x)| <= 2|q|a/(pi eps0 |x|^2)` for
  `|x| >= 2a` (c); unique in the declared continuous-boundary/decay class by the
  local half-space lemma (d); the declared ideal grounded-plane reading with
  smooth induced density, absolutely convergent total charge `-q`, and the
  full-space extension identity `div Etilde = (q delta_p + sigma delta_Pi)/eps0`,
  `curl Etilde = 0` (e); explicit exclusions (f).
- I re-derived the decay bound, the induced density and total charge, and the
  three boundary terms of the truncated-region divergence computation (plane
  term `sigma/eps0`, inner sphere `q/eps0`, outer sphere vanishing). Deps: 43;
  all direct suppliers authored. Checks: precheck PASS, proof-layout 0 defects,
  rendercheck OK, content-policy clean.

### Item 8 — `pthm-em-electrostatic-bvp-existence` (level 18) — escalate
- Claim: existence/regularity for the Dirichlet, Neumann and transmission
  branches with `eps = eps0 I`; the conductor reading with the distributional
  sheet realization via `lem-em-interface-derivatives` and the surface-charge
  identities; explicit scope exclusions (charge-data solvability, nonsmooth
  geometry, material, unbounded, empirical).
- **Escalation:** steps 1.1, 1.2, 1.3 and 3.1 use `[F1]` =
  `thm-em-elliptic-boundary-existence`, whose carrier exists but whose proof
  Facts `[L1]`,`[L3]` consume the two absent batch-16 solvability lemmas and
  whose `[L2]` consumes the absent `lem-em-smooth-domain-elliptic-regularity`;
  step 1.3 additionally uses `[F7]` = item 6, itself escalated. The exact-quote
  contract for `[F1]` was completed this pass, so the strict contract gate no
  longer names this item. Remedy in the table above. Deps: 20.
- Checks: precheck PASS, proof-layout 0 defects, rendercheck OK, content-policy
  clean.

### Item 9 — `ex-em-grounded-plane-image-force` (level 18) — accept
- Claim: in the ideal grounded-plane configuration, the external mirror field at
  the held charge is `E_ext(p) = -q e_3/(16 pi eps0 a^2)`, and the adopted
  external Lorentz coupling at zero velocity gives
  `F = q E_ext(p) = -q^2 e_3/(16 pi eps0 a^2)`; strictly attractive for `q != 0`,
  zero for `q = 0`; self-field excluded; no measurement, motion, radiation,
  fringe or self-force claim; holding requires a balancing support force.
- Re-checked the gradient of the mirror term at `p` and the force product.
  Deps: 16; all load-bearing suppliers authored and decided elsewhere; the
  closure's only unauthored node is the deep SR item
  `thm-sr-proper-orthochronous-lorentz-algebra` reached transitively through
  `def-em-electromagnetic-tensor` (run practice for decided siblings treats such
  deep SR transitive nodes as tracked by their own pair). Checks: precheck PASS,
  proof-layout 0 defects, rendercheck OK, content-policy clean.

### Item 10 — `ex-em-neumann-data-failure` (level 19) — escalate
- Claim: on the unit ball, `-Delta phi = 0` with `partial nu phi = 1` has no
  classical solution (`0 = -|S^2| = -4pi`) and no weak `H^1` solution (testing
  `v = 1` gives `l(1) = 4pi != 0`); the companion unit-source/zero-field datum
  fails by the same flux budget. `|S^2| = 4pi` computed from the polar surface
  formula, the unit-ball volume and the Gamma values.
- **Escalation:** `[F4]` = `lem-em-weak-neumann-and-transmission-existence`
  (batch 16) is absent; steps 2.3 and 4.1 consume it. Exact state and remedy in
  the table above. Deps: 21. Checks: precheck PASS, proof-layout 0 defects,
  rendercheck OK, content-policy clean; strict proof-contract 1 error on
  `[F4]`; depcheck/fwdcheck findings for the same id.

### Item 11 — `pthm-em-capacitance-energy` (level 20) — escalate
- Claim: unit-potential solutions; capacitance matrix
  `C_{jk} = eps0 integral_{partial D_j} partial nu phi_k`; linearity `Q = CV`;
  reciprocity `C_{jk} = C_{kj}` by Green's pairing; energy identity
  `U = (eps0/2) integral |grad phi^V|^2 = (1/2) V^T C V = (1/2) sum V_j Q_j`;
  positive definiteness; the two-conductor reading with `C_{11} > 0`; the
  assembly accounting; scope exclusions.
- **Escalation:** the `[F2]`/step 1.1 use of `pthm-em-electrostatic-bvp-existence(c)`
  and `pthm-em-electrostatic-bvp-uniqueness(a)` for the existence and uniqueness
  of the unit-potential Dirichlet solutions depends on those items' open
  obligations through `thm-em-elliptic-boundary-existence` and the three absent
  batch-16 items (table above). Remedy: author the suppliers and re-reconcile the
  consumers' exact steps, then re-reconcile this use. Separate observation (not
  the escalation trigger): the closure also reaches the currently unauthored SR
  item `thm-sr-proper-orthochronous-lorentz-algebra` transitively via
  `pthm-em-electrostatic-field-energy - post-em-lorentz-coupling -
  def-em-electromagnetic-tensor`; no proof step of this item uses that item.
  Deps: 24. Checks: precheck PASS, proof-layout 0 defects, rendercheck OK,
  content-policy clean.

### Item 12 — `ex-em-parallel-plate-capacitor` (level 21) — accept
- Claim: the ideal two-infinite-plane model is declared explicitly and verified
  directly: `div E = (sigma/eps0)(delta_{Pi_+} - delta_{Pi_-})`, `curl E = 0` in
  `D'(R^3)` against compactly supported tests (Fubini and the one-dimensional
  FTC); equipotential plates with `V = sigma d/eps0`; and for any
  Lebesgue-measurable portion of area `A > 0`, `Q = sigma A`,
  `C = eps0 A/d > 0`, and
  `U = sigma^2 A d/(2 eps0) = (1/2) Q V = Q^2/(2C) = (1/2) C V^2`, with the slab
  measure handled through the completion argument for measurable bases.
- The link to `pthm-em-capacitance-energy` in clause (d)/step 3.1 is a
  comparison statement about that theorem's conclusions for bounded
  configurations; it is not a proof premise (the identities above are derived
  directly, and the infinite planes are explicitly outside the theorem's
  hypotheses). The dependency remains declared and hash-bound, so a change to
  the theorem stales this decision. Deps: 28. Checks: precheck PASS,
  proof-layout 0 defects, rendercheck OK, content-policy clean.

## Checks actually run (final carriers)

- `precheck.mts` on the twelve explicit item paths: **12 checked, 0 failing**
  (item 4 nonproof structure; the rest direct).
- `rendercheck.mjs` on the twelve items and the two pages: **OK, 14 files**
  (KaTeX parses every math span, YAML parses).
- `proof-layout.mjs` on the twelve explicit item paths (single command):
  **12 items, 78 steps, 0 defects**.
- `content-policy.mjs research/...-batch-26.pages.json`: **12 scoped items, 0
  errors, 0 warnings**.
- `manifest-deps.mjs` batch 26: **12 items, 0 normalized, 0 errors**.
- `item-dependency-levels.mjs check --run`: **473 items across 80 pages, no
  error** (the twelve batch-26 labels re-compute to the recorded levels).
- `proof-contract.mjs ... --strict`: **3 errors, 12/12 items checked** — all
  three are the `citation-fact-uncontracted` rows for the absent batch-16
  suppliers listed above; the two contracts that could be completed (F6, F1 to
  `thm-em-elliptic-boundary-existence`) were added this pass.
- `citation-fidelity.mjs` batch 26: **281 citations over 12 authored items; no
  missing quote; no widening candidates**.
- `boundary-audit.mjs` batch 26: **88 rows; no template reuse; no contradicted
  dispositions** (14 rows `not_applicable`).
- `coverage-checklist.mjs` batch 26: **2 pages, 46 harvested results, 0 errors,
  1 warning** (the known advisory `coverage-low-yield` on the B page).
- `source-fetch-check.mjs` batch 26 (check mode): **8/8 fetch-verified, 8/8
  resolved** (Griffiths, Tong, Chew, Hunter full texts, stamped by Step 1).
- `manifest-integrity.mjs --run`: **80 pages owed, 80 in the manifests, no scope
  drift**.
- `validate-plan.mjs research/plan-spec.json --run`: exit 1 with **39
  `undeclared-prereq` errors, none naming pages 331/332**; pages 331/332 carry
  only informational rows, so the pair is clean and the run-level failures
  belong to other pages (Step-4 splice input).
- `physics-check.mjs --run --plan`: **4 errors, all in the SR pair**
  (`ex-sr-primed-frame-origin-motion`, `thm-sr-tensor-and-current-transformation`
  using `def-sr-si-units-and-coordinate-conventions`); no batch-26 item named.
- `frontier-item-gate --tool depcheck` (run scope): 166 errors; the only rows
  naming batch-26 carriers are the expected `dep-unresolved`/
  `link-unresolved` findings for the absent batch-16 items in items 6 and 10
  (8 lines).
- `frontier-item-gate --tool fwdcheck` (run scope): FAIL; the batch-26 findings
  are the same `link-unplanned` rows for items 6 and 10; the other findings
  belong to batches 16/18.
- `frontier-item-gate --tool extcheck -- --manifest-only`: **OK, 27127 items, 0
  recorded-not-proved, 0 resting on them**.
- `step3-decisions.mjs check --run --phase scope`: **closed** (all 40 pairs).
- `step3-decisions.mjs check --run --phase final`: the run total moves as
  concurrent writers record decisions (128/473 at the time of the check); of
  this pair **8 of 12 closed** (7 accept + 1 repaired) and exactly the four
  documented escalations open and owner-held. Concurrent SR-pair writers were
  editing transitive suppliers (`thm-sr-tensor-and-current-transformation`,
  `thm-sr-antisymmetric-observer-decomposition`,
  `lem-sr-compact-variation-and-fundamental-lemma`) during this pass; four
  accept/repaired records were re-bound to the current inputs
  (`post-em-electrostatic-conductor-model`, `pthm-em-image-method-certificate`,
  `ex-em-grounded-plane-image-force`, `ex-em-parallel-plate-capacitor`), and the
  currency rule will re-stale any record whose supplier closure changes again —
  the engine's writer-drain recertification before each gate performs the final
  rehash pass.
- `frontier-dependency-ledger.mjs refresh --run`: refreshed and deduplicated;
  the batch-26 input keeps 59 rows (2 page, 57 item) and the five updated rows
  carry the exact blocker evidence; no orphaned review for this batch.

Run-level observations (not batch-26 defects): `step1-decisions check --run`
reports readiness records stale after the authoring edits run-wide (owner-owned;
the authoring pass cannot re-record them without `--owner`), `fwdcheck` FAILs on
batch-18 plan links (`thm-em-waveguide-spectral-completeness`,
`lem-em-sphere-outgoing-dirichlet-to-neumann-map`), and `depcheck` reports the
unauthored carriers of batches 2/16/18/31/38-40 as `focus-item-unknown`.

## Additions and registrations

- The three local mathematical prerequisites (items 1, 2, 3) are Step-3b
  additions of this pair made by the earlier passes on the owner-authorized A
  page; they are fully authored, registered on the A page and in the batch-26
  manifest, and appear before their consumers. This pass added no further item.
- Page carriers: `library/classical-electromagnetism/em-electrostatic-boundaries-and-conductors.md`
  (9 items) and `...-examples.md` (3 examples), both present with summaries and
  matching manifest lists.

## Published concerns / cross-pair observations

1. **Blocking (this pair):** the three batch-16 suppliers and the unfinished
   batch-18 carrier `thm-em-elliptic-boundary-existence` block items 6, 8, 10,
   11 (confidence: confirmed; exact ids and steps above). Remedy is authoring
   batch 16; no pair-local change can clear it.
2. **Watch (cross-pair):** `theorem thm-sr-proper-orthochronous-lorentz-algebra`
   is unauthored while three of this pair's carriers reach it transitively
   through `def-em-electromagnetic-tensor`/`post-em-lorentz-coupling`; no
   batch-26 proof step uses it, and decided sibling items
   (`post-em-lorentz-coupling`, `def-em-electromagnetic-tensor`,
   `pthm-em-electrostatic-field-energy`) were accepted with the same transitive
   gap, so this is recorded for the SR pair's owner rather than escalated here.
3. **Batch-18 sibling:** `thm-em-elliptic-boundary-existence` also carries
   `cited-not-in-deps` findings for `def-axiom-of-choice`,
   `def-countable-choice`, `def-bounded-c-k-domain-and-boundary-charts` and
   `def-sobolev-space-wkp-and-its-norm`; not this pair's file, reported for its
   owner.

## Honest uncertainty

- The escalated relationships cannot be verified as adequate until batch 16
  is authored; the escalations are the honest current state, not a claim of
  defect in the suppliers' planned content.
- I re-read the on-disk supplier statements used by this pair (jump theorem,
  batch-25 potentials/Coulomb/energy, batch-16 manifests, interface lemmas) and
  the four full-text source locators; I did not re-fetch the external full texts
  this pass (the Step-1 fetch stamps verify 8/8).
- Residual review points handed to Steps 5-8: the band-shrink component reading
  in item 3 step 8.1 (re-derived and accepted here); the truncated-region
  boundary terms in item 7 step 3.1 (re-derived here); the weak mixed-branch
  coercivity use in item 6 step 2.2; and the elliptic theorem's own `[L1]-[L3]`
  obligations (batch 16/18).

## Handoff

- **Completed IDs:** the twelve owned items are fully authored (claims preserved
  from the accepted scaffold), with decisions recorded — `accept` for
  `lem-em-boundary-…`, `lem-em-half-space-…`, `lem-em-vacuum-region-…`,
  `post-em-electrostatic-conductor-model`, `pthm-em-image-method-certificate`,
  `ex-em-grounded-plane-image-force`, `ex-em-parallel-plate-capacitor`;
  `repaired` for `pthm-em-conductor-surface-charge`; `escalate` for
  `pthm-em-electrostatic-bvp-uniqueness`,
  `pthm-em-electrostatic-bvp-existence`, `ex-em-neumann-data-failure`,
  `pthm-em-capacitance-energy`.
- **Checks run:** the battery in the section above (all explicit-path item
  checks, batch manifest/coverage/contract checks, run-level depcheck/fwdcheck/
  extcheck/validate-plan/physics-check, decision checks, ledger refresh).
- **Added suppliers:** none by this pass; three local mathematical prerequisite
  lemmas added by the pair's authoring.
- **Published concerns:** none new; the flagged prerequisites and observations
  above are the open items.
- **Open obligations:** author `lem-em-prescribed-fractional-dirichlet-existence`,
  `lem-em-weak-neumann-and-transmission-existence`,
  `lem-em-smooth-domain-elliptic-regularity` (batch 16) and re-reconcile the
  uses in items 6, 8, 10, 11; then re-record those four decisions. Everything
  else in this pair is authored, registered and locally checked, with the
  independent Steps 5-8 audit still to come.
