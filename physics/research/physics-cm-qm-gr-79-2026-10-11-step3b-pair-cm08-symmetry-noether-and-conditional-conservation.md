# Step 3b authoring report — pair `cm08-symmetry-noether-and-conditional-conservation` / `cm08-symmetry-noether-and-conditional-conservation-examples`

- Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (batch 24), Step 1 complete initial authoring; 2026-10-11.
- Owned pair: A page `cm08-symmetry-noether-and-conditional-conservation` (order 127, category `non-relativistic-classical-mechanics`, library `physics`); B page `cm08-symmetry-noether-and-conditional-conservation-examples` (order 128).
- Owned items in authoring order (dependency level; suppliers before consumers):
  1. `def-cm08-symmetry-of-the-mechanical-lagrangian` (13, A)
  2. `pthm-cm08-point-noether` (16, A)
  3. `pthm-cm08-general-noether` (16, A)
  4. `pthm-cm08-moving-chart-energy-function` (16, A)
  5. `pthm-cm08-time-energy` (17, A)
  6. `pthm-cm08-translation` (17, A)
  7. `pthm-cm08-rotation` (17, A)
  8. `pthm-cm08-boost-boundary` (18, A)
  9. `rem-cm08-external-symmetry-breaking` (19, A)
  10. `ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy` (17, B)
  11. `ex-cm08-time-dependent-potential-breaks-energy` (18, B)
  12. `ex-cm08-uniform-field-breaks-translation-and-boost` (19, B)
  13. `ex-cm08-pair-potential-charges-check` (19, B)
- Artifacts owed at handoff: the thirteen item carriers under `items/`; the two
  page carriers under `library/non-relativistic-classical-mechanics/`;
  `research/physics-cm-qm-gr-79-2026-10-11-batch-24.pages.json`;
  `.coverage.json`; `.proof-contracts.json`; `.cross-batch-dependencies.json`;
  `.notes.md`; this report; the thirteen Step-1 readiness records
  `research/physics-cm-qm-gr-79-2026-10-11-step1-<item>.json`.

## Scope and inputs

- Read before construction: `AGENTS.md`; `../CLAUDE.md`; `CLAUDE.md`;
  `SCHEMA.md`; `WORKFLOW.md`; `../PHYSICS-CONTENT-MODEL.md`; the binding owner
  direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`;
  the batch dependency levels
  `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
  (batch 24 = level 7, requires batch 23; batch 23 complete); the design
  section `research/plan-non-relativistic-classical-mechanics-track.md` L647
  (CM08 reservation and B-side source inventory); `research/plan-spec.json`
  entries 127/128; and the current carriers of every consumed supplier.
- All thirteen items carry explicit `dependency_roles`; the twelve physical
  items carry a nonempty `physical_scope`. No published content, shared plan
  file, engine state or mathematical original was edited; imports and the root
  mathematics workspace are read-only.

## Design versus plan

- The eight provisional A items of the reservation are delivered one-to-one
  with kinds preserved: `cm08-symmetry`→
  `def-cm08-symmetry-of-the-mechanical-lagrangian` (def); the six theorems
  `cm08-point-noether`, `cm08-time-energy`, `cm08-translation`,
  `cm08-rotation`, `cm08-boost-boundary` and `cm08-general-noether` (the
  reserved E4 section) to the same-named `pthm-cm08-*` items; and
  `cm08-external-symmetry-breaking`→`rem-cm08-external-symmetry-breaking`
  (rem). One local prerequisite theorem was added on the same A page,
  `pthm-cm08-moving-chart-energy-function`, realizing the design's
  "moving-coordinate H≠E" theme with the difference identity, the coincidence
  criterion and chart-energy conservation under hyperregularity. The B page
  carries four constructed examples covering the declared B themes "force law
  breaking a kinematic symmetry" (uniform field breaking translation and
  boost; time-dependent potential breaking energy) and "moving-coordinate
  H≠E" (rotating chart), plus a positive pair-potential verification of all
  four charges. No reserved claim was dropped or weakened.
- Local mathematical proof sections `E4`, `M4`, `M5` are materially realized
  as the in-run mathematics items `def-cm-infinitesimal-point-symmetry`,
  `thm-cm-point-symmetry-charge-is-conserved`,
  `thm-cm-point-noether-identity-with-time-reparametrization`,
  `thm-cm-stationarity-iff-euler-lagrange` (page `cm-math-variations`,
  batch 4) and the chart-level hyperregularity/Hamiltonian items
  (`prop-cm-mechanical-chart-lagrangian-is-hyperregular`,
  `def-cm-legendre-map-in-a-time-dependent-chart`,
  `prop-cm-hamiltonian-branch-identities`, batch 4).
