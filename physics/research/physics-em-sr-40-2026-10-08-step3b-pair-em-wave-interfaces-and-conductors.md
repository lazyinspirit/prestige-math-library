# Step 3b authoring report — pair `em-wave-interfaces-and-conductors` / `em-wave-interfaces-and-conductors-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha-high (Step 3b scaffold auditor and item author); batch 34; 2026-10-09.
- Labels: entry state written by `step3b-pair-em-wave-interfaces-and-conductors-45b2fc3ef0e3e3d3` (interrupted before any item file was written); authoring continued under dispatch label `step3b-pair-em-wave-interfaces-and-conductors-325eb93e0492d46d`.
- A page: `em-wave-interfaces-and-conductors` (order 347, category `classical-electromagnetism`, `library: physics`, 8 items).
- B page: `em-wave-interfaces-and-conductors-examples` (order 348, 3 leaf examples).
- Owned items (authoring order = dispatch dependency order; ties by page order and item ID):
  1. `lem-em-exponential-character-open-set-independence` (level 0)
  2. `lem-em-admittance-interface-solve` (level 3)
  3. `def-em-medium-wave-parameters` (level 17)
  4. `pthm-em-medium-plane-wave-fields` (level 18)
  5. `pthm-em-conducting-skin-depth` (level 19)
  6. `pthm-em-phase-matching` (level 19)
  7. `pthm-em-normal-fresnel` (level 20)
  8. `pthm-em-oblique-fresnel` (level 20)
  9. `ex-em-skin-depth-approximation-example` (level 20, B page)
  10. `ex-em-brewster-angle-example` (level 21, B page)
  11. `ex-em-evanescent-flux-example` (level 21, B page)
- Artifacts owed at handoff: the eleven item carriers under `items/`, the two page carriers under
  `library/classical-electromagnetism/`, `research/physics-em-sr-40-2026-10-08-batch-34.proof-contracts.json`,
  manifest/coverage/cross-batch record reconciliation, Step 3b item decisions for the eleven
  original scaffold IDs, and this report.

## Inputs read at entry

`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `../CLAUDE.md`, `../PHYSICS-CONTENT-MODEL.md`; owner
authoring direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md` (including
the wave-interface design qualification on the equal-medium Brewster branch, reconciliation7 and
reconciliation8–10 clauses); batch-34 records `research/physics-em-sr-40-2026-10-08-batch-34.pages.json`
(canonical scaffold, sha256 `2878d5a4154a2b880116cd87a35dad4ca1f34ad24930f9d2a47ba577398c1fd5`),
`.coverage.json`, `.notes.md`, `.cross-batch-dependencies.json`; the pre-splice review records
`research/physics-em-sr-40-2026-10-08-interfaces-round1.json` and `…-interfaces-round2.edits.json`
(the canonical manifest matches the round-2 consolidated values on every item field checked);
design section `research/plan-classical-electromagnetism-track.md` L2036–L2065 and the current
`research/plan-spec.json` entries 347/348; and the sibling Step 3b reports of the direct in-run
prerequisite pairs `em-material-response` (batch 29) and `em-vacuum-waves-and-polarization`
(batch 33).

## Open obligations at entry

1. Author all eleven owned items in ascending dependency level (ties by page order then item ID),
   with the two library pages, keeping the promised claims and clauses of the scaffold; recheck
   the pre-splice round-1/round-2 corrections against the current canonical statements before
   authoring each item, and record any local scaffold repair in this report and in the batch
   manifest.
2. Inspect the direct in-run prerequisite pairs `em-material-response` and
   `em-vacuum-waves-and-polarization`; verify the exact interfaces of the batch-13, batch-23 and
   batch-29 suppliers actually used (`def-em-complex-plane-wave`, `def-em-lab-geometry`,
   `def-em-si-conventions`, `def-em-fields`, `post-em-material-closure`,
   `def-em-polarization-magnetization`, `pthm-em-macroscopic-maxwell`,
   `pthm-em-material-stationary-jumps`, `pthm-em-restricted-material-energy`) and the imported
   mathematical suppliers.
