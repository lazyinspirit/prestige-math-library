---
id: thm-brownian-positive-occupation-proportion-has-the-arcsine-law
kind: theorem
title: "Brownian positive occupation time has the arcsine law"
status: draft
origin: pipeline
deps: [lem-brownian-step-potential-resolvent-at-zero, lem-brownian-motion-has-a-jointly-measurable-continuous-version, thm-brownian-scaling, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-substitution, thm-principal-inverse-tangent-calculus, def-principal-inverse-tangent, thm-real-stone-weierstrass-general, thm-dominated-convergence, def-axiom-of-choice, def-brownian-motion, thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nobuo Yoshida, Probability Theory, Proposition 6.8.4, printed pp. 216-217"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
---

## Statement

Let $B$ be a standard Brownian motion [[def-brownian-motion]] and for $t>0$ let
$$A_t:=\int_0^t1_{\{B_s>0\}}\,ds$$
be the occupation time of the positive half-line up to time $t$. Then for every
$0\le x\le1$,
$$P\Bigl(\frac{A_t}{t}\le x\Bigr)=\frac{2}{\pi}\arcsin\sqrt x,$$
and $A_t/t$ has the arcsine density
$$f(x)=\frac{1}{\pi\sqrt{x(1-x)}},\qquad 0<x<1 .$$
Thus the occupation-time proportion of Brownian motion has the same
distribution as the last-zero proportion of the theorem
[[thm-brownian-last-zero-before-a-fixed-time-has-the-arcsine-law]], although
the two random variables are of a different nature.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ with its all-path continuous jointly measurable version $\widehat B$, $t>0$, and reals $\alpha,\beta>0$.

[F1] With $V=\alpha+\beta1_{\{y>0\}}$ the function $u(x)=\int_0^\infty E[\exp(-\int_0^tV(x+\widehat B_r)dr)]dt$ satisfies $u(0)=1/\sqrt{\alpha(\alpha+\beta)}$, and its defining integral is an $E$-integral against the occupied time. [[lem-brownian-step-potential-resolvent-at-zero]]

[F2] Every path of $\widehat B$ is continuous and the evaluation is jointly measurable, so $s\mapsto1_{\{\widehat B_s>0\}}$ is measurable and $A_t=\int_0^t1_{\{B_s>0\}}ds$ is a random variable with $0\le A_t\le t$. [[lem-brownian-motion-has-a-jointly-measurable-continuous-version]]

[F3] Scaling: for $c>0$ the process $r\mapsto c^{-1/2}B_{cr}$ is again standard Brownian motion, so the occupation times satisfy $A_t=^d tA_1$. [[thm-brownian-scaling]]

[F4] Tonelli for nonnegative product-measurable integrands. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F5] Substitution and the principal inverse tangent: $\int_0^\infty dt/(1+t^2)=\pi/2$ and $\arctan$ is the inverse bijection of $\tan:(-\pi/2,\pi/2)\to\mathbb R$. [[thm-substitution]] [[thm-principal-inverse-tangent-calculus]] [[def-principal-inverse-tangent]]

[F6] Stone-Weierstrass: the unital point-separating algebra of polynomials is uniformly dense in $C([0,1],\mathbb R)$. [[thm-real-stone-weierstrass-general]]

[F7] Dominated convergence justifies interchanging limits with expectations and integrals under an integrable dominating function. [[thm-dominated-convergence]]

[F8] AC is the ambient assumption of the Brownian and resolvent interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 By [F2], $A_t$ is a random variable with values in $[0,t]$; by [F3] applied with $c=t$ one has $A_t=^d tA_1$, because the time change maps the set of positive times for $B$ to the corresponding set for the scaled motion, and hence $A_t/t$ has the law of $A_1$. [given, F2, F3]

1.2 The probability measure $\mu$ on $[0,1]$ with density $\pi^{-1}x^{-1/2}(1-x)^{-1/2}$ satisfies $\int_0^1(\alpha+\beta x)^{-1}\mu(dx)=1/\sqrt{\alpha(\alpha+\beta)}$ for all $\alpha,\beta>0$: substituting $x=\sin^2\theta$ turns the integral into $\frac2\pi\int_0^{\pi/2}(\alpha+\beta\sin^2\theta)^{-1}d\theta$, then $s=\tan\theta$ turns it into $\frac2\pi\int_0^\infty dt/(\alpha+(\alpha+\beta)t^2)$, and finally $w=t\sqrt{(\alpha+\beta)/\alpha}$ and [F5] give $\frac2\pi\cdot\frac{1}{\sqrt{\alpha(\alpha+\beta)}}\cdot\frac\pi2$. [given, F5]

