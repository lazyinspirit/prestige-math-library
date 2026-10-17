---
id: ex-nonconforming-broken-eigenvalue-below-dirichlet-ground-state
kind: example
title: A broken piecewise-constant trial space can give an eigenvalue below the Dirichlet ground state
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-broken-and-conforming-polynomial-spaces
  - def-countable-choice
  - def-matching-affine-simplicial-meshes
  - cor-poincare-constant-and-first-dirichlet-eigenvalue
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§47.2, the conforming hypotheses in the symmetric eigenvalue approximation argument."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§§8.4–8.7, printed pp. 131–140, conforming spectral approximation and its hypotheses."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Example

Let $\Omega=(0,1)^2$ and divide it into two closed triangles by the diagonal
from $(0,0)$ to $(1,1)$. Let $w$ equal $1$ on one triangle and $0$ on the
other. Take degree $k=0$ and scalar values $q=1$, so $w$ is a nonzero member of
the broken piecewise-constant space. For the
broken stiffness form
$$a_{\mathrm{br}}(u,v):=\sum_{K\in\mathcal T}\int_K\nabla u\cdot\overline{\nabla v}\,dx$$
and mass form $b(u,v):=\int_\Omega u\overline v\,dx$, $w$ is a Ritz
eigenvector with eigenvalue $0$. The continuous Dirichlet ground-state value
$\lambda_1$ is positive, so this nonconforming value lies strictly below it.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; the square $\Omega$; its two-triangle matching mesh; the scalar, degree-zero broken space; and $w$ as defined above.

[F1] The broken polynomial space consists of cellwise polynomials with no continuity constraint across interior facets; for degree zero it includes the cellwise constants ([[def-matching-affine-simplicial-meshes]], [[def-broken-and-conforming-polynomial-spaces]]).

[F2] The Dirichlet Laplacian on a nonempty bounded open set has a first eigenvalue $\lambda_1>0$ under the Axiom of Choice and Countable Choice ([[cor-poincare-constant-and-first-dirichlet-eigenvalue]]).

## Proof

**Proof technique:** direct.

**Given:** The two cells $K_1,K_2$, the broken function $w$, and the forms $a_{\mathrm{br}}$ and $b$.

1.1 Each triangle has area $1/2$, so $b(w,w)=\int_{K_1}1\,dx=1/2>0$. The cellwise gradient of each constant restriction is zero. Hence $a_{\mathrm{br}}(w,v)=0$ for every broken piecewise-constant $v$, and in particular $a_{\mathrm{br}}(w,v)=0\,b(w,v)$ for all such $v$. This is the generalized Ritz equation with eigenvalue zero. [F1, given, algebra]

2.1 The square is nonempty, open and bounded, so [F2] gives $\lambda_1>0$. Therefore the broken Ritz eigenvalue $0$ is strictly less than $\lambda_1$. The usual conforming min–max conclusion does not apply to this trial space: the two traces of $w$ across the diagonal differ, so $w$ is outside the conforming subspace in [F1]. Moreover, the broken stiffness form is only a seminorm on this piecewise-constant space. [F1, F2, given] ∎

## Remarks

The example identifies why conformity and coercivity are hypotheses of the upper-bound theorem. It does not say that every nonconforming discretization underestimates the ground state.
