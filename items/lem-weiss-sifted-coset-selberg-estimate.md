---
id: lem-weiss-sifted-coset-selberg-estimate
kind: lemma
title: Finite ideal Selberg minimization and sifted coset estimate
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-ideal-norm-is-multiplicative
- thm-dedekind-zeta-euler-product
- thm-fundamental-identity-for-primes-in-number-fields
- cor-norm-of-a-prime-ideal
- thm-geometric-series
justified_by: []
proof_strategy: direct
axiom_use: None. Finite ideal factorization, finite sums and scalar geometric series
  suffice.
sources:
  references:
  - title: A. R. Weiss, The least prime ideal
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Printed70–75 visually read from cached scanned PDF. Local Lemmas3.4–3.6
      are fully reconstructed; no analytic theorem is imported.
---

## Statement

Let $K$ be a number field of degree $n\ge1$ and $\mathfrak m\ne0$ an integral ideal. For an integral ideal put $\varphi(\mathfrak a)=N\mathfrak a\prod_{\mathfrak p\mid\mathfrak a}(1-(N\mathfrak p)^{-1})$, and let $\mu$ be the ideal Möbius function, zero off squarefree ideals and $(-1)^r$ on a product of $r$ distinct primes. For $z\ge1$ put
$$V(z)=\sum_{N\mathfrak a\le z}\frac1{N\mathfrak a},\qquad V_{\mathfrak m}(z)=\sum_{\substack{N\mathfrak a\le z\\(\mathfrak a,\mathfrak m)=1}}\frac{\mu(\mathfrak a)^2}{\varphi(\mathfrak a)},\qquad\theta=\prod_{\mathfrak p\mid\mathfrak m}(1-(N\mathfrak p)^{-1}).$$
There are real weights $\lambda_{\mathfrak d}$ supported on squarefree ideals coprime to $\mathfrak m$ with $N\mathfrak d\le z$, satisfying $\lambda_{(1)}=1$, $|\lambda_{\mathfrak d}|\le1$ and
$$\sum_{\mathfrak d,\mathfrak e}\frac{\lambda_{\mathfrak d}\lambda_{\mathfrak e}}{N[\mathfrak d,\mathfrak e]}=\frac1{V_{\mathfrak m}(z)},\qquad\frac{\theta}{V_{\mathfrak m}(z)}\le\frac1{V(z)}.$$
The first value is the minimum among all real weights with that support and unit coefficient. Let $f$ be any nonnegative finitely supported function on integral ideals coprime to $\mathfrak m$. If $\alpha,M\ge0$ and
$$\left|\sum_{\mathfrak d\mid\mathfrak a}f(\mathfrak a)-\frac\alpha{N\mathfrak d}\right|\le M$$
for every squarefree $\mathfrak d$ coprime to $\mathfrak m$ with $N\mathfrak d\le z^2$, then, for every $u>0$,
$$\sum_{\substack{\mathfrak a:\ \mathfrak p\mid\mathfrak a\Rightarrow N\mathfrak p>z}}f(\mathfrak a)\le\frac\alpha{\theta V(z)}+M\zeta(1+u)^{2n}z^{2+2u}.$$
In particular the error is at most $c^nMz^3$ for an absolute $c>1$. These are finite algebraic sieve statements, without a choice assumption or an analytic coset-count hypothesis beyond the displayed explicit error condition.

## Facts & Assumptions

**Given:** The field, finite modulus, real $z\ge1$ and the stated finite nonnegative weight data when that assertion is used.

[F1] Ideals have unique finite prime factorizations and multiplicative positive integer norm. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-ideal-norm-is-multiplicative]]

[F2] Dedekind zeta has its positive ideal series and absolutely convergent Euler product at every real exponent greater than one. There are at most $n$ prime ideals above each rational prime, each with norm at least that prime. [[thm-dedekind-zeta-euler-product]] [[thm-fundamental-identity-for-primes-in-number-fields]] [[cor-norm-of-a-prime-ideal]]

[F3] Positive geometric series have their exact finite partial sums and tails. [[thm-geometric-series]]

## Proof

1.1 By [F1], an ideal with $N\mathfrak a\le z$ has a finite prime factorization. By [F2], the total number of such ideals is at most $z^{1+u}\zeta_K(1+u)$ for every $u>0$, so the set is finite. Grouping the Euler factors by rational prime gives $\zeta_K(1+u)\le\zeta(1+u)^n$. Prime-power geometric sums show $\sum_{\mathfrak b\mid\mathfrak a}\varphi(\mathfrak b)=N\mathfrak a$. For a squarefree ideal $\mathfrak d$, they also give $N\mathfrak d/\varphi(\mathfrak d)=\sum_{\mathfrak c\mid\mathfrak d}1/\varphi(\mathfrak c)$. All these identities include the unit ideal. [F1, F2, F3, given, algebra]

