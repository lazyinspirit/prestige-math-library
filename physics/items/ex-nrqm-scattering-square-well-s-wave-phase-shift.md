---
id: ex-nrqm-scattering-square-well-s-wave-phase-shift
aliases: [ nrqm-scattering-square-well-s-wave-phase-shift ]
kind: example
domain: physics
title: "S-wave phase shift of a declared spherical square well, with its
  low-energy limit and hard-sphere comparison"
status: published
origin: session
dependency_level: 14
deps:
  [
    def-nrqm-scattering-framework-short-range-model,
    def-nrqm-scattering-partial-wave-and-phase-shift-readings,
    pthm-nrqm-scattering-partial-wave-cross-section,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-directional-and-partial-derivatives,
    thm-algebra-of-total-derivatives,
    def-countable-choice,
    def-axiom-of-choice,
    thm-sine-and-cosine-derivatives,
    cor-trigonometric-parity-and-pythagorean-identity,
    cor-taylor-remainder-bound,
    thm-intermediate-value,
    cor-mean-value-theorem,
    thm-polar-coordinates-formula-for-lebesgue-measure,
    def-sobolev-space-wkp-and-its-norm,
    lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates
  ]
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
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  cor-taylor-remainder-bound: mathematical-premise
  thm-intermediate-value: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A declared idealised spherical square well of depth U>0 and
  radius a in the central stationary scattering reading, at every positive
  energy E: nondividing s-wave matching, the finite-scattering-length and exact
  zero-energy-resonance branches, the associated onset of an s-wave bound-state
  branch at each threshold, and the hard-sphere comparison along nonresonant
  depth regimes and at matching nodes. The U=0 free case is also checked. No
  measured phase shift, measurement or material-target identification is
  asserted."
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin,
        author-hosted course text), Sections 15.5-15.6 printed pages 217-219:
        phase shifts and hard-sphere scattering, including the low-energy limit
        tan delta_l = -(ka)^(2l+1)/((2l+1)[(2l-1)!!]^2) and the total cross
        section 4 pi a^2"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.5.1, printed pages 276-278 (PDF pages 284-286)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

**Setup.** Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero, action constant $\hbar>0$, and declare the **spherical square well**
$$V(x):=\begin{cases}-U,&|x|<a,\\ 0,&|x|\ge a,\end{cases}\qquad U>0,\ a>0,$$
read in joules and metres; $V$ is real, bounded and compactly supported, so it
is in the compact-support class. Adopt the central stationary reading at wave
number $k>0$ of
[[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] and the
$s$-wave ($l=0$) channel. Put
$$K:=\frac{\sqrt{2m(E+U)}}{\hbar},\qquad k:=\frac{\sqrt{2mE}}{\hbar},\qquad E>0 .$$
Because the declared potential is constant on each of the two regions and
bounded, the reduced radial function $u_0:=\varphi_0$ of the cited channel
vocabulary (up to a nonzero real normalization) is $C^1$ at $r=a$
with second derivative given by the reduced equation on each side, and the
$s$-wave phase shift is determined by matching: $u_{0}\propto\sin(Kr)$ for
$r<a$ and $u_{0}\propto\sin(kr+\delta_{0})$ for $r>a$.

The phase is read modulo $\pi$. For $z=X+iY\ne0$, $\arg z$ means an angle $\theta$ modulo $2\pi$ with $\cos\theta=X/|z|$ and $\sin\theta=Y/|z|$; hence $\arg z$ modulo $\pi$ determines the phase without dividing by $X$ or $Y$. Big-$O$ terms below are for $k\to0^+$ at a fixed depth and radius; depth comparisons are taken after that low-energy limit.

## Verification

**Given:** the data of the setup and the reduced equation of the $s$-wave of
[[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] clause (b).

[F1] The actual channel supplier defines the regular function itself as the reduced radial solution, with $\varphi_0(r)/r\to1$ at the origin, the exterior outgoing function $e^{ikr}$ and the channel ratio $S_0=\overline{W(u_0,e^{ikr})}/W(u_0,e^{ikr})=e^{2i\delta_0}$. Its channel cross-section is $\sigma_0=4\pi\sin^2\delta_0/k^2$ ([[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] clauses (b),(c), [[pthm-nrqm-scattering-partial-wave-cross-section]] clauses (b),(c)).

[F2] The derivatives of sine and cosine and $\sin^2x+\cos^2x=1$ are [[thm-sine-and-cosine-derivatives]] and [[cor-trigonometric-parity-and-pythagorean-identity]]. The finite Taylor remainder estimate with a locally bounded next derivative is [[cor-taylor-remainder-bound]]. The existence of a zero between opposite signs of a continuous real function is [[thm-intermediate-value]]; strict decrease follows from a negative derivative by [[cor-mean-value-theorem]].

[F3] For a radial function $f(x)=u(|x|)/|x|$, polar integration gives $\|f\|_2^2=4\pi\int_0^\infty|u(r)|^2dr$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], $n=3$, and $\sigma(S^2)=4\pi$ from [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]] clause (b)). The weak domain $W^{2,2}$ requires square-integrable weak derivatives through order two ([[def-sobolev-space-wkp-and-its-norm]]), and the declared bounded-well energy operator has that domain and acts as $-c\Delta+V$, $c=\hbar^2/(2m)$ ([[def-nrqm-scattering-framework-short-range-model]] clause (c)).

