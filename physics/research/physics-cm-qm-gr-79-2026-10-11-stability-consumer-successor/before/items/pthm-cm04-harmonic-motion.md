---
id: pthm-cm04-harmonic-motion
kind: physics-theorem
title: "The motions of the harmonic model are the sinusoids $A\\cos(\\omega(t-t_0))+B\\sin(\\omega(t-t_0))$: amplitude and phase, the least period, the conserved energy $kR^2/2$ and the elliptical phase curves"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [post-cm04-harmonic-model, def-cm04-one-dimensional-models-and-equilibria, def-cm04-phase-plane-and-energy-level-sets, pthm-cm04-conservative-motion-and-energy, pthm-cm04-equilibrium-stability-at-a-strict-minimum, def-cm-oscillator-model-and-phase-system, thm-cm-homogeneous-oscillator-solution-classification, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, cor-trigonometric-parity-and-pythagorean-identity, cor-complex-trigonometric-and-hyperbolic-addition-formulas, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-cosine-zero-sets-and-fundamental-period, thm-intermediate-value, thm-of-square-roots, def-derivative, def-interval]
dependency_roles:
  post-cm04-harmonic-model: physical-assumption
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  def-cm04-phase-plane-and-energy-level-sets: formulation-prerequisite
  pthm-cm04-conservative-motion-and-energy: physical-result
  pthm-cm04-equilibrium-stability-at-a-strict-minimum: physical-result
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  cor-complex-trigonometric-and-hyperbolic-addition-formulas: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The complete motion analysis of the harmonic model with m>0 and k>0: every motion is a sinusoid about any chosen base time, with the initial data as coefficients; the amplitude and phase form; the least period 2 pi/omega and the frequency in cycles per second; the conserved mechanical energy k R^2/2; the phase curve is exactly the ellipse of the energy level set, with the two semiaxes; and the origin is the unique rest point and is Lyapunov stable. The result is a conditional deduction from the adopted linear force law; it asserts no value of k or m, no application to a real spring, and no asymptotic stability."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.1)-(5.4), chapter pages 1-2 (PDF pages 87-88): the harmonic oscillator equation, its general solution u cos(omega_0 t) + v sin(omega_0 t) = A cos(omega_0 t - phi), the amplitude-phase reading, and the conserved energy E = kappa A^2/2"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2.4, Example 1, printed page 5 (PDF page 11): the simple harmonic oscillator with F = -k x, potential V = k x^2/2 and conserved energy, with momentum and angular momentum not conserved in one dimension"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the harmonic model of [[post-cm04-harmonic-model]]: the
one-dimensional model of [[def-cm04-one-dimensional-models-and-equilibria]]
with $m>0$, $k>0$, force law $F(x)=-kx$ and potential $U(x)=\tfrac12kx^{2}$.
Write
$$\omega:=\sqrt{\frac{k}{m}}>0$$
for its **undamped frequency** in the sense of
[[def-cm-oscillator-model-and-phase-system]]. Then:

1. **Motions.** Let $J\subseteq\mathbb R$ be an interval with nonempty
   interior and let $t_{0}\in J$. A curve $x:J\to\mathbb R$ is a motion of the
   model on $J$ if and only if there are reals $A,B$ with
   $$x(t)=A\cos\bigl(\omega(t-t_{0})\bigr)+B\sin\bigl(\omega(t-t_{0})\bigr) \qquad(t\in J).$$
   For every datum $(t_{0},x_{0},v_{0})$ there is exactly one maximal motion,
   it is defined on all of $\mathbb R$, and its coefficients are
   $A=x_{0}$, $B=v_{0}/\omega$; every motion with that datum is its
   restriction.
