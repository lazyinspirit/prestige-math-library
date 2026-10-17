---
id: pthm-csm-qualified-continuum-equilibrium-limits
kind: physics-theorem
title: Qualified interacting continuum thermodynamic and positional ensemble limits
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-interacting-equilibrium-gibbs
  - post-csm-counting-and-physical-observables
  - def-csm-gibbs-physical-parameters
  - def-countable-choice
  - def-axiom-of-choice
  - def-ultrafilter-extension-principle
  - def-dependent-choice
  - def-hahn-banach-extension-principle-relative
  - def-tdmath-stable-power-tempered-particle-model
  - def-tdmath-superstable-regular-interaction
  - def-tdmath-poisson-configuration-reference
  - def-tdmath-van-hove-sequence
  - def-tdmath-local-tame-topology
  - def-tdmath-periodized-empirical-field
  - lem-tdmath-superquadratic-positive-core
  - lem-tdmath-integrable-tail-diagonal-gap
  - lem-tdmath-canonical-empirical-field-conditioning
  - thm-tdmath-stable-tempered-free-cube-grand-pressure
  - thm-tdmath-canonical-interior-density-limit
  - thm-tdmath-canonical-grand-duality
  - thm-tdmath-continuum-variational-pressure
  - thm-tdmath-retained-hard-zero-beta-limit
  - thm-tdmath-uniform-tempered-exterior-pressure
  - thm-tdmath-superstable-van-hove-pressure
  - thm-tdmath-periodic-fixed-n-limit
  - thm-tdmath-fixed-n-local-ensemble-equivalence
  - thm-tdmath-controlled-shell-three-ensemble-equivalence
  - thm-tdmath-van-hove-fixed-n-limit
  - lem-csm-continuum-kernel-normalization
dependency_roles:
  post-csm-interacting-equilibrium-gibbs: physical-assumption
  post-csm-counting-and-physical-observables: physical-assumption
  def-csm-gibbs-physical-parameters: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  def-tdmath-stable-power-tempered-particle-model: mathematical-premise
  def-tdmath-superstable-regular-interaction: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  def-tdmath-van-hove-sequence: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  def-tdmath-periodized-empirical-field: mathematical-premise
  lem-tdmath-superquadratic-positive-core: mathematical-premise
  lem-tdmath-integrable-tail-diagonal-gap: mathematical-premise
  lem-tdmath-canonical-empirical-field-conditioning: mathematical-premise
  thm-tdmath-stable-tempered-free-cube-grand-pressure: mathematical-premise
  thm-tdmath-canonical-interior-density-limit: mathematical-premise
  thm-tdmath-canonical-grand-duality: mathematical-premise
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  thm-tdmath-retained-hard-zero-beta-limit: mathematical-premise
  thm-tdmath-uniform-tempered-exterior-pressure: mathematical-premise
  thm-tdmath-superstable-van-hove-pressure: mathematical-premise
  thm-tdmath-periodic-fixed-n-limit: mathematical-premise
  thm-tdmath-fixed-n-local-ensemble-equivalence: mathematical-premise
  thm-tdmath-controlled-shell-three-ensemble-equivalence: mathematical-premise
  thm-tdmath-van-hove-fixed-n-limit: mathematical-premise
  lem-csm-continuum-kernel-normalization: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sabine Jansen, Gibbsian Point Processes, complete author-hosted lecture notes"
      url: "https://www.math.lmu.de/~jansen/gibbspp.pdf"
      locator: "Sections 3.2–3.3 and 5.1–5.2: positional grand-canonical kernels, conditional Gibbs laws, and DLR interpretation. The thermodynamic conclusions below are taken only from their exact mathematical supplier statements."
    - title: "David Dereudre, Introduction to the theory of Gibbs point processes, complete author-hosted mini-course notes"
      url: "https://arxiv.org/pdf/1701.08105"
      locator: "Sections 1.3–1.4 and 2.3–2.4: finite-volume point-particle Gibbs models, finite range, and DLR equations. Its infinite-volume definition additionally imposes stationarity; no result beyond the stated mathematical suppliers is imported here."
