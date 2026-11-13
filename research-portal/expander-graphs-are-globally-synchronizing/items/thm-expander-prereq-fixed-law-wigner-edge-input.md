---
id: thm-expander-prereq-fixed-law-wigner-edge-input
kind: theorem
title: A fixed-law Wigner spectral-edge input
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-asymptotic-quantifiers
  - def-expander-prereq-vertex-hilbert-space
  - math:def-independent-random-elements
  - math:def-moments-variance-and-covariance
  - math:def-probability-measure
  - math:def-random-element-and-real-random-variable
  - math:def-law-or-distribution-of-a-random-element
  - math:thm-complex-spectral-theorem-for-normal-endomorphisms
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
dependency_roles:
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  def-expander-prereq-vertex-hilbert-space: mathematical-premise
  math:def-independent-random-elements: mathematical-premise
  math:def-moments-variance-and-covariance: mathematical-premise
  math:def-probability-measure: mathematical-premise
  math:def-random-element-and-real-random-variable: mathematical-premise
  math:def-law-or-distribution-of-a-random-element: mathematical-premise
  math:thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Wigner random matrices with non-symmetrically distributed entries
      url: https://arxiv.org/pdf/math/0702035
      locator: Section 1, equation (1), Theorem 1.1 and Remark 1.1, PDF pages 1–2
      statement: For $A_N=N^{-1/2}(a_{ij})$ in the fixed-law model of equation (1),
        Theorem 1.1 gives
        $\lambda_{\max}(A_N)\le2\sigma+o(N^{-6/11+\varepsilon})$ with
        probability tending to one for every $\varepsilon>0$. Remark 1.1 gives
        the same bound for $\max_i|\lambda_i(A_N)|$.
      hypotheses: One compactly supported real law $\mu$, independent of $N$, with
        mean zero, variance $\sigma^2$ where $\sigma\ge0$, nonzero third moment,
        and $\int|x|^k\,d\mu(x)\le K^k$ for all integers $k\ge4$ with fixed
        $K>0$. The entries indexed by $i\le j$, including the diagonal, are
        independent with common law $\mu$; $a_{ji}=a_{ij}$.
      reading_limits: Checked the extracted PDF text of Section 1, equation (1),
        Theorem 1.1 and Remark 1.1 (PDF pages 1–2). The source proof was not
        reconstructed. PDF screenshots were unavailable. No extension to laws
        depending on N is imported; the norm identification is derived locally
        below.
dependency_level: 1
formulation_deps:
  - def-expander-prereq-asymptotic-quantifiers
  - def-expander-prereq-vertex-hilbert-space
  - math:def-independent-random-elements
  - math:def-moments-variance-and-covariance
  - math:def-probability-measure
  - math:def-random-element-and-real-random-variable
  - math:def-law-or-distribution-of-a-random-element
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
argument_deps:
  - def-expander-prereq-asymptotic-quantifiers
  - def-expander-prereq-vertex-hilbert-space
  - math:def-independent-random-elements
  - math:def-moments-variance-and-covariance
  - math:def-probability-measure
  - math:def-random-element-and-real-random-variable
  - math:def-law-or-distribution-of-a-random-element
  - math:thm-complex-spectral-theorem-for-normal-endomorphisms
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
proof_strategy: direct
---

## Statement

Let $\mu$ be one fixed compactly supported probability distribution on $\mathbb R$ with $\int x\,d\mu(x)=0$, $\int x^2\,d\mu(x)=\sigma^2$, and $\int x^3\,d\mu(x)\ne0$, where $\sigma\ge0$. Here compactly supported means that $\mu([-L,L])=1$ for some real $L>0$. Suppose that a constant $K>0$ satisfies $\int |x|^k\,d\mu(x)\le K^k$ for every integer $k\ge4$.

