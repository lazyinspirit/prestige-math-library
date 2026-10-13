---
id: def-gr-flat-minkowski-model-and-inertial-charts
kind: definition
title: "The flat model: Minkowski space R^4, its standard Lorentz form, inertial charts and cone sets"
status: published
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-manifold, prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure, def-euclidean-inner-product, def-derivation-at-a-point-and-tangent-space, def-smooth-vector-field-as-a-tangent-bundle-section, def-gr-smooth-covariant-two-tensor-field, def-gr-smooth-lorentzian-objects, def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-gr-future-causal-classification-by-a-timelike-field]
dependency_roles:
  def-smooth-manifold: mathematical-premise
  prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
justified_by: [lem-gr-flat-inertial-cone-criterion-and-sums]
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Minkowski spacetime as the basic model (section 1.1 printed pp. 3-6) and its chronological and causal relations in coordinates (section 1.11 printed pp. 15-16)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): light cones and the timelike/null/spacelike classification, printed p. 7 (PDF p. 14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the Minkowski metric eta_{mu nu} on R^4, section 2.1 printed p. 25 (PDF p. 26)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) The underlying manifold.** Let $M:=\mathbb R^4$ be Euclidean four-space
as a set and real vector space ([[def-euclidean-inner-product]]), equipped
with its standard smooth structure, in which the identity map
$x=(x^0,x^1,x^2,x^3):M\to\mathbb R^4$ is a global smooth chart
([[def-smooth-manifold]],
[[prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure]]).
The coordinate vector fields $\partial_a:=\partial/\partial x^a$,
$a=0,1,2,3$, are smooth vector fields on $M$
([[def-smooth-vector-field-as-a-tangent-bundle-section]]), and at every
$p\in M$ the tuple
$(\partial_0|_p,\partial_1|_p,\partial_2|_p,\partial_3|_p)$ is a basis of
$T_pM$ ([[def-derivation-at-a-point-and-tangent-space]]).

**(b) The metric.** The **flat metric** $\eta$ is the smooth covariant
$2$-tensor field on $M$ whose components in the chart $x$ are the constant
functions $\eta_{ab}=\operatorname{diag}(-1,1,1,1)$
([[def-gr-smooth-covariant-two-tensor-field]]), that is
$$\eta=-(dx^0)^2+(dx^1)^2+(dx^2)^2+(dx^3)^2 .$$
It is symmetric, and at every $p$ its matrix in the basis of (a) is
$\operatorname{diag}(-1,1,1,1)$: diagonal, with one negative and three positive
entries and no zero entry. Hence $\eta_p$ is nondegenerate with inertia
$(3,1,0)$, that is, a Lorentz form on $T_pM$
([[def-lorentz-form-and-inertia]]), and $(M,\eta)$ is a smooth Lorentzian
four-manifold of signature $(-,+,+,+)$
([[def-gr-smooth-lorentzian-objects]]). The restriction of $\eta_p$ to
$\operatorname{span}(\partial_1|_p,\partial_2|_p,\partial_3|_p)$ is positive
definite.

**(c) Time orientation.** The field $N:=\partial_0$ satisfies
$\eta(N,N)=-1<0$ pointwise, so $N$ is a time orientation of $(M,\eta)$
([[def-gr-smooth-lorentzian-objects]] clause (c)). The triple $(M,\eta,N)$ is
the **flat model**. At every $p$ the pointwise vocabulary of
[[def-causal-classification-of-lorentz-vectors]] and
[[def-time-orientation-and-future-causal-sets]] applies, and a nonzero causal
$v\in T_pM$ is future-directed exactly when $\eta_p(v,N_p)<0$
([[lem-gr-future-causal-classification-by-a-timelike-field]]).

**(d) Events, displacements and straight paths.** The points of $M$ are the
**events** of the model. Since $M=\mathbb R^4$ is a vector space, for events
$p,q\in M$ the **displacement** from $p$ to $q$ is the vector $q-p\in M$, and
the **straight path** from $p$ to $q$ is the curve $s\mapsto p+s(q-p)$ on
$[0,1]$, whose chart representative has the constant velocity $q-p$. For
$v\in\mathbb R^4$ the **translation** is the map $\tau_v(p):=p+v$ of $M$.

**(e) Inertial charts and frames.** A chart of $M$ with domain $M$ is called a
**global chart**. A global chart $y=(y^0,y^1,y^2,y^3):M\to\mathbb R^4$ is
**inertial** when its components of $\eta$ are the constant functions
$\operatorname{diag}(-1,1,1,1)$ on $M$ and its first coordinate vector field
$\partial/\partial y^0$ is future-directed at every point. The chart $x$ of (a)
is inertial: its components of $\eta$ are $\operatorname{diag}(-1,1,1,1)$ by
(b), and its first coordinate vector field is $N$, future-directed by (c). If
$y$ is inertial and $o\in M$, the tuple
$(o;\partial/\partial y^0|_o,\partial/\partial y^1|_o,
\partial/\partial y^2|_o,\partial/\partial y^3|_o)$ is an **inertial frame**
at $o$; its vectors satisfy
$\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ and $e_0$ is
future-directed.

**(f) Cone sets.** Let a vector $v\in T_pM$ have coordinates
$(v^0,v^1,v^2,v^3)$ in an inertial chart, write $v_s:=(v^1,v^2,v^3)$ and
$|v_s|:=\sqrt{(v^1)^2+(v^2)^2+(v^3)^2}$
([[def-euclidean-inner-product]]). Write
$$C^+:=\{v\in\mathbb R^4:v^0>|v_s|\}$$
and $\overline{C^+}:=\{v\in\mathbb R^4:v^0\ge|v_s|\}$ for the coordinate cone
sets. In every inertial chart and at every event $p$,
the future cone $C_p^+$ of (c) consists of exactly those $v$ with
$v^0>|v_s|$, its closure of exactly those with $v^0\ge|v_s|$, and the
future-directed causal vectors of $T_pM$ are exactly the nonzero vectors with
$v^0\ge|v_s|$; moreover the future cone is closed under sums. All of this is
proved in [[lem-gr-flat-inertial-cone-criterion-and-sums]], where the
independence of the inertial chart is also established.

**(g) Scope.** This is a mathematical definition; it asserts nothing about
nature. The physical reading of the flat model is recorded with the framework
postulates of this library and is not part of this definition, and the flat
examples and counterexamples of this page are conditional statements inside
the model.

## Remarks

- **Why the flat model is stated here.** The causal-example items of this
  page need one fixed flat model with its cone calculus, so that page states
  the model, its inertial charts and its cone sets locally instead of
  depending on an external supplier for them; the criterion is then a local
  lemma.
- **What is not asserted.** Nothing here claims that a general Lorentzian
  manifold is locally isometric to the flat model, and no curvature statement
  is made; the components of $\eta$ are constant in the chart $x$, and that
  is all the description uses.