physical_scope: "Conditional positional-model deductions for the selected classical Gibbs equilibrium postulate. The d=3 SI pressure conversion uses the declared energy and length units. Every positive-temperature branch retains its own exact tail, core, boundary, density, differentiability, and choice hypotheses. Clause 8 is a separate formal dimensionless beta=0 continuation at fixed mathematical activity z, outside the positive-temperature physical premises and without an SI temperature or pressure interpretation; it retains hard exclusions. No momentum-shell result, continuum Gibbs-state existence or uniqueness, minimizer-to-DLR identification, empirical observation, or claim of physical applicability is asserted."
empirical_premises: []
---

## Statement

For clauses 1–7 assume the adopted classical Gibbs-equilibrium postulate and parameter conventions of [[post-csm-interacting-equilibrium-gibbs]] and [[def-csm-gibbs-physical-parameters]], with a single positional species and reference exactly matching the mathematical suppliers below. Use the postulate’s thermal-wavelength convention with reference-action identification $a_0=h_{\rm ref}$ and its operationally indistinguishable $1/N!$ sector factor. Let $d\geq1$. Fix a reference length $\ell_0>0$ in metres and energy scale $E_0>0$ in joules. If the physical inverse temperature is $\beta_{\rm SI}=(k_BT)^{-1}>0$ in J$^{-1}$ and physical activity is $z_c>0$ in m$^{-d}$ as defined in [[def-csm-gibbs-physical-parameters]], the numerical mathematical inputs are $\beta=E_0\beta_{\rm SI}$ and $z=\ell_0^d z_c$; coordinates and pair energies are expressed in units $\ell_0$ and $E_0$. Thus $k_BT=E_0/\beta$ and physical volume is $\ell_0^d$ times numerical volume. Clause 8 is a separate formal dimensionless continuation with $\beta=0$ and fixed $z>0$ treated as a mathematical input; it lies outside the positive-temperature physical premises and has no SI temperature or pressure interpretation. Each clause is a separate conditional conclusion; no hypothesis of a stronger clause is implicit in a weaker one.

1. **Stable power-tempered free cubes.** Under $\mathrm{AC}_\omega$, for a stable power-tempered pair potential $\phi$ with the exact constants and tail bound of [[def-tdmath-stable-power-tempered-particle-model]], the free-cube standard positional grand partition sums $\Xi_L(z,\beta)$ have a finite reduced-pressure limit
$$p(z,\beta)=\lim_{L\to\infty}L^{-d}\log\Xi_L(z,\beta).$$

2. **Stable regular interior canonical rates and duality.** Under full $\mathrm{AC}$, for a stable regular potential with the decreasing integrable tail of [[def-tdmath-superstable-regular-interaction]], the free-cube exact-$N$ rate $F_\beta(\rho)$ exists for every interior attainable density $\rho>0$ and every sequence $N_L/L^d\to\rho$. The free grand reduced pressure
$$P(\alpha,\beta)=\lim_{L\to\infty}L^{-d}\log\Xi_L(e^\alpha,\beta)$$
satisfies
$$P(\alpha,\beta)=\sup_{\rho\geq0}\{F_\beta(\rho)+\alpha\rho\},\qquad F_\beta(\rho)=\inf_{\alpha\in\mathbb R}\{P(\alpha,\beta)-\alpha\rho\}$$
on the closed effective domain of $F_\beta$. This does not assert an exact-$N$ limit at an excluded endpoint.

3. **Superstable regular grand variation.** Under $\mathrm{AC}$, the ultrafilter extension principle, $\mathrm{DC}$, and $\mathrm{HB}$, for a superstable regular potential and $z,\beta>0$, the normalized unit-Poisson partition rate exists for both free and periodic cubes:
$$p_Q(z,\beta)=\lim_{L\to\infty}L^{-d}\log E_{Q_{\Lambda_L}}\!\left[z^{N_{\Lambda_L}}e^{-\beta H_{L,b}}\right] =-\min_{P\in\mathcal P^1_{\rm stat}}\{I(P)+\beta\Phi(P)-\rho(P)\log z\},\quad b\in\{\mathrm{free},\mathrm{per}\}.$$
Here $Q_{\Lambda_L}$ is unit-intensity Poisson, $\mathcal P^1_{\rm stat}$ is the stationary finite-intensity law space, $I$ is specific relative entropy to $Q$, $\rho$ is intensity, and $\Phi$ is positional energy density, all as defined in [[def-tdmath-superstable-regular-interaction]]. The minimizer set is nonempty and compact in the local-tame topology $\tau_L$ of [[def-tdmath-local-tame-topology]]. The standard $1/N!$ Lebesgue positional partition has reduced pressure $p_Q+1$; in $d=3$ its physical pressure is $E_0(p_Q+1)/(\beta\ell_0^3)$ Pa.

