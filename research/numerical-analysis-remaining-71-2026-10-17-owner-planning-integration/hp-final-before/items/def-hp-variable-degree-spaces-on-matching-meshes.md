---
id: def-hp-variable-degree-spaces-on-matching-meshes
kind: definition
title: Variable-degree conforming hp spaces on matching affine meshes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-matching-affine-simplicial-meshes]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Leszek F. Demkowicz, Mathematical Theory of Finite Elements, §3.1.4, Hierarchical Shape Functions
      url: https://users.oden.utexas.edu/~leszek/classes/EM394H/book.pdf
      locator: "Complete lecture-note monograph, §3.1.4, printed pp. 64–68: p-version refinement, variable-order elements, and degree-layered vertex, edge, face, and cell shape functions."
    - title: Martin Vohralík, Finite Element Methods, Chapter 6, hp finite elements
      url: https://who.rocq.inria.fr/Martin.Vohralik/Enseig/FEM/FEM.pdf
      locator: "Complete lecture-note monograph, Chapter 6, printed pp. 54–58: conforming piecewise-polynomial spaces, hp approximation scope, and degree-of-freedom count."
---

## Definition

Let $d\ge2$ and let $\mathcal T$ be a finite matching affine simplicial mesh of a bounded polyhedral open set $\Omega\subset\mathbb R^d$ in the sense of [[def-matching-affine-simplicial-meshes]]. A **degree map** is a function $p:\mathcal T\to\mathbb N_0$ with finite values. The broken simplex space associated with $(\mathcal T,p)$ is
$$
V^{\mathrm{br}}(\mathcal T,p):=\{v\in L^2(\Omega):v|_K\in\mathbb P_{p_K}(K)\text{ for every }K\in\mathcal T\},
$$
where $p_K:=p(K)$ and $\mathbb P_m(K)$ denotes restrictions of real polynomials of total degree at most $m$. Its **conforming hp space** is the subspace of functions whose two polynomial traces agree on every interior facet. The zero-boundary hp space further requires the polynomial trace to vanish on every boundary facet. For an interior facet $F=K\cap K'$, its trace degree is $p_F:=\min(p_K,p_{K'})$; equality of the two traces means that their common polynomial belongs to $\mathbb P_{p_F}(F)$.

A **matching affine tensor-box mesh** is a finite face-to-face partition of a bounded polytope into affine images of $[-1,1]^d$, with pairwise disjoint interiors. For a scalar degree $p_K$ on each box, the local tensor space is $\mathbb Q_{p_K}(K)$, the pullback of polynomials of degree at most $p_K$ in each reference coordinate. The conforming box hp space is defined by equality of polynomial traces across every shared face, and its zero-boundary subspace by zero traces on the exterior faces. For a shared face $F=K\cap K'$, set $p_F=\min(p_K,p_{K'})$; its common trace lies in $\mathbb Q_{p_F}(F)$ in tangential reference coordinates. This definition of tensor boxes does not include curved or non-affine cells.

On either mesh, **h-refinement** replaces one cell by a finite matching partition of that cell and assigns degrees to the children; **p-refinement** raises at least one cell degree while leaving the mesh fixed; **hp-refinement** performs both operations. A local polynomial basis is **hierarchical** if its ordered degree layers span the nested spaces $\mathbb P_0\subset\cdots\subset\mathbb P_p$ (or $\mathbb Q_0\subset\cdots\subset\mathbb Q_p$), with each new layer extending the preceding span. For example, pullbacks of reference monomials $\widehat x^\nu$ ordered by $|\nu|$ give such a basis for $\mathbb P_p$, and tensor monomials $\xi^\nu$ ordered by $\max_i\nu_i$ give one for $\mathbb Q_p$. This basis convention does not assert stability of a particular basis or projector.

