---
id: thm-eleven-dimensional-levi-civita-existence-and-uniqueness
kind: theorem
title: Levi-Civita Connection on an Eleven-Dimensional Lorentzian Manifold
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
deps:
  - def-eleven-dimensional-lorentzian-geometry
  - def-affine-connection-on-a-smooth-manifold
  - def-torsion-tensor-of-an-affine-connection
  - def-lie-bracket-of-smooth-vector-fields
  - prop-leibniz-rules-for-the-lie-bracket-with-function-multiples
  - def-smooth-vector-field-as-a-tangent-bundle-section
  - thm-coordinate-derivations-form-a-basis-of-the-tangent-space
  - lem-matrix-inversion-preserves-ck-regularity
  - def-countable-choice
dependency_roles:
  def-eleven-dimensional-lorentzian-geometry: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-torsion-tensor-of-an-affine-connection: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  prop-leibniz-rules-for-the-lie-bracket-with-function-multiples: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  lem-matrix-inversion-preserves-ck-regularity: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§1.1–§1.2, metric connection and curvature conventions; existence and uniqueness for the nondegenerate Lorentzian metric are proved locally here."
    - title: "Jerome P. Gauntlett and Pascal Pakis, The Geometry of D=11 Killing Spinors, arXiv:hep-th/0212008v3"
      url: "https://arxiv.org/pdf/hep-th/0212008"
      locator: "Appendix A, Lorentzian metric and connection conventions in eleven dimensions; the complete Koszul construction is proved locally here."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $(M,g)$ be an oriented Lorentzian eleven-manifold as in [[def-eleven-dimensional-lorentzian-geometry]]. There exists a unique affine connection $\nabla$ on $TM$ that is torsion-free and metric-compatible:

$$T(X,Y):=\nabla_XY-\nabla_YX-[X,Y]=0,\qquad X(g(Y,Z))=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$$

for all smooth local vector fields $X,Y,Z$. It is the **Levi-Civita connection** of $g$. In every smooth coordinate chart $(x^0,\ldots,x^{10})$, its coefficients are

$$\nabla_{\partial_M}\partial_N=\Gamma^P{}_{MN}\partial_P,\qquad \Gamma^P{}_{MN}=\frac12g^{PQ}(\partial_Mg_{NQ}+\partial_Ng_{MQ}-\partial_Qg_{MN}),$$

with indices summed from $0$ to $10$. No positivity of $g$ is required; only symmetry and nondegeneracy are used.

## Facts & Assumptions

**Given:** The smooth eleven-manifold $M$, its smooth symmetric nondegenerate metric $g$, and smooth local vector fields.

[F1] [[def-eleven-dimensional-lorentzian-geometry]]: $g$ is smooth, symmetric and pointwise nondegenerate on the smooth eleven-manifold; $\mathrm{AC}_\omega$ is assumed for the canonical tangent-bundle smooth structure.

[F2] [[def-affine-connection-on-a-smooth-manifold]]: an affine connection is real-linear in the vector-field arguments, function-linear in the differentiating field, and obeys $\nabla_X(fY)=X(f)Y+f\nabla_XY$. [[def-torsion-tensor-of-an-affine-connection]] defines its torsion by the displayed formula.

[F3] [[def-lie-bracket-of-smooth-vector-fields]], [[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]]: $[X,fY]=f[X,Y]+X(f)Y$ and $[fX,Y]=f[X,Y]-Y(f)X$; in coordinates, $[\partial_M,\partial_N]=0$.

[F4] [[def-smooth-vector-field-as-a-tangent-bundle-section]], [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]: smooth vector fields have smooth coordinate coefficients and $\partial_0,\ldots,\partial_{10}$ form a basis in each chart. The inverse matrix $(g^{MN})$ is smooth because matrix inversion preserves smoothness for a smooth matrix with nonzero determinant ([[lem-matrix-inversion-preserves-ck-regularity]]).

## Proof
**Proof technique:** direct construction from the Koszul formula.

