---
id: thm-hilbert-serre-theorem
kind: theorem
title: "A finite graded module over a standard graded algebra has rational Hilbert series and eventual polynomial growth"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hilbert-function-and-hilbert-series, def-graded-ring-and-graded-module, cor-length-is-additive-in-short-exact-sequences]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Proposition 10.58.7"
      url: "https://stacks.math.columbia.edu/tag/00JV"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Corollary (20.8)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Statement

Let $A$ be an Artinian commutative ring, let
$$
S=A[x_1,\ldots,x_r]/J
$$
be a standard graded $A$-algebra with $\deg x_i=1$, and let
$M=\bigoplus_{n\in\mathbb Z}M_n$ be a finite graded $S$-module. Then:

1. the Hilbert series $\operatorname{HS}_M(t)$ is a rational function of the
   form
   $$
   \operatorname{HS}_M(t)=\frac{p(t)}{(1-t)^r}
   $$
   for some Laurent polynomial $p(t)\in\mathbb Z[t,t^{-1}]$;
2. the Hilbert function $n\mapsto \ell_A(M_n)$ agrees for all sufficiently
   large $n$ with a polynomial in $n$ with rational coefficients.

## Facts & Assumptions

**Given:** An Artinian ring $A$, a standard graded $A$-algebra
$S=A[x_1,\ldots,x_r]/J$ with $\deg x_i=1$, and a finite graded $S$-module
$M=\bigoplus M_n$.

[L1] A twist satisfies $M(-1)_n=M_{n-1}$, hence
$$
\operatorname{HS}_{M(-1)}(t)=t\operatorname{HS}_M(t)
$$
([[def-graded-ring-and-graded-module]], [[def-hilbert-function-and-hilbert-series]]).

[L2] Length is additive in short exact sequences of finite-length modules
([[cor-length-is-additive-in-short-exact-sequences]]).

## Proof

**Proof technique:** direct.


1.1 If $r=0$, then $S=A$ and the finite graded $A$-module $M$ has only finitely many nonzero homogeneous pieces. Hence $\operatorname{HS}_M(t)$ is a Laurent polynomial, so both conclusions hold. [given, algebra]


1.2 Assume $r>0$ and write $S'=A[x_1,\ldots,x_{r-1}]/(J\cap A[x_1,\ldots,x_{r-1}])$. Multiplication by the degree-one class of $x_r$ gives an exact sequence of graded $S$-modules $ 0\to K\to M(-1)\xrightarrow{x_r} M\to C\to0, $ where $K$ and $C$ are annihilated by $x_r$ and therefore are finite graded $S'$-modules. [given, construct]


1.3 Taking degree-$n$ pieces in algebra and using [L2] yields $ \ell_A(C_n)-\ell_A(K_n)=\ell_A(M_n)-\ell_A(M_{n-1}) $ for every $n$. In Hilbert-series form this is $ (1-t)\operatorname{HS}_M(t)=\operatorname{HS}_C(t)-\operatorname{HS}_K(t) $ by [L1]. [L1, L2, algebra]


1.4 By the algebra hypothesis applied to the finite graded $S'$-modules $K$ and $C$, the two series on the right side of algebra have denominator dividing $(1-t)^{r-1}$. Therefore $\operatorname{HS}_M(t)$ has denominator dividing $(1-t)^r$. [algebra]


1.5 Any rational function with denominator a power of $(1-t)$ expands for large $n$ as a finite $\mathbb Z$-linear combination of binomial coefficients $\binom{n+d}{d}$, hence its coefficients agree eventually with a polynomial. Applying this to algebra proves the eventual polynomial behaviour of $H_M(n)=\ell_A(M_n)$. [algebra]


2.1 Steps 1.1 through 1.5 prove both claims. [algebra] ∎
