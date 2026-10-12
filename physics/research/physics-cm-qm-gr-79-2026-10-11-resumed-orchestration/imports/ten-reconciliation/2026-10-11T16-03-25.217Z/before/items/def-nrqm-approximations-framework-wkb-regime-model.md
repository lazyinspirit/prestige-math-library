---
id: def-nrqm-approximations-framework-wkb-regime-model
aliases: [nrqm-approximations-framework-wkb-regime-model]
kind: definition
domain: physics
title: "The declared WKB regime model: nondimensionalised line equation, turning points, phase integrals and the declared barrier transmission reading"
status: draft
origin: session
dependency_level: 10
deps: [post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-potentials-one-dimensional-line-model, lem-nrqm-approximations-scaled-line-model-correspondence, thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  lem-nrqm-approximations-scaled-line-model-correspondence: mathematical-premise
  thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The WKB regime model of a declared spinless one-dimensional massive particle: a compactly supported C^5 potential in the declared line model, declared reference length and energy scales, the nondimensionalised stationary equation with explicit dimensionless semiclassical parameter h, the turning-point, allowed-region and forbidden-region vocabulary, the WKB phase integral and the declared barrier transmission reading. The definition asserts no approximation error (that belongs to the page's theorems), no detector, no wave packet and no laboratory potential; it states the exact nondimensionalisation correspondence proved by the cited lemma."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 11.6 printed pages 253-254 (PDF pages 261-262): the WKBJ equation with k^2 = 2m(E-V)/hbar^2, the phase phi = int k dx, the slowly varying condition and the flux-conserving WKBJ wavefunction"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Sections 5.4-5.6 printed and PDF pages 70-75: 5.4 WKB Approximation pp. 70-72, 5.5 Cold Emission pp. 72-73, 5.6 Alpha Decay pp. 73-75 (WKB wavefunctions in allowed and forbidden regions, turning points and barrier transmission)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.7 printed pages 214-220 (PDF pages 226-232): the spectra and asymptotic behaviour of one-dimensional Schrodinger operators, one turning point and the transmission setup"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data and line model.** Adopt P1, P2, P4 and P5
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]), the
state and observable readings cited there, and the declared effective
one-dimensional line model
[[def-nrqm-potentials-one-dimensional-line-model]] with a mass parameter
$m>0$, spin label $s=0$, action constant $\hbar>0$ and units from
[[def-nrqm-framework-quantities-and-units]]
([[def-nrqm-kinematics-framework-massive-spin-s-model]]). Assume the Axiom of
Countable Choice and the Axiom of Choice as the choice hypotheses of the cited
mathematical suppliers ([[def-countable-choice]],
[[def-axiom-of-choice]]). Fix a real potential
$$V\in C_c^{5}(\mathbb R;\mathbb R)$$
(five times continuously differentiable with compact support); it is real,
bounded and measurable, so the line model's assigned energy operator $H_{V}$
of its clause (c) is defined with domain $D(H_{V})=W^{2,2}(\mathbb R;\mathbb
C)$, acts by $H_{V}f=-\frac{\hbar^{2}}{2m}D^{2}f+Vf$, and its stationary
equation at energy $E$ reads
$$-\frac{\hbar^{2}}{2m}\,\psi''+V\psi=E\psi$$
for classically $C^{2}$ solutions.

**(b) Reference scales and nondimensionalisation.** As an additional model
assumption of the pair fix a **reference length** $\ell>0$ (metres) and a
**reference energy** $E_\star>0$ (joules), and put
$$W(\xi):=\frac{V(\ell\xi)}{E_\star},\qquad \lambda:=\frac{E}{E_\star},\qquad h:=\frac{\hbar}{\ell\sqrt{2mE_\star}} .$$
Then $W\in C_c^{5}(\mathbb R;\mathbb R)$ is dimensionless with support scaled by
$\ell$, and $h>0$ is dimensionless. By
[[lem-nrqm-approximations-scaled-line-model-correspondence]] the physical
stationary equation of clause (a) at energy $E$ is equivalent, under
$x=\ell\xi$, $\psi(\ell\xi)=u(\xi)$, to the **dimensionless WKB equation**
$$u''(\xi)=\frac{W(\xi)-\lambda}{h^{2}}\,u(\xi),\qquad \xi\in I,$$
on every interval $I$, and the physical WKB phase integral over a subinterval
$[x_{a},x_{b}]=\ell[a,b]$ with $V>E$ (respectively $V<E$) equals $1/h$ times
the corresponding dimensionless integral, as stated in clause (b) of that
lemma. The pair calls $h$ the model's **semiclassical parameter** and calls
$h\ll1$ the **semiclassical regime**; the physical content of the regime is
$\hbar\ll\ell\sqrt{2mE_\star}$, and every statement of the page's theorems is
an exact statement about the family indexed by $h$, with the error bounds
stated at each $h$.

