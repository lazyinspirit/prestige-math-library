# Step 3b authoring report — pair `em-vacuum-waves-and-polarization` / `em-vacuum-waves-and-polarization-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: alpha-high Step 3b scaffold auditor and item author; batch 33; 2026-10-09.
- A page: `em-vacuum-waves-and-polarization` — "Vacuum waves and polarization" (order 345).
- B page: `em-vacuum-waves-and-polarization-examples` (order 346).
- Owned items (dependency-level order as dispatched): `def-em-plane-wave-definition` (9), `pthm-em-vacuum-wave-equation` (14), `pthm-em-plane-wave-maxwell` (15), `def-em-polarization-definition` (16), `ex-em-polarization-examples` (17), `pthm-em-general-wave-ivp` (19), `pthm-em-wave-energy-average` (19), `pthm-em-classical-interference` (20), `ex-em-plane-wave-infinite-energy` (20), `texp-em-radiation-pressure-example` (20), `ex-em-two-beam-fringes` (21).
- Inputs read at entry: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `../CLAUDE.md`, `../PHYSICS-CONTENT-MODEL.md`; Step 3a report `research/physics-em-sr-40-2026-10-08-step3a-pair-em-vacuum-waves-and-polarization.md`; batch-33 `.pages.json`, `.coverage.json`, `.notes.md`, `.cross-batch-dependencies.json`; owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`; design carriers under `research/first-principles-2026-10-03/classical-electromagnetism/scaffold/`; `research/plan-classical-electromagnetism-track.md` L2001–L2034; `research/plan-spec.json` entries 345/346.

## Open obligations at entry

1. Author all eleven owned items in ascending dependency level (ties by page order then item ID), with the two library pages, updating the batch-33 manifest labels if an actual dependency changes, and record current Step 3b item decisions.
2. Inspect the direct in-run prerequisite pairs `em-energy-momentum-and-angular-balance` (batch 32), `em-maxwell-integral-and-constraints` (batch 34), `em-wave-equation-prerequisites` (batch 17), `sr-causality-and-signals`.
3. Flag every unauthored supplier with its exact ID and consuming item/step; author the consumer anyway; keep that consumer's decision escalated until the supplier and the actual proof use are reconciled. Known unauthored suppliers at entry (item files absent, scaffold statements only): `lem-em-period-average` (batch 13), `lem-em-spherical-mean-wave-identity` (batch 16), `def-em-vacuum-energy-flux`, `def-em-vacuum-stress-momentum`, `pthm-em-poynting-balance`, `pthm-em-momentum-balance` (batch 32).
4. Create `research/physics-em-sr-40-2026-10-08-batch-33.proof-contracts.json`.
5. Run the explicit-path checks (precheck, rendercheck, content policy, strict proof contracts, dependency-level check, `validate-plan`) and `proof-layout.mjs` once over all changed item paths before handoff.

## Checkpoints

### Entry reconciliation (resumed session)

Three items were already written by the previous dispatch of this same task
(`def-em-plane-wave-definition` 18:33, `pthm-em-vacuum-wave-equation` 18:35,
`pthm-em-plane-wave-maxwell` 18:39 local time), matching the frozen batch-33
manifest statements. On resume I re-read each carrier against its manifest row
and re-ran `precheck.mts` (2 proof items PASS; the definition is
`not-applicable` by kind). No re-authoring is needed for the three; their
item decisions are recorded after the dependency reconciliation pass below.

### 1. `def-em-plane-wave-definition` (level 9) — authored (previous session), re-verified

- Claim: whole-space plane-wave pair with $k\ne0$, $\omega>0$, $e,b\in\mathbb C^3$,
  $C^\infty$ encoding, decreasing-phase convention, zero-wave criterion,
  status clause (no field equation/dispersion/energy/polarization content).
- Deps re-checked: all resolve (batch 13 `def-em-complex-plane-wave` and
  published imports); roles recorded. No open supplier.
- Checks: `precheck` n/a (definition, no phase body); `rendercheck` OK (batch
  re-run later); proof-layout batched at handoff.
- Decision: record `accept` after the batch checks pass (confidence 1, examined
  dependencies listed).

### 2. `pthm-em-vacuum-wave-equation` (level 14) — authored (previous session), re-verified

- Claim: jointly $C^2$ smooth-branch source-free fields on open $W$ satisfy
  $\Delta E=c^{-2}\partial_t^2E$, $\Delta B=c^{-2}\partial_t^2B$ componentwise;
  hypotheses used (Clairaut, curl–curl, Gauss constraints), no converse with
  witness $E(x)=(x_1,0,0)$, $B=0$; weak branch/singular sources excluded.
- Deps re-checked: `post-em-vacuum-maxwell` (authored, sha-stable) and published
  math imports; all resolve. No open supplier.
- Checks: `precheck` PASS (direct); rendercheck OK; proof-layout batched.
- Decision: record `accept` after batch checks (confidence 1, examined deps).

### 3. `pthm-em-plane-wave-maxwell` (level 15) — authored (previous session), re-verified

- Claim: (a) amplitude equations iff source-free smooth branch on
  $\mathbb R^3\times\mathbb R$; (b) nonzero solutions iff $|k|=\omega/c$, then
  $e$ transverse and $b=k\times e/\omega$ with the zero wave allowed on and off
  dispersion; (c) pointwise transversality, $E\cdot B=0$,
  $B=\hat k\times E/c$, $|B|=|E|/c$, components solve the wave equation;
  (d) scope.
- Deps re-checked: `def-em-plane-wave-definition`, `pthm-em-vacuum-wave-equation`
  (authored, earlier), `post-em-vacuum-maxwell`, published math imports
  (cross product, complex exponential, chain rule, divergence/curl); all
  resolve. No open supplier.
- Checks: `precheck` PASS (direct); rendercheck OK; proof-layout batched.
- Decision: record `accept` after batch checks (confidence 1, examined deps).

### 4. `def-em-polarization-definition` (level 16) — authored

- Exact claim/conventions: for a transverse amplitude $e=a+id$ with the
  amplitude conditions $k\cdot e=0$, $b=k\times e/\omega$: (a) trace
  $E=a\cos\theta-d\sin\theta$ in $k^\perp$, image of the unit circle under
  $(u_1,u_2)\mapsto u_1a-u_2d$, phase period $2\pi$ vs time period
  $T=2\pi/\omega$, $\gamma(\theta+\pi)=-\gamma(\theta)$; (b) linear
  ($\dim\operatorname{span}\{a,d\}\le1$, including the zero point) / circular
  ($|a|=|d|>0$, $\langle a,d\rangle=0$) / elliptical (dim 2, otherwise), with
  the principal-axis statement only when $\langle a,d\rangle=0$; (c) helicity
  $H=\langle a\times d,\hat k\rangle$, $H=0$ iff linear, $H<0$ right-handed
  and clockwise for the observer looking along $-\hat k$, screen triad
  $(u,v,\hat k)$ right/up, rotation identity
  $\langle E\times\partial_tE,\hat k\rangle=\omega H$; naming caveat; (d)
  classification-only status with zero wave both on and off dispersion.
- Source locators: Tong §4.3.2 pp. 87–88 ($E_0=\alpha-i\beta$; right-handed iff
  $\beta=\hat k\times\alpha$; under $a=\alpha$, $d=-\beta$ this is $H<0$);
  Griffiths §9.1.3 and Problem 9.8 pp. 373–375.
- Deps: manifest deps plus `thm-eulers-formula` (used for the trace rewriting
  in (a) and the well-definedness section). All other deps used as recorded;
  roles unchanged. Level unchanged (out-of-run import).
- Checks actually run: `rendercheck` OK (1 file); `precheck` not-applicable by
  kind; depcheck/policy batched at handoff.
- Open gaps: none. Next action: author `ex-em-polarization-examples` (level 17).

### 5. `ex-em-polarization-examples` (level 17) — authored

- Exact claim: with $K>0$, $\omega=cK$, $k=Ke_3$, $E_0>0$ in
  $\mathrm V\,\mathrm m^{-1}$ and $b=k\times e/\omega$: (i) $e=E_0e_1$ linear,
  trace $[-E_0,E_0]e_1$, $H=0$; (ii) $e=E_0(e_1\pm ie_2)$ circular of radius
  $E_0$, $H=\pm E_0^2$ (left-handed for the $+$ choice), $|E|=E_0$,
  $|B|=E_0/c$; (iii) $e=E_0(e_1+2ie_2)$ elliptical with semiaxes $E_0,2E_0$,
  $|E|^2\in[E_0^2,4E_0^2]$, $H=2E_0^2$; (iv) zero wave and
  $e=E_0(1+i)e_1$ linear with dependent $a=d$ and segment
  $[-\sqrt2E_0,\sqrt2E_0]e_1$; (v) all choices satisfy $k\cdot e=0$,
  $|k|=\omega/c$, so the amplitude equations hold; no empirical claim.
- Checks: `precheck` PASS (direct; one layer-repair proposed and adopted by
  relabelling the steps to 1.1, 2.1–2.4, 3.1 with the step-1.1 citation added
  to case (iv)); `rendercheck` OK. `verification.precheck: pass` recorded.
- Open gaps: none. Next action: author `pthm-em-general-wave-ivp` (level 19),
  whose clause (a) cites the unauthored `lem-em-spherical-mean-wave-identity`
  (batch 16) — consumer to be authored with that obligation flagged.

### 6. `pthm-em-general-wave-ivp` (level 19, AC_ω) — authored

- Exact claim: for $C^\infty$ constraint-satisfying data $E_0,B_0$ of arbitrary
  growth, $\dot E_0=c^2\operatorname{curl}B_0$, $\dot B_0=-\operatorname{curl}E_0$:
  (a) existence of jointly $C^\infty$ fields on the slab, in the source-free
  smooth branch, with the prescribed data and the explicit componentwise
  spherical-mean representation; (b) uniqueness among jointly $C^2$ solutions;
  (c) domain of dependence from agreement of the data and all curls on the
  closed ball, with the closed backward cone read as the model causal past in
  the chart $x^0=ct$; (d) compact-support propagation $|x|>\rho+c(t-t_0)$;
  (e) local energy inequality
  $\int_{B_r(x_0)}u(\cdot,t)\le\int_{B_{r+c(t-s)}(x_0)}u(\cdot,s)$ and total
  energy equality $\mathcal E(t)=\mathcal E(t_0)$ when $\mathcal E(t_0)<\infty$;
  (f) scope (smooth whole-space branch only).
- Proof route actually written (12 numbered steps): six scalar Cauchy problems
  by [[thm-em-wave-cauchy-kirchhoff]](a); defect fields
  $R=\partial_tE-c^2\operatorname{curl}B$, $Q=\partial_tB+\operatorname{curl}E$,
  whose components solve the homogeneous wave equation and have vanishing
  Cauchy data (curl–curl plus constraints); CK(b) gives $R=Q=0$ (evolution
  equations); Gauss propagation [[pthm-em-gauss-constraint-propagation]](a)
  gives the constraints, hence the four equations; clause (b) by CK(b) plus
  [[pthm-em-vacuum-wave-equation]]; clause (c) by CK(c) componentwise with the
  SR cone dictionary; clause (d) by CK(d) (data and curls vanish off $K$);
  clause (e) by the local Poynting identity [[pthm-em-poynting-balance]](a),
  $|S|\le cu$ from $c\sqrt{\varepsilon_0\mu_0}=1$, the moving-ball
  differentiation via change of variables on $\overline B_1$ (sphere null),
  the parameter-integral lemma and the divergence theorem on the ball
  \[
  F'(v)=-\int_{\partial B_{r(v)}}(S\cdot n-r'(v)u)\,dS,\quad r(v)=r_0+c(t-v),
  \]
  then MVT and the time-reversed pair for the reverse inequality.
- Deps: manifest deps plus `lem-euclidean-balls-are-bounded-c-one-domains`,
  `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`,
  `def-surface-integral-on-a-compact-c-one-hypersurface` and
  `cor-mean-value-theorem` (published imports on pages already in the closure);
  the manifest's `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`
  is replaced by the C¹-domain version, which is the one applicable to balls
  through the published balls lemma. Recorded as a proof-route change; all
  promised content is preserved. Level re-checked (19).
- Checks: `precheck` PASS (direct, first run); `rendercheck` OK;
  `item-dependency-levels check` no error; `depcheck` reports exactly the two
  expected `dep-unresolved`/`link-unresolved` rows for the unauthored suppliers
  below (no other error names this item).
- **Open obligations (flagged, decision to escalate).**
  (i) `lem-em-spherical-mean-wave-identity` (batch 16
  `em-expanded-analysis-prerequisites`): cited by step 1.1 (clause (a)
  representation) through [F13]; item file does not exist on disk. The quote
  recorded in the proof contract is the current batch-16 manifest statement
  and must be reconciled when the carrier lands.
  (ii) `pthm-em-poynting-balance` (batch 32
  `em-energy-momentum-and-angular-balance`): cited by step 6.4 and step 7.1
  through [F4] (the local identity $\partial_tu+\operatorname{div}S=0$ with
  $J=0$); item file does not exist on disk; quote recorded from the current
  batch-32 manifest statement.
  Both consumers are authored in full; the item decision stays `escalate`
  until the completed suppliers and the actual proof uses are verified.
- Next action: author `pthm-em-wave-energy-average` (level 19).

### 7. `pthm-em-wave-energy-average` (level 19) — authored

- Exact claim: for a transverse amplitude $e$ with $k\cdot e=0$,
  $b=k\times e/\omega$, $\omega=c|k|$: (a) $\langle u\rangle=\varepsilon_0|e|^2/2$
  (independent of $x$ and starting time); (b)
  $\langle S\rangle=(\varepsilon_0c/2)|e|^2\hat k$, $\langle S\rangle=\langle u\rangle c\hat k$,
  $I=c\langle u\rangle$; (c) $\langle g\rangle=(\varepsilon_0/2c)|e|^2\hat k$,
  $\langle\sigma_{ij}\rangle=-\langle u\rangle\hat k_i\hat k_j$,
  $\langle\Pi_{ij}\rangle=+\langle u\rangle\hat k_i\hat k_j$, signed flux
  coefficient $(I/c)(\hat k\cdot n)$ with magnitude $(I/c)|\hat k\cdot n|$;
  (d) balance reading (mean of $\partial_t$ terms vanishes by FTC, averaged
  fields constant); (e) scope with zero amplitude zero energy and every
  nonzero amplitude infinite box-exhaustion energy.
- Proof route: componentwise period averages from
  [[lem-em-period-average]] at fixed $x$; Gram identity
  $|k\times e|^2=|k|^2|e|^2$ (from
  [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], added dep);
  $e\times\overline b=k|e|^2/\omega$ by the triple-product identity; the
  stress tensor identity from the coordinate expansion
  $(k\times e)_i\overline{(k\times e)_j}=|k|^2|e|^2\delta_{ij}-k_ik_j|e|^2-|k|^2e_j\overline{e_i}$
  with the $\delta$ and $\operatorname{Re}$ coefficients cancelling; the
  infinite-energy scope assertion by the explicit $\cos^2$ density with
  section integral $\varepsilon_0P|e|^2/2$ over $P=2\pi/|k_j|$, Riemann
  Fubini and box monotonicity on $R=NP$.
- Checks: `precheck` PASS (direct, after relabelling the steps to the
  layer-canonical 1.1; 2.1; 3.1–3.3; 4.1–4.2; 5.1 and fixing the stale
  step-2.2/2.3 references); `rendercheck` OK.
- Final correction before handoff: the box-integral display of step 3.3 read
  $N(2R)^2(\varepsilon_0P/2)|e|^2$ and was corrected to
  $(2N)(2R)^2(\varepsilon_0P/2)|e|^2=(2R)^2N\varepsilon_0P|e|^2$ (factor two;
  the divergence conclusion is unchanged). The four items whose transitive
  closure contains this carrier were re-recorded after the correction, and
  the mandatory `proof-layout` run was repeated on the current files.
- **Supplier reconciliation update (2026-10-09 19:00):** the batch-32 carriers
  `def-em-vacuum-stress-momentum`, `pthm-em-poynting-balance` and
  `pthm-em-momentum-balance` landed during this session; their authored
  statements match the scaffold text used for the citations (local Poynting
  identity (a) with $J\cdot E$, momentum identity (a) with $f=\rho E+J\times B$,
  definition clauses for $g,\sigma,\Pi$). No open supplier remains for this
  item; the reconciliation quotes will be taken from the landed carriers in
  the proof contract.
- Open gaps: none. Next action: author `pthm-em-classical-interference`
  (level 20).

### 8. `pthm-em-classical-interference` (level 20) — authored

- Exact claim: two same-frequency transverse plane waves with real amplitudes
  $a_1,a_2$: (a) the sum is a smooth source-free solution and rewrites with a
  single phase with $\alpha=a_1e_1+a_2e_2e^{i\delta}$,
  $\beta=a_1b_1+a_2b_2e^{i\delta}$, $\delta=(k_2-k_1)\cdot x$; (b)
  $\langle u\rangle=\varepsilon_0|\alpha|^2/4+|\beta|^2/(4\mu_0)
  =\frac{\varepsilon_0}{2}(a_1^2|e_1|^2+a_2^2|e_2|^2)
  +\frac{\varepsilon_0}{2}a_1a_2\operatorname{Re}W$ with
  $W=(e_1\cdot\overline e_2+(\hat k_1\times e_1)\cdot(\hat k_2\times\overline e_2))e^{-i\delta}$;
  (c) $\langle S\rangle=\frac{1}{2\mu_0}\operatorname{Re}(\alpha\times\overline\beta)$,
  and for $k_1=k_2$ the single-wave averages for the amplitude
  $a_1e_1+a_2e_2$; (d) deterministic/no-statistics scope, no classical–quantum
  discrimination.
- Proof route: superposition via [[pthm-em-linear-superposition]](a); single
  phase by $\exp(i\theta_2)=\exp(i\delta)\exp(i\theta_1)$; period averages via
  [[lem-em-period-average]]; magnetic cross term from
  $b_1\cdot\overline b_2=\frac{1}{c^2}(\hat k_1\times e_1)\cdot(\hat k_2\times\overline e_2)$;
  equal-wavevector case by [F6] of the new
  [[pthm-em-wave-energy-average]] together with the bracket reduction.
- Checks: `precheck` PASS (direct); `rendercheck` OK. All deps authored at
  entry (no open supplier). Next action: author
  `ex-em-plane-wave-infinite-energy` (level 20).

### 9. `ex-em-plane-wave-infinite-energy` (level 20) — authored

- Exact claim: explicit density $\varepsilon_0E_0^2\cos^2\theta$ for
  $E=E_0\cos\theta e_1$, $B=(E_0/c)\cos\theta e_2$; uniform positive period
  average $\varepsilon_0E_0^2/2$; the sub-box $Q_R$ lower bound
  $\pi\varepsilon_0E_0^2R^2/K\to\infty$; compact-support contrast via
  [[pthm-em-general-wave-ivp]](d); scope (no measurement; "infinite" means the
  divergence statement).
- Checks: `precheck` PASS (direct); `rendercheck` OK; proof-layout 0 defects;
  strict proof contract 0 errors. All deps authored. Next action: author
  `texp-em-radiation-pressure-example` (level 20).

### 10. `texp-em-radiation-pressure-example` (level 20, AC_ω) — authored

- Exact claim: conditional force per unit area $I/c$ on the ideal absorber and
  $2I/c$ on the ideal reflector along $\hat k$, from the adopted idealisations
  (A1)/(A1')/(A2) with the pillbox boundary-force law; the incident field is
  not asserted to satisfy global sharp-interface Maxwell equations.
- Proof route: absorber — fixed box in the vacuum region, momentum balance
  (b), lateral fluxes vanish, period mean of the $g_3$ derivative zero by
  [[thm-ftc-second-part]], so $\langle\sigma_{33}\rangle=-I/c$ constant and
  the force law gives $I/c$; reflector — the standing wave
  $2E_0\sin(Kx_3)\sin(\omega t)e_1$,
  $(2E_0/c)\cos(Kx_3)\cos(\omega t)e_2$, average
  $\langle\sigma_{33}\rangle=-\varepsilon_0E_0^2=-2I/c$, force $2I/c$.
- Deps: manifest deps plus `thm-ftc-second-part` and
  `def-multidimensional-rectangle-and-volume` (published imports); manifest
  synced.
- Checks: `precheck` PASS (direct); `rendercheck` OK; proof-layout 0 defects;
  strict proof contract 0 errors. Next action: author `ex-em-two-beam-fringes`
  (level 21).

### 11. `ex-em-two-beam-fringes` (level 21) — authored

- Exact claim: crossing waves with $k_{1,2}=K(\pm\sin\alpha e_1+\cos\alpha e_3)$,
  amplitudes $E_0e_2$, $E_0e^{i\varphi}e_2$:
  $\langle u\rangle=\varepsilon_0E_0^2[1+\cos^2\alpha\cos(2K\sin\alpha x_1-\varphi)]$;
  fringe period $\lambda/(2\sin\alpha)$; visibility $\cos^2\alpha$ with the
  $\alpha=0$ and $\alpha\to\pi/2$ cases; copropagating law
  $\propto|1+e^{i\Delta}|^2$ and phase-scan visibility $1$; statistical
  qualifications and no classical–quantum discrimination.
- Checks: `precheck` PASS (direct, after removing a same-layer step reference
  that the layer canonicaliser would otherwise reorder); `rendercheck` OK;
  proof-layout 0 defects; strict proof contract 0 errors. All deps authored.

## Supplier reconciliation (flagged suppliers landed during this session)

- `def-em-vacuum-stress-momentum`, `pthm-em-poynting-balance` and
  `pthm-em-momentum-balance` (batch 32, `em-energy-momentum-and-angular-balance`)
  landed at 18:59-19:00 local time. Their authored statements were read and
  match the scaffold text used in the citations of items 6 and 7: Poynting
  (a) $\partial_tu+\operatorname{div}S=-J\cdot E$, momentum (a)
  $\partial_tg-\operatorname{div}\sigma=-f$ with
  $f=\rho E+J\times B$, and the definition clauses for $g$, $\sigma$,
  $\Pi=-\sigma$. The strict proof contract re-run after they landed reports
  0 errors, so the recorded quotes are exact against the carriers.
- `lem-em-spherical-mean-wave-identity` (batch 16,
  `em-expanded-analysis-prerequisites`) landed at 19:07. Its Statement matches
  the IVP's [F13] and the clause (a) spherical-mean representation
  ($M_rf$, smooth in $r\ge0$, Euler–Poisson–Darboux, $H_f=tM_{ct}f$ with the
  stated wave equation and data). The IVP's earlier escalation condition is
  therefore cleared, and all eleven item decisions were recorded `accept`
  with confidence 1 and the examined dependency lists.
- No item decision remains escalated; `step3-decisions.mjs check --phase final`
  reports all eleven owned items closed (run-wide `accepted` counts move as
  sibling pairs land; the owned-open list is empty).

## Checks actually run (all explicit-path unless stated; 2026-10-09)

- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` on the eleven
  owned items — **9 checked, 0 failing** (two definitions are
  not-applicable by kind: no phase body). All proof items use `direct`.
