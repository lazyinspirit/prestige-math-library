---
id: lem-the-effacement-extension-is-independent-of-the-effacing-morphism
kind: lemma
title: "The effacement extension is independent of the effacing morphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-extend-a-degree-zero-transformation-through-one-dimension-shift, thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
pipeline_run: frontier-30
---

## Statement

In either case of
[[lem-extend-a-degree-zero-transformation-through-one-dimension-shift]], the
new component defined from a chosen effacement of $A$ is independent of which
effacing morphism is used.
## Facts & Assumptions

**Given:** Two chosen effacements of the same object $A$.

[L1] Item 19 defines the next-degree component from any chosen effacement and proves naturality for morphisms covered by morphisms between chosen effacement sequences ([[lem-extend-a-degree-zero-transformation-through-one-dimension-shift]]).

[L2] Finite coproducts of projectives are projective and finite products of injectives are injective ([[thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective]]).

## Proof

**Proof technique:** direct.

1.1 In the homological case, let $p_i:P_i\twoheadrightarrow A$ be two effacements of the relevant target value. Form the epimorphism $$p=(p_1,p_2):P_1\oplus P_2\twoheadrightarrow A.$$ By [L2], $P_1\oplus P_2$ is projective. Since $T_n$ is additive, the canonical biproduct identification gives $$T_n(P_1\oplus P_2)\cong T_n(P_1)\oplus T_n(P_2),$$ and under this identification the map $T_n(p)$ has components $T_n(p_1)$ and $T_n(p_2)$, both zero. Thus $T_n(p)=0$, so $p$ is again an admissible effacement. [L1, L2, given, construct]

2.1 The inclusions $\iota_i:P_i\to P_1\oplus P_2$ satisfy $p\,\iota_i=p_i$, so they give morphisms from each original effacement to the dominating effacement of step 1.1 over the identity of $A$. By the naturality part of [L1], the component defined from $p_i$ agrees with the one defined from $p$ for each $i$. Hence the components defined from $p_1$ and $p_2$ are equal. [L1, step 1.1, algebra]

3.1 The cohomological case is dual: if $e_i:A\rightarrowtail I_i$ are two effacements, then $$e=(e_1,e_2):A\rightarrowtail I_1\times I_2$$ is again an admissible effacement by [L2], and the projections $I_1\times I_2\to I_i$ compare it with each original choice. Applying [L1] as in step 2.1 shows that the resulting degree-$(n+1)$ component is independent of the chosen injective effacement. [L1, L2, given, algebra] ∎
