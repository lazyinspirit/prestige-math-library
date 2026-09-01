---
id: lem-one-step-extension-of-a-partial-projective-resolution
kind: lemma
title: "One-step extension of a partial projective resolution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-augmented-chain-complex-over-an-object, def-projective-object, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]
proof_strategy: direct
verification:
  precheck: pass
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

Let $$P_n\to P_{n-1}\to\cdots\to P_0\xrightarrow{\varepsilon}A\to0$$ be an augmented chain complex that is exact at every displayed term except possibly at $P_n$. Let $K_n$ be the kernel of the previous displayed map, so $K_0=\ker(\varepsilon)$ and $K_n=\ker(P_n\to P_{n-1})$ for $n\ge1$.

If $q:P_{n+1}\twoheadrightarrow K_n$ is an epimorphism from a projective object $P_{n+1}$, then composing $q$ with the kernel inclusion $K_n\hookrightarrow P_n$ extends the complex by one term and makes it exact at $P_n$.
## Facts & Assumptions

**Given:** The displayed partial augmented complex and a chosen epimorphism $q:P_{n+1}\twoheadrightarrow K_n$ with $P_{n+1}$ projective.

[L1] Exactness at a degree means that the image of the incoming differential is the kernel subobject of the outgoing differential ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

[L2] An augmented chain complex records the extra map to the resolved object ([[def-augmented-chain-complex-over-an-object]]).

[L3] Projective objects are the allowable terms in a projective resolution ([[def-projective-object]]).
## Proof

**Proof technique:** direct.

1.1 Let $i_n:K_n\hookrightarrow P_n$ be the kernel inclusion, and define the new differential by $$d_{n+1}:=i_nq:P_{n+1}\to P_n.$$ Because $i_n$ lands in the kernel of the previous displayed map, the composite of the new differential with that previous map is zero, so the extended row is again an augmented chain complex in the sense of [L2]. [given, L2, construct]

2.1 The image of $d_{n+1}$ is the image of $i_nq$, which is exactly $K_n$ because $q$ is epic. By [L1], this is precisely the exactness condition at $P_n$. The new term is projective by the given hypothesis and [L3]. [L1, L3, step 1.1] ∎
