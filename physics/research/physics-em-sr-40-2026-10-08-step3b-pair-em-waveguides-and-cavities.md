# Step 3b — pair `em-waveguides-and-cavities` / `em-waveguides-and-cavities-examples`

Run `physics-em-sr-40-2026-10-08`, role alpha-high, batch 35.
Report opened at entry 2026-10-09 (Australia/Sydney). Engine state not edited.

## Scope (owned IDs, in the dispatch's dependency-level order)

| # | level | item | home page | design_state |
|---|---|---|---|---|
| 1 | 0 | `lem-em-rectangle-mode-profile-identities` | A `em-waveguides-and-cavities` | new-local-prerequisite; complete-proof-strategy |
| 2 | 0 | `lem-em-separated-phasor-calculus` | A | new-local-prerequisite; complete-proof-strategy |
| 3 | 0 | `lem-em-transverse-vector-identities` | A | new-local-prerequisite; complete-proof-strategy |
| 4 | 1 | `lem-em-rectangular-transverse-mode-completeness` | A | new-local-prerequisite; complete-proof-strategy |
| 5 | 17 | `def-em-guide-cavity-geometry` | A | complete-exact-conditional-research-argument |
| 6 | 18 | `pthm-em-rectangular-mode-candidates` | A | complete-exact-conditional-research-argument |
| 7 | 18 | `pthm-em-uniform-ohmic-modal-decay` | A | framework K10 enrichment (later added; not in the round-1/2 freeze) |
| 8 | 18 | `ex-em-tem-topology-example` | B `em-waveguides-and-cavities-examples` | complete-exact-conditional-research-argument |
| 9 | 19 | `pthm-em-guide-dispersion-energy` | A | complete-exact-conditional-research-argument |
| 10 | 19 | `pthm-em-open-rectangular-guide-completeness` | A | framework K10 enrichment (later added; not in the round-1/2 freeze) |
| 11 | 19 | `ex-em-rectangular-cavity-example` | B | complete-exact-conditional-research-argument |
| 12 | 19 | `ex-em-te-ten-example` | B | complete-exact-conditional-research-argument |
| 13 | 20 | `pthm-em-guide-completeness` | A | complete-exact-conditional-research-argument |

Dispatched write scope: the 13 item files above, the two pages
`library/classical-electromagnetism/em-waveguides-and-cavities.md` and
`...-examples.md`, `research/physics-em-sr-40-2026-10-08-batch-35.proof-contracts.json`,
the batch-35 manifest labels where an actual dependency/level change requires
reconciliation, the batch-35 cross-batch dependency input, and this report.
Batch 35 contains only this pair, so no sibling batch rows are edited.

## Open obligations at entry

1. **Unfinished in-run suppliers in the declared closure.** The following
   supplier item files did not exist on disk at entry (checked 2026-10-09):
   `lem-em-rectangular-pec-energy-completeness`,
   `lem-em-smooth-pec-cavity-spectral-closure` (batch 16,
   `em-expanded-analysis-prerequisites`), `thm-em-elliptic-boundary-existence`,
   `thm-em-waveguide-spectral-completeness` (batch 18,
   `em-boundary-and-spectral-prerequisites`). Consumers and consuming steps are
   listed per item below. The pair is authored anyway with the stated supplier
   premises; the affected item decisions stay escalated until the completed
   supplier and the actual proof use are verified.
2. **Pre-existing frozen composition.** Archived round-1/round-2 items of this
   pair (`research/physics-em-sr-40-2026-10-08-waveguide-round{1,2}.*`) record an
   earlier, root-accepted composition of 11 of these items. The item carrier
   files themselves are not on disk (the `/tmp/physics-waveguide-repair`
   working directory no longer exists), so every body below is written from the
   current batch-35 manifest statements/strategies, which are the current
   public interface and the reviewed proof plans. The two K10 theorems
   (`pthm-em-uniform-ohmic-modal-decay`, `pthm-em-open-rectangular-guide-completeness`)
   were added to the batch-35 manifest at the 17:36 refresh and are not part of
   that archived freeze; their bodies are authored from their current manifest
   statement/strategy and the recorded K10 design argument.
