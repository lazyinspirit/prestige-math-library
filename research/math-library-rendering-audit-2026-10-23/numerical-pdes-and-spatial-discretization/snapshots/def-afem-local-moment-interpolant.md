---
id: "def-afem-local-moment-interpolant"
kind: "definition"
title: "A local moment interpolant for conforming P1 meshes"
status: published
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 0
deps:
  - "def-matching-affine-simplicial-meshes"
  - "def-broken-and-conforming-polynomial-spaces"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "def-countable-choice"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 1"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture1.pdf"
      locator: "§1.5, Clément interpolation and scaled trace estimate, PDF pp. 8–9."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Definition

Assume Countable Choice for the $H_0^1$ convention of [[def-countable-choice]].

Fix a finite conforming triangular mesh $\mathcal T$. For each interior vertex $z$, choose the incident triangle with least fixed mesh index and denote it $K_z$. On the reference triangle $\widehat K$, let $\widehat\lambda_1,\widehat\lambda_2,\widehat\lambda_3$ be its barycentric coordinates. The Gram matrix $G_{ij}=\int_{\widehat K}\widehat\lambda_i\widehat\lambda_j$ is positive definite because $\int_{\widehat K}p^2>0$ for every nonzero $p\in P_1(\widehat K)$. Thus there are unique dual affine polynomials $\widehat\psi_i\in P_1(\widehat K)$ with $\int_{\widehat K}\widehat\lambda_j\widehat\psi_i=\delta_{ij}$. Pull them to $K_z$ by the affine map using the normalized measure so $\int_{K_z}\varphi_y\psi_{z,K_z}=\delta_{zy}$ for its three local nodal hats.

For $v\in H_0^1(\Omega)$ set $c_z(v)=\int_{K_z}v\psi_{z,K_z}$ at interior vertices and $c_z(v)=0$ at boundary vertices. Define
$$I_{\mathcal T}v=\sum_{z\ {\rm interior}}c_z(v)\varphi_z,$$
where $\varphi_z$ is the continuous piecewise-affine nodal hat. The sum is finite and belongs to the conforming zero-boundary P1 space. This is a moment quasi-interpolant; it is not a point-evaluation operator on arbitrary Sobolev classes.

## Interface

The Sobolev spaces and zero-boundary closure use [[def-sobolev-space-wkp-and-its-norm]] and [[def-wkp-zero-as-a-sobolev-closure]]. The mesh and finite-element conventions use [[def-matching-affine-simplicial-meshes]] and [[def-broken-and-conforming-polynomial-spaces]]. Reproduction and bounds are established by a separate theorem on this page.
