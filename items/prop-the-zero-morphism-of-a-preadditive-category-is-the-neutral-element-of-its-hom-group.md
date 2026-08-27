---
id: prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group
kind: proposition
title: "In a preadditive category with a zero object, the zero morphism is the neutral element of each hom-group"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preadditive-category, thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal, prop-zero-object-induces-zero-morphisms]
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

Let $\mathcal C$ be a preadditive category with a zero object $0$. For any
objects $A,B$, the published zero morphism $A\to0\to B$ is the additive
identity of the abelian group $\mathcal C(A,B)$.

## Facts & Assumptions

**Given:** A zero object $0$ in a preadditive category $\mathcal C$ and objects
$A,B$.

[L1] A zero object supplies a unique compatible system of zero morphisms
([[prop-zero-object-induces-zero-morphisms]]).

[L2] In a preadditive category, an initial object is terminal and conversely
([[thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal]]).

[L3] Every hom-set in a preadditive category is an abelian group and
composition is bilinear ([[def-preadditive-category]]).

## Proof

**Proof technique:** direct.

1.1 Let $u:A\to0$ and $v:0\to B$ be the unique arrows from [L1]. Because $0$ is both initial and terminal by [L2], the endomorphism group $\mathcal C(0,0)$ has only one element, so $1_0=0_{0,0}$. [L1, L2, L3]

2.1 The published zero morphism is $vu$. Using step 1.1, $vu=v1_0u=v0_{0,0}u$. Bilinearity in [L3] says composing with the zero element of $\mathcal C(0,0)$ gives the zero element of $\mathcal C(A,B)$, so $vu=0_{A,B}$. [L3, step 1.1]

3.1 Therefore the zero morphism coming from the zero object is exactly the neutral element of the hom-group $\mathcal C(A,B)$. [L1, step 2.1] ∎
