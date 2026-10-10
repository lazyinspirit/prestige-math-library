# Batch 36 notes — `em-retarded-fields-and-radiation` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **351**, B page order **352**, category
`classical-electromagnetism`, library `physics`. Final inventory: **9 A items + 3 B items**,
all twelve recorded `ready` with current dependency hashes. Written only: the batch
manifest, the batch coverage file, the consumer-batch cross-dependency input (65 rows),
the twelve `step1-*` readiness records, the tool-refreshed unified ledger
`research/physics-em-sr-40-2026-10-08-cross-batch-dependencies.json` and this note. No item
file, page, shared plan, published item, engine state or verdict was edited.

Read first: `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (binding),
`research/plan-classical-electromagnetism-track.md` L2099 ff. (the design reservation for
this pair), `research/plan-spec.json` entries 351/352, the exact inventory
`research/first-principles-2026-10-03/classical-electromagnetism/scaffold/proposed-inventory.json`
(items `post-em-radiation-selection` … `ex-em-no-retarded-root-example`, around lines 2415–2610),
the completed arguments `completed-expansion-arguments.md` W5, A1–A2, R1–R4, the core proofs
`core-conditional-proofs.md` K9–K10, the worked examples `worked-example-verifications.md`
X8, the contracts `definition-contracts.md` for `post-em-radiation-selection` and
`def-em-retarded-point-geometry`, the closure ledger entries for the eleven reserved items,
`research/first-principles-2026-10-03/classical-electromagnetism/audit-expansion-report.md`,
the reader ledgers `reader-tong/reading-ledger.md`, `reader-fitzpatrick/reading-ledger.md`,
`reader-eth/report.md`, and the current native manifests of every supplier batch
(2, 3, 16, 17, 19, 21, 22, 23, 24, 25, 27, 31, 32).

## Design vs plan, and recorded conflicts

1. **Page metadata: no conflict.** The design reservation and the current `plan-spec.json`
   entries 351/352 agree exactly on page ids, kinds, orders, category, library `physics`,
   titles, companion links and declared `requires` (`em-causal-response-and-radiation-prerequisites`,
   `em-electrostatic-multipoles`, `em-energy-momentum-and-angular-balance`,
   `em-potentials-and-gauge`, `em-retarded-point-prerequisites`). The manifest keeps those
   five `requires` unchanged; every added item dependency is homed in the transitive closure
   of that declaration (verified against `library/` homes), so no page-prerequisite repair was
   needed and `validate-plan` reports no `undeclared-prereq`/`redundant-prereq` finding for
   page 351/352.
2. **Reserved inventory preserved, one local mathematical prerequisite added.** Design A = 8 /
   B = 3; scaffolded A = 9 / B = 3 (cap 100 each). All eleven reserved IDs appear unchanged:
   the A page carries `post-em-radiation-selection`, `def-em-retarded-point-geometry`,
   `pthm-em-retarded-potentials`, `pthm-em-dipole-radiation`, `pthm-em-lienard-wiechert`,
   `pthm-em-larmor-nonrelativistic`, `pthm-em-lienard-emitted-power`,
   `rem-em-radiation-reaction-limits`; the B page carries `ex-em-no-retarded-root-example`,
   `ex-em-dipole-antenna-example`, `texp-em-classical-orbit-instability`. The added ninth A item
   is `lem-em-sphere-zonal-moments` (mathematics, level 0), the local prerequisite that
   discharges the owner direction's standing obligation on `pthm-em-dipole-radiation`:
   *"The future `pthm-em-dipole-radiation` consumer still owes the sphere second-moment identity
   `integral n_i n_j = (4 pi/3) delta_ij` through explicit earlier mathematics or a complete
   inline argument."* The lemma supplies that identity, the $8\pi/3$ transverse second moment
   used by the dipole power, the $f$-weighted linear and quadratic zonal moments used by
   `pthm-em-lienard-emitted-power`, $\sigma(S^2)=4\pi$, and the vanishing first moment. It is
   homed on the A page (precedent: `lem-em-exponential-character-open-set-independence` on the
   wave-interfaces physics page in batch 34) and has purely mathematical dependencies.
3. **Item order.** The reserved items keep their relative design order; the local lemma is
   placed as the third A item, between the definition and `pthm-em-retarded-potentials`, so
   that every prerequisite precedes its consumers in reading order. No claim or ID was moved.
4. **Dep-array expansions (scaffold corrections, recorded not silent).** The design dep arrays
   were kept as the core; suppliers actually used by the statement, the well-definedness or the
   recorded proof strategy were added with honest roles. The most significant expansions:
   `pthm-em-retarded-potentials` adds `pthm-em-lorenz-gauge-wave-form`, `post-em-vacuum-maxwell`,
   the source/potential/field/unit/chart definitions, `lem-em-parameter-integrals`, the $C^1$
   divergence theorem, translation invariance and `def-countable-choice`;
   `pthm-em-dipole-radiation` adds `post-em-radiation-selection`, the source-moment, flux and
   Poynting interfaces, the new zonal-moment lemma and the mean-value/estimate suppliers;
   `pthm-em-lienard-wiechert` keeps all four design deps and adds the retarded-potential lemma's
   pairing interface, `def-em-weak-sources`, the potential/field/source/worldline/unit
   conventions and `def-countable-choice`.
5. **`pthm-em-larmor-nonrelativistic`: design route replaced by an explicitly allowed route.**
   The design dep array (`pthm-em-dipole-radiation`, `def-em-retarded-point-geometry`,
   `thm-em-radiation-asymptotic-flux`) and its strategy string (*"p=qz, source-size/long-wavelength
   or M10 acceleration field; approximate $v\ll c$, no mass derivation"*) contain an explicit
   alternative. The scaffold takes the **M10 acceleration-field route** of
   `completed-expansion-arguments.md` R3, because the point charge is not a smooth compact
   spacetime source and therefore does not instantiate the compact dipole theorem without an
   additional source model, whereas the exact Liénard–Wiechert acceleration field at
   $\beta_0=0$ gives the Larmor statement directly. The item's deps are
   `pthm-em-lienard-wiechert`, `def-em-retarded-point-geometry`, `lem-em-sphere-zonal-moments`,
   the flux/Poynting interfaces, `thm-em-retarded-root-and-fields` and the limit suppliers. The
   promoted claim is not weakened: the item states the exact rest-case field, the angular flux
   limit, the $q^2|a|^2/(6\pi\varepsilon_0c^3)$ power and the $\sin^2\theta$ pattern; the
   general-$\beta$ formula and its low-speed comparison live in `pthm-em-lienard-emitted-power`.
6. **`pthm-em-lienard-wiechert` deliberately claims no distributional solution property.** The
   point-field material of this page (R1–R2 and the batch-21/22 suppliers) computes the retarded
   potentials and fields of a stipulated point source but proves no distributional Maxwell
   solution property; no reserved design text promises one, and `post-em-distributional-vacuum-maxwell`
   is a predicate on declared models, not an existence theorem. The item states the exact
   formulas, regularity and uniform far-zone remainder and explicitly excludes field values on
   the worldline, the solution property, energy/flux statements, self-force and radiation
   reaction. This is recorded so that reviewers do not read the point fields as a proved
   solution of the distributional system; supplying that claim would require a new
   (mathematical) distributional wave-equation theorem for the point source.
7. **`pthm-em-lienard-emitted-power`: the emission-time definition is explicit.** The item
   defines the emitted power by the $\kappa_0$-weighted far-zone flux, with the weight
   identified as the retarded-time Jacobian of `def-em-retarded-point-geometry` (equivalently
   the leading moving-boundary correction), so the observation-time versus emission-time
   distinction recorded in the research (Tong §6.4.4, Beisert §11.19–11.21) is part of the
   statement rather than an unstated convention.

## Inventory decisions (recorded, not silent)

- `post-em-radiation-selection` (postulate, level 18): adopts the retarded branch with zero
  incoming free field, formulated on the Lorenz-gauge sourced wave equations of
  `pthm-em-lorenz-gauge-wave-form`; explicitly not a theorem, not existence, not empirical;
  consumers must supply existence.
- `def-em-retarded-point-geometry` (definition, level 19): all-time $C^3$ uniformly subluminal
  prescribed worldline, unique retarded root, retarded data $r,n,\beta,\kappa,\dot\beta$,
  emitted-sphere family, finite-history and non-uniform branches excluded; regularity
  inventory $r,n\in C^3$, $\beta,\kappa\in C^2$, $\dot\beta\in C^1$ on the off-worldline
  domain; well-definedness discharged by the corrected `lem-em-global-retarded-root` branch.
- `lem-em-sphere-zonal-moments` (mathematics lemma, level 0): zonal identity, $f$-weighted
  first and quadratic moments, the $4\pi/3$ and $8\pi/3$ moments, $\sigma(S^2)=4\pi$; complete
  chart-based proof strategy; $\mathrm{AC}_\omega$ inherited through the surface-measure
  interface.
- `pthm-em-retarded-potentials` (physics-theorem, level 19): compact smooth conserved source,
  retarded integrals, smoothness, $W\varphi=\rho/\varepsilon_0$, $WA=\mu_0J$, Lorenz gauge from
  continuity, the four smooth Maxwell equations, zero field for $t<t_0$, zero-data Cauchy
  identification for every $t_1<t_0$, and zero total charge (no eternal isolated charge in the
  branch).
- `pthm-em-dipole-radiation` (physics-theorem, level 20): moment identities
  ($p'=\int J$, $p''=\int J_t$), the absolute dipole-replacement error
  $D(u)=(a/c)\int_{B_a}\sup|J_{tt}|$, the uniform leading dipole fields, the retarded-time power
  $\mu_0|p''|^2/(6\pi c)$ with absolute error $\mu_0(2|p''|D+D^2)/(4\pi c)$; the sphere average
  uses `lem-em-sphere-zonal-moments`(d).
- `pthm-em-lienard-wiechert` (physics-theorem, level 20): $\varphi=C/(\kappa r)$,
  $A=\beta\varphi/c$, the exact split $E_{\mathrm{vel}}+E_{\mathrm{acc}}$, $B=n\times E/c$, the
  velocity-field bound and the uniform far-zone remainder at a fixed emission event; scope
  exclusions as in note 6 above.
- `pthm-em-larmor-nonrelativistic` (physics-theorem, level 21): exact rest-case
  ($\beta_0=0$) field on the emitted sphere, the angular flux limit
  $dP/d\sigma=C^2|n\times(n\times a)|^2/(\mu_0c^5)$, the total power
  $q^2|a|^2/(6\pi\varepsilon_0c^3)$ and the $\sin^2\theta$ pattern; the $\kappa_0\equiv1$
  rest case makes flux and emitted power coincide.
- `pthm-em-lienard-emitted-power` (physics-theorem, level 22): the $\kappa_0$-weighted emitted
  power equal to $q^2\gamma_0^6(|a|^2-|\beta_0\times a|^2)/(6\pi\varepsilon_0c^3)
  =q^2\eta(A,A)/(6\pi\varepsilon_0c^3)$, with the explicit uniform low-speed comparison
  $|P_{\mathrm{em}}-P_{\mathrm{Larmor}}|\le 3\delta^2(1-\delta^2)^{-3}P_{\mathrm{Larmor}}$
  under $|\beta_0|\le\delta$.
- `rem-em-radiation-reaction-limits` (remark, level 23): diverging point self-energy, undefined
  self-field/current products, prescribed-source-only emitted power, deferred finite-size and
  self-force dynamics; no measurement.
- `ex-em-no-retarded-root-example` (example, level 20): $z(s)=(\sqrt{c^2s^2+a^2},0,0)$ has
  $|z'|<c$ pointwise, no uniform bound, and no retarded root at $(0,0)$; delimits the
  hypothesis of the definition.
- `ex-em-dipole-antenna-example` (example, level 21): harmonic dipole moment, $\sin^2\theta$
  pattern, $8\pi/3$ normalization check and period average $\mu_0\omega^4p_0^2/(12\pi c)$ in
  the exact dipole law; finite-antenna realization carries the theorem's $D(u)$ error and an
  additional source model.
- `texp-em-classical-orbit-instability` (thought-experiment, level 22): hypothesis (H) with a
  quasistatic circular orbit and the adopted Larmor loss rate; deduction of
  $r'=-A/r^2$, $r^3=r_0^3-3A(t-t_0)$, the formal finite-time collapse and the explicit
  breakdown of the low-speed premise as $r\to0$; no empirical premise, no measurement.

## Dependency verification, levels and cross-batch input

Every `deps` entry was checked against the current statement of the supplier: hypotheses,
direction, conventions and axiom strength. All in-run suppliers are scaffolded (batches 2, 3,
16, 17, 19, 21, 22, 23, 24, 25, 27, 31, 32); every out-of-run supplier is a published item homed
on a page inside the transitive closure of this page's declared `requires` (36 distinct
published mathematical suppliers were resolved on disk; `validate-plan` reports no finding for
page 351/352). Computed whole-run labels (tool, not design):

| item | level | level-driving supplier |
|---|---|---|
| `post-em-radiation-selection` | 18 | `pthm-em-lorenz-gauge-wave-form` (17) |
| `def-em-retarded-point-geometry` | 19 | `post-em-radiation-selection` (18) |
| `lem-em-sphere-zonal-moments` | 0 | — (published-only) |
| `pthm-em-retarded-potentials` | 19 | `post-em-radiation-selection` (18) |
| `pthm-em-dipole-radiation` | 20 | `pthm-em-retarded-potentials` (19) |
| `pthm-em-lienard-wiechert` | 20 | `def-em-retarded-point-geometry` / `pthm-em-retarded-potentials` (19) |
| `pthm-em-larmor-nonrelativistic` | 21 | `pthm-em-lienard-wiechert` (20) |
| `pthm-em-lienard-emitted-power` | 22 | `pthm-em-larmor-nonrelativistic` (21) |
| `rem-em-radiation-reaction-limits` | 23 | `pthm-em-lienard-emitted-power` (22) |
| `ex-em-no-retarded-root-example` | 20 | `def-em-retarded-point-geometry` (19) |
| `ex-em-dipole-antenna-example` | 21 | `pthm-em-dipole-radiation` (20) |
| `texp-em-classical-orbit-instability` | 22 | `pthm-em-larmor-nonrelativistic` (21) |

`research/physics-em-sr-40-2026-10-08-batch-36.cross-batch-dependencies.json` contains 65 rows:
five page rows (one per declared `requires` page) and 60 item rows, one per declared cross-batch
edge. After the refresh the unified ledger shows **no batch-36 consumer edge without a review
row and no orphaned review**; all rows are `open` (suppliers scaffolded, not authored).

## Axiom-of-choice declarations and exact uses

Nine of the twelve items declare `def-countable-choice` with role `mathematical-premise`, matching
exactly the interfaces whose proofs use the countable-choice assumption: `lem-em-sphere-zonal-moments`
(surface-measure interface), `pthm-em-retarded-potentials` (retarded kernel and Cauchy suppliers),
`pthm-em-dipole-radiation` (asymptotic-flux supplier), `pthm-em-lienard-wiechert` (point-potential
change-of-variables suppliers), `pthm-em-larmor-nonrelativistic` and `pthm-em-lienard-emitted-power`
(point-field and measure interfaces), plus the three consumers that quote or invoke those results
directly (`ex-em-dipole-antenna-example`, `texp-em-classical-orbit-instability`,
`rem-em-radiation-reaction-limits`). The remaining three items -- `post-em-radiation-selection`,
`def-em-retarded-point-geometry` and `ex-em-no-retarded-root-example` -- use only choice-free
suppliers (`pthm-em-lorenz-gauge-wave-form`'s differential identities and
`lem-em-global-retarded-root`, stated explicitly without a choice principle) and perform no
measure-theoretic selection, so they declare nothing and remain choice-free. No item uses the full
Axiom of Choice; no item touches the `deferred-set-theory-beyond-choice` branch; no choice-free
published result is used to smuggle in a choice assumption.

## Sources (two-treatment rule, dispositions, fetch evidence)

Five complete treatments were read in their retained full texts (or complete extracted texts)
and stamped:

1. **D. Tong, Electromagnetism (Cambridge Part II lecture notes, 2026 author-hosted revision,
   236 pp.)**, chapter 6 printed pp. 134–171: `https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf`;
   stamp: 1 882 418 bytes, sha256_16 `b99b41156dfe6cd9`, 236 pages. 16 harvested rows:
   6 `included`, 5 `inline`, 1 `deferred` (scattering → `em-scattering-and-scalar-diffraction`),
   4 `out-of-scope` (magnetic dipole/quadrupole, pulsars, bremsstrahlung/cyclotron/synchrotron
   application catalogue; each with its own specific reason). This matches batch 37's hash for
   the same revision.
2. **R. Fitzpatrick, Classical Electromagnetism (complete author-hosted HTML lecture notes,
   dated 2006-02-02)**, nodes 49–52, 94–95, 124–125, 129–133:
   `https://farside.ph.utexas.edu/teaching/em/lectures/node50.html`; stamp: 36 432 bytes,
   sha256_16 `aff8b7bc167bacc4`, 11 850 text characters. 13 harvested rows: 8 `included`,
   4 `inline`, 1 `out-of-scope` (synchrotron radiation). Nodes outside the stated ranges were
   not used.
