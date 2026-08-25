---
id: thm-cauchy-riemann-characterization-in-several-complex-variables
kind: theorem
title: "For $C^1$ functions, holomorphy, complex linearity of the real derivative, and the Cauchy–Riemann system agree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holomorphic-function-in-several-complex-variables, def-wirtinger-operators-in-several-complex-variables, lem-complex-linear-real-differential-criterion, def-total-derivative-in-euclidean-space, lem-uniqueness-of-the-total-derivative, thm-continuous-partial-derivatives-imply-total-differentiability, def-ck-and-multi-index-notation-in-several-variables, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, rem-complex-euclidean-space-dictionary, def-directional-and-partial-derivatives, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, cor-holomorphic-functions-in-several-variables-are-smooth]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 1"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $U\subseteq\mathbb C^m$ be open and let $f:U\to\mathbb C$ be of
class $C^1$ in the real coordinates
([[def-ck-and-multi-index-notation-in-several-variables]], applied to the real
and imaginary parts of $f$ on $U$ read as an open subset of $\mathbb R^{2m}$).
Let $a\in U$. The following are equivalent.

1. $f$ is complex differentiable at $a$.
2. $f$ is real totally differentiable at $a$ and its real total derivative
   $Df(a)$ is $\mathbb C$-linear.
3. $f$ is real totally differentiable at $a$ and
   $\partial_{\bar z_k}f(a)=0$ for every $k<m$ — the several-variable
   Cauchy–Riemann system.

The $C^1$ hypothesis is used **only** to pass from the Cauchy–Riemann system to
real total differentiability; the implications from 1 to 2 and between 2 and 3
hold at any point with no regularity beyond what each condition states.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C^m$, a $C^1$ function $f:U\to\mathbb C$ and a point $a\in U$; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] $f$ is complex differentiable at $a$ when there is a $\mathbb C$-linear $L$ with $f(a+h)=f(a)+L(h)+r(h)$ and $|r(h)|/\lVert h\rVert\to0$; that condition is the total-differentiability condition with the extra requirement that $L$ be $\mathbb C$-linear ([[def-holomorphic-function-in-several-complex-variables]]).

[L2] $f$ is totally differentiable at $a$ when there is an $\mathbb R$-linear $L$ with $\lVert f(a+h)-f(a)-Lh\rVert/\lVert h\rVert\to0$ ([[def-total-derivative-in-euclidean-space]]), and such an $L$ is unique ([[lem-uniqueness-of-the-total-derivative]]).

[L3] At a point where all $2m$ real partial derivatives exist, $\partial_{z_k}f=\tfrac12(\partial_{x_k}f-i\partial_{y_k}f)$ and $\partial_{\bar z_k}f=\tfrac12(\partial_{x_k}f+i\partial_{y_k}f)$; at a point of real total differentiability, $Df(a)h=\sum_{k<m}(\partial_{z_k}f(a))h_k+\sum_{k<m}(\partial_{\bar z_k}f(a))\overline{h_k}$ ([[def-wirtinger-operators-in-several-complex-variables]], [[def-directional-and-partial-derivatives]]).

[L4] An $\mathbb R$-linear $T$ has a unique representation $T(h)=\sum_kc_kh_k+\sum_kd_k\overline{h_k}$, and $T$ is $\mathbb C$-linear exactly when every $d_k=0$ ([[lem-complex-linear-real-differential-criterion]]).

[L5] If every partial derivative of $f$ exists near $a$ and is continuous at $a$, then $f$ is totally differentiable at $a$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L6] $f$ is of class $C^1$ when its first-order coordinate partial derivatives exist and are continuous ([[def-ck-and-multi-index-notation-in-several-variables]]).

[L7] For one complex variable, complex differentiability at $a$, real total differentiability with $Df(a)$ multiplication by a complex number, and real total differentiability with $\partial_{\bar z}f(a)=0$ are equivalent, and then $f'(a)=\partial_zf(a)$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[L8] A holomorphic function of several variables is continuous and separately holomorphic with $Df(a)h=\sum_{k<m}(\partial_{z_k}f(a))h_k$ ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]), and it is smooth in the real coordinates ([[cor-holomorphic-functions-in-several-variables-are-smooth]]).

## Proof

**Proof technique:** direct.

1.1 Condition 1 implies condition 2. If $f$ is complex differentiable at $a$ with $\mathbb C$-linear $L$, then $L$ is in particular $\mathbb R$-linear and the same remainder condition is the one in [L2] read through the dictionary, so $f$ is real totally differentiable at $a$ and, by the uniqueness in [L2], $Df(a)=L$ is $\mathbb C$-linear. [given, L1, L2]

1.2 Condition 2 implies condition 1. If $f$ is real totally differentiable at $a$ with $\mathbb C$-linear $Df(a)$, the remainder condition of [L2] is exactly that of [L1] for the $\mathbb C$-linear map $Df(a)$, so $f$ is complex differentiable at $a$. [given, L1, L2]

1.3 Conditions 2 and 3 are equivalent. Real total differentiability is common to both, and given it, [L3] represents $Df(a)$ in the form of [L4] with $c_k=\partial_{z_k}f(a)$ and $d_k=\partial_{\bar z_k}f(a)$; by the uniqueness in [L4] the map $Df(a)$ is $\mathbb C$-linear exactly when every $\partial_{\bar z_k}f(a)$ vanishes. [given, L3, L4]

1.4 The $C^1$ hypothesis enters only here: it makes the first-order real partial derivatives exist near $a$ and be continuous by [L6], so [L5] supplies the real total differentiability that conditions 2 and 3 name. Without it, the Cauchy–Riemann system alone constrains the partial derivatives and asserts nothing about the existence of $Df(a)$. [given, L5, L6]

2.1 Steps 1.1, 1.2, 1.3 and 1.4 give the three-way equivalence for a $C^1$ function. At $m=1$ the statement is [L7], with $Df(a)$ being $\mathbb C$-linear exactly when it is multiplication by a complex number, namely $\partial_zf(a)$; and by [L8] a holomorphic function of several variables is automatically $C^1$, so the $C^1$ hypothesis restricts only the direction that starts from the Cauchy–Riemann system. [step 1.1, step 1.2, step 1.3, step 1.4, L7, L8] ∎
