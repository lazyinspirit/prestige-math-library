---
id: lem-qa-15-continuous-markov-derivative-bound
kind: lemma
title: "Continuous Markov derivative bound on an interval"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - def-formal-derivative-of-a-polynomial
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
  - def-chebyshev-polynomials-first-and-second-kind
  - lem-chebyshev-degree-leading-coefficients-and-extreme-values
  - thm-chebyshev-multiple-angle-identities
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - cor-pi-is-the-first-positive-sine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-cofunction-supplementary-and-reflection-identities
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - thm-chain-rule
  - thm-sine-and-cosine-derivatives
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
  - lem-real-polynomial-factor-at-a-root
  - thm-sine-and-cosine-addition-formulas
  - thm-extreme-value-r
  - thm-algebra-of-continuous-functions
  - cor-differentiable-implies-continuous
  - lem-of-triangle-inequality
  - thm-induction-principle
justified_by: []
proof_strategy: direct
axiom_use: "No choice: all node sets and sums are finite, and maxima are attained on compact intervals."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "N. L. Carothers, A Short Course on Approximation Theory (1998), Chapter 5, Lemma 5.19 and Theorems 5.21–5.22"
      url: "https://eigen-space.org/approx2526/pdf/carothers+a-short-course-in-approximation-theory-new.pdf"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.6"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

If $p$ is a real polynomial with no supported monomial of degree greater than $d\in\mathbb N_0$, and $h:=\max_{[-1,1]}p-\min_{[-1,1]}p$, then
$$\max_{[-1,1]}|p'|\le \frac{d^2h}{2}.$$
The zero polynomial is allowed under the support-degree convention.

## Facts & Assumptions

**Given:** An integer $d\ge0$ and a real polynomial $p$ with no supported monomial of degree greater than $d$.

[F1] [[def-real-polynomial-degree-leading-coefficient-and-monic]] and [[def-formal-derivative-of-a-polynomial]]: a polynomial is a finite real coefficient list; its formal derivative is obtained term by term.

[F2] [[lem-derivative-of-a-power]]: every real polynomial function is differentiable everywhere, with derivative computed term by term; a polynomial supported in degrees at most $d\ge1$ has derivative supported in degrees at most $d-1$.

[F3] [[def-chebyshev-polynomials-first-and-second-kind]] and [[lem-chebyshev-degree-leading-coefficients-and-extreme-values]]: $T_0=1$, $T_1=X$, $T_{n+1}=2XT_n-T_{n-1}$, $\deg T_n=n$; and $U_0=1$, $U_1=2X$, $U_{n+1}=2XU_n-U_{n-1}$, $\deg U_n=n$.

[F4] [[thm-chebyshev-multiple-angle-identities]]: $T_n(\cos\theta)=\cos(n\theta)$ and $U_n(\cos\theta)\sin\theta=\sin((n+1)\theta)$.

[F5] [[cor-pi-is-the-first-positive-sine-zero]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], and [[thm-cofunction-supplementary-and-reflection-identities]]: sine is positive on $(0,\pi)$ and increases to $1$ at $\pi/2$ then decreases to $0$ at $\pi$; cosine decreases on $[0,\pi]$, ranges over $[-1,1]$, has $\cos(\pi/2)=0$, and $\cos(\pi-\theta)=-\cos\theta$.

[F6] [[thm-chain-rule]] and [[thm-sine-and-cosine-derivatives]]: the chain rule applies to differentiable compositions, $(\cos\theta)'=-\sin\theta$, and $(\cos n\theta)'=-n\sin n\theta$.

[F7] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]] and [[lem-real-polynomial-factor-at-a-root]]: a nonzero degree-$n$ real polynomial has at most $n$ distinct roots, and a polynomial vanishing at $a$ has a factor $X-a$.

[F8] [[thm-sine-and-cosine-addition-formulas]]: the sine addition formula holds, and the cosine product identity follows by adding the cosine sum and difference formulas.

[F9] [[thm-extreme-value-r]] and [[thm-algebra-of-continuous-functions]]: continuous real functions on compact intervals attain extrema; polynomial functions, absolute values, sums and products of continuous functions are continuous.

[F10] [[cor-differentiable-implies-continuous]]: differentiability at a point implies continuity there.

[F11] [[thm-algebra-of-derivatives]]: finite sums, scalar multiples and products of differentiable real functions are differentiable with the sum, scalar and product derivative rules.

[F12] [[lem-of-triangle-inequality]]: $|u+v|\le|u|+|v|$ for real $u,v$.

[F13] [[thm-induction-principle]]: a property of natural numbers holding at $1$ and preserved from $n$ to $n+1$ holds at every positive natural number.

[F14] [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]: $\sin^2x+\cos^2x=1$, $\sin(-x)=-\sin x$, and $\cos(-x)=\cos x$.

