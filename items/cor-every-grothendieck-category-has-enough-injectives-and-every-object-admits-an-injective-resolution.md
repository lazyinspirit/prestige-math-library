---
id: cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution
kind: corollary
title: "Every Grothendieck category has enough injectives, and every object admits an injective resolution"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings, lem-one-step-extension-of-a-partial-injective-resolution, def-a-category-with-enough-projectives-and-with-enough-injectives, def-injective-resolution-in-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 19.11: Injectives in Grothendieck categories"
      url: "https://stacks.math.columbia.edu/tag/05AB"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

Assume the Axiom of Choice.

Every locally small Grothendieck category has enough injectives, and every object in it admits an injective resolution.
## Facts & Assumptions

**Given:** A locally small Grothendieck category $\mathcal A$ and an object $A$ of $\mathcal A$.

[L1] Grothendieck categories admit functorial injective embeddings ([[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]]).

[L2] A chosen injective embedding of the current cokernel extends a partial coaugmented resolution by one exact step ([[lem-one-step-extension-of-a-partial-injective-resolution]]).

[L3] Enough injectives means that every object embeds in an injective object ([[def-a-category-with-enough-projectives-and-with-enough-injectives]]).

[L4] An injective resolution is an exact coaugmented complex of injectives ([[def-injective-resolution-in-an-abelian-category]]).
## Proof

**Proof technique:** direct.

1.1 By [L1], every object $A$ admits a monomorphism into an injective object. Therefore $\mathcal A$ has enough injectives in the sense of [L3]. [L1, L3]

1.2 Starting from the functorial embedding $\eta_A:A\rightarrowtail E(A)$ from [L1], let $C^0$ be its cokernel and iterate the same functorial construction on successive cokernels. Applying [L2] at each stage yields an exact coaugmented complex $$0\to A\to E(A)\to E(C^0)\to E(C^1)\to\cdots$$ of injectives. [L1, L2, construct]

2.1 By [L4], the complex from step 1.2 is an injective resolution of $A$, including when $A=0$. Because the embedding functor in [L1] is functorial, no additional arbitrary sequence of choices is introduced. [L1, L4, step 1.2] ∎
