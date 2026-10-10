# Step 3b report — pair `em-expanded-analysis-prerequisites`

- Run: `physics-em-sr-40-2026-10-08` (role alpha-high, Step 3b auditor + item author)
- A page: `em-expanded-analysis-prerequisites` (order 310,
  category `classical-electromagnetism-mathematics`, library `mathematics`)
- B page: `em-expanded-analysis-prerequisites-examples` (order 320)
- Batch: 16. Current inventory: **29 A items + 1 B item** (30 items).
- Task files: `research/physics-em-sr-40-2026-10-08-step3b-pair-em-expanded-analysis-prerequisites-add684612ded96e6.task.md`
  (session 1) and `...-22543b74e85e6fde.task.md` (session 2-3 dispatch; all three
  sessions cover the same pair).
- Entered: 2026-10-09. Status: **complete** — all 30 items, both library pages
  and the batch-16 proof contract are authored and the Step-3 gates are run;
  see "Session 3" for the final checks and the plan mismatches reported for
  Step 4.

## Owned IDs (authoring order; dependency_level, ties by page order then item ID)

| # | id | level | page | state |
|---|---|---|---|---|
| 1 | `lem-em-bounded-error-model-comparison` | 0 | A | done |
| 2 | `lem-em-convergent-legendre-kernel` | 0 | A | done |
| 3 | `lem-em-global-retarded-root` | 0 | A | done |
| 4 | `lem-em-integrable-causal-dispersion` | 0 | A | done |
| 5 | `lem-em-mean-zero-coercivity-on-a-c-one-domain` | 0 | A | done |
| 6 | `lem-em-outgoing-spherical-hankel-dtn-bounds` | 0 | A | done |
| 7 | `lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain` | 0 | A | done |
| 8 | `lem-em-rectangular-pec-energy-completeness` | 0 | A | done |
| 9 | `lem-em-smooth-newtonian-upgrade` | 0 | A | done |
| 10 | `lem-em-symmetric-coercive-variational-solver` | 0 | A | done |
| 11 | `lem-em-thin-current-limit` | 0 | A | done |
| 12 | `lem-em-zero-boundary-coercivity` | 0 | A | done |
| 13 | `lem-em-dirichlet-resolvent-h-two-and-smooth-test-density` | 1 | A | done |
| 14 | `lem-em-finitely-subtracted-analytic-dispersion` | 1 | A | done |
| 15 | `lem-em-lift-specified-dirichlet-existence` | 1 | A | done |
| 16 | `lem-em-magnetic-dipole-remainder` | 1 | A | done |
| 17 | `lem-em-outgoing-source-helmholtz-and-diffraction` | 0 | A | done (level recomputed 1 -> 0; see Session 3) |
| 18 | `lem-em-spherical-harmonic-basis-and-addition` | 1 | A | done |
| 19 | `lem-em-spherical-mean-wave-identity` | 1 | A | done |
| 20 | `lem-em-ball-poisson-series-boundary-convergence` | 2 | A | done |
| 21 | `lem-em-helmholtz-boundary-representation` | 2 | A | done |
| 22 | `lem-em-prescribed-fractional-dirichlet-existence` | 2 | A | done |
| 23 | `lem-em-smooth-pec-cavity-spectral-closure` | 2 | A | done |
| 24 | `lem-em-pec-cavity-eigenfield-boundary-regularity` | 3 | A | done |
| 25 | `lem-em-sphere-outgoing-dirichlet-to-neumann-map` | 3 | A | done |
| 26 | `lem-em-weak-neumann-and-transmission-existence` | 3 | A | done |
| 27 | `ex-em-outgoing-dtn-and-pec-zero-mode-boundaries` | 3 | B | done |
| 28 | `lem-em-parameter-dependent-smooth-poisson-boundary-solvers` | 4 | A | done |
| 29 | `lem-em-smooth-domain-elliptic-regularity` | 4 | A | done |
| 30 | `lem-em-particle-curve-variation` | 12 | A | done |

## Entry audit summary

- Step 3a scope decision `sufficient` is current for this pair
  (`research/physics-em-sr-40-2026-10-08-step3a-pair-em-expanded-analysis-prerequisites.md`;
  recorded via `step3-decisions.mjs record-scope`).
- Batch manifest `research/physics-em-sr-40-2026-10-08-batch-16.pages.json` carries
  complete `statement`, `strategy`, `deps`, `dependency_roles` for all 30 items;
  coverage `...-batch-16.coverage.json` disposes 6–7 fetched sources.
- Owner direction items that bind this pair (from
  `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`):
  - zero-boundary coercivity uses the squared Poincare constant `(2L)^2` and the
    nonsquared consequence `||v||_2 <= 2L ||grad v||_2`;
  - smooth-domain elliptic regularity recovers the normal second derivative via
    `a_33 u_33 = div G - f - sum_other a_ij u_ij - sum_ij (partial_i a_ij) u_j`;
  - `lem-em-dirichlet-resolvent-h-two-and-smooth-test-density` must supply the
    `L2` Dirichlet resolvent for `1-Delta`, its `H2` estimate, and smooth
    zero-boundary density in `H2 cap H0^1` with gradient convergence in the
    explicit curl/div graph completion;
  - the spherical DtN lemma uses the sphere-normalized basis
    `Y^R_lm(Rn)=R^-1 Y_lm(n)`; finite local energy means `H1` on every bounded
    exterior annulus including the prescribed trace; no global `H1`/`L2` at
    infinity; the shell zero-mode example uses `grad(1/r)=-x/r^3`;
  - `lem-em-pec-cavity-eigenfield-boundary-regularity` follows the full-`X`
    eigenvariational supplier and needs the actual mixed vector
    tangential/normal admissible-test, curvature/Robin difference-quotient and
    bootstrap proof; zero/topological eigenfields remain included;
  - the batch-16 smooth-Newtonian, thin-current and magnetic-dipole suppliers
    carry Countable Choice; `epsilon0`, `mu0` are quantified positive
    mathematical scalar parameters;
  - `lem-em-rectangular-pec-energy-completeness` (G2) carries AComega plus the
    global finite ODE, compact-time `L2` limit and continuous primitive
    uniqueness interfaces.

## Open obligations (as entered)

- O1: author all 30 owned items with complete proofs, run explicit-path
  precheck/rendercheck/content-policy/proof-layout and record item decisions.
- O2: create/renew both library pages; author the A page prose.
- O3: record per-item Step-3b decisions (`accept`/`repaired`/`escalate`) with
  examined dependency IDs.
- O4: flag any still-unfinished sibling supplier at its exact consuming step.
  Direct in-run prerequisite pairs to inspect: `em-variational-mathematical-prerequisites`
  (batch 15) and `sr-worldlines-and-clocks` (batch 3).
