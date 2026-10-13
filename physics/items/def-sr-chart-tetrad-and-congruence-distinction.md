---
id: def-sr-chart-tetrad-and-congruence-distinction
kind: definition
domain: mathematics
title: "Charts, tetrads, observer congruences and adapted charts in affine Minkowski space"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-affine-minkowski-model, lem-affine-minkowski-charts-form-a-smooth-atlas, def-inertial-frame-and-inertial-chart, lem-inertial-chart-transitions-are-affine-lorentz, def-lorentz-map-and-lorentz-group, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-smooth-manifold, lem-lorentz-form-has-orthonormal-basis, lem-future-oriented-inertial-frames-exist, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-ck-tensor-field-on-minkowski-space, lem-tangent-space-of-affine-minkowski-space-is-v, def-integral-curve-of-a-vector-field, thm-unique-maximal-integral-curve-through-each-point, def-lie-bracket-of-smooth-vector-fields, prop-coordinate-formula-for-the-lie-bracket, def-sr-regular-causal-curve-and-worldline]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  lem-affine-minkowski-charts-form-a-smooth-atlas: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-inertial-chart-transitions-are-affine-lorentz: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-diffeomorphism-and-local-diffeomorphism-of-manifolds: mathematical-premise
  def-smooth-manifold: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  lem-future-oriented-inertial-frames-exist: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  lem-tangent-space-of-affine-minkowski-space-is-v: mathematical-premise
  def-integral-curve-of-a-vector-field: mathematical-premise
  thm-unique-maximal-integral-curve-through-each-point: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  prop-coordinate-formula-for-the-lie-bracket: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Definition

Work in the oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ ([[def-sr-affine-minkowski-model]]) with its inertial atlas ([[lem-affine-minkowski-charts-form-a-smooth-atlas]]) and the canonical identification of tangent spaces with $V$ ([[lem-tangent-space-of-affine-minkowski-space-is-v]]). The objects defined below are, in general, different objects, and the distinctions between them are part of the definition.

**(a) Chart and inertial chart.** A **chart** of the model is a diffeomorphism $u:U\to u(U)$ from a nonempty open subset $U\subseteq A$ onto an open subset of $\mathbb R^4$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[def-smooth-manifold]]), written with components $(u^0,u^1,u^2,u^3)$. An **inertial chart** is the global chart $x(p)=E^{-1}(p-o)$ of an inertial frame $(o;e_0,e_1,e_2,e_3)$ ([[def-inertial-frame-and-inertial-chart]]). A general chart need not be inertial: if $x$ is an inertial chart and $N:x(U)\to\mathbb R^4$ is a diffeomorphism onto its image which is not the restriction of an affine map, then $u:=N\circ x$ is a chart that is not inertial, because if $u$ were the inertial chart of a frame then $x\circ u^{-1}=N^{-1}$ would be affine by [[lem-inertial-chart-transitions-are-affine-lorentz]] and hence $N=(N^{-1})^{-1}$ would be affine as the inverse of an affine bijection, a contradiction; the map $N(y)=(y^0,y^1+(y^0)^2,y^2,y^3)$ on $\mathbb R^4$ is an explicit example.

**(b) Tetrad at an event and tetrad field.** A **tetrad at $p\in A$** is an ordered basis $(e_0,e_1,e_2,e_3)$ of $V$ with $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ and $e_0$ future, $e_0\in C^+$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]): this is the basis of an inertial frame without an origin and without the orientation condition. A **tetrad field** on a nonempty open subset $\Omega\subseteq A$ is a tuple $(E_0,E_1,E_2,E_3)$ of smooth vector fields on $\Omega$ ([[def-ck-tensor-field-on-minkowski-space]], type $(1,0)$) whose values at every $p\in\Omega$ form a tetrad at $p$. A tetrad field is **observer-adapted** to a prescribed congruence $n$ when $E_0=n$. Along a prescribed $C^1$ future timelike worldline $x:I\to A$, observer adaptation means $E_0(x(s))=x'(s)/\sqrt{-\eta(x'(s),x'(s))}$ whenever $x(s)\in\Omega$; this is its normalized future unit tangent ([[def-sr-regular-causal-curve-and-worldline]]).

**(c) Observer congruence.** An **observer congruence** on a nonempty open subset $\Omega\subseteq A$ is a smooth vector field $n:\Omega\to V$ with $\eta(n,n)=-1$ and $n(p)\in C^+$ for every $p\in\Omega$. Its **observers** are its maximal integral curves ([[def-integral-curve-of-a-vector-field]], [[thm-unique-maximal-integral-curve-through-each-point]]). Each observer is a future timelike worldline ([[def-sr-regular-causal-curve-and-worldline]]): its tangent at a parameter value $s$ is $n(x(s))$, which is future timelike, and it is regular because $\eta(n,n)=-1$ makes $n$ nowhere zero. **Completeness** of the integral curves, a global product structure of $\Omega$, and global synchronization are not asserted by this definition.

