---
id: prop-holomorphic-functions-are-continuous-and-separately-holomorphic
kind: proposition
title: "A holomorphic function of several variables is continuous and separately holomorphic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-holomorphic-function-in-several-complex-variables, def-separately-holomorphic-function, lem-complex-linear-real-differential-criterion, def-wirtinger-operators-in-several-complex-variables, lem-euclidean-linear-maps-have-matrices-and-are-bounded, def-complex-differentiability-holomorphic-and-entire, cor-complex-differentiability-implies-continuity, rem-complex-euclidean-space-dictionary, lem-standard-basis-of-f-n, lem-complex-conjugation-and-modulus-laws, lem-finite-sum-laws, def-vector-valued-functions-limits-and-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C^m$ be open and let $f:U\to\mathbb C$ be holomorphic
([[def-holomorphic-function-in-several-complex-variables]]). Then $f$ is
continuous on $U$ and separately holomorphic on $U$
([[def-separately-holomorphic-function]]). Moreover, for $a\in U$ and $k<m$ the
slice $f_{a,k}$ is complex differentiable at $a_k$ with derivative
$Df(a)e_k$, and

$$Df(a)e_k=\partial_{z_k}f(a),\qquad Df(a)h=\sum_{k<m}\bigl(\partial_{z_k}f(a)\bigr)h_k .$$

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C^m$ and a holomorphic $f:U\to\mathbb C$; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] $f$ is complex differentiable at $a$ when there is a $\mathbb C$-linear $L$ with $f(a+h)=f(a)+L(h)+r(h)$ and $|r(h)|/\lVert h\rVert\to0$; that $L$ is unique and written $Df(a)$ ([[def-holomorphic-function-in-several-complex-variables]]).

[L2] $f$ is separately holomorphic when every slice $f_{a,k}$ is holomorphic on the open set $U_{a,k}$ in the one-variable sense ([[def-separately-holomorphic-function]], [[def-complex-differentiability-holomorphic-and-entire]]).

[L3] An $\mathbb R$-linear $T:\mathbb C^m\to\mathbb C$ has a unique representation $T(h)=\sum_{k<m}c_kh_k+\sum_{k<m}d_k\overline{h_k}$, and $T$ is $\mathbb C$-linear exactly when every $d_k=0$; for $T=Df(a)$ at a point of real total differentiability, $c_k=\partial_{z_k}f(a)$ and $d_k=\partial_{\bar z_k}f(a)$ ([[lem-complex-linear-real-differential-criterion]], [[def-wirtinger-operators-in-several-complex-variables]]).

[L4] For every linear $L:\mathbb R^m\to\mathbb R^n$ there is $K\ge0$ with $\lVert Lh\rVert_2\le K\lVert h\rVert_2$ for every $h$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

[L5] A complex differentiable function of one variable is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L6] Every $h\in\mathbb C^m$ satisfies $h=\sum_{k<m}h_ke_k$ in the standard basis ([[lem-standard-basis-of-f-n]]).

[L7] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]); finite sums are additive, scale and are monotone in their terms ([[lem-finite-sum-laws]]).

[L8] Continuity of a map into $\mathbb R^n$ from a subset of a metric space is the usual $\varepsilon$–$\delta$ condition with the Euclidean norm ([[def-vector-valued-functions-limits-and-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in U$ and write $L=Df(a)$ as in [L1]. Since $L$ is $\mathbb C$-linear it is in particular $\mathbb R$-linear, so [L4] read through the dictionary gives $K\ge0$ with $|L(h)|\le K\lVert h\rVert$ for every $h$; alternatively [L3] and [L6] give $L(h)=\sum_{k<m}c_kh_k$ with $|c_k|=|L(e_k)|$, and [L7] bounds $|L(h)|$ by $\bigl(\sum_{k<m}|c_k|\bigr)\lVert h\rVert$ because $|h_k|\le\lVert h\rVert$. [given, L1, L3, L4, L6, L7]

1.2 The remainder satisfies $|r(h)|/\lVert h\rVert\to0$ by [L1], so there is $\delta>0$ with $|r(h)|\le\lVert h\rVert$ whenever $0<\lVert h\rVert<\delta$ and $a+h\in U$. [given, L1]

1.3 Fix $k<m$, let $a\in U$ and let $\zeta\in U_{a,k}$. The point $a'$ obtained from $a$ by replacing its $k$th coordinate by $\zeta$ lies in $U$ and agrees with $a$ off the $k$th coordinate, so $U_{a',k}=U_{a,k}$ and $f_{a',k}=f_{a,k}$. [given, L2]

2.1 Combining steps 1.1 and 1.2, $|f(a+h)-f(a)|\le|L(h)|+|r(h)|\le(K+1)\lVert h\rVert$ for such $h$, which tends to $0$ with $\lVert h\rVert$; by [L8] this is continuity of $f$ at $a$, and $a\in U$ was arbitrary. [step 1.1, step 1.2, L7, L8]

2.2 With $a'$ as in step 1.3 and $h=(\xi-\zeta)e_k$ for $\xi$ near $\zeta$, [L1] and [L6] give $f_{a,k}(\xi)-f_{a,k}(\zeta)=Df(a')e_k\,(\xi-\zeta)+r(h)$, and $\lVert h\rVert=|\xi-\zeta|$ by the dictionary, so $|r(h)|/|\xi-\zeta|\to0$. Hence $f_{a,k}$ is complex differentiable at $\zeta$ with derivative $Df(a')e_k$; as $\zeta\in U_{a,k}$ was arbitrary, the slice is holomorphic on $U_{a,k}$ and $f$ is separately holomorphic by [L2]. [step 1.3, L1, L2, L6]

3.1 By [L3] applied to the $\mathbb C$-linear $Df(a)$, every $d_k$ vanishes and $Df(a)h=\sum_{k<m}c_kh_k$ with $c_k=Df(a)e_k=\partial_{z_k}f(a)$; step 2.2 at $\zeta=a_k$ identifies that number with the derivative of the slice, and [L5] confirms the slice is continuous, consistently with step 2.1. [step 2.1, step 2.2, L3, L5, L6] ∎