- O5: run dependency-level and `validate-plan` checks for the containing batch;
  report pre-splice plan mismatches for Step 4.

## Per-item checkpoints

(appended as items are completed)

## Checks run

(appended)

## Open gaps / escalations

(appended)

### 1. `lem-em-bounded-error-model-comparison` (level 0) — done
- Claim: deterministic MVT bound $|\theta-\theta_0|\le(s+\delta)/m$; no statistical content.
- Deps examined (7): def-interval, def-derivative, def-continuity-real, def-abs-value,
  lem-of-triangle-inequality, cor-differentiable-implies-continuous (added), cor-mean-value-theorem.
- Repair: added `cor-differentiable-implies-continuous` to item + manifest (strategy needed
  differentiability => continuity on the closed interval; the exact published supplier was unnamed).
- Checks: precheck PASS (direct); proof-layout 0 defects (6 steps); rendercheck OK.
- Decision recorded: `repaired`, confidence 1, sha256 750cd957…; next: item 2.

### 2. `lem-em-convergent-legendre-kernel` (level 0) — done
- Claim: P_l real polynomial degree<=l, |P_l|<=1, P_l(1)=1; generating function (1-2qz+q^2)^{-1/2}
  (analytic square root = 1 at q=0); exterior multipole expansion with geometric remainder;
  L^1-source integration and every spatial derivative (AC_omega via Lebesgue/harmonic interfaces).
- Deps examined: 33 (15 scaffold + 19 additions - 1 replacement: dropped unused
  cor-complex-power-series-coefficient-formula; the t-series is real-analytic).
- Repairs: manifest + item dep lists updated; branch uniqueness and complex-parameter
  extension proved via two one-variable identity-theorem steps.
- Checks: precheck PASS (direct); proof-layout 0 defects (17 steps); rendercheck OK.
- Decision recorded: `repaired`, confidence 1; next: item 3 (`lem-em-global-retarded-root`).

### 3. `lem-em-global-retarded-root` (level 0) — done
- Claim: unique global retarded root for C^1 uniformly subluminal z; s<=t with equality iff
  x=z(t); C^k on off-trajectory domain D; partial_t s=1/kappa, grad_x s=-n/(c kappa);
  non-improvement witness for merely C^1 data.
- Deps examined: 16 (additions: vector-FTC/Lipschitz, reverse triangle, Euclidean norm,
  continuity/branch suppliers, local-inverse and real-power suppliers; dropped unused
  thm-integral-triangle-inequality, thm-euclidean-implicit-function-theorem).
- Repairs: manifest + item dep lists updated; squared-equation IFT formulation avoids any
  norm-smoothness assumption beyond C^k composition closure.
- Checks: precheck PASS (direct); proof-layout 0 defects (9 steps); rendercheck OK.
- Decision recorded: `repaired`, confidence 1; next: item 4 (`lem-em-integrable-causal-dispersion`).

### 4. `lem-em-integrable-causal-dispersion` (level 0) — done
- Claim: chi holomorphic on H, continuous/C^1 to the boundary, sharp 1/|z| bound, entrywise
  Kramers-Kronig principal-value formulas, for locally AC K with K,K',sK in L^1 (AC_omega+DC).
- Deps examined: 16 (added star-shaped Cauchy + ML estimate; dropped unused
  cor-cauchy-theorem-for-null-homotopic-loops; star-shaped route avoids homotopy definitions).
- Checks: precheck PASS (direct); proof-layout 0 defects (9 steps); rendercheck OK.
- Decision recorded: `repaired`, confidence 1; next: item 5 (`lem-em-mean-zero-coercivity-on-a-c-one-domain`).

### 5. `lem-em-mean-zero-coercivity-on-a-c-one-domain` (level 0) — done
- Claim: ||v-v_Omega||_2 <= C_Omega ||grad v||_2 on bounded connected C^1 domain (AC via density,
  AC_omega via Sobolev/flattening interfaces).
- Deps examined: 14 (added Sobolev def, restriction, ACL characterisation, change of variables).
- Checks: precheck PASS (direct); proof-layout 0 defects (6 steps); rendercheck OK.
- Decision recorded: `repaired`, confidence 1; next: item 6 (`lem-em-outgoing-spherical-hankel-dtn-bounds`).

### 6. `lem-em-outgoing-spherical-hankel-dtn-bounds` (level 0) — done (resumed session)
- Claim: explicit h_l solves the spherical radial Helmholtz ODE; Im(conj h_l h_l')=z^{-2};
  h_l vanishes nowhere on (0,inf); exact DtN bounds -(l+1)/R<=Re t_l<=-1/R, 0<Im t_l<=k.
- Independently re-derived: coefficient recursion, Wronskian constant 1 via large-z limit,
  even polynomial F=sum a_j z^{-2j}, a_j=(2j)!(l+j)!/(2^{2j}(j!)^2(l-j)!), weighted-average
  real part, Im t_l=k/F(kR). No large-l asymptotics used.
- Deps examined (6): scaffold 3 + additions `thm-algebra-of-complex-derivatives`,
  `def-vector-valued-derivative-and-integral`, `rem-complex-plane-euclidean-dictionary`
  (manifest updated accordingly).
- Checks: precheck PASS (direct); proof-layout 0 defects (5 steps); rendercheck OK.
- Decision recorded: `repaired`, confidence 1, sha256 4ce82081…; next: item 7
  (`lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain`).

### 7. `lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain` (level 0) — done
- Claim: fixed linear smooth-domain extension E_Omega preserving all parameters/smoothness up to
  the boundary, fixed compact spatial support in V, C^m seminorm bounds on compact time sets,
  time commutation; no new choice principle.
- Content: coefficients b_k=-2^k, a_k^(N) (signs), product bounds (6 and 1/4), |a_k^(N)|<=576*2^{-k(k+1)/2},
  monotone limit a_k, finite moment identity via root bound, limit moments and summability,
  locally finite reflected half-space extension, all-derivative uniform boundary matching,
  FTC gluing, finite chart partition assembly.
- Deps examined (27, all external published mathematics; item level stays 0): scaffold 15 +
  def-ck-and-multi-index..., def-directional-and-partial-derivatives, def-compact-space,
  thm-heine-borel-rn, def-metric-interior-closure-boundary, def-metric-bounded-diameter,
  thm-continuous-partial-derivatives-imply-total-differentiability, thm-continuous-implies-integrable,
  def-derivative, def-interval, def-finite-sum, lem-finite-sum-laws.
- Formatting note: adopted the precheck's canonical single-line step layering (18 steps; labels
  1.1-1.4, 2.1-2.4, 3.1, 4.1, ... 11.1); each step is one source line with trailing tags.
