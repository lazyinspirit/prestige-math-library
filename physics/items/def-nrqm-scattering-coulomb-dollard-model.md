---
id: def-nrqm-scattering-coulomb-dollard-model
aliases: [nrqm-scattering-coulomb-dollard-model]
kind: definition
domain: physics
title: "The declared long-range Coulomb model and its Dollard-modified free comparison"
status: published
origin: session
dependency_level: 14
deps: [def-nrqm-scattering-framework-short-range-model, def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-energy-observable-and-flow, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, lem-nrqm-central-free-operator-differential-identification, thm-bounded-borel-pvm-integral, thm-unbounded-borel-functional-calculus, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-energy-observable-and-flow: physical-result
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  lem-nrqm-central-free-operator-differential-identification: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared long-range Coulomb scattering model of the pair: the spin-zero massive state space, the one-centre Coulomb potential with coupling kappa read in joule metres and its assigned energy observable, and the Dollard-modified free comparison with its logarithmic phase, reference time and modified wave operators. The model is an additional assumption of the pair; the reference time is a declared convention that changes only asymptotic channel phases, and the definition asserts no Rutherford amplitude, no measured cross section and no identification of kappa with measured charge data."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.4 printed pages 271-275 (PDF pages 279-283): scattering electrons off hydrogen, screening and the shielded Coulomb potential"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Section 15.4 printed pages 214-215: the Yukawa potential reducing to the Coulomb potential as the screening length increases, and Rutherford scattering"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the state and composition postulate P1, the
observable and probability postulate P2, the autonomous-dynamics postulate P4,
the kinematics and massive-particle model postulate P5 and the
identical-particle and spin postulate P6
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]), with the spin-zero
state space $H_{0}=L^{2}(\mathbb R^{3};\mathbb C)$, mass $m>0$, action
constant $\hbar>0$ and the units of
[[def-nrqm-framework-quantities-and-units]]. Assume the Axiom of Countable
Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]).

**(b) The declared Coulomb model.** As an additional model assumption of the
pair, fix a **coupling** $\kappa>0$, read in $\mathrm{J\,m}$, and adopt the
**one-centre Coulomb model** of
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] in its spin-zero
one-particle reading: the declared potential is
$$V_{\kappa}(x):=-\frac{\kappa}{|x|}\qquad(x\ne0),$$
read in joules, with the value at the origin a declared convention that does
not affect the theory, and the **assigned energy observable** is
$$H_{\kappa}=-\frac{\hbar^{2}}{2m}\Delta_{w}-\frac{\kappa}{|\cdot|}$$
on the domain $H^{2}(\mathbb R^{3};\mathbb C)=W^{2,2}(\mathbb R^{3};\mathbb C)$,
self-adjoint there by
[[pthm-nrqm-central-coulomb-energy-observable-and-flow]] clause (a) with flow
$e^{-itH_{\kappa}/\hbar}$ in the reading of
[[def-nrqm-autonomous-dynamics-framework-evolution]]. The model declares the
free comparison operator to be the free assigned energy observable
$H^{\mathrm{free}}$ of
[[def-nrqm-scattering-framework-short-range-model]] clause (c), and reads its
Coulomb coupling in the inverse-length form
$$\gamma:=\frac{2m\kappa}{\hbar^{2}}\quad(\mathrm{m^{-1}}), \qquad\text{so that}\qquad H_{\kappa}=c\Bigl(-\Delta_{w}-\frac{\gamma}{|\cdot|}\Bigr),\quad c=\frac{\hbar^{2}}{2m}.$$
The pure Coulomb potential is **not** in the short-range classes of
[[def-nrqm-scattering-framework-short-range-model]] clause (b); it is the
model's long-range case.