**(c) Turning points, regions and phase.** For the data $(W,\lambda)$ put
$$\tau:=\{\xi\in\mathbb R: W(\xi)=\lambda\}$$
for the set of **turning points**. A point $\xi_{0}\in\tau$ is **simple** when
$W'(\xi_{0})\ne0$. An open interval $J$ is an **allowed interval** when
$W(\xi)-\lambda<0$ on $J$ (the dimensionless kinetic energy $-(W-\lambda)$ is
positive there), a **forbidden interval** when $W(\xi)-\lambda>0$ on
$J$. On an allowed interval the model uses the local wavenumber
$$p(\xi):=\sqrt{\lambda-W(\xi)}>0$$
and the WKB phase $\theta(\xi):=\int_{\xi_{\mathrm{ref}}}^{\xi}p(s)\,ds$ with a
declared base point; on a forbidden interval the model uses
$\kappa(\xi):=\sqrt{W(\xi)-\lambda}>0$. The **WKB exponent** of a forbidden
interval $[\xi_{a},\xi_{b}]$ is
$$S:=\int_{\xi_{a}}^{\xi_{b}}\sqrt{W(\xi)-\lambda}\,d\xi =\frac{h}{\hbar}\int_{x_{a}}^{x_{b}}\sqrt{2m(V(x)-E)}\,dx,$$
equivalently $S/h$ is the physical action in units of $\hbar$, by the lemma's clause (b) with $\xi_{a,b}=x_{a,b}/\ell$. The
three declared regime hypotheses used by the page are:

(W1) **Allowed-interval regularity**: $W\in C^{2}$ on a neighbourhood of
$[a,b]$ and $\lambda-W\ge\delta>0$ on $[a,b]$ for some $\delta>0$ (no turning
point in the interval; the interval is allowed);

(W2) **Separated simple turning points**: $W-\lambda$ has exactly two zeros
$\xi_{a}<\xi_{b}$ in $\mathbb R$, both simple, is positive on
$(\xi_{a},\xi_{b})$ and negative on the complement of $[\xi_{a},\xi_{b}]$
(equivalently the physical barrier $V-E$ has exactly two simple zeros
surrounding a forbidden region and is negative outside);

(W3) **Single simple turning point**: on an interval $[\xi_{0}-r,\xi_{0}+s]$
the equation $W-\lambda$ has the single zero $\xi_{0}$, it is simple, and
$W-\lambda<0$ on one side and $>0$ on the other.

**(d) Declared barrier transmission reading.** For $\ell$, $E_\star$, $m$,
$\hbar$, $V$, $E$ satisfying (W2), the model declares a **declared scattering
solution** at energy $E$ to be a solution $u$ of the dimensionless equation
which is oscillatory on both outer allowed sides with in-going/out-going WKB
amplitudes fixed by the matching construction of
[[thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error]], and
declares the **transmission coefficient** $T(h)$ to be the modulus-squared
ratio of the out-going to the in-going amplitude in that normalization
(equivalently, in the model's reading, the transmitted fraction of the
reference probability current). This is a declared model quantity of the
matching construction; no detector, wave packet, scattering experiment or
measured count is asserted, and clause (d) does not by itself assert any
formula for $T(h)$.

**(e) Scope.** The model concerns a declared spinless massive particle in the
declared one-dimensional line model with a compactly supported $C^{5}$
potential, at a fixed energy, in the nondimensionalised family of clause (b).
It asserts nothing about two- or three-dimensional scattering, about singular
or non-smooth potentials, about wave packets, detectors or measurements, and
about any laboratory realization of the line model, the potential $V$ or the
energy $E$.