3. **N. Beisert, Elektrodynamik, ETH Zürich 2024 FS (author-hosted 176-page script)**,
   chapter 11 printed pp. 11.1–11.21 (PDF pp. 121–141):
   `https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf`; stamp: 1 354 282 bytes,
   sha256_16 `a85f21ce710b509d`, 176 pages (same hash as batch 37's stamp). 10 harvested rows:
   8 `included`, 2 `inline`. This source's report explicitly records that its assertion of a
   global retarded root from pointwise subluminality fails (counterexample at §11.5), that the
   general-velocity fields are quoted rather than derived (§11.18), and that radiation
   reaction/self-force is not developed — all three recorded as scope in the affected items.
4. **J. K. Hunter, Notes on Partial Differential Equations (UC Davis)**,
   §1.10.2–§1.12 printed pp. 15–18: `https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf`;
   stamp: 1 597 256 bytes, sha256_16 `0dbade1806f7a1ea`, 242 pages. 2 harvested rows:
   1 `included` (`lem-em-sphere-zonal-moments`), 1 `already-published`
   (`lem-euclidean-chart-measure-agrees-with-polar-surface-measure`).
5. **G. Teschl, Partial Differential Equations (2025 archived author manuscript, AMS GSM)**,
   §7.1–7.2 printed pp. 168–175:
   `https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf`;
   stamp: 2 912 992 bytes, sha256_16 `cea9939acea1858e`, 392 pages. 2 harvested rows:
   1 `included` (`lem-em-sphere-zonal-moments`), 1 `already-published`
   (`lem-spherical-surface-integrals-project-onto-weighted-ball-integrals`).

Coverage totals: 44 harvested rows — 26 `included` (plus 1 canonical), 10 `inline`,
1 `deferred` with destination `em-scattering-and-scalar-diffraction`, 4 `out-of-scope` with
result-specific reasons, 2 `already-published`. Built/declined ratio 27/44 is above the
low-yield advisory. All five sources fetch-verified 5/5 and resolved 5/5 (no drops, no
alternatives needed); the batch URL sweep reports 5/5 live with no suspect URLs; source-backing
reports every harvested result still backed by an openable source.

## Checks actually run (2026-10-09, this dispatch)

- `item-dependency-levels.mjs check --run …`: **no error names any batch-36 item** (stored
  labels equal the computed ones; no cycle). The remaining errors are `empty scaffold
  inventory` rows for the sibling pairs still landing (`em-empirical-tests-and-scope`,
  `em-scattering-and-scalar-diffraction`, at the last observation) — a run-wide condition, not
  a batch-36 finding.
- `manifest-deps.mjs research/…-batch-36.pages.json`: 12 items, **0 errors**.
- `content-policy.mjs --manifest-only` over **all run manifests**: **0 errors, 0 warnings**
  (452 scoped items at the last pass; the count moved from 411 while sibling workers landed).
- `validate-plan.mjs research/plan-spec.json --run …`: page 351 shows 9 items and page 352
  shows 3 items with their declared `requires`; **no error or warning names this page or any of
  its items**. Mid-run, five sibling findings appeared and later cleared as their workers
  landed fixes (`[b-leaf] ex-em-tem-topology-example` and `[undeclared-prereq]` rows on batch
  35's `em-waveguides-and-cavities` pair, and an `[undeclared-prereq]` row on batch 39's
  `em-action-and-variational-formulation-examples`); the final pass reports **OK** with 25
  `redundant-prereq` warnings on other pages and four planned sibling pages still carrying no
  item list. None is a batch-36 finding.
- `coverage-checklist.mjs …-batch-36.coverage.json --require-destination`: 1 page,
  **44 harvested results, 0 errors, 0 warnings**.
- `source-fetch-check.mjs --coverage … --stamp`: **5/5 fetch-verified** (5 newly stamped);
  check mode resolves 5/5.
- `url-sweep.mjs` on batch 36 (scratch output under `/tmp`, run artifact untouched):
  **5/5 live**, 0 failed, 0 recoverable, 0 suspect; `source-backing.mjs` with that liveness
  file: every harvested result still backed.
- `extcheck.mjs` (whole corpus): 26 654 items, 0 recorded-not-proved, 0 resting on them —
  vacuous for this batch (no `proved_here: false`, `external_refs` or `forward_refs`).
- `step1-decisions.mjs check --run …`: **no batch-36 item open**; the remaining `Readiness
  record missing` rows belong to sibling batches whose items landed while this dispatch ran.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed; 65/65 batch-36 consumer edges
  carry review rows, 0 orphaned reviews; batch 36 appears under `reviewed_batches`.
- **During-dispatch citation/dependency reconciliation and re-record (recorded, not silent).**
  A final citation scan of every statement and strategy found six items whose load-bearing
  wikilinks named suppliers that were not yet declared, and one malformed link
  (`def-em-poynting-balance`, which does not exist; corrected to `pthm-em-poynting-balance` in
  the dipole and Larmor items). The genuinely used suppliers were added with honest roles
  (`def-em-lab-geometry` to the postulate; `def-em-sources` to the definition;
  `lem-cross-product-is-bilinear-alternating-and-orthogonal` to the dipole item;
  `def-cross-product-in-r3`, `def-em-lab-geometry` and
  `lem-euclidean-chart-measure-agrees-with-polar-surface-measure` to the Larmor item;
  the same three plus `pthm-em-larmor-nonrelativistic` to the emitted-power item; and
  `def-cross-product-in-r3` with `thm-algebra-of-derivatives` to the antenna example), the
  two forward orientation links in the postulate were unlinked, the affected `dependency_level`
  labels were recomputed by the tool (`pthm-em-lienard-emitted-power` 21→22,
  `rem-em-radiation-reaction-limits` 22→23), the cross-batch input and unified ledger were
  regenerated, and all eleven affected readiness records were re-recorded on the current
  hashes (`lem-em-sphere-zonal-moments`, whose published-only closure is unchanged, kept its
  original record). All checks below were re-run on the final files.
- `frontier-item-gate.mjs --run … --tool extcheck --manifest-only`: cannot run to completion
  while any run manifest is still empty (sibling batches in flight); a run-wide condition that
  clears as sibling workers land.

## Published defects and unresolved findings

No published defect was found in any supplier examined. The imported mathematical suppliers
(`def-polar-surface-measure-on-the-unit-sphere`,
`lem-euclidean-chart-measure-agrees-with-polar-surface-measure`,
`thm-polar-coordinates-formula-for-lebesgue-measure`, `cor-volume-of-the-unit-n-ball`,
`thm-real-gamma-functional-equation`, `cor-real-gamma-one-half-is-root-pi`,
`lem-first-moment-of-the-unit-sphere-vanishes`, the surface-integral and cross-product items,
the FTC/mean-value/chain-rule items, `thm-linearity-of-the-lebesgue-integral-on-l-one`,
`def-countable-choice`, `thm-dominated-convergence`, `thm-integral-triangle-inequality`) were
read at their current statements and match the recorded uses; the in-run suppliers
(`lem-em-global-retarded-root`, `thm-em-wave-cauchy-kirchhoff`, `lem-em-retarded-wave-kernel`,
`thm-em-radiation-asymptotic-flux`, `lem-em-point-retarded-potential-and-fields`,
`thm-em-retarded-root-and-fields`, `lem-em-point-current-continuity`, `def-em-weak-sources`,
`post-em-distributional-vacuum-maxwell`, `pthm-em-charge-continuity`, `pthm-em-lorenz-gauge-wave-form`,
`def-em-potential-gauge-and-field-conventions`, `def-em-electric-moments`, `pthm-em-poynting-balance`,
`def-em-vacuum-energy-flux`, `thm-sr-proper-time-and-observer-decomposition`, the batch-23
definitions and postulates) were read at their corrected interfaces (the owner direction's
third reconciliation for the retarded root and point potentials, the seventh for the
electrostatic and unit interfaces) and match the recorded uses, including the corrected signed
constant $C=q/(4\pi\varepsilon_0)$ with absolute bounds on $|C|$.

Unresolved findings, all outside batch 36's authority:

1. Run-level `validate-plan` failures and missing readiness records on sibling pairs
   (batches 30, 35 and 39; empty pages on batches 38 and 40 at the last observation) hold the
   whole-run `item-dependency-levels`/`validate-plan`/`frontier-item-gate` battery; none is a
   batch-36 finding.
2. The four design-vs-scaffold deviations recorded above (the added local lemma, the Larmor
   M10 route, the explicit emission-time definition, and the Lienard–Wiechert no-solution-property
   scope) are scaffold corrections for the ordinary Step-3 review, not certified proofs.
3. `pthm-em-lienard-wiechert`'s scope explicitly leaves open whether the retarded point pair
   satisfies the distributional Maxwell system (a mathematical distributional wave-equation
   theorem for the point source would be needed); if the owner wants that claim as page
   content, it requires a new prerequisite item, preferably on
   `em-causal-wave-kernel-prerequisites` or `em-retarded-point-prerequisites`.
4. The title of `pthm-em-larmor-nonrelativistic` keeps the reserved design label
   ("nonrelativistic") while the exact statement is the instantaneous-rest case; the low-speed
   comparison is carried by the companion `pthm-em-lienard-emitted-power`. Recorded for the
   owner's title reconciliation; no claim was weakened.
