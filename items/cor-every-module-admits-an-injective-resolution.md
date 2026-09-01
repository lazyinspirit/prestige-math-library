---
id: cor-every-module-admits-an-injective-resolution
kind: corollary
title: "Every module admits an injective resolution"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-module-categories-are-grothendieck-categories, thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings, lem-one-step-extension-of-a-partial-injective-resolution, def-injective-resolution-in-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-09-01
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

Assume the Axiom of Choice.

Every left module over a unital ring admits an injective resolution.
## Facts & Assumptions

**Given:** A unital ring $R$ and a left $R$-module $M$.

[L1] Module categories are Grothendieck categories ([[thm-module-categories-are-grothendieck-categories]]).

[L2] In a Grothendieck category, every object admits a functorial monomorphism into an injective object ([[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]]).

[L3] A chosen injective embedding of the current cokernel extends a partial coaugmented resolution by one exact step ([[lem-one-step-extension-of-a-partial-injective-resolution]]).

[L4] An injective resolution is an exact coaugmented complex of injectives ([[def-injective-resolution-in-an-abelian-category]]).
## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], every left $R$-module $X$ admits a functorial monomorphism $\eta_X:X\rightarrowtail E(X)$ into an injective module. Starting from $M$, set $I^0:=E(M)$ and let $C^0$ be the cokernel of $\eta_M$; recursively set $I^{n+1}:=E(C^n)$ and let $C^{n+1}$ be the cokernel of $C^n\rightarrowtail I^{n+1}$. [L1, L2, construct]

2.1 Applying [L3] at each stage of the recursion in step 1.1 yields an exact coaugmented complex $$0\to M\to I^0\to I^1\to I^2\to\cdots$$ whose terms are injective. [L2, L3, step 1.1, construct]

3.1 By [L4], the complex from step 2.1 is an injective resolution of $M$, including the case $M=0$. [L4, step 2.1] ∎
