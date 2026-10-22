---
id: lem-gr-fx-null-screen-index-form
kind: lemma
title: "Null screen index form with a spacelike initial boundary"
status: published
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
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice for the smooth Lorentzian supplier conventions. Let
$(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold, and let
$S\subset M$ be a smooth embedded two-manifold without boundary with positive
induced metric $q:=g|_{TS}$. Choose $p\in S$, a smooth future null normal field
$\ell$ near $p$ in $S$, and $L>0$. Let $\gamma:[0,L]\to M$ be smooth up to
its endpoints, future-directed, affine and null, with $\gamma(0)=p$,
$\dot\gamma(0)=\ell(p)$, and $\dot\gamma$ normal to $S$ at $p$. For each
$\lambda\in[0,L]$, put
$u_\lambda:=N_{\gamma(\lambda)}/\sqrt{-g_{\gamma(\lambda)}(N_{\gamma(\lambda)},N_{\gamma(\lambda)})}$,
$\alpha_\lambda:=-g_{\gamma(\lambda)}(\dot\gamma(\lambda),u_\lambda)>0$, and
$\ell_\lambda:=\dot\gamma(\lambda)$. Define
$$n_\lambda:=\alpha_\lambda^{-1}u_\lambda-\frac{1}{2\alpha_\lambda^2}\dot\gamma(\lambda),\qquad E_\lambda:=\operatorname{span}\{\dot\gamma(\lambda),n_\lambda\}^{\perp}.$$
Then $n_\lambda$ is null with $g(\dot\gamma,n_\lambda)=-1$, and the
quotient map $E_\lambda\to\mathscr S_\lambda$, $X\mapsto[X]$, is an isometry
onto the positive screen $\mathscr S_\lambda:=\ell_\lambda^\perp/\mathbb R\ell_\lambda$; the
spaces $E_\lambda$ form a smooth rank-two screen subbundle along $\gamma$.
The quotient metric is $\bar q([X],[Y]):=g(X,Y)$. Let $\nabla$ be the
metric-selected connection and $R$ its curvature with convention
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$. At
$\lambda=0$, define $\chi_\ell(X,Y):=g(\nabla_X\ell,Y)$ for
$X,Y\in T_pS$ and identify $T_pS$ with $\mathscr S_0$ by the isometry
$X\mapsto[X]$.
A screen field is a smooth section of $\mathscr S$ along $\gamma$; write
$D_\ell V$ for its screen covariant derivative along $\ell_\lambda$, and set
$\mathcal R V:=[R(V,\ell_\lambda)\ell_\lambda]$.
If $V,W$ are screen fields with
$V(0),W(0)\in T_pS$ under the stated isometry and $V(L)=W(L)=0$, define
$$I(V,W):=\int_0^L\bigl(\bar q(D_\ell V,D_\ell W)- \bar q(\mathcal RV,W)\bigr)\,d\lambda+ \chi_\ell(V(0),W(0)).$$
Then $I$ is a well-defined symmetric bilinear form. For every such $V$ there
are $\varepsilon>0$ and a smooth map
$F:(-\varepsilon,\varepsilon)\times[0,L]\to M$ whose sections $F_s$ have
screen variational field $V$, with $F_s(0)\in S$, $F_s(L)=\gamma(L)$ and
$F_0=\gamma$. For this family, with
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

**Given:** The spacelike surface and affine null geodesic specified in the Statement, and Countable Choice.

[F1] The screen quotient has a positive metric, $\chi_\ell$ is symmetric, and screen covariant differentiation along an affine generator is well-defined ([[def-gr-fx-null-screen-geometry]]).

[F2] Curvature is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$; its algebraic symmetries imply that $[V]\mapsto[R(V,\ell)\ell]$ is self-adjoint on the positive screen ([[def-gr-curvature-tensor-and-derived-tensors]], [[thm-gr-curvature-algebraic-symmetries]]).

[F3] An embedded surface has local slice coordinates in which it is a coordinate plane ([[def-embedded-submanifold-and-slice-chart]]).

[F4] The exponential map is smooth on a neighborhood of the zero section and is defined for all sufficiently small initial vectors on a compact geodesic segment ([[thm-gr-local-geodesics-and-exponential-map]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is the only choice principle assumed for the Lorentzian bundle convention ([[def-countable-choice]]).

## Proof

**Given:** [F1]–[F4] and [A1].

1.1 Use the smooth tangent-bundle convention in [A1]. For representatives $X,Y\in\dot\gamma^\perp$, the curvature symmetries [F2] give $\bar q(\mathcal R[X],[Y])=g(R(X,\dot\gamma)\dot\gamma,Y) =g(R(Y,\dot\gamma)\dot\gamma,X)=\bar q(\mathcal R[Y],[X])$. Shifting a representative by a multiple of $\dot\gamma$ leaves its screen class and the curvature contraction unchanged. The screen derivative and metric are well-defined by [F1], and $\chi_\ell$ is symmetric by [F1]. Thus the integral and boundary terms are symmetric bilinear forms on the specified screen fields, independent of representatives; $I$ is well-defined and symmetric. [F1, F2, A1, algebra]

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

3.1 It remains to realize every admissible screen field $V$. Let $V_E$ be its
smooth representative in $E_\lambda$, and let $X\in T_pS$ be the unique
vector with $[X]=V(0)$. Since $X-V_E(0)$ has zero screen class, it equals
$a\ell_0$ for a real number $a$. The lift
$$Z(\lambda):=V_E(\lambda)+a(1-\lambda/L)\ell_\lambda$$
is smooth, orthogonal to $\ell$, has screen class $V$, and satisfies
$Z(0)=X$ and $Z(L)=0$. In the rest of this construction write $V$ for
this lift $Z$. Because $D_\lambda\ell=0$, adding a multiple of $\ell$
does not change either integral contraction in the index form; its initial
boundary term is evaluated on $X$. Thus step 2.1 applies to this lift and
gives the claimed screen index form. By [F4], for sufficiently small
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

4.1 The field realization in step 3.1 and the second-variation calculation in step 2.1 establish the statement for every admissible $V$; symmetry and well-definedness were proved in step 1.1. [F1, F2, step 1.1, step 2.1, step 3.1] ∎

## Remarks

For SI interpretation use $x^0=ct$, dimensionless metric components and $\lambda$ in metres. The index form has units of length when a variation field is measured in metres. Its boundary sign is tied to $\chi_\ell(X,Y)=g(\nabla_X\ell,Y)$.
