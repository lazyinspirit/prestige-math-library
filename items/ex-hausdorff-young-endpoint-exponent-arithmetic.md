---
id: ex-hausdorff-young-endpoint-exponent-arithmetic
kind: example
title: The Hausdorff–Young exponent arithmetic
deps: [cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Laugesen Remark C.7(1), p.169; explicit specialization
      url: https://arxiv.org/pdf/0903.3845
  scraped: []
status: draft
origin: pipeline
generation:
  role: example
proof_strategy: direct
---

## Example

For any sigma-finite-space complex-linear core operator with bounds $L^1\to L^\infty$ of constant A and $L^2\to L^2$ of constant B, the value $p=4/3$ gives target exponent 4 and bound $\sqrt{AB}$. The endpoint targets at p=1 and p=2 are respectively infinity and two.

## Facts & Assumptions

[F1] The abstract endpoint bound uses theta=2-2/p and the target conjugate exponent [[cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime]].

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 At $p=4/3$, $1/p=3/4$, $\theta=2-2/p=2-3/2=1/2$, and $1/p'=1-3/4=1/4$, so $p'=4$. The bound in F1 becomes $\|Tf\|_4\le A^{1/2}B^{1/2}\|f\|_{4/3}=\sqrt{AB}\|f\|_{4/3}$. For instance A=B=1 gives coefficient one. [F1]

2.1 At p=1 the reciprocal target exponent is $1-1=0$, giving infinity and the hypothesis $\|Tf\|_\infty\le A\|f\|_1$. At p=2 it is $1-1/2=1/2$, giving two and $\|Tf\|_2\le B\|f\|_2$. These direct endpoint statements remain meaningful for A=0 or B=0, while the interior square-root coefficient is zero if either vanishes. No Fourier operator or its endpoint bounds are being presumed. [F1, step 1.1] ∎
