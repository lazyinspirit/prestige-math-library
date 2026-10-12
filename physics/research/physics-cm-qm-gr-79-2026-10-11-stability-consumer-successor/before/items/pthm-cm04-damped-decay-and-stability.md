---
id: pthm-cm04-damped-decay-and-stability
kind: physics-theorem
title: "Strictly damped oscillator: explicit decay bounds, convergence to rest and asymptotic stability of the origin"
status: draft
origin: session
domain: physics
dependency_level: 18
deps: [post-cm04-linear-damping-model, def-cm04-one-dimensional-models-and-equilibria, pthm-cm04-damped-motion, def-cm-equilibrium-and-lyapunov-stability, def-cm-oscillator-model-and-phase-system, thm-cm-homogeneous-oscillator-solution-classification, cor-cm-homogeneous-oscillator-decay, thm-exponential-is-strictly-increasing, thm-exponential-limits-and-range, def-real-exponential-function-and-e, thm-nonnegative-series-bounded-partial-sums, def-limits-at-infinity, def-euclidean-inner-product, def-metric-ball, thm-of-square-roots, lem-of-square-monotone, thm-derivative-of-exponential, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule, def-derivative, def-interval]
dependency_roles:
  post-cm04-linear-damping-model: physical-assumption
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  pthm-cm04-damped-motion: physical-result
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  cor-cm-homogeneous-oscillator-decay: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  thm-exponential-limits-and-range: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-nonnegative-series-bounded-partial-sums: mathematical-premise
  def-limits-at-infinity: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: cases
physical_scope: "The strictly damped oscillator with m>0, k>0, c>0: every motion is bounded by explicit constants times the initial phase norm, tends to zero together with its velocity, and the origin of the phase plane is a globally asymptotically stable rest point in the sense of the framework's stability definition. The result is a conditional deduction from the declared model data; it asserts no value of the parameters, no measured decay rate and no behaviour of any real damper, and its constants are the explicit ones produced by the classification."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.9)-(5.12), chapter pages 2-3 (PDF pages 88-89): the exponentially decaying free solution, the decay time constant 1/delta, and the two relaxation time scales in the heavily damped limit"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2.4, Example 2, printed page 5 (PDF page 11): the damped simple harmonic oscillator loses energy until it comes to rest"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, Eq. (7.16), printed page 148 (PDF page 151): the underdamped, critically damped and overdamped cases of the damped linear oscillator, all decaying"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the damped oscillator model of [[post-cm04-linear-damping-model]] with
$m>0$, $k>0$ and $c>0$ (strict damping), force law $F(x,v)=-kx-cv$ and
energy $E(x,v)=\tfrac12mv^{2}+\tfrac12kx^{2}$. Write
$\Delta=c^{2}-4mk$, $\gamma=c/(2m)>0$,
$\lambda_{\pm}=(-c\pm\sqrt{\Delta})/(2m)$ for $\Delta\ge0$,
$\lambda=-c/(2m)$ for $\Delta=0$ and $\omega=\sqrt{4mk-c^{2}}/(2m)$ for
$\Delta<0$. Then:

1. **Motion bounds.** For every motion $x:\mathbb R\to\mathbb R$ of the model
   with datum $(0,x_{0},v_{0})$ and $r_{0}:=\sqrt{x_{0}^{2}+v_{0}^{2}}$ the
   following bounds hold for all $t\ge0$, with the coefficients $A,B$ of the
   classification of [[pthm-cm04-damped-motion]]:
   - $\Delta>0$: $\lvert x(t)\rvert\le(\lvert A\rvert+\lvert
     B\rvert)e^{\lambda_{+}t}$ and
     $\lvert x'(t)\rvert\le\bigl(\lvert\lambda_{+}\rvert\lvert
     A\rvert+\lvert\lambda_{-}\rvert\lvert B\rvert\bigr)e^{\lambda_{+}t}$;
   - $\Delta=0$: $\lvert x(t)\rvert\le(\lvert A\rvert+\lvert
     B\rvert t)e^{\lambda t}$ and
     $\lvert x'(t)\rvert\le\bigl(\lvert\lambda A+B\rvert+\lvert\lambda
     B\rvert t\bigr)e^{\lambda t}$;
   - $\Delta<0$: $\lvert x(t)\rvert\le(\lvert A\rvert+\lvert
     B\rvert)e^{-\gamma t}$ and $\lvert x'(t)\rvert\le\bigl(\lvert\omega
     B-\gamma A\rvert+\lvert\gamma B+\omega A\rvert\bigr)e^{-\gamma t}$;
   and there are constants $C_{1},C_{2}>0$, depending only on $(m,k,c)$, with
   $$\lvert x(t)\rvert\le C_{1}r_{0},\qquad\lvert x'(t)\rvert\le C_{2}r_{0} \qquad(t\ge0).$$
