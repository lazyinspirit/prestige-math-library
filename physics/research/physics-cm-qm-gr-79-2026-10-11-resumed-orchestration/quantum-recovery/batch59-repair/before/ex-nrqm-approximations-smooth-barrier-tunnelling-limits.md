---
id: ex-nrqm-approximations-smooth-barrier-tunnelling-limits
aliases: [nrqm-approximations-smooth-barrier-tunnelling-limits]
kind: example
domain: physics
title: "Tunnelling asymptotic limits: the smooth-barrier semiclassical limit and the exact rectangular prefactor comparison"
status: draft
origin: session
dependency_level: 12
deps: [pthm-nrqm-approximations-barrier-transmission-asymptotics, def-nrqm-approximations-framework-wkb-regime-model, lem-nrqm-approximations-scaled-line-model-correspondence, pthm-nrqm-potentials-barrier-flux-and-transmission, def-nrqm-potentials-one-dimensional-line-model, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-countable-choice, def-axiom-of-choice]
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
physical_scope: "Two asymptotic statements about declared one-dimensional barrier transmission data: the semiclassical limit of the smooth compactly supported barrier of the WKB regime model, in which the ratio of the declared transmission coefficient to exp(-2S/h) tends to one; and the exact thick-barrier limit of the rectangular wall model, whose limit prefactor is 16E(U-E)/U^2 rather than one, showing that the exponential law alone does not determine the prefactor and that rectangular walls are outside the smooth-barrier theorem. No measured transmission, detector, sample or apparatus is asserted."
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Sections 5.3-5.6 printed and PDF pages 64-75: 5.3 Square Potential Barrier p. 64 (the exact rectangular transmission), 5.4-5.6 (the WKB barrier exponent)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 5.3 printed pages 87-89 (PDF pages 95-97): tunnelling through a potential barrier and the thick-barrier exponential suppression"
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
transmission coefficient $T(h)$. Then there are $\varepsilon(h)\le C_{1}h$
and $C_{0}<\infty$, depending only on the barrier data, such that
$$\Bigl|T(h)e^{2S/h}-1\Bigr| \le\frac{C_{0}[\varepsilon(h)+e^{-2S/h}]}{1-C_{0}[\varepsilon(h)+e^{-2S/h}]}$$
whenever the denominator is positive; in particular
$$\lim_{h\downarrow0}T(h)e^{2S/h}=1,$$
and the physical reading of the limit is the exponential law
$T\approx\exp\bigl(-\frac2\hbar\int_{x_{a}}^{x_{b}}\sqrt{2m(V-E)}\,dx\bigr)$
with prefactor tending to one;

(b) *Rectangular thick-barrier limit.* For the **rectangular wall model**
excluded by the smooth theorem, take the exact scattering solution of the
line model with $V(x)=U$ for $0<x<a$ and $V=0$ otherwise, $U>E>0$,
$k=\sqrt{2mE}/\hbar$, $\kappa=\sqrt{2m(U-E)}/\hbar$ and exact transmission
$$T_{\rm rect}=\Bigl[1+\frac{U^{2}\sinh^{2}(\kappa a)}{4E(U-E)}\Bigr]^{-1};$$
then, as $\kappa a\to\infty$,
$$\frac{T_{\rm rect}}{e^{-2\kappa a}}\longrightarrow \frac{16E(U-E)}{U^{2}}=\frac{4k^{2}\kappa^{2}}{(k^{2}+\kappa^{2})^{2}},$$
so in the rectangular model the exponential law holds with the nonunit
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
declared transmission coefficient obeys the quantitative bound displayed in
part (a) of the statement and the limit
$\lim_{h\downarrow0}T(h)e^{2S/h}=1$
([[pthm-nrqm-approximations-barrier-transmission-asymptotics]]).

