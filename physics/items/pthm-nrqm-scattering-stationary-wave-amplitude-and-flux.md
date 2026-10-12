---
id: pthm-nrqm-scattering-stationary-wave-amplitude-and-flux
aliases: [ nrqm-scattering-stationary-wave-amplitude-and-flux ]
kind: physics-theorem
domain: physics
title: "The model's stationary scattering wave, its outgoing amplitude and the
  differential and total cross-section readings"
status: draft
origin: session
dependency_level: 12
deps:
  [
    def-nrqm-scattering-framework-short-range-model,
    def-nrqm-scattering-stationary-beam-and-cross-section-model,
    lem-nrqm-scattering-model-scaling-correspondence,
    lem-nrqm-scattering-three-dimensional-current-and-flux,
    thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux,
    thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-preparation-and-apparatus,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-sobolev-space-wkp-and-its-norm,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  def-nrqm-scattering-stationary-beam-and-cross-section-model: formulation-prerequisite
  lem-nrqm-scattering-model-scaling-correspondence: mathematical-premise
  lem-nrqm-scattering-three-dimensional-current-and-flux: mathematical-premise
  thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux: mathematical-premise
  thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared short-range scattering model with a real bounded
  compactly supported potential, in the pair's stationary elastic beam reading
  at fixed wave number and incident direction: existence and uniqueness of the
  outgoing stationary solution on the interaction region, its local regularity,
  its uniform far-field expansion with a smooth amplitude and O(r^-2) remainder,
  the scattered radial current, and the resulting differential and total
  cross-section readings in m^2 per steradian and m^2. Conditional on the
  declared model and the cited mathematics; the stationary wave is not a
  state-space element and the item asserts no preparation, no detector
  acceptance, no count rate and no measured cross section."
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin,
        author-hosted course text), Sections 15.1-15.5 printed pages 209-219:
        the scattering amplitude, the differential cross section, partial waves
        and hard-sphere scattering"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        12.2-12.3 printed pages 263-270 (PDF pages 271-278): the scattering
        amplitude, the cross section and the i-epsilon prescription"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero and action constant $\hbar>0$, with a **compact-support-class** potential
$V$ supported in the ball $B_{R}$, and adopt the declared stationary elastic
beam model
[[def-nrqm-scattering-stationary-beam-and-cross-section-model]] at wave number
$k>0$, direction $d\in S^2$ and the declared $n_{\mathrm{inc}}>0$ in
$\mathrm{m^{-3}}$, with incident energy $E=\hbar^2k^2/(2m)$.
The construction below retains the dimensionless unit-incident shape
$\Psi$; its physical beam field is $\Phi=\sqrt{n_{\mathrm{inc}}}\Psi$.
Put
$$W:=\frac{2m}{\hbar^{2}}V,\qquad G_{k}(z):=\frac{e^{ik|z|}}{4\pi|z|},\qquad (K_{k}f)(x):=\int_{B_{R}}G_{k}(x-y)W(y)f(y)\,dy$$
for $f\in L^{2}(B_{R};\mathbb C)$ and $x\in B_{R}$. Assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Then:

(a) $I+K_{k}$ is boundedly invertible on $L^{2}(B_{R};\mathbb C)$; with
$u:=(I+K_{k})^{-1}\bigl(e^{ikd\cdot x}|_{B_{R}}\bigr)$ and
$$\Psi(x):=e^{ikd\cdot x}-\int_{B_{R}}G_{k}(x-y)W(y)u(y)\,dy,$$
one has $\Psi\in H^{2}_{\mathrm{loc}}(\mathbb R^{3})$,
$(-\Delta+W-k^{2})\Psi=0$ distributionally on $\mathbb R^{3}$, and
$\Psi|_{B_{R}}=u$;

(b) with $r=|x|>2R$ and $\Omega=x/r$, the **scattering amplitude**
$$f_{k}(\Omega):=-\frac{1}{4\pi}\int_{B_{R}}e^{-ik\Omega\cdot y}W(y)u(y)\,dy$$
is smooth on $S^{2}$ and
$$\Psi(x)=e^{ikd\cdot x}+\frac{e^{ikr}f_{k}(\Omega)}{r}+\mathcal E(x),$$
where $|\mathcal E(x)|+|\partial_{r}\mathcal E(x)|\le C(k,R,\|Wu\|_{1})r^{-2}$
uniformly in $\Omega$, and for every fixed product $D_{\Omega}$ of smooth
tangential differential operators on $S^{2}$ also
$|D_{\Omega}\mathcal E|+|D_{\Omega}\partial_{r}\mathcal E|\le C_{D}r^{-2}$;