- Checks: precheck PASS (direct, after canonical layering); proof-layout 0 defects (18 steps);
  rendercheck OK.
- Decision recorded: `repaired`, confidence 1, sha256 4fb8fcca...; next: item 8
  (`lem-em-rectangular-pec-energy-completeness`).

## Session 2 (2026-10-09, task 22543b74e85e6fde) — resumed after items 1-8

State on entry: items 1-8 authored with `repaired` decisions (all CLOSED in
`step3-decisions check --phase final`); item 9 file written but no decision;
items 10-30 absent. Pair scope CLOSED. The four additions
(`lem-em-dirichlet-resolvent-h-two-and-smooth-test-density`,
`lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain`,
`lem-em-parameter-dependent-smooth-poisson-boundary-solvers`,
`lem-em-pec-cavity-eigenfield-boundary-regularity`) are present in the
Step-3 auditor baseline (473 items), so they receive ordinary item decisions.

### 9. `lem-em-smooth-newtonian-upgrade` (level 0) — done
- Claim: with AC_omega, for $f\in C_c^\infty(\mathbb R^3)$, $Nf\in C^\infty$,
  $-\Delta Nf=f$ pointwise, $D^\alpha Nf=N(D^\alpha f)$; smooth $E$; kernel
  nonsmoothness at the pole handled by $L^1_{\mathrm{loc}}$ domination.
- Repair adopted: precheck canonical renumbering (steps now 1.1,/2.1/3.1/4.1)
  and restored the `## Proof` heading the canonical adoption had dropped.
- Deps examined (8 published): def-newtonian-potential,
  thm-newtonian-potential-solves-poisson-distributionally,
  thm-differentiation-under-the-integral-sign, def-countable-choice,
  thm-distributional-differentiation-is-continuous-and-commutes,
  lem-smooth-bump-between-concentric-euclidean-balls,
  cor-positive-density-measures-...-metric-balls,
  lem-fundamental-lemma-of-the-calculus-of-variations. Manifest deps/roles
  synchronized to these 8 (item deps list = manifest deps list = 8;
  level stays 0).
- Checks: precheck PASS (direct); proof-layout 4 steps 0 defects; rendercheck OK.
- Decision recorded: `repaired`, confidence 1, sha256 bcda7f3b...; next: item 10
  (`lem-em-symmetric-coercive-variational-solver`).

### 10. `lem-em-symmetric-coercive-variational-solver` (level 0) — done
- Claim: symmetric bounded coercive bilinear form on a real Hilbert space and
  bounded linear functional: unique $u$ with $a(u,v)=\ell(v)$ for all $v$, and
  $\|u\|\le\|\ell\|/\alpha$; proof by direct minimisation of
  $J(v)=\tfrac12a(v,v)-\ell(v)$; no Lax-Milgram invocation.
- Choice: Statement assumes $\mathrm{AC}_\omega$; the exact use is the selection
  of one point from each of the nonempty sublevel sets
  $\{v:J(v)<m+1/(n+1)\}$ (step 3.1 after canonical numbering); AC cited only as
  a sufficient hypothesis. Both `def-axiom-of-choice` and `def-countable-choice`
  are declared deps.
- Deps examined (10 published): def-hilbert-space, def-complete-metric-space,
  thm-parallelogram-law, def-bounded-bilinear-map, def-operator-norm,
  def-axiom-of-choice, def-countable-choice, def-infimum, thm-infimum-property,
  lem-inf-epsilon. Manifest deps/roles synchronized; level stays 0.
- Authored with full local proof (10 canonical steps); precheck PASS;
  proof-layout 10 steps 0 defects; rendercheck OK.
- Decision recorded: `repaired`, confidence 1, sha256 544c596b...; next: item 11
  (`lem-em-thin-current-limit`).

