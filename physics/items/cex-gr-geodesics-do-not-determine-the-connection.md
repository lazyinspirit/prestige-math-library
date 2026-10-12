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

For this statement, a **regular curve** is a $C^2$ map $\xi:J\to\mathbb R^4$
from an open interval $J$ with $\xi'(s)\neq0$ for every $s\in J$; a local
regular reparametrization is composition with a $C^2$ diffeomorphism between
open intervals whose derivative is nowhere zero. Two connections have the
same **local unparametrized geodesic paths** when every regular geodesic of
either connection, near each of its parameter values, is a regular
reparametrization of a geodesic of the other connection, and conversely.

Statement refuted: "Let $M=\mathbb R^4$ carry the flat metric
$g=\operatorname{diag}(-1,1,1,1)$ and its metric-selected connection
$\nabla_0$. If a torsion-free affine connection $\nabla'$ on $M$ has the same
local unparametrized geodesic paths as $\nabla_0$, then
$\nabla'=\nabla_0$, and in particular $\nabla'$ is $g$-compatible"
([[def-gr-metric-selected-connection]],
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

1.2 (Local $\nabla'$-geodesic reparametrizations of straight lines.) Let $\gamma(t)=p+tv$ be a regular straight line and fix $t_0$ in its open parameter interval. For any $s_0$, choose an open interval $J$ about $s_0$ small enough that $1+2v^0(s-s_0)>0$ on $J$. If $v^0=0$, put $h(s)=t_0+(s-s_0)$. If $v^0\neq0$, put $h(s):=t_0+\ln(1+2v^0(s-s_0))/(2v^0)$. In either case, shrink $J$ if necessary so that $h(J)$ lies in the parameter interval of $\gamma$. Then $h$ is a $C^2$ diffeomorphism from $J$ onto its open image, with $h(s_0)=t_0$ and $h'\neq0$; in the second case $h'=1/(1+2v^0(s-s_0))$ and $h''=-2v^0(h')^2$. The $\nabla'$-geodesic equation for $\gamma\circ h$ is $\bigl(h''+2v^0(h')^2\bigr)v^a=0$, so it is satisfied. This proves that every regular straight-line geodesic of $\nabla_0$ is locally a reparametrized $\nabla'$-geodesic. [L1, L2, algebra, construct]

1.3 (Every regular $\nabla'$-geodesic is locally a reparametrized straight line.) Let $\sigma\mapsto x(\sigma)$ solve the $\nabla'$-equation $\ddot x^a+2\dot x^0\dot x^a=0$ with $\dot x\neq0$ on an interval. For $a=0$ this is $\ddot x^0=-2(\dot x^0)^2$, so $y:=\dot x^0$ solves $y'=-2y^2$. The set $A=\{\sigma:y(\sigma)=0\}$ is closed by continuity and open by uniqueness of solutions through $y(\sigma_0)=0$ (the zero function is a solution, and [L4] gives uniqueness); hence on the connected parameter interval either $y\equiv0$ or $y$ is nowhere zero. If $y\equiv0$, the equations give $\ddot x^a=0$ for every $a$, so $x$ is an affine regular line. Otherwise, for $a=1,2,3$, $\frac{d}{d\sigma}\bigl(\dot x^a/\dot x^0\bigr)=(\ddot x^a\dot x^0-\dot x^a\ddot x^0)/(\dot x^0)^2=0$, so $x^a=c^a x^0+d^a$ for constants $c^a,d^a$. Since $h(\sigma):=x^0(\sigma)$ has nowhere-zero derivative, it is a $C^2$ local diffeomorphism; in the parameter $h$, the curve is the affine line $(h,c^1h+d^1,c^2h+d^2,c^3h+d^3)$, a regular $\nabla_0$-geodesic by [L1]. Thus every regular $\nabla'$-geodesic is locally a regular reparametrization of a $\nabla_0$-geodesic. [L1, L2, L4, algebra]

2.1 $\nabla'$ is not $g$-compatible. For $(a,b,c)=(0,0,0)$ the identity of [L3] would read $\partial_0g_{00}=2\Gamma'^0{}_{00}g_{00}$; the left side is $0$ because $g_{00}=-1$ is constant, while the right side is $2\cdot2\cdot(-1)=-4\neq0$. [step 1.1, L3, algebra]

3.1 Steps 1.2 and 1.3 show that $\nabla_0$ and $\nabla'$ have the same local unparametrized geodesic paths, while steps 1.1 and 2.1 show that $\nabla'$ is a torsion-free connection distinct from $\nabla_0$ and not $g$-compatible. Hence the displayed statement is refuted: torsion freedom plus equality of the local unparametrized paths do not determine the metric-selected connection, and metric compatibility is an independent condition. [step 1.1, step 2.1, step 1.2, step 1.3, algebra] ∎

## Remarks

This example shows that even equality of local unparametrized geodesic paths
does not fix the connection. It also shows why the free-fall assumption of
[[post-gr-ideal-clocks-and-free-fall]] cannot by itself identify the connection
used in the model: metric compatibility of the metric-selected connection is
an additional condition, not a consequence of the local paths.
