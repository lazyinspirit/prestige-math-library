---
id: thm-courant-fischer-min-max-principle
kind: theorem
title: "Courant-Fischer min-max principle for self-adjoint endomorphisms on finite-dimensional real inner product spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rayleigh-quotient, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-dimension-of-a-linear-subspace, thm-finite-dimensional-orthogonal-decomposition]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
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

[L3] For every subspace $S$ of a finite-dimensional inner product space, each vector has a unique decomposition into a vector of $S$ and a vector of $S^\perp$ ([[thm-finite-dimensional-orthogonal-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 Fix $1\le k\le n$. By [L1], choose an orthonormal eigenbasis $(e_1,\dots,e_n)$ with $Te_j=\lambda_je_j$. For every nonzero $v=\sum_j c_je_j$, one has $R_T(v)=\frac{\sum_j \lambda_j |c_j|^2}{\sum_j |c_j|^2}$, so on $U_k:=\operatorname{span}(e_1,\dots,e_k)$ every Rayleigh quotient is at least $\lambda_k$ and on $W_k:=\operatorname{span}(e_k,\dots,e_n)$ every Rayleigh quotient is at most $\lambda_k$; equality holds at $e_k$ in both cases. [L1, algebra]

1.2 The inner extrema exist on every nonzero subspace $S$. Define $P_Sv$ to be the $S$-component of the decomposition in [L3]; uniqueness makes $P_S$ linear, since the components of a sum or scalar multiple are the corresponding sums or scalar multiples of the components. The endomorphism $B:=P_S\circ T|_S$ is self-adjoint: for $x,y\in S$, orthogonality gives $\langle Bx,y\rangle=\langle Tx,y\rangle=\langle x,Ty\rangle=\langle x,By\rangle$. Also $R_B(x)=R_T(x)$ for nonzero $x\in S$. Apply [L1] to $B$ on $S$; the weighted-average calculation of step 1.1 shows that these quotients attain their minimum and maximum at eigenvectors for the smallest and largest eigenvalues of $B$. [L1, L3, step 1.1, algebra]

2.1 Let $W\subseteq V$ have dimension $n-k+1$ and choose a basis $(w_1,\dots,w_{n-k+1})$ of $W$. If $W\cap U_k=\{0\}$, a linear relation among $w_1,\dots,w_{n-k+1},e_1,\dots,e_k$ puts the sum of the $w_i$-terms in $W\cap U_k$, so both sums vanish and independence of each basis makes every coefficient zero. These $n+1$ vectors would therefore form a basis of their span, a subspace of dimension $n+1$, contradicting [L2]. Thus some nonzero $v\in W\cap U_k$ satisfies $R_T(v)\ge\lambda_k$ by step 1.1, so the attained maximum on $W$ from step 1.2 is at least $\lambda_k$. Since step 1.1 gives $\max_{0\ne v\in W_k}R_T(v)=\lambda_k$, the minimum over such subspaces is attained at $W_k$ and equals $\lambda_k$. [L2, step 1.1, step 1.2]

3.1 Let $U\subseteq V$ have dimension $k$ and choose a basis $(u_1,\dots,u_k)$ of $U$. If $U\cap W_k=\{0\}$, a linear relation among $u_1,\dots,u_k,e_k,\dots,e_n$ puts the sum of the $u_i$-terms in $U\cap W_k$, so both sums vanish and independence of each basis makes every coefficient zero. Their span would then have dimension $k+(n-k+1)=n+1$, again contradicting [L2]. Thus some nonzero $v\in U\cap W_k$ satisfies $R_T(v)\le\lambda_k$ by step 1.1, so the attained minimum on $U$ from step 1.2 is at most $\lambda_k$. Since step 1.1 gives $\min_{0\ne v\in U_k}R_T(v)=\lambda_k$, the maximum over such subspaces is attained at $U_k$ and equals $\lambda_k$. [L2, step 1.1, step 1.2] ∎
