---
id: def-gr-fx-conformal-constraint-data
kind: definition
title: "Vacuum conformal constraint data"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-smooth-manifold
  - def-smooth-tensor-field
  - def-riemannian-metric-and-riemannian-manifold
  - def-levi-civita-connection
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-christoffel-symbols-of-an-affine-connection
  - prop-christoffel-formula-for-the-levi-civita-connection
  - def-curvature-of-an-affine-connection
  - thm-curvature-is-a-type-one-three-tensor
  - def-contraction-of-a-mixed-tensor
  - lem-contraction-is-independent-of-the-basis-formula
  - def-gr-smooth-lorentzian-objects
  - lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form
  - def-integer-power
  - lem-power-laws
  - thm-algebra-of-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - prop-identity-maps-and-composites-of-smooth-maps-are-smooth
  - def-countable-choice
  - def-gr-spacelike-initial-data-and-constraints
  - thm-gr-constraint-equations-in-normal-frame
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-smooth-tensor-field: mathematical-premise
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  def-levi-civita-connection: mathematical-premise
  thm-fundamental-theorem-of-riemannian-geometry: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  prop-christoffel-formula-for-the-levi-civita-connection: mathematical-premise
  def-curvature-of-an-affine-connection: mathematical-premise
  thm-curvature-is-a-type-one-three-tensor: mathematical-premise
  def-contraction-of-a-mixed-tensor: mathematical-premise
  lem-contraction-is-independent-of-the-basis-formula: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  def-integer-power: mathematical-premise
  lem-power-laws: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  prop-identity-maps-and-composites-of-smooth-maps-are-smooth: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
physical_scope: "Pure mathematical definition of compact vacuum, zero-cosmological-constant conformal initial data and its algebraic constraint residuals; no embedded development, existence theorem, or empirical claim is asserted."
sources:
  references:
    - title: "É. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012; author preprint arXiv:gr-qc/0703035v1), §6.3.3, §§6.4.1–6.4.2, §§6.5.2–6.5.3, and §§8.2.2–8.2.4"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Full 220-page lecture-note PDF retrieved; complete relevant sections inspected, including equations (6.48)–(6.52), (6.79)–(6.83), (6.101)–(6.104), and (8.5)–(8.8), plus the CMC Lichnerowicz discussion."
    - title: "R. Bartnik and J. Isenberg, The Constraint Equations, in The Einstein Equations and the Large Scale Behavior of Gravitational Fields (Birkhäuser, 2004), arXiv:gr-qc/0405092v1"
      url: "https://arxiv.org/pdf/gr-qc/0405092"
      locator: "Full 34-page review chapter retrieved; the relevant §4.1 discussion and equations (47)–(56) were inspected for free conformal data, CMC decoupling, the Lichnerowicz equation and the limits of general solvability."
verification:
  precheck: pass
---

## Definition

Let $\Sigma$ be a nonempty compact smooth three-manifold without boundary. In
this item, “vacuum” means that the stress-energy tensor is zero and the
cosmological constant is fixed at $\Lambda=0$. Let $\widetilde h$ be a smooth
Riemannian metric on $\Sigma$, let $\widetilde\sigma$ be a smooth symmetric
covariant two-tensor field, let $\tau\in\mathbb R$ be constant, and let
$\phi\in C^\infty(\Sigma,\mathbb R)$ satisfy $\phi(p)>0$ at every $p\in\Sigma$.
Use the positive scalar $\phi$ as a dimensionless conformal factor.

Write $\widetilde D$ for the Levi-Civita connection of $\widetilde h$ and
$D$ for that of the metric $h$ defined below. In a chart, $\widetilde h^{ij}$
denotes the inverse matrix to $\widetilde h_{ij}$. It is smooth because
$\det(\widetilde h_{ij})>0$ and the matrix inverse is the adjugate divided by
the determinant. For any smooth Riemannian metric $m$ on $\Sigma$, with
Levi-Civita connection $D^m$, define
$$R^m(X,Y)Z:=D^m_XD^m_YZ-D^m_YD^m_XZ-D^m_{[X,Y]}Z.$$
In a chart, $R[m]^a{}_{bij}$ denotes the components of
$R^m(\partial_i,\partial_j)\partial_b$. Define
$\operatorname{Ric}(m)_{ij}:=R[m]^k{}_{ikj}$ and
$R(m):=m^{ij}\operatorname{Ric}(m)_{ij}$. In particular,
$\widetilde R:=R(\widetilde h)$, with the same curvature sign convention.
Define the scalar Laplacian by
$$\widetilde\Delta f:=\widetilde h^{ij} (\partial_i\partial_j f-\widetilde\Gamma^k{}_{ij}\partial_k f),$$
where $\widetilde\Gamma^k{}_{ij}$ are the Christoffel symbols of
$\widetilde D$, given by the Levi-Civita Christoffel formula
[[prop-christoffel-formula-for-the-levi-civita-connection]].
The curvature sign is the one displayed above. All traces, norms, raising of
indices and contractions in this item use the metric indicated by the
subscript. In particular,
$$\operatorname{tr}_{\widetilde h}\widetilde\sigma:=\widetilde h^{ij}\widetilde\sigma_{ij},\qquad |\widetilde\sigma|_{\widetilde h}^2:=\widetilde h^{ik}\widetilde h^{j\ell}\widetilde\sigma_{ij}\widetilde\sigma_{k\ell},\qquad (\operatorname{div}_{\widetilde h}\widetilde\sigma)_j:=\widetilde h^{ik}\widetilde D_i\widetilde\sigma_{kj}.$$
The tensor $\widetilde\sigma$ is **transverse-traceless** (TT) when it is
symmetric and both displayed trace and divergence vanish.

