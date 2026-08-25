---
id: prop-algebra-of-holomorphic-functions-in-several-variables
kind: proposition
title: "Sums, products and nonvanishing quotients of holomorphic functions are holomorphic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-holomorphic-function-in-several-complex-variables, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, lem-complex-linear-real-differential-criterion, lem-euclidean-linear-maps-have-matrices-and-are-bounded, thm-algebra-of-complex-derivatives, thm-complex-numbers-form-a-field, def-wirtinger-operators-in-several-complex-variables, def-metric-topology, def-metric-ball, lem-complex-conjugation-and-modulus-laws, lem-standard-basis-of-f-n, rem-complex-euclidean-space-dictionary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $U\subseteq\mathbb C^m$ be open and let $f,g:U\to\mathbb C$ be
holomorphic. Then $\lambda f+\mu g$ is holomorphic on $U$ for all
$\lambda,\mu\in\mathbb C$, $fg$ is holomorphic on $U$, and $f/g$ is holomorphic
on the open set $\{z\in U:g(z)\ne0\}$, with

$$D(\lambda f+\mu g)(a)=\lambda Df(a)+\mu Dg(a),\qquad D(fg)(a)=f(a)Dg(a)+g(a)Df(a),$$
$$D(f/g)(a)=\frac{g(a)Df(a)-f(a)Dg(a)}{g(a)^2}\quad(g(a)\ne0),$$

and correspondingly $\partial_{z_k}(fg)=f\,\partial_{z_k}g+g\,\partial_{z_k}f$
and $\partial_{z_k}(f/g)=(g\,\partial_{z_k}f-f\,\partial_{z_k}g)/g^2$ for each
$k<m$. In particular the holomorphic functions on $U$ form a commutative ring
under pointwise operations, containing the constants.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C^m$ and holomorphic $f,g:U\to\mathbb C$; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] $f$ is complex differentiable at $a$ when there is a $\mathbb C$-linear $L$ with $f(a+h)=f(a)+L(h)+r(h)$ and $|r(h)|/\lVert h\rVert\to0$; $L$ is unique and written $Df(a)$ ([[def-holomorphic-function-in-several-complex-variables]]).

[L2] A holomorphic function of several variables is continuous, and $Df(a)h=\sum_{k<m}(\partial_{z_k}f(a))h_k$ ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[L3] A map $T(h)=\sum_{k<m}c_kh_k$ is $\mathbb C$-linear, and for a differentiable $f$ the coefficients are $\partial_{z_k}f$ ([[lem-complex-linear-real-differential-criterion]], [[def-wirtinger-operators-in-several-complex-variables]]).

[L4] For every linear $L:\mathbb R^m\to\mathbb R^n$ there is $K\ge0$ with $\lVert Lh\rVert_2\le K\lVert h\rVert_2$ for every $h$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

[L5] Linear combinations, products and nonvanishing quotients of complex numbers obey the field laws ([[thm-complex-numbers-form-a-field]]), and the one-variable derivative rules take the displayed forms ([[thm-algebra-of-complex-derivatives]]).

[L6] A set is open exactly when each of its points admits a ball inside it ([[def-metric-topology]], [[def-metric-ball]]).

[L7] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L8] Every $h\in\mathbb C^m$ satisfies $h=\sum_{k<m}h_ke_k$ ([[lem-standard-basis-of-f-n]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in U$ and write $f(a+h)=f(a)+Df(a)h+r_f(h)$ and $g(a+h)=g(a)+Dg(a)h+r_g(h)$ as in [L1], with $|r_f(h)|,|r_g(h)|=o(\lVert h\rVert)$; by [L4] read through the dictionary there is $K\ge0$ with $|Df(a)h|\le K\lVert h\rVert$ and $|Dg(a)h|\le K\lVert h\rVert$. [given, L1, L4]

2.1 For $\lambda,\mu\in\mathbb C$ the map $h\mapsto\lambda Df(a)h+\mu Dg(a)h$ is $\mathbb C$-linear by [L3] and [L8], and the remainder of $\lambda f+\mu g$ at $a$ is $\lambda r_f(h)+\mu r_g(h)$, which is $o(\lVert h\rVert)$ by [L7]; so [L1] makes $\lambda f+\mu g$ complex differentiable at $a$ with the stated differential. [step 1.1, L1, L3, L7, L8]

2.2 Multiplying the two expansions of step 1.1 and collecting, $f(a+h)g(a+h)=f(a)g(a)+\bigl(f(a)Dg(a)h+g(a)Df(a)h\bigr)+\varrho(h)$, where $\varrho(h)=Df(a)h\,Dg(a)h+\bigl(f(a)+Df(a)h\bigr)r_g(h)+\bigl(g(a)+Dg(a)h+r_g(h)\bigr)r_f(h)$. By step 1.1 and [L7] the first term is at most $K^2\lVert h\rVert^2$ and the others are bounded quantities times $o(\lVert h\rVert)$, so $\varrho(h)=o(\lVert h\rVert)$; the first-order part is $\mathbb C$-linear by [L3], so [L1] gives the product rule. [step 1.1, L1, L3, L5, L7]

2.3 Suppose $g(a)\ne0$. By [L2] the function $g$ is continuous, so [L6] gives a ball $B$ about $a$ inside $U$ on which $|g|\ge|g(a)|/2>0$; in particular $\{z\in U:g(z)\ne0\}$ is open by [L6]. On $B$ write $\frac1{g(a+h)}-\frac1{g(a)}=\frac{g(a)-g(a+h)}{g(a)g(a+h)}=\frac{-Dg(a)h-r_g(h)}{g(a)g(a+h)}$; using $g(a+h)\to g(a)$ this equals $-\frac{Dg(a)h}{g(a)^2}+o(\lVert h\rVert)$ by step 1.1 and [L7]. So $1/g$ is complex differentiable at $a$ with differential $h\mapsto-Dg(a)h/g(a)^2$, which is $\mathbb C$-linear by [L3]. [step 1.1, L1, L2, L3, L5, L6, L7]

3.1 Combining steps 2.2 and 2.3 gives the quotient rule for $f/g$ at every point where $g$ does not vanish, and reading each differential at $h=e_k$ with [L2], [L3] and [L8] gives the displayed formulas for $\partial_{z_k}$. [step 2.2, step 2.3, L2, L3, L5, L8]

4.1 Steps 2.1 and 2.2 make the holomorphic functions on $U$ closed under pointwise addition and multiplication; those operations are commutative, associative and distributive because the values lie in the field $\mathbb C$ ([L5]), and every constant function is holomorphic with zero differential by [L1]. So the holomorphic functions on $U$ form a commutative ring containing the constants. [step 2.1, step 2.2, L1, L5] ∎
