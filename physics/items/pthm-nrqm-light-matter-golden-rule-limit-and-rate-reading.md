---
id: pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading
aliases: [nrqm-light-matter-golden-rule-limit-and-rate-reading]
kind: physics-theorem
domain: physics
title: "The golden-rule limit of the single-vertex emission coefficient and its reading as a model rate coefficient"
status: published
origin: pipeline
dependency_level: 17
deps: [pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients, def-nrqm-light-matter-framework-finite-level-coupled-model, def-nrqm-light-matter-framework-spectral-transition-and-detection, lem-nrqm-light-matter-first-order-photon-energy-law, thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-preparation-and-apparatus, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, def-measure-with-density, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients: physical-result
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  def-nrqm-light-matter-framework-spectral-transition-and-detection: formulation-prerequisite
  lem-nrqm-light-matter-first-order-photon-energy-law: mathematical-premise
  thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-measure-with-density: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
empirical_premises: []
physical_scope: "The limit, as the time parameter of the single-vertex emission coefficient of the declared finite-level cutoff dipole model grows, of that coefficient divided by the time; the reading of the limit as a model rate coefficient under a declared continuous positive mode density; and the explicit exclusion of the cases in which the transition energy exceeds the cutoff or equals it. The theorem asserts no exact exponential decay, no lifetime, no linewidth, no weak-coupling or Markov property of the model's evolution, no environment, no detector and no measured rate."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.1 printed pages 214-215 (PDF pages 222-223): Fermi's golden rule as a long-time approximation with a continuum of final states and a density of states, and the warning that rates cannot remain linear probabilities for arbitrarily large times"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; Internet Archive snapshot of 2024-04-21), Chapter 6 Sections 6.8-6.9 printed pages 95-97: time-dependent perturbation theory and the golden-rule rate"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Chapter 13 Sections 13.5-13.9 pp. 175-190: the first-order emission coefficient and its long-time behaviour"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Adopt the model, the declared upward level pair $(a,b)$ and the page data
$c_{j},M,\nu_{b},A_{b}$ of
[[def-nrqm-light-matter-framework-finite-level-coupled-model]] and
[[def-nrqm-light-matter-framework-spectral-transition-and-detection]], and the
single-vertex emission coefficient $\gamma_{b}(t)$ of
[[pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients]]
clause (a). Assume the Axioms of Countable Choice and of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]) and the density hypothesis:
$\nu_b=J_b\lambda$ for a declared Lebesgue-measurable representative $J_b:\mathbb R\to[0,\infty)$ of an $L^1(\lambda)$ class, with $J_b=0$ $\lambda$-almost everywhere on $\mathbb R\setminus(0,\Lambda]$, continuous at $\Delta$. All point values below refer to this representative; continuity means that for every $\epsilon>0$ there is $\delta>0$ such that $|J_b(E)-J_b(\Delta)|<\epsilon$ whenever $|E-\Delta|<\delta$. Two representatives of the same class that are continuous at $\Delta$ have the same value there: otherwise continuity of their difference gives a nonzero difference throughout a neighborhood of positive measure, contradicting equality almost everywhere. Then:

(a) (resonant limit) if $0<\Delta<\Lambda$ and $J_{b}(\Delta)>0$, then
$$\lim_{t\to\infty}\frac{\gamma_{b}(t)}{t} =\frac{2\pi\eta_{0}^{2}}{\hbar}\,J_{b}(\Delta);$$

(b) (above-cutoff limit) if $\Delta>\Lambda$, then
$\lim_{t\to\infty}\gamma_{b}(t)/t=0$; the boundary case $\Delta=\Lambda$ is not
asserted;

(c) (rate reading) the theorem declares the **model rate coefficient**
$$\Gamma_{b}:=\frac{2\pi\eta_{0}^{2}}{\hbar}\,J_{b}(\Delta) \qquad(0<\Delta<\Lambda),$$
read in $\mathrm{s^{-1}}$ by the unit convention of the model (the interaction
term is read in joules), as the model's reading of the limit in (a); the
identification of the mode density $J_{b}$, the cutoff $\Lambda$ or the
coupling $\eta_{0}$ with laboratory data is a tested identification with
uncertainty under P7
([[post-nrqm-framework-preparation-and-apparatus]]);

(d) (scope) clauses (a)-(c) concern the limit of the explicit single-vertex
coefficient per unit time. They assert no exact exponential decay of any
population, no lifetime or linewidth, no weak-coupling, Markov or
environmental property of the model's exact evolution, no all-time validity of
a rate law and no measured rate; in particular $\Gamma_{b}$ is a property of
the declared model together with its declared mode density, not an observed
decay constant.

