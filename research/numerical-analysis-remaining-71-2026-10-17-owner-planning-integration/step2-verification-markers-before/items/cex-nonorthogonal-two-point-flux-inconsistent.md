---
id: cex-nonorthogonal-two-point-flux-inconsistent
kind: counterexample
title: A nonorthogonal two-point flux gives a false transverse flux
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps: [def-fv-admissible-cell-face-mesh, def-tpfa-harmonic-face-scheme]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§2.3–§3, PDF pp. 10–16: TPFA's orthogonality limitation and the need for multipoint methods on general meshes."
---

## Statement refuted

The Euclidean two-point flux formula $Q_{K,F}=|F|(u_K-u_L)/|x_L-x_K|$ is consistent for isotropic diffusion on every cell-face mesh, including nonorthogonal meshes.

## Witness

Let $K$ be the triangle with vertices $(-1,0),(0,0),(0,1)$ and $L$ the triangle with vertices $(0,0),(1,1),(0,1)$. They share the vertical face $F$ from $(0,0)$ to $(0,1)$. The union is a parallelogram and the two cell centroids are $x_K=(-1/3,1/3)$ and $x_L=(1/3,2/3)$, so their difference is not normal to $F$. Set $\lambda=1$ and evaluate the naive algebraic extension of the TPFA formula on $u(x,y)=y$.

## Facts & Assumptions

**Given:** The two triangles, their common face, scalar diffusion coefficient $1$, the affine function $u(x,y)=y$, and the Euclidean-distance two-point expression in the refuted claim.

[F1] [[def-fv-admissible-cell-face-mesh]]: the common face has length $1$, outward normal from $K$ equal to $(1,0)$, and the cell centers are the centroids of the triangles.

[F2] [[def-tpfa-harmonic-face-scheme]]: when applied under its orthogonality hypothesis, the TPFA formula uses transmissibility $|F|/|x_L-x_K|$ for $\lambda=1$. Here we deliberately evaluate that same algebraic expression outside its admissible-mesh hypothesis.

## Verification

1.1 The triangle-centroid formula gives $x_K=(-1/3,1/3)$ and $x_L=(1/3,2/3)$, hence $x_L-x_K=(2/3,1/3)$ and $|x_L-x_K|=\sqrt5/3$. The center line is not perpendicular to the vertical face, whose normal is $(1,0)$. [F1, given, algebra]

1.2 The exact normal derivative of $u(x,y)=y$ on $F$ is $\nabla u\cdot(1,0)=0$, so the exact outward diffusive flux from $K$ is zero. The cell-center values are $u_K=1/3$ and $u_L=2/3$. [F1, given, algebra]

2.1 The nonorthogonal two-point expression gives $Q_{K,F}=\frac{1}{\sqrt5/3}\left(\frac13-\frac23\right)=-\frac1{\sqrt5}\ne0.$ It disagrees with the exact zero normal flux in step 1.2. Thus this formula is inconsistent on the stated nonorthogonal face, refuting the claim. [F2, step 1.1, step 1.2, algebra] ∎

