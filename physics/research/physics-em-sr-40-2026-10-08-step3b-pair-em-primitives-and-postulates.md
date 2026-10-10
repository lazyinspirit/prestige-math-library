# Step 3b authoring — pair `em-primitives-and-postulates` / `em-primitives-and-postulates-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha (`alpha-high`); batch 23; 2026-10-09.
- A page: `em-primitives-and-postulates` (order 325, `classical-electromagnetism`, library `physics`).
- B page: `em-primitives-and-postulates-examples` (order 326).
- Owned items (dependency-level order; ties by page order and item ID):

| # | Item | Kind | Level | Home |
|---|------|------|-------|------|
| 1 | `def-em-lab-geometry` | definition | 6 | A |
| 2 | `def-em-si-conventions` | definition | 7 | A |
| 3 | `def-em-fields` | definition | 8 | A |
| 4 | `post-em-minkowski-physical-model` | postulate | 8 | A |
| 5 | `def-em-relativistic-worldlines-frames` | definition | 12 | A |
| 6 | `def-em-sources` | definition | 12 | A |
| 7 | `def-em-electromagnetic-tensor` | definition | 13 | A |
| 8 | `post-em-vacuum-maxwell` | postulate | 13 | A |
| 9 | `pthm-em-linear-superposition` | physics-theorem | 14 | A |
| 10 | `ex-em-smooth-and-point-source-types` | example | 14 | B |
| 11 | `post-em-lorentz-coupling` | postulate | 17 | A |
| 12 | `ex-em-unit-dimensional-checks` | example | 18 | B |

