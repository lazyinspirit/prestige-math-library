---
id: lem-gr-fx-null-screen-index-form
kind: lemma
title: "Null screen index form with a spacelike initial boundary"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
physical_scope: "Pure Lorentzian differential geometry; the result is a conditional second-variation identity and not an empirical statement."
deps:
  - def-gr-fx-null-screen-geometry
  - def-gr-curvature-tensor-and-derived-tensors
  - def-embedded-submanifold-and-slice-chart
  - def-countable-choice
  - thm-gr-curvature-algebraic-symmetries
  - thm-gr-local-geodesics-and-exponential-map
dependency_roles:
  def-gr-fx-null-screen-geometry: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "E. Gourgoulhon and J. L. Jaramillo, A 3+1 perspective on null hypersurfaces and isolated horizons, Physics Reports 423 (2006), arXiv:gr-qc/0503113v2: §§2.6-2.7 and 5.5-5.8"
      url: "https://arxiv.org/pdf/gr-qc/0503113"
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, full 106-page PDF: §§8.2 and 8.4"
      url: "https://www.claymath.org/wp-content/uploads/2022/03/WittenLectures.pdf"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice for the smooth Lorentzian supplier conventions. Let
$S$ be a smooth spacelike embedded two-surface in a time-oriented Lorentzian
four-manifold. Let $\ell$ be a smooth future null normal field on a
neighborhood of $p$ in $S$, and let $\gamma:[0,L]\to M$ be a future affine
null geodesic normal to $S$ at $p=\gamma(0)$ with initial tangent $\ell(p)$.
Identify the positive
screen $\ell^\perp/\mathbb R\ell$ along the interval with an orthogonal
screen subbundle using a parallel null frame. For a screen field $V$, write
$D_\ell V$ for its screen covariant derivative and
$\mathcal R V:=[R(V,\ell)\ell]$. If $V,W$ are smooth screen fields with
$V(0),W(0)\in T_pS$ and $V(L)=W(L)=0$, define
$$I(V,W):=\int_0^L\bigl(\bar q(D_\ell V,D_\ell W)- \bar q(\mathcal RV,W)\bigr)\,d\lambda+ \chi_\ell(V(0),W(0)).$$
Then $I$ is a well-defined symmetric bilinear form. Every such $V$ is the
screen variational field of a smooth family of curves $F_s$ with
$F_s(0)\in S$, $F_s(L)=\gamma(L)$ and $F_0=\gamma$. For this family, with
$$E(s):=\frac12\int_0^L g(\partial_\lambda F_s,\partial_\lambda F_s)\,d\lambda,$$
the energy second variation is
$$E''(0)=I(V,V).$$

## Statement references

[[def-gr-fx-null-screen-geometry]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-embedded-submanifold-and-slice-chart]]

[[def-countable-choice]]

[[thm-gr-curvature-algebraic-symmetries]]

[[thm-gr-local-geodesics-and-exponential-map]]

## Facts & Assumptions

**Given:** The spacelike surface and affine null geodesic specified in the
Statement, and Countable Choice.

[F1] The screen quotient has a positive metric, $\chi_\ell$ is symmetric,
and screen covariant differentiation along an affine generator is
well-defined ([[def-gr-fx-null-screen-geometry]]).

[F2] Curvature is
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$; its algebraic
symmetries imply that $[V]\mapsto[R(V,\ell)\ell]$ is self-adjoint on the
positive screen ([[def-gr-curvature-tensor-and-derived-tensors]],
[[thm-gr-curvature-algebraic-symmetries]]).

[F3] An embedded surface has local slice coordinates in which it is a
coordinate plane ([[def-embedded-submanifold-and-slice-chart]]).

