---
id: thm-first-and-second-order-delta-method-for-random-vectors
kind: theorem
title: "First- and second-order delta method for random vectors"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-op-and-little-op-stochastic-bounds
  - def-convergence-in-distribution-of-random-elements
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
  - thm-vector-stochastic-order-calculus
  - thm-vector-slutsky
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 16, PDF pp. 9–12"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf"
    - title: "John Duchi, Theory of Statistics, Stats 300B Lecture 2, PDF pp. 2–4"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-02.pdf"
---

## Statement

Let $d,k\ge1$, let $r_n>0$ be deterministic with $r_n\to\infty$, and let $T_n$ be $\mathbb R^d$-valued random vectors with target $\theta\in\mathbb R^d$. Suppose $Z_n=r_n(T_n-\theta)\Rightarrow Z$ for an $\mathbb R^d$-valued random vector $Z$. All vector norms below are Euclidean.

If $g:\mathbb R^d\to\mathbb R^k$ is Borel and there is a linear map $A:\mathbb R^d\to\mathbb R^k$ such that
$$g(\theta+h)-g(\theta)=Ah+\rho_1(h),\qquad \frac{\|\rho_1(h)\|}{\|h\|}\longrightarrow0\quad(h\to0,\ h\ne0),$$
then
$$r_n\{g(T_n)-g(\theta)\}\Rightarrow AZ.$$

If, in addition, $A=0$ and there is a continuous symmetric bilinear map $H:\mathbb R^d\times\mathbb R^d\to\mathbb R^k$ such that
$$g(\theta+h)-g(\theta)=\frac12H[h,h]+\rho_2(h),\qquad \frac{\|\rho_2(h)\|}{\|h\|^2}\longrightarrow0\quad(h\to0,\ h\ne0),$$
then
$$r_n^2\{g(T_n)-g(\theta)\}\Rightarrow \frac12H[Z,Z].$$
For scalar-valued $g$, $H$ is the usual Hessian bilinear form. The second-order premise is a pointwise Peano expansion; continuous second derivatives on a neighborhood are not required.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] [[def-op-and-little-op-stochastic-bounds]]: $O_P(1)$ means bounded in probability by tail probabilities, and $o_P(1)$ means convergence in probability to zero.

[F2] [[thm-vector-stochastic-order-calculus]]: finite-dimensional weak convergence implies $O_P(1)$.

[F3] [[thm-vector-stochastic-order-calculus]]: a fixed continuous bilinear map sends an $o_P(1)$ factor times an $O_P(1)$ factor to $o_P(1)$.

[F4] [[thm-vector-slutsky]]: if $X_n\Rightarrow X$ and $Y_n-c=o_P(1)$, then $(X_n,Y_n)\Rightarrow(X,c)$, and continuous maps preserve this limit.

[F5] [[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]: on finite-dimensional real matrix spaces, differentiability means a real-linear first-order approximation with a remainder whose norm divided by the input norm tends to zero. Identify $\mathbb R^d$ with real column matrices and use the Euclidean/Frobenius norm equality.

[F6] [[def-convergence-in-distribution-of-random-elements]]: $X_n\Rightarrow X$ means weak convergence of their laws in the common metric target; the random elements need not share probability spaces.

## Proof


**Given:** The objects and hypotheses in the statement.

1.1 By [F6], $Z_n\Rightarrow Z$ is weak convergence in $\mathbb R^d$. By [F2], this implies $Z_n=O_P(1)$. [F2, F6, given]

2.1 Since $r_n^{-1}\to0$, the deterministic sequence $r_n^{-1}$ is $o_P(1)$. Applying the bilinear product rule in [F3] to scalar multiplication gives $T_n-\theta=r_n^{-1}Z_n=o_P(1)$. [F1, F3, step 1.1, given, algebra]

3.1 Fix $\varepsilon,\eta>0$. By [F2] choose $M>0$ with $\limsup_nP(\|Z_n\|>M)\le\eta$. The first-order remainder limit in the statement gives $\delta>0$ such that $\|\rho_1(h)\|\le(\varepsilon/M)\|h\|$ when $0<\|h\|<\delta$. Step 2.1 gives $P(\|T_n-\theta\|\ge\delta)\to0$, so the limiting upper probability that $r_n\|\rho_1(T_n-\theta)\|>\varepsilon$ is at most $\eta$. Letting $\eta\downarrow0$ proves $r_n\rho_1(T_n-\theta)=o_P(1)$. Substitution in the first expansion yields $r_n\{g(T_n)-g(\theta)\}=AZ_n+o_P(1)$. [F1, F2, step 1.1, step 2.1, given, choose, algebra, F5]

3.2 Fix $\varepsilon,\eta>0$. By [F2] choose $M>0$ with $\limsup_nP(\|Z_n\|>M)\le\eta$. The second-order remainder limit in the statement gives $\delta>0$ such that $\|\rho_2(h)\|\le(\varepsilon/M^2)\|h\|^2$ for $0<\|h\|<\delta$. Step 2.1 puts $T_n-\theta$ inside this neighborhood with probability tending to one. Outside the two tail events, $r_n^2\|\rho_2(T_n-\theta)\|\le\varepsilon$ because $r_n\|T_n-\theta\|=\|Z_n\|$. Thus $r_n^2\rho_2(T_n-\theta)=o_P(1)$; since $A=0$, substitution in the second expansion gives $r_n^2\{g(T_n)-g(\theta)\}=\frac12H[Z_n,Z_n]+o_P(1)$. [F1, F2, step 1.1, step 2.1, given, choose, algebra]

4.1 The map $(x,e)\mapsto Ax+e$ is continuous. Apply [F4] to $Z_n\Rightarrow Z$ and the $o_P(1)$ error in step 3.1 to obtain the first-order limit $AZ$. [F4, given, step 3.1]

5.1 The quadratic map $z\mapsto\frac12H[z,z]$ is continuous. Apply [F4] to its value at $Z_n$ and the error in step 3.2 to obtain the second-order limit $\frac12H[Z,Z]$. [F4, given, step 3.2] ∎

## Remarks

The first-order result is choice-free and does not require $Z$ to be Gaussian. If $AZ=0$ almost surely, its first-order limit is degenerate; the second-order statement gives a different scale only when its stated expansion holds.
