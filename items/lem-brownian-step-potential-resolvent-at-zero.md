---
id: lem-brownian-step-potential-resolvent-at-zero
kind: lemma
title: "Brownian step-potential resolvent at zero"
status: draft
origin: pipeline
deps: [lem-brownian-motion-has-a-jointly-measurable-continuous-version, def-brownian-motion, thm-brownian-future-path-markov-property, def-brownian-transition-semigroup, lem-brownian-transition-semigroup-property, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-open-subsets-of-r-structure, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-substitution, thm-gaussian-integral, thm-dominated-convergence, thm-taking-out-what-is-known, def-countable-choice, def-dependent-choice, def-axiom-of-choice]
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

Let $\alpha,\beta>0$, let $V(x):=\alpha+\beta\,1_{\{x>0\}}$ for $x\in\mathbb R$,
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

[F1] Every path of $\widehat B$ is continuous and $(t,\omega)\mapsto\widehat B_t(\omega)$ is product measurable; hence $(x,t,\omega)\mapsto V(x+\widehat B_t(\omega))$ is product measurable and indistinguishability lets every almost-sure statement be computed with $\widehat B$. [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F2] Markov property: $E[\Phi((B_{s+r})_{r\ge0})\mid\mathcal F_s]=\Psi_\Phi(B_s)$ almost surely for bounded Borel $\Phi$, with $\Psi_\Phi(y)=\int\Phi(y+w)\,\mu(dw)$; and for $f$ bounded Borel, $P_sf(x)=E[f(x+B_s)]=\int f(y)p_s(x,y)\,dy$ with $p_s$ the Brownian transition density. [[thm-brownian-future-path-markov-property]] [[def-brownian-transition-semigroup]] [[lem-brownian-transition-semigroup-property]]

[F3] FTC package: the indefinite integral of an $L^1$ function is absolutely continuous; for absolutely continuous $F$ one has $F(x)-F(a)=\int_a^xF'(t)\,dt$ for all $x$; and every open subset of $\mathbb R$ is an at most countable disjoint union of open intervals (its order components), so an indicator of an open set is differentiable almost everywhere along the line with the indicator as derivative off the at most countably many component endpoints. This interface carries AC$_\omega$ and DC. [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]] [[thm-open-subsets-of-r-structure]] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] [[def-countable-choice]] [[def-dependent-choice]]

[F4] Tonelli applies to nonnegative product-measurable integrands, giving measurability of the section integrals and equality of the iterated integrals; $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ has total mass one and $\int_{\mathbb R}e^{-v^2}dv=\sqrt\pi$. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]] [[thm-gaussian-integral]]

[F5] Substitution: for continuously differentiable strictly increasing substitutions the integral transforms as usual, and dominated convergence justifies limits and differentiations of parameter integrals with an integrable dominating function. [[thm-substitution]] [[thm-dominated-convergence]]

[F6] Taking out what is known: an $\mathcal F_s$-measurable bounded factor may be moved inside a conditional expectation. [[thm-taking-out-what-is-known]]

[F7] AC is the ambient assumption of the Brownian, Markov and conditional expectation interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For fixed $x$ the map $(t,\omega)\mapsto\exp(-\int_0^tV(x+\widehat B_r)dr)$ is nonnegative and product measurable, because $V(x+\widehat B_r)$ is product measurable by [F1] and the time integral of a product-measurable bounded function is recovered from dyadic Riemann sums; Tonelli in [F4] then makes $u(x)$ a well-defined element of $[0,\int_0^\infty e^{-\alpha t}dt]=[0,1/\alpha]$, and it also makes the map $x\mapsto u(x)$ Borel, since $(x,t,\omega)\mapsto V(x+\widehat B_t(\omega))$ is product measurable by [F1]. [given, F1, F4]

