---
id: prop-interior-product-on-forms-is-a-graded-antiderivation
kind: proposition
title: "Interior product on forms is a graded antiderivation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-interior-product-of-a-form-by-a-vector-field,
       prop-interior-product-is-a-graded-antiderivation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

If $X$ is a smooth vector field and $\alpha\in\Omega^k(M)$, $\beta\in\Omega^\ell(M)$,
then

$$ \iota_X(\alpha\wedge\beta)=\iota_X\alpha\wedge\beta+(-1)^k\alpha\wedge\iota_X\beta. $$

## Facts & Assumptions

**Given:** A smooth vector field $X$ and forms $\alpha,\beta$ of degrees $k,\ell$.

[F1] Interior product of a form is defined pointwise from the fibrewise interior product ([[def-interior-product-of-a-form-by-a-vector-field]]).

[L1] Fibrewise interior product is a graded antiderivation ([[prop-interior-product-is-a-graded-antiderivation]]).

## Proof
**Proof technique:** direct.

1.1 At each point $p\in M$, [F1] identifies $(\iota_X(\alpha\wedge\beta))_p$ with $\iota_{X_p}(\alpha_p\wedge\beta_p)$. [F1, given]

2.1 Applying [L1] in the vector space $T_pM$ gives $$ \iota_{X_p}(\alpha_p\wedge\beta_p)=\iota_{X_p}\alpha_p\wedge\beta_p+(-1)^k\alpha_p\wedge\iota_{X_p}\beta_p. $$ Using [F1] again identifies this with the fibre at $p$ of the claimed form identity. [F1, L1, step 1.1]

3.1 Since the two forms agree at every point, the displayed identity holds on $M$. [step 2.1] ∎