3. **Step 4 plan mismatches** carried from the batch-35 scaffold notes are
   rechecked at handoff and reported without editing shared plan rows.
4. Independent mathematical audit, judgment and gate certification follow in
   Steps 5–8; nothing here claims them. This report is navigation, not evidence.

## Per-item checkpoints

One entry per owned item, in the dispatched dependency-level order. "Sources" lists the frontmatter locators; every item carries its own `sources.references` with the exact locators quoted in the batch coverage. "Checks" are the results actually observed on 2026-10-09 (Australia/Sydney) for the current on-disk text. All items were authored from the current batch-35 manifest statements/strategies; the independent mathematical audit and adjudication remain Steps 5-8.

### 1. `lem-em-separated-phasor-calculus` (level 0, math lemma)
- **Claim/conventions.** For open $\Omega_t\subseteq\mathbb R^2$, $\beta=p+iq\in\mathbb C$, $\omega>0$ and $C^1$ amplitudes $\tilde F$, the real field $F=\operatorname{Re}(\tilde F e^{i(\beta x_3-\omega t)})$ is $C^1$ with the real-part derivative, divergence and curl identities (a)-(c); clause (d) is the two-phase amplitude injectivity and its nonempty-open-set consequence. Phase convention $e^{i(\beta x_3-\omega t)}$ and componentwise $\operatorname{Re}$ matching the page definition; complex calculus from the cited published suppliers.
- **Sources/locators.** Beisert ch. 13 (guide phasor reduction, PDF pp. 153-162); Fitzpatrick node 105; Griffiths 9.5.1-9.5.3 pp. 405-412.
- **Deps.** 17 published mathematical items; the scaffold row was extended with `thm-derivative-of-exponential`, `thm-sine-and-cosine-derivatives`, `cor-trigonometric-parity-and-pythagorean-identity`, `cor-exponential-reciprocal-and-positivity`, all used in the real-cartesian expansion of $e^{i\theta}$.
- **Audit/decision.** Steps 1.1-5.1 checked line by line: the phase reduction $e^{i\theta}=e^{-qx_3}(\cos\varphi+i\sin\varphi)$, the transverse/longitudinal/time derivative identities, the injectivity determinant argument (the two equations force $b_l\sin(\varphi_1-\varphi_2)=0$ and $a_l\sin(\varphi_2-\varphi_1)=0$), and the open-set argument with $0<\omega|t_1-t_2|<\pi$. No defect found. Decision: accept. Choice-free.
- **Open gaps.** None in scope; independent review in Steps 5-8.

### 2. `lem-em-transverse-vector-identities` (level 0, math lemma)
- **Claim/conventions.** Identities (a)-(c) for the splitting $\mathbb R^3=\mathbb R^2\oplus\mathbb Re_z$: $\operatorname{div}(e_z\times\nabla_th)=0$, $\operatorname{curl}(e_z\times\nabla_th)=e_z\Delta_th$, the triple-product, orthogonality and norm identities, $\operatorname{curl}(e_zh)=-e_z\times\nabla_th$, $\operatorname{div}(u_t)=\operatorname{div}_tu_t$, $\operatorname{curl}(u_t)=e_z\operatorname{curl}_2u_t$.
- **Sources/locators.** As item 1 (Beisert ch. 13 transverse algebra; Fitzpatrick node 105; Griffiths 9.5.2).
- **Deps.** 8 published mathematical items (cross product, divergence/curl, Laplacian, Clairaut-Schwarz).
- **Audit/decision.** Every coordinate computation in steps 1.1-3.1 re-derived independently (including $e_z\times(e_z\times v)=-v$, $|e_z\times v|=|v|$, and the Clairaut cancellation in the first divergence). No defect. Decision: accept. Choice-free.
- **Open gaps.** None in scope.

