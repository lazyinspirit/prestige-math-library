---
id: def-derivation-at-a-point-and-tangent-space
kind: definition
title: "Derivations at a point and the tangent space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-the-local-algebra-of-smooth-function-germs, def-algebraic-dual-and-linear-functional]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-30
  precheck: n/a
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

## Definition

Let $M$ be a smooth manifold and $p\in M$. A **derivation at $p$** is an $\mathbb R$-linear map $v:C_p^\infty(M)\to\mathbb R$ such that
$$ v([f][g])=f(p)\,v([g])+g(p)\,v([f]) $$
for all smooth germs $[f],[g]\in C_p^\infty(M)$. The set of all derivations at $p$ is written $T_pM$ and called the **tangent space of $M$ at $p$**.
