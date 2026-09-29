---
id: thm-nevanlinna-quantities-well-defined
kind: theorem
title: "Well-definedness and radius conventions for Nevanlinna quantities"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nevanlinna-counting-proximity-and-characteristic, thm-isolated-zeros-holomorphic-function, thm-poles-meromorphic-function-are-discrete-and-countable, thm-zero-order-factorization-holomorphic-function, thm-pole-characterizations, def-integrable-real-and-complex-functions-and-their-integrals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §4"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Statement

For every allowed pair $(f,a)$ in [[def-nevanlinna-counting-proximity-and-characteristic]], the count $n(r,a;f)$ is finite for each bounded disc, and $N(r,a;f)$ and $m(r,a;f)$ are finite and continuous for $r>0$, including at a divisor radius. For $a=\infty$, $n(r,\infty;f)$ counts precisely the poles with their pole orders. For $r,r_0>0$, define $N_{r_0}(r,a;f)=\int_{r_0}^r n(t,a;f)\,dt/t$. Then

$$ N_{r_0}(r,a;f)=N(r,a;f)-N(r_0,a;f), $$

so replacing $N$ by $N_{r_0}$ changes the characteristic by the fixed constant $-N(r_0,\infty;f)$. Proximity alone need not be monotone in $r$.

## Facts & Assumptions

**Given:** A meromorphic $f$ on $\mathbb C$ and $a\in\widehat{\mathbb C}$ with $f\not\equiv a$.

[F1] The definition counts local multiplicities on closed discs and treats infinity-points as poles ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] Chordal distance is given by the finite-target and infinity formulas ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F3] A nonzero holomorphic function has only isolated zeros ([[thm-isolated-zeros-holomorphic-function]]).

[F4] Every pole is isolated ([[thm-poles-meromorphic-function-are-discrete-and-countable]]).

[F5] A finite-order zero factors locally as $(z-b)^m h(z)$ with $h(b)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[F6] At a pole, $1/f$ extends holomorphically and vanishes ([[thm-pole-characterizations]]).

[F7] A real measurable function is integrable when its absolute value has finite integral ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

**Proof technique:** write the integrated counts as finite divisor sums and remove each angular logarithmic singularity before varying the radius.

1.1 For $a=\infty$, [F1] identifies the counted points as poles; [F4] makes them isolated, so compactness gives finitely many poles in each bounded closed disc, each of finite order. [F1, F4, given]

1.2 At a finite $a$-point $b$ of order $m_b$, [F2], [F3] and [F5] give $f-a=(z-b)^{m_b}h$ with $h(b)\ne0$ and $\psi_a(z):=\log(1/\delta(f(z),a))=-m_b\log|z-b|+q(z)$ for a continuous $q$ near $b$. [F2, F3, F5, given]

1.3 At any pole, [F6] makes $w=1/f$ extend holomorphically with $w(b)=0$; for finite $a$, [F2] rewrites the chordal distance as $\delta(f,a)=|1-aw|/(\sqrt{1+|w|^2}\sqrt{1+|a|^2})$, which has a positive limit, so $\psi_a$ extends continuously over the pole. [F2, F6]

1.4 For $b\ne0$ and $r<|b|$, factor $re^{it}-b=-b(1-(r/b)e^{it})$; for $r>|b|$, factor it as $re^{it}(1-(b/r)e^{-it})$. The uniformly convergent series $\log(1-\zeta)=-\sum_{n\ge1}\zeta^n/n$ for $|\zeta|<1$ has zero mean term by term, so the mean of $\log|re^{it}-b|$ is $\log|b|$ or $\log r$, respectively; for $b=0$ it is $\log r$. [algebra]

2.1 For $a=\infty$ at a pole $b$ of order $m_b$, [F6] gives the reciprocal zero order $m_b$ from the leading Laurent term, and [F5] applied to the zero $w=1/f$ from step 1.3 gives $f=(z-b)^{-m_b}h$ with $h$ holomorphic and nonzero; hence $\psi_\infty+m_b\log|z-b|=\tfrac12\log(|z-b|^{2m_b}+|h|^2)$ extends continuously. [F2, F5, F6, step 1.3]

2.2 For finite $a$, [F3] isolates the zeros of $f-a$ away from poles, and [F6] prevents such zeros from accumulating at a pole. The finitely many poles from step 1.1 have neighborhoods free of $a$-points; the remaining compact set contains only finitely many isolated zeros. Thus every bounded-disc finite-target count is finite. [F3, F6, step 1.1, given]

2.3 If $r=|b|>0$, rotate to $b=|b|$. Then the mean is $\log|b|+(2\pi)^{-1}\int_0^{2\pi}\log(2|\sin(t/2)|)\,dt=\log|b|$: with $J=\int_0^{\pi/2}\log(\sin x)\,dx$, symmetry and $\sin(2x)=2\sin x\cos x$ give $2J=-(\pi/2)\log2+J$, hence $J=-(\pi/2)\log2$ and the integral is zero. The endpoint singularities have finite absolute integral since $\int_0^\epsilon|\log x|\,dx<\infty$, so [F7] applies. [F7, step 1.4, algebra]

3.1 Integrating the step function in [F1] gives $N(r,a;f)=n(0,a;f)\log r+\sum_{0<|b|\le r}m_b\log(r/|b|)$, a finite sum by steps 1.1 and 2.2; each term is zero when first included at $r=|b|$, so $N$ is continuous. [F1, step 1.1, step 2.2, algebra]

3.2 Around any fixed $r_0>0$, take a compact annulus containing all nearby circles. Steps 1.1 and 2.2 give finitely many relevant divisor points there; by steps 1.2, 1.3 and 2.1, adding $m_b\log|z-b|$ at each singular divisor leaves a continuous function on the annulus, whose circular mean varies continuously with $r$. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2]

4.1 Splitting the defining integral at $r_0$ gives $N(r,a;f)-N(r_0,a;f)=n(0,a;f)\log(r/r_0)+\int_{r_0}^r(n(t,a;f)-n(0,a;f))\,dt/t=\int_{r_0}^r n(t,a;f)\,dt/t$, also for $r<r_0$ as an oriented integral. [F1, step 3.1, algebra]

4.2 By steps 1.4 and 2.3, each removed logarithm has continuous mean $\log\max(r,|b|)$, including at $r=|b|$. Combining those means with the continuous remainder from step 3.2 proves $m(r,a;f)$ finite and continuous at every radius. Only finite divisor lists are used, so no AC is needed. [step 1.4, step 2.3, step 3.2, algebra]

5.1 For $f(z)=z+1/z$ and $a=\infty$, the reverse triangle inequality gives $|f(re^{it})|\ge|r-r^{-1}|$. Thus [F2] gives $m(r,\infty;f)\ge\tfrac12\log(1+(r-r^{-1})^2)$. At $r=1$, $|f(e^{it})|=|2\cos t|\le2$, so $m(1,\infty;f)\le\tfrac12\log5$. At both $r=1/4$ and $r=4$, the lower bound is $\tfrac12\log(241/16)>\tfrac12\log5$. Consequently $m(1/4,\infty;f)>m(1,\infty;f)$ and $m(4,\infty;f)>m(1,\infty;f)$, ruling out both nondecreasing and nonincreasing behaviour. Proximity alone need not be monotone. [F2, algebra] ∎
