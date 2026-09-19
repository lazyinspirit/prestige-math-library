---
id: prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics
kind: proposition
title: Compact Lie groups admit bi-invariant metrics
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-integration-against-haar-is-invariant-under-translations-and-conjugation, def-riemannian-metric-and-riemannian-manifold, def-conjugation-and-the-adjoint-representation-of-a-lie-group, thm-fundamental-theorem-of-riemannian-geometry, def-axiom-of-choice, def-geodesic-of-an-affine-connection, thm-existence-uniqueness-and-smooth-dependence-of-geodesics, cor-every-vector-space-has-a-basis, prop-standard-coordinate-inner-products, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, thm-linearity-of-the-lebesgue-integral-on-l-one]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §4, Proposition 4.24 and the averaging construction before it"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§10"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every compact Lie group admits a Riemannian metric
invariant under both left and right translations; for such a metric, the
geodesics through the identity are precisely the one-parameter subgroups
$t\mapsto\exp(tX)$, $X\in\operatorname{Lie}G$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with identity $e$ and Lie algebra $\mathfrak g$, and normalized Haar measure $\mu$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the normalized Haar measure used in [L4] and [L6].

[L1] A Riemannian metric is a smooth bundle metric on $TM$; the Levi-Civita connection of a Riemannian metric is characterised by symmetry, $\nabla_XY-\nabla_YX=[X,Y]$, and metric compatibility, $X\langle Y,Z\rangle=\langle\nabla_XY,Z\rangle+\langle Y,\nabla_XZ\rangle$, and it is unique ([[thm-fundamental-theorem-of-riemannian-geometry]]).

