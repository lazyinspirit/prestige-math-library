---
id: ex-circuit-value-is-p-complete
kind: example
title: "A small computation tableau compiled to Circuit Value"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-polynomial-time-computations-have-logspace-uniform-circuits, thm-circuit-value-is-p-complete]
proof_strategy: direct
verification: {precheck: pass}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 6.7 and Theorem 6.27"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Example

On inputs promised to have length two, consider a fixed machine that reads
the two bits and accepts exactly $01$. A circuit for this computation uses
$g_1=\mathsf{NOT}(x_1)$, $g_2=\mathsf{AND}(g_1,x_2)$, and output $g_2$.
For $x=01$, the values are $g_1=g_2=1$.

## Facts & Assumptions

**Given:** the fixed machine on two-bit inputs and input $x=01$.

[L1] Every fixed polynomial-time machine has a polynomial-size logspace-uniform circuit family deciding its acceptance ([[lem-polynomial-time-computations-have-logspace-uniform-circuits]]).

[L2] Circuit Value is P-complete under logspace many-one reductions
([[thm-circuit-value-is-p-complete]]).

## Verification

**Proof technique:** direct evaluation.

1.1 On $01$, $g_1=\mathsf{NOT}(0)=1$ and $g_2=\mathsf{AND}(1,1)=1$, agreeing with the machine's accepting final state. [given, algebra]

1.2 For every two-bit input, $\mathsf{AND}(\mathsf{NOT}(x_1),x_2)=1$ exactly when $x_1=0$ and $x_2=1$. Number the input nodes $1,2$ and the NOT and AND nodes $3,4$, with predecessor lists $(1)$ and $(3,2)$ and output node $4$. This fixed circuit can be emitted in constant work space; it is a direct circuit for the promised computation, illustrating the existence assertion in [L1]. [given, L1, algebra, construct]

2.1 The pair $\langle C,01\rangle$ is therefore a yes-instance of Circuit Value, illustrating the acceptance-preserving reduction in [L2]. [L2, step 1.2] ∎