1.1 For $r<a$ the reduced equation is $u_0''=-K^2u_0$, so its nonzero real regular solution is $u_0(r)=A\sin(Kr)$, $A\ne0$, with $u_0(0)=0$; the normalization in [F1] corresponds to $A=1/K$. For $r>a$ a nonzero real solution has the form $B\sin(kr+\delta_0)$ with real $B\ne0$. The regular solution and its derivative are absolutely continuous locally through the bounded step potential; integrating the radial equation across $a$ gives no jump of $u_0'$ or $u_0$. Thus $A\sin(Ka)=B\sin(ka+\delta_0)$ and $AK\cos(Ka)=Bk\cos(ka+\delta_0)$. [given, F1, algebra]

2.1 Put $X:=K\cos(Ka)$, $Y:=k\sin(Ka)$ and $z:=X+iY$. Since $k,K>0$ and sine and cosine cannot both vanish, $X^2+Y^2>0$. With $\theta:=ka+\delta_0$, the matching equations give $Bk\cos\theta=AX$, $Bk\sin\theta=AY$, hence $e^{2i\theta}=z/\overline z$ regardless of the real sign of $A/B$. Consequently $S_0(k)=e^{-2ika}\,(K\cos(Ka)+ik\sin(Ka))/(K\cos(Ka)-ik\sin(Ka))$ and $\delta_0=\arg z-ka$ modulo $\pi$, with a nonzero denominator for every positive energy and depth. This is also the actual Wronskian convention of [F1], since outside the well $W(u_0,e^{ikr})=-Bk e^{-i\delta_0}$. Where $\cos(Ka)\ne0$, the equivalent local formula is $\tan(ka+\delta_0)=(k/K)\tan(Ka)$; the complex formula remains valid when either matching value vanishes. [F1, F2, step 1.1, algebra]

3.1 Fix $U>0$ and put $\gamma:=\sqrt{2mU}/\hbar$, so $K=\sqrt{\gamma^2+k^2}$ and $K-\gamma=k^2/(K+\gamma)=O(k^2)$. If $\cos(\gamma a)\ne0$, choose the representative of $\theta$ tending to zero modulo $\pi$. The tangent is smooth near $\gamma a$, so $\tan\theta=(k/K)\tan(Ka)=k\tan(\gamma a)/\gamma+O(k^3)$. By [F2], $\tan\theta=\theta+O(\theta^3)$ near zero; first $\theta=O(k)$ and then $\theta=k\tan(\gamma a)/\gamma+O(k^3)$. Hence $\delta_0=-k a_{\mathrm{eff}}+O(k^3)$ modulo $\pi$, where $a_{\mathrm{eff}}:=a-\tan(\gamma a)/\gamma$, and [F1] gives $\sigma_0\to4\pi a_{\mathrm{eff}}^2$. The expansion uses locally bounded derivatives only where $\cos(\gamma a)\ne0$. [F1, F2, step 2.1, algebra]

4.1 At an exact threshold $\gamma a=\alpha_n:=(n+\tfrac12)\pi$, $n\ge0$, write $s_n:=\sin\alpha_n=(-1)^n$. The identity for $K-\gamma$ and [F2] give $K-\gamma=k^2/(2\gamma)+O(k^4)$, $X=K\cos(Ka)=-s_n a k^2/2+O(k^4)$ and $Y=k\sin(Ka)=s_n k+O(k^5)$. Thus $X/Y=-ak/2+O(k^3)$ and the angle of $X+iY$ tends to $\pi/2$ modulo $\pi$. Writing $\theta=\pi/2+\varepsilon$ modulo $\pi$, $\cot\theta=-\varepsilon+O(\varepsilon^3)$ gives $\varepsilon=ak/2+O(k^3)$, so $\delta_0=\pi/2-ak/2+O(k^3)$ modulo $\pi$. Therefore $k^2\sigma_0=4\pi\sin^2\delta_0\to4\pi$; the finite-scattering-length formula of step 3.1 does not apply at this depth. At zero energy the regular reduced solution is proportional to $\sin(\gamma r)$ inside and to the nonzero constant $s_n$ outside, with matching derivative zero at $a$. Its spatial form is proportional to $1/r$ outside and is not square integrable by [F3]; this is the zero-energy s-wave resonance meant here. [F1, F2, F3, step 2.1, algebra]

