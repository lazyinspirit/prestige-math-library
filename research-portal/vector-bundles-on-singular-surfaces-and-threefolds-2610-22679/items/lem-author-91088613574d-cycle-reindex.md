---
id: lem-author-91088613574d-cycle-reindex
kind: lemma
title: Cycle-complex degree translation
status: published
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
  - lem-author-91088613574d-chain-cochain
  - lem-author-91088613574d-even-shift
  - math:def-field
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-axiom-of-choice
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
  lem-author-91088613574d-chain-cochain: mathematical-premise
  lem-author-91088613574d-even-shift: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
formulation_deps:
  - def-bloch-higher-cycle-complex
  - lem-author-91088613574d-chain-cochain
  - lem-author-91088613574d-even-shift
  - math:def-field
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-axiom-of-choice
argument_deps:
  - def-bloch-higher-cycle-complex
  - lem-author-91088613574d-chain-cochain
  - lem-author-91088613574d-even-shift
  - math:def-field
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:thm-abelian-groups-form-an-abelian-category
  - math:def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
---

## Statement
Assume the Axiom of Choice, retaining the foundational premise of the specified Bloch cycle construction.

Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $j$ a nonnegative integer. Regard Bloch's homological cycle complex $z^j(X,\bullet)$ as a cochain complex by placing its degree-$n$ group in cochain degree $-n$. Then
$$H^i(z^j(X,\bullet)[-2j])\cong\mathrm{CH}^j(X,2j-i)$$
for every integer $i$, where the right side is higher Chow homology and is zero in negative homological degrees.

## Facts & Assumptions
**Given:** $k,X,j,i$ as stated.

**Goal:** Translate the shift into higher Chow indexing.

[F1] Bloch's complex and higher Chow groups are the specified chain complex and its homology; the complex is zero in negative degrees. [[def-bloch-higher-cycle-complex]]

[F2] Chain-to-cochain reindexing identifies degree-$q$ cohomology with degree-$(-q)$ homology. [[lem-author-91088613574d-chain-cochain]]

[F3] The category of abelian groups is abelian, with the usual kernels and quotient cokernels. In this category the even shift changes cohomological degree $i$ to $i-2j$, using $A[m]^q=A^{q+m}$ and $d_{A[m]}^q=(-1)^m d_A^{q+m}$. [[math:thm-abelian-groups-form-an-abelian-category]], [[lem-author-91088613574d-even-shift]]

[F4] The field, scheme-over-base, finite-type and smoothness hypotheses have the meanings of [[math:def-field]], [[math:def-scheme-over-base]], [[math:def-locally-finite-type-and-finite-type-morphism]] and [[math:def-smooth-morphism-schemes]], respectively; finite type and smoothness concern the structure morphism of $X$ over $k$.

[A1] The specified Bloch complex and its admissible face construction are used under their stated Axiom of Choice. This premise is inherited from that construction; the subsequent calculation does not assert that Choice is necessary for its formal algebraic conclusion. [[math:def-axiom-of-choice]]

## Proof
1.1 By [F1] and [F2], the reindexed cycle complex is a cochain complex of abelian groups. Thus [F3] applies, and degree-$i$ cohomology of the shifted complex is degree-$(i-2j)$ cohomology of the reindexed cycle complex. [F1, F2, F3, given]

2.1 By [F2] this is homology in degree $2j-i$, which is the higher Chow group by [F1]. If that degree is negative it is zero by the same definition. [F1, F2, step 1.1] ∎