4. **Arbitrary free-wall shapes and fixed-particle limits.** Under full $\mathrm{AC}$, for the same superstable regular interaction, the free-wall grand reduced pressure along every van Hove sequence, as defined in [[def-tdmath-van-hove-sequence]], tends to the free-cube reduced pressure. At every interior attainable $\rho>0$, the free-wall exact-$N_k$ positional rate along every van Hove sequence with $N_k/|\Omega_k|\to\rho$ tends to $F_\beta(\rho)$. No stability-only arbitrary-shape upper bound or excluded-endpoint conclusion is asserted.

5. **Periodic and free local positional equivalence.** For the same superstable regular interaction and positive $\beta$ as in clause 3, under the four choice assumptions in that clause, if $\rho>0$ is interior attainable, $N_L/L^d\to\rho$, and $z>0$ is a finite supporting activity, the periodic exact-$N_L$ rate is $F_\beta(\rho)$ and its periodized empirical field concentrates in every open $\tau_L$ neighborhood of the grand variational minimizer set. The free exact-$N_L$ empirical field has the same neighborhood concentration. Here the periodized empirical field $R_{L,\omega}$ is the spatial average of translations of the periodic continuation, as defined in [[def-tdmath-periodized-empirical-field]], and convergence uses the outer-probability convention explicitly defined in [[lem-tdmath-canonical-empirical-field-conditioning]]. These statements concern spatially averaged local-tame observables, not the raw finite-box law at a fixed origin.

6. **A selected shrinking positional energy window.** Under clause 5, if $\beta\mapsto F_\beta(\rho)$ is differentiable at $\beta>0$ and the supporting grand variational minimizer is a singleton $P_*$, there exists a specific sequence $\delta_L\downarrow0$ for which the periodic exact-$N_L$ positional shell
$$\left|H_{L,\mathrm{per}}/L^d+\partial_\beta F_\beta(\rho)\right|\leq\delta_L$$
is eventually defined and its periodized empirical field converges in probability in $\tau_L$ to $P_*$. The free and periodic exact-$N_L$ laws and the matching periodic grand law have the same limiting empirical field. The width is selected by the proof; no arbitrary shell width or zero-width energy surface is covered.

7. **Uniform tempered exterior boundary.** Under full $\mathrm{AC}$, a superstable regular interaction, a genuine finite-valued positive core with divergent radial integral as in [[lem-tdmath-superquadratic-positive-core]], and fixed $z,\beta>0$, the free-wall grand pressure converges uniformly over the exact square-count exterior class $\Omega(t)$ defined in [[thm-tdmath-uniform-tempered-exterior-pressure]], for each finite $t$. Its limit is the free-cube pressure. This class excludes volume-filling external fields.

8. **Retained hard-exclusion zero-parameter branch.** Let $d\geq1$ and let $\phi$ be superstable and regular in the exact sense of [[def-tdmath-superstable-regular-interaction]]. In the separate formal continuation with fixed dimensionless activity $z>0$ and $\beta=0$, under $\mathrm{AC}$, the ultrafilter extension principle, $\mathrm{DC}$, and $\mathrm{HB}$, the model that retains the hard-forbidden set $B=\{x:\phi(x)=+\infty\}$ has the free and periodic rates and minimizers specified in [[thm-tdmath-retained-hard-zero-beta-limit]]. This is outside the positive-temperature physical premises. It is the activity-weighted model with forbidden pairs still excluded, not the unrestricted Poisson model unless $|B|=0$.

All clauses are conditional model deductions. None says that the adopted postulate describes a particular material. The variational minimizers above are not thereby identified as DLR laws.

## Facts & Assumptions

**Given:** For clauses 1–7, the physical postulate and parameter definition in the Statement; for clause 8, the separate formal dimensionless continuation and fixed mathematical activity stated there; the explicit matching of the chosen positional Hamiltonian to each supplier's pair-potential convention; and exactly the clause-specific mathematical hypotheses stated in the Statement.