[F15] [[thm-sine-cosine-zero-sets-and-fundamental-period]]: sine and cosine have period $2\pi$.

## Proof

1.1 By [F1], $p$ and each polynomial $r$ below are finite real polynomials; [F2] and [F9] make $p,p'$ continuous and attain their extrema on $[-1,1]$. For any such $r$, $S_r(\theta):=\sin\theta\,r(\cos\theta)$ is continuous by [F6], [F9], and [F10], and is $2\pi$-periodic by [F15]; hence [F9] gives a maximum of $|S_r|$ on $[0,2\pi]$. If $d=0$ or $p=0$, then $p'=0$ and $h=0$; assume $d\ge1$. For $j=1,\ldots,d$, put $\theta_j=(2j-1)\pi/(2d)$ and $x_j=\cos\theta_j$. By [F4], $T_d(x_j)=\cos(d\theta_j)=0$. Monotonicity and reflection in [F5] show $x_1>\cdots>x_d$ in $(-1,1)$ and $x_d=-x_1$. Also [F5] gives $\sin\theta_j>0$. Since $d\theta_j=(j-1)\pi+\pi/2$, repeated use of the shift-by-$\pi$ identity in [F5], with finite induction [F13], gives $\sin(d\theta_j)=(-1)^{j-1}$. The chain rule [F6] applied to [F4] now gives $T_d'(x_j)=d\sin(d\theta_j)/\sin\theta_j=d(-1)^{j-1}/\sin\theta_j\ne0$. [given, F1, F2, F4, F5, F6, F9, F10, F13, F15]

2.1 Fix any polynomial $r$ supported in degrees at most $d-1$. For $x\in[-x_1,x_1]$, choose $\theta\in[0,\pi]$ with $x=\cos\theta$. Monotonicity and reflection in [F5] imply $\pi/(2d)\le\theta\le\pi-\pi/(2d)$, so $\sin\theta\ge\sin(\pi/(2d))$. For every positive integer $n$, $|\sin(n\phi)|\le n|\sin\phi|$: equality holds for $n=1$; the sine addition formula [F8] and $|\sin|,|\cos|\le1$ from [F5] give $|\sin((n+1)\phi)|\le|\sin(n\phi)|+|\sin\phi|$, so induction [F13] proves the claim. At $\phi=\pi/(2d)$ this yields $1=|\sin(d\phi)|\le d\sin\phi$, hence $\sin(\pi/(2d))\ge1/d$. Therefore $|r(x)|\le d|\sin\theta\,r(\cos\theta)|\le d\max_{\eta\in[0,2\pi]}|S_r(\eta)|$ throughout this central interval. [given, step 1.1, F5, F8, F12, F13, algebra]

