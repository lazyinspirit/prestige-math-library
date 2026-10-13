---
id: def-gr-flrw-spatial-model
kind: definition
title: "The constant-curvature spatial model of a homogeneous cosmology"
status: draft
origin: session
domain: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  [
    def-riemannian-metric-and-riemannian-manifold,
    def-smooth-manifold,
    def-ricci-curvature,
    lem-gr-constant-rescaling-preserves-levi-civita-and-curvature,
    ex-the-round-sphere-has-positive-constant-sectional-curvature,
    ex-euclidean-space-has-zero-curvature,
    def-countable-choice,
    prop-half-space-model-geometry,
    prop-round-sphere-model-geometry,
    thm-higher-dimensional-spheres-are-simply-connected,
    thm-convex-subsets-have-trivial-fundamental-group,
    prop-coordinate-geodesic-equation,
    prop-christoffel-formula-for-the-levi-civita-connection,
    thm-existence-uniqueness-and-smooth-dependence-of-geodesics,
    thm-hopf-rinow,
    thm-path-connected-implies-connected
  ]
dependency_roles:
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-ricci-curvature: mathematical-premise
  lem-gr-constant-rescaling-preserves-levi-civita-and-curvature: mathematical-premise
  ex-the-round-sphere-has-positive-constant-sectional-curvature: mathematical-premise
  ex-euclidean-space-has-zero-curvature: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-half-space-model-geometry: mathematical-premise
  prop-round-sphere-model-geometry: mathematical-premise
  thm-higher-dimensional-spheres-are-simply-connected: mathematical-premise
  thm-convex-subsets-have-trivial-fundamental-group: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  prop-christoffel-formula-for-the-levi-civita-connection: mathematical-premise
  thm-existence-uniqueness-and-smooth-dependence-of-geodesics: mathematical-premise
  thm-hopf-rinow: mathematical-premise
  thm-path-connected-implies-connected: mathematical-premise
justified_by: [ lem-gr-constant-curvature-three-manifold-ricci ]
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 8 'Cosmology': isotropy and
        homogeneity, the maximally symmetric three-metric and (8.2)-(8.3),
        (3)R_ijkl = k(gamma_ik gamma_jl - gamma_il gamma_jk), (3)R_jl = 2k
        gamma_jl, printed pp. 217-219 (PDF pp. 224-226)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
        Michaelmas 2019), section 4.6.1: the three constant-curvature spatial
        metrics S^3, R^3 and H^3 and the FRW ansatz, printed pp. 198-200 (PDF
        pp. 205-207)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /gr/gr.pdf"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019
        revision), section 1.1.1: the flat, positively curved and negatively
        curved homogeneous and isotropic three-spaces (1.1)-(1.11) and the
        unified constant-curvature metric, printed pp. 7-9 (PDF pp. 13-15)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /cosmo/cosmo.pdf"
verification:
  precheck: n/a
---

## Definition

This item assumes $\mathrm{AC}_\omega$ as inherited through the Riemannian
items cited below ([[def-countable-choice]]); no further choice principle is
used.

**(a) The datum.** Let $\Sigma$ be a connected smooth three-manifold without
boundary ([[def-smooth-manifold]]) and let $\gamma$ be a Riemannian metric on
$\Sigma$ ([[def-riemannian-metric-and-riemannian-manifold]]). Let
$k\in\{-1,0,1\}$. The pair $(\Sigma,\gamma)$ is a **spatial model of constant
normalized curvature $k$**, with **normalized curvature parameter** $k$, when

$$\operatorname{Ric}(\gamma)=2k\,\gamma\qquad\text{at every point of }\Sigma ,$$

where $\operatorname{Ric}(\gamma)$ is the Ricci curvature of $\gamma$
([[def-ricci-curvature]]). We then call $(\Sigma,\gamma,k)$ a **spatial model
datum**. The signs are named for orientation only: $k=+1$ is called the
**closed** or **positively curved** case, $k=0$ the **flat** case and $k=-1$
the **open** or **negatively curved** case; no topological content is attached
to these names by this definition.

**(b) Status of the condition.** The condition in (a) is pointwise and local.
It neither asserts nor implies that $\Sigma$ is complete, compact, simply
connected or geodesically complete, and it does not determine the global
model: this definition proves no classification theorem and this page assumes
none. In dimension three the condition is equivalent to the statement that
$\gamma$ has constant sectional curvature $k$; the companion lemma on
constant-curvature three-manifolds, recorded in the Remarks, proves that
equivalence. What is used by the cosmological deductions of this page is
exactly the Ricci form displayed in (a).

**(c) Normalization and scale.** The condition (a) fixes the numerical
curvature to $k\in\{-1,0,1\}$. For a constant $\lambda>0$, put
$\gamma'=\lambda^2\gamma$. Then

