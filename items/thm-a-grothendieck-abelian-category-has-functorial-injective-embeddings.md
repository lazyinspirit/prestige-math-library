---
id: thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings
kind: theorem
title: "Grothendieck abelian categories have functorial injective embeddings"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-grothendieck-category, lem-extension-from-subobjects-of-a-generator-detects-injectivity, def-functorial-one-step-generator-extension, lem-the-one-step-generator-map-is-a-functorial-monomorphism, lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps, lem-a-sufficiently-long-generator-extension-iteration-is-injective, def-axiom-of-choice, thm-every-infinite-cardinal-is-an-aleph, thm-regularity-of-the-alephs]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-29
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

**Given:** The Axiom of Choice and a locally small Grothendieck category $\mathcal A$.

[A1] AC supplies the cardinality of the set of subobjects of $U$, lets us fix representatives for those subobjects once, and is a hypothesis of the successor-aleph regularity result ([[def-axiom-of-choice]]).

[L1] A Grothendieck category is an abelian category with AB5 and a generator ([[def-grothendieck-category]]).

[L2] Injectivity is detected by extension from subobjects of the fixed generator ([[lem-extension-from-subobjects-of-a-generator-detects-injectivity]]).

[L3] The one-step generator extension is a functor ([[def-functorial-one-step-generator-extension]]).

[L4] Its structure maps are functorial monomorphisms ([[lem-the-one-step-generator-map-is-a-functorial-monomorphism]]).

[L5] Transfinite iteration preserves monomorphisms and factorizes maps from generator-subobjects at a sufficiently large limit stage ([[lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps]]).

[L6] A sufficiently long iteration is injective ([[lem-a-sufficiently-long-generator-extension-iteration-is-injective]]).

[L7] Under AC, every successor aleph is regular ([[thm-regularity-of-the-alephs]]).

[L8] Every infinite cardinal is an aleph ([[thm-every-infinite-cardinal-is-an-aleph]]).
## Proof

**Proof technique:** direct.

1.1 By [L1], fix a generator $U$ and, using [A1], fix representatives of its subobjects once for the functor [L3]. The set of these subobjects has a cardinality $\kappa$ under [A1]; composition with $N\rightarrowtail U$ bounds the number of subobjects of every $N\subseteq U$ by $\kappa$. Put $\nu=\max(\kappa,\aleph_0)$; by [L8], write $\nu=\aleph_\alpha$, and set $\lambda=\aleph_{\alpha+1}$. The successor aleph exists and [A1, L7] give $\operatorname{cf}(\lambda)=\lambda>\kappa$. This choice of $\lambda$ depends on $U$, not on $M$. [L1, L7, L8, A1, construct]

2.1 For any object $M$, iterate the fixed functor [L3] to the common ordinal $\lambda$ from step 1.1. By [L4, L5], every transition map is monic, so $M\to M_\lambda$ is monic. Since $\lambda$ is a limit ordinal and its cofinality exceeds $\kappa$, [L6] makes $M_\lambda$ injective. The same fixed representative set and ordinal work for every $M$; successor-stage functoriality and the universal property of limit-stage colimits therefore make $M\mapsto M_\lambda$ a functor and $M\to M_\lambda$ natural. [L3, L4, L5, L6, step 1.1, construct]

3.1 Writing $E(M):=M_\lambda$, the maps $\eta_M:M\to E(M)$ give functorial injective embeddings. The detecting lemma [L2] is the reason the transfinite construction closes at stage $\lambda$. [L2, step 2.1] ∎
