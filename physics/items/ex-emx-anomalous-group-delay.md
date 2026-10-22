---
id: ex-emx-anomalous-group-delay
kind: example
title: "Phase and group speeds are not causal fronts"
status: draft
origin: pipeline
domain: physics
dependency_level: 2
proof_strategy: direct
deps:
  - pthm-emx-lorentz-susceptibility
  - post-em-material-closure
  - pthm-em-macroscopic-maxwell
  - def-em-plane-wave-definition
  - def-em-si-conventions
  - def-countable-choice
  - def-dependent-choice
  - def-complex-exponential
  - def-euclidean-inner-product
  - lem-cm-cross-product-triple-identity
  - thm-of-square-roots
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-complex-exponential-is-entire-with-derivative-itself
dependency_roles:
  pthm-emx-lorentz-susceptibility: physical-result
  post-em-material-closure: physical-assumption
  pthm-em-macroscopic-maxwell: physical-result
  def-em-plane-wave-definition: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-cm-cross-product-triple-identity: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An exact narrowband dispersion calculation for one passive, damped Lorentz medium at a specified frequency. It shows that the local derivative of the real wave-number phase can be negative in this lossy model; it assigns no signal-front speed, energy velocity, empirical observation or universal group-velocity bound."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (236-page complete text)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§7.5.2–§7.5.3, printed pp. 194–199: phase and group quantities in dispersive media and the damped-oscillator response. The local calculation uses the lossy complex wave number and does not identify its phase derivative with a causal front."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS complete lecture script"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§12.1, printed p. 12.2 (PDF p. 143), equations (12.9)–(12.10): frequency-dependent permittivity and the wavenumber-frequency relation; the separate general phase/group-velocity discussion is §10.10 (PDF pp. 117–118), and its bound is not asserted here."
---

## Statement

Take the finite Lorentz response with $\varepsilon_\infty=\varepsilon_0$, $\mu=\mu_0$, one oscillator $a=\varepsilon_0\omega_0^2$ in F m$^{-1}$ s$^{-2}$, and damping $\gamma=\omega_0/2$ in s$^{-1}$, where $\omega_0>0$ is an angular frequency in s$^{-1}$. For angular frequency $\omega>0$ in s$^{-1}$, let $\nu=\omega/\omega_0$; its relative absolute permittivity is

$$Z(\nu):=\frac{\varepsilon(\omega)}{\varepsilon_0}=1+\frac{1}{1-\nu^2-i\nu/2}.$$

For each $\nu>0$, define $n(\nu)$ to be the dimensionless square root of $Z(\nu)$ with positive real and positive imaginary parts, and define the complex wave number $k(\omega):=(\omega/c)n(\omega/\omega_0)$ in m$^{-1}$ for a harmonic field with spatial factor $e^{ikz}$, where $z$ is in m, $c$ is in m s$^{-1}$, and $+z$ is the propagation direction. Use standard right-handed Cartesian coordinates $(\hat x,\hat y,\hat z)$ and let $\Omega=\mathbb R^3$, $I=\mathbb R$. Fix a real amplitude $E_0>0$ in V m$^{-1}$ and, with the real-part plane-wave convention, explicitly extended here to complex $k$, define the fields

$$E_\omega(x,y,z,t)=\operatorname{Re}\!\left(E_0\hat x\,e^{i(k(\omega)z-\omega t)}\right),\qquad B_\omega(x,y,z,t)=\operatorname{Re}\!\left(\frac{k(\omega)E_0}{\omega}\hat y\,e^{i(k(\omega)z-\omega t)}\right).$$

These are real $C^\infty$ maps $\Omega\times I\to\mathbb R^3$. Set $H_\omega=B_\omega/\mu_0$ and

$$D_\omega(x,y,z,t)=\operatorname{Re}\!\left(\varepsilon(\omega)E_0\hat x\,e^{i(k(\omega)z-\omega t)}\right),$$

