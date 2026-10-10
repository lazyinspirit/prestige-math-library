# Step 3a scope report — pair `em-retarded-fields-and-radiation` / `em-retarded-fields-and-radiation-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha (Step 3a scope review); batch 36; review date 2026-10-09.
- A page: `em-retarded-fields-and-radiation` ("Retarded fields and radiation", order 351, category
  `classical-electromagnetism`, library `physics`).
- B page: `em-retarded-fields-and-radiation-examples` (order 352).
- Current inventory: **9 A items + 3 B items** (A: 1 postulate, 1 definition, 1 mathematics lemma,
  5 physics-theorems, 1 remark; B: 2 examples, 1 thought-experiment).
- Scope decision: **sufficient**, recorded with `tools/physics-support/step3-decisions.mjs record-scope`
  (decision bound to the current scope hash of the pair).
- Reviewed snapshot (raw sha256): batch-36 pages `5493ee1bd17a552d…`, coverage `4560d306930b6211…`,
  notes `cce16538f0658887…`, cross-batch input `5d6178f378b9448d…`. The 16 items of the accepted
  radiation-interface round 1 (`…-radiation-interface-round1.edits.json`, sha256 `1573e0e97f77cf8a…`,
  matching `…-reconciliation10.accepted-proposals.json`) are byte-identical to the current manifests (16/16).

## 1. Inputs read

- Current manifests: `research/physics-em-sr-40-2026-10-08-batch-36.pages.json` (both pages, all 12 item
  contracts incl. statements, strategies, scopes, sources), `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json`; run-wide plan/ledger state only where the pair's edges require it.
- Plan: `research/plan-spec.json` entries 351/352 and the design reservation in
  `research/plan-classical-electromagnetism-track.md` L2099 ff. (with the pair entry of
  `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`).
- Prose design carriers: `prose-scaffold.md` (pair row 14 and the "Scope carried through the arguments"
  radiation paragraph), `completed-expansion-arguments.md` W5, A1–A2, R1–R4, `core-conditional-proofs.md`
  K9–K10, `worked-example-verifications.md` X8, `definition-contracts.md` (postulate/definition contracts),
  `closure-ledger.json` entries for the eleven reserved items.
- Owner decisions: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (binding; incl. the
  standing `lem-em-sphere-zonal-moments` obligation and the Reconciliations8–10 radiation instructions) and
  the accepted `…-radiation-interface-round1` edits/composition receipts.
- Supplier statements inspected at claim level (scope check, not proof review): batches 19
  (`thm-em-radiation-asymptotic-flux`), 21 (`lem-em-retarded-wave-kernel`,
  `lem-em-point-retarded-potential-and-fields`, `thm-em-retarded-point-distributional-maxwell`), 22
  (`thm-em-retarded-root-and-fields`), 16 (`lem-em-global-retarded-root`), 24 (`def-em-weak-sources`),
  3 (`thm-sr-proper-time-and-observer-decomposition`), plus the full direct-dependency resolution scan.
- No prior Step 3a review or owner scope decision exists for this pair (checked `research/*step3a-*`);
  the sibling pair `em-retarded-point-prerequisites` (order 323) is already reviewed `sufficient`.

## 2. Design, plan and manifest congruence

- Page metadata is congruent across the design reservation, `plan-spec.json` and the manifest: ids, A/B kinds,
  orders 351/352, titles, companion links, category, library `physics`, and `requires` =
  `em-causal-response-and-radiation-prerequisites` (315), `em-retarded-point-prerequisites` (323),
  `em-electrostatic-multipoles` (333), `em-potentials-and-gauge` (341),
  `em-energy-momentum-and-angular-balance` (343) — all earlier-order pages; the B page requires only the A page.
- The reservation reserves exactly 8 A + 3 B ids; the current manifest keeps **all eleven ids, kinds, titles
  and design references unchanged** (`post-em-radiation-selection` … `rem-em-radiation-reaction-limits`;
  `ex-em-no-retarded-root-example`, `ex-em-dipole-antenna-example`, `texp-em-classical-orbit-instability`).
  No promised claim was dropped, renamed or narrowed.
