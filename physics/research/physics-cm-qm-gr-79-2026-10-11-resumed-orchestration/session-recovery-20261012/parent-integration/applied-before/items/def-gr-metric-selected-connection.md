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
  proof: ai-generated
deps: [def-gr-smooth-lorentzian-objects, def-affine-connection-on-a-smooth-manifold, def-torsion-tensor-of-an-affine-connection, def-lie-bracket-of-smooth-vector-fields, def-smooth-vector-field-as-a-tangent-bundle-section, def-countable-choice, def-gr-inverse-metric-and-musical-isomorphisms, lem-gr-inverse-metric-is-smooth, def-christoffel-symbols-of-an-affine-connection, prop-leibniz-rules-for-the-lie-bracket-with-function-multiples, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-curvature-of-an-affine-connection, thm-curvature-is-a-type-one-three-tensor, def-trace-of-an-endomorphism, prop-coordinate-vector-fields-commute]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-torsion-tensor-of-an-affine-connection: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  lem-gr-inverse-metric-is-smooth: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  prop-leibniz-rules-for-the-lie-bracket-with-function-multiples: mathematical-premise
  prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-curvature-of-an-affine-connection: mathematical-premise
  thm-curvature-is-a-type-one-three-tensor: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  prop-coordinate-vector-fields-commute: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 'covariant derivatives and connections', torsion (3.16) and metric compatibility, printed pp. 58-61 (PDF pp. 65-68)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 3.1-3.2, printed pp. 31-37 (PDF pp. 32-38); postulate 1, PDF p. 68"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.2 on connections and curvature, printed pp. 100-107 (PDF pp. 107-114)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
proof_strategy: direct
verification:
  precheck: pass
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


**(d) Intrinsic construction before physical use.** For smooth local vector
fields define the Koszul expression

$$K(X,Y,Z):=Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)+g([X,Y],Z)+g([Z,X],Y)-g([Y,Z],X).$$

Define $\nabla^g_XY$ by $2g(\nabla^g_XY,Z)=K(X,Y,Z)$ for every smooth local
$Z$. The proof below establishes existence, smoothness, the affine-connection
rules, metric compatibility, torsion freedom and uniqueness; it uses symmetry
and nondegeneracy, not positive definiteness. Thus $\operatorname{LC}(M,g)$
has this unique element, called the **Levi–Civita connection** of $g$. The later
nondegenerate-metric theorem retains its fuller tensor-derivative statement.
Its Christoffel symbols in any chart are defined by
$\nabla^g_{\partial_b}\partial_c=\Gamma^a{}_{bc}\partial_a$
([[def-christoffel-symbols-of-an-affine-connection]]) and obey

$$\Gamma^a{}_{bc}=\tfrac12 g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc}),\qquad a,b,c,d=0,1,2,3.$$

**(e) Basic curvature and contractions.** The **curvature** of this connection
is the operator of [[def-curvature-of-an-affine-connection]], with the fixed
sign convention

$$R^g(X,Y)Z:=\nabla^g_X\nabla^g_YZ-\nabla^g_Y\nabla^g_XZ-\nabla^g_{[X,Y]}Z.$$

The general affine-connection theorem
[[thm-curvature-is-a-type-one-three-tensor]] proves that it depends pointwise
only on $X,Y,Z$ and is a smooth tensor. Define its chart components by
$R^g(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$.
Define the **Ricci tensor** and **scalar curvature** pointwise by

$$\operatorname{Ric}_p(v,w):=\operatorname{tr}(z\mapsto R^g_p(z,w)v),\qquad S(p):=\operatorname{tr}(\sharp_p\circ\operatorname{Ric}^{\flat}_p),\qquad \operatorname{Ric}^{\flat}_p(v):=\operatorname{Ric}_p(v,\cdot).$$

Here $\sharp$ is the inverse metric isomorphism and traces are the
basis-independent trace of [[def-trace-of-an-endomorphism]]. Equivalently,
$\operatorname{Ric}_{bd}=\sum_aR^a{}_{bad}$ and
$S=\sum_{b,d}g^{bd}\operatorname{Ric}_{bd}$, all sums from $0$ through $3$.
These are well-defined smooth fields by finite contraction of the smooth
components of $R^g$ and $g^{-1}$; basis independence follows from the trace
and the intrinsic maps just defined. No symmetry identity or field equation
is assumed here. Lowering the curvature output gives
$R_{abcd}=g_{ae}R^e{}_{bcd}$, so the definitions agree with the full later
curvature item, which proves the remaining symmetries and coordinate formulas.

## Remarks

- **Construction and richer continuation.** Clauses (a)-(c) define the two
  selecting conditions; the proof below independently constructs their unique
  common solution. The later nondegenerate-metric theorem proves the full
  extension to tensor derivatives, contraction compatibility and preservation
  of both metric pairings. No conclusion is assumed from the name of the
  class. The companion component lemma proves the chartwise equivalences.

- **The two conditions constrain different data.** In a chart, torsion freedom
  is the symmetry $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ of the connection
  coefficients, a condition on the connection alone, while $g$-compatibility is
  the differential identity
  $\partial_ag_{bc}=\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd}$ relating the
  coefficients to the metric; both equivalences are proved in a companion
  lemma on this page. The framework adopts a
  metric-selected connection as part of its geometric structure; that adoption
  is a physical postulate of the classical model, recorded with the framework
  postulates, and the proof below establishes that the class has exactly one element.
  Its later extension theorem retains the richer tensor-derivative claims.