the harmonic particular displacement response specified by the Lorentz susceptibility theorem. This is a formal source-free transverse bulk mode; no boundary condition or finite-energy property is asserted. The imaginary part of $k$ gives attenuation along $+z$. Define the narrowband group-delay derivative per unit length to be $d\,\operatorname{Re}k/d\omega$ in s m$^{-1}$; it is a local derivative of phase with respect to angular frequency. For a real temporal signal $f:\mathbb R\to\mathbb R$, define its support by $\operatorname{supp}f:=\overline{\{t\in\mathbb R:f(t)\ne0\}}$; if this support is nonempty and bounded below, its front time is $\inf\operatorname{supp}f$. The nonzero harmonic histories at each fixed spatial point are eternal and have support $\mathbb R$, hence have no front time. At $\nu=1$, the group-delay derivative is negative. This derivative does not by itself determine a pulse's support front, which is a property of its full time-dependent signal.

## Statement references

[[pthm-emx-lorentz-susceptibility]]

[[def-em-plane-wave-definition]]

[[post-em-material-closure]]

[[pthm-em-macroscopic-maxwell]]

[[def-em-si-conventions]]

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice, the one-oscillator Lorentz closure with the parameter choices in the Statement, the SI relation $\varepsilon_0\mu_0=c^{-2}$, and the source-free homogeneous transverse Maxwell branch. Use complex amplitudes only as the standard encoding of real harmonic fields.

[F3] Countable Choice and Dependent Choice are carried by the analytic-response supplier used for the passive Lorentz susceptibility ([[def-countable-choice]], [[def-dependent-choice]], [[pthm-emx-lorentz-susceptibility]]).

[A1] In the material rest frame, the absolute oscillator susceptibility is $\chi_{\mathrm{abs}}(\omega)=a/(\omega_0^2-\omega^2-i\gamma\omega)$ and the absolute permittivity is $\varepsilon(\omega)=\varepsilon_\infty+\chi_{\mathrm{abs}}(\omega)$; with $\gamma>0$ the oscillator response is causal and has the stated analytic transfer under the integrable-kernel hypotheses ([[pthm-emx-lorentz-susceptibility]]).

[A2] For zero free sources, the smooth macroscopic Maxwell equations are $\operatorname{div}D=0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}H=\partial_tD$, with the constitutive quantities of the material model ([[pthm-em-macroscopic-maxwell]], clause (b); [[post-em-material-closure]]).

[F1] The SI constants satisfy $\varepsilon_0\mu_0=c^{-2}$ with $\varepsilon_0,\mu_0,c>0$ ([[def-em-si-conventions]], clause (a)).

[F2] Every positive real number has a unique positive square root; the product rule and total-derivative chain rule hold under the displayed smooth rational functions ([[thm-of-square-roots]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]).

[F4] The coordinate identity $\mathbf k\times(\mathbf k\times e)=\langle\mathbf k,e\rangle\mathbf k-\langle\mathbf k,\mathbf k\rangle e$ holds for real vectors and extends to complex vectors because both sides are polynomial in their coordinates; all complex dot and cross products here are extended complex-bilinearly ([[lem-cm-cross-product-triple-identity]], [[def-euclidean-inner-product]]).

[F5] The complex exponential is defined by its everywhere-convergent power series and has derivative itself; the chain rule differentiates its real-linear spatial and temporal phase ([[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule-for-total-derivatives]]).

[F6] The plane-wave definition uses the real-part encoding $E=\operatorname{Re}(e\,e^{i(k\cdot x-\omega t)})$, $B=\operatorname{Re}(b\,e^{i(k\cdot x-\omega t)})$ on $\mathbb R^3\times\mathbb R$; this Statement specifies its extension to complex $k$, defines the resulting real field maps, and uses complex-bilinear dot and cross products ([[def-em-plane-wave-definition]]).

## Verification

**Proof technique:** derive the homogeneous transverse wave symbol, then differentiate the explicitly selected passive square-root branch at its carrier frequency.