### 3. `lem-em-rectangle-mode-profile-identities` (level 0, math lemma)
- **Claim/conventions.** For $(0,L_1)\times(0,L_2)$ and profiles $h_{mn}$, $e_{mn}$: eigen-identities and normal/vanishing traces (a),(b); orthogonality, exact norms and the mixed integral $J_{mp}$ with parity evaluation (c), including $\int h_{00}e_{11}=4L_1L_2/\pi^2$; Dirichlet-type identities (d). Riemann integrals over rectangles; $k_{mn}^2$ as in the statement.
- **Sources/locators.** As item 1.
- **Deps.** 12 published mathematical items; `thm-chain-rule-for-total-derivatives` was added for the affine substitution in the derivative step.
- **Audit/decision.** Steps re-derived (products of trigonometric functions, FTC, Fubini, Clairaut). Confirmed the canonical post-repair numbering (1.1, 1.2, 2.1, 2.2, 3.1, 4.1), $J_{mm}=0$, $J_{mp}=2pL/[\pi(p^2-m^2)]$ on opposite parity, and the Dirichlet-type identity by the product-rule boundary term. No defect. Decision: accept. Choice-free.
- **Open gaps.** None in scope.

### 4. `lem-em-rectangular-transverse-mode-completeness` (level 1, math lemma)
- **Claim/conventions.** Under $\mathrm{AC}_\omega$: the cosine and sine families are orthogonal complete systems of $L^2(0,L)$ and the four rectangle products are complete in $L^2(R)$. Completeness is completeness of the closed linear span; the torus supplier is the normalized-Haar character system.
- **Sources/locators.** As item 1 (Fitzpatrick/Griffiths completeness context; Beisert ch. 13).
- **Deps.** 21 items, including `thm-trigonometric-system-is-complete-in-l-two-of-the-torus` and (scaffold additions) the sine/FTC/torus list recorded in the manifest. $\mathrm{AC}_\omega$ declared and propagated.
- **Audit/decision.** Verified the even/odd extension coefficient computation $\widehat g(k)=\frac1L\langle f,c_{|k|}\rangle$, the trivial-complement/closed-span step 1.3, the product Fubini argument and the countable null-set bookkeeping of step 4.1, and the normalization/expansion step 5.1. **Repaired** step 1.3: the variational identity is now written with $\operatorname{Re}\langle z,w\rangle$ and, in the complex case, the conclusion for $iw$ gives $\operatorname{Im}\langle z,w\rangle=0$; the previous displayed identity $d^2-2\varepsilon\langle z,w\rangle+\varepsilon^2\|w\|^2$ was not literally valid in a complex Hilbert space. Precheck re-run PASS; contract entry regenerated; strict contract clean. Decision: repaired. Choice: $\mathrm{AC}_\omega$ only.
- **Open gaps.** None in scope.

### 5. `def-em-guide-cavity-geometry` (level 17, physics definition)
- **Claim/conventions.** Fixes the straight guide $\Omega_A=A\times\mathbb R$ (rectangular instance $(0,a)\times(0,b)$), the rectangular cavity, the open walls and outward normals, the ideal PEC model $n\times E=0$, $n\cdot B=0$ with its interface reading from `pthm-em-material-stationary-jumps` and the explicit exclusion of the $\sigma\to\infty$ limit and box edges, the zero-normal-$B$ reflection class with distributional divergence constraints, the axis-relative TE/TM/TEM terminology and the separated phasor convention. No field equation or constitutive law is asserted.
- **Sources/locators.** Beisert ch. 13; Fitzpatrick node 105; Griffiths 9.5.1-9.5.3; Tong §4.3.3 pp. 89-90 (ideal-conductor boundary reading).
- **Deps.** 10 items: 3 in-run formulation prerequisites (`def-em-fields`, `def-em-lab-geometry`, `def-em-si-conventions`), `pthm-em-material-stationary-jumps` and 6 published mathematical items. `provenance.proof: not-applicable`; no proof phases.
- **Audit/decision.** Definition audited for authoring readiness: all objects, domains, regularity and conventions are stated; the rectangular cross-section is explicitly not asserted to be a $C^1$ boundary domain; the smooth-cavity branch is separated from the rectangular reflection class. No defect. Decision: accept.
- **Open gaps.** None in scope.

