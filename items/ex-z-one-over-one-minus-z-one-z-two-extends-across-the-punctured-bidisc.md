---
id: ex-z-one-over-one-minus-z-one-z-two-extends-across-the-punctured-bidisc
kind: example
title: "A holomorphic function on the punctured bidisc extends across the origin"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-removability-of-a-puncture-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.6"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

On the punctured bidisc
$\{(z_1,z_2): |z_1|<1,\ |z_2|<1\}\setminus\{(0,0)\}$, the function

$$
f(z_1,z_2)=\frac{z_1}{1-z_1z_2}
$$

is holomorphic and extends holomorphically across the origin as the same
formula.

## Facts & Assumptions

**Given:** The punctured bidisc and the function
$f(z_1,z_2)=z_1/(1-z_1z_2)$.

[L1] In complex dimension at least two, a holomorphic function on a punctured
domain extends uniquely across the puncture
([[thm-removability-of-a-puncture-in-several-complex-variables]]).

## Verification

**Proof technique:** direct.

1.1 On the full bidisc one has $|z_1z_2|<1$, so $1-z_1z_2\ne0$. Therefore the same formula defines a holomorphic function on the whole bidisc, and its restriction to the punctured bidisc is the displayed $f$. [given, algebra]

2.1 This explicit extension agrees with the abstract existence statement of [L1] for the missing point $(0,0)$. [step 1.1, L1] ∎
