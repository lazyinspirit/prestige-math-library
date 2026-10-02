---
id: lem-hedberg-pointwise-inequality
kind: lemma
title: "Hedberg pointwise inequality for Riesz potentials"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-riesz-potential-near-far-splitting, def-riesz-potential-of-order-alpha, def-complex-lp-and-euclidean-test-function-conventions, def-locally-integrable-function-on-r-n, def-centered-and-uncentered-hardy-littlewood-maximal-functions, thm-complex-holder-minkowski-and-the-quotient-norm, thm-integral-triangle-inequality, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-finite-and-countable-subadditivity-of-measures, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis, Proposition 11.4, printed p. 73"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proof of Proposition 11.4, printed p. 73: the near part $R^\\alpha Mf(x)$ and far part $R^{-n/q}\\|f\\|_p$ are balanced at $R=\\|f\\|_p^{p/n}Mf(x)^{-p/n}$."
    - title: "Larry Guth, Hardy–Littlewood–Sobolev Inequality, §3, printed p. 3"
      url: "https://ocw.mit.edu/courses/18-s997-the-polynomial-method-fall-2012/214a7e215cfb9c3bdd3507e528b8db3c_MIT18_S997F12_lec30.pdf"
      locator: "§3 Steps 2–3: cutting at a critical radius and combining an $Mf$ bound with an $L^p$ bound yields $|T_\\alpha f|\\lesssim(Mf)^A\\|f\\|_p^B$ with $A+B=1$."
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$,
$0<\alpha<n$, $1<p<n/\alpha$ and put $\theta:=\alpha p/n\in(0,1)$. Let $f$ be
an element of $L^p(\mathbb R^n;\mathbb C)$
([[def-complex-lp-and-euclidean-test-function-conventions]]) and let $x$ be a
point with $Mf(x)<\infty$, where $M$ denotes the centered Hardy-Littlewood
maximal operator ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]).
Then the defining integral of the Riesz potential
([[def-riesz-potential-of-order-alpha]]) converges absolutely at $x$ and
$$\bigl|I_\alpha f(x)\bigr|\le C_{n,\alpha,p}\,\bigl(Mf(x)\bigr)^{1-\theta}\|f\|_p^{\theta}.$$
If $\|f\|_p=0$, or if $Mf(x)=0$, then $f=0$ almost everywhere, $Mf=0$, and
$I_\alpha f(x)=0$ at the stated point, so no zero or infinity power with an
undefined value is used: only the exact powers $\theta\in(0,1)$ and
$1-\theta\in(0,1)$ of the finite nonnegative numbers $Mf(x)$ and $\|f\|_p$
occur.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<\alpha<n$, $1<p<n/\alpha$, $\theta=\alpha p/n$, a class $f\in L^p(\mathbb R^n;\mathbb C)$ with a fixed measurable representative, and a point $x$ with $Mf(x)<\infty$.

[F1] The unit Riesz potential is $I_\alpha f(x)=\int K_\alpha(x-y)f(y)\,dy$ at every point where $\int K_\alpha(x-y)|f(y)|\,dy<\infty$, with $K_\alpha(z)=|z|^{\alpha-n}$ for $z\neq0$ and $K_\alpha(0)=0$.
([[def-riesz-potential-of-order-alpha]])

[F2] Complex $L^p$ classes are quotients by almost-everywhere equality, with norm $N_p(g)=(\int|g|^p)^{1/p}$, and $\|g\|_p=0$ exactly for the zero class; local integrability of the representatives is a consequence of $L^p$ membership for finite $p$ and finite measure balls.
([[def-complex-lp-and-euclidean-test-function-conventions]], [[def-locally-integrable-function-on-r-n]], [[thm-complex-holder-minkowski-and-the-quotient-norm]])

[F3] The centered maximal function of a locally integrable function satisfies $Mf(x)=\sup_{r>0}\lambda(B(x,r))^{-1}\int_{B(x,r)}|f|$ with values in $[0,\infty]$, so every ball average is at most $Mf(x)$.
([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]])

[F4] Near and far splitting: at every point $y$ with $Mf(y)<\infty$ and every $R>0$, the near and far integrals $N_R(y),F_R(y)$ are finite, $N_R(y)\le C_{n,\alpha}R^{\alpha}Mf(y)$, $F_R(y)\le C_{n,\alpha,p}R^{\alpha-n/p}\|f\|_p$, the far bound holds everywhere, and where both are finite the potential $I_\alpha f(y)$ is defined by the total absolute integral and depends only on the class $f$.
([[lem-riesz-potential-near-far-splitting]])

[F5] For integrable complex $g$, $|\int g\,d\mu|\le\int|g|\,d\mu$.
([[thm-integral-triangle-inequality]])

