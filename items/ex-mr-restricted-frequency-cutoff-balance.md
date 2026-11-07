---
id: ex-mr-restricted-frequency-cutoff-balance
kind: example
title: Conditional short-interval frequency cutoff balance
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps:
  - lem-mr-restricted-frequency-reduction-to-all-large-bins
---

## Example

Use the data of the restricted frequency reduction with $\eta=1/12$, and suppose its additional all-large-bin bound holds with constant $K$. If $Q_1\le h\le X/(\log X)^{1/15}$, then
$$\int_{(\log X)^{1/15}}^{X/h}|F(1+it)|^2dt\ll(1+K)\left(\frac{(\log Q_1)^{1/3}}{P_1^{1/12}}+(\log X)^{-1/50}\right).$$
The implied constant is absolute after fixing $\eta=1/12$. This is a conditional frequency estimate, not an exceptional-count estimate for integer interval starts.

## Example references

[[lem-mr-restricted-frequency-reduction-to-all-large-bins]]

## Facts & Assumptions

**Given:** The reduction's hypotheses, its additional bound with $K$, $\eta=1/12$, and the displayed range of $h$.

[F1] The conditional conclusion of the restricted frequency reduction applies for every $T\ge(\log X)^{1/15}$. [[lem-mr-restricted-frequency-reduction-to-all-large-bins]]

## Verification

1.1 Set $T=X/h$. The upper bound on $h$ gives $T\ge(\log X)^{1/15}$. Also $h\ge Q_1\ge2$, so $T\le X$, and $1+TQ_1/X=1+Q_1/h\le2$. [given, algebra]

2.1 Apply [F1] with this $T$. Since $1/6-\eta=1/12$, its first error is at most $2(\log Q_1)^{1/3}P_1^{-1/12}$. Absorb the factor two in the fixed constant. The premise containing $K$ remains necessary. [F1, step 1.1, algebra] ∎
