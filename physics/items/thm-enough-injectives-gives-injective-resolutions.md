---
id: thm-enough-injectives-gives-injective-resolutions
kind: theorem
title: "A chosen chain of injective embeddings gives an injective resolution"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-injective-resolution-in-an-abelian-category, lem-one-step-extension-of-a-partial-injective-resolution]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

Let $A$ be an object of an abelian category. Suppose one has chosen a monomorphism $A\rightarrowtail I^0$ into an injective object and, for each $n\ge0$, a monomorphism $C^n\rightarrowtail I^{n+1}$ from the current cokernel $C^n$ of the previous displayed map into an injective object. Then composing each quotient map with its chosen embedding produces a coaugmented complex
$$0\to A\to I^0\to I^1\to I^2\to\cdots$$
that is an injective resolution of $A$.
## Facts & Assumptions

**Given:** An object $A$ of an abelian category, together with a chosen injective embedding of $A$ and a chosen injective embedding of each successive cokernel.

[L1] A chosen injective embedding of the current cokernel extends a partial coaugmented resolution by one exact step ([[lem-one-step-extension-of-a-partial-injective-resolution]]).

[L2] An injective resolution is an exact coaugmented complex of injective objects ([[def-injective-resolution-in-an-abelian-category]]).
## Proof

**Proof technique:** direct.

1.1 Start with the chosen monomorphism $A\rightarrowtail I^0$. Applying [L1] to the chosen embedding $C^0\rightarrowtail I^1$ makes $$0\to A\to I^0\to I^1$$ exact, and repeating the same step with the chosen embedding of each later cokernel produces an exact coaugmented complex $$0\to A\to I^0\to I^1\to I^2\to\cdots$$ whose terms are all injective. [L1, given, construct]

2.1 By [L2], the complex assembled in step 1.1 is an injective resolution of $A$, including the case $A=0$ when the chosen initial embedding may be $0\rightarrowtail0$. [L2, step 1.1] ∎
