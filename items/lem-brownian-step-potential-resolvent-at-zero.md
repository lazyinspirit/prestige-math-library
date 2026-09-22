---
id: lem-brownian-step-potential-resolvent-at-zero
kind: lemma
title: "Brownian step-potential resolvent at zero"
status: draft
origin: pipeline
deps: [lem-brownian-motion-has-a-jointly-measurable-continuous-version, def-brownian-motion, thm-brownian-future-path-markov-property, def-brownian-transition-semigroup, lem-brownian-transition-semigroup-property, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-gaussian-integral, thm-dominated-convergence, thm-taking-out-what-is-known, def-countable-choice, def-dependent-choice, def-axiom-of-choice, thm-first-fundamental-theorem-of-calculus-for-l-one, cor-c-one-change-of-variables-for-l-one-functions, thm-monotone-convergence-for-the-integral, cor-zero-derivative-implies-constant]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nobuo Yoshida, Probability Theory, Lemmas 6.8.1-6.8.3, printed pp. 214-216"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\alpha,\beta>0$, let $V(x):=\alpha+\beta\,1_{\{x>0\}}$ for $x\in\mathbb R$,
let $B$ be a standard Brownian motion [[def-brownian-motion]] and let
$\widehat B$ be its all-path continuous jointly measurable version. Define, for
$x\in\mathbb R$,
$$u(x):=\int_0^\infty E\Bigl[\exp\Bigl(-\int_0^tV(x+\widehat B_r)\,dr\Bigr)\Bigr]dt .$$
Then $0\le u\le1/\alpha$, the function $u$ is Borel, $C^1$ on $\mathbb R$ and
$C^2$ off $0$, and
$$\tfrac12u''(x)=\alpha u(x)-1\quad(x<0),\qquad \tfrac12u''(x)=(\alpha+\beta)u(x)-1\quad(x>0),$$
while
$$u(0)=\frac{1}{\sqrt{\alpha(\alpha+\beta)}} .$$

## Facts & Assumptions

**Given:** AC, AC$_\omega$, DC, reals $\alpha,\beta>0$, the potential $V=\alpha+\beta1_{\{x>0\}}$, a standard Brownian motion $B$ and its jointly measurable continuous version $\widehat B$.

[F1] Every path of $\widehat B$ is continuous and $(t,\omega)\mapsto\widehat B_t(\omega)$ is product measurable; hence $(x,t,\omega)\mapsto V(x+\widehat B_t(\omega))$ is product measurable and the version agrees with B at all times on one measurable full event. We use only this full-event conclusion, not measurability of the entire equality set. [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F2] Markov property: $E[\Phi((B_{s+r})_{r\ge0})\mid\mathcal F_s]=\Psi_\Phi(B_s)$ almost surely for bounded Borel $\Phi$, with $\Psi_\Phi(y)=\int\Phi(y+w)\,\mu(dw)$; and for $f$ bounded Borel, $P_sf(x)=E[f(x+B_s)]=\int f(y)p_s(x,y)\,dy$ with $p_s$ the Brownian transition density. [[thm-brownian-future-path-markov-property]] [[def-brownian-transition-semigroup]] [[lem-brownian-transition-semigroup-property]] The future-path theorem also supplies its continuous-path Borel formulation; below it is applied to the Brownian process $\widehat B$ with its own natural filtration.

[F3] FTC package: the indefinite integral of an $L^1$ function is absolutely continuous and has the integrand as its derivative almost everywhere; for absolutely continuous $F$ one has $F(x)-F(a)=\int_a^xF'(t)\,dt$ for all $x$. This interface carries AC$_\omega$ and DC. [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]] [[thm-first-fundamental-theorem-of-calculus-for-l-one]] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] [[def-countable-choice]] [[def-dependent-choice]]

[F4] Tonelli applies to nonnegative product-measurable integrands, giving measurability of the section integrals and equality of the iterated integrals; $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ has total mass one and $\int_{\mathbb R}e^{-v^2}dv=\sqrt\pi$. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]] [[thm-gaussian-integral]]

[F5] The Lebesgue change-of-variables formula holds for a C1 diffeomorphism and an integrable function, using the absolute Jacobian, under Countable Choice. Monotone convergence passes nonnegative exhaustion limits, and dominated convergence applies under an integrable majorant. A differentiable function with zero derivative on an interval is constant. [[cor-c-one-change-of-variables-for-l-one-functions]] [[thm-monotone-convergence-for-the-integral]] [[thm-dominated-convergence]] [[cor-zero-derivative-implies-constant]]

[F6] Taking out what is known: an $\mathcal F_s$-measurable bounded factor may be moved inside a conditional expectation. [[thm-taking-out-what-is-known]]

