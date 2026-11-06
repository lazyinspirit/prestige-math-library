---
id: def-type-iib-lorentzian-hodge-star
kind: definition
title: Lorentzian Hodge Star in Ten Dimensions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - def-smooth-manifold
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-smooth-differential-k-form
  - def-smooth-tensor-field
  - def-bilinear-symmetric-skew-and-alternating-forms
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - def-exterior-algebra-of-covectors
  - def-wedge-product-of-differential-forms
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-smooth-tensor-field: mathematical-premise
  def-bilinear-symmetric-skew-and-alternating-forms: mathematical-premise
  def-definiteness-inertia-and-signature-data-over-the-reals: mathematical-premise
  def-exterior-algebra-of-covectors: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
justified_by:
  - thm-type-iib-lorentzian-hodge-star-properties
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "Chapter 1, Hodge duality, equations (1.87)-(1.88), PDF pp. 29-30; Chapter 2, Levi-Civita tensor and metric volume density, equation (2.42), PDF p. 58."
aliases: []
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $M$ be an oriented smooth $10$-manifold. Its orientation is a smooth choice of ray in $\det T_xM$ at each $x$; an oriented chart has positively oriented coordinate frame. Let $g$ be a smooth symmetric covariant $2$-tensor which is nondegenerate with inertia $(9,1,0)$ at every point, so in an oriented pseudo-orthonormal coframe its matrix is $\operatorname{diag}(-1,+1,\ldots,+1)$. In a positively oriented chart $(x^0,\ldots,x^9)$ define the metric volume form by

$$\operatorname{vol}_g=\sqrt{|\det(g_{\mu\nu})|}\,dx^0\wedge\cdots\wedge dx^9.$$

For smooth real $p$-forms $\alpha,\beta\in\Omega^p(M)$, $0\le p\le10$, define the induced (generally indefinite) pointwise pairing by

$$\langle\alpha,\beta\rangle_g=\frac1{p!}\alpha_{\mu_1\cdots\mu_p}\beta^{\mu_1\cdots\mu_p},$$

where every upper index is raised with $g^{-1}$. The Lorentzian Hodge star is the pointwise linear map $*_g:\Lambda^pT_x^*M\to\Lambda^{10-p}T_x^*M$ characterized by

$$\alpha\wedge *_g\beta=\langle\alpha,\beta\rangle_g\,\operatorname{vol}_g.$$

The equation is required for every $\alpha,\beta$ in each cotangent exterior power. The local theorem *Existence and Five-Form Properties of the Lorentzian Hodge Star* proves that the metric volume form is well-defined and smooth and that this equation determines a unique smooth bundle isomorphism. Positivity of the induced pairing is not assumed.

## Definition references

[[thm-type-iib-lorentzian-hodge-star-properties]]

[[def-smooth-manifold]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[[def-smooth-differential-k-form]]

[[def-smooth-tensor-field]]

[[def-bilinear-symmetric-skew-and-alternating-forms]]

[[def-definiteness-inertia-and-signature-data-over-the-reals]]

[[def-exterior-algebra-of-covectors]]

[[def-wedge-product-of-differential-forms]]

## Remarks

The metric volume form uses $|\det g|$ because the metric is Lorentzian. The positive-definite Hodge-star definition does not supply this Lorentzian operator.