### 11. `lem-em-thin-current-limit` (level 0) — done
- Claim: for a closed embedded $C^2$ arc-length curve, $j(\psi)=I\int_0^L\gamma'\cdot\psi(\gamma)$ is an order-zero vector distribution with $\operatorname{div}j=0$; the mollified fields $j_\varepsilon=j(\eta_\varepsilon(x-\cdot))$ are smooth, compactly supported, divergence-free; the explicit $B$ is $L^1_{\rm loc}$, smooth off the curve, with $\operatorname{div}T_B=0$, $\operatorname{curl}T_B=\mu_0j$ globally; mollified Biot-Savart fields converge with all derivatives on compacta away from the curve; far-field bound and circle-axis value; no self-energy claim.
- Proof: 16 canonical steps. Global distribution identities proved via the annulus integration-by-parts identity $\partial_jT_\Phi=T_{\partial_j\Phi}$, $T_B=\operatorname{curl}T_A$, $\operatorname{div}T_A=0$ (chain rule + FTC + periodicity through $H(y)=\int\Phi(z)\varphi(z+y)dz$) and $-\Delta T_A=\mu_0j$ (translated fundamental solution + Fubini).
- AC_omega declared as hypothesis, inherited from the cited Sobolev/polar/fundamental-solution/measure interfaces; no stronger use.
- Deps examined (38, all published; manifest synced): the 29 scaffold deps minus the unused `thm-dominated-convergence`/`thm-heine-cantor-metric`/`thm-lebesgue-outer-measure-...`, plus `def-distribution`, `thm-distributional-differentiation-is-continuous-and-commutes`, `cor-vector-valued-ftc-and-lipschitz-bound`, `thm-continuous-implies-integrable`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-heine-borel-r`, `thm-heine-borel-rn`, `thm-compact-subset-is-closed-and-bounded`, `lem-relative-compact-closed-sets-have-a-positive-distance-gap`, `def-euclidean-inner-product`, `thm-cross-product-norm-is-the-two-vector-gram-determinant`, `thm-sine-and-cosine-derivatives`, `thm-sine-cosine-zero-sets-and-fundamental-period`. One imported supplier `ex-flux-of-the-laplace-fundamental-solution` was considered and not used (the inner boundary term is bounded by $\|\varphi\|_\infty\delta$).
- Checks: precheck PASS; proof-layout 16 steps 0 defects; rendercheck OK.
- Decision recorded: `repaired`, confidence 1, sha256 16634ef4...; next: item 12
  (`lem-em-zero-boundary-coercivity`).

### 12. `lem-em-zero-boundary-coercivity` (level 0) — done
- Claim: $H^1(\Omega)$ complete, $H_0^1$ closed complete subspace, Hilbert
  norm, and $\|v\|_2^2\le(2L)^2\|\partial_1v\|_2^2\le(2L)^2\|\nabla v\|_2^2$
  for $v\in H_0^1(\Omega)$, $\Omega\subseteq(-L,L)^3$.
- Proof: 8 canonical steps (box-coordinate Newton-Leibniz, Cauchy-Schwarz,
  Tonelli, density passage, norm equivalence). AC declared and used only
  through the Sobolev completeness interface; both AC and AC_omega in deps.
- Deps examined (11, all published; manifest synced): scaffold 6 plus
  def-norm-and-normed-space, def-countable-choice,
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-parallelogram-law,
  thm-tonelli-theorem-for-sigma-finite-product-spaces.
- Checks: precheck PASS; proof-layout 8 steps 0 defects; rendercheck OK.
- Decision recorded: `repaired`, confidence 1, sha256 006ec382...; next: item 13.

### 13. `lem-em-dirichlet-resolvent-h-two-and-smooth-test-density` (level 1) — done
- Owner-directed addition (reconciliation2). Claim: for every $f\in L^2$ a
  unique $u\in H_0^1\cap H^2$ solves $(1-\Delta)u=f$ with
  $\|u\|_{H^1}\le\|f\|_2$, $\|u\|_{H^2}\le C_\Omega\|f\|_2$; and
  $D=C^\infty(\overline\Omega)$-zero-trace is dense in $H^2\cap H_0^1$ with
  graph-norm convergence of gradients and $\nabla w\in X_\Omega$.
- Proof: 17 canonical steps following the accepted proposal (variational
  existence; chart reduction; half-space tangential difference quotients;
  discrete IBP and Riesz representation for weak mixed derivatives; normal
  recovery via $A_{33}\partial_{33}U=\cdots$; H2 chart return; flat-trace
  odd-reflection gluing; mollification; graph-norm convergence).
- Deps examined (29, all published; manifest synced to actual uses, including
  thm-clairaut-schwarz-mixed-partials added for weak-derivative commutation).
- Checks: precheck PASS; proof-layout 17 steps 0 defects; rendercheck OK.
- Decision recorded: `repaired`, confidence 1, sha256 a014f0fd...; next: item 14
  (`lem-em-finitely-subtracted-analytic-dispersion`).

### 14. `lem-em-finitely-subtracted-analytic-dispersion` (level 1) — done
- Claim: Taylor-subtracted dispersion formulas for $\chi$ with $n$-th order
  subtraction at $\omega_0$ (factor $(\omega-\omega_0)^n$ multiplying the
  Hilbert transform of $f=(\chi-P)/(z-\omega_0)^n$; Taylor value at
  $\omega_0$; $n=0$ case), and separately the constitutive branch
  $\sum A_jE^{(j)}+K*E$: causal with transfer function $Q+\chi_K$, leaving the
  D2 entrywise formulas after subtracting $Q$.
- Proof: 8 canonical steps (Taylor factorization, delta-shifted indented
  contour with star-shaped domain and Cauchy, uniform $\delta\downarrow0$,
  small-arc $-i\pi f(\omega)$, real/imag assembly, $\omega_0$/$n=0$ cases,
  constitutive causality and transfer function).
- Deps reconciled to 10 actual uses (dropped unused identity theorem and
  null-homotopic Cauchy corollary; added
  `cor-cauchy-theorem-star-shaped-domain`, `def-star-shaped-open-subset-of-rn`,
  `def-derivative`). precheck PASS; proof-layout 8 steps 0 defects.
- Decision recorded: `repaired`, confidence 1, sha256 6c8ca90f...; next: 15.

### 15. `lem-em-lift-specified-dirichlet-existence` (level 1) — done
- Claim: unique $u\in G+H_0^1$ with $\int\nabla v\cdot\varepsilon\nabla u=F(v)$
  for all $v$; uniform ellipticity $\alpha,\beta$; L2 density case gives
  $-\operatorname{div}(\varepsilon\nabla u)=\rho$ distributionally.
- Proof: 5 canonical steps (gradient-norm Hilbert structure of $H_0^1$,
  boundedness/coercivity of $a$, boundedness of the lifted functional, solver
  solution and affine uniqueness, distributional divergence identity).
- Deps reconciled to 6 (added def-distributional-derivative, def-distribution,
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space). precheck PASS;
  proof-layout 5 steps 0 defects.
- Decision recorded: `repaired`, confidence 1, sha256 089a3b9d...; next: 16.

### 16. `lem-em-magnetic-dipole-remainder` (level 1) — done
- Claim: for divergence-free smooth $J$ supported in $B_a$, the potential and
  field obey $A=(\mu_0/4\pi)(m\times x)/r^3+O(\mu_0a^2\|J\|_1/r^3)$ and
  $B=(\mu_0/4\pi)(3n(m\cdot n)-m)/r^3+O(\mu_0a^2\|J\|_1/r^4)$ uniformly for
  $r\ge2a$, with absolute constants (the second by differentiating the
  explicit first-order remainder).
- Proof: 6 canonical steps ($\int J=0$, moment antisymmetry and
  $M_{ij}=-\varepsilon_{ijk}m_k$, $Mx=m\times x$, Coulomb dipole expansion,
  explicit FTC remainder and gradient bound, curl via the cross-product lemma).
- Deps reconciled to 11 (added def-divergence-and-curl-of-a-c1-vector-field,
  thm-algebra-of-derivatives). precheck PASS; proof-layout 6 steps 0 defects.
- Decision recorded: `repaired`, confidence 1, sha256 8d0fd5b3...; next: 17
  (`lem-em-outgoing-source-helmholtz-and-diffraction`).

### 17. `lem-em-outgoing-source-helmholtz-and-diffraction` (level 1) — done
- Claim: $(-\Delta-k^2)G_k=\delta_0$; the Kirchhoff source field is smooth and
  harmonic off its support, with Fraunhofer error
  $O(\|\alpha\|_{TV}r^{-1}[a/r+ka^2/r])$, outgoing
  $r(\partial_ru-iku)=O(r^{-1})$, and Fresnel phase/amplitude errors
  $O(k(a+b)^4/z^3)$, $O((a+b)^2/z^2)$.
- Proof: 7 canonical steps. Dependency reconciliation: scaffold's
  `lem-em-coulomb-dipole-remainder` is NOT used (the design directs a direct
  norm calculation); added the Laplace-kernel local integrability, calculus,
  and signed/complex-measure total-variation suppliers.
- precheck PASS; proof-layout 7 steps 0 defects; sha256 5a521c9e...; next: 18.

### 18. `lem-em-spherical-harmonic-basis-and-addition` (level 1) — done
- Claim: $P_l=H_l\oplus|x|^2P_{l-2}$, $\dim H_l=2l+1$, orthogonality of
  distinct degrees, complete orthonormal basis of $L^2(S^2,d\Omega)$, and the
  addition theorem with kernel $\frac{2l+1}{4\pi}P_l(n\cdot n')$.
- Proof: 11 canonical steps (Euler/radial identities, explicit
  harmonicization, Green-identity orthogonality, injectivity/dimension,
  density via charts/mollification/Stone-Weierstrass, Gram-Schmidt,
  rotation-invariant zonal uniqueness by finite Fourier orthogonality,
  identification with H1's solid zonal coefficient, diagonal integral).
- Deps reconciled to 19. precheck PASS; proof-layout 11 steps 0 defects;
  sha256 30037f2b...; next: 19.

### 19. `lem-em-spherical-mean-wave-identity` (level 1) — done
- Claim: the Euler-Poisson-Darboux identity
  $\partial_r^2M+\frac2r\partial_rM=\Delta M$ and
  $H_f=tM_{ct}f$ with $H_{tt}=c^2\Delta H$, $H(0)=0$, $H_t(0)=f$; local, no
  decay needed.
- Proof: 6 canonical steps (parameter differentiation, divergence theorem on
  $B_r(x)$, radial differentiation by polar coordinates/FTC, two $t$
  derivatives, initial values by odd symmetry). Deps reconciled to 9.
- precheck PASS; proof-layout 6 steps 0 defects; sha256 d713099c...; next: 20.

### 20. `lem-em-ball-poisson-series-boundary-convergence` (level 2) — done
- Claim: interior uniform convergence with all derivatives, harmonicity,
  $L^2$ boundary limit, $L^2$-boundary uniqueness, and for continuous data the
  Poisson kernel $(1-r^2)/(4\pi|rn-n'|^3)$ with continuous extension.
- Proof: 11 canonical steps (Parseval tails, uniform derivative convergence
  via harmonic estimates, dominated convergence boundary limit, zonal kernel
  summation, published ball Dirichlet theorem, scaled-kernel uniqueness).
- Deps reconciled to 15. precheck PASS; proof-layout 11 steps 0 defects;
  sha256 4c8c1a9b...; next: 21 (`lem-em-helmholtz-boundary-representation`).

### 21. `lem-em-helmholtz-boundary-representation` (level 2) — done
- Claim: interior Green representation for bounded smooth data and the
  weaker $C^2$-interior/$C^1$-closure trace branch; exterior counterpart with
  Sommerfeld far conditions; smooth-trace modal branch
  $\sum c_{lm}h_l(kr)/h_l(kR_0)Y_{lm}$ with full AC, exact trace, uniform
  amplitude bound and vanishing Sommerfeld residual.
- Proof: 9 canonical steps. Full AC retained only for the modal branch.
  precheck PASS; proof-layout 9 steps 0 defects; sha256 eac8975c...; next: 22.

### 22. `lem-em-prescribed-fractional-dirichlet-existence` (level 2) — done
- Claim: unique $u\in H^1$ with trace $g\in H^{1/2}(\partial\Omega)$ solving
  the uniformly elliptic weak Dirichlet equation, with continuous dependence
  $\|u\|_{H^1}\le C(\|\rho\|_2+\|g\|_{H^{1/2}})$.
- Proof: 5 canonical steps (right inverse, trace kernel, lift theorem,
  difference test, exact-trace conclusion). Deps reconciled to 8.
  precheck PASS; proof-layout 5 steps 0 defects; sha256 c55f00a1...; next: 23
  (`lem-em-smooth-pec-cavity-spectral-closure`).

### 23. `lem-em-smooth-pec-cavity-spectral-closure` (level 2) — done
- Claim: $X$ (graph completion of smooth PEC fields), $V=\{u\in X:\operatorname{div}u=0\}$,
  $H=\overline V^{L^2}$: complete orthonormal curl eigenbasis with
  $\lambda_j\ge0$, finite multiplicities, $\lambda_j\to\infty$ in the infinite-
  dimensional case; full-$X$ variational identity; distributional
  $\operatorname{curl}\operatorname{curl}u_j=\lambda_ju_j$; second-order wave
  with retained zero modes, $C(\mathbb R;V)$ displacement and $C(\mathbb R;H)$
  velocity, abstract speed $v_{\mathrm{wave}}>0$.
- Proof: 12 canonical steps. Deps reconciled to 21. precheck PASS;
  proof-layout 12 steps 0 defects; sha256 52c2952f...; next: 24
  (`lem-em-pec-cavity-eigenfield-boundary-regularity`).
  Note for resumption: remaining items 24–30 are
  $lem-em-pec-cavity-eigenfield-boundary-regularity$ (level 3, owner-directed
  round-1 evidence `physics-em-sr-40-2026-10-08-pec-regularity-round1.evidence.json`),
  $lem-em-sphere-outgoing-dirichlet-to-neumann-map$ (level 3),
  $lem-em-weak-neumann-and-transmission-existence$ (level 3),
  $ex-em-outgoing-dtn-and-pec-zero-mode-boundaries$ (level 3, B page),
  $lem-em-parameter-dependent-smooth-poisson-boundary-solvers$ (level 4),
  $lem-em-smooth-domain-elliptic-regularity$ (level 4),
  $lem-em-particle-curve-variation$ (level 12); then both library pages, the
  batch-16 proof-contracts.json, dependency-level/validate-plan checks, and the
  final report sections.

### 24. `lem-em-pec-cavity-eigenfield-boundary-regularity` (level 3) — done
- Owner-directed round-1 addition. Claim: every full-$X$ eigenfield with
  $\lambda\ge0$ is $H^m$ for all $m$ with $\|u\|_{H^m}\le C_{m,\Omega,\lambda}\|u\|_{H^1}$,
  and $\operatorname{curl}\operatorname{curl}u=\lambda u$, $\operatorname{div}u=0$,
  $\nu\times u=0$, $\partial_\nu u_n+\kappa u_n=0$ classically; smooth ambient
  representative; covers $\lambda=0$ and disconnected domains.
- Proof: 9 canonical steps. Deps reconciled to 15. precheck PASS;
  proof-layout 9 steps 0 defects; sha256 c737690d...; next: 25.

### 25. `lem-em-sphere-outgoing-dirichlet-to-neumann-map` (level 3) — done
- Claim: $T_Rf=\sum t_lf_{lm}Y^R_{lm}$ bounded $H^{1/2}\to H^{-1/2}$,
  $\operatorname{Re}\langle T_Rf,f\rangle\le0$,
  $\operatorname{Im}\langle T_Rf,f\rangle>0$; realisation by outgoing modal
  series; finite-local-energy uniqueness; no global integrability at infinity.
- Proof: 7 canonical steps. Deps reconciled to 13. precheck PASS;
  proof-layout 7 steps 0 defects; sha256 5da049cb...; next: 26.

### 26. `lem-em-weak-neumann-and-transmission-existence` (level 3) — done
- Claim: existence iff $\ell(1)=0$, unique up to constants (per component);
  transmission with sheet charge, $n\cdot[\varepsilon\nabla u]=-\sigma$ where
  classically smooth.
- Proof: 8 canonical steps. Deps reconciled to 9. precheck PASS;
  proof-layout 8 steps 0 defects; sha256 c2d01ec1...; next: 27.

### 27. `ex-em-outgoing-dtn-and-pec-zero-mode-boundaries` (level 3, B page) — done
- Claim: $t_0=ik-1/R$ at degree zero; the shell field
  $\nabla(1/|x|)=-x/|x|^3$ is an admissible PEC field with curl eigenvalue
  zero, so topology zero modes must be retained.
- Proof: 3 canonical steps (with `## Verification` heading restored after the
  canonical adoption). precheck PASS; proof-layout 3 steps 0 defects;
  sha256 d33314fd...; next: 28
  (`lem-em-parameter-dependent-smooth-poisson-boundary-solvers`).

