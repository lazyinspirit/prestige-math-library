---
id: thm-complex-polynomials-and-rational-functions-are-holomorphic
kind: theorem
title: "Complex polynomials are entire with the power-rule derivative, and rational functions are holomorphic wherever their denominator is nonzero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-algebra-of-complex-derivatives, def-polynomial-ring-over-a-commutative-ring,
       cor-complex-differentiability-implies-continuity,
       lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Proposition 2.2.5"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, §3.1"
      url: "https://complexanalysis.org/web/sec_diff-analytic.html"
pipeline_run: null
---

## Statement

Let $P(z)=\sum_{k=0}^n a_kz^k$ be a complex polynomial. Then $P$ is entire and

$$ P'(z)=\sum_{k=1}^n k a_kz^{k-1}. $$

This includes the zero polynomial and constant polynomials, whose derivative is zero. If $P,Q$ are complex polynomials, then the set $D=\{z\in\mathbb C:Q(z)\ne0\}$ is open, $P/Q$ is holomorphic on $D$, and

$$ (P/Q)'=\frac{P'Q-PQ'}{Q^2}. $$

When $Q$ is a nonzero constant, $D=\mathbb C$; when $Q$ is the zero polynomial, $D=\varnothing$ and no rational function is defined there.

## Facts & Assumptions
**Given:** Complex polynomials $P,Q$ with finite coefficient support.

[L1] Constants and the identity have derivatives $0$ and $1$; finite linear combinations, products, reciprocals, and quotients obey the displayed derivative rules wherever denominators are nonzero ([[thm-algebra-of-complex-derivatives]]).

[F1] A polynomial over a commutative ring is a finitely supported coefficient sequence, written formally as a finite sum $\sum_i a_ix^i$ ([[def-polynomial-ring-over-a-commutative-ring]]).

[L2] A complex-differentiable function is continuous at each point of differentiability ([[cor-complex-differentiability-implies-continuity]]).

[L3] Complex modulus is definite and subadditive ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 For $m\ge1$ and $h\ne0$, the factorization $((z+h)^m-z^m)/h=\sum_{j=0}^{m-1}(z+h)^{m-1-j}z^j$ has limit $mz^{m-1}$; for $m=0$ the function is constant and has derivative $0$ by [L1]. [L1, algebra]

2.1 By finite support [F1], $P$ is a finite linear combination of these powers. The linearity rule [L1] and step 1.1 make $P$ entire with the asserted derivative, including the empty-support zero polynomial. [step 1.1, F1, L1]

3.1 Fix $z_0\in D$. By step 2.1 and [L2], $Q$ is continuous at $z_0$, so some neighbourhood satisfies $|Q(z)-Q(z_0)|<|Q(z_0)|$; [L3] then forces $Q(z)\ne0$. Thus $D$ is open. [step 2.1, L2, L3, given]

4.1 On $D$, both polynomials are holomorphic and $Q$ is nonzero. The quotient rule [L1] gives the displayed derivative. If $Q$ is a nonzero constant then it never vanishes, while for $Q=0$ the set $D$ is empty. [step 2.1, step 3.1, L1, algebra] ∎
