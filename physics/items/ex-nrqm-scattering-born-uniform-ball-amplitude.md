---
id: ex-nrqm-scattering-born-uniform-ball-amplitude
aliases: [ nrqm-scattering-born-uniform-ball-amplitude ]
kind: example
domain: physics
title: "Born amplitude of a declared uniform ball potential with an explicit
  weak-coupling condition"
status: published
origin: session
dependency_level: 14
deps:
  [
    def-nrqm-scattering-framework-short-range-model,
    pthm-nrqm-scattering-controlled-born-approximation,
    pthm-nrqm-scattering-stationary-wave-amplitude-and-flux,
    def-nrqm-scattering-stationary-beam-and-cross-section-model,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    def-nrqm-observables-framework-observable-and-outcome-law,
    thm-polar-coordinates-formula-for-lebesgue-measure,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  pthm-nrqm-scattering-controlled-born-approximation: physical-result
  pthm-nrqm-scattering-stationary-wave-amplitude-and-flux: physical-result
  def-nrqm-scattering-stationary-beam-and-cross-section-model: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared short-range scattering model with a uniform real
  ball potential of strength V_0 and radius R in the pair's stationary beam
  reading: the explicit Born amplitude as a function of the momentum transfer,
  its forward value, and an explicit Hilbert-Schmidt condition on V_0, R and m
  that makes the controlled Born error estimate of the pair applicable.
  Conditional on the declared model and cited mathematics; no measured cross
  section and no claim that the Born reading applies outside the stated explicit
  condition."
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin,
        author-hosted course text), Section 15.4 printed pages 213-215: the Born
        approximation and the condition for its validity"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.3, printed pages 267-270 (PDF pages 275-278)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

**Setup.** Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero, action constant $\hbar>0$ and the **uniform ball potential**
$$V(x):=\begin{cases}V_{0},&|x|<R,\\ 0,&|x|\ge R,\end{cases}\qquad V_{0}\in\mathbb R,\ R>0,$$
read in joules and metres; adopt the stationary beam model at wave number
$k>0$ and direction $d$, and let $W=(2m/\hbar^{2})V$, $q=\|K_{k}\|$, $f_{k}$
and the Born amplitude $f_{B}$ be as in
[[pthm-nrqm-scattering-controlled-born-approximation]]. Write
$\theta$ for the scattering angle, $\cos\theta=\Omega\cdot d$, and
$\mathbf q_{\mathrm{tr}}:=k(d-\Omega)$ for the wave-vector transfer and $q_{\mathrm{tr}}:=|\mathbf q_{\mathrm{tr}}|=2k\sin(\theta/2)$ for its magnitude.

## Verification

**Given:** the declared model data, the Born theorem of the pair, and the polar-coordinates formula for Lebesgue measure.

1.1 By the Born theorem, $f_{B}(\Omega)=-\frac{1}{4\pi}\int_{B_{R}}e^{i\mathbf q_{\mathrm{tr}}\cdot y}W(y)\,dy$ with $W=V_{0}2m/\hbar^{2}$ constant on $B_{R}$; in polar coordinates the ball integral is $\int_{B_{R}}e^{iq\cdot y}dy=2\pi\int_{0}^{R}\int_{-1}^{1}e^{iqrs}r^{2}\,ds\,dr=4\pi\bigl(\sin(qR)-qR\cos(qR)\bigr)/q^{3}$ for $q=q_{\mathrm{tr}}>0$, and equals $4\pi R^{3}/3$ at $q=0$ by continuity. [given, algebra]

1.2 The kernel $G_{k}(x-y)W(y)$ on $B_{R}\times B_{R}$ has squared Hilbert-Schmidt norm $\int_{B_{R}}\int_{B_{R}}|G_{k}(x-y)W(y)|^{2}dx\,dy=\frac{|V_{0}|^{2}(2m/\hbar^{2})^{2}}{16\pi^{2}}\int_{B_{R}}\int_{B_{R}}|x-y|^{-2}dx\,dy$; for each $y$ the inner integral over $x\in B_{R}$ is at most the integral over the ball of radius $2R$ around $y$, which is $8\pi R$. Hence $\|K_{k}\|\le\|K_{k}\|_{\mathrm{HS}}\le\frac{2m|V_{0}|}{\hbar^{2}}R^{2}\sqrt{2/3}=:q_{\mathrm{HS}}$. [given, algebra]

2.1 Therefore $f_{B}(\Omega)=-\frac{2mV_{0}}{\hbar^{2}}\cdot\frac{\sin(q_{\mathrm{tr}}R)-q_{\mathrm{tr}}R\cos(q_{\mathrm{tr}}R)}{q_{\mathrm{tr}}^{3}}$ for $q_{\mathrm{tr}}>0$, with the forward value $f_{B}(\theta=0)=-\frac{2mV_{0}}{\hbar^{2}}\frac{R^{3}}{3}$; the amplitude has the dimension of length, since $2mV_{0}/\hbar^{2}$ is in $\mathrm{m^{-2}}$ and the bracket in $\mathrm{m^{3}}$. [step 1.1, algebra]

2.2 Consequently, if $\frac{2m|V_{0}|}{\hbar^{2}}R^{2}\sqrt{2/3}<1$, then $q=\|K_{k}\|\le q_{\mathrm{HS}}<1$ and the controlled Born estimate of the theorem applies; since $t\mapsto t/(1-t)$ is increasing on $[0,1)$ and $\|e_{\mathrm{inc}}\|_{L^{2}(B_{R})}=|B_{R}|^{1/2}$, the uniform error bound is at most $|f_{k}(\Omega)-f_{B}(\Omega)|\le\frac{\|W\|_{\infty}|B_{R}|}{4\pi}\frac{q_{\mathrm{HS}}}{1-q_{\mathrm{HS}}}=\frac{2m|V_{0}|}{\hbar^{2}}\frac{R^{3}}{3}\frac{q_{\mathrm{HS}}}{1-q_{\mathrm{HS}}}$ in metres; this is an explicit condition on the declared strength, radius, mass and action constant, verified here without any numerical value of the constants. [step 1.2, given, algebra]

3.1 Under the same condition the beam model reads $d\sigma/d\Omega(0)=|f_{k}(0)|^{2}$, and the theorem controls the difference from $|f_{B}(0)|^{2}$ through the bound of 2.2; the pair asserts the display $|f_{B}(0)|^{2}=\bigl(\frac{2mV_{0}}{\hbar^{2}}\bigr)^{2}\frac{R^{6}}{9}$ as the Born forward reading, read in $\mathrm{m^{2}\,sr^{-1}}$, and no measured value. [step 2.1, step 2.2, given, algebra] ∎

## Remarks

- **Scope.** The Born amplitude is a conditional model quantity; the explicit
  condition of 2.2 is sufficient for the controlled error bound of the pair
  and is not claimed to be necessary.
- **No weak-potential language.** The pair avoids "for a weak potential";
  the condition is the operator-norm condition $q<1$, verified here through
  the displayed Hilbert-Schmidt bound.
