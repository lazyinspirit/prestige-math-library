---
id: ex-a-simple-function-and-its-canonical-representation
kind: example
title: "A simple function and its canonical representation"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-simple-function-and-canonical-representation]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Definition 2.88"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Example

On the Borel measurable space $(\mathbb{R},\mathcal B(\mathbb R))$, the function

$$s(x) := 2\,\mathbf{1}_{[0,1)}(x) - \mathbf{1}_{[1,2)}(x)$$

is simple. Its distinct values are $2$, $-1$, and $0$, with level sets

$$[0,1),\qquad [1,2),\qquad \mathbb{R} \setminus [0,2).$$

So its canonical representation is

$$s = 2\,\mathbf{1}_{[0,1)} - \mathbf{1}_{[1,2)} + 0 \cdot \mathbf{1}_{\mathbb{R}\setminus[0,2)}.$$

## Facts & Assumptions

**Given:** The Borel measurable space $(\mathbb R,\mathcal B(\mathbb R))$ and the function
$s(x)=2\,\mathbf{1}_{[0,1)}(x)-\mathbf{1}_{[1,2)}(x)$.

[L1] A measurable real-valued function with finite range is simple, and its
canonical representation is the sum over its level sets.
([[def-simple-function-and-canonical-representation]])

## Verification

**Proof technique:** direct.

1.1 The function $s$ takes only the three values $2$, $-1$, and $0$, and the [given]
corresponding level sets are exactly the three Borel sets displayed above.
Thus $s$ is measurable. [given]

2.1 Therefore [L1] identifies $s$ as a simple function and the displayed sum as [step 1.1, L1]
its canonical representation. [step 1.1, L1] ∎
