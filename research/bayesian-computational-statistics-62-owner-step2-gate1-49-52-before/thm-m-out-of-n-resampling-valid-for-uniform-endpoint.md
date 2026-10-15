---
id: thm-m-out-of-n-resampling-valid-for-uniform-endpoint
kind: theorem
title: m-out-of-n bootstrap and subsampling recover the uniform endpoint root
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-m-out-of-n-bootstrap-and-subsampling
  - def-identically-distributed-and-iid-random-variables
  - def-cumulative-distribution-function-of-a-random-variable
  - def-bernoulli-and-binomial-random-variables
  - lem-bernoulli-and-binomial-mean-and-variance
  - cor-chebyshev-inequality-for-random-variables
  - lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform
  - def-weak-convergence-of-borel-probability-measures
  - thm-portmanteau-theorem
  - thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "P. J. Bickel, F. Götze, and W. R. van Zwet, Resampling Fewer Than n Observations: Gains, Losses, and Remedies for Losses, §3 and Appendix, Example 3"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
    - title: "J. P. Romano and A. M. Shaikh, On the Uniform Asymptotic Validity of Subsampling and the Bootstrap, §2.1, Theorems 2.1–2.2, Appendix A.1"
      url: "https://home.uchicago.edu/amshaikh/webfiles/uniformity.pdf"
    - title: "Ryan Martin, Stat 451 Lecture Notes 0812: Bootstrap, pp. 28–30"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat451/Slides/451notes08.pdf"
---

## Statement

For each $n\ge1$, let $X_1,\ldots,X_n$ be IID uniform on $[0,1]$, $M_n=\max_{i\le n}X_i$, and $R_n=n(M_n-1)$. Let $m=m_n$ be integers with $1\le m_n<n$ for all sufficiently large $n$, $m_n\to\infty$, and $m_n/n\to0$. Form the conditional m-out-of-n bootstrap and subsampling roots
$$R_{m,n}^{*}=m(M_{m,n}^{*}-M_n),\qquad R_{m,n}^{\mathrm{sub}}=m(M_{I}-M_n),$$
where $M_{m,n}^{*}$ is the maximum of $m$ draws with replacement from $P_n$, and $M_I$ is the maximum over a uniformly selected m-subset. For each method, its conditional CDF converges uniformly in probability to
$$F(x)=\begin{cases}e^x,&x<0,\\1,&x\ge0.\end{cases}$$
This is also the limiting CDF of the actual m-root $m(M_m-1)$. Here first-order validity means that the conditional CDF converges in probability to this actual-root limit; the theorem asserts no uniform validity over other distribution classes.

## Facts & Assumptions

**Given:** The IID uniform sample, its empirical law $P_n$, the maximum $M_n$, and an integer sequence $m\to\infty$ with $m/n\to0$.

[F1] [[def-m-out-of-n-bootstrap-and-subsampling]]: The with-replacement root uses conditionally IID draws from $P_n$ and scale $a_m$; the without-replacement root uses a uniform m-subset and also scale $a_m$.

[F2] [[def-identically-distributed-and-iid-random-variables]]: The observations have a common law and are mutually independent.

[F3] [[def-cumulative-distribution-function-of-a-random-variable]]: $F_Y(x)=\mathbb P(Y\le x)$.

[F4] [[def-bernoulli-and-binomial-random-variables]]: A binomial$(n,p)$ count is the sum of $n$ independent Bernoulli$(p)$ indicators.

[F5] [[lem-bernoulli-and-binomial-mean-and-variance]]: If $N\sim\operatorname{Binomial}(n,p)$, then $\mathbb E[N]=np$ and $\operatorname{Var}(N)=np(1-p)$.

[F6] [[cor-chebyshev-inequality-for-random-variables]]: For square-integrable $Y$ and $t>0$, $\mathbb P(|Y-\mathbb E Y|\ge t)\le\operatorname{Var}(Y)/t^2$.

[F7] [[lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform]]: Pointwise convergence in probability of random CDFs to a continuous CDF implies uniform CDF convergence in probability.

[F8] [[def-weak-convergence-of-borel-probability-measures]]: Weak convergence is convergence of integrals against every bounded continuous real function.

[F9] [[thm-portmanteau-theorem]]: Weak convergence of Borel laws implies convergence of probabilities on every Borel continuity set of the limiting law.

[F10] [[thm-logarithm-derivative-and-integral]]: For $x>0$, $\log'(x)=1/x$ and $\log x=\int_1^xdt/t$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For a size-$k$ IID uniform sample, $\mathbb P\{k(M_k-1)\le x\}=0$ for $x<-k$, equals $(1+x/k)^k$ for $-k\le x<0$, and is $1$ for $x\ge0$. For fixed $x<0$, [F10] gives $k\log(1+x/k)\to x$, so these CDFs converge to $F(x)=e^x$; for $x\ge0$ they equal $1$. The limiting CDF is continuous, including at zero. [given, F2, F3, F10, algebra]

