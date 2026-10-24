---
id: def-general-poisson-bivector-and-bracket
kind: definition
title: General Poisson manifolds from bivector fields
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-smooth-manifold
  - def-algebra-over-a-commutative-ring
justified_by:
  - prop-coordinate-jacobi-and-schouten-criterion-for-poisson-bivectors
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nima Moshayedi, Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory
      url: https://arxiv.org/pdf/2012.14662
      locator: §3.1.1, Definition 3.1.7 (PDF pp. 75–76)
    - title: Maxim Kontsevich, Deformation Quantization of Poisson Manifolds, I
      url: https://arxiv.org/pdf/q-alg/9709040
      locator: §1.2, first-order Poisson structures (PDF pp. 2–3)
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

A **real Poisson algebra** is a commutative unital algebra over $\mathbb R$
equipped with an $\mathbb R$-bilinear bracket $\{\ ,\ \}$ that is
skew-symmetric, satisfies the Jacobi identity, and is a derivation in each
entry. The algebra-over-a-commutative-ring convention is the one in
[[def-algebra-over-a-commutative-ring]].

Let $M$ be a smooth $n$-manifold ([[def-smooth-manifold]]). A **smooth
bivector datum** on $M$ assigns to each smooth coordinate chart
$x=(x^1,\ldots,x^n)$ smooth functions $\pi_x^{ij}$ on its coordinate
domain, with $\pi_x^{ij}=-\pi_x^{ji}$. On an overlap with coordinates
$y=(y^1,\ldots,y^n)$, require the contravariant tensor transformation law
$$\pi_y^{ab}(y(x))= \sum_{i,j=1}^n\frac{\partial y^a}{\partial x^i}(x) \frac{\partial y^b}{\partial x^j}(x)\pi_x^{ij}(x).$$
For smooth functions $f,g$ on a coordinate domain, the associated local
bracket is
$$\{f,g\}_{\pi,x}:=\sum_{i,j=1}^n\pi_x^{ij}\, \frac{\partial f}{\partial x^i}\frac{\partial g}{\partial x^j}.$$
A bivector datum is **Poisson** when this local bracket satisfies the Jacobi
identity on every coordinate domain. A **Poisson manifold** is a smooth
manifold with a Poisson bivector datum. The next proposition proves that the
local brackets agree on overlaps, are biderivations, and satisfy Jacobi
exactly when the Schouten self-bracket vanishes; it justifies this definition
as a global Poisson bracket.

Here $\partial_i=\partial/\partial x^i$, and repeated coordinate indices
in tensor formulas are summed. To fix the Schouten convention needed here, put
$$J_\pi^{ijk}=\pi^{i\ell}\partial_\ell\pi^{jk} +\pi^{j\ell}\partial_\ell\pi^{ki} +\pi^{k\ell}\partial_\ell\pi^{ij}.$$
For $\pi=\tfrac12\pi^{ij}\partial_i\wedge\partial_j$, the local
components of its Schouten–Nijenhuis self-bracket are
$[\pi,\pi]_{SN}^{ijk}:=2J_\pi^{ijk}$. In this pair,
$[\pi,\pi]_{SN}=0$ means that these coefficients vanish in every chart.

No nondegeneracy assumption is imposed on $\pi$. In particular, the zero
bivector and bivectors of nonconstant rank are permitted. No global frame of
the tangent bundle is chosen.
