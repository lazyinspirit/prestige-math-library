---
id: ex-gr-flat-connection-is-metric-selected
kind: example
title: "The coordinate connection of the flat chart is metric-selected"
status: published
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [ex-gr-minkowski-chart-as-a-lorentzian-manifold, def-gr-metric-selected-connection, lem-gr-connection-conditions-in-chart-components, def-affine-connection-on-a-smooth-manifold, def-christoffel-symbols-of-an-affine-connection, def-smooth-vector-field-as-a-tangent-bundle-section, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, def-countable-choice]
dependency_roles:
  ex-gr-minkowski-chart-as-a-lorentzian-manifold: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), the Christoffel connection in flat space and the polar-coordinate example (3.22)-(3.24), printed pp. 60-61 (PDF pp. 67-68)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), the vanishing components of the Levi-Civita connection in Cartesian coordinates, exercise after (1.35), printed p. 20 (PDF p. 21)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), Christoffel symbols in flat space, printed p. 104 (PDF p. 111)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Let $(M,A)$ be the flat Lorentzian four-manifold of
[[ex-gr-minkowski-chart-as-a-lorentzian-manifold]] with the global chart
$x=(x^0,x^1,x^2,x^3)$, and write $X=\sum_aX^a\partial_a$,
$Y=\sum_bY^b\partial_b$ for smooth vector fields. Define

$$\nabla_XY:=\sum_bX(Y^b)\,\partial_b .$$

Then $\nabla$ is an affine connection on $M$; its Christoffel symbols in the
global chart all vanish; and $\nabla$ is a metric-selected connection for
$(M,A)$ in the sense of [[def-gr-metric-selected-connection]], that is, it is
torsion-free and $A$-compatible. This exhibits a nonempty
$\operatorname{LC}(M,A)$; the example claims no uniqueness of the element.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(M,A)$ with global chart $x$, the operator $\nabla_XY=\sum_bX(Y^b)\partial_b$ on smooth fields, and the vanishing-coefficient data $\Gamma^c{}_{ab}=0$.

[L1] An affine connection is $\mathbb R$-bilinear, function-linear in the first argument, and satisfies $\nabla_X(fY)=X(f)Y+f\nabla_XY$ ([[def-affine-connection-on-a-smooth-manifold]]).

[L2] The Christoffel symbols in a chart are the unique smooth functions with $\nabla_{\partial_b}\partial_c=\sum_a\Gamma^a{}_{bc}\partial_a$ ([[def-christoffel-symbols-of-an-affine-connection]]).

[L3] A connection is torsion-free if and only if its Christoffel symbols are symmetric in every chart, and $A$-compatible if and only if $\partial_ag_{bc}=\sum_d(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd})$ in every chart ([[lem-gr-connection-conditions-in-chart-components]]).

[L4] A connection is metric-selected when it is both torsion-free and compatible with the metric ([[def-gr-metric-selected-connection]]).

[L5] A vector field is smooth exactly when its component functions in a smooth chart are smooth; in particular a smooth vector field has smooth component functions in the global chart ([[def-smooth-vector-field-as-a-tangent-bundle-section]], [[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

## Verification

**Proof technique:** direct.

1.1 The operator $\nabla$ is well defined on smooth fields because the component functions $Y^b$ of [L5] are smooth so $X(Y^b)$ is a smooth function. It is additive and $\mathbb R$-linear in $Y$ because the components do and $X$ is $\mathbb R$-linear; it is function-linear in $X$ because $(fX)(Y^b)=fX(Y^b)$; and $\nabla_X(fY)=\sum_bX(fY^b)\partial_b=\sum_b\bigl(X(f)Y^b+fX(Y^b)\bigr)\partial_b=X(f)Y+f\nabla_XY$. Hence $\nabla$ is an affine connection by [L1]. [L1, L5, algebra]

2.1 For the coordinate fields, $Y=\partial_b$ has constant components $Y^c=\delta^c{}_b$, so $X(Y^c)=0$ and the definition of step 1.1 gives $\nabla_{\partial_a}\partial_b=0$. By [L2] the Christoffel symbols of $\nabla$ in the global chart are $\Gamma^c{}_{ab}=0$. [step 1.1, L2]

3.1 The metric components $A_{ab}=\operatorname{diag}(-1,1,1,1)_{ab}$ are constant, so $\partial_aA_{bc}=0$; the compatibility identity of [L3] reads $0=0+0$ and holds, and the symmetry identity $\Gamma^c{}_{ab}=\Gamma^c{}_{ba}$ reads $0=0$ and holds. By [L3] the connection is torsion-free and $A$-compatible, hence metric-selected by [L4]. [step 2.1, L3, L4] ∎

## Remarks

**Choice convention.** The smooth vector fields of this example are the
tangent-bundle sections of
[[def-smooth-vector-field-as-a-tangent-bundle-section]], whose canonical smooth
structure on $TM$ assumes the axiom $\mathrm{AC}_\omega$ of
[[def-countable-choice]]; this example inherits that assumption and uses no
further choice principle.