3. Flag every unauthored supplier with its exact ID and consuming item/step; author the consumer
   anyway; keep that consumer's decision escalated until the supplier and the actual proof use are
   reconciled. Known unauthored suppliers at entry (item files absent, scaffold statements only):
   `lem-em-period-average` (batch 13) for `pthm-em-normal-fresnel`/`pthm-em-oblique-fresnel`, and
   `lem-em-interface-wave-linear-system` (batch 13) for `lem-em-admittance-interface-solve`.
4. Create `research/physics-em-sr-40-2026-10-08-batch-34.proof-contracts.json` from the completed
   arguments (item-specific contracts, strict mode), refresh
   `research/physics-em-sr-40-2026-10-08-batch-34.cross-batch-dependencies.json` if any actual use
   differs from the scaffold, and refresh coverage where dispositions changed.
5. Run the explicit-path checks (precheck, rendercheck, content policy, strict proof contracts,
   dependency-level check, `validate-plan` against `research/plan-spec.json`) and
   `proof-layout.mjs` once over all changed item paths before handoff.
6. Record `step3-decisions.mjs record-item` decisions (`accept`/`repaired` only with confidence 1,
   examined dependency IDs and concrete evidence; otherwise `escalate`) after complete authoring
   and checks. No AC/choice declaration is expected: the batch notes record every batch-34 item as
   choice-free, with `pthm-em-material-stationary-jumps` used as formulation context only; verify
   this item by item.

## Checkpoints

Authoring continued from the entry state; the two page carriers, the batch-34
proof-contract file and the Step 3b decisions are produced after the items.
Every item below was re-read against its frozen batch-34 manifest statement
(normalised text equality checked), its direct suppliers were re-read on their
current authored carriers, and precheck, `proof-layout` and `rendercheck` were
run on the explicit item path.

### 1. `lem-em-exponential-character-open-set-independence` (level 0) — authored, checked

- Claim: (a) pairwise-distinct complex characters $e^{i\lambda_j\cdot z}$ are
  linearly independent on a nonempty open set (any $m$, $\mathbb C^q$
  coefficients, complex frequencies); (b) real-part grouping
  $C_\nu=\sum_{\lambda_j=\nu}c_j+\sum_{\lambda_j=-\overline\nu}\overline{c_j}=0$
  for every $\nu$, with the self-paired value $2\operatorname{Re}\sum$ and the
  isolated-frequency consequence; (c) scope (openness used; nothing for empty
  interior).
- Proof route: scalar reduction, conjugation of the exponential via its series
  (`|u|=|\overline u|` from the coordinate modulus), induction on $n$ with the
  annihilating operator $\prod_{j\ne j_0}(d/dt-i\lambda_j)$ evaluated at $t=0$,
  then (a) applied to $F+\widetilde F$ grouped by frequency.
- Checks: precheck PASS (direct, after adopting the canonical layer renumbering);
  proof-layout 10 steps, 0 defects; rendercheck OK; manifest statement
  content-equal.
- Open gaps: none; no choice principle.

### 2. `lem-em-admittance-interface-solve` (level 3) — authored, checked, deps repaired

- Claim: the two-equation system $E_i+E_r=E_t$, $Y_1(E_i-E_r)=Y_2E_t$ with
  $Y_1+Y_2\ne0$: solution formulas (a); $|r|^2+(\operatorname{Re}Y_2/Y_1)|t|^2=1$
  for real $Y_1>0$ with the sign/passivity reading (b); pure-imaginary $Y_2$
  gives $|r|=1$, $|t|^2>0$ (c); real-positive specialisation agreeing with
  `lem-em-interface-wave-linear-system` (d); scope (e).
