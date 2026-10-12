---
id: cex-gr-geodesics-do-not-determine-the-connection
kind: counterexample
title: "Torsion-free connections with the same geodesic images need not coincide"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-affine-connection-on-a-smooth-manifold, def-christoffel-symbols-of-an-affine-connection, def-geodesic-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, def-gr-smooth-lorentzian-objects, prop-coordinate-geodesic-equation, ex-gr-flat-space-geodesics-and-proper-time, lem-gr-parallel-transport-and-geodesic-speed, thm-picard-lindelof-local-existence-and-uniqueness]
dependency_roles:
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  ex-gr-flat-space-geodesics-and-proper-time: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), the remark that any connection can be written in terms of the Levi-Civita connection and a (1,2) tensor field, printed p. 36 (PDF p. 37); section 3.3 on geodesics and affine parameters, printed pp. 37-38 (PDF pp. 38-39)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: connections as tensorial deformations of a fiducial connection and the geodesic equation (3.47), printed pp. 59-60 and 70-71 (PDF pp. 66-67 and 77-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "Let $M=\mathbb R^4$ carry the flat metric
$g=\operatorname{diag}(-1,1,1,1)$ and its metric-selected connection
$\nabla_0$. If a torsion-free affine connection $\nabla'$ on $M$ has the same
geodesic images as $\nabla_0$ — every regular curve is, up to
reparametrization, a geodesic of $\nabla'$ if and only if it is one of
$\nabla_0$ — then $\nabla'=\nabla_0$, and in particular $\nabla'$ is
$g$-compatible" ([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart $x$ and $g=\operatorname{diag}(-1,1,1,1)$, whose metric-selected connection $\nabla_0$ has $\Gamma\equiv0$ in this chart.

[L1] In this chart a curve $\gamma$ is a geodesic of $\nabla_0$ if and only if $\ddot\gamma^k=0$, i.e. the components are affine; the geodesic images of $\nabla_0$ are therefore exactly the straight lines ([[prop-coordinate-geodesic-equation]], [[ex-gr-flat-space-geodesics-and-proper-time]], [[def-geodesic-of-an-affine-connection]]).

[L2] For an affine connection with coefficients $\Gamma'$, the geodesic equation in the chart is $\ddot\gamma^k+\sum_{i,j}\Gamma'^k{}_{ij}\dot\gamma^i\dot\gamma^j=0$, and torsion freedom is the symmetry $\Gamma'^k{}_{ij}=\Gamma'^k{}_{ji}$ ([[prop-coordinate-geodesic-equation]], [[def-christoffel-symbols-of-an-affine-connection]], [[def-gr-metric-selected-connection]]).

[L3] Metric compatibility in a chart is the identity $\partial_ag_{bc}=\sum_d(\Gamma'^d{}_{ab}g_{dc}+\Gamma'^d{}_{ac}g_{bd})$, and a connection is metric-selected exactly when it is torsion-free and satisfies it ([[lem-gr-connection-conditions-in-chart-components]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L4] A first-order ODE with locally Lipschitz right-hand side has at most one solution through a prescribed initial datum; in particular $y'=-2y^2$ has at most one solution with $y(\sigma_0)=0$, namely $y\equiv0$ ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

## Counterexample

Define, in the identity chart, the coefficients
$\Gamma'^a{}_{bc}:=\delta^a{}_b\,\delta^0{}_c+\delta^a{}_c\,\delta^0{}_b$;
they are constant, hence smooth, and define an affine connection $\nabla'$ on
$\mathbb R^4$ ([[def-affine-connection-on-a-smooth-manifold]]).

1.1 The coefficients are symmetric in the lower indices, $\Gamma'^a{}_{bc}=\Gamma'^a{}_{cb}$, so $\nabla'$ is torsion-free by [L2]. It is not the zero connection: for instance $\Gamma'^0{}_{00}=\delta^0{}_0\delta^0{}_0+\delta^0{}_0\delta^0{}_0=2\neq0$, so $\nabla'\neq\nabla_0$. [L2, given, algebra]

2.1 $\nabla'$ is not $g$-compatible. For $(a,b,c)=(0,0,0)$ the identity of [L3] would read $\partial_0g_{00}=2\Gamma'^0{}_{00}g_{00}$; the left side is $0$ because $g_{00}=-1$ is constant, while the right side is $2\cdot2\cdot(-1)=-4\neq0$. [step 1.1, L3, algebra]

2.2 (Every straight line is, up to reparametrization, a $\nabla'$-geodesic.) Let $\gamma(t)=p+tv$ be a straight line with $v\neq0$, and let $h$ be a $C^2$ diffeomorphism of a parameter interval onto its image with $h'>0$. In the chart, $(\gamma\circ h)'=h'(v\circ h)$ and $(\gamma\circ h)''=h''(v\circ h)$, while $\Gamma'^a{}_{bc}(\gamma\circ h)'^b(\gamma\circ h)'^c =\bigl(\delta^a{}_b\delta^0{}_c+\delta^a{}_c\delta^0{}_b\bigr)h'v^bh'v^c =2v^0h'^2v^a$. Hence the $\nabla'$-geodesic equation for $\gamma\circ h$ is $\bigl(h''+2v^0(h')^2\bigr)v^a=0$ for every $a$, which holds if and only if $h''+2v^0(h')^2=0$. If $v^0=0$ this is $h''=0$, satisfied by affine $h$; if $v^0\neq0$, choose a constant $C$ with $2v^0s+C>0$ on the parameter interval and put $h(s):=\ln(2v^0s+C)/(2v^0)+D$; then $h'(s)=1/(2v^0s+C)>0$ and $h''(s)=-2v^0h'(s)^2$, so the equation holds. In both cases the image of $\gamma\circ h$ is the same straight line, which by [L1] is also a geodesic image of $\nabla_0$. [step 1.1, L1, L2, algebra]

3.1 (Every $\nabla'$-geodesic image is a straight line.) Let $\sigma\mapsto x(\sigma)$ solve the $\nabla'$-equation $\ddot x^a+2\dot x^0\dot x^a=0$ with $\dot x\neq0$ on an interval. For $a=0$ this is $\ddot x^0=-2(\dot x^0)^2$, so $y:=\dot x^0$ solves $y'=-2y^2$. The set $A=\{\sigma:y(\sigma)=0\}$ is closed by continuity and open by the uniqueness of solutions of $y'=-2y^2$ through $y(\sigma_0)=0$ (the zero function is a solution, and Picard-Lindelöf gives uniqueness); hence on each parameter interval either $y\equiv0$, in which case $\ddot x^a=0$ for all $a$ and $x$ is affine, or $y$ is nowhere zero. In the second case, for $a=1,2,3$, $\frac{d}{d\sigma}\bigl(\dot x^a/\dot x^0\bigr) =\bigl(\ddot x^a\dot x^0-\dot x^a\ddot x^0\bigr)/(\dot x^0)^2 =\bigl(-2\dot x^0\dot x^a\dot x^0+2(\dot x^0)^2\dot x^a\bigr)/(\dot x^0)^2=0$, so $\dot x^a=c^a\dot x^0$ with constants $c^a$ and $x^a=c^ax^0+d^a$: the image is again a straight line, which is a $\nabla_0$-geodesic image by [L1]. [step 2.2, L1, L2, L4, algebra]

4.1 Steps 2.1 and 3.1 show that $\nabla_0$ and $\nabla'$ have exactly the same family of geodesic images, while steps 1.1 and 2.1 show that $\nabla'$ is a torsion-free connection distinct from $\nabla_0$ and not $g$-compatible. Hence the displayed statement is refuted: torsion freedom plus the geodesic images do not determine the metric-selected connection, and metric compatibility is an independent condition. [step 1.1, step 2.1, step 2.2, step 3.1, algebra] ∎

## Remarks

The construction is the simplest case of the classical fact that two
torsion-free connections have the same geodesic images precisely when their
difference is of the form
$\delta^a{}_b\varphi_c+\delta^a{}_c\varphi_b$ for a smooth $1$-form $\varphi$;
this item verifies the instance $\varphi=dx^0$ by direct computation and does
not prove the general characterization. The counterexample also shows why the
free-fall assumption of [[post-gr-ideal-clocks-and-free-fall]] cannot by itself
identify the connection used in the model: the metric compatibility of the
metric-selected connection is an additional adopted piece of geometry, not a
consequence of the geodesic motions.
