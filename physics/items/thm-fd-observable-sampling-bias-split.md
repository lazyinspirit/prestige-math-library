---
id: thm-fd-observable-sampling-bias-split
title: Exact sampling variance and a numerical-bias error bound
kind: theorem
status: published
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - def-fd-random-fluid-observable
  - def-iid-monte-carlo-estimators
  - thm-iid-monte-carlo-central-limit
  - thm-iid-monte-carlo-sample-variance-consistency
  - thm-slutsky-for-real-random-variables
  - def-convergence-in-distribution-for-real-random-variables
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-axiom-of-choice
  - thm-dominated-convergence
  - def-standard-normal-and-normal-laws
  - thm-change-of-variables-for-expectation
  - cor-variance-adds-for-pairwise-independent-random-variables
  - def-moments-variance-and-covariance
dependency_roles:
  def-standard-normal-and-normal-laws: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-convergence-in-distribution-for-real-random-variables: mathematical-premise
  thm-slutsky-for-real-random-variables: mathematical-premise
  thm-iid-monte-carlo-sample-variance-consistency: mathematical-premise
  thm-iid-monte-carlo-central-limit: mathematical-premise
  def-fd-random-fluid-observable: mathematical-premise
  def-iid-monte-carlo-estimators: mathematical-premise
  thm-change-of-variables-for-expectation: mathematical-premise
  cor-variance-adds-for-pairwise-independent-random-variables: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "No choice principle is used for the finite-sample and mean-bias
  bounds; AC is additionally assumed only for the imported IID Gaussian CLT and
  its asymptotic interval consequence."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2,
        §§2.1–2.2 and end-note p. 40"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "Olivier Le Maître and Omar Knio, Introduction to Uncertainty
        Quantification, DTU PhD course lecture notes, pp. 14–16"
      url: "https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf"
---

## Statement

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space and let $Y=J(S)$ and $Y_h=J_h(S_h)$ be a real random fluid observable and its numerical approximation as defined by the random-fluid-observable definition. Assume $Y\in L^1(\mathbb P)$ and $Y_h\in L^2(\mathbb P)$. Set $\theta:=\mathbb E[Y]$, $\theta_h:=\mathbb E[Y_h]$, $b_h:=\theta_h-\theta$, and $\sigma_h^2:=\operatorname{Var}(Y_h)$. For an integer $n\ge1$, let $Y_{h,1},\ldots,Y_{h,n}$ be independent random variables with the law of $Y_h$, on a sampling probability space $(\Omega_s,\mathcal F_s,\mathbb P_s)$, and define $\bar Y_{h,n}:=n^{-1}\sum_{j=1}^nY_{h,j}$. Then

$$\mathbb E_s[(\bar Y_{h,n}-\theta)^2]=\frac{\sigma_h^2}{n}+b_h^2.$$

If finite nonnegative bounds $B_h,V_h$ satisfy $|b_h|\le B_h$ and $\sigma_h^2\le V_h$, and $\epsilon_b\ge B_h$ and $\epsilon_s>0$, then

$$\mathbb P_s\bigl(|\bar Y_{h,n}-\theta|>\epsilon_b+\epsilon_s\bigr)\le\frac{V_h}{n\epsilon_s^2}.$$

The probability is over IID sampling. The bias bound is an external premise, not an output inferred from the sample; no normal approximation or pointwise error guarantee is asserted. If the observable is dimensional, $B_h,\epsilon_b,\epsilon_s$ have its unit, $V_h$ has the squared unit, and the formulas use one consistent output unit.

**Mean certificates and callback qualification.** If a measurable supplied bound $b\ge0$ satisfies $|Y-Y_h|\le b$ almost surely and $\mathbb E b<\infty$, then $|b_h|\le\mathbb E b$. More generally, for a normed state space and an $L$-Lipschitz scalar observable $J$, supplied measurable states with integrable norm difference satisfy $|\mathbb E J(S_h)-\mathbb E J(S)|\le L\mathbb E\|S_h-S\|$, provided the two scalar means exist. These are bounds on mean bias, not pointwise accuracy guarantees. An empirical average of the $b$ values alone is no deterministic upper bound on $\mathbb E b$; a supplied deterministic envelope $b\le B$ does imply $|b_h|\le B$. For a solver callback, assume its success set and successful output/certificate maps are measurable. The IID formulas apply to complete callback output with the original input law only when the callback succeeds almost surely and the stated moments hold. If failure has positive probability, the formulas do not apply to the original input law merely by retaining or conditioning on successful cases.

