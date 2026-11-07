---
dependency_level: 0
id: lem-kim-coefficient-growth-controls-satake-moduli
kind: lemma
title: Coefficient growth controls unramified Satake moduli
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-geometric-series
- thm-natural-logarithm-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Local bounded reconstruction of the BLS/BS07/Kim method
    url: https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf
    locator: Appendix2 equations19-23; coefficient-to-Euler-root step only
---

## Statement

Let $p>1$, let $\beta\in\mathbb R$, let $\alpha_1,\ldots,\alpha_n\in\mathbb C^\times$, $n\ge1$, and put $d=n(n+1)/2$. Define formal coefficients $b_\nu$ by
$$
\prod_{1\le i\le j\le n}(1-\alpha_i\alpha_jX)^{-1}=\sum_{\nu\ge0}b_\nu X^\nu.
$$
Suppose that for every $\epsilon>0$ there is $C_\epsilon<\infty$ such that $|b_\nu|\le C_\epsilon p^{\nu(\beta+\epsilon)}$ for all $\nu\ge0$. Then $|\alpha_i\alpha_j|\le p^\beta$ for all $i,j$. If the multiset of moduli $\{|\alpha_i|\}$ is invariant under reciprocal, then
$$
p^{-\beta/2}\le|\alpha_i|\le p^{\beta/2}.
$$
In particular, $\beta=1-2/(d+1)$ gives $|\log_p|\alpha_i||\le1/2-1/(d+1)$. This does not prove the coefficient-growth estimate or the unitarity-to-parameter comparison used in an automorphic application.

## Facts & Assumptions

**Given:** The nonzero complex parameters, formal coefficient identity and bounds, and for the second conclusion reciprocal invariance of moduli.

[F1] A geometric series converges when its ratio has modulus less than one. [[thm-geometric-series]]

[F2] Natural logarithms obey their product and monotonicity laws. [[thm-natural-logarithm-laws]]

## Proof

1.1 For $|z|<p^{-\beta}$, choose $\epsilon>0$ so small that $|z|p^{\beta+\epsilon}<1$. The coefficient bound and [F1] imply absolute convergence of $B(z)=\sum b_\nu z^\nu$. Let $P(z)=\prod_{i\le j}(1-\alpha_i\alpha_jz)$. Its finite degree allows multiplication through the convergent series, and the given formal coefficient identity says exactly that every coefficient of $PB$ vanishes except the constant one. Thus $P(z)B(z)=1$ on this disk. [given, F1, algebra, choose]

2.1 If $|\alpha_i\alpha_j|>p^\beta$, then $z=(\alpha_i\alpha_j)^{-1}$ is in that disk and $P(z)=0$, contradicting step 1.1. Hence every pair-product satisfies the bound. Setting $i=j$ yields $|\alpha_i|\le p^{\beta/2}$. Reciprocal invariance supplies an index with modulus $|\alpha_i|^{-1}$, so the same upper bound gives the lower bound. Only moduli, not the complex parameter list itself, are asserted to be reciprocal. [given, step 1.1, algebra]

3.1 Taking logarithms by [F2] and dividing by $\log p>0$ gives $|\log_p|\alpha_i||\le\beta/2$. Substituting the displayed value of $\beta$ gives the stated Kim exponent. The result also covers $n=1$ and $\beta=0$; if any hypotheses were incompatible for a negative $\beta$, the implication remains valid. [F2, step 2.1, algebra] ∎
