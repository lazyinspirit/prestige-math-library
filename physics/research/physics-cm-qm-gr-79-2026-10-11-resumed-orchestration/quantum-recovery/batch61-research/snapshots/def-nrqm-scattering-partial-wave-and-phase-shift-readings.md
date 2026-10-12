---
id: def-nrqm-scattering-partial-wave-and-phase-shift-readings
aliases: [nrqm-scattering-partial-wave-and-phase-shift-readings]
kind: definition
domain: physics
title: "The model's partial-wave and phase-shift vocabulary for a declared central potential"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-scattering-framework-short-range-model, def-nrqm-scattering-stationary-beam-and-cross-section-model, def-nrqm-central-framework-central-potential-model, thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  def-nrqm-scattering-stationary-beam-and-cross-section-model: formulation-prerequisite
  def-nrqm-central-framework-central-potential-model: formulation-prerequisite
  thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence: mathematical-premise
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The pair's declared partial-wave and phase-shift vocabulary for a declared central short-range potential: the spherical harmonic channel labels, the normalized regular and outgoing radial solutions, the unit-modulus channel factor, the phase shift read modulo pi, and the channel cross-section reading. The definition is a reading of the stationary model of the pair; it asserts no angular-momentum interpretation of the labels for a material system, no bound-state statement and no measured quantity."
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Section 15.5 printed pages 217-219: partial waves, phase shifts and hard-sphere scattering"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.5 printed pages 275-281 (PDF pages 283-289): partial-wave expansions and scattering at low energy"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero, action constant $\hbar>0$, and its stationary elastic beam model
[[def-nrqm-scattering-stationary-beam-and-cross-section-model]] at wave
number $k>0$; adopt the declared central-potential reading of
[[def-nrqm-central-framework-central-potential-model]]: a **declared central
potential** of the pair is a real bounded measurable $V(x)=v(|x|)$ with
$v:(0,\infty)\to\mathbb R$ bounded, and it is **short-range** when it lies in
the compact-support class of the scattering model. Units are those of
[[def-nrqm-framework-quantities-and-units]]; the wave number $k$ is read in
$\mathrm{m^{-1}}$ and the energy $E=\hbar^{2}k^{2}/(2m)$ in joules.

**(b) Channel vocabulary.** For a declared central short-range potential $V$
and a channel label $(l,m)$ with $l\ge0$ and $-l\le m\le l$, the model
declares the **partial wave** $l$ and reads the angular dependence in the
complete spherical harmonic family $(Y_{lm})$ of
[[thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence]]; the
labels $l,m$ are indices of that family. The reduced equation below is read in
the pair's nondimensional normalization: the reduced potential is
$w:=2mv/\hbar^{2}$ of clause (c) of
[[def-nrqm-scattering-framework-short-range-model]] and the energy is $k^{2}$,
so that the physical parameters $m,\hbar$ do not enter it explicitly. The
model declares the **regular radial solution**
$\varphi_{l}$ of the reduced equation
$$-\varphi_{l}''+\Bigl(w(r)+\frac{l(l+1)}{r^{2}}\Bigr)\varphi_{l}=k^{2}\varphi_{l}, \qquad \varphi_{l}(r)/r^{l+1}\longrightarrow1\quad(r\to0),$$
and the **outgoing radial solution** $f_{l}$ with
$$f_{l}(r)=e^{i(kr-l\pi/2)}\bigl(1+O(r^{-1})\bigr)\qquad(r\to\infty)$$
outside the interaction region; these are the functions constructed by the
cited theorem, and they are not asserted to be elements of the state space.

**(c) Channel factor and phase shift.** The model declares the **channel
factor** and the **phase shift** of the partial wave $l$ to be
$$S_{l}(k):=\frac{\overline{W(\varphi_{l},f_{l})}}{W(\varphi_{l},f_{l})}, \qquad S_{l}(k)=e^{2i\delta_{l}(k)},$$
where $W(\varphi_{l},f_{l})=\varphi_{l}f_{l}'-\varphi_{l}'f_{l}$ is the
Wronskian and $\delta_{l}(k)$ is the **phase shift**, a real number read
modulo $\pi$; the model reads $|S_{l}(k)|=1$ and calls the channel
**elastic**. The declared **channel cross-section reading** is
$$\sigma_{l}(k):=\frac{4\pi}{k^{2}}(2l+1)\sin^{2}\delta_{l}(k),$$
read in $\mathrm{m^{2}}$. The existence of the functions and the identities
$|S_{l}|=1$ and $\sum_{l}(2l+1)\sin^{2}\delta_{l}<\infty$ are proved on this
page and are not presupposed here.

**(d) Status and scope.** Clauses (b)-(c) are declarations of the pair: names
for the objects constructed by the cited mathematics and the reading of the
phase shift modulo $\pi$. The model asserts no identification of the labels
$l,m$ with a measured angular momentum of a material system, no statement
about bound states or their count, and no channel decomposition for
non-central potentials. Every numerical statement about $\delta_{l}$ is a
separate theorem or example of the pair.

## Remarks

- **Modulo $\pi$.** The phase shift is read modulo $\pi$, since
  $S_{l}=e^{2i\delta_{l}}$ determines $\delta_{l}$ only up to an integer
  multiple of $\pi$; every display of this page that uses $\delta_{l}$ is
  insensitive to that ambiguity, as $\sin^{2}$ is.
- **Non-central potentials.** For a non-central declared potential the pair
  asserts no diagonal channel factor; the on-shell operator of the following
  theorem is then a general unitary on $L^{2}(S^{2})$.
