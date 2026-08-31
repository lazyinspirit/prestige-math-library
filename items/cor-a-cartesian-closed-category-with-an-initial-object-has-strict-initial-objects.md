---
id: cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects
kind: corollary
title: "In a cartesian closed category, any initial object is strict"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-cartesian-closed-category, cor-left-adjoints-preserve-colimits, def-initial-terminal-and-zero-object]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Theorem 4.2.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
generation:
  role: direct-corollary
---

## Statement

Let $\mathcal C$ be a cartesian closed category and let $0$ be an initial object. Then $0$ is strict: every morphism $f:A\to 0$ is an isomorphism.

## Facts & Assumptions

**Given:** A cartesian closed category $\mathcal C$, an initial object $0$, an object $A$, and a morphism $f:A\to 0$.

[L1] In a cartesian closed category, the functor $A\times-$ is a left adjoint for every $A$ ([[def-cartesian-closed-category]]).

[L2] Left adjoints preserve colimits, hence preserve initial objects ([[cor-left-adjoints-preserve-colimits]]).

[L3] An initial object has exactly one endomorphism and exactly one map into any target ([[def-initial-terminal-and-zero-object]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the functor $A\times-$ preserves the initial object, so $A\times 0$ is initial. Hence there is an isomorphism $e:A\times 0\to 0$. [given, L1, L2]

2.1 The pair $(1_A,f)$ induces a morphism $\langle 1_A,f\rangle:A\to A\times 0$. Let $g:=\pi_1\circ e^{-1}:0\to A$, where $\pi_1:A\times 0\to A$ is the first projection. Then $g\circ f=\pi_1\circ e^{-1}\circ e\circ\langle 1_A,f\rangle=\pi_1\circ\langle 1_A,f\rangle=1_A$. [step 1.1, given, algebra]

3.1 The composite $f\circ g:0\to 0$ is the unique endomorphism of the initial object, so by [L3] it equals $1_0$. Thus $g$ is a two-sided inverse to $f$, and $f$ is an isomorphism. [step 2.1, L3]

4.1 Therefore the initial object is strict. [step 3.1] ∎