- **Dependency repair (recorded):** the scaffold dep list carried no ordered-field
  supplier, but clauses (b)-(d) state sign comparisons. Added
  `def-complete-ordered-field`, `lem-of-square-monotone`, `lem-of-square-positive`
  (all published imports, all homed on `foundations-of-the-real-numbers`, inside
  the page's declared `requires` closure) to the item frontmatter, the
  `dependency_roles` and the batch-34 manifest row. Level stays 3 (only in-run
  dep is `lem-em-interface-wave-linear-system` at level 2); manifest labels
  re-verified by `item-dependency-levels.mjs check`.
  (Final state: the ordered-field entry in both records is `def-ordered-field`,
  the direct ordered-field definition used by F3; see the consolidated repair
  list below.)
- Checks: precheck PASS (direct, canonical renumbering adopted); proof-layout 8
  steps, 0 defects; rendercheck OK; statement content-equal.
- Open gaps: none; no choice principle.

### 3. `def-em-medium-wave-parameters` (level 17) — authored, checked

- Content: lossless parameters $v,Z,n,k(\omega)$ (a); complex propagation
  constant $\kappa=p+iq$ as the unique root with $\operatorname{Re},\operatorname{Im}\ge0$
  of $k^2=\varepsilon\mu\omega^2+i\mu\sigma\omega$ (b); skin depth $\delta=1/q$
  for $\sigma>0$ and $+\infty$ for $\sigma=0$ (c); status/scope with the
  finite-band caveat (d). Well-definedness subsection proves $p^2-q^2=a$,
  $2pq=b$ and uniqueness of the root (nonnegative square-root uniqueness after
  $u^2+v^2=|k|^2=|k^2|$).
- Checks: precheck reports 0 checked, 0 failing (definition, no proof phase);
  proof-layout 0 steps, 0 defects; rendercheck OK; statement content-equal.
- Open gaps: none.

### 4. `pthm-em-medium-plane-wave-fields` (level 18) — authored, checked, deps repaired

- Clauses (a)-(f) as in the manifest: amplitude vanishing; the iff between the
  four source-free macroscopic equations and the four complex amplitude
  conditions; structure/dispersion/solution family (including off-dispersion
  triviality and the two-dimensional transverse space); lossless pointwise
  identities and period averages; the evanescent factorisation, normal-flux
  formula, its vanishing on transverse amplitudes, and the TE/TM tangential
  fluxes; scope.
- **Dependency repair (recorded):** the scaffold dep list omitted the
  exponential addition law (needed for $\exp w\ne0$ in (a) via
  $\exp w\exp(-w)=1$) and Euler's Cartesian form (needed for the (e)
  factorisation and modulus). Added
  `thm-complex-exponential-addition-and-real-extension` and
  `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity` (both
  published imports homed on `the-complex-exponential-and-eulers-formula`,
  inside the page's `requires` closure) to frontmatter, roles and manifest.
  Level stays 18.
- Independent checks while authoring: dispersion from crossing $k\times e=\omega\mu h$
  with $k$; converse solution family and the $k\times e=0\Rightarrow e=\alpha k$
  argument; Lagrange identity $|u\times v|^2=|u|^2|v|^2-\langle u,v\rangle^2$
  (component expansion) for $|B|=|E|/v$ and $|h|=|e|/Z$; averages
  $\langle u\rangle=\varepsilon|e|^2/2$, $\langle S\rangle=|e|^2k/(2\mu\omega)$;
  normal-flux formula $-e^{-2\beta n'\cdot x}\operatorname{Re}[(e\cdot n')(\kappa_0\cdot\overline e)]/(2\mu\omega)$
  and its vanishing for transverse data; TE/TM tangential fluxes.
- Checks: precheck PASS (direct, canonical renumbering adopted); proof-layout 15
  steps, 0 defects; rendercheck OK; statement content-equal.
- Open gaps: none; no choice principle.

### 5. `pthm-em-conducting-skin-depth` (level 19) — authored, checked, repaired

- Clauses (a)-(f) as in the manifest: the exact propagation constant
  $\lambda^2=a+ib$ with $\lambda=\pm(p+iq)$ and the decaying-branch selection
  $\lambda=p+iq$; the exact skin depth $\delta=\sqrt{2(r+a)}/b$ and the
  identities $q^2=(r-a)/2$, $p^2=(r+a)/2$, $pq=b/2$; the good-conductor bounds
  for $t=a/b\le1/4$; the poor-conductor bounds for $t'=b/a\le1/2$; the phase
  relation $q/p=\sqrt{1+t^2}-t$ with $1-2t\le q/p\le1$ for real amplitudes; and
  the limits/scope clause excluding $\sigma=0$ from the approximations.
