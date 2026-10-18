---
id: lem-variable-degree-polynomial-spaces-are-h1-conforming
kind: lemma
title: Matching variable-degree polynomial traces give an H1 function
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - thm-matching-continuous-piecewise-polynomials-are-wkp
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
  - def-weak-derivative-of-a-locally-integrable-function
  - def-sobolev-space-wkp-and-its-norm
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is used through the cited published Sobolev and piecewise-divergence suppliers; neither arbitrary nor full Choice is used."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2019, Chapter 32, H1-conforming approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2019/chap32.pdf
      locator: "§32.1, printed pp. 144–145: matching piecewise-polynomial traces and the H1-conforming space."
    - title: Luca Heltai, Numerical Methods for Partial Differential Equations, Lecture 2
      url: https://luca-heltai.github.io/nmpde/lectures/lecture-02/
      locator: "§10: continuity across matching faces and conforming finite-element functions."
---

## Statement

Assume Countable Choice. On a finite matching affine simplicial mesh or a finite face-to-face affine tensor-box mesh, a piecewise polynomial scalar function whose two traces agree on every interior facet belongs to $H^1(\Omega)$, and its weak gradient equals its ordinary cellwise polynomial gradient almost everywhere. The simplex degrees may vary by cell; the box degrees may also vary.

## Facts & Assumptions

**Given:** Countable Choice; a finite matching mesh $\mathcal T$ of affine simplices or affine tensor boxes; a real-valued function $v$ whose restriction to each cell is a polynomial of its assigned finite degree; equality of the two traces on every interior facet; and a test function $\varphi\in C_c^\infty(\Omega)$.

[F1] [[def-hp-variable-degree-spaces-on-matching-meshes]]: the mesh has finitely many cells, each cell restriction is a polynomial, and the conforming condition is equality of the polynomial traces on every whole shared facet.

[F2] [[thm-matching-continuous-piecewise-polynomials-are-wkp]]: under Countable Choice, a finite matching affine simplicial mesh with a single finite polynomial degree and matching traces gives a member of $W^{1,2}$ whose weak gradient is cellwise.

[F3] [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]: under Countable Choice, cellwise Gauss–Green holds for a finite piecewise $C^1$ presentation, and the fluxes on a shared face cancel when the pieces are glued.

[F4] A weak derivative is characterized by integration against compactly supported smooth tests, and $H^1=W^{1,2}$ consists of $L^2$ classes with all first weak derivatives in $L^2$. ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]])

## Proof

1.1 If the mesh is empty, its domain is empty by the mesh convention and the assertion is immediate. Otherwise, because the mesh and every local degree are finite, $v$ and each cellwise first derivative $g_i:=\partial_i(v|_K)$ are bounded on each closed cell; a finite union then puts $v,g_i$ in $L^2(\Omega)$. If the mesh is simplicial, set $p_*=\max_{K\in\mathcal T}p_K$. Every restriction lies in $\mathbb P_{p_*}(K)$, and the trace-matching condition is unchanged. Applying [F2] at the single degree $p_*$ proves the claim on this branch. [F1, F2, given, choose]

1.2 Suppose the cells are affine tensor boxes. Fix a coordinate $i$. On each cell, apply [F3] to the smooth field $v\varphi e_i$; its divergence is $v\,\partial_i\varphi+g_i\varphi$. Sum the finitely many resulting identities. At an interior face the two outward normals are opposite, because the adjacent cell interiors lie on opposite sides of its supporting hyperplane; the common trace in [F1] therefore makes the two fluxes cancel. The boundary-face terms vanish since $\varphi$ has compact support in $\Omega$. Thus $\int_\Omega v\,\partial_i\varphi=-\int_\Omega g_i\varphi$. [F1, F3, given, algebra]

2.1 By [F4], step 1.2 says that $g_i$ is the weak $i$th derivative of $v$. This holds for every coordinate $i$, and step 1.1 supplies $v,g_i\in L^2$; hence $v\in H^1(\Omega)$ with the stated cellwise weak gradient. Together with the simplex branch of step 1.1 this proves the assertion for both mesh types. [F1, F4, step 1.1, step 1.2, algebra] ∎
