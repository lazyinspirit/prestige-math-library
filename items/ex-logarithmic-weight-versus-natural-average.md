---
id: ex-logarithmic-weight-versus-natural-average
kind: example
title: "Logarithmic weight versus natural average"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-generated
  proof: ai-generated
deps:
  - def-fixed-shift-liouville-correlation-average
  - def-logarithmic-liouville-correlation-average
  - def-liouville-function
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
aliases: []
generation:
  role: example
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Terence Tao, The logarithmically averaged Chowla and Elliott conjectures for two-point correlations, Theorem 1.2"
      url: "https://arxiv.org/pdf/1509.05422v4"
    - title: "Terence Tao, Correlations of multiplicative functions, slides 11–13"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2024/03/correlations-jan-5.pdf"
---

## Example

Let $\lambda(n)=(-1)^{\Omega(n)}$, with prime factors counted with
multiplicity and $\Omega(1)=0$. At $X=4$ and shifts $(0,1)$, the natural
fixed-shift average is
$$
\frac14\sum_{n=1}^4\lambda(n)\lambda(n+1)=-\frac12.
$$
For the logarithmic average with $\omega=X=4$, the open lower endpoint
$X/\omega=1$ omits $n=1$, and
$$
\frac1{\log4}\sum_{1<n\le4}\frac{\lambda(n)\lambda(n+1)}n=-\frac1{12\log4}.
$$
The formulas use different weights and endpoint sets; this finite calculation
makes no claim that their values differ for every cutoff or that their
asymptotic limits differ.

## Example references

[[def-liouville-function|Liouville function and prime-factor convention]]

[[def-fixed-shift-liouville-correlation-average|natural fixed-shift normalization]]

[[def-logarithmic-liouville-correlation-average|logarithmic weight and open lower endpoint]]

[[def-natural-logarithm|natural logarithm]]

[[thm-natural-logarithm-laws|logarithm is positive above 1]]

[Tao, Theorem 1.2, logarithmically averaged two-point Chowla, PDF p. 2](https://arxiv.org/pdf/1509.05422v4)

[Tao, comparison of ordinary and logarithmic averages, slides 11–13](https://terrytao.wordpress.com/wp-content/uploads/2024/03/correlations-jan-5.pdf)

## Facts & Assumptions

**Given:** The Liouville function, $X=4$, and the two averaging conventions stated above.

[F1] [[def-liouville-function]]: for positive $n$, $\lambda(n)=(-1)^{\Omega(n)}$ and $\lambda(1)=1$.

[F2] [[def-fixed-shift-liouville-correlation-average]]: the fixed-shift average divides the signed initial sum by $X$.

[F3] [[def-logarithmic-liouville-correlation-average]]: the logarithmic average weights each term by $1/n$, divides by $\log\omega$, and omits the open lower endpoint $X/\omega$.

[F4] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$.

[F5] [[thm-natural-logarithm-laws]]: the natural logarithm is strictly increasing on the positive reals.

[F6] [[thm-natural-logarithm-laws]]: $\log 1=0$.

## Verification

1.1 The factorizations $1=1$, $2=2$, $3=3$, $4=2^2$, and $5=5$ yield $\lambda(1)=1$, $\lambda(2)=\lambda(3)=\lambda(5)=-1$, and $\lambda(4)=1$ by [F1]. [given, F1, algebra]

2.1 The products $\lambda(n)\lambda(n+1)$ for $n=1,2,3,4$ are $-1,+1,-1,-1$. Their sum is $-2$, so [F2] gives the natural average $-2/4=-1/2$. [given, F2, step 1.1, algebra]

2.2 With $\omega=X=4$, the logarithmic interval is $1<n\le4$. The weighted sum is $1/2-1/3-1/4=-1/12$, and $\log4>0$ follows from [F4], [F5], and [F6], so [F3] gives $-1/(12\log4)$. [given, F3, F4, F5, F6, step 1.1, algebra]

3.1 By [F2], the natural average divides the signed sum by $4$ and includes $n=1$; by [F3], the logarithmic average uses the weights $1/n$, denominator $\log4$, and open lower endpoint $n>1$. These are distinct averaging rules, and this finite calculation alone says nothing about limits as $X\to\infty$. [given, F2, F3, step 2.1, step 2.2] ∎
