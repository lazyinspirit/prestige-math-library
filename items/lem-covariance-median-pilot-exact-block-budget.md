---
id: lem-covariance-median-pilot-exact-block-budget
kind: lemma
title: "Exact block budget for the covariance geometric-median pilot"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - alg-geometric-median-of-block-means
  - lem-geometric-median-majority-radius-bound
  - lem-measurable-minimum-norm-geometric-median-selection
  - def-countable-choice
  - def-covariance-matrix-of-a-random-vector
  - def-independent-random-elements
  - thm-grouping-independent-sigma-algebras
  - lem-measurable-functions-preserve-independence
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-markov-inequality-for-random-variables
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - thm-ftc-first-part
  - lem-geometric-sequence-null
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
axiom_use: Countable Choice is used only through the minimum-norm geometric-median selector in the pilot algorithm; the block-moment and probability calculations add no choice.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Minsker and Wei, Estimation of the Covariance Structure of Heavy-Tailed Distributions"
      url: "https://arxiv.org/pdf/1708.00502"
---


## Statement

Assume Countable Choice. Let $X_1,\ldots,X_m\in\mathbb R^p$ be iid with mean $\mu$, finite covariance $\Sigma$, and $T=\operatorname{tr}\Sigma$. For $\beta>1$, put $k=\lfloor3.5\beta\rfloor+1\le m/2$. Partition the sample into $k$ consecutive blocks by the deterministic balanced rule of [[alg-geometric-median-of-block-means]], and let $\widehat\mu$ be the selected minimum-norm geometric median of their block means. Then $$P\!\left(\|\widehat\mu-\mu\|_2>11\sqrt{\frac{T(\beta+1)}m}\right)\le e^{-\beta}.$$ In particular the larger radius $B=11\sqrt{2T\beta/m}$ has the same failure bound. This proves the prescribed covariance-pilot block count without relying on the robust-mean theorem's different confidence convention.

## Facts & Assumptions

**Given:** Countable Choice, iid observations with finite covariance, the balanced block partition, and $\beta>1$, $k=\lfloor3.5\beta\rfloor+1\le m/2$.

[F1] [[lem-geometric-median-majority-radius-bound]]: if a geometric median of $k$ points is farther than $C_ar$ from $z$, more than $ak$ points are farther than $r$ from $z$, where $C_a=(1-a)/\sqrt{1-2a}$ for $0<a<1/2$.

[F2] [[def-covariance-matrix-of-a-random-vector]]: $T=\operatorname{tr}\Sigma=E\|X_i-\mu\|_2^2$.

[F3] [[def-independent-random-elements]], [[thm-grouping-independent-sigma-algebras]], [[lem-measurable-functions-preserve-independence]], [[thm-independent-random-elements-have-product-joint-law]], and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: disjoint blocks of an iid sample, their block means, and the bad-block indicators are independent; integrable cross-products of independent centered vectors have expectation zero by the product law and Fubini.

[F4] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[cor-markov-inequality-for-random-variables]], and [[thm-cauchy-schwarz-in-an-inner-product-space]]: nonnegative Markov bounds apply, and finite second moment implies integrability for the block cross-products.

[F5] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[cor-mean-value-theorem]], [[thm-ftc-first-part]], and [[lem-geometric-sequence-null]]: the logarithm has derivative $1/x$ and its laws, the chain rule and FTC apply, the mean value theorem turns a zero derivative into constancy, and $t^N\to0$ for $0<t<1$. These facts justify the logarithmic series calculation in step 3.1.

[F6] [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], and [[thm-exponential-is-strictly-increasing]]: $\exp(x+y)=\exp(x)\exp(y)$ and $\exp$ is strictly increasing.

[F7] [[alg-geometric-median-of-block-means]], [[lem-measurable-minimum-norm-geometric-median-selection]], and [[def-countable-choice]]: the prescribed deterministic partition and minimum-norm geometric-median selector are single-valued and Borel under Countable Choice.

## Proof

**Proof technique:** direct.

