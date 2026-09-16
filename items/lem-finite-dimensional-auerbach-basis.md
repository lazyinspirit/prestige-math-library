---
id: lem-finite-dimensional-auerbach-basis
kind: lemma
title: "Finite-dimensional Auerbach bases"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-coordinate-map-for-a-finite-dimensional-normed-space, thm-heine-borel-rn]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: extremal
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "Theorem 1.5.1 and proof, printed pp.20-22"
pipeline_run: phase-2-next-18
---

## Statement

Every nonzero finite-dimensional real or complex normed space $V$ has a basis
$(x_1,\ldots,x_n)$ with biorthogonal coordinate functionals
$(x_1^*,\ldots,x_n^*)$ such that

$$\|x_i\|=\|x_i^*\|=1\qquad(1\le i\le n).$$

## Facts & Assumptions

[L1] An ordered finite basis gives a topological coordinate isomorphism ([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

[L2] Closed bounded subsets of finite-dimensional real coordinate space are compact ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** extremal.

**Given:** The objects and hypotheses in the Statement.

1.1 Fix a reference basis and use [L1] to identify $V^n$ with a finite real [given, L1, L2] coordinate space (of twice the dimension in the complex case). By [L2], the product of $n$ unit spheres is compact. The absolute determinant relative to the reference basis is continuous, so it attains a maximum there. The maximum is positive because the normalized reference basis is an admissible independent tuple. Let $(x_1,\ldots,x_n)$ maximize it. [L1, L2, choose]

2.1 The positive determinant makes $(x_i)$ a basis, and each $\|x_i\|=1$ by construction. For any unit $y$ and fixed $i$, multilinearity gives [given, step 1.1]

$$|\det(x_1,\ldots,y,\ldots,x_n)| =|x_i^*(y)|\,|\det(x_1,\ldots,x_i,\ldots,x_n)|.$$

Maximality therefore gives $|x_i^*(y)|\le1$, so $\|x_i^*\|\le1$. Since $x_i^*(x_i)=1$ and $\|x_i\|=1$, the reverse inequality holds. [step 1.1, determinant multilinearity]

3.1 The argument selects one maximizer from one nonempty compact set and does [given, step 2.1] not select bases for a family of spaces. Thus it uses no choice principle. [step 1.1, 2.1] ∎