---
id: pthm-cm04-damped-decay-and-stability
kind: physics-theorem
title: "Strictly damped oscillator: explicit decay bounds, convergence to rest and asymptotic stability of the origin"
status: published
origin: session
domain: physics
dependency_level: 18
deps: [post-cm04-linear-damping-model, def-cm04-one-dimensional-models-and-equilibria, def-cm04-phase-plane-and-energy-level-sets, def-cm01-units, pthm-cm04-damped-motion, def-cm-equilibrium-and-lyapunov-stability, def-cm-oscillator-model-and-phase-system, thm-cm-homogeneous-oscillator-solution-classification, cor-cm-homogeneous-oscillator-decay, thm-exponential-is-strictly-increasing, thm-exponential-limits-and-range, def-real-exponential-function-and-e, thm-nonnegative-series-bounded-partial-sums, def-limits-at-infinity, def-euclidean-inner-product, def-metric-ball, thm-of-square-roots, lem-of-square-monotone, thm-derivative-of-exponential, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule, def-derivative, def-interval]
dependency_roles:
  post-cm04-linear-damping-model: physical-assumption
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  def-cm04-phase-plane-and-energy-level-sets: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
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
physical_scope: "The strictly damped oscillator with m>0, k>0, c>0: every motion has explicit position and velocity bounds in normalized SI coordinates, tends to zero together with its velocity, and the origin of the phase plane is a globally asymptotically stable rest point in the phase norm defined by the numerical SI coordinates. The result is a conditional deduction from the declared model data; it asserts no value of the parameters, no measured decay rate and no behaviour of any real damper, and its constants are the explicit ones produced by the classification."
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
energy $E(x,v)=\tfrac12mv^{2}+\tfrac12kx^{2}$. Position and velocity
coordinates in every phase norm below are their normalized numerical SI
values, as defined in clause (a) of
[[def-cm04-phase-plane-and-energy-level-sets]]. For the datum
$(0,x_{0},v_{0})$, put $r_{0}:=\lVert(x_{0},v_{0})\rVert_{2}$ in that norm.
In displayed time-dependent formulas, $t$ is read numerically in seconds,
and rates in exponents are read in inverse seconds. Write
$\Delta=c^{2}-4mk$, $\gamma=c/(2m)>0$,
$\lambda_{\pm}=(-c\pm\sqrt{\Delta})/(2m)$ for $\Delta\ge0$,
$\lambda=-c/(2m)$ for $\Delta=0$ and $\omega=\sqrt{4mk-c^{2}}/(2m)$ for
$\Delta<0$. Then:

1. **Motion bounds.** For every motion $x:\mathbb R\to\mathbb R$ of the model
   with datum $(0,x_{0},v_{0})$ and phase norm $r_{0}$ the following bounds
   hold for all $t\ge0$, with the coefficients $A,B$ of the
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
   $$\lvert x(t)\rvert\le C_{1}r_{0},\qquad\lvert x'(t)\rvert\le C_{2}r_{0} \qquad(t\ge0),$$
   for the numerical SI coordinate values; equivalently the corresponding
   physical position and velocity are bounded by $(1\,\mathrm m)C_{1}r_{0}$
   and $(1\,\mathrm{m/s})C_{2}r_{0}$. Here $C_{1},C_{2}>0$ are dimensionless
   constants in the normalized SI coordinates and depend only on the
   numerical values of $(m,k,c)$ in the units declared by
   [[def-cm01-units]].
2. **Convergence.** For every maximal motion, $x(t)\to0$ and $x'(t)\to0$ as
   $t\to+\infty$ ([[def-limits-at-infinity]]).
