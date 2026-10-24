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
deps: [def-countable-choice, thm-theta-mellin-representation-of-completed-zeta, thm-completed-riemann-zeta-functional-equation]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Theorem 2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Example

Assume countable choice. For the completed zeta function,

$$\Lambda(s)=\frac{1}{s(s-1)}+\frac12\int_1^\infty (\theta(t)-1)\left(t^{s/2-1}+t^{-s/2-1/2}\right)\,dt.$$

## Facts & Assumptions

**Given:** Countable choice, the Mellin representation and the completed functional equation.

[A1] Countable choice is [[def-countable-choice]]; it supplies the premise of the theta transformation used to obtain [L2].

[L1] On $\operatorname{Re}s>1$, $$\Lambda(s)=\frac12\int_0^\infty(\theta(t)-1)t^{s/2-1}\,dt$$ ([[thm-theta-mellin-representation-of-completed-zeta]]).

[L2] Under countable choice, the completed-function theorem supplies the split formula displayed in the example ([[thm-completed-riemann-zeta-functional-equation]]).

## Verification

**Proof technique:** direct.

1.1 Start from [L1] and split the integral at $1$. The piece on $(0,1)$ is exactly where the theta transformation is used under [A1] in the proof of the completed functional equation. [A1, L1, given]

2.1 The resulting rewritten form is the symmetric identity recorded in [L2], $$\Lambda(s)=\frac{1}{s(s-1)}+\frac12\int_1^\infty (\theta(t)-1)\left(t^{s/2-1}+t^{-s/2-1/2}\right)\,dt,$$ so the two polar terms are isolated explicitly in the factor $1/(s(s-1))$. [A1, step 1.1, L2, algebra] ∎
