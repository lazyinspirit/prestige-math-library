---
id: thm-enough-projectives-gives-projective-resolutions
kind: theorem
title: "A chosen chain of projective epimorphisms gives a projective resolution"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-projective-resolution-in-an-abelian-category, lem-one-step-extension-of-a-partial-projective-resolution]
proof_strategy: direct
verification:
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
    - title: "The Stacks Project, Section 12.28: Projectives"
      url: "https://stacks.math.columbia.edu/tag/013A"
pipeline_run: frontier-28
---
## Statement

Let $A$ be an object of an abelian category. Suppose one has chosen an epimorphism $P_0\twoheadrightarrow A$ with $P_0$ projective and, for each $n\ge0$, an epimorphism $P_{n+1}\twoheadrightarrow K_n$ from a projective object onto the current kernel $K_n$ of the previous displayed map. Then composing each chosen epimorphism with its kernel inclusion produces an augmented complex
$$\cdots\to P_2\to P_1\to P_0\to A\to0$$
that is a projective resolution of $A$.
## Facts & Assumptions

**Given:** An object $A$ of an abelian category, together with a chosen projective epimorphism onto $A$ and a chosen projective epimorphism onto each successive kernel.

[L1] A chosen projective epimorphism onto the current kernel extends a partial resolution by one exact step ([[lem-one-step-extension-of-a-partial-projective-resolution]]).

[L2] A projective resolution is an exact augmented complex of projective objects ([[def-projective-resolution-in-an-abelian-category]]).
## Proof

**Proof technique:** direct.

1.1 Start with the chosen epimorphism $P_0\twoheadrightarrow A$. Applying [L1] to the chosen epimorphism $P_1\twoheadrightarrow K_0$ makes $$P_1\to P_0\to A\to0$$ exact, and repeating the same step with the chosen epimorphism onto each later kernel produces an augmented exact complex $$\cdots\to P_2\to P_1\to P_0\to A\to0$$ whose terms are all projective. [L1, given, construct]

2.1 By [L2], the complex assembled in step 1.1 is a projective resolution of $A$, including the case $A=0$ when the chosen initial epimorphism may be $0\twoheadrightarrow0$. [L2, step 1.1] ∎