### 30. `lem-em-particle-curve-variation` (level 12) — done
- Claim: fixed-endpoint stationarity of the functional
  $S[X]=-mc\int\sqrt{-\eta(\dot X,\dot X)}+q\int A_\mu\dot X^\mu$ is
  equivalent to $m\,dU_\nu/d\tau=qF_{\nu\mu}U^\mu$ with
  $d\tau/ds=\sqrt{-\eta(\dot X,\dot X)}/c$; choice-free.
- Proof: 7 canonical steps (positivity margins, compact-rectangle parameter
  differentiation, integration by parts, ZF cutoff contradiction, converse,
  division by $\tau'$). Supplier
  `thm-sr-proper-time-and-observer-decomposition` (batch 3) verified authored
  on disk before use; `def-sr-*` and calculus suppliers all resolve.
- Deps unchanged (15). precheck PASS; proof-layout 7 steps 0 defects;
  sha256 b2231f35... .

### Remaining at this checkpoint
- Items still to author: 28
  (`lem-em-parameter-dependent-smooth-poisson-boundary-solvers`, level 4) and
  29 (`lem-em-smooth-domain-elliptic-regularity`, level 4).
- Both library pages (`library/classical-electromagnetism-mathematics/em-expanded-analysis-prerequisites.md`
  and `...-examples.md`) still to be created.
- `research/physics-em-sr-40-2026-10-08-batch-16.proof-contracts.json` still
  to be created; batch-16 coverage may need a refresh for added suppliers.
- Remaining checks: `manifest-deps`, `item-dependency-levels check --run`,
  `validate-plan --run`, explicit-path precheck/rendercheck/proof-layout
  batch run, content-policy, and `step3-decisions check --phase final`.
- Items 1–27 and 30 are authored with recorded `repaired` decisions (30 of 30
  minus 28–29); every authored item passed precheck, proof-layout (0 defects)
  and rendercheck.

## Session 3 (2026-10-09, task 22543b74e85e6fde) — contract authoring, audit repairs, final gates

This section SUPERSEDES the earlier "Remaining at this checkpoint" note: items 28
and 29 are authored, both library pages exist, and the batch-16 proof contract is
written. It records the contract work, the audit repairs made after the item
checkpoints above, the exact checks run at handoff, and the plan mismatches for
Step 4. Earlier per-item checkpoints are preserved unchanged; where a receipt was
re-recorded after a later repair, the final hash is given here.

### 28. `lem-em-parameter-dependent-smooth-poisson-boundary-solvers` (level 4) — done
- Claim: jointly smooth `f` and smooth boundary families `g_D`, `kappa` give the
  unique smooth Dirichlet solution and, precisely under the componentwise
  compatibility `int_{Omega_j} f + int_{partial Omega_j} kappa = 0` on every
  compact time subinterval, the smooth compatible Neumann solution unique modulo
  one spatial constant per component; solution operations are linear, time
  differentiation commutes, and the smooth ambient continuations are auxiliary
  and non-unique off the closed physical region.
- Proof: 7 canonical steps (fixed chart lifts and cutoffs, weak solvers with
  exact higher-order estimates, natural-boundary `H^2` estimate, higher-order
  bootstrap, strong equation and exact Neumann trace, joint `(x,t)` smoothness by
  time difference quotients, collection).
- Deps examined: 30 (receipt `480c142fe2d7`). precheck PASS; proof-layout 7 steps
  0 defects; rendercheck OK; proof-contract strict 0 errors.

### 29. `lem-em-smooth-domain-elliptic-regularity` (level 4) — done
- Claim: on a bounded `C^\infty` domain with uniformly positive smooth
  `epsilon`, smooth `rho` and smooth Dirichlet or compatible-Neumann boundary
  data (or finitely many disjoint smooth interior interfaces with piecewise
  smooth data and sheet charge), the weak solution is `C^\infty` on the closure
  of each declared side; edge/junction points, reentrant corners and coefficient
  loss of regularity are excluded.
- Proof: 7 canonical steps (local divergence-form reduction, tangential
  difference-quotient estimate, weak second derivatives via Riesz representation,
  normal recovery from the explicit equation with the owner-directed formula
  `a_33 u_33 = div G - f - sum_other a_ij u_ij - sum_ij (partial_i a_ij) u_j`,
  higher-order tangential bootstrap, Sobolev-embedding classical representative,
  conclusion).
- Deps examined: 19 (receipt `8e248c4973eb`). precheck PASS; proof-layout 7 steps
  0 defects; rendercheck OK; proof-contract strict 0 errors.

### 30. `lem-em-particle-curve-variation` (level 12) — done (final hash)
- Receipt `b2231f352f6e`, deps 15, choice-free proof verified against the
  batch-3 supplier `thm-sr-proper-time-and-observer-decomposition` authored on
  disk; precheck PASS; proof-layout 7 steps 0 defects; rendercheck OK.

### Library pages — created
- `library/classical-electromagnetism-mathematics/em-expanded-analysis-prerequisites.md`
  (A page, order 310, `items` = the 29 A items, one-paragraph mathematics-only
  prose, no physical claims).
- `library/classical-electromagnetism-mathematics/em-expanded-analysis-prerequisites-examples.md`
  (B page, order 320, `examples` = `ex-em-outgoing-dtn-and-pec-zero-mode-boundaries`).
- Both verified with `rendercheck` (OK) and are the pages registered in the
  batch-16 manifest.

### Batch-16 proof contract — created
- `research/physics-em-sr-40-2026-10-08-batch-16.proof-contracts.json`
  (`version` 1, `run` `physics-em-sr-40-2026-10-08`, `batch` 16, `scope` = all 30
  owned ids; `contracts` keyed by item).
- Citations: regenerated from the on-disk items with
  `regen-contract-entries.mjs`; the quote for each fact-source link is the full
  cited item's citable section (`Statement` / `Statement refuted` /
  `Definition` / `Example` / `Remark`), and `uses` is exactly the set of proof
  steps whose text carries the fact token. One legacy published source
  (`rem-complex-plane-euclidean-dictionary`, bare body with no `##` section)
  cannot yield a section quote; the consuming fact was repaired instead of
  weakening the quote rule (see Session-3 repairs).