### 6. `pthm-em-rectangular-mode-candidates` (level 18, physics theorem)
- **Claim/conventions.** Separated TE and TM candidates of the lossless isotropic scalar constant branch in the rectangular PEC guide: exact verification of the four source-free macroscopic equations and the wall conditions (a),(b); index restrictions (c) including the $(0,0)$ exclusion by the full field equations and the reconstruction denominator; cutoff alternatives (d); scope (e). Conditional on the adopted closure branch and the PEC model.
- **Sources/locators.** Beisert ch. 13; Fitzpatrick node 105; Griffiths 9.5.1-9.5.3; Tong §4.3.3.
- **Deps.** 19 items including `post-em-material-closure` (physical-assumption), `pthm-em-macroscopic-maxwell` (physical-result), the three lemmas and the formulation prerequisites.
- **Audit/decision.** Re-derived the TE and TM amplitude equations (including $\widehat{\operatorname{curl}}(\tilde E)=i\omega\mu\tilde H$, $\widehat{\operatorname{curl}}(\tilde H)=-i\omega\varepsilon\tilde E$ with $(k^2+\beta^2)=\omega^2\varepsilon\mu$), the wall traces $\partial_1h=\partial_2h=0$, $e=0$, and clause (c) (Faraday excludes a longitudinal constant at any $\beta$, divergence alone does not). **Repaired** the attribution of the constitutive relations: $D=\varepsilon E$, $B=\mu H$ are now credited to `post-em-material-closure` clause (b) (read with the objects $D,H$ of `def-em-polarization-magnetization`), in both the Statement and the Given; the previous wording misattributed them to the definition, which explicitly asserts no constitutive relation. Precheck re-run PASS; the contract quotes of this item in the citing items were refreshed; strict contract clean. Decision: repaired.
- **Open gaps.** None in scope.

### 7. `pthm-em-guide-dispersion-energy` (level 19, physics theorem)
- **Claim/conventions.** For the propagating branch $\beta>0$, $\omega>\omega_c$: cross-section identities (a); period-averaged stored energy and longitudinal flux for both families (b); transport $\Phi=U\beta/(\varepsilon\mu\omega)=Uv_g$ and the speed relations (c); finite propagating index box (d); scope (e). Period averages over time at fixed position; SI conventions.
- **Sources/locators.** As item 6.
- **Deps.** 16 items including `lem-em-period-average`, `pthm-em-restricted-material-energy` and `pthm-em-rectangular-mode-candidates`.
- **Audit/decision.** Re-derived the period averages $\langle u\rangle=\frac14(\varepsilon|\tilde E|^2+\mu^{-1}|\tilde H|^2)$, $\langle S\rangle=\frac12\operatorname{Re}(\tilde E\times\overline{\tilde H})$, the TE/TM energy and flux algebra (including $\nabla e\times w=e_z|\nabla e|^2$), the transport ratio, and $v_pv_g=1/(\varepsilon\mu)$ with the strict inequalities. No defect. Decision: accept. Choice-free (only the choice-free local clause of the energy supplier is used).
- **Open gaps.** None in scope.

