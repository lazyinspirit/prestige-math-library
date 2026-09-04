---
id: ex-zeta-minus-two-vanishes-by-the-sine-factor
kind: example
title: "The functional equation shows that $\\zeta(-2)=0$ through the sine factor"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-trivial-zeros-and-critical-strip]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Example

$$\zeta(-2)=0.$$

## Facts & Assumptions

**Given:** The trivial-zero theorem.

[L1] For every integer $m\ge1$, $\zeta(-2m)=0$
([[thm-trivial-zeros-and-critical-strip]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with $m=1$. Then $\zeta(-2)=0$. [L1, given]

2.1 This is exactly the first trivial zero. [step 1.1, algebra] ∎
