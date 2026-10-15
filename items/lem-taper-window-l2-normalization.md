---
id: lem-taper-window-l2-normalization
kind: lemma
title: Asymptotic squared-norm normalization of a tapered window
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps: [alg-tapered-block-bootstrap, cor-archimedean-reciprocal, def-darboux-integral, def-darboux-sums, thm-darboux-equals-riemann, thm-monotone-implies-integrable, thm-real-power-continuity-and-derivatives, thm-riemann-criterion]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Section 2.3, Assumption 2"
      url: https://arxiv.org/pdf/1711.01070
---

## Statement

Let $w$ satisfy the taper conditions in [[alg-tapered-block-bootstrap]]. As the positive integer $b\to\infty$, $w^2$ is Riemann integrable on $[0,1]$, and

$$\frac{1}{b}\sum_{j=1}^b w\!\left(\frac{j-\tfrac12}{b}\right)^2\longrightarrow I_w:=\int_0^1 w(u)^2\,du>0.$$

Consequently, $W_b>0$ for all sufficiently large $b$ and $a_b=\sqrt b/W_b\to I_w^{-1/2}$.

## Facts & Assumptions

**Given:** The bounded, symmetric window $w$, nondecreasing on $[0,1/2]$, and its midpoint weights from [[alg-tapered-block-bootstrap]].

[F1] [[alg-tapered-block-bootstrap]]: $w$ takes values in $[0,1]$, is symmetric around $1/2$, is nondecreasing on $[0,1/2]$, and is positive on a neighbourhood of $1/2$; $W_b^2=\sum_{j=1}^b w((j-\tfrac12)/b)^2$.

[F2] [[thm-monotone-implies-integrable]]: A bounded monotone function on a compact interval is Riemann integrable. On the uniform partition into $N$ parts, its upper-minus-lower Darboux sum is the endpoint variation times the interval length divided by $N$.

[F3] [[cor-archimedean-reciprocal]]: For every $\varepsilon>0$ there is an integer $N\ge1$ with $1/N<\varepsilon$; since $1/N$ decreases with $N$, this implies $1/N\to0$.

[F4] [[thm-riemann-criterion]]: A bounded function on a compact interval is Riemann integrable if every $\varepsilon>0$ admits a partition whose upper-minus-lower sum is less than $\varepsilon$.

[F5] [[thm-darboux-equals-riemann]]: If a bounded function is Riemann integrable, then for every $\varepsilon>0$ all tagged Riemann sums on sufficiently fine partitions differ from its integral by less than $\varepsilon$.

[F6] [[def-darboux-integral]] and [[def-darboux-sums]]: The Darboux integral of an integrable function is the supremum of its lower sums and the infimum of its upper sums; in particular each lower sum is at most the integral.

[F7] [[thm-real-power-continuity-and-derivatives]]: The positive-base real power $x\mapsto x^{-1/2}$ is continuous on $(0,\infty)$.

## Proof

**Given:** The window and weights in the Statement.

1.1 Put $g=w^2$. On $[0,1/2]$, $g$ is bounded and nondecreasing; symmetry makes it bounded and nonincreasing on $[1/2,1]$. For each $N\ge1$, combine the uniform $N$-part partitions of these two half-intervals. By [F2], the Darboux gap on each half is at most $1/(2N)$, since $0\le g\le1$; the gap on the combined partition is their sum and is at most $1/N$. By [F3], choose $N$ with $1/N<\varepsilon$ for each $\varepsilon>0$; [F4] therefore gives Riemann integrability of $g$ on $[0,1]$. [F1, F2, F3, F4, given, choose, algebra]

1.2 Choose $0<\delta<1/2$ so that $[1/2-\delta,1/2+\delta]$ lies inside the neighbourhood where $w$ is positive, and put $c=w(1/2-\delta)>0$. Monotonicity on the left half and symmetry imply $g(u)\ge c^2$ throughout this central interval, while $g\ge0$ on $[0,1]$. The partition with endpoints $0,1/2-\delta,1/2+\delta,1$ therefore has lower sum at least $2\delta c^2$. By [F6], $I_w\ge2\delta c^2>0$. [F1, F6, given, choose, algebra]

2.1 Let $I_w=\int_0^1g(u)\,du$. The uniform partition into $b$ parts with midpoint tags has mesh $1/b\to0$, and its Riemann sum is exactly $W_b^2/b$. By [F3], [F5] and step 1.1, $W_b^2/b\to I_w$. [F3, F5, given, step 1.1, algebra]

3.1 Since $W_b^2/b\to I_w>0$, it is positive and bounded away from zero for all sufficiently large $b$. For those $b$, $a_b=(W_b^2/b)^{-1/2}$, so [F7] gives $a_b\to I_w^{-1/2}$. [F7, step 2.1, step 1.2, algebra] ∎
