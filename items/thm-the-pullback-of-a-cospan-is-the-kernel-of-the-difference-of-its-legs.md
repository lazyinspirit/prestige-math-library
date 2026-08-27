---
id: thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs
kind: theorem
title: "A pullback is the kernel of the difference of the two legs, and dually for pushouts"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-abelian-category, thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation, thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference, thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.11"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

## Statement

Let $f:A\to C$ and $g:B\to C$ be morphisms in an abelian category. Then a
pullback of the cospan $A\xrightarrow{f}C\xleftarrow{g}B$ is a kernel of the
difference map

$$f\circ p_A-g\circ p_B:A\oplus B\to C,$$

where $p_A$ and $p_B$ are the biproduct projections. Dually, a pushout of
$B\xleftarrow{s}A\xrightarrow{t}C$ is a cokernel of
$i_B\circ s-i_C\circ t:A\to B\oplus C$.

## Facts & Assumptions

**Given:** An abelian category and a cospan $A\xrightarrow{f}C\xleftarrow{g}B$.

[L1] Abelian categories have finite limits and finite colimits
([[thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits]]).

[L2] On a biproduct the injections and projections satisfy the standard
identity-sum relations
([[thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation]]).

[L3] In a preadditive category, equalizers are kernels of differences
([[thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference]]).

[L4] An abelian category is additive and therefore preadditive
([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] there is a product of $A$ and $B$, and by [L4] that product is the biproduct $A\oplus B$. In the preadditive structure of [L4], a morphism $x:X\to A\oplus B$ satisfies $(f p_A-g p_B)x=0$ exactly when $fp_Ax=gp_Bx$. So by [L3], a kernel of $f p_A-g p_B$ is an equalizer of the parallel pair $f p_A,g p_B$. [L1, L3, L4]

2.1 Giving $x:X\to A\oplus B$ is the same as giving its two composites to $A$ and $B$, and the equality in step 1.1 is exactly the pullback compatibility condition. Therefore the equalizer in step 1.1 is a pullback of $f$ and $g$. [L2, step 1.1]

3.1 Reversing all arrows gives the pushout statement: in an abelian category a pushout is the cokernel of the corresponding difference map. [L1, L3, L4, step 2.1] ∎