### 8. `pthm-em-uniform-ohmic-modal-decay` (level 18, physics theorem; K10)
- **Claim/conventions.** Constant isotropic inertial-rest branch with $\varepsilon,\mu>0$, $\sigma\ge0$; rectangular reflection class (a) and smooth closed PEC cavity (b) with unique $C(\mathbb R;L^2)$ / $C(\mathbb R;H\times M)$ solutions of the declared first-order realization; magnetic decomposition $M=\overline{\operatorname{span}\{w_j\}}\oplus K_M$; exact energy balance and decay (c); the broader second-order branch (d); scope (e). The weak material realization is adopted explicitly.
- **Sources/locators.** Beisert ch. 13 §13.1 eqs. (13.1)-(13.6) and §13.2-13.3; the precise energy-class enrichment is the framework-approved K10 argument, as recorded in the item locator.
- **Deps.** 40 items including the four spectral/elliptic suppliers (`lem-em-rectangular-pec-energy-completeness`, `lem-em-smooth-pec-cavity-spectral-closure`, `thm-em-waveguide-spectral-completeness`, `thm-em-elliptic-boundary-existence`), `def-axiom-of-choice` (smooth branch) and `def-countable-choice` (rectangular branch).
- **Audit/decision.** Verified the per-mode energy identity $q'=-2\sigma|\widehat E|^2$ (the cross terms cancel because $\varepsilon v^2=\mu^{-1}$), the energy-balance factors ($\frac18\sum\int$ versus $\frac14$ torus norm), the characteristic classification, the decay and zero-sector statements, and the modal/uniqueness structure. **Repaired** step 1.2: the Dirichlet-solver output $\varphi-\nabla f$ was said to "vanish near $\partial\Omega$", which is false for $\nabla f$; it now correctly lies in $V$ because it is smooth on the closure, divergence-free, and has vanishing tangential trace on $\partial\Omega$ ($f|_{\partial\Omega}=0$ forces $n\times\nabla f=0$). Also refreshed `[F3]` from "unfinished in-run suppliers, used provisionally" to the now-authored suppliers and dropped the stale open-obligation sentence. Precheck re-run PASS; contract entry regenerated (with the `post-em-material-closure` `## Postulate` citation restored); strict contract clean. **Supplier reconciliation:** `lem-em-rectangular-pec-energy-completeness` used in [F2]/step 2.1; `lem-em-smooth-pec-cavity-spectral-closure` and `thm-em-waveguide-spectral-completeness` in [F3]/steps 1.2 and 3.1; `thm-em-elliptic-boundary-existence` in [F4]/step 1.2 - all four carriers are now authored on disk, precheck PASS, and their statements supply exactly the cited premises. Decision: repaired.
- **Open gaps.** Supplier-side bookkeeping recorded in the handoff; independent review in Steps 5-8.

### 9. `pthm-em-open-rectangular-guide-completeness` (level 19, physics theorem; K10)
- **Claim/conventions.** Infinite straight rectangular guide $Q=(0,a)\times(0,b)\times\mathbb R$: complete mixed transverse-character and longitudinal $L^2$ Fourier transform with the $2\pi$ convention and the physical $\frac14$ norm factor (a); unique constant-Ohmic energy evolution with retained parities and constraints (b); finite total energy, exact balance and frequency-by-frequency dispersion with the $K=0$ case kept (c); scope (d).
- **Sources/locators.** As item 8.
- **Deps.** 37 items including `pthm-em-uniform-ohmic-modal-decay` (physical-result, in-pair), `lem-em-rectangular-pec-energy-completeness` (batch 16), `lem-em-rectangular-transverse-mode-completeness` (in-pair) and the Plancherel/Fourier/ODE suppliers. Countable Choice declared.
- **Audit/decision.** Verified the unitarity and the norm factor ($\|F\|^2_{L^2(Q)}=\frac14\sum\int|\widehat F|^2$, hence the $\frac18$ in the energy), the constraint transport $K\cdot\widehat E=K\cdot\widehat B=0$, the per-mode identity $q'=-2\sigma|\widehat E|^2$, the $\sigma=0$ dispersion $\omega^2=v^2|K|^2$, and the $K=0$ handling without division. No defect found. Decision: accept.
- **Open gaps.** None beyond Steps 5-8.