[F7] AC is the ambient assumption of the Brownian, Markov and conditional expectation interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Write X for the supplied all-path continuous version. For parameters (x,t,omega,r), the nonnegative function $1_{\{0\le r\le t\}}V(x+X_r(\omega))$ is product measurable by [F1]. Its section integral in r is measurable by [F4]; for a measurability-only application one may equip the remaining parameter space with the zero measure, which is finite, so no parameter measurability is lost. Thus the exponential and its successive integrals in omega and t are measurable, and u is Borel. Since $\alpha t\le\int_0^tV(x+X_r)dr\le(\alpha+\beta)t$, one has $0\le u\le\int_0^\infty e^{-\alpha t}dt=1/\alpha$. The last integral follows from [F3] on finite intervals and then [F5] by monotone convergence. X is itself Brownian, since all its finite-dimensional laws agree with B. [F1, F3, F4, F5, given]

1.2 Put $I(a,b)=\int_0^\infty e^{-a s^2-b/s^2}ds$ for a>0,b>=0. For b=0, scaling the Gaussian integral gives $I(a,0)=\sqrt\pi/(2\sqrt a)$. For b>0 put $c=\sqrt{b/a}$ and $g(s)=e^{-a s^2-b/s^2}$. This is integrable, bounded by $e^{-as^2}$. Reciprocal substitution s=c/v gives $I(a,b)=\int_0^\infty(c/s^2)g(s)ds$. The increasing diffeomorphism $v=\sqrt a\,s-\sqrt b/s$ maps (0,infinity) onto the real line, with derivative $\sqrt a(1+c/s^2)$. As $v^2=as^2+b/s^2-2\sqrt{ab}$, [F4] and [F5] yield $\sqrt\pi=2\sqrt a\,e^{2\sqrt{ab}}I(a,b)$. All substitutions can first be applied on compact subintervals to integrable continuous functions, then exhausted by monotone convergence; the absolute Jacobian handles the reciprocal map. Now set t=s^2 in the Gaussian time integral, likewise by positive exhaustion. For $\lambda=\sqrt{2\alpha}$ this gives $$\int_0^\infty e^{-\alpha t}p_t(z)dt=\sqrt{2/\pi}\,I(\alpha,z^2/2)=\lambda^{-1}e^{-\lambda|z|},$$ including z=0 by the separate b=0 case. [F4, F5]

2.1 For bounded Borel f define $G_\alpha f(x)=\int_0^\infty e^{-\alpha t}P_tf(x)dt$. For nonnegative f, Tonelli and step 1.2 give $$G_\alpha f(x)=\lambda^{-1}\int_{\mathbb R}e^{-\lambda|x-y|}f(y)dy.$$ The kernel has integral $2/\lambda^2=1/\alpha$, as computed by integrating its exponential on each half-line using [F3] and exhaustion. For signed bounded f apply Tonelli separately to its positive and negative parts; both integrals are bounded by $\|f\|_\infty/\alpha$, so subtraction is legitimate and gives the same formula. [F2, F3, F4, F5, step 1.2]

2.2 Fix x and t>0. On each outcome, $A(s)=\int_0^s1_{\{x+X_r>0\}}dr$ is absolutely continuous with derivative $1_{\{x+X_s>0\}}$ almost everywhere by [F3]. Set $W(s)=e^{-\alpha s}\exp(-\int_s^t V(x+X_r)dr)$. The inner exponent is absolutely continuous and bounded on [0,t]. Composition with the exponential is absolutely continuous because the exponential is Lipschitz on its bounded range; the ordinary chain rule applies at every point where the inner derivative exists. Hence $W'(s)=\beta1_{\{x+X_s>0\}}W(s)$ almost everywhere. The AC fundamental theorem gives $$e^{-\alpha t}-\exp(-\int_0^tV(x+X_r)dr)=\beta\int_0^te^{-\alpha s}1_{\{x+X_s>0\}}\exp(-\int_s^tV(x+X_r)dr)ds.$$ No derivative at every point of an open-set boundary is asserted. [F1, F3, step 1.1]

3.1 Let f be bounded Borel and $K(z)=e^{-\lambda|z|}/\lambda$. For fixed x and |h|<=1, the difference quotient $|K(x+h-y)-K(x-y)|/|h|$ is at most $e^\lambda e^{-\lambda|x-y|}$, by the one-sided derivatives of K and integration along the segment. It converges for every y unequal to x to $-\operatorname{sgn}(x-y)e^{-\lambda|x-y|}$. Dominated convergence, with majorant $\|f\|_\infty e^\lambda e^{-\lambda|x-y|}$, therefore differentiates the kernel formula. Put $L(x)=\int_{y<x}e^{-\lambda(x-y)}f(y)dy$ and $R(x)=\int_{y>x}e^{-\lambda(y-x)}f(y)dy$. Then $G_\alpha f=(L+R)/\lambda$ and $(G_\alpha f)'=-L+R$. These L,R are continuous: on a compact range of x write them as exponential factors times indefinite integrals of locally bounded functions, with fixed finite tails. At any continuity point of f, the difference quotient of its weighted indefinite integral tends to the integrand value, since the average error is bounded by the supremum error near that point. Thus $L'=-\lambda L+f(x)$ and $R'=\lambda R-f(x)$ there. It follows that $(G_\alpha f)''=\lambda(L+R)-2f=2\alpha G_\alpha f-2f$ at each such point. The first derivative is continuous everywhere. [F3, F5, step 2.1]

