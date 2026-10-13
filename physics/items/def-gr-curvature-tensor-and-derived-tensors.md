---
id: def-gr-curvature-tensor-and-derived-tensors
kind: definition
title: "The Riemann curvature operator and the derived Ricci, scalar and Einstein tensors"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-affine-connection-on-a-smooth-manifold, def-gr-tensor-fields-and-components, def-lie-bracket-of-smooth-vector-fields, def-gr-inverse-metric-and-musical-isomorphisms, def-christoffel-symbols-of-an-affine-connection, def-contraction-of-a-mixed-tensor, def-smooth-manifold]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-contraction-of-a-mixed-tensor: mathematical-premise
  def-smooth-manifold: mathematical-premise
justified_by: [thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries]
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the commutator of covariant derivatives (3.65)-(3.66), the Riemann tensor (3.67), the Ricci tensor (3.90), the Ricci scalar (3.92) and the Einstein tensor (3.95), printed pp. 75-76 and 81-82 (PDF pp. 82-83 and 88-89)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.3: the Riemann tensor from the path dependence of parallel transport (4.6)-(4.15), printed pp. 43-44 (PDF pp. 44-45); section 4.6: the Ricci tensor (4.30), the Ricci scalar (4.31) and the Einstein tensor (4.32), printed pp. 48-49 (PDF pp. 49-50)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.2.2: the Riemann tensor (3.15) with the sign convention (3.14), printed pp. 105-108 (PDF pp. 112-115); section 3.4.1: the Ricci and Einstein tensors, printed pp. 130-131 (PDF pp. 137-139)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) with metric-selected connection
$\nabla$ ([[def-gr-metric-selected-connection]]), whose existence and
uniqueness are supplied by
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]; that theorem also
extends $\nabla$ to a derivative on tensor fields commuting with contractions
and annihilating $g$ and $g^{-1}$. Let $U\subseteq M$ be open and let
$X,Y,Z$ be smooth vector fields on $U$; brackets are those of
[[def-lie-bracket-of-smooth-vector-fields]], and contractions those of
[[def-contraction-of-a-mixed-tensor]].

**(a) The curvature operator.** The **curvature operator** of $\nabla$ is the
assignment

$$R(X,Y)Z:=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z .$$

The right-hand side is a smooth vector field on $U$: $\nabla_YZ$ is smooth
because $\nabla$ is an affine connection
([[def-affine-connection-on-a-smooth-manifold]]), $[X,Y]$ is smooth, and
$\nabla_X(\cdot)$ and $\nabla_{[X,Y]}(\cdot)$ preserve smoothness. The
assignment is defined for the given smooth fields; that its value at a point
depends only on the values of $X,Y,Z$ at that point, so that $R$ is a smooth
tensor field of type $(1,3)$, is the content of
[[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (a), and
likewise the algebraic symmetries used below are proved in
[[thm-gr-curvature-algebraic-symmetries]].

**(b) Component functions.** Let $(V,x)$ be a smooth chart of $M$ and let
$\Gamma^a{}_{bc}$ be the Christoffel symbols of $\nabla$ in this chart,
characterized by $\nabla_{\partial_b}\partial_c=\sum_a\Gamma^a{}_{bc}\partial_a$
([[def-christoffel-symbols-of-an-affine-connection]]); the coordinate fields
commute, so $\nabla_{\partial_c}\partial_d$ and $\nabla_{\partial_d}\partial_c$
are obtained from the same symbols. The **components** of the curvature in the
chart are the smooth functions $R^a{}_{bcd}$ on $V$ defined by

$$R(\partial_c,\partial_d)\partial_b=\sum_a R^a{}_{bcd}\,\partial_a .$$

The first index is the output slot, the second is the differentiated slot and
the last two are the two directions of the loop; indices are $a,b,c,d=0,1,2,3$
and the Einstein summation convention of
[[def-gr-smooth-lorentzian-objects]] applies.

**(c) Lowered tensor, Ricci tensor, scalar curvature, Einstein tensor.** On
the chart domain define, using the inverse metric
$g^{ab}$ of [[def-gr-inverse-metric-and-musical-isomorphisms]],

$$R_{abcd}:=\sum_e g_{ae}R^e{}_{bcd},\qquad \operatorname{Ric}_{bd}:=\sum_{a,c}g^{ac}R_{abcd},\qquad S:=\sum_{b,d}g^{bd}\operatorname{Ric}_{bd},\qquad G_{ab}:=\operatorname{Ric}_{ab}-\tfrac12 S\,g_{ab}.$$

The fields $R_{abcd}$, $\operatorname{Ric}_{ab}$, $S$ and $G_{ab}$ are called
the **Riemann tensor with lowered indices**, the **Ricci tensor**, the
**scalar curvature** and the **Einstein tensor** of the metric-selected
connection. Tensoriality of $R$ is proved in
[[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (a).
Lowering its output slot with the smooth metric and contracting with the
smooth inverse metric are intrinsic tensor operations
([[def-gr-tensor-fields-and-components]] clauses (b)-(c),
[[def-contraction-of-a-mixed-tensor]]). Thus these formulas give smooth
fields of types $(0,4)$, $(0,2)$, $(0,0)$ and $(0,2)$, respectively,
independent of the chart. Symmetry of $\operatorname{Ric}$ and $G$ is proved
separately in [[thm-gr-curvature-algebraic-symmetries]] clause (d).

## Conventions and scope

- **Sign convention.** The signs of the curvature operator and of the
  component order are fixed by the displays of clauses (a) and (b) and are
  those used by every curvature item on this page and by the curvature
  consumers on later pages: with these conventions
  $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and
  $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$. Other sources
  order the loop indices differently; no formula of another source is used
  without checking its convention against this one.

- **What is defined where.** The operator and components of clauses (a)-(b)
  are defined from the connection alone; the lowered tensor, Ricci tensor,
  scalar curvature and Einstein tensor of clause (c) require the metric, and
  in clause (c) everything is defined chartwise from the components, with
  the chart-independence supplied by curvature tensoriality and intrinsic
  metric contractions, as specified there. The Christoffel
  symbols $\Gamma^a{}_{bc}$ are chart functions and not tensor components
  ([[def-christoffel-symbols-of-an-affine-connection]]); no tensority of
  $\Gamma$ is asserted here or later.

- **Scope.** This definition asserts no relation between curvature and any
  physical quantity, no equation satisfied by $\operatorname{Ric}$ or $G$,
  and no vanishing criterion: in particular $\Gamma^a{}_{bc}(p)=0$ at a
  point does not imply $R^a{}_{bcd}(p)=0$, since curvature is second-order
  metric information in the precise sense of
  [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (c). The
  physical reading of $G_{ab}$ as one side of a field equation is a separate
  postulate of the framework and is not part of this definition.
