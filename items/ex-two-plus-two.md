---
id: ex-two-plus-two
kind: example
title: "$2+2=4$ from the recursion"
status: published
origin: session
deps: [def-nat-addition, def-natural-numbers, ex-one-plus-one]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Example

With $2 = \sigma(\sigma(0))$ and $4 = \sigma(\sigma(\sigma(\sigma(0))))$, the
recursion gives $2 + 2 = 4$, by unfolding the successor twice down to
$2 + 0 = 2$.

## Facts & Assumptions

**Given:** addition $m + 0 = m$, $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]); $2 = \sigma(\sigma(0))$, $4 = \sigma(\sigma(\sigma(\sigma(0))))$ ([[def-natural-numbers]]).

## Verification

**Proof technique:** direct.

1.1 Write $2 = \sigma(\sigma(0))$; then $2 + 2 = 2 + \sigma(\sigma(0))$. [given]

1.2 $2 + 0 = 2$, by $m + 0 = m$. [given]

2.1 $2 + \sigma(\sigma(0)) = \sigma(2 + \sigma(0)) = \sigma(\sigma(2 + 0))$, applying $m + \sigma(n) = \sigma(m + n)$ twice. [step 1.1, given]

3.1 Hence $2 + 2 = \sigma(\sigma(2)) = \sigma(\sigma(\sigma(\sigma(0)))) = 4$. [step 2.1, step 1.2] ∎