**Given:** The iid sample, its finite covariance, the deterministic balanced partition, Countable Choice, and the displayed $\beta,k$ conditions.

1.1 Suppose $T>0$, put $a=7/18$, $q=1/10$, $b=\lfloor m/k\rfloor$, and $r=\sqrt{T/(qb)}$. For a block of size $b_j$, expand $E\|b_j^{-1}\sum_{i\in B_j}(X_i-\mu)\|_2^2$: diagonal terms sum to $b_jT$ by [F2], and each cross term has expectation zero by [F3], because it is integrable by [F4] and the centered factors are independent. Thus $E\|M_j-\mu\|_2^2=T/b_j\le T/b$. Markov [F4] gives $P(\|M_j-\mu\|_2>r)\le q$. Grouping and measurable images in [F3] make the bad-block indicators independent. [given, F2, F3, F4, F7, algebra]

2.1 Let $W$ be the number of bad blocks. For any $\lambda>0$, independence gives $E e^{\lambda W}\le(1-q+qe^\lambda)^k$: each Bernoulli factor is $1+P(\text{bad})(e^\lambda-1)\le1+q(e^\lambda-1)$, and [F3, F6] factor the product. Since $a>q$, choose $\lambda=\log(a(1-q)/(q(1-a)))>0$. Markov [F4] then gives $P(W\ge ak)\le e^{-k\psi(a;q)}$, where $\psi(a;q)=a\log(a/q)+(1-a)\log((1-a)/(1-q))$, by substituting this $\lambda$ and simplifying. By [F1], $\|\widehat\mu-\mu\|_2>C_ar$ implies $W>ak$, so its probability is at most this bound. [F1, F3, F4, F6, step 1.1, algebra]

3.1 For $x>1$ put $t=(x-1)/(x+1)\in(0,1)$, so $x=(1+t)/(1-t)$. For $0\le u\le t$, the function $g(u)=\log((1+u)/(1-u))$ has $g(0)=0$ and, by [F5], $g'(u)=1/(1+u)+1/(1-u)=2/(1-u^2)$. The function $I(u)=2\int_0^u(1-v^2)^{-1}dv$ has the same derivative by FTC and the same value at zero, so the mean value theorem applied to $g-I$ gives $g(t)=I(t)$. Integrating $$\frac1{1-u^2}=\sum_{j=0}^N u^{2j}+\frac{u^{2N+2}}{1-u^2}$$ yields the partial logarithm series plus a remainder between zero and $2t^{2N+3}/((2N+3)(1-t^2))$, which tends to zero by [F5]. Thus $\log x=2\sum_{j\ge0}t^{2j+1}/(2j+1)$. For $t_1=13/22$ and $t_2=13/68$, the positive series and its geometric tail give $\log(35/9)>2(t_1+t_1^3/3+t_1^5/5+t_1^7/7)>27/20$ and $\log(81/55)\le2(t_2+t_2^3/3+t_2^5/(5(1-t_2^2)))<39/100$. Hence $\psi(7/18;1/10)>(7/18)(27/20)-(11/18)(39/100)=43/150>2/7$. Since $k>(7/2)\beta$, [F6] gives $e^{-k\psi}<e^{-\beta}$. [F5, F6, step 2.1, algebra]

4.1 For $a=7/18$ and $q=1/10$, $C_a^2=121/72$. Since $b\ge m/(2k)$ and $k\le(7/2)\beta+1$, the radius in step 3.1 satisfies $C_a^2r^2\le(605/18)((7/2)\beta+1)T/m\le121(\beta+1)T/m$. Thus the event at radius $11\sqrt{T(\beta+1)/m}$ is contained in the event bounded in step 3.1. If $T=0$, Markov's inequality applied to $\|X_i-\mu\|_2^2$ shows $X_i=\mu$ almost surely for each $i$; a finite intersection makes every block mean equal $\mu$, and the selected median equals $\mu$. Finally, because $\beta>1$, $11\sqrt{2T\beta/m}$ is at least the stated radius. [given, F2, F4, F7, step 3.1, algebra] ∎