- One owner-authorized addition: `lem-em-sphere-zonal-moments` (mathematics lemma, level 0), the local
  prerequisite discharging the owner direction's standing obligation on `pthm-em-dipole-radiation`
  (`∫ n_i n_j dσ = (4π/3) δ_ij` via explicit earlier mathematics), also supplying the `8π/3` transverse
  moment and the `f`-weighted zonal moments used by the emitted-power items; it has purely mathematical
  dependencies and is placed third so every reader-order prerequisite precedes its consumers.
- The recorded design deviations are within the reserved scope and visible in the current manifests: the
  Larmor item uses the design's explicitly allowed M10 acceleration-field route; the emitted-power item
  makes the κ-weighted emission-time definition explicit; the Liénard–Wiechert item's earlier "no solution
  property" scope was superseded by the owner-directed `thm-em-retarded-point-distributional-maxwell`
  (Reconciliations8–10); the batch-36 notes predate these round-1 repairs and are stale on those points
  (see §8). Current manifests are byte-identical to the accepted round-1 after-objects.

## 3. Coverage of the intended subject (design ↔ current items)

The reserved subject "Retarded fields and radiation" promised: the adopted retarded/zero-incoming selection,
the uniformly subluminal point geometry with the retarded root, retarded potentials for compact conserved
smooth sources with Lorenz gauge and zero field before the source, controlled electric-dipole far-zone
radiation with an explicit absolute error, exact Liénard–Wiechert point fields with the velocity/acceleration
split and far-zone remainder, the rest-case Larmor power and pattern, the relativistic emitted power with the
emission/observation-time distinction and a quantified low-speed comparison, a radiation-reaction limits
remark, and the three worked B items. Each designed carrier is represented:

- `post-em-radiation-selection` (postulate; `definition-contracts.md#post-em-radiation-selection`): the
  affine free-solution freedom of the sourced wave system, the time-reversal-symmetric wave expression, the
  adopted retarded no-incoming branch (advanced branch and free fields excluded), and the explicit
  model-scope extension to the weak point-source equations; not a theorem, not existence, not empirical.
- `def-em-retarded-point-geometry` (definition; `definition-contracts.md`): all-time `C^3` uniformly
  subluminal prescribed worldline, unique retarded root with derivative formulas, retarded data
  `r, n, β, κ, β̇`, emitted-sphere family, finite-history/non-uniform branches excluded; well-definedness
  discharged by `lem-em-global-retarded-root`'s `C^3` branch (uniform `v_* < c` hypothesis retained as
  essential; its failure is exhibited by the B counterexample).
- `lem-em-sphere-zonal-moments` (mathematics lemma): zonal identity, linear/quadratic `f`-weighted moments,
  `σ(S^2)=4π`, vanishing first moment, `∫n_i n_j=(4π/3)δ_ij` and `∫|n×a|^2=(8π/3)|a|^2` (owner obligation).
- `pthm-em-retarded-potentials` (design W5): compact smooth conserved sources, explicit retarded integrals,
  smoothness, `Wφ=ρ/ε₀`, `WA=μ₀J`, Lorenz gauge from continuity, the four smooth Maxwell equations, zero
  field before `t₀`, the zero-data Cauchy identification, and zero total charge for this branch.
- `pthm-em-dipole-radiation` (design A1–A2): moment identities, the absolute dipole-replacement error
  `D(u)`, uniform leading dipole fields with `Γ_E`, `Γ_B` errors, retarded-time power `μ₀|p″|²/(6πc)` with
  the absolute error `μ₀(2|p″|D+D²)/(4πc)`; `D=0` sufficient, never claimed necessary.
