---
id: cor-brownian-paths-have-infinite-total-variation-on-every-interval
kind: corollary
title: "Brownian paths have infinite total variation"
status: draft
origin: pipeline
deps: [def-brownian-motion, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-substitution, thm-monotone-convergence-for-the-integral, def-bounded-variation-and-total-variation, cor-chebyshev-inequality-for-random-variables, cor-first-borel-cantelli-lemma-for-events, lem-rat-embeds-dense, def-axiom-of-choice]
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

Let $B$ be a standard Brownian motion [[def-brownian-motion]]. Almost surely,
on every nondegenerate compact interval $[a,b]$ the variation sums of the path
are unbounded above:
$$\sup_P\sum_{i<n}|B_{t_{i+1}}-B_{t_i}|=+\infty$$
over all partitions $P=(n,t)$ of $[a,b]$ in the sense of
[[def-bounded-variation-and-total-variation]]. Equivalently, almost surely the
path is not of bounded variation on any nondegenerate compact interval.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, and rationals $a<b$.

[F1] For disjoint time intervals the increments of $B$ are independent with laws $N(0,h)$ for interval length $h$. [[def-brownian-motion]]

[F2] $N(0,h)$ is the law of $\sqrt h\,Z$ for $Z\sim N(0,1)$, and $Z$ has the strictly positive density $\varphi(x)=e^{-x^2/2}/\sqrt{2\pi}$ with $\int_{\mathbb R}\varphi=1$. [[def-standard-normal-and-normal-laws]] [[lem-normal-density-has-total-mass-one]]

[F3] Improper integrals of nonnegative measurable functions are the limits of their integrals over $[0,R]$, and substitution by $u=x^2/2$ computes $\int_0^Rx e^{-x^2/2}\,dx=1-e^{-R^2/2}$. [[thm-monotone-convergence-for-the-integral]] [[thm-substitution]]

[F4] For a real function on $[a,b]$ with $a<b$, the variation of a partition $P$ is $V(f,P)=\sum_{i<n}|f(t_{i+1})-f(t_i)|$, and the sums over all partitions are nonempty; a partition of a subinterval refines to a partition of the larger interval, so the variation sums are monotone under passing to subintervals. [[def-bounded-variation-and-total-variation]]

[F5] Chebyshev: $P(|X-EX|\ge\lambda)\le\operatorname{Var}(X)/\lambda^2$ for a square-integrable real $X$ and $\lambda>0$. [[cor-chebyshev-inequality-for-random-variables]]

[F6] First Borel-Cantelli: if $\sum_nP(G_n)<\infty$ then almost surely only finitely many $G_n$ occur. [[cor-first-borel-cantelli-lemma-for-events]]

[F7] The rationals are dense in $\mathbb R$. [[lem-rat-embeds-dense]]

[F8] AC is the ambient assumption of the Brownian and normal-law interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For $Z\sim N(0,1)$ one has $E|Z|=\sqrt{2/\pi}$ and $\operatorname{Var}(|Z|)=1-2/\pi$: by [F2] and [F3], $E|Z|=2\int_0^\infty x\varphi(x)\,dx=2(2\pi)^{-1/2}\lim_{R\to\infty}(1-e^{-R^2/2})=(2/\pi)^{1/2}$, while $E|Z|^2=E Z^2=1$ because $\varphi$ is a probability density with second moment one, so the variance is $1-(2/\pi)$. [F2, F3]

2.1 Fix $n\ge1$, put $h=(b-a)/2^n$ and $S_n:=\sum_{k=1}^{2^n}|B_{a+kh}-B_{a+(k-1)h}|$; by [F1] and [F2] the $2^n$ increments are independent with the law of $\sqrt h\,Z$, so $E S_n=2^n\sqrt{2h/\pi}=\sqrt{2(b-a)/\pi}\cdot2^{n/2}\to\infty$ and $\operatorname{Var}(S_n)=2^n h(1-2/\pi)=(b-a)(1-2/\pi)$ is constant in $n$. [step 1.1, F1, F2]

3.1 By [F5] applied to $S_n$ with $\lambda=\tfrac12E S_n$, $P\bigl(S_n\le\tfrac12E S_n\bigr)\le4\operatorname{Var}(S_n)/(E S_n)^2=\frac{4(b-a)(1-2/\pi)}{\frac{2(b-a)}{\pi}2^n}=\frac{2\pi(1-2/\pi)}{2^n}$, which is summable in $n$. [step 2.1, F5]

4.1 By [F6] and [step 2.1], almost surely $S_n>\tfrac12E S_n$ for all sufficiently large $n$, and hence $S_n\to\infty$; since each $S_n=V(B,P_n)$ is the variation of the path over the dyadic partition $P_n$ of $[a,b]$, the variation sums over partitions of $[a,b]$ are almost surely unbounded above. [step 2.1, step 3.1, F4, F6]

5.1 The argument of steps 1.1-4.1 depends on $a<b$ only through the single number $b-a$, so it applies verbatim to every ordered pair of rationals $a<b$; intersecting over this countable family gives a probability-one event on which the variation sums of $B$ are unbounded above on every compact interval with rational endpoints. [step 1.1, step 4.1, F8]

6.1 On that event every nondegenerate compact interval $[c,d]$ has unbounded variation sums as well: choose, by [F7], rationals $a<b$ with $c\le a<b\le d$, note that the dyadic partitions of $[a,b]$ extend to partitions of $[c,d]$ by adding the points $c$ and $d$, and that adding points can only increase a variation sum by the triangle inequality, so the sums over partitions of $[c,d]$ dominate the unbounded family for $[a,b]$. [step 5.1, F4, F7]

7.1 The boundary cases are covered: the interval is required to be nondegenerate, so $a=b$ and the singleton convention are excluded; $2^n\ge2$ increments are used, so the $n$-sums are genuine variation sums over partitions in the sense of [F4]; the constant $\operatorname{Var}(S_n)$ and the divergence of $E S_n$ are both independent of the particular rational interval, so the countable intersection of step 5.1 is legitimate; and AC enters only through [F8]. [step 6.1, F4, F8, given] ∎

## Source notes

Lawler, Section 2.8, computes the first and fourth moments of the Brownian increments and observes that the absolute-increment sums diverge while the squared-increment sums converge; Durrett's path-property section records the same fact as "Brownian motion is not of bounded variation". The proof above is the direct one: it uses only independence, the Gaussian absolute first and second moments, Chebyshev and Borel-Cantelli, and deliberately avoids the published bounded-variation differentiability theorem, which the page does not consume.
