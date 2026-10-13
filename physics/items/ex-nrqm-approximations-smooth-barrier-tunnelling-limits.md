---
id: ex-nrqm-approximations-smooth-barrier-tunnelling-limits
aliases: [ nrqm-approximations-smooth-barrier-tunnelling-limits ]
kind: example
domain: physics
title: "Tunnelling asymptotic limits: the smooth-barrier semiclassical limit and
  the exact rectangular prefactor comparison"
status: draft
origin: session
dependency_level: 14
deps:
  [
    pthm-nrqm-approximations-barrier-transmission-asymptotics,
    def-nrqm-approximations-framework-wkb-regime-model,
    lem-nrqm-approximations-scaled-line-model-correspondence,
    pthm-nrqm-potentials-barrier-flux-and-transmission,
    def-nrqm-potentials-one-dimensional-line-model,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  pthm-nrqm-approximations-barrier-transmission-asymptotics: physical-result
  def-nrqm-approximations-framework-wkb-regime-model: formulation-prerequisite
  lem-nrqm-approximations-scaled-line-model-correspondence: mathematical-premise
  pthm-nrqm-potentials-barrier-flux-and-transmission: physical-result
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Two asymptotic statements about declared one-dimensional
  barrier transmission data: the semiclassical limit of the smooth compactly
  supported barrier of the WKB regime model, in which the ratio of the declared
  transmission coefficient to exp(-2S/h) tends to one; and the exact
  thick-barrier limit of the rectangular wall model, whose profile-dependent
  limit prefactor is 16E(U-E)/U^2 and can differ from one, showing that the
  exponential law alone does not determine the prefactor and that rectangular
  walls are outside the smooth-barrier theorem. No measured transmission,
  detector, sample or apparatus is asserted."
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin,
        author-hosted course text), Sections 5.3-5.6 printed and PDF pages
        64-75: 5.3 Square Potential Barrier p. 64 (the exact rectangular
        transmission), 5.4-5.6 (the WKB barrier exponent)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 5.3
        printed pages 87-89 (PDF pages 95-97): tunnelling through a potential
        barrier and the thick-barrier exponential suppression"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Adopt the declared one-dimensional line model
[[def-nrqm-potentials-one-dimensional-line-model]] and the WKB regime model
[[def-nrqm-approximations-framework-wkb-regime-model]] with their framework
postulates
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]),
with units as in [[def-nrqm-framework-quantities-and-units]]. Then:

(a) *Smooth-barrier semiclassical limit.* Let $V,m,\hbar,\ell,E_\star,E,W,
\lambda,h$ be data of the WKB regime model satisfying its hypothesis (W2),
with exponent $S=\int_{\xi_{a}}^{\xi_{b}}\sqrt{W-\lambda}\,d\xi$ and declared
transmission coefficient $T(h)$. At fixed dimensionless barrier data $(W,\lambda)$, there are $h_0>0$,
$0\le\varepsilon(h)\le C_{1}h$ for $0<h<h_0$, and $0\le C_{0}<\infty$,
depending only on the fixed barrier data and matching sections, such that
$$\Bigl|T(h)e^{2S/h}-1\Bigr| \le\frac{C_{0}[\varepsilon(h)+e^{-2S/h}]}{1-C_{0}[\varepsilon(h)+e^{-2S/h}]}$$
for $0<h<h_0$ whenever the denominator is positive; in particular
$$\lim_{h\downarrow0}T(h)e^{2S/h}=1,$$
and the physical reading of the limit is the exponential law
$T\approx\exp\bigl(-\frac2\hbar\int_{x_{a}}^{x_{b}}\sqrt{2m(V-E)}\,dx\bigr)$
with prefactor tending to one;

(b) *Rectangular thick-barrier limit.* Fix $m,\hbar,E,U$ with $U>E>0$ and vary
the wall width $a\to\infty$ (equivalently, $\kappa a\to\infty$). For the
**rectangular wall model**
excluded by the smooth theorem, take the exact scattering solution of the
line model with $V(x)=U$ for $0<x<a$ and $V=0$ otherwise, $U>E>0$,
$k=\sqrt{2mE}/\hbar$, $\kappa=\sqrt{2m(U-E)}/\hbar$ and exact transmission
$$T_{\rm rect}=\Bigl[1+\frac{U^{2}\sinh^{2}(\kappa a)}{4E(U-E)}\Bigr]^{-1};$$
then, in this fixed-parameter limit,
$$\frac{T_{\rm rect}}{e^{-2\kappa a}}\longrightarrow \frac{16E(U-E)}{U^{2}}=\frac{16k^{2}\kappa^{2}}{(k^{2}+\kappa^{2})^{2}},$$
so in the rectangular model the exponential law holds with the profile-dependent
prefactor $16E(U-E)/U^{2}$; the exponent $2\kappa a$ equals the classical
WKB exponent $2B/\hbar$ of the rectangular barrier, and the limit shows that
the exponential alone does not determine the prefactor;

(c) *Reading of the comparison.* Statement (a) is a theorem about smooth
compactly supported barriers with separated simple turning points, and its
prefactor-one conclusion uses the Airy matching of that class; statement (b)
is an exact model computation for a piecewise constant wall, whose sharp
discontinuities are precisely why it is excluded from (a). Neither statement
asserts a measured transmission, a detector response, a wave packet or an
apparatus; both are conditional statements about the declared
one-dimensional models.

## Verification

