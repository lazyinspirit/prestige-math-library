---
id: ex-repeated-dependent-copies-no-sampling-gain
kind: example
title: "Repeated dependent copies do not increase success probability"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-verifier-and-generation-protocol
  - thm-independent-generation-success-and-verifier-error
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references: []

---

## Example

Let a single response $Y$ be correct with probability $1/2$, and define two candidates by $Y_1:=Y_2:=Y$. With a perfect verifier, the probability that at least one candidate is correct is $1/2$. The independent-draw formula at $N=2$ would give $3/4$, but these duplicated candidates are dependent and do not provide a second opportunity for success.

## Example references

[[thm-independent-generation-success-and-verifier-error|The success formula requires independent draws.]]

## Facts & Assumptions

**Given:** A finite correct/incorrect response law with $\Pr(C(Y)=1)=1/2$, and the repeated-copy construction $Y_1=Y_2=Y$.

[F1] [[def-verifier-and-generation-protocol]]: correctness is a binary function on the response set.

[F2] [[thm-independent-generation-success-and-verifier-error]]: $N$ independent draws with one-draw success probability $p$ have success probability $1-(1-p)^N$ under a perfect verifier.

## Verification

**Given:** The objects and construction in the Example.

1.1 Since $Y_1=Y_2=Y$, the event that at least one candidate is correct equals $\{C(Y)=1\}$, so its probability is $1/2$. [given, F1, algebra]

2.1 The copies are not independent because $\Pr(Y_1\text{ correct},Y_2\text{ correct})=1/2\ne(1/2)^2$. Applying [F2] to genuinely independent draws with the same marginal would give $1-(1-1/2)^2=3/4$, which differs from the repeated-copy probability in step 1.1. [given, F1, F2, step 1.1, algebra] ∎
