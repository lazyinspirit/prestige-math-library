---
id: ex-ipw-instability-and-mnar-sensitivity-curve
kind: example
title: "Positivity failure, near-positivity weights, and an MNAR sensitivity curve"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-conditional-independence-given-a-sigma-algebra
  - def-estimand-on-a-statistical-model
  - def-expectation-on-a-finite-probability-space
  - def-finite-probability-space-and-event
  - def-full-observed-and-missing-data
  - def-identifiability-of-an-estimand
  - def-mcar-mar-and-mnar
  - def-moments-variance-and-covariance
  - def-observational-equivalence
  - def-parametric-statistical-model
  - def-pattern-mixture-sensitivity-parameter
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
generation:
  role: example
sources:
  references:
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, updated author-hosted PDF"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
      locator: "Chapter 8 §8.5, printed pp. 117–120; §12.6, printed pp. 172–173."
    - title: "National Research Council, The Prevention and Treatment of Missing Data in Clinical Trials, Chapter 4"
      url: "https://www.nationalacademies.org/read/12955/chapter/6"
      locator: "Printed pp. 47–58 and 70–77, univariate IPW, positivity and sensitivity-model assumptions."
    - title: "National Research Council, The Prevention and Treatment of Missing Data in Clinical Trials, Chapter 5"
      url: "https://www.nationalacademies.org/read/12955/chapter/7"
      locator: "Printed pp. 83–106, including the single-outcome pattern-mixture model and sensitivity analysis."
    - title: "L. Mao, Missing Data: Foundations and Methods, Chapter 1"
      url: "https://lmaowisc.github.io/missing_data/chapter-1.html"
      locator: "§1.12, current HTML lines 304–353."
---

## Example

All laws below are finite. Encode an observed record by its response mask and the available coordinates; when convenient write the missing outcome slot as a placeholder zero, with the mask distinguishing it from an observed zero.

First consider $X\in\{0,1\}$ with $P(X=0)=P(X=1)=1/2$, full outcome $Y=X$, and response probabilities
$$\pi(0)=1,\qquad \pi(1)=\varepsilon,\qquad 0<\varepsilon\le1.$$
For the response-weighted contribution $V=RY/\pi(X)$, positivity holds for every fixed $\varepsilon>0$, and $E[V]=E[Y]=1/2$. However, $V=1/\varepsilon$ with probability $\varepsilon/2$ and is zero otherwise, so
$$\operatorname{Var}(V)=\frac1{2\varepsilon}-\frac14\longrightarrow\infty\quad\text{as }\varepsilon\downarrow0.$$
Thus strict positivity gives the population identity but no uniform finite-variance bound as positivity deteriorates.

At the boundary $\varepsilon=0$, let $X$ still be fair, let $R=1$ exactly when $X=0$, and set $Y=0$ on $X=0$. Consider two full-data laws indexed by $\theta\in\{0,1\}$ that set $Y=\theta$ on $X=1$. Their observed record $O=(X,R,RY)$ has the same law under both: mass $1/2$ at $(0,1,0)$ and mass $1/2$ at $(1,0,0)$. The full-data mean is $\psi(\theta)=E_\theta[Y]=\theta/2$, so it differs between observationally equivalent laws. The zero response probability at $X=1$ prevents identification of the mean.

Finally let $P(R=1)=P(R=0)=1/2$, take $Y\mid R=1\sim\operatorname{Bernoulli}(0.4)$, and, for a sensitivity value $\Delta\in[0,1/2]$, specify $Y\mid R=0\stackrel d=B+\Delta$ for $B\sim\operatorname{Bernoulli}(0.4)$. This is the location-shift pattern-mixture family of [[def-pattern-mixture-sensitivity-parameter]] with constant $X$. Every member has the same observed law:
$$P(R=1,RY=0)=0.3,\quad P(R=1,RY=1)=0.2,\quad P(R=0,RY=0)=0.5.$$
Its full-data mean is
$$\mu(\Delta)=\tfrac12(0.4)+\tfrac12(0.4+\Delta)=0.4+0.5\Delta,$$
so the sensitivity range $\Delta\in[0,1/2]$ yields means in $[0.4,0.65]$ despite an unchanged observed law. This is a model-indexed range of target values, not a confidence interval or a coverage statement.

## Facts & Assumptions

**Given:** The finite laws and parameter ranges specified in the Example.

[F1] On a finite probability space, expectation is the probability-weighted finite sum. ([[def-expectation-on-a-finite-probability-space]])

[F2] A finite probability law has nonnegative atom weights summing to one, and event probabilities are sums of those weights. ([[def-finite-probability-space-and-event]])

[F3] Variance is the expectation of the squared deviation from the mean. ([[def-moments-variance-and-covariance]])

[F4] An estimand is a specified function of the parameter in a parametric model. ([[def-estimand-on-a-statistical-model]])

[F5] Two parameter values are observationally equivalent exactly when their sampling laws agree. ([[def-observational-equivalence]])