- Derivations: one `derivations` entry per numbered step with the actual claim
  and every explicit input token, as emitted by the shared parser.
- Boundaries: 240 item-specific rows (30 items x the eight axes). Evidence rows
  name actual steps; not-applicable rows state item-specific reasons.
- `boundary-audit.mjs --fail-on-contradicted`: 240 rows, **no template cluster
  at or above 3 members, no contradicted disposition**. The one nonfatal
  `shotgun-bracket` warning (step 1.3 of `lem-em-bounded-error-model-comparison`
  cites four of five declared facts while two later steps cite none) is
  acknowledged as a genuine reading of that short MVT proof rather than
  restructured.

### Session-3 audit repairs (items edited after their last receipt; all re-recorded `repaired`, confidence 1)
1. `lem-em-bounded-error-model-comparison` — step 1.3: fact `[L3]`
   (differentiable => continuous) had no direct step use; the continuity clause
   is now cited explicitly (`[L1, L3, L4, L5]`). Mathematics unchanged. Receipt
   `f0316494f074`.
2. `lem-em-convergent-legendre-kernel` — fact `[L1]`: the legacy remark
   `rem-complex-plane-euclidean-dictionary` (published, bare body, no citable
   section) replaced by `thm-complex-numbers-are-the-real-coordinate-plane` plus
   `def-complex-conjugate-real-imaginary-part-and-modulus` (deps 33 -> 34,
   manifest + roles synced); fact `[L5]`: duplicated cofunction wikilink
   de-duplicated so each fact-source pair has one citation. Receipt
   `ce3eea45189a`.
