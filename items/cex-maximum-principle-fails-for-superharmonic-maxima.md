---
id: cex-maximum-principle-fails-for-superharmonic-maxima
kind: counterexample
title: "Maximum principle fails for superharmonic maxima"
status: published
origin: pipeline
deps: [def-subharmonic-and-superharmonic-functions-in-rn]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Example 2.14 p.26, sign reversal"
---

## Statement refuted

The assertion that every superharmonic $u\in C^2(B_1)\cap C(\overline B_1)$ has its maximum on $\partial B_1$ is false, for every $n\ge2$. A witness is $u(x)=-|x|^2$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted.

[F1] Superharmonic means a real $C^2$ function with $\Delta u\le0$. ([[def-subharmonic-and-superharmonic-functions-in-rn]]).

## Counterexample

**Proof technique:** direct.

1.1 $\Delta u=-2n<0$, so $u$ is superharmonic, with the required regularity. [F1, given, algebra]

2.1 Its unique maximum on the closure is $u(0)=0$, while it is $-1$ at every boundary point. Thus a superharmonic maximum can be strictly interior. [step 1.1, algebra] ∎