[A1] For clauses 1–7, the current draft [[post-csm-interacting-equilibrium-gibbs]] adopts the finite-region Gibbs conditional laws for a chosen Hamiltonian and reference when their normalizers are positive and finite, and defines an infinite-volume equilibrium state by the DLR conditional identities. Its particle-sector convention points to the current draft [[post-csm-counting-and-physical-observables]]; for this single species use its $1/N!$ factor and set $a_0=h_{\rm ref}$ as required for the thermal-wavelength convention. These are adopted conventions, not proved or empirically validated claims. Clause 8 does not use this postulate or infer its activity from physical parameters.

[A2] For clauses 1–7, the current draft [[def-csm-gibbs-physical-parameters]] uses SI units, defines $\beta_{\rm SI}=(k_BT)^{-1}$ in J$^{-1}$ and continuum activity $z_c=e^{\beta_{\rm SI}\mu}\lambda_T^{-d}$ in m$^{-d}$, with $\lambda_T=h_{\rm ref}/\sqrt{2\pi m_{\rm p}k_BT}$. The reference scales $E_0,\ell_0$ convert these physical inputs into the dimensionless mathematical suppliers' convention. These physical definitions do not assign a temperature interpretation to clause 8.

[A3] In clauses 1–7 the physical model is explicitly restricted to a single-species positional Hamiltonian $H_N=\sum_{i<j}\phi(q_i-q_j)$ with numerical energy in units $E_0$, numerical coordinates in units $\ell_0$, reference action $a_0=h_{\rm ref}$, and the exact free, periodic, or exterior boundary and $1/N!$ reference convention of the named mathematical supplier. Clause 8 instead uses the same dimensionless positional interaction and reference conventions as a formal mathematical continuation, with $z>0$ held fixed independently of any physical $\mu$ or $T$. These are model-selection hypotheses, not derived identifications of arbitrary material Hamiltonians.

[A4] The stable power-tempered clause assumes $\mathrm{AC}_\omega$ ([[def-countable-choice]]) exactly as in [[thm-tdmath-stable-tempered-free-cube-grand-pressure]].

[A5] The stable regular and superstable regular clauses assume full $\mathrm{AC}$ ([[def-axiom-of-choice]]); [[def-tdmath-superstable-regular-interaction]] is introduced under that assumption.

[A6] The variational, zero-parameter, periodic empirical-field, and shrinking-shell clauses assume the ultrafilter extension principle ([[def-ultrafilter-extension-principle]]) exactly where their supplier theorems state it.

[A7] Those same clauses assume $\mathrm{DC}$ ([[def-dependent-choice]]) exactly where their supplier theorems state it.

[A8] Those same clauses assume $\mathrm{HB}$ ([[def-hahn-banach-extension-principle-relative]]) exactly where their supplier theorems state it. No implication between these additional principles is used.

[F1] [[def-tdmath-stable-power-tempered-particle-model]] defines an even Borel $\phi:\mathbb R^d\to\mathbb R\cup\{+\infty\}$, $U_N=\sum_{i<j}\phi(q_i-q_j)$, stability $U_N\geq-BN$, and the real tail bound $|\phi(x)|\leq C\|x\|_2^{-d-\epsilon}$ for $\|x\|_2\geq R$.

[F2] [[def-tdmath-superstable-regular-interaction]] defines stable, superstable, and regular potentials; $Z(L,N;\beta)$ with $1/N!$ positional normalization; and unit-Poisson partition $Z_Q=E_Q[z^Ne^{-\beta H}]$. Its variational notation is $\Phi=\mathcal E$, $I$ specific relative entropy, and $\rho$ stationary particle intensity. The sector-density justification for converting $Z_Q$ to the standard positional partition in this item is supplied explicitly by [F20].

[F3] [[def-tdmath-poisson-configuration-reference]] defines the locally finite simple configuration space, its count-generated sigma-algebra, the unit Poisson law $Q$, and its finite-region restrictions $Q_\Lambda$.

[F4] [[def-tdmath-van-hove-sequence]] defines a bounded measurable sequence by positive finite volumes tending to infinity and vanishing fixed-width two-sided boundary-layer ratio.

