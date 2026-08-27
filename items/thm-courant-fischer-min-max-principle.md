---
id: thm-courant-fischer-min-max-principle
kind: theorem
title: "Courant-Fischer min-max principle for self-adjoint endomorphisms on finite-dimensional real inner product spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rayleigh-quotient, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-dimension-of-a-linear-subspace]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.409, Lecture 3: Courant-Fischer and Rayleigh quotients"
      url: "https://ocw.mit.edu/courses/18-409-topics-in-theoretical-computer-science-an-algorithmists-toolkit-fall-2009/535add3f6457cc13e51d9774f16bf48f_MIT18_409F09_scribe3.pdf"
---

## Statement

Let $T:V\to V$ be self-adjoint on an $n$-dimensional real inner product space,
and list its eigenvalues in weakly decreasing order:

$$\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_n.$$

Then for every $1\le k\le n$,

$$\lambda_k=\min_{\dim W=n-k+1}\ \max_{0\ne v\in W} R_T(v)=\max_{\dim U=k}\ \min_{0\ne v\in U} R_T(v).$$

## Facts & Assumptions

**Given:** A self-adjoint endomorphism $T:V\to V$ of an $n$-dimensional real inner product space.

[L1] A self-adjoint operator has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[L2] A subspace of an $n$-dimensional vector space cannot have dimension greater than $n$ ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose an orthonormal eigenbasis $(e_1,\dots,e_n)$ with $Te_j=\lambda_je_j$. For every nonzero $v=\sum_j c_je_j$, one has $R_T(v)=\frac{\sum_j \lambda_j |c_j|^2}{\sum_j |c_j|^2}$, so on $U_k:=\operatorname{span}(e_1,\dots,e_k)$ every Rayleigh quotient is at least $\lambda_k$ and on $W_k:=\operatorname{span}(e_k,\dots,e_n)$ every Rayleigh quotient is at most $\lambda_k$; equality holds at $e_k$ in both cases. [L1, algebra]

2.1 Let $W\subseteq V$ have dimension $n-k+1$. If $W\cap U_k=\{0\}$, then $W\subseteq U_k^\perp=\operatorname{span}(e_{k+1},\dots,e_n)$, whose dimension is $n-k$, contradicting [L2]. Thus some nonzero $v\in W\cap U_k$ satisfies $R_T(v)\ge\lambda_k$ by step 1.1, so $\max_{0\ne v\in W}R_T(v)\ge\lambda_k$. Since step 1.1 also gives $\max_{0\ne v\in W_k}R_T(v)=\lambda_k$, the first Courant-Fischer equality follows. [L2, step 1.1]

3.1 Let $U\subseteq V$ have dimension $k$. If $U\cap W_k=\{0\}$, then $U\subseteq W_k^\perp=\operatorname{span}(e_1,\dots,e_{k-1})$, whose dimension is $k-1$, contradicting [L2]. Thus some nonzero $v\in U\cap W_k$ satisfies $R_T(v)\le\lambda_k$ by step 1.1, so $\min_{0\ne v\in U}R_T(v)\le\lambda_k$. Since step 1.1 also gives $\min_{0\ne v\in U_k}R_T(v)=\lambda_k$, the second Courant-Fischer equality follows. [L2, step 1.1] ∎
