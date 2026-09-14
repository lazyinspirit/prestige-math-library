---
id: ex-coding-countably-many-solovay-definition-parameters
kind: example
title: Coding countably many Solovay definition parameters
status: draft
origin: pipeline
deps: [def-solovay-hereditarily-ordinal-sequence-definable-model]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Example

Explicitly combine countably many countable ordinal parameters into one member of $S$.

## Facts & Assumptions

**Given:** $s_n:\omega\to\alpha_n$ for $n<\omega$ and a fixed bijection $\pi:\omega^2\to\omega$.

[F1] [[def-solovay-hereditarily-ordinal-sequence-definable-model]]: $S$ consists of countable ordinal sequences and $M=HOD(S)$ permits an $S$-parameter.

## Verification

1.1 Let $\beta=\sup_n(\alpha_n+1)$ and define $s(\pi(n,k))=s_n(k)$. Then $s:\omega\to\beta$ is in $S$. The fixed inverse of $\pi$ recovers $s_n(k)=s(\pi(n,k))$ uniformly. [Given]

2.1 Encode the finite formula number and finite ordinal tuple for the $n$th definition in slots $\pi(n,0),\pi(n,1),\ldots$, shifting the values of $s_n$ to later tagged slots. Finite tags are ordinals below a common bound. Thus one sequence recovers every formula, ordinal tuple and $S$-parameter, exactly as permitted by F1. Empty tuples use their length tag zero. This is an explicit coding calculation, not an application of the separate omega-closure theorem. [F1, step 1.1] ∎