3.2 For tau>=0, the function $\phi_{x,\tau}(w)=\exp(-\int_0^\tau V(x+w(r))dr)$ is Borel on continuous-path space: evaluation is jointly measurable as in [F1], and the section-integral argument of step 1.1 applies. Apply the continuous-path formulation in [F2] to X and this bounded functional. At time zero, X_0=0 makes its expectation the Wiener integral. At general s this gives $$E[\exp(-\int_s^{s+\tau}V(x+X_r)dr)\mid\mathcal F_s^X]=h_\tau(x+X_s),\qquad h_\tau(y)=E\phi_{y,\tau}(X).$$ The indicator $1_{\{x+X_s>0\}}$ is measurable for this filtration. Multiplying by it using [F6] and taking expectations yields an equality for each s,tau; the expectation property here is the defining conditional-expectation event identity with the whole event. Tonelli integrates these nonnegative quantities in s and tau, so no simultaneous choice of conditional-expectation versions over uncountably many times is required. Integrate step 2.2 in t and expectation, then translate t=s+tau using [F5]. Since $\int_0^\infty h_\tau(y)d\tau=u(y)$, the result is $$u(x)=\frac1\alpha-\beta\int_0^\infty e^{-\alpha s}E[1_{\{x+X_s>0\}}u(x+X_s)]ds.$$ [F1, F2, F4, F5, F6, step 1.1, step 2.2]

4.1 Set $f(y)=1_{\{y>0\}}u(y)$, bounded Borel by step 1.1. The semigroup formula and $G_\alpha1=1/\alpha$ in step 2.1 turn step 3.2 into $$u=G_\alpha1-\beta G_\alpha f.$$ Therefore step 3.1 already proves u is continuously differentiable on the whole real line. In particular f is continuous on each open half-line. [F2, step 1.1, step 2.1, step 3.1, step 3.2]

5.1 At every x unequal to zero, apply step 3.1 to 1 and to f from step 4.1. The coefficient beta must multiply both terms of its second derivative: $$\tfrac12u''=\alpha G_\alpha1-1-\beta(\alpha G_\alpha f-f)=\alpha u-1+\beta1_{\{x>0\}}u.$$ This is continuous separately on the half-lines, so u is C2 there and satisfies the stated two equations. At zero only the already established C1 regularity is used. [step 3.1, step 4.1]

6.1 To solve the ODE without an unproved general-solution assertion, on an interval where $v''=k^2v$, k>0, set $F=v'-kv$. Then $(e^{kx}F)'=0$, so [F5] makes F a constant times $e^{-kx}$. Differentiating $e^{-kx}v$ and then subtracting the explicit primitive of that exponential gives, again by [F5], $v=Ae^{kx}+De^{-kx}$. Apply this with $v=u-1/\alpha$, k=lambda, on the negative half-line and with $v=u-1/(\alpha+\beta)$, $k=\mu=\sqrt{2(\alpha+\beta)}$, on the positive half-line. Boundedness in step 1.1 excludes the exponentially growing term at the respective infinite endpoint. Hence $$u(x)=1/\alpha+Ae^{\lambda x}\ (x<0),\qquad u(x)=1/(\alpha+\beta)+De^{-\mu x}\ (x>0).$$ [F5, step 1.1, step 5.1]

7.1 Continuity of $u$ and of $u'$ at $0$, from [step 5.1], gives $1/\alpha+A=1/(\alpha+\beta)+D$ and $\lambda A=-\mu D$; substituting the second into the first yields $u(0)=1/\alpha+A$ with $\sqrt\alpha\bigl(u(0)-1/\alpha\bigr)=-\sqrt{\alpha+\beta}\bigl(u(0)-1/(\alpha+\beta)\bigr)$, whose solution is $u(0)=1/\sqrt{\alpha(\alpha+\beta)}$. [step 6.1]

8.1 The boundary and degeneracy cases are covered: $\alpha,\beta>0$ keep $V$ bounded between $\alpha$ and $\alpha+\beta$, so $0\le u\le1/\alpha$ and all the integrals converge absolutely; the potential has its single discontinuity at $x=0$, so the second-order equation is asserted only off $0$, where $1_{\{y>0\}}u$ is continuous; the case $x=0$ is handled by the continuity of $u$ and $u'$ rather than by the differential equation; the time integral starts at $t=0$ where the exponent vanishes; and the choice principles used are exactly those declared: AC$_\omega$ and DC enter through the FTC package of [F3], and AC is the ambient assumption of [F7]. [step 2.2, step 5.1, step 7.1, F3, F7, given] ∎

## Source notes

Yoshida, Lemmas 6.8.1-6.8.3, computes the step-potential resolvent at the origin by an ODE matching argument after identifying the resolvent kernel of the Gaussian semigroup. The proof above separates the two analytical inputs: the Gaussian resolvent kernel $\lambda^{-1}e^{-\lambda|x-y|}$ from the time integral of the heat kernel, and the Duhamel identity for the potential $V=\alpha+\beta1_{\{x>0\}}$, which is proved pathwise from the fundamental theorem for absolutely continuous functions. The conditional expectation step uses the future-path Markov property of the page and takes the bounded $\mathcal F_s$-measurable factor out.