(c) the physical scattered radial current of the beam model, with
$\Phi_{\mathrm{sc}}=\sqrt{n_{\mathrm{inc}}}(\Psi-e^{ikd\cdot x})$, is
$$j_r^{\mathrm{sc}}(r,\Omega)=n_{\mathrm{inc}}\left(\frac{\hbar k}{m}\frac{|f_k(\Omega)|^2}{r^2}+O(r^{-3})\right)$$
uniformly in $\Omega$, with physical incident flux density
$J_{\mathrm{inc}}=n_{\mathrm{inc}}\hbar k/m$ in $\mathrm{m^{-2}s^{-1}}$;
the common density factor cancels, and the cross-section readings are
$$\frac{d\sigma}{d\Omega}(\Omega)=|f_{k}(\Omega)|^{2}\qquad\text{in }\mathrm{m^{2}\,sr^{-1}}, \qquad \sigma=\int_{S^{2}}|f_{k}(\Omega)|^{2}\,d\Omega<\infty\qquad\text{in }\mathrm{m^{2}};$$

(d) the solution $\Psi$ of (a) is a generalized stationary solution of the
beam model at energy $E$ and direction $d$ in the sense of clause (c) of
[[def-nrqm-scattering-stationary-beam-and-cross-section-model]], and no other
function satisfying the same equation on the complement of
$\operatorname{supp}V$ and the same outgoing reading is produced by the
construction.

Every assertion is conditional on the declared model and the cited
mathematics. The stationary wave is not an element of the state space; the
item asserts no preparation, no beam apparatus, no detector acceptance and no
measured count rate.

## Facts & Assumptions

**Given:** the declared model and beam model with $m,\hbar>0$, compact-support-class $V$ supported in $B_{R}$, wave number $k>0$, direction $d$, density scale $n_{\mathrm{inc}}>0$, reduced potential $W=(2m/\hbar^{2})V$, kernel $G_{k}$, operator $K_{k}$ and choice hypotheses.

[F1] **Stationary outgoing integral and flux.** Assume Countable Choice. Let $R>0$, real $V_{0}\in L^{\infty}$ with support in $B_{R}$ and $k>0$; with $K_{k}$ built from $V_{0}$ and $G_{k}$ as above (with $V_{0}$ in place of $W$), the operator $I+K_{k}$ is boundedly invertible, $u=(I+K_{k})^{-1}e_{\mathrm{inc}}$, $\Psi=e_{\mathrm{inc}}-\int G_{k}(\cdot-y)V_{0}(y)u(y)dy$ satisfies $\Psi\in H^{2}_{\mathrm{loc}}$, $(-\Delta+V_{0}-k^{2})\Psi=0$ distributionally and $\Psi|_{B_{R}}=u$; the amplitude $f_{k}(\Omega)=-(4\pi)^{-1}\int e^{-ik\Omega\cdot y}V_{0}(y)u(y)dy$ is smooth with the displayed uniform far-field and derivative bounds, and the scattered radial current and cross-section displays hold ([[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]] clauses (a), (b), (c)).

[F2] **Fredholm invertibility.** Assume Countable Choice. For real bounded compactly supported $V_{0}$ and every $k>0$, the operator $I+K_{k}$ of [F1] is boundedly invertible ([[thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility]]).

[F3] **Scaling correspondence.** With $c=\hbar^{2}/(2m)$, the model's energy operator satisfies $H=cA$, $A=-\Delta_{w}+M_{W}$ with $W=2mV/\hbar^{2}$; the physical energy $E$ and the energy-divided spectral value $k^{2}$ in $\mathrm{m^{-2}}$ correspond by $E=ck^{2}$, i.e. $E=\hbar^{2}k^{2}/(2m)$ ([[lem-nrqm-scattering-model-scaling-correspondence]] clauses (a), (b)).

[F4] **Unit-shape and physical current readings.** The mathematical current functional is $\mathbf j^{\mathrm{unit}}[\psi]=(\hbar/m)\operatorname{Im}(\overline\psi\nabla\psi)$. For the unit incident shape its value is $(\hbar k/m)d$, and for the exact outgoing shape $fe^{ikr}/r$ its radial value is $(\hbar k/m)|f|^2/r^2$ ([[lem-nrqm-scattering-three-dimensional-current-and-flux]] clause (c)). For the declared constant $n_{\mathrm{inc}}>0$, the beam model reads the physical field as $\sqrt{n_{\mathrm{inc}}}\psi$, so the quadratic functional gives $\mathbf j[\sqrt{n_{\mathrm{inc}}}\psi]=n_{\mathrm{inc}}\mathbf j^{\mathrm{unit}}[\psi]$, and its cross sections are ratios with $J_{\mathrm{inc}}=n_{\mathrm{inc}}\hbar k/m$ ([[def-nrqm-scattering-stationary-beam-and-cross-section-model]] (b)-(d)).

[F5] **The beam model's solubility vocabulary.** A generalized stationary solution is a $C^{2}$ function on the complement of $\operatorname{supp}V$ satisfying the stationary equation there with an outgoing asymptotic reading and a scattering amplitude read in metres ([[def-nrqm-scattering-stationary-beam-and-cross-section-model]] clause (c)).

## Proof

**Proof technique:** direct; the physical stationary equation divided by $c=\hbar^{2}/(2m)$ is the energy-divided equation in physical coordinates with potential $W=W_x$, so the cited mathematical stationary theorem applies verbatim and its amplitude and flux displays are exactly the model's readings.