- `node tools/physics-support/rendercheck.mjs` on the eleven items plus the
  two page files — **OK, 13 files**: YAML parses, no wikilink inside math, no
  nested or unbalanced delimiters, no multiline display block, all math spans
  parse under KaTeX.
- `node tools/physics-support/content-policy.mjs
  research/physics-em-sr-40-2026-10-08-batch-33.pages.json` (item mode) —
  **11 scoped items, 0 errors, 0 warnings**.
- `node tools/physics-support/proof-contract.mjs
  research/physics-em-sr-40-2026-10-08-batch-33.proof-contracts.json --strict`
  — **0 errors, 0 warnings, 11/11 items**; every citation quote was generated
  from the current carrier section text and re-validated against it, every
  numbered step has a derivation with its exact cited inputs, and all eight
  boundary dispositions are recorded per item.
- `node tools/physics-support/depcheck.mjs --items-file` (11 owned IDs) —
  **OK**: focused item checks plus prerequisite-cycle checks over 1409 items
  and 254 pages passed; both new pages appear at their reading-order depth
  with their prerequisite closures.
- `node tools/physics-support/item-dependency-levels.mjs check --run …` —
  no error names any owned item; the single printed error is
  `lem-em-outgoing-source-helmholtz-and-diffraction` (a sibling batch's level
  label), a run-wide condition.
