---
id: def-gr-metric-selected-connection
kind: definition
title: "Metric compatibility, torsion freedom and the metric-selected connection class"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-affine-connection-on-a-smooth-manifold, def-torsion-tensor-of-an-affine-connection, def-lie-bracket-of-smooth-vector-fields, def-smooth-vector-field-as-a-tangent-bundle-section, def-countable-choice]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-torsion-tensor-of-an-affine-connection: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 'covariant derivatives and connections', torsion (3.16) and metric compatibility, printed pp. 58-61 (PDF pp. 65-68)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 3.1-3.2, printed pp. 31-37 (PDF pp. 32-38); postulate 1, PDF p. 68"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.2 on connections and curvature, printed pp. 100-107 (PDF pp. 107-114)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and let $\nabla$ be an affine connection
on $M$ ([[def-affine-connection-on-a-smooth-manifold]]). Smooth vector fields
are smooth sections of the tangent bundle
([[def-smooth-vector-field-as-a-tangent-bundle-section]]); as there, their use
rests on the canonical smooth structure of $TM$, which assumes the axiom
$\mathrm{AC}_\omega$ of [[def-countable-choice]]. This is the only use of that
axiom in this definition.

**(a) Metric compatibility.** The connection $\nabla$ is **$g$-compatible**, or
**compatible with the metric** $g$, when for all smooth vector fields $X,Y,Z$ on
$M$ the identity of smooth functions

$$X\bigl(g(Y,Z)\bigr)=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$$

holds on $M$. Here $g(Y,Z)$ is the smooth function $p\mapsto g_p(Y_p,Z_p)$ and
$X$ acts on functions as a derivation; the identity uses only the action of
$\nabla$ on vector fields and requires no extension of $\nabla$ to tensor
fields. When such an extension is available, this identity is the statement
$\nabla_Xg=0$, and the compatibility of $\nabla$ with the inverse metric
$g^{-1}$ follows; neither statement is part of this definition.

**(b) Torsion freedom.** The **torsion** of $\nabla$ is the tangent-valued
$2$-tensor $T(X,Y)=\nabla_XY-\nabla_YX-[X,Y]$ of
[[def-torsion-tensor-of-an-affine-connection]], with bracket as in
[[def-lie-bracket-of-smooth-vector-fields]]. The connection is **torsion-free**
when $T(X,Y)=0$ for all smooth $X,Y$, that is, when
$\nabla_XY-\nabla_YX=[X,Y]$ identically.

**(c) Metric-selected connections.** A **metric-selected connection** for
$(M,g)$ is an affine connection on $M$ that is both torsion-free and
$g$-compatible. Equivalently, it is an element of the class

$$\operatorname{LC}(M,g):=\{\nabla:\nabla\text{ is an affine connection on }M,\ \nabla\text{ is torsion-free and }g\text{-compatible}\}.$$

The name records that the pair of conditions selects the connection out of all
affine connections; it is the pair of conditions imposed on the connection that
conventional general relativity uses, and the connection so selected is called
the **Levi–Civita connection** of $g$.

## Remarks

- **No existence or uniqueness is asserted here.** This definition names a
  class of connections. It neither asserts that $\operatorname{LC}(M,g)$ is
  nonempty nor that it has at most one element; for a general affine connection
  both conditions can fail, and a metric need not determine a connection without
  proof. The existence and uniqueness of a metric-selected connection for every
  smooth Lorentzian metric is a theorem about the Koszul expression for
  $\nabla$, proved where the connection of the model is constructed; the present
  item only fixes the meaning of the two conditions and is not used there to
  assume the conclusion; the equivalent component forms of both conditions in a
  chart are proved in a companion lemma on this page.

- **The two conditions constrain different data.** In a chart, torsion freedom
  is the symmetry $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ of the connection
  coefficients, a condition on the connection alone, while $g$-compatibility is
  the differential identity
  $\partial_ag_{bc}=\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd}$ relating the
  coefficients to the metric; both equivalences are proved in a companion
  lemma on this page. The framework adopts a
  metric-selected connection as part of its geometric structure; that adoption
  is a physical postulate of the classical model, recorded with the framework
  postulates, and the mathematical theorem that the class has exactly one
  element for every smooth Lorentzian metric is stated and proved separately.
