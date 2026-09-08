---
id: "lem-classical-affine-closed-points-are-maximal-ideals"
kind: "lemma"
title: "Classical affine points are maximal ideals"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-affine-nullstellensatz-correspondence", "def-classical-affine-coordinate-ring", "cor-weak-nullstellensatz-algebraically-closed-coordinate-form", "thm-correspondence-theorem-ideals", "lem-evaluation-ideal-is-maximal", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Example 2.13, 2.20, and §3e, pp. 41, 43, 65"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. For every affine algebraic set $X$ and $A=k[X]$, the map $x\mapsto\mathfrak m_x=\ker(\operatorname{ev}_x:A\to k)$ is a bijection from $X$ to the maximal ideals of $A$. Its residue-field map $A/\mathfrak m_x\to k$ is the canonical $k$-isomorphism given by evaluation. Both sets are empty when $X$ is empty.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, and an affine algebraic set $X$ with coordinate ring $A$.

[F1] $A=R/I(X)$ ([[def-classical-affine-coordinate-ring]]).

[F2] Evaluation in the polynomial ring has maximal kernel $(x_i-a_i)_i$ ([[lem-evaluation-ideal-is-maximal]]).

[F3] Ideals of the quotient correspond to ideals upstairs containing $I(X)$ ([[thm-correspondence-theorem-ideals]]).

[F4] Maximal ideals upstairs are uniquely the coordinate-point ideals ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

[F5] Closed algebraic sets satisfy $V(I(X))=X$ ([[thm-classical-affine-nullstellensatz-correspondence]]).

## Proof

**Proof technique:** direct.

1.1 At $x\in X$, evaluation on $R$ kills $I(X)$ and hence defines evaluation on $A$; constants make it surjective. Its kernel is maximal by the same argument as F2, or by correspondence with the maximal evaluation ideal upstairs. Two points with equal kernels have equal inverse images upstairs, and F4 makes the points equal. [F1, F2, F3, F4, given]

2.1 If $M$ is maximal in $A$, its inverse image in $R$ is maximal by F3. F4 identifies it with the evaluation ideal at a unique $x$. Since it contains $I(X)$, $x\in V(I(X))=X$. Thus $M=\mathfrak m_x$. Evaluation induces a bijection $A/\mathfrak m_x\to k$: equality of values is exactly equality modulo the kernel, and every constant is attained. It preserves all operations. For $X=\varnothing$, $A=0$ has no proper, hence no maximal, ideals. [F1, F3, F4, step 1.1, F5] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Example 2.13, 2.20, and §3e, pp. 41, 43, 65. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
