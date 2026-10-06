---
id: lem-exact-sequence-dimension-inequality
kind: lemma
title: "Rank bookkeeping for a long exact sequence of finite-dimensional vector spaces"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-rank-nullity, def-rank-and-nullity, def-kernel-and-image-of-a-linear-map, def-dimension, def-field, def-exact-sequence-and-short-exact-sequence-in-an-abelian-category, thm-dimension-of-a-linear-subspace, thm-dimension-formula, def-polynomial-ring-over-a-commutative-ring, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: rank-bookkeeping
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Alexander Ritter, Morse Homology (Cambridge Part III lecture notes), Lecture 21, PDF pp. 96-101"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
dependency_level: 0
---

## Statement

Let $F$ be a field ([[def-field]]) and let
$$\cdots\to A_k\xrightarrow{\alpha_k} B_k\xrightarrow{\beta_k} C_k\xrightarrow{\gamma_k} A_{k-1}\to\cdots$$
be a long exact sequence of $F$-vector spaces
([[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]]),
indexed by the integers. Assume that $A_k$ and $C_k$ are finite-dimensional
over $F$ for every $k$ ([[def-dimension]]) and vanish for $k<0$ and for all
$k>N$, where $N$ is a fixed integer. Then the spaces $B_k$ are also
finite-dimensional and vanish for $k<0$ and $k>N$, and there is a unique
polynomial $Q(t)=\sum_{k=0}^{N}q_kt^k\in\mathbb Z[t]$ with $q_k\ge0$ for every
$k$ such that
$$P_A(t)+P_C(t)=P_B(t)+(1+t)Q(t),$$
where $P_A(t)=\sum_{k}(\dim_F A_k)t^k$ and similarly for $B,C$. Explicitly
$q_k=\dim_F\ker\alpha_k$, so that for every $k$
$$\sum_{i=0}^{k}(-1)^{k-i}\bigl(\dim_F A_i+\dim_F C_i-\dim_F B_i\bigr)=q_k\ge0,$$
and in particular $\dim_F B_k\le\dim_F A_k+\dim_F C_k$ for every $k$.

## Facts & Assumptions

**Given:** A field $F$, an integer $N$, a long exact sequence as displayed with $A_k,C_k$ finite-dimensional for all $k$ and zero for $k<0$ and $k>N$, and the notation $a_k:=\dim_F\ker\alpha_k\ge0$.

[F1] A sequence of morphisms is exact when at every interior node the image of the incoming map equals the kernel of the outgoing map ([[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]]).

[L1] For a linear map $T:V\to W$ with $V$ finite-dimensional, $\dim_F V=\operatorname{nullity}T+\operatorname{rank}T=\dim_F\ker T+\dim_F\operatorname{im}T$ ([[thm-rank-nullity]], [[def-rank-and-nullity]], [[def-kernel-and-image-of-a-linear-map]]).

[L2] If $U$ is a linear subspace of a finite-dimensional space $V$, then $U$ is finite-dimensional with $\dim_F U\le\dim_F V$ ([[thm-dimension-of-a-linear-subspace]]).

[L3] If $U,W$ are finite-dimensional linear subspaces of a vector space, then $\dim_F(U+W)+\dim_F(U\cap W)=\dim_F U+\dim_F W$ ([[thm-dimension-formula]]).

[F2] $\mathbb Z[x]$ is the set of finitely supported functions $\mathbb N\to\mathbb Z$, with pointwise addition and convolution product; two polynomials are equal exactly when all coefficients agree, and $x$ is the sequence with coefficient $1$ at index $1$ ([[def-polynomial-ring-over-a-commutative-ring]]).

[F3] $(\mathbb Z,+,\cdot,0,1)$ is a commutative ring with multiplicative identity ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** rank bookkeeping.

1.1 If $N<0$, the vanishing hypotheses force every $A_k,C_k$ to be zero, and exactness forces every $B_k$ to be zero; all formulas then hold with $Q=0$. Henceforth assume $N\ge0$. Exactness gives $\operatorname{im}\alpha_k=\ker\beta_k$, $\operatorname{im}\beta_k=\ker\gamma_k$, and $\operatorname{im}\gamma_k=\ker\alpha_{k-1}$. Put $r_k:=\dim_F\operatorname{im}\alpha_k$ and $s_k:=\dim_F\ker\gamma_k$; these are finite by [L1] and [L2], since $A_k,C_k$ are finite-dimensional. The maps retain the names $\alpha_k,\beta_k,\gamma_k$. [F1, L1, L2, given]

2.1 Rank-nullity for $\alpha_k:A_k\to B_k$ and $\gamma_k:C_k\to A_{k-1}$ gives $\dim_F A_k=a_k+r_k$ and $\dim_F C_k=s_k+a_{k-1}$. [L1, step 1.1]

3.1 Choose a finite basis $y_1,\ldots,y_m$ of $\operatorname{im}\beta_k=\ker\gamma_k$ and lifts $x_i\in B_k$ with $\beta_k(x_i)=y_i$. Then $B_k=\ker\beta_k+\operatorname{span}(x_1,\ldots,x_m)$: subtract the corresponding linear combination of the lifts from any element. The kernel has dimension $r_k$ by exactness and step 2.1, so this sum is finite-dimensional by [L3]. Rank-nullity now applies to $\beta_k$ and gives $\dim_F B_k=r_k+s_k$. Only finitely many lifts are chosen. [L1, L2, L3, step 1.1, step 2.1, choose]

4.1 The three dimension identities give $\dim_F A_k+\dim_F C_k-\dim_F B_k=a_k+a_{k-1}\ge0$. In particular the weak inequality holds. Outside $0\le k\le N$, exactness and $A_k=C_k=0$ force $B_k=0$. Also $a_N=0$, since exactness identifies $\ker\alpha_N$ with the image of the zero space $C_{N+1}$. [F1, step 2.1, step 3.1, algebra]

5.1 Set $Q(t)=\sum_{k=0}^N a_kt^k$. With $a_k=0$ outside this range, the coefficient of $(1+t)Q$ in degree $k$ is $a_k+a_{k-1}$; at degree $N+1$ it vanishes because $a_N=0$. Thus step 4.1 and coefficient comparison give $P_A+P_C=P_B+(1+t)Q$. Its coefficients are nonnegative integers. [F2, F3, step 4.1, algebra]

6.1 Telescoping gives $\sum_{i=0}^k(-1)^{k-i}(a_i+a_{i-1})=a_k$, since $a_{-1}=0$. This proves the partial-sum formula and identifies $q_k=a_k$. For negative $k$ read the sum as empty and set $q_k=0$. [step 4.1, step 5.1, algebra]

7.1 Finally, uniqueness of $Q$: if $(1+t)Q=0$ with $Q=\sum_kq_kt^k\in\mathbb Z[t]$, then by [F2] the coefficients satisfy $q_0=0$ and $q_k=-q_{k-1}$ for every $k\ge1$, so all $q_k=0$ and $Q=0$; hence two polynomials with $(1+t)Q=(1+t)Q'$ agree. [F2, F3, algebra] ∎

## Remarks

- **The vanishing convention.** The hypothesis that the sequence vanishes in degrees $k<0$ is the one used by the Morse applications, where the graded pieces are homology groups in nonnegative degrees; it is exactly what makes the alternating partial sums land on the coefficient $q_k$ of $Q$ without a leftover boundary term from below. The finite-range hypothesis gives the finite sums and the degree bound $N$.
- **Field versus ring coefficients.** The proof uses rank-nullity, which needs a field; over a general ring the numerical inequality can fail. This is the algebraic source of the coefficient-field dependence recorded on the examples page.
