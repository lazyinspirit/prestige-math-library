---
id: pthm-cm04-damped-motion
kind: physics-theorem
title: "Classification of the motions of the damped oscillator by the discriminant, and strict energy dissipation $E'=-c\\,x'^{2}$"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [post-cm04-linear-damping-model, post-cm04-harmonic-model, def-cm04-one-dimensional-models-and-equilibria, def-cm03-potential-and-mechanical-energy, def-cm01-units, def-cm-oscillator-model-and-phase-system, thm-cm-homogeneous-oscillator-solution-classification, pthm-cm04-harmonic-motion, thm-algebra-of-derivatives, thm-chain-rule, thm-newton-leibniz-with-interior-derivative, thm-monotonicity-of-the-integral, cor-zero-derivative-implies-constant, thm-of-square-roots, def-derivative, def-interval]
dependency_roles:
  post-cm04-linear-damping-model: physical-assumption
  post-cm04-harmonic-model: formulation-prerequisite
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  pthm-cm04-harmonic-motion: physical-result
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The motion classification of the damped oscillator model with m>0, k>0, c>=0: the three solution families determined by the sign of the discriminant c^2-4mk (distinct real roots, double root, oscillatory roots), uniqueness and global existence for every datum, the identity E'=-c x-dot^2 for the mechanical energy k-dot-free part, the monotone decrease of the energy, and the characterisation of the constant-energy motions as the rest motion when c>0. The result is a conditional deduction from the declared model data; it asserts no value of the parameters, no measured decay and no behaviour of any real damper."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.6)-(5.12), chapter pages 2-3 (PDF pages 88-89): the damped equation, its characteristic equation and roots, the free solution (5.9), the exponential decay of the amplitude with time constant 1/delta, and the energy-decay relation defining the quality factor"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2.4, Example 2, printed page 5 (PDF page 11): the damped simple harmonic oscillator loses energy because the friction force is not conservative"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, Eq. (7.15), printed pages 147-148 (PDF pages 150-151): the damped linear oscillator and the underdamped, critically damped and overdamped solution cases"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the damped oscillator model of [[post-cm04-linear-damping-model]] with
$m>0$, $k>0$, $c\ge0$, force law $F(x,v)=-kx-cv$ and mechanical energy
$E(x,v)=\tfrac12mv^{2}+\tfrac12kx^{2}$. Write
$$\Delta:=c^{2}-4mk,\qquad \gamma:=\frac{c}{2m},\qquad \lambda_{\pm}:=\frac{-c\pm\sqrt{\Delta}}{2m}\ (\Delta\ge0),\qquad \omega:=\frac{\sqrt{4mk-c^{2}}}{2m}\ (\Delta<0),$$
and note that $\Delta=-4mk<0$ and $\omega=\sqrt{k/m}$ when $c=0$. Then:

1. **Classification and uniqueness.** Let $J\subseteq\mathbb R$ be an
   interval with nonempty interior. A curve $x:J\to\mathbb R$ is a motion of
   the model if and only if it is one of the following:
   - $\Delta>0$: $x(t)=Ae^{\lambda_{+}t}+Be^{\lambda_{-}t}$ for reals $A,B$;
   - $\Delta=0$: $x(t)=(A+Bt)e^{-ct/(2m)}$ for reals $A,B$;
   - $\Delta<0$: $x(t)=e^{-\gamma t}\bigl(A\cos(\omega t)+B\sin(\omega
     t)\bigr)$ for reals $A,B$.
   For every datum $(t_{0},x_{0},v_{0})$ there is exactly one maximal motion,
   it is defined on all of $\mathbb R$, and every motion with that datum is
   its restriction; its coefficients are the ones supplied by clause 4 of
   [[thm-cm-homogeneous-oscillator-solution-classification]] for the shifted
   curve $s\mapsto x(t_{0}+s)$.
   In particular, for $c=0$ the motions are exactly those of the harmonic
   model of [[post-cm04-harmonic-model]] with the same $m$ and $k$.
