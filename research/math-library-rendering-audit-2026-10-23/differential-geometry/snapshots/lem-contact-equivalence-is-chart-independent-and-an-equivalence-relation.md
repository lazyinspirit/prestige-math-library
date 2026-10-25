---
id: lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation
kind: lemma
title: "Contact equivalence is chart independent and an equivalence relation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-contact-equivalence-of-smooth-curves-at-a-point, lem-first-order-hadamard-factorization-near-a-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
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

The contact relation of [[def-contact-equivalence-of-smooth-curves-at-a-point]] is independent of the chart used and is an equivalence relation on smooth curves through $p$.

## Facts & Assumptions

**Given:** Smooth curves through a fixed point $p$ at time $0$.

[F1] Contact equivalence is defined by equality of coordinate velocities in one chart ([[def-contact-equivalence-of-smooth-curves-at-a-point]]).

[L1] Each component of a smooth map on a Euclidean neighbourhood admits a first-order Hadamard factorization ([[lem-first-order-hadamard-factorization-near-a-point]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(x\circ\gamma_1)'(0)=(x\circ\gamma_2)'(0)$ in some chart $(U,x)$ around $p$, and let $(V,y)$ be any other chart around $p$. Write $a:=x(p)$ and $\alpha_r:=x\circ\gamma_r$. For each coordinate function $h^j:=y^j\circ x^{-1}$, [L1] gives smooth functions $g_1^j,\dots,g_n^j$ near $a$ such that $$ h^j(u)-h^j(a)=\sum_{i=1}^n (u^i-a^i)g_i^j(u) $$ and $g_i^j(a)=\partial_i h^j(a)$. Substituting $u=\alpha_r(t)$, dividing by $t$, and letting $t\to 0$ shows $$ (y^j\circ\gamma_r)'(0)=\sum_{i=1}^n g_i^j(a)\,(\alpha_r^i)'(0). $$ Because the vectors $\alpha_1'(0)$ and $\alpha_2'(0)$ are equal, the right-hand sides agree for $r=1,2$. Hence $(y\circ\gamma_1)'(0)=(y\circ\gamma_2)'(0)$, so the relation is chart independent. [F1, L1, given]

2.1 Reflexivity and symmetry are immediate from the defining equality in [F1], and transitivity holds because equality of coordinate velocity vectors in any chart is transitive. [F1, step 1.1]

3.1 Hence contact equivalence is a chart-independent equivalence relation. [step 1.1, step 2.1] ∎
