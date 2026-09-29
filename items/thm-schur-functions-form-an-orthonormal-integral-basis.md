---
id: thm-schur-functions-form-an-orthonormal-integral-basis
kind: theorem
title: Schur functions form an orthonormal integral basis
status: published
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
  - def-dominance-order-on-partitions
  - thm-jacobi-trudi-and-dual-jacobi-trudi-identities
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - thm-cauchy-kernel-has-power-complete-and-schur-expansions
  - def-hall-inner-product-on-symmetric-functions
justified_by: []
landmark: false
proof_strategy: triangularity
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §3, equations (3.2)–(3.4), printed pp. 41–42; §4, equations (4.5)–(4.8), printed pp. 63–64
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §§9.9–9.10, printed pp. 191–200
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Statement

For every $d\ge0$, the stable Schur functions $\{s_\lambda:\lambda\vdash d\}$
form a $\mathbb Z$-basis of $\Lambda^d$ and are orthonormal for the Hall form:
$$\langle s_\lambda,s_\mu\rangle_H=\delta_{\lambda\mu}$$
for all partitions $\lambda,\mu$.

## Facts & Assumptions

**Given:** The degreewise stable ring, partition indexing and dominance order, the Jacobi–Trudi determinant, the integral $h$-basis, the Cauchy expansions, and the defining Hall duality.

[F1] The stable ring is graded, with homogeneous components $\Lambda^d$ and algebraic direct sum $\Lambda=\bigoplus_{d\ge0}\Lambda^d$ ([[def-stable-graded-ring-of-symmetric-functions]]).

[F2] A partition of $d$ is a finite weakly decreasing sequence of positive integers with sum $d$; its length is its number of parts, and $\varnothing$ is the sole partition of zero ([[def-partition-young-diagram-and-conjugate-partition]]).

[F3] For partitions of the same integer, $\nu\unrhd\lambda$ exactly when every prefix sum of $\nu$ is at least the corresponding prefix sum of $\lambda$; strict dominance means $\nu\unrhd\lambda$ and $\nu\ne\lambda$ ([[def-dominance-order-on-partitions]]).

[F4] For each $d\ge0$, the products $h_\lambda$ indexed by $\lambda\vdash d$ form a $\mathbb Z$-basis of $\Lambda^d$ ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F5] For any $r\ge\ell(\lambda)$, $s_\lambda=\det(h_{\lambda_i-i+j})_{1\le i,j\le r}$, with zero padding, $h_0=1$, $h_k=0$ for $k<0$, and the empty determinant equal to $1$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

[F6] In the bidegree completion, $\Omega(x,y)=\sum_\alpha h_\alpha(x)m_\alpha(y)=\sum_\lambda s_\lambda(x)s_\lambda(y)$, with both sums taken by diagonal bidegree ([[thm-cauchy-kernel-has-power-complete-and-schur-expansions]]).

[F7] The Hall form is graded and satisfies $\langle h_\alpha,m_\beta\rangle_H=\delta_{\alpha\beta}$ ([[def-hall-inner-product-on-symmetric-functions]]).

## Proof

**Proof technique:** triangularity.

1.1 Fix $\lambda\vdash d$ with $n=\ell(\lambda)>0$ and apply [F5] with $r=n$. In the determinant expansion, a permutation $\sigma\in S_n$ contributes $\operatorname{sgn}(\sigma)\prod_i h_{\alpha_i}$, where $\alpha_i=\lambda_i-i+\sigma(i)$. If some $\alpha_i<0$, that term is zero by [F5]; otherwise $\sum_i\alpha_i=d$, and sorting the nonnegative $\alpha_i$ and omitting zeros gives a partition $\nu\vdash d$ with $\prod_i h_{\alpha_i}=h_\nu$. The identity permutation contributes $h_\lambda$ with coefficient one. For $\sigma\ne\mathrm{id}$, some initial set $\{1,\ldots,k\}$ is not preserved, so $\sum_{i\le k}\sigma(i)>\sum_{i\le k}i$; for every $k$, the same sum is at least $\sum_{i\le k}i$. Hence $\sum_{i\le k}\alpha_i\ge\sum_{i\le k}\lambda_i$ for all $k$, strictly for some $k$. Sorting the nonnegative $\alpha_i$ can only increase each prefix sum, so every nonzero nonidentity term has $\nu\rhd\lambda$. [F2, F3, F5, algebra]

2.1 For $d>0$, combine equal terms in step 1.1 to write $s_\lambda=\sum_{\nu\vdash d}c_{\lambda\nu}h_\nu$, where $c_{\lambda\lambda}=1$ and $c_{\lambda\nu}=0$ unless $\nu=\lambda$ or $\nu\rhd\lambda$. The dominance poset of the finite set of partitions of $d$ has a linear extension (successively remove a minimal element), making this coefficient matrix triangular with diagonal one. Its off-diagonal part is nilpotent, so the finite inverse $I-N+N^2-\cdots$ has integer entries. Thus the $s_\lambda$ form a $\mathbb Z$-basis because the $h_\nu$ do by [F4]. For $d=0$, [F2] gives only $\varnothing$, and [F5] gives $s_\varnothing=1$, the basis of $\Lambda^0=\mathbb Z$. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 Fix $d\ge0$ and index the finite partition set by $P_d$. The basis result of step 2.1 and the $h$-basis [F4] give invertible rational matrices $A,B$ with $s_\lambda=\sum_{\alpha\in P_d}A_{\lambda\alpha}h_\alpha=\sum_{\beta\in P_d}B_{\lambda\beta}m_\beta$. Comparing the two degree-$(d,d)$ Cauchy expansions in [F6] gives $A^{\mathsf T}B=I$. By [F7], the pairing matrix is $(\langle s_\lambda,s_\mu\rangle_H)_{\lambda,\mu}=AB^{\mathsf T}=I$, since $B=(A^{\mathsf T})^{-1}$. This proves orthonormality without assuming symmetry of the Hall form. In degree zero both bases consist of $1$, so the pairing is $\langle1,1\rangle_H=1$; in degree one, $s_{(1)}=h_1$ and the same kernel calculation gives $\langle s_{(1)},s_{(1)}\rangle_H=1$. [F1, F4, F6, F7, step 2.1, algebra]

4.1 If $|\lambda|\ne|\mu|$, gradedness in [F7] gives zero pairing, and bilinearity makes any zero input pair to zero. The proof treats the least degree $d=0$, the minimal Jacobi–Trudi size $n=\ell(\lambda)$, and every finite partition set at each $d$. The determinant terms, matrix inverse, and linear extension of a finite poset use only finite operations; no form of the axiom of choice is used. [F1, F2, F5, F7, algebra] ∎