3. **Asymptotic stability.** The rest point $(0,0)$ is Lyapunov stable and
   globally asymptotically stable in the sense of
   [[def-cm-equilibrium-and-lyapunov-stability]] for the model's phase
   system: for every $\varepsilon>0$ there is $\delta>0$ such that every
   maximal motion with $\lVert(x(t_{0}),x'(t_{0}))\rVert_{2}<\delta$ for some
   $t_{0}$ is defined for all $t\ge t_{0}$ and satisfies
   $\lVert(x(t),x'(t))\rVert_{2}<\varepsilon$ for all $t\ge t_{0}$; and
   every maximal motion satisfies $\lVert(x(t),x'(t))\rVert_{2}\to0$ as
   $t\to+\infty$. The norm is the Euclidean norm on the normalized numerical
   SI coordinates of [[def-cm04-phase-plane-and-energy-level-sets]].

The constants are explicit in the proof and no value of $m,k,c$ is asserted.

## Facts & Assumptions

**Given:** The strictly damped model with $m>0$, $k>0$, $c>0$, a motion $x:\mathbb R\to\mathbb R$ with datum $(0,x_{0},v_{0})$, the phase norm $r_{0}=\lVert(x_{0},v_{0})\rVert_{2}$ of clause (a) of [[def-cm04-phase-plane-and-energy-level-sets]], and the dimensionless parameters $M:=m/(1\,\mathrm{kg})$, $K:=k/(1\,\mathrm{N/m})$ and $C:=c/(1\,\mathrm{kg/s})$. Numerical rate values are denoted by $\Lambda_{\pm}:=(1\,\mathrm s)\lambda_{\pm}$, $\Lambda:=(1\,\mathrm s)\lambda$, $\Gamma:=(1\,\mathrm s)\gamma$ and $W:=(1\,\mathrm s)\omega$ where applicable.

[L1] Model vocabulary ([[post-cm04-linear-damping-model]], [[def-cm04-one-dimensional-models-and-equilibria]], [[pthm-cm04-damped-motion]]): all motions extend to $\mathbb R$ and are classified by the sign of $\Delta$ into the three families, with the coefficients $A,B$ of clause 4 of [[thm-cm-homogeneous-oscillator-solution-classification]] applied to the datum; the energy satisfies $E(x(t),x'(t))\le E(x(0),x'(0))$ for every $t\ge0$ because $E$ is nonincreasing, and $E(0)=E(x_{0},v_{0})=\tfrac12mv_{0}^{2}+\tfrac12kx_{0}^{2}$; writing $X:=x$ and $V:=x'$ for the numerical SI coordinates, its numerical energy in joules is $\mathcal E:=E/(1\,\mathrm J)=\tfrac12MV^{2}+\tfrac12KX^{2}$; the equation is $m\,x''+c\,x'+k\,x=0$; the phase system is the one of [[def-cm-oscillator-model-and-phase-system]].

[L2] [[cor-cm-homogeneous-oscillator-decay]]: in the three cases, with the coefficients $A,B$ of [L1], $\lvert x(t)\rvert\le(\lvert A\rvert+\lvert B\rvert)e^{\lambda_{+}t}$ for $\Delta>0$, $\lvert x(t)\rvert\le(\lvert A\rvert+\lvert B\rvert t)e^{\lambda t}$ for $\Delta=0$, and $\lvert x(t)\rvert\le(\lvert A\rvert+\lvert B\rvert)e^{-\gamma t}$ for $\Delta<0$, for $t\ge0$; in each case the decay exponent is negative: $\lambda_{+}<0$ for $\Delta>0$ (because $\sqrt\Delta<c$ when $k>0$), $\lambda=-c/(2m)<0$ for $\Delta=0$, and $\gamma>0$ for $\Delta<0$.

[L3] Exponential calculus and its values ([[thm-derivative-of-exponential]], [[thm-algebra-of-derivatives]], [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-limits-and-range]], [[def-real-exponential-function-and-e]]): $(e^{\mu t})'=\mu e^{\mu t}$ for real $\mu$; products and sums are differentiated by the algebra of derivatives and composites by the chain rule; $e^{0}=1$; $e^{s}\le e^{0}=1$ for $s\le0$; and $\exp(s)\to0$ as $s\to-\infty$, so for every $\eta>0$ there is $M$ with $e^{s}<\eta$ for every $s<-M$.

[L4] [[thm-nonnegative-series-bounded-partial-sums]] with
[[def-real-exponential-function-and-e]]: for $u\ge0$ the exponential series
has nonnegative terms, and the partial sum $1+u$ is at most the sum, so
$$u\le e^{u}\qquad(u\ge0).$$

[L5] [[thm-of-square-roots]], [[lem-of-square-monotone]]: square roots of nonnegative reals exist and are unique, and the square root is strictly increasing on $[0,\infty)$; in particular $\lvert x'(t)\rvert\le\sqrt{2E(x(t),x'(t))/m}$ for every motion.

## Proof

**Proof technique:** cases on the sign of $\Delta$; use the classification and the decay corollary for the position in normalized SI coordinates, the energy bound for the normalized velocity, and then assemble the uniform bound and stability statement.

