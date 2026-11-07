---
id: def-expanding-horospherical-subgroup-and-orbit-avoidance
kind: definition
title: "Expanding horospherical subgroup and bounded orbit avoidance"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-free-unimodular-affine-lattice-space-and-diagonal-flow
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

Let $G=\mathrm{SL}_d(\mathbb R)\ltimes\mathbb R^d$ be the group of volume-preserving affine maps, let $\Gamma=\mathrm{SL}_d(\mathbb Z)\ltimes\mathbb Z^d$, and let $\Omega=G/\Gamma$ be the affine unimodular-lattice space. For a one-parameter subgroup $F=\{a_t=\exp(tX):t\ge0\}$, define its expanding horospherical subgroup by
$$H^+(F):=\exp_G(\mathfrak h^+),\qquad \mathfrak h^+\otimes_{\mathbb R}\mathbb C=\bigoplus_{\operatorname{Re}\lambda>0}\mathfrak g_\lambda(\operatorname{ad}X) .$$
Here the generalized eigenspaces are taken in the complexified Lie algebra; the displayed conjugation-stable sum determines the real subspace $\mathfrak h^+$. Thus $\exp_G$ is applied only to real Lie algebra vectors. If $Z\subset\Omega$ is closed and $F$-invariant, write $Z^*=Z\cup\{\infty\}$ in the one-point compactification $\Omega^*$. The avoidance set $E(F,Z^*)$ consists of points $y\in\Omega$ whose forward orbit closure in $\Omega^*$ is disjoint from $Z^*$; equivalently, the orbit is bounded in $\Omega$ and stays away from $Z$.
## Definition references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§1–4.7: affine Dani criterion, mixing, horospherical avoidance and thickness.

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — §2: diagonal lattice-flow conventions.


## Facts & Assumptions

**Given:** The free affine-lattice space and its diagonal flow.

[F1] The affine-lattice quotient and standard diagonal flow are defined on the full affine quotient, including its origin-containing subset. [[def-free-unimodular-affine-lattice-space-and-diagonal-flow]]
