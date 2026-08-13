---
id: ex-equalizer-of-group-homomorphisms
kind: example
title: "The equalizer of two group homomorphisms is their agreement subgroup"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equalizers-and-coequalizers, prop-groups-and-homomorphisms-form-category-grp, def-group-homomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: subgroup-and-factorization
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Example 3.1.18"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Example

For group homomorphisms $f,g:G\rightrightarrows H$, their equalizer in
$\mathbf{Grp}$ is the inclusion
$E=\{x\in G:f(x)=g(x)\}\hookrightarrow G$.

## Facts & Assumptions

**Given:** The parallel group homomorphisms $f,g$.

[F1] An equalizer is an equalizing arrow through which every other equalizing
arrow factors uniquely ([[def-equalizers-and-coequalizers]]).

[F2] Groups and homomorphisms form $\mathbf{Grp}$, and homomorphisms preserve
products, identities, and inverses
([[prop-groups-and-homomorphisms-form-category-grp]],
[[def-group-homomorphism]]).

## Verification

**Proof technique:** subgroup and factorization.

1.1 Since $f(1)=g(1)=1$, the identity lies in $E$. If $x,y\in E$, then $f(xy)=f(x)f(y)=g(x)g(y)=g(xy)$, and similarly $f(x^{-1})=g(x^{-1})$. Thus $E$ is a subgroup and its inclusion is a homomorphism. [F2]

2.1 The inclusion equalizes $f,g$. If $h:K\to G$ satisfies $fh=gh$, then $h(K)\subseteq E$, so the unique set-theoretic corestriction $\bar h:K\to E$ is a homomorphism and the inclusion composed with $\bar h$ is $h$. [F2, step 1.1]

3.1 Injectivity of the inclusion makes this factor unique. By [F1], it is the equalizer. [F1, step 2.1] ∎