- Published canonical supplier consumed: `thm-chain-rule-for-total-derivatives`.
  The design's second named supplier, `thm-euclidean-inverse-function-theorem`,
  is not consumed: the delivered route proves the invariance equivalences by
  the chain rule plus the constancy criterion on an open interval, and no
  implicit-function step occurs. Recorded as a delivery note; nothing rests on
  the omitted supplier.
- `research/plan-spec.json` entries 127/128 agree with the carriers in id,
  title, kind sequence, order, category, library, companion and `requires`; the
  plan's item arrays are empty (prose-track splice), so the item scope is taken
  from the linked reservation and this batch's manifest. No design-versus-plan
  conflict requiring a plan change was found.

## Dependency graph and levels

- Item levels follow the dispatch rule (one plus the maximum level of an in-run
  `deps` target; published and out-of-run suppliers do not raise levels) and
  were computed mechanically over all run manifests with the
  `dependencyLevels` implementation behind `item-dependency-levels.mjs`; the
  thirteen labels above are the computed values, with no cm08 finding in the
  check output. Proven order of the in-run chain:
  `def-cm08-symmetry-of-the-mechanical-lagrangian` → `pthm-cm08-point-noether`
  and `pthm-cm08-general-noether` → the specialisation theorems
  (`pthm-cm08-time-energy`, `pthm-cm08-translation`, `pthm-cm08-rotation`) →
  `pthm-cm08-boost-boundary` → the remark; the moving-chart theorem consumes
  cm07 and the mathematics chart items and is consumed by the two moving-chart
  examples; no cycles, no forward references and no missing prerequisites.
- Every outgoing edge to another batch is recorded with consumer-side evidence
  in `physics-cm-qm-gr-79-2026-10-11-batch-24.cross-batch-dependencies.json`
  (114 rows: 113 item edges + the A-page page edge; the B→A page edge is
  same-batch and is not a ledger row). `frontier-dependency-ledger.mjs refresh`
  accepted the file ("refreshed and deduplicated"); all 114 rows are
  `verified` and no batch-24 review is orphaned. In-run item suppliers come
  from batches 1, 4, 17, 18, 19 and 23. The single consumer of this pair in the
  refreshed run ledger is batch 30 (`cm14-hamilton-jacobi-and-integrability`
  requires the cm08 A page).

## Source handling

- Coverage: 7 source entries (4 A, 3 B; Tong, Likharev and Stewart reused
  across the pages, SICM on the A page) — D. Tong *Classical Dynamics* §§2.4,
  2.4.1; K. K. Likharev *Essential Graduate Physics* CM §§2.3–2.4;
  G. J. Sussman and J. Wisdom *SICM* (2nd ed.) §§1.8.5, 5.4.4–5.4.5;
  I. Stewart MIT 8.09/8.309 §1.3. All 7 entries were fetched and stamped
  (`source-fetch-check --coverage`: 7/7 fetch-verified with byte counts and
  hashes; check mode also reports 7/7 resolved with 0 documented drops);
  33 harvested results carry dispositions (25 included with item ids, 8 out of
  scope with specific reasons); no source drop, no recovery retries and no
  owner escalation were required.
- Every fact of every item is linked to declared suppliers only; `depcheck`
  reports no `cited-not-in-deps`, missing, forward or circular dependency for
  any cm08 item.

## Item checkpoints (all authored and re-checked 2026-10-11)

1. `def-cm08-symmetry-of-the-mechanical-lagrangian` (A, 13). Symmetry datum
   $(\tau,\xi,B)$ with the model Noether identity for $L=K-U$ written out in
   model data, strict data and their verbatim identification with chart-level
   infinitesimal point symmetries, the charge
   $C=(\mathsf M v)\cdot\xi-(K+U)\tau-B$, dimensions (action per parameter
   unit), rescaling and status clauses. Definition; no proof; boundaries
   worksheet included in the contract.
2. `pthm-cm08-point-noether` (A, 16). Strict datum with $\tau\equiv0$:
   conservation of $(\mathsf M v)\cdot\xi-B$ along every motion of the global
   potential branch (via the mathematical point-symmetry theorem applied to
   the Euler-Lagrange description), and the residual-force rate
   $C'=\langle d,\xi\rangle$ with its exact conservation criterion (5 steps).
