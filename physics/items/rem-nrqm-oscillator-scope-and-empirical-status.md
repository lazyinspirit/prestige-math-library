---
id: rem-nrqm-oscillator-scope-and-empirical-status
aliases: [ nrqm-oscillator-scope-and-empirical-status ]
kind: remark
domain: physics
title: "Scope and empirical status of the oscillator page"
status: draft
origin: pipeline
dependency_level: 14
deps:
  [
    def-nrqm-oscillator-framework-quadratic-potential-model,
    def-nrqm-oscillator-coherent-states,
    pthm-nrqm-oscillator-energy-spectrum-and-completeness,
    pthm-nrqm-oscillator-coherent-state-fluctuations,
    pthm-nrqm-oscillator-coherent-state-evolution,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-preparation-and-apparatus
  ]
dependency_roles:
  def-nrqm-oscillator-framework-quadratic-potential-model: formulation-prerequisite
  def-nrqm-oscillator-coherent-states: formulation-prerequisite
  pthm-nrqm-oscillator-energy-spectrum-and-completeness: physical-result
  pthm-nrqm-oscillator-coherent-state-fluctuations: physical-result
  pthm-nrqm-oscillator-coherent-state-evolution: physical-result
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope and empirical status of the one-dimensional and
  isotropic three-dimensional quadratic-potential oscillator model: what the
  page adopts as model assumption, including the potential-energy convention
  subtracting V(0) and the dimensionless excitation-number observable with unit
  1/count; what it proves conditionally, which quantities carry dimensions and
  units, and which physical comparisons, corrections and extensions are not
  claimed by the page."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 printed
        pages 37-41 (PDF pages 45-49): the harmonic approximation about a
        potential minimum and its range of validity"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', §1 printed pages 1-9: the oscillator as a model system and
        its energy scale hbar omega"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## What the page adopts and proves

**Adopted.** The page adopts the framework postulates P1, P2 and P4 and the massive-particle postulates P5 in the readings fixed by the framework pages, and it adopts the quadratic-potential oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] as a model assumption: a declared spinless particle, a one-dimensional realization with state space $L^{2}(\mathbb R,dx)$, an isotropic three-dimensional realization with state space $L^{2}(\mathbb R^{3},dx)$, model parameters $m>0$ (kg), $\omega>0$ ($\mathrm s^{-1}$) and action constant $\hbar>0$ ($\mathrm J\,\mathrm s$), the assigned energy observables $(H_1,\mathrm J)$ and $(H_3,\mathrm J)$ with the additive potential-energy constant $V(0)$ subtracted, and the assigned dimensionless excitation-number observable $(N_\psi,1/\mathrm{count})$. The coherent-state family of [[def-nrqm-oscillator-coherent-states]] is a further declared one-parameter family of preparations of the one-dimensional realization.

**Proved.** [[pthm-nrqm-oscillator-energy-spectrum-and-completeness]] gives the exact eigenvalue list $\hbar\omega(n+\frac12)$ under the potential-energy convention subtracting $V(0)$, with ground energy $\hbar\omega/2$, the one-dimensional eigenspaces $\mathbb C\psi_n$, completeness of the Hermite eigenbasis, the excitation operators and assigned number observable, the number and atomic energy outcome laws, and the isotropic three-dimensional spectrum $\hbar\omega(M+\frac32)$ with multiplicities $(M+1)(M+2)/2$; [[pthm-nrqm-oscillator-coherent-state-fluctuations]] computes the coherent position and momentum spreads $\ell/\sqrt2$ and $\hbar/(\ell\sqrt2)$, proves the model's position-momentum relation $\Delta Q\Delta P\ge\hbar/2$ on the common domain and the saturation of the bound in every coherent preparation; and [[pthm-nrqm-oscillator-coherent-state-evolution]] proves that the flow carries the coherent preparation $[\Psi_z]$ to $[\Psi_{ze^{-i\omega t}}]$, that the preparation means perform the classical harmonic motion of frequency $\omega$, that the spreads stay saturated, and that the coherent energy law is the shifted Poisson law of parameter $|z|^{2}$ with spread $\hbar\omega|z|$. All of these are **conditional model deductions** from the adopted assumptions and the cited mathematics; they are not statements that any physical system is harmonic.

**What is empirical here.** Nothing on the page is a measured value. No numerical value of $m$, $\omega$ or $\hbar$ is asserted beyond the defining constants of the SI recorded in [[def-nrqm-framework-quantities-and-units]], no spectral line or resonance is identified with an eigenvalue difference, and no laboratory preparation is identified with a coherent state. The adopted potential term is the leading quadratic term of $V(x)-V(0)$ for a $C^2$ real-valued potential-energy function $V:\mathbb R\to\mathbb R$ with a non-degenerate minimum at $0$; the approximation's range, the deviations at finite amplitude and the transition to anharmonic behaviour are not derived here. The identification of the model's observables with apparatus readings is a tested identification under the preparation and apparatus postulate P7 ([[post-nrqm-framework-preparation-and-apparatus]]); agreement or disagreement of a laboratory oscillator with the model's predictions would test the combined model and apparatus assumptions and would not settle the framework's postulates.

## What is deferred

The Fourier-algebraic closure that this page consumes -- the diagonal operator, the Hermite family and its completeness, the scaling realization, the closed ladder domains and the coherent-vector convergence -- is authored on the mathematical page [[qm-math-oscillator|qm-math-oscillator]]. The one-dimensional non-normalizable formal solution of the ground-state equation and the ground-energy unit reading are authored on its [[qm-math-oscillator-examples|examples companion]] as [[ex-nrqm-oscillator-formal-nonnormalizable-solution|the formal solution example]] and [[ex-nrqm-oscillator-ground-energy-units|the ground-energy unit example]]; this page links to them rather than duplicating them. The displacement-operator presentation of coherent states, overcompleteness and resolutions of unity, driven and damped oscillators, time-dependent parameters, anharmonic corrections, coupling to electromagnetic fields or radiation and the identification of oscillator excitations with photons are separate model assumptions and are not developed here. Downstream pages that consume this page's items inherit the model scope stated in [[def-nrqm-oscillator-framework-quadratic-potential-model]] clause (e) and the conditional character of every derived claim.

## Status of the mathematics

The mathematical suppliers used here are the items of the run's mathematical oscillator page [[qm-math-oscillator]] and the published framework and spectral items cited in each item's contract; the two local lemmas [[lem-nrqm-oscillator-diagonal-eigenspaces]] and [[lem-nrqm-oscillator-unitary-transport-of-spectral-pvms]] are proved on this page. Every proof item records its exact hypotheses, and no claim of this page is unconditional on the adopted postulates and model assumptions.
