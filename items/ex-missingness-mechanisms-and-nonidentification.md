---
id: ex-missingness-mechanisms-and-nonidentification
kind: example
title: "MCAR, MAR, MNAR, and indistinguishable observed laws"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-full-observed-and-missing-data
  - def-mcar-mar-and-mnar
  - def-measure-kernel-and-probability-kernel
  - thm-binary-outcome-mnar-nonidentification
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Lu Mao, Missing Data: Foundations and Methods, Chapter 1, §§1.3–1.7"
      url: "https://lmaowisc.github.io/missing_data/chapter-1.html"
    - title: "National Research Council, The Prevention and Treatment of Missing Data in Clinical Trials, Chapter 4, pp. 50–58"
      url: "https://www.nationalacademies.org/read/12955/chapter/6"
---

## Example

Let $X$ and $Y$ be independent fair binary variables, with full data
$W=(X,Y)$; observe $X$ under either response pattern and observe $Y$ only
when $R=1$. Three response mechanisms are:
$$g_{\mathrm{MCAR}}(1\mid x,y)=\tfrac12,\qquad g_{\mathrm{MAR}}(1\mid x,y)=\tfrac14+\tfrac12\mathbf1\{x=1\},\qquad g_{\mathrm{MNAR}}(1\mid x,y)=\tfrac14+\tfrac12\mathbf1\{y=1\}.$$
In each case $g(0\mid x,y)=1-g(1\mid x,y)$. The first mechanism is MCAR; the
second is MAR because its probability depends only on observed $X$; the third
is MNAR because for pattern $R=0$ its probability varies with the unobserved
$Y$ at each $X$.

For a binary outcome with no always-observed covariate, consider two further
joint laws:

| Law | $P(Y=1,R=1)$ | $P(Y=0,R=1)$ | $P(Y=1,R=0)$ | $P(Y=0,R=0)$ | $P(Y=1)$ |
|---|---:|---:|---:|---:|---:|
| $P^{-}$ | $1/4$ | $1/4$ | $0$ | $1/2$ | $1/4$ |
| $P^{+}$ | $1/4$ | $1/4$ | $1/2$ | $0$ | $3/4$ |

Both yield $a=P(R=1)=1/2$, $b=P(R=1,Y=1)=1/4$, and the same observed record
law. Both are MNAR: their response probabilities given $Y=1$ and $Y=0$ differ.
The respondent mean is $1/2$ under both laws, but the full-data mean differs.
The example realizes the interval $[b,b+1-a]=[1/4,3/4]$ in
[[thm-binary-outcome-mnar-nonidentification]].

## Facts & Assumptions

**Given:** The full/observed-data convention and MCAR/MAR/MNAR definitions in the Statement; the finite probability models displayed in the Example.

[F1] [[def-full-observed-and-missing-data]]: the response pattern selects which full-data coordinates are recorded, and the pattern remains part of the observed record.

[F2] [[def-mcar-mar-and-mnar]]: MCAR means every pattern probability is constant in the full data almost surely.

[F3] [[def-mcar-mar-and-mnar]]: MAR means each pattern probability is a measurable function of that pattern's observed projection almost surely.

[F4] [[def-mcar-mar-and-mnar]]: MNAR means MAR fails for at least one pattern relative to the declared partition.

[F5] [[thm-binary-outcome-mnar-nonidentification]]: for observed response rate $a$ and success mass $b$, the compatible binary full means are exactly $[b,b+1-a]$.

[F6] [[def-mcar-mar-and-mnar]] and [[def-measure-kernel-and-probability-kernel]]: both displayed joint laws have $P(Y=y)>0$ for $y=0,1$, so each supplies the finite response kernel $g_P(r\mid y)=P(R=r,Y=y)/P(Y=y)$ used below to classify that law.

## Verification

1.1 For the first model, $g(1\mid x,y)=1/2$ is constant in $(x,y)$, hence MCAR by [F2]. In the second, both pattern probabilities are functions of $x$ alone, which is recorded for both patterns, so MAR holds by [F3]; it is not MCAR because the probability differs at $x=0$ and $x=1$. In the third, $P(Y=0\mid X=x)=P(Y=1\mid X=x)=1/2$ for each $x$, and $g(0\mid x,0)=3/4$ while $g(0\mid x,1)=1/4$. Thus the pattern-$0$ probability cannot be a function of its observed coordinate $x$ alone, so the mechanism is MNAR by [F4]. [F1, F2, F3, F4, given]

2.1 Each row of the table contains nonnegative entries summing to one. Under either law, $P(R=1,Y=1)=1/4$, $P(R=1,Y=0)=1/4$, and $P(R=0)=1/2$, so the observed record laws agree and have $a=1/2$, $b=1/4$. The means are $1/4$ and $3/4$. For the selected finite kernels in [F6], $P^{-}$ has $g_{P^-}(1\mid1)=1$ and $g_{P^-}(1\mid0)=1/3$, while $P^{+}$ has $g_{P^+}(1\mid1)=1/3$ and $g_{P^+}(1\mid0)=1$. In each law the pattern-$0$ response probability also differs across the two values of $Y$, although the observed projection for that pattern is empty; hence neither law is MAR. This agrees with [F5] and shows the observed respondent mean $1/2$ does not identify the population mean. [F1, F4, F5, F6, algebra] ∎