3. `pthm-cm08-general-noether` (A, 16). General datum: conservation in the
   global branch through the mathematical reparametrisation theorem; the
   specialisations $\tau=0$ and $(\xi,\tau,B)=(0,1,0)\leftrightarrow
   \partial_tU\equiv0$ with charge $-E$; the residual rate
   $\langle d,\xi-x'\tau\rangle$; and the potential gauge $U\mapsto U+c$,
   $B\mapsto B-c\tau$ preserving the identity and the charge (7 steps).
4. `pthm-cm08-moving-chart-energy-function` (A, 16). In a smooth moving chart
   with invertible velocity Jacobian: the difference identity
   $E_{\mathrm{in}}=e+\langle X_t,\mathsf M x'\rangle$, the coincidence
   criterion, conservation of the chart energy when $\widetilde L_t$ vanishes
   along the solution, and $E_{\widetilde L}(q)=0$ for model motions of the
   global branch (6 steps).
5. `pthm-cm08-time-energy` (A, 17). The datum $(1,0,0)$ satisfies the model
   identity exactly when $\partial_tU\equiv0$; conservation of $E=K+U$ in the
   autonomous global branch; sharpness: a state with $\partial_tU\ne0$ has a
   maximal motion with nonzero energy derivative there (5 steps).
6. `pthm-cm08-translation` (A, 17). Equivalence of the differential condition
   $\sum_i a\cdot\nabla_{x_i}U=0$ with invariance of $U$ under simultaneous
   translations on the open (possibly nonconvex) domain; the strict datum
   $(\xi^a,0)$; conservation of $a\cdot P$; sharpness with rate $-g$; vector
   form for $P$ (8 steps).
7. `pthm-cm08-rotation` (A, 17). Rodrigues rotation family on $\mathbb R^3$,
   $\xi^a(x)=a\times x$, equivalence of the differential and invariance forms,
   conservation of $a\cdot J$ about the inertial origin, sharpness with rate
   $-g$, and the vector form for $J$ (9 steps).
8. `pthm-cm08-boost-boundary` (A, 18). The boost datum $(0,\,t a,\,a\cdot
   \mathsf M x)$ satisfies the model identity exactly under the translation
   condition (continuity argument at $t=0$); conservation of
   $K_a=a\cdot(tP-\mathsf M X)$; affine centre-of-mass motion; boosted motions;
   the general rate $K_a'=t\,a\cdot F_{\mathrm{tot}}$ and sharpness at
   $t_0\ne0$ (7 steps).
9. `rem-cm08-external-symmetry-breaking` (A, 19). Scope audit: kinematic
   structure is not symmetry; the uniform-field and confining potentials break
   translation and boost charges at computable rates; rotation may survive
   confinement; residual forces destroy charges at the stated rates; moving
   charts separate Hamiltonian from inertial energy; no converse and no
   empirical claim.
10. `ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy` (B, 17). Rotating
    chart of the harmonic oscillator: chart Hamiltonian
    $H=|p|^2/2m-p\cdot(\omega\times q)+k|q|^2/2$, the difference identity with
    $p\cdot(\omega\times q)$, and the circular motion at $k=m\omega^2$ with
    $H\equiv0$ versus $E_{\mathrm{in}}\equiv m\omega^2r^2$ (6 steps).
11. `ex-cm08-time-dependent-potential-breaks-energy` (B, 18). Time-dependent
    potential $U=\frac k2|x|^2-f(t)\cdot x$: identity iff $f'\equiv0$, energy
    rate $E'=-f'\cdot x$, the driven particular solution
    $x_p=f_0\cos(\Omega t)\hat e/(k-m\Omega^2)$ and a numerical instance with
    nonzero energy derivative (6 steps).
12. `ex-cm08-uniform-field-breaks-translation-and-boost` (B, 19). One-label
    uniform-field model: translation condition exactly for $a\cdot\mathbf g=0$,
    momentum and boost-charge rates otherwise, constant mechanical energy, and
    a numerical instance including a component that is constant and one that
    is not (6 steps).
13. `ex-cm08-pair-potential-charges-check` (B, 19). Pair potential
    $U=\psi(|x_1-x_2|^2)$: gradients and antisymmetric central pair force, the
    translation and rotation invariance sums, the Hooke-type rigid-rotation
    motion at $\Omega^2=2\kappa/\mu$, all four charges evaluated along it, and
    a numerical instance (8 steps).

## Authoring review repairs (mathematical closure, same session)

- **Missing declared dependency.** `depcheck` found a citation of
  `post-cm01-spacetime` in the definition item outside its `deps`; the supplier
  was added with its role, the level was recomputed (13, unchanged) and the
  check re-run clean.
