---
id: thm-tournament-property-s-k-existence
kind: theorem
title: "If $k\\ge1$ and $n\\ge3k^2 2^k$, an $n$-vertex tournament with property $S_k$ exists"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tournament-property-s-k, thm-product-probability-has-independent-coordinate-events, lem-finite-probability-basic-laws, thm-finite-union-bound, lem-exponential-dominates-one-plus-x, def-binomial-coefficient, thm-binomial-closed-formula, def-factorial-and-falling-factorial, def-real-exponential-function-and-e, thm-nonnegative-series-bounded-partial-sums, thm-exponential-addition-formula, def-integer-power, lem-power-laws, lem-power-monotone, def-natural-logarithm, thm-natural-logarithm-laws, thm-positive-probability-existence-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Bucic, Probabilistic Method, Theorem 1.5"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Statement

Let $k\ge1$ and $n\ge3k^2 2^k$. Then there exists a tournament on $n$ vertices with property $S_k$.

## Facts & Assumptions

**Given:** Naturals $k\ge1$ and $n\ge3k^2 2^k$.

[L1] Property $S_k$ means every set of at most $k$ vertices has an outside vertex directing an arc to each of its members ([[def-tournament-property-s-k]]).

[L2] Independent edge orientations form a product probability space ([[thm-product-probability-has-independent-coordinate-events]]).

[L3] Probability of a finite union is at most the sum of its event probabilities, and an event and its complement have probabilities summing to $1$ ([[thm-finite-union-bound]], [[lem-finite-probability-basic-laws]]).

[L4] For every real $y$, $1+y\le\exp(y)$; consequently $(1-p)^m\le\exp(-mp)$ for $0\le p\le1$ ([[lem-exponential-dominates-one-plus-x]]).

[L5] The number of $k$-subsets is $\binom nk=n!/(k!(n-k)!)$, and $k!$ is its usual finite product ([[def-binomial-coefficient]], [[thm-binomial-closed-formula]], [[def-factorial-and-falling-factorial]]).

[L6] $e=\exp(1)$ is the sum of its nonnegative exponential series; $\exp(u+v)=\exp(u)\exp(v)$; natural powers obey their product laws; and $\log$ is the increasing inverse of $\exp$ with $\log(xy)=\log x+\log y$ ([[def-real-exponential-function-and-e]], [[thm-nonnegative-series-bounded-partial-sums]], [[thm-exponential-addition-formula]], [[def-integer-power]], [[lem-power-laws]], [[lem-power-monotone]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

[L7] A positive-probability event in a finite probability space is nonempty ([[thm-positive-probability-existence-principle]]).

## Proof

**Proof technique:** cases.

1.1 Orient every edge independently and fairly. For a fixed $k$-set $S$, each outside vertex dominates all of $S$ with probability $2^{-k}$, independently across outside vertices; hence the failure probability is $(1-2^{-k})^{n-k}$. [L2]

2.1 The union bound gives total failure probability at most $F_k(n):=\binom nk(1-2^{-k})^{n-k}$. [step 1.1, L3, L5]

3.1 The ratio $F_k(n+1)/F_k(n)=\frac{n+1}{n+1-k}(1-2^{-k})$ is at most $1$ whenever $n+1\ge k2^k$. Thus $F_k(n)$ is nonincreasing throughout the stated range. [step 2.1, L5, algebra]

3.2 Suppose $k=1$. At $n=6$, $F_1(6)=6/2^5<1$. [assume-case one, step 2.1, algebra]

3.3 Suppose $k=2$. At $n=48$, $F_2(48)=1128(3/4)^{46}$. Since $(3/4)^8=6561/65536<1/9$, one has $(3/4)^{46}<(3/4)^{40}<1/9^5$, and $1128<9^5$; hence $F_2(48)<1$. [assume-case two, step 2.1, L5, algebra]

3.4 Suppose $k\ge3$ and put $N=3k^22^k$. The $k$th nonnegative term of the exponential series gives $k!\ge(k/e)^k$, so $\binom Nk\le(eN/k)^k$. With [L4], $F_k(N)\le\exp(k(1+\log(N/k))-(N-k)/2^k)$. [assume-case large, step 2.1, L4, L5, L6, algebra]

4.1 Since $N/k=3k2^k$, [L4] applied at $\log x$ gives $\log x\le x-1$ for $x>0$. Hence the exponent in step 3.4 is at most $k(1+2+(k-1)+k-3k)+k/2^k=k(2-k)+k/2^k<0$, using $\log3\le2$, $\log k\le k-1$, and $\log2\le1$. Thus $F_k(N)<1$. [step 3.4, L4, L6, algebra]

5.1 Monotonicity from step 3.1, together with the initial bounds in steps 3.2, 3.3, and 4.1, shows $F_k(n)<1$ in every case. Since step 2.1 bounds the failure union by $F_k(n)$, [L3] makes its complement positive; that event is nonempty by [L7]. [step 2.1, step 3.1, step 3.2, step 3.3, step 4.1, L3, L7, cases-exhaustive]

6.1 In the resulting tournament every set of size exactly $k$ has a dominator. Any smaller set extends to a $k$-set because $n\ge k$, and the same dominator works; hence [L1] gives property $S_k$. [step 5.1, L1] ∎
