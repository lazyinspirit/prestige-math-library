---
id: thm-wooley-polynomial-weyl-type-estimate
kind: theorem
title: "Wooley Polynomial Weyl-Type Estimate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-polynomial-weyl-sum
  - def-vinogradov-mean-value-Jsk
  - def-common-divisor-and-gcd
  - def-coprime
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - cor-mean-value-theorem
  - cor-exponential-reciprocal-and-positivity
  - thm-real-power-laws
  - thm-dirichlet-rational-approximation-with-denominator-range
  - lem-selected-coefficient-polynomial-sum-mean-value-bound
  - lem-integer-vmvt-large-moments-from-finite-congruences
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "Theorem 1.5, printed p. 1579; proof in §8, printed p. 1608"
    - title: "R. C. Vaughan, The Hardy–Littlewood Method, second edition"
      url: "https://djvu.online/file/y04IjoKF754hT"
      locator: "Chapter 5, Theorem 5.2, printed p. 68"
---

## Statement

Let $k\ge3$ and $N\ge1$ be integers, let
$\boldsymbol\alpha=(\alpha_1,\ldots,\alpha_k)\in\mathbb R^k$, and let
$\varepsilon>0$. Suppose that for some integer $j$ with $2\le j\le k$ there
are integers $a,q$ with $q\ge1$, $\gcd(a,q)=1$, $q\le N^j$, and
$|\alpha_j-a/q|\le q^{-2}$. With
$$f_k(\boldsymbol\alpha;N):= \sum_{n=1}^Ne\!\left(\sum_{r=1}^k\alpha_rn^r\right),\qquad e(t):=\exp(2\pi i t),$$
there is a constant $C_{k,\varepsilon}>0$, independent of
$N,\boldsymbol\alpha,j,a,q$, such that
$$|f_k(\boldsymbol\alpha;N)|\le C_{k,\varepsilon}N^{1+\varepsilon} \left(q^{-1}+N^{-1}+qN^{-j}\right)^{1/(2k(k-1))}.$$
Here $\gcd$ is the nonnegative greatest common divisor, and $\gcd(a,q)=1$
means that $a$ and $q$ are coprime. For each fixed $j$, such an approximant
exists for every $\alpha_j$ by the denominator-range form of Dirichlet
approximation with $Q=N^j$.

## Statement references

