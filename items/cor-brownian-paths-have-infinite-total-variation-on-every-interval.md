---
id: cor-brownian-paths-have-infinite-total-variation-on-every-interval
kind: corollary
title: "Brownian paths have infinite total variation"
status: draft
origin: pipeline
deps: [def-brownian-motion, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-substitution, thm-monotone-convergence-for-the-integral, def-bounded-variation-and-total-variation, cor-chebyshev-inequality-for-random-variables, cor-first-borel-cantelli-lemma-for-events, lem-rat-embeds-dense, def-axiom-of-choice, lem-gaussian-even-moment-bound-for-brownian-increments, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-change-of-variables-for-expectation, thm-integration-against-a-density, thm-factorization-of-expectations-for-independent-variables, lem-variance-and-covariance-identities-for-random-variables, thm-rationals-countable]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.8"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.1 (the path is not of bounded variation)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion [[def-brownian-motion]]. Almost surely,
on every nondegenerate compact interval $[a,b]\subseteq[0,\infty)$ the variation sums of the path
are unbounded above:
$$\sup_P\sum_{i<n}|B_{t_{i+1}}-B_{t_i}|=+\infty$$
over all partitions $P=(n,t)$ of $[a,b]$ in the sense of
[[def-bounded-variation-and-total-variation]]. Equivalently, almost surely the
path is not of bounded variation on any nondegenerate compact interval.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, and nonnegative rationals $a<b$.

[F1] For disjoint time intervals the increments of $B$ are independent with laws $N(0,h)$ for interval length $h$. [[def-brownian-motion]]

[F2] $N(0,h)$ is the law of $\sqrt h\,Z$ for $Z\sim N(0,1)$, and $Z$ has the strictly positive density $\varphi(x)=e^{-x^2/2}/\sqrt{2\pi}$ with $\int_{\mathbb R}\varphi=1$. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F3] Improper integrals of nonnegative measurable functions are the limits of their integrals over $[0,R]$, and substitution by $u=x^2/2$ computes $\int_0^Rx e^{-x^2/2}\,dx=1-e^{-R^2/2}$. [[thm-monotone-convergence-for-the-integral]] [[thm-substitution]]. Under Countable Choice, continuous compact-interval integrands have equal Riemann and Lebesgue integrals; expectation is integration against the law, and a density can be moved into the integrand. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]] [[thm-change-of-variables-for-expectation]] [[thm-integration-against-a-density]]

[F4] For a real function on $[a,b]$ with $a<b$, the variation of a partition $P$ is $V(f,P)=\sum_{i<n}|f(t_{i+1})-f(t_i)|$, and the sums over all partitions are nonempty; a partition of a subinterval refines to a partition of the larger interval, so the variation sums are monotone under passing to subintervals. [[def-bounded-variation-and-total-variation]]

[F5] Chebyshev: $P(|X-EX|\ge\lambda)\le\operatorname{Var}(X)/\lambda^2$ for a square-integrable real $X$ and $\lambda>0$. [[cor-chebyshev-inequality-for-random-variables]]

[F6] First Borel-Cantelli: if $\sum_nP(G_n)<\infty$ then almost surely only finitely many $G_n$ occur. [[cor-first-borel-cantelli-lemma-for-events]]

[F7] The rationals are dense and countable; enumerating ordered pairs by diagonals gives a countable list of rational intervals. [[lem-rat-embeds-dense]] [[thm-rationals-countable]]

[F8] AC is the ambient assumption of the Brownian and normal-law interfaces. [[def-axiom-of-choice]]

[F9] For $Z\sim N(0,1)$ the even-moment formula gives $E|Z|^{2m}=(2m-1)!!$ for $m\ge1$; in particular $E Z^2=1$ ([[lem-gaussian-even-moment-bound-for-brownian-increments]]).

[F10] Products of integrable Borel functions of independent real random variables have factored expectations. For square-integrable real random variables, covariance is bilinear and $\operatorname{Cov}(X,Y)=E[XY]-EX\,EY$, with $\operatorname{Var}(X)=EX^2-(EX)^2$ ([[thm-factorization-of-expectations-for-independent-variables]], [[lem-variance-and-covariance-identities-for-random-variables]]).

## Proof

**Proof technique:** direct.

