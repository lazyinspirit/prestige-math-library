---
id: thm-different-of-a-monogenic-number-field
kind: theorem
title: "The different in the monogenic case"
status: draft
origin: pipeline
deps: [def-different-of-a-number-field, def-integral-basis-and-power-integral-basis]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Theorem 4.3"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Statement

If $\mathcal O_K=\mathbb Z[\alpha]$ and $f$ is the monic minimal polynomial
of $\alpha$, then $\mathfrak D_K=(f'(\alpha))$.

## Proof

**Given:** the power integral basis $1,\alpha,\ldots,\alpha^{n-1}$.

1.1 Lagrange interpolation in the conjugates shows that the trace-dual lattice has $\mathbb Z$-basis $$\frac1{f'(\alpha)},\frac{\alpha}{f'(\alpha)},\ldots,\frac{\alpha^{n-1}}{f'(\alpha)}.$$ [given, algebra]

2.1 Thus $\mathcal O_K^\vee=f'(\alpha)^{-1}\mathcal O_K$; taking its fractional-ideal inverse yields $(f'(\alpha))$. [step 1.1, algebra] ∎