1.2 For $z\in\mathbb R$ and $\lambda:=\sqrt{2\alpha}$, the Gaussian time integral is $\int_0^\infty e^{-\alpha t}p_t(z)\,dt=\lambda^{-1}e^{-\lambda|z|}$: substituting $t=s^2$ and writing $p_{s^2}(z)=s^{-1}\varphi(z/s)$ turns it into the standard identity $\int_0^\infty e^{-au^2-b/u^2}\,du=\tfrac12\sqrt{\pi/a}\,e^{-2\sqrt{ab}}$ with $a=\alpha$ and $b=z^2/2$, which follows by adding the substitutions $u\mapsto\sqrt{b/a}/u$ and $v=\sqrt a\,u-\sqrt b/u$ and using $\int_{\mathbb R}e^{-v^2}dv=\sqrt\pi$. [F4, F5]

2.1 Consequently, for every bounded Borel $f:\mathbb R\to\mathbb R$ and $x\in\mathbb R$, $G_\alpha f(x):=\int_0^\infty e^{-\alpha t}P_tf(x)\,dt=\lambda^{-1}\int_{\mathbb R}e^{-\lambda|x-y|}f(y)\,dy$, since Tonelli and [step 1.2] give $\int_0^\infty e^{-\alpha t}\int_{\mathbb R}f(y)p_t(x-y)\,dy\,dt=\int_{\mathbb R}f(y)\lambda^{-1}e^{-\lambda|x-y|}\,dy$; the kernel is integrable with total integral $1/\alpha$, so the integral converges absolutely for bounded $f$. [step 1.2, F2, F4]

2.2 For every outcome and every $t>0$ the pathwise identity $e^{-\alpha t}-e^{-\int_0^tV(x+\widehat B_r)dr}=\beta\int_0^te^{-\alpha s}1_{\{x+\widehat B_s>0\}}e^{-\int_s^tV(x+\widehat B_r)dr}ds$ holds: the set $O:=\{s\in(0,t):x+\widehat B_s>0\}$ is open because the path is continuous, so by [F3] it is an at most countable disjoint union of open intervals; hence $A(s):=\int_0^s1_O$ is absolutely continuous, is differentiable at every point of $(0,t)$ outside the at most countable set of component endpoints, and has derivative $1_O$ there, so the exponent integral $s\mapsto\int_0^sV(x+\widehat B_r)dr$ has derivative $V(x+\widehat B_s)$ almost everywhere; the function $W(s):=e^{-\alpha s}e^{-\int_s^tV(x+\widehat B_r)dr}$ is a Lipschitz function of that absolutely continuous exponent, hence absolutely continuous, with $W'(s)=W(s)(V(x+\widehat B_s)-\alpha)$ almost everywhere, and [F3] applied to $W$ over $[0,t]$ gives the identity. [step 1.1, F1, F3]

3.1 For bounded Borel $f$ the function $G_\alpha f$ is continuous and $C^1$, with $(G_\alpha f)'(x)=-\int_{y<x}e^{-\lambda(x-y)}f(y)\,dy+\int_{y>x}e^{-\lambda(y-x)}f(y)\,dy$, obtained by dominated convergence from the difference quotients of the two half-line integrals; consequently $G_\alpha f$ is $C^1$ with the displayed derivative continuous, and at every point where $f$ is continuous one has $\tfrac12(G_\alpha f)''(x)=\alpha G_\alpha f(x)-f(x)$, because differentiating once more contributes $-\lambda f(x)$ from each side and $\lambda^2=2\alpha$. [step 2.1, F5]

3.2 Integrating [step 2.2] against $E$ and using Tonelli, $u(x)=\frac1\alpha-\beta\int_0^\infty\int_s^\infty e^{-\alpha s}E\bigl[1_{\{x+B_s>0\}}e^{-\int_s^tV(x+B_r)dr}\bigr]dt\,ds$, the integrand being nonnegative; substituting $\tau=t-s$ and applying the Markov property of [F2] together with [F6] to the bounded functional $w\mapsto e^{-\int_0^\tau V(x+w_r)dr}$ gives $\int_0^\infty E\bigl[1_{\{x+B_s>0\}}e^{-\int_s^{s+\tau}V(x+B_r)dr}\bigr]d\tau=E\bigl[1_{\{x+B_s>0\}}u(x+B_s)\bigr]$, because $\int_0^\infty\Psi_\tau(y)\,d\tau=u(y)$ by Tonelli. [step 2.2, F2, F4, F6]

