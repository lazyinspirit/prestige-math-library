---
id: lem-matching-nurbs-patch-traces-give-h1-conformity
kind: lemma
title: Matching NURBS patch traces give global H1 conformity
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-nurbs-patch-map-and-rational-spline-space
  - def-sobolev-space-wkp-and-its-norm
  - def-weak-derivative-of-a-locally-integrable-function
  - def-bounded-piecewise-c-one-euclidean-domain
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://d-nb.info/1278950273/34"
---

## Statement

Assume Countable Choice. Let a bounded open set $\Omega\subset\mathbb R^d$, $d\in\{2,3\}$, be the union of finitely many bounded knot-cell images with disjoint interiors and a face-to-face finite piecewise $C^1$ presentation. Let $m\ge1$ and let $v: \Omega\to\mathbb R^m$ be $C^1$ on the closure of each cell, with each component's cell gradient square integrable. Suppose the two one-sided vector values agree on every shared face. Then $v\in H^1(\Omega;\mathbb R^m)$; its weak gradient is the piecewise classical componentwise gradient. This is the interface condition used to form conforming multipatch isogeometric spaces. Boundary conditions remain an additional restriction such as membership in $H^1_0(\Omega;\mathbb R^m)$.

## Facts & Assumptions

**Given:** Countable Choice; the finite cell partition described in the Statement; a piecewise $C^1$ field $v$ with componentwise square-integrable cell gradients and matching vector traces.

[A1] [[def-countable-choice]] is the exact choice hypothesis of the divergence theorem [F3] and the Sobolev conventions [F4].

[F1] [[def-nurbs-patch-map-and-rational-spline-space]]: the physical mesh is a finite face-to-face union of mapped knot-cell images, with matching physical faces wherever patches meet.

[F2] [[def-bounded-piecewise-c-one-euclidean-domain]]: each cell has a finite piecewise $C^1$ boundary presentation; a finite gluing lists the shared faces with their opposite outward normals, while edges are surface-null.

[F3] [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]: for a $C^1$ vector field on each piece, the integral of its divergence is the sum of its outward face fluxes; in a finite gluing the shared-face fluxes cancel.

[F4] [[def-sobolev-space-wkp-and-its-norm]] and [[def-weak-derivative-of-a-locally-integrable-function]]: membership in $H^1(\Omega)$ requires the function and its distributional first derivatives to be in $L^2(\Omega)$.

## Proof

1.1 Fix a component $q\in\{1,\ldots,m\}$, a test function $\phi\in C_c^\infty(\Omega)$ and a coordinate $j$. The finite physical partition and face-equality convention are those of [F1]. On each cell $K$, the vector field $G_K:=v_q\phi e_j$ is $C^1$ up to the cell boundary. By [F3], $\int_K v_q\,\partial_j\phi+\partial_jv_q\,\phi=\int_{\partial K}v_q\phi\,n_{K,j}\,dS.$ Summing this identity over the finitely many cells is legitimate because both volume terms are integrable by the hypotheses and [F4]. On a shared face the two normal fluxes add to $(v_{q,K}-v_{q,K'})\phi n_{K,j}$, which is zero by the matching-trace assumption; edge overlaps have surface measure zero by [F2]. The exterior boundary term is zero because $\phi$ is compactly supported in $\Omega$. Therefore $\int_\Omega v_q\,\partial_j\phi=-\sum_K\int_K\partial_jv_q\,\phi.$ [A1, F1, F2, F3, F4, given, algebra]

2.1 For every component $q$ and coordinate $j$, define $g_{qj}$ to equal the classical $\partial_jv_q$ on each open cell and arbitrarily on the cell faces. The faces have $d$-dimensional measure zero under the finite piecewise $C^1$ presentation, and the finite sum of cellwise $L^2$ norms is finite, so $g_{qj}\in L^2(\Omega)$. Step 1.1 gives the weak-derivative identity for every test function, hence $D_jv_q=g_{qj}$ weakly. Each component of $v$ is also square integrable on the finite bounded cell partition; [F4] therefore gives $v\in H^1(\Omega;\mathbb R^m)$ with the asserted componentwise gradient. [F2, F4, step 1.1, algebra] ∎
