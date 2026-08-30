---
id: thm-zero-divisor-theorem-on-plane-domains
kind: theorem
title: "Every discrete effective divisor on a plane domain is the zero divisor of a holomorphic function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-weierstrass-elementary-factor,
       lem-unit-disc-estimate-for-weierstrass-elementary-factors,
       thm-normal-convergence-of-holomorphic-products,
       thm-weierstrass-product-theorem-on-the-complex-plane]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, §3.3 and §4.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a plane domain, and let
$A\subseteq\Omega$ be discrete with multiplicities $m(a)\in\mathbb N$.
Then there is a holomorphic function $F$ on $\Omega$ whose zero at each
$a\in A$ has order exactly $m(a)$ and which has no other zeros.

## Facts & Assumptions

**Given:** A plane domain $\Omega$ and a discrete effective divisor $\sum_{a\in A}m(a)[a]$ on $\Omega$.

[L1] The elementary factor $E_p(w)$ has its only zero at $w=1$
([[def-weierstrass-elementary-factor]]).

[L2] If $|w|\le1$, then $|1-E_p(w)|\le|w|^{p+1}$
([[lem-unit-disc-estimate-for-weierstrass-elementary-factors]]).

[L3] A normally convergent product of holomorphic factors is holomorphic and
has exactly the zeros contributed by its factors
([[thm-normal-convergence-of-holomorphic-products]]).

[L4] If $m\ge0$ and $(a_n)$ is a discrete sequence of nonzero complex
numbers, then a product $z^m\prod_nE_{p_n}(z/a_n)$ is entire and has exactly
the order-$m$ zero at $0$ and the listed nonzero zeros with multiplicity
([[thm-weierstrass-product-theorem-on-the-complex-plane]]).

## Proof

**Proof technique:** constructive.

1.1 List the points of $A$ with each $a$ repeated $m(a)$ times. If the list is finite, the corresponding finite polynomial works (with $F\equiv1$ for the empty list). If the list is infinite and $\Omega=\mathbb C$, let $m_0$ be the multiplicity of $0$ and enumerate the remaining nonzero terms as $(a_n)$. Fact [L4] applied to $m_0$ and $(a_n)$ gives the required entire function. Thus assume $\mathbb C\setminus\Omega\ne\varnothing$. Define $$D:=\left\{z\in\Omega:\operatorname{dist}(z,\mathbb C\setminus\Omega)<\frac1{|z|+1}\right\}.$$ Split the repeated list into $(b_j)$, consisting of the terms in $D$, and $(c_j)$, consisting of the remaining terms. [L4, given, construct, cases]

2.1 For each $b_j$, choose $p_j\in\mathbb C\setminus\Omega$ with $|b_j-p_j|=\operatorname{dist}(b_j,\mathbb C\setminus\Omega)$. If $(b_j)$ is infinite, then $|b_j-p_j|\to0$: otherwise a subsequence stays a fixed positive distance from the boundary, while the defining inequality for $D$ keeps that subsequence bounded, producing a limit point in $\Omega$. Define $$Q_j(z):=E_j\!\left(\frac{b_j-p_j}{z-p_j}\right).$$ Each $Q_j$ is holomorphic on $\Omega$ and, by [L1], has its only zero at $z=b_j$. [L1, step 1.1, choose, algebra]

2.2 If $(c_j)$ is infinite, then $|c_j|\to\infty$. Indeed, a bounded subsequence would have a limit point; discreteness excludes a limit in $\Omega$, while $c_j\notin D$ gives $$\operatorname{dist}(c_j,\mathbb C\setminus\Omega)\ge\frac1{|c_j|+1},$$ which excludes a boundary limit. Let $m_0$ be the multiplicity of $0$ in this list and enumerate its nonzero terms as $(d_j)$. Then $|d_j|\to\infty$, so [L4] gives an entire function $$F_2(z)=z^{m_0}\prod_jE_{p_j}(z/d_j)$$ whose zeros, with repetition, are exactly the $c_j$. If the list is finite, take the corresponding finite polynomial, and if it is empty, take $F_2\equiv1$. [L4, step 1.1, cases, algebra]

3.1 Fix a compact set $K\subseteq\Omega$ and put $d:=\operatorname{dist}(K,\mathbb C\setminus\Omega)>0$. For all sufficiently large $j$, $$\sup_{z\in K}\left|\frac{b_j-p_j}{z-p_j}\right|\le\frac{|b_j-p_j|}{d}\le\frac12.$$ Hence [L2] gives $$\sup_{z\in K}|1-Q_j(z)|\le2^{-j-1}$$ after increasing the starting index if necessary. Thus $\prod_jQ_j$ is normally convergent on $\Omega$, and [L3] gives a holomorphic function $F_1$ whose zeros, with repetition, are exactly the $b_j$. [L2, L3, step 2.1, algebra]

4.1 The product $F:=F_1F_2$ is holomorphic on $\Omega$. Steps 3.1 and 2.2 show that its zeros are exactly the original points $a\in A$, and repetition in the list gives each zero order $m(a)$. [step 3.1, step 2.2, discharge-construct] ∎
