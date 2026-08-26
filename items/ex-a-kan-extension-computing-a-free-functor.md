---
id: ex-a-kan-extension-computing-a-free-functor
kind: example
title: "A Kan extension computing the free-group functor"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion, thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor, thm-adjoints-are-unique-up-to-unique-natural-isomorphism, thm-grp-is-complete-and-cocomplete, def-yoneda-embedding, prop-groups-and-homomorphisms-form-category-grp, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 6.5.11"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Let $\mathbf 1$ be the one-object category, so
$[\mathbf 1^{\mathrm{op}},\mathbf{Set}]\cong\mathbf{Set}$. Let
$y:\mathbf 1\to\mathbf{Set}$ be the Yoneda embedding. Choose a free group
$F(\{*\})$ on the one-element set $\{*\}$, and let
$F:\mathbf 1\to\mathbf{Grp}$ send the unique object to that group.

Then the left Kan extension $\operatorname{Lan}_yF:\mathbf{Set}\to\mathbf{Grp}$
is the free-group functor.

## Facts & Assumptions

**Given:** The one-object category $\mathbf 1$, the Yoneda embedding $y$, and the functor whose value is a chosen free group on $\{*\}$.

[L1] The free-cocompletion theorem makes $\operatorname{Lan}_yF$ left adjoint to $\mathbf{Grp}(F-,-)$ ([[thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion]]).

[L2] Choosing a free group on every set gives a free-group functor left adjoint to the underlying-set functor; at $\{*\}$ its adjunction bijection is $\mathbf{Grp}(F(\{*\}),G)\cong U(G)$ naturally in $G$ ([[thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[L3] Two left adjoints to the same functor are uniquely naturally isomorphic compatibly with their adjunction data ([[thm-adjoints-are-unique-up-to-unique-natural-isomorphism]]).

[F1] The presheaf category on $\mathbf 1$ is $\mathbf{Set}$ ([[def-yoneda-embedding]], [[prop-sets-and-functions-form-category-set]]).

[F2] Groups and group homomorphisms form the locally small category $\mathbf{Grp}$, and $\mathbf{Grp}$ has all small colimits ([[prop-groups-and-homomorphisms-form-category-grp]], [[thm-grp-is-complete-and-cocomplete]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], the functor $\operatorname{Lan}_yF$ has domain $\mathbf{Set}$, and [F2] verifies the locally small and cocomplete target hypotheses of [L1]. Hence [L1] makes it left adjoint to the functor $G\mapsto\mathbf{Grp}(F(\{*\}),G)$. [F1, F2, L1]

2.1 By [L2], the functor $G\mapsto\mathbf{Grp}(F(\{*\}),G)$ is naturally isomorphic to the underlying-set functor on groups. Therefore $\operatorname{Lan}_yF$ is a left adjoint to the underlying-set functor. [L2, step 1.1]

3.1 The published free-group functor is also a left adjoint to the underlying-set functor by [L2], so [L3] identifies $\operatorname{Lan}_yF$ with that free functor. [L2, L3, step 2.1] ∎