### 10. `pthm-em-guide-completeness` (level 20, physics theorem)
- **Claim/conventions.** Transverse profile completeness with the $h_{00}$ zero-mean distinction (a); rectangular cavity reflection class with unique weak solutions and constant energy (b); smooth bounded PEC cavity curl eigenbasis, $C^\infty$ eigenfields and the first-order modal equation $a_j''+v_{\mathrm{wave}}^2\lambda_ja_j=0$ with static zero modes (c); scope (d). The weak material evolutions are adopted explicitly; AC and $\mathrm{AC}_\omega$ declared as cited.
- **Sources/locators.** As item 6.
- **Deps.** 22 items including `thm-em-waveguide-spectral-completeness`, `lem-em-smooth-pec-cavity-spectral-closure`, `lem-em-rectangular-pec-energy-completeness` and the two K10 companions.
- **Audit/decision.** Verified clause (a) (the $h_{00}$ coefficient of a zero-mean $f$ vanishes; the deleted family is complete exactly in the zero-mean subspace), clause (b) instantiation, and step 2.1: the collar-cutoff pairing $\langle\operatorname{curl}B,u_j\rangle=\langle B,\operatorname{curl}u_j\rangle$, the second derivative via $B'=-\operatorname{curl}E$ and the full-$X$ identity, and the $\lambda_j=0$ statics $\operatorname{curl}u_j=0$. **Repaired** the `[F3]` supplier-status wording (now the authored in-run suppliers; stale open-obligation sentence removed). Precheck re-run PASS; contract regenerated; strict contract clean. Decision: repaired.
- **Open gaps.** None in scope; independent review in Steps 5-8.

### 11. `ex-em-tem-topology-example` (level 18, physics example)
- **Claim/conventions.** Potential-form TEM fields from a plane harmonic $\varphi\in C^2(\overline A;\mathbb C)$; PEC $\Leftrightarrow\partial_\tau\varphi=0$ on a smooth wall (a); single-conductor obstruction by two-dimensional Dirichlet uniqueness, including the rectangular continuous-closure class (b); coaxial annulus $\varphi=V\ln(b/|x|)/\ln(b/a)$, nondispersive $k=\omega/v$, polar-coordinate energies $W_e=W_m=\frac12CV^2$, $C=2\pi\varepsilon/\ln(b/a)$, $L=\mu\ln(b/a)/(2\pi)$, $LC=\varepsilon\mu$ (c); scope (d).
- **Sources/locators.** Beisert ch. 13; Fitzpatrick node 105; Griffiths 9.5.3 (coaxial line); Tong §4.3.3.
- **Deps.** 23 items; $\mathrm{AC}_\omega$ used only in the polar-measure energy step (step 3.1).
- **Audit/decision.** Verified the four amplitude equations for the potential form, the converse classification ($\beta^2=\varepsilon\mu\omega^2$ or the zero field; no division by $\beta$), the Dirichlet-uniqueness obstruction and the coaxial integrals. **Repaired** step 1.1: with $\tilde E=-\nabla\varphi$ one has $n_1\tilde E_2-n_2\tilde E_1=n_2\partial_1\varphi-n_1\partial_2\varphi=-\partial_\tau\varphi$ ($\tau:=e_z\times n$), so $n\times\tilde E=-e_z\partial_\tau\varphi$, not $+e_z\partial_\tau\varphi$; the displayed chain had dropped the sign of $\tilde E$. Only the vanishing is used, so the PEC equivalence is unchanged; the sign fix was verified against a concrete linear potential. Also removed the stale parenthetical "to be added to the dependency list" (`thm-clairaut-schwarz-mixed-partials` is in `deps`). Precheck re-run PASS; contract regenerated; strict contract clean. Decision: repaired.
- **Open gaps.** None in scope.

