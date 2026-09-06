---
id: lem-finite-type-local-on-source-and-target
kind: lemma
title: "Finite type is affine-local on source and target"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-locally-finite-type-and-finite-type-morphism, def-quasi-compact-and-quasi-separated-scheme, cor-affine-scheme-quasi-compact, lem-intersection-affine-opens-covered-principal-opens, def-finite-type-and-module-finite-algebras]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 15.2"
      url: "https://stacks.math.columbia.edu/tag/01T2"
---
## Statement

Being locally of finite type is affine-local on both source and target. A
quasi-compact morphism locally of finite type is of finite type; equivalently,
over each affine target open it may be tested on a finite affine source cover.

## Facts & Assumptions

**Given:** A morphism $f:X\to S$ and affine source and target covers.

## Proof

**Proof technique:** direct.

1.1 Restricting a finite-type ring map to distinguished affine opens localizes the map and retains a finite generating set, so the condition survives affine refinement. [given]

2.1 Conversely, let $V=\operatorname{Spec}R$ be an affine target and $U=\operatorname{Spec}A\subseteq f^{-1}(V)$ an affine source open. If a source cover already verifies local finite type, quasi-compactness of $U$ and the principal-open refinement lemma give a finite distinguished cover $U=\bigcup_{i=1}^nD(a_i)$ for which every $A_{a_i}$ is a finite-type $R$-algebra. Choose finitely many localized generators on each member and clear their finitely many denominators. Since $(a_1,\ldots,a_n)=A$, the standard finite-localization criterion then shows that $A$ is finite type over $R$. This is the ring argument in Stacks Project, Tag `01T2`. [step 1.1, algebra]

3.1 Refining target overlaps by distinguished opens gives the same argument on the target side. Finally, quasi-compactness of $f$ supplies a finite affine source subcover over each affine target open, so locally finite type plus quasi-compactness is exactly finite type. [step 2.1] ∎
