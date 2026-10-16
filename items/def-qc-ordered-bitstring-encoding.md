---
id: def-qc-ordered-bitstring-encoding
kind: definition
title: "Big-endian encoding of ordered bit strings"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-register-and-computational-basis]
justified_by: [thm-qc-bitstring-index-is-bijection]
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

For $n\ge0$ and a binary word $x=(x_0,\ldots,x_{n-1})\in\{0,1\}^n$, define its
**big-endian index**

$$\operatorname{enc}_n(x):=\sum_{k<n}x_k\,2^{\,n-1-k}.$$

Thus the first wire is the most significant bit. For $n=0$, the domain
$\{0,1\}^0$ consists only of the empty word $()$, and the empty sum gives
$\operatorname{enc}_0(())=0$. In an ordered $n$-qubit
computational basis, the word $x$ occupies the slot numbered
$\operatorname{enc}_n(x)$.

