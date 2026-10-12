---
id: lem-gr-constant-rescaling-preserves-levi-civita-and-curvature
kind: lemma
title: "Constant metric rescaling preserves the connection and Ricci tensor and inversely scales scalar and sectional curvature"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-riemannian-metric-and-riemannian-manifold, prop-christoffel-formula-for-the-levi-civita-connection, prop-coordinate-formula-for-the-curvature-tensor, def-christoffel-symbols-of-an-affine-connection, def-affine-connection-on-a-smooth-manifold, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, def-riemann-curvature-four-tensor, def-ricci-curvature, def-scalar-curvature, def-sectional-curvature, thm-curvature-is-a-type-one-three-tensor, def-countable-choice]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  prop-christoffel-formula-for-the-levi-civita-connection: mathematical-premise
  prop-coordinate-formula-for-the-curvature-tensor: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components: mathematical-premise
  def-riemann-curvature-four-tensor: mathematical-premise
  def-ricci-curvature: mathematical-premise
  def-scalar-curvature: mathematical-premise
  def-sectional-curvature: mathematical-premise
  thm-curvature-is-a-type-one-three-tensor: mathematical-premise
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature, Chapter 3 (homotheties and the behavior of curvature under constant scaling of the metric), printed pp. 38-42, and the model-space curvatures, printed pp. 148-149"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
    - title: "Ved Datar, Lectures on Riemannian Geometry, Lecture 8 (the Christoffel formula) and Lecture 11 (the coordinate curvature formula), printed pp. 49 and 71-72"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
verification:
  precheck: pass
---

## Statement

Assume the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]);
the local calculations below use no further choice principle.

Let $\Sigma$ be a smooth manifold, let $\gamma$ be a Riemannian metric on
$\Sigma$ ([[def-riemannian-metric-and-riemannian-manifold]]) and let
$\lambda>0$ be a constant. Write $\gamma_\lambda:=\lambda\gamma$ for the
rescaled metric. Then:

**(a) Connection.** The Levi-Civita connection of $\gamma_\lambda$ equals the
Levi-Civita connection of $\gamma$
([[prop-christoffel-formula-for-the-levi-civita-connection]]).

**(b) Curvature operator.** If $R_\lambda$ and $R$ are the curvature operators
of the two Levi-Civita connections in the convention
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$
([[prop-coordinate-formula-for-the-curvature-tensor]],
[[thm-curvature-is-a-type-one-three-tensor]]), then $R_\lambda=R$: the two
operators are equal as $(1,3)$-tensor fields.

**(c) Ricci and scalar curvature.** With the Ricci curvature of
[[def-ricci-curvature]] and the scalar curvature of [[def-scalar-curvature]],

$$\operatorname{Ric}(\gamma_\lambda)=\operatorname{Ric}(\gamma),\qquad S(\gamma_\lambda)=\lambda^{-1}S(\gamma).$$

**(d) Lowered curvature and sectional curvature.** With the Riemann four-tensor
of [[def-riemann-curvature-four-tensor]],

$$\operatorname{Rm}_{\gamma_\lambda}(X,Y,Z,W)=\lambda\,\operatorname{Rm}_\gamma(X,Y,Z,W),$$

and for every tangent two-plane $\sigma$ on which $\gamma$ is defined the
sectional curvature scales inversely,
$K_{\gamma_\lambda}(\sigma)=\lambda^{-1}K_\gamma(\sigma)$ ([[def-sectional-curvature]]).

## Facts & Assumptions

**Given:** A smooth manifold $\Sigma$, a Riemannian metric $\gamma$, a constant $\lambda>0$, and a smooth chart $(U,x)$.

[L1] In a chart with metric matrix $(\gamma_{ij})$ and inverse $(\gamma^{ij})$, the Levi-Civita symbols of $\gamma$ are $\Gamma^k{}_{ij}=\tfrac12\sum_\ell\gamma^{k\ell}(\partial_i\gamma_{j\ell}+\partial_j\gamma_{i\ell}-\partial_\ell\gamma_{ij})$ ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[L2] A chart's Christoffel symbols are the coefficients in $\nabla_{\partial_i}\partial_j=\Gamma^k{}_{ij}\partial_k$; an affine connection is real bilinear and function-linear in its first argument, and $\nabla_X(fY)=X(f)Y+f\nabla_XY$ ([[def-christoffel-symbols-of-an-affine-connection]], [[def-affine-connection-on-a-smooth-manifold]]). A vector field on a chart domain is a finite sum $\sum_if^i\partial_i$ with smooth coefficients, and the coordinate fields form a basis of each tangent space ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], [[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L3] In a chart, $R^\ell{}_{kij}=\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm}$ ([[prop-coordinate-formula-for-the-curvature-tensor]]), and the curvature operator is a smooth $(1,3)$-tensor determined by its coordinate components ([[thm-curvature-is-a-type-one-three-tensor]]).

[L4] The Riemann four-tensor is $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$ ([[def-riemann-curvature-four-tensor]]); Ricci curvature is $\operatorname{Ric}(X,Y)=\operatorname{tr}(Z\mapsto R(Z,X)Y)$, a trace of the curvature endomorphism that involves no metric ([[def-ricci-curvature]]); scalar curvature is the metric trace $S=\operatorname{tr}_g\operatorname{Ric}$ ([[def-scalar-curvature]]); sectional curvature is $\operatorname{Rm}(u,v,v,u)$ divided by the positive Gram determinant of a basis $(u,v)$ of the two-plane ([[def-sectional-curvature]]).