[F5] [[def-tdmath-local-tame-topology]] defines $\tau_L$ by convergence of expectations of every measurable local function bounded by a constant times $1+N_A$ on a bounded Borel set $A$.

[F6] [[def-tdmath-periodized-empirical-field]] defines $R_{L,\omega}$ by averaging translations of the periodic continuation of a finite configuration over its numerical cube.

[F7] [[thm-tdmath-stable-tempered-free-cube-grand-pressure]] assumes $\mathrm{AC}_\omega$, stability, the stated power tail, and positive activity and inverse-energy parameter; it proves existence and finiteness of the free-cube reduced-pressure limit.

[F8] [[thm-tdmath-canonical-interior-density-limit]] proves the free-cube exact-$N$ rate $F_\beta(\rho)$ for every interior attainable $\rho>0$ under the stable regular decreasing-integrable-tail assumptions.

[F9] [[thm-tdmath-canonical-grand-duality]] identifies $P(\alpha,\beta)=\lim L^{-d}\log\Xi_L(e^\alpha,\beta)$ and proves both displayed convex-duality identities on the closed effective density domain; it does not assert local-observable equivalence.

[F10] [[thm-tdmath-continuum-variational-pressure]] assumes $\mathrm{AC}$, the ultrafilter extension principle, $\mathrm{DC}$, and $\mathrm{HB}$, along with a superstable regular potential and $z,\beta>0$; it proves free/periodic normalized-Poisson pressure equality, the variational minimum, and compact nonempty minimizers.

[F11] [[thm-tdmath-retained-hard-zero-beta-limit]] assumes the same four choice principles, a superstable regular potential, and retained hard admissibility; it proves the $\beta=0$ free/periodic rates and minimizer claims without replacing the constrained law by unrestricted Poisson unless the forbidden set is null.

[F12] [[lem-tdmath-superquadratic-positive-core]] requires either a finite-valued positive core with divergent weighted integral or a stated hard-core radius; it gives the stronger superquadratic cell-occupation coercivity used in the exterior theorem.

[F13] [[thm-tdmath-uniform-tempered-exterior-pressure]] assumes stability, regularity, that genuine positive-core condition, and a fixed finite square-count exterior class $\Omega(t)$; it proves uniform convergence of the free-wall grand pressure to the free-cube value.

[F14] [[thm-tdmath-superstable-van-hove-pressure]] assumes superstability, regularity, and a van Hove sequence; it proves the free-wall grand-pressure limit, not a stability-only arbitrary-shape theorem.

[F15] [[thm-tdmath-periodic-fixed-n-limit]] assumes the four choice principles, a superstable regular potential, positive $\beta$, and interior density; it proves the periodic exact-$N$ rate and concentration of the periodized empirical field.

[F16] [[thm-tdmath-fixed-n-local-ensemble-equivalence]] gives the corresponding free exact-$N$ empirical-field concentration under a finite supporting activity and the same compactness assumptions.

[F17] [[lem-tdmath-canonical-empirical-field-conditioning]] defines outer probability by infimum over measurable supersets and states the common outer-probability convention for empirical-field convergence.

[F18] [[thm-tdmath-controlled-shell-three-ensemble-equivalence]] additionally requires differentiability of $F_\beta(\rho)$ and a singleton minimizer; it constructs one shrinking positional energy-density window and asserts no arbitrary shell-width conclusion.

[F19] [[thm-tdmath-van-hove-fixed-n-limit]] assumes a superstable regular potential, a van Hove sequence, and an interior attainable density; it proves the stated free-wall exact-$N$ rate.

[F20] [[lem-csm-continuum-kernel-normalization]] proves that for every bounded Borel region $D$ and $N\geq0$, the unit-intensity Poisson $N$-point sector is the pushforward of $e^{-|D|}/N!$ times product Lebesgue measure on ordered simple tuples. In particular this holds for the bounded Borel cube $\Lambda_L$ with $|\Lambda_L|=L^d$.

## Proof

1.1 Under clause 1, the assumptions of [F1] and [F7] are exactly the stable power-tempered model, $\mathrm{AC}_\omega$, and positive $z,\beta$. Applying [F7] gives the finite limit $p(z,\beta)$ asserted there. This is a reduced positional partition deduction under the adopted model [A1], not an empirical pressure measurement. [A1, A3, A4, F1, F7]

