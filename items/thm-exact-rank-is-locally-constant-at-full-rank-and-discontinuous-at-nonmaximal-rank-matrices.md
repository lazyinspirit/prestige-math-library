---
id: thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices
kind: theorem
title: "Exact rank is locally constant at full-rank matrices and discontinuous at nonmaximal-rank matrices"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison, thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity, cor-rank-equals-number-of-nonzero-singular-values, thm-singular-value-decomposition]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Nearness Problems"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-15.html"
---



## Statement

Let $m,n\in\mathbb{N}$ with $m\ge 1$ and $n\ge 1$, let
$A\in M_{m\times n}(\mathbb{R})$, let $k:=\min(m,n)$, and let
$\lVert\cdot\rVert_2$ be the spectral norm.

1. **Locally constant at full rank.** If $\operatorname{rank}A=k$ and
   $\sigma_k$ is the smallest singular value of $A$ (which is positive), then
   every $B\in M_{m\times n}(\mathbb{R})$ with $\lVert B-A\rVert_2<\sigma_k$
   satisfies $\operatorname{rank}B=k$.
2. **Discontinuous at nonmaximal rank.** If $\operatorname{rank}A=r<k$, then
   for every $\varepsilon>0$ there is $B\in M_{m\times n}(\mathbb{R})$ with
   $\lVert B-A\rVert_2<\varepsilon$ and $\operatorname{rank}B=r+1$.

## Facts & Assumptions

**Given:** Natural numbers $m,n\ge 1$, a matrix $A\in M_{m\times n}(\mathbb{R})$ with rank $r$ and singular values $\sigma_1\ge\cdots\ge\sigma_r>0$, and $k=\min(m,n)$.

[L1] There is a singular value decomposition $A=U\Sigma V^{\mathsf T}$ with orthogonal $U,V$ and diagonal $\Sigma$; likewise every matrix $B\in M_{m\times n}(\mathbb{R})$ admits one ([[thm-singular-value-decomposition]]).

[L2] The rank of a matrix is the number of its positive singular values ([[cor-rank-equals-number-of-nonzero-singular-values]]).

[L3] The spectral norm of a matrix equals its largest singular value, and $\lVert My\rVert_2\le\lVert M\rVert_2\lVert y\rVert_2$ for every vector $y$ ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

## Proof

**Proof technique:** direct.

1.1 If $\operatorname{rank}A=k$, then by [L2] there are exactly $k$ positive singular values, so the smallest one, $\sigma_k$, is positive. [L2]

1.2 Full-column-rank lower bound. Suppose $n\le m$ and $B\in M_{m\times n}(\mathbb R)$ has singular values $\tau_1\ge\cdots\ge\tau_n$. Writing a unit vector $x$ in the right-singular basis of the decomposition from [L1] gives $\lVert Bx\rVert_2^{2}=\sum_{j<n}\tau_j^{2}\lvert(V^{\mathsf T}x)_j\rvert^{2}\ge\tau_n^{2}$, attained at the last right-singular vector. Hence $\tau_n=\min_{\lVert x\rVert_2=1}\lVert Bx\rVert_2$. [L1, algebra]

1.3 Suppose $\operatorname{rank}A=r<k$; then both $r<m$ and $r<n$, so the decomposition of [L1] has a left singular vector $u_{r+1}\in\mathbb{R}^{m}$ and a right singular vector $v_{r+1}\in\mathbb{R}^{n}$ beyond the positive singular values. [L1, given, algebra]

1.4 For $\varepsilon>0$ put $B_{\varepsilon}:=A+\varepsilon\,u_{r+1}v_{r+1}^{\mathsf T}$. Then $B_{\varepsilon}=U\bigl(\Sigma+\varepsilon\,e_{r+1}e_{r+1}^{\mathsf T}\bigr)V^{\mathsf T}$ is a singular value decomposition of $B_{\varepsilon}$ with positive singular values $\sigma_1,\dots,\sigma_r,\varepsilon$, so by [L2] $\operatorname{rank}B_{\varepsilon}=r+1$. [L1, L2, algebra, construct]

2.1 Assume first that $\operatorname{rank}A=k$ and $n\le m$. Applying step 1.2 to $A$ gives $\lVert Ax\rVert_2\ge\sigma_k$ for every unit vector $x$, and [L3] gives $\lVert Ex\rVert_2\le\lVert E\rVert_2$ for $E:=B-A$; so $\lVert Bx\rVert_2=\lVert Ax+Ex\rVert_2\ge\lVert Ax\rVert_2-\lVert Ex\rVert_2\ge\sigma_k-\lVert E\rVert_2$. If $\lVert E\rVert_2<\sigma_k$, then $\lVert Bx\rVert_2>0$ for every unit vector $x$, so step 1.2 applied to $B$ gives its smallest singular value $\tau_n>0$. Therefore [L2] gives $\operatorname{rank}B=n=k$. [step 1.2, L2, L3, algebra]

2.2 Fix $\varepsilon>0$ and set $\eta:=\varepsilon/2$. Step 1.4 gives $\operatorname{rank}B_{\eta}=r+1$. By [L3], the spectral norm of $\eta\,u_{r+1}v_{r+1}^{\mathsf T}$ is $\eta$ times the largest singular value of the rank-one matrix $u_{r+1}v_{r+1}^{\mathsf T}$, whose only positive singular value is $1$; hence $\lVert B_{\eta}-A\rVert_2=\eta<\varepsilon$. This proves the discontinuity claim. [step 1.4, L3, algebra]

3.1 Assume next that $\operatorname{rank}A=k$ and $m<n$. Then $A^{\mathsf T}$ has full column rank $m$ and the same positive singular values as $A$ by [L1], so its smallest singular value is again $\sigma_k$. The same transpose relation holds for $B^{\mathsf T}$, and [L3] gives $\lVert B^{\mathsf T}-A^{\mathsf T}\rVert_2=\lVert B-A\rVert_2$. Applying step 2.1 to $A^{\mathsf T}$ and $B^{\mathsf T}$ yields $\operatorname{rank}B^{\mathsf T}=m$, hence $\operatorname{rank}B=m=k$. [L1, L3, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 prove the local-constancy claim. [step 2.1, step 3.1]

5.1 Claim 1 is step 4.1 and claim 2 is step 2.2. [step 4.1, step 2.2] ∎