**Asymptotic sampling branch.** For an infinite IID output sequence, finite $\mathbb E Y_h^2$ implies $s_n^2\to\sigma_h^2$ almost surely, where $s_n^2=(n-1)^{-1}\sum_{j=1}^n(Y_{h,j}-\bar Y_{h,n})^2$ for $n\ge2$. If additionally AC and $\sigma_h^2>0$ are assumed, then $\sqrt n(\bar Y_{h,n}-\theta_h)\Rightarrow N(0,\sigma_h^2)$ and $\sqrt n(\bar Y_{h,n}-\theta_h)/s_n\Rightarrow N(0,1)$, assigning the last quotient zero where $s_n=0$. Consequently, for a supplied $z>0$ and $\alpha\in(0,1)$ such that a standard normal variable $Z$ satisfies $\mathbb P(|Z|\le z)=1-\alpha$, and any deterministic $B\ge|b_h|$,
$$\liminf_{n\to\infty}\mathbb P_s\bigl(|\bar Y_{h,n}-\theta|\le B+z s_n/\sqrt n\bigr)\ge1-\alpha.$$
This interval assertion is asymptotic, unlike the earlier finite-sample inequality. The sample-based $\bar b$ cannot replace deterministic $B$ without another proved bound. No time-series mixing CLT is substituted for the IID law here; dependent sensors require their actual separate long-run variance and assumptions.

## Statement references

[[def-fd-random-fluid-observable]]

[[thm-change-of-variables-for-expectation]]

[[cor-variance-adds-for-pairwise-independent-random-variables]]

[[def-moments-variance-and-covariance]]

[[thm-iid-monte-carlo-central-limit]]

[[thm-iid-monte-carlo-sample-variance-consistency]]

[[thm-slutsky-for-real-random-variables]]

[[def-convergence-in-distribution-for-real-random-variables]]

[[cor-expectation-linearity-monotonicity-and-modulus-bound]]

[[def-axiom-of-choice]]

