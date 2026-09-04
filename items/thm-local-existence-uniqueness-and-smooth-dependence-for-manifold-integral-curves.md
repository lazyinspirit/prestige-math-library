---
id: thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
kind: theorem
title: "Local existence, uniqueness, and smooth dependence for manifold integral curves"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-curve-of-a-vector-field, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets, thm-fundamental-theorem-for-autonomous-smooth-odes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Statement

Let $X$ be a smooth vector field on $M$ and let $p\in M$. Then there exist
$h>0$, an open neighbourhood $U$ of $p$, and a smooth map

$$ \Phi:(-h,h)\times U\to M $$

such that for every $q\in U$, the curve $t\mapsto \Phi(t,q)$ is the unique
integral curve of $X$ on $(-h,h)$ with initial value $\Phi(0,q)=q$.

## Facts & Assumptions

**Given:** A smooth vector field $X$ on $M$ and a point $p\in M$.

[L1] Chart maps are diffeomorphisms onto open subsets of Euclidean space ([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

[L2] In a chart, a smooth vector field has smooth coordinate components ([[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L3] A smooth autonomous vector field on an open subset of $\mathbb R^n$ has a local smooth flow depending smoothly on the initial point ([[thm-fundamental-theorem-for-autonomous-smooth-odes]]).

## Proof

**Proof technique:** direct.

1.1 Choose a chart $(V,x)$ around $p$. By [L1], $x:V\to x(V)\subseteq\mathbb R^n$ is a diffeomorphism onto an open set, and by [L2] the vector field $X|_V$ corresponds to a smooth Euclidean vector field $\widetilde X$ on $x(V)$. [L1, L2, given]

2.1 Apply [L3] to $\widetilde X$ at the point $x(p)$. This gives $h>0$, an open neighbourhood $W\subseteq x(V)$ of $x(p)$, and a smooth map $\widetilde\Phi:(-h,h)\times W\to x(V)$ whose time slices are the unique integral curves of $\widetilde X$. [L3, step 1.1, choose]

3.1 Set $U:=x^{-1}(W)$ and define $\Phi(t,q):=x^{-1}(\widetilde\Phi(t,x(q)))$. Because $x$ and $x^{-1}$ are smooth by [L1], $\Phi$ is smooth. Each curve $t\mapsto \Phi(t,q)$ is an integral curve of $X$ and satisfies $\Phi(0,q)=q$. [L1, step 2.1, construct]

4.1 If another curve in $M$ through $q\in U$ solved the same initial-value problem, its coordinate expression under $x$ would solve the Euclidean problem for $\widetilde X$ with the same initial value. Uniqueness in [L3] then forces the two curves to agree. [L3, step 3.1]

5.1 Therefore $X$ has unique local integral curves depending smoothly on the initial point. [step 3.1, step 4.1] ∎
