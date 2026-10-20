---
id: alg-cauchy-matvec-at-roots-of-unity
kind: algorithm
title: Exact Cauchy matrix-vector product on a radix-two root grid
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [alg-radix-two-fft]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Pan, Fast Approximate Computations with Cauchy Matrices and Polynomials, §§3.2–3.3"
      url: "https://arxiv.org/pdf/1506.02285"
---

## Definition

Input an integer $M=2^q$ with $q\ge0$, a primitive $M$th root of unity $\omega$, a finite list of poles $\mu_1,\ldots,\mu_n\in\mathbb C$, and weights $a_1,\ldots,a_n\in\mathbb C$. The required output is $y_k=\sum_{j=1}^n a_j/(\omega^k-\mu_j)$ for $0\le k<M$, provided no denominator is zero. If $n=0$, return the zero vector.

Here a primitive $M$th root means $\omega^M=1$ and $\omega^k\ne1$ for $1\le k<M$. For $n\ge1$, form a balanced binary tree on the pole indices, splitting each consecutive index interval into two intervals whose sizes differ by at most one. At a leaf containing index $j$, store polynomials $D_j(z)=z-\mu_j$ and $P_j(z)=a_j$. At an internal node with disjoint child index sets $I_1,I_2$, store
$$ D_I(z)=D_{I_1}(z)D_{I_2}(z),\qquad P_I(z)=P_{I_1}(z)D_{I_2}(z)+D_{I_1}(z)P_{I_2}(z). $$
At the root, fold the coefficients of each polynomial modulo $z^M-1$: the coefficient at degree $r$ is replaced by the sum of coefficients at degrees congruent to $r$ modulo $M$. Let $\omega_0=e^{-2\pi i/M}$, which equals $1$ when $M=1$. Apply the radix-two DFT procedure to each folded coefficient vector to evaluate $P_I$ and $D_I$ at $\omega_0^j$, $0\le j<M$. If $M>1$, find the unique odd integer $s\in\{1,3,\ldots,M-1\}$ with $\omega=\omega_0^s$ by generating and comparing the $M$ powers of $\omega_0$, then place the value at index $sk\bmod M$ at output index $k$; this is the supplied root order because $\omega^k=\omega_0^{sk}$. For $M=1$, the only root is $1$ and no reindexing is needed. This root search and reindexing use $O(M)$ operations. If some reindexed $D_I(\omega^k)=0$, return status `collision`; otherwise return $y_k=P_I(\omega^k)/D_I(\omega^k)$.

## Definition references

[Pan, “Fast Approximate Computations with Cauchy Matrices and Polynomials,” §§3.2–3.3](https://arxiv.org/pdf/1506.02285)

[[alg-radix-two-fft]]
