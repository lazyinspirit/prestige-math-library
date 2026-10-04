---
id: cor-blowup-unique-up-to-unique-isomorphism
kind: corollary
title: "Uniqueness of the blowup"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - thm-blowup-universal-property
  - def-blowup-scheme-along-ideal
  - thm-pullback-center-ideal-invertible
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.5 (tag 0806), final-object universal property"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type with zero scheme $Z$. If $\pi'\colon Y\to X$ is an $X$-scheme such that $(\pi')^{-1}(Z)$ is an effective Cartier divisor and $Y$ carries the universal property of $\operatorname{Bl}_{\mathcal I}X$ (every $X$-scheme in which the inverse image of $Z$ is an effective Cartier divisor maps uniquely to $Y$ over $X$), then there is a unique $X$-isomorphism $Y\to\operatorname{Bl}_{\mathcal I}X$. In particular any two models of the blowup are uniquely isomorphic over $X$.

## Facts & Assumptions

**Given:** A quasi-coherent ideal sheaf $\mathcal I$ of finite type on $X$ with zero scheme $Z$, the blowup $\operatorname{Bl}_{\mathcal I}X$, and an $X$-scheme $\pi'\colon Y\to X$ whose inverse image of $Z$ is an effective Cartier divisor and which carries the same universal property.

[A1] **Choice.** The Axiom of Choice is assumed as inherited from the blowup and Proj constructions used by the cited items.

[F1] [[thm-blowup-universal-property]]: For every $X$-scheme $f\colon T\to X$ in which the inverse image of $Z$ is an effective Cartier divisor there is a unique $X$-morphism $T\to\operatorname{Bl}_{\mathcal I}X$; equivalently $\operatorname{Bl}_{\mathcal I}X$ is final among such $X$-schemes.

[F2] [[thm-pullback-center-ideal-invertible]]: The inverse image ideal $\mathcal I\mathcal O_{\operatorname{Bl}}$ is invertible and $E=V(\mathcal I\mathcal O_{\operatorname{Bl}})$ is an effective Cartier divisor on $\operatorname{Bl}_{\mathcal I}X$; in particular the blowup is itself an $X$-scheme in which the inverse image of $Z$ is an effective Cartier divisor.

[F3] [[def-blowup-scheme-along-ideal]]: The blowup is the relative Proj of the Rees algebra with its structural morphism to $X$. The identification of its exceptional subscheme with the inverse image of $Z$ used here is supplied by [F2].

## Proof

1.1 By [F2] the blowup $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ is an object of the category of $X$-schemes in which the inverse image of $Z$ is an effective Cartier divisor, and by hypothesis $Y$ is such an object as well. [F2, F3]

2.1 Applying the universal property of the blowup [F1] to the $X$-scheme $Y$ gives a unique $X$-morphism $u\colon Y\to\operatorname{Bl}_{\mathcal I}X$ with $\pi\circ u=\pi'$; applying the universal property carried by $Y$ to the $X$-scheme $\operatorname{Bl}_{\mathcal I}X$ gives a unique $X$-morphism $v\colon\operatorname{Bl}_{\mathcal I}X\to Y$ with $\pi'\circ v=\pi$. [F1, step 1.1]

3.1 The composite $v\circ u\colon Y\to Y$ is an $X$-morphism with $\pi'\circ(v\circ u)=\pi'$, and so is $\operatorname{id}_Y$; since by hypothesis there is at most one $X$-morphism from the admissible $X$-scheme $Y$ to $Y$, namely the map required by the universal property, we get $v\circ u=\operatorname{id}_Y$; symmetrically $u\circ v=\operatorname{id}_{\operatorname{Bl}_{\mathcal I}X}$ because $u\circ v$ and the identity are both $X$-morphisms from $\operatorname{Bl}_{\mathcal I}X$ to itself and [F1] gives a unique one. Hence $u$ is an $X$-isomorphism, and it is the unique one: any $X$-isomorphism $Y\to\operatorname{Bl}_{\mathcal I}X$ is an $X$-morphism between admissible objects and therefore equals $u$ by the uniqueness clause of [F1]; in particular any two models of the blowup are uniquely isomorphic over $X$. [F1, step 2.1] ∎
