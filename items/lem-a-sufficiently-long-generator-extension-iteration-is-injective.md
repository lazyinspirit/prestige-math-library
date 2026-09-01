---
id: lem-a-sufficiently-long-generator-extension-iteration-is-injective
kind: lemma
title: "A sufficiently long generator-extension iteration is injective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-extension-from-subobjects-of-a-generator-detects-injectivity, lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps, lem-the-one-step-generator-map-is-a-functorial-monomorphism]
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

Assume the Axiom of Choice. Let $\mathcal A$ be a locally small Grothendieck
category with generator $U$, and let $(M_\alpha)$ be the transfinite iteration
of the one-step generator extension functor starting at an object $M$. Let
$\kappa$ bound the cardinalities of the sets of subobjects of all subobjects
$N\subseteq U$. If $\lambda$ is a limit ordinal with
$\operatorname{cf}(\lambda)>\kappa$, then $M_\lambda$ is injective.
## Facts & Assumptions

**Given:** The Axiom of Choice, the transfinite tower $(M_\alpha)$ in a locally
small Grothendieck category with generator $U$, the bound $\kappa$ from [L2],
and a limit ordinal $\lambda$ with $\operatorname{cf}(\lambda)>\kappa$.

[L1] Extension from subobjects of the fixed generator detects injectivity ([[lem-extension-from-subobjects-of-a-generator-detects-injectivity]]).

[L2] If $\operatorname{cf}(\lambda)>\kappa$, every map from a subobject of the
generator to $M_\lambda$ factors through an earlier stage, and all transition
maps are monic
([[lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps]]).

[L3] Every map from a subobject of the generator into one stage extends across the generator at the next stage ([[lem-the-one-step-generator-map-is-a-functorial-monomorphism]]).
## Proof

**Proof technique:** direct.

1.1 Let $f:N\to M_\lambda$ with $N\subseteq U$. By [L2], write $f=j_{\alpha,\lambda}g$ for some $\alpha<\lambda$ and $g:N\to M_\alpha$. Since $\lambda$ is a limit ordinal, $\alpha+1<\lambda$. By [L3], there is $h:U\to M_{\alpha+1}$ whose restriction to $N$ is $\eta_{M_\alpha}g$. Compatibility of the transition maps gives $$j_{\alpha+1,\lambda}h|_N=j_{\alpha+1,\lambda}\eta_{M_\alpha}g=j_{\alpha,\lambda}g=f,$$ so $j_{\alpha+1,\lambda}h$ extends $f$ across $N\subseteq U$. [L2, L3, given, construct]

2.1 Thus every map from every subobject of $U$ extends to $U$. By [L1], this makes $M_\lambda$ injective. [L1, step 1.1] ∎
