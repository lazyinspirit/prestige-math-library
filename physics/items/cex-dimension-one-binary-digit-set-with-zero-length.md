---
id: "cex-dimension-one-binary-digit-set-with-zero-length"
kind: "counterexample"
title: "A dimension-one set can have zero length"
deps: ["prop-binary-digit-restriction-hausdorff-dimension"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Example 1.4.2, nonsquare-position specialisation
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement refuted

Assume the Axiom of Countable Choice. The implication “a compact subset of $\mathbb R$ of Hausdorff dimension one has positive length” is false. Let $S=\mathbb N_+\setminus\{k^2:k\ge1\}$. Then $A_S$ is compact, $\dim_H A_S=1$, and $\mathcal H^1(A_S)=\lambda_1(A_S)=0$.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, for every position set $S$, $A_S$ is compact with dimension $\liminf a_S(n)/n$; an infinite complement implies both Lebesgue and Hausdorff one-measure zero. [[prop-binary-digit-restriction-hausdorff-dimension]]

## Counterexample

1.1 For the nonsquare positions, $a_S(n)=n-\lfloor\sqrt n\rfloor$. Therefore $a_S(n)/n\to1$ and the dimension formula gives $\dim_H A_S=1$, with compactness supplied by the same theorem. [F1]

2.1 The forbidden positions include every positive square and are infinite. Thus $\lambda_1(A_S)=\mathcal H^1(A_S)=0$. The set contains zero and is a nonempty witness refuting the implication. [F1, step 1.1] ∎
