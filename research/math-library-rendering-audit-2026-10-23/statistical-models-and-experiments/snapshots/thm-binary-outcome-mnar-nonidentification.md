---
id: thm-binary-outcome-mnar-nonidentification
kind: theorem
title: "Exact binary-outcome bounds under unrestricted missingness"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-full-observed-and-missing-data
  - def-mcar-mar-and-mnar
  - def-measure-kernel-and-probability-kernel
  - def-parametric-statistical-model
  - def-law-or-distribution-of-a-random-element
  - def-observational-equivalence
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Lu Mao, Missing Data: Foundations and Methods, Chapter 1, §§1.6–1.7"
      url: "https://lmaowisc.github.io/missing_data/chapter-1.html"
---

## Statement

Let $Y,R\in\{0,1\}$, with $R=1$ meaning that $Y$ is observed, and encode the
observed record as $O=(R,RY)$. When $R=0$, the zero in the second recorded
coordinate is a placeholder and does not assign the missing full-data value
$Y=0$. Put
$$a=P(R=1),\qquad b=P(R=1,Y=1),\qquad 0\le b\le a\le1.$$
Let $\Theta_{a,b}$ be the set of all joint laws $P$ of $(Y,R)$ with these
values of $a$ and $b$, and let the statistical model map $P\in\Theta_{a,b}$
to the law of $O$. For each individual $P$, use its finite conditional
response kernel specified below when assessing the MAR clause; arbitrary
null-state values do not affect that classification. The full-data mean $m(P)=P(Y=1)$ is an estimand on this
model. Its set of values over $\Theta_{a,b}$ is exactly
$$[b,b+1-a].$$
Consequently, without a MAR restriction, the mean is not identifiable when
$a<1$; it is identified as $b$ when $a=1$. If MAR also holds, then for $a>0$
the mean is $b/a$, while for $a=0$ it remains unidentified.

## Facts & Assumptions

**Given:** The binary full-data/response setup and observed law in the Statement.

[F1] [[def-full-observed-and-missing-data]]: $R$ records which coordinates of the full data $W$ are observed, and $O=(R,W_{\mathrm{obs}}(R))$ retains the pattern label. In the binary encoding $O=(R,RY)$, the zero at $R=0$ is a record placeholder and does not assign the missing full-data value $Y=0$.

[F2] [[def-mcar-mar-and-mnar]]: MAR requires each pattern probability to depend only on that pattern's observed projection; MNAR means MAR fails for at least one pattern.

[F3] [[def-law-or-distribution-of-a-random-element]]: the law of a random element is the pushforward probability $P_X(B)=P(X^{-1}(B))$.

[F4] [[def-parametric-statistical-model]]: a statistical model is a parameter map $P:\Theta\to\mathcal P(\mathcal X,\mathcal A)$.

[F5] [[def-observational-equivalence]]: two parameter values are observationally equivalent exactly when their sampling laws are equal.

[F6] [[def-estimand-on-a-statistical-model]]: an estimand is a specified function from the parameter set to target values.

[F7] [[def-identifiability-of-an-estimand]]: an estimand is identifiable only if equality of sampling laws implies equality of its values.

[F8] [[def-mcar-mar-and-mnar]] and [[def-measure-kernel-and-probability-kernel]]: for each finite joint law $P$ of $(Y,R)$, a response kernel is given on states with $P(Y=y)>0$ by $g_P(r\mid y)=P(R=r,Y=y)/P(Y=y)$; on any null state, any probability vector may be assigned, for example $g_P(0\mid y)=1$ and $g_P(1\mid y)=0$. These finite-space kernels are measurable and give the selected mechanism used to interpret MAR for each law $P$.

## Proof

**Proof technique:** Directly bound the unobserved success mass and construct every admissible completion.

1.1 For any $P\in\Theta_{a,b}$, write $c=P(R=0,Y=1)$. Since $P(R=0)=1-a$, one has $0\le c\le1-a$, and $m(P)=P(Y=1,R=1)+P(Y=1,R=0)=b+c$. Hence $b\le m(P)\le b+1-a$. [given, F1, algebra]

1.2 Conversely, fix any $m\in[b,b+1-a]$ and assign $P(Y=1,R=1)=b$, $P(Y=0,R=1)=a-b$, $P(Y=1,R=0)=m-b$, and $P(Y=0,R=0)=1-a-m+b$. Each entry is nonnegative by the bounds on $a,b,m$; the four entries sum to one. This law has response rate $a$, observed success mass $b$, and mean $m$, so every point of the interval is attained, including both endpoints. [given, algebra, construct]

2.1 Under each such law, the pushforward law of $O$ has masses $b$ at $(1,1)$, $a-b$ at $(1,0)$, and $1-a$ at $(0,0)$, independent of $m$. Thus all parameters in $\Theta_{a,b}$ are observationally equivalent. If $a<1$, the interval has positive length $1-a$, so it contains distinct means and the estimand is not identifiable. If $a=1$, it is the singleton $\{b\}$ and the mean is identified as $b$. [F1, F3, F4, F5, F6, F7, step 1.2, algebra]

3.1 For each $P\in\Theta_{a,b}$ use the finite conditional response kernel in [F8]. Under MAR, the probability $g_P(0\mid Y)$ depends only on the empty observed projection for pattern $R=0$, so it is constant $P_Y$-almost surely. Hence $g_P(1\mid Y)=1-g_P(0\mid Y)$ is also constant $P_Y$-almost surely; its constant is $P(R=1)=a$, by integrating over $P_Y$. Therefore $b=P(R=1,Y=1)=aP(Y=1)$, and for $a>0$ the mean is $b/a$. If $a=0$, every law in the interval construction of step 1.2 has $R=0$ almost surely; its selected kernel is constant on the support of $Y$, so it is MCAR and hence MAR. The whole interval $[0,1]$ therefore remains compatible with MAR. [F2, F8, step 1.2, given, algebra] ∎