### 12. `ex-em-rectangular-cavity-example` (level 19, physics example)
- **Claim/conventions.** Explicit standing mode $E=E_{\mathrm{sp}}\cos\omega t$, $B=-\omega^{-1}\operatorname{curl}E_{\mathrm{sp}}\sin\omega t$ with $E_{\mathrm{sp}}=e_1\sin(\pi x_2/b)\sin(\pi x_3/d)$; resonance $\omega^2=(\varepsilon\mu)^{-1}[(\pi/b)^2+(\pi/d)^2]$; all six walls; identification as the $\beta=0$ TM$(1,1)$ cutoff instance on axis $e_1$.
- **Sources/locators.** As item 11.
- **Deps.** 5 items (definition, two lemmas, candidate theorem, divergence/curl).
- **Audit/decision.** Re-derived $\operatorname{div}E_{\mathrm{sp}}=0$, $\Delta E_{\mathrm{sp}}=-k_{11}^2E_{\mathrm{sp}}$, $\operatorname{curl}\operatorname{curl}E_{\mathrm{sp}}=k_{11}^2E_{\mathrm{sp}}$, the resonance, all six wall conditions (including $(\operatorname{curl}E_{\mathrm{sp}})_1=0$) and the $\beta=0$ identification sign $\operatorname{curl}E_{\mathrm{sp}}=-e_1\times\nabla e_{11}$. No defect. Decision: accept. Choice-free.
- **Open gaps.** None in scope.

### 13. `ex-em-te-ten-example` (level 19, physics example)
- **Claim/conventions.** TE$_{10}$ amplitudes $\tilde E=(0,i\omega\mu\frac a\pi\sin\frac{\pi x_1}{a},0)$, $\tilde H=(-i\beta\frac a\pi\sin\frac{\pi x_1}{a},0,\cos\frac{\pi x_1}{a})$; cutoff $\omega_c=\pi/(a\sqrt{\varepsilon\mu})$ with the real/cutoff/evanescent alternatives; for $a\ge b$ the lowest-cutoff comparison over all TE indices and all modes, tie at $a=b$, $(0,0)$ excluded.
- **Sources/locators.** As item 11.
- **Deps.** 4 items (definition, SI conventions, candidate theorem, profile lemma).
- **Audit/decision.** Verified the $(1,0)$ instantiation from the candidate theorem, $e_z\times\nabla_th_{10}=-\frac{\pi}{a}\sin(\pi x_1/a)e_2$, the cutoff alternatives, and the index comparison ($m\ge1$ or $m=0,n\ge1$; TM indices strictly larger; tie only at $a=b$ with $(0,1)$). No defect. Decision: accept. Choice-free.
- **Open gaps.** None in scope.

## Handoff

**Completed IDs (13/13).** A page `em-waveguides-and-cavities`: `lem-em-separated-phasor-calculus`, `lem-em-transverse-vector-identities`, `lem-em-rectangle-mode-profile-identities`, `lem-em-rectangular-transverse-mode-completeness`, `def-em-guide-cavity-geometry`, `pthm-em-rectangular-mode-candidates`, `pthm-em-guide-dispersion-energy`, `pthm-em-uniform-ohmic-modal-decay`, `pthm-em-open-rectangular-guide-completeness`, `pthm-em-guide-completeness`. B page `em-waveguides-and-cavities-examples`: `ex-em-te-ten-example`, `ex-em-rectangular-cavity-example`, `ex-em-tem-topology-example`. Both pages fully written (frontmatter item lists, objectives and per-clause prose); manifest rows and coverage file updated; no sibling rows edited.

**Checks actually run (2026-10-09, all on the current text).**
- `precheck.mts` on all 13 items: **13/13 PASS** (the definition has no proof phases and reports 0 checked/0 failing).
- `proof-contract.mjs --strict` on `research/physics-em-sr-40-2026-10-08-batch-35.proof-contracts.json`: **0 errors, 0 warnings, 13/13 checked**; entries regenerated for the five items edited here and quotes refreshed for citations of `pthm-em-rectangular-mode-candidates`.
- `proof-layout.mjs` batched on the 13 items: **13 items, 79 steps, 0 defects**.
- `rendercheck.mjs` on the 13 items and both pages: **OK, 15 files**.
- `content-policy.mjs` on the batch-35 manifest: **13 scoped items, 0 errors, 0 warnings**.
- `depcheck.mjs`: **no finding names any of the 13 items or either page**; the library-wide run reports its pre-existing legacy backlog (`published-unaudited` etc.), not batch-35 debt.
- `fwdcheck.mjs`: **no finding names any batch-35 item or page**; the run-wide report is sibling debt.
- `validate-plan.mjs research/plan-spec.json --run ...`: **no error names either owned page**; the 44 run-wide errors belong to other pages. Three `redundant-prereq` warnings name `em-waveguides-and-cavities` (`sine-cosine-and-the-definition-of-pi` is reachable through three declared requires); reported here for Step 4, no shared plan row edited.
- `physics-check.mjs --run ...`: 7 errors, **none naming a batch-35 item**.
- `item-dependency-levels.mjs check --run ...`: stored labels equal computed ones for all 13 items; the single remaining error is `lem-em-outgoing-source-helmholtz-and-diffraction` (sibling batch).
- `frontier-dependency-ledger.mjs refresh --run ...`: refreshed; batch-35 input now carries **38 rows (35 item + 3 page), every one with a current `verified` review row**; the strict `--require-reviewed` mode still fails run-wide on other batches' edges/inputs, none of them batch 35's.
- `step3-decisions.mjs check --run ... --phase scope`: **closed: true** for all 40 pairs (including this one); the phase-`final` gate is run-wide `closed:false` because engine writers are active in other pairs.

