---
id: thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law
kind: theorem
title: "The last Brownian zero has the arcsine law"
status: draft
origin: pipeline
deps: [def-brownian-zero-set, thm-brownian-future-path-markov-property, cor-law-of-the-brownian-maximum, def-brownian-motion-started-at-x, thm-brownian-scaling, def-brownian-transition-semigroup, lem-brownian-transition-semigroup-property, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-substitution, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-axiom-of-choice, def-brownian-motion]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Example 7.4.3 and equation (7.4.7)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $B$ be a standard Brownian motion [[def-brownian-motion]] and fix $t>0$.
Let
$$L_t:=\sup\{s\in[0,t]:B_s=0\}$$
be the last zero of the path before time $t$. Then for every $0\le u\le t$,
$$P(L_t\le u)=\frac{2}{\pi}\arcsin\sqrt{\frac ut},$$
and consequently the random variable $L_t/t$ has the arcsine density
$$f(x)=\frac{1}{\pi\sqrt{x(1-x)}},\qquad 0<x<1 .$$
Both endpoints receive no mass: $P(L_t=0)=0$ and $P(L_t=t)=0$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, a time $t>0$, and $u\in[0,t)$ with $s:=t-u>0$.

[F1] The zero set $Z$ is closed and contains $0$, so $L_t=\max Z_t$ is a zero of the path and $\{L_t\le u\}=\{Z\cap(u,t]=\emptyset\}$ for $0\le u\le t$. [[def-brownian-zero-set]]

[F2] Future-path Markov property: for every $u\ge0$ and every bounded Borel functional $\Phi$ on $\mathbb R^{[0,\infty)}$, $E[\Phi((B_{u+r})_{r\ge0})\mid\mathcal F_u]=\Psi_\Phi(B_u)$ almost surely, with $\Psi_\Phi(x)=\int\Phi(x+w)\,\mu(dw)$; in particular the conditional law of the shifted future given the past depends on the past only through $B_u$. [[thm-brownian-future-path-markov-property]]

[F3] Maximum law: for a standard Brownian motion $W$ and $s>0$, $P(\sup_{0\le r\le s}W_r\le x)=2\Phi(x/\sqrt s)-1$ for $x\ge0$, so $P(\sup_{0\le r\le s}W_r\ge x)=2\overline\Phi(x/\sqrt s)$ for $x>0$. [[cor-law-of-the-brownian-maximum]]

[F4] Shifted laws: $P_y$ is the law of $y+B$, under which increments are again independent Gaussian increments, so every distributional statement for the standard motion transfers to the motion started at $y$. [[def-brownian-motion-started-at-x]]

[F5] Scaling: for $c>0$ the process $Y_r=c^{-1/2}B_{cr}$ is again a standard Brownian motion, and zeros correspond under the time change, so $L_t(B)/t$ has the law of $L_1$. [[thm-brownian-scaling]]

[F6] For bounded Borel $f$ and $u>0$, $E[f(B_u)]=P_uf(0)=\int_{\mathbb R}f(x)p_u(0,x)\,dx$, where $p_u$ is the Brownian transition density. [[def-brownian-transition-semigroup]] [[lem-brownian-transition-semigroup-property]]

[F7] $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ is the standard normal density, so $2\Phi(a|z|)-1=\int_{-a|z|}^{a|z|}\varphi(y)\,dy$, and Tonelli applies to the resulting double integral over the plane. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F8] Substitution: $\int_{\mathbb R}(2\Phi(a|z|)-1)\varphi(z)\,dz$ is computed in polar coordinates, where $dx\,dy=r\,dr\,d\theta$ and $\int_0^\infty re^{-r^2/2}\,dr=1$; also $\arctan a=\arcsin\bigl(a/\sqrt{1+a^2}\bigr)$ for $a>0$. [[thm-substitution]] [[lem-normal-density-has-total-mass-one]]

[F9] AC is the ambient assumption of the Brownian and conditional-expectation interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Since $Z$ is closed and $0\in Z$, the supremum $L_t$ is attained in $Z$, and $\{L_t\le u\}=\{Z\cap(u,t]=\emptyset\}$ for every $0\le u\le t$; moreover $L_t(B)/t$ has the law of $L_1$ by [F5], because zeros of $B$ on $[0,t]$ correspond to zeros of $Y$ on $[0,1]$. [given, F1, F5]

