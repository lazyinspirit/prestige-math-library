---
id: thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups
kind: theorem
title: "The hom-bifunctor of a preadditive category takes values in abelian groups"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preadditive-category, def-hom-functors-and-hom-bifunctor, thm-hom-assignment-is-a-bifunctor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

If $\mathcal C$ is preadditive, then each hom-set $\mathcal C(A,B)$ is an
abelian group, the covariant and contravariant hom-functors take values in
$\mathbf{Ab}$, and the hom-bifunctor lifts from $\mathbf{Set}$ to
$\mathbf{Ab}$.

## Facts & Assumptions

**Given:** A preadditive category $\mathcal C$ and objects $A,B$.

[L1] The hom-assignment is a bifunctor to $\mathbf{Set}$
([[thm-hom-assignment-is-a-bifunctor]]).

[L2] The covariant, contravariant, and bifunctorial hom-assignments have the
displayed actions on morphisms ([[def-hom-functors-and-hom-bifunctor]]).

[L3] In a preadditive category, hom-sets are abelian groups and composition is
bilinear ([[def-preadditive-category]]).

## Proof

**Proof technique:** direct.

1.1 The first clause is immediate from [L3]: each $\mathcal C(A,B)$ is already an abelian group. [L3]

1.2 If $u:B\to B'$, then the map $u_*:\mathcal C(A,B)\to\mathcal C(A,B')$ of [L2] is a group homomorphism because $u_*(f+g)=u(f+g)=uf+ug=u_*(f)+u_*(g)$ by bilinearity in [L3]. The same calculation shows that precomposition $h^*:\mathcal C(B',A)\to\mathcal C(B,A)$ is a group homomorphism. [L2, L3]

2.1 Step 1.2 shows that the one-variable hom-functors actually land in $\mathbf{Ab}$, and [L1] then lifts the whole hom-bifunctor to $\mathbf{Ab}$ because its action in each variable is additive. [L1, step 1.1, step 1.2] ∎
