---
id: ex-rank-one-spherical-hecke-laurent-algebra
kind: example
title: Rank-one spherical Hecke algebra
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln
- thm-satake-isomorphism-and-unramified-classification-for-gln
- thm-unramified-principal-series-hecke-character-for-gln
- def-axiom-of-choice
sources:
  references:
  - title: Masao Oi, Introduction to the Local Langlands Correspondence, §§8.2, 11.1–11.2
    url: https://masaooi.github.io/LLC.pdf
  - title: W. Casselman, Introduction to the Theory of Admissible Representations of p-adic Reductive Groups (1995 draft), §§2.1–2.2
    url: https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf
proof_strategy: direct
---
## Example

For $n=1$, the spherical Hecke algebra of $F^\times$ with $K=\mathcal O^\times$ is $\mathbb C[X,X^{-1}]$. For every $a\in\mathbb Z$, the characteristic function $h_a=1_{\varpi^a\mathcal O^\times}$ corresponds to $X^a$ and satisfies $h_a*h_b=h_{a+b}$. An unramified character $\chi$ acts on $h_a$ by $\chi(\varpi)^a$. The representation-side spherical tuple factor is $(1-\chi(\varpi)q^{-s})^{-1}$. Assume the Axiom of Choice as in the spherical Hecke construction.

## Example references

[[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]]

[[thm-satake-isomorphism-and-unramified-classification-for-gln]]

[[thm-unramified-principal-series-hecke-character-for-gln]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The local data and $n=1$.

[A1] AC is assumed for the Haar-existence and normalization context of the spherical Hecke construction. [[def-axiom-of-choice]]

[F1] In rank one, $G=T=F^\times$, $U$ is trivial, $\delta=1$, and $\operatorname{vol}(\mathcal O^\times)=1$. [[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]]

[F2] The Satake isomorphism and principal-series Hecke character are proved in [[thm-satake-isomorphism-and-unramified-classification-for-gln]] and [[thm-unramified-principal-series-hecke-character-for-gln]].

## Verification

**Given:** The local data and $n=1$.

1.1 The cosets $\varpi^a\mathcal O^\times$ partition $F^\times$ by valuation, and each has multiplicative Haar mass one. For fixed $g$, the integrand $h_a(x)h_b(x^{-1}g)$ is one on all of $\varpi^a\mathcal O^\times$ exactly when $v(g)=a+b$, and is otherwise zero. Thus $h_a*h_b=h_{a+b}$, $h_0$ is the identity, and $h_{-a}$ is the inverse of $h_a$. Since $U$ is trivial and $\delta=1$, the transform sends $h_a$ to $X^a$. [A1, F1, algebra]

2.1 By [F2], the Hecke character evaluates $X$ at $\chi(\varpi)$, so it evaluates $h_a$ at $\chi(\varpi)^a$. The rank-one tuple factor is $(1-\chi(\varpi)q^{-s})^{-1}$, giving all formulas in the Example. [F2, step 1.1, algebra] ∎