1.2 Under clause 2, [F2] supplies the stable regular decreasing-integrable-tail convention and full $\mathrm{AC}$ [A5]. The density and particle-number hypotheses are exactly those of [F8], so the canonical rate exists and equals $F_\beta(\rho)$. For each $\alpha$, [F9] applies to that same rate and free-cube partition, giving both convex-duality identities on its stated closed effective domain. No endpoint canonical limit is inferred from the duality identity. [A3, A5, F2, F8, F9]

1.3 Under clause 3, [A5]–[A8] supply the four separately stated choice principles, and [F2] fixes the same superstable regular positional model and Poisson normalization. Thus [F10] gives the free/periodic $p_Q$ limit, variational formula, and compact nonempty minimizer set. The definitions [F3] and [F5] identify the reference law and topology used in that theorem. [A3, A5, A6, A7, A8, F2, F3, F5, F10]

1.4 For clause 4, full $\mathrm{AC}$ is supplied by [A5], and the sequence satisfies [F4]'s explicit van Hove boundary-layer condition, so [F14] gives the free-wall grand-pressure limit. For the exact-$N$ assertion, the same sequence and density hypotheses match [F19], which gives the claimed rate; [F8] identifies that rate as $F_\beta(\rho)$. Neither implication supplies an excluded endpoint or removes superstability. [A3, A5, F4, F8, F14, F19]

1.5 In clause 5, the four choice assumptions [A5]–[A8] are exactly those in [F15] and [F16]. The positive finite supporting activity, interior density, superstable regular potential, and exact-$N$ rate meet their hypotheses. By [F6] the observable is the spatially periodized field, by [F5] its topology tests every local observable with at-most-linear count growth, and by [F17] convergence for arbitrary events uses the stated outer probability. Applying [F15] to periodic boundary and [F16] to free boundary gives precisely the two concentration claims. [A3, A5, A6, A7, A8, F5, F6, F8, F9, F10, F15, F16, F17]

1.6 Clause 6 adds differentiability and a singleton variational minimizer to clause 5. These are exactly the extra hypotheses in [F18]. Its constructed sequence $\delta_L$ and its proof yield the asserted periodic positional shell, while its conclusion explicitly restricts the width to that selected sequence. [A3, A5, A6, A7, A8, F6, F10, F15, F17, F18]

1.7 Clause 7 has full $\mathrm{AC}$ by [A5], the stable regular model [F2], and the genuine finite-valued positive core [F12]. The prescribed square-count class and fixed $z,\beta$ are the ones in [F13]. Applying that theorem gives uniform convergence to the free-cube pressure; no volume-filling field is included in its hypotheses. [A3, A5, F2, F12, F13]

1.8 Clause 8 assumes $d\geq1$ and the superstable regular potential of [F2], exactly the interaction class required by [F11]. It uses the separate formal $\beta=0$ continuation with fixed mathematical activity $z>0$ from [A3] and assumes the four choice principles [A5]–[A8] exactly as in [F11]. Applying [F11] yields its free/periodic zero-parameter conclusions. Its hypothesis and conclusion retain forbidden configurations throughout, so no unrestricted Poisson claim follows when the forbidden set has positive measure; no inference about $\beta_{\rm SI}>0$ or an SI pressure is made. [A3, A5, A6, A7, A8, F2, F11]

2.1 By [F20], the unit-intensity Poisson $N$-point sector on the bounded Borel cube $\Lambda_L$ has density $e^{-L^d}/N!$ relative to the labelled positional sector. Therefore its normalized partition is $e^{-L^d}\Xi_L$, so the logarithmic rates differ by exactly $1$. With numerical volume $L^d$ and physical volume $\ell_0^dL^d$, the physical pressure conversion is $k_BT\,p/\ell_0^d=E_0p/(\beta\ell_0^d)$ by [A2]. For $d=3$, the units are J/m$^3$ = Pa. This conversion changes units only; it does not add momentum variables or an empirical premise. [A2, A3, F2, F3, F20] ∎

## Remarks

The stationary variational minimizers in clause 3 are not identified with DLR laws by any cited supplier. The finite-range DLR specification defined on this page is a separate local object; no existence or uniqueness of an infinite-volume DLR law is asserted here. No experiment, measured parameter, or claim of equilibration is used.
