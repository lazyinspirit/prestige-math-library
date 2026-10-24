---
id: lem-finite-linear-group-invariant-polynomials-separate-orbits
kind: lemma
title: Finite linear group invariant polynomials separate orbits
status: "published"
origin: pipeline
deps: [def-finite-linear-invariant-and-coinvariant-polynomial-algebras]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Pavel Etingof, Representations of Lie Groups, §§11–13; local proof and exact reading limits in the group report
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
proof_strategy: direct
---

## Statement

Let $G\leq\operatorname{GL}(V)$ be finite, with $V$ finite dimensional over $\mathbb C$. If $O_1,O_2$ are distinct $G$-orbits, there is $p\in\mathbb C[V]^G$ that is zero on $O_1$ and one on $O_2$.

## Facts & Assumptions

**Given:** Two distinct finite orbits for the stated action.

[F1] The polynomial algebra, pullback action and Reynolds projection are defined and justified in [[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]].

## Proof

1.1 The orbits are disjoint: if $gx=hy$, then $y=h^{-1}gx$ and their full orbits agree, contrary to distinctness. Let $T=O_1\cup O_2$ and fix finite linear coordinates $x_1,\ldots,x_r$. For each $b\in O_2$ and $a\in T\setminus\{b\}$, choose the least coordinate index $j(a,b)$ with $x_j(b-a)\ne0$. Such an index exists because coordinates separate distinct vectors. Define $\ell_{a,b}(x)=(x_{j(a,b)}(x)-x_{j(a,b)}(a))/(x_{j(a,b)}(b)-x_{j(a,b)}(a))$. Its denominator is nonzero, it is zero at $a$, and it is one at $b$. [F1, given]

2.1 For each $b\in O_2$ put $\delta_b=\prod_{a\in T\setminus\{b\}}\ell_{a,b}$, with empty product one. At $b$ every factor is one; at any other $a\in T$ the corresponding factor vanishes. Thus $q=\sum_{b\in O_2}\delta_b$ is zero on $O_1$ and one on $O_2$. Set $p=\mathcal R(q)$ using F1. It is invariant. For $x\in O_j$ and every $g\in G$, $g^{-1}x$ stays in $O_j$, so every term $q(g^{-1}x)$ has the required constant value there. Averaging preserves that value, proving the assertion. [F1, step 1.1]

3.1 Distinct orbits are nonempty, so $T$ has at least two points and no empty coordinate family is needed: in dimension zero only one orbit exists and the hypothesis cannot hold. If either orbit is a singleton, the same products work, including the orbit of the zero vector. Stabilizers never alter interpolation coefficients because $T$ contains distinct points; Reynolds divides by the actual nonzero group order. If one instead allows an empty prescribed set, the corresponding single condition is solved by the constant zero or one polynomial, and both empty sets allow zero. The construction uses finite products and least coordinate indices, with no AC. [F1, step 1.1, step 2.1] ∎
