---
id: thm-logarithm-differentiable-functional-equation-characterisation
kind: theorem
title: "Log is the unique f with f(xy)=f(x)+f(y) that is differentiable at 1 with f'(1)=1"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-integral-logarithm-agrees-with-natural-logarithm,
       thm-integral-logarithm-derivative-and-normalisation,
       thm-integral-logarithm-product-law,
       cor-zero-derivative-implies-constant,
       cor-differentiable-implies-continuous, def-derivative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, The Logarithm"
      url: "https://math.hawaii.edu/~lee/calculus/Logarithm.pdf"
pipeline_run: null
---

## Statement

The natural logarithm is the unique function
$f:(0,\infty)\to\mathbb R$ satisfying

$$f(xy)=f(x)+f(y)\quad(x,y>0)$$

that is differentiable at $1$ with $f'(1)=1$.

## Facts & Assumptions

**Given:** A function $f$ satisfying the displayed equation, differentiable
at $1$, with $f'(1)=1$.

[F1] The derivative is the limit of the difference quotient
([[def-derivative]]).

[L1] $L'(x)=1/x$ and $L(1)=0$
([[thm-integral-logarithm-derivative-and-normalisation]]).

[L2] $L(xy)=L(x)+L(y)$
([[thm-integral-logarithm-product-law]]).

[L3] A differentiable function is continuous
([[cor-differentiable-implies-continuous]]).

[L4] A continuous function on an interval with zero derivative is constant
([[cor-zero-derivative-implies-constant]]).

[L5] $L=\log$ on $(0,\infty)$
([[cor-integral-logarithm-agrees-with-natural-logarithm]]).

## Proof

**Proof technique:** direct.

1.1 Setting $x=y=1$ in the functional equation gives $f(1)=2f(1)$, hence $f(1)=0$. [given, algebra]
1.2 Conversely, [L2] and [L5] give the product equation for $\log$, while [L1] and [L5] give differentiability at $1$ with derivative $1$. [L2, L1, L5]
2.1 Fix $x>0$. For $h$ sufficiently close to $0$, $x+h>0$, and the functional equation gives $$ f(x+h)-f(x)=f(1+h/x)-f(1). $$ [step 1.1, given, algebra]
3.1 For $h\neq0$, divide step 2.1 by $h$: $$ \frac{f(x+h)-f(x)}h =\frac1x \frac{f(1+h/x)-f(1)}{h/x}. $$ As $h\to0$, [F1] and $f'(1)=1$ show that $f'(x)=1/x$. [step 2.1, F1, given, algebra]
4.1 Both $f$ and $L$ are differentiable on $(0,\infty)$, and steps 3.1 and [L1] give $(f-L)'=0$. By [L3], $f-L$ is continuous, so [L4] makes it constant. [step 3.1, L1, L3, L4, algebra]
5.1 At $1$, step 1.1 and [L1] give $(f-L)(1)=0$, so step 4.1 yields $f=L=\log$ by [L5]. [step 1.1, step 4.1, L1, L5]
6.1 Steps 5.1 and 1.2 prove existence and uniqueness. [step 5.1, step 1.2] ∎