2.1 For $\alpha,\beta>0$, $\int_0^\infty e^{-\alpha t}E[e^{-\beta A_t}]\,dt=E\bigl[( \alpha+\beta A_1)^{-1}\bigr]$: [step 1.1] gives $E[e^{-\beta A_t}]=E[e^{-\beta tA_1}]$, so the left side is $\int_0^\infty E[e^{-(\alpha+\beta A_1)t}]\,dt$, and [F4] equals it to $E[\int_0^\infty e^{-(\alpha+\beta A_1)t}dt]=E[1/(\alpha+\beta A_1)]$, the integrand being nonnegative and $\alpha+\beta A_1\ge\alpha>0$. [step 1.1, F4]

3.1 For $V=\alpha+\beta1_{\{y>0\}}$ and $t>0$ one has $\int_0^tV(\widehat B_r)\,dr=\alpha t+\beta A_t$ up to the single point $r=0$, which is Lebesgue-null; hence the function $u$ of [F1] satisfies $u(0)=\int_0^\infty e^{-\alpha t}E[e^{-\beta A_t}]\,dt$, and [F1] with [step 2.1] yields $E[1/(\alpha+\beta A_1)]=1/\sqrt{\alpha(\alpha+\beta)}$ for all $\alpha,\beta>0$. [step 2.1, F1, F2]

4.1 The law of $A_1$ and $\mu$ have the same moments: fixing $\alpha=1$ and expanding $1/(1+\beta x)=\sum_{k\ge0}(-\beta x)^k$ for $x\in[0,1]$ and $0<\beta<1$, uniformly on the square, [F7] shows that $E[1/(1+\beta A_1)]=\sum_k(-\beta)^kE[A_1^k]$ and $\int(1+\beta x)^{-1}\mu(dx)=\sum_k(-\beta)^k\int x^k\mu(dx)$ for every such $\beta$; since [step 3.1] and [step 1.2] make the two sides equal for all $\beta\in(0,1)$, subtracting the two power series gives $\sum_k(-\beta)^k\bigl(E[A_1^k]-\int x^k\mu(dx)\bigr)=0$ on an interval, so every coefficient vanishes and all moments agree. [step 3.1, step 1.2, F7]

5.1 Consequently $E[f(A_1)]=\int f\,d\mu$ for every continuous $f:[0,1]\to\mathbb R$: given $\varepsilon>0$, [F6] supplies a polynomial $p$ with $\|f-p\|_\infty<\varepsilon$, and $|E[f(A_1)]-\int f\,d\mu|\le2\varepsilon+|E[p(A_1)]-\int p\,d\mu|=2\varepsilon$ by [step 4.1]; taking continuous $f_n\downarrow1_{[0,x]}$ and applying [F7] to both sides gives $P(A_1\le x)=\mu([0,x])=\frac2\pi\arcsin\sqrt x$ for $0\le x\le1$. [step 4.1, F6, F7]

6.1 By [step 1.1], $P(A_t/t\le x)=P(A_1\le x)=\frac2\pi\arcsin\sqrt x$ for every $t>0$ and $0\le x\le1$, which is the displayed distribution function. [step 1.1, step 5.1]

7.1 Differentiating the distribution function on $(0,1)$ gives $\frac{d}{dx}\frac2\pi\arcsin\sqrt x=\frac2\pi\cdot\frac{1}{2\sqrt{x(1-x)}}=\frac{1}{\pi\sqrt{x(1-x)}}$; this density is integrable on $(0,1)$ (substitute $x=\sin^2\theta$), so it is the density of $A_t/t$ and both endpoints carry zero mass. [step 6.1, F5]

8.1 The boundary cases are covered: $x=0$ gives $P(A_1=0)=0=\frac2\pi\arcsin0$ and $x=1$ gives $1=\frac2\pi\arcsin\frac\pi2$; the value $\theta=\pi/2$ of the substitution is the endpoint of the principal branch of [F5]; the parameters satisfy $\alpha,\beta>0$ in [step 3.1] and $0<\beta<1$ in [step 4.1]; the occupation time is taken over the half-line $\{y>0\}$ so the single instant $s=0$ is excluded by a null set; and AC enters only through [F8]. [step 3.1, step 4.1, step 7.1, F5, F8, given] ∎

## Source notes

Yoshida, Proposition 6.8.4, obtains the occupation-time arcsine law from the Laplace transform $E[1/(\alpha+\beta A_1)]=1/\sqrt{\alpha(\alpha+\beta)}$ produced by the step-potential resolvent of Lemmas 6.8.1-6.8.3. The proof above proves the same transform identity directly from the resolvent lemma of this page, identifies the arcsine law as the unique probability measure on $[0,1]$ with that transform by moment matching and Stone-Weierstrass, and transfers the result from $A_1$ to $A_t$ by scaling.
