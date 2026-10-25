---
id: ex-hyperbolic-geodesic-triangle-area-defect
kind: example
title: Area defect of a hyperbolic geodesic triangle
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-gauss-bonnet-for-a-geodesic-triangle
  - thm-gaussian-curvature-structure-equation
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form
  - def-riemannian-volume-form-on-an-oriented-manifold
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, printed pp. 156-172, especially the hyperbolic example with constant curvature -1 and the geodesic-triangle formula of Theorem 9.3."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13, and the Poincare upper half-plane model with constant curvature -1."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the upper-half-plane metric $y^{-2}(dx^2+dy^2)$ on
$\mathbb H=\{y>0\}$, a compact geodesic triangle of area $A$ has angle sum
$\pi-A$; every such angle sum is therefore below $\pi$.

Here a **compact geodesic triangle** means a compact regular disk region
in the sense of
[[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]],
with exactly three distinct vertices and boundary the cyclic concatenation
of three regular $C^2$ embedded geodesic segments. At each vertex the
incoming and outgoing one-sided unit tangents are not antipodal. Its angles
are the interior sector angles, and its orientation is induced by
$dx\wedge dy$. Thus degenerate collinear triples and ideal vertices are not
included.

## Facts & Assumptions

**Given:** The Axiom of Choice, the upper half-plane $\mathbb H=\{y>0\}$ with the metric $g=y^{-2}(dx^2+dy^2)$, a compact geodesic triangle $T\subseteq\mathbb H$ in the regular disk-region sense specified above, of Riemannian area $A$, and the outward-normal-first orientation of $\partial T$.

[F1] For an oriented Riemannian surface with a smooth positive orthonormal frame $(E_1,E_2)$ on an open set and connection form $\omega(X)=g(\nabla_XE_1,E_2)$, one has $d\omega=-K\,dA$, where $K$ is the sectional curvature of the frame plane and $dA$ the Riemannian volume form of the orientation ([[thm-gaussian-curvature-structure-equation]]).

[F2] In coordinates the Levi-Civita symbols of a Riemannian metric are $\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_ig_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$ ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F3] The Riemannian volume form of an oriented Riemannian manifold is the unique positive top form with $dA(E_1,\dots,E_n)=1$ on every positive orthonormal frame; in particular for a positive orthonormal coframe $(e^1,e^2)$ of a surface, $dA=e^1\wedge e^2$ ([[prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form]], [[def-riemannian-volume-form-on-an-oriented-manifold]]).

[F4] Under AC, for a positively oriented compact regular disk region with exactly three vertices whose boundary is the cyclic concatenation of three regular $C^2$ geodesic segments with non-antipodal one-sided tangents and which lies in a frameable neighbourhood, $\int_TK\,dA=\alpha+\beta+\gamma-\pi$, where $\alpha,\beta,\gamma$ are the interior sector angles ([[thm-gauss-bonnet-for-a-geodesic-triangle]]).

[F5] The Axiom of Choice is the choice-function principle ([[def-axiom-of-choice]]). It licenses the AC-qualified geodesic formula used at step 2.2.

## Verification

**Proof technique:** exhibit a global positive orthonormal frame, compute its connection form and curvature by the structure equation, then insert $K\equiv-1$ into the geodesic-triangle formula.

1.1 On $\mathbb H$ oriented so that $(\partial_x,\partial_y)$ is positive, the fields $e_1=y\,\partial_x$ and $e_2=y\,\partial_y$ are smooth and globally defined. Their Gram matrix is the identity because $g(e_1,e_1)=y^2\cdot y^{-2}=1$, $g(e_2,e_2)=y^2\cdot y^{-2}=1$ and $g(e_1,e_2)=0$; hence $(e_1,e_2)$ is a global smooth positive orthonormal frame. [given]

