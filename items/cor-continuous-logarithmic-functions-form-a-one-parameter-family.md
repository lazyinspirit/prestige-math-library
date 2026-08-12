---
id: cor-continuous-logarithmic-functions-form-a-one-parameter-family
kind: corollary
title: "Every continuous $f$ with $f(xy)=f(x)+f(y)$ is $f(x)=c\\log x$ for a unique $c$, including $c=0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-exponential, cor-integral-exponential-addition-law,
       thm-integral-exponential-solves-the-normalised-ivp,
       thm-integral-exponential-agrees-with-exponential,
       cor-integral-logarithm-agrees-with-natural-logarithm,
       thm-cauchy-functional-equation-regularity,
       def-real-exponential-function-and-e, def-logarithm-to-a-base,
       cor-differentiable-implies-continuous,
       thm-composition-of-continuous-functions,
       thm-natural-logarithm-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Henry Ricardo, The Equivalence of Definitions of the Natural Logarithm Function"
      url: "https://www.researchgate.net/publication/359264337_The_Equivalence_of_Definitions_of_the_Natural_Logarithm_Function"
pipeline_run: null
---

## Statement

If $f:(0,\infty)\to\mathbb R$ is continuous and
$f(xy)=f(x)+f(y)$ for all $x,y>0$, then there is a unique
$c\in\mathbb R$ such that

$$f(x)=c\log x\qquad(x>0).$$

Here $c=0$ gives the zero function.

## Facts & Assumptions

**Given:** A continuous $f$ satisfying the product-to-sum equation.

[F1] $E=L^{-1}$ ([[def-integral-exponential]]) and
$E(a+b)=E(a)E(b)$ ([[cor-integral-exponential-addition-law]]).

[L1] $E$ is differentiable
([[thm-integral-exponential-solves-the-normalised-ivp]]), so it is continuous
([[cor-differentiable-implies-continuous]]).

[L2] Composites of continuous functions are continuous
([[thm-composition-of-continuous-functions]]).

[L3] Every continuous additive real function has the form $g(t)=ct$
([[thm-cauchy-functional-equation-regularity]]).

[L4] $E=\exp$ ([[thm-integral-exponential-agrees-with-exponential]]),
$e=\exp(1)$ ([[def-real-exponential-function-and-e]]), and
$L=\log$ ([[cor-integral-logarithm-agrees-with-natural-logarithm]]).

[F2] For $b>0$, $b\neq1$, one defines
$\log_bx=\log x/\log b$ ([[def-logarithm-to-a-base]]).

[L5] The natural logarithm is continuous and satisfies
$\log(xy)=\log x+\log y$
([[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** direct.

1.1 Put $g(t)=f(E(t))$. By [F1] and the functional equation, $g$ is additive. By [L1], [L2], and continuity of $f$, it is continuous. [F1, L1, L2, given]

1.2 Conversely, [L5] shows that each function $x\mapsto c\log x$ is continuous and satisfies the product-to-sum equation. For $c=0$ this is the zero function. [L5, algebra]

1.3 If $c\neq0$, put $b=E(1/c)$. Then $b>0$ and $\log b=1/c\neq0=\log1$, so $b\neq1$; [F2] gives $\log_bx=c\log x$. Thus the nonzero members are exactly the constant-multiple forms underlying logarithms to bases, while the zero member requires no division. [F1, L4, L5, F2, algebra]

2.1 By [L3], $g(t)=ct$ for a unique scalar $c=g(1)$. [step 1.1, L3]

3.1 For $x>0$, $x=E(L(x))$, so $f(x)=g(L(x))=cL(x)=c\log x$. By [L4], $E(1)=e$, hence $c=g(1)=f(e)$, which also proves uniqueness. [F1, step 2.1, L4]

4.1 Steps 3.1, 1.2, and 1.3 prove the classification and its endpoint case. [step 3.1, step 1.2, step 1.3] ∎
