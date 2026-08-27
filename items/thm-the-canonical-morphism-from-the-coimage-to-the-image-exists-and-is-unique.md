---
id: thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique
kind: theorem
title: "The canonical morphism from the coimage to the image exists and is unique"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-morphism-factors-uniquely-through-its-coimage, thm-a-morphism-factors-uniquely-through-its-image, cor-equalizers-are-monic-and-coequalizers-are-epic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gautam Tamme, Algebra II Lecture 9, §9.1"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf"
pipeline_run: frontier-21
---

## Statement

Let $f:A\to B$ be a morphism in a category with kernels and cokernels. Write
$q_f:A\to\operatorname{coim}(f)$ for the coimage projection and
$i_f:\operatorname{im}(f)\to B$ for the image inclusion. Then there exists a
unique morphism

$$\overline f:\operatorname{coim}(f)\to\operatorname{im}(f)$$

such that

$$i_f\circ\overline f\circ q_f=f.$$

## Facts & Assumptions

**Given:** A morphism $f:A\to B$, its coimage projection $q_f$, and its image
inclusion $i_f$.

[L1] The morphism $f$ factors uniquely through its coimage
([[thm-a-morphism-factors-uniquely-through-its-coimage]]).

[L2] The morphism $f$ factors uniquely through its image
([[thm-a-morphism-factors-uniquely-through-its-image]]).

[L3] Every coequalizer is epic
([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there is a unique morphism $\widetilde f:\operatorname{coim}(f)\to B$ with $\widetilde f q_f=f$. Let $c_f:B\to C_f$ be a cokernel of $f$. Then $c_f\widetilde f q_f=c_f f=0$, and [L3] makes $q_f$ epic, so $c_f\widetilde f=0$. Because $i_f:\operatorname{im}(f)\to B$ is a kernel of $c_f$, there is a unique map $\overline f:\operatorname{coim}(f)\to\operatorname{im}(f)$ with $i_f\overline f=\widetilde f$. [L1, L2, L3]

2.1 Composing the identity of step 1.1 with $q_f$ gives $i_f\overline f q_f=\widetilde f q_f=f$, so $\overline f$ has the required property. If another map $u:\operatorname{coim}(f)\to\operatorname{im}(f)$ also satisfies $i_f u q_f=f$, then $i_f u=\widetilde f$ by the epicity of $q_f$ from [L3], and the uniqueness of the kernel factorization in step 1.1 gives $u=\overline f$. [L1, L2, L3, step 1.1] ∎