2.1 Put $V_m=V_{\mathfrak m}(z)\ge1$ and define $\xi(\mathfrak a)=\mu(\mathfrak a)/(\varphi(\mathfrak a)V_m)$ on squarefree ideals coprime to $\mathfrak m$ of norm at most $z$, and zero elsewhere. Define $$\lambda_{\mathfrak d}=N\mathfrak d\sum_{\mathfrak b}\mu(\mathfrak b)\xi(\mathfrak d\mathfrak b).$$ All sums are finite by step 1.1. The weight vanishes off the asserted support. Also $\lambda_{(1)}=V_m/V_m=1$. The finite divisor cancellation $\sum_{\mathfrak c\mid\mathfrak a}\mu(\mathfrak c)=\mathbf1_{\mathfrak a=(1)}$, verified prime by prime as $(1-1)^r$, gives $$\sum_{\mathfrak d:\mathfrak a\mid\mathfrak d}\frac{\lambda_{\mathfrak d}}{N\mathfrak d}=\xi(\mathfrak a).$$ Indeed after substituting the definition, the coefficient of $\xi(\mathfrak t)$ is $\sum_{\mathfrak a\mid\mathfrak d\mid\mathfrak t}\mu(\mathfrak t/\mathfrak d)$, equal to one for $\mathfrak t=\mathfrak a$ and zero otherwise. Thus this transform and its inverse are exact finite identities. [F1, step 1.1, construct, algebra]

2.2 For squarefree $\mathfrak b$, geometric sums at its finitely many primes give the nonnegative identity $1/\varphi(\mathfrak b)=\sum_{\operatorname{rad}\mathfrak a=\mathfrak b}1/N\mathfrak a$. Hence $\sum_{\mathfrak b\text{ squarefree},\ N\mathfrak b\le z}1/\varphi(\mathfrak b)\ge V(z)$, since $N\operatorname{rad}\mathfrak a\le N\mathfrak a$. Also $\theta^{-1}=\sum_{\mathfrak c\mid\operatorname{rad}\mathfrak m}1/\varphi(\mathfrak c)$. Multiplying this finite identity by $V_m$, its nonnegative terms include every squarefree $\mathfrak b$ with $N\mathfrak b\le z$: split its prime factors into the ones dividing $\mathfrak m$ and the others; the latter factor has norm at most $z$ and is coprime to $\mathfrak m$. Therefore $\theta^{-1}V_m\ge V(z)$, equivalently $\theta/V_m\le1/V(z)$. Infinite geometric sums here only certify a positive scalar identity for each fixed squarefree radical; all comparison sums over radicals are finite. [F1, F3, step 1.1, algebra]

3.1 For squarefree $\mathfrak d$ on the support, multiplicativity and the definition give $$V_m|\lambda_{\mathfrak d}|=\frac{N\mathfrak d}{\varphi(\mathfrak d)}\sum_{\substack{N\mathfrak b\le z/N\mathfrak d\\(\mathfrak b,\mathfrak d\mathfrak m)=1}}\frac{\mu(\mathfrak b)^2}{\varphi(\mathfrak b)}.$$ Expand $N\mathfrak d/\varphi(\mathfrak d)$ by step 1.1. The pairs $(\mathfrak c,\mathfrak b)$ with $\mathfrak c\mid\mathfrak d$ and $(\mathfrak b,\mathfrak d\mathfrak m)=1$ give distinct squarefree ideals $\mathfrak c\mathfrak b$ coprime to $\mathfrak m$, each of norm at most $N\mathfrak d\,N\mathfrak b\le z$. Their summands are $1/\varphi(\mathfrak c\mathfrak b)$. They form a subset of the nonnegative summands of $V_m$. This proves $|\lambda_{\mathfrak d}|\le1$, including ideals with zero weight. [F1, step 1.1, step 2.1, algebra]

3.2 Ideal factorization gives $N[\mathfrak d,\mathfrak e]N(\mathfrak d,\mathfrak e)=N\mathfrak dN\mathfrak e$. Expand $N(\mathfrak d,\mathfrak e)$ by the divisor identity in step 1.1 and use the transform in step 2.1. The quadratic form becomes $$\sum_{\mathfrak d,\mathfrak e}\frac{\lambda_{\mathfrak d}\lambda_{\mathfrak e}}{N[\mathfrak d,\mathfrak e]}=\sum_{\mathfrak r}\varphi(\mathfrak r)\xi(\mathfrak r)^2=1/V_m.$$ For any other admissible real weights, the same transform satisfies $\sum_{\mathfrak r}\mu(\mathfrak r)\xi(\mathfrak r)=\lambda_{(1)}=1$. Expanding the finite nonnegative sum $\sum_{\mathfrak r}\varphi(\mathfrak r)(\xi(\mathfrak r)-\mu(\mathfrak r)/(\varphi(\mathfrak r)V_m))^2$ gives the quadratic form minus $1/V_m$, since the linear term is $2/V_m$ and the last term $1/V_m$. This proves the asserted minimum without an infinite-dimensional minimization theorem. [F1, step 1.1, step 2.1, algebra]

4.1 If $\mathfrak a$ has no prime divisor of norm at most $z$, the only supported weight dividing it is the unit weight, so $(\sum_{\mathfrak d\mid\mathfrak a}\lambda_{\mathfrak d})^2=1$. For all other ideals the square is nonnegative. Multiply by $f(\mathfrak a)\ge0$ and sum, then expand the finite square. Every least common multiple has norm at most $z^2$ and is squarefree and coprime to $\mathfrak m$, so the stipulated error applies to each term. The main term is $\alpha/V_m$ by step 3.2; the total absolute error is at most $M(\sum|\lambda_{\mathfrak d}|)^2$. Steps 1.1 and 3.1 bound this by $M z^{2+2u}\zeta(1+u)^{2n}$. Step 2.2 gives the stated main term, and $u=1/2$ gives an absolute $c^nMz^3$ since $\zeta(3/2)$ is a fixed finite number. The cases $z=1$, $M=0$, $\alpha=0$ and $f=0$ all follow from the same finite identities. [F1, F2, step 1.1, step 3.1, step 3.2, step 2.2, algebra] ∎
