---
id: def-free-unimodular-affine-lattice-space-and-diagonal-flow
kind: definition
title: "Free unimodular affine-lattice space and diagonal flow"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-unimodular-lattice-space
  - def-homogeneous-space-of-a-lie-group
sources:
  references:
    - title: "Kleinbock 1999"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§§1–4.7: affine Dani criterion, mixing, horospherical avoidance and thickness"
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "§2: diagonal lattice-flow conventions"
---

## Definition

For $d=m+n$, an affine unimodular lattice is a translate $g\mathbb Z^d+v$ with $g\in\mathrm{SL}_d(\mathbb R)$ and $v\in\mathbb R^d$, with $v$ taken modulo $g\mathbb Z^d$. Its homogeneous space is the quotient of $\mathrm{SL}_d(\mathbb R)\ltimes\mathbb R^d$ by $\mathrm{SL}_d(\mathbb Z)\ltimes\mathbb Z^d$, using $(g,v)(h,w)=(gh,v+gw)$. In the terminology used here, “free unimodular lattices” means all translates in this full quotient. Let $\Omega_0$ denote the subset of translates containing the origin; the origin-free complement $\Omega\setminus\Omega_0$ is a different subspace, preserved by the linear diagonal flow. For $(A,b)$ its associated affine lattice is $L_A\mathbb Z^{m+n}+(b,0)$; its diagonal flow is $g_t(L_A\mathbb Z^{m+n}+(b,0))$, where $g_t=\operatorname{diag}(e^{t/m}I_m,e^{-t/n}I_n)$.

## Definition references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§1–4.7: affine Dani criterion, mixing, horospherical avoidance and thickness.

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — §2: diagonal lattice-flow conventions.


## Facts & Assumptions

**Given:** The unimodular lattice space and the matrix-flow convention.

[F1] Full lattices of covolume one are represented in $X_d=\mathrm{SL}_d(\mathbb R)/\mathrm{SL}_d(\mathbb Z)$. [[def-unimodular-lattice-space]]
