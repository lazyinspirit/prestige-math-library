---
id: lem-complete-intersection-hilbert-series-two-plane-forms
kind: lemma
title: "Hilbert series and eventual Hilbert value of a two-form plane complete intersection"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-coprime-plane-forms-form-a-homogeneous-regular-sequence, def-regular-sequence-on-a-module, def-hilbert-function-and-hilbert-series, def-graded-ring-and-graded-module, cor-length-is-additive-in-short-exact-sequences, def-composition-series-and-length-of-a-module, def-simple-module, def-formal-power-series-and-coefficient-extraction, def-monomials-multidegree-and-total-degree]
justified_by: []
aliases: []
landmark: true
short: "Hilbert series of two plane forms"
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Andreas Gathmann, Algebraic Geometry class notes (2002), Lemma 6.1.4 and Remark 6.1.6, pp. 92-93"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
    - title: "J. S. Milne, Algebraic Geometry v6.10, discussion of Hilbert functions, pp. 152-155"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
pipeline_run: frontier-35-ten-categories
---

## Statement

Let $k$ be a field and let $S=k[x_0,x_1,x_2]$ carry its standard grading. Let
$F,G\in S$ be homogeneous of positive degrees $d,e$ and suppose that the pair
$(F,G)$ is $S$-regular ([[def-regular-sequence-on-a-module]]). Then
$$\operatorname{HS}_{S/(F,G)}(t)=\frac{(1-t^d)(1-t^e)}{(1-t)^3} =\frac{(1+t+\cdots+t^{d-1})(1+t+\cdots+t^{e-1})}{1-t},$$
and the Hilbert function of $S/(F,G)$ is constantly equal to $de$ in every
degree $n\ge d+e-2$.

This is a statement about graded pieces only; the ring $S/(F,G)$ is not claimed
to be Artinian or finite-dimensional.

## Facts & Assumptions

**Given:** A field $k$, the standard graded ring $S=k[x_0,x_1,x_2]$, and a homogeneous $S$-regular pair $F,G$ of positive degrees $d,e$.

[L1] If nonzero homogeneous plane forms of positive degrees have no common nonconstant factor, then they form an $S$-regular sequence in that order ([[lem-coprime-plane-forms-form-a-homogeneous-regular-sequence]]).

[L2] A sequence is $M$-regular when $M/(x_1,\ldots,x_{i-1})M\ne0$ and multiplication by $x_i$ is injective on that module for every $i$, and $M/(\mathbf x)M\ne0$ ([[def-regular-sequence-on-a-module]]); in particular each generator of a regular sequence is a nonzerodivisor on the preceding quotient.

[L3] For the standard graded polynomial ring, the degree-$n$ piece $S_n$ has as a basis the monomials $x_0^ax_1^bx_2^c$ with $a+b+c=n$ ([[def-graded-ring-and-graded-module]], [[def-monomials-multidegree-and-total-degree]]); a homogeneous ideal has graded quotient pieces, and the twist satisfies $M(a)_n=M_{n+a}$ ([[def-graded-ring-and-graded-module]]).

[L4] The Hilbert function of a graded module with finite-length pieces is $H_M(n)=\ell_{S_0}(M_n)$ and its Hilbert series is $\operatorname{HS}_M(t)=\sum_nH_M(n)t^n$, with $\operatorname{HS}_{M(a)}(t)=t^{-a}\operatorname{HS}_M(t)$ ([[def-hilbert-function-and-hilbert-series]]).

[L5] For a short exact sequence $0\to N\to M\to Q\to0$ the middle module has finite length exactly when the outer two do, and then $\ell(M)=\ell(N)+\ell(Q)$ ([[cor-length-is-additive-in-short-exact-sequences]]).

[L6] A module is simple when it is nonzero and has no nonzero proper submodule; a composition series has simple factors, and the length of a module with a composition series is the number of its factors ([[def-simple-module]], [[def-composition-series-and-length-of-a-module]]).

[L7] In $R\llbracket t\rrbracket$ the Cauchy product is $[t^n](fg)=\sum_{i+j=n}[t^i]f\,[t^j]g$, the constant series $1$ has coefficient $1$ at $0$ and $0$ elsewhere, and coefficient extraction is additive ([[def-formal-power-series-and-coefficient-extraction]]).

## Proof

**Proof technique:** direct.

