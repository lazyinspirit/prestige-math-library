---
page: cm-math-approximation
title: Cm Math Approximation
status: draft
items:
  - def-cm-oscillator-model-and-phase-system
  - def-cm-averaging-data-and-averaged-field
  - def-cm-parameter-dependent-action-angle-branch
  - lem-cm-convolution-differentiation
  - thm-cm-homogeneous-oscillator-solution-classification
  - prop-cm-oscillator-degenerate-and-repulsive-cases
  - cor-cm-variation-of-constants-for-linear-systems
  - cor-cm-homogeneous-oscillator-decay
  - thm-cm-forced-oscillator-variation-of-constants
  - cor-cm-forced-modal-oscillator-response
  - thm-cm-forced-oscillator-sinusoidal-response
  - prop-cm-oscillator-amplitude-maximum
  - lem-cm-averaging-data-basic-bounds
  - thm-cm-finite-time-linearization-error-bound
  - thm-cm-averaging-for-fast-periodic-oscillations
  - thm-cm-adiabatic-invariant-drift-bound
  - rem-cm-approximation-scope-and-limits
examples: []
requires:
  - cm-math-dynamics
  - bounded-linear-operators-and-quotient-spaces
  - complex-differentiability-and-cauchy-riemann
  - field-extensions-and-the-complex-numbers
  - the-exponential-function
  - the-fundamental-theorems-of-calculus
  - cm-math-balances
---

The approximation layer of the non-relativistic classical mechanics
collection, all of it mathematics: the exact solution theory of the linear damped
driven oscillator, the convolution (Green's kernel) representation of forced
solutions, the steady sinusoidal response with its resonance and amplitude peak,
the finite-time linearization error bound, the averaging estimate on the
$O(1/\varepsilon)$ time scale, and the adiabatic action-drift bound. Every item
carries `domain: mathematics` and depends only on mathematical suppliers;
nothing here asserts that any model describes nature, and the physical reading
of masses, forces, damping, driving and slow parameter variation belongs to the
consuming classical-mechanics pages.

The exact oscillator layer begins with
[[def-cm-oscillator-model-and-phase-system]], which fixes the second-order
model $m x''+c x'+k x=f(t)$, its phase-plane system and its characteristic
data. [[thm-cm-homogeneous-oscillator-solution-classification]] classifies all
solutions for $k>0$ by the discriminant (distinct real roots, a double root,
and the oscillatory family $e^{-\gamma t}(A\cos\omega t+B\sin\omega t)$) and
proves uniqueness for prescribed initial data;
[[prop-cm-oscillator-degenerate-and-repulsive-cases]] covers $k=0$ and $k<0$,
including the explicit exponentially growing solution when $k<0$, and
[[cor-cm-homogeneous-oscillator-decay]] records the exponential decay of all
homogeneous solutions when $c>0$, $k>0$.

The forcing layer is [[lem-cm-convolution-differentiation]], the exact
differentiation rule for variable-limit convolution integrals, and
[[thm-cm-forced-oscillator-variation-of-constants]], which represents the
unique solution of the forced model with $k\ge0$ as a homogeneous solution plus
the convolution of the forcing with the kernel
$g(0)=0$, $g'(0)=1/m$. [[cor-cm-variation-of-constants-for-linear-systems]]
supplies the corresponding matrix-exponential formula for general linear
systems, used again in the linearization estimate.
[[thm-cm-forced-oscillator-sinusoidal-response]] identifies the steady response
$\operatorname{Re}(f_0e^{i\Omega t}/D)$ for $D=k-m\Omega^2+ic\Omega$, the
resonant solution $f_0t\sin(\omega_0t)/(2m\omega_0)$ when $c=0$ and
$\Omega=\omega_0$, and the decay of the transient when $c>0$;
[[prop-cm-oscillator-amplitude-maximum]] locates the maximum of the response
amplitude at $\Omega_*=\sqrt{k/m-c^2/(2m^2)}$ when this is positive and at $0$
otherwise. [[cor-cm-forced-modal-oscillator-response]] decouples the forced
quadratic system $Mq''+Kq=\varphi(t)$ into the scalar forced modes of the
quadratic-mode theorem and writes their solutions by the same kernel.

The approximation layer proper comprises
[[thm-cm-finite-time-linearization-error-bound]] (existence on $[0,T]$ under
$\delta e^{LT}<r$ and the estimate
$\lVert z-y\rVert\le C\delta^2\int_0^te^{\lVert A\rVert(t-s)}e^{2Ls}ds$),
[[lem-cm-averaging-data-basic-bounds]] (the explicit bounds $B=2MP$,
$B_1=2LP$ for the periodic deviation and its derivatives on the stated
compact state ball),
[[thm-cm-averaging-for-fast-periodic-oscillations]] (order-$\varepsilon$
agreement of $x'=\varepsilon f(t,x)$ with the averaged system on
$[0,A/\varepsilon]$ under the trapping condition $\varepsilon K<\rho$), and
[[thm-cm-adiabatic-invariant-drift-bound]] (the order-$\varepsilon$ bound for
the drift of the action along a one-frequency branch on the same time scale,
conditional on a uniform action-angle chart with $|\partial_Ih|\ge\omega_0>0$
and on the branch staying in the chart).
[[rem-cm-approximation-scope-and-limits]] records the limits of every one of
these statements: finite-time validity, the conditional character of the
adiabatic chart hypothesis, the absence of any long-time linearization or
stability claim, and the absence of empirical content.

The companion page [[cm-math-approximation-examples]] records worked checks:
explicit oscillator initial value problems, the resonant response and the two
regimes of the amplitude maximum, constant forcing with and without linear drag,
a pendulum linearization estimate with explicit constants, an averaging
estimate compared with its exact solution, an exactly solvable adiabatic branch
compared with the drift bound, a nonuniqueness counterexample without a
Lipschitz condition, and a finite-time escape from the domain of a bounded
field.