2. **Amplitude and phase.** With $A,B$ as in clause 1 put
   $R:=\sqrt{A^{2}+B^{2}}$. Then $\lvert x(t)\rvert\le R$ for every $t$; if
   $R>0$ there is a real $\varphi$ with $\cos\varphi=A/R$ and
   $\sin\varphi=B/R$, and then
   $$x(t)=R\cos\bigl(\omega(t-t_{0})-\varphi\bigr)\qquad(t\in\mathbb R).$$
   If $R=0$ the motion is the rest motion $x\equiv0$.
3. **Period and frequency.** For every motion $x(t+T)=x(t)$ holds for all
   $t$ whenever $\omega T\in2\pi\mathbb Z$. If $R>0$, conversely every
   period $T>0$ of $x$ satisfies $\omega T\in2\pi\mathbb Z$, so the **least
   positive period** of the motion is $T_{\mathrm{per}}=2\pi/\omega$, and the
   **frequency** in cycles per second is $f=1/T_{\mathrm{per}}=\omega/(2\pi)$.
   If $R=0$ every $T$ is a period.
4. **Energy and phase curves.** Along every motion with coefficients $A,B$
   the mechanical energy is
   $$E\bigl(x(t),x'(t)\bigr)=\tfrac12k\bigl(A^{2}+B^{2}\bigr)=\tfrac12kR^{2}$$
   for every $t$, the phase curve is contained in the ellipse
   $$\Sigma_{R}:=\Bigl\{(x,v)\in\mathbb R^{2}:\frac{x^{2}}{R^{2}}+\frac{v^{2}}{\omega^{2}R^{2}}=1\Bigr\}$$
   when $R>0$, and it is exactly that ellipse: every point of $\Sigma_{R}$
   lies on the phase curve of the motion and is attained at exactly the times
   $t=t_{0}+\bigl(\theta_{1}+\varphi+2\pi n\bigr)/\omega$, $n\in\mathbb Z$,
   for the appropriate $\theta_{1}$. For $R=0$ the phase curve is the single
   point $(0,0)$, which is also the level set of energy $0$.
5. **Rest point.** The origin $(0,0)$ is the only rest point of the model,
   and it is Lyapunov stable, by
   [[pthm-cm04-equilibrium-stability-at-a-strict-minimum]]; no asymptotic
   stability is asserted.

The statement uses the declared data $m,k$ only through $\omega$ and the
energy; no value of $m$ or $k$ is asserted, and no real oscillator is claimed
to obey the model.

## Facts & Assumptions

**Given:** The harmonic model with $m>0$, $k>0$, $\omega=\sqrt{k/m}$, a
base time $t_{0}$, and a motion $x$ of the model.

[L1] Model vocabulary ([[post-cm04-harmonic-model]],
[[def-cm04-one-dimensional-models-and-equilibria]] clauses (b), (d), (f)):
motions are the $C^{2}$ curves $x:J\to\mathbb R$ with $m\,x''+k\,x=0$;
the model is conservative with potential $U(x)=\tfrac12kx^{2}$, mechanical
energy $E(x,v)=\tfrac12mv^{2}+\tfrac12kx^{2}$; and $\omega=\sqrt{k/m}$
satisfies $\omega^{2}=k/m$, hence $m\omega^{2}=k$
([[thm-of-square-roots]]).

[L2] [[thm-cm-homogeneous-oscillator-solution-classification]] with
$c=0$: for $m>0$, $k>0$ the discriminant is $\Delta=-4mk<0$, $\gamma=0$ and
$\omega=\sqrt{4mk-0^{2}}/(2m)=\sqrt{k/m}$, and a function on an interval $J$
with nonempty interior solves $m\,x''+k\,x=0$ if and only if
$x(t)=A\cos(\omega t)+B\sin(\omega t)$ on $J$ for some reals $A,B$; for every
datum at $0$ there is exactly one solution $\mathbb R\to\mathbb R$, with
$A=x(0)$ and $B=x'(0)/\omega$, and every solution extends to $\mathbb R$.

[L3] Trigonometric values and identities
([[thm-quarter-turn-values-and-shift-formulas]],
[[cor-trigonometric-parity-and-pythagorean-identity]],
[[cor-complex-trigonometric-and-hyperbolic-addition-formulas]],
[[thm-sine-cosine-signs-monotonicity-and-ranges]]):
$\cos0=1$, $\sin0=0$, $\cos\pi=-1$, $\sin(\pi/2)=1$,
$\cos(x+\pi)=-\cos x$, $\sin(x+\pi)=-\sin x$, $\cos(-x)=\cos x$,
$\sin(-x)=-\sin x$, $\sin^{2}+\cos^{2}=1$,
$\cos(z+w)=\cos z\cos w-\sin z\sin w$ for real $z,w$, cosine is strictly
decreasing on $[0,\pi]$ with range $[-1,1]$, sine is nonnegative on
$[0,\pi]$, and $\lvert\sin\rvert\le1$, $\lvert\cos\rvert\le1$.

[L4] [[thm-sine-cosine-zero-sets-and-fundamental-period]]: $\cos u=0$ iff
$u=(m+1/2)\pi$; both sine and cosine have period $2\pi$ and no smaller
positive common period. [[thm-intermediate-value]]: a continuous real
function on $[a,b]$ attains every value between its endpoint values.

[L5] Conserved energy and level sets
([[pthm-cm04-conservative-motion-and-energy]] clauses 2 and 3,
[[def-cm04-phase-plane-and-energy-level-sets]]): $E(x(t),x'(t))$ is
independent of $t$; the phase curve lies in the level set of its initial
energy; the level set of energy $E_{0}\ge0$ is
$\{(x,v):\tfrac12kx^{2}+\tfrac12mv^{2}=E_{0}\}$.

[L6] [[pthm-cm04-equilibrium-stability-at-a-strict-minimum]] applied at
$x_{*}=0$: $0$ is a strict global minimum of $U$ because $k>0$, so $(0,0)$ is
a Lyapunov stable rest point; and $U'(x)=kx$ vanishes exactly at $x=0$
([[thm-algebra-of-derivatives]], [[def-derivative]]).

## Proof

**Proof technique:** direct; transport the mathematical classification of
the damped oscillator to the base point $t_{0}$, prove the unit-circle
parametrisation used for the phase and the ellipse, and compute the energy
along the explicit family.

1.1 **Unit-circle parametrisation.** For reals $c,s$ with $c^{2}+s^{2}=1$ there is a real $\theta$ with $\cos\theta=c$ and $\sin\theta=s$. Indeed, $c\in[-1,1]$ because $c^{2}\le c^{2}+s^{2}=1$; cosine is continuous on $[0,\pi]$ with $\cos0=1$ and $\cos\pi=-1$, so by [L4] there is $\theta_{1}\in[0,\pi]$ with $\cos\theta_{1}=c$. Then $\sin^{2}\theta_{1}=1-c^{2}=s^{2}$ by [L3], and $\sin\theta_{1}\ge0$ on $[0,\pi]$ by [L3]; hence $\sin\theta_{1}=\lvert s\rvert$. If $s\ge0$ take $\theta=\theta_{1}$; if $s<0$ take $\theta=-\theta_{1}$, so that $\cos\theta=\cos\theta_{1}=c$ and $\sin\theta=-\sin\theta_{1}=\lvert s\rvert=s$ by the parity identities of [L3]. [L3, L4, algebra]

1.2 **The periods of cosine.** If $T$ is a real number with $\cos(u+T)=\cos u$ for all $u$, then $T\in2\pi\mathbb Z$. Indeed, taking $u=\pi/2$ gives $\cos(\pi/2+T)=0$, so $\pi/2+T=(m+1/2)\pi$ for an integer $m$ by [L4], that is $T=m\pi$; taking $u=0$ gives $\cos T=1$. From $\cos(x+\pi)=-\cos x$ and $\cos0=1$ of [L3], induction on $\lvert m\rvert$ gives $\cos(m\pi)=(-1)^{m}$ for every integer $m$; hence $(-1)^{m}=1$ and $m$ is even, so $T\in2\pi\mathbb Z$. Conversely $T\in2\pi\mathbb Z$ is a period of cosine by [L4]. [L3, L4, algebra]

1.3 Clause 1. Let $x:J\to\mathbb R$ be a motion and $t_{0}\in J$. The shifted curve $y(s):=x(t_{0}+s)$ is defined on the interval $J-t_{0}$ with nonempty interior and satisfies $m\,y''+k\,y=0$ there (the equation has no explicit time dependence). By [L2] there are $A,B$ with $y(s)=A\cos(\omega s)+B\sin(\omega s)$, that is $x(t)=A\cos(\omega(t-t_{0}))+B\sin(\omega(t-t_{0}))$ on $J$. Conversely each function of this form is obtained by shifting a solution of [L2] and is therefore a motion. For the datum $(t_{0},x_{0},v_{0})$ apply [L2] to $y$ with $y(0)=x_{0}$ and $y'(0)=v_{0}$: there is exactly one solution on $\mathbb R$, namely $A=x_{0}$, $B=v_{0}/\omega$; translating back gives the unique maximal motion, defined on $\mathbb R$, and every motion with the datum is a restriction by the uniqueness in clause 1 of [[pthm-cm04-conservative-motion-and-energy]]. This is clause 1. [given, L1, L2, algebra]

2.1 Clause 2. Write $\theta(t):=\omega(t-t_{0})$. For every real $\theta$, $$R^{2}-\bigl(A\cos\theta+B\sin\theta\bigr)^{2} =A^{2}\sin^{2}\theta+B^{2}\cos^{2}\theta-2AB\sin\theta\cos\theta =\bigl(A\sin\theta-B\cos\theta\bigr)^{2}\ge0,$$ where only the expansion of the squares and $\sin^{2}+\cos^{2}=1$ of [L3] were used; hence $\lvert x(t)\rvert\le R$. If $R>0$, apply step 1.1 to $(c,s)=(A/R,B/R)$, which satisfies $c^{2}+s^{2}=1$: there is $\varphi$ with $\cos\varphi=A/R$ and $\sin\varphi=B/R$. The addition formula of [L3] gives $$\cos\bigl(\theta-\varphi\bigr)=\cos\theta\cos\varphi+\sin\theta\sin\varphi=\frac{A\cos\theta+B\sin\theta}{R},$$ so $x(t)=R\cos(\omega(t-t_{0})-\varphi)$. If $R=0$ then $A=B=0$ and $x\equiv0$. This is clause 2. [given, step 1.1, L1, L3, algebra]

2.2 Clause 4, the energy. With $\theta=\omega(t-t_{0})$ the derivative of $x$ is $x'(t)=\omega\bigl(-A\sin\theta+B\cos\theta\bigr)$ by [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]. Using $m\omega^{2}=k$ from [L1], $$E=\tfrac12m\,x'^{2}+\tfrac12k\,x^{2} =\tfrac12k\Bigl[\bigl(-A\sin\theta+B\cos\theta\bigr)^{2}+\bigl(A\cos\theta+B\sin\theta\bigr)^{2}\Bigr] =\tfrac12k\bigl(A^{2}+B^{2}\bigr)=\tfrac12kR^{2},$$ expanding the squares and using $\sin^{2}+\cos^{2}=1$ of [L3]; in particular the energy is the constant $\tfrac12kR^{2}$, in agreement with the conservation clause of [L5]. This is the first assertion of clause 4. [step 1.3, L1, L3, L5, algebra]

3.1 Clause 3. If $\omega T\in2\pi\mathbb Z$, then by [L4] the cosine is $2\pi$-periodic, so $\cos(\theta+\omega T)=\cos\theta$ and $x(t+T)=x(t)$ for all $t$; this covers the case $R=0$ as well. Suppose $R>0$ and $T>0$ is a period of $x$. Dividing clause 2 by $R$, $\cos(\omega(t+T-t_{0})-\varphi)=\cos(\omega(t-t_{0})-\varphi)$ for all $t$; as $t$ ranges over $\mathbb R$, $u:=\omega(t-t_{0})-\varphi$ ranges over all of $\mathbb R$, so $\omega T$ is a period of cosine; by step 1.2, $\omega T\in2\pi\mathbb Z$. Hence the positive periods of a nonconstant harmonic motion are exactly the numbers $2\pi n/\omega$, $n\ge1$, and the least one is $2\pi/\omega$. This is clause 3. [step 1.2, step 2.1, L4, algebra]

3.2 Clause 4, the ellipse. Let $R>0$ and use the phase form of clause 2, $\theta=\omega(t-t_{0})$: $x(t)=R\cos(\theta-\varphi)$ and $x'(t)=-R\omega\sin(\theta-\varphi)$, so $$\frac{x(t)^{2}}{R^{2}}+\frac{x'(t)^{2}}{\omega^{2}R^{2}}=\cos^{2}(\theta-\varphi)+\sin^{2}(\theta-\varphi)=1$$ by [L3]: the phase curve is contained in $\Sigma_{R}$. Conversely let $(x_{1},v_{1})\in\Sigma_{R}$, so that $(x_{1}/R)^{2}+(v_{1}/(\omega R))^{2}=1$; by step 1.1 applied to $(c,s)=(x_{1}/R,\,-v_{1}/(\omega R))$ there is $\theta_{1}$ with $\cos\theta_{1}=x_{1}/R$ and $\sin\theta_{1}=-v_{1}/(\omega R)$. The map $t\mapsto\theta(t)=\omega(t-t_{0})$ is a bijection of $\mathbb R$ onto $\mathbb R$ because $\omega>0$, so the times $t$ with $\theta(t)-\varphi=\theta_{1}+2\pi n$ are exactly $t=t_{0}+(\theta_{1}+\varphi+2\pi n)/\omega$, $n\in\mathbb Z$; at those times $x(t)=R\cos\theta_{1}=x_{1}$ and $x'(t)=-R\omega\sin\theta_{1}=v_{1}$. Hence every point of $\Sigma_{R}$ lies on the phase curve, at the displayed times. If $R=0$ then $x\equiv0$ by clause 2 and the phase curve is $\{(0,0)\}$, which is the level set of energy $0$ because $\tfrac12kx^{2}+\tfrac12mv^{2}=0$ forces $x=v=0$. This is clause 4. [step 1.1, step 2.1, step 2.2, L3, L5, algebra]

4.1 Clause 5. The rest points are the equilibria, and by [L6] the equation $U'(x)=kx=0$ has the unique solution $x=0$ because $k>0$; the origin is a strict global minimum of $U$, so [L6] gives Lyapunov stability. No asymptotic stability is asserted, and none follows from the conservation clause of [L5]. This is clause 5. [given, L1, L5, L6] ∎

## Remarks

- **Amplitude and energy are equivalent data.** $\tfrac12kR^{2}$ is the
  energy, so the amplitude and the energy determine each other; this is the
  source's $E=\kappa A^{2}/2$. The phase $\varphi$ is determined by the
  datum only up to $2\pi$, corresponding to the least period of clause 3.

- **The ellipse is the whole level set.** By clause 4 the phase curve fills
  its ellipse; the semiaxes are $R=\sqrt{2E_{0}/k}$ in the position
  direction and $\omega R=\sqrt{2E_{0}/m}$ in the velocity direction. The
  equilibrium $(0,0)$ is the degenerate level set of energy $0$ and is a
  rest point, not a periodic motion.

- **What the harmonic model does not say.** Nothing here asserts that a
  physical oscillator is harmonic; the model's adequacy is a separate
  modelling question, and the companion page's pendulum check exhibits a
  nonlinear model together with a finite-time bound on its difference from
  the harmonic approximation, and shows that the harmonic energy is not
  conserved by the nonlinear model.

