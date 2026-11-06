---
id: def-eleven-dimensional-lorentzian-geometry
kind: definition
title: Eleven-Dimensional Oriented Lorentzian Geometry
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-smooth-manifold
  - def-oriented-real-vector-bundle-and-oriented-frame-bundle
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - def-smooth-differential-k-form
  - def-wedge-product-of-differential-forms
  - lem-matrix-inversion-preserves-ck-regularity
dependency_roles:
  def-countable-choice: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-oriented-real-vector-bundle-and-oriented-frame-bundle: mathematical-premise
  def-definiteness-inertia-and-signature-data-over-the-reals: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  lem-matrix-inversion-preserves-ck-regularity: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§1.1–§1.2, Lorentzian signature, metric, curvature, and norm conventions; the eleven-dimensional Hodge map is constructed and proved well-defined locally in this item."
    - title: "Jerome P. Gauntlett and Pascal Pakis, The Geometry of D=11 Killing Spinors, arXiv:hep-th/0212008v3"
      url: "https://arxiv.org/pdf/hep-th/0212008"
      locator: "Appendix A, eleven-dimensional signature and Clifford convention; the Hodge-star existence argument is proved locally in this item."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, as in [[def-countable-choice]]. An **oriented Lorentzian eleven-manifold** is an oriented smooth manifold $M$ of dimension $11$, without boundary, together with a smooth symmetric covariant two-tensor $g$ whose inertia at every point is $(10,1,0)$: ten positive and one negative eigenvalue and no zero eigenvalues ([[def-smooth-manifold]], [[def-oriented-real-vector-bundle-and-oriented-frame-bundle]], [[def-definiteness-inertia-and-signature-data-over-the-reals]]). The metric is therefore nondegenerate and has signature $(-+\cdots+)$. Its inverse is denoted $g^{-1}$.

For $0\le p\le11$, let $\Omega^p(M)$ be the smooth sections of $\Lambda^pT^*M$ ([[def-smooth-differential-k-form]]). The metric induces the signed pairing

$$\langle\alpha,\beta\rangle_g=\frac1{p!}\alpha_{M_1\cdots M_p}\beta^{M_1\cdots M_p},$$

where all indices are raised with $g^{-1}$; set $|\alpha|_g^2:=\langle\alpha,\alpha\rangle_g$. This pairing need not be positive. Let $\operatorname{vol}_g$ be the unique smooth eleven-form positive in the chosen orientation and locally equal to $\sqrt{|\det(g_{MN})|}\,dx^0\wedge\cdots\wedge dx^{10}$ in positively oriented coordinates. The **Lorentzian Hodge star** $*_g:\Omega^p(M)\to\Omega^{11-p}(M)$ is determined pointwise by

$$\alpha\wedge *_g\beta=\langle\alpha,\beta\rangle_g\operatorname{vol}_g\qquad(\alpha,\beta\in\Omega^p(M)).$$

This map exists uniquely: in a basis of increasing coordinate wedges, each $p$-wedge pairs with its complementary $(11-p)$-wedge with coefficient $+1$ or $-1$, so the wedge pairing is perfect. The metric-induced pairing on $\Lambda^pT_x^*M$ is nondegenerate because it is the exterior-power pairing induced by the invertible map $g^{-1}$. Thus for each $\beta_x$ there is exactly one $(*_g\beta)_x$ with the displayed values against every $\alpha_x$. In a coordinate frame the coefficients depend smoothly on $g$ and $g^{-1}$; matrix inversion preserves smoothness for nonzero determinant ([[lem-matrix-inversion-preserves-ck-regularity]]), so these pointwise maps form a smooth bundle map. The convention for differential forms and wedge products is that of [[def-smooth-differential-k-form]] and [[def-wedge-product-of-differential-forms]].

This is a mathematical structure definition. It asserts neither the existence of a metric on every eleven-manifold nor the existence of a spin structure.

## Facts & Assumptions

**Given:** An oriented smooth eleven-manifold $M$, a smooth symmetric tensor $g$ of inertia $(10,1,0)$, and smooth differential forms.

[F1] [[def-smooth-manifold]]: a smooth eleven-manifold has compatible smooth coordinate charts; its tangent and cotangent bundles have the corresponding smooth local frames.

[F2] [[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]: an orientation is a continuous choice of orientation in each fiber, and positively oriented local frames define the oriented frame bundle.

[F3] [[def-definiteness-inertia-and-signature-data-over-the-reals]]: inertia $(10,1,0)$ means ten positive directions, one negative direction, and no null direction.

[F4] [[def-smooth-differential-k-form]]: a smooth $p$-form is a smooth section of $\Lambda^pT^*M$.

[F5] [[def-wedge-product-of-differential-forms]]: wedge is the pointwise alternating product on exterior powers.

[F6] [[lem-matrix-inversion-preserves-ck-regularity]]: a smooth matrix field with nonzero determinant has a smooth inverse matrix field.

## Proof

**Proof technique:** local coordinate construction.

1.1 In any positively oriented chart, the coordinate matrix of $g$ is smooth and nondegenerate by [F1] and [F3], so its determinant is nowhere zero and has the negative sign because exactly one eigenvalue is negative. Hence $\sqrt{|\det g|}$ is smooth and positive. Under an orientation-preserving coordinate change, the determinant factor transforms by the absolute Jacobian determinant, exactly as the coordinate top-form basis transforms; thus the local formula for $\operatorname{vol}_g$ agrees on overlaps. Its local coefficient is fixed, so it is unique. [F1, F2, F3, algebra]

2.1 In a coordinate coframe, the wedge pairing between $\Lambda^pT_x^*M$ and $\Lambda^{11-p}T_x^*M$ has an invertible signed permutation matrix: each increasing multi-index pairs only with its complementary index. The metric pairing on $\Lambda^pT_x^*M$ is nondegenerate because it is induced by the invertible $g^{-1}$, whose coordinate entries are smooth by [F6]. Therefore for every $\beta_x$ the wedge pairing determines one and only one $(*_g\beta)_x$. The local matrix defining this map uses only $g^{-1}$, the wedge pairing, and $\operatorname{vol}_g$, all smooth by steps 1.1 and [F1], [F4], [F5], [F6]; hence the maps patch to a smooth bundle map. This proves the Hodge-star definition is well-defined. [F1, F4, F5, F6, step 1.1, algebra] ∎