**Given:** the WKB regime model with hypothesis (W2) and its declared
transmission coefficient; the rectangular wall data $a>0$, $U>E>0$ and
constants $k,\kappa$; the Axiom of Countable Choice and the Axiom of Choice
as the choice hypotheses of the cited suppliers.

[L1] **Smooth-barrier theorem.** For every smooth compactly supported
$C^{5}$ barrier with exactly two separated simple turning points, the
there exist $h_0>0$ and fixed constants such that the declared transmission
coefficient obeys the quantitative bound displayed in part (a) for
$0<h<h_0$ with positive denominator, and the limit
$\lim_{h\downarrow0}T(h)e^{2S/h}=1$
([[pthm-nrqm-approximations-barrier-transmission-asymptotics]]).

[L2] **Exact rectangular transmission.** For the piecewise constant wall
$V=U$ on $(0,a)$ and $V=0$ otherwise with $U>E>0$, the declared scattering
solution has the incident reference amplitude
$A_{\mathrm{in}}=1\,\mathrm{m}^{-1/2}$ and the unique transmission asymptotics
$\psi=A_{\mathrm{in}}t\,e^{ikx}$ for $x>a$, where $t$ is the dimensionless
amplitude ratio $t=2e^{-ika}/D$ with
$D=2\cosh(\kappa a)+i(\kappa/k-k/\kappa)\sinh(\kappa a)$, and
$T_{\rm rect}=|t|^{2}=[1+U^{2}\sinh^{2}(\kappa a)/(4E(U-E))]^{-1}$
([[pthm-nrqm-potentials-barrier-flux-and-transmission]] clauses (a), (c),
[[def-nrqm-potentials-one-dimensional-line-model]]).

[L3] **Elementary limits.** With $m,\hbar,E,U$ fixed and $a\to\infty$,
$\kappa=\sqrt{2m(U-E)}/\hbar$ is fixed and $\kappa a\to\infty$.
$\sinh(x)=(e^{x}-e^{-x})/2$, so
$\sinh^{2}(\kappa a)e^{-2\kappa a}\to1/4$;
$E=\hbar^{2}k^{2}/(2m)$ and $U-E=\hbar^{2}\kappa^{2}/(2m)$, so
$16E(U-E)/U^{2}=16k^{2}\kappa^{2}/(k^{2}+\kappa^{2})^{2}$.

**Proof technique:** direct; read the smooth-barrier limit from the page's
theorem and compute the rectangular thick-barrier limit from the exact
closed form by elementary asymptotics.

**Given:** the data of the Example and [L1]-[L3].

1.1 [Smooth limit] Applying [L1] at fixed $(W,\lambda)$ for $0<h<h_0$ with positive denominator gives the quantitative bound and, because the right-hand side tends to $0$ as $h\downarrow0$ at fixed barrier data, the limit $\lim_{h\downarrow0}T(h)e^{2S/h}=1$. The physical exponent identity $S/h=(1/\hbar)\int_{x_a}^{x_b}\sqrt{2m(V-E)}\,dx$ is the endpoint-extended identity of clause (c) of the WKB regime model: the scaled-line lemma applies on closed subintervals strictly between the turning points, and continuity extends the integrals to their endpoints. This is (a). [L1, given, algebra]

1.2 [Rectangular limit] Put $A:=U^2/(4E(U-E))>0$ and $t:=\kappa a$. By [L2], $T_{\rm rect}=[1+A\sinh^2 t]^{-1}$, hence $T_{\rm rect}e^{2t}=[e^{-2t}+A\sinh^2(t)e^{-2t}]^{-1}$. With $m,\hbar,E,U$ fixed and $a\to\infty$, [L3] gives the denominator limit $A/4>0$, so $T_{\rm rect}e^{2t}\to4/A=16E(U-E)/U^2$. Substituting $E=\hbar^2k^2/(2m)$ and $U-E=\hbar^2\kappa^2/(2m)$ gives $16E(U-E)/U^2=16k^2\kappa^2/(k^2+\kappa^2)^2$, as asserted in (b). [L2, L3, algebra]

2.1 [Exponent comparison and scope] For the rectangular wall the classical WKB exponent is $\frac2\hbar\int_{0}^{a}\sqrt{2m(U-E)}\,dx=2\kappa a$, which equals the exponent of the limit in step 1.2, so the two models share the exponential law but can differ in the prefactor; the rectangular prefactor $16y(1-y)$, with $y=E/U\in(0,1)$, equals one exactly when $y=(2\pm\sqrt3)/4$. Statement (a) is restricted to the smooth class by its hypotheses, and statement (b) is the exact wall computation in the fixed-parameter thick-wall limit. No measured transmission, detector, packet or apparatus entered either computation. This is (c). [step 1.1, step 1.2, L1, L2, given, algebra] ∎

## Remarks

- **Why the prefactors can differ.** For the smooth barrier the Airy matching
  across the two simple turning points produces the transmitted amplitude
  with prefactor $1+O(\varepsilon)$; the wall's discontinuities replace the
  Airy matching by exact algebraic matching, whose limit carries the
  profile-dependent factor $16E(U-E)/U^{2}$. Writing $y=E/U\in(0,1)$,
  this factor equals one when $y=(2\pm\sqrt3)/4$ and differs from one for
  other admissible ratios; the example compares model limits and claims no
  measured value.
- **Regime of validity.** The limit in (a) is taken in the model's
  semiclassical parameter $h$ at fixed barrier data; the limit in (b) is
  taken in the wall thickness $\kappa a$ at fixed $E,U$. Both are asymptotic
  statements about the declared one-dimensional models.
