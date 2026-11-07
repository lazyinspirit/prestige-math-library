---
dependency_level: 0
id: lem-proper-closed-scheme-in-affine-bundle-is-finite-over-base
kind: lemma
title: Proper closed schemes in affine bundles are finite over the base
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - cor-projective-cohomology-finite-dimensional-field
  - lem-proper-source-to-separated-target-proper
  - lem-proper-stable-base-change
  - def-quasi-finite-morphism-schemes
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
  - thm-proper-quasi-finite-is-finite
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §2(1–2), printed pp. 137–138; proper-affine-fibre reconstruction"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be a field, let $C$ be a separated finite-type
$k$-scheme, and let $G\to C$ be an affine-space bundle, locally isomorphic
to $\mathbb A^n_C$ for some finite $n\ge0$. If $Z\subseteq G$ is a
closed subscheme proper over $k$, then $Z\to C$ is finite. Translation
torsors are included, and $Z$ and its fibres may be nonreduced or empty.
Neither smoothness nor perfectness is required.

## Facts & Assumptions

**Given:** AC and the schemes, affine-space bundle and proper closed
subscheme of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] A map from a proper $k$-scheme to a separated $k$-scheme is proper;
properness is stable under arbitrary base change.
[[lem-proper-source-to-separated-target-proper]]
[[lem-proper-stable-base-change]]

[F2] The cohomology of a coherent module on a proper scheme over a field
is finite-dimensional, in particular in degree zero.
[[cor-projective-cohomology-finite-dimensional-field]]

[F3] A finite-type map is quasi-finite when all its local fibre algebras
are finite-dimensional over the target residue field.
[[def-quasi-finite-morphism-schemes]]
[[def-quasi-finite-at-a-prime-for-finite-type-algebras]]

[F4] Every proper quasi-finite morphism is finite.
[[thm-proper-quasi-finite-is-finite]]

## Axiom use

AC is inherited through [F1], [F2] and [F4]. The finite-dimensional
localization calculation below introduces no further choice principle.

## Proof

**Proof technique:** direct; a fibre is both affine and proper, so its
coordinate algebra and every local fibre algebra have finite dimension.

1.1 By [F1], the map $Z\to C$ is proper, hence of finite type. For every $c\in C$, its fibre $Z_c$ is proper over $\kappa(c)$ by base change. It is a closed subscheme of the affine space $G_c$, so it is affine. Its structure sheaf is coherent, since a scheme of finite type over a field is Noetherian. Thus [F2] gives that its coordinate algebra $H_c=\Gamma(Z_c,\mathcal O_{Z_c})$ has finite dimension over $\kappa(c)$. This argument retains nilpotents and includes the zero algebra for an empty fibre. [A1, F1, F2, given]

1.2 For a finite-dimensional algebra $H$ over a field and any multiplicative subset $S$, its localization $S^{-1}H$ is finite-dimensional. Indeed for each $u\in S$, the descending chain of vector subspaces $(u)\supseteq(u^2)\supseteq\cdots$ stabilizes. Hence $u^N=u^{N+1}b$ for some $N\ge1$ and $b\in H$. In the localization, where $u$ is invertible, this gives $b=u^{-1}$. Consequently every denominator inverse is in the image of $H\to S^{-1}H$, so this map is surjective and the localized vector space has dimension at most that of $H$. The zero localization causes no exception. [given, algebra]

2.1 Each local fibre algebra of $Z\to C$ is a localization of $H_c$, so steps 1.1–1.2 make it finite-dimensional over $\kappa(c)$. By [F3] the already finite-type map is quasi-finite. It is proper by step 1.1, so [F4] makes it finite, proving the Statement. For $n=0$ this includes proper closed subschemes of $C$; no positive-rank assumption was used. [F3, F4, given, step 1.1, step 1.2] ∎
