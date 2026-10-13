---
id: def-nrqm-approximations-framework-wkb-regime-model
aliases: [ nrqm-approximations-framework-wkb-regime-model ]
kind: definition
domain: physics
title: "The declared WKB regime model: nondimensionalised line equation, turning
  points, phase integrals and the declared barrier transmission reading"
status: draft
origin: session
dependency_level: 11
deps:
  [
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-potentials-one-dimensional-line-model,
    lem-nrqm-approximations-scaled-line-model-correspondence,
    thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error,
    def-countable-choice,
    def-axiom-of-choice
  ]
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
physical_scope: "The WKB regime model of a declared spinless one-dimensional
  massive particle: a compactly supported C^5 potential in the declared line
  model, declared reference length and energy scales, the nondimensionalised
  stationary equation with explicit dimensionless semiclassical parameter h, the
  turning-point, allowed-region and forbidden-region vocabulary, the WKB phase
  integral and the declared barrier transmission reading. The definition asserts
  no approximation error (that belongs to the page's theorems), no detector, no
  wave packet and no laboratory potential; it states the exact
  nondimensionalisation correspondence proved by the cited lemma."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 11.6
        printed pages 253-254 (PDF pages 261-262): the WKBJ equation with k^2 =
        2m(E-V)/hbar^2, the phase phi = int k dx, the slowly varying condition
        and the flux-conserving WKBJ wavefunction"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin,
        author-hosted course text), Sections 5.4-5.6 printed and PDF pages
        70-75: 5.4 WKB Approximation pp. 70-72, 5.5 Cold Emission pp. 72-73, 5.6
        Alpha Decay pp. 73-75 (WKB wavefunctions in allowed and forbidden
        regions, turning points and barrier transmission)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 9.7 printed pages 214-220 (PDF pages 226-232): the spectra and
        relative bounds and spectra of one-dimensional Schrodinger operators
        (background only; no Airy connection or barrier-transmission theorem)"
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
on every interval $I$. The exact transfer of the square-root action integrals
over a subinterval $[x_a,x_b]=\ell[a,b]$ is, when the indicated strict sign
holds throughout $[a,b]$,
$$\frac1\hbar\int_{x_a}^{x_b}\sqrt{2m(V(x)-E)}\,dx=\frac1h\int_a^b\sqrt{W(\xi)-\lambda}\,d\xi\quad\text{if }W-\lambda>0,$$
$$\frac1\hbar\int_{x_a}^{x_b}\sqrt{2m(E-V(x))}\,dx=\frac1h\int_a^b\sqrt{\lambda-W(\xi)}\,d\xi\quad\text{if }\lambda-W>0;$$
these are respectively clauses (b)(i) and (b)(ii) of
[[lem-nrqm-approximations-scaled-line-model-correspondence]]. The pair calls
$h$ the model's **semiclassical parameter** and calls
$h\ll1$ the **semiclassical regime**; the physical content of the regime is
$\hbar\ll\ell\sqrt{2mE_\star}$, and every statement of the page's theorems is
an exact statement about the family indexed by $h$, with the error bounds
stated at each $h$. For the mathematical small-$h$ limit, hold the dimensionless profile $W$ and energy $\lambda$ fixed and vary the parameter in $u''=(W-\lambda)u/h^2$. A corresponding physical family with fixed $m,E_\star,\hbar$ is obtained by taking $\ell_h=\hbar/(h\sqrt{2mE_\star})$ and $V_h(x)=E_\star W(x/\ell_h)$, with $E=E_\star\lambda$; the physical width then changes, while the natural action constant does not. A single originally chosen $V,\ell,E_\star$ supplies one member of this family.

**(c) Turning points, regions and phase.** For the data $(W,\lambda)$ put
$$\tau:=\{\xi\in\mathbb R: W(\xi)=\lambda\}$$
for the set of **turning points**. A point $\xi_{0}\in\tau$ is **simple** when
$W'(\xi_{0})\ne0$. An open interval $J$ is an **allowed interval** when
$W(\xi)-\lambda<0$ on $J$ (the dimensionless kinetic energy $-(W-\lambda)$ is
positive there), a **forbidden interval** when $W(\xi)-\lambda>0$ on
$J$. On an allowed interval the model uses the positive scaled momentum
$$p(\xi):=\sqrt{\lambda-W(\xi)}>0$$
with local wavenumber $k_h(\xi):=p(\xi)/h$ in the coordinate $\xi$
and WKB phase $\theta_h(\xi):=h^{-1}\int_{\xi_{\mathrm{ref}}}^{\xi}p(s)\,ds$
with a declared base point; on a forbidden interval the model uses
$\kappa(\xi):=\sqrt{W(\xi)-\lambda}>0$. The **dimensionless forbidden action** of a forbidden
interval $[\xi_{a},\xi_{b}]$ is
$$S:=\int_{\xi_{a}}^{\xi_{b}}\sqrt{W(\xi)-\lambda}\,d\xi =\frac{h}{\hbar}\int_{x_{a}}^{x_{b}}\sqrt{2m(V(x)-E)}\,dx,$$
The **WKB exponent** is $S/h$, the physical action in units of $\hbar$. For a
barrier whose endpoints are simple turning points, the strict-sign hypothesis
of clause (b)(i) fails at those endpoints; apply that clause on
$[\xi_a+\delta,\xi_b-\delta]$ and let $\delta\downarrow0$. Both integrands
extend continuously with value zero at the endpoints, so the omitted endpoint
integrals tend to zero. The
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

**(d) Declared barrier transmission reading.** Under (W2), $\lambda>0$ because $W=0$ outside its compact support. Choose $R>0$ with $\operatorname{supp}W\subset(-R,R)$ and put $p_\infty:=\sqrt\lambda$. The declared scattering solution is the exact $C^2$ solution of the dimensionless equation with boundary conditions
$$u_h(\xi)=p_\infty^{-1/2}\bigl(e^{ip_\infty\xi/h}+r(h)e^{-ip_\infty\xi/h}\bigr)\quad(\xi\le-R),\qquad u_h(\xi)=p_\infty^{-1/2}t(h)e^{ip_\infty\xi/h}\quad(\xi\ge R).$$
Thus there is one incoming wave from the left and none from the right. These data determine unique amplitudes by [[thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error]], instantiated with its mass parameter $1/2$, potential $W$ and energy $\lambda$. Define the reference current $J_h(u):=h\operatorname{Im}(\overline u\,u')$: the normalized exterior waves have currents $\pm1$. The transmission coefficient is $T(h):=|t(h)|^2$, the ratio of transmitted to incoming reference current. The physical line-model current is a positive common multiple of $J_h$ under clause (b), so its ratio is also $T(h)$. Airy/WKB matching computes this exact boundary-defined quantity; it does not define an additional approximate scattering solution. No detector, wave packet, scattering experiment or measured count is asserted, and this clause does not by itself assert an asymptotic formula for $T(h)$.

**(e) Scope.** The model concerns a declared spinless massive particle in the
declared one-dimensional line model with a compactly supported $C^{5}$
potential, at a fixed energy, in the nondimensionalised family of clause (b).
It asserts nothing about two- or three-dimensional scattering, about singular
or non-smooth potentials, about wave packets, detectors or measurements, and
about any laboratory realization of the line model, the potential $V$ or the
energy $E$.
