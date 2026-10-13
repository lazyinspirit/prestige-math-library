---
id: ex-gr-minkowski-chart-as-a-lorentzian-manifold
kind: example
title: "The constant Minkowski metric as a smooth time-oriented Lorentzian manifold"
status: published
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, lem-gr-covariant-two-tensor-transformation-law, lem-gr-future-causal-classification-by-a-timelike-field, lem-lorentz-form-has-orthonormal-basis, ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds, def-smooth-vector-field-as-a-tangent-bundle-section, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, def-lorentz-form-and-inertia, def-countable-choice]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), example 2, the Minkowski metric eta = -(dx0)^2+(dx1)^2+(dx2)^2+(dx3)^2, printed p. 26 (PDF p. 27)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.1.2 with the Minkowski metric diag(-1,+1,+1,+1), printed pp. 93-94 (PDF pp. 100-101)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), the canonical form of the metric, printed pp. 49-50 (PDF pp. 56-57)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Example

Let $M:=\mathbb R^4$ with its standard smooth structure, for which the identity
map $x=(x^0,x^1,x^2,x^3)$ is a global smooth chart
([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]]). Define the
family $A=(A_p)_{p\in M}$ by declaring its components in this chart to be the
constants

$$A_{ab}:=\operatorname{diag}(-1,1,1,1)_{ab},\qquad\text{that is}\qquad A_p(v,w)=-v^0w^0+v^1w^1+v^2w^2+v^3w^3$$

for $v=\sum_av^a\partial_a|_p$, $w=\sum_aw^a\partial_a|_p$. Then $(M,A)$ is a
smooth Lorentzian four-manifold in the sense of
[[def-gr-smooth-lorentzian-objects]]; the field
$N:=\partial/\partial x^0$ is a time orientation, so $(M,A,N)$ is a
time-oriented smooth Lorentzian four-manifold; and at every $p$ the
future-directed causal vectors are exactly the nonzero $v$ with
$v^0\ge\lvert v_{\mathrm{vec}}\rvert=( (v^1)^2+(v^2)^2+(v^3)^2 )^{1/2}$. In
particular $v_{(1)}:=(1,0,0,0)$ is future timelike, $v_{(2)}:=(1,1,0,0)$ is
future null and $v_{(3)}:=(0,1,0,0)$ is spacelike.

## Facts & Assumptions

**Given:** $M=\mathbb R^4$ with its global identity chart and the field $A$ with
components $\operatorname{diag}(-1,1,1,1)$ in that chart.

[L1] A smooth covariant $2$-tensor field is a family of bilinear forms whose components are $C^\infty$ in every chart of the maximal atlas ([[def-gr-smooth-covariant-two-tensor-field]]); components in an atlas determine the field, and smoothness in one atlas implies smoothness in every chart ([[lem-gr-covariant-two-tensor-transformation-law]]).

[L2] A Lorentz form of signature $(-,+,+,+)$ on a $4$-dimensional real vector space is a symmetric nondegenerate bilinear form with inertia $(3,1,0)$ ([[def-lorentz-form-and-inertia]]), and it admits an orthonormal basis with matrix $\operatorname{diag}(-1,1,1,1)$ ([[lem-lorentz-form-has-orthonormal-basis]]).

[L3] $(M,A,N)$ is time-oriented when $N$ is a smooth vector field with $A_p(N_p,N_p)<0$ for all $p$; then a nonzero causal $v$ is future-directed exactly when $A_p(v,N_p)<0$ and its future cone has the description proved in [[lem-gr-future-causal-classification-by-a-timelike-field]] ([[def-gr-smooth-lorentzian-objects]]).

[L4] The constant field $\partial_0$ is a smooth vector field: in the global chart it has the constant component functions $(1,0,0,0)$, so smoothness holds by the component criterion for vector fields ([[def-smooth-vector-field-as-a-tangent-bundle-section]], [[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

## Verification

**Proof technique:** direct.

1.1 The component functions of $A$ in the global chart are the constants $A_{ab}=\operatorname{diag}(-1,1,1,1)_{ab}$, hence $C^\infty$; by [L1] the family $A$ is therefore a smooth covariant $2$-tensor field, and the component matrix is symmetric, invertible with $\det=-1$, and has three positive and one negative diagonal entries, so each $A_p$ is symmetric, nondegenerate and has inertia $(3,1,0)$, i.e., is a Lorentz form of signature $(-,+,+,+)$ by [L2]. Hence $(M,A)$ is a smooth Lorentzian four-manifold. [L1, L2, given]

2.1 The vector field $N=\partial_0$ has constant components $(1,0,0,0)$ in the global chart, so it is smooth by [L4], and $A_p(N_p,N_p)=-1<0$ at every $p$; by [L3] this makes $(M,A,N)$ a time-oriented smooth Lorentzian four-manifold. [step 1.1, L3, L4]

3.1 For a nonzero $v=\sum_av^a\partial_a|_p$, $A_p(v,v)=-(v^0)^2+\lvert v_{\mathrm{vec}}\rvert^2$, so $v$ is causal exactly when $\lvert v^0\rvert\ge\lvert v_{\mathrm{vec}}\rvert$ (equality being the null case), that is, when $v^0\ge\lvert v_{\mathrm{vec}}\rvert$ or $v^0\le-\lvert v_{\mathrm{vec}}\rvert$; among these, by [L3] and step 2.1, $v$ is future-directed exactly when $A_p(v,N_p)=-v^0<0$, that is, when $v^0>0$. Hence the future-directed causal vectors are exactly the nonzero $v$ with $v^0\ge\lvert v_{\mathrm{vec}}\rvert$, which is the flat case of the description proved in [L3] for the field $N$. [step 2.1, L3, algebra]

4.1 Evaluating the description of step 3.1: $v_{(1)}=(1,0,0,0)$ has $v_{(1)}^0=1>0=\lvert v_{(1),\mathrm{vec}}\rvert$, so $v_{(1)}$ is future timelike; $v_{(2)}=(1,1,0,0)$ has $A_p(v_{(2)},v_{(2)})=-1+1=0$ with $v_{(2)}\neq0$ and $v_{(2)}^0=1=\lvert v_{(2),\mathrm{vec}}\rvert$, so $v_{(2)}$ is future null; $v_{(3)}=(0,1,0,0)$ has $A_p(v_{(3)},v_{(3)})=1>0$, so $v_{(3)}$ is spacelike. [step 3.1, algebra] ∎

## Remarks

**Choice convention.** The smooth vector fields of this example are the
tangent-bundle sections of
[[def-smooth-vector-field-as-a-tangent-bundle-section]], whose canonical smooth
structure on $TM$ assumes the axiom $\mathrm{AC}_\omega$ of
[[def-countable-choice]]; this example inherits that assumption and uses no
further choice principle.
