---
id: pthm-nrqm-scattering-single-channel-resonance-cross-section
aliases: [nrqm-scattering-single-channel-resonance-cross-section]
kind: physics-theorem
domain: physics
title: "The resonance model's phase-shift law, unitarity and channel cross section"
status: draft
origin: session
dependency_level: 13
deps: [def-nrqm-scattering-single-channel-resonance-model, def-nrqm-scattering-partial-wave-and-phase-shift-readings, pthm-nrqm-scattering-partial-wave-cross-section, thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-observables-framework-observable-and-outcome-law, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-single-channel-resonance-model: formulation-prerequisite
  def-nrqm-scattering-partial-wave-and-phase-shift-readings: formulation-prerequisite
  pthm-nrqm-scattering-partial-wave-cross-section: physical-result
  thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared single-channel resonance model with every real resonance-centre parameter E_r and positive width Gamma: unitarity and a nonsingular phase law at positive physical energies, the full-real-axis auxiliary Lorentzian factor and its exact half-height width, and the positive-energy channel cross section with its resonance-centre value when E_r>0. Half-height locations have a physical reading only when positive. Conditional algebra of a declared model; no producing potential, decay law, lifetime or measured width or count is asserted."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.6.1 printed pages 283-284 (PDF pages 291-292): the Breit-Wigner partial cross section and the half-height width"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Section 15.7 printed pages 219-221: low-energy scattering and the scattering length"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared single-channel resonance model
[[def-nrqm-scattering-single-channel-resonance-model]] with channel label $l$,
mass $m>0$, action constant $\hbar>0$ and parameters $E_{r}\in\mathbb R$,
$\Gamma>0$, with the phase shift read modulo $\pi$ from $S_{l}=e^{2i\delta_{l}}$
and the channel cross-section reading $\sigma_{l}(E)$ of that definition.
Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Put $y:=\Gamma/2>0$.
For every real $E$ define the **auxiliary real-axis Lorentzian factor**
$$L(E):=\frac{y^2}{(E-E_r)^2+y^2}.$$
This is a mathematical extension of the positive-energy phase-shift factor;
physical phase shifts, $k(E)$ and cross sections remain defined only for $E>0$.
Then:

(a) for every $E>0$, $|S_l(E)|=1$ and
$$\delta_l(E)=-\operatorname{Arg}(E-E_r+iy)\quad(\mathrm{modulo}\ \pi),$$
where for $z=x+iy$ with $y>0$, $\operatorname{Arg}z$ is the unique angle
$\theta\in(0,\pi)$ with $\cos\theta=x/\sqrt{x^2+y^2}$ and
$\sin\theta=y/\sqrt{x^2+y^2}$. Equivalently, for $E\ne E_r$ one may use
$\delta_l(E)=-\arctan(y/(E-E_r))$ modulo $\pi$; if $E=E_r>0$,
$\delta_l(E)=-\pi/2$ modulo $\pi$;

(b) for every $E>0$, $\sin^2\delta_l(E)=L(E)$. On the entire real axis,
$L(E)$ has value $1$ exactly at $E=E_r$ and value $1/2$ exactly at
$E=E_r\pm\Gamma/2$. Thus the **full-real-axis half-height width** of this
factor is $\Gamma$ for every real $E_r$. A peak or half-height location is
in the physical energy range only when that location is positive; the
width statement itself concerns $L$ on $\mathbb R$;

(c) for every $E>0$, the channel cross-section reading is
$$\sigma_l(E)=\frac{4\pi}{k(E)^2}(2l+1)L(E),\qquad k(E)=\frac{\sqrt{2mE}}{\hbar},$$
read in $\mathrm{m^2}$. If $E_r>0$, its value at that physical energy is
$$\sigma_l(E_r)=\frac{4\pi\hbar^2}{2mE_r}(2l+1).$$
If $E_r\le0$, this model defines no physical cross section at $E_r$.
No maximum statement at $E_r$ is made for $\sigma_l$ itself, whose energy
dependence also contains the factor $k(E)^{-2}$; no slow-variation
assumption on that factor is required.

Every display is a conditional algebraic statement about the declared model;
no potential producing $S_{l}$, no decay law, no lifetime and no measured
quantity is asserted.

## Facts & Assumptions

**Given:** the declared single-channel resonance model with channel label $l$, parameters $E_{r}$, $\Gamma>0$, the phase-shift and cross-section readings, and the choice hypotheses.

[F1] **The declared channel factor.** For $E>0$, $S_{l}(E)=\frac{E-E_{r}-i\Gamma/2}{E-E_{r}+i\Gamma/2}$ and $S_{l}=e^{2i\delta_{l}}$ modulo $\pi$, with $\sigma_{l}(E)=\frac{4\pi}{k(E)^{2}}(2l+1)\sin^{2}\delta_{l}(E)$ and $k(E)=\hbar^{-1}\sqrt{2mE}$ ([[def-nrqm-scattering-single-channel-resonance-model]] clause (b)).

[F2] **Resonance model algebra in the cited mathematics.** For the single-channel model $S(E)=\frac{E-E_{r}-i\Gamma/2}{E-E_{r}+i\Gamma/2}$ with $\Gamma>0$, $|S(E)|=1$ for real $E$ and $\sin^{2}\delta=(\Gamma/2)^{2}/((E-E_{r})^{2}+(\Gamma/2)^{2})$, and substituting into the phase-shift series gives the corresponding single-channel cross section ([[thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence]] clause (c)).

[F3] **The pair's channel reading.** The channel cross-section reading of the pair is the summand of the phase-shift series of the partial-wave theorem, with $l$, $\delta_{l}$ and $k$ read as in the resonance model ([[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] clause (c), [[pthm-nrqm-scattering-partial-wave-cross-section]] clause (b)).

## Proof

**Proof technique:** direct; compute $|S_{l}|$ and the phase of the declared factor, then substitute the declared function into the model's channel reading.

**Given:** the data and hypotheses of the statement and [F1]-[F3].

1.1 For any real $E$, write $x:=E-E_r$ and $y:=\Gamma/2>0$. Then $x+iy\ne0$ and the purely algebraic ratio $R(E):=(x-iy)/(x+iy)$ has modulus one because its numerator is the conjugate of its denominator. On the physical range $E>0$, [F1] identifies $R(E)=S_l(E)$, proving the first part of (a). Defining $R$ as an auxiliary real-axis rational formula does not assign $k$ or a physical cross section outside the range $E>0$. [F1, given, algebra]

2.1 With $r:=\sqrt{x^2+y^2}>0$ and $\theta:=\operatorname{Arg}(x+iy)\in(0,\pi)$, one has $x+iy=r e^{i\theta}$ and $x-iy=r e^{-i\theta}$, hence $R(E)=e^{-2i\theta}$. For $E>0$ the phase $\delta_l=-\theta$ modulo $\pi$ therefore matches [F1]. When $x\ne0$, $\tan\theta=y/x$ and the principal arctangent gives the same angle modulo $\pi$; when $x=0$, $\theta=\pi/2$, so the phase is $-\pi/2$ with no division by zero. This proves all of (a). [F1, step 1.1, algebra]

3.1 For $E>0$, $\sin^2\delta_l=\sin^2\theta=y^2/(x^2+y^2)=L(E)$, in agreement with [F2]. Independently, the real-axis formula has positive denominator for every real $E$ and satisfies $0<L(E)\le1$, with equality $L(E)=1$ exactly when $x=0$. Also $L(E)=1/2$ if and only if $x^2=y^2$, so its two real half-height points are $E_r-y$ and $E_r+y$, separated by $2y=\Gamma$. Restricting a point to the physical range requires that point to be positive; the mathematical peak and width identities impose no condition such as $E_r>y$. This proves (b). [F2, step 1.1, step 2.1, algebra]

4.1 For $E>0$, substituting step 3.1 into [F1], [F3] gives $\sigma_l(E)=4\pi(2l+1)L(E)/k(E)^2$. If $E_r>0$, this formula is defined at $E=E_r$, where $L(E_r)=1$ and $k(E_r)^2=2mE_r/\hbar^2$, yielding the displayed resonance-centre value. If $E_r\le0$, no such physical evaluation is in the model's domain and the auxiliary $L(E_r)=1$ does not create one. The extra factor $k(E)^{-2}$ remains energy dependent, so no location-of-maximum or slow-variation assertion is used. This proves (c), retaining every real $E_r$ and positive $\Gamma$. [F1, F3, step 3.1, algebra] ∎

## Remarks

- **Why no peak claim.** The auxiliary real-axis Lorentzian factor peaks at $E_r$; that peak is physical only if $E_r>0$. The full
  channel reading carries the factor $k(E)^{-2}$ as well; the pair states the
  full-real-axis half-height width of the Lorentzian factor, which is exactly $\Gamma$,
  without asserting where the maximum of $\sigma_{l}$ lies.
- **Modulo $\pi$.** Both $\sin^{2}$ and the cross-section reading are
  insensitive to the modulo-$\pi$ ambiguity of $\delta_{l}$.
