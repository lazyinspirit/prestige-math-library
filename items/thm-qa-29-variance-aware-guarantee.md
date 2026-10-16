---
id: thm-qa-29-variance-aware-guarantee
kind: theorem
title: "Variance-aware quantum Monte Carlo guarantee"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 26
deps:
  - alg-qa-29-variance-aware-monte-carlo
  - lem-qa-29-positive-mean-dyadic-estimator
  - thm-qa-29-quantum-expectation-error-cost
  - def-qa-29-expectation-estimation-task
  - def-qa-29-coherent-sampler
  - alg-qa-29-quantum-expectation-estimation
  - def-qa-13-amplitude-estimation-task
  - lem-qa-29-coherent-sampler-outcome-law
  - def-moments-variance-and-covariance
  - def-expectation-on-a-finite-probability-space
  - cor-expectation-agrees-with-the-finite-weighted-sum
  - cor-chebyshev-inequality-for-random-variables
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - lem-qa-29-independent-trial-median-bound
  - def-qa-quantum-query-algorithm
  - def-natural-logarithm
  - lem-qa-29-certified-natural-logarithm-series
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all random variables have finite range and all repetitions are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Algorithm 3 and Theorem 5"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, Theorem 12"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
verification:
  precheck: pass
---

## Statement

Let $v$ be the finite-valued real output of a coherent sampler with $\operatorname{Var}(v)\le\sigma^2$ for a known rational $\sigma\ge0$, and let rational $\varepsilon>0$. For each rational $0<\rho<1$, the algorithm [[alg-qa-29-variance-aware-monte-carlo]] returns $\widetilde\mu$ with $|\widetilde\mu-\mathbb E[v]|\le\varepsilon$ with probability at least $1-\rho$. If $\sigma=0$, it returns the exact mean after one output preparation. For $\sigma>0$, put $z=\sigma/\varepsilon$ and $L=\max(2,z)$. In the exact coherent-access model, its resource counts are
$$O\!\left((1+\ln(1/\rho))\ln L\,\ln\ln(e^e+L)\right)$$
output-state preparations and
$$O\!\left((1+\ln(1/\rho))L(\ln L)^{3/2}\ln\ln(e^e+L)\right)$$
uses of the supplied state reflection in repeated controlled-$Q$ access, up to universal constants. Accuracy and the preparation bound hold in either declared access mode; in supplied controlled-power access sum the separately declared power costs instead of applying this reflection bound. Each state reflection is implemented through the supplied sampler and its inverse; these bounds do not turn variance alone into coherent access. A finite-gate approximation needs a separate certified error analysis before it can inherit this theorem.

## Facts & Assumptions

**Given:** The finite coherent sampler, variance promise $\operatorname{Var}(v)\le\sigma^2$, rational parameters $\varepsilon>0$ and $0<\rho<1$, and the exact finite procedure in [[alg-qa-29-variance-aware-monte-carlo]].

[F1] [[def-moments-variance-and-covariance]] defines $\operatorname{Var}(Y)=\mathbb E[(Y-\mathbb E Y)^2]$ for square-integrable real $Y$.

[F2] [[cor-chebyshev-inequality-for-random-variables]] bounds $\Pr(|Y-\mathbb E Y|\ge t)$ by $\operatorname{Var}(Y)/t^2$.

[F3] [[cor-expectation-linearity-monotonicity-and-modulus-bound]] gives linearity for the finite integrable variables used below.

[F4] [[lem-qa-29-positive-mean-dyadic-estimator]]: for nonnegative finite-valued $h$, $\operatorname{PositiveMean}(h,a,\rho_1)$ returns $u$ with $|u-\mathbb E h|\le a(1+\|h\|_2)^2$ with probability at least $1-\rho_1$, and has the prepared-copy bound in either access mode and the state-reflection bound in repeated controlled-$Q$ access proved there.

[F5] [[alg-qa-29-variance-aware-monte-carlo]] sets $\varepsilon'=\min(\varepsilon,\sigma/2)$, draws a coarse sample, then uses fresh sampler executions for the positive and negative parts of $B/4$ with the coarse value fixed, and takes the prescribed outer median.

[F6] [[lem-qa-29-independent-trial-median-bound]] proves the one-sided additive tail bound for independent Bernoulli failures; [[def-qa-quantum-query-algorithm]] specifies fresh independent executions.

[F7] [[def-natural-logarithm]] defines the natural logarithm used in the confidence schedule and the positive-cutoff resource bounds.

[F8] [[def-expectation-on-a-finite-probability-space]]: for a finite law, expectation is its finite weighted sum, so a sum of nonnegative terms can equal zero only if each positive-weight term is zero.

[F9] [[lem-qa-29-certified-natural-logarithm-series]] returns an interval of width at most $1/4$ containing $\ln x$ for each positive rational $x$; its upper endpoint satisfies $\ln x\le U\le\ln x+1/4$ and is computed by a terminating rational loop.

[F10] [[lem-qa-29-coherent-sampler-outcome-law]] identifies each measured output with the finite sampler law.

[F11] [[cor-expectation-agrees-with-the-finite-weighted-sum]] identifies the general expectations in [F1]–[F3] with the finite weighted sums in [F8].

