---
id: prop-local-frames-and-local-trivializations-are-equivalent-data
kind: proposition
title: "Local frames and local trivializations are equivalent data"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-bundle-chart-and-transition-function, def-local-frame-and-global-frame-of-a-vector-bundle, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-change-of-basis-matrix, thm-change-of-basis-matrices-are-inverses]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Let $E\to M$ be a rank-$r$ smooth vector bundle and let $U\subseteq M$ be open.
A local frame $(s_1,\dots,s_r)$ on $U$ determines a vector bundle chart on $U$,
and every vector bundle chart on $U$ determines a local frame. These two
constructions are inverse to one another.

## Facts & Assumptions

**Given:** A rank-$r$ vector bundle $E\to M$ and an open set $U\subseteq M$.

[L1] In an ordered basis, every vector has unique coordinates ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L2] Vector bundle chart changes are fibrewise linear ([[def-vector-bundle-chart-and-transition-function]]).

## Proof

**Proof technique:** direct.

1.1 If $(s_1,\dots,s_r)$ is a local frame on $U$, then [L1] gives for each $p\in U$ and $v\in E_p$ unique scalars $a_1,\dots,a_r$ with $v=\sum_i a_i s_i(p)$. Around any $p\in U$, choose an existing vector bundle chart $\Psi:E|_W\to W\times\mathbb R^r$ with $W\subseteq U$. Writing $\Psi(s_i(x))=(x,a_i(x))$, the column vectors $a_i(x)$ form a smooth matrix $A(x)\in GL(r,\mathbb R)$ because the $s_i(x)$ are a basis of $E_x$. Thus the local coordinate map is $\Phi_W(v)=(x,A(x)^{-1}u)$ when $\Psi(v)=(x,u)$, so $\Phi_W$ and its inverse $(x,\lambda)\mapsto\Psi^{-1}(x,A(x)\lambda)$ are smooth. By uniqueness of the coordinates from [L1], these local formulas agree on overlaps and patch to a vector bundle chart $\Phi:E|_U\to U\times\mathbb R^r$. [L1, given, construct, algebra]

1.2 Conversely, if $\Phi:E|_U\to U\times\mathbb R^r$ is a vector bundle chart, let $e_1,\dots,e_r$ be the standard basis of $\mathbb R^r$ and set $s_i(p)=\Phi^{-1}(p,e_i)$. Then each $s_i$ is a smooth local section, and the vectors $s_i(p)$ form a basis of $E_p$ because $\Phi|_{E_p}$ is a linear isomorphism. [L2, given, construct]

2.1 Applying the second construction to the chart from step 1.1 recovers the original frame because $\Phi(s_i(p))=(p,e_i)$ by construction. Applying the first construction to the sections from step 1.2 recovers the original chart because the resulting coordinates are exactly the fibre coordinates already read by $\Phi$. Hence local frames and local trivializations are inverse constructions. [step 1.1, step 1.2, algebra] ∎