2.1 First let $u\in(0,t)$ and put $s:=t-u>0$. Let $\Phi$ be the indicator of $\{w:\inf_{r\in\mathbb Q\cap[0,s]}|w(r)|>0\}$. This is a bounded Borel functional because the infimum uses countably many coordinate maps. On continuous paths that start away from zero it is exactly the event of having no zero in $[0,s]$, hence no zero in $(0,s]$. Since $P(B_u=0)=0$, [F2] and [F1] therefore give $P(L_t\le u\mid\mathcal F_u)=E[\Phi((B_{u+r})_{r\ge0})\mid\mathcal F_u]=\Psi_\Phi(B_u)$ almost surely, where for $x\ne0$, $\Psi_\Phi(x)=P_x(\text{no zero in }(0,s])$. [step 1.1, F1, F2, F6]

3.1 For $x\ne0$ the shifted probability in [step 2.1] is $\Psi_\Phi(x)=2\Phi(|x|/\sqrt s)-1$: for $x>0$, absence of zeros in $(0,s]$ is the event that the motion started at $x$ stays positive, whose complement has probability $P(\sup_{0\le r\le s}(-W_r)\ge x)=2\overline\Phi(x/\sqrt s)$ by [F3] and [F4]; the case $x<0$ is analogous by symmetry. [step 2.1, F3, F4]

4.1 Since $P(B_u=0)=0$ for $u>0$, [step 3.1] applies at $x=B_u$; taking expectations and using the tower property, $P(L_t\le u)=E\Psi_\Phi(B_u)=\int_{\mathbb R}\bigl(2\Phi(|x|/\sqrt s)-1\bigr)p_u(0,x)\,dx$, where $p_u$ is the transition density of [F6]. [step 2.1, step 3.1, F6]

5.1 Substituting $x=\sqrt u\,z$ and writing the $N(0,u)$ density as $\varphi(z)$ gives $P(L_t\le u)=\int_{\mathbb R}\bigl(2\Phi(a|z|)-1\bigr)\varphi(z)\,dz$ with $a:=\sqrt{u/s}=\sqrt{u/(t-u)}$. [step 4.1, F6, F7]

6.1 By [F7] and Tonelli, the last integral equals the planar standard Gaussian measure of the cone $C=\{(z,y):|y|\le a|z|\}$; in polar coordinates the Gaussian density is $(2\pi)^{-1}e^{-r^2/2}$ and each of the two opposite angular sectors has half-angle $\arctan a$, so the measure is $\frac{4\arctan a}{2\pi}=\frac2\pi\arctan a$ by [F8]. [step 5.1, F7, F8]

7.1 Since $a/\sqrt{1+a^2}=\sqrt{u/t}$ and $\arctan a=\arcsin\bigl(a/\sqrt{1+a^2}\bigr)$ for $a>0$, [step 6.1] gives $P(L_t\le u)=\frac2\pi\arcsin\sqrt{u/t}$ for every $0\le u<t$; the values $u=0$ and $u=t$ are limits, equal to $0$ and $1$, and are covered by the endpoints discussion below. [step 6.1, F8]

8.1 Consequently $P(L_t/t\le v)=\frac2\pi\arcsin\sqrt v$ for $v\in[0,1]$, and differentiation on $(0,1)$ gives $\frac{d}{dv}\frac2\pi\arcsin\sqrt v=\frac2\pi\cdot\frac{1}{2\sqrt{v(1-v)}}=\frac{1}{\pi\sqrt{v(1-v)}}$, which is integrable on $(0,1)$ and hence is the density of $L_t/t$. [step 7.1]

9.1 The endpoint and degenerate cases are covered: $u=t$ gives the empty interval $(t,t]$ and probability $1$; and, since $\{L_t\le0\}\subseteq\{L_t\le u\}$ for every $u>0$, step 7.1 followed by $u\downarrow0$ gives $P(L_t\le0)=0$, agreeing with the formula value $\frac2\pi\arcsin0=0$.  The case $B_u=0$ has probability zero for the positive times used in step 2.1; the substitution of step 5.1 is likewise only for $u>0$; and AC enters only through [F9]. [step 2.1, step 7.1, step 8.1, F9, given] ∎

## Source notes

Durrett, Example 7.4.3 with equation (7.4.7), computes the last-zero distribution by conditioning on $B_u$ and evaluating the resulting Gaussian integral, obtaining $P(L\le s)=\frac2\pi\arcsin\sqrt{s/t}$ for the last zero before $t$. The proof above performs the conditioning through the future-path Markov property of the page, evaluates the conditional probability $2\Phi(|x|/\sqrt{t-u})-1$ from the maximum law, and computes the remaining planar Gaussian integral in polar coordinates.
