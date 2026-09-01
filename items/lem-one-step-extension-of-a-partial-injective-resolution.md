---
id: lem-one-step-extension-of-a-partial-injective-resolution
kind: lemma
title: "One-step extension of a partial injective resolution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coaugmented-cochain-complex-under-an-object, def-injective-object, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]
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

Let $$0\to A\xrightarrow{\eta}I^0\to I^1\to\cdots\to I^n$$ be a coaugmented cochain complex that is exact at every displayed term except possibly at $I^n$. Let $C^n$ be the cokernel of the previous displayed map, so $C^0=\operatorname{coker}(\eta)$ and $C^n=\operatorname{coker}(I^{n-1}\to I^n)$ for $n\ge1$.

If $j:C^n\rightarrowtail I^{n+1}$ is a monomorphism into an injective object $I^{n+1}$, then composing the quotient map $I^n\twoheadrightarrow C^n$ with $j$ extends the complex by one term and makes it exact at $I^n$.
## Facts & Assumptions

**Given:** The displayed partial coaugmented complex and a chosen monomorphism $j:C^n\rightarrowtail I^{n+1}$ with $I^{n+1}$ injective.

[L1] Exactness at a degree means that the image of the incoming map equals the kernel of the outgoing map ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

[L2] A coaugmented cochain complex records the extra map from the resolved object ([[def-coaugmented-cochain-complex-under-an-object]]).

[L3] Injective objects are the allowable terms in an injective resolution ([[def-injective-object]]).
## Proof

**Proof technique:** direct.

1.1 Let $\pi_n:I^n\twoheadrightarrow C^n$ be the cokernel map and define the new differential by $$d^n:=j\pi_n:I^n\to I^{n+1}.$$ Since $\pi_n$ kills the image of the previous displayed map, the composite of that previous map with $d^n$ is zero, so the extended row is again a coaugmented cochain complex in the sense of [L2]. [given, L2, construct]

2.1 Because $j$ is monic, the kernel of $d^n=j\pi_n$ is the kernel of $\pi_n$, namely the image of the previous displayed map. By [L1], this is exactly the required exactness at $I^n$. The new term is injective by the given hypothesis and [L3]. [L1, L3, step 1.1] ∎