2. **Energy dissipation.** For every motion $x:J\to\mathbb R$ the energy
   $e(t):=E(x(t),x'(t))$ is differentiable at every interior point of $J$
   with
   $$e'(t)=-c\,x'(t)^{2}\le0,$$
   and for $t_{1}<t_{2}$ in $J$ one has
   $e(t_{2})-e(t_{1})=-c\int_{t_{1}}^{t_{2}}x'(s)^{2}\,ds\le0$: the energy is
   nonincreasing on $J$. If $c>0$, then the following are equivalent: (i)
   $e$ is constant on $J$; (ii) $x'(t)=0$ at every interior point of $J$;
   (iii) $x$ is constant on $J$; (iv) $x\equiv0$ on $J$, the rest motion of
   the model. Moreover, at every interior point with $x'(t)\neq0$ one has
   $e'(t)<0$, so the energy strictly decreases there.
3. **Rest points.** The rest points of the model are exactly the pairs
   $(x,0)$ with $kx=0$, that is $(0,0)$, and the constant curve $x\equiv0$ is
   its maximal motion with datum $(t_{0},0,0)$.

The statement is read for the declared data; it asserts no value of $m,k,c$
and no empirical decay law.

## Facts & Assumptions

**Given:** The damped model with data $(m,c,k,0)$, $m>0$, $k>0$, $c\ge0$, its
motions $x:J\to\mathbb R$, its energy $E$, and the constants
$\Delta,\gamma,\lambda_{\pm},\omega$.

[L1] Model vocabulary ([[post-cm04-linear-damping-model]],
[[def-cm04-one-dimensional-models-and-equilibria]] clauses (b), (d), (f),
[[def-cm-oscillator-model-and-phase-system]]): the motion equation is
$m\,x''+c\,x'+k\,x=0$, which is the homogeneous damped oscillator model of
[[def-cm-oscillator-model-and-phase-system]] with the same data; the force
law is presented through $U(x)=\tfrac12kx^{2}$ with residual force
$d=-cv$; the mechanical energy is $E=\tfrac12mv^{2}+\tfrac12kx^{2}$.

[L2] [[thm-cm-homogeneous-oscillator-solution-classification]] with
$m>0$, $c\ge0$, $k>0$: the model's solutions on an interval with nonempty
interior are exactly the three displayed families by the sign of $\Delta$;
for every datum at $0$ there is exactly one solution $\mathbb R\to\mathbb R$,
with the displayed coefficients; and every solution extends to $\mathbb R$.
For $c=0$ one has $\Delta=-4mk<0$ and
$\omega=\sqrt{4mk}/(2m)=\sqrt{k/m}$ because $m>0$
([[thm-of-square-roots]]).

[L3] Differentiation rules ([[thm-algebra-of-derivatives]],
[[thm-chain-rule]], [[def-derivative]]): sums and constant multiples of
differentiable functions are differentiated termwise; the product $x\,x'$
has derivative $x'^{2}+x\,x''$.

[L4] Integration ([[thm-newton-leibniz-with-interior-derivative]],
[[thm-monotonicity-of-the-integral]]): if $G$ is continuous on $[t_{1},t_{2}]$
and differentiable on $(t_{1},t_{2})$ with integrable derivative, then
$\int_{t_{1}}^{t_{2}}G'=G(t_{2})-G(t_{1})$; and if $h_{1}\le h_{2}$ are
integrable on $[t_{1},t_{2}]$ with $h_{1}\le h_{2}$ pointwise, then
$\int h_{1}\le\int h_{2}$. In particular a nonpositive continuous integrand
has nonpositive integral.

[L5] [[cor-zero-derivative-implies-constant]]: a continuous real function on
an interval whose derivative vanishes at every interior point is constant.
[[def-interval]]: intervals are order-convex and have the stated interior
points.

## Proof

**Proof technique:** direct; transport the mathematical classification of the
cited supplier (whose case split by the discriminant is performed there) to
the model, then differentiate and integrate the energy along a motion.

1.1 Clause 1: by [L1] the motions of the damped model are the solutions of the homogeneous damped oscillator equation with data $(m,c,k)$ under the identification clause (f) of [[def-cm04-one-dimensional-models-and-equilibria]]; [L2] gives the three families, the initial-data coefficients, existence and uniqueness on $\mathbb R$ and the restriction property, and the special case $c=0$ with $\Delta=-4mk<0$, $\gamma=0$ and $\omega=\sqrt{k/m}$. In that case the family of the classification is $x(t)=A\cos(\omega t)+B\sin(\omega t)$, which is exactly the motion family of the harmonic model in clause 1 of [[pthm-cm04-harmonic-motion]]; hence the motions of the model with the parameter value $c=0$ are exactly those of the harmonic model with the same $m$ and $k$. [given, L1, L2]

1.2 Clause 2: let $x:J\to\mathbb R$ be a motion and $e(t):=E(x(t),x'(t))$. At every interior point $t$ of $J$, $x$ is twice differentiable and $x'$ is differentiable, so by [L3] $$e'(t)=m\,x'(t)x''(t)+k\,x(t)x'(t)=x'(t)\bigl(m\,x''(t)+k\,x(t)\bigr)=-c\,x'(t)^{2},$$ where the equation of motion was used in the last step. This is nonpositive, and it is strictly negative whenever $c>0$ and $x'(t)\neq0$. [given, L1, L3, algebra]

2.1 For $t_{1}<t_{2}$ in $J$ the function $e$ is continuous on $[t_{1},t_{2}]$ and differentiable on $(t_{1},t_{2})$ with continuous derivative by step 1.2, so [L4] gives $$e(t_{2})-e(t_{1})=\int_{t_{1}}^{t_{2}}e'(s)\,ds=-c\int_{t_{1}}^{t_{2}}x'(s)^{2}\,ds\le0,$$ the inequality by the pointwise nonnegativity of the integrand and the monotonicity of the integral in [L4]. Hence $e$ is nonincreasing on $J$. [step 1.2, L4]

2.2 Let $c>0$. If $e$ is constant on $J$, then $e'(t)=0$ at every interior point, so $x'(t)^{2}=0$ there by step 1.2, giving (ii); if (ii) holds then $x$ is constant on $J$ by [L5], giving (iii); if $x$ is constant on $J$, then $mx''=0$ and the equation reads $kx=0$ on $J$, so $x\equiv0$ because $k>0$ and $J$ is nonempty, giving (iv); and (iv) trivially gives (i) because $E(0,0)=0$. This proves the equivalence of (i)-(iv). [step 1.2, L1, L5, algebra]

3.1 Clause 3: substituting the constant curve $x\equiv x_{*}$ into the equation gives $kx_{*}=0$, that is $x_{*}=0$ because $k>0$; conversely $x\equiv0$ solves the equation, so $(0,0)$ is a rest point and, by uniqueness in clause 1, the maximal motion with datum $(t_{0},0,0)$. [step 1.1, L1, algebra] ∎

## Remarks

- **Two time scales in the heavily damped case.** For $c>0$ the roots
  $\lambda_{\pm}$ are real and negative when $\Delta>0$, with
  $\lambda_{-}<-c/(2m)<\lambda_{+}<0$; the source reads the reciprocal
  rates as a short momentum-relaxation time and a long coordinate-relaxation
  time. Those readings are remarks about the explicit families, not
  additional claims of this item.

- **Energy is not the only decreasing quantity.** Clause 2 identifies the
  exact rate of energy loss at every instant; the monotone decrease on $J$
  follows by integration. Whether the motion tends to rest as $t\to\infty$,
  and how the decay compares with the explicit exponential bounds, is the
  subject of the following item for $c>0$.

