---
id: ex-inner-quadrature-error-in-gradient-certificate
kind: example
title: "Inner quadrature error enters an outer gradient certificate"
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

The gradient of an integral objective may itself be computed by quadrature. Its quadrature discrepancy must be included separately from the computed-gradient residual.

## Facts & Assumptions

**Given:** $f(x)=\int_0^1(x-s)^4\,ds$ on $\mathbb R$, candidate $\widetilde x=3/5$, and the two-panel composite midpoint rule applied to the integral of $\partial_x(x-s)^4$.

[F1] [[thm-inexact-gradient-residual-distance-certificate]]: if the computed gradient residual is at most $\eta$ and its discrepancy from the true gradient is at most $\delta$, then the distance to a $\mu$-strongly convex minimizer is at most $(\eta+\delta)/\mu$.

[F2] [[def-jacobian-matrix-and-gradient]]: the gradient is the first derivative in the standard real coordinate.

## Verification

1.1 Integrating gives $f(x)=(x^5-(x-1)^5)/5$, hence $f'(x)=x^4-(x-1)^4$ and $f''(x)=12(x-1/2)^2+1\ge1$. Thus $\mu=1$ is valid and the minimizer is $x^*=1/2$. [F2, given, algebra]

1.2 At $\widetilde x=3/5$, the true gradient is $f'(3/5)=13/125=104/1000$. The two midpoint nodes are $1/4$ and $3/4$, so the composite midpoint estimate is $\widehat g=\tfrac12\bigl(4(7/20)^3+4(-3/20)^3\bigr)=79/1000$. Therefore the computed residual is $\eta=79/1000$ and the exact discrepancy is $\delta=|104/1000-79/1000|=1/40=25/1000$. [F2, given, algebra]

2.1 The actual distance is $|3/5-1/2|=1/10=100/1000$. By [F1] the certificate is $(\eta+\delta)/\mu=104/1000$, which is valid and close to the actual distance. The objective's inner integral was evaluated approximately, so its gradient discrepancy was not inferred from the residual. [F1, step 1.1, step 1.2, algebra] ∎