- **Local repairs (recorded):** step 6.1's stale internal reference
  "steps 3.1-3.2" corrected to "steps 3.1-4.2" (no step 3.2 exists); added
  `thm-complex-numbers-form-a-field` (used by F3) and
  `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`
  (used by F7) to the frontmatter, roles and batch-34 manifest row. Level stays
  19 (both additions are imported mathematical suppliers below the level).
- Checks: precheck PASS (direct); proof-layout 7 steps, 0 defects; rendercheck
  OK; statement content-equal.
- Open gaps: none; no choice principle.

### 6. `pthm-em-phase-matching` (level 19) — authored, checked, repaired

- Clauses (a)-(e) as in the manifest: phase matching
  $\kappa_i=\kappa_r=\kappa_t$, $\omega_i=\omega_r=\omega_t$; the geometry of
  the wavevector plane ($\kappa_i=0$ gives parallel wavevectors); the
  reflection law and Snell's law for real wavevectors with
  $n_j=c(\varepsilon_j\mu_j)^{1/2}$; the absent-wave qualification and the
  explicit scope (complex tangential data, optional normal-root selection, no
  outgoing condition).
- **Local repairs (recorded):** step 5.2's stale internal reference
  "steps 1.1-3.2" corrected to "steps 1.1-4.1"; added
  `def-complex-numbers-and-arithmetic` and `thm-complex-numbers-form-a-field`
  (used by F4) to the frontmatter, roles and manifest row. Level stays 19.
- Supplier note: the declared `pthm-em-material-stationary-jumps` edge is a
  non-load-bearing scope reference only (step 7.1 states that no distributional
  or choice-theoretic clause of it is used); the cross-batch ledger row was
  verified with that exact reading.
- Checks: precheck PASS (direct); proof-layout 8 steps, 0 defects; rendercheck
  OK; statement content-equal.
- Open gaps: none; no choice principle.

### 7. `pthm-em-normal-fresnel` (level 20) — authored, checked, deps repaired

- Clauses (a)-(e) as in the manifest: common frequency with nonzero
  transmitted amplitude and the $e_r=0$ convention; the tangential amplitude
  system, the admittances $Y_1=k_1/(\mu_1\omega)$, $Y_2=k/(\mu_2\omega)$, and
  $r=(Y_1-Y_2)/(Y_1+Y_2)$, $t=2Y_1/(Y_1+Y_2)$ with
  "$r=0$ exactly when $Y_1=Y_2$"; the lossless case $R+T=1$ with the three
  period-averaged normal fluxes; the Ohmic case
  $|r|^2+(\operatorname{Re}Y_2/Y_1)|t|^2=1$ with the entering-flux/Ohmic
  absorption reading and the exact decay factor $e^{-qx_3}$; scope.
- **Dependency repair (recorded):** added
  `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity` (used by
  F6) and `thm-complex-numbers-form-a-field` (used by F10) to the frontmatter,
  roles and manifest row. Level stays 20.
- Supplier reconciliation: `lem-em-period-average` (F7 at steps 6.1, 7.1, 8.1),
  `lem-em-interface-wave-linear-system` (F4 at 5.1),
  `pthm-em-restricted-material-energy` (F8 at 7.1) and `post-em-material-closure`
  (F12 at 8.1) are authored and their statements match the cited excerpts; the
  corresponding cross-batch rows are `verified`.
- Checks: precheck PASS (direct); proof-layout 9 steps, 0 defects; rendercheck
  OK; statement content-equal.
- Open gaps: none; no choice principle.

### 8. `pthm-em-oblique-fresnel` (level 20) — authored, checked, deps repaired