1.1 Preliminary. Because the phase system is autonomous, all statements are invariant under translating time, and it suffices to consider the datum at $t_{0}=0$; the functions $x$ and $x'$ of the statement are then defined for all $t\ge0$ by [L1]. Let $X_{0}:=x_{0}$ and $V_{0}:=v_{0}$ be the normalized numerical SI coordinates of the datum, and let $M,K$ be the dimensionless numerical values of $m,k$ defined in Given; then $r_{0}^{2}=X_{0}^{2}+V_{0}^{2}$. With $\mathcal E:=E/(1\,\mathrm J)$, the normalized initial energy is $$\mathcal E(0)=\tfrac12MV_{0}^{2}+\tfrac12KX_{0}^{2}\le\tfrac12\max(M,K)\,r_{0}^{2},$$ since $X_{0}^{2},V_{0}^{2}\le r_{0}^{2}$. By [L1] the energy is nonincreasing and $\mathcal E(t)\ge\tfrac12MV(t)^{2}$, where $V(t):=x'(t)$ is the normalized numerical SI velocity coordinate; hence $$\lvert V(t)\rvert\le\sqrt{\frac{2\mathcal E(t)}{M}}\le\sqrt{\frac{\max(M,K)}{M}}\;r_{0}\qquad(t\ge0).$$ This is the uniform normalized velocity bound with $C_{2}^{\mathrm E}:=\sqrt{\max(M,K)/M}$; and every maximal motion is defined on all of $\mathbb R$, while arbitrary local motions are its restrictions by [L1]. [given, L1, L5, algebra]

2.1 Case $\Delta>0$. Let $\Lambda_{\pm}:=(1\,\mathrm s)\lambda_{\pm}$ and $d:=\Lambda_{+}-\Lambda_{-}>0$ be the numerical SI rates and their difference. Write $\bar A,\bar B$ for the numerical SI values of the position coefficients $A,B$ in [L1]. Their formulas give $$\bar A=\frac{V_{0}-\Lambda_{-}X_{0}}{d},\qquad\bar B=\frac{\Lambda_{+}X_{0}-V_{0}}{d}.$$ Hence $|\bar A|\le(1+|\Lambda_{-}|)r_{0}/d$ and $|\bar B|\le(1+|\Lambda_{+}|)r_{0}/d$, since $|X_{0}|,|V_{0}|\le r_{0}$. By [L2], $|x(t)|\le(|\bar A|+|\bar B|)e^{\Lambda_{+}t}$, so $|x(t)|\le C_{1}r_{0}$ with $C_{1}:=(2+|\Lambda_{-}|+|\Lambda_{+}|)/d$, using $e^{\Lambda_{+}t}\le1$ for $t\ge0$ by [L3]. Differentiating $x(t)=\bar A e^{\Lambda_{+}t}+\bar B e^{\Lambda_{-}t}$ gives the numerical velocity $x'(t)=\Lambda_{+}\bar A e^{\Lambda_{+}t}+\Lambda_{-}\bar B e^{\Lambda_{-}t}$, so $|x'(t)|\le(|\Lambda_{+}||\bar A|+|\Lambda_{-}||\bar B|)e^{\Lambda_{+}t}$, the normalized form of the displayed case bound; it tends to $0$ because $e^{\Lambda_{+}t}\to0$ by [L3]. [assume-case 1, given, step 1.1, L1, L2, L3, algebra]

2.2 Case $\Delta=0$. Write $\Lambda:=(1\,\mathrm s)\lambda<0$, and let $\bar A,\bar B$ be the numerical SI values of the critical-case coefficients in [L1]. The coefficient formulas give $\bar A=X_{0}$ and $\bar B=V_{0}-\Lambda X_{0}$, so $|\bar A|\le r_{0}$ and $|\bar B|\le(1+|\Lambda|)r_{0}$. For $t\ge0$ put $u=|\Lambda|t\ge0$; by [L4], $u\le e^{u}$, so $t e^{\Lambda t}\le1/|\Lambda|$. By [L2], the normalized position satisfies $|x(t)|\le(|\bar A|+|\bar B|t)e^{\Lambda t}\le|\bar A|+|\bar B|/|\Lambda|\le(2+1/|\Lambda|)r_{0}$; take $C_{1}:=2+1/|\Lambda|$. For convergence use $t e^{-|\Lambda|t}\le(2/|\Lambda|)e^{-|\Lambda|t/2}$, obtained from [L4] with $u=|\Lambda|t/2$. Thus $|x(t)|\le|\bar A|e^{-|\Lambda|t}+(2|\bar B|/|\Lambda|)e^{-|\Lambda|t/2}\to0$ by [L3]. Differentiating $x(t)=(\bar A+\bar B t)e^{\Lambda t}$ gives the numerical velocity $x'(t)=(\Lambda\bar A+\bar B+\Lambda\bar B t)e^{\Lambda t}$; its $t$-term tends to $0$ by the same inequality and its other term tends to $0$ by [L3]. This proves the displayed case bounds and $x'(t)\to0$. [assume-case 2, given, step 1.1, L1, L2, L3, L4, algebra]