3. `lem-em-finitely-subtracted-analytic-dispersion` — the choice-convention
   links `def-countable-choice`/`def-dependent-choice` moved from the deleted
   meta-fact `[F5]` into `[F3]`, where `AC_omega`/`DC` are actually invoked and
   cited (steps 2.2, 5.1); dangling reference `steps 1.2-1.4` in step 4.1 fixed
   to `steps 1.2, 2.1 and 3.1`. Receipt `406eecec0de4`.
4. `lem-em-outgoing-source-helmholtz-and-diffraction` — dependency-level repair:
   with the scaffold dep `lem-em-coulomb-dipole-remainder` not used, the item has
   no in-run dependencies and its computed level is 0, not the scaffold's 1;
   updated in item metadata and manifest. Receipt `ea6dbed01a41`.
5. `lem-em-helmholtz-boundary-representation` — earlier `[[F3]] -> [F3]` typo
   fix retained (depcheck dangling wikilink); receipt refreshed twice as
   upstream input hashes moved; final receipt `e305de639d28`.
6. `lem-em-pec-cavity-eigenfield-boundary-regularity` — step 7.1: dangling range
   `Steps 5.1-1.6` fixed to `Steps 5.1-6.1`; duplicated wikilink in `[F1]`
   de-duplicated. Receipt `7aeff9da991b`.
7. `lem-em-weak-neumann-and-transmission-existence` — step 5.1: dangling range
   `steps 1.1-1.5` fixed to `steps 1.1-4.1`. Receipt `e263c73b3eae`.
8. `lem-em-smooth-domain-elliptic-regularity` — step 5.1: nonsensical range
   `steps 2.1-1.4` fixed to `steps 2.1-4.1`. Receipt `8e248c4973eb`.
- Receipts were additionally refreshed (no own-text change) for
  `lem-em-spherical-harmonic-basis-and-addition`, `lem-em-ball-poisson-series-boundary-convergence`,
  `lem-em-helmholtz-boundary-representation`, `lem-em-sphere-outgoing-dirichlet-to-neumann-map`
  and `lem-em-parameter-dependent-smooth-poisson-boundary-solvers` because
  upstream dependency bytes moved while sibling pairs edited concurrently; and
  for `lem-em-helmholtz-boundary-representation` once more after the item-17
  level repair. No mathematics changed in any refresh.

### Checks run at handoff (exact commands and observed results)
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/<all 30>.md`
  -> `30 checked, 0 failing — all clean` (all `direct`).
- `node tools/physics-support/rendercheck.mjs items/<all 30>.md` -> `OK — 30
  file(s)`; also `rendercheck` on both library pages -> `OK — 2 file(s)`.
- `node tools/physics-support/proof-layout.mjs items/<all 30>.md` ->
  `30 items, 261 steps, 0 defects` (single batched command, run after the last
  item edit).
- `node tools/physics-support/depcheck.mjs --items-file /tmp/b16-items.json --pages-file /tmp/b16-pages.json`
  -> `OK — selected item/page checks and their prerequisite cycle checks passed`
  (page depths 49/50).
- `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-16.pages.json`
  -> `30 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-16.coverage.json --require-destination`
  -> `1 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-16.proof-contracts.json --strict`
  -> `0 error(s), 1 warning(s), 30/30 item(s) checked`.
- `node tools/physics-support/boundary-audit.mjs research/physics-em-sr-40-2026-10-08-batch-16.proof-contracts.json --fail-on-contradicted`
  -> `240 rows ... no template reuse, no contradicted dispositions`.
- `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-16.pages.json`
  -> `30 item(s), 0 normalized, 0 error(s)`.
- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
  -> `473 item(s) checked across 80 page(s); maximum level 24` (after the item-17
  level repair 1 -> 0).
- `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase final`
  -> this pair is fully closed: scope decision `sufficient` (sha `198ccd41a91e`)
  and all 30 item receipts `repaired`, confidence 1, with examined dependency
  arrays; the remaining open records all belong to sibling pairs still being
  authored and are not this pair's obligation.
- `node tools/physics-support/citecheck.mjs items/<all 30>.md` -> 2 heuristic
  warnings (`lem-em-magnetic-dipole-remainder` step 1.1 and
  `lem-em-thin-current-limit` step 2.3, order-axiom phrasing). Triaged as
  phrasing-only (no order or inequality-addition argument is made in either
  step); per the tool's instruction no dependency was added to silence them.

### Pre-splice plan mismatches for Step 4 (`validate-plan`)
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --repo . --run physics-em-sr-40-2026-10-08`
  exits 1 with 42 `undeclared-prereq` errors run-wide and several
  `redundant-prereq` warnings. This is a plan-vs-authored-reality mismatch, not
  an item defect: the authored items depend on published mathematics items whose
  home pages are not in the closure of the plan's declared `requires` for the
  consuming page.
