---
id: ex-arma-common-factor-cancellation-and-root-classification
kind: example
title: "A common factor can reverse an unreduced root classification"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-linear-process-and-arma-model
  - thm-arma-causality-and-invertibility-root-criteria
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Theorems 3.1–3.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 2.5"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Example

Let $\epsilon$ be centered white noise with variance $\sigma^2>0$ and put
$X_t=\epsilon_t$. Its canonical ARMA representation is the reduced pair
$(\phi,\theta)=(1,1)$, which is causal. Multiplying both sides of this
equation by $1-2B$ gives the same process the unreduced equation with pair
$(1-2z,1-2z)$. That pair has a common root at $z=1/2$; applying the root
criterion before cancelling it would falsely classify the process as
noncausal.

## Facts & Assumptions

**Given:** A centered real white-noise sequence $\epsilon$ with variance
$\sigma^2>0$ and the process $X_t=\epsilon_t$.

[F1] [[def-linear-process-and-arma-model]]: an ARMA equation is
$\phi(B)(X_t-\mu)=\theta(B)\epsilon_t$ with normalized polynomials; the
canonical representation requires common factors to be cancelled.

[F2] [[thm-arma-causality-and-invertibility-root-criteria]]: for a normalized
coprime pair, causality is equivalent to absence of zeros of $\phi$ in
$|z|\le1$.



## Verification

1.1 Both polynomials $1-2z$ have constant term one and the common factor $1-2z$ has root $z=1/2$, so the unreduced pair is not coprime. Cancelling it leaves $(\phi,\theta)=(1,1)$, whose AR polynomial has no root. [F1, given, algebra]

2.1 With $X_t=\epsilon_t$, the reduced equation $X_t=\epsilon_t$ holds and has the causal representation $\psi_0=1$, $\psi_j=0$ for $j\ge1$. By [F2] the reduced pair is causal. Multiplying both sides by the same finite filter $1-2B$ gives $(1-2B)X_t=(1-2B)\epsilon_t$, so the unreduced pair also displays the same process. [F1, F2, given, step 1.1, algebra]

3.1 The unreduced $\phi$ has a zero in $|z|\le1$, but [F2] applies only after common-factor cancellation. Thus this raw root is not a valid classification of the process and explains the normalization clause. [F1, F2, step 1.1, step 2.1] ∎