2.1 With $g_{xx}=g_{yy}=y^{-2}$ and $g_{xy}=0$, all $x$-derivatives of the coefficients vanish and $\partial_yg_{xx}=\partial_yg_{yy}=-2y^{-3}$. Formula [F2] gives $\Gamma^x{}_{xy}=\Gamma^x{}_{yx}=\tfrac12y^2(-2y^{-3})=-1/y$, $\Gamma^y{}_{xx}=\tfrac12y^2(2y^{-3})=1/y$ and $\Gamma^y{}_{yy}=\tfrac12y^2(-2y^{-3})=-1/y$, while all remaining symbols vanish. [F2, step 1.1, algebra]

2.2 Let $T$ be the supplied compact geodesic triangle of area $A$, regarded with the orientation induced from $dx\wedge dy$ on $\mathbb H$; its boundary receives the outward-normal-first orientation. Thus $T$ is positively oriented relative to the ambient area form. By the disk-region hypothesis it is a compact regular oriented disk region with exactly three vertices, its sides are regular $C^2$ geodesic segments with non-antipodal one-sided tangents, and the global frame of step 1.1 supplies a frameable neighbourhood. Under the assumed AC [F5], [F4] applies: $\int_TK\,dA=\alpha+\beta+\gamma-\pi$ for the interior sector angles. [F4, F5, step 1.1, given]

3.1 The coordinate formulas of step 2.1 give $\nabla_{\partial_x}\partial_x=(1/y)\partial_y$ and $\nabla_{\partial_y}\partial_x=-(1/y)\partial_x$. Since $\nabla_{e_1}e_1=y\,\nabla_{\partial_x}(y\partial_x)=y\bigl((\partial_xy)\partial_x+y\nabla_{\partial_x}\partial_x\bigr)=y\,\partial_y=e_2$ and $\nabla_{e_2}e_1=y\,\nabla_{\partial_y}(y\partial_x)=y\bigl((\partial_yy)\partial_x+y\nabla_{\partial_y}\partial_x\bigr)=y(\partial_x-\partial_x)=0$, the connection form satisfies $\omega(e_1)=g(e_2,e_2)=1$ and $\omega(e_2)=0$. Hence $\omega$ is the coframe element dual to $e_1$, namely $e^1=dx/y$. [step 2.1, algebra]

4.1 Therefore $d\omega=d(dx/y)=y^{-2}\,dx\wedge dy$. The dual coframe is $e^1=dx/y$ and $e^2=dy/y$, so $e^1\wedge e^2=y^{-2}\,dx\wedge dy$; by [F3] this is the Riemannian volume form $dA$ of the chosen orientation, and $d\omega=dA$. [F3, step 3.1, algebra]

5.1 The structure equation [F1] applied to the frame of step 1.1 gives $d\omega=-K\,dA$; with step 4.1 this forces $K\equiv-1$ on $\mathbb H$. Consequently, for any positively oriented compact surface region $T$ inside the frameable open set $\mathbb H$, $\int_TK\,dA=-\int_TdA=-A$. [F1, step 1.1, step 4.1, algebra]

6.1 Substituting the value $\int_TK\,dA=-A$ of step 5.1 into step 2.2 gives $\alpha+\beta+\gamma=\pi-A$. The interior of a nonempty disk region is nonempty and the area form $y^{-2}dx\wedge dy$ is positive there, so $A>0$ and consequently $\alpha+\beta+\gamma<\pi$: every such hyperbolic angle sum is a strict area defect of $\pi$. [step 5.1, step 2.2, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 156-172, works the constant-curvature examples through the local Gauss-Bonnet formula, and Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1 together with the Poincare upper half-plane model, records the same computation. The Christoffel symbols are evaluated here from [[prop-christoffel-formula-for-the-levi-civita-connection]] on the explicit frame $(y\partial_x,y\partial_y)$, and the curvature is read off from [[thm-gaussian-curvature-structure-equation]]; the angle formula is [[thm-gauss-bonnet-for-a-geodesic-triangle]]. No global result about hyperbolic geometry beyond this local computation is used.