**(c) The declared Dollard-modified comparison.** Choose a reference length $\ell_\star>0$, read in metres, as a comparison convention, and put
$$t_{\star}:=\frac{2m\ell_\star^2}{\hbar}\quad(\mathrm{s}).$$
and, for $t\ne0$, let $h_{t}:[0,\infty)\to\mathbb C$ be the bounded Borel
function
$$h_{t}(x):=\exp\Bigl(i\,\operatorname{sign}(t)\, \frac{m\kappa}{\hbar\sqrt{2mx}}\,\log\frac{|t|}{t_{\star}}\Bigr)\quad(x>0), \qquad h_{t}(0):=1 .$$
The model declares the **Dollard-modified free comparison** to be the family
$$U_{D}(t):=e^{-itH^{\mathrm{free}}/\hbar}\,h_{t}(H^{\mathrm{free}})\quad(t\ne0), \qquad U_{D}(0):=I,$$
where $h_{t}(H^{\mathrm{free}})$ is the bounded functional calculus
([[thm-bounded-borel-pvm-integral]] clause 1) of the self-adjoint free
operator: since $h_{t}$ is unimodular, $U_{D}(t)$ is unitary for every $t$,
and both factors are functions of $H^{\mathrm{free}}$ and commute. The
**modified wave operators** of the model are the strong limits
$$\Omega_{D\pm}:=\operatorname*{s-lim}_{t\to\pm\infty}e^{itH_{\kappa}/\hbar}U_{D}(t),$$
declared when both exist, and the **modified scattering operator** is
$S_{D}:=\Omega_{D+}^{*}\Omega_{D-}$ when both exist and are isometries. The
reference length and the resulting time $t_\star$ are declared conventions. More exactly, changing the reference time from $t_\star$ to $t_\star'$ multiplies $U_D(t)$ on the right, for each sign $\sigma=\operatorname{sign}t$, by the fixed free-energy unitary
$$Q_\sigma= q_\sigma(H^{\mathrm{free}}),\qquad q_\sigma(E)=\exp\Bigl(-i\sigma\frac{m\kappa}{\hbar\sqrt{2mE}}\log\frac{t_\star'}{t_\star}\Bigr)\quad(E>0),\qquad q_\sigma(0)=1.$$
It is a bounded unimodular Borel multiplier and commutes with the free flow. Hence, when the wave operators exist, $\Omega_{D\pm}'=\Omega_{D\pm}Q_\pm$ and $S_D'=Q_+^*S_DQ_-$. The completeness and isometry properties are unchanged; these are the fixed outgoing and incoming phase conventions.

**(d) Status and scope.** Clauses (b)-(c) are declarations of the pair: a
prescribed long-range potential with its assigned energy observable, and a
modified comparison construction for it. The model asserts no formula for a
Coulomb scattering amplitude, no Rutherford cross section and no measured
quantity; the modification is a comparison construction for the long-range
generator, not a new interaction or a measured force. The ordinary
short-range comparison of
[[def-nrqm-scattering-framework-short-range-model]] clause (d) is not claimed
to be complete for the Coulomb model; its completeness is established only
for the modified comparison, on this page.

## Remarks

- **Why a modified comparison is needed.** The free comparison
  $e^{itH_{\kappa}/\hbar}e^{-itH^{\mathrm{free}}/\hbar}$ does not have a
  complete strong limit in general for a $1/|x|$ tail: the classical phase
  mismatch of the long-range interaction is not integrable in time. The
  logarithmic phase of $h_{t}$ is the declared correction; the model does not
  derive it from a measured force law.
- **Units of the phase.** The exponent is dimensionless: $m\kappa/(\hbar\sqrt{2mx})$
  is dimensionless for $x$ in joules, and $\log(|t|/t_{\star})$ is
  dimensionless for $t$ in seconds and $t_{\star}=2m\ell_\star^2/\hbar$ in seconds. Indeed $m/\hbar$ has dimension $\mathrm{s\,m^{-2}}$, and the reference length squared supplies the missing $\mathrm{m^2}$. The quantity $\gamma=2m\kappa/\hbar^2$ has inverse-length units; its numerical coefficient becomes dimensionless only after a length unit is fixed.
