---
id: "cor-degree-is-an-integer-and-independent-of-the-regular-value"
kind: "corollary"
title: "Degree is an integer and independent of the regular value"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-regular-value-formula-for-compact-support-degree"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $F:M^n\to N^n$ be a proper smooth map between nonempty connected oriented boundaryless manifolds. Every supplied regular value $y$ gives the same integer
$$\sum_{p\in F^{-1}(y)}\operatorname{sgn}(dF_p)=\deg(F).$$
Thus, if a regular value exists, the compact-support degree is an integer and its signed-count computation is independent of which regular value is used. No existence theorem for regular values is asserted here.

## Facts & Assumptions

[F1] [[thm-regular-value-formula-for-compact-support-degree]] identifies the degree with the finite signed sum over any supplied regular fibre, with the empty sum equal to zero.

## Proof

**Given:** The proper smooth map $F$ and any supplied regular value $y$.

1.1 By [F1], $F^{-1}(y)$ is finite and $\deg(F)=\sum_{p\in F^{-1}(y)}\operatorname{sgn}(dF_p)$. Every summand is $1$ or $-1$, so this finite sum is an integer; if the fibre is empty it is the integer $0$. [F1, given]

2.1 If $z$ is another regular value, [F1] applied to $z$ gives $\sum_{q\in F^{-1}(z)}\operatorname{sgn}(dF_q)=\deg(F)$. Both signed counts therefore equal the same scalar defined without reference to a regular value. This includes dimension zero, a singleton fibre, cancellation to zero, and two empty regular fibres. The argument applies one theorem to each supplied value and makes no simultaneous choice or appeal to Sard's theorem. [F1, step 1.1] ∎
