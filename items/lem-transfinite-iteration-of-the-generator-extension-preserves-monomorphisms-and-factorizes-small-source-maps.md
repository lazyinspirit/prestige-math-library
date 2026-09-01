---
id: lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps
kind: lemma
title: "Transfinite iteration of the generator extension preserves monomorphisms and factorizes small-source maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-functorial-one-step-generator-extension, lem-the-one-step-generator-map-is-a-functorial-monomorphism, def-the-axioms-ab5-and-ab5-star, thm-a-locally-small-abelian-category-with-a-generator-is-well-powered]
proof_strategy: direct
verification:
  audited: 2026-09-01
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

Assume the Axiom of Choice. In a locally small Grothendieck category, starting
from an object $M_0=M$, define a transfinite sequence by
$M_{\alpha+1}=\mathbf M(M_\alpha)$ and, at limit ordinals $\lambda$, by
$M_\lambda=\operatorname*{colim}_{\alpha<\lambda}M_\alpha$. Then every
transition map $M_\alpha\to M_\beta$ is monic. Let $\kappa$ bound the
cardinalities of the sets of subobjects of all subobjects $N\subseteq U$. If
$\lambda$ has cofinality greater than $\kappa$, then every map
$N\to M_\lambda$ with $N\subseteq U$ factors through some earlier stage
$M_\alpha$.
## Facts & Assumptions

**Given:** The Axiom of Choice, a locally small Grothendieck category with
generator $U$, and the transfinite sequence defined from the one-step generator
extension functor.

[L1] The successor-stage maps $M_\alpha\to M_{\alpha+1}$ are monic
([[lem-the-one-step-generator-map-is-a-functorial-monomorphism]]).

[L2] In a Grothendieck category, AB5 governs exactness under filtered colimits ([[def-the-axioms-ab5-and-ab5-star]]).

[L3] In a locally small abelian category with a generator, each object has a set of subobjects ([[thm-a-locally-small-abelian-category-with-a-generator-is-well-powered]]).
## Proof

**Proof technique:** direct.

1.1 For every successor ordinal, the transition map $M_\alpha\to M_{\alpha+1}$ is monic by [L1]. By transfinite induction, any transition map whose target is a successor stage is monic. [L1, construct]

2.1 Let $\lambda$ be a limit ordinal and fix $\alpha<\lambda$. For $\alpha\le\beta<\lambda$, the short exact sequences $$0\to M_\alpha\to M_\beta\to\operatorname{coker}(M_\alpha\to M_\beta)\to0$$ form a filtered system. Exactness of filtered colimits under [L2] makes the colimit sequence begin $$0\to M_\alpha\to M_\lambda,$$ so the canonical map $M_\alpha\to M_\lambda$ is monic. Together with step 1.1, transfinite induction now shows that every transition map in the tower is monic. [L2, step 1.1, induction]

3.1 By [L3], the subobjects $N\subseteq U$ form a set and each such $N$ has a set of subobjects. Using Choice, take a cardinal $\kappa$ bounding all their cardinalities. Fix $f:N\to M_\lambda$ with $N\subseteq U$, and regard each $M_\alpha$ as a subobject of $M_\lambda$ by step 2.1. The preimages $N_\alpha=f^{-1}(M_\alpha)$ form an increasing family of subobjects of $N$, and [L2] gives $$\bigvee_{\alpha<\lambda}N_\alpha=f^{-1}\!\left(\bigvee_{\alpha<\lambda}M_\alpha\right)=N.$$ Choose a set $S\subseteq\lambda$ of at most $\kappa$ indices representing all distinct $N_\alpha$. Since $\operatorname{cf}(\lambda)>\kappa$, the set $S$ is bounded by some $\gamma<\lambda$. Then $N_\gamma$ contains every $N_\alpha$, so the displayed join gives $N_\gamma=N$. Equivalently, $f$ factors through $M_\gamma$. [L2, L3, step 2.1, given, choose] ∎
