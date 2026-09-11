---
id: lem-weyl-coinvariant-hilbert-series-has-order-w-dimension
kind: lemma
title: Weyl coinvariant hilbert series has order w dimension
status: draft
origin: pipeline
deps: [lem-reflection-basic-invariants-form-a-regular-sequence, lem-finite-reflection-invariant-generators-are-algebraically-independent, def-finite-linear-invariant-and-coinvariant-polynomial-algebras]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Pavel Etingof, Representations of Lie Groups, §§11–13; local proof and exact reading limits in the group report
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
proof_strategy: direct
---

## Statement

Let $W\leq\operatorname{GL}(V)$ be a finite complex reflection group, in particular a finite Weyl reflection group, with $r=\dim V$. Put $S=\mathbb C[V]$, $R=S^W$, $I=SR_+$, and let $d_1,\ldots,d_r$ be the degrees of basic invariants. Then
$$\operatorname{Hilb}(S/I,t)=\prod_{i=1}^r(1+t+\cdots+t^{d_i-1}),\qquad \dim_{\mathbb C}(S/I)=\prod_i d_i=|W|.$$

## Facts & Assumptions

**Given:** The faithful finite reflection action and positive invariant degrees.

[F1] There are $r$ basic invariants, they form a regular sequence, and $S/I$ is finite dimensional ([[lem-reflection-basic-invariants-form-a-regular-sequence]]).

[F2] The basic invariants are algebraically independent and generate $R$ ([[lem-finite-reflection-invariant-generators-are-algebraically-independent]]).

[F3] Reynolds averaging is a graded projection onto $R$ ([[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]]).

## Proof

1.1 By F1, multiplication by a basic invariant $f_i$ of degree $d_i$ is injective on $S/(f_1,\ldots,f_{i-1})$, with cokernel the next quotient. Taking finite dimensions in each degree multiplies its Hilbert series by $1-t^{d_i}$. Monomial counting gives $\operatorname{Hilb}(S,t)=(1-t)^{-r}$. Iterating therefore gives $\operatorname{Hilb}(S/I,t)=\prod_i(1-t^{d_i})/(1-t)^r=\prod_i(1+t+\cdots+t^{d_i-1})$. Evaluation at $t=1$ gives the finite dimension $\prod_i d_i$. [F1, given]

1.2 Fix $w\in W$, of order dividing $q=|W|$. On $V^*$ its operator $T$ satisfies $T^q=1$. The polynomial $z^q-1$ factors over $\mathbb C$ into distinct explicit roots $\exp(2\pi i a/q)$. Lagrange polynomials for these roots give projections whose sum is identity and whose ranges are the corresponding eigenspaces: the polynomial identities hold modulo $z^q-1$, and evaluation at $T$ proves them. Thus a finite eigenbasis exists. If its eigenvalues are $\lambda_1,\ldots,\lambda_r$, the monomial basis of $S$ shows $\sum_{N\geq0}\operatorname{tr}(w\vert S_N)t^N=\prod_j(1-\lambda_jt)^{-1}=\det(1-tw\vert V^*)^{-1}$. This is a formal identity and also converges for $|t|<1$, since all $|\lambda_j|=1$. [given]

2.1 On each finite-dimensional $S_N$, an idempotent has the direct decomposition into its kernel and image, and its trace is its image dimension. F3 and linearity of finite matrix trace give $\dim R_N=|W|^{-1}\sum_{w\in W}\operatorname{tr}(w\vert S_N)$. Summing 1.2 and using F2 yields $\prod_i(1-t^{d_i})^{-1}=|W|^{-1}\sum_w\det(1-tw\vert V^*)^{-1}$. Multiply by $(1-t)^r$ and let real $t$ tend to $1$ from below. The left side tends to $\prod_i d_i^{-1}$. The identity summand on the right tends to $1/|W|$. Every nonidentity operator has fewer than $r$ eigenvalues equal to one: 1.2 gives diagonalizability, and faithfulness excludes the identity operator. Its remaining factors have nonzero limits, so its contribution tends to zero. Hence $\prod_i d_i=|W|$. [F2, F3, step 1.2]

3.1 Together 1.1 and 2.1 prove the claims. For $r=0$, faithfulness forces $W=\{1\}$, the products are empty products equal to $1$, and $S/I=\mathbb C$. Degree-one invariants contribute the factor $1$ and do not obstruct the strict eigenvalue-count argument for a nonidentity element, even when $W$ has a fixed subspace. Every basis selection is in a finite-dimensional space for one of finitely many operators; no AC is needed. [step 1.1, step 2.1] ∎
