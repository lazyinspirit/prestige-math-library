---
id: def-gr-minkowski-model-and-inertial-chart
kind: definition
title: "The flat model spacetime: the Minkowski metric on R^4 and its inertial chart"
status: published
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-manifold, def-gr-smooth-covariant-two-tensor-field, def-gr-smooth-lorentzian-objects, def-lorentz-form-and-inertia, def-gr-local-frame-and-tetrad-fields, def-causal-classification-of-lorentz-vectors, def-derivation-at-a-point-and-tangent-space, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-smooth-vector-field-as-a-tangent-bundle-section]
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1: the Minkowski metric eta_{mu nu} = diag(-1,1,1,1) and the classification of vectors, printed pp. 6-10 (PDF pp. 13-17); Ch. 2: the metric components in a chart and the transformation law, printed pp. 49-51 (PDF pp. 56-58)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.1: charts, the metric components and the canonical form diag(-1,1,1,1) of a Lorentzian form at a point, printed pp. 25-26 (PDF pp. 26-27), and section 4.2: vanishing curvature of Minkowski spacetime and local flatness, printed p. 42 (PDF p. 43)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.2.1: the metric eta = diag(-1,1,1,1) on R^4 with x^mu = (ct,x,y,z) and the causal classification of tangent vectors, printed pp. 12-16 (PDF pp. 19-23)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Definition

Let $M:=\mathbb R^4$ carry its standard smooth structure
([[def-smooth-manifold]]), and let
$x=(x^0,x^1,x^2,x^3):M\to\mathbb R^4$ be the **identity chart**, $x(p)=p$;
it is a global chart of the maximal smooth atlas, and the coordinate
derivations $\partial_0,\partial_1,\partial_2,\partial_3$ form a basis of
$T_pM$ at every $p\in M$
([[def-derivation-at-a-point-and-tangent-space]],
[[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]). Write

$$\eta:=\operatorname{diag}(-1,1,1,1)$$

for the standard Lorentz form of inertia $(3,1,0)$ in this basis
([[def-lorentz-form-and-inertia]]).

**(a) The metric.** Define the covariant $2$-tensor field $g$ on $M$ by the
requirement that its components in the identity chart are the constants

$$g_{ab}:=\eta_{ab}\qquad(a,b=0,1,2,3),$$

that is, $g_p(\partial_a|_p,\partial_b|_p)=\eta_{ab}$ for every $p\in M$
([[def-gr-smooth-covariant-two-tensor-field]] clause (a)). The component
functions are constant, hence $C^\infty$, so $g$ is a smooth symmetric
covariant $2$-tensor field; at every $p$ the form $g_p$ is nondegenerate with
inertia $(3,1,0)$. By [[def-gr-smooth-lorentzian-objects]] clause (a) the
pair $(M,g)$ is therefore a smooth Lorentzian four-manifold of signature
$(-,+,+,+)$.

**(b) The inertial chart and frame.** The chart $x$ is called the **inertial
chart** of the flat model. In this chart the coordinate frame
$(\partial_0,\partial_1,\partial_2,\partial_3)$ is a $g$-orthonormal frame at
every point, $g(\partial_a,\partial_b)=\eta_{ab}$; it is simultaneously a
coordinate frame and a **tetrad field** in the sense of
[[def-gr-local-frame-and-tetrad-fields]], defined on all of $M$.

**(c) Time orientation and causal classification.** Define the smooth vector
field $N:=\partial_0$ on $M$
([[def-smooth-vector-field-as-a-tangent-bundle-section]]). Since
$g_p(N_p,N_p)=\eta_{00}=-1<0$ for every $p$, the field $N$ is everywhere
timelike, so $(M,g,N)$ is a smooth time-oriented Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]] clause (c)). For a nonzero tangent
vector $v=v^a\partial_a|_p$ the definitions of
[[def-gr-smooth-lorentzian-objects]] clause (c) and
[[def-causal-classification-of-lorentz-vectors]] give

$$g_p(v,v)=-(v^0)^2+\sum_{i=1}^3(v^i)^2,\qquad g_p(v,N_p)=-v^0 .$$

so, for a nonzero **causal** $v$, $v$ is **future-directed** exactly when
$v^0>0$, and

- $v$ is future timelike $\iff$ $v^0>0$ and $(v^0)^2>\sum_i(v^i)^2$;
- $v$ is future null $\iff$ $v^0>0$ and $(v^0)^2=\sum_i(v^i)^2$;
- $v$ is spacelike $\iff$ $(v^0)^2<\sum_i(v^i)^2$;

consequently the future causal cone at every point is
$\{v\neq0: v^0\ge\sqrt{\sum_i(v^i)^2}\}$. These are the standard readings of
the Minkowski form in the inertial chart; the chain of equivalences is the
specialization of the causal classification to this pair $(g_p,N_p)$ and is
recorded here for later use.

**(d) Scope.** This item defines geometric data only: a manifold, a metric
field, a time orientation and a distinguished chart and frame. It makes no
claim about curvature, about any field equation, about which geometry a
physical model uses, or about nature; the physical reading of the data, the
dimensions of the coordinates and the numerical values or signs of physical
constants belong to the framework's unit conventions and postulates, which
are separate items. In particular no relation between the coordinate
functions $x^a$ and physical time or length measurements is asserted here.
