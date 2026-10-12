---
id: ex-nrqm-scattering-square-well-s-wave-phase-shift
aliases: [nrqm-scattering-square-well-s-wave-phase-shift]
kind: example
domain: physics
title: "S-wave phase shift of a declared spherical square well, with its low-energy limit and hard-sphere comparison"
status: draft
origin: session
dependency_level: 13
deps: [def-nrqm-scattering-framework-short-range-model, def-nrqm-scattering-partial-wave-and-phase-shift-readings, pthm-nrqm-scattering-partial-wave-cross-section, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-observables-framework-observable-and-outcome-law, def-directional-and-partial-derivatives, thm-algebra-of-total-derivatives, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  def-nrqm-scattering-partial-wave-and-phase-shift-readings: formulation-prerequisite
  pthm-nrqm-scattering-partial-wave-cross-section: physical-result
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-total-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A declared idealised spherical square-well potential of depth U>0 and radius a in the pair's central stationary scattering reading, at positive energy E: the explicit s-wave phase shift from the matching conditions, the low-energy limit as a scattering length, and the hard-sphere comparison in the strong-depth limit. The setup is an idealised model with a complete verification; it asserts no measured phase shift, no measurement and no validity of the model for any material target."
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Sections 15.5-15.6 printed pages 217-219: phase shifts and hard-sphere scattering, including the low-energy limit tan delta_l = -(ka)^(2l+1)/((2l+1)[(2l-1)!!]^2) and the total cross section 4 pi a^2"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.5.1 printed pages 279-281 (PDF pages 287-289): scattering at low energy and the s-wave dominance"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

**Setup.** Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero, action constant $\hbar>0$, and declare the **spherical square well**
$$V(x):=\begin{cases}-U,&|x|<a,\\ 0,&|x|>a,\end{cases}\qquad U>0,\ a>0,$$
read in joules and metres; $V$ is real, bounded and compactly supported, so it
is in the compact-support class. Adopt the central stationary reading at wave
number $k>0$ of
[[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] and the
$s$-wave ($l=0$) channel. Put
$$K:=\frac{\sqrt{2m(E+U)}}{\hbar},\qquad k:=\frac{\sqrt{2mE}}{\hbar},\qquad E>0 .$$
Because the declared potential is constant on each of the two regions and
bounded, the radial function $u_{0}(r)=r\varphi_{0}(r)$ is $C^{1}$ at $r=a$
with second derivative given by the reduced equation on each side, and the
$s$-wave phase shift is determined by matching: $u_{0}\propto\sin(Kr)$ for
$r<a$ and $u_{0}\propto\sin(kr+\delta_{0})$ for $r>a$.

## Verification

**Given:** the data of the setup and the reduced equation of the $s$-wave of
[[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] clause (b).

1.1 For $r<a$ the reduced equation with $l=0$ is $u_{0}''=-K^{2}u_{0}$, whose regular solution at the origin is $u_{0}(r)=A\sin(Kr)$ with $u_{0}(0)=0$; for $r>a$ it is $u_{0}''=-k^{2}u_{0}$, whose most general solution with the outgoing reading of the channel vocabulary is $u_{0}(r)=B\sin(kr+\delta_{0})$. Boundedness of the potential makes $u_{0}''$ bounded near $r=a$, so $u_{0}'$ is continuous and $u_{0}$ is $C^{1}$ there, and continuity of $u_{0}$ and $u_{0}'$ at $r=a$ gives $A\sin(Ka)=B\sin(ka+\delta_{0})$ and $AK\cos(Ka)=Bk\cos(ka+\delta_{0})$. [given, algebra]

2.1 Dividing the two matching equations eliminates $A,B$ and gives $K\cot(Ka)=k\cot(ka+\delta_{0})$, that is $\tan(ka+\delta_{0})=(k/K)\tan(Ka)$; hence $\delta_{0}(k)=\arctan\bigl((k/K)\tan(Ka)\bigr)-ka$ modulo $\pi$. Both $k$ and $K$ are real and positive, so the right side is real; the channel factor $S_{0}=e^{2i\delta_{0}}$ has modulus one by [[pthm-nrqm-scattering-partial-wave-cross-section]] clause (b). [step 1.1, algebra]

3.1 Let $E\to0^{+}$, so $k\to0$ and $K\to K_{0}:=\sqrt{2mU}/\hbar$. Since $(k/K)\tan(Ka)\to0$, the first term is $\arctan\bigl((k/K)\tan(Ka)\bigr)=k\tan(K_{0}a)/K_{0}+O(k^{3})$, hence $\delta_{0}(k)=-k\,a_{\mathrm{eff}}+O(k^{3})$ with $a_{\mathrm{eff}}:=a-\tan(K_{0}a)/K_{0}$, and the s-wave channel reading of [[pthm-nrqm-scattering-partial-wave-cross-section]] clause (b) is $\sigma_{0}=4\pi\sin^{2}\delta_{0}/k^{2}\to4\pi a_{\mathrm{eff}}^{2}$. [step 2.1, given, algebra]

4.1 The low-energy behaviour separates two depth regimes. If $K_{0}a\to(n+\frac12)\pi$ from below, then $\tan(K_{0}a)\to+\infty$ and $a_{\mathrm{eff}}\to-\infty$, so the low-energy $s$-wave cross-section reading $4\pi a_{\mathrm{eff}}^{2}$ diverges: this is the zero-energy resonance of the well at which a new bound state appears, not a hard-sphere limit. If instead $\tan(K_{0}a)/K_{0}\to0$, then $a_{\mathrm{eff}}\to a$ and $\sigma_{0}\to4\pi a^{2}$, the low-energy $s$-wave reading of a hard sphere of radius $a$, four times its geometric cross section $\pi a^{2}$; at the depths $K_{0}a=n\pi$ of this class one has $\tan(K_{0}a)=0$ exactly, hence $a_{\mathrm{eff}}=a$ and $\delta_{0}(k)=-ka+O(k^{3})$, and the interior regular solution has a node approaching $r=a$, which is the vanishing boundary condition of the hard sphere. [step 3.1, algebra]

5.1 As a consistency check of the matching algebra, set $U=0$; then $K=k$ and the relation $K\cot(Ka)=k\cot(ka+\delta_{0})$ gives $\delta_{0}=0$ modulo $\pi$, which is the correct free case; and at an energy with $\tan(Ka)=0$, i.e. $Ka=n\pi$, the matching gives $k\cot(ka+\delta_{0})=K\cot(Ka)\to\infty$, i.e. $\sin(ka+\delta_{0})=0$, so $\delta_{0}=-ka$ modulo $\pi$: at such an energy the interior solution vanishes at $r=a$ and the exterior phase is that of a hard sphere of radius $a$. [step 2.1, algebra] ∎

## Remarks

- **What is asserted.** The phase shift, its low-energy limit and the
  hard-sphere comparison are exact consequences of the declared well and the
  channel vocabulary; no measured phase shift or cross section is reported,
  and no claim is made that the spherical square well describes any material
  target.
- **Idealisation.** The well is an idealised declared potential: it is
  discontinuous at $|x|=a$, and the depth comparisons of steps 4.1 and 5.1
  are limits inside the declared family of wells ($K_{0}a\to(n+\frac12)\pi$
  or $\tan(K_{0}a)/K_{0}\to0$), not limits of a measured potential.