3.1 By the factor theorem [F7] and $T_d(x_j)=0$ from step 1.1, each quotient $T_d(X)/(X-x_j)$ is a polynomial of degree $d-1$, so the Lagrange polynomials $L_j(X):=T_d(X)/((X-x_j)T_d'(x_j))$ have degree at most $d-1$. At $x_i$ with $i\ne j$, $L_j(x_i)=0$; at $x_j$, factorization $T_d(X)=(X-x_j)s_j(X)$ and product rule [F11] give $s_j(x_j)=T_d'(x_j)$, so $L_j(x_j)=1$. Thus every $r$ as in step 2.1 satisfies $r(X)=\sum_{j=1}^d r(x_j)L_j(X)$, since the difference has degree at most $d-1$ and $d$ distinct roots, hence vanishes by [F7]. Repeated factorization by [F7] gives $T_d(X)=c\prod_j(X-x_j)$ with $c\ne0$ (degree $d$ by [F3]); repeated product rule gives $T_d'(X)=c\sum_j\prod_{k\ne j}(X-x_k)$. Therefore the polynomial $\sum_j T_d(X)/(X-x_j)-T_d'(X)$ vanishes for every $X$ away from the nodes, an infinite set, so it is zero by the root bound [F7]. Substituting $1/T_d'(x_j)=(-1)^{j-1}\sin\theta_j/d$ from step 1.1 gives $r(X)=\frac1d\sum_{j=1}^d(-1)^{j-1}\sin\theta_j\,r(x_j)\frac{T_d(X)}{X-x_j}$. [given, step 1.1, step 2.1, F3, F7, F11, algebra]

4.1 Let $W:=\max_{\eta\in[0,2\pi]}|S_r(\eta)|$. At each node, $\sin\theta_j|r(x_j)|=|S_r(\theta_j)|\le W$. For $x\in(x_1,1]$, all $x-x_j>0$, and the interpolation formula of step 3.1 gives $|r(x)|\le(W/d)|T_d(x)|\sum_j1/(x-x_j)=(W/d)|T_d'(x)|$. For $x\in[-1,-x_1)$ all denominators are negative, so the summands $T_d(x)/(x-x_j)$ have a common sign and their absolute values sum to $|T_d'(x)|$; the same interpolation and node bounds give $|r(x)|\le(W/d)|T_d'(x)|$. For interior $x=\cos\theta$, $0<\theta<\pi$, differentiating [F4] by [F6] gives $|T_d'(x)|=d|\sin(d\theta)|/\sin\theta\le d^2$ by the sine estimate of step 2.1. Continuity extends this bound to the outer endpoints; the central boundary nodes are covered by step 2.1. Hence $|r(x)|\le dW$ on the outer intervals. Combining this with step 2.1 proves $\|r\|_{[-1,1]}\le d\max_{\eta\in[0,2\pi]}|S_r(\eta)|$ on all of $[-1,1]$. [given, step 2.1, step 3.1, F2, F4, F6, F9, F12, algebra]

5.1 For continuous $g$ on $[-1,1]$ write $\|g\|:=\max_{[-1,1]}|g|$; for continuous $2\pi$-periodic $S$ write $\|S\|_{\rm trig}:=\max_{[0,2\pi]}|S|$. Let $S$ be a real trigonometric polynomial of degree at most $d$, meaning a finite real linear combination of $1,\cos(k\theta),\sin(k\theta)$ for $1\le k\le d$. Its sine and cosine terms and their derivatives are continuous by [F6] and [F10], and are $2\pi$-periodic by [F15], so all maxima just defined, including that of $|S'|$, exist by [F9]. For fixed $\alpha$, $F_\alpha(\theta):=(S(\alpha+\theta)-S(\alpha-\theta))/2$ is a linear combination of $\sin(k\theta)$: the constant term cancels, each cosine term contributes $-\sin(k\alpha)\sin(k\theta)$, and each sine term contributes $\cos(k\alpha)\sin(k\theta)$ by the addition formulas [F8] and parity [F14]. By [F4], $\sin(k\theta)=\sin\theta\,U_{k-1}(\cos\theta)$, so $F_\alpha(\theta)=\sin\theta\,r(\cos\theta)$ for a polynomial $r$ supported in degrees at most $d-1$ by [F3]. By the chain rule [F6], differentiating the centered difference at $0$ gives $F_\alpha'(0)=(S'(\alpha)+S'(\alpha))/2=S'(\alpha)$. Differentiating the factorization using polynomial differentiability [F2], [F6], and [F11] gives $F_\alpha'(0)=r(1)$, because $\sin0=0$ and $\cos0=1$ by [F6]. Thus $S'(\alpha)=r(1)$. By steps 2.1 and 4.1, $|r(1)|\le\|r\|\le d\|F_\alpha\|_{\rm trig}$. Also $\|F_\alpha\|_{\rm trig}\le\|S\|_{\rm trig}$ by [F12], since $F_\alpha$ is the half-difference of two values of $S$. As this holds for every $\alpha$, $\|S'\|_{\rm trig}\le d\|S\|_{\rm trig}$. [given, step 2.1, step 4.1, F2, F3, F4, F6, F8, F9, F10, F11, F12, F14, F15]

6.1 Put $S(\theta):=p(\cos\theta)$. Applying [F8] at $(u,v)$ and $(u,-v)$ and using [F14] gives $\cos u\cos v=(\cos(u+v)+\cos(u-v))/2$. Induction now gives that each power $\cos^k\theta$ is a linear combination of $\cos(j\theta)$ for $0\le j\le k$: multiplying a term $\cos(j\theta)$ by $\cos\theta$ gives frequencies $j+1$ and $j-1$ when $j\ge1$, while the constant term gives $\cos\theta$. Thus $S$ is a real trigonometric polynomial of degree at most $d$. Cosine decreases from $1$ to $-1$ on $[0,\pi]$ by [F5] and its endpoint values [F6], [F5], so its range on $[0,2\pi]$ is $[-1,1]$; with [F15] this gives $\|S\|_{\rm trig}=\|p\|$. The chain rule [F6] and polynomial differentiability [F2] give $S'(\theta)=-\sin\theta\,p'(\cos\theta)$, so step 5.1 gives $\max_{\theta\in[0,2\pi]}|\sin\theta\,p'(\cos\theta)|\le d\|p\|$. Applying the inequality proved in steps 2.1 and 4.1 to $r=p'$, whose degree is at most $d-1$ by [F2], yields $\|p'\|\le d\max_{\theta\in[0,2\pi]}|\sin\theta\,p'(\cos\theta)|\le d^2\|p\|$. Finally, let $M=\max p$ and $m=\min p$, attained by [F9], and apply this derivative bound to $p-(M+m)/2$. Its range height is $h$ and its supremum norm is $h/2$, while its derivative is $p'$. Thus $\max|p'|\le d^2h/2$, as claimed. [given, F2, F5, F6, F8, F9, F14, F15, step 2.1, step 4.1, step 5.1, algebra] ∎