- `node tools/physics-support/pathcheck.mjs --pages-file` (both page IDs) —
  **0 errors, 0 warnings** (no `_pathway.md` exists for this category yet;
  pathway authoring is a later stage and was not touched).
- `node tools/physics-support/coverage-checklist.mjs …batch-33.coverage.json
  --require-destination` — **1 page, 18 harvested results, 0 errors, 0
  warnings**.
- `node tools/physics-support/proof-layout.mjs` on all eleven owned item
  paths (the mandatory once-before-handoff run, after the last item edit) —
  **11 items, 64 steps, 0 defects**.
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run …`
  — run-wide **FAIL** on 44 errors, **none of them on pages 345/346 or these
  items**: 2 `requires-resolve` and 42 `undeclared-prereq` rows on sibling
  pages still being authored (`em-elementary-mathematical-prerequisites`,
  `em-expanded-analysis-prerequisites`, `em-boundary-and-spectral-prerequisites`,
  `em-material-response`, `em-experiment-analysis-prerequisites`,
  `em-variational-mathematical-prerequisites`, `sr-spacetime-primitives`,
  `sr-lorentz-transformations`, `sr-observer-measurements`,
  `sr-forces-and-continuum`). Pages 345/346 print with their declared
  `requires` and no error row. This is a pre-splice plan mismatch reported for
  Step 4, not hidden debt of this pair.
- `node tools/physics-support/step3-decisions.mjs record-item` on the eleven
  owned items — **11 accepted receipts** (`accept`, confidence 1, examined
  dependency lists); after the step-3.3 correction of
  `pthm-em-wave-energy-average` and the re-recording of the four transitive
  consumers (`pthm-em-classical-interference`,
  `ex-em-plane-wave-infinite-energy`, `texp-em-radiation-pressure-example`,
  `ex-em-two-beam-fringes`), `check --phase final` reports **all eleven owned
  items closed** (`accepted` runs count as sibling pairs land; the owned-open
  list is empty at handoff).

## Manifest, pages and records written

- Both page carriers created:
  `library/classical-electromagnetism/em-vacuum-waves-and-polarization.md`
  (7 items) and `...-examples.md` (4 examples), prose summaries only.
- Batch-33 manifest `deps`/`dependency_roles` synced to the authored carriers
  for the five items whose actual dependencies changed
  (`pthm-em-plane-wave-maxwell`, `def-em-polarization-definition`,
  `pthm-em-general-wave-ivp`, `pthm-em-wave-energy-average`,
  `texp-em-radiation-pressure-example`); all statements, titles, kinds,
  levels and orders are unchanged, so the Step 3a scope hash is untouched
  (the scope phase still checks closed).
- Proof contracts created:
  `research/physics-em-sr-40-2026-10-08-batch-33.proof-contracts.json`
  (version 1, scope of the eleven IDs).
- No cross-batch edge set changed: the dependency additions are published
  mathematical suppliers whose homes were already inside the page closure,
  and the IVP's in-run supplier `lem-em-spherical-mean-wave-identity` was
  already a declared batch-16 edge; the batch-33 cross-dependency input was
  therefore not disturbed.

## Published concerns

No confirmed defect in a published item was found in this pass. All published
suppliers consumed by the pair resolve in `depcheck` (scoped run OK), their
exact hypotheses are quoted in the items' Facts blocks, and the strict proof
contracts validate every citation against the current carriers (11/11 items,
0 errors). Two published items required care and carry it in the item text:
`thm-divergence-theorem-for-bounded-c-one-euclidean-domains` is applied only
to Euclidean balls through the published
`lem-euclidean-balls-are-bounded-c-one-domains`, and
`lem-unit-sphere-is-lebesgue-null` is used only to drop the sphere boundary
from the integrals of continuous densities. Suspicion-level questions about
deeper proof content remain the business of the independent review steps
(5–8); nothing here asserts an audit.

## Open obligations at handoff

1. **Step 4 pre-splice plan mismatch** (run-wide, not this pair): the 44
   `validate-plan` errors listed above must be repaired by the owning
   batches/plan synchronisation before any later splice gate; pages 345/346
   have no error row.
2. **Sibling run-wide level label**: `lem-em-outgoing-source-helmholtz-and-diffraction`
   carries a stored `dependency_level` of 1 against a computed 0 (its own
   batch's record); no owned item is affected.
3. **Sibling batches still in flight**: the run-wide `step3-decisions` frontier
   shows 219/473 items accepted at handoff, with the remainder owned by other
   pairs; no owned item is open.
4. Independent mathematical audit, judgment and gate certification of these
   eleven items follow in Steps 5–8; nothing in this report claims them, and
   all `verification` stamps remain exactly those written by the authoring
   checks (`precheck` only).
