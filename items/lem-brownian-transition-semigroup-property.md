---
id: lem-brownian-transition-semigroup-property
kind: lemma
title: "The Brownian kernels form a semigroup"
status: draft
origin: pipeline
deps: [def-brownian-transition-semigroup, def-brownian-motion, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-substitution, thm-monotone-convergence-for-the-integral, thm-probability-law-and-distribution-function-correspondence, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-integration-against-a-density, thm-gaussian-integral, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-countable-choice, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.6"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume the Axiom of Choice, and let $p_t$ and $P_t$ be the Brownian transition
kernel and operators of [[def-brownian-transition-semigroup]].

1. **Expectation form.** If $B$ is a standard Brownian motion
   [[def-brownian-motion]], then for every $t\ge0$, every $x\in\mathbb R$ and
   every bounded Borel $f:\mathbb R\to\mathbb R$,
   $$P_tf(x)=E\bigl[f(x+B_t)\bigr].$$
2. **Semigroup identity.** For all $s,t\ge0$, $P_sP_t=P_{s+t}$ as operators on
   bounded Borel functions.
3. **Kernel identity.** For all $s,t>0$ and all $x,z\in\mathbb R$,
   $$\int_{\mathbb R}p_s(x,y)\,p_t(y,z)\,dy=p_{s+t}(x,z).$$
   Conversely, the kernel identity for all $x,z$ implies the semigroup identity
   for all bounded Borel $f$.
4. **Probability kernels.** $P_t1=1$ for every $t\ge0$, so each $P_t$ is a
   probability kernel operator and $\|P_tf\|_\infty\le\|f\|_\infty$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, bounded Borel $f$, and $s,t\ge0$.

[F1] $B_0=0$ almost surely, and for every finite list $0=t_0<t_1<\cdots<t_n$ the increments are independent with laws $N(0,t_j-t_{j-1})$. [[def-brownian-motion]]

[F2] $N(0,1)$ is the measure $\gamma$ with density $\varphi(y)=e^{-y^2/2}/\sqrt{2\pi}$, and for $m\in\mathbb R$, $\sigma\ge0$ the law $N(m,\sigma^2)$ is the pushforward of $\gamma$ under $x\mapsto m+\sigma x$; $\varphi$ is positive with integral one. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F3] For an affine increasing $C^1$ substitution with continuous outer integrand, oriented compact substitution holds; the improper integrals on $\mathbb R$ are the increasing limits over $[-L,L]$. [[thm-substitution]] [[thm-monotone-convergence-for-the-integral]]

[F4] A probability measure on $\mathbb R$ is determined by its distribution function: two Borel probability measures with the same values on the intervals $(-\infty,y]$ coincide. This uses countable choice. [[thm-probability-law-and-distribution-function-correspondence]]

[F5] Countable choice is the restriction of AC to families indexed by the natural numbers, so the AC assumption gives it directly. [[def-countable-choice]] [[def-axiom-of-choice]]

[F6] A nonnegative measurable density defines a measure, and integration against that measure is integration of the product with the density. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]] [[thm-integration-against-a-density]]

[F7] $\int_{\mathbb R}e^{-x^2}dx=\sqrt\pi$. [[thm-gaussian-integral]]

[F8] Tonelli applies to nonnegative product-measurable integrands. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Proof

**Proof technique:** direct.

1.1 Write $\gamma_s(y):=(2\pi s)^{-1/2}\exp(-y^2/(2s))$ for $s>0$. Since $N(m,\sigma^2)$ is by [F2] the law of $m+\sigma Z$ with $Z\sim\gamma$, its distribution function at $y$ is $P(m+\sigma Z\le y)=P(Z\le (y-m)/\sigma)=\int_{-\infty}^{(y-m)/\sigma}\varphi(u)\,du$; for $L>0$, [F3] applied to the increasing affine map $u=(v-m)/\sigma$ on $[m-\sigma L,y]$ gives $\int_{m-\sigma L}^{y}\gamma_{\sigma^2}(v-m)\,dv=\int_{-L}^{(y-m)/\sigma}\varphi(u)\,du$, and letting $L\to\infty$, [F3]'s monotone convergence identifies the distribution function of $m+\sigma Z$ with $\int_{-\infty}^{y}\gamma_{\sigma^2}(v-m)\,dv$, that is with that of the measure with density $v\mapsto\gamma_{\sigma^2}(v-m)$. [F2, F3]

2.1 By [F4], with countable choice supplied by [F5], the density of step 1.1 represents $N(m,\sigma^2)$ when $\sigma>0$, and by [F6] expectations against that law are integrals of the product with the density. [F4, F5, F6, step 1.1]

