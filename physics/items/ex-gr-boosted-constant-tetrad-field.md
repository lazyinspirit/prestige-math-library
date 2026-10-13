---
id: ex-gr-boosted-constant-tetrad-field
kind: example
title: "A constant boosted tetrad field on flat spacetime and an adapted chart"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-gr-local-frame-and-tetrad-fields, def-gr-observer-congruence-and-adapted-charts, def-gr-smooth-lorentzian-objects, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]
dependency_roles:
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'Lorentz transformations' including boosts (printed pp. 5-7; PDF pp. 12-14) and 'four-velocity' (printed pp. 26-27; PDF pp. 33-34)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 1.9 on integral curves (printed pp. 21-22; PDF pp. 22-23) and section 2.3 on the 4-velocity (2.14) (printed p. 28; PDF p. 29)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart $x=(x^0,x^1,x^2,x^3)$ and the
flat Lorentzian metric $g=\operatorname{diag}(-1,1,1,1)$, with time
orientation $N=\partial_0$. Let $\beta\in(-1,1)$ and let
$\gamma:=(1-\beta^2)^{-1/2}>0$. Define the constant-coefficient fields

$$E_0:=\gamma(\partial_0+\beta\partial_1),\qquad E_1:=\gamma(\beta\partial_0+\partial_1),\qquad E_2:=\partial_2,\qquad E_3:=\partial_3 .$$

Then $(E_0,E_1,E_2,E_3)$ is a smooth future-directed tetrad field on $M$, and
$n:=E_0$ is an observer congruence whose integral curves have
$x^1-\beta x^0$, $x^2$ and $x^3$ constant; hence
$u:=(x^0,\,x^1-\beta x^0,\,x^2,\,x^3)$ is an $n$-adapted chart. In that chart
$n=\gamma\,\partial_{u^0}$, so the coordinate field of an adapted chart need
not equal the congruence.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart $x$, time orientation $N=\partial_0$, parameter $\beta\in(-1,1)$ and $\gamma=(1-\beta^2)^{-1/2}$.

[L1] On $\mathbb R^4$ with the flat metric, the coordinate fields $\partial_a$ are $g$-orthonormal with $g(\partial_a,\partial_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, and a nonzero causal vector $v$ is future-directed exactly when $g(v,N)<0$ ([[def-gr-smooth-lorentzian-objects]], [[def-gr-local-frame-and-tetrad-fields]]).

[L2] A tetrad field on an open set is a tuple of four pointwise independent smooth vector fields with $g(E_A,E_B)=\operatorname{diag}(-1,1,1,1)_{AB}$ pointwise, and it is future-directed when $E_0$ is future-directed at every point ([[def-gr-local-frame-and-tetrad-fields]]).

[L3] A vector field on a chart domain is smooth exactly when its coordinate components are smooth; constant components are smooth ([[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L4] An observer congruence on an open set is a smooth field $n$ with $g_q(n_q,n_q)=-1$ whose values are future-directed; a chart is $n$-adapted when its spatial coordinates are constant along every integral curve of $n$ ([[def-gr-observer-congruence-and-adapted-charts]]).

## Verification

**Proof technique:** direct.

1.1 The fields $E_0,E_1,E_2,E_3$ have constant coordinate components by their definition, so they are smooth vector fields on $\mathbb R^4$ by [L3]. [given, L3]

2.1 Evaluating the flat metric on the constant fields gives $g(E_0,E_0)=\gamma^2(-1+\beta^2)=-1$, $g(E_1,E_1)=\gamma^2(-\beta^2+1)=1$, $g(E_0,E_1)=\gamma^2(-\beta+\beta)=0$, $g(E_2,E_2)=g(E_3,E_3)=1$ and all remaining pairings $0$ because the fields involve only the $\partial_0,\partial_1$ directions or are the orthonormal fields $\partial_2,\partial_3$. Hence $g(E_A,E_B)=\operatorname{diag}(-1,1,1,1)_{AB}$ pointwise, and the tuple is an ordered basis at every point; it is a tetrad field by [L2]. [step 1.1, L2, algebra]

3.1 The first member satisfies $g(E_0,N)=g(E_0,\partial_0)=-\gamma<0$, so $E_0$ is future-directed by [L1] and $(E_0,E_1,E_2,E_3)$ is a future-directed tetrad field. [step 2.1, L1, L2, algebra]

4.1 The field $n:=E_0=\gamma(\partial_0+\beta\partial_1)$ is a smooth future unit timelike field, hence an observer congruence by [L4]. Its integral curves satisfy $\dot x^0=\gamma$, $\dot x^1=\gamma\beta$, $\dot x^2=\dot x^3=0$, so $x^2$ and $x^3$ are constant and $\frac{d}{ds}(x^1-\beta x^0)=\gamma\beta-\beta\gamma=0$; therefore $x^1-\beta x^0$, $x^2$ and $x^3$ are constant along every integral curve. [step 3.1, L4, algebra]

5.1 The map $u=(u^0,u^1,u^2,u^3):=(x^0,x^1-\beta x^0,x^2,x^3)$ has the smooth inverse $x^0=u^0$, $x^1=u^1+\beta u^0$, $x^2=u^2$, $x^3=u^3$, so it is a chart, and by step 4.1 its spatial coordinates $u^1,u^2,u^3$ are constant along the integral curves of $n$; the chart is $n$-adapted by [L4]. In these coordinates $\partial_{u^0}=\partial_0+\beta\partial_1=n/\gamma$, so $n=\gamma\partial_{u^0}$. It equals $\partial_{u^0}$ exactly when $\beta=0$ (then $\gamma=1$), and differs when $\beta\neq0$; thus an adapted chart need not have the congruence as its coordinate field. No uniqueness of adapted charts is claimed. [step 4.1, L4, algebra] ∎

## Remarks

The example shows that an adapted chart exists for this congruence and that its coordinate time need not be the flow parameter of $n$; the existence corollary on the tensors page produces a different adapted chart in which $n=\partial_{u^0}$ exactly. The congruence is parallel in the identity chart, so its observers are straight lines; no curvature or acceleration claim is made.
