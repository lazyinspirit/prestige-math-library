---
id: lem-maximal-ideals-are-points-over-algebraically-closed-field
kind: lemma
title: "Points of an affine algebraic set correspond to maximal ideals of its coordinate ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coordinate-ring-affine-algebraic-set, cor-weak-nullstellensatz-algebraically-closed-coordinate-form, thm-quotient-is-field-iff-ideal-maximal]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Nullstellensatz and affine variety correspondence"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §1.2 and §1.5"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Statement

Let $k$ be an algebraically closed field and let
$X\subseteq \mathbf A_k^n$ be an affine algebraic set. Then the map
$$ x\longmapsto \mathfrak m_x:=\{\overline f\in k[X]:\overline f(x)=0\} $$
is a bijection from $X$ onto the set of maximal ideals of $k[X]$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ and an affine algebraic set $X\subseteq \mathbf A_k^n$.

[L1] The coordinate ring is $k[X]=k[x_1,\ldots,x_n]/I(X)$ ([[def-coordinate-ring-affine-algebraic-set]]).

[L2] Every maximal ideal of $k[x_1,\ldots,x_n]$ has the form $(x_1-a_1,\ldots,x_n-a_n)$ for a unique point $a\in k^n$ ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

[L3] For a commutative ring $R$, an ideal $M$ is maximal exactly when $R/M$ is a field ([[thm-quotient-is-field-iff-ideal-maximal]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$. Evaluation at $x$ gives a surjective homomorphism $\operatorname{ev}_x:k[X]\to k$ because every constant is attained. Its kernel is exactly $\mathfrak m_x$, and the quotient $k[X]/\mathfrak m_x$ is isomorphic to the field $k$. Hence [L3] shows that $\mathfrak m_x$ is maximal. [L1, L3, given]

1.2 Let $\mathfrak m$ be a maximal ideal of $k[X]$. Under the quotient map $\pi:k[x_1,\ldots,x_n]\twoheadrightarrow k[X]$, the inverse image $M:=\pi^{-1}(\mathfrak m)$ is a maximal ideal of the polynomial ring. By [L2], $M=(x_1-a_1,\ldots,x_n-a_n)$ for a unique point $a\in k^n$. Because $I(X)\subseteq M$, every polynomial vanishing on $X$ vanishes at $a$, so $a\in V(I(X))=X$. Then $\mathfrak m=\mathfrak m_a$. [L1, L2, choose, algebra]

2.1 If $\mathfrak m_x=\mathfrak m_y$, then the images of all coordinate functions agree at $x$ and $y$, so $x_i=y_i$ for every coordinate. Thus $x=y$, and the map $x\mapsto\mathfrak m_x$ is injective. [L1, step 1.1, algebra]

3.1 Steps 2.1 and 1.2 prove that $x\mapsto\mathfrak m_x$ is a bijection from $X$ to the maximal ideals of $k[X]$. [step 2.1, step 1.2] ∎
