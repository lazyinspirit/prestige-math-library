---
id: thm-ideal-class-group-is-the-picard-group
kind: theorem
title: "The ideal class group is the Picard group of rank-one projectives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-invertible-ideals-and-rank-one-projective-modules, def-ideal-class-group-of-a-domain, thm-localisation-of-modules-is-exact, thm-local-criterion-for-zero-modules-and-maps, thm-unit-isomorphisms-for-module-tensor-products]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "The Stacks Project, Section 10.78: Finite projective modules"
      url: "https://stacks.math.columbia.edu/tag/00NV"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Dedekind domain. The ideal class group $\operatorname{Cl}(R)$ is canonically isomorphic to the Picard group of isomorphism classes of finite projective $R$-modules $P$ with $P\otimes_R\operatorname{Frac}(R)\cong\operatorname{Frac}(R)$, where the group law on the Picard side is induced by tensor product.

## Facts & Assumptions

**Given:** A Dedekind domain $R$ with fraction field $K$.

[L1] Invertible fractional ideals are exactly the finite rank-one projective modules ([[thm-invertible-ideals-and-rank-one-projective-modules]]).

[F1] The ideal class group is the quotient of nonzero fractional ideals by principal fractional ideals ([[def-ideal-class-group-of-a-domain]]).

[L3] Assuming Choice, a module map is an isomorphism exactly when all maximal localisations are isomorphisms ([[thm-local-criterion-for-zero-modules-and-maps]]).

[L4] The regular module is a tensor unit ([[thm-unit-isomorphisms-for-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Send the class of an invertible fractional ideal $I$ to the isomorphism class of $I$ as an $R$-module. If $I=(a)J$ with $a\in K^\times$, then multiplication by $a$ is an $R$-module isomorphism $J\to I$. Therefore the map depends only on the class of $I$ in [F1]. [F1, L1, given, algebra]

2.1 For invertible fractional ideals $I$ and $J$, multiplication gives an $R$-bilinear map $I\times J\to IJ$, hence an $R$-linear map $\mu:I\otimes_RJ\to IJ$. After localising at a maximal ideal $\mathfrak m$, both $I_{\mathfrak m}$ and $J_{\mathfrak m}$ are principal by [L1], so $\mu_{\mathfrak m}$ identifies with the tensor-unit isomorphism $R_{\mathfrak m}\otimes_{R_{\mathfrak m}}R_{\mathfrak m}\cong R_{\mathfrak m}$ from [L4]. Thus every $\mu_{\mathfrak m}$ is an isomorphism, and [L3] makes $\mu$ an isomorphism. Hence the map of step 1.1 is a group homomorphism. [L1, L3, L4, given, algebra]

2.2 The map is surjective by [L1], because every rank-one projective module is represented by an invertible fractional ideal. If the class of $I$ maps to the free module class, choose an isomorphism $R\to I$ and let $x$ be the image of $1$. Then every element of $I$ is $rx$, so $I=xR$ is principal. Therefore the kernel is trivial. [F1, L1, step 1.1, choose]

3.1 Steps 1.1, 2.1, and 2.2 prove the asserted canonical isomorphism $\operatorname{Cl}(R)\cong\operatorname{Pic}(R)$. [step 1.1, step 2.1, step 2.2] ∎
