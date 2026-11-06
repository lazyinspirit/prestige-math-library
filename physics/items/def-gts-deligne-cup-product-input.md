---
id: def-gts-deligne-cup-product-input
kind: definition
title: Deligne cup-product input data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 5
deps:
  - lem-gts-deligne-exact-sequences
  - def-singular-cohomology-ring
  - def-axiom-of-choice
  - def-gts-smooth-deligne-cohomology-model
  - lem-gts-deligne-exponential-model-equivalence
dependency_roles:
  lem-gts-deligne-exact-sequences: mathematical-premise
  def-singular-cohomology-ring: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-gts-smooth-deligne-cohomology-model: mathematical-premise
  lem-gts-deligne-exponential-model-equivalence: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.4, Definition 3.94 and Proposition 3.95, PDF pp. 57–60; Problems 3.96–3.99 identify the local algebra and uniqueness obligations.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Assume full AC and let $M$ have the good cover and comparison input required for the Deligne exact-sequence lemma. For each $r\ge1$, use the cone-model projections
$$I_r:\widehat H^r_{\mathrm{Del}}(M;\mathbb Z)\longrightarrow H^r(M;\mathbb Z),\qquad R_r:\widehat H^r_{\mathrm{Del}}(M;\mathbb Z)\longrightarrow\Omega^r_{\mathrm{cl}}(M),$$
where $I_r$ is projection to integer-sheaf hypercohomology followed by the given integral comparison, and $R_r$ is projection to the truncated de Rham component, identified with global closed forms. Define
$$a_r:\Omega^{r-1}(M)\longrightarrow\widehat H^r_{\mathrm{Del}}(M;\mathbb Z),\qquad a_r(\eta)=[(0,d\eta,-\eta)]$$
in $\operatorname{Cone}(\mathbb Z\oplus\sigma_{\ge r}\Omega^\bullet\to\Omega^\bullet)[-1]$. Its degree-$r$ coordinates are respectively the integer component, the truncated-form component and the degree-$(r-1)$ full-form component. The cone differential on these global coordinates is $(z,\alpha,b)\mapsto(dz,d\alpha,-db+z-\alpha)$; hence this is a cocycle, $I_ra_r=0$, and $R_ra_r=d$.

A **Deligne cup-product input** is a family of bilinear maps $\smile_{\mathrm{Del}}:\widehat H^p_{\mathrm{Del}}(M;\mathbb Z)\times\widehat H^q_{\mathrm{Del}}(M;\mathbb Z)\to\widehat H^{p+q}_{\mathrm{Del}}(M;\mathbb Z)$ for all $p,q\ge1$ satisfying the following conditions: it is natural under smooth pullback, associative and graded-commutative; $I_{p+q}(x\smile_{\mathrm{Del}}y)=I_p(x)\smile I_q(y)$ for the integral singular cup product and $R_{p+q}(x\smile_{\mathrm{Del}}y)=R_p(x)\wedge R_q(y)$; and $a_p(\eta)\smile_{\mathrm{Del}}x=a_{p+q}(\eta\wedge R_q(x))$ for $\eta\in\Omega^{p-1}(M)$ and $x\in\widehat H^q_{\mathrm{Del}}(M;\mathbb Z)$. This definition names conditional data and does not assert that such a family exists.

## Definition references

[[lem-gts-deligne-exact-sequences]]

[[def-singular-cohomology-ring]]

[[def-axiom-of-choice]]

[[def-gts-smooth-deligne-cohomology-model]]

[[lem-gts-deligne-exponential-model-equivalence]]

## Remarks

Bunke states existence and uniqueness of this structure and gives a truncated-complex product formula. In v6, Problems 3.96–3.97 are followed by chain-map, associativity and homotopy-commutativity verifications; compatibility with $a$ and the factorization used for uniqueness are posed in Problems 3.98–3.99. This item defines conditional product data and does not reconstruct that existence-and-uniqueness argument locally.
