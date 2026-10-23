---
id: thm-fd-observable-sampling-bias-split
title: Exact sampling variance and a numerical-bias error bound
kind: theorem
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-fd-random-fluid-observable
  - def-iid-monte-carlo-estimators
  - thm-iid-monte-carlo-mean-moments
dependency_roles:
  def-fd-random-fluid-observable: mathematical-premise
  def-iid-monte-carlo-estimators: mathematical-premise
  thm-iid-monte-carlo-mean-moments: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "No choice principle is used; the proof uses the finite IID moment formulas and a pointwise indicator inequality."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2, §§2.1–2.2 and end-note p. 40"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "Olivier Le Maître and Omar Knio, Introduction to Uncertainty Quantification, DTU PhD course lecture notes, pp. 14–16"
      url: "https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf"
---

## Statement

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space and let $Y=\Phi(U)$ and $Y_h=\Phi_h(U)$ be a real random fluid observable and its numerical approximation as defined by the random-fluid-observable definition. Assume $Y,Y_h\in L^2(\mathbb P)$. Set $\theta:=\mathbb E[Y]$, $\theta_h:=\mathbb E[Y_h]$, $b_h:=\theta_h-\theta$, and $\sigma_h^2:=\operatorname{Var}(Y_h)$. For an integer $n\ge1$, let $Y_{h,1},\ldots,Y_{h,n}$ be independent random variables with the law of $Y_h$, on a sampling probability space $(\Omega_s,\mathcal F_s,\mathbb P_s)$, and define $\bar Y_{h,n}:=n^{-1}\sum_{j=1}^nY_{h,j}$. Then

$$\mathbb E_s[(\bar Y_{h,n}-\theta)^2]=\frac{\sigma_h^2}{n}+b_h^2.$$

If finite nonnegative bounds $B_h,V_h$ satisfy $|b_h|\le B_h$ and $\sigma_h^2\le V_h$, and $\epsilon_b\ge B_h$ and $\epsilon_s>0$, then

$$\mathbb P_s\bigl(|\bar Y_{h,n}-\theta|>\epsilon_b+\epsilon_s\bigr)\le\frac{V_h}{n\epsilon_s^2}.$$

The probability is over IID sampling. The bias bound is an external premise, not an output inferred from the sample; no normal approximation or pointwise error guarantee is asserted. If the observable is dimensional, $B_h,\epsilon_b,\epsilon_s$ have its unit, $V_h$ has the squared unit, and the formulas use one consistent output unit.

## Statement references

[Art B. Owen, *Monte Carlo Theory, Methods and Examples*, Chapter 2, §§2.1–2.2 and end-note p. 40](https://artowen.su.domains/mc/Ch-intro.pdf)

[Olivier Le Maître and Omar Knio, *Introduction to Uncertainty Quantification*, DTU lecture notes](https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf)

## Facts & Assumptions

**Given:** The probability spaces, random observables, independent sample, integer $n$, and bounds in the Statement.

[A1] $Y,Y_h$ have finite second moments; the sample variables are independent copies of $Y_h$.

[F1] [[def-fd-random-fluid-observable]] and [[def-iid-monte-carlo-estimators]]: $Y$ and $Y_h$ are measurable real composites, $\theta=\mathbb E[Y]$, $\theta_h=\mathbb E[Y_h]$, $b_h=\theta_h-\theta$, and the Monte Carlo mean of $n$ IID real values is their arithmetic mean.

[F2] [[thm-iid-monte-carlo-mean-moments]]: for IID real values with finite second moment, the arithmetic mean has expectation equal to the common mean and variance equal to the population variance divided by $n$.

## Proof

1.1 By [A1] and [F1], the independent sample has the law of the square-integrable random variable $Y_h$. The sample mean in [F1] therefore has expectation $\theta_h$ and variance $\sigma_h^2/n$ by [F2]. [A1, F1, F2]

1.2 Put $Z:=\bar Y_{h,n}-\theta_h$ and let $E=\{|\bar Y_{h,n}-\theta|>\epsilon_b+\epsilon_s\}$. On $E$, the reverse triangle inequality and $|b_h|\le B_h\le\epsilon_b$ imply $|Z|\ge |\bar Y_{h,n}-\theta|-|b_h|>\epsilon_s$. Thus, pointwise, $\epsilon_s^2\mathbf 1_E\le Z^2$. [given, algebra]

2.1 By step 1.1, $\mathbb E_s[Z]=0$ and $\mathbb E_s[Z^2]=\sigma_h^2/n$. Since $\bar Y_{h,n}-\theta=Z+b_h$, expanding the square and taking expectations makes the cross term $2b_h\mathbb E_s[Z]$ vanish, so $\mathbb E_s[(\bar Y_{h,n}-\theta)^2]=\sigma_h^2/n+b_h^2$. [step 1.1, step 1.2, given, algebra]

3.1 Taking expectations in step 1.2 gives $\mathbb P_s(E)\le\mathbb E_s[Z^2]/\epsilon_s^2$. Step 2.1 identifies this second moment as $\sigma_h^2/n$, and $\sigma_h^2\le V_h$ gives the stated probability bound. [step 1.2, step 2.1, given, algebra] ∎
