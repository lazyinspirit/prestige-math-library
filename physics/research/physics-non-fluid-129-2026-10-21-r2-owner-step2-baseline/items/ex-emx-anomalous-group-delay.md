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
      locator: "§12.1, printed p. 12.2 (PDF p. 143), equations (12.9)–(12.10): dispersion and phase/group derivatives. Its subsequent statement that group velocity is universally bounded by c is explicitly not used."
---

## Statement

Take the finite Lorentz response with $\varepsilon_\infty=\varepsilon_0$, $\mu=\mu_0$, one oscillator $a=\varepsilon_0\omega_0^2$ in F m$^{-1}$ s$^{-2}$, and damping $\gamma=\omega_0/2$ in s$^{-1}$, where $\omega_0>0$ is an angular frequency in s$^{-1}$. For angular frequency $\omega>0$ in s$^{-1}$, let $\nu=\omega/\omega_0$; its relative absolute permittivity is

$$Z(\nu):=\frac{\varepsilon(\omega)}{\varepsilon_0}=1+\frac{1}{1-\nu^2-i\nu/2}.$$

For each $\nu>0$, define $n(\nu)$ to be the dimensionless square root of $Z(\nu)$ with positive real and positive imaginary parts, and define the complex wave number $k(\omega):=(\omega/c)n(\omega/\omega_0)$ in m$^{-1}$ for a harmonic field with spatial factor $e^{ikz}$, where $z$ is in m, $c$ is in m s$^{-1}$, and $+z$ is the propagation direction. Use standard right-handed Cartesian coordinates for the homogeneous transverse mode. The imaginary part of $k$ gives attenuation along $+z$. Define the narrowband group-delay derivative per unit length to be $d\,\operatorname{Re}k/d\omega$ in s m$^{-1}$; it is a local derivative of phase with respect to angular frequency. For a real temporal signal $f:\mathbb R\to\mathbb R$, define its support by $\operatorname{supp}f:=\overline{\{t\in\mathbb R:f(t)\ne0\}}$; if this support is nonempty and bounded below, its front time is $\inf\operatorname{supp}f$. The harmonic histories here are eternal and have no front time. At $\nu=1$, the group-delay derivative is negative. This derivative does not by itself determine a pulse's support front, which is a property of its full time-dependent signal.

## Statement references

[[pthm-emx-lorentz-susceptibility]]

[[post-em-material-closure]]

[[pthm-em-macroscopic-maxwell]]

[[def-em-si-conventions]]

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice, the one-oscillator Lorentz closure with the parameter choices in the Statement, the SI relation $\varepsilon_0\mu_0=c^{-2}$, and the source-free homogeneous transverse Maxwell branch. Use complex amplitudes only as the standard encoding of real harmonic fields.

[F3] Countable Choice and Dependent Choice are carried by the analytic-response supplier used for the passive Lorentz susceptibility ([[def-countable-choice]], [[def-dependent-choice]], [[pthm-emx-lorentz-susceptibility]]).

[A1] In the material rest frame, the susceptibility is $\varepsilon(\omega)=\varepsilon_\infty+a/(\omega_0^2-\omega^2-i\gamma\omega)$; with $\gamma>0$ its response is causal and has the stated analytic transfer under the integrable-kernel hypotheses ([[pthm-emx-lorentz-susceptibility]]).

[A2] The source-free macroscopic Maxwell curl equations are $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}H=\partial_tD$, with the constitutive quantities of the material model ([[pthm-em-macroscopic-maxwell]], clause (b); [[post-em-material-closure]]).

[F1] The SI constants satisfy $\varepsilon_0\mu_0=c^{-2}$ with $\varepsilon_0,\mu_0,c>0$ ([[def-em-si-conventions]], clause (a)).

[F2] Every positive real number has a unique positive square root; the product rule and total-derivative chain rule hold under the displayed smooth rational functions ([[thm-of-square-roots]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]).

[F4] For real vectors, $\mathbf k\times(\mathbf k\times e)=\langle\mathbf k,e\rangle\mathbf k-\langle\mathbf k,\mathbf k\rangle e$; the identity extends complex-bilinearly to amplitudes ([[lem-cm-cross-product-triple-identity]], [[def-euclidean-inner-product]]).

