---
id: ex-p-is-contained-in-np-intersection-conp
kind: example
title: "An even-length language sits in P, hence also in NP and coNP"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-p-is-contained-in-np-intersection-conp]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 14: P and NP, SAT, Poly-time Reducibility"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/45e2fd621349cfd7c9faf93a6ba134a3_MIT18_404f20_lec14.pdf"
---

## Example

Let
$$ E:=\{x\in\{0,1\}^*: |x| \text{ is even}\}. $$
Then $E\in P$, so $E\in NP\cap coNP$.

## Facts & Assumptions

**Given:** The even-length language $E$.

[L1] Every language in $P$ lies in $NP\cap coNP$, by [[prop-p-is-contained-in-np-intersection-conp]].

## Verification

**Proof technique:** direct.

1.1 A deterministic machine can decide $E$ by scanning the input once and toggling one parity bit in its finite control. At the end it accepts exactly when the parity is even. This runs in linear time, so $E\in P$. [given, construct]

2.1 Applying [L1] to step 1.1 gives $E\in NP\cap coNP$. [L1, step 1.1] ∎
