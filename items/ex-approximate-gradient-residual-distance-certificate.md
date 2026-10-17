---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
id: ex-approximate-gradient-residual-distance-certificate
kind: example
title: "A computed-gradient residual needs its discrepancy bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-jacobian-matrix-and-gradient
  - thm-inexact-gradient-residual-distance-certificate
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
---

## Example

On a one-dimensional quadratic, omitting the computed-gradient discrepancy would give a false distance certificate.

## Facts & Assumptions

**Given:** $f(x)=\tfrac12x^2$, minimizer $x^*=0$, candidate $\widetilde x=1/10$, and computed gradient $\widehat g=1/50$.

[F1] [[thm-inexact-gradient-residual-distance-certificate]]: if $\|\widehat g\|_2\le\eta$ and $\|\widehat g-\nabla f(\widetilde x)\|_2\le\delta$, then $\|\widetilde x-x^*\|_2\le(\eta+\delta)/\mu$.

[F2] [[def-jacobian-matrix-and-gradient]]: in one dimension the gradient is the ordinary first derivative.

## Verification

1.1 On $U=\mathbb R$, $f$ is $C^2$ and $f''(x)=1$, so $\mu=1$. Thus $\nabla f(\widetilde x)=1/10$, and the computed residual is $\eta=|\widehat g|=1/50$. The independently verified discrepancy is $\delta=|1/50-1/10|=2/25$. The actual distance is $|\widetilde x-x^*|=1/10$. [F2, given, algebra]

2.1 The certificate [F1] gives $(\eta+\delta)/\mu=(1/50+2/25)=1/10$, exactly the actual distance. If the discrepancy were omitted, the proposed bound $1/50$ would be false. [F1, step 1.1, algebra] ∎
