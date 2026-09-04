---
id: ex-idempotent-lifting-and-product-decomposition
kind: example
title: "Lifting an idempotent recovers a product decomposition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-complete-separated-adic-pair-henselian, cor-idempotents-lift-uniquely-in-a-henselian-pair]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 15.11: Henselian pairs"
      url: "https://stacks.math.columbia.edu/tag/09XD"
pipeline_run: null
---

## Example

Let
$$A=k\llbracket t\rrbracket \times k\llbracket t\rrbracket, \qquad I=(t)k\llbracket t\rrbracket \times (t)k\llbracket t\rrbracket.$$
Then $A/I \cong k \times k$ has the nontrivial idempotent $(1,0)$, and lifting
that idempotent recovers the product decomposition of $A$ itself.

## Facts & Assumptions

**Given:** The complete pair $(A,I)$ above.

[L1] Every complete separated adic pair is Henselian ([[cor-complete-separated-adic-pair-henselian]]).

[L2] Idempotents lift uniquely in a Henselian pair ([[cor-idempotents-lift-uniquely-in-a-henselian-pair]]).

## Verification

**Proof technique:** lift the visible residue idempotent and read off its two summands.

1.1 For every $n\ge1$ one has $$I^n=(t^n)k\llbracket t\rrbracket\times (t^n)k\llbracket t\rrbracket,$$ so $$A/I^n\cong k\llbracket t\rrbracket/(t^n)\times k\llbracket t\rrbracket/(t^n).$$ Thus $A$ is the inverse limit of the quotients $A/I^n$ coordinatewise, and $$\bigcap_{n\ge1} I^n=0\times 0,$$ again coordinatewise. Hence $A$ is $I$-adically complete and separated, so [L1] shows that $(A,I)$ is Henselian. [L1, given, algebra]

2.1 The residue ring is $A/I \cong k \times k$, and $(1,0)$ is an idempotent there. The obvious lift in $A$ is $e=(1,0)$, which indeed satisfies $e^2=e$. By [L2], that lift is the unique idempotent of $A$ reducing to $(1,0)$. Its complement is $1-e=(0,1)$. [L2, step 1.1, given, algebra]

3.1 Multiplication by $e$ and $1-e$ gives $$A=eA \times (1-e)A = (k\llbracket t\rrbracket \times 0) \times (0 \times k\llbracket t\rrbracket).$$ Thus the lifted idempotent exactly recovers the original product decomposition. [step 2.1, algebra] ∎