[F12] [[alg-qa-29-quantum-expectation-estimation]] forms the amplitude-estimation state preparation by appending the observable-controlled rotation to the supplied sampler. [[def-qa-13-amplitude-estimation-task]] defines the Grover iterate from that complete state-preparation unitary, so its initial-state reflection is about the value-rotated preparation.

## Proof
1.1 Suppose $\sigma=0$. By [F10], the fresh measured output has the finite sampler law; [F11] identifies the general expectation in [F1] with its finite weighted sum. Then $\mathbb E[(v-\mathbb E v)^2]=0$. By [F8], this finite expectation is a sum of nonnegative terms, so every outcome of positive probability has $v=\mathbb E v$. A fresh measurement therefore returns the mean with probability one. [given, F1, F8, F10, F11, construct, algebra]

1.2 Now suppose $\sigma>0$ and write $Y=v/\sigma$, $\mu'=\mathbb E[Y]$. By [F10]–[F11], the measured coarse value and the general moments have the finite laws and expectations used in [F1]–[F2]. Scaling gives $\operatorname{Var}(Y)\le1$. In one trial the algorithm observes $m$ from the same law as $Y$; [F2] gives $\Pr(|m-\mu'|\ge3)\le1/9$. [given, F1, F2, F5, F10, F11, algebra]

1.3 Condition on the fixed coarse value $m$ and let $Y$ denote the normalized fresh output specified by [F5]. On the event $|m-\mu'|<3$, the centered value $B_m(Y)=Y-m$ satisfies
$$\|B_m(Y)/4\|_2^2=\frac{\mathbb E[(Y-m)^2\mid m]}{16}=\frac{\operatorname{Var}(Y)+(\mu'-m)^2}{16}<\frac{10}{16}<1.$$
The identity follows by writing $Y-m=(Y-\mu')+(\mu'-m)$ and using the conditional mean $\mathbb E[Y\mid m]=\mu'$ to remove the cross term; the fresh draw is independent of $m$. By [F10]–[F11], these conditional expectations are finite weighted sums for the conditional sampler law. Since $0\le h_{\pm,m}\le|B_m|/4$, both positive parts also have conditional $L^2$ norm less than one. [step 1.2, F1, F5, F10, F11, algebra]

2.1 Here $\varepsilon_0=7\varepsilon'/8$ and $a=\varepsilon_0/(32\sigma)\le1/64$. Condition on any good coarse value $m$. On the good coarse-sample event, [F4] applied to both fresh conditional outputs with $\rho_1=1/9$ yields $|u_\pm-\mathbb E[h_{\pm,m}(Y)\mid m]|<4a$ except with conditional probability at most $2/9$. By finite-sum linearity, identified with general linearity by [F11] and [F3], $\mathbb E[Y\mid m]=m+4(\mathbb E[h_{+,m}(Y)\mid m]-\mathbb E[h_{-,m}(Y)\mid m])$. Thus the normalized trial estimate $m+4(u_+-u_-)$ differs from $\mathbb E[Y]=\mu'$ by less than $4(4a+4a)=32a=\varepsilon_0/\sigma$. Multiplying by $\sigma$ gives error less than $\varepsilon_0\le\varepsilon'\le\varepsilon$ in the exact coherent-access model. [given, F3, F4, F5, F11, step 1.3, algebra]

3.1 The coarse-sample failure probability is at most $1/9$, and conditional on any good coarse value the two positive-estimation failures together have probability at most $2/9$. A union bound therefore gives each outer trial success probability at least $2/3$. [step 1.2, step 2.1, algebra]

4.1 The outer trials use fresh independent preparations and measurements. If their odd count is $R_0$, a failed median requires at least $R_0/2$ trial failures. [F6] bounds that probability by $\exp(-R_0/18)$ because each trial fails with probability at most $1/3$; the algorithm sets $R_0\ge\lceil18U_0\rceil+1$ with $U_0\ge\ln(1/\rho)$ by [F9], so this is at most $\rho$. This proves the accuracy guarantee. [given, F5, F6, F9, step 3.1, algebra]

5.1 Let $z_0=\sigma/\varepsilon_0=(8/7)L$. Then $a^{-1}=32z_0=\Theta(L)$ and $k=\lceil\log_2(32z_0)\rceil=\Theta(\ln L)$ for $L=\max(2,\sigma/\varepsilon)$. By [F4], one positive estimate uses $O(\ln L\,\ln\ln(e^e+L))$ copies in either access mode and $O(L(\ln L)^{3/2}\ln\ln(e^e+L))$ state reflections in repeated controlled-$Q$ access at confidence $1/9$. Each outer trial uses two such estimates and one coarse sample; [F9] gives $R_0=O(1+\ln(1/\rho))$. This yields the stated preparation bound in either mode and the reflection bound in repeated access; supplied-power implementations retain their separate declared power costs from [F4]. [given, F4, F5, F7, F9, step 4.1, algebra]

6.1 In each binned amplitude-estimation call, the initial-state reflection is for the complete state preparation, including the observable-controlled rotation, by [F12]. The coarse centering measurement is a separate preparation of the unrotated sampler $V$; $V(2|0\rangle\langle0|-I)V^\dagger$ alone is not a bin reflection unless that complete preparation is exactly $V$. Sampler, inverse, controlled, rotation, value-computation, and reflection implementations remain explicitly supplied and charged. The proof counts copies and state reflections separately and infers no gate or query implementation from the variance promise. [F5, F12, step 5.1] ∎
