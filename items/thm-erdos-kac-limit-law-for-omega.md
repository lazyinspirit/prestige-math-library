---
id: thm-erdos-kac-limit-law-for-omega
kind: theorem
title: "Erdős–Kac limit law for the number of distinct prime divisors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-strongly-additive-arithmetic-function
  - def-prime
  - thm-fundamental-theorem-of-arithmetic
  - def-uniform-finite-probability-space
  - def-standard-normal-and-normal-laws
  - def-convergence-in-distribution-for-real-random-variables
  - thm-multivariate-method-of-moments-for-a-determinate-limit
  - thm-first-mertens-theorem-for-primes
  - thm-second-mertens-theorem-for-primes
  - thm-chinese-remainder-theorem
  - def-axiom-of-choice
  - lem-real-cdf-and-bounded-continuous-definitions-agree
  - def-weak-convergence-of-borel-probability-measures
  - def-tight-family-of-probability-measures
  - thm-prokhorov-tightness-theorem-on-polish-spaces
  - cor-tightness-extracts-a-weakly-convergent-subsequence
  - cor-markov-inequality-for-random-variables
  - thm-skorokhod-representation-on-polish-spaces
  - thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces
  - thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces
  - def-uniformly-integrable-family
  - cor-cauchy-schwarz-for-random-variables
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-cramer-wold-device
  - thm-multinomial-theorem
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - lem-standard-gaussian-is-determined-by-its-moments
  - thm-euclidean-space-complete
  - thm-heine-borel-rn
  - def-polish-space
  - lem-probability-measure-basic-identities
  - thm-rationals-countable
  - lem-rat-embeds-dense
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-holder-inequality-for-random-variables
justified_by: []
proof_strategy: fixed-moment comparison with an independent Bernoulli model
axiom_use: "The Axiom of Choice is used by the standard-normal probability construction and the multivariate method-of-moments supplier; the theorem is stated on that branch."
sources:
  scraped: []
  references:
    - title: "Emmanuel Kowalski, Probabilistic Number Theory, Chapter 2.3, Theorem 2.3.1 and complete truncation/moment proof"
      url: "https://www.math.ethz.ch/~kowalski/probabilistic-number-theory.pdf"
      locator: "2021 ETH Zürich notes, PDF pp. 30–37 (printed chapter pp. 26–33), Erdős–Kac proof by truncation, CRT moment comparison, and Gaussian moment convergence."
    - title: "Adam J. Harper, Probabilistic Number Theory Lecture Notes 1, Theorem 5.1, Corollary 5.4, and proofs"
      url: "https://warwick.ac.uk/fac/sci/maths/people/staff/harper/probntnotes1.pdf"
      locator: "PDF pp. 13–16, independent Erdős–Kac proof and the exact prime-divisor-count specialization."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III, §23.3 and §23.4"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "PDF pp. 22–26, distribution context for additive functions and the Erdős–Kac theorem reference."
---

## Statement

Assume the Axiom of Choice. For each integer $N\ge3$, let $U_N$ be uniform on $\{1,\ldots,N\}$ and define $\omega(n)=\#\{p\text{ prime}:p\mid n\}$ and $L_N=\log\log N$. Then the real random variables
$$Z_N:=\frac{\omega(U_N)-L_N}{\sqrt{L_N}}$$
converge in distribution to a standard normal random variable as $N\to\infty$.

## Statement references