For each positive integer $N$, let the real random variables $a_{ij}$, $1\le i\le j\le N$, be independent and identically distributed with law $\mu$, and put $a_{ji}=a_{ij}$ for $i<j$. Set $M_N=(a_{ij})$ and $A_N=N^{-1/2}M_N$. The spectral norm here is $\|A_N\|=\sup\{\|A_Nv\|_2:v\in\mathbb C^N,\ \|v\|_2=1\}$.

For every $\varepsilon>0$ there is a deterministic real sequence $r_N=o(N^{-6/11+\varepsilon})$ such that $\mathbb P(\|A_N\|\le2\sigma+r_N)\to1$ as $N\to\infty$. The probability spaces may vary with $N$, but the law $\mu$ and its moment bound are fixed.

## Statement references

[[def-expander-prereq-asymptotic-quantifiers]]

[[def-expander-prereq-vertex-hilbert-space]]

[[math:def-independent-random-elements]]

[[math:def-moments-variance-and-covariance]]

[[math:def-probability-measure]]

[[math:def-random-element-and-real-random-variable]]

[[math:def-law-or-distribution-of-a-random-element]]

[[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]

## External input

Péché and Soshnikov, Section 1, equation (1), Theorem 1.1 and Remark 1.1, supply the fixed-law bound for $\max_i|\lambda_i(A_N)|$. No local proof of the imported estimate is claimed. This input alone supplies no uniform estimate for a law varying with $N$. The proof below only identifies this eigenvalue bound with the norm in the Statement.

## Facts & Assumptions

[F1] The vertex space $\mathbb C^N$ is finite-dimensional, has the displayed Euclidean norm, and represents the adjoint by conjugate transpose; real symmetric matrices are self-adjoint. The library and vertex inner-product conventions have the same norm and orthogonality. [[def-expander-prereq-vertex-hilbert-space]]

[F2] A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis. [[math:thm-complex-spectral-theorem-for-normal-endomorphisms]]

[F3] On a nonzero finite-dimensional inner product space, the operator norm is the maximum of $\|Tv\|_2$ over unit vectors $v$. [[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[F4] For the fixed law and the independent identically distributed entries including the diagonal specified in the Statement, the imported Theorem 1.1 and Remark 1.1 give, for every $\varepsilon>0$, a deterministic $r_N=o(N^{-6/11+\varepsilon})$ with $\mathbb P(\max_j|\lambda_j(A_N)|\le2\sigma+r_N)\to1$.

## Proof

**Given:** The law, matrices and hypotheses in the Statement, and $\varepsilon>0$.

**Goal:** Establish the conclusion in the statement.

1.1 Fix $N\ge1$ and a realization of $A_N$. By [F1], $A_N=A_N^*$, so $A_NA_N^*=A_N^*A_N$: the endomorphism is normal, meaning that it commutes with its adjoint. Thus [F2] applies and gives an orthonormal eigenbasis $u_1,\ldots,u_N$, unchanged by the convention transfer in [F1]. Put $m_N=\max_j|\lambda_j(A_N)|$. For $v=\sum_jc_ju_j$ with $\|v\|_2=1$, orthonormality gives $\sum_j|c_j|^2=1$ and $\|A_Nv\|_2^2=\sum_j|\lambda_j(A_N)|^2|c_j|^2\le m_N^2$. A unit eigenvector attaining this finite maximum gives equality. Consequently [F3] gives $\|A_N\|=m_N$; the same attained maximum equals the supremum used in the Statement. [F1, F2, F3, algebra]

2.1 The law, its moments and its moment bound are fixed independently of $N$, and all upper-triangular entries, including the diagonal, have that law independently. These are exactly the model hypotheses of [F4]. Choose its sequence $r_N$. The pointwise identity in step 1.1 makes the events $\{\|A_N\|\le2\sigma+r_N\}$ and $\{m_N\le2\sigma+r_N\}$ equal for every $N$. Their probabilities therefore have the limit in [F4], proving the Statement with its fixed-law scope. [given, F4, step 1.1] ∎
