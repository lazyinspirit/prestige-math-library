---
title: The diagonal of a finite subintegral map is a cdh cover
status: draft
research_item: lem-author-60d95bfb692a-subintegral-diagonal-cover
dependency_level: 9
---

PDF p. 5: HK18 Theorem 1.4

## Prerequisites

- [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)
- [lem-author-60d95bfb692a-finite-subintegral-cdh-cover](item-lem-author-60d95bfb692a-finite-subintegral-cdh-cover)

## Statement
For a finite subintegral morphism $p:T\to X$ of separated finite-type schemes over a field, its diagonal $\Delta:T\to T\times_X T$ is a finite subintegral morphism and a cdh covering singleton. The diagonal is the unique map whose composites with both projections are the identity of $T$.

## Facts & Assumptions

**Given:** Such a morphism $p$.

**Goal:** Prove the assertion about $\Delta$.

[F1] A subintegral morphism is a universal homeomorphism and induces residue-field isomorphisms. [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)

[F2] A finite morphism is separated, so its diagonal is a closed immersion; a closed immersion is finite and induces isomorphisms on residue fields at its image points.

[F3] A finite subintegral morphism in this category is a cdh covering singleton. [lem-author-60d95bfb692a-finite-subintegral-cdh-cover](item-lem-author-60d95bfb692a-finite-subintegral-cdh-cover)

## Proof

**Proof technique:** Use the base change of the universal homeomorphism.

1.1 The first projection $q:T\times_X T\to T$ is a base change of $p$ and is therefore a homeomorphism on underlying spaces by [F1]. Since $q\Delta=\operatorname{id}_T$, the diagonal is bijective on points. [F1, given]

2.1 By [F2], $\Delta$ is finite and induces residue-field isomorphisms at image points. Together with step 1.1, it is subintegral. [F2, step 1.1]

3.1 The fibre product is again separated and of finite type over the field. Apply [F3] to $\Delta$ to obtain the stated cdh cover. [F3, step 2.1] ∎