2. **Convergence.** For every motion, $x(t)\to0$ and $x'(t)\to0$ as
   $t\to+\infty$ ([[def-limits-at-infinity]]).
3. **Asymptotic stability.** The rest point $(0,0)$ is Lyapunov stable and
   globally asymptotically stable in the sense of
   [[def-cm-equilibrium-and-lyapunov-stability]] for the model's phase
   system: for every $\varepsilon>0$ there is $\delta>0$ such that every
   motion with $\lVert(x(t_{0}),x'(t_{0}))\rVert_{2}<\delta$ for some
   $t_{0}$ is defined for all $t\ge t_{0}$ and satisfies
   $\lVert(x(t),x'(t))\rVert_{2}<\varepsilon$ for all $t\ge t_{0}$; and
   every motion satisfies $\lVert(x(t),x'(t))\rVert_{2}\to0$ as
   $t\to+\infty$. The norm is the Euclidean norm on $\mathbb R^{2}$
   ([[def-euclidean-inner-product]]).

The constants are explicit in the proof and no value of $m,k,c$ is asserted.

## Facts & Assumptions

**Given:** The strictly damped model with $m>0$, $k>0$, $c>0$, a motion
$x:\mathbb R\to\mathbb R$ with datum $(0,x_{0},v_{0})$, and
$r_{0}=\sqrt{x_{0}^{2}+v_{0}^{2}}$.

[L1] Model vocabulary ([[post-cm04-linear-damping-model]],
[[def-cm04-one-dimensional-models-and-equilibria]],
[[pthm-cm04-damped-motion]]): all motions extend to $\mathbb R$ and are
classified by the sign of $\Delta$ into the three families, with the
coefficients $A,B$ of clause 4 of
[[thm-cm-homogeneous-oscillator-solution-classification]] applied to the
datum; the energy satisfies
$E(x(t),x'(t))\le E(x(0),x'(0))$ for every $t\ge0$ because $E$ is
nonincreasing, and $E(0)=E(x_{0},v_{0})=\tfrac12mv_{0}^{2}+\tfrac12kx_{0}^{2}$;
the equation is $m\,x''+c\,x'+k\,x=0$; the phase system is the one of
[[def-cm-oscillator-model-and-phase-system]].

[L2] [[cor-cm-homogeneous-oscillator-decay]]: in the three cases, with the
coefficients $A,B$ of [L1], $\lvert x(t)\rvert\le(\lvert A\rvert+\lvert
B\rvert)e^{\lambda_{+}t}$ for $\Delta>0$, $\lvert x(t)\rvert\le(\lvert
A\rvert+\lvert B\rvert t)e^{\lambda t}$ for $\Delta=0$, and
$\lvert x(t)\rvert\le(\lvert A\rvert+\lvert B\rvert)e^{-\gamma t}$ for
$\Delta<0$, for $t\ge0$; in each case the decay exponent is negative:
$\lambda_{+}<0$ for $\Delta>0$ (because $\sqrt\Delta<c$ when
$k>0$), $\lambda=-c/(2m)<0$ for $\Delta=0$, and $\gamma>0$ for
$\Delta<0$.

[L3] Exponential calculus and its values
([[thm-derivative-of-exponential]], [[thm-algebra-of-derivatives]],
[[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]],
[[thm-exponential-is-strictly-increasing]],
[[thm-exponential-limits-and-range]],
[[def-real-exponential-function-and-e]]):
$(e^{\mu t})'=\mu e^{\mu t}$ for real $\mu$; products and sums are
differentiated by the algebra of derivatives and composites by the chain
rule; $e^{0}=1$; $e^{s}\le e^{0}=1$ for $s\le0$; and
$\exp(s)\to0$ as $s\to-\infty$, so for every $\eta>0$ there is $M$ with
$e^{s}<\eta$ for every $s<-M$.

[L4] [[thm-nonnegative-series-bounded-partial-sums]] with
[[def-real-exponential-function-and-e]]: for $u\ge0$ the exponential series
has nonnegative terms, and the partial sum $1+u$ is at most the sum, so
$$u\le e^{u}\qquad(u\ge0).$$

[L5] [[thm-of-square-roots]], [[lem-of-square-monotone]]: square roots of
nonnegative reals exist and are unique, and the square root is strictly
increasing on $[0,\infty)$; in particular
$\lvert x'(t)\rvert\le\sqrt{2E(x(t),x'(t))/m}$ for every motion.

## Proof

**Proof technique:** cases on the sign of $\Delta$; use the classification
and the decay corollary for the position, the energy bound and the explicit
derivatives for the velocity, then assemble the uniform bound and the
stability statement.

1.1 Preliminary. Because the phase system is autonomous, all statements are invariant under translating time, and it suffices to consider the datum at $t_{0}=0$; the functions $x$ and $x'$ of the statement are then defined for all $t\ge0$ by [L1]. Also $E(0)=\tfrac12mv_{0}^{2}+\tfrac12kx_{0}^{2} \le\tfrac12\max(m,k)\,r_{0}^{2}$ because $v_{0}^{2}\le r_{0}^{2}$ and $x_{0}^{2}\le r_{0}^{2}$; hence by [L1] and [L5], $$\lvert x'(t)\rvert\le\sqrt{\frac{2E(x(t),x'(t))}{m}}\le \sqrt{\frac{\max(m,k)}{m}}\;r_{0}\qquad(t\ge0),$$ which is the uniform velocity bound of clause 1 with $C_{2}^{\mathrm E}:=\sqrt{\max(m,k)/m}$; and every motion is defined on all of $\mathbb R$ by [L1]. [given, L1, L5, algebra]

2.1 Case $\Delta>0$. Here $D:=\lambda_{+}-\lambda_{-}=\sqrt\Delta>0$ and the coefficients are $A=(v_{0}-\lambda_{-}x_{0})/D$, $B=(\lambda_{+}x_{0}-v_{0})/D$ by [L1]. Then $\lvert A\rvert\le(1+\lvert\lambda_{-}\rvert)r_{0}/D$ and $\lvert B\rvert\le(1+\lvert\lambda_{+}\rvert)r_{0}/D$ because $\lvert x_{0}\rvert,\lvert v_{0}\rvert\le r_{0}$. By [L2], $\lvert x(t)\rvert\le(\lvert A\rvert+\lvert B\rvert)e^{\lambda_{+}t}$, so $\lvert x(t)\rvert\le C_{1}r_{0}$ with $C_{1}:=\bigl(2+\lvert\lambda_{-}\rvert+\lvert\lambda_{+}\rvert\bigr)/D$, using $e^{\lambda_{+}t}\le1$ for $t\ge0$ by [L3]. Differentiating $x=Ae^{\lambda_{+}t}+Be^{\lambda_{-}t}$ with [L3] gives $x'=\lambda_{+}Ae^{\lambda_{+}t}+\lambda_{-}Be^{\lambda_{-}t}$, so $\lvert x'(t)\rvert\le(\lvert\lambda_{+}\rvert\lvert A\rvert+ \lvert\lambda_{-}\rvert\lvert B\rvert)e^{\lambda_{+}t}$; this is the displayed case bound, and it tends to $0$ as $t\to+\infty$ because $e^{\lambda_{+}t}\to0$ by [L3]. [assume-case 1, given, step 1.1, L1, L2, L3, algebra]

2.2 Case $\Delta=0$. Here $\lambda=-c/(2m)<0$, $A=x_{0}$ and $B=v_{0}-\lambda x_{0}$ by [L1], so $\lvert A\rvert\le r_{0}$ and $\lvert B\rvert\le(1+\lvert\lambda\rvert)r_{0}$. For $t\ge0$ put $u=\lvert\lambda\rvert t\ge0$; by [L4], $u\le e^{u}$, that is $t\,e^{\lambda t}=t\,e^{-\lvert\lambda\rvert t}\le1/\lvert\lambda\rvert$. By [L2], $\lvert x(t)\rvert\le(\lvert A\rvert+\lvert B\rvert t)e^{\lambda t}\le\lvert A\rvert+\lvert B\rvert/\lvert\lambda\rvert \le\bigl(1+(1+\lvert\lambda\rvert)/\lvert\lambda\rvert\bigr)r_{0}$, which is a uniform bound of the form $C_{1}r_{0}$ with $C_{1}:=2+1/\lvert\lambda\rvert$; this is the displayed case bound for the position. To see the convergence, use the sharper inequality $t\,e^{-\lvert\lambda\rvert t}\le(2/\lvert\lambda\rvert) e^{-\lvert\lambda\rvert t/2}$ for $t\ge0$, obtained by applying [L4] to $u=\lvert\lambda\rvert t/2$: $\lvert\lambda\rvert t/2\le e^{\lvert\lambda\rvert t/2}$ implies $t e^{-\lvert\lambda\rvert t} \le(2/\lvert\lambda\rvert)e^{-\lvert\lambda\rvert t/2}$. Hence $\lvert x(t)\rvert\le\lvert A\rvert e^{-\lvert\lambda\rvert t} +(2\lvert B\rvert/\lvert\lambda\rvert)e^{-\lvert\lambda\rvert t/2} \to0$ as $t\to+\infty$ by [L3]. Differentiating $x=(A+Bt)e^{\lambda t}$ with [L3] gives $x'=(\lambda A+B+\lambda Bt)e^{\lambda t}$, so $\lvert x'(t)\rvert\le(\lvert\lambda A+B\rvert+\lvert\lambda B\rvert t)e^{\lambda t}$, the displayed case bound, and $\lvert\lambda B\rvert t\,e^{\lambda t}\to0$ by the sharper inequality; hence $x'(t)\to0$ as well. [assume-case 2, given, step 1.1, L1, L2, L3, L4, algebra]

2.3 Case $\Delta<0$. Here $\gamma>0$, $\omega>0$, $A=x_{0}$, $B=(v_{0}+\gamma x_{0})/\omega$ by [L1], so $\lvert A\rvert\le r_{0}$ and $\lvert B\rvert\le(1+\gamma)r_{0}/\omega$. By [L2], $\lvert x(t)\rvert\le(\lvert A\rvert+\lvert B\rvert)e^{-\gamma t}$, which tends to $0$ by [L3]; the displayed case bound for the position follows. Differentiating $x=e^{-\gamma t}(A\cos\omega t+B\sin\omega t)$ with [L3] gives $$x'(t)=e^{-\gamma t}\bigl[(\omega B-\gamma A)\cos(\omega t)-(\gamma B+\omega A)\sin(\omega t)\bigr],$$ so $\lvert x'(t)\rvert\le(\lvert\omega B-\gamma A\rvert+ \lvert\gamma B+\omega A\rvert)e^{-\gamma t}$, the displayed case bound, and this tends to $0$ by [L3]. [assume-case 3, given, step 1.1, L1, L2, L3, algebra]

3.1 Uniform bound and stability. By the three cases of steps 2.1-2.3 the position bound $\lvert x(t)\rvert\le C_{1}r_{0}$ holds for all $t\ge0$ with the constant $C_{1}$ of the case at hand, and by step 1.1 the velocity bound $\lvert x'(t)\rvert\le C_{2}r_{0}$ holds with the universal constant $C_{2}:=C_{2}^{\mathrm E}$ from energy monotonicity; both constants depend only on $(m,k,c)$. Let $\varepsilon>0$ and set $\delta:=\varepsilon/ (C_{1}+C_{2})>0$. If a motion satisfies $r_{0}=\lVert(x(t_{0}),x'(t_{0}))\rVert_{2}<\delta$ for some $t_{0}$, then the shifted curve $s\mapsto x(t_{0}+s)$ is again a motion of the autonomous model, with datum $(0,x(t_{0}),x'(t_{0}))$ and the same initial phase norm $r_{0}$, so the uniform bounds of steps 1.1 and 2.1-2.3 applied to it give $$\lVert(x(t),x'(t))\rVert_{2}=\sqrt{x(t)^{2}+x'(t)^{2}}\le\lvert x(t)\rvert +\lvert x'(t)\rvert\le(C_{1}+C_{2})r_{0}<\varepsilon\qquad(t\ge t_{0}),$$ so $(0,0)$ is Lyapunov stable in the sense of [[def-cm-equilibrium-and-lyapunov-stability]]; and clauses 1 and 2 give $x(t)\to0$, $x'(t)\to0$ for every motion, so every motion tends to the rest point in the phase-plane norm and $(0,0)$ is globally asymptotically stable. [cases-exhaustive, given, step 1.1, step 2.1, step 2.2, step 2.3, algebra] ∎

## Remarks

- **The three regimes at a glance.** For $\Delta>0$ the motion is a
  combination of two decaying exponentials (overdamped), for $\Delta=0$ of
  $e^{\lambda t}$ and $te^{\lambda t}$ (critically damped) and for
  $\Delta<0$ of a decaying oscillation (underdamped); in every case the
  decay is exponential with rate at least $\min(\lvert\lambda_{+}\rvert,
  \lvert\lambda\rvert,\gamma)>0$, uniformly for data of bounded phase norm.

- **Stability is a statement about the declared model.** The asymptotic
  stability of $(0,0)$ follows from the explicit families of the linear
  model; it is not a claim that any real oscillator inevitably comes to
  rest, nor does it carry any empirical qualification beyond the model's
  own.