- `pthm-em-lienard-wiechert` (design R1–R2): potentials `C/(κr)`, `βφ/c`, the exact velocity/acceleration
  field split, `B=n×E/c`, the uniform velocity-field bound and direction-uniform far-zone remainder, and the
  constructed weak point-source solution instantiated through `thm-em-retarded-point-distributional-maxwell`
  and `post-em-distributional-vacuum-maxwell`.
- `pthm-em-larmor-nonrelativistic` (design R3): the exact instantaneous-rest emitted-sphere field, angular
  flux limit, `q²|a|²/(6πε₀c³)` power, `sin²θ` pattern, and the separately quantified general uniform
  low-speed power/angular comparison (the approved replacement of the design's "p = qz" route).
- `pthm-em-lienard-emitted-power` (design R4): the κ-weighted emitted-power definition (emission-time
  Jacobian / moving-boundary correction), the closed form `q²γ⁶(|a|²−|β×a|²)/(6πε₀c³) = q²η(A,A)/(6πε₀c³)`
  and the uniform δ-comparison; prescribed-source only.
- `rem-em-radiation-reaction-limits` (design K10): diverging point self-energy, undefined self-field/current
  products, prescribed-source-only power, deferred finite-size/self-force dynamics; no measurement.
- B items: `ex-em-no-retarded-root-example` (X8: smooth pointwise-subluminal curve with no retarded root at
  one event, delimiting the uniform-bound hypothesis), `ex-em-dipole-antenna-example` (X8: harmonic dipole
  pattern, `8π/3` check, period mean `μ₀ω⁴p₀²/(12πc)`, compact-window realization carrying the theorem's
  `D(u)`/finite-radius errors), `texp-em-classical-orbit-instability` (K9: adopted reduced quasistatic
  balance, `r³=r₀³−3A(t−t₀)`, formal finite-time collapse with the low-speed premise's breakdown recorded).

No designed definition, result or example of the pair is unrepresented; nothing in the manifest exceeds the
reserved subject, and the one addition is owner-authorized and purely mathematical.

## 4. Intended role and consumers

- The pair is the radiation layer of the classical-electromagnetism physics track, positioned after the
  potentials/gauge, energy-flux, multipole, retarded-point and causal-response pages and before the empirical
  and scattering pages.
- Declared consumers in `plan-spec.json`: `em-empirical-tests-and-scope` (355) whose
  `rem-em-classical-validity-limits` consumes `rem-em-radiation-reaction-limits`; and
  `em-scattering-and-scalar-diffraction` (359) whose `def-em-ideal-harmonic-dipole-model` and
  `pthm-em-dipole-scattering-cross-section` consume `pthm-em-dipole-radiation` (and the latter also
  `lem-em-sphere-zonal-moments`). Every consumer use found in the current manifests lies inside this pair's
  9 + 3 inventory; no consumer needs an unplanned claim from this pair.
- Upstream, the pair consumes the retarded kernel/point-potential (page 321), retarded-point (323), causal
  response/asymptotic flux (315), multipole (333), potentials/gauge (341) and energy-balance (343) layers,
  consistent with its order-351 position. The earlier sibling review of page 323 explicitly expected the
  flux asymptotics on this physics page; they are present (dipole/emitted power built on
  `thm-em-radiation-asymptotic-flux`).

## 5. Prerequisite audit (independent pass) and unmet-prerequisite check

- Direct dependencies: the 12 items declare 180 edges over **74 distinct targets** — 41 published
  mathematical imports in `items/`, 25 current-run scaffold items on other pages, 8 same-pair items.
  All resolve; the full transitive closure is 342 items (237 published imports, 105 run items) with
  **0 missing** targets, and every non-published dependency home lies inside the transitive `requires`
  closure of the page (no undeclared page prerequisite). No mathematical item depends on a physical item.
- Key interfaces spot-checked against the consuming clauses: `thm-em-radiation-asymptotic-flux` states the
  Γ_E/Γ_B uniform expansion and the fixed-retarded-time flux limit; `lem-em-point-retarded-potential-and-fields`
  supplies AC_ω, the history-pairing finiteness and the change-of-variables identity with denominator
  `1−n·β`; `thm-em-retarded-point-distributional-maxwell` proves the distributional wave/Lorenz/Maxwell
  identities and `L¹loc` field representatives (the former batch finding "solution property left open" is
  closed by this owner-directed theorem); `thm-em-retarded-root-and-fields` supplies the root, split and
  uniform remainder; `lem-em-global-retarded-root` supplies the all-time uniform-bound branch (C¹ base,
  C^k/C^3 case); `thm-sr-proper-time-and-observer-decomposition` supplies the `η(A,A)` identity;
  `def-em-weak-sources` admits the point-current class used by the weak instantiation.
- Cross-batch bookkeeping: 70 batch-36 consumer edges (65 item + 5 page rows) are recorded in the unified
  frontier ledger, each with an `open` review row and 0 orphans (suppliers scaffolded, not yet authored —
  expected at Step 3a, not a missing prerequisite).
- **No unmet prerequisite** was found: nothing the pair names is absent from both the published library and
  the current scaffold. Confirmed: every named target is present and resolution is mechanical
  (`manifest-deps` 12 items / 0 errors). Uncertainty (not a scope blocker): in-run suppliers are scaffold
  statements, not authored proofs, and the cross-batch rows are `open`; Step-3b authoring must reconcile the
  exact proof uses and strengthen any interface that proves insufficient.

## 6. Source coverage

- The batch-36 coverage harvest contains 44 rows: 26 `included`, 10 `inline`, 1 `deferred`
  (Tong §6.3 Thomson/Rayleigh scattering → the existing `em-scattering-and-scalar-diffraction`, order 359),
  4 reasoned `out-of-scope` (Tong §6.2.4 magnetic-dipole/quadrupole radiation, §6.2.5 pulsars,
  §6.4.5 bremsstrahlung/cyclotron/synchrotron, Fitzpatrick node 133 synchrotron), 2 `already-published`
  (the chart-measure and spherical-projection suppliers) and 1 canonical zonal-moment row. All 12 current
  items appear in at least one disposition row.
- Retained treatments: Tong, *Electromagnetism* ch. 6 (236-page revision, stamped); Fitzpatrick,
  *Classical Electromagnetism* nodes 49–52, 94–95, 124–125, 129–133 (stamped); Beisert, *Elektrodynamik*
  ch. 11 (176-page script, stamped, including the §11.5 no-root counterexample and the §11.18 quoted-fields
  caveat); Hunter, *Notes on PDEs* §§1.10.2–1.12 (zonal moments); Teschl, *PDE* §§7.1–7.2 (sphere moment).
- The out-of-scope rows were checked against the design: no planned page of the run reserves
  magnetic-dipole/quadrupole radiation, pulsars or bremsstrahlung/cyclotron/synchrotron applications, so the
  exclusions do not hide a promised result; the one deferral has a live destination page.
- Re-verified this dispatch: `source-fetch-check` 5/5 sources fetch-verified and 5/5 resolved
  (0 documented drops); coverage checklist 44 rows / 0 errors / 0 warnings with destinations required.

## 7. Checks actually run this dispatch (2026-10-09)

- `manifest-deps.mjs` on the batch-36 manifest: 12 items, 0 errors.
- `coverage-checklist.mjs … --require-destination`: 1 page, 44 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs` (check mode, no stamps written): 5/5 fetch-verified, 5/5 resolved.
- `item-dependency-levels.mjs check --run …`: 471 items across 80 pages, maximum level 24, no error
  (stale-label/cycle free; all current labels match).
- `validate-plan.mjs research/plan-spec.json --run …`: OK; pages 351/352 appear with 9/3 items and their
  declared requires; no finding of any class names this pair (remaining advisories are `redundant-prereq`
  warnings on other pages).
- `content-policy.mjs research/…-batch-*.pages.json --manifest-only`: 471 scoped items, 0 errors,
  0 warnings (pair classification, prefixes, roles, provenance fields and mathematical boundary).
- `step1-decisions.mjs check --run …`: closed; every run item (including these 12) carries a current
  `ready` receipt.
- Independent dependency walk (this report): 74 distinct direct targets, 342-item transitive closure,
  0 missing; all dep homes inside the declared requires closure; no math→physics edge.

## 8. Observations and uncertainty (non-blocking)

1. **`pthm-em-lienard-wiechert` scope wording tension (owner wording repair suggested).** Its
   `physical_scope` exclusion list still contains "distributional Maxwell solution property" while the same
   scope sentence records the "Constructed proper point-source weak Maxwell solution with proved L1loc field
   representatives and distributional Lorenz-gauge potentials", and statement clause (e) (supported by the
   strategy's "This supplies the solution property") claims exactly that property via
   `thm-em-retarded-point-distributional-maxwell`. The accepted round-1 text (byte-identical to the current
   manifest) therefore reads as self-contradictory; the intended exclusion appears to be the singular
   nonlinear self-interaction (no distribution products, no self-force), not the weak-solution property,
   which is included. The same sentence's "unit-charge-parameter point charge" also reads oddly for the
   arbitrary `q ∈ ℝ` of the statement. No coverage omission; flagged because `physical_scope` is part of the
   public interface and downstream reviewers should not read the item as excluding its clause (e).
2. **`pthm-em-larmor-nonrelativistic` title vs content.** The reserved title keeps "nonrelativistic" while
   the exact statement is the instantaneous-rest case plus (clause (f)) the general-β formula and the
   uniform low-speed comparison; the general theorem is owned by the companion `pthm-em-lienard-emitted-power`.
   Already recorded for the owner's title reconciliation in the batch notes; not a scope omission.
3. **Design-sanctioned overlap.** The uniform δ-comparison appears in both clause (f) of
   `pthm-em-larmor-nonrelativistic` and clause (c) of `pthm-em-lienard-emitted-power` (which consumes the
   former); Reconciliations8–10 directed the sharp bounds and the correct comparison. No id is duplicated and
   no reader-order constraint is violated; recorded so reviewers do not treat the overlap as drift.
4. **Staleness of the batch-36 notes (for the record only).** The notes predate Reconciliations10–11: they
   describe `pthm-em-lienard-wiechert` as excluding the distributional solution property and count 65
   cross-batch rows (now 70). The current manifests and the accepted round-1 artifacts are authoritative and
   were verified byte-identical; no scaffold edit was made by this review.
5. **Empirical scope.** No item of this pair reports a measurement; the emitted-power/radiation results are
   prescribed-source statements and the B thought-experiment is an adopted reduced model. No statistical or
   precision claim is present, so the statistical-evidence qualifications are not engaged at this pair; the
   empirical accounts live on other pages (`em-empirical-tests-and-scope`).

## 9. Decision and next action

Decision for the A page `em-retarded-fields-and-radiation`: **sufficient**. The planned definitions,
results and examples adequately cover the reserved subject "Retarded fields and radiation" — the adopted
retarded selection, the uniformly subluminal point geometry, compact-source retarded potentials/fields with
Lorenz gauge and the zero-incoming content, controlled dipole radiation, Liénard–Wiechert point fields with
their weak point-source instantiation, rest Larmor and relativistic emitted power with the
emission/observation-time distinction, the radiation-reaction limits remark and the three B items — with
explicit hypotheses, units, scope exclusions and source dispositions, and with no prerequisite missing from
the published library or the current scaffold.

- Review receipt recorded with `tools/physics-support/step3-decisions.mjs record-scope` (decision bound to
  the current scope hash of the pair).
- Owner action required: record `proceed` for the current scope (or `merge`/`enrich` with amendments) to
  close Step 3a; the suggested wording repair of observation 1 is an owner option, not a scope blocker.
  Step 3b authoring proceeds in the declared dependency-level order meanwhile.
- No scaffold file, item, page, plan entry or published content was edited by this review; no item approvals
  or owner records were written.