$$\operatorname{Ric}(\gamma')=\operatorname{Ric}(\gamma)=2k\gamma=2(k/\lambda^2)\gamma',$$

and $K_{\gamma'}=k/\lambda^2$
([[lem-gr-constant-rescaling-preserves-levi-civita-and-curvature]]).
The sign is unchanged, but for $k\ne0$ the normalized condition (a) is
preserved only when $\lambda=1$; the flat condition is preserved for every
$\lambda>0$. Conversely, if $\operatorname{Ric}(h)=2\kappa h$ for a real
constant $\kappa\ne0$, the metric $\gamma=|\kappa|h$ satisfies
$\operatorname{Ric}(\gamma)=2\operatorname{sgn}(\kappa)\gamma$ by the same
Ricci invariance, so it restores the normalization. A physical model assigns
its spatial length scale through the further factor in the model postulate.

**(d) Standard models.** For each $k\in\{-1,0,1\}$ at least one complete,
connected, boundaryless, simply connected model satisfying (a) is available:

- For $k=+1$, take the round unit sphere $S^3\subset\mathbb R^4$ with its
  induced metric. Its constant curvature $+1$, completeness and connected
  boundaryless Riemannian structure are supplied by
  [[prop-round-sphere-model-geometry]] with $n=3$, $R=1$ (the curvature
  calculation is also [[ex-the-round-sphere-has-positive-constant-sectional-curvature]]);
  its simple connectedness is [[thm-higher-dimensional-spheres-are-simply-connected]].
- For $k=0$, take $\mathbb R^3$ with the standard metric. Its Riemannian
  structure and vanishing curvature are [[ex-euclidean-space-has-zero-curvature]].
  It is nonempty and convex, hence simply connected by
  [[thm-convex-subsets-have-trivial-fundamental-group]], and thus connected by
  [[thm-path-connected-implies-connected]]. For completeness, the constant
  metric coefficients give zero Christoffel symbols
  ([[prop-christoffel-formula-for-the-levi-civita-connection]]); for every
  initial position $p$ and velocity $v$, the all-time curve $t\mapsto p+tv$
  solves the coordinate geodesic equation
  ([[prop-coordinate-geodesic-equation]]). Uniqueness of the maximal geodesic
  ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]) identifies
  it with that curve, so every maximal geodesic has domain $\mathbb R$.
  Hopf–Rinow ([[thm-hopf-rinow]]) then gives metric completeness; its
  hypotheses hold because $\mathbb R^3$ is nonempty, connected and boundaryless.
- For $k=-1$, take the upper half-space $\{x\in\mathbb R^3:x^3>0\}$ with
  $y=x^3$ and metric $y^{-2}\sum_{a=1}^3dx^a\otimes dx^a$.
  Its complete, connected, boundaryless, simply connected Riemannian
  structure and constant curvature $-1$ are exactly the $n=3$, $a=1$
  instance of [[prop-half-space-model-geometry]].

By the companion lemma recorded in the Remarks, constant sectional curvature
$k$ in dimension three gives $\operatorname{Ric}(\gamma)=2k\gamma$, so each
model satisfies (a) and each sign is realized. A model datum restricts to one
of these global standard models only when its postulate says so.

## Remarks

- **Why a Ricci condition and not a metric formula.** The displayed form
  $\operatorname{Ric}(\gamma)=2k\gamma$ is the exact input of the Einstein
  reduction performed later on this page: the warped-product computation of
  the four-dimensional Ricci tensor uses only $\operatorname{Ric}(\gamma)$,
  never the explicit coordinate form of a constant-curvature metric. The
  equivalence with constant sectional curvature in clause (b) is what allows
  the standard models of clause (d), and the physical reading of the parameter,
  to be described in the usual geometric language.

- **Global model data.** Clause (a) imposes the displayed Ricci condition.
  The global spatial manifold is a separate part of the datum, and no
  classification of all manifolds satisfying this condition is asserted.
  The physical postulate specifies which global model is adopted.

- **Companion items on this page.** The equivalence between the Ricci
  condition of clause (a) and constant sectional curvature in dimension three,
  used in clauses (b) and (d), is
  [[lem-gr-constant-curvature-three-manifold-ricci]]. The invariance of the
  Ricci tensor under a constant rescaling of the metric, used in clause (c), is
  [[lem-gr-constant-rescaling-preserves-levi-civita-and-curvature]].

- **Choice convention.** The cited Riemannian suppliers assume
  $\mathrm{AC}_\omega$ through the construction of sectional curvature,
  geodesic domains and orthonormal frames; this definition inherits that
  assumption and uses no further choice principle.
