---
id: ex-gl2-generic-block-versus-full-categorical-llc
kind: example
title: "GL₂ generic-block result versus full categorical local Langlands"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-arithmetic-langlands-parameter-stack
  - def-generic-bernstein-direct-factor
  - thm-helm-solleveld-xu-generic-categorical-llc-fully-faithful-embedding
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David Helm, Maarten Solleveld, and Yujie Xu, A Generic Categorical Local Langlands Correspondence for Quasi-split Reductive Groups, Theorems 3.1 and 7.3"
      url: "https://arxiv.org/pdf/2606.10149v2"
---

## Example

For $G=\mathrm{GL}_2/E$, the generic categorical result supplies a fully
faithful functor from the generic direct factor
$\operatorname{Rep}(G(E))^{\mathrm{gen}}$ to
$\operatorname{IndCoh}(X_G^L)$. This conclusion does not imply that the full
representation category $\operatorname{Rep}(G(E))$ is equivalent to
$\operatorname{IndCoh}(X_G^L)$. A finite semisimple model makes the logical
gap explicit: the inclusion of one direct factor can be an equivalence onto
the target even though the full source category has an additional factor.

## Example references

[[def-arithmetic-langlands-parameter-stack]]

[[def-generic-bernstein-direct-factor]]

[[thm-helm-solleveld-xu-generic-categorical-llc-fully-faithful-embedding]]

## Facts & Assumptions

**Given:** Let $k=\mathbb C$ and let $\mathcal V$ be the abelian category of finite-dimensional $k$-vector spaces. Let $\mathcal C=\mathcal V\times\mathcal V$, let $\mathcal C_1=\mathcal V\times\{0\}$ be its first direct factor, and let $\mathcal S=\mathcal V$.

[F1] [[def-generic-bernstein-direct-factor]]: a generic Bernstein direct factor is a full direct factor of the full representation category and need not be the entire category.

[F2] [[thm-helm-solleveld-xu-generic-categorical-llc-fully-faithful-embedding]]: the theorem's conclusion is a fully faithful categorical correspondence on the generic direct factor.

## Verification

1.1 The first-coordinate functor $\mathcal C_1\to\mathcal S$ is an equivalence: it is bijective on objects up to the canonical identification $(V,0)\mapsto V$ and induces bijections on all morphism spaces. Hence it is fully faithful and essentially surjective. [given, construct]

2.1 The category $\mathcal C$ has two nonisomorphic simple objects, $(k,0)$ and $(0,k)$, whereas $\mathcal S$ has one simple isomorphism class, represented by $k$. An equivalence of abelian categories preserves simple objects and their isomorphism classes, so $\mathcal C$ is not equivalent to $\mathcal S$. Thus a fully faithful equivalence on one direct factor does not imply an equivalence from the whole category. [given, step 1.1, algebra] ∎
