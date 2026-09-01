---
id: thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings
kind: theorem
title: "Grothendieck abelian categories have functorial injective embeddings"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-grothendieck-category, lem-extension-from-subobjects-of-a-generator-detects-injectivity, def-functorial-one-step-generator-extension, lem-the-one-step-generator-map-is-a-functorial-monomorphism, lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps, lem-a-sufficiently-long-generator-extension-iteration-is-injective]
landmark: true
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

Every locally small Grothendieck abelian category admits a functorial monomorphism $$\eta_M:M\rightarrowtail E(M)$$ from each object into an injective object.
## Facts & Assumptions

**Given:** A locally small Grothendieck category $\mathcal A$.

[L1] A Grothendieck category is an abelian category with AB5 and a generator ([[def-grothendieck-category]]).

[L2] Injectivity is detected by extension from subobjects of the fixed generator ([[lem-extension-from-subobjects-of-a-generator-detects-injectivity]]).

[L3] The one-step generator extension is a functor ([[def-functorial-one-step-generator-extension]]).

[L4] Its structure maps are functorial monomorphisms ([[lem-the-one-step-generator-map-is-a-functorial-monomorphism]]).

[L5] Transfinite iteration preserves monomorphisms and factorizes maps from generator-subobjects at a sufficiently large limit stage ([[lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps]]).

[L6] A sufficiently long iteration is injective ([[lem-a-sufficiently-long-generator-extension-iteration-is-injective]]).
## Proof

**Proof technique:** direct.

1.1 By [L1], fix a generator $U$. For any object $M$, iterate the functor [L3] transfinitely: $$M=M_0\to M_1\to M_2\to\cdots.$$ By [L4] and [L5], every transition map is monic, so the composite $M\to M_\lambda$ is a monomorphism for every limit stage $\lambda$. [L1, L3, L4, L5, construct]

2.1 Choose a limit stage $\lambda$ as in [L5]. Then [L6] makes $M_\lambda$ injective. Because [L3] is functorial at successor stages and colimits preserve that functoriality at limit stages, the assignment $M\mapsto M_\lambda$ is a functor, and the composite $M\to M_\lambda$ is natural. [L5, L6, step 1.1, choose]

3.1 Writing $E(M):=M_\lambda$, the maps $\eta_M:M\to E(M)$ give functorial injective embeddings. The detecting lemma [L2] is the reason the transfinite construction closes at stage $\lambda$. [L2, step 2.1] ∎