- **Out-of-scope citations removed.** A duplicated remarks block of the
  pair-potential example named cm03 balance items not in `deps`; the block was
  removed and the substantive balance commentary retained in the remark item
  where those suppliers are declared.
- **Fact-to-step completeness.** The numerical step of the rotating-chart
  example now carries [F5] for its cross-product evaluation, so every declared
  fact is cited at a step that uses it; this also clears the proof-contract
  `shotgun-bracket` warning. The facts of every other item were already cited
  by their actual steps.
- **Proof contracts generated from the finished arguments.** 239 exact
  citation excerpts (each mechanically verified to occur verbatim in the named
  supplier section), one derivation entry per numbered step listing every
  explicit fact and step input, and all eight standard boundary cases for
  every item, with the definition and remark carrying empty
  citation/derivation lists and a full boundary disposition.

## Checks run on the final carriers

- `precheck.mts` on all 13 items: `11 checked, 0 failing — all clean`.
- `proof-layout.mjs` on 13 items + 2 pages: `15 items, 73 steps, 0 defects`.
- `rendercheck.mjs` on 13 items + 2 pages: OK (YAML, KaTeX, no nested or
  multiline math problems).
- `proof-contract.mjs --strict` on
  `research/physics-cm-qm-gr-79-2026-10-11-batch-24.proof-contracts.json`:
  `0 error(s), 0 warning(s), 13/13 item(s) checked`.
- `proof-contract-coverage.mjs`: run-wide form blocked by an unbuilt page in
  another batch (`Empty or invalid frontier page inventory
  cm13-symplectic-geometry-and-canonical-methods`); batch-local replica over
  this manifest: `13 item(s), 11/11 supplied argument(s) covered`.
- `content-policy.mjs` on the batch manifest: `13 scoped item(s), 0 error(s),
  0 warning(s)`.
- `manifest-deps.mjs`: `13 item(s), 0 normalized, 0 error(s)`;
  `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests — no
  scope drift`.
- `coverage-checklist.mjs`: `2 page(s), 33 harvested result(s), 0 error(s), 0
  warning(s)`; `source-fetch-check.mjs --coverage`: `7/7 source(s)
  fetch-verified`.
- `item-dependency-levels.mjs check --run`: no cm08 finding; remaining errors
  are empty inventories of unbuilt pages in other batches.
- `depcheck.mjs` and `fwdcheck.mjs --run`: all 13 cm08 items `inherited` in the
  forward check; no finding names a cm08 item (run-wide nonzero exits come from
  other libraries' published/deferred material).
- `extcheck.mjs` on the 13 explicit item paths: `28168 items, 0
  recorded-not-proved, 0 resting on them — OK`.
- `validate-plan.mjs research/plan-spec.json --run`: pages 127/128 resolve with
  9/4 items and exactly the plan requires; the five errors are in other
  batches; no cm08 finding.
- `frontier-dependency-ledger.mjs refresh --run`: `refreshed and deduplicated`;
  114 batch-24 outgoing rows present, all `verified`.
- `step1-decisions.mjs check --run`: `1041 item(s), 946 ready`; 147 work rows,
  all empty scaffold inventories of other batches; 0 cm08 work rows.

## Run-level findings outside batch 24 (recorded, not repaired here)

1. `physics-check.mjs --run` aborts on
   `physics-cm-qm-gr-79-2026-10-11-batch-29.pages.json` (empty current page);
   the unbuilt later batches block the run-wide forms of
   `item-dependency-levels`, `proof-contract-coverage` and `extcheck --run` as
   well.
2. `validate-plan.mjs --run` fails only on other batches'
   `undeclared-prereq` findings.
3. `batch-dependency-levels.mjs check --run` reports stale levels because its
   input hash covers every manifest and other workers wrote concurrently; the
   recorded batch-24 level (7, requires 23) agrees with this batch's manifest
   and engine state was not edited by this worker.
4. `depcheck.mjs` (765 warnings on the final run; the count drifts as other
   workers repair their material) and `fwdcheck.mjs` (12 598 findings) exit
   nonzero on unrelated material elsewhere in the corpus; none names a cm08
   item.

## Readiness and handoff

- All thirteen items are recorded `ready` with their exact examined dependency
  lists, after the final carrier and proof-contract rebuild; no cm08 item is
  escalated, and no source recovery or owner escalation was required.
- Step 1 authoring is complete. Independent review is Step 2's task (and the
  Step 3 reader/refuter/adjudicator passes); readiness records here are an
  authoring disposition, not mathematical approval. The proof contract's
  citation excerpts and boundary worksheets are the intended first stop for a
  reviewer, followed by the cited supplier statements and the two page
  carriers.
