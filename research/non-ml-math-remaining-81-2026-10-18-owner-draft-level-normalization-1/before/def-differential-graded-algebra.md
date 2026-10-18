---
id: def-differential-graded-algebra
kind: definition
title: "Cohomological differential graded algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-algebra-over-a-commutative-ring
  - def-cochain-complex-in-an-abelian-category
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "The Stacks Project, Chapter 22: Differential Graded Algebra, §§22.2–22.3"
      url: "https://stacks.math.columbia.edu/download/book.pdf"
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §3.1"
      url: "https://arxiv.org/pdf/math/9910179v2"
---

## Definition

Let $R$ be a commutative ring with unit. A **cohomological differential graded
algebra over $R$** (cohomological DGA) consists of a $\mathbb Z$-graded
$R$-module $A=\bigoplus_{n\in\mathbb Z}A^n$, an $R$-bilinear associative
multiplication $A^p\times A^q\to A^{p+q}$ with a unit $1\in A^0$ and central
$R$-action, and $R$-linear maps $d^n:A^n\to A^{n+1}$ such that
$d^{n+1}d^n=0$. The degree convention and square-zero differential are those
of a cochain complex ([[def-cochain-complex-in-an-abelian-category]]); the
ungraded multiplication and unit satisfy the $R$-algebra convention in
[[def-algebra-over-a-commutative-ring]].

For homogeneous $a\in A^p$ and $b\in A^q$, require the signed Leibniz rule
$$d^{p+q}(ab)=d^p(a)b+(-1)^p a d^q(b).$$
No symmetry condition $ab=(-1)^{pq}ba$ is imposed on homogeneous elements of
degrees $p$ and $q$. In particular, this definition fixes the cohomological
sign convention and does not assert any formality, derived-category, or
Hochschild-cohomology result.

The unit is automatically closed: applying the Leibniz rule to $1\cdot1$
gives $d(1)=d(1)+d(1)$, so cancellation in the additive group gives $d(1)=0$.
