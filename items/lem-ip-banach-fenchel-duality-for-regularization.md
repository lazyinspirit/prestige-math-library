---
id: lem-ip-banach-fenchel-duality-for-regularization
kind: lemma
title: Fenchel–Young equality for a Banach regularizer
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-banach-convex-subgradient-and-dual-pairing
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jonathan M. Borwein and Jon D. Vanderwerff, Convex Functions: Constructions, Characterizations and Counterexamples, Proposition 4.4.1(a)"
      url: "https://carmamaths.org/jon/Preprints/Books/CUP/cup-final.pdf"
---

## Statement

Let $X$ be a real Banach space, let $R:X\to(-\infty,+\infty]$ be proper and convex, and define its Fenchel conjugate $R^*:X^*\to(-\infty,+\infty]$ by $R^*(\xi):=\sup_{z\in X}(\langle\xi,z\rangle_{X^*,X}-R(z))$. For every $x\in\operatorname{dom}R$ and $\xi\in X^*$, the Fenchel–Young inequality and its equality characterization are

$$R(x)+R^*(\xi)\ge\langle\xi,x\rangle_{X^*,X},\qquad R(x)+R^*(\xi)=\langle\xi,x\rangle_{X^*,X}\ \Longleftrightarrow\ \xi\in\partial R(x).$$

## Statement references

[Jonathan M. Borwein and Jon D. Vanderwerff, *Convex Functions: Constructions, Characterizations and Counterexamples*, Proposition 4.4.1(a)](https://carmamaths.org/jon/Preprints/Books/CUP/cup-final.pdf)

## Facts & Assumptions

**Given:** $X$, $R$, $R^*$, $x$, and $\xi$ satisfy the hypotheses and definitions in the Statement.

[F1] [[def-ip-banach-convex-subgradient-and-dual-pairing]]: $\xi\in\partial R(x)$ exactly when $R(z)\ge R(x)+\langle\xi,z-x\rangle_{X^*,X}$ for every $z\in X$.

## Proof


1.1 The supremum defining $R^*(\xi)$ includes the term at $z=x$, so $R^*(\xi)\ge\langle\xi,x\rangle_{X^*,X}-R(x)$. Adding $R(x)$ gives the Fenchel–Young inequality. [given, algebra]

2.1 If $\xi\in\partial R(x)$, [F1] gives $\langle\xi,z\rangle_{X^*,X}-R(z)\le\langle\xi,x\rangle_{X^*,X}-R(x)$ for all $z$; taking the supremum and then using the term $z=x$ proves equality. [given, F1, step 1.1]

3.1 Conversely, if equality holds, every term in the supremum satisfies $\langle\xi,z\rangle_{X^*,X}-R(z)\le R^*(\xi)=\langle\xi,x\rangle_{X^*,X}-R(x)$. Rearrangement gives [F1], hence $\xi\in\partial R(x)$. [given, F1, algebra] ∎