4.1 Therefore $u(x)=\frac1\alpha-\beta\int_0^\infty e^{-\alpha s}E\bigl[1_{\{x+B_s>0\}}u(x+B_s)\bigr]ds$, that is, $u=G_\alpha 1-\beta\,G_\alpha(1_{\{y>0\}}u)$, an identity between bounded Borel functions because $1_{\{y>0\}}u$ is bounded Borel. [step 1.1, step 2.1, step 3.2]

5.1 By [step 3.1] applied to the bounded Borel functions $1$ and $1_{\{y>0\}}u$, the function $u$ is continuous and $C^1$ on $\mathbb R$, and off the single point $0$ one has $\tfrac12u''=\alpha G_\alpha1-\tfrac{\lambda^2}{2}G_\alpha(1_{\{y>0\}}u)-1+\beta1_{\{x>0\}}u=\alpha u-1+\beta1_{\{x>0\}}u$; hence $\tfrac12u''=\alpha u-1$ for $x<0$ and $\tfrac12u''=(\alpha+\beta)u-1$ for $x>0$. [step 3.1, step 4.1]

6.1 On $x<0$ the general solution of $\tfrac12u''=\alpha u-1$ is $u(x)=1/\alpha+A_1e^{\lambda x}+A_2e^{-\lambda x}$ with $\lambda=\sqrt{2\alpha}$, and boundedness of $u$ on $(-\infty,0)$ forces $A_2=0$, so $u(x)=1/\alpha+Ae^{\lambda x}$; on $x>0$ the general solution is $u(x)=1/(\alpha+\beta)+C_1e^{\mu x}+C_2e^{-\mu x}$ with $\mu=\sqrt{2(\alpha+\beta)}$, and boundedness on $(0,\infty)$ forces $C_1=0$, so $u(x)=1/(\alpha+\beta)+De^{-\mu x}$. [step 5.1]

7.1 Continuity of $u$ and of $u'$ at $0$, from [step 5.1], gives $1/\alpha+A=1/(\alpha+\beta)+D$ and $\lambda A=-\mu D$; substituting the second into the first yields $u(0)=1/\alpha+A$ with $\sqrt\alpha\bigl(u(0)-1/\alpha\bigr)=-\sqrt{\alpha+\beta}\bigl(u(0)-1/(\alpha+\beta)\bigr)$, whose solution is $u(0)=1/\sqrt{\alpha(\alpha+\beta)}$. [step 6.1]

8.1 The boundary and degeneracy cases are covered: $\alpha,\beta>0$ keep $V$ bounded between $\alpha$ and $\alpha+\beta$, so $0\le u\le1/\alpha$ and all the integrals converge absolutely; the potential has its single discontinuity at $x=0$, so the second-order equation is asserted only off $0$, where $1_{\{y>0\}}u$ is continuous; the case $x=0$ is handled by the continuity of $u$ and $u'$ rather than by the differential equation; the time integral starts at $t=0$ where the exponent vanishes; and the choice principles used are exactly those declared: AC$_\omega$ and DC enter through the FTC package of [F3], and AC is the ambient assumption of [F7]. [step 2.2, step 5.1, step 7.1, F3, F7, given] ∎

## Source notes

Yoshida, Lemmas 6.8.1-6.8.3, computes the step-potential resolvent at the origin by an ODE matching argument after identifying the resolvent kernel of the Gaussian semigroup. The proof above separates the two analytical inputs: the Gaussian resolvent kernel $\lambda^{-1}e^{-\lambda|x-y|}$ from the time integral of the heat kernel, and the Duhamel identity for the potential $V=\alpha+\beta1_{\{x>0\}}$, which is proved pathwise from the fundamental theorem for absolutely continuous functions. The conditional expectation step uses the future-path Markov property of the page and takes the bounded $\mathcal F_s$-measurable factor out.
