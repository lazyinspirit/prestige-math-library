---
id: prop-degree-laws-for-circle-loops
kind: proposition
title: "Degree sends concatenation to addition, reversal to negation, and the constant loop to zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-lifts-of-circle-loop-concatenation-and-reversal, def-degree-of-a-circle-loop, thm-path-lifting-for-covering-maps]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Degree sends concatenation to addition, reversal to negation, and the constant loop to zero. Explicitly, for based circle loops $\alpha,\beta$ at $[0]$,

$$\deg(\alpha*\beta)=\deg(\alpha)+\deg(\beta),\qquad \deg(\bar\alpha)=-\deg(\alpha),\qquad \deg(c_{[0]})=0.$$

## Facts & Assumptions

**Given:** Based circle loops $\alpha$ and $\beta$ at $[0]$.

[L1] Lifts of circle-loop concatenations and reversals have endpoints equal to the sum and the negative of the original endpoints ([[lem-lifts-of-circle-loop-concatenation-and-reversal]]).

[L2] Degree is the terminal value of the unique lift beginning at zero ([[def-degree-of-a-circle-loop]]).

[L3] A path through a covering has a unique lift once its initial point is prescribed ([[thm-path-lifting-for-covering-maps]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the lift of $\alpha*\beta$ from zero ends at $\deg(\alpha)+\deg(\beta)$. Reading that endpoint through [L2] gives $\deg(\alpha*\beta)=\deg(\alpha)+\deg(\beta)$. [L1, L2]

1.2 By the reversal formula in [L1], the lift of $\bar\alpha$ from zero ends at $-\deg(\alpha)$, so [L2] gives $\deg(\bar\alpha)=-\deg(\alpha)$. [L1, L2]

2.1 The constant path at zero is a lift of the constant loop $c_{[0]}$ and starts at zero; uniqueness in [L3] makes it the defining lift. Its terminal value is zero, so [L2] gives $\deg(c_{[0]})=0$. [L2, L3] ∎