[F4] The exponential map is smooth on a neighborhood of the zero section
and is defined for all sufficiently small initial vectors on a compact
geodesic segment ([[thm-gr-local-geodesics-and-exponential-map]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is the only choice principle
assumed for the Lorentzian bundle convention ([[def-countable-choice]]).

## Proof

**Given:** [F1]–[F4] and [A1].

1.1 Use the smooth tangent-bundle convention in [A1]. In a parallel
orthonormal screen frame, $\mathcal R$ has matrix entries
$\bar q(R(E_A,\ell)\ell,E_B)$. The curvature symmetries [F2] make this
matrix symmetric, and $\chi_\ell$ is symmetric by [F1]. Each term in $I$ is
therefore bilinear and independent of the representative in
$\ell^\perp/\mathbb R\ell$; changing a representative by a multiple of
$\ell$ leaves the screen class and the screen connection unchanged. The
contractions are invariant under orthonormal screen-frame changes, so $I$ is
a well-defined symmetric bilinear form. [F1, F2, A1, algebra]

2.1 For a smooth variation $F_s$, put $T=\partial_\lambda F_s$ and
$Z=\partial_sF_s$. Torsion-freeness gives $D_sT=D_\lambda Z$. The first
variation is
$$E'(s)=[g(Z,T)]_0^L-\int_0^L g(Z,D_\lambda T)\,d\lambda.$$
At $s=0$, $T=\ell$, $D_\lambda T=0$, $Z(L)=0$, and $Z(0)$ is tangent to
$S$ and orthogonal to $\ell$, so $E'(0)=0$. Differentiating once more and
using $[D_s,D_\lambda]T=R(Z,T)T$ gives, at $s=0$,
$$E''(0)=[g(D_sZ,\ell)]_0^L+ \int_0^L\bigl(|D_\ell Z|^2- g(R(Z,\ell)\ell,Z)\bigr)\,d\lambda.$$
Here the boundary terms $[g(Z,D_\ell Z)]_0^L$ from differentiation and
integration by parts cancel. The final endpoint contribution is zero because
$F_s(L)$ is fixed. At the initial endpoint, let $X=Z(0)\in T_pS$; along
$\alpha(s)=F_s(0)\in S$ one has $g(\alpha'(s),\ell(\alpha(s)))=0$. Differentiating
this identity gives $g(D_sZ(0),\ell)=-\chi_\ell(X,X)$, so the initial
boundary contribution in the bracket is $+\chi_\ell(X,X)$. Substitution
proves $E''(0)=I(Z,Z)$. [F1, F2, step 1.1, algebra]

3.1 It remains to realize every admissible screen field $V$. Choose its
orthogonal representative along $\gamma$. By [F4], for sufficiently small
$s$ the preliminary family
$\widetilde F_s(\lambda)=\exp_{\gamma(\lambda)}(sV(\lambda))$ is smooth on
the compact interval; a finite subdivision supplies the local exponential
domains. At $\lambda=L$, $V(L)=0$, so $\widetilde F_s(L)=\gamma(L)$. At
$\lambda=0$, use a slice chart $(y,z)$ from [F3] with $S=\{z=0\}$. Since
$V(0)\in T_pS$, the normal coordinate of $\widetilde F_s(0)$ has value
$z=O(s^2)$ and zero first derivative at $s=0$. Choose a smooth cutoff
$\eta(\lambda)$ equal to $1$ at $0$ and zero before the end of this chart.
Near $\lambda=0$, replace the preliminary coordinates by
$$y_s(\lambda)+\eta(\lambda)\bigl(y(\alpha(s))-y_s(0)\bigr),\qquad z_s(\lambda)-\eta(\lambda)z_s(0),$$
where $\alpha(s)\subset S$ is any smooth chart curve with
$\alpha(0)=p$ and $\alpha'(0)=V(0)$. At $\lambda=0$ this is exactly
$\alpha(s)$; its first $s$-derivative at $0$ is unchanged because the
correction has zero first derivative. The cutoff vanishes before the final
endpoint, so the endpoint remains fixed. This constructs the required
variation with screen variational field $V$. [F3, F4, A1, construct,
step 2.1]

4.1 The field realization in step 3.1 and the second-variation calculation
in step 2.1 establish the statement for every admissible $V$; symmetry and
well-definedness were proved in step 1.1. [F1, F2, step 1.1, step 2.1,
step 3.1] ∎

## Remarks

For SI interpretation use $x^0=ct$, dimensionless metric components and
$\lambda$ in metres. The index form has units of length when a variation
field is measured in metres. Its boundary sign is tied to
$\chi_\ell(X,Y)=g(\nabla_X\ell,Y)$.