**(d) Adapted chart.** For a congruence $n$ on $\Omega$, an **$n$-adapted chart** is a chart $(u^0,u^1,u^2,u^3):U\to\mathbb R^4$ with $U$ a nonempty open subset of $\Omega$ whose spatial coordinates $u^1,u^2,u^3$ are constant along every integral curve of $n$ contained in $U$. No global adapted chart is asserted, and $u^0$ is not required to be affine.

**(e) Distinctions.** A chart need not be inertial, as in (a); a chart need not be $n$-adapted for any congruence. A tetrad field is not in general the coordinate frame of a chart: if $(E_0,E_1,E_2,E_3)$ is the coordinate frame of a chart $(v^0,v^1,v^2,v^3)$, that is, $E_a=\partial/\partial v^a$, then $[E_a,E_b]=0$ for all $a,b$ ([[def-lie-bracket-of-smooth-vector-fields]], [[prop-coordinate-formula-for-the-lie-bracket]]), so a tetrad field whose members do not commute pairwise is not the coordinate frame of a chart; no converse is claimed here. A congruence need not be the flow of a coordinate, and its pointwise rest spaces need not assemble into hypersurfaces; that integrability question is decided later on this page. In an inertial chart $x$ of $(o;e_0,e_1,e_2,e_3)$, the coordinate vector fields $\partial/\partial x^a=e_a$ form a constant tetrad field, with values equal to the frame's ordered basis under $T_pA=V$. Its time vector field $n=\partial/\partial x^0=e_0$ alone defines the congruence of stationary observers, whose integral curves are $s\mapsto x^{-1}(s+s_0,r^1,r^2,r^3)$ for fixed $s_0,r^1,r^2,r^3$. The chart, the ordered tetrad and the single vector field $n$ remain distinct objects.

## Remarks

- **Non-inertial charts exist, and the example is checked.** The map $N(y)=(y^0,y^1+(y^0)^2,y^2,y^3)$ is a diffeomorphism of $\mathbb R^4$ with the smooth two-sided inverse $z\mapsto(z^0,z^1-(z^0)^2,z^2,z^3)$. It is not the restriction of an affine map: $N(0)=0$ and $N(2e_0)=(2,4,0,0)\ne2N(e_0)=(2,2,0,0)$ for $e_0=(1,0,0,0)$, so $N$ is not linear, and with $N(0)=0$ it is therefore not affine. If $N\circ x$ were an inertial chart, the transition $x\circ(N\circ x)^{-1}=N^{-1}$ between inertial charts would be affine by [[lem-inertial-chart-transitions-are-affine-lorentz]]; the inverse of an affine bijection $z\mapsto Az+b$ of $\mathbb R^4$ is again affine, $w\mapsto A^{-1}w-A^{-1}b$ ([[def-lorentz-map-and-lorentz-group]]), so $N$ would be affine, a contradiction. Hence $N\circ x$ is a chart that is not inertial, and being $C^\infty$ it belongs to the model's smooth structure.

- **Tetrads exist at every event, and tetrad fields are smooth by components.** [[lem-lorentz-form-has-orthonormal-basis]] supplies an $\eta$-orthonormal basis $(f_0,f_1,f_2,f_3)$ of $V$; since $\eta(f_0,f_0)=-1<0$ the vector $f_0$ is timelike, so exactly one of $f_0$ and $-f_0$ lies in $C^+$ because the timelike set is the disjoint union of the two future and past cones ([[def-time-orientation-and-future-causal-sets]], [[def-causal-classification-of-lorentz-vectors]]), and negating it preserves $\eta$-orthonormality; no orientation condition is imposed on a tetrad, so this already produces a tetrad at any prescribed event. The formulation with the additional positive-orientation condition, and with an arbitrary origin, is the inertial-frame existence statement of [[lem-future-oriented-inertial-frames-exist]]. A tetrad field is componentwise smooth in an inertial chart by the definition of $C^k$ tensor fields on the affine model ([[def-ck-tensor-field-on-minkowski-space]], [[lem-tangent-space-of-affine-minkowski-space-is-v]]).

- **Congruences have well-defined observers.** A smooth unit field $n$ on $\Omega$ is a smooth map $\Omega\to V$ with values in the future timelike cone, and [[thm-unique-maximal-integral-curve-through-each-point]] supplies through every point a unique maximal integral curve of $n$ ([[def-integral-curve-of-a-vector-field]]); along such a curve the identity $\eta(n,n)=-1$ gives $\eta(x',x')=-1$ at every parameter value, so each observer is a future timelike worldline with future unit tangent, in particular regular ([[def-sr-regular-causal-curve-and-worldline]]). Nothing about completeness of the maximal domains is asserted.

- **The commutation condition is only necessary.** If $(E_0,\ldots,E_3)$ is the coordinate frame of a chart $(v^0,\ldots,v^3)$, then $[E_a,E_b]=0$ by the coordinate formula for the Lie bracket; a tetrad field with $[E_a,E_b]\ne0$ for some $a,b$ therefore cannot be a coordinate frame. The converse (a commuting tetrad field is locally a coordinate frame) is a Frobenius-type statement and is not asserted by this definition.
