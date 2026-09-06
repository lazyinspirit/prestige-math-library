---
id: cor-flat-local-cohen-macaulay-fibre-criterion
title: The flat-local Cohen--Macaulay fibre criterion
kind: corollary
status: published
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring, cor-flat-local-depth-additivity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $(R,\mathfrak m)\to(S,\mathfrak n)$ be a flat local homomorphism of
Noetherian local rings. Then $S$ is Cohen--Macaulay if and only if both $R$
and the closed fibre $S/\mathfrak mS$ are Cohen--Macaulay.

## Facts & Assumptions

**Given:** the flat-local dimension formula $\dim S=\dim R+\dim(S/\mathfrak mS)$.

## Proof

**Proof technique:** direct.

1.1 Depth additivity and the dimension formula give $$\dim S-\operatorname{depth}S= (\dim R-\operatorname{depth}R)+ (\dim S/\mathfrak mS-\operatorname{depth}S/\mathfrak mS).$$ [given]

2.1 Each parenthesized gap is nonnegative by the depth bound. Their sum is zero exactly when both are zero, proving the equivalence. [step 1.1, algebra] ∎
