---
dependency_level: 2
id: lem-maynard-simplex-monomial-integrals
kind: lemma
title: "Exact monomial moments on the standard simplex"
status: draft
origin: pipeline
proof_strategy: induction
deps: [def-maynard-variational-quantity-mk, def-natural-numbers, thm-induction-principle, thm-multidimensional-riemann-criterion, thm-riemann-fubini-on-product-rectangles, thm-substitution-with-riemann-integrable-inner-derivative, thm-integration-by-parts-with-interior-derivatives, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-newton-leibniz-with-interior-derivative, def-factorial-and-falling-factorial]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "James Maynard, ‘Small gaps between primes’ (2015), §8.3"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
---

## Statement

For a natural number $k\ge1$ let $R_k:=\{(t_1,\ldots,t_k)\in[0,1]^k:t_1+\cdots+t_k\le1\}$. For $a_1,\ldots,a_k,b\in\mathbb N$,
$$\int_{R_k}t_1^{a_1}\cdots t_k^{a_k}\left(1-\sum_{i=1}^kt_i\right)^b\,dt_1\cdots dt_k=\frac{b!\prod_{i=1}^ka_i!}{\left(k+b+\sum_{i=1}^ka_i\right)!}.$$
The integral means the Riemann integral of the zero extension to $[0,1]^k$.


## Statement references

[[def-maynard-variational-quantity-mk|The standard simplex]]

[[def-natural-numbers|Natural number indices]]

[[def-factorial-and-falling-factorial|Natural factorials]]


## Facts & Assumptions

**Given:** $k\ge1$ and nonnegative integers $a_1,\ldots,a_k,b$.

[F1] For $k\ge2$, $R_k=\{t\in[0,1]^k:\sum_i t_i\le1\}$ ([[def-maynard-variational-quantity-mk]]); the same displayed set defines $R_1$.

[F2] A bounded function on a rectangle is Riemann integrable when arbitrarily small Darboux gaps exist ([[thm-multidimensional-riemann-criterion]]).

[F3] A Riemann-integrable function on a product rectangle has the stated equal iterated and multiple integrals when its sections are integrable ([[thm-riemann-fubini-on-product-rectangles]]).

[F4] Continuous substitution with an integrable inner derivative preserves the oriented Riemann integral ([[thm-substitution-with-riemann-integrable-inner-derivative]]).

[F5] Integration by parts holds for continuous functions with Riemann-integrable extensions of their interior derivatives ([[thm-integration-by-parts-with-interior-derivatives]]).

[F6] For a natural $n\ge1$, $(u^n)'=n u^{n-1}$, and finite sums and products obey their derivative rules ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]]).

[F7] Newton–Leibniz evaluates a Riemann integral when the integrand agrees with an interior derivative ([[thm-newton-leibniz-with-interior-derivative]]).

[F8] The natural numbers include $0$ ([[def-natural-numbers]]) and induction applies to every property on them ([[thm-induction-principle]]).

[F9] Factorials satisfy $0!=1$ and $(n+1)!=(n+1)n!$ ([[def-factorial-and-falling-factorial]]).

## Proof

**Proof technique:** induction.

1.1 Define $B(a,b):=\int_0^1u^a(1-u)^b\,du$. For $a=0$, Newton–Leibniz [F7] gives $B(0,b)=1/(b+1)=0!b!/(b+1)!$. For $a\ge1$, let $H(u):=(1-(1-u)^{b+1})/(b+1)$; repeated product differentiation using [F6] gives $H'(u)=(1-u)^b$, with $H(0)=0$ and $H(1)=1/(b+1)$. Integration by parts [F5] with $F(u)=u^a$ and $G=H$ yields $B(a,b)=1/(b+1)-\frac{a}{b+1}\int_0^1u^{a-1}(1-(1-u)^{b+1})\,du=\frac{a}{b+1}B(a-1,b+1)$, using [F7] for $\int_0^1u^{a-1}=1/a$. Induction on $a$, using the factorial recursion [F9], yields $B(a,b)=a!b!/(a+b+1)!$. [given, F5, F6, F7, F8, F9, induction, algebra]

1.2 The zero extension of the integrand in the Statement is bounded on $[0,1]^k$ and can be discontinuous only on the hyperplane $\sum_i t_i=1$. On a grid of mesh $\delta$, fixing the first $k-1$ coordinate intervals makes the threshold for the last coordinate vary over an interval of length at most $(k-1)\delta$, so at most $k+1$ last-coordinate intervals meet the hyperplane. It therefore meets $O_k(\delta^{1-k})$ cells of total volume $O_k(\delta)$. The Darboux criterion [F2] makes the extension Riemann integrable. Each one-coordinate section is piecewise polynomial and hence integrable, so [F3] permits iterated integration. [given, F1, F2, F3, algebra]

2.1 We prove the formula by induction on $k$. The case $k=1$ is step 1.1. For $k\ge2$, put $S=\sum_{i<k}t_i$ and $r=1-S$ on $R_{k-1}$. The inner integral over $t_k$ is zero when $r=0$; when $r>0$, substitution $t_k=ru$ [F4] gives $\int_0^r t_k^{a_k}(r-t_k)^b\,dt_k=r^{a_k+b+1}B(a_k,b)$. By step 1.1 this is $r^{a_k+b+1}a_k!b!/(a_k+b+1)!$. [given, F1, F3, F4, F8, F9, step 1.1, step 1.2, base, algebra]

3.1 Apply the induction hypothesis to the outer $R_{k-1}$ integral with exponent $b'=a_k+b+1$ on $r$. [F8, step 2.1, IH]

4.1 The value becomes $\frac{a_k!b!}{(a_k+b+1)!}\cdot\frac{(a_k+b+1)!\prod_{i<k}a_i!}{(k-1+\sum_{i<k}a_i+a_k+b+1)!}=\frac{b!\prod_{i=1}^ka_i!}{(k+b+\sum_{i=1}^ka_i)!}$, which is the asserted formula. [F1, F8, F9, step 3.1, discharge-induction, algebra] ∎