5.1 In the finite-length branch, as $\gamma a\uparrow\alpha_n$ from below, $\tan(\gamma a)\to+\infty$ and $a_{\mathrm{eff}}\to-\infty$; from above $a_{\mathrm{eff}}\to+\infty$. Thus the iterated low-energy reading $4\pi a_{\mathrm{eff}}^2$ diverges on either approach, while the exact-threshold law is step 4.1. Along nonresonant depth regimes with $\tan(\gamma a)/\gamma\to0$, $a_{\mathrm{eff}}\to a$ and the iterated low-energy reading tends to $4\pi a^2$, four times the geometric area $\pi a^2$. In particular at $\gamma a=n\pi$, $n\ge1$, $a_{\mathrm{eff}}=a$ and $\delta_0=-ka+O(k^3)$; the interior node tends to the boundary. This comparison holds along the stated depth regimes, rather than for every sequence of large depths. [F1, F2, step 3.1, step 4.1, algebra]

5.2 The bound-state interpretation has a separate negative-energy proof. Write $g:=\gamma a$. For $\alpha_n<g<(n+1)\pi$, define $f_g(x):=x\cot x+\sqrt{g^2-x^2}$ on $[\alpha_n,g]$. It is continuous, $f_g(\alpha_n)=\sqrt{g^2-\alpha_n^2}>0$ and $f_g(g)=g\cot g<0$; [F2] gives a root $x_g\in(\alpha_n,g)$. On that open interval $f_g'=\cot x-x\csc^2x-x/\sqrt{g^2-x^2}<0$, so the root is unique. Put $q:=x_g/a$, $\kappa:=\sqrt{g^2-x_g^2}/a>0$ and $u(r):=\sin(qr)$ for $r\le a$, $u(r):=\sin(qa)e^{-\kappa(r-a)}$ for $r\ge a$. Then $q^2+\kappa^2=\gamma^2$ and $q\cot(qa)=-\kappa$, so both $u$ and $u'$ match at $a$. The spatial function $\psi(x):=u(|x|)/|x|$, with value $q$ at zero, is nonzero and square integrable by [F3]; it is smooth near zero, decays exponentially at infinity and is piecewise smooth with matching first derivatives at $a$. Its weak derivatives through order two are square integrable, with no boundary delta term, hence $\psi\in W^{2,2}$. The radial identity $\Delta(u(r)/r)=u''(r)/r$ for $r>0$ gives $H\psi=-c\kappa^2\psi$, $c=\hbar^2/(2m)$, so normalization produces a genuine s-wave bound eigenvector. As $g\downarrow\alpha_n$, $0<\kappa a\le\sqrt{g^2-\alpha_n^2}\to0$, while for $g\le\alpha_n$ there is no matching root in this branch $x>\alpha_n$ with $x\le g$. Thus a new negative-energy s-wave branch appears just above each stated threshold, whose endpoint is the non-square-integrable zero-energy resonance in step 4.1; no assertion about other angular channels or the full bound-state count is needed. [F2, F3, step 4.1, algebra]

6.1 For the free consistency case $U=0$, $K=k$ and step 2.1 gives $S_0=e^{-2ika}(\cos ka+i\sin ka)/(\cos ka-i\sin ka)=1$, so $\delta_0=0$ modulo $\pi$ at every positive energy, including zeros of sine or cosine. At any positive-depth energy with $Ka=n\pi$, $n\ge1$, one has $Y=0$ and $X\ne0$, hence $S_0=e^{-2ika}$ and $\delta_0=-ka$ modulo $\pi$: this is exactly the exterior phase for the vanishing radial boundary condition of a hard sphere at that energy. If $\cos(Ka)=0$, the same formula gives $S_0=-e^{-2ika}$ and $\delta_0=\pi/2-ka$ modulo $\pi$. These checks complete the full positive-energy, zero-depth and matching-node cases together with the two low-energy branches above. [F1, F2, step 2.1, step 3.1, step 4.1, step 5.1, step 5.2, algebra] ∎

## Remarks

- **What is asserted.** The phase shift, both low-energy branches, the locally proved s-wave bound-state threshold and the
  hard-sphere comparison are exact consequences of the declared well and the
  channel vocabulary; no measured phase shift or cross section is reported,
  and no claim is made that the spherical square well describes any material
  target.
- **Idealisation.** The well is an idealised declared potential: it is
  discontinuous at $|x|=a$, and the depth comparisons of steps 4.1 and 5.1
  are limits inside the declared family of wells ($\gamma a\to(n+\frac12)\pi$
  or $\tan(\gamma a)/\gamma\to0$), not limits of a measured potential.
