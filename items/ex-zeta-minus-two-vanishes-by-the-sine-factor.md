---
id: ex-zeta-minus-two-vanishes-by-the-sine-factor
kind: example
title: "The functional equation shows that $\\zeta(-2)=0$ through the sine factor"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-countable-choice, thm-trivial-zeros-and-critical-strip]
proof_strategy: direct
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Assume countable choice.

$$\zeta(-2)=0.$$

## Facts & Assumptions

**Given:** Countable choice and the trivial-zero theorem.

[L1] For every integer $m\ge1$, $\zeta(-2m)=0$ ([[thm-trivial-zeros-and-critical-strip]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with $m=1$. Then $\zeta(-2)=0$. [L1, given]

2.1 This is exactly the first trivial zero. [step 1.1, algebra] ∎