[F6] An estimand is identifiable only if observationally equivalent parameters have the same target value. ([[def-identifiability-of-an-estimand]])

[F7] The location-shift sensitivity family specifies the nonrespondent conditional law by translating the respondent law by $\Delta(X)$. ([[def-pattern-mixture-sensitivity-parameter]])

[F8] In the one-outcome pattern, MAR requires the response probability for the missing pattern to depend only on that pattern's observed coordinates. ([[def-mcar-mar-and-mnar]])

[F9] Conditional independence given a sigma-algebra is the conditional product identity for bounded measurable functions. ([[def-conditional-independence-given-a-sigma-algebra]])

[A1] $\varepsilon\in(0,1]$ in the near-positivity law.

[A2] $\Delta\in[0,1/2]$ in the sensitivity family.

## Proof

1.1 The near-positivity law has atom weights $1/2$ at $(X,R,Y)=(0,1,0)$, $\varepsilon/2$ at $(1,1,1)$, and $(1-\varepsilon)/2$ at $(1,0,1)$. By [A1] and [F2], these are nonnegative and sum to one. Given either value $X=x$, $Y=x$ is constant, so for bounded measurable $f(R)$ and $g(Y)$, $E[f(R)g(Y)\mid X=x]=g(x)E[f(R)\mid X=x]=E[f(R)\mid X=x]E[g(Y)\mid X=x]$. Thus this construction is MAR under the assigned conditional-independence formulation [F9]. Hence $V$ equals $1/\varepsilon$ on the responding $X=1$ atom, of probability $\varepsilon/2$, and is zero on the other atoms. [A1, F2, F9, construct]

1.2 For each $\theta\in\{0,1\}$, the full-data law assigns probability $1/2$ to $(X,R,Y)=(0,1,0)$ and $1/2$ to $(1,0,\theta)$. Mapping these atoms to $O=(X,R,RY)$ gives the same two observed atoms for both values of $\theta$, while [F1] gives $\psi(\theta)=E_\theta[Y]=\theta/2$. Thus the observed sampling laws agree but the estimand values are $0$ and $1/2$. [F1, F2, F4, construct]

1.3 For each $\Delta\in[0,1/2]$, assign observed-pattern masses $0.3$ to $(R,Y)=(1,0)$, $0.2$ to $(1,1)$, and missing-pattern masses $0.3$ to $(0,\Delta)$, $0.2$ to $(0,1+\Delta)$. These masses sum to one by [F2]. Conditional on $R=1$, the outcome is Bernoulli$(0.4)$; conditional on $R=0$, it has the law of that Bernoulli variable translated by $\Delta$, as required by [F7]. The observed record $(R,RY)$ has masses $0.3,0.2,0.5$ at $(1,0),(1,1),(0,0)$ for every $\Delta$. [A2, F2, F7, construct]

2.1 By [F1], $E[V]=(\varepsilon/2)(1/\varepsilon)=1/2$ and $E[(V-EV)^2]=(\varepsilon/2)(1/\varepsilon-1/2)^2+(1-\varepsilon/2)(1/2)^2=1/(2\varepsilon)-1/4$. This diverges as $\varepsilon\downarrow0$, although $\pi(X)>0$ for each fixed $\varepsilon>0$. At $\varepsilon=0$, $\pi(1)=0$, so positivity fails on an $X$ stratum of probability $1/2$. [A1, F1, F3, step 1.1, algebra]

2.2 By [F5], the two parameters are observationally equivalent; by [F6], the different values of $\psi$ therefore show that the full-data mean is not identifiable from this observed-data model. The response probability is zero at $X=1$, exactly the stratum on which the two full-data laws differ. [F5, F6, step 1.2]

2.3 By [F1], the target mean is $0.2(1)+0.3\Delta+0.2(1+\Delta)=0.4+0.5\Delta$. At $\Delta=0$ it is $0.4$, and at $\Delta=1/2$ it is $0.65$, while step 1.3 shows that the observed sampling law is unchanged. Thus the target is not identified across this sensitivity family; the interval $[0.4,0.65]$ is only the set of means induced by the stipulated $\Delta$ range and carries no repeated-sampling coverage assertion. [A2, F1, F4, F5, F6, step 1.3, algebra]

3.1 If $\Delta>0$, then $P(R=0\mid Y=0)=0$ whereas $P(R=0\mid Y=\Delta)=1$: both conditioning events have positive probability, and $\Delta\in(0,1/2]$ keeps $\Delta$ distinct from respondent support $\{0,1\}$. With no always-observed covariate, the missing pattern has an empty observed-coordinate vector, so [F8] requires this response probability to be constant in $Y$ for MAR; it is not, hence this member is MNAR. At $\Delta=0$, both response groups have the same Bernoulli$(0.4)$ law and $R$ is independent of $Y$, so the response probability is constant and the member is MAR. [A2, F8, step 1.3, given, algebra] ∎

