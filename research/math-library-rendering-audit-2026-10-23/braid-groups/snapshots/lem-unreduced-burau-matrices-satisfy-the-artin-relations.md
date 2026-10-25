---
id: lem-unreduced-burau-matrices-satisfy-the-artin-relations
kind: lemma
title: "The unreduced Burau matrices satisfy the Artin relations"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
  - def-unreduced-burau-matrices
  - def-ring-matrix-product-identity-and-transpose
  - thm-ring-matrix-arithmetic-laws
  - def-braid-group-by-the-artin-presentation
  - thm-von-dyck
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), section 2 (printed pp. 1-5)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Section 2, printed pp. 1-5"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

The matrices $B_1,\dots,B_{n-1}\in\operatorname{GL}_n(\Lambda_1)$ of
[[def-unreduced-burau-matrices]] satisfy
$B_iB_{i+1}B_i=B_{i+1}B_iB_{i+1}$ for $1\le i\le n-2$ and
$B_iB_j=B_jB_i$ for $|i-j|\ge2$. Consequently, by von Dyck, the assignment
$\sigma_i\mapsto B_i$ extends uniquely to a group homomorphism
$$\rho^{\mathrm{mat}}_n:B_n\longrightarrow\operatorname{GL}_n(\Lambda_1)$$
from the presented braid group of
[[def-braid-group-by-the-artin-presentation]]. No choice principle is used.

## Facts & Assumptions

**Given:** $n\ge1$, the ring $\Lambda_1=\mathbb Z[t^{\pm1}]$, and the matrices $B_1,\dots,B_{n-1}$ of [[def-unreduced-burau-matrices]].

[F1] $B_i$ is the identity outside rows and columns $i,i+1$, and its $2\times2$ block there is $\begin{pmatrix}1-t&t\\1&0\end{pmatrix}$; each $B_i$ is invertible ([[def-unreduced-burau-matrices]]).

[F2] Matrix product is entrywise summation, $(AB)_{pq}=\sum_kA_{pk}B_{kq}$, with the identity matrix as unit and the usual associativity and distributivity laws ([[def-ring-matrix-product-identity-and-transpose]], [[thm-ring-matrix-arithmetic-laws]]).

[F3] The Artin presentation of $B_n$ has generators $\sigma_1,\dots,\sigma_{n-1}$ and the relations $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ and, for $|i-j|>1$, $\sigma_i\sigma_j=\sigma_j\sigma_i$; a generator assignment satisfying these relations extends uniquely to a homomorphism (von Dyck) ([[def-braid-group-by-the-artin-presentation]], [[thm-von-dyck]]).

## Proof

**Proof technique:** direct.

1.1 *Far commutation.* Write $B_i=I+M_i$, where $M_i=B_i-I$ is supported in rows and columns $\{i,i+1\}$; by [F1] every nonzero entry of $M_i$ has both indices in that pair. If $|i-j|\ge2$, the index sets $\{i,i+1\}$ and $\{j,j+1\}$ are disjoint; for any $p,q$ and any $k$, not both $M_i(p,k)\ne0$ (which forces $p,k\in\{i,i+1\}$) and $M_j(k,q)\ne0$ can hold, so $(M_iM_j)_{pq}=0$ and $(M_jM_i)_{pq}=0$ by the product formula [F2]. Hence $B_iB_j=(I+M_i)(I+M_j)=I+M_i+M_j=B_jB_i$. [F1, F2]

1.2 *The braid relation.* First compute in the $3\times3$ case: with $B_1^{(3)}=\begin{pmatrix}1-t&t&0\\1&0&0\\0&0&1\end{pmatrix}$ and $B_2^{(3)}=\begin{pmatrix}1&0&0\\0&1-t&t\\0&1&0\end{pmatrix}$, direct entrywise multiplication [F2] gives $$B_1^{(3)}B_2^{(3)}B_1^{(3)}=\begin{pmatrix}1-t&t-t^2&t^2\\1-t&t&0\\1&0&0\end{pmatrix}=B_2^{(3)}B_1^{(3)}B_2^{(3)}.$$ For general $i$, the matrices $B_i$ and $B_{i+1}$ are the identity outside rows and columns $\{i,i+1,i+2\}$, and on that block they equal $B_1^{(3)}$ and $B_2^{(3)}$ respectively; since the identity part acts trivially on the complementary rows and columns, the product formula [F2] gives that $B_iB_{i+1}B_i$ and $B_{i+1}B_iB_{i+1}$ have the displayed block on $\{i,i+1,i+2\}$ and the identity elsewhere. Hence $B_iB_{i+1}B_i=B_{i+1}B_iB_{i+1}$. [F1, F2, algebra]

2.1 *Von Dyck.* Steps 1.1 and 1.2 verify exactly the defining relations of the Artin presentation [F3] under the assignment $\sigma_i\mapsto B_i$; von Dyck's theorem therefore yields a unique homomorphism $\rho^{\mathrm{mat}}_n:B_n\to\operatorname{GL}_n(\Lambda_1)$ with $\rho^{\mathrm{mat}}_n(\sigma_i)=B_i$. Its values are products of the invertible matrices $B_i$ and their inverses, hence lie in $\operatorname{GL}_n(\Lambda_1)$ by [F1], so $\rho^{\mathrm{mat}}_n$ takes values in $\operatorname{GL}_n(\Lambda_1)$. No choice principle is used. [F1, F3, step 1.1, step 1.2] ∎
