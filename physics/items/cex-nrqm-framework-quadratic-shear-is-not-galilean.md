---
id: cex-nrqm-framework-quadratic-shear-is-not-galilean
kind: counterexample
title: "A smooth time-dependent translation chart need not be an inertial frame"
status: draft
origin: session
domain: physics
dependency_level: 6
deps:
  [
    def-nrqm-framework-galilei-transformations,
    def-nrqm-framework-newtonian-spacetime,
    def-nrqm-framework-inertial-frames,
    lem-cm-adapted-charts-and-galilean-transformations,
    def-cm-special-orthogonal-group,
    def-matrix-product-and-identity-matrix,
    def-vector-valued-derivative-and-integral,
    def-nrqm-framework-quantities-and-units
  ]
dependency_roles:
  def-nrqm-framework-galilei-transformations: formulation-prerequisite
  def-nrqm-framework-newtonian-spacetime: formulation-prerequisite
  def-nrqm-framework-inertial-frames: formulation-prerequisite
  lem-cm-adapted-charts-and-galilean-transformations: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation, on explicit data of the model, of the claim that
  every chart of the Newtonian arena obtained by a smooth time-dependent spatial
  translation is an inertial frame of the framework. It exhibits a smooth chart
  that is a bijection of the coordinate space but not a Galilean transformation,
  and shows that a parametrized curve of zero coordinate acceleration in the
  standard chart has nonzero coordinate acceleration in that chart. The item
  refutes the stated frame-class claim; it adopts no force law and makes no
  empirical claim."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013),
        Section 1.2.1, printed pages 5-7 (PDF pages 11-13): the Galilean
        transformations between inertial frames and the preservation of zero
        coordinate acceleration"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Section 2.2.1, printed pages 14-15 (PDF pages 20-21): the
        rotating coordinate system example and the fictitious forces of a
        non-inertial frame"
      url: "https://davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement refuted

Fix the spacetime arena of [[def-nrqm-framework-newtonian-spacetime]] together with an inertial frame $F$ of [[def-nrqm-framework-inertial-frames]] with coordinates $(t,x)$. Every smooth chart of the arena of the form
$$G_{w}:\mathbb R\times\mathbb R^{3}\to\mathbb R\times\mathbb R^{3},\qquad G_{w}(t,x)=\bigl(t,\,x+w(t)\bigr),$$
with $w:\mathbb R\to\mathbb R^{3}$ of class $C^{\infty}$ and $[w_i]=\ell$ for every component, is an inertial frame of the model; that is, the map $G_{w}$ belongs to the Galilean transformation class $G$ of [[def-nrqm-framework-galilei-transformations]] for every such $w$.

## Facts & Assumptions

**Given:** The Galilean transformations $g_{(b,a,v,R)}(t,x)=(t+b,Rx+vt+a)$ and their parameters ([[def-nrqm-framework-galilei-transformations]]); the inertial frames of the arena, whose changes are exactly the Galilean transformations ([[def-nrqm-framework-inertial-frames]], [[lem-cm-adapted-charts-and-galilean-transformations]] clause 1); a nonzero vector $c\in\mathbb R^3$ with $[c_i]=\ell\tau^{-2}$; a velocity vector $u\in\mathbb R^3$ with $[u_i]=\ell\tau^{-1}$; a positive time scale $T_0$ with $[T_0]=\tau$; and the shear map $G(t,x):=(t,\,x+t^{2}c)$.

[L1] Galilean transformations and their parameter map: a map $\mathbb R\times\mathbb R^{3}\to\mathbb R\times\mathbb R^{3}$ is Galilean exactly when it equals $g_{(b,a,v,R)}$ for some $b\in\mathbb R$, $a,v\in\mathbb R^{3}$, $R\in SO(3)$; their spatial terms have dimension $\ell$ under the frame-coordinate conventions ([[def-nrqm-framework-galilei-transformations]], [[def-nrqm-framework-quantities-and-units]], [[def-cm-special-orthogonal-group]], [[def-matrix-product-and-identity-matrix]]).

