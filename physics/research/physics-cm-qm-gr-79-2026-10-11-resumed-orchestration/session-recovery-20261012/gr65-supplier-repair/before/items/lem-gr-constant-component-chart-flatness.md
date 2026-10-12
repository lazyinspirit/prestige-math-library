---
id: lem-gr-constant-component-chart-flatness
kind: lemma
title: "A chart with constant metric components has vanishing metric-selected Christoffel symbols and curvature"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, lem-gr-connection-conditions-in-chart-components, def-affine-connection-on-a-smooth-manifold, def-christoffel-symbols-of-an-affine-connection, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-curvature-tensor-and-derived-tensors, prop-coordinate-geodesic-equation]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): the Christoffel formula (3.21)-(3.23) in terms of the metric and its first derivatives, printed pp. 60-61 (PDF pp. 67-68), under which constant metric components give vanishing Christoffel symbols"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the Christoffel formula (3.31)-(3.33) and the Riemann tensor in terms of the connection, section 4.3 printed pp. 36-37 and 43-45 (PDF pp. 37-38 and 44-46)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): local existence of normal coordinates around any point, with the metric equal to diag(-1,1,1,1) and vanishing connection coefficients at the point, section 2.2.2 printed pp. 31-33"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) with metric-selected connection
$\nabla$ ([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and let
$(U,x)$ be a smooth chart of $M$ in which every metric component
$g_{ab}=g(\partial_a,\partial_b)$ is a constant function on $U$. Then:

**(a)** Every Christoffel symbol of $\nabla$ in the chart vanishes
identically on $U$,
$\Gamma^a{}_{bc}=0$ ([[def-christoffel-symbols-of-an-affine-connection]]).

**(b)** The curvature tensor of $\nabla$ vanishes identically on $U$,
$R=0$ ([[def-gr-curvature-tensor-and-derived-tensors]],
[[thm-gr-curvature-tensoriality-and-coordinate-formula]]).

**(c)** Every coordinate curve of the chart is a geodesic of $\nabla$; that
is, for fixed constants $c^1,c^2,c^3$ the curve $s\mapsto
x^{-1}(s,c^1,c^2,c^3)$ is a geodesic in the affine parameter $s$
([[prop-coordinate-geodesic-equation]]).

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold with metric-selected connection, and a chart $(U,x)$ with constant metric components.

[L1] An affine connection on a smooth manifold is determined by its Christoffel symbols in any chart, which are smooth functions with $\nabla_{\partial_b}\partial_c=\sum_a\Gamma^a{}_{bc}\partial_a$; conversely, arbitrary smooth coefficient functions define an affine connection on the chart domain ([[def-affine-connection-on-a-smooth-manifold]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L2] For a nondegenerate metric the metric-selected connection is the unique affine connection that is torsion-free and metric-compatible; in a chart, torsion freedom is equivalent to $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ and metric compatibility to $\partial_ag_{bc}=\sum_d(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd})$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (b), [[lem-gr-connection-conditions-in-chart-components]], [[def-gr-metric-selected-connection]]).

[L3] In a chart, the curvature components of a connection are
$$R^a{}_{bcd}=\partial_c\Gamma^a{}_{bd}-\partial_d\Gamma^a{}_{bc} +\sum_e\bigl(\Gamma^e{}_{bd}\Gamma^a{}_{ce} -\Gamma^e{}_{bc}\Gamma^a{}_{de}\bigr)$$
([[thm-gr-curvature-tensoriality-and-coordinate-formula]],
[[def-gr-curvature-tensor-and-derived-tensors]]).

[L4] A smooth curve whose coordinate path $y$ satisfies $\ddot y^k=-\sum_{i,j}\Gamma^k{}_{ij}\dot y^i\dot y^j$ in the chart is a geodesic of the connection, and conversely ([[prop-coordinate-geodesic-equation]], [[def-christoffel-symbols-of-an-affine-connection]]).

## Proof

**Proof technique:** direct.

1.1 (The zero-coefficient connection.) On the open submanifold $U$, consider the coordinate connection $\nabla^{\mathrm c}$ whose Christoffel symbols in $(U,x)$ are all zero; this is an affine connection on $U$ by [L1]. Its coefficients satisfy $\Gamma^a{}_{bc}=0=\Gamma^a{}_{cb}$, so it is torsion-free; and the compatibility identity of [L2] holds because both sides vanish: the left side is $\partial_ag_{bc}=0$ since the metric components are constant, and the right side is a sum of terms each containing a Christoffel symbol. Hence $\nabla^{\mathrm c}$ is a torsion-free metric-compatible connection for the restricted metric $g|_U$; by uniqueness in [L2] it equals the metric-selected connection of $(U,g|_U)$, which is the restriction $\nabla|_U$ of the metric-selected connection of $M$ (its restriction is torsion-free and metric-compatible on $U$). Therefore every Christoffel symbol of $\nabla$ in $(U,x)$ vanishes on $U$, which is (a). [given, L1, L2]

2.1 (The curvature.) Substituting the vanishing coefficients of step 1.1 into the coordinate formula [L3] makes every term vanish identically on $U$, so $R^a{}_{bcd}=0$ on $U$ for all indices; since the curvature is a tensor field, $R=0$ on $U$. This is (b). [step 1.1, L3]

3.1 (Coordinate curves.) Let $y(s)=(s,c^1,c^2,c^3)$ be the coordinate path of a coordinate curve; then $\dot y=(1,0,0,0)$ and $\ddot y=0$. The right side of the geodesic equation of [L4] vanishes because every $\Gamma^k{}_{ij}$ vanishes by step 1.1, so the equation holds and the coordinate curve is a geodesic in the affine parameter $s$. This proves (c) and completes the proof. [step 1.1, L4] ∎

## Remarks

- **Hypothesis.** The lemma needs the components to be constant on the whole chart domain. Vanishing of the metric components' first derivatives at a single point does not make the Christoffel symbols vanish identically, so no pointwise version is claimed.
- **Converse.** A chart is not required to be an exponential or normal chart; any chart with constant components qualifies. Conversely the conclusion $\Gamma=0$ in a chart forces $\partial_ag_{bc}=0$ there by [L2], so constant components are equivalent to vanishing Christoffel symbols for the metric-selected connection.
