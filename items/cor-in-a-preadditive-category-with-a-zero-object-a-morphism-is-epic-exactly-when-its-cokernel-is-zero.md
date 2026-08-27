---
id: cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero
kind: corollary
title: "In a preadditive category with a zero object, a morphism is epic exactly when its cokernel is zero"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero, thm-the-opposite-of-a-preadditive-category-is-preadditive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

Let $f:A\to B$ be a morphism in a preadditive category with a zero object, and
assume its cokernel exists. Then $f$ is epic if and only if its cokernel is
zero.

## Facts & Assumptions

**Given:** A morphism $f:A\to B$ in a preadditive category with a zero object.

[L1] In this setting, monicity is equivalent to zero kernel
([[thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero]]).

[L2] The opposite of a preadditive category is preadditive
([[thm-the-opposite-of-a-preadditive-category-is-preadditive]]).

## Proof

**Proof technique:** direct.

1.1 In the opposite category, $f$ becomes a morphism $f^{\mathrm{op}}:B\to A$. By [L2], that opposite category is again preadditive with a zero object, and epicity of $f$ is monicity of $f^{\mathrm{op}}$. [L2]

2.1 Applying [L1] to $f^{\mathrm{op}}$ says that $f^{\mathrm{op}}$ is monic exactly when its kernel is zero. But that kernel is precisely the cokernel of $f$ viewed back in the original category. [L1, step 1.1]

3.1 Therefore $f$ is epic exactly when its cokernel is zero. [step 2.1] ∎
