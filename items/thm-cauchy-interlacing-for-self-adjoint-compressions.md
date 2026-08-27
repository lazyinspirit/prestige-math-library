---
id: thm-cauchy-interlacing-for-self-adjoint-compressions
kind: theorem
title: "The eigenvalues of the orthogonal compression of a self-adjoint endomorphism to a hyperplane interlace those of the original endomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-orthogonal-projection, thm-finite-dimensional-orthogonal-decomposition, thm-courant-fischer-min-max-principle]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Christoph Helmberg et al., An interlacing property of the signless Laplacian of threshold graphs"
      url: "https://arxiv.org/pdf/2308.12654"
---

## Statement

Let $T:V\to V$ be self-adjoint on an $n$-dimensional real inner product space,
let $W\subset V$ be a hyperplane, and let

$$C:=P_W\circ T|_W:W\to W$$

be the orthogonal compression, where $P_W$ is the orthogonal projection onto
$W$. If the eigenvalues of $T$ and $C$ are ordered by

$$\lambda_1\ge\cdots\ge\lambda_n,\qquad \mu_1\ge\cdots\ge\mu_{n-1},$$

then

$$\lambda_i\ge\mu_i\ge\lambda_{i+1}\qquad(1\le i\le n-1).$$

## Facts & Assumptions

**Given:** A self-adjoint endomorphism $T:V\to V$ on an $n$-dimensional real inner product space, a hyperplane $W\subset V$, and its orthogonal projection $P_W$.

[L1] Every vector decomposes uniquely as a vector in $W$ plus a vector in $W^\perp$ ([[thm-finite-dimensional-orthogonal-decomposition]], [[def-orthogonal-projection]]).

[L2] Courant-Fischer characterises the ordered eigenvalues of a self-adjoint operator by min-max formulas ([[thm-courant-fischer-min-max-principle]]).

## Proof

**Proof technique:** direct.

1.1 For $u,v\in W$, the decomposition in [L1] gives $\langle P_WTu,v\rangle=\langle Tu,v\rangle=\langle u,Tv\rangle=\langle u,P_WTv\rangle$, so $C$ is self-adjoint on $W$. Also $R_C(u)=\frac{\langle Cu,u\rangle}{\langle u,u\rangle}=\frac{\langle Tu,u\rangle}{\langle u,u\rangle}=R_T(u)$ for every nonzero $u\in W$. [L1, algebra]

2.1 For any $1\le i\le n-1$, Courant-Fischer in $W$ and step 1.1 give $\mu_i=\max_{\dim U=i,\ U\subseteq W}\min_{0\ne u\in U}R_C(u)=\max_{\dim U=i,\ U\subseteq W}\min_{0\ne u\in U}R_T(u)\le\lambda_i$, because the maximisation is over fewer $i$-dimensional subspaces than in [L2]. Likewise $\mu_i=\min_{\dim L=n-i,\ L\subseteq W}\max_{0\ne u\in L}R_C(u)=\min_{\dim L=n-i,\ L\subseteq W}\max_{0\ne u\in L}R_T(u)\ge\lambda_{i+1}$, because $n-i=(n-1)-i+1$ is the subspace dimension appearing in Courant-Fischer for the $(i+1)$-st eigenvalue of $T$. Hence $\lambda_i\ge\mu_i\ge\lambda_{i+1}$. [L2, step 1.1] ∎