1.1 For $Z\sim N(0,1)$ one has $E|Z|=\sqrt{2/\pi}$ and $\operatorname{Var}(|Z|)=1-2/\pi$: by [F2] and [F3], $E|Z|=2\int_0^\infty x\varphi(x)\,dx=2(2\pi)^{-1/2}\lim_{R\to\infty}(1-e^{-R^2/2})=(2/\pi)^{1/2}$, while $E|Z|^2=E Z^2=1$ by [F9] with $m=1$, so [F10] gives variance $1-(2/\pi)$. The compact substitution integrals in [F3] are transferred to Lebesgue integrals before the nonnegative monotone limit; expectation and density identities in [F3] justify the displayed Gaussian integral. [F2, F3, F9, F10]

2.1 Fix $n\ge1$, put $h=(b-a)/2^n$ and $S_n:=\sum_{k=1}^{2^n}|B_{a+kh}-B_{a+(k-1)h}|$; by [F1] and [F2] the $2^n$ increments are independent with the law of $\sqrt h\,Z$, so $E S_n=2^n\sqrt{2h/\pi}=\sqrt{2(b-a)/\pi}\cdot2^{n/2}\to\infty$ and $\operatorname{Var}(S_n)=2^n h(1-2/\pi)=(b-a)(1-2/\pi)$ is constant in $n$. Indeed every absolute increment is square-integrable by step 1.1; [F10] applied to the absolute-value Borel functions on any two distinct increments gives zero covariance, and finite bilinearity gives the variance sum. If $a>0$, the independent increment list in [F1] is obtained by including $0,a$ in the time grid and discarding its first increment; for $a=0$ no extra interval is needed. [step 1.1, F1, F2, F10]

3.1 By [F5] applied to $S_n$ with $\lambda=\tfrac12E S_n$, $P\bigl(S_n\le\tfrac12E S_n\bigr)\le4\operatorname{Var}(S_n)/(E S_n)^2=\frac{4(b-a)(1-2/\pi)}{\frac{2(b-a)}{\pi}2^n}=\frac{2\pi(1-2/\pi)}{2^n}$, which is summable in $n$. [step 2.1, F5]

4.1 By [F6] and [step 2.1], almost surely $S_n>\tfrac12E S_n$ for all sufficiently large $n$, and hence $S_n\to\infty$; since each $S_n=V(B,P_n)$ is the variation of the path over the dyadic partition $P_n$ of $[a,b]$, the variation sums over partitions of $[a,b]$ are almost surely unbounded above. [step 2.1, step 3.1, F4, F6]

5.1 The argument of steps 1.1-4.1 depends on $0\le a<b$ only through the single number $b-a$, so it applies verbatim to every ordered pair of nonnegative rationals $a<b$; by [F7] the pairs form a countable family. For each pair use the measurable event $\bigcup_N\bigcap_{n\ge N}\{S_n>\tfrac12 ES_n\}$ of probability one from step 4.1; intersecting these explicit events gives a measurable probability-one event on which the variation sums of $B$ are unbounded above on every compact interval in $[0,\infty)$ with rational endpoints. [step 1.1, step 4.1, F7, F8]

6.1 On that event every nondegenerate compact interval $[c,d]\subseteq[0,\infty)$ has unbounded variation sums as well: choose, by [F7], nonnegative rationals $a<b$ with $c<a<b<d$, note that the dyadic partitions of $[a,b]$ extend to partitions of $[c,d]$ by adding the points $c$ and $d$, and that adding points can only increase a variation sum by the triangle inequality, so the sums over partitions of $[c,d]$ dominate the unbounded family for $[a,b]$. [step 5.1, F4, F7]

7.1 The boundary cases are covered: the interval is required to be nondegenerate, so $a=b$ and the singleton convention are excluded; $2^n\ge2$ increments are used, so the $n$-sums are genuine variation sums over partitions in the sense of [F4]; the variance bound is uniform in the mesh index for each fixed interval, while the full-measure intersection in step 5.1 is legitimate by countability, not by an interval-independent variance constant. AC includes the Countable Choice required for the compact Riemann/Lebesgue bridge and is inherited through the Brownian and normal-law interfaces in [F8]. [step 6.1, F4, F8, given] ∎

## Source notes

The proof uses the published Gaussian even-moment calculation at order two, a compact substitution calculation for the absolute first moment, the general independent-product and covariance interfaces, Chebyshev and first Borel–Cantelli. It requires neither bounded-variation differentiability nor a quadratic-variation theorem.