**Added suppliers.** No new item outside the assigned 13 was created, and no published content was edited. The scaffold additions recorded in the batch notes (the four lemmas, the definition's contract extension and the two K10 theorems) are all within the assigned inventory. Dependency-list additions (recorded in the manifest and items): `thm-chain-rule-for-total-derivatives` for the profile lemma; the exponential/sine/parity/reciprocity items for the phasor lemma; the ten sine/FTC/torus items for the transverse-completeness lemma; `lem-l-two-with-the-integral-pairing-is-a-hilbert-space` for the Ohmic theorem; `lem-em-rectangle-mode-profile-identities` for the TE$_{10}$ example. The four formerly missing in-run suppliers are now authored on disk and were reconciled at statement level against the consuming steps (see item 8).

**Published concerns.** No defect was confirmed in any published or draft supplier consulted. Runs publicly visible, all outside this pair's authority: (i) sibling contract debt in batch 16 (`lem-em-smooth-pec-cavity-spectral-closure` and several batch-16 items lack boundary worksheets; `lem-em-prescribed-fractional-dirichlet-existence` and `lem-em-weak-neumann-and-transmission-existence` likewise) and batch 18 (one quote mismatch on `lem-em-exterior-outgoing-scalar-uniqueness`); (ii) stale `escalate` decisions on `thm-em-waveguide-spectral-completeness` and `thm-em-elliptic-boundary-existence`, both recorded when their batch-16 carriers were unauthored — those carriers now exist, so their owners should re-record; (iii) the run-wide `validate-plan`/`depcheck`/`fwdcheck`/`physics-check` failures listed above; (iv) `item-dependency-levels` error on the sibling `lem-em-outgoing-source-helmholtz-and-diffraction`. Suspicion only, evidence given; no shared ledger entry claims these are repaired by this dispatch.

**Open obligations.** (1) Independent mathematical review and adjudication of all 13 items (Steps 5-8) — deliberately not claimed here. (2) Because `pthm-em-uniform-ohmic-modal-decay` and `pthm-em-guide-completeness` consume the batch-16/18 spectral and elliptic suppliers, any later edit to those carriers will change this pair's item hashes and reopen the affected decisions; the sibling contract debt in (i) above is the consumer-visible part of that risk. (3) Step-4 plan note: the three `redundant-prereq` warnings on the A page's `requires`, and the run-wide plan errors, are reported without editing shared plan rows. (4) The K10 enrichment and the pair's scope remain as recorded by the Step-3a owner decisions; nothing here overrides them.

**Decisions recorded (step3-decisions.mjs record-item, confidence 1, examined dependency IDs supplied per item).** `accept`: items 1, 2, 3, 5, 7, 9, 12, 13. `repaired`: items 4, 6, 8, 10, 11 (the five items edited in this dispatch). No `escalate` remains for this pair after the supplier reconciliation above.

*This report is navigation and evidence of the checks run; it is not an independent mathematical certificate.*