## Proof

**Proof technique:** direct; compute the Christoffel symbols of $\lambda\gamma$ and then transport the equality along the definitions.

1.1 (Symbols of the rescaled metric.) In a chart, the matrix of $\gamma_\lambda$ is $\lambda(\gamma_{ij})$ with inverse $\lambda^{-1}(\gamma^{ij})$, and its coordinate derivatives are $\partial_i(\lambda\gamma_{j\ell})=\lambda\,\partial_i\gamma_{j\ell}$. Substituting into [L1], $\Gamma_\lambda{}^k{}_{ij}=\tfrac12\lambda^{-1}\gamma^{k\ell}\lambda(\partial_i\gamma_{j\ell}+\partial_j\gamma_{i\ell}-\partial_\ell\gamma_{ij})=\Gamma^k{}_{ij}$: the symbols of $\gamma_\lambda$ and $\gamma$ agree in every chart. [L1, algebra]

2.1 (Connection equality.) Fix a chart. By [L2] a vector field on its domain is $\sum_if^i\partial_i$ with smooth $f^i$, and the symbols describe the connection on coordinate fields, $\nabla_{\partial_i}\partial_j=\sum_k\Gamma^k{}_{ij}\partial_k$. Since $\nabla$ is function-linear in its first argument and satisfies the Leibniz rule in its second, $\nabla_XY=X^a\partial_a(Y^b)\partial_b+X^aY^b\nabla_{\partial_a}\partial_b$ for smooth fields; hence two affine connections with the same symbols in every chart agree on all smooth vector fields. By step 1.1 the Levi-Civita connections of $\gamma_\lambda$ and $\gamma$ have the same symbols in every chart, so they are equal. [L2, step 1.1, algebra]

3.1 (Curvature operator equality.) The curvature operator is defined from the connection alone by $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$; substituting the common connection of step 2.1 gives $R_\lambda=R$ on smooth fields. Equivalently, the coordinate formula [L3] expresses the components through the common symbols and their derivatives, so the components agree in every chart and [L3] makes the operators equal as $(1,3)$-tensors. [L3, step 2.1, algebra]

4.1 (Ricci equality.) By the definition recalled in [L4], $\operatorname{Ric}(X,Y)$ is the trace of the endomorphism $Z\mapsto R(Z,X)Y$ of $T_p\Sigma$; this trace is computed from the curvature endomorphism and the vector-space structure alone and uses no metric. Since $R_\lambda=R$ by step 3.1, the endomorphisms coincide at every point and so do their traces: $\operatorname{Ric}(\gamma_\lambda)=\operatorname{Ric}(\gamma)$. In particular no factor of $\lambda$ appears. [L4, step 3.1]

5.1 (Lowered curvature, scalar curvature and sectional curvature.) At a point, $\operatorname{Rm}_{\gamma_\lambda}(X,Y,Z,W)=(\lambda\gamma)(R_\lambda(X,Y)Z,W)=\lambda\,\gamma(R(X,Y)Z,W)=\lambda\operatorname{Rm}_\gamma(X,Y,Z,W)$ by [L4], step 3.1 and bilinearity of $\gamma$. Taking the metric trace of step 4.1, $S(\gamma_\lambda)=\sum_{i,j}(\lambda\gamma)^{ij}\operatorname{Ric}(\gamma_\lambda)_{ij}=\lambda^{-1}\sum_{i,j}\gamma^{ij}\operatorname{Ric}(\gamma)_{ij}=\lambda^{-1}S(\gamma)$, since the inverse metric of $\lambda\gamma$ is $\lambda^{-1}\gamma^{-1}$. Finally, for an independent pair $(u,v)$ the numerator of the sectional curvature of $\gamma_\lambda$ is $\operatorname{Rm}_{\gamma_\lambda}(u,v,v,u)=\lambda\operatorname{Rm}_\gamma(u,v,v,u)$ while the Gram determinant of $(u,v)$ with respect to $\gamma_\lambda$ is $\lambda^2$ times the Gram determinant with respect to $\gamma$; the ratio is therefore multiplied by $\lambda^{-1}$, $K_{\gamma_\lambda}(\sigma)=\lambda^{-1}K_\gamma(\sigma)$. This proves the four claims. [L4, step 3.1, step 4.1, algebra] ∎

## Remarks

- **Scope.** The lemma is stated for smooth manifolds with a Riemannian metric;
  it is pointwise and local, and it holds on every such manifold. The constant
  $\lambda$ must be strictly positive so
  that $\lambda\gamma$ is again positive definite. The raised-index Ricci
  tensor satisfies $\operatorname{Ric}(\gamma_\lambda)^{ab}=\lambda^{-2}\operatorname{Ric}(\gamma)^{ab}$,
  which is the statement used if an index-raised form is wanted.

- **Use on this page.** Constant rescaling preserves the covariant Ricci
  tensor and the sign of sectional curvature, while its magnitude changes
  inversely with the metric factor. Thus a normalized spatial metric with
  curvature $k$ has curvature $k/a(t)^2$ when multiplied by $a(t)^2$;
  clause (c) of [[def-gr-flrw-spatial-model]] distinguishes this scale from
  the normalized parameter.