[Kowalski, *Probabilistic Number Theory*, Chapter 2.3, Theorem 2.3.1 and proof](https://www.math.ethz.ch/~kowalski/probabilistic-number-theory.pdf)

[Harper, *Probabilistic Number Theory Lecture Notes 1*, Theorem 5.1 and Corollary 5.4](https://warwick.ac.uk/fac/sci/maths/people/staff/harper/probntnotes1.pdf)

[Montgomery and Vaughan, *Multiplicative Number Theory III*, §23.3–§23.4](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, an integer $N\ge3$, and the uniform random integer $U_N$.

[A1] Assume the Axiom of Choice. If all moments converge to those of a moment-determinate Borel probability law, the method of moments gives weak convergence; the standard Gaussian is moment-determinate. ([[def-axiom-of-choice]], [[thm-multivariate-method-of-moments-for-a-determinate-limit]])

[F1] The reciprocal prime sum is $\sum_{p\le y}1/p=\log\log y+O(1)$ for $y\ge2$. ([[thm-second-mertens-theorem-for-primes]])

[F2] If distinct primes $p_1,\ldots,p_s$ have product $d$, then $\mathbb P(p_i\mid U_N\text{ for all }i)=\lfloor N/d\rfloor/N$. ([[def-uniform-finite-probability-space]], [[thm-chinese-remainder-theorem]])

[F3] The standard normal has even moments $\mathbb E Z^{2l}=(2l-1)!!$; its odd moments are $0$ because its density is even. ([[def-standard-normal-and-normal-laws]], [[lem-gaussian-even-moment-bound-for-brownian-increments]])

[F4] For real random variables, convergence in distribution is defined by convergence of their CDFs at continuity points; this is equivalent to weak convergence of their laws. ([[def-convergence-in-distribution-for-real-random-variables]], [[lem-real-cdf-and-bounded-continuous-definitions-agree]])

[F5] Strong additivity requires $f(p^k)=f(p)$ for every prime $p$ and integer $k\ge1$. ([[def-strongly-additive-arithmetic-function]])

[F6] Unique prime factorization implies that for $n\le N$, $\omega(n)=\sum_{p\le N}\mathbf1_{p\mid n}$. ([[def-prime]], [[thm-fundamental-theorem-of-arithmetic]])

[F7] If $X,Y\in L^2$, then $\mathbb E|XY|\le(\mathbb E X^2)^{1/2}(\mathbb E Y^2)^{1/2}$. ([[cor-cauchy-schwarz-for-random-variables]])

[F8] For conjugate exponents $p,q\in[1,\infty]$, $\mathbb E|XY|\le\|X\|_p\|Y\|_q$ when the random variables belong to the corresponding spaces. ([[cor-holder-inequality-for-random-variables]])

## Proof

**Proof technique:** fixed-moment comparison with an independent Bernoulli model.

1.1 Fix an integer $r\ge1$ and put $Q=N^{1/(4r)}$, $I_p=\mathbf1_{p\mid U_N}$ for every $p\le N$, and $X_N=\sum_{p\le Q}(I_p-1/p)$. By [F6], $\omega(U_N)=\sum_{p\le N}I_p$; FTA also gives disjoint prime support for coprime inputs, and $\omega(p^k)=1=\omega(p)$, so [F5] identifies $\omega$ as strongly additive. On the finite set of $0$–$1$ vectors indexed by primes $p\le Q$, assign each vector $(b_p)$ weight $\prod_{p\le Q}(1/p)^{b_p}(1-1/p)^{1-b_p}$; finite distributivity makes these weights sum to $1$, and the coordinate maps $B_p$ are independent Bernoulli variables with $\mathbb P(B_p=1)=1/p$. Put $X'_N=\sum_{p\le Q}(B_p-1/p)$. If $L=\log\log N$, [F1] gives $\mu_Q:=\sum_{p\le Q}1/p=L+O_r(1)$ and $V_Q:=\sum_{p\le Q}(1/p)(1-1/p)=L+O_r(1)$. Indeed $\log\log Q=L-\log(4r)$ and $\sum_p1/p^2\le\sum_{n\ge2}1/(n(n-1))=1$. [given, F1, F5, F6, algebra]

2.1 By step 1.1, $X_N$ and $X'_N$ are defined on their respective finite models. For each fixed $j\le2r$, expand $X_N^j$ and $(X'_N)^j$ over the same ordered $j$-tuples of primes. For a prime repeated $m$ times, $(I_p-1/p)^m=c_{p,m}+d_{p,m}I_p$ with $|c_{p,m}|\le1$ and $|d_{p,m}|\le2$; expanding over the distinct primes therefore has total coefficient magnitude at most $3^j$. For every subset $A$ of those primes, its product $d_A\le Q^j\le N^{1/2}$, so [F2] makes the arithmetic joint-divisibility probability differ from the independent probability $1/d_A$ by at most $1/N$. There are at most $Q^j\le N^{1/2}$ ordered tuples. Consequently $|\mathbb E X_N^j-\mathbb E(X'_N)^j|\le3^jN^{-1/2}$. [step 1.1, F2, algebra]

2.2 By step 1.1, $B_p$ is the finite independent Bernoulli family. Write $Y_p=B_p-1/p$. These variables are centered, $\mathbb E Y_p^2=v_p=(1/p)(1-1/p)$, and $\mathbb E|Y_p|^m\le v_p\le1/p$ for every $m\ge2$. In the expansion of $\mathbb E(X'_N)^j$, any equality pattern in which one prime occurs exactly once contributes zero. For $j=2l$, the patterns consisting of $l$ pairs contribute $(2l-1)!!V_Q^l+O_l(V_Q^{l-1})$: the unrestricted pair-label sum is $V_Q^l$, and repeated labels have total at most $O_l(V_Q^{l-1})$ since $\sum_pv_p^2<\infty$. Every other nonzero pattern has at most $l-1$ distinct primes and contributes $O_l(V_Q^{l-1})$. For $j=2l+1$, every nonzero pattern has at most $l$ distinct primes and contributes $O_l(V_Q^l)$. Thus [F1] gives $\mathbb E(X'_N/\sqrt L)^{2l}\to(2l-1)!!$ and $\mathbb E(X'_N/\sqrt L)^{2l+1}\to0$. [step 1.1, F1, algebra]

2.3 Let $R_N=\sum_{Q<p\le N}I_p$. For each fixed integer $s\le2r$, [F2] gives $\mathbb E(R_N)_s=\sum_{\substack{p_1,\ldots,p_s>Q\\\text{distinct}}}\mathbb P(p_1\cdots p_s\mid U_N)\le(\sum_{Q<p\le N}1/p)^s=O_{r,s}(1)$, where $(R_N)_s=R_N(R_N-1)\cdots(R_N-s+1)$ and [F1] bounds the prime reciprocal tail by $O_r(1)$. Each ordinary moment $\mathbb E R_N^s$ is a fixed finite nonnegative linear combination of these falling-factorial moments, so it too is $O_{r,s}(1)$. [step 1.1, F1, F2, algebra]

3.1 Step 2.1 and $L\to\infty$ show that $\mathbb E(X_N/\sqrt L)^j$ has the same limit for every fixed $j\le2r$. In particular, $\mathbb E|X_N|^{2r}=O_r(L^r)$. For $1\le j<2r$, apply [F8] to $|X_N|^j$ and $1$ with conjugate exponents $2r/j$ and $2r/(2r-j)$; for $j=2r$, use exponents $1$ and $\infty$. Since $\|1\|_q=1$ on a probability space, this gives $\mathbb E|X_N|^j\le(\mathbb E|X_N|^{2r})^{j/(2r)}=O_r(L^{j/2})$ for every $1\le j\le2r$. [step 2.1, step 2.2, F8, algebra]

4.1 The identity $\omega(U_N)-L=X_N+(\mu_Q-L)+R_N$ has $\mu_Q-L=O_r(1)$ by step 1.1. Expand its $j$th power for fixed $j\le r$. Every term other than $X_N^j$ contains $b\ge1$ factors from $\mu_Q-L+R_N$. Since $2(j-b)\le2r$ and $2b\le2r$ (with $X_N^0=1$ when $j=b$), steps 3.1 and 2.3 give finite second moments for $X_N^{j-b}$ and $(\mu_Q-L+R_N)^b$; [F7] then bounds the absolute expectation by $O_r(L^{(j-b)/2})$. After division by $L^{j/2}$ this is $O_r(L^{-b/2})\to0$. Therefore $Z_N$ and $X_N/\sqrt L$ have the same limiting moments for every fixed $j\le r$. [F6, F7, step 1.1, step 3.1, step 2.3, algebra]

5.1 Since $r$ was arbitrary, steps 2.2–4.1 show that all moments of $Z_N$ converge to the corresponding standard-normal moments in [F3]. The Axiom of Choice is the hypothesis of [A1], and [A1] gives weak convergence of the laws to the standard normal law from these moment limits. By [F4], this is the claimed convergence in distribution. This proves the assertion. [given, A1, F3, F4, step 2.2, step 4.1] ∎

## Proof references

[[def-strongly-additive-arithmetic-function]]

[[def-prime]]

[[thm-fundamental-theorem-of-arithmetic]]

[[def-uniform-finite-probability-space]]

[[def-standard-normal-and-normal-laws]]

[[def-convergence-in-distribution-for-real-random-variables]]

[[lem-real-cdf-and-bounded-continuous-definitions-agree]]

[[thm-multivariate-method-of-moments-for-a-determinate-limit]]

[[thm-first-mertens-theorem-for-primes]]

[[thm-second-mertens-theorem-for-primes]]

[[thm-chinese-remainder-theorem]]

[[def-axiom-of-choice]]

[[cor-cauchy-schwarz-for-random-variables]]

[[cor-holder-inequality-for-random-variables]]