[F5] The complex exponential is defined by its everywhere-convergent power series and has derivative itself; the chain rule differentiates its real-linear spatial and temporal phase ([[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule-for-total-derivatives]]).

## Verification

**Proof technique:** derive the homogeneous transverse wave symbol, then differentiate the explicitly selected passive square-root branch at its carrier frequency.

1.1 At a real frequency $\omega>0$, set $\mathbf k=k\hat z$ and substitute the temporal factor $e^{-i\omega t}$ and spatial factor $e^{ikz}$ into [A2]; [F5] differentiates these phases, and the real cross product extends complex-bilinearly to amplitudes. The two curl equations give $\mathbf k\times e=\omega b$ and $\mathbf k\times h=-\omega\varepsilon(\omega)e$, with $b=\mu_0h$. For a transverse amplitude $\mathbf k\cdot e=0$, [F4] gives $(\mathbf k\cdot\mathbf k)e=\mu_0\varepsilon(\omega)\omega^2 e$. Since $e\ne0$, $k^2=\mu_0\varepsilon(\omega)\omega^2$; [F1] and the definition of $Z$ imply $k=(\omega/c)n$ on the selected square-root branch. Conversely, for this root take $e=\hat x$, $b=(k/\omega)\hat y$ and $h=b/\mu_0$. Then $\mathbf k\times e=\omega b$ and $\mathbf k\times h=-k^2e/(\mu_0\omega)=-\omega\varepsilon(\omega)e$, so it is realized by a nonzero transverse harmonic mode. As $\operatorname{Im}k>0$, $e^{ikz}=e^{-\operatorname{Im}(k)z}e^{i\operatorname{Re}(k)z}$ attenuates along $+z$. [given, A1, A2, F1, F3, F4, F5, algebra]

1.2 At $\nu=1$, $1-\nu^2-i\nu/2=-i/2$, hence $Z(1)=1+2i$. Write $n(1)=p+iq$ with $p,q>0$. Equating real and imaginary parts of $n(1)^2=1+2i$ gives $p^2-q^2=1$ and $2pq=2$, hence $(p^2+q^2)^2=(p^2-q^2)^2+(2pq)^2=5$ and $p^2+q^2=\sqrt5$. More generally, write $Z(\nu)=x(\nu)+iy(\nu)$; direct rationalization gives $y(\nu)=(\nu/2)/((1-\nu^2)^2+\nu^2/4)>0$. With $|Z|:=\sqrt{x^2+y^2}$, the selected root has $p(\nu)=\sqrt{(|Z|+x)/2}$ and $q(\nu)=\sqrt{(|Z|-x)/2}$. These are positive and continuous near $1$ by [F2]. From $(n(\nu)-n(1))(n(\nu)+n(1))=Z(\nu)-Z(1)$ and $n(\nu)+n(1)\to2n(1)\ne0$, the derivative is $n'(1)=Z'(1)/(2n(1))$. Put $D(\nu)=1-\nu^2-i\nu/2$. Differentiating $D(\nu)D(\nu)^{-1}=1$ by the product rule gives $Z'(1)=(2+i/2)/(-i/2)^2=-8-2i$, so $n'=(-4-i)/n$ at $1$. Because $1/n=(p-iq)/\sqrt5$, $\operatorname{Re}(n+n')=((\sqrt5-4)p-q)/\sqrt5<0$, since $p,q>0$ and $\sqrt5<4$. [given, A1, F2, algebra]

2.1 From $k=(\omega/c)n(\nu)$ and $\nu=\omega/\omega_0$, the chain and product rules give $\frac{d}{d\omega}\operatorname{Re}k=\frac1c\operatorname{Re}(n+\nu n')$. At $\nu=1$, this is negative by step 1.2 and $c>0$. Thus the conventional narrowband group-delay derivative is negative for this lossy causal model at that frequency. Its value does not give the support-front time of a pulse, which depends on the full time-domain signal; no front-speed or universal group-speed claim follows. [step 1.2, F2, algebra] ∎
