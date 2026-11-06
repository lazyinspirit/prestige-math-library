---
id: thm-cft-bpz-equation-from-level-two-null-vector
kind: theorem
title: BPZ equation from a Virasoro level-two null vector
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: mathematics
library: mathematics
deps:
  - def-cft-coinvariants-and-conformal-blocks
  - def-cft-fixed-coordinate-sphere-virasoro-block-family
  - lem-cft-sphere-stress-tensor-ward-identity
  - def-virasoro-algebra
  - def-virasoro-highest-weight-module
dependency_roles:
  def-cft-coinvariants-and-conformal-blocks: mathematical-premise
  def-cft-fixed-coordinate-sphere-virasoro-block-family: mathematical-premise
  lem-cft-sphere-stress-tensor-ward-identity: mathematical-premise
  def-virasoro-algebra: mathematical-premise
  def-virasoro-highest-weight-module: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Belavin, Polyakov, and Zamolodchikov, Infinite Conformal Symmetry in Two-Dimensional Quantum Field Theory
      url: https://qft.itp.ac.ru/BPZ.pdf
      locator: §§2, 4–5, Ward identities and differential equations from degenerate Virasoro representations.
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: §4.5, printed pp. 57–58, and §5.2, printed pp. 63–65; null-vector equation and Ising four-spin blocks.
---

## Statement

Let $F(\mathbf z)$ be a fixed-coordinate sphere Virasoro block family with primary insertions $v_j$ of weights $h_j$. Suppose that in the chosen module the $i$th primary obeys the actual relation
$$
(L_{-2}-\beta L_{-1}^2)v_i=0,
$$
not merely that this vector is singular in a Verma module. Then
$$
\left[ \beta\partial_{z_i}^2- \sum_{j\ne i}\left( \frac{h_j}{(z_i-z_j)^2} +\frac{1}{z_i-z_j}\partial_{z_j} \right) \right]F(\mathbf z)=0.
$$

## Facts & Assumptions

**Given:** The Virasoro conventions of [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]], a block family as in [[def-cft-fixed-coordinate-sphere-virasoro-block-family]], and an actual level-two null relation in the $i$th module.

[F1] [[lem-cft-sphere-stress-tensor-ward-identity]] identifies the $L_{-2}$ insertion with the displayed sum over $j\ne i$.

[F2] [[def-cft-fixed-coordinate-sphere-virasoro-block-family]] makes translations act by insertion of $L_{-1}$, for all module states.

[A1] The relation $ (L_{-2}-\beta L_{-1}^2)v_i=0$ holds as equality to zero in the chosen module.

## Proof

1.1 By [F1], evaluating the block on $L_{-2}^{(i)}v_i$ gives
$$
F(L_{-2}^{(i)}v_i)= \sum_{j\ne i}\left(\frac{h_j}{(z_i-z_j)^2} +\frac{1}{z_i-z_j}\partial_{z_j}\right)F.
$$
This is a coefficient identity in the fixed local coordinate $t_i=w-z_i$. [F1, given]

2.1 The actual module relation [A1] gives $F(L_{-2}^{(i)}v_i)=\beta F((L_{-1}^{(i)})^2v_i)$. Applying the translation property [F2] twice gives $F((L_{-1}^{(i)})^2v_i)=\partial_{z_i}^2F$; the modes are fixed operators and the family is holomorphic, so the second derivative is defined. Substitution in step 1.1 and moving the sum to the left proves the BPZ equation. [A1, F2, step 1.1, algebra] ∎
## Remarks

The generic integral-$L_0$ carrier [[def-cft-coinvariants-and-conformal-blocks]] is separate formulation context; it supplies neither the actual null relation [A1] nor coordinate descent for fractional weights. Singularity in a Verma module alone is not used in the deduction.
