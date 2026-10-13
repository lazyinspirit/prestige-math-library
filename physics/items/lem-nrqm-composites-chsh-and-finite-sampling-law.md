---
id: lem-nrqm-composites-chsh-and-finite-sampling-law
aliases: [nrqm-composites-chsh-and-finite-sampling-law]
kind: lemma
domain: mathematics
title: "The CHSH bound and the finite-sampling law for independent trials"
status: draft
origin: pipeline
dependency_level: 0
deps:
  [
    def-probability-measure,
    def-random-element-and-real-random-variable,
    def-expectation-of-a-nonnegative-or-integrable-random-variable,
    cor-expectation-linearity-monotonicity-and-modulus-bound,
    def-independence-of-finite-random-variables,
    def-bernoulli-and-binomial-random-variables,
    lem-bernoulli-and-binomial-mean-and-variance,
    def-moments-variance-and-covariance,
    cor-chebyshev-inequality-for-random-variables,
    def-multinomial-coefficient,
    def-measure,
  ]
dependency_roles:
  def-probability-measure: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-independence-of-finite-random-variables: mathematical-premise
  def-bernoulli-and-binomial-random-variables: mathematical-premise
  lem-bernoulli-and-binomial-mean-and-variance: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  cor-chebyshev-inequality-for-random-variables: mathematical-premise
  def-multinomial-coefficient: mathematical-premise
  def-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §6.1.4 pp. 113-115 (CHSH inequality for a setting-independent local model)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §5 pp. 16-19"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
---

## Statement

No choice principle is used. Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space ([[def-probability-measure]]).

(a) _CHSH bound._ Let $A_0,A_1,B_0,B_1:\Omega\to\{-1,1\}$ be random variables with values in $\{-1,1\}$ ([[def-random-element-and-real-random-variable]]). Then the four expectations exist and

$$\bigl|\mathbb E[A_0B_0]+\mathbb E[A_0B_1]+\mathbb E[A_1B_0]-\mathbb E[A_1B_1]\bigr|\le2 .$$

(b) _Positive-probability sequences._ Let $N\ge1$, $m\ge1$, $p_1,\dots,p_m\ge0$ with $\sum_{j=1}^mp_j=1$, and let $X_1,\dots,X_N:\Omega\to\{1,\dots,m\}$ be mutually independent with $\mathbb P(X_k=j)=p_j$ for all $k,j$ ([[def-independence-of-finite-random-variables]]). Then for every sequence $(j_1,\dots,j_N)\in\{1,\dots,m\}^N$ with $p_{j_k}>0$ for every $k$,

$$\mathbb P\bigl(X_k=j_k\text{ for every }k\bigr)=\prod_{k=1}^Np_{j_k}>0 .$$

Consequently every event disjoint from this outcome has probability at most $1-\prod_kp_{j_k}<1$: any criterion that rejects at least one such sequence has positive failure probability under this sampling model.

(c) _Binomial frequency._ Let $S$ be binomial$(N,p)$ with $N\ge1$ and $p\in[0,1]$ ([[def-bernoulli-and-binomial-random-variables]]). Then the frequency $S/N$ satisfies $\mathbb E[S/N]=p$, $\operatorname{Var}(S/N)=p(1-p)/N$, and for every $\varepsilon>0$

$$\mathbb P\bigl(|S/N-p|\ge\varepsilon\bigr)\le\frac{p(1-p)}{N\varepsilon^2}.$$

(d) _Multinomial count law._ The number of sequences $(j_1,\dots,j_N)$ with prescribed fibre sizes $n_j:=\#\{k:j_k=j\}$ is the multinomial coefficient $\binom{N}{n_1,\dots,n_m}$ ([[def-multinomial-coefficient]]), and each such sequence has probability $\prod_{j=1}^mp_j^{n_j}$; in this displayed product use the zero-count convention $p^0:=1$ for every $p\in[0,1]$, including $p=0$. Hence the probability that the count vector equals $(n_1,\dots,n_m)$ is $\binom{N}{n_1,\dots,n_m}\prod_jp_j^{n_j}$.

No statistical inference, empirical claim or measured frequency is asserted; the lemma only computes probabilities of an explicitly specified independent sampling model.

## Facts & Assumptions

**Given:** A probability space $(\Omega,\mathcal F,\mathbb P)$; variables $A_i,B_j$ with values in $\{-1,1\}$; independent $\{1,\dots,m\}$-valued $X_1,\dots,X_N$; a binomial$(N,p)$ variable $S$.

[F1] A probability measure $\mathbb P$ is countably additive on disjoint families, hence finitely additive ([[def-measure]], [[def-probability-measure]]); a real random variable is a measurable $\Omega\to\mathbb R$ ([[def-random-element-and-real-random-variable]]).

