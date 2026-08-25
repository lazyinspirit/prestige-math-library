---
id: cor-holomorphic-logarithm-has-the-logarithmic-derivative
kind: corollary
title: "A holomorphic logarithm is a primitive of the logarithmic derivative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, thm-algebra-of-complex-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-complex-differentiability-holomorphic-and-entire]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open and let $L,h:U\to\mathbb C$ be holomorphic with
$\exp(L(z))=h(z)$ for every $z\in U$. Then $h$ is nowhere zero on $U$ and

$$L'(z)=\frac{h'(z)}{h(z)}\qquad(z\in U).$$

In particular, if $p\in\mathbb C$, if $U$ misses $p$, and if $L$ is holomorphic
on $U$ with $\exp(L(z))=z-p$ for every $z\in U$, then $L'(z)=1/(z-p)$ on $U$.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C$ and holomorphic $L,h:U\to\mathbb C$ with $\exp\circ L=h$.

[L1] The complex exponential is entire and $\exp'(z)=\exp z$ for every $z\in\mathbb C$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L2] If $f:U\to V$ is complex differentiable at $a$ and $g:V\to\mathbb C$ is complex differentiable at $f(a)$, then $(g\circ f)'(a)=g'(f(a))f'(a)$ ([[thm-chain-rule-for-complex-derivatives]]).

[L3] Linear combinations and products of functions complex differentiable at a point are complex differentiable there, with the usual formulas; if $g(a)\ne0$ then $(f/g)'(a)=(f'(a)g(a)-f(a)g'(a))/g(a)^2$; every constant function has derivative $0$ and the identity function has derivative $1$ ([[thm-algebra-of-complex-derivatives]]).

[L4] For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L5] A function is holomorphic on an open $U$ when it is complex differentiable at every point of $U$ ([[def-complex-differentiability-holomorphic-and-entire]]).

## Proof

**Proof technique:** direct.

1.1 For every $v\in\mathbb C$, writing $v=x+iy$ with $x,y$ real, [L4] gives $|\exp v|=e^x>0$, so $\exp$ never vanishes; hence $h=\exp\circ L$ is nowhere zero on $U$. [given, L4]

1.2 By [L5] both $L$ and $h$ are complex differentiable at every point of $U$, and [L1] and [L2] give $(\exp\circ L)'(z)=\exp(L(z))L'(z)$ there. [given, L1, L2, L5]

2.1 Since $\exp\circ L=h$ as functions on $U$, step 1.2 says $h'(z)=h(z)L'(z)$ for every $z\in U$; dividing by the nonzero $h(z)$ of step 1.1 gives $L'(z)=h'(z)/h(z)$. [given, step 1.1, step 1.2, algebra]

3.1 If $U$ misses $p$ and $h(z)=z-p$ on $U$, then $h'(z)=1$ by [L3], so step 2.1 gives $L'(z)=1/(z-p)$ on $U$. [step 2.1, L3] ∎
