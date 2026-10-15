---
id: ex-correlation-without-agreement
kind: example
title: "Perfect correlation can coexist with a method offset"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-method-agreement-and-limits
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - cor-expectation-agrees-with-the-finite-weighted-sum
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
proof_strategy: direct
---

## Example

Let $\Omega=\{0,1\}$ have probability $1/2$ at each point, and let two
methods on the same target report $A(\omega)=\omega$ and
$B(\omega)=\omega+c$ for a fixed $c>0$. Their correlation is $1$, but their
difference is the nonzero constant $-c$ and their conventional limits of
agreement both equal $-c$.

## Facts & Assumptions

**Given:** $\Omega=\{0,1\}$ with weights $1/2,1/2$, $A(\omega)=\omega$,
$B(\omega)=\omega+c$, and $c>0$. For this example define
$$\operatorname{Corr}(A,B):=\frac{\operatorname{Cov}(A,B)}{\sqrt{\operatorname{Var}(A)\operatorname{Var}(B)}}.$$

[F1] For $D=A-B$, the bias is $\mathbb E[D]$, the spread is
$\sqrt{\operatorname{Var}(D)}$, and conventional limits are their mean plus
or minus $1.96$ times that spread. [[def-method-agreement-and-limits]]

[F2] Variance and covariance are expectations of the centered square and
centered product. [[def-moments-variance-and-covariance]]

[F3] On a finite probability space, expectation is the weighted sum of values
over its atoms. [[cor-expectation-agrees-with-the-finite-weighted-sum]]

[F4] Covariance is symmetric and bilinear on finite linear combinations,
including constant summands. [[thm-covariance-bilinearity-and-symmetry]]

## Verification

**Given:** The two-point probability model and method values in the Example.
Verify the correlation and limits.

1.1 By [F3], $\mathbb E[A]=1/2$ and $\mathbb E[B]=1/2+c$. Directly summing the two centered squares gives $\operatorname{Var}(A)=\operatorname{Var}(B)=1/4$. By [F4], $\operatorname{Cov}(A,B)=\operatorname{Cov}(A,A+c)=\operatorname{Var}(A)+\operatorname{Cov}(A,c)=1/4$, since covariance with a constant is zero. Thus the denominator in the definition of correlation is $1/4$ and $\operatorname{Corr}(A,B)=1$. [F2, F3, F4, given, algebra]

1.2 At both points $D=A-B=-c$, so by [F2] and [F3], $\mathbb E[D]=-c$ and $\operatorname{Var}(D)=0$. Hence its conventional limits are $-c\pm1.96\cdot0=(-c,-c)$, while its bias is nonzero. [F1, F2, F3, algebra]

2.1 Therefore perfect correlation does not imply zero bias or interchangeable measurements; any practical tolerance must be supplied for the intended use. [step 1.1, step 1.2, given] ∎