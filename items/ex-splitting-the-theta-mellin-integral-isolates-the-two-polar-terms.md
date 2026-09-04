---
id: ex-splitting-the-theta-mellin-integral-isolates-the-two-polar-terms
kind: example
title: "Splitting the theta Mellin integral at $1$ isolates the two polar terms of completed zeta"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-theta-mellin-representation-of-completed-zeta, thm-completed-riemann-zeta-functional-equation]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Theorem 2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Example

For the completed zeta function,

$$\Lambda(s)=\frac{1}{s(s-1)}+\frac12\int_1^\infty (\theta(t)-1)\left(t^{s/2-1}+t^{-s/2-1/2}\right)\,dt.$$

## Facts & Assumptions

**Given:** The Mellin representation and the completed functional equation.

[L1] On $\operatorname{Re}s>1$,
$$\Lambda(s)=\frac12\int_0^\infty(\theta(t)-1)t^{s/2-1}\,dt$$
([[thm-theta-mellin-representation-of-completed-zeta]]).

[L2] The completed-function theorem supplies the split formula displayed in the
statement ([[thm-completed-riemann-zeta-functional-equation]]).

## Verification

**Proof technique:** direct.

1.1 Start from [L1] and split the integral at $1$. The piece on $(0,1)$ is exactly where the theta transformation is used in the proof of the completed functional equation. [L1, given]

2.1 The resulting rewritten form is the symmetric identity recorded in [L2], $$\Lambda(s)=\frac{1}{s(s-1)}+\frac12\int_1^\infty (\theta(t)-1)\left(t^{s/2-1}+t^{-s/2-1/2}\right)\,dt,$$ so the two polar terms are isolated explicitly in the factor $1/(s(s-1))$. [step 1.1, L2, algebra] ∎