- Clauses (a)-(f) as in the manifest: the two polarisation admittance systems
  and amplitude formulas; the propagating branch with $\theta_r=\theta_i$,
  Snell's law and $R_\chi+T_\chi=1$; the Brewster condition
  $r_\chi=0\iff Y^\chi_1=Y^\chi_2$ with the unique angle
  $\tan\theta_B=n_2/n_1$ for unequal indices and the equal-index degenerate
  case; total internal reflection with $|r_s|=|r_p|=1$, nonvanishing
  transmission and the evanescent flux; the critical-angle branch $k_{t3}=0$
  solved without dividing by $k_{t3}$; scope.
- **Dependency repairs (recorded):** earlier Step 3b repairs added the
  trigonometric suppliers used by F8 (`def-tangent-cotangent-secant-cosecant`,
  `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`,
  `thm-sine-cosine-signs-monotonicity-and-ranges`,
  `thm-sine-cosine-zero-sets-and-fundamental-period`); this continuation added
  `lem-em-interface-wave-linear-system` (used by F3) and
  `thm-complex-numbers-form-a-field` (used by F7). The `lem-em-interface-wave-linear-system`
  edge was a new cross-batch edge and received its own `verified` review row.
  Level stays 20.
- Checks: precheck PASS (direct); proof-layout 8 steps, 0 defects; rendercheck
  OK; statement content-equal.
- Open gaps: none; no choice principle (the scope step 6.1 records that
  $Y^\chi_1+Y^\chi_2\ne0$ in every considered branch and that no choice
  principle is used).

### 9. `ex-em-skin-depth-approximation-example` (level 20) — authored, checked

- Declared non-measured parameters $\varepsilon=4$, $\mu=1$, $\sigma=100$,
  $\omega=3$ (SI); exact $a=36$, $b=300$, $r=\sqrt{91296}$, $t=3/25\le1/4$;
  exact $p,q$ with $pq=150$ and $q<\sqrt{150}$; the two-sided good-conductor
  bounds evaluated with the displayed decimal roundings; the $\sigma=0$
  exclusion ($b=0$, $q=0$, $\delta=+\infty$) matching the theorem's clause (f).
- Checks: precheck PASS; proof-layout 5 steps, 0 defects; rendercheck OK;
  statement content-equal; no measurement, material identification or
  empirical claim.
- Open gaps: none; no choice principle.

### 10. `ex-em-brewster-angle-example` (level 21) — authored, checked

- Equal-permeability declared model $\mu_1=\mu_2=\mu$, $n_1=1$, $n_2=3/2$:
  the unique Brewster angle $\tan\theta_B=3/2$, $\theta_B+\theta_t=\pi/2$,
  $r_p=0$, $t_p=1$, $r_s=-5/13$ with $R_s+T_s=1$ and $T_s=144/169$ exact; the
  surviving TE reflection is stated explicitly and no unpolarised-beam claim is
  made.
- Checks: precheck PASS; proof-layout 6 steps, 0 defects; rendercheck OK;
  statement content-equal; no measured refractive index and no empirical claim.
- Open gaps: none; no choice principle.

### 11. `ex-em-evanescent-flux-example` (level 21) — authored, checked

- Declared model $\mu_1=\mu_2=\mu$, $n_1=3/2$, $n_2=1$, $\sin\theta_i=4/5$:
  total internal reflection with $|r_s|=1$, the exact reflection phase, the
  evanescent factor $e^{-\beta x_3}$ with $\beta^2=11\omega^2/(25c^2)$-type
  data, vanishing normal averaged flux
  ($\operatorname{Re}Y^s_2=0$, budget $1+0=1$) and positive tangential
  averaged flux; scope excludes signal-speed and information-transfer claims.
- Checks: precheck PASS; proof-layout 5 steps, 0 defects; rendercheck OK;
  statement content-equal; no empirical claim.
- Open gaps: none; no choice principle.

## Proof contracts

