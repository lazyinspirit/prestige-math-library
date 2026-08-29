---
id: prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds
kind: proposition
title: "Countable disjoint unions of fixed-dimensional smooth manifolds are smooth manifolds"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-manifold, def-smooth-atlas,
       def-manifold-chart-coordinate-domain-and-coordinate-functions,
       def-smoothly-compatible-charts,
       thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas,
       def-disjoint-union-topology, thm-coproduct-universal-property,
       def-second-countable-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $I$ be an at most countable set with a fixed enumeration, and for each
$i\in I$ let $M_i$ be a smooth $n$-manifold presented with a fixed smooth
atlas and a fixed finite or countable listing of a basis of its topology. Then
the disjoint union $X:=\bigsqcup_{i\in I}M_i$ with the disjoint
union topology is a smooth $n$-manifold: the charts of the members transported
by the canonical injections form a smooth atlas whose generated maximal atlas
depends only on the smooth structures of the $M_i$. If instead only the
existence of second-countable topologies on the members is assumed, then
selecting one basis per member uses $\mathrm{AC}_\omega$; the countability of
$I$ is essential, and no claim is made for an uncountable index set.

## Facts & Assumptions

**Given:** An at most countable set $I$ with a fixed enumeration, and for each
$i\in I$ a smooth $n$-manifold $M_i$ with a fixed finite or countable listing
of a basis $\mathcal B_i$ of its topology and a smooth atlas $\mathcal A_i$.

[F1] The disjoint union topology declares $U\subseteq\bigsqcup_i M_i$ open exactly when every trace $U\cap\kappa_i[M_i]$ is open in $M_i$, and each $\kappa_i$ is an injective embedding with clopen image ([[def-disjoint-union-topology]]).

[F3] A chart is a homeomorphism of an open domain onto an open subset of $\mathbb R^n$ ([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]), and two charts are smoothly compatible when their domains are disjoint or both transition maps are smooth ([[def-smoothly-compatible-charts]]).

[F4] A smooth atlas is a set of pairwise smoothly compatible charts whose domains cover the manifold ([[def-smooth-atlas]]).

[F5] A topological space is second countable when its topology has an at most countable basis ([[def-second-countable-space]]).

[L1] Two atlases generate the same maximal atlas exactly when their union is a smooth atlas ([[thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]]).

## Proof

**Proof technique:** direct.

1.1 $X$ is Hausdorff: two points of one summand are separated inside $M_i$, which is Hausdorff, and points of distinct summands lie in the disjoint clopen images $\kappa_i[M_i]$ and $\kappa_j[M_j]$ supplied by [F1]. For $p=\kappa_i(x)$ take a chart $(V,\varphi)$ of $M_i$ at $x$; the transported map $\kappa_i(V)\to\varphi(V)$, $(x,i)\mapsto\varphi(x)$, is a homeomorphism onto the open set $\varphi(V)\subseteq\mathbb R^n$ by [F1] and [F3], so $X$ is locally Euclidean of dimension $n$. The supplied listings make the union $\{\kappa_i[B]:i\in I,\ B\in\mathcal B_i\}$ at most countable by a diagonal enumeration over the fixed enumeration of $I$ and the fixed listing of each $\mathcal B_i$; it is a basis of $X$ because [F1] says openness is checked tracewise and each $\mathcal B_i$ is a basis of $M_i$. Hence $X$ is second countable by [F5] and is a topological $n$-manifold. [given, F1, F3, F5]

1.2 Two transported charts from one summand are compatible because their transitions are the corresponding transitions inside the smooth atlas $\mathcal A_i$; two transported charts from distinct summands have disjoint domains and are compatible by the disjoint clause of [F3]. Hence the set of all transported charts is pairwise smoothly compatible, and [F4] makes it a smooth atlas on $X$. [given, F3, F4]

2.1 The transported charts $\bigl(\kappa_i[V],\ \varphi\circ\kappa_i^{-1}\bigr)$ for $(V,\varphi)\in\mathcal A_i$ are charts of $X$ by step 1.1, and their domains cover $X$ because each $\mathcal A_i$ covers $M_i$ by [F4]. [given, F4, step 1.1]

3.1 If $\mathcal A_i'$ is another smooth atlas of $M_i$ generating the same structure for each $i$, then each $\mathcal A_i\cup\mathcal A_i'$ is a smooth atlas by [L1]; the union of the two transported atlases has cross transitions that are transported smooth transitions exactly as in step 1.2, so it is a smooth atlas, and [L1] gives the same maximal atlas on $X$. The structure therefore depends only on the smooth structures of the $M_i$; the $\mathrm{AC}_\omega$ cost of choosing bases from mere existence of second countability is stated, not incurred, in this proof. [given, L1, step 1.2] ∎