1.1 Fix $n$. Because $F$ is a nonzerodivisor on $S$ of degree $d$ by [L2], multiplication by $F$ maps $S_{n-d}$ isomorphically onto $F\cdot S_{n-d}=(F)_n$, so there is an exact sequence of $k$-vector spaces $$0\to S_{n-d}\xrightarrow{\cdot F}S_n\to(S/(F))_n\to0.$$ Here $S_{n-d}:=0$ when $n<d$. Likewise $G$ is a nonzerodivisor on $S/(F)$ and has degree $e$, so $$0\to(S/(F))_{n-e}\xrightarrow{\cdot G}(S/(F))_n\to(S/(F,G))_n\to0$$ is exact, with $(S/(F))_{n-e}:=0$ when $n<e$. All terms are finite-dimensional over $k=S_0$, and $\ell_k(V)=\dim_kV$ for a finite-dimensional $k$-vector space, since a basis $v_1,\ldots,v_m$ gives the composition series $0\subsetneq\langle v_1\rangle\subsetneq\cdots\subsetneq V$ with one-dimensional, hence simple, factors by [L6]. [L2, L3, L5, L6, algebra]

2.1 Taking dimensions over $k$ in the two exact sequences of 1.1 and using $\ell_k=\dim_k$ by [L4] on each piece, we get for every $n$ $$\dim_k(S/(F,G))_n=\dim_kS_n-\dim_kS_{n-d}-\dim_kS_{n-e}+\dim_kS_{n-d-e},$$ with $\dim_kS_m:=0$ for $m<0$. Moreover $\dim_kS_m$ is the number of triples $(a,b,c)\in\mathbb N^3$ with $a+b+c=m$, since those triples index the monomial basis of $S_m$ by [L3]. [L3, L4, L5, step 1.1]

3.1 Work in $\mathbb Z\llbracket t\rrbracket$, so the coefficients retain the integer dimensions even when $k$ has positive characteristic. Write $G(t):=\sum_{n\ge0}\dim_kS_nt^n$ for the Hilbert series of $S$. By the Cauchy product rule of [L7], the cube of $\sum_{n\ge0}t^n$ is $\sum_nt^n$ convolved three times, whose coefficient at $t^n$ is exactly the number of triples $(a,b,c)\in\mathbb N^3$ with $a+b+c=n$, that is, $\dim_kS_n$ by 2.1. Hence $G(t)=\bigl(\sum_{n\ge0}t^n\bigr)^3$; and since $1-t$ times $\sum_{n\ge0}t^n$ has constant coefficient one and all other coefficients zero, $\sum_{n\ge0}t^n$ is the inverse of $1-t$ in $\mathbb Z\llbracket t\rrbracket$ and $G(t)=(1-t)^{-3}$. Multiplying the dimension identity of 2.1 by $t^n$ and summing over $n\ge0$, the shifts by $d$ and $e$ contribute $t^d$ and $t^e$ by the twist rule of [L4], so $$\operatorname{HS}_{S/(F,G)}(t)=(1-t^d)(1-t^e)G(t)=\frac{(1-t^d)(1-t^e)}{(1-t)^3}.$$ [L4, L7, step 2.1, algebra]

4.1 Since $(1-t^d)=(1-t)(1+t+\cdots+t^{d-1})$ and likewise for $e$, the series of 3.1 equals $P(t)/(1-t)$ where $P(t)$ is the polynomial $(1+t+\cdots+t^{d-1})(1+t+\cdots+t^{e-1})=\sum_{m=0}^{d+e-2}p_mt^m$ with $p_m\ge0$; here $p_m$ counts the pairs $(i,j)$ with $i\le d-1$, $j\le e-1$ and $i+j=m$, so $\sum_mp_m=de$. By the Cauchy product rule of [L7] and the inverse $\sum_nt^n=(1-t)^{-1}$ from 3.1, the coefficient of $t^n$ in $P(t)/(1-t)$ is $\sum_{m\le n}p_m$, which equals $\sum_{m}p_m=de$ for every $n\ge d+e-2$. Hence $H_{S/(F,G)}(n)=de$ in all those degrees. [L7, step 3.1, algebra]

5.1 By [L1], the hypothesis of the statement holds in particular for every pair of nonzero homogeneous plane forms of positive degrees $d,e$ with no common nonconstant factor, so the computed series and the eventual value $de$ apply to those pairs. Steps 3.1 and 4.1 prove both displayed identities and the eventual constancy; no Artinianity or finite dimensionality of $S/(F,G)$ was used anywhere. [L1, step 3.1, step 4.1] ∎