- Created `research/physics-em-sr-40-2026-10-08-batch-34.proof-contracts.json`
  (version 1, level `physics-em-sr-40-2026-10-08-batch-34`, scope = the eleven
  IDs). It records 150 fact-source citations (each with the source section,
  an exact excerpt from that section, and the exact list of steps citing the
  fact), 81 derivation entries (one per numbered step, with the step's actual
  claim and its explicit inputs), and the eight standard boundary dispositions
  per item; `def-em-medium-wave-parameters` is recorded as a definition with
  empty citations/derivations and the eight boundary dispositions.
- `node tools/physics-support/proof-contract.mjs research/…batch-34.proof-contracts.json --strict`
  → 0 errors, 0 warnings, 11/11 items checked.

## Cross-batch dependency reconciliation

- `research/physics-em-sr-40-2026-10-08-batch-34.cross-batch-dependencies.json`
  now holds 45 reviewed rows (2 page + 43 item), all `verified` against the
  current authored supplier carriers, with concrete evidence naming the exact
  fact, the cited excerpt and the consuming steps (or, for formulation-only
  edges and the three scope-only `pthm-em-material-stationary-jumps` rows, the
  exact clause/step explaining that no proof step consumes them).
- The 45th row is new: `pthm-em-oblique-fresnel → lem-em-interface-wave-linear-system`
  was found to be a used-but-undeclared edge (F3) while authoring and was added
  to the item, roles and manifest, with its review row recorded.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08`
  → refreshed and deduplicated; the derived run ledger then reports 1869
  edges, 0 orphaned reviews, all batch inputs reviewed, and every one of the
  45 batch-34 consumer edges carries a `verified` review. Supplier pairs
  inspected directly: `em-material-response` (batch 29) and
  `em-vacuum-waves-and-polarization` (batch 33). No batch-34 item consumes a
  batch-33 item (verified by scanning deps and fact citations), which the
  page row records; the medium plane-wave structure is supplied on-page.
- The suppliers that were unauthored at entry (`lem-em-period-average`,
  `lem-em-interface-wave-linear-system`) are now authored with
  `precheck: pass` carriers, and their consumers
  (`pthm-em-medium-plane-wave-fields`, `pthm-em-normal-fresnel`,
  `pthm-em-oblique-fresnel`, `lem-em-admittance-interface-solve`) were
  reconciled; no consumer decision remains escalated on supplier grounds.

## Checks run at handoff (all explicit paths, batched)

- `proof-layout.mjs` over the eleven items: 11 items, 81 steps, 0 defects.
- `precheck.mts` over the eleven items: the ten proof-bearing items PASS
  (direct); the definition has no proof phase (0 checked, 0 failing).
- `rendercheck.mjs` over the eleven items and the two page carriers:
  13 files OK (wikilinks, delimiters, KaTeX, YAML frontmatter).
- `content-policy.mjs` over the batch-34 manifest: 11 scoped items, 0 errors,
  0 warnings.
- `proof-contract.mjs --strict`: 0 errors, 0 warnings, 11/11.
- `item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`:
  all eleven owned items pass; one run-wide pre-existing error is reported on
  `lem-em-outgoing-source-helmholtz-and-diffraction` (batch 16, not this pair):
  recorded level 1 vs computed 0. Reported for the run owner; out of scope
  here.
- `validate-plan.mjs research/plan-spec.json --run physics-em-sr-40-2026-10-08`:
  run-wide FAIL with 44 errors (43 `undeclared-prereq` on other pairs plus one
  `requires-resolve` on `em-boundary-and-spectral-prerequisites`) — none on
  either owned page. On `em-wave-interfaces-and-conductors` there remain the
  two pre-existing `redundant-prereq` warnings for
  `sine-cosine-and-the-definition-of-pi` (already reached through
  `em-material-response` and `em-vacuum-waves-and-polarization`); these are
  plan-level suggestions for Step 4 and do not invalidate the authored
  mathematics. Reported rather than silently repaired (plan edits are outside
  this role's scope).

## Step 3b item decisions

- Step-3a scope gate: `step3-decisions.mjs check --phase scope` reports the pair
  scope closed at the current scope hash (unchanged: no statement text, title,
  kind or inventory was altered; only `deps`/`dependency_roles` were repaired,
  which the scope hash does not cover). No owner `proceed` receipt is needed
  because the recorded review decision `sufficient` matches the current scope
  hash.
- Recorded with `record-item`, confidence 1, the examined direct dependency
  list, and concrete evidence:
  - `accept` (5): `lem-em-exponential-character-open-set-independence`,
    `def-em-medium-wave-parameters`, `ex-em-skin-depth-approximation-example`,
    `ex-em-brewster-angle-example`, `ex-em-evanescent-flux-example`.
  - `repaired` (6): `lem-em-admittance-interface-solve`,
    `pthm-em-medium-plane-wave-fields`, `pthm-em-conducting-skin-depth`,
    `pthm-em-phase-matching`, `pthm-em-normal-fresnel`,
    `pthm-em-oblique-fresnel` (dependency repairs, the F8 usage repair in
    `pthm-em-medium-plane-wave-fields`, and the two stale step-reference
    corrections).
- `step3-decisions.mjs check --phase final`: all eleven owned items show
  CLOSED at the final re-check (the run as a whole is not closed: the
  remaining items are owned by other pairs, whose decisions were still being
  recorded concurrently).

## Consolidated dependency repairs (items + manifest)

All repairs were applied to both the item frontmatter (with
`dependency_roles: mathematical-premise` for mathematical suppliers) and the
batch-34 manifest row, and were re-verified by the strict proof contract and
the dependency-level check. No statement text was changed, so the frozen
scaffold and the Step-3a scope hash are unaffected.

1. `lem-em-admittance-interface-solve`: frontmatter deps aligned to the
   repaired manifest (`def-ordered-field` in place of the earlier
   `def-complete-ordered-field`; `lem-of-square-positive`,
   `lem-of-square-monotone` for the sign clauses).
2. `pthm-em-medium-plane-wave-fields`: `thm-complex-exponential-addition-and-real-extension`,
   `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
   `thm-complex-numbers-form-a-field`, `def-complex-numbers-and-arithmetic`;
   fact F8 now cited at step 8.1 (the step that uses $u$ and $S$).
