# Step 3a Reader Report — Batch 5

Run: physics-remaining-80-2026-10-17  
Role: reader  
Assigned pages: emg-g04 and emg-g04-examples

## Opened inventory

### Assigned pages

- library/einstein-maxwell-models/emg-g04.md
- library/einstein-maxwell-models/emg-g04-examples.md

### Assigned items

- post-emg-einstein-maxwell-equations
- post-emg-selected-matter-action
- post-emg-einstein-maxwell-action
- pthm-emg-action-field-equations
- pthm-emg-total-matter-field-exchange
- def-emg-charged-dust-model
- pthm-emg-charged-dust-balance
- def-emg-classical-charged-scalar-model
- pthm-emg-charged-scalar-coupling
- ex-emg-classical-scalar-background-limits
- cex-emg-flat-nonzero-field-coupling

I read the assigned items and pages, the batch 5 proof contracts, current
cross-batch dependency record, and batch notes. I treated the contracts,
readiness records, and author notes as evidence only.

### Dependency and prerequisite context opened

Current-run mathematical or physical suppliers:

- Batch 1: def-emg-geometry-units and post-emg-covariant-maxwell.
- Batch 2: def-emg-local-potentials-and-circle-data,
  lem-emg-circle-connection-gluing, and
  def-emg-set-size-and-class-schema.
- Batch 3: lem-emg-maxwell-action-variation.
- Batch 4: lem-emg-matter-noether-exchange,
  lem-emg-einstein-action-variation, lem-emg-maxwell-stress-divergence,
  def-emg-charged-scalar-functional,
  and lem-emg-charged-scalar-variation.

Other direct suppliers and mathematical support opened:

- def-emg-lorentzian-forms; def-gr-hilbert-stress-energy-tensor;
  def-countable-choice; thm-gr-second-bianchi-and-divergence-free-einstein;
  pthm-rpm-external-charge-action-equivalence; and
  post-em-stationary-action-model.
- lem-emg-lorentz-hodge-calculus; lem-emg-observer-field-decomposition;
  def-principal-g-bundle-and-associated-fiber-bundle;
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes;
  thm-gr-compact-metric-and-timelike-curve-variation;
  lem-gr-compact-variation-coefficient-vanishing;
  thm-gr-density-divergence-and-finite-chain-flux; and
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative.
- Required page context: emg-g01, emg-mg04, rpm-external-charge, and
  em-action-and-variational-formulation. I also opened
  pthm-emg-flat-electromagnetic-compatibility, which appears on emg-g01.
- For the flat SI convention chain: def-em-electromagnetic-tensor,
  def-em-si-conventions, def-em-sources,
  post-em-minkowski-physical-model, post-em-vacuum-maxwell,
  post-sr-inertial-covariance, post-em-lorentz-coupling, and
  pthm-em-tensor-maxwell-equivalence.

## Review and evidence

The equation-based postulate is an adopted smooth-field model assumption. It
specifies the Lorentzian geometry, field and current types, SI units, sign
convention, matter-model interface, and singular-source exclusions. The
separate action branch adopts its action and compact stationarity conditions;
neither branch claims that the model describes nature or that a solution
exists.

I checked the Maxwell sign using the stated component convention
F_0i = -E_i/c, F_ij = epsilon_ijk B_k, j^0 = c rho, and j^i = J^i. It gives
div E = rho/epsilon_0 and curl B = mu_0 J + c^-2 partial_t E from
nabla_a F^ab = -mu_0 j^b, with the homogeneous equations from dF = 0. The
equation-based statement keeps this as an assumption and does not infer a
curved field law from the flat suppliers.

The action variations are consistent with their declared interfaces. The
compact connection variation of the Maxwell action contributes
(mu_0 c)^-1 integral (nabla_a F^ab) alpha_b; the selected matter variation
contributes c^-1 integral j^b alpha_b, giving the stated source sign. The
inverse-metric variation gives the displayed Maxwell Hilbert tensor, and the
Einstein-Hilbert normalization yields kappa_E = 8 pi G_N/c^4. The test-field
arguments and finite-chart integration steps support the stationarity
equivalences on the stated compact variation classes.

The matter Noether calculation uses the on-shell matter condition, gauge
invariance, diffeomorphism invariance, and the fixed-sector horizontal
connection variation alpha_a = xi^b F_ba. Its sign gives
nabla_a T_m^ab = F^bc j_c. The sourced Maxwell stress identity gives the
opposite sign, so the total local exchange cancels. The contracted Bianchi
identity is used only for the stated Einstein-source compatibility
condition.

The dust balance follows from the adopted number-continuity and
Lorentz-force equations by the covariant product rule. The charged-scalar
variation has consistent scalar, connection, and metric variations; its
on-shell current and stress balances match the selected action convention.
The plane-wave example satisfies the scalar equation on the prescribed
background but has positive scalar stress when lambda = 0, and nonzero
current when lambda != 0. The constant-field counterexample has zero
Maxwell divergence and positive Hilbert energy density, so it does not solve
the coupled Einstein equation on the same flat metric. These are conditional
calculations, not observations.

The assigned items use no empirical premises or statistical inference. Their
scope excludes singular fields, matter-response claims, quantum
interpretations, and coupled-solution existence claims. The batch proof
contracts' cited suppliers and numbered-step mappings match the authored
arguments I reviewed.

## Source passages independently checked

- David Tong, General Relativity: §3.2.5, Maxwell action and curved Maxwell
  equations; §4.1, Einstein-Hilbert variation; §4.5.2–4.5.3, Hilbert and
  Maxwell stress conventions. The source conventions are not silently
  imported into the local SI signs.  
  https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
- Sean Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1:
  Ch. 4, (4.54)–(4.70), action and Hilbert-tensor conventions; Ch. 5,
  (5.33)–(5.38), the on-shell diffeomorphism identity.  
  https://arxiv.org/pdf/gr-qc/9712019v1
- David Tong, Gauge Theory: §2.5.2, the Abelian gauge field coupled to a
  complex scalar with covariant derivative D_mu phi = partial_mu phi -
  i A_mu phi. The notes themselves distinguish this relativistic model from
  the nonrelativistic kinetic term appropriate to an actual superconductor;
  the assigned items make no material-response claim.  
  https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf
- David Tong, Electromagnetism: §1.2.1, (1.4)–(1.7), the SI vacuum Maxwell
  equations; §5.3.2, (5.15)–(5.16), field-tensor conventions and their
  conversion.  
  https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
- BIPM, SI Brochure, 9th edition, version 4.01: §2.2, exact SI values of c
  and e; §2.3.1, experimental status of mu_0, the epsilon_0 mu_0 relation,
  and uncertainty qualification.  
  https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf

## Edits and uneditable defects

No assigned item or A-page prose required repair. No item, page, contract,
manifest, or other author's artifact was changed. No confirmed defect
remained outside my edit scope.

## Page verdicts

- emg-g04: No confirmed defect. Its summary distinguishes the equation-based
  and action-based formulations, and the assigned items retain their separate
  assumptions and scopes.
- emg-g04-examples: No confirmed defect. The examples page accurately
  describes the conditional scalar-wave and constant-field calculations and
  makes no empirical claim.

## Blockers and coverage limits

No blocker. I did not independently re-audit every transitive proof behind
all published mathematical suppliers or open every secondary textbook
citation. I checked the exact supplier interfaces and the mathematical
identities needed for the assigned arguments, and opened the source passages
listed above. Since no item was changed, the post-edit proof-layout,
reflow, and precheck commands were not applicable.