1.2 Fix $x<0$ and put $c=-x>0$, $D_n=1-M_n$, and $K_n(c)=\#\{i:X_i>M_n-c/m\}$. For fixed $t>0$ and all sufficiently large $m$, each indicator $1\{X_i>1-t/m\}$ is Bernoulli$(t/m)$, and the indicators are independent by [F2]; hence $N_n(t):=\#\{i:X_i>1-t/m\}$ is binomial by [F4]. By [F5]–[F6], $mN_n(t)/n\to t$ in probability, since its mean is $t$ and its variance is $t(m/n)(1-t/m)\to0$. Also $mD_n\to0$ in probability, since for each $\eta>0$ and large $m$, $\mathbb P(mD_n>\eta)=(1-\eta/m)^n$. By [F10], $\log(1-u)=-\int_{1-u}^1dt/t\le-u$ for $0<u<1$, so this probability is at most $e^{-\eta n/m}\to0$. [given, F2, F4, F5, F6, F10, algebra]

2.1 For any $0<\eta<c$, on $mD_n\le\eta$ the interval from $1$ down to $M_n-c/m$ has width between $c/m$ and $(c+\eta)/m$, so $N_n(c)\le K_n(c)\le N_n(c+\eta)$. Fix $\rho>0$ and choose $0<\eta<\min(c,\rho/3)$. Step 1.2 gives $mN_n(c)/n\to c$ and $mN_n(c+\eta)/n\to c+\eta$, while $P(mD_n>\eta)\to0$; the sandwich therefore gives $mK_n(c)/n\to c$ and $K_n(c)/n\to0$ in probability. For $u_n=K_n(c)/n$, the integral identity in [F10] gives $|\log(1-u_n)+u_n|\le u_n^2/(1-u_n)$ when $u_n<1$. Since $mu_n\to c$ and $u_n\to0$, $m u_n^2/(1-u_n)\to0$, hence $(1-u_n)^m\to e^{-c}$. By [F1], the conditional with-replacement CDF is $P^*(R_{m,n}^{*}\le x)=(1-K_n(c)/n)^m\to e^{-c}=e^x$. [step 1.2, F1, F10, algebra]

3.1 For subsampling, the conditional probability that every selected observation is at most $M_n-c/m$ is $P^*(R_{m,n}^{\mathrm{sub}}\le x)=\binom{n-K_n(c)}m/\binom nm=\prod_{j=0}^{m-1}(1-u_{n,j})$, where $u_{n,j}=K_n(c)/(n-j)$; this formula holds on $n-K_n(c)\ge m$, an event whose probability tends to one by step 2.1 and $m/n\to0$. [given, F1, step 2.1, algebra]

3.2 We have $\max_{j<m}u_{n,j}\le(K_n(c)/n)/(1-m/n)\to0$ in probability, and $\sum_{j=0}^{m-1}u_{n,j}=(mK_n(c)/n)\cdot m^{-1}\sum_{j=0}^{m-1}n/(n-j)\to c$, because the average factor lies between $1$ and $(1-m/n)^{-1}\to1$. Therefore $\sum_j u_{n,j}^2\le(\max_j u_{n,j})\sum_j u_{n,j}\to0$. [given, step 2.1, algebra]

4.1 With probability tending to one, all $u_{n,j}<1$; [F10] and $|\log(1-u)+u|\le u^2/(1-u)$ then show $\sum_j\log(1-u_{n,j})\to-c$, so the product in step 3.1 tends to $e^{-c}=e^x$. [F10, step 3.1, step 3.2, algebra]

5.1 For $x\ge0$, both resampled maxima are at most $M_n$, so both conditional CDFs equal $1$. Step 1.1 gives the continuous sampling-root limit $F$, while steps 2.1 and 4.1 prove pointwise convergence for negative $x$; [F7] upgrades each method's conditional CDF convergence to uniform convergence in probability. Step 1.1 also identifies $F$ as the limiting CDF of the actual size-$m$ sampling root, which is the first-order target specified in the statement. The use of the actual size-$m$ scale is essential in steps 2.1–4.1. [F1, F7, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎

**The m-regime alone is insufficient.** Take the singleton class $\mathcal P=\{P\}$ with $P=\delta_0$, target $\theta(P)=0$, statistic $T_k(z_1,\ldots,z_k)=1/k$, and normalization $a_k=k$. Let $m_n=\lfloor\sqrt n\rfloor$. For all $n\ge4$, $1\le m_n<n$, and $m_n\to\infty$, $m_n/n\to0$, and $a_{m_n}/a_n=m_n/n\to0$. The actual size-$n$ and size-$m_n$ roots are both identically $1$, so $J_{n,P}=H_{m_n,P}$ and both root-law comparisons in the statement hold exactly. For either resampling method, every resampled statistic is $1/m_n$, so $\widehat H_{m,n}$ is the point-mass CDF at $1-m_n/n$. With $\alpha_1=\alpha_2=1/4$, both quantiles equal $1-m_n/n$ and $I_n=\{m_n/n^2\}$. Since $m_n/n^2>0$, the coverage of $\theta(P)=0$ is zero for every $n\ge4$. Thus the feasible-root condition, and hence the theorem's coverage conclusion, does not follow from the m-regime even when the two root-law comparisons hold exactly.