Define
$$h:=\phi^4\widetilde h,\qquad K:=\phi^{-2}\widetilde\sigma+\frac{\tau}{3}h.$$
Because $\phi>0$, $h$ is a smooth Riemannian metric; because
$\widetilde\sigma$ and $h$ are symmetric, $K$ is a smooth symmetric tensor.
Here $h$ is the candidate induced Riemannian metric and $K$ is the candidate
second fundamental form, with the library convention
$K(X,Y)=g(\nabla_X n,Y)$ when the data are induced by a spacelike hypersurface
with future unit normal $n$. The pair is **vacuum conformal constraint data**.
It is abstract data on $\Sigma$; no embedding into a spacetime is part of this
definition. For its embedded Lorentzian interpretation assume the Axiom of
Countable Choice $\mathrm{AC}_\omega$, as in the supplied smooth tangent-bundle
convention; the algebraic tensor definitions themselves use no choice
principle. Define the $h$-trace, squared norm and divergence by
$$\operatorname{tr}_hK:=h^{ij}K_{ij},\qquad |K|_h^2:=h^{ik}h^{j\ell}K_{ij}K_{k\ell},\qquad (\operatorname{div}_hK)_j:=h^{ik}D_iK_{kj}.$$
With $R(h)$ computed using $h$, define the Hamiltonian and momentum residuals
$$\mathcal H(h,K):=R(h)+(\operatorname{tr}_hK)^2-|K|_h^2,\qquad \mathcal M_j(h,K):=h^{ik}D_iK_{kj}-D_j(\operatorname{tr}_hK).$$
The data satisfy the vacuum constraint equations when
$\mathcal H(h,K)=0$ and $\mathcal M(h,K)=0$. For an embedded hypersurface,
these are the normal and normal-tangential Einstein constraints in the
specified $K$ convention.

Tensoriality of curvature and basis-independent contraction make these scalar
curvatures independent of the chart.
For dimensional bookkeeping in the SI length convention, $[\tau]=\mathrm m^{-1}$,
$[R(h)]=[\widetilde R]=[|\widetilde\sigma|_{\widetilde h}^2]
=[\widetilde\Delta]=\mathrm m^{-2}$, and $[\phi]=1$. Thus all terms in the
scalar constraint equation have units $\mathrm m^{-2}$.

## Definition references

[[def-smooth-manifold]]

[[def-smooth-tensor-field]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-levi-civita-connection]]

[[thm-fundamental-theorem-of-riemannian-geometry]]

[[def-christoffel-symbols-of-an-affine-connection]]

[[prop-christoffel-formula-for-the-levi-civita-connection]]

[[def-curvature-of-an-affine-connection]]

[[thm-curvature-is-a-type-one-three-tensor]]

[[def-contraction-of-a-mixed-tensor]]

[[lem-contraction-is-independent-of-the-basis-formula]]

[[def-gr-smooth-lorentzian-objects]]

