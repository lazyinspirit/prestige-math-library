---
id: lem-waring-major-arc-approximation
kind: lemma
title: "Approximating the Waring sum near a rational frequency"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-exponential-character-e
  - def-waring-one-variable-mean-value
  - def-waring-singular-series-and-singular-integral
  - def-common-divisor-and-gcd
  - def-coprime
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-ftc-second-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, major-arc evaluation, printed p. 1621; the sum-integral estimate is expanded here"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.1, the major-arc approximation to the generating sum, printed pp. 34–36"
---

## Statement

Let $k\ge2$, $N\ge1$, and $q\ge1$ be integers, let $a$ be an integer whose only positive common divisor with $q$ is $1$, and let $\beta\in\mathbb R$. Put $e(t)=\exp(2\pi i t)$ and
$$S_k(q,a):=\sum_{r=0}^{q-1}e(ar^k/q),\qquad g_{k,N}(\alpha):=\sum_{x=1}^Ne(\alpha x^k).$$
Then there is a constant $C_k$ such that
$$\left|g_{k,N}\!\left(\frac aq+\beta\right)-\frac{S_k(q,a)}q\int_0^N e(\beta t^k)\,dt\right|\le C_kq\left(1+N^k|\beta|\right).$$

## Statement references

[Wooley, §10, major-arc evaluation](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §6.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** The parameters in the Statement, the exponential $e(t)=\exp(2\pi i t)$, and the reduced residue classes modulo $q$.

[F1] The exponential has derivative $\frac{d}{dt}e(\beta t^k)=2\pi i k\beta t^{k-1}e(\beta t^k)$ ([[def-exponential-character-e]], [[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F2] If a differentiable complex-valued function has continuous derivative on a compact interval, its endpoint difference is the integral of its derivative ([[thm-ftc-second-part]]).

[F3] $S_k(q,a)=\sum_{r=0}^{q-1}e(ar^k/q)$ and $g_{k,N}(\alpha)=\sum_{x=1}^Ne(\alpha x^k)$ ([[def-waring-singular-series-and-singular-integral]], [[def-waring-one-variable-mean-value]]).

## Proof

**Proof technique:** residue-class decomposition and bounded variation.

1.1 Put $f(t)=e(\beta t^k)$. For a fixed residue class modulo $q$, choose its representative $r_0\in\{1,\ldots,q\}$. If $r_0>N$, the progression sum is empty and $q^{-1}|\int_0^Nf(t)dt|\le N/q<1$. Otherwise list its terms as $x_j=r_0+jq$ for $0\le j\le M$. Comparing $f(x_j)$ with its average on $[x_j,x_j+q]$ and using [F2] gives
$$\left|f(x_j)-\frac1q\int_{x_j}^{x_j+q}f(t)\,dt\right|\le\int_{x_j}^{x_j+q}|f'(t)|\,dt.$$
The intervals for $0\le j<M$ are disjoint; the missing initial and terminal pieces of $[0,N]$, divided by $q$, have total contribution at most $2$, and the last sample contributes at most $1$. Therefore
$$\left|\sum_{\substack{1\le x\le N\\x\equiv r\ (q)}}f(x)-\frac1q\int_0^Nf(t)\,dt\right|\le3+\int_0^N|f'(t)|\,dt.$$
[F2, given, algebra]

1.2 By [F1], $|f'(t)|=2\pi k|\beta|t^{k-1}$, hence $\int_0^N|f'(t)|dt=2\pi|\beta|N^k$. Decompose the sum defining $g_{k,N}(a/q+\beta)$ into residue classes modulo $q$, multiply the estimate of step 1.1 by $e(ar^k/q)$ for each class, and sum over the $q$ representatives. Since each multiplier has modulus $1$, the total error is at most $Cq(1+N^k|\beta|)$. The main terms sum to $q^{-1}S_k(q,a)\int_0^Nf(t)dt$, which proves the assertion. [F1, F3, step 1.1, algebra] ∎