1.1 For smooth local fields define
$$K(X,Y,Z):=Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)+g([X,Y],Z)+g([Z,X],Y)-g([Y,Z],X).$$
Using the bracket rules in [F3] and symmetry of $g$, the derivative-of-$f$ terms in the three expansions are respectively
$$Y(f)\bigl(g(Z,X)-g(X,Z)\bigr)+Z(f)\bigl(g(X,Y)-g(Y,X)\bigr),$$
$$X(f)\bigl(g(Y,Z)-g(Z,Y)\bigr)+Y(f)\bigl(g(Z,X)-g(X,Z)\bigr),$$
$$2X(f)g(Y,Z)+Z(f)\bigl(g(Y,X)-g(X,Y)\bigr).$$
The first two expressions vanish by symmetry, while the third leaves $2X(f)g(Y,Z)$. Therefore
$$K(fX,Y,Z)=fK(X,Y,Z),\quad K(X,Y,fZ)=fK(X,Y,Z),\quad K(X,fY,Z)=fK(X,Y,Z)+2X(f)g(Y,Z).$$
In particular, for each fixed $X,Y$, $K(X,Y,\cdot)$ is a smooth one-form. [F1, F3, algebra]

1.2 Since $g$ is nondegenerate, its flat map $v\mapsto g(v,\cdot)$ is an isomorphism on every tangent space. Define $\nabla_XY$ uniquely by $2g(\nabla_XY,Z)=K(X,Y,Z)$ for every $Z$. In a chart, applying this to coordinate fields and using [F3] gives
$$2g(\nabla_{\partial_M}\partial_N,\partial_Q)=\partial_Mg_{NQ}+\partial_Ng_{MQ}-\partial_Qg_{MN},$$
so the coefficients are exactly those in the Statement. They are smooth by [F4]. The pointwise definition uses only the global tensors, fields and bracket, so it agrees on chart overlaps and defines a global smooth vector field. [F1, F3, F4, algebra]

2.1 Additivity and real homogeneity of $\nabla$ follow from those of $K$. The first identity in step 1.1 gives $\nabla_{fX}Y=f\nabla_XY$; the third gives
$$2g(\nabla_X(fY),Z)=fK(X,Y,Z)+2X(f)g(Y,Z)=2g(f\nabla_XY+X(f)Y,Z).$$
Nondegeneracy of $g$ yields $\nabla_X(fY)=f\nabla_XY+X(f)Y$, so $\nabla$ is an affine connection by [F2]. [F2, step 1.1, step 1.2, algebra]

2.2 Subtracting the two Koszul expressions and using symmetry of $g$ and skew-symmetry of the bracket gives
$$K(X,Y,Z)-K(Y,X,Z)=2g([X,Y],Z).$$
Thus $2g(\nabla_XY-\nabla_YX-[X,Y],Z)=0$ for every $Z$, and nondegeneracy gives zero torsion. Adding the expressions with $Y,Z$ interchanged gives
$$K(X,Y,Z)+K(X,Z,Y)=2Xg(Y,Z),$$
so the defining identity implies metric compatibility. [F2, F3, step 1.2, algebra]

3.1 If $\nabla'$ is any torsion-free metric-compatible affine connection, substitute compatibility and torsion freedom into the six terms of $K$. The derivative terms become
$$g(\nabla'_XY,Z)+g(Y,\nabla'_XZ)+g(\nabla'_YZ,X)+g(Z,\nabla'_YX)-g(\nabla'_ZX,Y)-g(X,\nabla'_ZY),$$
and the bracket terms become
$$g(\nabla'_XY,Z)-g(\nabla'_YX,Z)+g(\nabla'_ZX,Y)-g(\nabla'_XZ,Y)-g(\nabla'_YZ,X)+g(\nabla'_ZY,X).$$
Pairings are symmetric, so all terms cancel except $2g(\nabla'_XY,Z)$. Hence $K(X,Y,Z)=2g(\nabla'_XY,Z)$. The defining identity for $\nabla$ and nondegeneracy imply $\nabla'_XY=\nabla_XY$ for all fields. This proves uniqueness. [F2, F3, step 1.2, algebra] ∎
