---
id: lem-arc-length-polyline-interpolation-error
kind: lemma
title: "Polyline interpolation and equal-length redistribution approximate a smooth arc-length path"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - def-ck-and-multi-index-notation-in-several-variables
  - lem-centered-chord-and-unequal-step-tangent-error
  - thm-chain-rule-for-total-derivatives
  - cor-taylor-lagrange-and-cauchy-remainders
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, String method for the study of rare events"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf"
      locator: "§II, equations (5)–(6): reparameterization by arc length; the interpolation estimate is proved here"
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, Simplified and improved string method for computing the minimum energy paths in barrier-crossing events"
      url: "https://math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/SimplifiedString.pdf"
      locator: "§IV B–C: cumulative polyline lengths, linear interpolation, and the stated accuracy dependence"
---

## Statement

Let $L>0$, let $M\ge1$ be an integer, and let $R:[0,L]\to\mathbb R^d$ be a unit-speed $C^3$ curve with $M$ equal arc-length intervals of length $h=L/M$. Suppose $\|R''\|_2\le K_2$ and the coordinate third derivatives satisfy the bound in [[lem-centered-chord-and-unequal-step-tangent-error]] with constant $M_3$. For sufficiently small $h$, each chord length $\ell_i=\|R(ih)-R((i-1)h)\|_2$ satisfies $|\ell_i-h|\le C_1h^3$, where $C_1$ depends only on $K_2,M_3$. The piecewise-linear interpolant through the samples differs from $R$ in supremum norm by at most $C_2h^2$. If this polygon is redistributed by linear interpolation at equally spaced cumulative-length targets, the $j$th redistributed image is within $C_3h^2$ of $R(jh)$, for every $j=0,\ldots,M$.

Here $C^3$ on $[0,L]$ means that $R$ is the restriction of a $C^3$ curve on an open interval containing $[0,L]$; derivatives at the endpoints are the continuous one-sided values, and the unit-speed and derivative bounds are required on $[0,L]$.

## Facts & Assumptions

**Given:** The unit-speed $C^3$ curve, equal arc-length mesh, derivative bounds, and small-mesh condition in the Statement.

[F1] The unit-speed hypothesis [A1] means $\|R'(s)\|_2=1$ on $[0,L]$. Thus the normalized tangent convention of [[def-regular-minimum-energy-path-in-a-collision-free-tube]] gives $t(s)=R'(s)$ on this interval.

[F2] [[lem-centered-chord-and-unequal-step-tangent-error]]: the coordinate third-derivative bound used here is $|R_j'''|\le M_3/\sqrt d$ on the path interval.

[F3] [[cor-taylor-lagrange-and-cauchy-remainders]]: its one-dimensional Lagrange formula applies to a scalar $C^3$ function on a closed interval when derivatives through order three are continuous to the endpoints; with degree two it bounds the remainder by $\sup|g'''|\,|u|^3/6$, and with degree one it bounds the remainder by $\sup|g''|\,|u|^2/2$.

[F4] [[thm-chain-rule-for-total-derivatives]]: differentiating a composition gives the derivative of the outer function applied to the derivative of the inner function.

[A1] The curve has the endpoint $C^3$ convention in the Statement, has unit speed on $[0,L]$, and has the stated bounds $\|R''\|_2\le K_2$ and coordinate third-derivative bound $M_3/\sqrt d$ on the whole interval; the interior $C^3$ convention is [[def-ck-and-multi-index-notation-in-several-variables]].



**Given:** The data in the Statement.

## Proof

1.1 On each mesh interval $[s,s+h]$, apply the one-dimensional degree-two formula [F3] to each coordinate of the extended curve at $s$; the endpoint convention supplies the required derivative continuity, and [A1, F2] gives a remainder vector $r$ with $\|r\|_2\le M_3h^3/6$. Thus $R(s+h)-R(s)=hT+\frac{h^2}{2}K+r$ with $T=R'(s)$, $K=R''(s)$, and $\|K\|_2\le K_2$. Differentiating $\|R'(s)\|_2^2=1$ gives $T^TK=0$ by the chain rule [F4]. Hence $|\|R(s+h)-R(s)\|_2^2-h^2|\le C h^4$ for a constant depending only on $K_2,M_3$; for sufficiently small $h$ the chord is at least $h/2$, so division by its sum with $h$ yields $|\ell_i-h|\le C_1h^3$. [A1, F1, F2, F3, F4, given, algebra]

1.2 For $s=ih+\theta h$ with $0\le\theta\le1$, apply the one-dimensional degree-one formula [F3] on $\lbrack ih,s\rbrack$ and $\lbrack ih,(i+1)h\rbrack$. The remainder bound in [F3] and $\|R''\|_2\le K_2$ give $R(s)=R(ih)+\theta hR'(ih)+O(K_2h^2)$ and $R((i+1)h)=R(ih)+hR'(ih)+O(K_2h^2)$. Subtracting the linear interpolant cancels the first-order term, so the pointwise interpolation error is bounded by $C_2h^2$, uniformly over all intervals. [A1, F1, F3, given, algebra]

2.1 Let $p_i=\sum_{m=1}^{i}\ell_m$ and $L_h=p_M$. Step 1.1 gives $|p_i-ih|\le iC_1h^3\le C_1Lh^2$ and $|L_h-L|\le C_1Lh^2$. Thus the redistributed target $q_j=jL_h/M$ satisfies $|q_j-jh|\le C_1Lh^2$. Each segment has length at least $h/2$ for small $h$. If target $q_j$ lies on segment $i$ at fraction $\theta$, then $p_{i-1}+\theta\ell_i=q_j$; combining $|p_{i-1}-(i-1)h|\le C_1Lh^2$, $|q_j-jh|\le C_1Lh^2$, and $|\ell_i-h|\le C_1h^3$ gives $|(i-1)h+\theta h-jh|\le C h^2$. [given, step 1.1, algebra]

3.1 The point on the true curve at parameter $(i-1)h+\theta h$ is within $C_2h^2$ of the redistributed polygon point by step 1.2, and it is within $C h^2$ of $R(jh)$ by unit speed and step 2.1. The triangle inequality gives the claimed $C_3h^2$ bound, including endpoints where redistribution fixes the endpoints. [F1, step 1.2, step 2.1, algebra] ∎