[L3] Coordinate velocities and accelerations of parametrized curves are the componentwise derivatives of the coordinate curves, and the second coordinate of the standard chart of the arena is identified with $x$ ([[def-vector-valued-derivative-and-integral]], [[lem-cm-adapted-charts-and-galilean-transformations]]).

## Counterexample

**Proof technique:** direct; compare the shear chart with the Galilean class on explicit data and compute one coordinate acceleration.

1.1 [The chart is a bijection] The map $G(t,x)=(t,x+t^{2}c)$ is a bijection of $\mathbb R\times\mathbb R^{3}$ with inverse $(t,y)\mapsto(t,y-t^{2}c)$, since $G(t,y-t^{2}c)=(t,y)$ and $G=(G^{-1})^{-1}$ is smooth as well; hence $G$ is a legitimate chart of the coordinate space in the smooth structure of the arena. [given, L1, L3, algebra]

1.2 [The shear is not Galilean] Suppose $G=g_{(b,a,v,R)}$. Comparing time coordinates gives $t=t+b$ for every $t$, so $b=0$. Then $x+t^{2}c=Rx+vt+a$ for all $(t,x)\in\mathbb R\times\mathbb R^{3}$. At $t=0$ this gives $x=Rx+a$ for all $x$; taking $x=0$ gives $a=0$, and $(R-I_{3})x=0$ for all $x$ gives $R=I_{3}$ by comparing the action on $e_{1},e_{2},e_{3}$. The terms $t^2c$ and $vt$ both have dimension $\ell$. Evaluating at $t=T_0$ yields $v=T_0c$; at $t=2T_0$ the same identity would then give $4T_0^2c=2T_0v=2T_0^2c$, contradicting $T_0>0$ and $c\ne0$. Thus no parameter quadruple represents $G$, so by the set definition in [L1] it is not Galilean. [given, L1, algebra]

1.3 [A zero-acceleration curve becomes accelerating] Let $\gamma:\mathbb R\to\mathbb R\times\mathbb R^{3}$ be $\gamma(s):=(s,us)$, where $s$ is a time coordinate. In the standard chart its coordinate curve is $x(s)=us$ with $x''=0$; in the chart $G$ it is $x'(s)=us+s^{2}c$, whose second derivative is $2c\ne0$. The terms $us$ and $s^2c$ both have dimension $\ell$, and their first and second derivatives have dimensions $\ell\tau^{-1}$ and $\ell\tau^{-2}$. Hence zero coordinate acceleration is not preserved by this chart, although it is preserved by every Galilean change of frame by clause 3 of [[lem-cm-adapted-charts-and-galilean-transformations]]. [given, L3, algebra]

2.1 Step 1.1 makes $G$ a smooth chart. Every change between the inertial frames in the Given paragraph belongs to the Galilean class, whereas step 1.2 proves that $G$ does not; hence this chart is not an inertial frame. Independently, step 1.3 shows that it fails preservation of zero coordinate acceleration, which clause 3 of [[lem-cm-adapted-charts-and-galilean-transformations]] supplies as a necessary property of inertial-frame changes, without asserting sufficiency. Thus the refuted statement fails: not every smooth time-dependent spatial translation is an inertial frame of the model, and the inertial frames form a proper subclass of the smooth charts of the arena. [given, L3, step 1.1, step 1.2, step 1.3] ∎

## Remarks

- The shear chart is a legitimate coordinate description of the arena, and the coordinate acceleration computed in step 2.1 is a coordinate effect, not a force: no force law is adopted here, and no statement is made about the motion of any physical body. What fails is the claim that the chart is an inertial frame of the model.
- The example separates two notions that the framework keeps apart: an admissible coordinate chart is not automatically an inertial frame, and an inertial frame is defined by membership in the Galilean class of the model, not by smoothness of its transition map.
