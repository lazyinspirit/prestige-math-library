---
id: fs-every-value-of-a-moment-map-gives-a-smooth-symplectic-quotient
kind: false-statement
title: Every value of a moment map gives a smooth symplectic quotient
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, thm-marsden-weinstein-meyer-symplectic-reduction, prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness, def-fundamental-vector-field-of-a-left-action, def-symplectic-form-and-symplectic-manifold, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Remark 8.4 and the singular reduction discussion, printed pages 101--103
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.5 Orbifolds, printed pages 150--151
proof_strategy: direct
---

## Statement

For every value of a moment map the level quotient is a smooth symplectic
manifold. **This is false.**

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $G=\mathbb R$ acting on $M=\mathbb R^2$ with $\omega=dx\wedge dy$ by $t\cdot(x,y)=(e^{t}x,e^{-t}y)$, its moment map, and the value $0$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface.

[F1] The fundamental field of $\xi=1$ is $\xi_M=\left.\frac d{dt}\right|_0(-t)\cdot(x,y)=-x\partial_x+y\partial_y$, so $-\iota_{\xi_M}\omega=d(xy)$: the map $\mu(x,y)=xy$ satisfies the component equation. [[def-fundamental-vector-field-of-a-left-action]], [[def-moment-map-and-component-hamiltonian]].

[F2] The group is abelian, so the coadjoint action is trivial and equivariance of $\mu$ amounts to invariance; $xy$ is invariant because $(e^tx)(e^{-t}y)=xy$. Hence $\mu$ is an equivariant moment map. [[def-moment-map-and-component-hamiltonian]].

[F3] The reduction theorem requires a regular value and a free proper stabilizer action on the level; it is the only construction on this page that produces a smooth symplectic quotient. [[thm-marsden-weinstein-meyer-symplectic-reduction]], [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]].


## Refutation

**Proof technique:** direct.

1.1 By [F1] and [F2], $\mu(x,y)=xy$ is an equivariant moment map for the action, and its value $0$ is attained exactly on the union $X=\{xy=0\}$ of the two coordinate axes. [F1, F2, given]

2.1 The value $0$ is critical: $d\mu_{(0,0)}=0$, so $0$ is not a regular value and [F3] does not apply to this value. [step 1.1, F3]

2.2 The orbits of the action inside $X$ are computed directly: the origin is a fixed point, and each of the four open half-axes is a single orbit, because $t\cdot(x_0,0)=(e^tx_0,0)$ runs through the half-axis as $t$ ranges over $\mathbb R$ (and likewise on the $y$-axis). Hence the quotient space $X/G$ has exactly five points. [step 1.1]

3.1 In $X$ with the subspace topology, no neighbourhood of the origin is contained in $\{0\}$: every ball around the origin meets the four half-axes away from the origin. Since the origin is a fixed point, its saturation is itself, so the class $[0]$ in $X/G$ is not an open point. [step 2.2]

4.1 The quotient $X/G$ is therefore a five-point space with a non-open point. A smooth manifold containing a point with no open neighbourhood contained in that point cannot be zero-dimensional, since a zero-dimensional manifold is discrete; a positive-dimensional manifold has a neighbourhood homeomorphic to some $\mathbb R^n$ with $n\ge1$, hence uncountably many points, which five points cannot supply. Thus $X/G$ is not a smooth manifold, and the value $0$ of the moment map does not produce a smooth symplectic quotient. [step 3.1, A1] ∎