- Deliverables (all in this report's scope): the twelve item carriers under `items/`; the
  two page carriers `library/classical-electromagnetism/em-primitives-and-postulates.md`
  and `library/classical-electromagnetism/em-primitives-and-postulates-examples.md`;
  `research/physics-em-sr-40-2026-10-08-batch-23.proof-contracts.json`; item decisions
  through `tools/physics-support/step3-decisions.mjs record-item`; this report.

## Entry state and open obligations (created at entry, 2026-10-09)

- No item carrier for any of the twelve IDs exists on disk at entry (`items/<id>.md` all
  absent). All twelve are original scaffold IDs, so each needs an ordinary Step 3b item
  decision after complete authoring and checks.
- Direct in-run suppliers are currently unauthored scaffolds owned by other batches:
  batch 1 `sr-spacetime-primitives` (`def-sr-affine-minkowski-model`,
  `def-inertial-frame-and-inertial-chart`,
  `def-spatial-euclidean-structure-of-an-inertial-frame`, `post-sr-inertial-covariance`,
  `post-sr-ideal-clocks-and-light`), batch 2 `sr-lorentz-transformations`
  (`def-ck-tensor-field-on-minkowski-space`, `thm-sr-tensor-and-current-transformation`),
  batch 3 `sr-worldlines-and-clocks` (`def-sr-regular-causal-curve-and-worldline`,
  `def-sr-proper-time`, `def-sr-four-velocity-and-four-acceleration`,
  `thm-sr-proper-time-and-observer-decomposition`), batch 8 `sr-energy-momentum`
  (`post-sr-massive-particle-dynamics`, `pthm-sr-momentum-and-four-force`), batch 9
  `sr-forces-and-continuum` (`thm-sr-antisymmetric-observer-decomposition`,
  `lem-sr-compact-variation-and-fundamental-lemma`), batch 13
  `em-elementary-mathematical-prerequisites` (`lem-em-point-current-continuity`), batch 14
  `em-minkowski-mathematical-prerequisites` (`def-em-minkowski-affine-space`,
  `lem-em-antisymmetric-tensor-contraction`). Their statements are read from the current
  batch manifests; carriers are flagged per consuming item and the item decision is left
  `escalate` whenever the carrier is absent at decision time.
- Step 3a scope review for this pair is closed (`step3-decisions check --phase scope`), four
  source treatments are fetch-stamped (Landau–Lifshitz, Griffiths, Tong, BIPM), and the
  plan-level `requires` repairs recorded in the batch notes are reflected in the current
  `plan-spec.json`.

## Item checkpoints

(Filled per item in dependency order; each checkpoint records claim/conventions, exact
suppliers read, source locators, checks run, open gaps, next action.)

1. **`def-em-lab-geometry`** (definition, level 6) — authored. Claim/conventions: restricted
   inertial chart $U\cong I\times\Omega$ with $x^0=ct$, bijection $\Phi$, laboratory time $t$
   and position $r$, constant future unit $n=e_0$, $\delta$-orthonormal oriented spatial
   basis, fixed-time laboratory fields $F:\Omega\times I\to\mathbb R^m$ with the $C^k$
   convention and partial derivatives, and the explicit exclusion of Galilean, absolute-
   simultaneity and observer-congruence readings. Suppliers read: batch-1
   `def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`,
   `def-spatial-euclidean-structure-of-an-inertial-frame`, `post-sr-inertial-covariance`
   (statements in the batch-1 manifest) and published `def-interval`, `def-vector-space`,
   `def-ck-euclidean-maps-and-diffeomorphisms`, `def-directional-and-partial-derivatives`,
   `def-euclidean-inner-product`, `lem-standard-basis-of-f-n`. Source locators: Landau–Lifshitz
   §1–§2, §4; Tong Ch. 5; Griffiths §12.1 (fetch-stamped in the pair coverage). Checks:
   rendercheck clean; precheck n/a (definition). Open gaps: in-run suppliers unauthored
   (flagged). Next: item 2.

2. **`def-em-si-conventions`** (definition, level 7) — authored. Claim/conventions: SI quantity
   table with $x^0=ct$; exact defining $c=299\,792\,458\ \mathrm{m/s}$ and
   $e=1.602\,176\,634\times10^{-19}\ \mathrm{C}$; measured $\mu_0$ with the pre-2019 nominal
   $4\pi\times10^{-7}\ \mathrm{N/A^2}$ and adoption-time $2.3\times10^{-10}$ relative
   uncertainty as historical context only; $\varepsilon_0:=(\mu_0c^2)^{-1}$; units table for
   $q,\rho,J,E,B,\varphi,A,F_{ab},N,m,P$; bookkeeping clause excluding measurement and
   cross-framework identification. Suppliers read: `def-em-lab-geometry` (carrier). Sources:
   BIPM SI brochure §2.2, §2.3.1, CGPM Res. 1; Tong §1.1–1.2, §3.5; Griffiths §5.3.2,
   §4.3.2. Checks: rendercheck clean; precheck n/a. Open gaps: none beyond flagged in-run
   suppliers. Next: item 3.

3. **`def-em-fields`** (definition, level 8) — authored. Claim/conventions: $E,B:\Omega\times
   I\to\mathbb R^3$ of class $C^k$, $k\ge1$, read in the frame's spatial basis; branch
   discipline ($C^1$ Maxwell, $C^2$ mixed derivatives, $C^\infty$ existence branches); polar
   $E$ and axial $B$; no values on singular support; V/m and T; two-form identification
   deferred to the tensor item. Suppliers read: `def-em-lab-geometry`,
   `def-em-si-conventions` (carriers), `def-ck-euclidean-maps-and-diffeomorphisms`. Sources:
   Tong §1.2; Griffiths §1.1–1.2, §5.1.2; Landau–Lifshitz §§24–25. Checks: rendercheck clean;
   precheck n/a. Next: item 4.

4. **`post-em-minkowski-physical-model`** (postulate, level 8) — authored. Claim: adopted
   physical reading (i) of the mathematical affine Minkowski model with the constant $c$,
   (ii) inertial frames/charts with proper orthochronous changes, (iii) ideal clocks/light
   from the SR postulates with the same $c$, (iv) laboratory description; explicit status
   that the model proves geometry only and that Maxwell/force/matter content are further
   postulates. Suppliers read: batch-14 `def-em-minkowski-affine-space`, batch-1
   `def-inertial-frame-and-inertial-chart`, `post-sr-ideal-clocks-and-light`,
   `post-sr-inertial-covariance`, carriers `def-em-lab-geometry`, `def-em-si-conventions`.
   Checks: rendercheck clean; precheck `pass` (nonproof-structure). Open gaps: in-run
   suppliers unauthored; `physics_review` contract entry to write. Next: item 5.

5. **`def-em-relativistic-worldlines-frames`** (definition, level 12) — authored. Claim: (a)
   worldlines as regular causal curves in the SR classes, massive $C^k$ future timelike
   worldlines with nonzero future timelike tangent, light rays as $C^1$ future null curves
   with the vanishing proper-time integrand and no proper-time parametrization; (b)
   four-velocity/four-acceleration from the SR definitions with $\eta(U,U)=-c^2$,
   $\eta(U,A)=0$; (c) chart reading $|r'|<c$, $U=\gamma(c,r')$; (d) inertial frame vs point
   observer ($n^\perp$, $h$) vs congruence/tetrad; (e) no force law, self-field or
   extended-body structure. Suppliers read: batch-3 `def-sr-regular-causal-curve-and-worldline`,
   `def-sr-proper-time`, `def-sr-four-velocity-and-four-acceleration`,
   `thm-sr-proper-time-and-observer-decomposition` (statements). Sources: Landau–Lifshitz §3,
   §6–7, §9; Tong Ch. 5; Griffiths §12.1–12.2. Checks: rendercheck clean; precheck n/a.
   Next: item 6.