[[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]

[[def-integer-power]]

[[lem-power-laws]]

[[thm-algebra-of-derivatives]]

[[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]

[[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]

[[def-countable-choice]]

[[def-gr-spacelike-initial-data-and-constraints]]

[[thm-gr-constraint-equations-in-normal-frame]]

## Facts & Assumptions

**Given:** A nonempty compact smooth three-manifold, a smooth Riemannian metric
$\widetilde h$, a smooth symmetric covariant tensor $\widetilde\sigma$, a
positive smooth scalar $\phi$, and a constant $\tau$. For the embedded
Lorentzian constraint interpretation assume $\mathrm{AC}_\omega$.

[A1] [[def-countable-choice]], [[def-gr-smooth-lorentzian-objects]]:
$\mathrm{AC}_\omega$ is the axiom that every countable family of nonempty sets
has a choice function; the Lorentzian time-orientation and smooth normal-field
conventions use this assumption for the embedded interpretation.

[F1] [[def-smooth-manifold]], [[def-smooth-tensor-field]]: a smooth manifold
has smooth coordinate charts, and a smooth tensor field has smooth coordinate
components.

[F2] [[def-riemannian-metric-and-riemannian-manifold]]: a Riemannian metric is
a smooth symmetric covariant two-tensor that is positive definite at every
point.

[F3] [[thm-fundamental-theorem-of-riemannian-geometry]]: each smooth
Riemannian metric has a unique Levi-Civita connection.

[F4] [[def-integer-power]]: negative integer powers are defined for nonzero
bases; [[lem-power-laws]] gives their product and quotient identities.

[F5] [[thm-algebra-of-derivatives]],
[[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]: the quotient
rule holds for a nonzero denominator, and finite sums, products and
compositions of $C^k$ maps remain $C^k$ for every finite $k$.

[F6] [[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]: the
composition of smooth maps between smooth manifolds is smooth.

[F7] [[prop-christoffel-formula-for-the-levi-civita-connection]]: the
Christoffel symbols of a smooth Riemannian metric are
$\Gamma^a{}_{bc}=\tfrac12 g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$.

[F8] [[thm-curvature-is-a-type-one-three-tensor]]: the curvature defined from
an affine connection is a tensor field of type $(1,3)$.

[F9] [[def-contraction-of-a-mixed-tensor]]: contraction pairs one covariant
and one contravariant slot of a tensor.

[F10] [[lem-contraction-is-independent-of-the-basis-formula]]: tensor
contraction has the same value in every basis.

[F11] [[def-gr-spacelike-initial-data-and-constraints]]: the library uses
$K(X,Y)=g(\nabla_Xn,Y)$ for the second fundamental form, and the vacuum
constraints have $\Lambda=0$ and vanishing stress-energy.

[F12] [[thm-gr-constraint-equations-in-normal-frame]]: in that convention the
normal and normal-tangential Einstein projections give the Hamiltonian and
momentum constraint residuals.

## Proof

1.1 For each integer $n\ge1$, induction by the product rule gives
$(t^n)'=nt^{n-1}$, and the quotient rule on $t>0$ gives
$(t^{-n})'=-nt^{-n-1}$; iterating this identity shows that every derivative
of $t\mapsto t^{-2}$ is a constant multiple of a negative integer power, hence
is continuous on $(0,\infty)$. The map $t\mapsto t^4$ is a polynomial.
Thus both maps are smooth there; [F5] gives their $C^k$ regularity at every
finite order and [F6] makes their composites with $\phi$ smooth. Hence
$h=\phi^4\widetilde h$ is smooth,
symmetric and positive definite, because for every nonzero $v\in T_p\Sigma$,
$h_p(v,v)=\phi(p)^4\widetilde h_p(v,v)>0$ by [F2]. The same rules show that
$K=\phi^{-2}\widetilde\sigma+(\tau/3)h$ is smooth and symmetric. The
Riemannian connection theorem [F3] supplies both $\widetilde D$ and $D$.
[F1, F2, F3, F4, F5, F6, algebra]

2.1 In each chart $\det(\widetilde h_{ij})>0$ and
$\widetilde h^{ij}=\operatorname{adj}(\widetilde h)_{ij}/\det(\widetilde h)$;
the adjugate entries are polynomials in the smooth metric components [F1],
and the reciprocal is smooth by the same quotient-rule induction as in the
earlier proof step 1.1 and finite-order algebra closure [F5]. Thus
$\widetilde h^{ij}$ is smooth;
$h^{ij}=\phi^{-4}\widetilde h^{ij}$ is smooth by step 1.1. Formula [F7]
therefore makes the Christoffel symbols smooth, so the displayed Laplacian is
defined for smooth $f$. By [F8] curvature is tensorial, and by [F9, F10] its
Ricci and scalar contractions do not depend on the chart. The same
basis-independent contractions define the traces and squared norms; all
derivative terms use the connections supplied by [F3].
[F1, F3, F5, F7, F8, F9, F10, step 1.1, algebra]

3.1 For data induced by an embedded spacelike hypersurface, the convention in
[F11] fixes the sign of $K$, and [F12] gives precisely the stated Hamiltonian
and momentum residuals when $\Lambda=0$ and stress-energy vanishes. The
abstract data definition itself makes no embedding or development assertion.
[A1, F11, F12] ∎
