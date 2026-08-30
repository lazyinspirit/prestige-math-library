---
id: lem-curve-velocity-depends-only-on-the-contact-class
kind: lemma
title: "Curve velocity depends only on the contact class"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-velocity-derivation-of-a-smooth-curve, def-contact-equivalence-of-smooth-curves-at-a-point, lem-first-order-hadamard-factorization-near-a-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

If two smooth curves through $p$ are contact equivalent at $p$, then they define the same velocity derivation.

## Facts & Assumptions

**Given:** Smooth curves $\gamma_1$ and $\gamma_2$ through $p$ with the same contact class.

[F1] The velocity derivation of a curve is $[f]\mapsto (f\circ\gamma)'(0)$ ([[def-velocity-derivation-of-a-smooth-curve]]).

[F2] Contact equivalence means equality of coordinate velocities in a chart ([[def-contact-equivalence-of-smooth-curves-at-a-point]]).

[L1] Smooth functions on Euclidean neighbourhoods admit a first-order Hadamard factorization ([[lem-first-order-hadamard-factorization-near-a-point]]).

## Proof

**Proof technique:** direct.

1.1 Choose a chart $(U,x)$ witnessing contact equivalence, write $a:=x(p)$ and $\alpha_r:=x\circ\gamma_r$, and represent the germ $[f]$ by the smooth function $\tilde f:=f\circ x^{-1}$ near $a$. By [L1], after shrinking if needed there are smooth functions $g_1,\dots,g_n$ near $a$ such that $$ \tilde f(u)-\tilde f(a)=\sum_{i=1}^n (u^i-a^i)g_i(u) $$ and $g_i(a)=\partial_i\tilde f(a)$. [F2, L1, given, choose]

2.1 Substituting $u=\alpha_r(t)$ into the identity from step 1.1, dividing by $t$, and letting $t\to 0$ gives $$ (f\circ\gamma_r)'(0)=(\tilde f\circ\alpha_r)'(0)=\sum_{i=1}^n g_i(a)\,(\alpha_r^i)'(0). $$ Because contact equivalence means $\alpha_1'(0)=\alpha_2'(0)$ by [F2], these derivatives are equal for $r=1,2$. Thus $(f\circ\gamma_1)'(0)=(f\circ\gamma_2)'(0)$. [F2, L1, step 1.1]

3.1 Therefore the two curves determine the same velocity derivation. [F1, step 2.1] ∎
