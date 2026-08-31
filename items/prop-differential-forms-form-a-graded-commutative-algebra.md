---
id: prop-differential-forms-form-a-graded-commutative-algebra
kind: proposition
title: "Differential forms form a graded commutative algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-wedge-product-of-differential-forms,
       thm-wedge-product-is-associative-and-graded-commutative,
       prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

The graded vector space

$$
\Omega^*(M):=\bigoplus_{k\ge 0}\Omega^k(M)
$$

with the wedge product is an associative graded-commutative algebra.

## Facts & Assumptions

**Given:** Differential forms $\alpha,\beta,\gamma$ of homogeneous degrees $k,\ell,m$.

[F1] The wedge product of forms is defined pointwise from the wedge product of alternating covectors ([[def-wedge-product-of-differential-forms]]).

[L1] The fibrewise wedge product is associative and graded commutative ([[thm-wedge-product-is-associative-and-graded-commutative]]).

[L2] Tensor-field smoothness can be checked on coordinate components ([[prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components]]).

## Proof
**Proof technique:** direct.

1.1 At each point $p\in M$, [F1] and [L1] give $$ ((\alpha\wedge\beta)\wedge\gamma)_p=\alpha_p\wedge(\beta_p\wedge\gamma_p) $$ and $$ (\alpha\wedge\beta)_p=(-1)^{k\ell}(\beta\wedge\alpha)_p. $$ [F1, L1, given]
1.2 The local coefficient functions of $\alpha\wedge\beta$ are polynomial expressions in the local coefficients of $\alpha$ and $\beta$, so [L2] shows that wedge products remain smooth. [F1, L2, given, algebra]
2.1 Therefore $\Omega^*(M)$ is closed under wedge and inherits associativity and graded commutativity pointwise from [L1]. [step 1.1, step 1.2] ∎