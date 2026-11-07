---
id: thm-northcott-finiteness-for-projective-line-bounded-degree
kind: theorem
title: Northcott finiteness on the projective line in bounded degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-axiom-of-choice
  - def-number-field
  - lem-minimal-polynomial-height-coefficient-bound
  - lem-product-basis-for-a-tower-of-finite-extensions
  - thm-absolute-height-is-invariant-under-field-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms, §1, Corollary 1.1.1(b), printed p. 168"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, §4.1, Theorem 12(b), printed pp. 9–10"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $D\ge1$ be an integer, let $B\ge0$ be real, and fix an algebraic closure $\overline K$ of $K$. For every field $L$ with $K\subseteq L\subseteq\overline K$, define $\mathbb P^1(L)$ to be the set of nonzero pairs $(x,y)\in L^2$ modulo common scaling by $L^\times$. The set of points $P\in\mathbb P^1(\overline K)$ for which there exists a finite extension $L/K$ with $[L:K]\le D$, $P\in\mathbb P^1(L)$, and absolute logarithmic height $h(P)\le B$ is finite.

## Statement references

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field|Absolute height and its field-invariance convention]]

[[lem-minimal-polynomial-height-coefficient-bound|Coefficient bounds from bounded height]]

[Call and Silverman, §1, Corollary 1.1.1(b), printed p. 168](https://www.numdam.org/item/CM_1993__89_2_163_0.pdf)

[Silverman, §4.1, Theorem 12(b), printed pp. 9–10](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice; a number field $K$; an integer $D\ge1$; a real $B\ge0$; and a point $P\in\mathbb P^1(L)$ over some finite extension $L/K$ with $[L:K]\le D$.

[A1] The height and number-field inputs are stated under the Axiom of Choice. [[def-axiom-of-choice]]

[F1] Degrees multiply in a tower of finite extensions. [[lem-product-basis-for-a-tower-of-finite-extensions]]

[F2] Absolute height is independent of the finite field used to represent a projective point, and its local maximum formula is symmetric in the two coordinates. [[thm-absolute-height-is-invariant-under-field-extension]] [[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[F3] If an algebraic number $\alpha$ has degree $m$ and height at most $B$, the coefficients of its primitive minimal polynomial satisfy the preceding lemma's bounds. [[lem-minimal-polynomial-height-coefficient-bound]]

## Proof

1.1 The point at infinity $[1:0]$ is a single possible point. For every other point $P=[x:y]$ choose coordinates with $y\ne0$ and put $\alpha=x/y\in L$. Then $P=[\alpha:1]$, and the symmetric maximum in the height definition gives $h(P)=h([1:\alpha])$. [given, F2, choose]

1.2 By [F1], $[\mathbb Q(\alpha):\mathbb Q]\le[L:\mathbb Q]=[L:K][K:\mathbb Q]\le D[K:\mathbb Q]$. Height invariance in [F2] allows the height in [F3] to be computed over $\mathbb Q(\alpha)$. [given, F1, F2, F3]

2.1 Put $N=D[K:\mathbb Q]$. For each degree $m\le N$, [F3] bounds the coefficient indexed by $k$ in the primitive minimal polynomial by $\binom{m}{k}e^{mB}\le N^k e^{NB}$, using $\binom{m}{k}\le m^k\le N^k$ and $m\le N$. Thus, for each $m$, only finitely many integer coefficient lists can occur. Each resulting nonzero polynomial has at most $m$ roots, so only finitely many $\alpha$ occur in total. Adding the single point at infinity proves finiteness. [given, F3, step 1.2, algebra] ∎
