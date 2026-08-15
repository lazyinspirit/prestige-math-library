---
id: cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial
kind: corollary
title: "If the minimal polynomial splits, $V$ is the direct sum of the stabilised generalised eigenspaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primary-decomposition-for-an-endomorphism, def-primary-component-and-generalised-eigenspace, def-polynomials-that-split-and-splitting-fields, thm-bezout-identity-for-polynomials]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Anthony W. Knapp, Basic Algebra, 2nd ed., Ch. V, §5, Theorem 5.19'
      url: 'https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §8B, Theorem 8.22 (complex-field special case)'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space over an arbitrary field $F$; finite-dimensionality is what makes $\mu_T$ available at all, the minimal polynomial being defined only in that case. Suppose its minimal polynomial splits over $F$ as

$$\mu_T=\prod_{i<r}(x-\lambda_i)^{e_i},$$

with distinct $\lambda_i\in F$ and $e_i\ge1$. Then

$$V=\bigoplus_{i<r}G_{\lambda_i}^{(e_i)}(T).$$

For every $k\ge e_i$, $\ker(T-\lambda_iI)^k=G_{\lambda_i}^{(e_i)}(T)$, so these are the stabilised generalised eigenspaces. The zero space corresponds to the empty product and empty direct sum.

## Facts & Assumptions

**Given:** The displayed split factorisation of $\mu_T$ over $F$.

[L1] A nonzero polynomial splits over $F$ when it is a product of linear factors in $F[x]$, with repetitions allowed ([[def-polynomials-that-split-and-splitting-fields]]).

[L2] For an endomorphism of a **finite-dimensional** space, the irreducible-power factors of its minimal polynomial give a direct sum of their invariant kernels, and each restriction has exactly the corresponding factor as minimal polynomial ([[thm-primary-decomposition-for-an-endomorphism]]).

[L3] Coprime polynomials satisfy a Bézout identity ([[thm-bezout-identity-for-polynomials]]).

[L4] The generalised eigenspace of exponent $e$ is $G_\lambda^{(e)}(T)=\ker(T-\lambda I)^e$ ([[def-primary-component-and-generalised-eigenspace]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the irreducible factors are the distinct linear polynomials $x-\lambda_i$. Applying [L2] gives the displayed direct sum, and [L4] identifies its $i$-th summand with $G_{\lambda_i}^{(e_i)}(T)$. [L1, L2, L4]

2.1 Fix $i$ and $k\ge e_i$. The kernel of $(T-\lambda_iI)^k$ contains the $i$-th summand. On every other primary summand, $(x-\lambda_i)^k$ is coprime to $(x-\lambda_j)^{e_j}$; evaluating a Bézout identity from [L3] shows $(T-\lambda_iI)^k$ is invertible there. Hence its kernel contains no vector from the other summands. [step 1.1, L2, L3]

3.1 Thus the kernel at every $k\ge e_i$ is exactly $G_{\lambda_i}^{(e_i)}(T)$. If the factorisation is empty, [L2] gives $V=0$. [step 2.1, L2] ∎
