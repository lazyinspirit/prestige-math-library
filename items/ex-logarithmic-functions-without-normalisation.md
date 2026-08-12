---
id: ex-logarithmic-functions-without-normalisation
kind: example
title: "Dropping f(e)=1 leaves the whole family c log, including logarithms to other bases and the zero function"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-continuous-logarithmic-functions-form-a-one-parameter-family,
       def-logarithm-to-a-base, thm-natural-logarithm-laws,
       thm-logarithm-continuous-functional-equation-characterisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Without the normalisation $f(e)=1$, the continuous product-to-sum functions
are exactly

$$f_c(x)=c\log x\qquad(c\in\mathbb R).$$

They include the zero function and, for suitable nonzero $c$, logarithms to
other bases.

## Facts & Assumptions

**Given:** $c\in\mathbb R$.

[L1] Every continuous product-to-sum function is uniquely
$c\log x$, including $c=0$
([[cor-continuous-logarithmic-functions-form-a-one-parameter-family]]).

[L2] The natural logarithm is continuous and satisfies
$\log(xy)=\log x+\log y$
([[thm-natural-logarithm-laws]]).

[L3] The natural logarithm satisfies $\log(e)=1$
([[thm-logarithm-continuous-functional-equation-characterisation]]).

[F1] For $b>0$, $b\neq1$,
$\log_bx=\log x/\log b$ ([[def-logarithm-to-a-base]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $f_c(xy)=c\log(xy)=c\log x+c\log y=f_c(x)+f_c(y)$, and $f_c$ is continuous. [L2, algebra]
1.2 Also $f_c(e)=c\log(e)=c$, so only $c=1$ meets the normalisation $f(e)=1$. [L3, algebra]
1.3 If $b>0$, $b\neq1$, then [F1] identifies $\log_b$ with the member $c=1/\log b$. The case $c=0$ is the zero function and cannot equal $\log_b$, because $\log_b b=1$. [F1, algebra]
2.1 The classification theorem [L1] shows that steps 1.1 through 1.3 exhaust all continuous product-to-sum functions, not merely a subfamily. [step 1.1, step 1.2, step 1.3, L1] ∎