## Facts & Assumptions

**Given:** the model data and level pair of the statement, the density $J_{b}$ with its continuity and positivity at $\Delta$, the single-vertex coefficient $\gamma_{b}(t)$ and the model rate coefficient $\Gamma_{b}$.

[F1] **Coefficient identity.** For every $t>0$, $\gamma_{b}(t)=\eta_{0}^{2}t\int_{\mathbb R}K_{t}(E-\Delta)d\nu_{b}(E)$, and $\|A_{b}(\cdot,t)\|_{\mathfrak h}^{2}=\gamma_{b}(t)$ ([[pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients]] clause (a), [[lem-nrqm-light-matter-first-order-photon-energy-law]] clause (a)).

[F2] **Golden-rule limit.** For $A_{b}$ and $\nu_{b}$ as in the model, if $\nu_{b}=J_{b}\lambda$ with $J_b:\mathbb R\to[0,\infty)$ the declared measurable integrable representative, $J_{b}=0$ $\lambda$-a.e. on $\mathbb R\setminus(0,\Lambda]$ and $J_{b}$ continuous at $\Delta$, then $\lim_{t\to\infty}\frac{1}{t}\|A_{b}(\cdot,t)\|_{\mathfrak h}^{2}=\frac{2\pi\eta_{0}^{2}}{\hbar}J_{b}(\Delta)$ when $0<\Delta<\Lambda$, and the same limit equals $0$ when $\Delta>\Lambda$; the boundary case $\Delta=\Lambda$ is excluded ([[thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity]] clause (iii)).

[F3] **Density and units.** A measure with density $J_{b}$ is given by $\nu_{b}(B)=\int_{B}J_{b}\,d\lambda$; energies and times are read in joules and seconds as in [[def-nrqm-framework-quantities-and-units]], and the interaction convention of [[def-nrqm-light-matter-framework-finite-level-coupled-model]] clause (c) fixes the units of $\eta_{0}$ and of the $g_{j}$ ([[def-measure-with-density]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] **Model and outcome readings.** The readings of P1, P2 and P7 and of [[def-nrqm-observables-framework-observable-and-outcome-law]] are those adopted in the model; the coefficient $\gamma_{b}$ is a defined model quantity of [[def-nrqm-light-matter-framework-spectral-transition-and-detection]] clause (d).

## Proof

**Proof technique:** direct; divide the model's coefficient identity by $t$ and apply the cited golden-rule limit, then read the result as a model coefficient.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Resonant limit] By [F1], $\gamma_{b}(t)/t=\eta_{0}^{2}\int_{\mathbb R}K_{t}(E-\Delta)d\nu_{b}(E)$ for $t>0$; substituting the density $J_{b}$ by [F3] and applying the first case of [F2] gives $\lim_{t}\gamma_{b}(t)/t=\eta_{0}^{2}\cdot\frac{2\pi}{\hbar}J_{b}(\Delta)$. This is (a). [F1, F2, F3, algebra]

1.2 [Above-cutoff limit] With the same identity and the second case of [F2], $\gamma_{b}(t)/t\to0$ when $\Delta>\Lambda$; the cited item excludes $\Delta=\Lambda$, so no statement is made there. This is (b). [F1, F2, algebra]

2.1 [Rate reading and scope] Clause (c) names the limit of (a) the model rate coefficient, with the model's unit convention recorded in [F3]; by [F4] it is a model quantity, and the laboratory identification of the density, cutoff or coupling is a tested identification under P7. Nothing in steps 1.1-1.2 formed an exponential decay law, a lifetime, a linewidth, a Markov or weak-coupling property or an observed rate: the limit is of the single-vertex coefficient divided by the time, and the exact-model probability is controlled only by the Dyson tail of [[pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients]] clause (b). This proves (c) and (d). [F1, F2, F3, F4, step 1.1, step 1.2] ∎

## Remarks

- **What the limit is not.** The limit in clause (a) is a limit of $\gamma_{b}(t)/t$ for the *single-vertex* coefficient; it is not derived from the exact evolution, and its interpretation as a rate law over a time window requires the separate physical assumptions of a weak-coupling window and a mode-density model, which this pair states but does not prove.
- **Cutoff behaviour.** Clause (b) records the model's cutoff: a transition whose energy exceeds the declared cutoff has single-vertex coefficient per unit time tending to zero in the limit, because the photon density vanishes above $\Lambda$; the boundary case is left unasserted rather than assigned a value.
