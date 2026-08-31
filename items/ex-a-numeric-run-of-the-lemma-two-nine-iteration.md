---
id: ex-a-numeric-run-of-the-lemma-two-nine-iteration
kind: example
title: "A numeric run of the multiplicative iteration in Lemma 2.9"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VI. Bounded VC-dimension, Lemma 3.2"
      url: "https://arxiv.org/pdf/2312.15572"
pipeline_run: null
---

## Example

Take
$$c=2^{-4},\qquad x=2^{-8},\qquad b_1=2,\qquad b_2=3,\qquad b_3=3.$$
Then $b_1b_2=6=b_2+b_3$, so the iteration lemma predicts an $x$-sparse induced
subgraph of size at least $x^6|V(G)|=2^{-48}|V(G)|$.

## Facts & Assumptions

**Given:** The numerical parameters displayed above.

[L1] Under the lemma's hypotheses, the output size is at least
$x^{b_1b_2}|V(G)|$
([[lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold]]).

## Verification

**Proof technique:** arithmetic unpacking.

1.1 The equality $b_1b_2=2\cdot 3=6$ and $b_2+b_3=3+3=6$ shows that the required inequality $b_1b_2\ge b_2+b_3$ is tight in this example. [given, algebra]

2.1 Applying [L1] gives a final induced subgraph of size at least $x^{b_1b_2}|V(G)|=(2^{-8})^6|V(G)|=2^{-48}|V(G)|$. This makes the multiplicative exponent bookkeeping explicit in one concrete case. [step 1.1, L1, algebra] ∎
