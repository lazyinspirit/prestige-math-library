---
id: def-iterated-transition-kernels
kind: definition
title: "Iterated transition kernels"
status: draft
origin: pipeline
deps: [def-composition-of-probability-kernels, lem-kernel-composition-is-well-defined-and-associative]
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Levin, Peres, Wilmer, Markov Chains and Mixing Times"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf"
      locator: "Section 1.1, equation (1.10) and the following t-step transition-probability identity, printed pp. 4-5"
---

## Definition

For a probability kernel $K$ on $(E,\mathcal E)$, let $I$ be the identity
kernel $I(x,A)=1_A(x)$ and define
$$ K^0:=I,\qquad K^{n+1}:=K^nK, $$ where composition is in chronological order: $$ K^{n+1}(x,A)=\int_E K(y,A)K^n(x,dy). $$
The identity map makes $I$ a probability kernel, including on a one-point
space. Induction using the published kernel-composition lemma shows that every
$K^n$ is a probability kernel. Associativity makes products of several copies
of $K$ unambiguous. No conditional-expectation version is selected and no form
of Choice is used.