**Given:** the data and hypotheses of the statement and [F1]-[F5].

1.1 Since $V$ is real, bounded and supported in $B_{R}$, so is $W=2mV/\hbar^{2}$, which is read in $\mathrm{m^{-2}}$; dividing the physical stationary equation $-\frac{\hbar^{2}}{2m}\Delta\Psi+V\Psi=E\Psi$ by $c=\hbar^{2}/(2m)$ gives $-\Delta\Psi+W\Psi=(E/c)\Psi$, and $E/c=\hbar^{2}k^{2}/(2m)\cdot2m/\hbar^{2}=k^{2}$ by [F3] with $E=\hbar^{2}k^{2}/(2m)$. [F3, given, algebra]

2.1 The kernel $G_{k}(x-y)W(y)$ on $B_{R}\times B_{R}$ is square-integrable because $|x-y|^{-2}$ is locally integrable in three dimensions and $B_{R}$ is bounded, so $K_{k}$ is Hilbert-Schmidt and [F2] gives bounded invertibility of $I+K_{k}$; [F1] then gives $\Psi\in H^{2}_{\mathrm{loc}}$, the distributional equation $(-\Delta+W-k^{2})\Psi=0$ and $\Psi|_{B_{R}}=u$, which is (a). [F2, F1, step 1.1, algebra]

3.1 By [F1] the smooth amplitude $f_{k}(\Omega)=-(4\pi)^{-1}\int e^{-ik\Omega\cdot y}W(y)u(y)dy$ and the uniform expansion with the $r^{-2}$ remainder and its tangential and radial derivative bounds hold; these are exactly the displays of (b), with the constant depending on $k,R$ and $\|Wu\|_{1}$. [F1, step 2.1]

4.1 By [F1] the unit-shape scattered field $\Psi_{\mathrm{sc}}=\Psi-e^{ikd\cdot x}$ has radial mathematical current $(\hbar k/m)|f_k|^2/r^2+O(r^{-3})$ uniformly. Write $\Psi_{\mathrm{sc}}=u+iv$; the physical field has real and imaginary parts $\sqrt{n_{\mathrm{inc}}}u,\sqrt{n_{\mathrm{inc}}}v$. Since the scale is constant, its current is $(\hbar/m)[(\sqrt{n_{\mathrm{inc}}}u)\nabla(\sqrt{n_{\mathrm{inc}}}v)-(\sqrt{n_{\mathrm{inc}}}v)\nabla(\sqrt{n_{\mathrm{inc}}}u)]=n_{\mathrm{inc}}(\hbar/m)(u\nabla v-v\nabla u)$ by [F4]. Thus the physical scattered current is the display in (c), and the same calculation on the unit incident plane wave gives $J_{\mathrm{inc}}=n_{\mathrm{inc}}\hbar k/m>0$. Dividing yields $\lim_{r\to\infty}r^2j_r^{\mathrm{sc}}/J_{\mathrm{inc}}=|f_k|^2$. Smoothness and boundedness of $f_k$ on the sphere, with [F1]'s uniform error, give the finite total cross section $\sigma=\int_{S^2}|f_k|^2d\Omega$. The unit-shape amplitude stays in metres and the density cancels from both cross-section readings. This is (c). [F1, F4, step 3.1, algebra]

5.1 By step 2.1 and step 3.1 the constructed $\Psi$ is $C^{2}$ on the complement of the essential closed support of $V$: near each such point the convolution integrates the compactly supported $L^1$ density $Wu$ against $G_k(x-y)$ at a positive distance from its singularity, so its derivatives of every fixed order are bounded on a smaller neighborhood and differentiation under that integral is valid; the incident exponential is smooth too, satisfies the stationary equation there and has the outgoing reading with amplitude $f_{k}$ in metres; by [F5] it is a generalized stationary solution of the beam model at energy $E$ and direction $d$, and the construction determines it through the explicit invertible problem, so no other function with the same equation and outgoing reading arises from this construction. This is (d) and completes the proof. [F5, step 2.1, step 3.1, algebra] ∎

## Remarks

- **What is read, and what is not.** The amplitude and cross sections are
  computed from the explicitly constructed stationary field; the pair asserts
  nothing about a preparation that would realize the incident plane-wave
  reading, and no measured count rate is predicted. Converting these model
  quantities into an expected count rate requires a declared target, fluence
  and detector model with its own uncertainties.
- **Normalization.** With physical coordinates $x$ in metres and $k$ in
  inverse metres, the unit-incident shape $\Psi$ is dimensionless, the reduced
  potential $W=(2m/\hbar^2)V$ is in $\mathrm{m^{-2}}$, and the displayed
  integral for $f_k$ has dimension length. The physical beam field
  $\sqrt{n_{\mathrm{inc}}}\Psi$ is in $\mathrm{m^{-3/2}}$; its number currents
  are in $\mathrm{m^{-2}s^{-1}}$. The common density factor cancels, leaving
  $d\sigma/d\Omega$ in $\mathrm{m^2\,sr^{-1}}$ independently of its value.