3. `pthm-em-conducting-skin-depth`: `thm-complex-numbers-form-a-field`,
   `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`;
   step 6.1 internal reference corrected to 3.1-4.2.
4. `pthm-em-phase-matching`: `def-complex-numbers-and-arithmetic`,
   `thm-complex-numbers-form-a-field`; step 5.2 internal reference corrected
   to 1.1-4.1.
5. `pthm-em-normal-fresnel`: `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
   `thm-complex-numbers-form-a-field`.
6. `pthm-em-oblique-fresnel`: `lem-em-interface-wave-linear-system`,
   `thm-complex-numbers-form-a-field` (plus the earlier Step 3b trigonometric
   supplier additions).

## Open obligations and run-wide conditions

- Independent mathematical review, systematic defect repair and adjudication
  remain owed in Steps 5–8, as the dispatch specifies; nothing in this report
  claims a completed independent audit.
- The run-wide `validate-plan` failures and the batch-16 dependency-level error
  listed above belong to other pairs/owner decisions and were reported, not
  touched.
- The two `redundant-prereq` warnings on the owned A page are pre-existing
  plan-level redundancies for Step 4 (amending the declared `requires` list of
  a planned page is not within this role's scope); they are recorded here with
  exact evidence.
- Coverage record left at its Step 3a state
  (`scaffold-complete; authoring and independent review pending`), matching the
  convention of the sibling authored pairs (batch 29, batch 33) in this run;
  no item was added, removed or re-scoped, so no disposition changed.
- No Axiom of Choice dependency occurs anywhere in the eleven items; the
  scope steps of the proof-bearing items state this explicitly. No
  experimental or statistical content is asserted: the three examples use
  declared, non-measured parameters and state that explicitly.

## Status

All eleven assigned items authored, checked and decision-closed; both page
carriers written and rendered; strict proof contracts, content policy,
rendering, proof layout and owned dependency-level checks clean; cross-batch
ledger reviewed and refreshed. Remaining conditions are the run-wide items
listed above and the independent Steps 5–8 review.
