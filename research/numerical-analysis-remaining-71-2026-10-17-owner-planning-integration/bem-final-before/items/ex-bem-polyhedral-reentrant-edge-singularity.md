---
id: ex-bem-polyhedral-reentrant-edge-singularity
kind: example
title: A reentrant polyhedral edge has an H1 harmonic singularity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed pp. 614–616: polyhedral Lipschitz boundaries and the distinction between Lipschitz and smooth boundary regularity."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.5, PDF pp. 12–14: polyhedral Lipschitz domains and reentrant edges."
---

## Example

At a straight reentrant edge with cross-sectional opening angle $\omega\in(\pi,2\pi)$, put $\alpha=\pi/\omega\in(1/2,1)$ and in local cylindrical coordinates define
$$u(r,\theta,z)=r^\alpha\sin(\alpha\theta),\qquad 0<r<r_0,\quad0<\theta<\omega,\quad |z|<z_0.$$
Then $u$ is harmonic in the wedge, has zero trace on its two planar side faces, belongs to $H^1$ locally up to the edge, and does not belong to $H^2$ in any neighborhood of the edge.

## Facts & Assumptions

**Given:** A reentrant polyhedral edge in the sense of [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]], with opening angle $\omega\in(\pi,2\pi)$.

[F1] A polyhedral Lipschitz boundary is locally a finite union of planar faces meeting along edges ([[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]]).

## Proof

1.1 In polar coordinates the cross-sectional Laplacian is $\partial_{rr}+r^{-1}\partial_r+r^{-2}\partial_{\theta\theta}$. For $u=r^\alpha\sin(\alpha\theta)$, the three terms sum to $[\alpha(\alpha-1)+\alpha-\alpha^2]r^{\alpha-2}\sin(\alpha\theta)=0$; the $z$ derivative is zero. Also $u(r,0,z)=u(r,\omega,z)=0$ because $\alpha\omega=\pi$. Thus it is harmonic with zero side trace in the local geometry [F1]. [F1, given, algebra]

2.1 The squared transverse gradient is $|\nabla_{r,\theta}u|^2=\alpha^2r^{2\alpha-2}$, so its local integral is a constant times $\int_0^{r_0}r^{2\alpha-1}dr<\infty$ for $\alpha>0$; $u$ itself is also square integrable. On the other hand, $u_{rr}=\alpha(\alpha-1)r^{\alpha-2}\sin(\alpha\theta)$ is nonzero on a set of angles of positive measure, and its squared integral contains $c\int_0^{r_0}r^{2\alpha-3}dr=\infty$ because $\alpha<1$. Hence $u\in H^1$ locally but $u\notin H^2$ near the edge. [given, step 1.1, algebra] ∎