1.1 At a real frequency $\omega>0$, set $\mathbf k=k\hat z$ and substitute the temporal factor $e^{-i\omega t}$ and spatial factor $e^{ikz}$ of the Statement into [A2]; [F5] differentiates these phases, and [F6] fixes the real-field encoding, extended to this complex wavevector. The two curl equations give $\mathbf k\times e=\omega b$ and $\mathbf k\times h=-\omega\varepsilon(\omega)e$, with $b=\mu_0h$. For a transverse amplitude $\mathbf k\cdot e=0$, [F4] gives $(\mathbf k\cdot\mathbf k)e=\mu_0\varepsilon(\omega)\omega^2 e$. Since $e\ne0$, $k^2=\mu_0\varepsilon(\omega)\omega^2$; [F1] and the definition of $Z$ imply $k=(\omega/c)n$ on the selected square-root branch. Conversely, for this root take $e=E_0\hat x$, $b=(kE_0/\omega)\hat y$ and $h=b/\mu_0$. Then $\mathbf k\times e=\omega b$ and $\mathbf k\times h=-k^2e/(\mu_0\omega)=-\omega\varepsilon(\omega)e$. Also $\mathbf k\cdot e=\mathbf k\cdot b=0$, so the divergence amplitudes of $D$ and $B$ vanish. Thus the fields in the Statement realize the source-free transverse harmonic mode. As $\operatorname{Im}k>0$, $e^{ikz}=e^{-\operatorname{Im}(k)z}e^{i\operatorname{Re}(k)z}$ attenuates along $+z$. [given, A1, A2, F1, F3, F4, F5, F6, algebra]

1.2 At $\nu=1$, $1-\nu^2-i\nu/2=-i/2$, hence $Z(1)=1+2i$. Write the selected root as $n(1)=p+iq$ with $p,q>0$. Equating real and imaginary parts gives $p^2-q^2=1$ and $2pq=2$, hence $(p^2+q^2)^2=(p^2-q^2)^2+(2pq)^2=5$ and $p^2+q^2=\sqrt5$. For general $\nu>0$, write $Z(\nu)=x(\nu)+iy(\nu)$; rationalization gives $y(\nu)=(\nu/2)/((1-\nu^2)^2+\nu^2/4)>0$. Put $r(\nu)=\sqrt{x(\nu)^2+y(\nu)^2}$. Then $r(\nu)^2-x(\nu)^2=y(\nu)^2>0$, so $r(\nu)>|x(\nu)|$ and both $(r+x)/2$ and $(r-x)/2$ are positive. Define $p(\nu)=\sqrt{(r+x)/2}$ and $q(\nu)=\sqrt{(r-x)/2}$. These satisfy $p^2-q^2=x$ and $(2pq)^2=r^2-x^2=y^2$; since $p,q,y>0$, $2pq=y$, so $(p+iq)^2=Z$. For any other root $p_0+iq_0$ with $p_0,q_0>0$, the same equations imply $(p_0^2+q_0^2)^2=x^2+y^2=r^2$, hence $p_0^2+q_0^2=r$ and $p_0^2=(r+x)/2$, $q_0^2=(r-x)/2$; positivity gives $p_0=p$, $q_0=q$. The rational functions $x,y$ are continuous for $\nu>0$; the positive square root is continuous at each positive $u_0$, since $|\sqrt u-\sqrt{u_0}|=|u-u_0|/(\sqrt u+\sqrt{u_0})\le |u-u_0|/\sqrt{u_0}$ for $u>0$. Applying this to $r$ and to the positive arguments $(r\pm x)/2$ proves that $p,q$, hence $n$, are continuous near $1$. Therefore $n(\nu)+n(1)\to2n(1)\ne0$, and the difference quotient identity $(n(\nu)-n(1))/ (\nu-1)=(Z(\nu)-Z(1))/((\nu-1)(n(\nu)+n(1)))$ gives $n'(1)=Z'(1)/(2n(1))$. Set $D(\nu)=1-\nu^2-i\nu/2$. Viewing $\mathbb C$ as $\mathbb R^2$, the real product rule applied to $D D^{-1}=1$ gives $Z'(1)=-D'(1)/D(1)^2=(2+i/2)/(-i/2)^2=-8-2i$. Thus $n'=(-4-i)/n$ at $1$, and $1/n=(p-iq)/\sqrt5$ gives $\operatorname{Re}(n+n')=((\sqrt5-4)p-q)/\sqrt5<0$, since $p,q>0$ and $\sqrt5<4$. [given, A1, F2, algebra]

2.1 From $k=(\omega/c)n(\nu)$ and $\nu=\omega/\omega_0$, the chain and product rules give $\frac{d}{d\omega}\operatorname{Re}k=\frac1c\operatorname{Re}(n+\nu n')$. At $\nu=1$, this is negative by step 1.2 and $c>0$. Thus the conventional narrowband group-delay derivative is negative for this lossy causal model at that frequency. Its value does not give the support-front time of a pulse, which depends on the full time-domain signal; no front-speed or universal group-speed claim follows. [step 1.2, F2, algebra] ∎
