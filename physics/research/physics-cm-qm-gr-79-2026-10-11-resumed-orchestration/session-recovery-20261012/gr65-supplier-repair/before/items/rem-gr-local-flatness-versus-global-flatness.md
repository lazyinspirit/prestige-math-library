---
id: rem-gr-local-flatness-versus-global-flatness
kind: remark
title: "Local flatness at a point, vanishing curvature and global Minkowski geometry are three different statements"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-minkowski-model-and-inertial-chart, lem-gr-flat-model-connection-curvature-and-geodesics, thm-gr-point-normal-and-exponential-coordinate-charts, thm-gr-vanishing-curvature-implies-locally-minkowski, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula]
dependency_roles:
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  lem-gr-flat-model-connection-curvature-and-geodesics: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  thm-gr-vanishing-curvature-implies-locally-minkowski: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2: Riemann normal coordinates, g(p)=eta and vanishing first derivatives; the warning that curvature obstructs making second derivatives vanish and that flat curvature does not fix global topology, printed pp. 50-51 (PDF pp. 57-58) and pp. 77-78 (PDF pp. 84-85)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.2: normal coordinates make the metric first-order flat, second derivatives cannot generally vanish, and curvature is the local obstruction; global topology is independent, printed pp. 119-121 (PDF pp. 126-128)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.4: normal coordinates, the curvature obstruction to flatness and the local nature of the flat comparison, printed pp. 38-40 (PDF pp. 39-41)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: n/a
---

## Local flatness, curvature and global geometry

This note separates three statements that are frequently conflated, and
records their exact status in this library; it proves nothing by itself.

- **First-order flatness at a point is automatic.** Every smooth Lorentzian
  four-manifold has point-normal and exponential charts in which
  $g_{ab}(p)=\eta_{ab}$, $\partial_ag_{bc}(p)=0$ and
  $\Gamma^a{}_{bc}(p)=0$; the construction is first order and makes no claim
  about second derivatives of the metric
  ([[thm-gr-point-normal-and-exponential-coordinate-charts]] clauses (a)-(b)).
  Consequently the existence of locally inertial coordinates at an event is
  a property of every smooth metric, not an indication of vanishing
  curvature, and by itself it is not the statement that any neighborhood is
  Minkowski space.

- **The curvature is the second-order obstruction.** The point-normal formula
  of [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (c)
  expresses the curvature at the point through the second derivatives of the
  metric in any point-normal chart, and the curvature is a tensor field, so
  its vanishing is chart-independent
  ([[def-gr-curvature-tensor-and-derived-tensors]]). If the curvature
  vanishes on a normal neighborhood, the exponential chart is flat to all
  orders: the exponential map is an isometry onto an open subset of
  Minkowski space
  ([[thm-gr-vanishing-curvature-implies-locally-minkowski]] clauses (a)-(d)).
  This is the exact sense in which a flat metric is *locally* Minkowski.

- **Global Minkowski geometry is strictly stronger.** Vanishing curvature on
  a manifold does not determine its topology, its holonomy or its causal
  structure. The companion examples page exhibits a flat
  Lorentzian quotient of Minkowski space by a translation whose time
  coordinate is periodic: the metric is flat, the Einstein tensor vanishes,
  yet the manifold is not diffeomorphic to $\mathbb R^4$, admits closed
  timelike curves, and carries no global inertial chart; the theorem above is
  local precisely because it uses a normal neighborhood, not the whole
  manifold. Statements such as "the flat model is the spacetime" therefore
  require additional global hypotheses (simple connectedness, completeness,
  injectivity of the exponential map, a global chart) that are not part of
  the local computations of this page.

- **The flat model and its Killing structure.** In the model of
  [[def-gr-minkowski-model-and-inertial-chart]] the coordinate fields
  $\partial_0,\dots,\partial_3$ are global Killing fields and the geodesics
  are complete straight lines
  ([[lem-gr-flat-model-connection-curvature-and-geodesics]] clauses (c)-(d)).
  A manifold merely locally isometric to this model need not inherit any of
  these global structures: local isometries do not glue to global ones
  without monodromy and completeness hypotheses. This is why the physical
  and mathematical statements of this page are phrased neighborhood by
  neighborhood.

- **Scope.** No classification of flat Lorentzian four-manifolds and no
  global rigidity statement is made or used on this page. The note only
  fixes which of the three statements above each item of the page proves,
  and warns that the words "locally flat", "curvature-free" and "Minkowski"
  are not interchangeable.