2.3 Case $\Delta<0$. Write $\Gamma:=(1\,\mathrm s)\gamma>0$ and $W:=(1\,\mathrm s)\omega>0$, and let $\bar A,\bar B$ be the numerical SI values of the oscillatory-case coefficients in [L1]. Then $\bar A=X_{0}$ and $\bar B=(V_{0}+\Gamma X_{0})/W$, so $|\bar A|\le r_{0}$ and $|\bar B|\le(1+\Gamma)r_{0}/W$. By [L2], the numerical position satisfies $|x(t)|\le(|\bar A|+|\bar B|)e^{-\Gamma t}$, which tends to $0$ by [L3]; take $C_{1}:=1+(1+\Gamma)/W$. Differentiating $x(t)=e^{-\Gamma t}(\bar A\cos(Wt)+\bar B\sin(Wt))$ gives the numerical velocity $$x'(t)=e^{-\Gamma t}\bigl[(W\bar B-\Gamma\bar A)\cos(Wt)-(\Gamma\bar B+W\bar A)\sin(Wt)\bigr],$$ so its absolute value is bounded by the normalized form of the displayed case bound and tends to $0$ by [L3]. [assume-case 3, given, step 1.1, L1, L2, L3, algebra]

3.1 Uniform bound and stability. By the three cases of steps 2.1-2.3 the numerical position bound $|x(t)|\le C_{1}r_{0}$ holds for all $t\ge0$ with the constant $C_{1}$ of the case at hand, and by step 1.1 the numerical velocity bound $|x'(t)|\le C_{2}r_{0}$ holds with the universal constant $C_{2}:=C_{2}^{\mathrm E}$ from energy monotonicity; both dimensionless constants depend only on the numerical SI values of $(m,k,c)$. Let $\varepsilon>0$ and set $\delta:=\varepsilon/(C_{1}+C_{2})>0$. If a maximal motion satisfies $r_{0}=\lVert(x(t_{0}),x'(t_{0}))\rVert_{2}<\delta$ for some $t_{0}$, then the shifted curve $s\mapsto x(t_{0}+s)$ is again a motion of the autonomous model, with datum $(0,x(t_{0}),x'(t_{0}))$ and the same initial phase norm $r_{0}$. Applying the uniform bounds of steps 1.1 and 2.1-2.3 gives $$\lVert(x(t),x'(t))\rVert_{2}=\sqrt{x(t)^{2}+x'(t)^{2}}\le|x(t)|+|x'(t)|\le(C_{1}+C_{2})r_{0}<\varepsilon\qquad(t\ge t_{0}),$$ where the norm is on the normalized SI phase coordinates of [[def-cm04-phase-plane-and-energy-level-sets]]. Thus $(0,0)$ is Lyapunov stable in the sense of [[def-cm-equilibrium-and-lyapunov-stability]]; and clauses 1 and 2 give $x(t)\to0$, $x'(t)\to0$ for every maximal motion, so every maximal motion tends to the rest point in the phase-plane norm and $(0,0)$ is globally asymptotically stable. [cases-exhaustive, given, step 1.1, step 2.1, step 2.2, step 2.3, algebra] ∎

## Remarks

- **The three regimes at a glance.** For $\Delta>0$ the motion is a combination of two decaying exponentials (overdamped), for $\Delta=0$ of $e^{\lambda t}$ and $te^{\lambda t}$ (critically damped) and for $\Delta<0$ of a decaying oscillation (underdamped); the overdamped case has rate $|\lambda_+|$, the underdamped case rate $\gamma$, and the critical case has a polynomial factor multiplying $e^{\lambda t}$. In that critical case the proof bounds this factor by an exponential with rate $|\lambda|/2$; these rates are positive and the bounds are uniform for data of bounded phase norm.

- **Stability is a statement about the declared model.** The asymptotic stability of $(0,0)$ follows from the explicit families of the linear model; it is not a claim that any real oscillator inevitably comes to rest, nor does it carry any empirical qualification beyond the model's own.

