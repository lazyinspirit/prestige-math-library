---
id: fs-a-preadditive-category-with-a-zero-object-has-binary-biproducts
kind: false-statement
title: "FALSE: a preadditive category with a zero object must have binary biproducts"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preadditive-category, thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal]
justified_by: []
aliases: []
landmark: false
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
    - title: "Peter Freyd, Abelian Categories, Exercise 2A"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-20
---

## Statement

**False claim:** every preadditive category with a zero object has binary
biproducts.

## Facts & Assumptions

**Given:** The full subcategory $\mathcal C$ of $\mathbf{Ab}$ on the two
objects $0$ and $\mathbb Z$.

[L1] A preadditive category has abelian-group hom-sets
([[def-preadditive-category]]).

[L2] In a preadditive category, initial and terminal objects coincide
([[thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal]]).

## Refutation

**Proof technique:** direct.

1.1 The subcategory $\mathcal C$ is preadditive because each of its hom-sets is either $0$ or $\mathbb Z$, with composition inherited from $\mathbf{Ab}$. The object $0$ is both initial and terminal, so $\mathcal C$ has a zero object by [L2]. [L1, L2]

2.1 If $\mathbb Z$ had a product with itself inside $\mathcal C$, that product would have to be one of the existing objects $0$ or $\mathbb Z$. But $\mathcal C(\mathbb Z,0)=0$ and $\mathcal C(\mathbb Z,\mathbb Z)=\mathbb Z$, whereas the universal property of a product $\mathbb Z\times\mathbb Z$ would require $\mathcal C(\mathbb Z,\mathbb Z\times\mathbb Z)\cong\mathbb Z\times\mathbb Z$. Neither $0$ nor $\mathbb Z$ has that hom-set. [step 1.1]

3.1 So $\mathcal C$ is preadditive with a zero object and still lacks the binary product of $\mathbb Z$ with itself, hence lacks a binary biproduct. [step 2.1] ∎