- For THIS pair's A page the 12 undeclared prerequisite pages, with the exact
  consuming item -> dependency that induces the edge:
  - `goursat-and-cauchys-theorem-in-a-convex-domain`: `lem-em-integrable-causal-dispersion` -> `cor-cauchy-theorem-star-shaped-domain` (also `lem-em-finitely-subtracted-analytic-dispersion`).
  - `pi-the-equivalent-characterizations`: `lem-em-convergent-legendre-kernel` -> `lem-wallis-integrals-recurrence-and-squeeze`.
  - `power-series-and-real-analytic-functions`: `lem-em-convergent-legendre-kernel` -> `cor-power-series-sums-are-smooth-with-coefficient-formula` (also `lem-em-ball-poisson-series-boundary-convergence`).
  - `smooth-partitions-of-unity-and-exhaustions`: `lem-em-smooth-newtonian-upgrade` -> `lem-smooth-bump-between-concentric-euclidean-balls`.
  - `measurable-densities-and-radon-volume-on-manifolds`: `lem-em-smooth-newtonian-upgrade` -> `cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls`.
  - `the-direct-method-and-euler-lagrange-equations`: `lem-em-smooth-newtonian-upgrade` -> `lem-fundamental-lemma-of-the-calculus-of-variations`.
  - `suprema-and-infima`: `lem-em-symmetric-coercive-variational-solver` -> `def-infimum`, `thm-infimum-property`, `lem-inf-epsilon`.
  - `topology-of-r`: `lem-em-thin-current-limit` -> `thm-heine-borel-r`.
  - `norming-and-separation-under-hahn-banach`: `lem-em-thin-current-limit` -> `lem-relative-compact-closed-sets-have-a-positive-distance-gap`.
  - `signed-and-complex-measures-hahn-and-jordan`: `lem-em-outgoing-source-helmholtz-and-diffraction` -> `def-simple-integral-against-a-signed-or-complex-measure`, `def-total-variation-of-a-signed-or-complex-measure`, `thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation`.
  - `poisson-summation-sampling-and-lattice-duality`: `lem-em-spherical-harmonic-basis-and-addition` -> `lem-character-orthogonality-on-a-lattice-fundamental-domain`.
  - `projective-algebraic-sets-projective-morphisms-and-cones`: `lem-em-spherical-harmonic-basis-and-addition` -> `def-homogeneous-polynomial-and-homogeneous-ideal`.
  Remedy for Step 4: add these pages to the `requires` list of
  `em-expanded-analysis-prerequisites` in `research/plan-spec.json` (or reconcile
  the plan mapping); every dependency is genuinely used, so dropping a dependency
  is not an option. This report does not edit the shared plan.
- Redundant warnings on this page: `the-lebesgue-integral-and-the-convergence-theorems`,
  `weak-derivatives-and-sobolev-spaces`, `uniform-convergence-of-functions`,
  `measures-and-their-basic-properties` are direct requires already reached
  through `em-variational-mathematical-prerequisites`; Step 4 may collapse them.
- The B page inherits the A page closure; no separate undeclared edge is
  reported for it.

### Added suppliers
- No supplier item outside the assigned inventory was created by this pair.
  `lem-em-pec-cavity-eigenfield-boundary-regularity` is the owner-directed
  round-1 addition and is registered in the manifest, page and contract.
- Dependency-list reconciliations relative to the scaffold (recorded per item in
  the checkpoints and receipts): item 2 (33 -> 34 with the citable-source swap),
  item 11 (38 deps), item 13 (29), item 17 (scaffold dep
  `lem-em-coulomb-dipole-remainder` intentionally NOT used; direct norm and
  calculus/measure suppliers instead), items 18, 20, 22, 25, 28 (30), 30 (15).
- Coverage `...-batch-16.coverage.json` is unchanged from the scaffold harvest
  and passes `--require-destination`; no new coverage rows were required.

### Published concerns (exact IDs, evidence, confidence, repair strategy)
- `rem-complex-plane-euclidean-dictionary` (status published): the file has a
  bare body with no `##` heading, so it cannot serve as a proof-contract source
  (no citable `Statement`/`Remark` section to quote). Confidence: confirmed by
  `regen-contract-entries` warning plus the checker's section rule. Consumers
  relying on it for the complex-Euclidean dictionary (this pair's fact `[L1]` of
  `lem-em-convergent-legendre-kernel` was one) should cite
  `thm-complex-numbers-are-the-real-coordinate-plane` and
  `def-complex-conjugate-real-imaginary-part-and-modulus`, or the remark should
  be given a citable section by its owner at Step 4+. Unrelated to this pair's
  soundness.
- Plan mismatch above (`validate-plan` 42 undeclared prereqs run-wide, 12 for
  this A page): requires-page refresh needed in `research/plan-spec.json`; no
  content change implied.
- The earlier B1 constant discrepancy noted in the scaffold design notes was
  already corrected in the authored `lem-em-zero-boundary-coercivity` as the
  squared constant `(2L)^2`; no further action.
- No other suspicion of a published defect surfaced; all direct suppliers
  resolve and the prerequisite-cycle checks pass.

### Open obligations / handoff summary
- Completed IDs: all 30 owned items authored, checked and closed with
  `repaired` receipts at confidence 1 (29 A + 1 B), plus both library pages and
  the batch-16 proof contract. Scopes `em-expanded-analysis-prerequisites` and
  its companion are closed for this run.
- Checks actually run: precheck, rendercheck, proof-layout (batched), depcheck,
  content-policy, coverage-checklist (`--require-destination`), proof-contract
  `--strict`, boundary-audit, manifest-deps, item-dependency-levels,
  validate-plan (reported for Step 4), step3-decisions final, citecheck.
- Open obligations inside this pair: none. Escalations: none; no assigned
  consumer was left with an unfinished supplier — the directly inspected in-run
  prerequisite pairs `em-variational-mathematical-prerequisites` and
  `sr-worldlines-and-clocks` have their consumed items authored on disk
  (`lem-em-parameter-integrals`-class suppliers and
  `thm-sr-proper-time-and-observer-decomposition`), and
  `lem-em-coulomb-dipole-remainder` is not consumed by item 17.
- Obligations for downstream steps: Step 4 must reconcile the plan `requires`
  mismatch above; Steps 5–8 perform the independent mathematical audit and may
  re-run the contract after any repair (regeneration keeps the boundary rows and
  re-emits citations from item text).