6. **`def-em-sources`** (definition, level 12) — authored. Claim: (a) real charge parameter
   $q$; (b) smooth source fields $(\rho,J)$ with the compact-Jordan Riemann charge $Q_R$ and
   the bounded-Lebesgue-measurable charge $Q$ under Countable Choice, $Q=Q_R$ on the Jordan
   branch by the compact-Jordan clause of the comparison lemma, absolute finiteness via the
   extreme-value bound and finite measure, oriented current flux; (c) adopted $j=(c\rho,J)$
   identification with the component transformation law; (d) factorization $j=\rho_0U$ giving
   $\rho=\rho_0U^0/c$, equality cases, and the separate normalized material branch
   $\rho=\gamma\rho_0$, $J=\rho v$; (e) no conservation law or singular-source regularity.
   Suppliers read: published `def-riemann-integral-over-a-jordan-set`,
   `thm-continuous-functions-on-compact-jordan-sets-are-integrable`,
   `lem-riemann-lebesgue-comparison-for-distribution-test-integrands` (full text read: its
   compact-Jordan clause covers closed compact Jordan regions, matching compact Jordan $V$),
   `def-oriented-unit-normal-and-flux-of-a-surface-patch`, `def-countable-choice`,
   `thm-extreme-value-metric`, and the measure/integral interface items; batch-2
   `thm-sr-tensor-and-current-transformation` (statement read: (vii) gives $\rho=\rho_0U^0$
   in its own convention; the framework's $j^0=c\rho$ converts to $\rho=\rho_0U^0/c$);
   batch-3 `thm-sr-proper-time-and-observer-decomposition` ($U=\gamma(c,v)$, $|v|<c$).
   Checks: rendercheck clean; precheck n/a. Open gaps: in-run suppliers unauthored. Next:
   item 7.

7. **`def-em-electromagnetic-tensor`** (definition, level 13) — authored. Claim: components
   $F_{00}=0$, $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, $F_{ab}=-F_{ba}$ with raised
   components $F^{0i}=E_i/c$, $F^{i0}=-E_i/c$, $F^{ij}=\epsilon_{ijk}B_k$, and $F$ a
   $C^k$ type-$(0,2)$ tensor field by the component criterion of
   `def-ck-tensor-field-on-minkowski-space`; observer decomposition $e=+E/c$, $b=-B$ and
   invariants $\tfrac12F_{ab}F^{ab}=|B|^2-|E|^2/c^2$, $F_{ab}(*F)^{ab}=+4(E\cdot B)/c$,
   $F\wedge F=-2(E\cdot B)\varepsilon/c$, with the note that the theorem's optional
   dictionary is $-F$ in all six components; potential representation $F=dA$ with closedness
   proved for a $C^1$ potential by test-function integration by parts (no $C^2$ narrowing);
   the raised-index operator $\Phi$ with $\eta(\Phi(u),w)=F(w,u)$ and the units interface.
   Suppliers read: authored `def-ck-tensor-field-on-minkowski-space` (component criterion
   "$\mathcal C^k$ iff all components in one, equivalently every, inertial chart are
   $\mathcal C^k$"), `thm-sr-antisymmetric-observer-decomposition` clauses (a)–(d) (index
   dictionary, invariants, optional SI identification) and `lem-em-antisymmetric-tensor-
   contraction` ($\Phi$), `lem-sr-compact-variation-and-fundamental-lemma` (a),(b). The
   whole sign dictionary was recomputed: this framework's $F$ is the negative of the
   theorem's optional $F_{\rm optional}$ (all six components), which flips $e$ and $b$ as
   stated and leaves the quadratic invariants and the wedge sign as quoted; the potential
   dictionary $A^\mu=(\varphi/c,A)$ reproduces $E=-\nabla\varphi-\partial_tA$,
   $B=\operatorname{curl}A$ by direct computation. Sources: Landau–Lifshitz §23, §26;
   Griffiths §7.3.3, §12.3.1; Tong §1.2, §6.1. Checks: rendercheck clean; precheck n/a;
   cross-batch row for `def-ck-tensor-field-on-minkowski-space` closed as verified. Open
   gaps: none in this item.

8. **`post-em-vacuum-maxwell`** (postulate, level 13) — authored. Claim: (a) smooth branch
   for jointly $C^1$ fields with the additional derivatives required by each equation
   existing and continuous and continuous sources; (b) weak branch for locally integrable
   fields and sources with the four pairings against $C_c^\infty(I\times\Omega)$ tests
   vanishing, all derivatives distributional; (c) no magnetic charge, point and sheet
   sources excluded from both branches, adopted and not deduced, no covariance claim at this
   item. `physics_review` formulation/scope/sources/non_derivation pass. Dependency
   reconciliation this pass: the body cites `[[def-em-lab-geometry]]` and
   `[[def-em-si-conventions]]` as formulation context, so both were added to the carrier and
   the manifest entry with role `formulation-prerequisite`; the level stays 13 (computed from
   `def-em-sources`, level 12). Suppliers read: all 11 deps (authored carriers and published
   distribution/measure items). Sources: Tong (1.4)–(1.7); Griffiths (7.39)–(7.41) and
   §7.3.4; Landau–Lifshitz §26, §30 (Gaussian forms re-expressed in SI). Checks:
   precheck PASS (nonproof structure); rendercheck clean; strict contract clean. Open gaps:
   none for this item.

9. **`pthm-em-linear-superposition`** (physics-theorem, level 14) — authored. Claim:
   finite linear combinations of $n\ge1$ field-source pairs obeying one and the same branch
   of the vacuum Maxwell postulate satisfy that branch with the combined sources, pointwise
   in the smooth branch and distributionally in the weak branch; nonlinear constitutive laws
   and infinite superpositions excluded; conditional on the postulate. Six numbered steps in
   one strictly increasing chain (1.1 smooth regularity and linearity via [F4],[F5],[F6];
   1.2 weak-branch local integrability and distributional linearity via [F7],[F8],[F9];
   2.1 linearity of div/curl/partial_t; 2.2 the four pairings of the combination; 3.1 the
   four smooth equations; 4.1 assembly and scope). Strict contract: 10 citation rows with
   exact quotes, 6 derivations, 8 boundary rows (empty/zero/one checked; degenerate/
   endpoints/nonempty-choice/iff-forward/iff-reverse not-applicable with specific reasons).
   Dependency reconciliation this pass: the manifest entry gained the seven deps actually
   used but missing from it (`def-em-fields`, `def-em-lab-geometry`,
   `def-em-si-conventions`, `def-em-sources`,
   `def-regular-distribution-from-a-locally-integrable-function`,
   `thm-componentwise-limits-and-continuity`,
   `thm-linearity-of-the-lebesgue-integral-on-l-one`), matching the carrier exactly; level
   stays 14. No choice principle occurs. Checks: precheck PASS (direct); strict contract,
   boundary audit and citation fidelity clean. Open gaps: none for this item.

10. **`ex-em-smooth-and-point-source-types`** (example, level 14, B page) — authored.
    Conditional on `def-em-sources`, `def-em-fields` and the smooth branch of
    `post-em-vacuum-maxwell`, with Countable Choice declared and used only through the
    injectivity of `thm-locally-integrable-functions-embed-in-distributions`. Claim: (a)
    $\rho=qf$, $J=0$ is a smooth source of charge $q$ in both charge branches; (b) the
    point-source pairings of `lem-em-point-current-continuity` (proper $C^1$ trajectory)
    define distributions with $\partial_t\rho+\operatorname{div}J=0$ and fixed-time reading
    $q\delta_{z(t)}$; (c) no locally integrable density represents $q\delta_{z_0}$ (inline
    contradiction via the cutoff and the a.e. class); (d) same parameter, different objects
    and branches; no field value at the particle, no measurement. Supplier read:
    `lem-em-point-current-continuity` Statement (proper-graph branch pairings, continuity,
    properness automatic for $\Omega=\mathbb R^3\times I$ or $I=\mathbb R$). Strict
    contract: 15 citation rows, 5 derivations, 8 boundary rows (zero/one/endpoints/
    nonempty-choice checked; empty/degenerate/iff-forward/iff-reverse not-applicable with
    reasons). Checks: precheck PASS (direct); citation fidelity clean. Open gaps: none for
    this item.

11. **`post-em-lorentz-coupling`** (postulate, level 17) — authored. Claim: (i) the
    external-field equation $m\,dU/d\tau=q\,\Phi(U)$ for constant $q$, externally supplied
    $m>0$, a $C^2$ future timelike worldline and a prescribed $C^1$ external field on a
    neighbourhood of the graph, with $\Phi$ from `lem-em-antisymmetric-tensor-contraction`
    and the equivalent form $m\,dU^\mu/d\tau=qF^{\mu\nu}U_\nu$ (verified by index
    computation); the particle's own field is excluded and no self-force is defined; (ii)
    force density $\rho E+J\times B$ and power density $J\cdot E$ for an explicitly stated
    matter model; (iii) $m,q$ are inputs, no monopole coupling, no radiation reaction, and
    the coordinate law is explicitly not adopted as exact. `physics_review` passes; the
    nonproof-role discipline is respected (the SR physical theorem and postulate enter with
    `formulation-prerequisite`, never as `physical-assumption`/`physical-result`).
    Suppliers read: `post-sr-massive-particle-dynamics` (iv) and
    `pthm-sr-momentum-and-four-force` (b) at clause level, plus the authored carriers of the
    other eight deps. Sources: Tong (1.2)–(1.3); Griffiths (5.2), §8.1.1;
    Landau–Lifshitz §17, §23 (re-expressed in SI). Checks: precheck PASS (nonproof
    structure); strict contract clean. Open gaps: none for this item.

12. **`ex-em-unit-dimensional-checks`** (example, level 18, B page) — authored. Claim:
    exact SI unit arithmetic for every displayed term: $\operatorname{div}E$ and
    $\rho/\varepsilon_0$ in $\mathrm{V\,m^{-2}}$; $\operatorname{curl}B$, $\mu_0J$ and
    $c^{-2}\partial_tE$ in $\mathrm{T\,m^{-1}}$; $\operatorname{curl}E$ and $\partial_tB$
    in $\mathrm{T\,s^{-1}}$; $q\,\Phi(U)$ and $m\,dU/d\tau$ in N (also the displayed
    coordinate terms $qE$, $q(r'\times B)$ in N); $\rho E+J\times B$ in
    $\mathrm{N\,m^{-3}}$; $J\cdot E$ in $\mathrm{W\,m^{-3}}$; energy density and flux in
    $\mathrm{J\,m^{-3}}$ and $\mathrm{W\,m^{-2}}$; not a measurement, no numerical
    $\mu_0$. Every conversion was recomputed by hand and is correct. Strict contract: 4
    citation rows, 6 derivations, 8 boundary rows (zero/one checked; empty/degenerate/
    endpoints/nonempty-choice/iff-forward/iff-reverse not-applicable with reasons). Checks:
    precheck PASS (direct); citation fidelity clean. Open gaps: none for this item.

## Verification pass (resumed after context compaction)

- At resume (2026-10-09 evening) all twelve carriers existed on disk (17:47–18:02), both
  page carriers (17:59, 18:02), the batch proof-contract file (18:04) and the refreshed
  cross-batch file (18:05). Checkpoints 1–6 above were current; 7–12 had no checkpoint yet.
  This pass re-read all twelve carriers, the relevant supplier statements, ran the full
  check battery, reconciled dependency records and recorded the twelve item decisions.
- Dependency-record edits made **this pass** (the summarised claims, proofs, sources,
  `physical_scope` values and pages are unchanged):
  - `research/physics-em-sr-40-2026-10-08-batch-23.pages.json`: the
    `pthm-em-linear-superposition` entry gained the seven deps its carrier actually uses
    (with roles), and the `post-em-vacuum-maxwell` entry gained the two formulation deps
    named in its body; levels 14 and 13 are recomputed and unchanged.
  - `items/post-em-vacuum-maxwell.md`: the same two deps added to the carrier frontmatter
    with role `formulation-prerequisite`.
  - `research/physics-em-sr-40-2026-10-08-batch-23.cross-batch-dependencies.json`: the
    `sr-forces-and-continuum` page row and the `def-ck-tensor-field-on-minkowski-space` item
    row were closed as verified against their now-authored carriers; the open evidence for
    `thm-sr-tensor-and-current-transformation` and for the `em-elementary-mathematical-
    prerequisites` page row was refreshed with the current state and the exact remedy.
- The interim "open gaps" lines in checkpoints 1–6 ("in-run suppliers unauthored") are
  superseded by this pass: every in-run supplier except `thm-sr-tensor-and-current-
  transformation` now has an authored carrier that was read at clause level; the flagged
  supplier is recorded below and its consumer's decision is escalated.

## Flagged unfinished suppliers (exact IDs, consumers, consuming steps)

1. **`thm-sr-tensor-and-current-transformation`** (batch 2, `sr-lorentz-transformations`;
   kind `theorem`, domain `mathematics`, planned level 9) — the carrier
   `items/thm-sr-tensor-and-current-transformation.md` does not exist at handoff. Consumer:
   **`def-em-sources`**; consuming use: the body's clause (c), which adopts the component
   transformation law of $j=(c\rho,J)$ between inertial charts, and the
   `dependency_roles` entry (`mathematical-premise`); the clause (vii) factorization
   $J=\rho_0U$ / $\rho=\rho_0U^0$ (converted by $j^0=c\rho$ to $\rho=\rho_0U^0/c$) informs
   clause (d). Mechanical evidence: `depcheck --items-file` reports exactly
   `dep-unresolved` and `link-unresolved` for this edge and nothing else in the pair. The
   scaffold statement was read from the batch-2 manifest; the actual authored clauses
   cannot be verified until the carrier lands. Item decision recorded **`escalate`** (the
   only escalation in this pair); remedy: batch 2 authors the carrier, then re-verify the
   clauses used and re-record `def-em-sources` (accept/repaired).
2. **Page-level, `em-elementary-mathematical-prerequisites`** (batch 13) — the page carrier
   `library/classical-electromagnetism-mathematics/em-elementary-mathematical-
   prerequisites.md` does not exist at handoff. The item-level supplier consumed from it,
   `lem-em-point-current-continuity`, is authored and was verified at clause level (see
   checkpoint 10 and the cross-batch row). The page row remains open in the cross-batch
   file until batch 13 writes the page; the remedy is batch-13 page authorship.
   (The analogous page row for `sr-forces-and-continuum` was closed this pass: the page
   carrier exists and lists the two consumed items.)
3. All other direct in-run suppliers consumed by this pair have authored carriers and were
   read at clause level; no other supplier obligation remains open.

## Published concerns

- No defect was found in this pair's own content, and no published/library item was edited.
- Sibling-owned, confirmed mechanical gap reported for Step 4: `frontier-item-gate --run
  physics-em-sr-40-2026-10-08 --tool validate-plan` currently exits 1 with 33
  `undeclared-prereq` errors (a page's items depend on pages outside the closure of its
  declared `requires`). None names `em-primitives-and-postulates` or its companion. The
  named pages are `sr-spacetime-primitives`, `sr-spacetime-primitives-examples`,
  `sr-forces-and-continuum`, `em-elementary-mathematical-prerequisites`,
  `em-variational-mathematical-prerequisites(-examples)`, `em-expanded-analysis-
  prerequisites`, `em-boundary-and-spectral-prerequisites`,
  `em-experiment-analysis-prerequisites(-examples)`,
  `em-maxwell-integral-and-constraints`, `em-electrostatic-boundaries-and-conductors`,
  `em-material-response(-examples)`. Each owning batch must add the named page to its
  `requires` (or drop the dependency) before the shared Step 4 splice; these are confirmed
  manifest gaps, not suspicions, and they do not block this pair's sound new work.
- No unresolved suspicion against published content arose during this pass.

## Checks run and handoff

All commands run on 2026-10-09 from `physics/` after the final item edit; results as
observed.

| Check | Command | Result |
|---|---|---|
| precheck (explicit paths) | `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<12>` | 6 checked, 0 failing (3 nonproof structures, 3 direct; the six `def-*` definitions have no phase body) |
| rendercheck (items + pages) | `node tools/physics-support/rendercheck.mjs items/<12> library/classical-electromagnetism/em-primitives-and-postulates{,-examples}.md` | OK: 14 files, KaTeX and YAML clean |
| content policy | `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-23.pages.json` | 12 scoped items, 0 errors, 0 warnings |
| strict proof contracts | `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-23.proof-contracts.json --strict` | 0 errors, 0 warnings, 6/6 items checked |
| boundary audit | `node tools/physics-support/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template` | 24 rows, 15 not_applicable, no template reuse, no contradicted dispositions |
| citation fidelity | `node tools/physics-support/citation-fidelity.mjs ... --fail-on-missing-quote` | 29 citations over 6 items, every quote present, no widening candidates |
| depcheck (focused) | `node tools/physics-support/depcheck.mjs --items-file <12 ids>` | only the two expected errors for the missing `thm-sr-tensor-and-current-transformation`; no cycles, no B-leaf content, no published-unaudited |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | clean; computed levels 6, 7, 8, 8, 12, 12, 13, 13, 14, 14, 17, 18 match the declared labels |
| plan validation | `node tools/physics-support/frontier-item-gate.mjs --run ... --tool validate-plan` | exits 1 with 33 sibling-owned `undeclared-prereq` errors, none naming this pair; pair closure clean (advisory `redundant-prereq` only) |
| proof layout | `node tools/physics-support/proof-layout.mjs items/<12>` | 12 items, 17 steps, 0 defects |
| coverage | `node tools/physics-support/coverage-checklist.mjs research/...-batch-23.coverage.json` | 2 pages, 50 harvested results, 0 errors, 0 warnings |
| Step 3 decisions | `node tools/physics-support/step3-decisions.mjs check --run ... --phase scope` (closed) and `record-item` per item | 11 × `accept` (confidence 1) and 1 × `escalate` (`def-em-sources`); see the receipts `research/...-step3b-review-<id>.json` |

**Handoff.** Completed: the twelve item carriers, the two page carriers, the batch proof
contracts, the refreshed cross-batch dependency input, and this report. Added suppliers:
none (no new item ID was created; only two formulation dependency edges were added to the
records of `post-em-vacuum-maxwell`, and the `pthm-em-linear-superposition` manifest entry
was reconciled to its carrier). Open obligations: the two flagged unfinished suppliers
above. The `def-em-sources` decision is escalated and owner-held until
`thm-sr-tensor-and-current-transformation` is authored and its use re-verified; the item
itself is fully authored with the open obligation stated plainly.

**Decision state at handoff.** `step3-decisions check --run ... --phase final` verified the
eleven `accept` decisions CLOSED immediately after the last re-bind, with the recorded
input hashes

| Item | Decision | Input hash (prefix) |
|---|---|---|
| `def-em-lab-geometry` | accept | `8322ac972bcb` |
| `def-em-si-conventions` | accept | `16c9dbf32ee7` |
| `def-em-fields` | accept | `5ce3f0b8a822` |
| `post-em-minkowski-physical-model` | accept | `5c1fe9bd7948` |
| `def-em-relativistic-worldlines-frames` | accept | `d7f0dd6a3664` |
| `def-em-sources` | escalate (owner-held) | `a03ac997d34b` |
| `def-em-electromagnetic-tensor` | accept | `933121028f9c` |
| `post-em-vacuum-maxwell` | accept | `6a48e9b3f247` |
| `pthm-em-linear-superposition` | accept | `9d4688c0fa5a` |
| `ex-em-smooth-and-point-source-types` | accept | `8d9b9318500b` |
| `post-em-lorentz-coupling` | accept | `1931960f4497` |
| `ex-em-unit-dimensional-checks` | accept | `57b2aeaf28bf` |

The escalation is recorded with the current evidence and is deliberately left for the owner;
its binding hash is stale by construction once the flagged supplier lands, and the engine
routes it to the owner for resolution. During this pass a sibling writer edited
`research/physics-em-sr-40-2026-10-08-batch-1.pages.json` (a supplier manifest in almost
every closure here) at 18:33:34 local, which forced one additional re-bind of three items;
under continuing concurrent sibling writes the owner should re-run
`step3-decisions check --run physics-em-sr-40-2026-10-08 --phase final` once all writers
drain and re-record any item in this pair whose supplier manifest changed after this
handoff (re-recording an `accept` is mechanical: the audit evidence above is unchanged).