[Art B. Owen, *Monte Carlo Theory, Methods and Examples*, Chapter 2, §§2.1–2.2 and end-note p. 40](https://artowen.su.domains/mc/Ch-intro.pdf)

[Olivier Le Maître and Omar Knio, *Introduction to Uncertainty Quantification*, DTU lecture notes](https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf)

## Facts & Assumptions

**Given:** The probability spaces, random observables, independent sample, integer $n$, and bounds in the Statement.

[A1] $Y$ has a finite absolute first moment and $Y_h$ a finite second moment; the sample variables are independent copies of $Y_h$.

[F1] [[def-fd-random-fluid-observable]] and [[def-iid-monte-carlo-estimators]]: $Y$ and $Y_h$ are measurable real composites, $\theta=\mathbb E[Y]$, $\theta_h=\mathbb E[Y_h]$, $b_h=\theta_h-\theta$, and the Monte Carlo mean of $n$ IID real values is their arithmetic mean.

[F2] [[thm-change-of-variables-for-expectation]] identifies moments by integrating against the law. [[cor-variance-adds-for-pairwise-independent-random-variables]] gives variance additivity for every finite pairwise-independent square-integrable family. [[def-moments-variance-and-covariance]] defines variance as the centered second moment.

[F3] Expectation is linear, monotone and satisfies $|\mathbb E W|\le\mathbb E|W|$ for integrable $W$ ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[F5] Dominated convergence applies to scalar functions bounded by an integrable majorant, including probability indicators ([[thm-dominated-convergence]]).

[F4] The IID sample variance is strongly consistent under a finite second moment ([[thm-iid-monte-carlo-sample-variance-consistency]]). Under AC and positive finite variance the IID mean has its Gaussian limit ([[thm-iid-monte-carlo-central-limit]]). Slutsky's theorem permits division by a factor tending in probability to a nonzero constant, with any fixed value at zero denominators ([[thm-slutsky-for-real-random-variables]]). Real distribution convergence is convergence of CDFs at continuity points ([[def-convergence-in-distribution-for-real-random-variables]]).

[F6] Under AC, the standard normal law has density $e^{-x^2/2}/\sqrt{2\pi}$; it therefore has no atoms and has a continuous CDF ([[def-standard-normal-and-normal-laws]]).

[A2] AC is additionally assumed only when the Gaussian CLT or its interval consequence is invoked ([[def-axiom-of-choice]]).

## Proof

1.1 This argument uses only the given finite $n$-tuple. By [A1], every $Y_{h,j}$ has the law of $Y_h$. The Borel functions $|y|$, $y^2$ and $(y-\theta_h)^2$, and the identity, have the same law integrals for these variables by [F2]. Since $|y|\le1+y^2$, all are integrable when needed, so $\mathbb E_sY_{h,j}=\theta_h$ and $\operatorname{Var}_s(Y_{h,j})=\sigma_h^2$. Finite linearity [F3] gives $\mathbb E_s\bar Y_{h,n}=n^{-1}\sum_{j=1}^n\theta_h=\theta_h$. Mutual independence implies pairwise independence; finite variance additivity [F2] gives $\operatorname{Var}_s(\sum_{j=1}^nY_{h,j})=n\sigma_h^2$. By the centered-second-moment definition and finite linearity, scaling this sum by $n^{-1}$ scales its variance by $n^{-2}$, hence $\operatorname{Var}_s(\bar Y_{h,n})=\sigma_h^2/n$. This includes $n=1$ and $\sigma_h^2=0$, without constructing an infinite extension. [A1, F1, F2, F3, given, algebra]

1.2 For the probability-bound clause, assume its supplied bounds and put $Z:=\bar Y_{h,n}-\theta_h$ and let $E=\{|\bar Y_{h,n}-\theta|>\epsilon_b+\epsilon_s\}$. On $E$, the reverse triangle inequality and $|b_h|\le B_h\le\epsilon_b$ imply $|Z|\ge |\bar Y_{h,n}-\theta|-|b_h|>\epsilon_s$. Thus, pointwise, $\epsilon_s^2\mathbf 1_E\le Z^2$. [given, algebra]

1.3 By [F3], $|b_h|=|\mathbb E(Y_h-Y)|\le\mathbb E|Y_h-Y|\le\mathbb E b$ under the pointwise certificate. For an $L$-Lipschitz $J$, substitute $|J(S_h)-J(S)|\le L\|S_h-S\|$ into the same expectation inequality. A deterministic envelope $b\le B$ gives $\mathbb E b\le B$. An empirical average cannot in general certify this upper bound: if $b$ is Bernoulli with parameter $p\in(0,1)$, an IID sample of $n$ zero values has probability $(1-p)^n>0$, while $\mathbb E b=p>0$. [F3, given, algebra]

1.4 Let $A\subseteq\Theta$ be the measurable callback success set under input law $\mu$. If $\mu(A)=1$, all members of any finite IID sample lie in $A$ almost surely, so their output law and the preceding inequalities are unchanged by any measurable definition on the failure-null set. If $0<\mu(A)<1$, the conditional joint input law given all $n$ calls succeed is $\mu(\cdot\mid A)^{\otimes n}$: on rectangles it follows by dividing $\prod_i\mu(B_i\cap A)$ by $\mu(A)^n$. This is not the original $\mu^{\otimes n}$, as already seen by the probability of $A$ in one coordinate. If $\mu(A)=0$, complete execution has probability zero and supplies no conditional certificate. Thus success-only sampling does not justify the original-law guarantee. [given, algebra]

1.5 By [F4], $s_n^2\to\sigma_h^2$ almost surely. Under [A2] and $\sigma_h>0$, continuity of the square root gives $s_n/\sigma_h\to1$ almost surely and hence in probability; the latter implication follows since the indicators of $|s_n/\sigma_h-1|>\varepsilon$ tend to zero almost surely and are bounded by one. The imported IID CLT, rescaled by the constant $\sigma_h$, gives $\sqrt n(\bar Y_{h,n}-\theta_h)/\sigma_h\Rightarrow N(0,1)$. Slutsky [F4] with denominator $s_n/\sigma_h$ proves the displayed studentized limit under its zero-denominator convention. [A2, F4, F5, given, algebra]

2.1 By step 1.1, $\mathbb E_s[Z]=0$ and $\mathbb E_s[Z^2]=\sigma_h^2/n$. Since $\bar Y_{h,n}-\theta=Z+b_h$, expanding the square and taking expectations makes the cross term $2b_h\mathbb E_s[Z]$ vanish, so $\mathbb E_s[(\bar Y_{h,n}-\theta)^2]=\sigma_h^2/n+b_h^2$. [step 1.1, given, algebra]

3.1 Taking expectations in step 1.2 gives $\mathbb P_s(E)\le\mathbb E_s[Z^2]/\epsilon_s^2$. Step 2.1 identifies this second moment as $\sigma_h^2/n$, and $\sigma_h^2\le V_h$ gives the stated probability bound. [step 1.2, step 2.1, given, algebra]

4.1 Almost-sure convergence of $s_n$ to $\sigma_h>0$ also gives $\mathbb P_s(s_n=0)\to0$ by the same bounded-indicator argument. The standard normal has a continuous density, so CDF convergence in [F4] gives $\mathbb P_s(|\sqrt n(\bar Y_{h,n}-\theta_h)/s_n|\le z)\to1-\alpha$; values at zero denominators alter this probability by at most $\mathbb P_s(s_n=0)$. On $s_n>0$, that event implies $|\bar Y_{h,n}-\theta|\le z s_n/\sqrt n+|b_h|\le z s_n/\sqrt n+B$. This proves the interval liminf bound. It adds no finite-sample guarantee, and step 1.3 explains why an empirical bias diagnostic alone cannot provide deterministic $B$. [A2, F4, F5, F6, step 1.3, step 1.5, given, algebra] ∎

