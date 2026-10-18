---
id: "lem-afem-p1-residual-representation"
kind: "lemma"
title: "Element and edge residual representation for P1 Galerkin errors"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 1
deps:
  - "def-afem-p1-residual-estimator-and-data-oscillation"
  - "def-matching-affine-simplicial-meshes"
  - "def-broken-and-conforming-polynomial-spaces"
  - "thm-reference-simplex-trace-and-gauss-green"
  - "lem-oriented-facet-cancellation-on-matching-meshes"
  - "thm-matching-continuous-piecewise-polynomials-are-wkp"
  - "thm-zero-boundary-piecewise-polynomials-in-w10p"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-countable-choice"
  - "def-wkp-zero-as-a-sobolev-closure"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 2"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture2.pdf"
      locator: "§2.1, residual representation, reliability, and bubble lower bound,
        PDF pp. 1–5."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
verification:
  precheck: pass
---
## Statement

Assume Countable Choice, as in the Sobolev and simplex trace suppliers.

Let $\mathcal T$ be a matching triangular mesh, $U\in V(\mathcal T)$, and $u$ solve the weak model from [[def-afem-p1-residual-estimator-and-data-oscillation]]. For every $v\in H_0^1(\Omega)$,
$$\int_\Omega\nabla(u-U)\cdot\nabla v+(b\cdot\nabla(u-U))v =\sum_{K\in\mathcal T}\int_K R_K(U)v-\sum_{E\ {\rm interior}}\int_EJ_E(U)v.$$

## Facts & Assumptions

[A1] Countable Choice is assumed in the cited Sobolev and reference-simplex suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, the weak equation, matching affine triangles, continuous P1 function $U$, and $v\in H_0^1(\Omega)$.

[F1] On an affine simplex, Green's identity holds for the polynomial vector field $\nabla U$ and Sobolev test functions; opposite outward normals cancel on a shared matching facet ([[thm-reference-simplex-trace-and-gauss-green]], [[lem-oriented-facet-cancellation-on-matching-meshes]]).

[F2] $H_0^1$ is the closure of smooth compactly supported functions, and continuous matching piecewise-affine functions with zero boundary values belong to this space ([[def-wkp-zero-as-a-sobolev-closure]], [[thm-matching-continuous-piecewise-polynomials-are-wkp]], [[thm-zero-boundary-piecewise-polynomials-in-w10p]]).

## Proof

1.1 For smooth compactly supported $v$, integrate $\int_K\nabla U\cdot\nabla v=-\int_K\Delta U\,v+\int_{\partial K}(\nabla U\cdot n_K)v$ on every cell using [F1]. Since $U|_K$ is affine, $\Delta U=0$. The sum of boundary integrals on each interior edge is $\int_EJ_E(U)v$, and boundary-edge terms vanish because $v$ is compactly supported. [A1, F1, given]

2.1 The weak residual is $(f,v)-\int\nabla U\cdot\nabla v-\int(b\cdot\nabla U)v$. Substituting step 1.1 gives cell integrands $f-b\cdot\nabla U=R_K(U)$ and the negative of the summed outward flux jumps. This is the displayed formula for smooth compactly supported $v$. [step 1.1, given, algebra]

3.1 Smooth compactly supported functions are dense in $H_0^1$ by its definition. Every term in the identity is continuous in the $H^1$ norm: volume terms use $f,\nabla U\in L^2$, and edge terms use the trace inequality from [F1] on the finite mesh. Passing to the limit extends step 2.1 to all $v\in H_0^1$. [A1, F1, F2, step 2.1] ∎