[L2] A geodesic is a smooth curve with $\nabla_{\gamma'}\gamma'=0$; for every initial datum $(p,v)\in TG$ there is a unique maximal geodesic $\gamma_{p,v}$ with $\gamma_{p,v}(0)=p$ and $\gamma'_{p,v}(0)=v$ ([[def-geodesic-of-an-affine-connection]], [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

[L3] For $\operatorname{Ad}:G\to\operatorname{GL}(\mathfrak g)$ one has $\operatorname{Ad}_{gh}=\operatorname{Ad}_g\operatorname{Ad}_h$ and $\operatorname{Ad}_e=\mathrm{id}_{\mathfrak g}$. For $x,h\in G$ and $\xi\in\mathfrak g$, the chain rule gives $$dR_h\,dL_x\,\xi=dL_{xh}\,\operatorname{Ad}_{h^{-1}}\xi,$$ because $L_{(xh)^{-1}}\circ R_h\circ L_x$ sends $y$ to $h^{-1}yh$ ([[def-conjugation-and-the-adjoint-representation-of-a-lie-group]]).

[L4] For every integrable $f$ and $h\in G$, $\int_Gf(gh)\,d\mu(g)=\int_Gf(g)\,d\mu(g)$ ([[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]]).

[L5] $\mathfrak g$ admits a positive-definite inner product $\langle\cdot,\cdot\rangle_0$: choose a basis of $\mathfrak g$ ([[cor-every-vector-space-has-a-basis]]) and transport the standard inner product of $\mathbb R^n$ ([[prop-standard-coordinate-inner-products]]).

[L6] If a continuous real function $\phi\ge0$ on $G$ satisfies $\phi(g_0)>0$ for some $g_0$, then $\int_G\phi\,d\mu>0$, and continuous functions on the compact group are bounded and hence integrable for $\mu$; the integral is linear and monotone ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct.

1.1 By [L5] fix an inner product $(\cdot,\cdot)_0$ on $\mathfrak g$ and define $\langle X,Y\rangle:=\int_G(\operatorname{Ad}(g)X,\operatorname{Ad}(g)Y)_0\,d\mu(g)$ for $X,Y\in\mathfrak g$; the integrand is continuous in $g$ because $\operatorname{Ad}$ is smooth and $(\cdot,\cdot)_0$ is bilinear in finite dimension, so it is integrable by [L6] and the definition is unambiguous. [L3, L5, L6]

2.1 The form $\langle\cdot,\cdot\rangle$ is a positive-definite inner product: it is bilinear and symmetric because the integrand is, and if $X\ne0$ then $g\mapsto(\operatorname{Ad}(g)X,\operatorname{Ad}(g)X)_0$ is continuous, nonnegative, and equal to $(X,X)_0>0$ at $g=e$, so its integral is positive by [L6], while $\langle X,X\rangle\ge0$ always. It is $\operatorname{Ad}$-invariant: for $h\in G$, writing $\operatorname{Ad}(g)\operatorname{Ad}(h)=\operatorname{Ad}(gh)$ and applying the right-translation invariance [L4] to the function $g\mapsto(\operatorname{Ad}(g)X,\operatorname{Ad}(g)Y)_0$ gives $\langle\operatorname{Ad}(h)X,\operatorname{Ad}(h)Y\rangle=\int_G(\operatorname{Ad}(gh)X,\operatorname{Ad}(gh)Y)_0\,d\mu(g)=\langle X,Y\rangle$. [L3, L4, L6, step 1.1]

3.1 Define the metric $g_x(u,v):=\langle dL_{x^{-1}}u,dL_{x^{-1}}v\rangle$ for $x\in G$ and $u,v\in T_xG$; it is a smooth positive-definite bundle metric, because left translation is a diffeomorphism and $\langle\cdot,\cdot\rangle$ is a positive-definite inner product on the single vector space $\mathfrak g$ by step 2.1. [L1, step 2.1]

4.1 The metric $g$ is right-invariant: for $h\in G$, $x\in G$ and $u,v\in T_xG$, write $u=dL_x\xi$ and $v=dL_x\eta$. The identity in [L3] gives $$g_{xh}(dR_hu,dR_hv) =\langle\operatorname{Ad}_{h^{-1}}\xi, \operatorname{Ad}_{h^{-1}}\eta\rangle =\langle\xi,\eta\rangle=g_x(u,v)$$ by the $\operatorname{Ad}$-invariance of step 2.1. It is left-invariant by construction, so it is bi-invariant. [L3, step 2.1, step 3.1]

5.1 For left-invariant vector fields $X,Y,Z$ the Levi-Civita connection of $g$ satisfies $\nabla_XY=\tfrac12[X,Y]$: the Koszul identity $2\langle\nabla_XY,Z\rangle=X\langle Y,Z\rangle+Y\langle Z,X\rangle-Z\langle X,Y\rangle+\langle[X,Y],Z\rangle-\langle[Y,Z],X\rangle+\langle[Z,X],Y\rangle$, which follows from symmetry and metric compatibility in [L1], reduces to $2\langle\nabla_XY,Z\rangle=\langle[X,Y],Z\rangle-\langle[Y,Z],X\rangle+\langle[Z,X],Y\rangle$ because $X\langle Y,Z\rangle=Y\langle Z,X\rangle=Z\langle X,Y\rangle=0$ for left-invariant fields and a left-invariant metric; differentiating the $\operatorname{Ad}$-invariance of step 2.1 along $g=\exp(tX)$ at $t=0$ gives the invariance identity $\langle[X,U],V\rangle=-\langle U,[X,V]\rangle$, which turns the last two terms into $\langle[X,Y],Z\rangle$ and yields $\langle\nabla_XY,Z\rangle=\langle\tfrac12[X,Y],Z\rangle$; as $Z$ ranges over a basis of $\mathfrak g$ and $\langle\cdot,\cdot\rangle$ is nondegenerate, $\nabla_XY=\tfrac12[X,Y]$. [L1, step 2.1, step 4.1]

6.1 Let $X\in\mathfrak g$ and let $\tilde X$ be its left-invariant field; the curve $\gamma(t):=\exp(tX)$ satisfies $\gamma'(t)=\tilde X(\gamma(t))$, so $\nabla_{\gamma'}\gamma'=\nabla_{\tilde X}\tilde X=\tfrac12[\tilde X,\tilde X]=0$ by step 5.1, and $\gamma$ is a geodesic through the identity; conversely, if $\gamma$ is a geodesic with $\gamma(0)=e$ and $\gamma'(0)=X$, then $\gamma$ and $t\mapsto\exp(tX)$ are geodesics with the same initial datum, so by the uniqueness in [L2] they agree wherever $\gamma$ is defined. Hence the geodesics through the identity are exactly the one-parameter subgroups. The Axiom of Choice entered only through the averaging in [L4] and [L6]. [A1, L2, step 5.1] ∎