3.1 By [F1] with the one-term list $0<t$, the random variable $B_t-B_0$ has law $N(0,t)$; since $B_0=0$ almost surely, $B_t$ has the same law $N(0,t)$. By steps 1.1-2.1 with $m=0$ and $\sigma=\sqrt t$, the law of $B_t$ has density $\gamma_t$, and the law of $x+B_t$ has density $v\mapsto\gamma_t(v-x)=p_t(x,v)$; hence for bounded Borel $f$, $P_tf(x)=\int_{\mathbb R}f(v)p_t(x,v)\,dv=E[f(x+B_t)]$, while for $t=0$ both sides equal $f(x)$ by the convention $P_0f=f$ and $B_0=0$ almost surely. This is assertion 1. [F1, F6, step 1.1, step 2.1]

4.1 Continuing the kernel analysis of step 3.1, fix $s,t>0$ and $x,z\in\mathbb R$ and put $A:=\frac{1}{2s}+\frac1{2t}=\frac{s+t}{2st}$, $m:=\frac{tz+sx}{s+t}$ and $C:=\frac{(z-x)^2}{2(s+t)}$. [step 3.1, algebra]

5.1 Expanding squares gives $\frac{(y-x)^2}{2s}+\frac{(z-y)^2}{2t}=A(y-m)^2+C$: $A$ is the coefficient of $y^2$, $2Am=x/s+z/t$ is the coefficient of $-2y$, and both constant terms equal $(z-x)^2/(2(s+t))$; consequently $p_s(x,y)p_t(y,z)=\frac{1}{2\pi\sqrt{st}}\exp(-A(y-m)^2-C)$. [step 4.1, algebra]

6.1 For $L>0$, [F3] applied to the increasing affine map $v=\sqrt A\,(y-m)$ on $[m-L/\sqrt A,\,m+L/\sqrt A]$ converts the Gaussian integral [F7] into $\int_{m-L/\sqrt A}^{m+L/\sqrt A}e^{-A(y-m)^2}dy=A^{-1/2}\int_{-L}^{L}e^{-v^2}dv$; letting $L\to\infty$ with [F3]'s monotone convergence and [F7] gives $\int_{\mathbb R}e^{-A(y-m)^2}dy=\sqrt{\pi/A}=\sqrt{2\pi st/(s+t)}$. Multiplying by the constant of step 5.1, $\int_{\mathbb R}p_s(x,y)p_t(y,z)\,dy=\frac{1}{2\pi\sqrt{st}}\sqrt{\frac{2\pi st}{s+t}}e^{-C}=\frac{1}{\sqrt{2\pi(s+t)}}e^{-(z-x)^2/(2(s+t))}=p_{s+t}(x,z)$, which is the kernel identity of assertion 3. [F7, step 5.1, algebra]

7.1 Take bounded Borel $f\ge0$ and $s,t>0$. By step 3.1, $P_tf$ is bounded Borel and $P_s(P_tf)(x)=\int_{\mathbb R}\bigl(\int_{\mathbb R}f(z)p_t(y,z)\,dz\bigr)p_s(x,y)\,dy$; the integrand is nonnegative and product-measurable, so [F8] rewrites the iterated integral as $\int_{\mathbb R}f(z)\bigl(\int_{\mathbb R}p_s(x,y)p_t(y,z)\,dy\bigr)dz=\int_{\mathbb R}f(z)p_{s+t}(x,z)\,dz=P_{s+t}f(x)$, using step 6.1 for the inner integral. Applying this to $f^+$ and $f^-$ and subtracting extends it to general bounded Borel $f$, all four integrals being finite; if $s=0$ or $t=0$ both sides are $P_tf$ or $P_sf$ by the convention $P_0f=f$. [F8, step 3.1, step 6.1]

8.1 Taking $f=1$ in step 3.1 gives $P_t1(x)=\int_{\mathbb R}p_t(x,y)dy=1$ for $t>0$, and for $t=0$ it is the convention, so every $P_t$ maps bounded Borel functions to bounded Borel functions with sup norm at most that of its argument; this is assertion 4. Assertion 1 is step 3.1, assertion 2 is step 7.1 and assertion 3 is steps 6.1 and 7.1. AC is used only through the Brownian and normal-law interfaces of [F1]-[F2] and the countable choice [F5] in [F4]; the substitutions, the Gaussian integral and Tonelli make no further choice. [F1, F5, step 3.1, step 7.1] ∎

## Source notes

Lawler, Section 2.6, computes the Gaussian convolution by completing the square; Durrett, Section 7.3, records the semigroup identity as the Chapman-Kolmogorov equation. The expectation form is proved here rather than assumed, so that the definition's displayed equality is available as a theorem to every consumer.
