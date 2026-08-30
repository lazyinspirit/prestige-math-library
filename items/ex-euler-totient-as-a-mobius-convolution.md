---
id: ex-euler-totient-as-a-mobius-convolution
kind: example
title: "Euler's totient as the convolution $\\mu*\\operatorname{id}_1$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-classical-mobius-inversion, def-divisor-power-sum-functions, thm-sum-of-totients-over-divisors]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive, Section 23.3"
      url: "https://math.gordon.edu/ntic/ntic2017/section-new-funcs.html"
pipeline_run: null
---

## Example

The published divisor-sum identity for Euler's totient implies

$$
\varphi=\mu*\operatorname{id}_1.
$$

Equivalently, for every positive integer $n$,

$$
\varphi(n)=\sum_{d\mid n}\mu(d)\frac{n}{d}.
$$

## Facts & Assumptions

**Given:** A positive integer $n$.

## Verification

**Proof technique:** direct.

1.1 By [[thm-sum-of-totients-over-divisors]], one has $\sum_{d\mid n}\varphi(d)=n=\operatorname{id}_1(n)$, where $\operatorname{id}_1$ is the power function of [[def-divisor-power-sum-functions]]. [given]

2.1 Applying [[cor-classical-mobius-inversion]] to the functions $f=\varphi$ and $g=\operatorname{id}_1$ gives $\varphi(n)=\sum_{d\mid n}\mu(d)\operatorname{id}_1(n/d)=\sum_{d\mid n}\mu(d)(n/d)$. [step 1.1]

3.1 The final sum is exactly the Dirichlet convolution formula for $\mu*\operatorname{id}_1$, so $\varphi=\mu*\operatorname{id}_1$. [step 2.1] ∎