[L2] **Exact rectangular transmission.** For the piecewise constant wall
$V=U$ on $(0,a)$ and $V=0$ otherwise with $U>E>0$, the declared scattering
solution has the unique transmission asymptotics
$\psi=t\,e^{ikx}$ for $x>a$, $t=2e^{-ika}/D$ with
$D=2\cosh(\kappa a)+i(\kappa/k-k/\kappa)\sinh(\kappa a)$, and
$T_{\rm rect}=|t|^{2}=[1+U^{2}\sinh^{2}(\kappa a)/(4E(U-E))]^{-1}$
([[pthm-nrqm-potentials-barrier-flux-and-transmission]] clauses (a), (c),
[[def-nrqm-potentials-one-dimensional-line-model]]).

[L3] **Elementary limits.** $\sinh(x)=(e^{x}-e^{-x})/2$, so
$\sinh^{2}(\kappa a)e^{-2\kappa a}\to1/4$ as $\kappa a\to\infty$;
$E=\hbar^{2}k^{2}/(2m)$ and $U-E=\hbar^{2}\kappa^{2}/(2m)$, so
$16E(U-E)/U^{2}=4k^{2}\kappa^{2}/(k^{2}+\kappa^{2})^{2}$.

**Proof technique:** direct; read the smooth-barrier limit from the page's
theorem and compute the rectangular thick-barrier limit from the exact
closed form by elementary asymptotics.

**Given:** the data of the Example and [L1]-[L3].

1.1 [Smooth limit] Applying [L1] to the model's barrier data gives the quantitative bound and, because the right-hand side tends to $0$ as $h\downarrow0$ at fixed barrier data, the limit $\lim_{h\downarrow0}T(h)e^{2S/h}=1$; the physical expression of the exponent is the identity $S/h=(1/\hbar)\int_{x_{a}}^{x_{b}} \sqrt{2m(V-E)}\,dx$ of [[lem-nrqm-approximations-scaled-line-model-correspondence]]. This is (a). [L1, given, algebra]

1.2 [Rectangular limit] By [L2], $$T_{\rm rect}=\Bigl[1+\frac{U^{2}}{4E(U-E)}\sinh^{2}(\kappa a)\Bigr]^{-1} =\frac{4E(U-E)}{U^{2}}\,\frac{e^{-2\kappa a}}{\sinh^{2}(\kappa a) e^{-2\kappa a}}\cdot\frac{1}{1+\frac{4E(U-E)}{U^{2}}e^{-2\kappa a}}$$ after multiplying numerator and denominator by $e^{-2\kappa a}\cdot 4E(U-E)/U^{2}$; by [L3] the factor $\sinh^{2}(\kappa a)e^{-2\kappa a}\to1/4$ and $e^{-2\kappa a}\to0$, so $T_{\rm rect}e^{2\kappa a}\to4\cdot4E(U-E)/U^{2}=16E(U-E)/U^{2}$, which is the displayed prefactor; the second expression is [L3]. This is (b). [L2, L3, algebra]

2.1 [Exponent comparison and scope] For the rectangular wall the classical WKB exponent is $\frac2\hbar\int_{0}^{a}\sqrt{2m(U-E)}\,dx=2\kappa a$, which equals the exponent of the limit in step 1.2, so the two models share the exponential law but differ in the prefactor; statement (a) is restricted to the smooth class by its hypotheses, and statement (b) is the exact wall computation. No measured transmission, detector, packet or apparatus entered either computation. This is (c). [step 1.1, step 1.2, L1, L2, given] ∎

## Remarks

- **Why the prefactors differ.** For the smooth barrier the Airy matching
  across the two simple turning points produces the transmitted amplitude
  with prefactor $1+O(\varepsilon)$; the wall's discontinuities replace the
  Airy matching by exact algebraic matching, whose limit carries the
  impedance-like factor $16E(U-E)/U^{2}$. The example isolates this
  difference without claiming that either number is measured.
- **Regime of validity.** The limit in (a) is taken in the model's
  semiclassical parameter $h$ at fixed barrier data; the limit in (b) is
  taken in the wall thickness $\kappa a$ at fixed $E,U$. Both are asymptotic
  statements about the declared one-dimensional models.