[F2] $\mathbb E[aX+bY]=a\mathbb E[X]+b\mathbb E[Y]$ for integrable $X,Y$ and scalars $a,b$; $\mathbb E[X]\le\mathbb E[Y]$ almost surely for integrable real $X\le Y$; $|\mathbb E[X]|\le\mathbb E[|X|]$ ([[cor-expectation-linearity-monotonicity-and-modulus-bound]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[F3] A finite family $(X_i)$ of finite-valued random variables is mutually independent when $\mathbb P(X_j=x_j\text{ for all }j\in J)=\prod_{j\in J}\mathbb P(X_j=x_j)$ for every nonempty $J$ and every selection $x_j\in X_j(\Omega)$ ([[def-independence-of-finite-random-variables]]).

[F4] A binomial$(N,p)$ variable is a sum of $N$ mutually independent Bernoulli$(p)$ variables; $\mathbb E[S]=Np$ and $\operatorname{Var}(S)=Np(1-p)$ ([[def-bernoulli-and-binomial-random-variables]], [[lem-bernoulli-and-binomial-mean-and-variance]]).

[F5] For a real random variable, $\operatorname{Var}(X)=\mathbb E[(X-\mathbb E[X])^2]$ when $X$ is square-integrable, and $\mathbb P(|X-\mathbb E[X]|\ge a)\le\operatorname{Var}(X)/a^2$ for $a>0$ ([[def-moments-variance-and-covariance]], [[cor-chebyshev-inequality-for-random-variables]]).

[F6] The multinomial coefficient $\binom{N}{n_1,\dots,n_m}$ is the number of colourings $c:\{1,\dots,N\}\to\{1,\dots,m\}$ with $|c^{-1}[\{j\}]|=n_j$ for every $j$, defined only when $\sum_jn_j=N$ ([[def-multinomial-coefficient]]).

## Proof

1.1 [Pointwise CHSH identity] Fix $\omega\in\Omega$. Since $B_0(\omega),B_1(\omega)\in\{-1,1\}$, the numbers $B_0(\omega)+B_1(\omega)$ and $B_0(\omega)-B_1(\omega)$ are $\pm2$ or $0$, and exactly one of them is nonzero: the first is $0$ precisely when $B_1(\omega)=-B_0(\omega)$, in which case the second is $\pm2$, and otherwise the first is $\pm2$ and the second $0$. Hence $A_0(B_0+B_1)+A_1(B_0-B_1)$ equals $\pm2$ at every $\omega$, so its absolute value is bounded by $2$ pointwise and $\mathbb E[A_0B_0]+\mathbb E[A_0B_1]+\mathbb E[A_1B_0]-\mathbb E[A_1B_1]=\mathbb E[A_0(B_0+B_1)+A_1(B_0-B_1)]$ by linearity [F2], the variables being bounded hence integrable. The monotonicity and modulus bound of [F2] applied to the pointwise bound $-2\le A_0(B_0+B_1)+A_1(B_0-B_1)\le2$ give the stated $\le2$ bound. [given, F2, algebra]

1.2 [Positive-probability sequences] Since $p_{j_k}>0$, each event $\{X_k=j_k\}$ is nonempty and $j_k\in X_k(\Omega)$. By mutual independence [F3] applied to the full index set $J=\{1,\dots,N\}$ and the selection $x_k=j_k$, $\mathbb P(X_k=j_k\text{ for all }k)=\prod_k\mathbb P(X_k=j_k)=\prod_kp_{j_k}$, which is a product of positive reals and hence positive. If an event $R$ is disjoint from $\{X_k=j_k\text{ for all }k\}$, then $\mathbb P(R)\le1-\prod_kp_{j_k}<1$ by additivity and complementation [F1]. [given, F1, F3, algebra]

1.3 [Binomial frequency moments] By [F4], $S$ is a sum of $N$ mutually independent Bernoulli$(p)$ variables, with $\mathbb E[S]=Np$ and $\operatorname{Var}(S)=Np(1-p)$. Linearity [F2] gives $\mathbb E[S/N]=\frac1N\mathbb E[S]=p$; and by the definition of variance [F5], $\operatorname{Var}(S/N)=\mathbb E[(S/N-p)^2]=\frac1{N^2}\mathbb E[(S-Np)^2]=\frac1{N^2}\operatorname{Var}(S)=\frac{p(1-p)}N$. Applying the Chebyshev inequality [F5] to the square-integrable variable $S/N$ with parameter $\varepsilon>0$ gives $\mathbb P(|S/N-p|\ge\varepsilon)\le p(1-p)/(N\varepsilon^2)$. [given, F2, F4, F5, algebra]

2.1 [Multinomial count law] A sequence $(j_1,\dots,j_N)$ is exactly a function $c:\{1,\dots,N\}\to\{1,\dots,m\}$, with fibre sizes $n_j$; by [F6] the number of such functions with prescribed fibre sizes is $\binom{N}{n_1,\dots,n_m}$. If some $j_k\notin X_k(\Omega)$, the sequence event is empty, and $p_{j_k}=\mathbb P(X_k=j_k)=0$, so its probability and $\prod_kp_{j_k}$ are both zero. Otherwise every selected label lies in the corresponding image, and independence [F3] gives probability $\prod_kp_{j_k}$. Thus in either case each sequence has probability $\prod_kp_{j_k}=\prod_jp_j^{n_j}$, because the exponent of $p_j$ is the number of $k$ with $j_k=j$, namely $n_j$; when $n_j=0$ the sequence contains no factor $p_j$, and the displayed product convention in (d) assigns that factor the value $1$, also when $p_j=0$. The count event is the disjoint union of the corresponding sequence events, so finite additivity [F1] gives probability $\binom{N}{n_1,\dots,n_m}\prod_jp_j^{n_j}$. [given, F1, F3, F6, algebra] ∎
