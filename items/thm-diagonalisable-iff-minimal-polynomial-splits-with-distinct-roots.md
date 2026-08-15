---
id: thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots
kind: theorem
title: "An endomorphism is diagonalisable if and only if its minimal polynomial is a product of distinct linear factors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimal-polynomial-is-well-defined-and-controls-annihilators, def-polynomial-evaluation-at-an-endomorphism, cor-factor-theorem-over-a-commutative-ring, thm-primary-decomposition-for-an-endomorphism, thm-diagonalisability-eigenspace-direct-sum-criterion]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Theorem 4.11'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
    - title: 'Anthony W. Knapp, Basic Algebra, 2nd ed., Ch. V, §3, Theorem 5.14'
      url: 'https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'
pipeline_run: null
---

## Statement

An endomorphism $T$ of a finite-dimensional vector space over $F$ is diagonalisable if and only if

$$\mu_T=\prod_{i<r}(x-\lambda_i)$$

for a finite list of distinct scalars $\lambda_i\in F$. For the zero space this is the empty product $\mu_T=1$.

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T:V\to V$.

[L1] A polynomial annihilates $T$ exactly when it is divisible by $\mu_T$ ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

[L2] If $p(x)=\sum_{k\ge0}a_kx^k$, then $p(T)=\sum_{k\ge0}a_kT^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).

[L3] For a polynomial over a field, $p(\lambda)=0$ exactly when $x-\lambda$ divides $p$ ([[cor-factor-theorem-over-a-commutative-ring]]).

[L4] Irreducible-power factors of $\mu_T$ give the primary direct-sum decomposition ([[thm-primary-decomposition-for-an-endomorphism]]).

[L5] Diagonalisability is equivalent to $V$ being a direct sum of eigenspaces ([[thm-diagonalisability-eigenspace-direct-sum-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $T$ is diagonalisable, and let $\lambda_0,\ldots,\lambda_{r-1}$ be its distinct eigenvalues. On an eigenbasis the polynomial $p=\prod_i(x-\lambda_i)$ vanishes entrywise, so $p(T)=0$ and [L1] gives $\mu_T\mid p$. [L5, L1, algebra]

1.2 Conversely, suppose $\mu_T$ is the displayed product of distinct linear factors. In [L4] every exponent is one, so its primary summands are $\ker(T-\lambda_iI)=E_{\lambda_i}(T)$. Thus $V$ is their direct sum, and [L5] makes $T$ diagonalisable. [L4, L5]

2.1 For each $i$, choose a nonzero eigenvector $v_i$ for $\lambda_i$. Formula [L2] and induction give $\mu_T(T)v_i=\mu_T(\lambda_i)v_i$; the left side is zero by [L1], so $\mu_T(\lambda_i)=0$. By [L3], every distinct factor $x-\lambda_i$ of $p$ divides $\mu_T$. Together with step 1.1 and monicity, this gives $\mu_T=p$. [step 1.1, L1, L2, L3, choose, algebra]

3.1 Steps 2.1 and 1.2 prove both directions. When $V=0$, the empty basis gives $\mu_T=1$ by [L1]. [step 2.1, step 1.2, L1] ∎
