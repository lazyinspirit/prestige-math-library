---
id: thm-logarithm-continuous-functional-equation-characterisation
kind: theorem
title: "Log is the unique continuous f:(0,infinity) to R with f(xy)=f(x)+f(y) and f(e)=1"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-exponential, cor-integral-exponential-addition-law,
       thm-integral-exponential-solves-the-normalised-ivp,
       thm-integral-exponential-agrees-with-exponential,
       cor-integral-logarithm-agrees-with-natural-logarithm,
       thm-cauchy-functional-equation-regularity,
       def-real-exponential-function-and-e,
       cor-differentiable-implies-continuous, thm-natural-logarithm-laws,
       thm-composition-of-continuous-functions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Henry Ricardo, The Equivalence of Definitions of the Natural Logarithm Function"
      url: "https://www.researchgate.net/publication/359264337_The_Equivalence_of_Definitions_of_the_Natural_Logarithm_Function"
pipeline_run: null
---

## Statement

The natural logarithm is the unique continuous function
$f:(0,\infty)\to\mathbb R$ satisfying

$$f(xy)=f(x)+f(y)\quad(x,y>0),\qquad f(e)=1.$$

## Facts & Assumptions

**Given:** A continuous $f:(0,\infty)\to\mathbb R$ satisfying the displayed
functional equation and normalisation.

[F1] $E=L^{-1}$, so $E(L(x))=x$
([[def-integral-exponential]]).

[L1] $E(a+b)=E(a)E(b)$
([[cor-integral-exponential-addition-law]]).

[L2] $E$ is differentiable
([[thm-integral-exponential-solves-the-normalised-ivp]]), hence continuous
([[cor-differentiable-implies-continuous]]).

[L3] A composite of continuous functions is continuous
([[thm-composition-of-continuous-functions]]).

[L4] A continuous additive function $g:\mathbb R\to\mathbb R$ has the form
$g(t)=ct$ ([[thm-cauchy-functional-equation-regularity]]).

[L5] $E=\exp$ ([[thm-integral-exponential-agrees-with-exponential]]) and
$e=\exp(1)$ ([[def-real-exponential-function-and-e]]).

[L6] $L=\log$ on $(0,\infty)$
([[cor-integral-logarithm-agrees-with-natural-logarithm]]).

[L7] The natural logarithm is continuous, satisfies
$\log(xy)=\log x+\log y$, and has $\log(e)=1$
([[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** direct.

1.1 Define $g:\mathbb R\to\mathbb R$ by $g(t):=f(E(t))$. The addition law and the equation for $f$ give $g(a+b)=g(a)+g(b)$. [L1, given]
1.2 The function $E$ is continuous by [L2], so $g$ is continuous by [L3] and the assumed continuity of $f$. [L2, L3, given]
1.3 Conversely, [L7] says that the natural logarithm itself is continuous and has the required equation and normalisation. [L7]
2.1 By [L4], $g(t)=ct$ for some $c\in\mathbb R$. [step 1.1, step 1.2, L4]
3.1 From [L5], $E(1)=e$, so $c=g(1)=f(e)=1$. Hence $g(t)=t$. [step 2.1, L5, given]
4.1 For $x>0$, [F1] gives $x=E(L(x))$, so $f(x)=g(L(x))=L(x)=\log x$ by [L6]. [F1, step 3.1, L6]
5.1 Steps 4.1 and 1.3 prove existence and uniqueness. [step 4.1, step 1.3] ∎
