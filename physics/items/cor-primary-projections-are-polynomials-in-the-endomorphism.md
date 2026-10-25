---
id: cor-primary-projections-are-polynomials-in-the-endomorphism
kind: corollary
title: "Each projection in the primary decomposition is a polynomial in the endomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primary-decomposition-for-an-endomorphism, thm-bezout-identity-for-polynomials, def-polynomial-evaluation-at-an-endomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Anthony W. Knapp, Basic Algebra, 2nd ed., Ch. V, §5, Theorem 5.19'
      url: 'https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'
pipeline_run: null
---

## Statement

In the primary decomposition $V=\bigoplus_{i<r}V_i$ associated with $\mu_T=\prod_{i<r}f_i$, the projection $E_i:V\to V_i$ along the other primary components is a polynomial in $T$. More precisely, if $g_i=\mu_T/f_i$ and $a_if_i+b_ig_i=1$, then

$$E_i=b_i(T)g_i(T).$$

## Facts & Assumptions

**Given:** The primary decomposition and the polynomials $f_i,g_i$ in the Statement.

[L1] The irreducible-power factors of $\mu_T$ give the direct sum $V=\bigoplus_i\ker f_i(T)$ ([[thm-primary-decomposition-for-an-endomorphism]]).

[L2] Coprime polynomials satisfy a Bézout identity ([[thm-bezout-identity-for-polynomials]]).

[L3] Polynomial evaluation sends $p(x)=\sum a_kx^k$ to the endomorphism $p(T)=\sum a_kT^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 The polynomials $f_i$ and $g_i$ are coprime, so choose $a_i,b_i$ with $a_if_i+b_ig_i=1$ by [L2], and set $E_i=b_i(T)g_i(T)$ using [L3]. [L2, L3, choose, construct]

2.1 On $V_i=\ker f_i(T)$ the evaluated Bézout identity gives $E_i=I$. On $V_j$ for $j\ne i$, the polynomial $g_i$ is divisible by $f_j$, so $E_i=0$. [step 1.1, L1, algebra]

3.1 By the unique decomposition in [L1], the operator described in step 2.1 is exactly projection onto $V_i$ along the sum of the other components. [step 2.1, L1] ∎