[Wooley, Theorem 1.5](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[[def-polynomial-weyl-sum]]

[[def-common-divisor-and-gcd]]

[[def-coprime]]

[[def-real-power]]

## Facts & Assumptions

**Given:** Integers $k\ge3$, $N\ge1$, a real vector
$\boldsymbol\alpha\in\mathbb R^k$, $\varepsilon>0$, a permitted index $j$,
and a reduced approximation $a/q$ satisfying the displayed denominator and
error bounds.

[F1] [[def-polynomial-weyl-sum]]: $f_k(\boldsymbol\alpha;N)=\sum_{n=1}^N e(\sum_{r=1}^k\alpha_rn^r)$ with $e(t)=\exp(2\pi i t)$.

[F2] [[def-vinogradov-mean-value-Jsk]]: for positive integers $s,d$ and real $X\ge1$, $J_{s,d}(X)$ is the ordinary multiple Riemann integral of the $2s$-th power of the degree-$d$ exponential sum over $[0,1]^d$.

[F3] [[lem-integer-vmvt-large-moments-from-finite-congruences]]: without any choice assumption, for integers $d\ge1$, $s\ge d(d+1)/2$, $M\ge1$ and every $\eta>0$, $J_{s,d}(M)\le C_{d,s,\eta}M^{2s-d(d+1)/2+\eta}$. The proof uses only the accepted integer finite-congruence branch and Riemann equation-count identity.

[F4] [[lem-selected-coefficient-polynomial-sum-mean-value-bound]]: for $k\ge2$, $N,s\ge1$, $2\le j\le k$, and a reduced $a/q$ with $q\le N^j$ and $|\alpha_j-a/q|\le q^{-2}$,
$$|f_k(\boldsymbol\alpha;N)|^{2s}\le C_{k,s}H_N^{2s}N^{k(k-1)/2} \left(q^{-1}+N^{-1}+qN^{-j}\right)J_{s,k-1}(2N),$$
where $H_N=\sum_{m=1}^N m^{-1}$.

[F5] [[def-real-power]]: for a positive base $x$ and real exponent $y$, $x^y=\exp(y\log x)$.

[F6] [[thm-dirichlet-rational-approximation-with-denominator-range]]: for every real $\theta$ and integer $Q\ge1$, there are coprime integers $a,q$ with $1\le q\le Q$ and $|\theta-a/q|\le1/(qQ)\le q^{-2}$.

[F7] [[thm-real-power-continuity-and-derivatives]]: for every $\rho\in\mathbb R$, $x\mapsto x^\rho$ is continuous and differentiable on $(0,\infty)$, with derivative $\rho x^{\rho-1}$.

[F8] [[cor-mean-value-theorem]]: if a real function is continuous on $[x,y]$ and differentiable on $(x,y)$, its endpoint difference equals its derivative at some interior point times $y-x$.

[F9] [[cor-exponential-reciprocal-and-positivity]]: $\exp(t)>0$ for every real $t$.

[F10] [[thm-real-power-laws]]: for positive bases and real exponents, $a^{r+s}=a^ra^s$ and $(a^r)^s=a^{rs}$.

## Proof

**Proof technique:** direct.

1.1 Put $s:=k(k-1)$ and $\Lambda:=q^{-1}+N^{-1}+qN^{-j}$. Applying [F4] with these parameters gives $$|f_k(\boldsymbol\alpha;N)|^{2s}\le C_{k,s}H_N^{2s}N^{s/2}\Lambda J_{s,k-1}(2N).$$ [given, F1, F4, algebra]

1.2 Set $d:=k-1$. Then $s=d(d+1)$ and $d(d+1)/2=s/2$. By [F3] with $M=2N$ and $\eta=s\varepsilon$, $$J_{s,d}(2N)\le C_{k,\varepsilon}(2N)^{2s-s/2+s\varepsilon}\le C_{k,\varepsilon}N^{3s/2+s\varepsilon}.$$ Its large-moment condition holds since $s=d(d+1)\ge d(d+1)/2$; the fixed power of two is absorbed into the constant. [F2, F3, F5, given, algebra]

1.3 For every $\rho>0$, choose an integer $L\ge0$ with $2^{L-1}<N\le2^L$. The block $\ell=0$ contributes $1$ to $H_N$; for $1\le\ell\le L$, each block $2^{\ell-1}<m\le2^\ell$ contains $2^{\ell-1}$ integers, each contributing at most $2^{1-\ell}$. Thus $H_N\le L+1$. Since $2^{\rho\ell}\ge1$, $$L+1\le\sum_{\ell=0}^L 2^{\rho\ell}\le C_\rho2^{\rho L}.$$ Here $C_\rho:=(1-2^{-\rho})^{-1}$ by the finite geometric-series formula. [given, F5, choose, algebra]

1.4 The function $x\mapsto x^\rho$ is positive and differentiable on $(0,\infty)$ by [F5], [F7], and [F9], with positive derivative $\rho x^{\rho-1}$. For $0<x<y$, [F8] therefore gives $x^\rho<y^\rho$. By [F10], $2^{\rho L}=2^\rho(2^{L-1})^\rho$; since $2^{L-1}<N$, the monotonicity just proved gives $2^{\rho L}\le2^\rho N^\rho$. [F5, F7, F8, F9, F10, given, algebra]

2.1 Insert the bound from step 1.2 into step 1.1 and use $s/2+3s/2=2s$. Taking $2s$-th roots gives $$|f_k(\boldsymbol\alpha;N)|\le C_{k,\varepsilon}H_NN^{1+\varepsilon/2}\Lambda^{1/(2s)} =C_{k,\varepsilon}H_NN^{1+\varepsilon/2} \left(q^{-1}+N^{-1}+qN^{-j}\right)^{1/(2k(k-1))}.$$ [given, F5, step 1.1, step 1.2, algebra]

3.1 Set $\rho=\varepsilon/2$ in steps 1.3 and 1.4, and substitute their bound $H_N\le C_\varepsilon N^{\varepsilon/2}$ into step 2.1. The result is the displayed $N^{1+\varepsilon}$ estimate. [step 2.1, step 1.3, step 1.4, choose, algebra] ∎


## Remarks

This proof uses the integer finite-congruence branch at degree $d=k-1$ and moment $s=d(d+1)$ through [F3]. It uses neither the Countable Choice version of the full VMVT in batch41 nor the function-field Haar-measure branch of batch39. The original all-coefficient range, every $2\le j\le k$, and the numerical exponent are retained.