[F6] The nonnegative Lebesgue integral is additive over complementary measurable sets, monotone, and homogeneous for nonnegative scalars; a nonnegative measurable function has integral zero if and only if it vanishes almost everywhere.
([[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F7] A countable union of Lebesgue null sets is null, so a function vanishing almost everywhere on every ball $B(x,k)$, $k\ge1$, vanishes almost everywhere on $\mathbb R^n$.
([[thm-finite-and-countable-subadditivity-of-measures]])

[F8] Countable Choice is the choice principle assumed by the maximal-function and splitting interfaces used here.
([[def-countable-choice]])

## Proof

**Proof technique:** direct; dispose of the degenerate identically-zero cases, then balance the near and far bounds of the splitting lemma at the optimal radius.

1.1 The degenerate case. Suppose first that $\|f\|_p=0$. Then $f=0$ almost everywhere by the definiteness clause of [F2]; for every $x$ the nonnegative integrand $K_\alpha(x-\cdot)|f|$ vanishes almost everywhere, so [F6] gives $\int K_\alpha(x-y)|f(y)|\,dy=0<\infty$, the potential is defined at $x$ by [F1] and $I_\alpha f(x)=0$. Also every ball average in [F3] is the integral of a function vanishing almost everywhere, hence is $0$, so $Mf(x)=0$, and the asserted inequality reads $0\le C_{n,\alpha,p}\cdot 0^{1-\theta}\cdot 0^{\theta}=0$. [F1, F2, F3, F6, given, algebra]

2.1 The case $Mf(x)=0$. If $Mf(x)=0$, then every ball average of $|f|$ is at most $0$, so $\int_{B(x,k)}|f|=0$ for every integer $k\ge1$; the nonnegative function $|f|$ therefore vanishes almost everywhere on each ball $B(x,k)$ by [F6], and the balls $B(x,k)$ cover $\mathbb R^n$, so $|f|=0$ almost everywhere by [F7]. Hence $f$ is the zero class, $\|f\|_p=0$, and step 1.1 applies. Thus in the remaining case both $M:=Mf(x)$ and $F:=\|f\|_p$ are strictly positive, and both are finite by hypothesis and by [F2]. [F2, F3, F6, F7, step 1.1]

3.1 The balanced estimate. Assume $0<M<\infty$ and $0<F<\infty$ and put $R:=(F/M)^{p/n}>0$. Step 2.1 and [F2] give every representative $f$ locally integrable, so $M$ is defined and the splitting lemma [F4] applies at $x$ with this radius: $I_\alpha f(x)$ is defined and $$\bigl|I_\alpha f(x)\bigr|\le\int K_\alpha(x-y)|f(y)|\,dy=N_R(x)+F_R(x)\le C_{n,\alpha}R^{\alpha}M+D_{n,\alpha,p}R^{\alpha-n/p}F,$$ where $D_{n,\alpha,p}$ is the far constant of [F4], renamed here to avoid a clash with the constant defined below, the first inequality is [F5], and the equality of the total integral with the sum of the near and far integrals is additivity in [F6] applied on the complementary sets $B(x,R)$ and $\{y:|x-y|\ge R\}$. Since $\theta=\alpha p/n$ gives $\alpha=\theta n/p$ and $\alpha-n/p=(\theta-1)n/p$, one has $$R^{\alpha}=(F/M)^{\alpha p/n}=(F/M)^{\theta},\qquad R^{\alpha-n/p}=(F/M)^{(\alpha-n/p)p/n}=(F/M)^{\theta-1},$$ so $R^{\alpha}M=F^{\theta}M^{1-\theta}$ and $R^{\alpha-n/p}F=F^{\theta}M^{1-\theta}$; hence $|I_\alpha f(x)|\le(C_{n,\alpha}+D_{n,\alpha,p})M^{1-\theta}F^{\theta}$. [F4, F5, F6, step 2.1, algebra]

4.1 Conclusion of the estimate. Setting $C_{n,\alpha,p}:=C_{n,\alpha}+D_{n,\alpha,p}$, with $D_{n,\alpha,p}$ the far constant of [F4], step 3.1 gives the asserted bound in the nondegenerate case; together with steps 1.1 and 2.1 every case is covered, the exponential factors are the exact positive powers $\theta\in(0,1)$ and $1-\theta\in(0,1)$ of finite nonnegative quantities, and no expression $0^0$ or $\infty^0$ occurs. Absolute convergence at $x$ is the finiteness of $N_R(x)+F_R(x)$ from step 3.1. [step 1.1, step 2.1, step 3.1, algebra]

5.1 Choice accounting. The argument uses Countable Choice only through the maximal-function interface [F3] and the splitting lemma [F4], both of which are stated under Countable Choice, and through the measure and integral facts [F6]-[F7] of the Euclidean Lebesgue framework; no full Axiom of Choice and no choice over an uncountable family is invoked. The hypothesis $Mf(x)<\infty$ is used only at the single point $x$, and the conclusion is pointwise at that point. [F8, step 1.1, step 2.1, step 3.1, step 4.1] ∎
