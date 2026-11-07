---
id: lem-short-interval-restricted-set-sieve-recovery
kind: lemma
title: Recovery of unrestricted short-interval means from a dense restricted set
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
proof_strategy: direct
axiom_use: No choice axiom is used; all sums and integrals are finite.
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- thm-ftc-second-part
- def-short-interval-sum-of-an-arithmetic-function
sources:
  references:
  - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
    url: https://arxiv.org/pdf/1501.04585v4
    locator: Reduction following Theorem 3, printed p. 7, and Section 9. The finite inequality and integer-start conversion are supplied locally.
---

## Statement

Let $X\ge2$, $2\le h\le X$, and $S$ be any set of positive integers. Let $a_n\in\mathbb C$ satisfy $|a_n|\le1$. For a function $b$ put
$$A_hb(x)=\frac1h\sum_{x\le n\le x+h}b(n),\qquad B_Xb=\frac1X\sum_{X\le n\le2X}b(n).$$
Define $a_S(n)=a_n\mathbf1_S(n)$, $1_S(n)=\mathbf1_S(n)$,
$$M_a=\frac1X\int_X^{2X}|A_ha_S(x)-B_Xa_S|^2dx,\quad M_1=\frac1X\int_X^{2X}|A_h1_S(x)-B_X1_S|^2dx,$$
and $d=X^{-1}\#\{n\in[X,2X]\cap\mathbb Z:n\notin S\}$. For every $\delta>0$, the number of integer starts $m\in[X,2X]$ for which
$$|A_ha(m)-B_Xa|>\delta$$
is at most $$C+\frac{CX}{\delta^2}\left(M_a+M_1+d^2+h^{-2}\right),$$
where $C$ is an absolute constant. All sums and integrals are finite; no multiplicativity or short-interval theorem is assumed.

## Facts & Assumptions

**Given:** All data in the Statement.

[F1] The short-interval sum is a finite sum over the integers in the stated interval. [[def-short-interval-sum-of-an-arithmetic-function]]

[F2] Finite piecewise-continuous functions have the usual additive integrals and constant-integral evaluation. [[thm-ftc-second-part]]

## Proof

1.1 Write $b(n)=a_n\mathbf1_{n\notin S}$ and $c(n)=\mathbf1_{n\notin S}$. Positivity gives $|A_hb(x)|\le A_hc(x)$ and $|B_Xb|\le B_Xc=d$. Therefore $$|A_ha(x)-B_Xa|\le|A_ha_S(x)-B_Xa_S|+|A_hc(x)-B_Xc|+2d.$$ The closed interval $[x,x+h]$ contains $h+O(1)$ integers, and $[X,2X]$ contains $X+O(1)$ integers, so $$|A_hc(x)-B_Xc|\le|A_h1_S(x)-B_X1_S|+O(h^{-1}+X^{-1}).$$ Since $h\le X$, squaring, integrating, and using $|z_1+z_2+z_3|^2\le3\sum|z_i|^2$ gives $$\frac1X\int_X^{2X}|A_ha(x)-B_Xa|^2dx\le C(M_a+M_1+d^2+h^{-2}).$$ All endpoint counts use the literal intervals in the Statement. [F1, F2, given, algebra]

2.1 For an integer $m$ and every $x\in[m,m+1)$, at most one integer can leave the interval $[m,m+h]$ through its left endpoint and at most one can enter through its right endpoint. Thus $|A_ha(x)-A_ha(m)|\le2/h$. If $|A_ha(m)-B_Xa|>\delta$, then throughout $[m,m+1)$ $$\delta^2\le2|A_ha(x)-B_Xa|^2+8h^{-2}.$$ Integrate this inequality for every exceptional $m$ with $[m,m+1)\subseteq[X,2X]$. Those unit intervals are disjoint and lie inside $[X,2X]$; at most two exceptional integer starts lie outside that collection because of the real endpoints. Consequently $$N\delta^2\le2\int_X^{2X}|A_ha(x)-B_Xa|^2dx+8Xh^{-2}+O(\delta^2).$$ Substitute step 1.1 and divide by $\delta^2$ to obtain the stated bound, including when it exceeds the total number of starts. [F1, F2, step 1.1, given, algebra] ∎
