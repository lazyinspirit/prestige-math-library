---
id: ex-nrqm-light-matter-hydrogen-dipole-angular-factors
aliases: [nrqm-light-matter-hydrogen-dipole-angular-factors]
kind: example
domain: physics
title: "Explicit dipole angular factors of the hydrogenic model: the allowed 1s-to-2p entry, the forbidden 1s-to-2s entry and the oscillator contrast"
status: draft
origin: pipeline
dependency_level: 16
deps: [pthm-nrqm-light-matter-dipole-selection-rules, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-legendre-rodrigues-equation, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, thm-nrqm-coulomb-atomic-dipole-matrix-element-domain, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, post-nrqm-approximations-static-finite-level-dipole-coupling, def-nrqm-light-matter-framework-finite-level-coupled-model, post-nrqm-framework-state-and-composition, def-nrqm-framework-quantities-and-units, def-inner-product-space, def-l-p-space-as-a-quotient-by-null-functions, def-polar-surface-measure-on-the-unit-sphere, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-complex-exponential, def-sine-and-cosine-by-power-series, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  pthm-nrqm-light-matter-dipole-selection-rules: physical-result
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-legendre-rodrigues-equation: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  thm-nrqm-coulomb-atomic-dipole-matrix-element-domain: mathematical-premise
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  post-nrqm-approximations-static-finite-level-dipole-coupling: physical-assumption
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-inner-product-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Explicit angular factors of the declared hydrogenic model's dipole matrix elements: the values +-1/sqrt(3), 0 and their assignment to the angular pairs (1,0)->(0,0), (1,+-1)->(0,0), (0,0)->(0,0) and (0,0)->(1,0), read through the model's dipole components, together with the oscillator contrast Delta n = +-1 on a declared scaled oscillator family. The example computes angular factors only: no radial integral is evaluated, and no transition rate, oscillator strength, line intensity or observed spectrum is asserted."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.3 printed pages 219-220 (PDF pages 227-228): the m and l selection rules for electric-dipole transitions"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', Section 3 (spherical-harmonic orthogonality and azimuthal dependence in the polar chart)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Example

Adopt the declared Coulomb pair and the model dipole components
$D_q=-q_{\mathrm{el}}Q_q$ with $q_{\mathrm{el}}>0$ the charge magnitude with $Q_{0}=x_{3}$ and
$Q_{\pm}=(x_{1}\pm ix_{2})/\sqrt2$ of
[[pthm-nrqm-light-matter-dipole-selection-rules]], and use the explicit
spherical harmonics of
[[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] in the angle
coordinates $\Phi(\theta,\varphi)=(\sin\theta\cos\varphi,
\sin\theta\sin\varphi,\cos\theta)$ of
[[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]], with
$P_{0}=1$, $P_{1}(t)=t$ of
[[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]]:
$$Y_{00}=\frac{1}{\sqrt{4\pi}},\qquad Y_{10}=\sqrt{\frac{3}{4\pi}}\cos\theta,\qquad Y_{1,\pm1}=\mp\sqrt{\frac{3}{8\pi}}\sin\theta\,e^{\pm i\varphi},$$
so that $Q_{0}=\cos\theta$ and $Q_{\pm}=\sin\theta\,e^{\pm i\varphi}/\sqrt2$ on
the chart. Then, with the inner product of $L^{2}(S^{2},\sigma;\mathbb C)$
linear in the first argument:

(a) (allowed $\pi$ entry) $\bigl\langle Y_{10},Q_{0}Y_{00}\bigr\rangle
=\dfrac{1}{\sqrt3}$ and $\bigl\langle Y_{00},Q_{0}Y_{10}\bigr\rangle
=\dfrac{1}{\sqrt3}$;

(b) (allowed $\sigma^{\pm}$ entries)
$\bigl\langle Y_{1,\pm1},Q_{\pm}Y_{00}\bigr\rangle=\mp\dfrac{1}{\sqrt3}$
and $\bigl\langle Y_{00},Q_{\pm}Y_{1,\mp1}\bigr\rangle
=\pm\dfrac{1}{\sqrt3}$, all of modulus $\dfrac{1}{\sqrt3}$;

(c) (forbidden entries) $\bigl\langle Y_{00},Q_{0}Y_{00}\bigr\rangle=0$,
$\bigl\langle Y_{00},Q_{+}Y_{10}\bigr\rangle=0$,
$\bigl\langle Y_{00},Q_{0}Y_{11}\bigr\rangle=0$,
$\bigl\langle Y_{1,\pm1},Q_{\mp}Y_{00}\bigr\rangle=0$ and
$\bigl\langle Y_{1,\pm1},Q_{\pm}Y_{1,\pm1}\bigr\rangle=0$; each vanishing is
the case $l'=l$ or $m'\ne m+q$ of the selection rules of
[[pthm-nrqm-light-matter-dipole-selection-rules]] clause (b);

(d) (parity check) the nonzero entries of (a),(b) connect $l=0$ with $l'=1$,
hence states of opposite parity, while the vanishing entries of (c) include
the parity-preserving pair $l=l'=0$ and $l=l'=1$; this is the Laporte
condition of clause (d) of the selection-rules theorem;

(e) (reading in the hydrogenic model) applied to the model's uncompressed
bound-state matrix elements, the entries of (a),(b) give the angular factors
of $\langle\psi_{n'1m'},D_{q}\psi_{n00}\rangle=-q_{\mathrm{el}}\cdot(\text{radial factor})
\cdot(\text{the computed number})$, and the entries of (c) show that the
angular factor of $\langle\psi_{n'00},D_{0}\psi_{n00}\rangle$ vanishes for
every $n,n'$; the radial factors are not evaluated, so no transition
probability or intensity is computed;

(f) (oscillator contrast) on the declared scaled oscillator family
$(\psi^{\mathrm{osc}}_{n})$ of
[[thm-nrqm-coulomb-atomic-dipole-matrix-element-domain]] clause (d) with scale
$\ell>0$, the position matrix elements are
$\langle\psi^{\mathrm{osc}}_{1},X\psi^{\mathrm{osc}}_{0}\rangle
=\ell/\sqrt2$ and $\langle\psi^{\mathrm{osc}}_{2},X\psi^{\mathrm{osc}}_{0}
\rangle=0$, so the oscillator's position selection rule is
$|\Delta n|=1$ rather than a rule on an angular quantum number;

(g) (scope) the example is a conditional computation of angular factors of
declared model quantities. No rate, oscillator strength, line intensity,
observed spectrum or laboratory identification is asserted, and no radial
integral is evaluated.

## Facts & Assumptions

**Given:** the explicit harmonics $Y_{00},Y_{10},Y_{1,\pm1}$, the chart forms of $Q_{0},Q_{\pm}$, the polar measure $\sigma$, the declared model and oscillator data, and the cited suppliers.

[F1] **Explicit harmonics.** For $0\le m\le l$, use $Y_{lm}=b_{lm}w_{lm}(\cos\theta)e^{im\varphi}/\sqrt{2\pi}$ with $b_{lm}=(\int_{-1}^{1}w_{lm}^{2}dt)^{-1/2}$; for $1\le m\le l$, use $Y_{l,-m}=(-1)^{m}\overline{Y_{lm}}$, as in [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] clauses (c),(e). With $w_{l0}=P_l$, $P_0=1$, $P_1(t)=t$ and $w_{11}(t)=-(1-t^2)^{1/2}$ from the normalization supplier and [[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]] clause (d), the norms are $b_{00}=1/\sqrt2$, $b_{10}=\sqrt{3/2}$ and $b_{11}=\sqrt3/2$. Thus $Y_{00}=1/\sqrt{4\pi}$, $Y_{10}=\sqrt{3/(4\pi)}\cos\theta$, $Y_{1,1}=-\sqrt{3/(8\pi)}\sin\theta e^{i\varphi}$ and $Y_{1,-1}=\sqrt{3/(8\pi)}\sin\theta e^{-i\varphi}$ ([[def-complex-exponential]], [[def-sine-and-cosine-by-power-series]]).

[F2] **Chart and sphere integrals.** In the chart $\Phi(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ one has $Q_{0}=\cos\theta$ and $Q_{\pm}=\sin\theta e^{\pm i\varphi}/\sqrt2$; for Borel $F\ge0$, $\int_{S^{2}}F\,d\sigma=\int_{0}^{\pi}\int_{0}^{2\pi}F(\Phi(\theta,\varphi))\sin\theta\,d\varphi\,d\theta$ and $\sigma(S^{2})=4\pi$, whence $\int_{S^{2}}\cos^{2}\theta\,d\sigma=4\pi/3$ and $\int_{S^{2}}\sin^{2}\theta\,d\sigma=8\pi/3$, while $\int_{0}^{2\pi}e^{ik\varphi}d\varphi$ vanishes for every nonzero integer $k$ ([[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]], [[def-polar-surface-measure-on-the-unit-sphere]], [[def-inner-product-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] **Selection rules.** The angular matrix element $\langle Y_{l'm'},Q_{q}Y_{lm}\rangle$ can be nonzero only if $l'=l+1$, $m'=m+q$, or $l\ge1$, $l'=l-1$, $m'=m+q$, and a nonvanishing matrix element requires opposite parity of the two states ([[pthm-nrqm-light-matter-dipole-selection-rules]] clauses (b),(d); [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]).

[F4] **Factorization and oscillator.** For the declared Coulomb pair the bound-state matrix elements of $D_q=-q_{\mathrm{el}}Q_q$ with $q_{\mathrm{el}}>0$ the charge magnitude factor into the radial and angular integrals, and on the scaled oscillator family the position matrix elements are $\langle\psi^{\mathrm{osc}}_{1},X\psi^{\mathrm{osc}}_{0}\rangle=\ell/\sqrt2$, $\langle\psi^{\mathrm{osc}}_{2},X\psi^{\mathrm{osc}}_{0}\rangle=0$ ([[thm-nrqm-coulomb-atomic-dipole-matrix-element-domain]] clauses (b),(c),(d)).

[F5] **Model reading.** The model's dipole components and finite-level data are those of [[post-nrqm-approximations-static-finite-level-dipole-coupling]] and [[def-nrqm-light-matter-framework-finite-level-coupled-model]], read under P1 with the units of [[def-nrqm-framework-quantities-and-units]] ([[post-nrqm-framework-state-and-composition]]).

## Verification

**Proof technique:** direct; compute the listed sphere integrals from the explicit harmonics and the chart form of the multipliers, and compare the vanishing patterns with the cited selection rules and the oscillator recurrence.

**Given:** the explicit harmonics $Y_{00},Y_{10},Y_{1,\pm1}$, the chart forms of $Q_{0},Q_{\pm}$, the polar measure $\sigma$, the declared model and oscillator data, and the cited suppliers.

1.1 [Explicit harmonics] By [F1], $Y_{00}=b_{00}P_{0}/\sqrt{2\pi}=1/\sqrt{4\pi}$, $Y_{10}=b_{10}\cos\theta/\sqrt{2\pi}=\sqrt{3/(4\pi)}\cos\theta$ and $Y_{1,\pm1}=\mp\sqrt{3/(8\pi)}\sin\theta e^{\pm i\varphi}$, the last from $w_{11}=-(1-t^{2})^{1/2}$, $b_{11}=\sqrt3/2$ and the conjugation convention. [F1, algebra]

2.1 [Allowed integrals] By [F2], $\langle Y_{10},Q_{0}Y_{00}\rangle=\frac{1}{\sqrt{4\pi}}\sqrt{\frac{3}{4\pi}}\int_{S^{2}}\cos^{2}\theta\,d\sigma=\frac{1}{\sqrt{4\pi}}\sqrt{\frac{3}{4\pi}}\frac{4\pi}{3}=\frac{1}{\sqrt3}$ and $\langle Y_{1,\pm1},Q_{\pm}Y_{00}\rangle=\mp\sqrt{\frac{3}{8\pi}}\frac{1}{\sqrt2}\frac{1}{\sqrt{4\pi}}\int_{S^{2}}\sin^{2}\theta\,d\sigma=\mp\frac{1}{\sqrt3}$; the real $Q_0$ reverse entry is $1/\sqrt3$. Directly, $\langle Y_{00},Q_+Y_{1,-1}\rangle=+1/\sqrt3$ and $\langle Y_{00},Q_-Y_{1,+1}\rangle=-1/\sqrt3$: substitution gives respectively positive and negative $\sin^2\theta$ integrands, whose integral is $8\pi/3$. These are consistent with $Q_+^*=Q_-$ and the explicit opposite-component signs of step 1.1. [F2, step 1.1, algebra]

2.2 [Forbidden integrals] In $\langle Y_{00},Q_{0}Y_{00}\rangle$ the integrand $\cos\theta\sin\theta$ is odd under $\theta\mapsto\pi-\theta$; in the entries $\langle Y_{00},Q_{+}Y_{10}\rangle$, $\langle Y_{00},Q_{0}Y_{11}\rangle$, $\langle Y_{1,\pm1},Q_{\mp}Y_{00}\rangle$ and $\langle Y_{1,\pm1},Q_{\pm}Y_{1,\pm1}\rangle$ the $\varphi$-integral of a character $e^{ik\varphi}$ with nonzero integer $k$ vanishes by [F2]; these are exactly the cases excluded by [F3]. [F2, F3, step 1.1, algebra]

3.1 [Parity] The nonvanishing entries of step 2.1 connect $l=0$ with $l'=1$, i.e. an even representative with an odd one, while the vanishing entries of step 2.2 include $l=l'=0$ and $l=l'=1$; this is the Laporte condition recorded in [F3]. [F3, step 2.1, step 2.2, algebra]

3.2 [Model reading and oscillator] By [F4] the model's matrix elements factor into a radial factor and one of the angular numbers computed in steps 2.1 and 2.2, and the oscillator entries are $\ell/\sqrt2$ and $0$; the radial factor is left unevaluated, so no product is formed. [F4, F5, step 2.1, step 2.2, algebra]

4.1 [Scope] The computation evaluated angular factors and one oscillator matrix element only; no radial integral, rate, intensity or observed spectrum was formed, which is clause (g). [F5, step 3.2] ∎

## Remarks

- **Angular nonvanishing is not transition occurrence.** The 1s-to-2p angular factor $1/\sqrt3$ is nonzero, but the matrix element also carries the radial factor, which this example does not compute; conversely the vanishing of the 1s-to-2s angular factor makes that electric-dipole matrix element vanish in the declared model, without asserting that no slower mechanism connects the levels.
- **Two different selection rules.** The hydrogenic rule constrains the angular quantum numbers; the oscillator rule constrains the excitation number. Both are properties of the respective declared model's matrix elements.
