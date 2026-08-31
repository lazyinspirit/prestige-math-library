---
id: thm-unbracketed-tensor-strings-are-well-defined-expressions
kind: theorem
title: "Unbracketed tensor strings are well defined after coherence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-parenthesised-tensor-word, rem-unbracketed-tensor-strings-are-not-yet-defined, thm-mac-lane-coherence-in-the-canonical-map-form]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Remark 2.9.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a monoidal category and let $A_1,\dots,A_n$ be objects of
$\mathcal C$. After coherence, the unbracketed tensor string
$A_1\otimes\cdots\otimes A_n$ is a well-defined expression: for $n\ge2$, any two
parenthesisations of that string are canonically and uniquely identified.

## Facts & Assumptions

**Given:** A monoidal category $\mathcal C$ and objects $A_1,\dots,A_n$ of it.

[L1] Before the coherence page, an unbracketed tensor string of length at least three is not yet defined; only parenthesised words are ([[rem-unbracketed-tensor-strings-are-not-yet-defined]]).

[L2] For parenthesised tensor words on the same ordered letters, there is a unique canonical natural isomorphism between any two of them ([[thm-mac-lane-coherence-in-the-canonical-map-form]]).

## Proof

**Proof technique:** direct.

1.1 For $n=0$, interpret the empty tensor string as the unit object; for $n=1$, as $A_1$; and for $n\ge2$, choose any parenthesised tensor word $w$ on the letters $x_1,\dots,x_n$ and evaluate it at $(A_1,\dots,A_n)$. [given, choose]

2.1 If $w'$ is another such parenthesisation, [L2] gives a unique canonical natural isomorphism $w\Rightarrow w'$, and evaluating at $(A_1,\dots,A_n)$ yields a unique canonical isomorphism between the two resulting objects of $\mathcal C$. [L2, step 1.1]

3.1 Therefore suppressing brackets does not change the resulting tensor object except by a unique canonical identification. This discharges the warning of [L1]: after coherence, the notation $A_1\otimes\cdots\otimes A_n$ is well defined. [L1, step 2.1] ∎
