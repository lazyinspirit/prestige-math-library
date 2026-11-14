---
title: Distinct complex exponentials have full interval Gram rank
status: draft
research_item: lem-author-e8d79981fdee-distinct-exponential-profiles
dependency_level: 1
---

## Prerequisites

- [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)
- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [math:def-function-space](https://alphabetamath.cc/item/def-function-space)
- [math:def-linear-independence](https://alphabetamath.cc/item/def-linear-independence)
- [math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)
- [math:lem-span-is-the-set-of-linear-combinations](https://alphabetamath.cc/item/lem-span-is-the-set-of-linear-combinations)
- [math:thm-dimension-of-a-linear-subspace](https://alphabetamath.cc/item/thm-dimension-of-a-linear-subspace)
- [math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm)
- [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)
- [math:cor-linear-maps-with-finite-dimensional-domain-are-bounded](https://alphabetamath.cc/item/cor-linear-maps-with-finite-dimensional-domain-are-bounded)


## Statement

Let $t>0$, let $z_1,\ldots,z_n$ be pairwise distinct complex numbers, and let $a_1,\ldots,a_n$ be nonzero complex numbers. The functions $a_j e^{z_js}$ on $0<s<t$ are linearly independent. Consequently the vectors $(a_je^{z_js})_{j=1}^n$, as $s$ varies in this interval, span $\mathbb C^n$. Repeated identical exponents contribute only one direction per distinct exponent after combining the corresponding nonzero coordinate vector.

## Statement references

[math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[math:def-function-space](https://alphabetamath.cc/item/def-function-space)

[math:def-linear-independence](https://alphabetamath.cc/item/def-linear-independence)

[math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)

[math:lem-span-is-the-set-of-linear-combinations](https://alphabetamath.cc/item/lem-span-is-the-set-of-linear-combinations)

[math:thm-dimension-of-a-linear-subspace](https://alphabetamath.cc/item/thm-dimension-of-a-linear-subspace)

[math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm)

[math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach)

[math:cor-linear-maps-with-finite-dimensional-domain-are-bounded](https://alphabetamath.cc/item/cor-linear-maps-with-finite-dimensional-domain-are-bounded)

## Facts & Assumptions

[F1] Give $\mathbb C$ its standard coordinate inner product and ordered basis $(1)$. Its induced length $\|w\|=\sqrt{w\overline w}=|w|$ is a complex norm by the inner-product norm corollary. With this one-vector ordered basis, the finite-dimensional completeness corollary makes it a complex Banach space. For fixed $z\in\mathbb C$, scalar multiplication $M_z(w)=zw$ is complex-linear, since $M_z(au+bv)=aM_z(u)+bM_z(v)$; the finite-domain boundedness corollary therefore makes $M_z:\mathbb C\to\mathbb C$ bounded. Apply the bounded-operator exponential theorem with $X=\mathbb C$ and $A=M_z$. Its partial sums are multiplication by $\sum_{r=0}^N (zs)^r/r!$, and evaluating the operator-norm limit at $1$ identifies $E_z(s)1=e^{zs}$. Evaluation is continuous because $\|B1\|\leq\|B\|\|1\|=\|B\|$ for a bounded operator $B$. The derivative and group conclusions give $\frac{d^k}{ds^k}e^{zs}=z^ke^{zs}$ for every nonnegative integer $k$ and $e^{zs}e^{-zs}=1$, so $e^{zs}\ne0$. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions) [math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm) [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach) [math:cor-linear-maps-with-finite-dimensional-domain-are-bounded](https://alphabetamath.cc/item/cor-linear-maps-with-finite-dimensional-domain-are-bounded) [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F2] Finite coordinate vectors, their specified bases, and linear pairings use the operator conventions. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F3] The functions in the Statement belong to the complex vector space $\mathbb C^{(0,t)}$ with pointwise operations and pointwise equality. Linear independence means that a vanishing finite linear combination forces every scalar coefficient to vanish. Span is the smallest containing linear subspace, equivalently the set of finite linear combinations. [math:def-function-space](https://alphabetamath.cc/item/def-function-space) [math:def-linear-independence](https://alphabetamath.cc/item/def-linear-independence) [math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span) [math:lem-span-is-the-set-of-linear-combinations](https://alphabetamath.cc/item/lem-span-is-the-set-of-linear-combinations)

[F4] A subspace of a finite-dimensional vector space has a finite basis, and any independent subset extends to a basis of the ambient finite-dimensional space, without a choice principle. [math:thm-dimension-of-a-linear-subspace](https://alphabetamath.cc/item/thm-dimension-of-a-linear-subspace), Statement claims 1 and 3.

## Proof

**Given:** The finite data and hypotheses in the Statement, with the function-space and coordinate conventions of [F2] and [F3].

**Goal:** Prove independence of the functions and the stated spans, including the repeated-exponent case.

1.1 The scalar hypotheses and specialization established in [F1] apply to each $z_j$. If $\sum_j c_ja_je^{z_js}=0$ throughout the interval, differentiate $k=0,\ldots,n-1$ times at an interior point $s_0$. This yields $\sum_j d_jz_j^k=0$, where $d_j=c_ja_je^{z_js_0}$. For each $l$, the polynomial $p_l(x)=\prod_{j\ne l}(x-z_j)/(z_l-z_j)$ has degree at most $n-1$ and values $p_l(z_j)=\delta_{lj}$. Taking the corresponding linear combination of these equations gives $d_l=0$. Since $a_le^{z_ls_0}\ne0$, every $c_l=0$, which is independence in $\mathbb C^{(0,t)}$. [F1, F3, algebra]

2.1 Put $v(s)=(a_je^{z_js})_{j=1}^n$ and $W=\operatorname{span}\{v(s):0<s<t\}$. If $W$ were proper, [F4] would give a basis $b_1,\ldots,b_r$ of $W$ extending to a basis $b_1,\ldots,b_n$ of $\mathbb C^n$, with $r<n$. For $x=\sum_{i=1}^n\lambda_i b_i$ define $\ell(x)=\lambda_{r+1}$. Independence of the basis makes these coordinates unique; comparison of coordinates under addition and scalar multiplication makes $\ell$ linear. It vanishes on $W$ and satisfies $\ell(b_{r+1})=1$. In the standard coordinate basis $(e_j)$, set $c_j=\ell(e_j)$; then $\ell(x)=\sum_j c_jx_j$ and some $c_j$ is nonzero. But $\ell(v(s))=\sum_jc_ja_je^{z_js}=0$ for all $s$, contradicting step 1.1. Thus $W=\mathbb C^n$. [F2, F3, F4, step 1.1, algebra]

3.1 For a finite list of exponents allowing repetitions, let $w_1,\ldots,w_m$ be its distinct values, and let $u_l$ have coordinate $a_j$ when $z_j=w_l$ and zero otherwise. Each $u_l$ is nonzero, and their disjoint coordinate supports make them independent: in $\sum_l\alpha_lu_l=0$, a nonzero coordinate in the $l$th group forces $\alpha_l=0$. The profile vector is $\sum_l e^{w_ls}u_l$. By step 2.1 with all amplitudes equal to one, the vectors $(e^{w_ls})_{l=1}^m$ span $\mathbb C^m$. The linear map $(x_l)_l\mapsto\sum_l x_lu_l$ therefore carries their span onto $\operatorname{span}\{u_1,\ldots,u_m\}$, and is injective by independence. Hence the profile span has exactly one direction per distinct exponent, as asserted. [F2, F3, step 2.1, algebra] ∎