## Facts & Assumptions

**Given:** The smooth Lorentzian data $(M,g,N)$ of the Definition and smooth
local vector fields $X,Y,Z$.

[F1] Coordinate vector fields commute ([[prop-coordinate-vector-fields-commute]]). The bracket is smooth and obeys $[X,fY]=f[X,Y]+X(f)Y$ and $[fX,Y]=f[X,Y]-Y(f)X$ ([[def-lie-bracket-of-smooth-vector-fields]], [[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]]).

[F2] Nondegeneracy identifies vectors with covectors by $g$, with inverse components $g^{ab}$ smooth and satisfying $g^{ac}g_{cb}=\delta^a{}_b$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[lem-gr-inverse-metric-is-smooth]]). Coordinate derivations form a basis, and smoothness of a field is equivalent to smoothness of its coordinate components ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], [[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[F3] The affine-connection rules and torsion are those of [[def-affine-connection-on-a-smooth-manifold]] and [[def-torsion-tensor-of-an-affine-connection]]; metric compatibility is (a) above.

[F4] The curvature operator of any smooth affine connection is a smooth pointwise trilinear tensor, with no metric or torsion hypothesis ([[def-curvature-of-an-affine-connection]], [[thm-curvature-is-a-type-one-three-tensor]]).

## Proof

1.1 Expand the six terms of $K$ using [F1] and the derivation product rule. In $K(fX,Y,Z)$ the $Y(f)g(Z,X)$ and $-Z(f)g(X,Y)$ contributions cancel the terms $-Y(f)g(X,Z)$ and $Z(f)g(X,Y)$ from the brackets, so $K(fX,Y,Z)=fK(X,Y,Z)$. In $K(X,Y,fZ)$ the contributions $X(f)g(Y,Z)$ and $Y(f)g(Z,X)$ cancel those from $[fZ,X]$ and $[Y,fZ]$, giving $K(X,Y,fZ)=fK(X,Y,Z)$. In $K(X,fY,Z)$ the two surviving $X(f)g(Y,Z)$ contributions give $K(X,fY,Z)=fK(X,Y,Z)+2X(f)g(Y,Z)$. Additivity and real homogeneity in all slots are termwise. [F1, algebra]

2.1 On any chart put $V=\tfrac12\sum_{a,b=0}^3g^{ab}K(X,Y,\partial_b)\partial_a$. This is smooth by [F1]-[F2] and smoothness of the pairings $g(X,Y)$. Inserting $Z=\partial_c$ gives $2g(V,\partial_c)=K(X,Y,\partial_c)$ by the inverse-matrix identity; function-linearity in $Z$ from step 1.1 and the coordinate basis then give $2g(V,Z)=K(X,Y,Z)$ for every $Z$. Two such local fields agree on an overlap by nondegeneracy, so all these local definitions patch uniquely, without a choice of a global family of frames, to $\nabla^g_XY$. Step 1.1 and nondegeneracy transfer the three affine-connection rules to $\nabla^g$. [step 1.1, F1, F2, F3, algebra]

3.1 By metric symmetry and bracket skew-symmetry, expanding and cancelling terms gives $K(X,Y,Z)-K(Y,X,Z)=2g([X,Y],Z)$ and $K(X,Y,Z)+K(X,Z,Y)=2Xg(Y,Z)$. Together with step 2.1 and nondegeneracy, these are respectively $\nabla^g_XY-\nabla^g_YX=[X,Y]$ and $g(\nabla^g_XY,Z)+g(Y,\nabla^g_XZ)=Xg(Y,Z)$. Thus the constructed connection is torsion-free and metric-compatible. [step 2.1, F1, F2, F3, algebra]

4.1 For any other torsion-free metric-compatible $\nabla'$, substitute the compatibility identity into the three derivatives in $K$ and substitute $[X,Y]=\nabla'_XY-\nabla'_YX$ into its three brackets. Metric symmetry cancels all pairings except two copies of $g(\nabla'_XY,Z)$; hence $2g(\nabla'_XY,Z)=K(X,Y,Z)$, and nondegeneracy identifies $\nabla'$ with step 2.1. On coordinate fields the brackets vanish and this same identity gives $2g_{ad}\Gamma^d{}_{bc}=\partial_bg_{ca}+\partial_cg_{ba}-\partial_ag_{bc}$; multiply by the inverse matrix to obtain the displayed Christoffel formula. [step 2.1, step 3.1, F1, F2, F3, algebra]

5.1 The constructed smooth affine connection satisfies the hypotheses of [F4], so $R^g$ is pointwise well defined and smooth. The map $z\mapsto R^g_p(z,w)v$ is a linear endomorphism depending bilinearly on $v,w$; its intrinsic trace therefore gives a basis-independent covariant two-tensor. In a chart its finite trace is $\operatorname{Ric}_{bd}=\sum_aR^a{}_{bad}$. Composing its covector map with $\sharp$ gives a smooth endomorphism, whose trace is $S=\sum_{b,d}g^{bd}\operatorname{Ric}_{bd}$. Their smoothness follows from these finite sums of smooth components. The same inverse-matrix identity gives $\sum_{a,c}g^{ac}R_{abcd}=\sum_cR^c{}_{bcd}=\operatorname{Ric}_{bd}$, confirming the later component convention. All constructions therefore require no further assumptions or physical premises. [step 4.1, F2, F4, algebra] ∎
