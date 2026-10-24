---
id: ex-predictable-linear-forecast-empirical-bernstein
kind: example
title: A predictable linear forecast and its empirical residual process
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-empirical-bernstein-confidence-sequence
  - thm-empirical-bernstein-confidence-sequence
  - def-subexponential-uniform-boundary
  - def-axiom-of-choice
  - def-conditional-expectation-given-a-sigma-algebra
  - lem-conditional-expectation-is-unique-almost-surely
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Assume AC, fix $\delta\in(0,1)$, and choose a Borel one-sided sub-exponential uniform boundary $u_{\delta/2,1}$ with crossing probability $\delta/2$ at scale $1$. Let $X_1,X_2,\ldots$ be independent Bernoulli random variables with success probability $1/4$, set $X_0=0$, and let $\mathcal F_0=\{\varnothing,\Omega\}$ and $\mathcal F_t=\sigma(X_1,\ldots,X_t)$. Use the predictable linear forecast $\widehat X_t=1/4+(1/2)X_{t-1}$. Then $\widehat X_t\in[0,1]$ and $E[X_t\mid\mathcal F_{t-1}]=1/4$ almost surely. On the path $(X_1,X_2,X_3,X_4)=(1,0,0,1)$, which has probability $9/256$, the algorithm has $\bar X_4=1/2$, $V_4=7/4$, and returns
$$C_4=\left[\frac12-\frac{u_{\delta/2,1}(7/4)}4,\;\frac12+\frac{u_{\delta/2,1}(7/4)}4\right].$$
The forecast is predictable and differs from the conditional mean when $X_{t-1}=1$; the full interval sequence still covers its target sequence with probability at least $1-\delta$.

## Example references

[[def-subexponential-uniform-boundary|The one-sided boundary input and its crossing guarantee]]

[[alg-empirical-bernstein-confidence-sequence|The streaming interval update]]

[[thm-empirical-bernstein-confidence-sequence|The all-times coverage theorem]]

## Facts & Assumptions

**Given:** Assume AC. The Bernoulli stream, filtration, forecast, error level, boundary, algorithm, and target sequence in the Example.

[F1] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional-expectation version is measurable and has the defining event integrals.

[F2] [[lem-conditional-expectation-is-unique-almost-surely]]: conditional-expectation versions with the same input and conditioning sigma-algebra agree almost surely.

[F3] [[alg-empirical-bernstein-confidence-sequence]]: at time $t$, the output is centered at $\bar X_t$ with radius $u_{\delta/2,1}(V_t)/t$.

[F4] [[thm-empirical-bernstein-confidence-sequence]]: for these bounded observations and predictable forecasts, the intervals cover the running average conditional-mean target at all times with probability at least $1-\delta$.

[A1] [[def-axiom-of-choice]]: AC is explicitly assumed here and by the coverage theorem; the definition of a conditional-expectation version imposes no AC assumption.

## Verification

1.1 For each $t$, the atoms of $\mathcal F_{t-1}$ are the events $A_x=\{(X_1,\ldots,X_{t-1})=x\}$, with $A=\Omega$ for $t=1$. Each atom has positive probability, and independence gives $P(X_t=1,A_x)=\tfrac14P(A_x)$ and $P(X_t=0,A_x)=\tfrac34P(A_x)$. Thus the constant $1/4$ has the defining event integrals on every atom and every union of atoms, so it is a version of $E[X_t\mid\mathcal F_{t-1}]$ by [F1]; [F2] identifies it with the chosen conditional-expectation class. [given, F1, F2]

2.1 The forecast $\widehat X_t$ is a function of $X_{t-1}$, hence $\mathcal F_{t-1}$-measurable, and its values are $1/4$ or $3/4$; when $X_{t-1}=1$ it equals $3/4$, not the conditional mean $1/4$. On the specified path, the four squared errors are $9/16,9/16,1/16,9/16$, so $V_4=28/16=7/4$ and $\bar X_4=2/4=1/2$. Independence gives the path probability $(1/4)(3/4)(3/4)(1/4)=9/256$. [given, step 1.1, algebra]

3.1 By [F3], the algorithm returns the displayed interval at time $4$. Its hypotheses hold with $a=0$, $b=1$; therefore [F4] gives $P(\mu_t\in C_t\text{ for every }t\geq1)\geq1-\delta$. In particular, using [A1], the interval sequence is a confidence sequence for the adapted target process defined in the Example. [given, F3, F4, A1, step 1.1, algebra] ∎
